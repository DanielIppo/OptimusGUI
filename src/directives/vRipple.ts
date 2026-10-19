import type { Directive } from 'vue';

export const vOgRipple: Directive = {
  mounted(el) {
    el.style.position = 'relative';
    el.style.overflow = 'hidden';
  },
};
