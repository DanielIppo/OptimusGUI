<template>
  <div :class="skeletonClasses" :style="customStyle" />
</template>

<script setup lang="ts">
import { computed } from 'vue';

defineOptions({
  name: 'OgSkeleton',
});

export interface OgSkeletonProps {
  shape?: 'rectangle' | 'circle';
  size?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  animation?: 'wave' | 'none';
}

const props = withDefaults(defineProps<OgSkeletonProps>(), {
  shape: 'rectangle',
  width: '100%',
  height: '1rem',
  animation: 'wave',
});

const customStyle = computed(() => {
  if (props.size) {
    return {
      width: props.size,
      height: props.size,
      borderRadius: props.shape === 'circle' ? '50%' : props.borderRadius,
    };
  }
  return {
    width: props.width,
    height: props.height,
    borderRadius: props.shape === 'circle' ? '50%' : props.borderRadius,
  };
});

const skeletonClasses = computed(() => [
  'og-skeleton',
  `og-skeleton--${props.shape}`,
  `og-skeleton--anim-${props.animation}`,
]);
</script>

<style scoped>
.og-skeleton {
  --og-skeleton-bg: var(--og-bg-muted);
  --og-skeleton-radius: var(--og-radius-md);

  background-color: var(--og-skeleton-bg);
  border-radius: var(--og-skeleton-radius);
  position: relative;
  overflow: hidden;
  display: inline-block;
}

.og-skeleton--circle {
  border-radius: 50%;
}

.og-skeleton--anim-wave::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transform: translateX(-100%);
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.4),
    transparent
  );
  animation: og-skeleton-wave 1.5s infinite;
}

@keyframes og-skeleton-wave {
  100% {
    transform: translateX(100%);
  }
}
</style>
