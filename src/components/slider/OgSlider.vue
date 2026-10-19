<template>
  <div ref="sliderRef" :class="sliderClasses" @mousedown="onPointerDown" @touchstart.passive="onPointerDown">
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
import { computed, ref, onUnmounted } from 'vue';

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

const sliderRef = ref<HTMLElement | null>(null);

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

const updateFromPointer = (clientX: number, clientY: number) => {
  if (!sliderRef.value || props.disabled) return;
  const rect = sliderRef.value.getBoundingClientRect();
  let ratio = 0;
  if (props.orientation === 'vertical') {
    ratio = (rect.bottom - clientY) / rect.height;
  } else {
    ratio = (clientX - rect.left) / rect.width;
  }
  ratio = Math.max(0, Math.min(1, ratio));
  const raw = props.min + ratio * (props.max - props.min);
  const stepped = Math.round(raw / props.step) * props.step;
  updateValue(stepped);
};

const onPointerMove = (e: MouseEvent | TouchEvent) => {
  const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
  const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
  updateFromPointer(clientX, clientY);
};

const onPointerUp = () => {
  window.removeEventListener('mousemove', onPointerMove);
  window.removeEventListener('mouseup', onPointerUp);
  window.removeEventListener('touchmove', onPointerMove);
  window.removeEventListener('touchend', onPointerUp);
};

const onPointerDown = (event: MouseEvent | TouchEvent) => {
  if (props.disabled) return;
  const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;
  const clientY = 'touches' in event ? event.touches[0].clientY : event.clientY;
  updateFromPointer(clientX, clientY);

  window.addEventListener('mousemove', onPointerMove);
  window.addEventListener('mouseup', onPointerUp);
  window.addEventListener('touchmove', onPointerMove);
  window.addEventListener('touchend', onPointerUp);
};

onUnmounted(() => {
  onPointerUp();
});

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
