<template>
  <Teleport to="body">
    <div
      v-if="visible"
      :class="['og-dialog-mask', { 'og-dialog-mask--modal': modal }, `og-dialog-mask--${position}`]"
      @click="onMaskClick"
    >
      <div
        ref="dialogRef"
        :class="dialogClasses"
        :style="style"
        role="dialog"
        aria-modal="true"
        tabindex="-1"
        @click.stop
        @keydown.esc="onEsc"
      >
        <!-- Header -->
        <div v-if="header || $slots.header || closable" class="og-dialog__header">
          <slot name="header">
            <span class="og-dialog__title">{{ header }}</span>
          </slot>
          <button v-if="closable" type="button" class="og-dialog__close" aria-label="Close" @click="close">
            <slot name="closeicon">✕</slot>
          </button>
        </div>

        <!-- Content -->
        <div class="og-dialog__content">
          <slot />
        </div>

        <!-- Footer -->
        <div v-if="$slots.footer" class="og-dialog__footer">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, ref, watch, onMounted, onUnmounted } from 'vue';

defineOptions({
  name: 'OgDialog',
});

export interface OgDialogProps {
  visible?: boolean;
  header?: string;
  modal?: boolean;
  closable?: boolean;
  closeOnEscape?: boolean;
  dismissableMask?: boolean;
  position?: 'center' | 'top' | 'bottom' | 'left' | 'right' | 'topleft' | 'topright' | 'bottomleft' | 'bottomright';
  style?: any;
}

const props = withDefaults(defineProps<OgDialogProps>(), {
  visible: false,
  modal: true,
  closable: true,
  closeOnEscape: true,
  dismissableMask: false,
  position: 'center',
});

const emit = defineEmits<{
  (e: 'update:visible', value: boolean): void;
  (e: 'show'): void;
  (e: 'hide'): void;
}>();

const dialogRef = ref<HTMLElement | null>(null);

const close = () => {
  emit('update:visible', false);
  emit('hide');
};

const onMaskClick = () => {
  if (props.dismissableMask) {
    close();
  }
};

const onEsc = () => {
  if (props.closeOnEscape && props.closable) {
    close();
  }
};

watch(
  () => props.visible,
  (newVal) => {
    if (newVal) {
      emit('show');
      document.body.style.overflow = props.modal ? 'hidden' : '';
    } else {
      document.body.style.overflow = '';
    }
  }
);

onUnmounted(() => {
  document.body.style.overflow = '';
});

const dialogClasses = computed(() => ['og-dialog']);
</script>

<style scoped>
.og-dialog-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  z-index: var(--og-z-modal);
  pointer-events: auto;
}

.og-dialog-mask--modal {
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
}

/* Positions */
.og-dialog-mask--center {
  align-items: center;
  justify-content: center;
}
.og-dialog-mask--top {
  align-items: flex-start;
  justify-content: center;
  padding-top: 3rem;
}
.og-dialog-mask--bottom {
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 3rem;
}
.og-dialog-mask--left {
  align-items: center;
  justify-content: flex-start;
  padding-left: 3rem;
}
.og-dialog-mask--right {
  align-items: center;
  justify-content: flex-end;
  padding-right: 3rem;
}

.og-dialog {
  --og-dialog-bg: var(--og-color-white);
  --og-dialog-border-color: var(--og-border-color);
  --og-dialog-border-radius: var(--og-radius-lg);
  --og-dialog-shadow: var(--og-shadow-lg);

  background-color: var(--og-dialog-bg);
  border: 1px solid var(--og-dialog-border-color);
  border-radius: var(--og-dialog-border-radius);
  box-shadow: var(--og-dialog-shadow);
  display: flex;
  flex-direction: column;
  min-width: 24rem;
  max-width: 90vw;
  max-height: 90vh;
  overflow: hidden;
  outline: none;
}

.og-dialog__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--og-spacing-lg) var(--og-spacing-xl);
  border-bottom: 1px solid var(--og-border-color);
}

.og-dialog__title {
  font-family: var(--og-font-family);
  font-size: var(--og-font-size-lg);
  font-weight: var(--og-font-weight-semibold);
  color: var(--og-text-primary);
}

.og-dialog__close {
  border: none;
  background: transparent;
  font-size: 1.1rem;
  color: var(--og-text-muted);
  cursor: pointer;
  padding: 0.25rem;
  border-radius: var(--og-radius-sm);
  transition: color var(--og-transition-fast), background-color var(--og-transition-fast);
}
.og-dialog__close:hover {
  color: var(--og-text-primary);
  background-color: var(--og-bg-subtle);
}

.og-dialog__content {
  padding: var(--og-spacing-xl);
  overflow-y: auto;
  font-family: var(--og-font-family);
  font-size: var(--og-font-size-sm);
  color: var(--og-text-primary);
}

.og-dialog__footer {
  padding: var(--og-spacing-md) var(--og-spacing-xl);
  border-top: 1px solid var(--og-border-color);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: var(--og-spacing-md);
}
</style>
