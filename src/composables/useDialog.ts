import { ref } from 'vue';

export interface UseDialogOptions {
  visible?: boolean;
  onClose?: () => void;
}

export function useDialog(options: UseDialogOptions = {}) {
  const isVisible = ref(options.visible ?? false);

  const open = () => {
    isVisible.value = true;
  };

  const close = () => {
    isVisible.value = false;
    if (options.onClose) {
      options.onClose();
    }
  };

  const toggle = () => {
    isVisible.value ? close() : open();
  };

  return {
    isVisible,
    open,
    close,
    toggle,
  };
}
