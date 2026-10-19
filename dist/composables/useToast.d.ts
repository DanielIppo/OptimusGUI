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
export declare function useToast(): {
    messages: import('vue').Ref<{
        id?: string | undefined;
        severity?: "info" | "success" | "warn" | "error" | undefined;
        summary?: string | undefined;
        detail?: string | undefined;
        life?: number | undefined;
        sticky?: boolean | undefined;
        closable?: boolean | undefined;
        group?: string | undefined;
    }[], ToastMessageOptions[] | {
        id?: string | undefined;
        severity?: "info" | "success" | "warn" | "error" | undefined;
        summary?: string | undefined;
        detail?: string | undefined;
        life?: number | undefined;
        sticky?: boolean | undefined;
        closable?: boolean | undefined;
        group?: string | undefined;
    }[]>;
    add: (message: ToastMessageOptions) => void;
    remove: (id: string) => void;
    removeGroup: (group: string) => void;
    clear: () => void;
};
