<template>
  <div :class="avatarClasses">
    <slot>
      <img v-if="image" :src="image" :alt="ariaLabel" class="og-avatar__image" />
      <span v-else-if="label" class="og-avatar__label">{{ label }}</span>
      <span v-else-if="icon" :class="['og-avatar__icon', icon]" />
    </slot>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { OgSize } from '@/types';

defineOptions({
  name: 'OgAvatar',
});

export interface OgAvatarProps {
  label?: string;
  icon?: string;
  image?: string;
  size?: OgSize | 'xlarge';
  shape?: 'square' | 'circle';
  ariaLabel?: string;
}

const props = withDefaults(defineProps<OgAvatarProps>(), {
  shape: 'square',
});

const avatarClasses = computed(() => [
  'og-avatar',
  props.size ? `og-avatar--${props.size}` : '',
  `og-avatar--${props.shape}`,
]);
</script>

<style scoped>
.og-avatar {
  --og-avatar-size: 2.5rem;
  --og-avatar-bg: var(--og-color-gray-200);
  --og-avatar-color: var(--og-color-gray-800);
  --og-avatar-font-size: var(--og-font-size-sm);

  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--og-avatar-size);
  height: var(--og-avatar-size);
  background-color: var(--og-avatar-bg);
  color: var(--og-avatar-color);
  font-family: var(--og-font-family);
  font-size: var(--og-avatar-font-size);
  font-weight: var(--og-font-weight-semibold);
  user-select: none;
  overflow: hidden;
}

.og-avatar--circle {
  border-radius: var(--og-radius-full);
}
.og-avatar--square {
  border-radius: var(--og-radius-md);
}

.og-avatar--small {
  --og-avatar-size: 2rem;
  --og-avatar-font-size: var(--og-font-size-xs);
}
.og-avatar--large {
  --og-avatar-size: 3rem;
  --og-avatar-font-size: var(--og-font-size-md);
}
.og-avatar--xlarge {
  --og-avatar-size: 4rem;
  --og-avatar-font-size: var(--og-font-size-xl);
}

.og-avatar__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
