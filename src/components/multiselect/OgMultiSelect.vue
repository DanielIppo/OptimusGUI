<template>
  <div ref="containerRef" :class="['og-multiselect', { 'og-multiselect--disabled': disabled }]">
    <div class="og-multiselect__trigger" tabindex="0" @click="toggle" @keydown.enter.prevent="toggle">
      <div class="og-multiselect__label">
        <span v-if="selectedLabels.length > 0">{{ selectedLabels.join(', ') }}</span>
        <span v-else class="og-multiselect__placeholder">{{ placeholder }}</span>
      </div>
      <span class="og-multiselect__icon">▼</span>
    </div>

    <Teleport to="body">
      <div v-if="isOpen" ref="overlayRef" class="og-multiselect__overlay" :style="overlayStyle">
        <ul class="og-multiselect__list">
          <li
            v-for="(option, idx) in options"
            :key="idx"
            :class="['og-multiselect__option', { 'og-multiselect__option--selected': isSelected(option) }]"
            @click="toggleOption(option)"
          >
            <OgCheckbox :model-value="isSelected(option)" binary style="pointer-events: none;" />
            <span>{{ getLabel(option) }}</span>
          </li>
        </ul>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch, nextTick, onMounted, onUnmounted } from 'vue';
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
  disabled?: boolean;
}

const props = withDefaults(defineProps<OgMultiSelectProps>(), {
  modelValue: () => [],
  options: () => [],
  placeholder: 'Select items',
  disabled: false,
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: any[]): void;
  (e: 'change', value: any[]): void;
}>();

const isOpen = ref(false);
const containerRef = ref<HTMLElement | null>(null);
const overlayRef = ref<HTMLElement | null>(null);
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
  return props.modelValue.includes(val);
};

const selectedLabels = computed(() => {
  return props.options
    .filter((opt) => isSelected(opt))
    .map((opt) => getLabel(opt));
});

const toggleOption = (opt: any) => {
  const val = getValue(opt);
  let updated = [...props.modelValue];
  if (updated.includes(val)) {
    updated = updated.filter((v) => v !== val);
  } else {
    updated.push(val);
  }
  emit('update:modelValue', updated);
  emit('change', updated);
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

const toggle = () => {
  if (props.disabled) return;
  isOpen.value = !isOpen.value;
  if (isOpen.value) {
    nextTick(updateOverlayPosition);
  }
};

const handleClickOutside = (e: MouseEvent) => {
  if (
    containerRef.value &&
    !containerRef.value.contains(e.target as Node) &&
    overlayRef.value &&
    !overlayRef.value.contains(e.target as Node)
  ) {
    isOpen.value = false;
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
</script>

<style scoped>
.og-multiselect {
  display: inline-flex;
  position: relative;
  width: 14rem;
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
}

.og-multiselect__label {
  font-family: var(--og-font-family);
  font-size: var(--og-font-size-sm);
  color: var(--og-text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.og-multiselect__placeholder {
  color: var(--og-text-muted);
}

.og-multiselect__icon {
  font-size: 0.75rem;
  color: var(--og-text-muted);
}

.og-multiselect--disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>

<style>
.og-multiselect__overlay {
  background-color: var(--og-color-white);
  border: 1px solid var(--og-border-color);
  border-radius: var(--og-radius-md);
  box-shadow: var(--og-shadow-lg);
  max-height: 16rem;
  overflow-y: auto;
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
}

.og-multiselect__option:hover {
  background-color: var(--og-bg-subtle);
}

.og-multiselect__option--selected {
  background-color: var(--og-color-primary-50);
}

.og-multiselect__checkbox {
  pointer-events: none;
}
</style>
