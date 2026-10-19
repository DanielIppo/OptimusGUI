<template>
  <div :class="['og-datepicker', { 'og-datepicker--disabled': disabled }]">
    <input
      type="date"
      :value="formattedValue"
      :placeholder="placeholder"
      :disabled="disabled"
      class="og-datepicker__input"
      @input="onInput"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

defineOptions({
  name: 'OgDatePicker',
});

export interface OgDatePickerProps {
  modelValue?: Date | string | null;
  placeholder?: string;
  disabled?: boolean;
}

const props = withDefaults(defineProps<OgDatePickerProps>(), {
  modelValue: null,
  disabled: false,
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: Date | string | null): void;
  (e: 'change', event: Event): void;
}>();

const formattedValue = computed(() => {
  if (!props.modelValue) return '';
  if (props.modelValue instanceof Date) {
    return props.modelValue.toISOString().split('T')[0];
  }
  return String(props.modelValue);
});

const onInput = (e: Event) => {
  const target = e.target as HTMLInputElement;
  const val = target.value ? new Date(target.value) : null;
  emit('update:modelValue', val);
  emit('change', e);
};
</script>

<style scoped>
.og-datepicker {
  display: inline-flex;
  position: relative;
  width: 14rem;
}

.og-datepicker__input {
  width: 100%;
  padding: var(--og-spacing-sm) var(--og-spacing-md);
  font-family: var(--og-font-family);
  font-size: var(--og-font-size-sm);
  color: var(--og-text-primary);
  background-color: var(--og-color-white);
  border: 1px solid var(--og-border-color);
  border-radius: var(--og-radius-md);
  outline: none;
  transition: border-color var(--og-transition-fast), box-shadow var(--og-transition-fast);
}

.og-datepicker__input:focus {
  border-color: var(--og-border-color-focus);
  box-shadow: var(--og-focus-ring);
}

.og-datepicker--disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
