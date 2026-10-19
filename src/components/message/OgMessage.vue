<template>
  <div v-if="visible" :class="messageClasses" role="alert">
    <div class="og-message__wrapper">
      <span class="og-message__icon">
        <slot name="icon">
          <span v-if="icon" :class="icon" />
          <span v-else-if="severity === 'success'">✓</span>
          <span v-else-if="severity === 'warning'">⚠</span>
          <span v-else-if="severity === 'danger'">✕</span>
          <span v-else>ℹ</span>
        </slot>
      </span>

      <div class="og-message__content">
        <slot />
      </div>

      <button v-if="closable" type="button" class="og-message__close" aria-label="Close" @click="close">
        <slot name="closeicon">✕</slot>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import type { OgSeverity } from '@/types';

defineOptions({
  name: 'OgMessage',
});

export interface OgMessageProps {
  severity?: OgSeverity | 'contrast';
  closable?: boolean;
  icon?: string;
}

const props = withDefaults(defineProps<OgMessageProps>(), {
  severity: 'info',
  closable: false,
});

const emit = defineEmits<{
  (e: 'close', event: MouseEvent): void;
}>();

const visible = ref(true);

const close = (event: MouseEvent) => {
  visible.value = false;
  emit('close', event);
};

const messageClasses = computed(() => [
  'og-message',
  `og-message--${props.severity}`,
]);
</script>

<style scoped>
.og-message {
  --og-msg-bg: var(--og-color-info-bg);
  --og-msg-border-color: var(--og-color-info-border);
  --og-msg-text-color: var(--og-color-info-text);

  width: 100%;
  padding: var(--og-spacing-md) var(--og-spacing-lg);
  border-radius: var(--og-radius-md);
  border: 1px solid var(--og-msg-border-color);
  background-color: var(--og-msg-bg);
  color: var(--og-msg-text-color);
  font-family: var(--og-font-family);
  font-size: var(--og-font-size-sm);
  box-sizing: border-box;
}

.og-message__wrapper {
  display: flex;
  align-items: center;
  gap: var(--og-spacing-md);
}

.og-message__icon {
  font-size: 1.1rem;
  font-weight: bold;
}

.og-message__content {
  flex: 1;
}

.og-message__close {
  border: none;
  background: transparent;
  color: currentColor;
  cursor: pointer;
  opacity: 0.7;
  padding: 0;
  font-size: 0.875rem;
}
.og-message__close:hover {
  opacity: 1;
}

.og-message--success {
  --og-msg-bg: var(--og-color-success-bg);
  --og-msg-border-color: var(--og-color-success-border);
  --og-msg-text-color: var(--og-color-success-text);
}

.og-message--warning {
  --og-msg-bg: var(--og-color-warning-bg);
  --og-msg-border-color: var(--og-color-warning-border);
  --og-msg-text-color: var(--og-color-warning-text);
}

.og-message--danger {
  --og-msg-bg: var(--og-color-danger-bg);
  --og-msg-border-color: var(--og-color-danger-border);
  --og-msg-text-color: var(--og-color-danger-text);
}
</style>
