import { defineComponent as $, useAttrs as ue, computed as y, openBlock as a, createBlock as q, resolveDynamicComponent as ae, mergeProps as de, withCtx as oe, renderSlot as f, createElementBlock as o, normalizeClass as m, createElementVNode as g, createCommentVNode as p, toDisplayString as O, ref as V, watch as H, nextTick as Q, onMounted as Z, createTextVNode as T, withKeys as j, withModifiers as D, onUnmounted as W, Teleport as X, unref as x, normalizeStyle as F, withDirectives as J, isRef as re, vModelText as se, Fragment as R, renderList as P, createVNode as ce, TransitionGroup as ge, useSlots as ve, provide as ee, inject as ne, vShow as te } from "vue";
const be = {
  key: 1,
  class: "og-button__icon og-button__spinner og-button__spinner-svg",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, fe = {
  key: 2,
  class: "og-button__label"
}, pe = /* @__PURE__ */ $({
  name: "OgButton",
  inheritAttrs: !1,
  __name: "OgButton",
  props: {
    label: {},
    icon: {},
    iconPos: { default: "left" },
    iconClass: {},
    badge: {},
    badgeClass: {},
    badgeSeverity: {},
    loading: { type: Boolean, default: !1 },
    loadingIcon: {},
    as: { default: "button" },
    asChild: { type: Boolean, default: !1 },
    type: { default: "button" },
    disabled: { type: Boolean, default: !1 },
    severity: {},
    variant: {},
    outlined: { type: Boolean, default: !1 },
    text: { type: Boolean, default: !1 },
    link: { type: Boolean, default: !1 },
    raised: { type: Boolean, default: !1 },
    rounded: { type: Boolean, default: !1 },
    size: {},
    fluid: { type: Boolean, default: !1 }
  },
  setup(t) {
    const l = t, e = ue(), i = y(() => typeof l.as == "string" && l.as.toLowerCase() === "button"), s = y(() => l.disabled || l.loading), d = y(() => l.label ? l.badge ? `${l.label} ${l.badge}` : l.label : e["aria-label"] || void 0), u = y(() => (!!l.icon || !!l.loading) && !l.label && !l.badge), c = y(() => {
      const n = l.outlined || l.variant === "outlined", r = l.text || l.variant === "text", v = l.link || l.variant === "link";
      return [
        "og-button",
        l.severity ? `og-button--${l.severity}` : "",
        l.size ? `og-button--${l.size}` : "",
        `og-button--icon-${l.iconPos}`,
        {
          "og-button--outlined": n,
          "og-button--text": r,
          "og-button--link": v,
          "og-button--raised": l.raised,
          "og-button--rounded": l.rounded,
          "og-button--fluid": l.fluid,
          "og-button--icon-only": u.value,
          "og-button--loading": l.loading,
          "og-button--disabled": s.value,
          "og-button--vertical": (l.iconPos === "top" || l.iconPos === "bottom") && !!l.label
        }
      ];
    });
    return (n, r) => t.asChild ? f(n.$slots, "default", {
      class: m(c.value),
      disabled: s.value
    }, void 0, !0, 1) : (a(), q(ae(t.as), de({
      key: 0,
      type: i.value ? t.type : void 0,
      disabled: s.value,
      "aria-disabled": s.value,
      "aria-label": d.value,
      class: c.value
    }, n.$attrs), {
      default: oe(() => [
        f(n.$slots, "default", {}, () => [
          t.loading ? f(n.$slots, "loadingicon", { class: "og-button__icon og-button__spinner" }, () => [
            t.loadingIcon ? (a(), o("span", {
              key: 0,
              class: m(["og-button__icon", "og-button__spinner", t.loadingIcon])
            }, null, 2)) : (a(), o("svg", be, [...r[0] || (r[0] = [
              g("circle", {
                class: "og-spinner-track",
                cx: "12",
                cy: "12",
                r: "10",
                stroke: "currentColor",
                "stroke-width": "4"
              }, null, -1),
              g("path", {
                class: "og-spinner-head",
                fill: "currentColor",
                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              }, null, -1)
            ])]))
          ], !0, 0) : t.icon || n.$slots.icon ? f(n.$slots, "icon", { class: "og-button__icon" }, () => [
            t.icon ? (a(), o("span", {
              key: 0,
              class: m(["og-button__icon", t.icon, t.iconClass])
            }, null, 2)) : p("", !0)
          ], !0, 1) : p("", !0),
          t.label ? (a(), o("span", fe, O(t.label), 1)) : p("", !0),
          t.badge ? (a(), o("span", {
            key: 3,
            class: m(["og-button__badge", t.badgeSeverity ? `og-button__badge--${t.badgeSeverity}` : "", t.badgeClass])
          }, O(t.badge), 3)) : p("", !0)
        ], !0)
      ]),
      _: 3
    }, 16, ["type", "disabled", "aria-disabled", "aria-label", "class"]));
  }
}), k = (t, l) => {
  const e = t.__vccOpts || t;
  for (const [i, s] of l)
    e[i] = s;
  return e;
}, me = /* @__PURE__ */ k(pe, [["__scopeId", "data-v-256088d1"]]), _e = ["type", "value", "disabled", "placeholder"], he = /* @__PURE__ */ $({
  name: "OgInputText",
  __name: "OgInputText",
  props: {
    modelValue: { default: "" },
    type: { default: "text" },
    size: {},
    invalid: { type: Boolean, default: !1 },
    variant: { default: "outlined" },
    fluid: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    placeholder: {}
  },
  emits: ["update:modelValue", "change", "focus", "blur"],
  setup(t, { emit: l }) {
    const e = t, i = l, s = (c) => {
      const n = c.target;
      i("update:modelValue", n.value);
    }, d = (c) => {
      i("change", c);
    }, u = y(() => [
      "og-inputtext",
      e.size ? `og-inputtext--${e.size}` : "",
      e.variant ? `og-inputtext--${e.variant}` : "",
      {
        "og-inputtext--invalid": e.invalid,
        "og-inputtext--fluid": e.fluid,
        "og-inputtext--disabled": e.disabled
      }
    ]);
    return (c, n) => (a(), o("input", {
      type: t.type,
      value: t.modelValue,
      disabled: t.disabled,
      placeholder: t.placeholder,
      class: m(u.value),
      onInput: s,
      onChange: d,
      onFocus: n[0] || (n[0] = (r) => c.$emit("focus", r)),
      onBlur: n[1] || (n[1] = (r) => c.$emit("blur", r))
    }, null, 42, _e));
  }
}), ye = /* @__PURE__ */ k(he, [["__scopeId", "data-v-668f2852"]]), $e = ["value", "rows", "cols", "disabled", "placeholder"], ke = /* @__PURE__ */ $({
  name: "OgTextarea",
  __name: "OgTextarea",
  props: {
    modelValue: { default: "" },
    rows: { default: 3 },
    cols: {},
    autoResize: { type: Boolean, default: !1 },
    size: {},
    invalid: { type: Boolean, default: !1 },
    variant: { default: "outlined" },
    fluid: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    placeholder: {}
  },
  emits: ["update:modelValue", "change", "focus", "blur"],
  setup(t, { emit: l }) {
    const e = t, i = l, s = V(null), d = () => {
      e.autoResize && s.value && (s.value.style.height = "auto", s.value.style.height = `${s.value.scrollHeight}px`);
    }, u = (n) => {
      const r = n.target;
      i("update:modelValue", r.value), d();
    };
    H(
      () => e.modelValue,
      () => {
        Q(d);
      }
    ), Z(() => {
      d();
    });
    const c = y(() => [
      "og-textarea",
      e.size ? `og-textarea--${e.size}` : "",
      e.variant ? `og-textarea--${e.variant}` : "",
      {
        "og-textarea--invalid": e.invalid,
        "og-textarea--fluid": e.fluid,
        "og-textarea--disabled": e.disabled,
        "og-textarea--autoresize": e.autoResize
      }
    ]);
    return (n, r) => (a(), o("textarea", {
      ref_key: "textareaRef",
      ref: s,
      value: t.modelValue,
      rows: t.rows,
      cols: t.cols,
      disabled: t.disabled,
      placeholder: t.placeholder,
      class: m(c.value),
      onInput: u,
      onChange: r[0] || (r[0] = (v) => n.$emit("change", v)),
      onFocus: r[1] || (r[1] = (v) => n.$emit("focus", v)),
      onBlur: r[2] || (r[2] = (v) => n.$emit("blur", v))
    }, null, 42, $e));
  }
}), Oe = /* @__PURE__ */ k(ke, [["__scopeId", "data-v-5ac57b30"]]), we = ["checked", "disabled", "readonly", "name", "value"], Ve = { class: "og-checkbox__box" }, Ce = {
  key: 0,
  class: "og-checkbox__icon",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, Be = /* @__PURE__ */ $({
  name: "OgCheckbox",
  __name: "OgCheckbox",
  props: {
    modelValue: { default: !1 },
    value: {},
    binary: { type: Boolean, default: !0 },
    name: {},
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    invalid: { type: Boolean, default: !1 },
    size: {}
  },
  emits: ["update:modelValue", "change", "focus", "blur"],
  setup(t, { emit: l }) {
    const e = t, i = l, s = y(() => e.binary ? !!e.modelValue : Array.isArray(e.modelValue) ? e.modelValue.includes(e.value) : e.modelValue === e.value), d = (n) => {
      e.disabled || e.readonly || n.stopPropagation();
    }, u = (n) => {
      if (e.disabled || e.readonly) return;
      let r;
      if (e.binary)
        r = !s.value;
      else if (Array.isArray(e.modelValue)) {
        const v = [...e.modelValue];
        if (s.value) {
          const b = v.indexOf(e.value);
          b !== -1 && v.splice(b, 1);
        } else
          v.push(e.value);
        r = v;
      } else
        r = s.value ? null : e.value;
      i("update:modelValue", r), i("change", n);
    }, c = y(() => [
      "og-checkbox",
      e.size ? `og-checkbox--${e.size}` : "",
      {
        "og-checkbox--checked": s.value,
        "og-checkbox--disabled": e.disabled,
        "og-checkbox--invalid": e.invalid
      }
    ]);
    return (n, r) => (a(), o("div", {
      class: m(c.value),
      onClick: d
    }, [
      g("input", {
        type: "checkbox",
        checked: s.value,
        disabled: t.disabled,
        readonly: t.readonly,
        name: t.name,
        value: t.value,
        class: "og-checkbox__input",
        onFocus: r[0] || (r[0] = (v) => n.$emit("focus", v)),
        onBlur: r[1] || (r[1] = (v) => n.$emit("blur", v)),
        onChange: u
      }, null, 40, we),
      g("div", Ve, [
        f(n.$slots, "icon", { checked: s.value }, () => [
          s.value ? (a(), o("svg", Ce, [...r[2] || (r[2] = [
            g("polyline", { points: "20 6 9 17 4 12" }, null, -1)
          ])])) : p("", !0)
        ], !0)
      ])
    ], 2));
  }
}), Ie = /* @__PURE__ */ k(Be, [["__scopeId", "data-v-66a36d2d"]]), Se = ["checked", "disabled", "readonly", "name", "value"], Te = { class: "og-radiobutton__box" }, ze = {
  key: 0,
  class: "og-radiobutton__icon"
}, Le = /* @__PURE__ */ $({
  name: "OgRadioButton",
  __name: "OgRadioButton",
  props: {
    modelValue: {},
    value: {},
    name: {},
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    invalid: { type: Boolean, default: !1 },
    size: {}
  },
  emits: ["update:modelValue", "change", "focus", "blur"],
  setup(t, { emit: l }) {
    const e = t, i = l, s = y(() => e.modelValue === e.value), d = (c) => {
      e.disabled || e.readonly || (i("update:modelValue", e.value), i("change", c));
    }, u = y(() => [
      "og-radiobutton",
      e.size ? `og-radiobutton--${e.size}` : "",
      {
        "og-radiobutton--checked": s.value,
        "og-radiobutton--disabled": e.disabled,
        "og-radiobutton--invalid": e.invalid
      }
    ]);
    return (c, n) => (a(), o("div", {
      class: m(u.value)
    }, [
      g("input", {
        type: "radio",
        checked: s.value,
        disabled: t.disabled,
        readonly: t.readonly,
        name: t.name,
        value: t.value,
        class: "og-radiobutton__input",
        onFocus: n[0] || (n[0] = (r) => c.$emit("focus", r)),
        onBlur: n[1] || (n[1] = (r) => c.$emit("blur", r)),
        onChange: d
      }, null, 40, Se),
      g("div", Te, [
        s.value ? (a(), o("div", ze)) : p("", !0)
      ])
    ], 2));
  }
}), xe = /* @__PURE__ */ k(Le, [["__scopeId", "data-v-7a229299"]]), Re = ["aria-checked", "checked", "disabled", "readonly"], Pe = { class: "og-toggleswitch__slider" }, Ae = { class: "og-toggleswitch__handle" }, De = /* @__PURE__ */ $({
  name: "OgToggleSwitch",
  __name: "OgToggleSwitch",
  props: {
    modelValue: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    invalid: { type: Boolean, default: !1 },
    size: {}
  },
  emits: ["update:modelValue", "change", "focus", "blur"],
  setup(t, { emit: l }) {
    const e = t, i = l, s = (c) => {
      e.disabled || e.readonly || c.stopPropagation();
    }, d = (c) => {
      e.disabled || e.readonly || (i("update:modelValue", !e.modelValue), i("change", c));
    }, u = y(() => [
      "og-toggleswitch",
      e.size ? `og-toggleswitch--${e.size}` : "",
      {
        "og-toggleswitch--checked": e.modelValue,
        "og-toggleswitch--disabled": e.disabled,
        "og-toggleswitch--invalid": e.invalid
      }
    ]);
    return (c, n) => (a(), o("div", {
      class: m(u.value),
      onClick: s
    }, [
      g("input", {
        type: "checkbox",
        role: "switch",
        "aria-checked": t.modelValue,
        checked: t.modelValue,
        disabled: t.disabled,
        readonly: t.readonly,
        class: "og-toggleswitch__input",
        onFocus: n[0] || (n[0] = (r) => c.$emit("focus", r)),
        onBlur: n[1] || (n[1] = (r) => c.$emit("blur", r)),
        onChange: d
      }, null, 40, Re),
      g("div", Pe, [
        g("div", Ae, [
          f(c.$slots, "handle", { checked: t.modelValue }, void 0, !0)
        ])
      ])
    ], 2));
  }
}), Me = /* @__PURE__ */ k(De, [["__scopeId", "data-v-a9f76058"]]), Ee = ["disabled"], Ke = { class: "og-inputnumber__input-wrapper" }, je = {
  key: 0,
  class: "og-inputnumber__prefix"
}, Fe = ["value", "disabled", "aria-valuenow", "aria-valuemin", "aria-valuemax", "placeholder", "onKeydown"], Ne = {
  key: 1,
  class: "og-inputnumber__suffix"
}, Ge = {
  key: 1,
  class: "og-inputnumber__stacked-buttons"
}, qe = ["disabled"], He = ["disabled"], Ue = ["disabled"], Ye = /* @__PURE__ */ $({
  name: "OgInputNumber",
  __name: "OgInputNumber",
  props: {
    modelValue: { default: null },
    min: {},
    max: {},
    step: { default: 1 },
    showButtons: { type: Boolean, default: !1 },
    buttonLayout: { default: "stacked" },
    size: {},
    disabled: { type: Boolean, default: !1 },
    invalid: { type: Boolean, default: !1 },
    placeholder: {},
    fluid: { type: Boolean, default: !1 },
    prefix: {},
    suffix: {}
  },
  emits: ["update:modelValue", "change", "focus", "blur"],
  setup(t, { emit: l }) {
    const e = t, i = l, s = V(null), d = y(() => e.modelValue === null || e.modelValue === void 0 || isNaN(e.modelValue) ? "" : String(e.modelValue)), u = y(() => e.min !== void 0 && e.modelValue !== null && e.modelValue <= e.min), c = y(() => e.max !== void 0 && e.modelValue !== null && e.modelValue >= e.max), n = (h) => {
      h !== null && (e.min !== void 0 && h < e.min && (h = e.min), e.max !== void 0 && h > e.max && (h = e.max)), i("update:modelValue", h);
    }, r = () => {
      if (e.disabled) return;
      const h = e.modelValue ?? 0;
      n(h + e.step);
    }, v = () => {
      if (e.disabled) return;
      const h = e.modelValue ?? 0;
      n(h - e.step);
    }, b = (h) => {
      const _ = h.target.value.trim();
      if (_ === "")
        n(null);
      else {
        const z = Number(_);
        isNaN(z) || n(z);
      }
    }, w = (h) => {
      i("change", h);
    }, C = y(() => [
      "og-inputnumber",
      e.size ? `og-inputnumber--${e.size}` : "",
      {
        "og-inputnumber--invalid": e.invalid,
        "og-inputnumber--fluid": e.fluid,
        "og-inputnumber--disabled": e.disabled,
        "og-inputnumber--buttons": e.showButtons,
        [`og-inputnumber--layout-${e.buttonLayout}`]: e.showButtons
      }
    ]);
    return (h, B) => (a(), o("div", {
      class: m(C.value)
    }, [
      t.showButtons && t.buttonLayout === "horizontal" ? (a(), o("button", {
        key: 0,
        type: "button",
        tabindex: "-1",
        disabled: t.disabled || u.value,
        class: "og-inputnumber__button og-inputnumber__button--decrement",
        onClick: v
      }, [
        f(h.$slots, "decrementbuttonicon", {}, () => [
          B[2] || (B[2] = T("-", -1))
        ], !0)
      ], 8, Ee)) : p("", !0),
      g("div", Ke, [
        t.prefix ? (a(), o("span", je, O(t.prefix), 1)) : p("", !0),
        g("input", {
          ref_key: "inputRef",
          ref: s,
          type: "text",
          role: "spinbutton",
          value: d.value,
          disabled: t.disabled,
          "aria-valuenow": t.modelValue ?? void 0,
          "aria-valuemin": t.min,
          "aria-valuemax": t.max,
          placeholder: t.placeholder,
          class: "og-inputnumber__input",
          onInput: b,
          onChange: w,
          onFocus: B[0] || (B[0] = (_) => h.$emit("focus", _)),
          onBlur: B[1] || (B[1] = (_) => h.$emit("blur", _)),
          onKeydown: [
            j(D(r, ["prevent"]), ["up"]),
            j(D(v, ["prevent"]), ["down"])
          ]
        }, null, 40, Fe),
        t.suffix ? (a(), o("span", Ne, O(t.suffix), 1)) : p("", !0)
      ]),
      t.showButtons && t.buttonLayout === "stacked" ? (a(), o("div", Ge, [
        g("button", {
          type: "button",
          tabindex: "-1",
          disabled: t.disabled || c.value,
          class: "og-inputnumber__button og-inputnumber__button--stacked-up",
          onClick: r
        }, " ▲ ", 8, qe),
        g("button", {
          type: "button",
          tabindex: "-1",
          disabled: t.disabled || u.value,
          class: "og-inputnumber__button og-inputnumber__button--stacked-down",
          onClick: v
        }, " ▼ ", 8, He)
      ])) : p("", !0),
      t.showButtons && t.buttonLayout === "horizontal" ? (a(), o("button", {
        key: 2,
        type: "button",
        tabindex: "-1",
        disabled: t.disabled || c.value,
        class: "og-inputnumber__button og-inputnumber__button--increment",
        onClick: r
      }, [
        f(h.$slots, "incrementbuttonicon", {}, () => [
          B[3] || (B[3] = T("+", -1))
        ], !0)
      ], 8, Ue)) : p("", !0)
    ], 2));
  }
}), Xe = /* @__PURE__ */ k(Ye, [["__scopeId", "data-v-640ba28e"]]);
function Qe(t) {
  const l = V(!1), e = V(""), i = V(-1), s = (b) => {
    if (typeof b == "object" && b !== null) {
      if (t.optionLabel) return b[t.optionLabel];
      if ("label" in b) return b.label;
    }
    return String(b);
  }, d = (b) => {
    if (typeof b == "object" && b !== null) {
      if (t.optionValue) return b[t.optionValue];
      if ("value" in b) return b.value;
    }
    return b;
  }, u = (b) => {
    if (typeof b == "object" && b !== null) {
      if (t.optionDisabled) return !!b[t.optionDisabled];
      if ("disabled" in b) return !!b.disabled;
    }
    return !1;
  }, c = y(() => {
    if (!t.filter || !e.value.trim())
      return t.options;
    const b = e.value.toLowerCase();
    return t.options.filter((w) => s(w).toLowerCase().includes(b));
  });
  return {
    isOpen: l,
    filterQuery: e,
    focusedIndex: i,
    filteredOptions: c,
    getOptionLabel: s,
    getOptionValue: d,
    isOptionDisabled: u,
    toggle: () => {
      l.value = !l.value, l.value || (i.value = -1, e.value = "");
    },
    open: () => {
      l.value = !0;
    },
    close: () => {
      l.value = !1, i.value = -1, e.value = "";
    }
  };
}
const Je = { class: "og-select__label" }, We = { key: 0 }, Ze = {
  key: 1,
  class: "og-select__placeholder"
}, et = { class: "og-select__dropdown-icon" }, tt = {
  key: 0,
  class: "og-select__chevron",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, lt = {
  key: 1,
  class: "og-select__spinner",
  viewBox: "0 0 24 24",
  fill: "none"
}, at = {
  key: 0,
  class: "og-select__header"
}, ot = {
  key: 1,
  class: "og-select__filter-container"
}, st = ["placeholder"], nt = {
  class: "og-select__list",
  role: "listbox"
}, it = ["aria-selected", "onClick"], ut = {
  key: 0,
  class: "og-select__empty"
}, dt = {
  key: 2,
  class: "og-select__footer"
}, rt = /* @__PURE__ */ $({
  name: "OgSelect",
  __name: "OgSelect",
  props: {
    modelValue: {},
    options: { default: () => [] },
    optionLabel: {},
    optionValue: {},
    optionDisabled: {},
    placeholder: { default: "Select an option" },
    filter: { type: Boolean, default: !1 },
    filterPlaceholder: { default: "Search..." },
    emptyMessage: { default: "No options found" },
    showClear: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    invalid: { type: Boolean, default: !1 },
    size: {},
    fluid: { type: Boolean, default: !1 },
    loading: { type: Boolean, default: !1 },
    overlayTeleport: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "change", "focus", "blur"],
  setup(t, { emit: l }) {
    const e = t, i = l, s = V(null), d = V(null), u = V(null), c = V({}), {
      isOpen: n,
      filterQuery: r,
      filteredOptions: v,
      getOptionLabel: b,
      getOptionValue: w,
      isOptionDisabled: C,
      toggle: h,
      close: B
    } = Qe({
      options: e.options,
      optionLabel: e.optionLabel,
      optionValue: e.optionValue,
      optionDisabled: e.optionDisabled,
      filter: e.filter
    }), _ = y(() => e.modelValue === null || e.modelValue === void 0 ? null : e.options.find((I) => w(I) === e.modelValue) ?? e.modelValue), z = y(() => _.value !== null && _.value !== void 0 ? b(_.value) : ""), L = (I) => w(I) === e.modelValue, M = (I) => {
      if (C(I)) return;
      const K = w(I);
      i("update:modelValue", K), i("change", K), B();
    }, S = () => {
      i("update:modelValue", null), i("change", null);
    }, A = () => {
      if (!s.value || !e.overlayTeleport) return;
      const I = s.value.getBoundingClientRect();
      c.value = {
        position: "absolute",
        top: `${I.bottom + window.scrollY + 4}px`,
        left: `${I.left + window.scrollX}px`,
        width: `${I.width}px`,
        zIndex: "var(--og-z-dropdown)"
      };
    }, E = () => {
      e.disabled || e.loading || (h(), n.value && Q(() => {
        A(), e.filter && u.value && u.value.focus();
      }));
    }, N = (I) => {
      I.key === "Enter" || I.key === " " ? (I.preventDefault(), E()) : I.key === "Escape" && B();
    }, Y = (I) => {
      s.value && !s.value.contains(I.target) && d.value && !d.value.contains(I.target) && B();
    };
    H(n, (I) => {
      I ? (window.addEventListener("resize", A), window.addEventListener("scroll", A, !0)) : (window.removeEventListener("resize", A), window.removeEventListener("scroll", A, !0));
    }), Z(() => {
      document.addEventListener("click", Y);
    }), W(() => {
      document.removeEventListener("click", Y), window.removeEventListener("resize", A), window.removeEventListener("scroll", A, !0);
    });
    const ie = y(() => [
      "og-select",
      e.size ? `og-select--${e.size}` : "",
      {
        "og-select--open": n.value,
        "og-select--invalid": e.invalid,
        "og-select--fluid": e.fluid,
        "og-select--disabled": e.disabled
      }
    ]);
    return (I, K) => (a(), o("div", {
      ref_key: "containerRef",
      ref: s,
      class: m(ie.value)
    }, [
      g("div", {
        class: "og-select__trigger",
        tabindex: "0",
        onClick: E,
        onKeydown: N
      }, [
        g("div", Je, [
          f(I.$slots, "value", {
            value: _.value,
            placeholder: t.placeholder
          }, () => [
            _.value !== null && _.value !== void 0 ? (a(), o("span", We, O(z.value), 1)) : (a(), o("span", Ze, O(t.placeholder), 1))
          ], !0)
        ]),
        t.showClear && _.value !== null && _.value !== void 0 && !t.disabled ? (a(), o("span", {
          key: 0,
          class: "og-select__clear",
          onClick: D(S, ["stop"])
        }, [
          f(I.$slots, "clearicon", {}, () => [
            K[1] || (K[1] = T("✕", -1))
          ], !0)
        ])) : p("", !0),
        g("span", et, [
          f(I.$slots, "dropdownicon", {}, () => [
            t.loading ? (a(), o("svg", lt, [...K[3] || (K[3] = [
              g("circle", {
                cx: "12",
                cy: "12",
                r: "10",
                stroke: "currentColor",
                "stroke-width": "4",
                style: { opacity: "0.25" }
              }, null, -1),
              g("path", {
                fill: "currentColor",
                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z",
                style: { opacity: "0.75" }
              }, null, -1)
            ])])) : (a(), o("svg", tt, [...K[2] || (K[2] = [
              g("polyline", { points: "6 9 12 15 18 9" }, null, -1)
            ])]))
          ], !0)
        ])
      ], 32),
      (a(), q(X, {
        to: "body",
        disabled: !t.overlayTeleport
      }, [
        x(n) ? (a(), o("div", {
          key: 0,
          ref_key: "overlayRef",
          ref: d,
          class: "og-select__overlay",
          style: F(c.value)
        }, [
          I.$slots.header ? (a(), o("div", at, [
            f(I.$slots, "header", {}, void 0, !0)
          ])) : p("", !0),
          t.filter ? (a(), o("div", ot, [
            J(g("input", {
              ref_key: "filterInputRef",
              ref: u,
              "onUpdate:modelValue": K[0] || (K[0] = (G) => re(r) ? r.value = G : null),
              type: "text",
              class: "og-select__filter-input",
              placeholder: t.filterPlaceholder
            }, null, 8, st), [
              [se, x(r)]
            ])
          ])) : p("", !0),
          g("ul", nt, [
            (a(!0), o(R, null, P(x(v), (G, le) => (a(), o("li", {
              key: le,
              class: m([
                "og-select__option",
                {
                  "og-select__option--selected": L(G),
                  "og-select__option--disabled": x(C)(G)
                }
              ]),
              role: "option",
              "aria-selected": L(G),
              onClick: (bs) => M(G)
            }, [
              f(I.$slots, "option", {
                option: G,
                index: le
              }, () => [
                T(O(x(b)(G)), 1)
              ], !0)
            ], 10, it))), 128)),
            x(v).length === 0 ? (a(), o("li", ut, O(t.emptyMessage), 1)) : p("", !0)
          ]),
          I.$slots.footer ? (a(), o("div", dt, [
            f(I.$slots, "footer", {}, void 0, !0)
          ])) : p("", !0)
        ], 4)) : p("", !0)
      ], 8, ["disabled"]))
    ], 2));
  }
}), ct = /* @__PURE__ */ k(rt, [["__scopeId", "data-v-ad1ccc3f"]]), gt = {
  key: 0,
  class: "og-card__header"
}, vt = { class: "og-card__body" }, bt = {
  key: 0,
  class: "og-card__title"
}, ft = {
  key: 1,
  class: "og-card__subtitle"
}, pt = {
  key: 2,
  class: "og-card__content"
}, mt = {
  key: 3,
  class: "og-card__footer"
}, _t = /* @__PURE__ */ $({
  name: "OgCard",
  __name: "OgCard",
  props: {
    title: {},
    subtitle: {}
  },
  setup(t) {
    const l = y(() => ["og-card"]);
    return (e, i) => (a(), o("div", {
      class: m(l.value)
    }, [
      e.$slots.header ? (a(), o("div", gt, [
        f(e.$slots, "header", {}, void 0, !0)
      ])) : p("", !0),
      g("div", vt, [
        t.title || e.$slots.title ? (a(), o("div", bt, [
          f(e.$slots, "title", {}, () => [
            T(O(t.title), 1)
          ], !0)
        ])) : p("", !0),
        t.subtitle || e.$slots.subtitle ? (a(), o("div", ft, [
          f(e.$slots, "subtitle", {}, () => [
            T(O(t.subtitle), 1)
          ], !0)
        ])) : p("", !0),
        e.$slots.content ? (a(), o("div", pt, [
          f(e.$slots, "content", {}, void 0, !0)
        ])) : p("", !0),
        e.$slots.footer ? (a(), o("div", mt, [
          f(e.$slots, "footer", {}, void 0, !0)
        ])) : p("", !0)
      ])
    ], 2));
  }
}), ht = /* @__PURE__ */ k(_t, [["__scopeId", "data-v-becb22d8"]]), yt = {
  key: 0,
  class: "og-dialog__header"
}, $t = { class: "og-dialog__title" }, kt = { class: "og-dialog__content" }, Ot = {
  key: 1,
  class: "og-dialog__footer"
}, wt = /* @__PURE__ */ $({
  name: "OgDialog",
  __name: "OgDialog",
  props: {
    visible: { type: Boolean, default: !1 },
    header: {},
    modal: { type: Boolean, default: !0 },
    closable: { type: Boolean, default: !0 },
    closeOnEscape: { type: Boolean, default: !0 },
    dismissableMask: { type: Boolean, default: !1 },
    position: { default: "center" },
    style: {}
  },
  emits: ["update:visible", "show", "hide"],
  setup(t, { emit: l }) {
    const e = t, i = l, s = V(null), d = () => {
      i("update:visible", !1), i("hide");
    }, u = () => {
      e.dismissableMask && d();
    }, c = () => {
      e.closeOnEscape && e.closable && d();
    };
    H(
      () => e.visible,
      (r) => {
        r ? (i("show"), document.body.style.overflow = e.modal ? "hidden" : "") : document.body.style.overflow = "";
      }
    ), W(() => {
      document.body.style.overflow = "";
    });
    const n = y(() => ["og-dialog"]);
    return (r, v) => (a(), q(X, { to: "body" }, [
      t.visible ? (a(), o("div", {
        key: 0,
        class: m(["og-dialog-mask", { "og-dialog-mask--modal": t.modal }, `og-dialog-mask--${t.position}`]),
        onClick: u
      }, [
        g("div", {
          ref_key: "dialogRef",
          ref: s,
          class: m(n.value),
          style: F(t.style),
          role: "dialog",
          "aria-modal": "true",
          tabindex: "-1",
          onClick: v[0] || (v[0] = D(() => {
          }, ["stop"])),
          onKeydown: j(c, ["esc"])
        }, [
          t.header || r.$slots.header || t.closable ? (a(), o("div", yt, [
            f(r.$slots, "header", {}, () => [
              g("span", $t, O(t.header), 1)
            ], !0),
            t.closable ? (a(), o("button", {
              key: 0,
              type: "button",
              class: "og-dialog__close",
              "aria-label": "Close",
              onClick: d
            }, [
              f(r.$slots, "closeicon", {}, () => [
                v[1] || (v[1] = T("✕", -1))
              ], !0)
            ])) : p("", !0)
          ])) : p("", !0),
          g("div", kt, [
            f(r.$slots, "default", {}, void 0, !0)
          ]),
          r.$slots.footer ? (a(), o("div", Ot, [
            f(r.$slots, "footer", {}, void 0, !0)
          ])) : p("", !0)
        ], 38)
      ], 2)) : p("", !0)
    ]));
  }
}), Vt = /* @__PURE__ */ k(wt, [["__scopeId", "data-v-d8d5495a"]]), U = V([]);
function Ct() {
  const t = (s) => {
    const d = s.id || Math.random().toString(36).substring(2, 9), u = { ...s, id: d };
    U.value.push(u), !u.sticky && (u.life || !0) && setTimeout(() => {
      l(d);
    }, u.life || 3e3);
  }, l = (s) => {
    U.value = U.value.filter((d) => d.id !== s);
  };
  return {
    messages: U,
    add: t,
    remove: l,
    removeGroup: (s) => {
      U.value = U.value.filter((d) => d.group !== s);
    },
    clear: () => {
      U.value = [];
    }
  };
}
const Bt = { class: "og-toast__icon" }, It = { key: 0 }, St = { key: 1 }, Tt = { key: 2 }, zt = { key: 3 }, Lt = { class: "og-toast__body" }, xt = {
  key: 0,
  class: "og-toast__summary"
}, Rt = {
  key: 1,
  class: "og-toast__detail"
}, Pt = ["onClick"], At = /* @__PURE__ */ $({
  name: "OgToast",
  __name: "OgToast",
  props: {
    position: { default: "top-right" },
    group: {}
  },
  setup(t) {
    const l = t, { messages: e, remove: i } = Ct(), s = y(() => l.group ? e.value.filter((d) => d.group === l.group) : e.value.filter((d) => !d.group));
    return (d, u) => (a(), q(X, { to: "body" }, [
      g("div", {
        class: m(["og-toast-container", `og-toast-container--${t.position}`])
      }, [
        ce(ge, { name: "og-toast-anim" }, {
          default: oe(() => [
            (a(!0), o(R, null, P(s.value, (c) => (a(), o("div", {
              key: c.id,
              class: m(["og-toast", c.severity ? `og-toast--${c.severity}` : "og-toast--info"])
            }, [
              g("div", Bt, [
                f(d.$slots, "icon", { message: c }, () => [
                  c.severity === "success" ? (a(), o("span", It, "✓")) : c.severity === "warn" ? (a(), o("span", St, "⚠")) : c.severity === "error" ? (a(), o("span", Tt, "✕")) : (a(), o("span", zt, "ℹ"))
                ], !0)
              ]),
              g("div", Lt, [
                c.summary ? (a(), o("div", xt, O(c.summary), 1)) : p("", !0),
                c.detail ? (a(), o("div", Rt, O(c.detail), 1)) : p("", !0)
              ]),
              c.closable !== !1 ? (a(), o("button", {
                key: 0,
                type: "button",
                class: "og-toast__close",
                "aria-label": "Close",
                onClick: (n) => x(i)(c.id)
              }, " ✕ ", 8, Pt)) : p("", !0)
            ], 2))), 128))
          ]),
          _: 3
        })
      ], 2)
    ]));
  }
}), Dt = /* @__PURE__ */ k(At, [["__scopeId", "data-v-965c9c27"]]);
function Mt(t) {
  const l = V(0), e = V(t.rows || 10), i = V(null), s = V(1), d = V([]), u = y(() => t.value.length), c = y(() => {
    if (!i.value) return t.value;
    const b = i.value;
    return [...t.value].sort((w, C) => {
      const h = w[b], B = C[b];
      return h === B ? 0 : h == null ? 1 : B == null ? -1 : h < B ? -1 * s.value : 1 * s.value;
    });
  }), n = y(() => {
    if (!t.paginator) return c.value;
    const b = l.value * e.value;
    return c.value.slice(b, b + e.value);
  });
  return {
    currentPage: l,
    rowsPerPage: e,
    sortField: i,
    sortOrder: s,
    selectedRows: d,
    totalRecords: u,
    paginatedData: n,
    sort: (b) => {
      i.value === b ? s.value === 1 ? s.value = -1 : (i.value = null, s.value = 1) : (i.value = b, s.value = 1);
    },
    setPage: (b) => {
      l.value = b;
    }
  };
}
const Et = {
  key: 0,
  class: "og-datatable__header"
}, Kt = { class: "og-datatable__wrapper" }, jt = { class: "og-datatable__table" }, Ft = { class: "og-datatable__thead" }, Nt = ["onClick"], Gt = { class: "og-datatable__th-content" }, qt = {
  key: 0,
  class: "og-datatable__sort-icon"
}, Ht = { class: "og-datatable__tbody" }, Ut = {
  key: 0,
  class: "og-datatable__loading-row"
}, Yt = ["colspan"], Xt = {
  key: 1,
  class: "og-datatable__empty-row"
}, Qt = ["colspan"], Jt = { key: 1 }, Wt = {
  key: 1,
  class: "og-datatable__paginator"
}, Zt = ["disabled"], el = ["onClick"], tl = ["disabled"], ll = {
  key: 2,
  class: "og-datatable__footer"
}, al = /* @__PURE__ */ $({
  name: "OgDataTable",
  __name: "OgDataTable",
  props: {
    value: { default: () => [] },
    dataKey: {},
    paginator: { type: Boolean, default: !1 },
    rows: { default: 10 },
    loading: { type: Boolean, default: !1 },
    stripedRows: { type: Boolean, default: !1 },
    showGridlines: { type: Boolean, default: !1 },
    size: {}
  },
  setup(t) {
    const l = t, e = ve(), {
      currentPage: i,
      sortField: s,
      sortOrder: d,
      paginatedData: u,
      sort: c,
      setPage: n
    } = Mt({
      value: l.value,
      paginator: l.paginator,
      rows: l.rows,
      dataKey: l.dataKey
    }), r = y(() => Math.ceil(l.value.length / l.rows)), v = y(() => (e.default ? e.default() : []).map((C) => ({
      props: C.props,
      children: C.children
    }))), b = y(() => [
      "og-datatable",
      l.size ? `og-datatable--${l.size}` : "",
      {
        "og-datatable--striped": l.stripedRows,
        "og-datatable--gridlines": l.showGridlines
      }
    ]);
    return (w, C) => (a(), o("div", {
      class: m(b.value)
    }, [
      w.$slots.header ? (a(), o("div", Et, [
        f(w.$slots, "header", {}, void 0, !0)
      ])) : p("", !0),
      g("div", Kt, [
        g("table", jt, [
          g("thead", Ft, [
            g("tr", null, [
              (a(!0), o(R, null, P(v.value, (h, B) => {
                var _, z, L, M, S, A;
                return a(), o("th", {
                  key: B,
                  style: F((_ = h.props) == null ? void 0 : _.style),
                  class: m([
                    "og-datatable__th",
                    { "og-datatable__th--sortable": (z = h.props) == null ? void 0 : z.sortable }
                  ]),
                  onClick: (E) => {
                    var N, Y;
                    return (N = h.props) != null && N.sortable && ((Y = h.props) != null && Y.field) ? x(c)(h.props.field) : void 0;
                  }
                }, [
                  g("div", Gt, [
                    g("span", null, O(((L = h.props) == null ? void 0 : L.header) || ((M = h.props) == null ? void 0 : M.field)), 1),
                    (S = h.props) != null && S.sortable && x(s) === ((A = h.props) == null ? void 0 : A.field) ? (a(), o("span", qt, O(x(d) === 1 ? "▲" : "▼"), 1)) : p("", !0)
                  ])
                ], 14, Nt);
              }), 128))
            ])
          ]),
          g("tbody", Ht, [
            t.loading ? (a(), o("tr", Ut, [
              g("td", {
                colspan: v.value.length,
                class: "og-datatable__loading-cell"
              }, [
                f(w.$slots, "loading", {}, () => [
                  C[2] || (C[2] = T("Loading data...", -1))
                ], !0)
              ], 8, Yt)
            ])) : x(u).length === 0 ? (a(), o("tr", Xt, [
              g("td", {
                colspan: v.value.length,
                class: "og-datatable__empty-cell"
              }, [
                f(w.$slots, "empty", {}, () => [
                  C[3] || (C[3] = T("No records found", -1))
                ], !0)
              ], 8, Qt)
            ])) : p("", !0),
            (a(!0), o(R, null, P(x(u), (h, B) => (a(), o("tr", {
              key: t.dataKey ? h[t.dataKey] : B,
              class: "og-datatable__row"
            }, [
              (a(!0), o(R, null, P(v.value, (_, z) => {
                var L, M, S, A, E;
                return a(), o("td", {
                  key: z,
                  style: F((L = _.props) == null ? void 0 : L.style),
                  class: "og-datatable__td"
                }, [
                  (M = _.children) != null && M.body ? (a(), q(ae((S = _.children) == null ? void 0 : S.body), {
                    key: 0,
                    data: h,
                    index: B,
                    field: (A = _.props) == null ? void 0 : A.field
                  }, null, 8, ["data", "index", "field"])) : (E = _.props) != null && E.field ? (a(), o("span", Jt, O(h[_.props.field]), 1)) : p("", !0)
                ], 4);
              }), 128))
            ]))), 128))
          ])
        ])
      ]),
      t.paginator && r.value > 1 ? (a(), o("div", Wt, [
        g("button", {
          type: "button",
          class: "og-datatable__page-btn",
          disabled: x(i) === 0,
          onClick: C[0] || (C[0] = (h) => x(n)(x(i) - 1))
        }, " ‹ ", 8, Zt),
        (a(!0), o(R, null, P(r.value, (h) => (a(), o("button", {
          key: h,
          class: m(["og-datatable__page-btn", { "og-datatable__page-btn--active": x(i) === h - 1 }]),
          onClick: (B) => x(n)(h - 1)
        }, O(h), 11, el))), 128)),
        g("button", {
          type: "button",
          class: "og-datatable__page-btn",
          disabled: x(i) >= r.value - 1,
          onClick: C[1] || (C[1] = (h) => x(n)(x(i) + 1))
        }, " › ", 8, tl)
      ])) : p("", !0),
      w.$slots.footer ? (a(), o("div", ll, [
        f(w.$slots, "footer", {}, void 0, !0)
      ])) : p("", !0)
    ], 2));
  }
}), ol = /* @__PURE__ */ k(al, [["__scopeId", "data-v-828f6675"]]), sl = /* @__PURE__ */ $({
  name: "OgColumn",
  __name: "OgColumn",
  props: {
    field: {},
    header: {},
    sortable: { type: Boolean },
    style: {}
  },
  setup(t) {
    return (l, e) => f(l.$slots, "default");
  }
}), nl = ["src", "alt"], il = {
  key: 1,
  class: "og-avatar__label"
}, ul = /* @__PURE__ */ $({
  name: "OgAvatar",
  __name: "OgAvatar",
  props: {
    label: {},
    icon: {},
    image: {},
    size: {},
    shape: { default: "square" },
    ariaLabel: {}
  },
  setup(t) {
    const l = t, e = y(() => [
      "og-avatar",
      l.size ? `og-avatar--${l.size}` : "",
      `og-avatar--${l.shape}`
    ]);
    return (i, s) => (a(), o("div", {
      class: m(e.value)
    }, [
      f(i.$slots, "default", {}, () => [
        t.image ? (a(), o("img", {
          key: 0,
          src: t.image,
          alt: t.ariaLabel,
          class: "og-avatar__image"
        }, null, 8, nl)) : t.label ? (a(), o("span", il, O(t.label), 1)) : t.icon ? (a(), o("span", {
          key: 2,
          class: m(["og-avatar__icon", t.icon])
        }, null, 2)) : p("", !0)
      ], !0)
    ], 2));
  }
}), dl = /* @__PURE__ */ k(ul, [["__scopeId", "data-v-d897d309"]]), rl = /* @__PURE__ */ $({
  name: "OgBadge",
  __name: "OgBadge",
  props: {
    value: {},
    severity: {},
    size: {}
  },
  setup(t) {
    const l = t, e = y(() => [
      "og-badge",
      l.severity ? `og-badge--${l.severity}` : "",
      l.size ? `og-badge--${l.size}` : "",
      {
        "og-badge--dot": l.value === void 0 || l.value === null || l.value === ""
      }
    ]);
    return (i, s) => (a(), o("span", {
      class: m(e.value)
    }, [
      f(i.$slots, "default", {}, () => [
        T(O(t.value), 1)
      ], !0)
    ], 2));
  }
}), cl = /* @__PURE__ */ k(rl, [["__scopeId", "data-v-facd4d33"]]), gl = ["aria-valuenow"], vl = {
  key: 0,
  class: "og-progressbar__label"
}, bl = {
  key: 1,
  class: "og-progressbar__indeterminate-container"
}, fl = /* @__PURE__ */ $({
  name: "OgProgressBar",
  __name: "OgProgressBar",
  props: {
    value: { default: 0 },
    mode: { default: "determinate" },
    showValue: { type: Boolean, default: !0 },
    unit: { default: "%" }
  },
  setup(t) {
    const l = t, e = y(() => Math.min(100, Math.max(0, l.value)));
    return (i, s) => (a(), o("div", {
      class: m(["og-progressbar", `og-progressbar--${t.mode}`]),
      role: "progressbar",
      "aria-valuenow": t.value ?? void 0
    }, [
      t.mode === "determinate" ? (a(), o("div", {
        key: 0,
        class: "og-progressbar__value",
        style: F({ width: `${e.value}%` })
      }, [
        t.showValue ? (a(), o("span", vl, O(e.value) + O(t.unit), 1)) : p("", !0)
      ], 4)) : (a(), o("div", bl, [...s[0] || (s[0] = [
        g("div", { class: "og-progressbar__indeterminate-bar" }, null, -1)
      ])]))
    ], 10, gl));
  }
}), pl = /* @__PURE__ */ k(fl, [["__scopeId", "data-v-5bd32dc7"]]), ml = /* @__PURE__ */ $({
  name: "OgSkeleton",
  __name: "OgSkeleton",
  props: {
    shape: { default: "rectangle" },
    size: {},
    width: { default: "100%" },
    height: { default: "1rem" },
    borderRadius: {},
    animation: { default: "wave" }
  },
  setup(t) {
    const l = t, e = y(() => l.size ? {
      width: l.size,
      height: l.size,
      borderRadius: l.shape === "circle" ? "50%" : l.borderRadius
    } : {
      width: l.width,
      height: l.height,
      borderRadius: l.shape === "circle" ? "50%" : l.borderRadius
    }), i = y(() => [
      "og-skeleton",
      `og-skeleton--${l.shape}`,
      `og-skeleton--anim-${l.animation}`
    ]);
    return (s, d) => (a(), o("div", {
      class: m(i.value),
      style: F(e.value)
    }, null, 6));
  }
}), _l = /* @__PURE__ */ k(ml, [["__scopeId", "data-v-442ac949"]]), hl = {
  key: 0,
  class: "og-divider__content"
}, yl = /* @__PURE__ */ $({
  name: "OgDivider",
  __name: "OgDivider",
  props: {
    align: { default: "center" },
    layout: { default: "horizontal" },
    type: { default: "solid" }
  },
  setup(t) {
    const l = t, e = y(() => [
      "og-divider",
      `og-divider--${l.layout}`,
      `og-divider--${l.type}`,
      `og-divider--align-${l.align}`
    ]);
    return (i, s) => (a(), o("div", {
      class: m(e.value),
      role: "separator"
    }, [
      i.$slots.default ? (a(), o("div", hl, [
        f(i.$slots, "default", {}, void 0, !0)
      ])) : p("", !0)
    ], 2));
  }
}), $l = /* @__PURE__ */ k(yl, [["__scopeId", "data-v-9409c09c"]]), kl = { class: "og-accordion" }, Ol = /* @__PURE__ */ $({
  name: "OgAccordion",
  __name: "OgAccordion",
  props: {
    value: { default: null },
    multiple: { type: Boolean, default: !1 }
  },
  emits: ["update:value", "tab-open", "tab-close"],
  setup(t, { emit: l }) {
    const e = t, i = l, s = V(e.value ?? (e.multiple ? [] : null));
    let d = 0;
    H(
      () => e.value,
      (n) => {
        s.value = n;
      }
    );
    const u = () => {
      const n = d;
      return d++, n;
    }, c = (n) => {
      if (e.multiple) {
        let r = Array.isArray(s.value) ? [...s.value] : [];
        r.includes(n) ? (r = r.filter((v) => v !== n), i("tab-close", n)) : (r.push(n), i("tab-open", n)), s.value = r, i("update:value", r);
      } else
        s.value === n ? (s.value = null, i("tab-close", n), i("update:value", null)) : (s.value = n, i("tab-open", n), i("update:value", n));
    };
    return ee("ogAccordion", {
      multiple: e.multiple,
      activeValue: s,
      registerTab: u,
      toggleTab: c
    }), (n, r) => (a(), o("div", kl, [
      f(n.$slots, "default", {}, void 0, !0)
    ]));
  }
}), wl = /* @__PURE__ */ k(Ol, [["__scopeId", "data-v-63901bc0"]]), Vl = ["tabindex"], Cl = { class: "og-accordion-tab__title" }, Bl = { class: "og-accordion-tab__toggle-icon" }, Il = { class: "og-accordion-tab__content" }, Sl = /* @__PURE__ */ $({
  name: "OgAccordionTab",
  __name: "OgAccordionTab",
  props: {
    header: {},
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    const l = t, e = ne("ogAccordion", null), i = V(-1), s = y(() => e ? e.multiple ? Array.isArray(e.activeValue.value) && e.activeValue.value.includes(i.value) : e.activeValue.value === i.value : !1), d = () => {
      l.disabled || !e || e.toggleTab(i.value);
    };
    return e && (i.value = e.registerTab()), (u, c) => (a(), o("div", {
      class: m(["og-accordion-tab", { "og-accordion-tab--active": s.value, "og-accordion-tab--disabled": t.disabled }])
    }, [
      g("div", {
        class: "og-accordion-tab__header",
        role: "button",
        tabindex: t.disabled ? -1 : 0,
        onClick: d
      }, [
        f(u.$slots, "header", {}, () => [
          g("span", Cl, O(t.header), 1)
        ], !0),
        g("span", Bl, O(s.value ? "−" : "+"), 1)
      ], 8, Vl),
      J(g("div", Il, [
        f(u.$slots, "default", {}, void 0, !0)
      ], 512), [
        [te, s.value]
      ])
    ], 2));
  }
}), Tl = /* @__PURE__ */ k(Sl, [["__scopeId", "data-v-723111fa"]]), zl = { class: "og-tabs" }, Ll = { class: "og-tabs__nav-container" }, xl = {
  class: "og-tabs__nav",
  role: "tablist"
}, Rl = ["aria-selected", "disabled", "onClick"], Pl = { class: "og-tabs__panels" }, Al = /* @__PURE__ */ $({
  name: "OgTabs",
  __name: "OgTabs",
  props: {
    value: { default: 0 }
  },
  emits: ["update:value", "tab-change"],
  setup(t, { emit: l }) {
    const e = t, i = l, s = V(e.value), d = V([]);
    H(
      () => e.value,
      (n) => {
        s.value = n;
      }
    );
    const u = (n) => {
      const r = d.value.length;
      return d.value.push(n), r;
    }, c = (n, r) => {
      r || (s.value = n, i("update:value", n), i("tab-change", n));
    };
    return ee("ogTabs", {
      activeValue: s,
      registerTab: u
    }), (n, r) => (a(), o("div", zl, [
      g("div", Ll, [
        g("div", xl, [
          (a(!0), o(R, null, P(d.value, (v, b) => (a(), o("button", {
            key: b,
            type: "button",
            role: "tab",
            "aria-selected": s.value === b,
            disabled: v.disabled,
            class: m([
              "og-tabs__header",
              {
                "og-tabs__header--active": s.value === b,
                "og-tabs__header--disabled": v.disabled
              }
            ]),
            onClick: (w) => c(b, v.disabled)
          }, [
            g("span", null, O(v.header), 1)
          ], 10, Rl))), 128))
        ])
      ]),
      g("div", Pl, [
        f(n.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), Dl = /* @__PURE__ */ k(Al, [["__scopeId", "data-v-f21cc545"]]), Ml = {
  class: "og-tabpanel",
  role: "tabpanel"
}, El = /* @__PURE__ */ $({
  name: "OgTabPanel",
  __name: "OgTabPanel",
  props: {
    header: {},
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    const l = t, e = ne("ogTabs", null), i = V(-1), s = y(() => e ? e.activeValue.value === i.value : !1);
    return e && (i.value = e.registerTab({
      header: l.header,
      disabled: l.disabled
    })), (d, u) => J((a(), o("div", Ml, [
      f(d.$slots, "default", {}, void 0, !0)
    ], 512)), [
      [te, s.value]
    ]);
  }
}), Kl = /* @__PURE__ */ k(El, [["__scopeId", "data-v-39e40f7b"]]), jl = { class: "og-tag__value" }, Fl = /* @__PURE__ */ $({
  name: "OgTag",
  __name: "OgTag",
  props: {
    value: {},
    severity: {},
    rounded: { type: Boolean, default: !1 },
    icon: {}
  },
  setup(t) {
    const l = t, e = y(() => [
      "og-tag",
      l.severity ? `og-tag--${l.severity}` : "og-tag--primary",
      {
        "og-tag--rounded": l.rounded
      }
    ]);
    return (i, s) => (a(), o("span", {
      class: m(e.value)
    }, [
      f(i.$slots, "icon", {}, () => [
        t.icon ? (a(), o("span", {
          key: 0,
          class: m(["og-tag__icon", t.icon])
        }, null, 2)) : p("", !0)
      ], !0),
      g("span", jl, [
        f(i.$slots, "default", {}, () => [
          T(O(t.value), 1)
        ], !0)
      ])
    ], 2));
  }
}), Nl = /* @__PURE__ */ k(Fl, [["__scopeId", "data-v-be36ea7e"]]), Gl = {
  key: 0,
  class: "og-chip"
}, ql = ["src"], Hl = { class: "og-chip__label" }, Ul = /* @__PURE__ */ $({
  name: "OgChip",
  __name: "OgChip",
  props: {
    label: {},
    icon: {},
    image: {},
    removable: { type: Boolean, default: !1 }
  },
  emits: ["remove"],
  setup(t, { emit: l }) {
    const e = l, i = V(!0), s = (d) => {
      i.value = !1, e("remove", d);
    };
    return (d, u) => i.value ? (a(), o("div", Gl, [
      f(d.$slots, "icon", {}, () => [
        t.image ? (a(), o("img", {
          key: 0,
          src: t.image,
          alt: "chip avatar",
          class: "og-chip__image"
        }, null, 8, ql)) : t.icon ? (a(), o("span", {
          key: 1,
          class: m(["og-chip__icon", t.icon])
        }, null, 2)) : p("", !0)
      ], !0),
      g("span", Hl, [
        f(d.$slots, "default", {}, () => [
          T(O(t.label), 1)
        ], !0)
      ]),
      t.removable ? (a(), o("button", {
        key: 0,
        type: "button",
        class: "og-chip__remove",
        "aria-label": "Remove",
        onClick: s
      }, [
        f(d.$slots, "removeicon", {}, () => [
          u[0] || (u[0] = T("✕", -1))
        ], !0)
      ])) : p("", !0)
    ])) : p("", !0);
  }
}), Yl = /* @__PURE__ */ k(Ul, [["__scopeId", "data-v-fc160651"]]), Xl = { class: "og-message__wrapper" }, Ql = { class: "og-message__icon" }, Jl = { key: 1 }, Wl = { key: 2 }, Zl = { key: 3 }, ea = { key: 4 }, ta = { class: "og-message__content" }, la = /* @__PURE__ */ $({
  name: "OgMessage",
  __name: "OgMessage",
  props: {
    severity: { default: "info" },
    closable: { type: Boolean, default: !1 },
    icon: {}
  },
  emits: ["close"],
  setup(t, { emit: l }) {
    const e = t, i = l, s = V(!0), d = (c) => {
      s.value = !1, i("close", c);
    }, u = y(() => [
      "og-message",
      `og-message--${e.severity}`
    ]);
    return (c, n) => s.value ? (a(), o("div", {
      key: 0,
      class: m(u.value),
      role: "alert"
    }, [
      g("div", Xl, [
        g("span", Ql, [
          f(c.$slots, "icon", {}, () => [
            t.icon ? (a(), o("span", {
              key: 0,
              class: m(t.icon)
            }, null, 2)) : t.severity === "success" ? (a(), o("span", Jl, "✓")) : t.severity === "warning" ? (a(), o("span", Wl, "⚠")) : t.severity === "danger" ? (a(), o("span", Zl, "✕")) : (a(), o("span", ea, "ℹ"))
          ], !0)
        ]),
        g("div", ta, [
          f(c.$slots, "default", {}, void 0, !0)
        ]),
        t.closable ? (a(), o("button", {
          key: 0,
          type: "button",
          class: "og-message__close",
          "aria-label": "Close",
          onClick: d
        }, [
          f(c.$slots, "closeicon", {}, () => [
            n[0] || (n[0] = T("✕", -1))
          ], !0)
        ])) : p("", !0)
      ])
    ], 2)) : p("", !0);
  }
}), aa = /* @__PURE__ */ k(la, [["__scopeId", "data-v-40394155"]]), oa = {
  key: 0,
  class: "og-drawer__header"
}, sa = { class: "og-drawer__title" }, na = { class: "og-drawer__content" }, ia = {
  key: 1,
  class: "og-drawer__footer"
}, ua = /* @__PURE__ */ $({
  name: "OgDrawer",
  __name: "OgDrawer",
  props: {
    visible: { type: Boolean, default: !1 },
    position: { default: "left" },
    header: {},
    modal: { type: Boolean, default: !0 },
    closable: { type: Boolean, default: !0 },
    dismissableMask: { type: Boolean, default: !0 },
    closeOnEscape: { type: Boolean, default: !0 },
    fullScreen: { type: Boolean, default: !1 }
  },
  emits: ["update:visible", "show", "hide"],
  setup(t, { emit: l }) {
    const e = t, i = l, s = () => {
      i("update:visible", !1), i("hide");
    }, d = () => {
      e.dismissableMask && s();
    }, u = () => {
      e.closeOnEscape && e.closable && s();
    };
    H(
      () => e.visible,
      (n) => {
        n ? (i("show"), e.modal && (document.body.style.overflow = "hidden")) : document.body.style.overflow = "";
      }
    ), W(() => {
      document.body.style.overflow = "";
    });
    const c = y(() => [
      "og-drawer",
      `og-drawer--${e.position}`,
      { "og-drawer--fullscreen": e.fullScreen }
    ]);
    return (n, r) => (a(), q(X, { to: "body" }, [
      t.visible ? (a(), o("div", {
        key: 0,
        class: m(["og-drawer-mask", { "og-drawer-mask--modal": t.modal }]),
        onClick: d
      }, [
        g("div", {
          class: m(c.value),
          role: "complementary",
          "aria-modal": "true",
          tabindex: "-1",
          onClick: r[0] || (r[0] = D(() => {
          }, ["stop"])),
          onKeydown: j(u, ["esc"])
        }, [
          t.header || n.$slots.header || t.closable ? (a(), o("div", oa, [
            f(n.$slots, "header", {}, () => [
              g("span", sa, O(t.header), 1)
            ], !0),
            t.closable ? (a(), o("button", {
              key: 0,
              type: "button",
              class: "og-drawer__close",
              "aria-label": "Close",
              onClick: s
            }, [
              f(n.$slots, "closeicon", {}, () => [
                r[1] || (r[1] = T("✕", -1))
              ], !0)
            ])) : p("", !0)
          ])) : p("", !0),
          g("div", na, [
            f(n.$slots, "default", {}, void 0, !0)
          ]),
          n.$slots.footer ? (a(), o("div", ia, [
            f(n.$slots, "footer", {}, void 0, !0)
          ])) : p("", !0)
        ], 34)
      ], 2)) : p("", !0)
    ]));
  }
}), da = /* @__PURE__ */ k(ua, [["__scopeId", "data-v-a172d6a1"]]), ra = { class: "og-slider__track" }, ca = ["onKeydown"], ga = /* @__PURE__ */ $({
  name: "OgSlider",
  __name: "OgSlider",
  props: {
    modelValue: { default: 0 },
    min: { default: 0 },
    max: { default: 100 },
    step: { default: 1 },
    orientation: { default: "horizontal" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "change"],
  setup(t, { emit: l }) {
    const e = t, i = l, s = y(() => {
      const w = e.max - e.min;
      return w <= 0 ? 0 : (Math.min(e.max, Math.max(e.min, e.modelValue)) - e.min) / w * 100;
    }), d = y(() => e.orientation === "vertical" ? { height: `${s.value}%`, bottom: "0" } : { width: `${s.value}%`, left: "0" }), u = y(() => e.orientation === "vertical" ? { bottom: `${s.value}%`, left: "50%", transform: "translate(-50%, 50%)" } : { left: `${s.value}%`, top: "50%", transform: "translate(-50%, -50%)" }), c = (w) => {
      if (e.disabled) return;
      let C = Math.min(e.max, Math.max(e.min, w));
      i("update:modelValue", C), i("change", C);
    }, n = () => c(e.modelValue + e.step), r = () => c(e.modelValue - e.step), v = (w) => {
      if (e.disabled) return;
      const h = w.currentTarget.getBoundingClientRect();
      let B = 0;
      e.orientation === "vertical" ? B = (h.bottom - w.clientY) / h.height : B = (w.clientX - h.left) / h.width;
      const _ = e.min + B * (e.max - e.min), z = Math.round(_ / e.step) * e.step;
      c(z);
    }, b = y(() => [
      "og-slider",
      `og-slider--${e.orientation}`,
      { "og-slider--disabled": e.disabled }
    ]);
    return (w, C) => (a(), o("div", {
      class: m(b.value),
      onClick: v
    }, [
      g("div", ra, [
        g("div", {
          class: "og-slider__range",
          style: F(d.value)
        }, null, 4),
        g("div", {
          class: "og-slider__handle",
          tabindex: "0",
          style: F(u.value),
          onKeydown: [
            j(D(r, ["prevent"]), ["left"]),
            j(D(r, ["prevent"]), ["down"]),
            j(D(n, ["prevent"]), ["right"]),
            j(D(n, ["prevent"]), ["up"])
          ]
        }, null, 44, ca)
      ])
    ], 2));
  }
}), va = /* @__PURE__ */ k(ga, [["__scopeId", "data-v-55800827"]]), ba = ["disabled"], fa = ["aria-label", "disabled", "onClick"], pa = /* @__PURE__ */ $({
  name: "OgRating",
  __name: "OgRating",
  props: {
    modelValue: { default: 0 },
    stars: { default: 5 },
    cancel: { type: Boolean, default: !0 },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "change"],
  setup(t, { emit: l }) {
    const e = t, i = l, s = (u) => {
      e.disabled || e.readonly || (i("update:modelValue", u), i("change", u));
    }, d = () => {
      e.disabled || e.readonly || (i("update:modelValue", null), i("change", null));
    };
    return (u, c) => (a(), o("div", {
      class: m(["og-rating", { "og-rating--disabled": t.disabled, "og-rating--readonly": t.readonly }])
    }, [
      t.cancel ? (a(), o("button", {
        key: 0,
        type: "button",
        class: "og-rating__cancel",
        "aria-label": "Cancel rating",
        disabled: t.disabled || t.readonly,
        onClick: d
      }, [
        f(u.$slots, "cancelicon", {}, () => [
          c[0] || (c[0] = T("⊘", -1))
        ], !0)
      ], 8, ba)) : p("", !0),
      (a(!0), o(R, null, P(t.stars, (n) => (a(), o("button", {
        key: n,
        type: "button",
        class: m(["og-rating__star", { "og-rating__star--active": n <= (t.modelValue ?? 0) }]),
        "aria-label": `Rate ${n} stars`,
        disabled: t.disabled || t.readonly,
        onClick: (r) => s(n)
      }, [
        f(u.$slots, "item", {
          value: n,
          active: n <= (t.modelValue ?? 0)
        }, () => [
          c[1] || (c[1] = T(" ★ ", -1))
        ], !0)
      ], 10, fa))), 128))
    ], 2));
  }
}), ma = /* @__PURE__ */ k(pa, [["__scopeId", "data-v-74f409df"]]), _a = ["value", "disabled", "onInput", "onKeydown"], ha = /* @__PURE__ */ $({
  name: "OgInputOtp",
  __name: "OgInputOtp",
  props: {
    modelValue: { default: "" },
    length: { default: 4 },
    integerOnly: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "change"],
  setup(t, { emit: l }) {
    const e = t, i = l, s = V([]), d = y(() => (e.modelValue || "").split("")), u = (r) => {
      const v = r.join("").substring(0, e.length);
      i("update:modelValue", v), i("change", v);
    }, c = (r, v) => {
      let w = r.target.value;
      e.integerOnly && (w = w.replace(/\D/g, ""));
      const C = [...d.value];
      C[v] = w, u(C), w && v < e.length - 1 && s.value[v + 1] && s.value[v + 1].focus();
    }, n = (r, v) => {
      r.key === "Backspace" && !d.value[v] && v > 0 && s.value[v - 1] && s.value[v - 1].focus();
    };
    return (r, v) => (a(), o("div", {
      class: m(["og-inputotp", { "og-inputotp--disabled": t.disabled }])
    }, [
      (a(!0), o(R, null, P(t.length, (b) => (a(), o("input", {
        key: b,
        ref_for: !0,
        ref_key: "inputRefs",
        ref: s,
        type: "text",
        maxlength: "1",
        value: d.value[b - 1] || "",
        disabled: t.disabled,
        class: "og-inputotp__input",
        onInput: (w) => c(w, b - 1),
        onKeydown: (w) => n(w, b - 1)
      }, null, 40, _a))), 128))
    ], 2));
  }
}), ya = /* @__PURE__ */ k(ha, [["__scopeId", "data-v-16aab241"]]), $a = {
  class: "og-menu__list",
  role: "menu"
}, ka = {
  key: 0,
  class: "og-menu__separator",
  role: "separator"
}, Oa = ["href", "onClick"], wa = { class: "og-menu__label" }, Va = /* @__PURE__ */ $({
  name: "OgMenu",
  __name: "OgMenu",
  props: {
    model: { default: () => [] },
    popup: { type: Boolean, default: !1 }
  },
  setup(t, { expose: l }) {
    const e = t, i = V(!1), s = V(null), d = () => {
      i.value = !i.value;
    }, u = (c, n) => {
      n.disabled || (n.command && n.command({ originalEvent: c, item: n }), e.popup && (i.value = !1));
    };
    return l({
      toggle: d
    }), (c, n) => !t.popup || i.value ? (a(), o("div", {
      key: 0,
      ref_key: "menuRef",
      ref: s,
      class: m(["og-menu", { "og-menu--popup": t.popup }])
    }, [
      g("ul", $a, [
        (a(!0), o(R, null, P(t.model, (r, v) => (a(), o(R, { key: v }, [
          r.separator ? (a(), o("li", ka)) : (a(), o("li", {
            key: 1,
            class: m(["og-menu__item", { "og-menu__item--disabled": r.disabled }]),
            role: "menuitem"
          }, [
            g("a", {
              href: r.url || "#",
              class: "og-menu__link",
              onClick: D((b) => u(b, r), ["prevent"])
            }, [
              r.icon ? (a(), o("span", {
                key: 0,
                class: m(["og-menu__icon", r.icon])
              }, null, 2)) : p("", !0),
              g("span", wa, O(r.label), 1)
            ], 8, Oa)
          ], 2))
        ], 64))), 128))
      ])
    ], 2)) : p("", !0);
  }
}), Ca = /* @__PURE__ */ k(Va, [["__scopeId", "data-v-9f004ca7"]]), Ba = {
  class: "og-breadcrumb",
  "aria-label": "Breadcrumb"
}, Ia = { class: "og-breadcrumb__list" }, Sa = {
  key: 0,
  class: "og-breadcrumb__item"
}, Ta = ["href"], za = { key: 1 }, La = {
  key: 1,
  class: "og-breadcrumb__separator"
}, xa = { class: "og-breadcrumb__item" }, Ra = ["href", "onClick"], Pa = {
  key: 0,
  class: "og-breadcrumb__separator"
}, Aa = /* @__PURE__ */ $({
  name: "OgBreadcrumb",
  __name: "OgBreadcrumb",
  props: {
    model: { default: () => [] },
    home: {}
  },
  setup(t) {
    const l = (e, i) => {
      i.disabled || i.command && i.command({ originalEvent: e, item: i });
    };
    return (e, i) => (a(), o("nav", Ba, [
      g("ol", Ia, [
        t.home ? (a(), o("li", Sa, [
          g("a", {
            href: t.home.url || "#",
            class: "og-breadcrumb__link",
            onClick: i[0] || (i[0] = D((s) => l(s, t.home), ["prevent"]))
          }, [
            t.home.icon ? (a(), o("span", {
              key: 0,
              class: m(["og-breadcrumb__icon", t.home.icon])
            }, null, 2)) : p("", !0),
            t.home.label ? (a(), o("span", za, O(t.home.label), 1)) : p("", !0)
          ], 8, Ta)
        ])) : p("", !0),
        t.home && t.model.length > 0 ? (a(), o("li", La, [
          f(e.$slots, "separator", {}, () => [
            i[1] || (i[1] = T("/", -1))
          ], !0)
        ])) : p("", !0),
        (a(!0), o(R, null, P(t.model, (s, d) => (a(), o(R, { key: d }, [
          g("li", xa, [
            g("a", {
              href: s.url || "#",
              class: "og-breadcrumb__link",
              onClick: D((u) => l(u, s), ["prevent"])
            }, [
              s.icon ? (a(), o("span", {
                key: 0,
                class: m(["og-breadcrumb__icon", s.icon])
              }, null, 2)) : p("", !0),
              g("span", null, O(s.label), 1)
            ], 8, Ra)
          ]),
          d < t.model.length - 1 ? (a(), o("li", Pa, [
            f(e.$slots, "separator", {}, () => [
              i[2] || (i[2] = T("/", -1))
            ], !0)
          ])) : p("", !0)
        ], 64))), 128))
      ])
    ]));
  }
}), Da = /* @__PURE__ */ k(Aa, [["__scopeId", "data-v-86bc2af1"]]), Ma = ["placeholder", "disabled", "onKeydown"], Ea = {
  class: "og-autocomplete__list",
  role: "listbox"
}, Ka = ["onClick"], ja = /* @__PURE__ */ $({
  name: "OgAutoComplete",
  __name: "OgAutoComplete",
  props: {
    modelValue: { default: "" },
    suggestions: { default: () => [] },
    optionLabel: {},
    placeholder: {},
    disabled: { type: Boolean, default: !1 },
    size: {}
  },
  emits: ["update:modelValue", "complete", "change", "select"],
  setup(t, { emit: l }) {
    const e = t, i = l, s = V(typeof e.modelValue == "string" ? e.modelValue : ""), d = V(!1), u = V(-1), c = V(null), n = V(null), r = V({}), v = (S) => {
      if (typeof S == "object" && S !== null) {
        if (e.optionLabel) return S[e.optionLabel];
        if ("label" in S) return S.label;
      }
      return String(S);
    }, b = () => {
      if (!c.value) return;
      const S = c.value.getBoundingClientRect();
      r.value = {
        position: "absolute",
        top: `${S.bottom + window.scrollY + 4}px`,
        left: `${S.left + window.scrollX}px`,
        width: `${S.width}px`,
        zIndex: "var(--og-z-dropdown)"
      };
    }, w = (S) => {
      d.value = !0, u.value = -1, i("complete", { query: s.value }), i("update:modelValue", s.value), i("change", S), Q(b);
    }, C = (S) => {
      s.value = v(S), i("update:modelValue", S), i("select", S), d.value = !1;
    }, h = () => {
      d.value && u.value < e.suggestions.length - 1 && u.value++;
    }, B = () => {
      d.value && u.value > 0 && u.value--;
    }, _ = () => {
      d.value && u.value >= 0 && u.value < e.suggestions.length && C(e.suggestions[u.value]);
    }, z = () => {
      s.value.length > 0 && e.suggestions.length > 0 && (d.value = !0, Q(b));
    }, L = () => {
      setTimeout(() => {
        d.value = !1;
      }, 200);
    }, M = y(() => [
      "og-autocomplete",
      e.size ? `og-autocomplete--${e.size}` : "",
      { "og-autocomplete--disabled": e.disabled }
    ]);
    return (S, A) => (a(), o("div", {
      ref_key: "containerRef",
      ref: c,
      class: m(M.value)
    }, [
      J(g("input", {
        "onUpdate:modelValue": A[0] || (A[0] = (E) => s.value = E),
        type: "text",
        placeholder: t.placeholder,
        disabled: t.disabled,
        class: "og-autocomplete__input",
        onInput: w,
        onFocus: z,
        onBlur: L,
        onKeydown: [
          j(D(h, ["prevent"]), ["down"]),
          j(D(B, ["prevent"]), ["up"]),
          j(D(_, ["prevent"]), ["enter"])
        ]
      }, null, 40, Ma), [
        [se, s.value]
      ]),
      (a(), q(X, { to: "body" }, [
        d.value && t.suggestions.length > 0 ? (a(), o("div", {
          key: 0,
          ref_key: "overlayRef",
          ref: n,
          class: "og-autocomplete__overlay",
          style: F(r.value)
        }, [
          g("ul", Ea, [
            (a(!0), o(R, null, P(t.suggestions, (E, N) => (a(), o("li", {
              key: N,
              class: m(["og-autocomplete__item", { "og-autocomplete__item--focused": u.value === N }]),
              role: "option",
              onClick: (Y) => C(E)
            }, [
              f(S.$slots, "option", {
                item: E,
                index: N
              }, () => [
                T(O(v(E)), 1)
              ], !0)
            ], 10, Ka))), 128))
          ])
        ], 4)) : p("", !0)
      ]))
    ], 2));
  }
}), Fa = /* @__PURE__ */ k(ja, [["__scopeId", "data-v-8b9bbef0"]]), Na = ["type", "value", "placeholder", "disabled"], Ga = /* @__PURE__ */ $({
  name: "OgPassword",
  __name: "OgPassword",
  props: {
    modelValue: { default: "" },
    toggleMask: { type: Boolean, default: !0 },
    placeholder: {},
    disabled: { type: Boolean, default: !1 },
    invalid: { type: Boolean, default: !1 },
    size: {}
  },
  emits: ["update:modelValue", "change"],
  setup(t, { emit: l }) {
    const e = l, i = V(!1), s = (d) => {
      const u = d.target;
      e("update:modelValue", u.value);
    };
    return (d, u) => (a(), o("div", {
      class: m(["og-password", { "og-password--invalid": t.invalid, "og-password--disabled": t.disabled }])
    }, [
      g("input", {
        type: i.value ? "text" : "password",
        value: t.modelValue,
        placeholder: t.placeholder,
        disabled: t.disabled,
        class: "og-password__input",
        onInput: s,
        onChange: u[0] || (u[0] = (c) => d.$emit("change", c))
      }, null, 40, Na),
      t.toggleMask ? (a(), o("button", {
        key: 0,
        type: "button",
        class: "og-password__toggle",
        "aria-label": "Toggle Password Visibility",
        onClick: u[1] || (u[1] = (c) => i.value = !i.value)
      }, [
        i.value ? f(d.$slots, "hideicon", {}, () => [
          u[2] || (u[2] = T("👁", -1))
        ], !0, 0) : f(d.$slots, "showicon", {}, () => [
          u[3] || (u[3] = T("👁‍🗨", -1))
        ], !0, 1)
      ])) : p("", !0)
    ], 2));
  }
}), qa = /* @__PURE__ */ k(Ga, [["__scopeId", "data-v-49678b27"]]), Ha = ["onKeydown"], Ua = { class: "og-multiselect__label" }, Ya = { key: 0 }, Xa = {
  key: 1,
  class: "og-multiselect__placeholder"
}, Qa = { class: "og-multiselect__list" }, Ja = ["onClick"], Wa = ["checked"], Za = /* @__PURE__ */ $({
  name: "OgMultiSelect",
  __name: "OgMultiSelect",
  props: {
    modelValue: { default: () => [] },
    options: { default: () => [] },
    optionLabel: {},
    optionValue: {},
    placeholder: { default: "Select items" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "change"],
  setup(t, { emit: l }) {
    const e = t, i = l, s = V(!1), d = V(null), u = V(null), c = V({}), n = (_) => {
      if (typeof _ == "object" && _ !== null) {
        if (e.optionLabel) return _[e.optionLabel];
        if ("label" in _) return _.label;
      }
      return String(_);
    }, r = (_) => {
      if (typeof _ == "object" && _ !== null) {
        if (e.optionValue) return _[e.optionValue];
        if ("value" in _) return _.value;
      }
      return _;
    }, v = (_) => {
      const z = r(_);
      return e.modelValue.includes(z);
    }, b = y(() => e.options.filter((_) => v(_)).map((_) => n(_))), w = (_) => {
      const z = r(_);
      let L = [...e.modelValue];
      L.includes(z) ? L = L.filter((M) => M !== z) : L.push(z), i("update:modelValue", L), i("change", L);
    }, C = () => {
      if (!d.value) return;
      const _ = d.value.getBoundingClientRect();
      c.value = {
        position: "absolute",
        top: `${_.bottom + window.scrollY + 4}px`,
        left: `${_.left + window.scrollX}px`,
        width: `${_.width}px`,
        zIndex: "var(--og-z-dropdown)"
      };
    }, h = () => {
      e.disabled || (s.value = !s.value, s.value && Q(C));
    }, B = (_) => {
      d.value && !d.value.contains(_.target) && u.value && !u.value.contains(_.target) && (s.value = !1);
    };
    return Z(() => document.addEventListener("click", B)), W(() => document.removeEventListener("click", B)), (_, z) => (a(), o("div", {
      ref_key: "containerRef",
      ref: d,
      class: m(["og-multiselect", { "og-multiselect--disabled": t.disabled }])
    }, [
      g("div", {
        class: "og-multiselect__trigger",
        tabindex: "0",
        onClick: h,
        onKeydown: j(D(h, ["prevent"]), ["enter"])
      }, [
        g("div", Ua, [
          b.value.length > 0 ? (a(), o("span", Ya, O(b.value.join(", ")), 1)) : (a(), o("span", Xa, O(t.placeholder), 1))
        ]),
        z[0] || (z[0] = g("span", { class: "og-multiselect__icon" }, "▼", -1))
      ], 40, Ha),
      (a(), q(X, { to: "body" }, [
        s.value ? (a(), o("div", {
          key: 0,
          ref_key: "overlayRef",
          ref: u,
          class: "og-multiselect__overlay",
          style: F(c.value)
        }, [
          g("ul", Qa, [
            (a(!0), o(R, null, P(t.options, (L, M) => (a(), o("li", {
              key: M,
              class: m(["og-multiselect__option", { "og-multiselect__option--selected": v(L) }]),
              onClick: (S) => w(L)
            }, [
              g("input", {
                type: "checkbox",
                checked: v(L),
                class: "og-multiselect__checkbox"
              }, null, 8, Wa),
              g("span", null, O(n(L)), 1)
            ], 10, Ja))), 128))
          ])
        ], 4)) : p("", !0)
      ]))
    ], 2));
  }
}), eo = /* @__PURE__ */ k(Za, [["__scopeId", "data-v-ac367e29"]]), to = ["value", "placeholder", "disabled"], lo = /* @__PURE__ */ $({
  name: "OgDatePicker",
  __name: "OgDatePicker",
  props: {
    modelValue: { default: null },
    placeholder: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "change"],
  setup(t, { emit: l }) {
    const e = t, i = l, s = y(() => e.modelValue ? e.modelValue instanceof Date ? e.modelValue.toISOString().split("T")[0] : String(e.modelValue) : ""), d = (u) => {
      const c = u.target, n = c.value ? new Date(c.value) : null;
      i("update:modelValue", n), i("change", u);
    };
    return (u, c) => (a(), o("div", {
      class: m(["og-datepicker", { "og-datepicker--disabled": t.disabled }])
    }, [
      g("input", {
        type: "date",
        value: s.value,
        placeholder: t.placeholder,
        disabled: t.disabled,
        class: "og-datepicker__input",
        onInput: d
      }, null, 40, to)
    ], 2));
  }
}), ao = /* @__PURE__ */ k(lo, [["__scopeId", "data-v-da7deca5"]]), oo = ["value", "disabled"], so = /* @__PURE__ */ $({
  name: "OgColorPicker",
  __name: "OgColorPicker",
  props: {
    modelValue: { default: "#0f172a" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "change"],
  setup(t, { emit: l }) {
    const e = l, i = (s) => {
      const d = s.target;
      e("update:modelValue", d.value), e("change", s);
    };
    return (s, d) => (a(), o("div", {
      class: m(["og-colorpicker", { "og-colorpicker--disabled": t.disabled }])
    }, [
      g("input", {
        type: "color",
        value: t.modelValue,
        disabled: t.disabled,
        class: "og-colorpicker__input",
        onInput: i
      }, null, 40, oo)
    ], 2));
  }
}), no = /* @__PURE__ */ k(so, [["__scopeId", "data-v-8b5a7233"]]), io = {
  class: "og-listbox__list",
  role: "listbox"
}, uo = ["aria-selected", "onClick"], ro = /* @__PURE__ */ $({
  name: "OgListbox",
  __name: "OgListbox",
  props: {
    modelValue: {},
    options: { default: () => [] },
    optionLabel: {},
    optionValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "change"],
  setup(t, { emit: l }) {
    const e = t, i = l, s = (n) => {
      if (typeof n == "object" && n !== null) {
        if (e.optionLabel) return n[e.optionLabel];
        if ("label" in n) return n.label;
      }
      return String(n);
    }, d = (n) => {
      if (typeof n == "object" && n !== null) {
        if (e.optionValue) return n[e.optionValue];
        if ("value" in n) return n.value;
      }
      return n;
    }, u = (n) => d(n) === e.modelValue, c = (n) => {
      if (e.disabled) return;
      const r = d(n);
      i("update:modelValue", r), i("change", r);
    };
    return (n, r) => (a(), o("div", {
      class: m(["og-listbox", { "og-listbox--disabled": t.disabled }])
    }, [
      g("ul", io, [
        (a(!0), o(R, null, P(t.options, (v, b) => (a(), o("li", {
          key: b,
          class: m(["og-listbox__option", { "og-listbox__option--selected": u(v) }]),
          role: "option",
          "aria-selected": u(v),
          onClick: (w) => c(v)
        }, [
          f(n.$slots, "option", {
            option: v,
            index: b
          }, () => [
            T(O(s(v)), 1)
          ], !0)
        ], 10, uo))), 128))
      ])
    ], 2));
  }
}), co = /* @__PURE__ */ k(ro, [["__scopeId", "data-v-c053ef77"]]), go = ["disabled", "onClick"], vo = /* @__PURE__ */ $({
  name: "OgSelectButton",
  __name: "OgSelectButton",
  props: {
    modelValue: {},
    options: { default: () => [] },
    optionLabel: {},
    optionValue: {},
    multiple: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "change"],
  setup(t, { emit: l }) {
    const e = t, i = l, s = (n) => {
      if (typeof n == "object" && n !== null) {
        if (e.optionLabel) return n[e.optionLabel];
        if ("label" in n) return n.label;
      }
      return String(n);
    }, d = (n) => {
      if (typeof n == "object" && n !== null) {
        if (e.optionValue) return n[e.optionValue];
        if ("value" in n) return n.value;
      }
      return n;
    }, u = (n) => {
      const r = d(n);
      return e.multiple ? Array.isArray(e.modelValue) && e.modelValue.includes(r) : e.modelValue === r;
    }, c = (n) => {
      if (e.disabled) return;
      const r = d(n);
      if (e.multiple) {
        let v = Array.isArray(e.modelValue) ? [...e.modelValue] : [];
        v.includes(r) ? v = v.filter((b) => b !== r) : v.push(r), i("update:modelValue", v), i("change", v);
      } else
        i("update:modelValue", r), i("change", r);
    };
    return (n, r) => (a(), o("div", {
      class: m(["og-selectbutton", { "og-selectbutton--disabled": t.disabled }])
    }, [
      (a(!0), o(R, null, P(t.options, (v, b) => (a(), o("button", {
        key: b,
        type: "button",
        class: m(["og-selectbutton__btn", { "og-selectbutton__btn--active": u(v) }]),
        disabled: t.disabled,
        onClick: (w) => c(v)
      }, [
        f(n.$slots, "option", {
          option: v,
          index: b
        }, () => [
          T(O(s(v)), 1)
        ], !0)
      ], 10, go))), 128))
    ], 2));
  }
}), bo = /* @__PURE__ */ k(vo, [["__scopeId", "data-v-42050f87"]]), fo = ["disabled"], po = { class: "og-togglebutton__label" }, mo = /* @__PURE__ */ $({
  name: "OgToggleButton",
  __name: "OgToggleButton",
  props: {
    modelValue: { type: Boolean, default: !1 },
    onLabel: { default: "Yes" },
    offLabel: { default: "No" },
    onIcon: {},
    offIcon: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "change"],
  setup(t, { emit: l }) {
    const e = t, i = l, s = y(() => e.modelValue ? e.onLabel : e.offLabel), d = y(() => e.modelValue ? e.onIcon : e.offIcon), u = (c) => {
      e.disabled || (i("update:modelValue", !e.modelValue), i("change", c));
    };
    return (c, n) => (a(), o("button", {
      type: "button",
      class: m(["og-togglebutton", { "og-togglebutton--checked": t.modelValue, "og-togglebutton--disabled": t.disabled }]),
      disabled: t.disabled,
      onClick: u
    }, [
      d.value ? (a(), o("span", {
        key: 0,
        class: m(["og-togglebutton__icon", d.value])
      }, null, 2)) : p("", !0),
      g("span", po, O(s.value), 1)
    ], 10, fo));
  }
}), _o = /* @__PURE__ */ k(mo, [["__scopeId", "data-v-bf6a463d"]]), ho = { class: "og-floatlabel" }, yo = /* @__PURE__ */ $({
  name: "OgFloatLabel",
  __name: "OgFloatLabel",
  setup(t) {
    return (l, e) => (a(), o("div", ho, [
      f(l.$slots, "default", {}, void 0, !0)
    ]));
  }
}), $o = /* @__PURE__ */ k(yo, [["__scopeId", "data-v-2c438c2c"]]), ko = { class: "og-inputgroup" }, Oo = /* @__PURE__ */ $({
  name: "OgInputGroup",
  __name: "OgInputGroup",
  setup(t) {
    return (l, e) => (a(), o("div", ko, [
      f(l.$slots, "default", {}, void 0, !0)
    ]));
  }
}), wo = /* @__PURE__ */ k(Oo, [["__scopeId", "data-v-8c486269"]]), Vo = { class: "og-inputgroupaddon" }, Co = /* @__PURE__ */ $({
  name: "OgInputGroupAddon",
  __name: "OgInputGroupAddon",
  setup(t) {
    return (l, e) => (a(), o("div", Vo, [
      f(l.$slots, "default", {}, void 0, !0)
    ]));
  }
}), Bo = /* @__PURE__ */ k(Co, [["__scopeId", "data-v-bcac245e"]]), Io = { class: "og-panel" }, So = { class: "og-panel__title" }, To = {
  key: 0,
  type: "button",
  class: "og-panel__toggle",
  "aria-label": "Toggle Panel"
}, zo = { class: "og-panel__content" }, Lo = {
  key: 1,
  class: "og-panel__footer"
}, xo = /* @__PURE__ */ $({
  name: "OgPanel",
  __name: "OgPanel",
  props: {
    header: {},
    toggleable: { type: Boolean, default: !1 },
    collapsed: { type: Boolean, default: !1 }
  },
  emits: ["update:collapsed", "toggle"],
  setup(t, { emit: l }) {
    const e = t, i = l, s = V(e.collapsed);
    H(
      () => e.collapsed,
      (u) => {
        s.value = u;
      }
    );
    const d = (u) => {
      e.toggleable && (s.value = !s.value, i("update:collapsed", s.value), i("toggle", { originalEvent: new CustomEvent("toggle"), collapsed: s.value }));
    };
    return (u, c) => (a(), o("div", Io, [
      t.header || u.$slots.header || t.toggleable ? (a(), o("div", {
        key: 0,
        class: "og-panel__header",
        onClick: c[0] || (c[0] = (n) => t.toggleable && d())
      }, [
        f(u.$slots, "header", {}, () => [
          g("span", So, O(t.header), 1)
        ], !0),
        t.toggleable ? (a(), o("button", To, O(s.value ? "+" : "−"), 1)) : p("", !0)
      ])) : p("", !0),
      J(g("div", zo, [
        f(u.$slots, "default", {}, void 0, !0)
      ], 512), [
        [te, !s.value]
      ]),
      u.$slots.footer ? (a(), o("div", Lo, [
        f(u.$slots, "footer", {}, void 0, !0)
      ])) : p("", !0)
    ]));
  }
}), Ro = /* @__PURE__ */ k(xo, [["__scopeId", "data-v-f1e8c9a5"]]), Po = {
  class: "og-toolbar",
  role: "toolbar"
}, Ao = {
  key: 0,
  class: "og-toolbar__start"
}, Do = {
  key: 1,
  class: "og-toolbar__center"
}, Mo = {
  key: 2,
  class: "og-toolbar__end"
}, Eo = /* @__PURE__ */ $({
  name: "OgToolbar",
  __name: "OgToolbar",
  setup(t) {
    return (l, e) => (a(), o("div", Po, [
      l.$slots.start ? (a(), o("div", Ao, [
        f(l.$slots, "start", {}, void 0, !0)
      ])) : p("", !0),
      l.$slots.center ? (a(), o("div", Do, [
        f(l.$slots, "center", {}, void 0, !0)
      ])) : p("", !0),
      l.$slots.end ? (a(), o("div", Mo, [
        f(l.$slots, "end", {}, void 0, !0)
      ])) : p("", !0)
    ]));
  }
}), Ko = /* @__PURE__ */ k(Eo, [["__scopeId", "data-v-dbb68d11"]]), jo = /* @__PURE__ */ $({
  name: "OgSplitter",
  __name: "OgSplitter",
  props: {
    layout: { default: "horizontal" }
  },
  setup(t) {
    return (l, e) => (a(), o("div", {
      class: m(["og-splitter", `og-splitter--${t.layout}`])
    }, [
      f(l.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), Fo = /* @__PURE__ */ k(jo, [["__scopeId", "data-v-de819503"]]), No = { class: "og-splitter-panel" }, Go = /* @__PURE__ */ $({
  name: "OgSplitterPanel",
  __name: "OgSplitterPanel",
  setup(t) {
    return (l, e) => (a(), o("div", No, [
      f(l.$slots, "default", {}, void 0, !0)
    ]));
  }
}), qo = /* @__PURE__ */ k(Go, [["__scopeId", "data-v-802e3f15"]]), Ho = { class: "og-tree" }, Uo = {
  class: "og-tree__list",
  role: "tree"
}, Yo = ["onClick"], Xo = {
  key: 0,
  class: "og-tree__toggler"
}, Qo = {
  key: 1,
  class: "og-tree__toggler-placeholder"
}, Jo = { class: "og-tree__label" }, Wo = {
  key: 0,
  class: "og-tree__sublist"
}, Zo = { class: "og-tree__content" }, es = { class: "og-tree__label" }, ts = /* @__PURE__ */ $({
  name: "OgTree",
  __name: "OgTree",
  props: {
    value: { default: () => [] }
  },
  setup(t) {
    const l = V({}), e = (s) => {
      const d = s.key || s.label || "";
      return !!l.value[d];
    }, i = (s) => {
      const d = s.key || s.label || "";
      l.value[d] = !l.value[d];
    };
    return (s, d) => (a(), o("div", Ho, [
      g("ul", Uo, [
        (a(!0), o(R, null, P(t.value, (u) => (a(), o("li", {
          key: u.key || u.label,
          class: "og-tree__node",
          role: "treeitem"
        }, [
          g("div", {
            class: "og-tree__content",
            onClick: (c) => i(u)
          }, [
            u.children && u.children.length > 0 ? (a(), o("span", Xo, O(e(u) ? "▼" : "►"), 1)) : (a(), o("span", Qo)),
            u.icon ? (a(), o("span", {
              key: 2,
              class: m(["og-tree__icon", u.icon])
            }, null, 2)) : p("", !0),
            g("span", Jo, O(u.label), 1)
          ], 8, Yo),
          u.children && e(u) ? (a(), o("ul", Wo, [
            (a(!0), o(R, null, P(u.children, (c) => (a(), o("li", {
              key: c.key || c.label,
              class: "og-tree__node"
            }, [
              g("div", Zo, [
                c.icon ? (a(), o("span", {
                  key: 0,
                  class: m(["og-tree__icon", c.icon])
                }, null, 2)) : p("", !0),
                g("span", es, O(c.label), 1)
              ])
            ]))), 128))
          ])) : p("", !0)
        ]))), 128))
      ])
    ]));
  }
}), ls = /* @__PURE__ */ k(ts, [["__scopeId", "data-v-b46fe160"]]), as = { class: "og-stepper" }, os = { class: "og-stepper__header" }, ss = ["onClick"], ns = { class: "og-stepper__number" }, is = { class: "og-stepper__title" }, us = { class: "og-stepper__content" }, ds = /* @__PURE__ */ $({
  name: "OgStepper",
  __name: "OgStepper",
  props: {
    value: { default: 1 },
    steps: { default: () => ["Step 1", "Step 2", "Step 3"] }
  },
  emits: ["update:value"],
  setup(t, { emit: l }) {
    const e = t, i = l, s = V(e.value);
    H(
      () => e.value,
      (u) => {
        s.value = u;
      }
    );
    const d = (u) => {
      s.value = u, i("update:value", u);
    };
    return ee("ogStepper", { activeStep: s, setStep: d }), (u, c) => (a(), o("div", as, [
      g("div", os, [
        (a(!0), o(R, null, P(t.steps, (n, r) => (a(), o("button", {
          key: r,
          type: "button",
          class: m(["og-stepper__step-btn", { "og-stepper__step-btn--active": s.value === r + 1 }]),
          onClick: (v) => d(r + 1)
        }, [
          g("span", ns, O(r + 1), 1),
          g("span", is, O(n), 1)
        ], 10, ss))), 128))
      ]),
      g("div", us, [
        f(u.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), rs = /* @__PURE__ */ k(ds, [["__scopeId", "data-v-f1256a42"]]), cs = {
  mounted(t, l) {
    t.setAttribute("title", l.value || "");
  },
  updated(t, l) {
    t.setAttribute("title", l.value || "");
  }
}, gs = {
  mounted(t) {
    t.style.position = "relative", t.style.overflow = "hidden";
  }
};
function ps(t = {}) {
  const l = V(t.visible ?? !1), e = () => {
    l.value = !0;
  }, i = () => {
    l.value = !1, t.onClose && t.onClose();
  };
  return {
    isVisible: l,
    open: e,
    close: i,
    toggle: () => {
      l.value ? i() : e();
    }
  };
}
const vs = {
  OgButton: me,
  OgInputText: ye,
  OgTextarea: Oe,
  OgCheckbox: Ie,
  OgRadioButton: xe,
  OgToggleSwitch: Me,
  OgInputNumber: Xe,
  OgSelect: ct,
  OgCard: ht,
  OgDialog: Vt,
  OgToast: Dt,
  OgDataTable: ol,
  OgColumn: sl,
  OgAvatar: dl,
  OgBadge: cl,
  OgProgressBar: pl,
  OgSkeleton: _l,
  OgDivider: $l,
  OgAccordion: wl,
  OgAccordionTab: Tl,
  OgTabs: Dl,
  OgTabPanel: Kl,
  OgTag: Nl,
  OgChip: Yl,
  OgMessage: aa,
  OgDrawer: da,
  OgSlider: va,
  OgRating: ma,
  OgInputOtp: ya,
  OgMenu: Ca,
  OgBreadcrumb: Da,
  OgAutoComplete: Fa,
  OgPassword: qa,
  OgMultiSelect: eo,
  OgDatePicker: ao,
  OgColorPicker: no,
  OgListbox: co,
  OgSelectButton: bo,
  OgToggleButton: _o,
  OgFloatLabel: $o,
  OgInputGroup: wo,
  OgInputGroupAddon: Bo,
  OgPanel: Ro,
  OgToolbar: Ko,
  OgSplitter: Fo,
  OgSplitterPanel: qo,
  OgTree: ls,
  OgStepper: rs
}, ms = {
  install(t) {
    Object.entries(vs).forEach(([l, e]) => {
      t.component(l, e);
    }), t.directive("og-tooltip", cs), t.directive("og-ripple", gs);
  }
};
export {
  wl as OgAccordion,
  Tl as OgAccordionTab,
  Fa as OgAutoComplete,
  dl as OgAvatar,
  cl as OgBadge,
  Da as OgBreadcrumb,
  me as OgButton,
  ht as OgCard,
  Ie as OgCheckbox,
  Yl as OgChip,
  no as OgColorPicker,
  sl as OgColumn,
  ol as OgDataTable,
  ao as OgDatePicker,
  Vt as OgDialog,
  $l as OgDivider,
  da as OgDrawer,
  $o as OgFloatLabel,
  wo as OgInputGroup,
  Bo as OgInputGroupAddon,
  Xe as OgInputNumber,
  ya as OgInputOtp,
  ye as OgInputText,
  co as OgListbox,
  Ca as OgMenu,
  aa as OgMessage,
  eo as OgMultiSelect,
  Ro as OgPanel,
  qa as OgPassword,
  pl as OgProgressBar,
  xe as OgRadioButton,
  ma as OgRating,
  ct as OgSelect,
  bo as OgSelectButton,
  _l as OgSkeleton,
  va as OgSlider,
  Fo as OgSplitter,
  qo as OgSplitterPanel,
  rs as OgStepper,
  Kl as OgTabPanel,
  Dl as OgTabs,
  Nl as OgTag,
  Oe as OgTextarea,
  Dt as OgToast,
  _o as OgToggleButton,
  Me as OgToggleSwitch,
  Ko as OgToolbar,
  ls as OgTree,
  ms as OptimusGUI,
  ms as default,
  Mt as useDataTable,
  ps as useDialog,
  Qe as useSelect,
  Ct as useToast,
  gs as vOgRipple,
  cs as vOgTooltip
};
