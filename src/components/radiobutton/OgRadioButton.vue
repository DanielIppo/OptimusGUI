<template>
  <div :class="radioClasses">
    <input
      type="radio"
      :checked="isChecked"
      :disabled="disabled"
      :readonly="readonly"
      :name="name"
      :value="value"
      class="og-radiobutton__input"
      @focus="$emit('focus', $event)"
      @blur="$emit('blur', $event)"
      @change="onChange"
    />
    <div class="og-radiobutton__box">
      <div v-if="isChecked" class="og-radiobutton__icon" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { OgSize } from '@/types';

defineOptions({
  name: 'OgRadioButton',
});

export interface OgRadioButtonProps {
  modelValue?: any;
  value?: any;
  name?: string;
  disabled?: boolean;
  readonly?: boolean;
  invalid?: boolean;
  size?: OgSize;
}

const props = withDefaults(defineProps<OgRadioButtonProps>(), {
  disabled: false,
  readonly: false,
  invalid: false,
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: any): void;
  (e: 'change', event: Event): void;
  (e: 'focus', event: FocusEvent): void;
  (e: 'blur', event: FocusEvent): void;
}>();

const isChecked = computed(() => props.modelValue === props.value);

const onChange = (event: Event) => {
  if (props.disabled || props.readonly) return;
  emit('update:modelValue', props.value);
  emit('change', event);
};

const radioClasses = computed(() => [
  'og-radiobutton',
  props.size ? `og-radiobutton--${props.size}` : '',
  {
    'og-radiobutton--checked': isChecked.value,
    'og-radiobutton--disabled': props.disabled,
    'og-radiobutton--invalid': props.invalid,
  },
]);
</script>

<style scoped>
.og-radiobutton {
  --og-radio-size: 1.25rem;
  --og-radio-bg: var(--og-color-white);
  --og-radio-border-color: var(--og-border-color);
  --og-radio-checked-border: var(--og-color-primary-500);
  --og-radio-dot-color: var(--og-color-primary-500);

  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: var(--og-radio-size);
  height: var(--og-radio-size);
  cursor: pointer;
  user-select: none;
}

.og-radiobutton__input {
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  cursor: inherit;
  z-index: 1;
}

.og-radiobutton__box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: var(--og-radio-bg);
  border: 1px solid var(--og-radio-border-color);
  border-radius: 50%;
  transition: all var(--og-transition-fast);
}

.og-radiobutton:hover:not(.og-radiobutton--disabled) .og-radiobutton__box {
  border-color: var(--og-border-color-hover);
}

.og-radiobutton__input:focus-visible + .og-radiobutton__box {
  box-shadow: var(--og-focus-ring);
  border-color: var(--og-border-color-focus);
}

.og-radiobutton--checked .og-radiobutton__box {
  border-color: var(--og-radio-checked-border);
}

.og-radiobutton__icon {
  width: 50%;
  height: 50%;
  border-radius: 50%;
  background-color: var(--og-radio-dot-color);
  transition: transform var(--og-transition-fast);
}

.og-radiobutton--invalid .og-radiobutton__box {
  border-color: var(--og-color-danger-text);
}

.og-radiobutton--small {
  --og-radio-size: 1rem;
}

.og-radiobutton--large {
  --og-radio-size: 1.5rem;
}

.og-radiobutton--disabled {
  cursor: not-allowed;
  opacity: 0.6;
}
</style>
