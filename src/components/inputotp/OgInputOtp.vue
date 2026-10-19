<template>
  <div :class="['og-inputotp', { 'og-inputotp--disabled': disabled }]">
    <input
      v-for="index in length"
      :key="index"
      ref="inputRefs"
      type="text"
      maxlength="1"
      :value="tokens[index - 1] || ''"
      :disabled="disabled"
      class="og-inputotp__input"
      @input="onInput($event, index - 1)"
      @keydown="onKeydown($event, index - 1)"
      @paste="onPaste"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

defineOptions({
  name: 'OgInputOtp',
});

export interface OgInputOtpProps {
  modelValue?: string;
  length?: number;
  integerOnly?: boolean;
  disabled?: boolean;
}

const props = withDefaults(defineProps<OgInputOtpProps>(), {
  modelValue: '',
  length: 4,
  integerOnly: false,
  disabled: false,
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
  (e: 'change', value: string): void;
}>();

const inputRefs = ref<HTMLInputElement[]>([]);

const tokens = computed(() => (props.modelValue || '').split(''));

const updateTokens = (newTokens: string[]) => {
  const str = newTokens.join('').substring(0, props.length);
  emit('update:modelValue', str);
  emit('change', str);
};

const onInput = (event: Event, idx: number) => {
  const target = event.target as HTMLInputElement;
  let val = target.value;
  if (props.integerOnly) {
    val = val.replace(/\D/g, '');
  }

  const current = [...tokens.value];
  current[idx] = val;
  updateTokens(current);

  if (val && idx < props.length - 1 && inputRefs.value[idx + 1]) {
    inputRefs.value[idx + 1].focus();
  }
};

const onKeydown = (event: KeyboardEvent, idx: number) => {
  if (event.key === 'Backspace') {
    if (!tokens.value[idx] && idx > 0 && inputRefs.value[idx - 1]) {
      inputRefs.value[idx - 1].focus();
    }
  }
};

const onPaste = (event: ClipboardEvent) => {
  event.preventDefault();
  if (props.disabled) return;
  const pasteData = event.clipboardData?.getData('text') || '';
  let cleaned = pasteData.trim();
  if (props.integerOnly) {
    cleaned = cleaned.replace(/\D/g, '');
  }
  if (cleaned) {
    const chars = cleaned.split('').slice(0, props.length);
    updateTokens(chars);
    const focusIdx = Math.min(chars.length, props.length - 1);
    inputRefs.value[focusIdx]?.focus();
  }
};
</script>

<style scoped>
.og-inputotp {
  display: inline-flex;
  align-items: center;
  gap: var(--og-spacing-sm);
}

.og-inputotp__input {
  width: 2.75rem;
  height: 3rem;
  text-align: center;
  font-family: var(--og-font-family);
  font-size: var(--og-font-size-xl);
  font-weight: var(--og-font-weight-bold);
  color: var(--og-text-primary);
  background-color: var(--og-color-white);
  border: 1px solid var(--og-border-color);
  border-radius: var(--og-radius-md);
  outline: none;
  transition: border-color var(--og-transition-fast), box-shadow var(--og-transition-fast);
}

.og-inputotp__input:focus {
  border-color: var(--og-border-color-focus);
  box-shadow: var(--og-focus-ring);
}

.og-inputotp--disabled .og-inputotp__input {
  background-color: var(--og-bg-muted);
  cursor: not-allowed;
  opacity: 0.6;
}
</style>
