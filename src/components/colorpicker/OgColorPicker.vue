<template>
  <div :class="['og-colorpicker', { 'og-colorpicker--disabled': disabled }]">
    <input
      type="color"
      :value="modelValue"
      :disabled="disabled"
      class="og-colorpicker__input"
      @input="onInput"
    />
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'OgColorPicker',
});

export interface OgColorPickerProps {
  modelValue?: string;
  disabled?: boolean;
}

withDefaults(defineProps<OgColorPickerProps>(), {
  modelValue: '#0f172a',
  disabled: false,
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
  (e: 'change', event: Event): void;
}>();

const onInput = (e: Event) => {
  const target = e.target as HTMLInputElement;
  emit('update:modelValue', target.value);
  emit('change', e);
};
</script>

<style scoped>
.og-colorpicker {
  display: inline-flex;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: var(--og-radius-md);
  overflow: hidden;
  border: 1px solid var(--og-border-color);
  background-color: var(--og-color-white);
  cursor: pointer;
}

.og-colorpicker__input {
  width: 150%;
  height: 150%;
  margin: -25%;
  border: none;
  cursor: pointer;
  background: transparent;
}

.og-colorpicker--disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
