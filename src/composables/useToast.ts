import { ref, reactive } from 'vue';

export interface ToastMessageOptions {
  id?: string;
  severity?: 'info' | 'success' | 'warn' | 'error';
  summary?: string;
  detail?: string;
  life?: number;
  sticky?: boolean;
  closable?: boolean;
  group?: string;
}

const toastMessages = ref<ToastMessageOptions[]>([]);

export function useToast() {
  const add = (message: ToastMessageOptions) => {
    const id = message.id || Math.random().toString(36).substring(2, 9);
    const msg = { ...message, id };
    toastMessages.value.push(msg);

    if (!msg.sticky && (msg.life || 3000)) {
      setTimeout(() => {
        remove(id);
      }, msg.life || 3000);
    }
  };

  const remove = (id: string) => {
    toastMessages.value = toastMessages.value.filter((m) => m.id !== id);
  };

  const removeGroup = (group: string) => {
    toastMessages.value = toastMessages.value.filter((m) => m.group !== group);
  };

  const clear = () => {
    toastMessages.value = [];
  };

  return {
    messages: toastMessages,
    add,
    remove,
    removeGroup,
    clear,
  };
}
