<template>
  <div ref="containerRef" :class="containerClasses">
    <div
      class="og-datepicker__trigger"
      tabindex="0"
      :aria-expanded="isOpen"
      role="combobox"
      aria-haspopup="dialog"
      @click="toggle"
      @keydown.enter.prevent="toggle"
      @keydown.space.prevent="toggle"
      @keydown.esc="close"
    >
      <span v-if="displayDate" class="og-datepicker__value">{{ displayDate }}</span>
      <span v-else class="og-datepicker__placeholder">{{ placeholder }}</span>

      <div class="og-datepicker__icons">
        <span
          v-if="showClear && displayDate && !disabled"
          class="og-datepicker__clear"
          title="Clear date"
          @click.stop="clearDate"
        >
          ✕
        </span>
        <span class="og-datepicker__calendar-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
        </span>
      </div>
    </div>

    <!-- Calendar Popover Overlay -->
    <Teleport to="body">
      <div
        v-if="isOpen"
        ref="overlayRef"
        class="og-datepicker__overlay"
        :style="overlayStyle"
        role="dialog"
        aria-modal="true"
      >
        <!-- Header -->
        <div class="og-datepicker__header">
          <button type="button" class="og-datepicker__nav-btn" aria-label="Previous Month" @click="prevMonth">
            ‹
          </button>
          <div class="og-datepicker__title">
            <span class="og-datepicker__month-name">{{ monthNames[currentMonth] }}</span>
            <span class="og-datepicker__year-name">{{ currentYear }}</span>
          </div>
          <button type="button" class="og-datepicker__nav-btn" aria-label="Next Month" @click="nextMonth">
            ›
          </button>
        </div>

        <!-- Weekdays -->
        <div class="og-datepicker__weekdays">
          <span v-for="day in weekDays" :key="day" class="og-datepicker__weekday">
            {{ day }}
          </span>
        </div>

        <!-- Days Grid -->
        <div class="og-datepicker__days-grid">
          <button
            v-for="(dayItem, idx) in calendarDays"
            :key="idx"
            type="button"
            :class="[
              'og-datepicker__day',
              {
                'og-datepicker__day--other-month': !dayItem.isCurrentMonth,
                'og-datepicker__day--selected': isSelected(dayItem.date),
                'og-datepicker__day--today': dayItem.isToday,
                'og-datepicker__day--disabled': isDateDisabled(dayItem.date),
              },
            ]"
            :disabled="isDateDisabled(dayItem.date)"
            @click="selectDate(dayItem.date)"
          >
            {{ dayItem.dayNumber }}
          </button>
        </div>

        <!-- Footer Actions -->
        <div class="og-datepicker__footer">
          <button type="button" class="og-datepicker__action-btn" @click="selectToday">
            Today
          </button>
          <button v-if="displayDate" type="button" class="og-datepicker__action-btn og-datepicker__action-btn--clear" @click="clearDate">
            Clear
          </button>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch, nextTick, onMounted, onUnmounted } from 'vue';
import type { OgSize } from '@/types';

defineOptions({
  name: 'OgDatePicker',
});

export interface OgDatePickerProps {
  modelValue?: Date | string | null;
  placeholder?: string;
  disabled?: boolean;
  invalid?: boolean;
  fluid?: boolean;
  size?: OgSize;
  showClear?: boolean;
  minDate?: Date;
  maxDate?: Date;
}

const props = withDefaults(defineProps<OgDatePickerProps>(), {
  modelValue: null,
  placeholder: 'Select a date',
  disabled: false,
  invalid: false,
  fluid: false,
  showClear: true,
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: Date | null): void;
  (e: 'change', value: Date | null): void;
}>();

const isOpen = ref(false);
const containerRef = ref<HTMLElement | null>(null);
const overlayRef = ref<HTMLElement | null>(null);
const overlayStyle = ref<Record<string, string>>({});

const weekDays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const parseDate = (val: Date | string | null | undefined): Date | null => {
  if (!val) return null;
  if (val instanceof Date) return isNaN(val.getTime()) ? null : val;
  const parts = String(val).split('-');
  if (parts.length === 3) {
    const y = parseInt(parts[0], 10);
    const m = parseInt(parts[1], 10) - 1;
    const d = parseInt(parts[2], 10);
    const dt = new Date(y, m, d);
    return isNaN(dt.getTime()) ? null : dt;
  }
  const dt = new Date(val);
  return isNaN(dt.getTime()) ? null : dt;
};

const parsedModelValue = computed(() => parseDate(props.modelValue));

const viewDate = ref<Date>(new Date());

watch(
  parsedModelValue,
  (val) => {
    if (val) {
      viewDate.value = new Date(val.getFullYear(), val.getMonth(), 1);
    }
  },
  { immediate: true }
);

const currentYear = computed(() => viewDate.value.getFullYear());
const currentMonth = computed(() => viewDate.value.getMonth());

const displayDate = computed(() => {
  const d = parsedModelValue.value;
  if (!d) return '';
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
});

const prevMonth = () => {
  viewDate.value = new Date(currentYear.value, currentMonth.value - 1, 1);
};

