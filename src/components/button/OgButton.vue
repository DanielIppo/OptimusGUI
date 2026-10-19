<template>
  <component
    :is="as"
    v-if="!asChild"
    :type="isButtonTag ? type : undefined"
    :disabled="isDisabled"
    :aria-disabled="isDisabled"
    :aria-label="ariaLabelComputed"
    :class="buttonClasses"
    v-bind="$attrs"
  >
    <slot>
      <!-- Loading Icon or Spinner -->
      <slot v-if="loading" name="loadingicon" class="og-button__icon og-button__spinner">
        <span v-if="loadingIcon" :class="['og-button__icon', 'og-button__spinner', loadingIcon]" />
        <svg
          v-else
          class="og-button__icon og-button__spinner og-button__spinner-svg"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle class="og-spinner-track" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
          <path
            class="og-spinner-head"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      </slot>

      <!-- Standard Icon -->
      <slot v-else-if="icon || $slots.icon" name="icon" class="og-button__icon">
        <span v-if="icon" :class="['og-button__icon', icon, iconClass]" />
      </slot>

      <!-- Label -->
      <span v-if="label" class="og-button__label">{{ label }}</span>

      <!-- Badge -->
      <span
        v-if="badge"
        :class="['og-button__badge', badgeSeverity ? `og-button__badge--${badgeSeverity}` : '', badgeClass]"
      >
        {{ badge }}
      </span>
    </slot>
  </component>
  <slot v-else :class="buttonClasses" :disabled="isDisabled" />
</template>

<script setup lang="ts">
import { computed, useAttrs } from 'vue';
import type { OgSize, OgSeverity } from '@/types';

defineOptions({
  name: 'OgButton',
  inheritAttrs: false,
});

export interface OgButtonProps {
  label?: string;
  icon?: string;
  iconPos?: 'left' | 'right' | 'top' | 'bottom';
  iconClass?: string | object;
  badge?: string;
  badgeClass?: string | object;
  badgeSeverity?: OgSeverity | 'contrast';
  loading?: boolean;
  loadingIcon?: string;
  as?: string | object;
  asChild?: boolean;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  severity?: OgSeverity | 'contrast';
  variant?: 'outlined' | 'text' | 'link';
  outlined?: boolean;
  text?: boolean;
  link?: boolean;
  raised?: boolean;
  rounded?: boolean;
  size?: OgSize;
  fluid?: boolean;
}

const props = withDefaults(defineProps<OgButtonProps>(), {
  as: 'button',
  type: 'button',
  iconPos: 'left',
  loading: false,
  disabled: false,
  asChild: false,
  outlined: false,
  text: false,
  link: false,
  raised: false,
  rounded: false,
  fluid: false,
});

const attrs = useAttrs();

const isButtonTag = computed(() => typeof props.as === 'string' && props.as.toLowerCase() === 'button');

const isDisabled = computed(() => props.disabled || props.loading);

const ariaLabelComputed = computed(() => {
  if (props.label) {
    return props.badge ? `${props.label} ${props.badge}` : props.label;
  }
  return (attrs['aria-label'] as string) || undefined;
});

const isIconOnly = computed(() => (!!props.icon || !!props.loading) && !props.label && !props.badge);

const buttonClasses = computed(() => {
  const isOutlined = props.outlined || props.variant === 'outlined';
  const isText = props.text || props.variant === 'text';
  const isLink = props.link || props.variant === 'link';

  return [
    'og-button',
    props.severity ? `og-button--${props.severity}` : '',
    props.size ? `og-button--${props.size}` : '',
    `og-button--icon-${props.iconPos}`,
    {
      'og-button--outlined': isOutlined,
      'og-button--text': isText,
      'og-button--link': isLink,
      'og-button--raised': props.raised,
      'og-button--rounded': props.rounded,
      'og-button--fluid': props.fluid,
      'og-button--icon-only': isIconOnly.value,
      'og-button--loading': props.loading,
      'og-button--disabled': isDisabled.value,
      'og-button--vertical': (props.iconPos === 'top' || props.iconPos === 'bottom') && !!props.label,
    },
  ];
});
</script>

