<template>
  <button
    type="button"
    :class="['og-togglebutton', { 'og-togglebutton--checked': modelValue, 'og-togglebutton--disabled': disabled }]"
    :disabled="disabled"
    @click="toggle"
  >
    <span v-if="currentIcon" :class="['og-togglebutton__icon', currentIcon]" />
    <span class="og-togglebutton__label">{{ currentLabel }}</span>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

defineOptions({
  name: 'OgToggleButton',
});

export interface OgToggleButtonProps {
  modelValue?: boolean;
  onLabel?: string;
  offLabel?: string;
  onIcon?: string;
  offIcon?: string;
  disabled?: boolean;
}

const props = withDefaults(defineProps<OgToggleButtonProps>(), {
  modelValue: false,
  onLabel: 'Yes',
  offLabel: 'No',
  disabled: false,
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
  (e: 'change', event: Event): void;
}>();

const currentLabel = computed(() => (props.modelValue ? props.onLabel : props.offLabel));
const currentIcon = computed(() => (props.modelValue ? props.onIcon : props.offIcon));

const toggle = (e: Event) => {
  if (props.disabled) return;
  emit('update:modelValue', !props.modelValue);
  emit('change', e);
};
</script>

<style scoped>
.og-togglebutton {
  display: inline-flex;
  align-items: center;
  gap: var(--og-spacing-xs);
  padding: var(--og-spacing-sm) var(--og-spacing-md);
  border-radius: var(--og-radius-md);
  border: 1px solid var(--og-border-color);
  background-color: var(--og-bg-muted);
  color: var(--og-text-primary);
  font-family: var(--og-font-family);
  font-size: var(--og-font-size-sm);
  font-weight: var(--og-font-weight-medium);
  cursor: pointer;
  transition: all var(--og-transition-fast);
}

.og-togglebutton--checked {
  background-color: var(--og-color-primary-500);
  color: var(--og-color-primary-contrast);
  border-color: var(--og-color-primary-500);
}

.og-togglebutton--disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