const nextMonth = () => {
  viewDate.value = new Date(currentYear.value, currentMonth.value + 1, 1);
};

const isSameDay = (d1: Date, d2: Date) => {
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  );
};

const isSelected = (date: Date) => {
  if (!parsedModelValue.value) return false;
  return isSameDay(date, parsedModelValue.value);
};

const isDateDisabled = (date: Date) => {
  if (props.minDate && date < new Date(props.minDate.getFullYear(), props.minDate.getMonth(), props.minDate.getDate())) {
    return true;
  }
  if (props.maxDate && date > new Date(props.maxDate.getFullYear(), props.maxDate.getMonth(), props.maxDate.getDate())) {
    return true;
  }
  return false;
};

interface CalendarDay {
  date: Date;
  dayNumber: number;
  isCurrentMonth: boolean;
  isToday: boolean;
}

const calendarDays = computed(() => {
  const year = currentYear.value;
  const month = currentMonth.value;
  const today = new Date();

  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);

  const startDayOfWeek = (firstDayOfMonth.getDay() + 6) % 7; // Monday = 0
  const totalDays = lastDayOfMonth.getDate();

  const days: CalendarDay[] = [];

  // Previous month padding
  const prevMonthLastDate = new Date(year, month, 0).getDate();
  for (let i = startDayOfWeek - 1; i >= 0; i--) {
    const d = new Date(year, month - 1, prevMonthLastDate - i);
    days.push({
      date: d,
      dayNumber: d.getDate(),
      isCurrentMonth: false,
      isToday: isSameDay(d, today),
    });
  }

  // Current month days
  for (let d = 1; d <= totalDays; d++) {
    const date = new Date(year, month, d);
    days.push({
      date,
      dayNumber: d,
      isCurrentMonth: true,
      isToday: isSameDay(date, today),
    });
  }

  // Next month padding to fill grid
  const remaining = 42 - days.length;
  for (let d = 1; d <= remaining; d++) {
    const date = new Date(year, month + 1, d);
    days.push({
      date,
      dayNumber: d,
      isCurrentMonth: false,
      isToday: isSameDay(date, today),
    });
  }

  return days;
});

const selectDate = (date: Date) => {
  if (isDateDisabled(date) || props.disabled) return;
  emit('update:modelValue', date);
  emit('change', date);
  close();
};

const selectToday = () => {
  const now = new Date();
  selectDate(new Date(now.getFullYear(), now.getMonth(), now.getDate()));
};

const clearDate = () => {
  emit('update:modelValue', null);
  emit('change', null);
};

const updateOverlayPosition = () => {
  if (!containerRef.value) return;
  const rect = containerRef.value.getBoundingClientRect();
  overlayStyle.value = {
    position: 'fixed',
    top: `${rect.bottom + 4}px`,
    left: `${rect.left}px`,
    width: '18rem',
    zIndex: 'var(--og-z-dropdown, 1150)',
  };
};

const toggle = () => {
  if (props.disabled) return;
  isOpen.value = !isOpen.value;
  if (isOpen.value) {
    if (parsedModelValue.value) {
      viewDate.value = new Date(parsedModelValue.value.getFullYear(), parsedModelValue.value.getMonth(), 1);
    }
    nextTick(updateOverlayPosition);
  }
};

const close = () => {
  isOpen.value = false;
};

const handleClickOutside = (e: Event) => {
  if (!isOpen.value) return;
  const target = e.target as Node | null;
  if (
    target &&
    containerRef.value &&
    !containerRef.value.contains(target) &&
    overlayRef.value &&
    !overlayRef.value.contains(target)
  ) {
    close();
  }
};

watch(isOpen, (newVal) => {
  if (newVal) {
    window.addEventListener('resize', updateOverlayPosition);
    window.addEventListener('scroll', updateOverlayPosition, true);
  } else {
    window.removeEventListener('resize', updateOverlayPosition);
    window.removeEventListener('scroll', updateOverlayPosition, true);
  }
});

onMounted(() => {
  document.addEventListener('pointerdown', handleClickOutside, true);
  document.addEventListener('click', handleClickOutside, true);
});

onUnmounted(() => {
  document.removeEventListener('pointerdown', handleClickOutside, true);
  document.removeEventListener('click', handleClickOutside, true);
  window.removeEventListener('resize', updateOverlayPosition);
  window.removeEventListener('scroll', updateOverlayPosition, true);
});

const containerClasses = computed(() => [
  'og-datepicker',
  props.size ? `og-datepicker--${props.size}` : '',
  {
    'og-datepicker--open': isOpen.value,
    'og-datepicker--invalid': props.invalid,
    'og-datepicker--disabled': props.disabled,
    'og-datepicker--fluid': props.fluid,
  },
]);
</script>

<style scoped>
.og-datepicker {
  --og-dp-bg: var(--og-color-white);
  --og-dp-border: var(--og-border-color);
  --og-dp-radius: var(--og-radius-md);
  --og-dp-font-size: var(--og-font-size-sm);
  --og-dp-padding-x: var(--og-spacing-md);
  --og-dp-padding-y: var(--og-spacing-sm);

  display: inline-flex;
  position: relative;
  width: 14rem;
  box-sizing: border-box;
}

