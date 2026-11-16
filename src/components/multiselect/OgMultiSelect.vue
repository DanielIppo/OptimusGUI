<template>
  <div ref="containerRef" :class="multiSelectClasses">
    <div class="og-multiselect__trigger" tabindex="0" @click="toggle" @keydown.enter.prevent="toggle" @keydown.space.prevent="toggle" @keydown.esc="close">
      <div class="og-multiselect__label">
        <slot name="value" :value="modelValue" :placeholder="placeholder">
          <span v-if="selectedLabels.length > 0">{{ selectedLabels.join(', ') }}</span>
          <span v-else class="og-multiselect__placeholder">{{ placeholder }}</span>
        </slot>
      </div>

      <div class="og-multiselect__actions">
        <!-- Clear Icon -->
        <span
          v-if="showClear && modelValue && modelValue.length > 0 && !disabled"
          class="og-multiselect__clear"
          title="Clear selection"
          @click.stop="clear"
        >
          <slot name="clearicon">✕</slot>
        </span>

        <!-- Dropdown Icon -->
        <span class="og-multiselect__icon">
          <slot name="dropdownicon">
            <svg
              class="og-multiselect__chevron"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </slot>
        </span>
      </div>
    </div>

    <!-- Overlay Panel -->
    <Teleport to="body">
      <div v-if="isOpen" ref="overlayRef" class="og-multiselect__overlay" :style="overlayStyle">
        <div v-if="$slots.header" class="og-multiselect__header">
          <slot name="header" />
        </div>

        <!-- Filter Input -->
        <div v-if="filter" class="og-multiselect__filter-container">
          <input
            ref="filterInputRef"
            v-model="filterQuery"
            type="text"
            class="og-multiselect__filter-input"
            :placeholder="filterPlaceholder"
          />
        </div>

        <!-- Options List -->
        <ul class="og-multiselect__list" role="listbox" aria-multiselectable="true">
          <li
            v-for="(option, idx) in filteredOptions"
            :key="idx"
            :class="['og-multiselect__option', { 'og-multiselect__option--selected': isSelected(option) }]"
            role="option"
            :aria-selected="isSelected(option)"
            @click="toggleOption(option)"
          >
            <OgCheckbox :model-value="isSelected(option)" binary style="pointer-events: none;" />
            <span>{{ getLabel(option) }}</span>
          </li>
          <li v-if="filteredOptions.length === 0" class="og-multiselect__empty">
            {{ emptyMessage }}
          </li>
        </ul>

        <div v-if="$slots.footer" class="og-multiselect__footer">
          <slot name="footer" />
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch, nextTick, onMounted, onUnmounted } from 'vue';
import type { OgSize } from '@/types';
import OgCheckbox from '@/components/checkbox/OgCheckbox.vue';

defineOptions({
  name: 'OgMultiSelect',
});

export interface OgMultiSelectProps {
  modelValue?: any[];
  options?: any[];
  optionLabel?: string;
  optionValue?: string;
  placeholder?: string;
  filter?: boolean;
  filterPlaceholder?: string;
  emptyMessage?: string;
  showClear?: boolean;
  disabled?: boolean;
  invalid?: boolean;
  fluid?: boolean;
  size?: OgSize;
}

const props = withDefaults(defineProps<OgMultiSelectProps>(), {
  modelValue: () => [],
  options: () => [],
  placeholder: 'Select items',
  filter: false,
  filterPlaceholder: 'Search...',
  emptyMessage: 'No options found',
  showClear: false,
  disabled: false,
  invalid: false,
  fluid: false,
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: any[]): void;
  (e: 'change', value: any[]): void;
}>();

const isOpen = ref(false);
const filterQuery = ref('');
const containerRef = ref<HTMLElement | null>(null);
const overlayRef = ref<HTMLElement | null>(null);
const filterInputRef = ref<HTMLInputElement | null>(null);
const overlayStyle = ref<Record<string, string>>({});

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
  return (props.modelValue || []).includes(val);
};

const filteredOptions = computed(() => {
  const list = props.options || [];
  if (!props.filter || !filterQuery.value.trim()) {
    return list;
  }
  const q = filterQuery.value.toLowerCase().trim();
  return list.filter((opt) => {
    return getLabel(opt).toLowerCase().includes(q);
  });
});

const selectedLabels = computed(() => {
  return (props.options || [])
    .filter((opt) => isSelected(opt))
    .map((opt) => getLabel(opt));
});

const toggleOption = (opt: any) => {
  if (props.disabled) return;
  const val = getValue(opt);
  let updated = [...(props.modelValue || [])];
  if (updated.includes(val)) {
    updated = updated.filter((v) => v !== val);
  } else {
    updated.push(val);
  }
  emit('update:modelValue', updated);
  emit('change', updated);
};

const clear = () => {
  emit('update:modelValue', []);
  emit('change', []);
};

const updateOverlayPosition = () => {
  if (!containerRef.value) return;
  const rect = containerRef.value.getBoundingClientRect();
  const openUpward = window.innerHeight - rect.bottom < 220 && rect.top > 240;
  overlayStyle.value = {
    position: 'fixed',
    ...(openUpward
      ? { bottom: `${window.innerHeight - rect.top + 4}px` }
      : { top: `${rect.bottom + 4}px` }),
    left: `${rect.left}px`,
    width: `${rect.width}px`,
    zIndex: 'var(--og-z-dropdown, 1150)',
  };
};

const toggle = () => {
  if (props.disabled) return;
  isOpen.value = !isOpen.value;
  if (isOpen.value) {
    nextTick(() => {
      updateOverlayPosition();
      if (props.filter && filterInputRef.value) {
        filterInputRef.value.focus();
      }
    });
  } else {
    filterQuery.value = '';
  }
};

