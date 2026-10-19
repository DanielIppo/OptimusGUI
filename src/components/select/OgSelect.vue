<template>
  <div ref="containerRef" :class="selectClasses">
    <div class="og-select__trigger" tabindex="0" @click="handleTriggerClick" @keydown="onKeydown">
      <div class="og-select__label">
        <slot name="value" :value="selectedOption" :placeholder="placeholder">
          <span v-if="selectedOption !== null && selectedOption !== undefined">
            {{ selectedLabel }}
          </span>
          <span v-else class="og-select__placeholder">{{ placeholder }}</span>
        </slot>
      </div>

      <!-- Clear Icon -->
      <span
        v-if="showClear && selectedOption !== null && selectedOption !== undefined && !disabled"
        class="og-select__clear"
        @click.stop="clear"
      >
        <slot name="clearicon">✕</slot>
      </span>

      <!-- Dropdown Icon / Spinner -->
      <span class="og-select__dropdown-icon">
        <slot name="dropdownicon">
          <svg
            v-if="!loading"
            class="og-select__chevron"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
          <svg v-else class="og-select__spinner" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" style="opacity: 0.25;" />
            <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" style="opacity: 0.75;" />
          </svg>
        </slot>
      </span>
    </div>

    <!-- Overlay Panel -->
    <Teleport to="body" :disabled="!overlayTeleport">
      <div v-if="isOpen" ref="overlayRef" class="og-select__overlay" :style="overlayStyle">
        <div v-if="$slots.header" class="og-select__header">
          <slot name="header" />
        </div>

        <!-- Filter Input -->
        <div v-if="filter" class="og-select__filter-container">
          <input
            ref="filterInputRef"
            v-model="filterQuery"
            type="text"
            class="og-select__filter-input"
            :placeholder="filterPlaceholder"
          />
        </div>

        <!-- Options List -->
        <ul class="og-select__list" role="listbox">
          <li
            v-for="(option, index) in filteredOptions"
            :key="index"
            :class="[
              'og-select__option',
              {
                'og-select__option--selected': isSelected(option),
                'og-select__option--disabled': isOptionDisabled(option),
              },
            ]"
            role="option"
            :aria-selected="isSelected(option)"
            @click="selectOption(option)"
          >
            <slot name="option" :option="option" :index="index">
              {{ getOptionLabel(option) }}
            </slot>
          </li>
          <li v-if="filteredOptions.length === 0" class="og-select__empty">
            {{ emptyMessage }}
          </li>
        </ul>

        <div v-if="$slots.footer" class="og-select__footer">
          <slot name="footer" />
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted, nextTick, watch } from 'vue';
import type { OgSize } from '@/types';
import { useSelect } from '@/composables/useSelect';

defineOptions({
  name: 'OgSelect',
});

export interface OgSelectProps {
  modelValue?: any;
  options?: any[];
  optionLabel?: string;
  optionValue?: string;
  optionDisabled?: string;
  placeholder?: string;
  filter?: boolean;
  filterPlaceholder?: string;
  emptyMessage?: string;
  showClear?: boolean;
  disabled?: boolean;
  invalid?: boolean;
  size?: OgSize;
  fluid?: boolean;
  loading?: boolean;
  overlayTeleport?: boolean;
}

const props = withDefaults(defineProps<OgSelectProps>(), {
  options: () => [],
  placeholder: 'Select an option',
  filterPlaceholder: 'Search...',
  emptyMessage: 'No options found',
  filter: false,
  showClear: false,
  disabled: false,
  invalid: false,
  fluid: false,
  loading: false,
  overlayTeleport: true,
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: any): void;
  (e: 'change', value: any): void;
  (e: 'focus', event: FocusEvent): void;
  (e: 'blur', event: FocusEvent): void;
}>();

const containerRef = ref<HTMLElement | null>(null);
const overlayRef = ref<HTMLElement | null>(null);
const filterInputRef = ref<HTMLInputElement | null>(null);
const overlayStyle = ref<Record<string, string>>({});

const {
  isOpen,
  filterQuery,
  filteredOptions,
  getOptionLabel,
  getOptionValue,
  isOptionDisabled,
  toggle,
  close,
} = useSelect({
  options: props.options,
  optionLabel: props.optionLabel,
  optionValue: props.optionValue,
  optionDisabled: props.optionDisabled,
  filter: props.filter,
});

const selectedOption = computed(() => {
  if (props.modelValue === null || props.modelValue === undefined) return null;
  return props.options.find((opt) => getOptionValue(opt) === props.modelValue) ?? props.modelValue;
});

const selectedLabel = computed(() => {
  if (selectedOption.value !== null && selectedOption.value !== undefined) {
    return getOptionLabel(selectedOption.value);
  }
  return '';
});

const isSelected = (option: any) => {
  const val = getOptionValue(option);
  return val === props.modelValue;
};

const selectOption = (option: any) => {
  if (isOptionDisabled(option)) return;
  const val = getOptionValue(option);
  emit('update:modelValue', val);
  emit('change', val);
  close();
};

const clear = () => {
  emit('update:modelValue', null);
  emit('change', null);
};

