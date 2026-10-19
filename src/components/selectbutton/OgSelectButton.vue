<template>
  <div :class="['og-selectbutton', { 'og-selectbutton--disabled': disabled }]">
    <button
      v-for="(option, idx) in options"
      :key="idx"
      type="button"
      :class="['og-selectbutton__btn', { 'og-selectbutton__btn--active': isSelected(option) }]"
      :disabled="disabled"
      @click="toggleOption(option)"
    >
      <slot name="option" :option="option" :index="idx">
        {{ getLabel(option) }}
      </slot>
    </button>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'OgSelectButton',
});

export interface OgSelectButtonProps {
  modelValue?: any;
  options?: any[];
  optionLabel?: string;
  optionValue?: string;
  multiple?: boolean;
  disabled?: boolean;
}

const props = withDefaults(defineProps<OgSelectButtonProps>(), {
  options: () => [],
  multiple: false,
  disabled: false,
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: any): void;
  (e: 'change', value: any): void;
}>();

const getLabel = (opt: any): string => {
  if (typeof opt === 'object' && opt !== null) {
    if (props.optionLabel) return opt[props.optionLabel];
    if ('label' in opt) return opt.label;
  }
  return String(opt);
};

const getValue = (opt: any): any => {
  if (typeof opt === 'object' && opt !== null) {
    if (props.optionValue) return opt[props.optionValue];
    if ('value' in opt) return opt.value;
  }
  return opt;
};

const isSelected = (opt: any) => {
  const val = getValue(opt);
  if (props.multiple) {
    return Array.isArray(props.modelValue) && props.modelValue.includes(val);
  }
  return props.modelValue === val;
};

const toggleOption = (opt: any) => {
  if (props.disabled) return;
  const val = getValue(opt);

  if (props.multiple) {
    let current = Array.isArray(props.modelValue) ? [...props.modelValue] : [];
    if (current.includes(val)) {
      current = current.filter((v) => v !== val);
    } else {
      current.push(val);
    }
    emit('update:modelValue', current);
    emit('change', current);
  } else {
    emit('update:modelValue', val);
    emit('change', val);
  }
};
</script>

<style scoped>
.og-selectbutton {
  display: inline-flex;
  border-radius: var(--og-radius-md);
  overflow: hidden;
  border: 1px solid var(--og-border-color);
  background-color: var(--og-bg-muted);
}

.og-selectbutton__btn {
  padding: var(--og-spacing-sm) var(--og-spacing-md);
  border: none;
  background: transparent;
  font-family: var(--og-font-family);
  font-size: var(--og-font-size-sm);
  font-weight: var(--og-font-weight-medium);
  color: var(--og-text-secondary);
  cursor: pointer;
  transition: all var(--og-transition-fast);
  border-right: 1px solid var(--og-border-color);
}
.og-selectbutton__btn:last-child {
  border-right: none;
}

.og-selectbutton__btn:hover:not(:disabled) {
  color: var(--og-text-primary);
}

.og-selectbutton__btn--active {
  background-color: var(--og-color-primary-500);
  color: var(--og-color-primary-contrast);
}

.og-selectbutton--disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
