<template>
  <div :class="containerClasses">
    <button
      v-if="showButtons && buttonLayout === 'horizontal'"
      type="button"
      tabindex="-1"
      :disabled="disabled || isMinReached"
      class="og-inputnumber__button og-inputnumber__button--decrement"
      @click="decrement"
    >
      <slot name="decrementbuttonicon">-</slot>
    </button>

    <div class="og-inputnumber__input-wrapper">
      <span v-if="prefix" class="og-inputnumber__prefix">{{ prefix }}</span>
      <input
        ref="inputRef"
        type="text"
        role="spinbutton"
        :value="displayValue"
        :disabled="disabled"
        :aria-valuenow="modelValue ?? undefined"
        :aria-valuemin="min"
        :aria-valuemax="max"
        :placeholder="placeholder"
        class="og-inputnumber__input"
        @input="onInput"
        @change="onChange"
        @focus="$emit('focus', $event)"
        @blur="onBlur"
        @keydown.up.prevent="increment"
        @keydown.down.prevent="decrement"
      />
      <span v-if="suffix" class="og-inputnumber__suffix">{{ suffix }}</span>
    </div>

    <div v-if="showButtons && buttonLayout === 'stacked'" class="og-inputnumber__stacked-buttons">
      <button
        type="button"
        tabindex="-1"
        :disabled="disabled || isMaxReached"
        class="og-inputnumber__button og-inputnumber__button--stacked-up"
        @click="increment"
      >
        ▲
      </button>
      <button
        type="button"
        tabindex="-1"
        :disabled="disabled || isMinReached"
        class="og-inputnumber__button og-inputnumber__button--stacked-down"
        @click="decrement"
      >
        ▼
      </button>
    </div>

    <button
      v-if="showButtons && buttonLayout === 'horizontal'"
      type="button"
      tabindex="-1"
      :disabled="disabled || isMaxReached"
      class="og-inputnumber__button og-inputnumber__button--increment"
      @click="increment"
    >
      <slot name="incrementbuttonicon">+</slot>
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import type { OgSize } from '@/types';

defineOptions({
  name: 'OgInputNumber',
});

export interface OgInputNumberProps {
  modelValue?: number | null;
  min?: number;
  max?: number;
  step?: number;
  showButtons?: boolean;
  buttonLayout?: 'stacked' | 'horizontal' | 'vertical';
  size?: OgSize;
  disabled?: boolean;
  invalid?: boolean;
  placeholder?: string;
  fluid?: boolean;
  prefix?: string;
  suffix?: string;
}

const props = withDefaults(defineProps<OgInputNumberProps>(), {
  modelValue: null,
  step: 1,
  showButtons: false,
  buttonLayout: 'stacked',
  disabled: false,
  invalid: false,
  fluid: false,
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: number | null): void;
  (e: 'change', event: Event): void;
  (e: 'focus', event: FocusEvent): void;
  (e: 'blur', event: FocusEvent): void;
}>();

const inputRef = ref<HTMLInputElement | null>(null);

const displayValue = computed(() => {
  if (props.modelValue === null || props.modelValue === undefined || isNaN(props.modelValue)) {
    return '';
  }
  return String(props.modelValue);
});

const isMinReached = computed(() => props.min !== undefined && props.modelValue !== null && props.modelValue <= props.min);
const isMaxReached = computed(() => props.max !== undefined && props.modelValue !== null && props.modelValue >= props.max);

const clampValue = (newValue: number | null): number | null => {
  if (newValue === null) return null;
  let clamped = newValue;
  if (props.min !== undefined && clamped < props.min) clamped = props.min;
  if (props.max !== undefined && clamped > props.max) clamped = props.max;
  return clamped;
};

const updateValue = (newValue: number | null) => {
  const clamped = clampValue(newValue);
  emit('update:modelValue', clamped);
  if (inputRef.value) {
    inputRef.value.value = clamped === null ? '' : String(clamped);
  }
};

const increment = () => {
  if (props.disabled) return;
  const current = props.modelValue ?? (props.min ?? 0);
  updateValue(current + props.step);
};

