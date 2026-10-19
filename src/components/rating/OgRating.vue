<template>
  <div :class="['og-rating', { 'og-rating--disabled': disabled, 'og-rating--readonly': readonly }]">
    <button
      v-if="cancel"
      type="button"
      class="og-rating__cancel"
      aria-label="Cancel rating"
      :disabled="disabled || readonly"
      @click="clear"
    >
      <slot name="cancelicon">⊘</slot>
    </button>
    <button
      v-for="star in stars"
      :key="star"
      type="button"
      :class="['og-rating__star', { 'og-rating__star--active': star <= (modelValue ?? 0) }]"
      :aria-label="`Rate ${star} stars`"
      :disabled="disabled || readonly"
      @click="select(star)"
    >
      <slot name="item" :value="star" :active="star <= (modelValue ?? 0)">
        ★
      </slot>
    </button>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'OgRating',
});

export interface OgRatingProps {
  modelValue?: number | null;
  stars?: number;
  cancel?: boolean;
  disabled?: boolean;
  readonly?: boolean;
}

const props = withDefaults(defineProps<OgRatingProps>(), {
  modelValue: 0,
  stars: 5,
  cancel: true,
  disabled: false,
  readonly: false,
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: number | null): void;
  (e: 'change', value: number | null): void;
}>();

const select = (value: number) => {
  if (props.disabled || props.readonly) return;
  emit('update:modelValue', value);
  emit('change', value);
};

const clear = () => {
  if (props.disabled || props.readonly) return;
  emit('update:modelValue', null);
  emit('change', null);
};
</script>

<style scoped>
.og-rating {
  --og-rating-color: var(--og-color-gray-300);
  --og-rating-active-color: #f59e0b;

  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
}

.og-rating__star,
.og-rating__cancel {
  border: none;
  background: transparent;
  padding: 0;
  font-size: 1.5rem;
  line-height: 1;
  color: var(--og-rating-color);
  cursor: pointer;
  transition: color var(--og-transition-fast), transform var(--og-transition-fast);
}

.og-rating__star:hover:not(:disabled) {
  transform: scale(1.15);
}

.og-rating__star--active {
  color: var(--og-rating-active-color);
}

.og-rating__cancel {
  font-size: 1.25rem;
  color: var(--og-text-muted);
  margin-right: 0.25rem;
}

.og-rating--disabled,
.og-rating--readonly {
  opacity: 0.7;
}
.og-rating--disabled .og-rating__star,
.og-rating--readonly .og-rating__star,
.og-rating--disabled .og-rating__cancel,
.og-rating--readonly .og-rating__cancel {
  cursor: default;
}
</style>
