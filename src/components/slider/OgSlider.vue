<template>
  <div :class="sliderClasses" @click="onClick">
    <div class="og-slider__track">
      <div class="og-slider__range" :style="rangeStyle" />
      <div
        class="og-slider__handle"
        tabindex="0"
        :style="handleStyle"
        @keydown.left.prevent="decrement"
        @keydown.down.prevent="decrement"
        @keydown.right.prevent="increment"
        @keydown.up.prevent="increment"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

defineOptions({
  name: 'OgSlider',
});

export interface OgSliderProps {
  modelValue?: number;
  min?: number;
  max?: number;
  step?: number;
  orientation?: 'horizontal' | 'vertical';
  disabled?: boolean;
}

const props = withDefaults(defineProps<OgSliderProps>(), {
  modelValue: 0,
  min: 0,
  max: 100,
  step: 1,
  orientation: 'horizontal',
  disabled: false,
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void;
  (e: 'change', value: number): void;
}>();

const percentage = computed(() => {
  const range = props.max - props.min;
  if (range <= 0) return 0;
  const current = Math.min(props.max, Math.max(props.min, props.modelValue));
  return ((current - props.min) / range) * 100;
});

const rangeStyle = computed(() => {
  if (props.orientation === 'vertical') {
    return { height: `${percentage.value}%`, bottom: '0' };
  }
  return { width: `${percentage.value}%`, left: '0' };
});

const handleStyle = computed(() => {
  if (props.orientation === 'vertical') {
    return { bottom: `${percentage.value}%`, left: '50%', transform: 'translate(-50%, 50%)' };
  }
  return { left: `${percentage.value}%`, top: '50%', transform: 'translate(-50%, -50%)' };
});

const updateValue = (newVal: number) => {
  if (props.disabled) return;
  let clamped = Math.min(props.max, Math.max(props.min, newVal));
  emit('update:modelValue', clamped);
  emit('change', clamped);
};

const increment = () => updateValue(props.modelValue + props.step);
const decrement = () => updateValue(props.modelValue - props.step);

const onClick = (event: MouseEvent) => {
  if (props.disabled) return;
  const target = event.currentTarget as HTMLElement;
  const rect = target.getBoundingClientRect();
  let ratio = 0;
  if (props.orientation === 'vertical') {
    ratio = (rect.bottom - event.clientY) / rect.height;
  } else {
    ratio = (event.clientX - rect.left) / rect.width;
  }
  const raw = props.min + ratio * (props.max - props.min);
  const stepped = Math.round(raw / props.step) * props.step;
  updateValue(stepped);
};

const sliderClasses = computed(() => [
  'og-slider',
  `og-slider--${props.orientation}`,
  { 'og-slider--disabled': props.disabled },
]);
</script>

<style scoped>
.og-slider {
  --og-slider-track-bg: var(--og-bg-muted);
  --og-slider-range-bg: var(--og-color-primary-500);
  --og-slider-handle-bg: var(--og-color-white);
  --og-slider-handle-border: var(--og-color-primary-500);
  --og-slider-size: 0.5rem;

  position: relative;
  cursor: pointer;
  user-select: none;
}

.og-slider--horizontal {
  width: 100%;
  height: var(--og-slider-size);
}

.og-slider--vertical {
  height: 12rem;
  width: var(--og-slider-size);
}

.og-slider__track {
  width: 100%;
  height: 100%;
  background-color: var(--og-slider-track-bg);
  border-radius: var(--og-radius-full);
  position: relative;
}

.og-slider__range {
  position: absolute;
  background-color: var(--og-slider-range-bg);
  border-radius: var(--og-radius-full);

  top: 0;
  bottom: 0;
}

.og-slider__handle {
  position: absolute;
  width: 1.25rem;
  height: 1.25rem;
  background-color: var(--og-slider-handle-bg);
  border: 2px solid var(--og-slider-handle-border);
  border-radius: 50%;
  outline: none;
  box-shadow: var(--og-shadow-sm);
  transition: box-shadow var(--og-transition-fast);
}

.og-slider__handle:focus-visible {
  box-shadow: var(--og-focus-ring);
}

.og-slider--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
