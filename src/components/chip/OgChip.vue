<template>
  <div v-if="visible" class="og-chip">
    <slot name="icon">
      <img v-if="image" :src="image" alt="chip avatar" class="og-chip__image" />
      <span v-else-if="icon" :class="['og-chip__icon', icon]" />
    </slot>
    <span class="og-chip__label">
      <slot>{{ label }}</slot>
    </span>
    <button v-if="removable" type="button" class="og-chip__remove" aria-label="Remove" @click="remove">
      <slot name="removeicon">✕</slot>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineOptions({
  name: 'OgChip',
});

export interface OgChipProps {
  label?: string;
  icon?: string;
  image?: string;
  removable?: boolean;
}

withDefaults(defineProps<OgChipProps>(), {
  removable: false,
});

const emit = defineEmits<{
  (e: 'remove', event: MouseEvent): void;
}>();

const visible = ref(true);

const remove = (event: MouseEvent) => {
  visible.value = false;
  emit('remove', event);
};
</script>

<style scoped>
.og-chip {
  --og-chip-bg: var(--og-color-gray-100);
  --og-chip-color: var(--og-text-primary);
  --og-chip-radius: var(--og-radius-full);

  display: inline-flex;
  align-items: center;
  gap: var(--og-spacing-xs);
  padding: 0.25rem 0.625rem;
  border-radius: var(--og-chip-radius);
  background-color: var(--og-chip-bg);
  color: var(--og-chip-color);
  font-family: var(--og-font-family);
  font-size: var(--og-font-size-xs);
  font-weight: var(--og-font-weight-medium);
  user-select: none;
}

.og-chip__image {
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  object-fit: cover;
  margin-left: -0.25rem;
}

.og-chip__icon {
  font-size: 0.875rem;
}

.og-chip__label {
  line-height: 1.2;
}

.og-chip__remove {
  border: none;
  background: transparent;
  color: var(--og-text-muted);
  cursor: pointer;
  padding: 0;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 0.125rem;
}
.og-chip__remove:hover {
  color: var(--og-text-primary);
}
</style>
