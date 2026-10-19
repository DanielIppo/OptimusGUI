<template>
  <div :class="switchClasses" @click="onClick">
    <input
      type="checkbox"
      role="switch"
      :aria-checked="modelValue"
      :checked="modelValue"
      :disabled="disabled"
      :readonly="readonly"
      class="og-toggleswitch__input"
      @focus="$emit('focus', $event)"
      @blur="$emit('blur', $event)"
      @change="onChange"
    />
    <div class="og-toggleswitch__slider">
      <div class="og-toggleswitch__handle">
        <slot name="handle" :checked="modelValue" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { OgSize } from '@/types';

defineOptions({
  name: 'OgToggleSwitch',
});

export interface OgToggleSwitchProps {
  modelValue?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  invalid?: boolean;
  size?: OgSize;
}

const props = withDefaults(defineProps<OgToggleSwitchProps>(), {
  modelValue: false,
  disabled: false,
  readonly: false,
  invalid: false,
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
  (e: 'change', event: Event): void;
  (e: 'focus', event: FocusEvent): void;
  (e: 'blur', event: FocusEvent): void;
}>();

const onClick = (event: MouseEvent) => {
  if (props.disabled || props.readonly) return;
  event.stopPropagation();
};

const onChange = (event: Event) => {
  if (props.disabled || props.readonly) return;
  emit('update:modelValue', !props.modelValue);
  emit('change', event);
};

const switchClasses = computed(() => [
  'og-toggleswitch',
  props.size ? `og-toggleswitch--${props.size}` : '',
  {
    'og-toggleswitch--checked': props.modelValue,
    'og-toggleswitch--disabled': props.disabled,
    'og-toggleswitch--invalid': props.invalid,
  },
]);
</script>

<style scoped>
.og-toggleswitch {
  --og-toggleswitch-width: 2.75rem;
  --og-toggleswitch-height: 1.5rem;
  --og-toggleswitch-handle-size: 1.25rem;
  --og-toggleswitch-bg: var(--og-color-gray-300);
  --og-toggleswitch-checked-bg: var(--og-color-primary-500);
  --og-toggleswitch-handle-bg: var(--og-color-white);

  display: inline-flex;
  align-items: center;
  position: relative;
  width: var(--og-toggleswitch-width);
  height: var(--og-toggleswitch-height);
  cursor: pointer;
  user-select: none;
}

.og-toggleswitch__input {
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  cursor: inherit;
  z-index: 1;
}

.og-toggleswitch__slider {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0.125rem;
  background-color: var(--og-toggleswitch-bg);
  border-radius: var(--og-radius-full);
  transition: background-color var(--og-transition-fast);
  box-sizing: border-box;
}

.og-toggleswitch__input:focus-visible + .og-toggleswitch__slider {
  box-shadow: var(--og-focus-ring);
}

.og-toggleswitch--checked .og-toggleswitch__slider {
  background-color: var(--og-toggleswitch-checked-bg);
}

.og-toggleswitch__handle {
  width: var(--og-toggleswitch-handle-size);
  height: var(--og-toggleswitch-handle-size);
  background-color: var(--og-toggleswitch-handle-bg);
  border-radius: 50%;
  transition: transform var(--og-transition-fast);
  box-shadow: var(--og-shadow-sm);
  display: flex;
  align-items: center;
  justify-content: center;
}

.og-toggleswitch--checked .og-toggleswitch__handle {
  transform: translateX(calc(var(--og-toggleswitch-width) - var(--og-toggleswitch-handle-size) - 0.25rem));
}

.og-toggleswitch--invalid .og-toggleswitch__slider {
  border: 1px solid var(--og-color-danger-text);
}

.og-toggleswitch--small {
  --og-toggleswitch-width: 2.25rem;
  --og-toggleswitch-height: 1.25rem;
  --og-toggleswitch-handle-size: 1rem;
}

.og-toggleswitch--large {
  --og-toggleswitch-width: 3.25rem;
  --og-toggleswitch-height: 1.75rem;
  --og-toggleswitch-handle-size: 1.5rem;
}

.og-toggleswitch--disabled {
  cursor: not-allowed;
  opacity: 0.6;
}
</style>
