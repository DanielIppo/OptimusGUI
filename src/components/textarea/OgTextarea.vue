<template>
  <textarea
    ref="textareaRef"
    :value="modelValue"
    :rows="rows"
    :cols="cols"
    :disabled="disabled"
    :placeholder="placeholder"
    :class="textareaClasses"
    @input="onInput"
    @change="$emit('change', $event)"
    @focus="$emit('focus', $event)"
    @blur="$emit('blur', $event)"
  />
</template>

<script setup lang="ts">
import { computed, ref, onMounted, watch, nextTick } from 'vue';
import type { OgSize } from '@/types';

defineOptions({
  name: 'OgTextarea',
});

export interface OgTextareaProps {
  modelValue?: string | null;
  rows?: number;
  cols?: number;
  autoResize?: boolean;
  size?: OgSize;
  invalid?: boolean;
  variant?: 'outlined' | 'filled';
  fluid?: boolean;
  disabled?: boolean;
  placeholder?: string;
}

const props = withDefaults(defineProps<OgTextareaProps>(), {
  modelValue: '',
  rows: 3,
  autoResize: false,
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

const textareaRef = ref<HTMLTextAreaElement | null>(null);

const adjustHeight = () => {
  if (props.autoResize && textareaRef.value) {
    textareaRef.value.style.height = 'auto';
    textareaRef.value.style.height = `${textareaRef.value.scrollHeight}px`;
  }
};

const onInput = (event: Event) => {
  const target = event.target as HTMLTextAreaElement;
  emit('update:modelValue', target.value);
  adjustHeight();
};

watch(
  () => props.modelValue,
  () => {
    nextTick(adjustHeight);
  }
);

onMounted(() => {
  adjustHeight();
});

const textareaClasses = computed(() => [
  'og-textarea',
  props.size ? `og-textarea--${props.size}` : '',
  props.variant ? `og-textarea--${props.variant}` : '',
  {
    'og-textarea--invalid': props.invalid,
    'og-textarea--fluid': props.fluid,
    'og-textarea--disabled': props.disabled,
    'og-textarea--autoresize': props.autoResize,
  },
]);
</script>

<style scoped>
.og-textarea {
  --og-textarea-bg: var(--og-color-white);
  --og-textarea-color: var(--og-text-primary);
  --og-textarea-placeholder-color: var(--og-text-muted);
  --og-textarea-border-color: var(--og-border-color);
  --og-textarea-border-radius: var(--og-radius-md);
  --og-textarea-padding-x: var(--og-spacing-md);
  --og-textarea-padding-y: var(--og-spacing-sm);
  --og-textarea-font-size: var(--og-font-size-sm);
  --og-textarea-transition: border-color var(--og-transition-fast), box-shadow var(--og-transition-fast);

  font-family: var(--og-font-family);
  font-size: var(--og-textarea-font-size);
  color: var(--og-textarea-color);
  background-color: var(--og-textarea-bg);
  border: 1px solid var(--og-textarea-border-color);
  border-radius: var(--og-textarea-border-radius);
  padding: var(--og-textarea-padding-y) var(--og-textarea-padding-x);
  outline: none;
  box-sizing: border-box;
  transition: var(--og-textarea-transition);
  resize: vertical;
  appearance: none;
}

.og-textarea::placeholder {
  color: var(--og-textarea-placeholder-color);
}

.og-textarea:hover:not(.og-textarea--disabled) {
  --og-textarea-border-color: var(--og-border-color-hover);
}

.og-textarea:focus:not(.og-textarea--disabled) {
  --og-textarea-border-color: var(--og-border-color-focus);
  box-shadow: var(--og-focus-ring);
}

.og-textarea--autoresize {
  overflow: hidden;
  resize: none;
}

.og-textarea--filled {
  --og-textarea-bg: var(--og-bg-muted);
}

.og-textarea--invalid {
  --og-textarea-border-color: var(--og-color-danger-text);
}
.og-textarea--invalid:focus {
  box-shadow: 0 0 0 var(--og-focus-ring-width) rgba(239, 68, 68, 0.2);
}

.og-textarea--small {
  --og-textarea-padding-x: var(--og-spacing-sm);
  --og-textarea-padding-y: var(--og-spacing-xs);
  --og-textarea-font-size: var(--og-font-size-xs);
}

.og-textarea--large {
  --og-textarea-padding-x: var(--og-spacing-lg);
  --og-textarea-padding-y: var(--og-spacing-md);
  --og-textarea-font-size: var(--og-font-size-md);
}

.og-textarea--fluid {
  width: 100%;
}

.og-textarea--disabled {
  background-color: var(--og-bg-muted);
  color: var(--og-text-disabled);
  cursor: not-allowed;
  opacity: 0.7;
}
</style>