const updateOverlayPosition = () => {
  if (!containerRef.value || !props.overlayTeleport) return;
  const rect = containerRef.value.getBoundingClientRect();
  overlayStyle.value = {
    position: 'absolute',
    top: `${rect.bottom + window.scrollY + 4}px`,
    left: `${rect.left + window.scrollX}px`,
    width: `${rect.width}px`,
    zIndex: 'var(--og-z-dropdown)',
  };
};

const handleTriggerClick = () => {
  if (props.disabled || props.loading) return;
  toggle();
  if (isOpen.value) {
    nextTick(() => {
      updateOverlayPosition();
      if (props.filter && filterInputRef.value) {
        filterInputRef.value.focus();
      }
    });
  }
};

const onKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    handleTriggerClick();
  } else if (event.key === 'Escape') {
    close();
  }
};

const handleClickOutside = (event: MouseEvent) => {
  if (
    containerRef.value &&
    !containerRef.value.contains(event.target as Node) &&
    overlayRef.value &&
    !overlayRef.value.contains(event.target as Node)
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
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
  window.removeEventListener('resize', updateOverlayPosition);
  window.removeEventListener('scroll', updateOverlayPosition, true);
});

const selectClasses = computed(() => [
  'og-select',
  props.size ? `og-select--${props.size}` : '',
  {
    'og-select--open': isOpen.value,
    'og-select--invalid': props.invalid,
    'og-select--fluid': props.fluid,
    'og-select--disabled': props.disabled,
  },
]);
</script>

<style scoped>
.og-select {
  --og-select-bg: var(--og-color-white);
  --og-select-border-color: var(--og-border-color);
  --og-select-border-radius: var(--og-radius-md);
  --og-select-padding-x: var(--og-spacing-md);
  --og-select-padding-y: var(--og-spacing-sm);
  --og-select-font-size: var(--og-font-size-sm);

  display: inline-flex;
  position: relative;
  width: 14rem;
  box-sizing: border-box;
}

.og-select__trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: var(--og-select-padding-y) var(--og-select-padding-x);
  background-color: var(--og-select-bg);
  border: 1px solid var(--og-select-border-color);
  border-radius: var(--og-select-border-radius);
  cursor: pointer;
  outline: none;
  transition: border-color var(--og-transition-fast), box-shadow var(--og-transition-fast);
}

.og-select__trigger:focus-visible {
  border-color: var(--og-border-color-focus);
  box-shadow: var(--og-focus-ring);
}

.og-select__label {
  flex: 1;
  font-family: var(--og-font-family);
  font-size: var(--og-select-font-size);
  color: var(--og-text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.og-select__placeholder {
  color: var(--og-text-muted);
}

.og-select__clear {
  color: var(--og-text-muted);
  font-size: 0.8rem;
  padding: 0 0.25rem;
  cursor: pointer;
}
.og-select__clear:hover {
  color: var(--og-text-primary);
}

.og-select__dropdown-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--og-text-muted);
  margin-left: var(--og-spacing-xs);
}

.og-select__chevron {
  width: 1rem;
  height: 1rem;
  transition: transform var(--og-transition-fast);
}
.og-select--open .og-select__chevron {
  transform: rotate(180deg);
}

.og-select__spinner {
  width: 1rem;
  height: 1rem;
  animation: og-spin 1s linear infinite;
}

.og-select--fluid {
  width: 100%;
}

.og-select--invalid .og-select__trigger {
  border-color: var(--og-color-danger-text);
}

.og-select--disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

@keyframes og-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>

<!-- Unscoped overlay styles for teleport -->
<style>
.og-select__overlay {
  background-color: var(--og-color-white);
  border: 1px solid var(--og-border-color);
  border-radius: var(--og-radius-md);
  box-shadow: var(--og-shadow-lg);
  max-height: 16rem;
  overflow-y: auto;
}

.og-select__filter-container {
  padding: var(--og-spacing-xs) var(--og-spacing-sm);
  border-bottom: 1px solid var(--og-border-color);
}

.og-select__filter-input {
  width: 100%;
  padding: var(--og-spacing-xs) var(--og-spacing-sm);
  font-size: var(--og-font-size-xs);
  border: 1px solid var(--og-border-color);
  border-radius: var(--og-radius-sm);
  outline: none;
  box-sizing: border-box;
}

.og-select__list {
  list-style: none;
  margin: 0;
  padding: 0.25rem 0;
}

.og-select__option {
  padding: var(--og-spacing-sm) var(--og-spacing-md);
  font-family: var(--og-font-family);
  font-size: var(--og-font-size-sm);
  color: var(--og-text-primary);
  cursor: pointer;
  transition: background-color var(--og-transition-fast);
}

.og-select__option:hover:not(.og-select__option--disabled) {
  background-color: var(--og-bg-subtle);
}

.og-select__option--selected {
  background-color: var(--og-color-primary-50);
  color: var(--og-color-primary-500);
  font-weight: var(--og-font-weight-medium);
}

.og-select__option--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.og-select__empty {
  padding: var(--og-spacing-md);
  font-size: var(--og-font-size-sm);
  color: var(--og-text-muted);
  text-align: center;
}
</style>
