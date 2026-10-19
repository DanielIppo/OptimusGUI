<template>
  <div :class="['og-listbox', { 'og-listbox--disabled': disabled }]">
    <ul class="og-listbox__list" role="listbox">
      <li
        v-for="(option, idx) in options"
        :key="idx"
        :class="['og-listbox__option', { 'og-listbox__option--selected': isSelected(option) }]"
        role="option"
        :aria-selected="isSelected(option)"
        @click="selectOption(option)"
      >
        <slot name="option" :option="option" :index="idx">
          {{ getLabel(option) }}
        </slot>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'OgListbox',
});

export interface OgListboxProps {
  modelValue?: any;
  options?: any[];
  optionLabel?: string;
  optionValue?: string;
  disabled?: boolean;
}

const props = withDefaults(defineProps<OgListboxProps>(), {
  options: () => [],
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

const isSelected = (opt: any) => getValue(opt) === props.modelValue;

const selectOption = (opt: any) => {
  if (props.disabled) return;
  const val = getValue(opt);
  emit('update:modelValue', val);
  emit('change', val);
};
</script>

<style scoped>
.og-listbox {
  width: 14rem;
  border: 1px solid var(--og-border-color);
  border-radius: var(--og-radius-md);
  background-color: var(--og-color-white);
  overflow-y: auto;
  max-height: 14rem;
}

.og-listbox__list {
  list-style: none;
  margin: 0;
  padding: 0.25rem 0;
}

.og-listbox__option {
  padding: var(--og-spacing-sm) var(--og-spacing-md);
  font-family: var(--og-font-family);
  font-size: var(--og-font-size-sm);
  color: var(--og-text-primary);
  cursor: pointer;
  transition: background-color var(--og-transition-fast);
}

.og-listbox__option:hover:not(.og-listbox--disabled .og-listbox__option) {
  background-color: var(--og-bg-subtle);
}

.og-listbox__option--selected {
  background-color: var(--og-color-primary-50);
  color: var(--og-color-primary-500);
  font-weight: var(--og-font-weight-medium);
}

.og-listbox--disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