.og-datepicker--fluid {
  width: 100%;
}

.og-datepicker__trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: var(--og-dp-padding-y) var(--og-dp-padding-x);
  background-color: var(--og-dp-bg);
  border: 1px solid var(--og-dp-border);
  border-radius: var(--og-dp-radius);
  font-family: var(--og-font-family);
  font-size: var(--og-dp-font-size);
  color: var(--og-text-primary);
  cursor: pointer;
  outline: none;
  transition: border-color var(--og-transition-fast), box-shadow var(--og-transition-fast);
  user-select: none;
  box-sizing: border-box;
}

.og-datepicker__trigger:hover:not(.og-datepicker--disabled .og-datepicker__trigger) {
  border-color: var(--og-border-color-hover);
}

.og-datepicker__trigger:focus-visible,
.og-datepicker--open .og-datepicker__trigger {
  border-color: var(--og-border-color-focus);
  box-shadow: var(--og-focus-ring);
}

.og-datepicker__placeholder {
  color: var(--og-text-muted);
}

.og-datepicker__value {
  font-weight: var(--og-font-weight-medium);
}

.og-datepicker__icons {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
}

.og-datepicker__clear {
  color: var(--og-text-muted);
  font-size: 0.8rem;
  line-height: 1;
  padding: 0.125rem;
  cursor: pointer;
}
.og-datepicker__clear:hover {
  color: var(--og-text-primary);
}

.og-datepicker__calendar-icon {
  display: flex;
  align-items: center;
  color: var(--og-text-secondary);
  width: 1rem;
  height: 1rem;
}
.og-datepicker__calendar-icon svg {
  width: 100%;
  height: 100%;
}

.og-datepicker--invalid .og-datepicker__trigger {
  border-color: var(--og-color-danger-text);
}

.og-datepicker--disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.og-datepicker--disabled .og-datepicker__trigger {
  cursor: not-allowed;
  background-color: var(--og-bg-muted);
}
</style>

<style>
/* Portal Styles */
.og-datepicker__overlay {
  background-color: var(--og-color-white);
  border: 1px solid var(--og-border-color);
  border-radius: var(--og-radius-lg);
  box-shadow: var(--og-shadow-lg);
  padding: 0.75rem;
  font-family: var(--og-font-family);
  box-sizing: border-box;
  animation: og-dp-enter 0.15s ease-out;
}

@keyframes og-dp-enter {
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.og-datepicker__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.og-datepicker__title {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-size: var(--og-font-size-sm);
  font-weight: var(--og-font-weight-semibold);
  color: var(--og-text-primary);
}

.og-datepicker__nav-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.75rem;
  height: 1.75rem;
  border-radius: var(--og-radius-md);
  border: none;
  background: transparent;
  color: var(--og-text-secondary);
  font-size: 1.25rem;
  cursor: pointer;
  transition: background-color var(--og-transition-fast), color var(--og-transition-fast);
}
.og-datepicker__nav-btn:hover {
  background-color: var(--og-bg-subtle);
  color: var(--og-text-primary);
}

.og-datepicker__weekdays {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  margin-bottom: 0.25rem;
}

.og-datepicker__weekday {
  font-size: var(--og-font-size-xs);
  font-weight: var(--og-font-weight-medium);
  color: var(--og-text-muted);
  padding: 0.25rem 0;
}

.og-datepicker__days-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px;
}

.og-datepicker__day {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
  border: none;
  background: transparent;
  border-radius: var(--og-radius-md);
  font-family: inherit;
  font-size: var(--og-font-size-xs);
  color: var(--og-text-primary);
  cursor: pointer;
  transition: all var(--og-transition-fast);
  padding: 0;
}

.og-datepicker__day:hover:not(:disabled) {
  background-color: var(--og-bg-subtle);
}

.og-datepicker__day--other-month {
  color: var(--og-text-disabled);
  opacity: 0.5;
}

.og-datepicker__day--today {
  font-weight: var(--og-font-weight-bold);
  text-decoration: underline;
  text-underline-offset: 3px;
}

.og-datepicker__day--selected,
.og-datepicker__day--selected:hover {
  background-color: var(--og-color-primary-500) !important;
  color: var(--og-color-primary-contrast) !important;
  font-weight: var(--og-font-weight-bold);
}

.og-datepicker__day--disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.og-datepicker__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid var(--og-border-color);
}

.og-datepicker__action-btn {
  border: none;
  background: transparent;
  color: var(--og-color-primary-500);
  font-size: var(--og-font-size-xs);
  font-weight: var(--og-font-weight-semibold);
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  border-radius: var(--og-radius-sm);
  transition: background-color var(--og-transition-fast);
}
.og-datepicker__action-btn:hover {
  background-color: var(--og-bg-subtle);
}

.og-datepicker__action-btn--clear {
  color: var(--og-text-muted);
}
.og-datepicker__action-btn--clear:hover {
  color: var(--og-color-danger-text);
}
</style>
