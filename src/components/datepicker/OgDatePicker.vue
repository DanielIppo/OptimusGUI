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
    const y = props.modelValue.getFullYear();
    const m = String(props.modelValue.getMonth() + 1).padStart(2, '0');
    const d = String(props.modelValue.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  }
  return String(props.modelValue);
});

const onInput = (e: Event) => {
  const target = e.target as HTMLInputElement;
  if (!target.value) {
    emit('update:modelValue', null);
  } else {
    const [y, m, d] = target.value.split('-').map(Number);
    const date = new Date(y, m - 1, d);
    emit('update:modelValue', date);
  }
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