<style scoped>
.og-button {
  /* CSS Custom Properties Scoped Defaults */
  --og-button-bg: var(--og-color-primary-500);
  --og-button-color: var(--og-color-primary-contrast);
  --og-button-border-color: transparent;
  --og-button-border-width: 1px;
  --og-button-border-radius: var(--og-radius-md);
  --og-button-padding-x: var(--og-spacing-lg);
  --og-button-padding-y: var(--og-spacing-sm);
  --og-button-font-size: var(--og-font-size-sm);
  --og-button-font-weight: var(--og-font-weight-medium);
  --og-button-gap: var(--og-spacing-sm);
  --og-button-shadow: none;
  --og-button-transition: all var(--og-transition-fast);

  --og-button-hover-bg: var(--og-color-primary-600);
  --og-button-hover-color: var(--og-color-primary-contrast);
  --og-button-hover-border-color: transparent;

  --og-button-active-bg: var(--og-color-primary-600);
  --og-button-active-color: var(--og-color-primary-contrast);

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--og-button-gap);
  padding: var(--og-button-padding-y) var(--og-button-padding-x);
  font-family: var(--og-font-family);
  font-size: var(--og-button-font-size);
  font-weight: var(--og-button-font-weight);
  line-height: 1.5;
  color: var(--og-button-color);
  background-color: var(--og-button-bg);
  border: var(--og-button-border-width) solid var(--og-button-border-color);
  border-radius: var(--og-button-border-radius);
  box-shadow: var(--og-button-shadow);
  transition: var(--og-button-transition);
  cursor: pointer;
  user-select: none;
  text-decoration: none;
  outline: none;
  position: relative;
  box-sizing: border-box;
}

/* Hover & Active States */
.og-button:hover:not(.og-button--disabled) {
  background-color: var(--og-button-hover-bg);
  color: var(--og-button-hover-color);
  border-color: var(--og-button-hover-border-color);
}

.og-button:active:not(.og-button--disabled) {
  background-color: var(--og-button-active-bg);
  color: var(--og-button-active-color);
}

/* Focus State */
.og-button:focus-visible:not(.og-button--disabled) {
  box-shadow: var(--og-focus-ring);
}

/* Disabled State */
.og-button--disabled {
  opacity: 0.6;
  cursor: not-allowed;
  pointer-events: none;
}

/* Icon Position Logic */
.og-button--icon-right {
  flex-direction: row-reverse;
}
.og-button--icon-top {
  flex-direction: column;
}
.og-button--icon-bottom {
  flex-direction: column-reverse;
}

/* Sizes */
.og-button--small {
  --og-button-padding-x: var(--og-spacing-md);
  --og-button-padding-y: var(--og-spacing-xs);
  --og-button-font-size: var(--og-font-size-xs);
}

.og-button--large {
  --og-button-padding-x: var(--og-spacing-xl);
  --og-button-padding-y: var(--og-spacing-md);
  --og-button-font-size: var(--og-font-size-md);
}

/* Variants */
.og-button--outlined {
  --og-button-bg: transparent;
  --og-button-color: var(--og-color-primary-500);
  --og-button-border-color: var(--og-color-primary-500);
  --og-button-hover-bg: var(--og-color-primary-50);
  --og-button-hover-color: var(--og-color-primary-600);
  --og-button-hover-border-color: var(--og-color-primary-600);
}

.og-button--text {
  --og-button-bg: transparent;
  --og-button-color: var(--og-color-primary-500);
  --og-button-border-color: transparent;
  --og-button-hover-bg: var(--og-color-primary-50);
  --og-button-hover-color: var(--og-color-primary-600);
}

