export interface OgSelectButtonProps {
    modelValue?: any;
    options?: any[];
    optionLabel?: string;
    optionValue?: string;
    multiple?: boolean;
    disabled?: boolean;
}
declare function __VLS_template(): {
    option?(_: {
        option: any;
        index: number;
    }): any;
};
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<OgSelectButtonProps>, {
    options: () => never[];
    multiple: boolean;
    disabled: boolean;
}>>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: any) => void;
    change: (value: any) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<OgSelectButtonProps>, {
    options: () => never[];
    multiple: boolean;
    disabled: boolean;
}>>> & Readonly<{
    "onUpdate:modelValue"?: ((value: any) => any) | undefined;
    onChange?: ((value: any) => any) | undefined;
}>, {
    multiple: boolean;
    disabled: boolean;
    options: any[];
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