const decrement = () => {
  if (props.disabled) return;
  const current = props.modelValue ?? (props.max ?? 0);
  updateValue(current - props.step);
};

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const val = target.value.trim();
  if (val === '' || val === '-') {
    emit('update:modelValue', null);
    return;
  }
  const num = Number(val);
  if (!isNaN(num)) {
    if (props.max !== undefined && num > props.max) {
      target.value = String(props.max);
      updateValue(props.max);
    } else {
      updateValue(num);
    }
  }
};

const onBlur = (event: FocusEvent) => {
  const target = event.target as HTMLInputElement;
  const val = target.value.trim();
  if (val !== '') {
    const num = Number(val);
    if (!isNaN(num)) {
      const clamped = clampValue(num);
      target.value = clamped === null ? '' : String(clamped);
      emit('update:modelValue', clamped);
    }
  }
  emit('blur', event);
};

const onChange = (event: Event) => {
  emit('change', event);
};

watch(
  () => props.modelValue,
  (newVal) => {
    if (inputRef.value && document.activeElement !== inputRef.value) {
      inputRef.value.value = newVal === null || newVal === undefined || isNaN(newVal) ? '' : String(newVal);
    }
  }
);

const containerClasses = computed(() => [
  'og-inputnumber',
  props.size ? `og-inputnumber--${props.size}` : '',
  {
    'og-inputnumber--invalid': props.invalid,
    'og-inputnumber--fluid': props.fluid,
    'og-inputnumber--disabled': props.disabled,
    'og-inputnumber--buttons': props.showButtons,
    [`og-inputnumber--layout-${props.buttonLayout}`]: props.showButtons,
  },
]);
</script>

<style scoped>
.og-inputnumber {
  display: inline-flex;
  position: relative;
  align-items: center;
  border: 1px solid var(--og-border-color);
  border-radius: var(--og-radius-md);
  background-color: var(--og-color-white);
  transition: border-color var(--og-transition-fast), box-shadow var(--og-transition-fast);
}

.og-inputnumber:focus-within:not(.og-inputnumber--disabled) {
  border-color: var(--og-border-color-focus);
  box-shadow: var(--og-focus-ring);
}

.og-inputnumber__input-wrapper {
  display: flex;
  align-items: center;
  flex: 1;
  padding: var(--og-spacing-sm) var(--og-spacing-md);
}

.og-inputnumber__input {
  border: none;
  outline: none;
  background: transparent;
  width: 100%;
  font-family: var(--og-font-family);
  font-size: var(--og-font-size-sm);
  color: var(--og-text-primary);
}

.og-inputnumber__prefix,
.og-inputnumber__suffix {
  font-size: var(--og-font-size-sm);
  color: var(--og-text-muted);
  user-select: none;
}
.og-inputnumber__prefix {
  margin-right: var(--og-spacing-xs);
}
.og-inputnumber__suffix {
  margin-left: var(--og-spacing-xs);
}

.og-inputnumber__button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: var(--og-bg-muted);
  color: var(--og-text-primary);
  cursor: pointer;
  padding: 0 0.5rem;
  user-select: none;
  font-size: 0.75rem;
  transition: background-color var(--og-transition-fast);
}
.og-inputnumber__button:hover:not(:disabled) {
  background-color: var(--og-color-gray-200);
}
.og-inputnumber__button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.og-inputnumber__stacked-buttons {
  display: flex;
  flex-direction: column;
  border-left: 1px solid var(--og-border-color);
  height: 100%;
}
.og-inputnumber__button--stacked-up {
  border-top-right-radius: var(--og-radius-md);
  flex: 1;
}
.og-inputnumber__button--stacked-down {
  border-bottom-right-radius: var(--og-radius-md);
  border-top: 1px solid var(--og-border-color);
  flex: 1;
}

.og-inputnumber--fluid {
  width: 100%;
}

.og-inputnumber--invalid {
  border-color: var(--og-color-danger-text);
}

.og-inputnumber--disabled {
  background-color: var(--og-bg-muted);
  cursor: not-allowed;
  opacity: 0.7;
}
</style>
