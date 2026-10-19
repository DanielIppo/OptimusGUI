<template>
  <div :class="boxClasses" @click="onClick">
    <input
      type="checkbox"
      :checked="isChecked"
      :disabled="disabled"
      :readonly="readonly"
      :name="name"
      :value="value"
      class="og-checkbox__input"
      @focus="$emit('focus', $event)"
      @blur="$emit('blur', $event)"
      @change="onChange"
    />
    <div class="og-checkbox__box">
      <slot name="icon" :checked="isChecked">
        <svg
          v-if="isChecked"
          class="og-checkbox__icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { OgSize } from '@/types';

defineOptions({
  name: 'OgCheckbox',
});

export interface OgCheckboxProps {
  modelValue?: any;
  value?: any;
  binary?: boolean;
  name?: string;
  disabled?: boolean;
  readonly?: boolean;
  invalid?: boolean;
  size?: OgSize;
}

const props = withDefaults(defineProps<OgCheckboxProps>(), {
  modelValue: false,
  binary: true,
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

const isChecked = computed(() => {
  if (props.binary) {
    return !!props.modelValue;
  }
  if (Array.isArray(props.modelValue)) {
    return props.modelValue.includes(props.value);
  }
  return props.modelValue === props.value;
});

const onClick = (event: MouseEvent) => {
  if (props.disabled || props.readonly) return;
  emit('click' as any, event);
};

const onChange = (event: Event) => {
  if (props.disabled || props.readonly) return;

  let newValue: any;
  if (props.binary) {
    newValue = !isChecked.value;
  } else if (Array.isArray(props.modelValue)) {
    const list = [...props.modelValue];
    if (isChecked.value) {
      const idx = list.indexOf(props.value);
      if (idx !== -1) list.splice(idx, 1);
    } else {
      list.push(props.value);
    }
    newValue = list;
  } else {
    newValue = isChecked.value ? null : props.value;
  }

  emit('update:modelValue', newValue);
  emit('change', event);
};

const boxClasses = computed(() => [
  'og-checkbox',
  props.size ? `og-checkbox--${props.size}` : '',
  {
    'og-checkbox--checked': isChecked.value,
    'og-checkbox--disabled': props.disabled,
    'og-checkbox--invalid': props.invalid,
  },
]);
</script>

<style scoped>
.og-checkbox {
  --og-checkbox-size: 1.25rem;
  --og-checkbox-bg: var(--og-color-white);
  --og-checkbox-border-color: var(--og-border-color);
  --og-checkbox-border-radius: var(--og-radius-sm);
  --og-checkbox-checked-bg: var(--og-color-primary-500);
  --og-checkbox-checked-color: var(--og-color-primary-contrast);

  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: var(--og-checkbox-size);
  height: var(--og-checkbox-size);
  min-width: var(--og-checkbox-size);
  min-height: var(--og-checkbox-size);
  flex-shrink: 0;
  aspect-ratio: 1 / 1;
  box-sizing: border-box;
  cursor: pointer;
  user-select: none;
}

.og-checkbox__input {
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  cursor: inherit;
  z-index: 1;
}

.og-checkbox__box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: var(--og-checkbox-bg);
  border: 1px solid var(--og-checkbox-border-color);
  border-radius: var(--og-checkbox-border-radius);
  transition: all var(--og-transition-fast);
}

.og-checkbox:hover:not(.og-checkbox--disabled) .og-checkbox__box {
  border-color: var(--og-border-color-hover);
}

.og-checkbox__input:focus-visible + .og-checkbox__box {
  box-shadow: var(--og-focus-ring);
  border-color: var(--og-border-color-focus);
}

.og-checkbox--checked .og-checkbox__box {
  background-color: var(--og-checkbox-checked-bg);
  border-color: var(--og-checkbox-checked-bg);
  color: var(--og-checkbox-checked-color);
}

.og-checkbox__icon {
  width: 0.875rem;
  height: 0.875rem;
}

.og-checkbox--invalid .og-checkbox__box {
  border-color: var(--og-color-danger-text);
}

.og-checkbox--small {
  --og-checkbox-size: 1rem;
}
.og-checkbox--small .og-checkbox__icon {
  width: 0.75rem;
  height: 0.75rem;
}

.og-checkbox--large {
  --og-checkbox-size: 1.5rem;
}
.og-checkbox--large .og-checkbox__icon {
  width: 1rem;
  height: 1rem;
}

.og-checkbox--disabled {
  cursor: not-allowed;
  opacity: 0.6;
}
</style>
