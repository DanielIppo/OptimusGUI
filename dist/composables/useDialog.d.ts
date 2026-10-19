export interface UseDialogOptions {
    visible?: boolean;
    onClose?: () => void;
}
export declare function useDialog(options?: UseDialogOptions): {
    isVisible: import('vue').Ref<boolean, boolean>;
    open: () => void;
    close: () => void;
    toggle: () => void;
};
