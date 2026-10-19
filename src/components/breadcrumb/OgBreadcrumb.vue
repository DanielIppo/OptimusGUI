<template>
  <nav class="og-breadcrumb" aria-label="Breadcrumb">
    <ol class="og-breadcrumb__list">
      <!-- Home Item -->
      <li v-if="home" class="og-breadcrumb__item">
        <a :href="home.url || '#'" class="og-breadcrumb__link" @click.prevent="onItemClick($event, home)">
          <span v-if="home.icon" :class="['og-breadcrumb__icon', home.icon]" />
          <span v-if="home.label">{{ home.label }}</span>
        </a>
      </li>

      <li v-if="home && model.length > 0" class="og-breadcrumb__separator">
        <slot name="separator">/</slot>
      </li>

      <!-- Items -->
      <template v-for="(item, index) in model" :key="index">
        <li class="og-breadcrumb__item">
          <a :href="item.url || '#'" class="og-breadcrumb__link" @click.prevent="onItemClick($event, item)">
            <span v-if="item.icon" :class="['og-breadcrumb__icon', item.icon]" />
            <span>{{ item.label }}</span>
          </a>
        </li>
        <li v-if="index < model.length - 1" class="og-breadcrumb__separator">
          <slot name="separator">/</slot>
        </li>
      </template>
    </ol>
  </nav>
</template>

<script setup lang="ts">
import type { MenuItem } from '@/components/menu';

defineOptions({
  name: 'OgBreadcrumb',
});

export interface OgBreadcrumbProps {
  model?: MenuItem[];
  home?: MenuItem;
}

withDefaults(defineProps<OgBreadcrumbProps>(), {
  model: () => [],
});

const onItemClick = (event: Event, item: MenuItem) => {
  if (item.disabled) return;
  if (item.command) {
    item.command({ originalEvent: event, item });
  }
};
</script>

<style scoped>
.og-breadcrumb {
  display: flex;
  align-items: center;
}

.og-breadcrumb__list {
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: var(--og-spacing-xs);
}

.og-breadcrumb__item {
  display: flex;
  align-items: center;
}

.og-breadcrumb__link {
  display: inline-flex;
  align-items: center;
  gap: var(--og-spacing-xs);
  font-family: var(--og-font-family);
  font-size: var(--og-font-size-sm);
  color: var(--og-text-secondary);
  text-decoration: none;
  transition: color var(--og-transition-fast);
}

.og-breadcrumb__link:hover {
  color: var(--og-color-primary-500);
}

.og-breadcrumb__separator {
  color: var(--og-text-muted);
  font-size: var(--og-font-size-xs);
  user-select: none;
}
</style>