const close = () => {
  isOpen.value = false;
  filterQuery.value = '';
};

const handleClickOutside = (e: Event) => {
  if (!isOpen.value) return;
  const target = e.target as Node | null;
  if (
    target &&
    containerRef.value &&
    !containerRef.value.contains(target) &&
    overlayRef.value &&
    !overlayRef.value.contains(target)
  ) {
    close();
  }
};

watch(isOpen, (newVal) => {
  if (newVal) {
    window.addEventListener('resize', updateOverlayPosition);
    window.addEventListener('scroll', updateOverlayPosition, true);
  } else {
    window.removeEventListener('resize', updateOverlayPosition);
    window.removeEventListener('scroll', updateOverlayPosition, true);
  }
});

onMounted(() => {
  document.addEventListener('pointerdown', handleClickOutside, true);
  document.addEventListener('click', handleClickOutside, true);
});

onUnmounted(() => {
  document.removeEventListener('pointerdown', handleClickOutside, true);
  document.removeEventListener('click', handleClickOutside, true);
  window.removeEventListener('resize', updateOverlayPosition);
  window.removeEventListener('scroll', updateOverlayPosition, true);
});

const multiSelectClasses = computed(() => [
  'og-multiselect',
  props.size ? `og-multiselect--${props.size}` : '',
  {
    'og-multiselect--open': isOpen.value,
    'og-multiselect--invalid': props.invalid,
    'og-multiselect--fluid': props.fluid,
    'og-multiselect--disabled': props.disabled,
  },
]);
</script>

<style scoped>
.og-multiselect {
  display: inline-flex;
  position: relative;
  width: 14rem;
  box-sizing: border-box;
}

.og-multiselect--fluid {
  width: 100%;
}

.og-multiselect__trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: var(--og-spacing-sm) var(--og-spacing-md);
  background-color: var(--og-color-white);
  border: 1px solid var(--og-border-color);
  border-radius: var(--og-radius-md);
  cursor: pointer;
  outline: none;
  transition: border-color var(--og-transition-fast), box-shadow var(--og-transition-fast);
  box-sizing: border-box;
  user-select: none;
}

.og-multiselect__trigger:hover:not(.og-multiselect--disabled .og-multiselect__trigger) {
  border-color: var(--og-border-color-hover);
}

.og-multiselect__trigger:focus-visible,
.og-multiselect--open .og-multiselect__trigger {
  border-color: var(--og-border-color-focus);
  box-shadow: var(--og-focus-ring);
}

.og-multiselect__label {
  font-family: var(--og-font-family);
  font-size: var(--og-font-size-sm);
  color: var(--og-text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right: var(--og-spacing-xs);
}

.og-multiselect__placeholder {
  color: var(--og-text-muted);
}

.og-multiselect__actions {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  flex-shrink: 0;
}

.og-multiselect__clear {
  color: var(--og-text-muted);
  font-size: 0.8rem;
  line-height: 1;
  padding: 0.125rem;
  cursor: pointer;
  transition: color var(--og-transition-fast);
}
.og-multiselect__clear:hover {
  color: var(--og-text-primary);
}

.og-multiselect__icon {
  display: flex;
  align-items: center;
  color: var(--og-text-secondary);
}

.og-multiselect__chevron {
  width: 1rem;
  height: 1rem;
  transition: transform var(--og-transition-fast);
}

.og-multiselect--open .og-multiselect__chevron {
  transform: rotate(180deg);
}

.og-multiselect--invalid .og-multiselect__trigger {
  border-color: var(--og-color-danger-text);
}

.og-multiselect--disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.og-multiselect--disabled .og-multiselect__trigger {
  cursor: not-allowed;
  background-color: var(--og-bg-muted);
}
</style>

<style>
/* Overlay Portal styles */
.og-multiselect__overlay {
  background-color: var(--og-color-white);
  border: 1px solid var(--og-border-color);
  border-radius: var(--og-radius-md);
  box-shadow: var(--og-shadow-lg);
  max-height: 16rem;
  overflow-y: auto;
  box-sizing: border-box;
  animation: og-ms-enter 0.15s ease-out;
}

@keyframes og-ms-enter {
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.og-multiselect__filter-container {
  position: sticky;
  top: 0;
  background-color: var(--og-color-white);
  z-index: 1;
  padding: var(--og-spacing-xs) var(--og-spacing-sm);
  border-bottom: 1px solid var(--og-border-color);
}

.og-multiselect__filter-input {
  width: 100%;
  padding: var(--og-spacing-xs) var(--og-spacing-sm);
  font-size: var(--og-font-size-xs);
  background-color: var(--og-bg-muted);
  color: var(--og-text-primary);
  border: 1px solid var(--og-border-color);
  border-radius: var(--og-radius-sm);
  outline: none;
  box-sizing: border-box;
}
.og-multiselect__filter-input:focus {
  border-color: var(--og-border-color-focus);
}

.og-multiselect__list {
  list-style: none;
  margin: 0;
  padding: 0.25rem 0;
}

.og-multiselect__option {
  display: flex;
  align-items: center;
  gap: var(--og-spacing-sm);
  padding: var(--og-spacing-sm) var(--og-spacing-md);
  font-family: var(--og-font-family);
  font-size: var(--og-font-size-sm);
  color: var(--og-text-primary);
  cursor: pointer;
  transition: background-color var(--og-transition-fast);
}

.og-multiselect__option:hover {
  background-color: var(--og-bg-subtle);
}

.og-multiselect__option--selected {
  background-color: var(--og-color-primary-50);
}

.og-multiselect__empty {
  padding: var(--og-spacing-md);
  font-size: var(--og-font-size-sm);
  color: var(--og-text-muted);
  text-align: center;
}
</style>
