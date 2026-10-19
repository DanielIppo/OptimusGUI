<template>
  <div class="og-accordion">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, provide, ref, watch } from 'vue';

defineOptions({
  name: 'OgAccordion',
});

export interface OgAccordionProps {
  value?: number | number[] | null;
  multiple?: boolean;
}

const props = withDefaults(defineProps<OgAccordionProps>(), {
  value: null,
  multiple: false,
});

const emit = defineEmits<{
  (e: 'update:value', value: number | number[] | null): void;
  (e: 'tab-open', index: number): void;
  (e: 'tab-close', index: number): void;
}>();

const activeValue = ref<number | number[] | null>(props.value ?? (props.multiple ? [] : null));
let tabCount = 0;

watch(
  () => props.value,
  (newVal) => {
    activeValue.value = newVal;
  }
);

const registerTab = () => {
  const currentIndex = tabCount;
  tabCount++;
  return currentIndex;
};

const toggleTab = (index: number) => {
  if (props.multiple) {
    let current = Array.isArray(activeValue.value) ? [...activeValue.value] : [];
    if (current.includes(index)) {
      current = current.filter((i) => i !== index);
      emit('tab-close', index);
    } else {
      current.push(index);
      emit('tab-open', index);
    }
    activeValue.value = current;
    emit('update:value', current);
  } else {
    if (activeValue.value === index) {
      activeValue.value = null;
      emit('tab-close', index);
      emit('update:value', null);
    } else {
      activeValue.value = index;
      emit('tab-open', index);
      emit('update:value', index);
    }
  }
};

provide('ogAccordion', {
  multiple: props.multiple,
  activeValue,
  registerTab,
  toggleTab,
});
</script>

<style scoped>
.og-accordion {
  border: 1px solid var(--og-border-color);
  border-radius: var(--og-radius-lg);
  overflow: hidden;
  background-color: var(--og-color-white);
}
</style>
