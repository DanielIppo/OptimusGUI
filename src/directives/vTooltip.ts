import type { Directive } from 'vue';

export const vOgTooltip: Directive = {
  mounted(el, binding) {
    el.setAttribute('title', binding.value || '');
  },
  updated(el, binding) {
    el.setAttribute('title', binding.value || '');
  },
};
