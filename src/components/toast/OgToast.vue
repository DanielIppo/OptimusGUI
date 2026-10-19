<template>
  <Teleport to="body">
    <div :class="['og-toast-container', `og-toast-container--${position}`]">
      <TransitionGroup name="og-toast-anim">
        <div
          v-for="msg in activeMessages"
          :key="msg.id"
          :class="['og-toast', msg.severity ? `og-toast--${msg.severity}` : 'og-toast--info']"
        >
          <div class="og-toast__icon">
            <slot name="icon" :message="msg">
              <span v-if="msg.severity === 'success'">✓</span>
              <span v-else-if="msg.severity === 'warn'">⚠</span>
              <span v-else-if="msg.severity === 'error'">✕</span>
              <span v-else>ℹ</span>
            </slot>
          </div>

          <div class="og-toast__body">
            <div v-if="msg.summary" class="og-toast__summary">{{ msg.summary }}</div>
            <div v-if="msg.detail" class="og-toast__detail">{{ msg.detail }}</div>
          </div>

          <button
            v-if="msg.closable !== false"
            type="button"
            class="og-toast__close"
            aria-label="Close"
            @click="remove(msg.id!)"
          >
            ✕
          </button>
        </div>
      </TransitionGroup>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useToast } from '@/composables/useToast';

defineOptions({
  name: 'OgToast',
});

export interface OgToastProps {
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center' | 'center';
  group?: string;
}

const props = withDefaults(defineProps<OgToastProps>(), {
  position: 'top-right',
});

const { messages, remove } = useToast();

const activeMessages = computed(() => {
  if (props.group) {
    return messages.value.filter((m) => m.group === props.group);
  }
  return messages.value.filter((m) => !m.group);
});
</script>

<style scoped>
.og-toast-container {
  position: fixed;
  z-index: var(--og-z-toast);
  display: flex;
  flex-direction: column;
  gap: var(--og-spacing-sm);
  width: 22rem;
  max-width: calc(100vw - 2rem);
  pointer-events: none;
}

.og-toast-container--top-right {
  top: 1rem;
  right: 1rem;
}
.og-toast-container--top-left {
  top: 1rem;
  left: 1rem;
}
.og-toast-container--bottom-right {
  bottom: 1rem;
  right: 1rem;
}
.og-toast-container--bottom-left {
  bottom: 1rem;
  left: 1rem;
}
.og-toast-container--top-center {
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
}
.og-toast-container--bottom-center {
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
}
.og-toast-container--center {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.og-toast {
  pointer-events: auto;
  display: flex;
  align-items: flex-start;
  gap: var(--og-spacing-md);
  padding: var(--og-spacing-md) var(--og-spacing-lg);
  border-radius: var(--og-radius-md);
  background-color: var(--og-color-white);
  border: 1px solid var(--og-border-color);
  box-shadow: var(--og-shadow-md);
  font-family: var(--og-font-family);
  box-sizing: border-box;
}

.og-toast--info {
  border-left: 4px solid #3b82f6;
}
.og-toast--info .og-toast__icon {
  color: #3b82f6;
}

.og-toast--success {
  border-left: 4px solid #10b981;
}
.og-toast--success .og-toast__icon {
  color: #10b981;
}

.og-toast--warn {
  border-left: 4px solid #f59e0b;
}
.og-toast--warn .og-toast__icon {
  color: #f59e0b;
}

.og-toast--error {
  border-left: 4px solid #ef4444;
}
.og-toast--error .og-toast__icon {
  color: #ef4444;
}

.og-toast__icon {
  font-weight: bold;
  font-size: 1.1rem;
  line-height: 1;
}

.og-toast__body {
  flex: 1;
}

.og-toast__summary {
  font-weight: var(--og-font-weight-semibold);
  font-size: var(--og-font-size-sm);
  color: var(--og-text-primary);
}

.og-toast__detail {
  font-size: var(--og-font-size-xs);
  color: var(--og-text-secondary);
  margin-top: 0.125rem;
}

.og-toast__close {
  border: none;
  background: transparent;
  color: var(--og-text-muted);
  cursor: pointer;
  font-size: 0.875rem;
  padding: 0;
  line-height: 1;
}
.og-toast__close:hover {
  color: var(--og-text-primary);
}

/* Animations */
.og-toast-anim-enter-active,
.og-toast-anim-leave-active {
  transition: all 0.25s ease;
}
.og-toast-anim-enter-from {
  opacity: 0;
  transform: translateY(-1rem);
}
.og-toast-anim-leave-to {
  opacity: 0;
  transform: translateY(-1rem);
}
</style>
