<template>
  <input
    :type="type"
    :value="modelValue"
    :disabled="disabled"
    :placeholder="placeholder"
    :class="inputClasses"
    @input="onInput"
    @change="onChange"
    @focus="$emit('focus', $event)"
    @blur="$emit('blur', $event)"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { OgSize } from '@/types';

defineOptions({
  name: 'OgInputText',
});

export interface OgInputTextProps {
  modelValue?: string | number | null;
  type?: string;
  size?: OgSize;
  invalid?: boolean;
  variant?: 'outlined' | 'filled';
  fluid?: boolean;
  disabled?: boolean;
  placeholder?: string;
}

const props = withDefaults(defineProps<OgInputTextProps>(), {
  type: 'text',
  modelValue: '',
  variant: 'outlined',
  invalid: false,
  fluid: false,
  disabled: false,
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
  (e: 'change', event: Event): void;
  (e: 'focus', event: FocusEvent): void;
  (e: 'blur', event: FocusEvent): void;
}>();

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
};

const onChange = (event: Event) => {
  emit('change', event);
};

const inputClasses = computed(() => [
  'og-inputtext',
  props.size ? `og-inputtext--${props.size}` : '',
  props.variant ? `og-inputtext--${props.variant}` : '',
  {
    'og-inputtext--invalid': props.invalid,
    'og-inputtext--fluid': props.fluid,
    'og-inputtext--disabled': props.disabled,
  },
]);
</script>

<style scoped>
.og-inputtext {
  /* Scoped CSS Custom Properties */
  --og-input-bg: var(--og-color-white);
  --og-input-color: var(--og-text-primary);
  --og-input-placeholder-color: var(--og-text-muted);
  --og-input-border-color: var(--og-border-color);
  --og-input-border-radius: var(--og-radius-md);
  --og-input-padding-x: var(--og-spacing-md);
  --og-input-padding-y: var(--og-spacing-sm);
  --og-input-font-size: var(--og-font-size-sm);
  --og-input-transition: border-color var(--og-transition-fast), box-shadow var(--og-transition-fast);

  font-family: var(--og-font-family);
  font-size: var(--og-input-font-size);
  color: var(--og-input-color);
  background-color: var(--og-input-bg);
  border: 1px solid var(--og-input-border-color);
  border-radius: var(--og-input-border-radius);
  padding: var(--og-input-padding-y) var(--og-input-padding-x);
  outline: none;
  box-sizing: border-box;
  transition: var(--og-input-transition);
  appearance: none;
}

.og-inputtext::placeholder {
  color: var(--og-input-placeholder-color);
}

.og-inputtext:hover:not(.og-inputtext--disabled) {
  --og-input-border-color: var(--og-border-color-hover);
}

.og-inputtext:focus:not(.og-inputtext--disabled) {
  --og-input-border-color: var(--og-border-color-focus);
  box-shadow: var(--og-focus-ring);
}

/* Modifiers */
.og-inputtext--filled {
  --og-input-bg: var(--og-bg-muted);
}

.og-inputtext--invalid {
  --og-input-border-color: var(--og-color-danger-text);
}
.og-inputtext--invalid:focus {
  box-shadow: 0 0 0 var(--og-focus-ring-width) rgba(239, 68, 68, 0.2);
}

.og-inputtext--small {
  --og-input-padding-x: var(--og-spacing-sm);
  --og-input-padding-y: var(--og-spacing-xs);
  --og-input-font-size: var(--og-font-size-xs);
}

.og-inputtext--large {
  --og-input-padding-x: var(--og-spacing-lg);
  --og-input-padding-y: var(--og-spacing-md);
  --og-input-font-size: var(--og-font-size-md);
}

.og-inputtext--fluid {
  width: 100%;
}

.og-inputtext--disabled {
  background-color: var(--og-bg-muted);
  color: var(--og-text-disabled);
  cursor: not-allowed;
  opacity: 0.7;
}
</style>
