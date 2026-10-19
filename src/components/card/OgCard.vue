<template>
  <div :class="cardClasses">
    <div v-if="$slots.header" class="og-card__header">
      <slot name="header" />
    </div>
    <div class="og-card__body">
      <div v-if="title || $slots.title" class="og-card__title">
        <slot name="title">{{ title }}</slot>
      </div>
      <div v-if="subtitle || $slots.subtitle" class="og-card__subtitle">
        <slot name="subtitle">{{ subtitle }}</slot>
      </div>
      <div v-if="$slots.content" class="og-card__content">
        <slot name="content" />
      </div>
      <div v-if="$slots.footer" class="og-card__footer">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

defineOptions({
  name: 'OgCard',
});

export interface OgCardProps {
  title?: string;
  subtitle?: string;
}

defineProps<OgCardProps>();

const cardClasses = computed(() => ['og-card']);
</script>

<style scoped>
.og-card {
  --og-card-bg: var(--og-color-white);
  --og-card-border-color: var(--og-border-color);
  --og-card-border-radius: var(--og-radius-lg);
  --og-card-padding: var(--og-spacing-xl);
  --og-card-shadow: var(--og-shadow-sm);

  background-color: var(--og-card-bg);
  border: 1px solid var(--og-card-border-color);
  border-radius: var(--og-card-border-radius);
  box-shadow: var(--og-card-shadow);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.og-card__header {
  width: 100%;
}

.og-card__body {
  padding: var(--og-card-padding);
  display: flex;
  flex-direction: column;
  gap: var(--og-spacing-sm);
}

.og-card__title {
  font-family: var(--og-font-family);
  font-size: var(--og-font-size-lg);
  font-weight: var(--og-font-weight-semibold);
  color: var(--og-text-primary);
}

.og-card__subtitle {
  font-family: var(--og-font-family);
  font-size: var(--og-font-size-sm);
  color: var(--og-text-secondary);
}

.og-card__content {
  font-family: var(--og-font-family);
  font-size: var(--og-font-size-sm);
  color: var(--og-text-primary);
}

.og-card__footer {
  margin-top: var(--og-spacing-md);
}
</style>
