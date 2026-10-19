export interface OgRatingProps {
    modelValue?: number | null;
    stars?: number;
    cancel?: boolean;
    disabled?: boolean;
    readonly?: boolean;
}
declare function __VLS_template(): {
    cancelicon?(_: {}): any;
    item?(_: {
        value: number;
        active: boolean;
    }): any;
};
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<OgRatingProps>, {
    modelValue: number;
    stars: number;
    cancel: boolean;
    disabled: boolean;
    readonly: boolean;
}>>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: number | null) => void;
    change: (value: number | null) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<OgRatingProps>, {
    modelValue: number;
    stars: number;
    cancel: boolean;
    disabled: boolean;
    readonly: boolean;
}>>> & Readonly<{
    "onUpdate:modelValue"?: ((value: number | null) => any) | undefined;
    onChange?: ((value: number | null) => any) | undefined;
}>, {
    disabled: boolean;
    modelValue: number | null;
    readonly: boolean;
    cancel: boolean;
    stars: number;
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
