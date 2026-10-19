<template>
  <div v-if="!popup || isOpen" ref="menuRef" :class="['og-menu', { 'og-menu--popup': popup }]">
    <ul class="og-menu__list" role="menu">
      <template v-for="(item, index) in model" :key="index">
        <li v-if="item.separator" class="og-menu__separator" role="separator" />
        <li v-else :class="['og-menu__item', { 'og-menu__item--disabled': item.disabled }]" role="menuitem">
          <a
            :href="item.url || '#'"
            class="og-menu__link"
            @click.prevent="onItemClick($event, item)"
          >
            <span v-if="item.icon" :class="['og-menu__icon', item.icon]" />
            <span class="og-menu__label">{{ item.label }}</span>
          </a>
        </li>
      </template>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineOptions({
  name: 'OgMenu',
});

export interface MenuItem {
  label?: string;
  icon?: string;
  command?: (event: { originalEvent: Event; item: MenuItem }) => void;
  url?: string;
  disabled?: boolean;
  separator?: boolean;
  [key: string]: any;
}

export interface OgMenuProps {
  model?: MenuItem[];
  popup?: boolean;
}

const props = withDefaults(defineProps<OgMenuProps>(), {
  model: () => [],
  popup: false,
});

const isOpen = ref(false);
const menuRef = ref<HTMLElement | null>(null);

const toggle = () => {
  isOpen.value = !isOpen.value;
};

const onItemClick = (event: Event, item: MenuItem) => {
  if (item.disabled) return;
  if (item.command) {
    item.command({ originalEvent: event, item });
  }
  if (props.popup) {
    isOpen.value = false;
  }
};

defineExpose({
  toggle,
});
</script>

<style scoped>
.og-menu {
  --og-menu-bg: var(--og-color-white);
  --og-menu-border-color: var(--og-border-color);
  --og-menu-radius: var(--og-radius-md);
  --og-menu-shadow: var(--og-shadow-md);

  background-color: var(--og-menu-bg);
  border: 1px solid var(--og-menu-border-color);
  border-radius: var(--og-menu-radius);
  padding: 0.25rem 0;
  min-width: 12rem;
  box-sizing: border-box;
}

.og-menu--popup {
  position: absolute;
  z-index: var(--og-z-dropdown);
  box-shadow: var(--og-menu-shadow);
}

.og-menu__list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.og-menu__item {
  display: flex;
}

.og-menu__link {
  display: flex;
  align-items: center;
  gap: var(--og-spacing-sm);
  width: 100%;
  padding: var(--og-spacing-sm) var(--og-spacing-md);
  font-family: var(--og-font-family);
  font-size: var(--og-font-size-sm);
  color: var(--og-text-primary);
  text-decoration: none;
  transition: background-color var(--og-transition-fast);
}

.og-menu__link:hover {
  background-color: var(--og-bg-subtle);
}

.og-menu__separator {
  height: 1px;
  background-color: var(--og-border-color);
  margin: 0.25rem 0;
}

.og-menu__item--disabled {
  opacity: 0.5;
  pointer-events: none;
}
</style>
