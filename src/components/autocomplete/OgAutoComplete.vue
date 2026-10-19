<template>
  <div ref="containerRef" :class="containerClasses">
    <input
      v-model="query"
      type="text"
      :placeholder="placeholder"
      :disabled="disabled"
      class="og-autocomplete__input"
      @input="onInput"
      @focus="onFocus"
      @blur="onBlur"
      @keydown.down.prevent="onKeyDown"
      @keydown.up.prevent="onKeyUp"
      @keydown.enter.prevent="onEnter"
    />

    <Teleport to="body">
      <div v-if="isOpen && suggestions.length > 0" ref="overlayRef" class="og-autocomplete__overlay" :style="overlayStyle">
        <ul class="og-autocomplete__list" role="listbox">
          <li
            v-for="(item, idx) in suggestions"
            :key="idx"
            :class="['og-autocomplete__item', { 'og-autocomplete__item--focused': focusedIndex === idx }]"
            role="option"
            @click="selectItem(item)"
          >
            <slot name="option" :item="item" :index="idx">
              {{ getItemLabel(item) }}
            </slot>
          </li>
        </ul>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted, nextTick } from 'vue';
import type { OgSize } from '@/types';

defineOptions({
  name: 'OgAutoComplete',
});

export interface OgAutoCompleteProps {
  modelValue?: any;
  suggestions?: any[];
  optionLabel?: string;
  placeholder?: string;
  disabled?: boolean;
  size?: OgSize;
}

const props = withDefaults(defineProps<OgAutoCompleteProps>(), {
  modelValue: '',
  suggestions: () => [],
  disabled: false,
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: any): void;
  (e: 'complete', event: { query: string }): void;
  (e: 'change', event: Event): void;
  (e: 'select', item: any): void;
}>();

const query = ref(typeof props.modelValue === 'string' ? props.modelValue : '');
const isOpen = ref(false);
const focusedIndex = ref(-1);
const containerRef = ref<HTMLElement | null>(null);
const overlayRef = ref<HTMLElement | null>(null);
const overlayStyle = ref<Record<string, string>>({});

const getItemLabel = (item: any): string => {
  if (typeof item === 'object' && item !== null) {
    if (props.optionLabel) return item[props.optionLabel];
    if ('label' in item) return item.label;
  }
  return String(item);
};

const updateOverlayPosition = () => {
  if (!containerRef.value) return;
  const rect = containerRef.value.getBoundingClientRect();
  overlayStyle.value = {
    position: 'absolute',
    top: `${rect.bottom + window.scrollY + 4}px`,
    left: `${rect.left + window.scrollX}px`,
    width: `${rect.width}px`,
    zIndex: 'var(--og-z-dropdown)',
  };
};

const onInput = (e: Event) => {
  isOpen.value = true;
  focusedIndex.value = -1;
  emit('complete', { query: query.value });
  emit('update:modelValue', query.value);
  emit('change', e);
  nextTick(updateOverlayPosition);
};

const selectItem = (item: any) => {
  query.value = getItemLabel(item);
  emit('update:modelValue', item);
  emit('select', item);
  isOpen.value = false;
};

const onKeyDown = () => {
  if (!isOpen.value) return;
  if (focusedIndex.value < props.suggestions.length - 1) {
    focusedIndex.value++;
  }
};

const onKeyUp = () => {
  if (!isOpen.value) return;
  if (focusedIndex.value > 0) {
    focusedIndex.value--;
  }
};

const onEnter = () => {
  if (isOpen.value && focusedIndex.value >= 0 && focusedIndex.value < props.suggestions.length) {
    selectItem(props.suggestions[focusedIndex.value]);
  }
};

const onFocus = () => {
  if (query.value.length > 0 && props.suggestions.length > 0) {
    isOpen.value = true;
    nextTick(updateOverlayPosition);
  }
};

const onBlur = () => {
  setTimeout(() => {
    isOpen.value = false;
  }, 200);
};

const containerClasses = computed(() => [
  'og-autocomplete',
  props.size ? `og-autocomplete--${props.size}` : '',
  { 'og-autocomplete--disabled': props.disabled },
]);
</script>

<style scoped>
.og-autocomplete {
  display: inline-flex;
  position: relative;
  width: 14rem;
}

.og-autocomplete__input {
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

.og-autocomplete__input:focus {
  border-color: var(--og-border-color-focus);
  box-shadow: var(--og-focus-ring);
}

.og-autocomplete--disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>

<style>
.og-autocomplete__overlay {
  background-color: var(--og-color-white);
  border: 1px solid var(--og-border-color);
  border-radius: var(--og-radius-md);
  box-shadow: var(--og-shadow-lg);
  max-height: 16rem;
  overflow-y: auto;
}

.og-autocomplete__list {
  list-style: none;
  margin: 0;
  padding: 0.25rem 0;
}

.og-autocomplete__item {
  padding: var(--og-spacing-sm) var(--og-spacing-md);
  font-family: var(--og-font-family);
  font-size: var(--og-font-size-sm);
  color: var(--og-text-primary);
  cursor: pointer;
  transition: background-color var(--og-transition-fast);
}

.og-autocomplete__item:hover,
.og-autocomplete__item--focused {
  background-color: var(--og-bg-subtle);
}
</style>