.og-button--link {
  --og-button-bg: transparent;
  --og-button-color: var(--og-color-primary-500);
  --og-button-border-color: transparent;
  --og-button-padding-x: 0;
  --og-button-padding-y: 0;
  --og-button-hover-bg: transparent;
  --og-button-hover-color: var(--og-color-primary-600);
}
.og-button--link:hover:not(.og-button--disabled) .og-button__label {
  text-decoration: underline;
}

/* Severities */
.og-button--secondary {
  --og-button-bg: var(--og-color-gray-200);
  --og-button-color: var(--og-color-gray-800);
  --og-button-hover-bg: var(--og-color-gray-300);
  --og-button-hover-color: var(--og-color-gray-900);
}
.og-button--secondary.og-button--outlined {
  --og-button-bg: transparent;
  --og-button-color: var(--og-color-gray-700);
  --og-button-border-color: var(--og-color-gray-300);
  --og-button-hover-bg: var(--og-color-gray-100);
}

.og-button--success {
  --og-button-bg: #10b981;
  --og-button-color: #ffffff;
  --og-button-hover-bg: #059669;
  --og-button-hover-color: #ffffff;
}
.og-button--success.og-button--outlined {
  --og-button-bg: transparent;
  --og-button-color: #10b981;
  --og-button-border-color: #10b981;
  --og-button-hover-bg: #ecfdf5;
}

.og-button--info {
  --og-button-bg: #3b82f6;
  --og-button-color: #ffffff;
  --og-button-hover-bg: #2563eb;
  --og-button-hover-color: #ffffff;
}
.og-button--info.og-button--outlined {
  --og-button-bg: transparent;
  --og-button-color: #3b82f6;
  --og-button-border-color: #3b82f6;
  --og-button-hover-bg: #eff6ff;
}

.og-button--warning {
  --og-button-bg: #f59e0b;
  --og-button-color: #ffffff;
  --og-button-hover-bg: #d97706;
  --og-button-hover-color: #ffffff;
}
.og-button--warning.og-button--outlined {
  --og-button-bg: transparent;
  --og-button-color: #f59e0b;
  --og-button-border-color: #f59e0b;
  --og-button-hover-bg: #fffbeb;
}

.og-button--danger {
  --og-button-bg: #ef4444;
  --og-button-color: #ffffff;
  --og-button-hover-bg: #dc2626;
  --og-button-hover-color: #ffffff;
}
.og-button--danger.og-button--outlined {
  --og-button-bg: transparent;
  --og-button-color: #ef4444;
  --og-button-border-color: #ef4444;
  --og-button-hover-bg: #fef2f2;
}

/* Modifiers */
.og-button--raised {
  --og-button-shadow: var(--og-shadow-md);
}

.og-button--rounded {
  --og-button-border-radius: var(--og-radius-full);
}

.og-button--fluid {
  display: flex;
  width: 100%;
}

.og-button--icon-only {
  --og-button-padding-x: var(--og-spacing-sm);
  --og-button-padding-y: var(--og-spacing-sm);
  width: 2.5rem;
  height: 2.5rem;
  padding: 0;
  border-radius: var(--og-button-border-radius);
}
.og-button--icon-only.og-button--small {
  width: 2rem;
  height: 2rem;
}
.og-button--icon-only.og-button--large {
  width: 3rem;
  height: 3rem;
}
.og-button--icon-only.og-button--rounded {
  border-radius: 50%;
}

/* Elements */
.og-button__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1em;
  line-height: 1;
}

.og-button__spinner-svg {
  width: 1.1em;
  height: 1.1em;
  animation: og-spin 1s linear infinite;
}

.og-spinner-track {
  opacity: 0.25;
}

.og-spinner-head {
  opacity: 0.75;
}

.og-button__badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: var(--og-font-size-xs);
  font-weight: var(--og-font-weight-bold);
  min-width: 1.25rem;
  height: 1.25rem;
  padding: 0 0.375rem;
  border-radius: var(--og-radius-full);
  background-color: rgba(255, 255, 255, 0.25);
  color: inherit;
  margin-left: var(--og-spacing-xs);
}

@keyframes og-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
