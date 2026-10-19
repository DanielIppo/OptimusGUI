<template>
  <div class="og-stepper">
    <div class="og-stepper__header">
      <button
        v-for="(step, idx) in steps"
        :key="idx"
        type="button"
        :class="['og-stepper__step-btn', { 'og-stepper__step-btn--active': activeStep === idx + 1 }]"
        @click="setStep(idx + 1)"
      >
        <span class="og-stepper__number">{{ idx + 1 }}</span>
        <span class="og-stepper__title">{{ step }}</span>
      </button>
    </div>
    <div class="og-stepper__content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, provide, watch } from 'vue';

defineOptions({
  name: 'OgStepper',
});

export interface OgStepperProps {
  value?: number;
  steps?: string[];
}

const props = withDefaults(defineProps<OgStepperProps>(), {
  value: 1,
  steps: () => ['Step 1', 'Step 2', 'Step 3'],
});

const emit = defineEmits<{
  (e: 'update:value', value: number): void;
}>();

const activeStep = ref(props.value);

watch(
  () => props.value,
  (val) => {
    activeStep.value = val;
  }
);

const setStep = (stepNumber: number) => {
  activeStep.value = stepNumber;
  emit('update:value', stepNumber);
};

provide('ogStepper', { activeStep, setStep });
</script>

<style scoped>
.og-stepper {
  display: flex;
  flex-direction: column;
  gap: var(--og-spacing-lg);
  width: 100%;
}

.og-stepper__header {
  display: flex;
  align-items: center;
  gap: var(--og-spacing-md);
  border-bottom: 1px solid var(--og-border-color);
  padding-bottom: var(--og-spacing-md);
}

.og-stepper__step-btn {
  display: flex;
  align-items: center;
  gap: var(--og-spacing-xs);
  border: none;
  background: transparent;
  cursor: pointer;
  font-family: var(--og-font-family);
  font-size: var(--og-font-size-sm);
  color: var(--og-text-secondary);
}

.og-stepper__number {
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background-color: var(--og-bg-muted);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: var(--og-font-weight-bold);
  font-size: var(--og-font-size-xs);
}

.og-stepper__step-btn--active {
  color: var(--og-color-primary-500);
  font-weight: var(--og-font-weight-semibold);
}
.og-stepper__step-btn--active .og-stepper__number {
  background-color: var(--og-color-primary-500);
  color: var(--og-color-primary-contrast);
}
</style>
