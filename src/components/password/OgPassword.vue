<template>
  <div :class="['og-password', { 'og-password--invalid': invalid, 'og-password--disabled': disabled }]">
    <input
      :type="showPassword ? 'text' : 'password'"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      class="og-password__input"
      @input="onInput"
      @change="$emit('change', $event)"
    />
    <button
      v-if="toggleMask"
      type="button"
      class="og-password__toggle"
      aria-label="Toggle Password Visibility"
      @click="showPassword = !showPassword"
    >
      <slot name="hideicon" v-if="showPassword">👁</slot>
      <slot name="showicon" v-else>👁‍🗨</slot>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { OgSize } from '@/types';

defineOptions({
  name: 'OgPassword',
});

export interface OgPasswordProps {
  modelValue?: string;
  toggleMask?: boolean;
  placeholder?: string;
  disabled?: boolean;
  invalid?: boolean;
  size?: OgSize;
}

withDefaults(defineProps<OgPasswordProps>(), {
  modelValue: '',
  toggleMask: true,
  disabled: false,
  invalid: false,
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
  (e: 'change', event: Event): void;
}>();

const showPassword = ref(false);

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
};
</script>

<style scoped>
.og-password {
  display: inline-flex;
  align-items: center;
  position: relative;
  width: 14rem;
  border: 1px solid var(--og-border-color);
  border-radius: var(--og-radius-md);
  background-color: var(--og-color-white);
  transition: border-color var(--og-transition-fast), box-shadow var(--og-transition-fast);
}

.og-password:focus-within:not(.og-password--disabled) {
  border-color: var(--og-border-color-focus);
  box-shadow: var(--og-focus-ring);
}

.og-password__input {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  padding: var(--og-spacing-sm) var(--og-spacing-md);
  font-family: var(--og-font-family);
  font-size: var(--og-font-size-sm);
  color: var(--og-text-primary);
}

.og-password__toggle {
  border: none;
  background: transparent;
  padding: 0 var(--og-spacing-sm);
  cursor: pointer;
  color: var(--og-text-muted);
  font-size: 1rem;
}
.og-password__toggle:hover {
  color: var(--og-text-primary);
}

.og-password--invalid {
  border-color: var(--og-color-danger-text);
}

.og-password--disabled {
  background-color: var(--og-bg-muted);
  cursor: not-allowed;
  opacity: 0.6;
}
</style>
