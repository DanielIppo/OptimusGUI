<template>
  <Teleport to="body">
    <div
      v-if="visible"
      :class="['og-drawer-mask', { 'og-drawer-mask--modal': modal }]"
      @click="onMaskClick"
    >
      <div
        :class="drawerClasses"
        role="complementary"
        aria-modal="true"
        tabindex="-1"
        @click.stop
        @keydown.esc="onEsc"
      >
        <div v-if="header || $slots.header || closable" class="og-drawer__header">
          <slot name="header">
            <span class="og-drawer__title">{{ header }}</span>
          </slot>
          <button v-if="closable" type="button" class="og-drawer__close" aria-label="Close" @click="close">
            <slot name="closeicon">✕</slot>
          </button>
        </div>

        <div class="og-drawer__content">
          <slot />
        </div>

        <div v-if="$slots.footer" class="og-drawer__footer">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, watch, onUnmounted } from 'vue';

defineOptions({
  name: 'OgDrawer',
});

export interface OgDrawerProps {
  visible?: boolean;
  position?: 'left' | 'right' | 'top' | 'bottom';
  header?: string;
  modal?: boolean;
  closable?: boolean;
  dismissableMask?: boolean;
  closeOnEscape?: boolean;
  fullScreen?: boolean;
}

const props = withDefaults(defineProps<OgDrawerProps>(), {
  visible: false,
  position: 'left',
  modal: true,
  closable: true,
  dismissableMask: true,
  closeOnEscape: true,
  fullScreen: false,
});

const emit = defineEmits<{
  (e: 'update:visible', value: boolean): void;
  (e: 'show'): void;
  (e: 'hide'): void;
}>();

const close = () => {
  emit('update:visible', false);
  emit('hide');
};

const onMaskClick = () => {
  if (props.dismissableMask) close();
};

const onEsc = () => {
  if (props.closeOnEscape && props.closable) close();
};

watch(
  () => props.visible,
  (newVal) => {
    if (newVal) {
      emit('show');
      if (props.modal) document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
);

onUnmounted(() => {
  document.body.style.overflow = '';
});

const drawerClasses = computed(() => [
  'og-drawer',
  `og-drawer--${props.position}`,
  { 'og-drawer--fullscreen': props.fullScreen },
]);
</script>

<style scoped>
.og-drawer-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: var(--og-z-modal);
}

.og-drawer-mask--modal {
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
}

.og-drawer {
  --og-drawer-bg: var(--og-color-white);
  --og-drawer-shadow: var(--og-shadow-lg);

  position: fixed;
  background-color: var(--og-drawer-bg);
  box-shadow: var(--og-drawer-shadow);
  display: flex;
  flex-direction: column;
  z-index: calc(var(--og-z-modal) + 1);
  box-sizing: border-box;
  transition: transform var(--og-transition-normal);
}

.og-drawer--left {
  top: 0;
  left: 0;
  bottom: 0;
  width: 20rem;
  max-width: 100vw;
}

.og-drawer--right {
  top: 0;
  right: 0;
  bottom: 0;
  width: 20rem;
  max-width: 100vw;
}

.og-drawer--top {
  top: 0;
  left: 0;
  right: 0;
  height: 15rem;
  max-height: 100vh;
}

.og-drawer--bottom {
  bottom: 0;
  left: 0;
  right: 0;
  height: 15rem;
  max-height: 100vh;
}

.og-drawer--fullscreen {
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}

.og-drawer__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--og-spacing-lg) var(--og-spacing-xl);
  border-bottom: 1px solid var(--og-border-color);
}

.og-drawer__title {
  font-family: var(--og-font-family);
  font-size: var(--og-font-size-lg);
  font-weight: var(--og-font-weight-semibold);
  color: var(--og-text-primary);
}

.og-drawer__close {
  border: none;
  background: transparent;
  font-size: 1.1rem;
  color: var(--og-text-muted);
  cursor: pointer;
  padding: 0.25rem;
}
.og-drawer__close:hover {
  color: var(--og-text-primary);
}

.og-drawer__content {
  flex: 1;
  padding: var(--og-spacing-xl);
  overflow-y: auto;
  font-family: var(--og-font-family);
  font-size: var(--og-font-size-sm);
}

.og-drawer__footer {
  padding: var(--og-spacing-md) var(--og-spacing-xl);
  border-top: 1px solid var(--og-border-color);
}
</style>
