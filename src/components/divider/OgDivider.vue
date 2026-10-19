<template>
  <div :class="dividerClasses" role="separator">
    <div v-if="$slots.default" class="og-divider__content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

defineOptions({
  name: 'OgDivider',
});

export interface OgDividerProps {
  align?: 'left' | 'center' | 'right' | 'top' | 'bottom';
  layout?: 'horizontal' | 'vertical';
  type?: 'solid' | 'dashed' | 'dotted';
}

const props = withDefaults(defineProps<OgDividerProps>(), {
  align: 'center',
  layout: 'horizontal',
  type: 'solid',
});

const dividerClasses = computed(() => [
  'og-divider',
  `og-divider--${props.layout}`,
  `og-divider--${props.type}`,
  `og-divider--align-${props.align}`,
]);
</script>

<style scoped>
.og-divider {
  --og-divider-color: var(--og-border-color);

  display: flex;
  position: relative;
  font-family: var(--og-font-family);
  font-size: var(--og-font-size-xs);
  color: var(--og-text-secondary);
}

.og-divider--horizontal {
  width: 100%;
  margin: var(--og-spacing-lg) 0;
  border-top: 1px solid var(--og-divider-color);
  align-items: center;
}

.og-divider--horizontal.og-divider--dashed {
  border-top-style: dashed;
}
.og-divider--horizontal.og-divider--dotted {
  border-top-style: dotted;
}

.og-divider--vertical {
  min-height: 1rem;
  margin: 0 var(--og-spacing-lg);
  border-left: 1px solid var(--og-divider-color);
  flex-direction: column;
  justify-content: center;
}

.og-divider--vertical.og-divider--dashed {
  border-left-style: dashed;
}
.og-divider--vertical.og-divider--dotted {
  border-left-style: dotted;
}

.og-divider__content {
  background-color: var(--og-bg-body);
  padding: 0 var(--og-spacing-md);
  z-index: 1;
}

.og-divider--align-left {
  justify-content: flex-start;
}
.og-divider--align-center {
  justify-content: center;
}
.og-divider--align-right {
  justify-content: flex-end;
}

.og-divider--align-top {
  align-items: flex-start;
}
.og-divider--align-bottom {
  align-items: flex-end;
}
</style>
