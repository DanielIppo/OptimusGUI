import { defineComponent as B, useAttrs as we, computed as y, openBlock as o, createBlock as U, resolveDynamicComponent as be, mergeProps as Oe, withCtx as pe, renderSlot as _, createElementBlock as s, normalizeClass as $, createElementVNode as v, createCommentVNode as m, toDisplayString as V, ref as D, watch as X, nextTick as se, onMounted as ce, createTextVNode as z, withKeys as Y, withModifiers as A, toValue as ee, onUnmounted as te, Teleport as le, unref as P, normalizeStyle as q, withDirectives as ie, isRef as Ce, vModelText as me, Fragment as R, renderList as N, createVNode as _e, TransitionGroup as Ve, useSlots as Be, provide as ve, inject as he, vShow as fe, reactive as Ie, createStaticVNode as De, resolveComponent as xe } from "vue";
const Te = {
  key: 1,
  class: "og-button__icon og-button__spinner og-button__spinner-svg",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Le = {
  key: 2,
  class: "og-button__label"
}, Se = /* @__PURE__ */ B({
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
    const a = t, e = we(), n = y(() => typeof a.as == "string" && a.as.toLowerCase() === "button"), l = y(() => a.disabled || a.loading), u = y(() => a.label ? a.badge ? `${a.label} ${a.badge}` : a.label : e["aria-label"] || void 0), r = y(() => (!!a.icon || !!a.loading) && !a.label && !a.badge), g = y(() => {
      const i = a.outlined || a.variant === "outlined", d = a.text || a.variant === "text", f = a.link || a.variant === "link";
      return [
        "og-button",
        a.severity ? `og-button--${a.severity}` : "",
        a.size ? `og-button--${a.size}` : "",
        `og-button--icon-${a.iconPos}`,
        {
          "og-button--outlined": i,
          "og-button--text": d,
          "og-button--link": f,
          "og-button--raised": a.raised,
          "og-button--rounded": a.rounded,
          "og-button--fluid": a.fluid,
          "og-button--icon-only": r.value,
          "og-button--loading": a.loading,
          "og-button--disabled": l.value,
          "og-button--vertical": (a.iconPos === "top" || a.iconPos === "bottom") && !!a.label
        }
      ];
    });
    return (i, d) => t.asChild ? _(i.$slots, "default", {
      class: $(g.value),
      disabled: l.value
    }, void 0, !0, 1) : (o(), U(be(t.as), Oe({
      key: 0,
      type: n.value ? t.type : void 0,
      disabled: l.value,
      "aria-disabled": l.value,
      "aria-label": u.value,
      class: g.value
    }, i.$attrs), {
      default: pe(() => [
        _(i.$slots, "default", {}, () => [
          t.loading ? _(i.$slots, "loadingicon", { class: "og-button__icon og-button__spinner" }, () => [
            t.loadingIcon ? (o(), s("span", {
              key: 0,
              class: $(["og-button__icon", "og-button__spinner", t.loadingIcon])
            }, null, 2)) : (o(), s("svg", Te, [...d[0] || (d[0] = [
              v("circle", {
                class: "og-spinner-track",
                cx: "12",
                cy: "12",
                r: "10",
                stroke: "currentColor",
                "stroke-width": "4"
              }, null, -1),
              v("path", {
                class: "og-spinner-head",
                fill: "currentColor",
                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              }, null, -1)
            ])]))
          ], !0, 0) : t.icon || i.$slots.icon ? _(i.$slots, "icon", { class: "og-button__icon" }, () => [
            t.icon ? (o(), s("span", {
              key: 0,
              class: $(["og-button__icon", t.icon, t.iconClass])
            }, null, 2)) : m("", !0)
          ], !0, 1) : m("", !0),
          t.label ? (o(), s("span", Le, V(t.label), 1)) : m("", !0),
          t.badge ? (o(), s("span", {
            key: 3,
            class: $(["og-button__badge", t.badgeSeverity ? `og-button__badge--${t.badgeSeverity}` : "", t.badgeClass])
          }, V(t.badge), 3)) : m("", !0)
        ], !0)
      ]),
      _: 3
    }, 16, ["type", "disabled", "aria-disabled", "aria-label", "class"]));
  }
}), I = (t, a) => {
  const e = t.__vccOpts || t;
  for (const [n, l] of a)
    e[n] = l;
  return e;
}, ze = /* @__PURE__ */ I(Se, [["__scopeId", "data-v-256088d1"]]), Me = ["type", "value", "disabled", "placeholder"], Re = /* @__PURE__ */ B({
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
  setup(t, { emit: a }) {
    const e = t, n = a, l = (g) => {
      const i = g.target;
      n("update:modelValue", i.value);
    }, u = (g) => {
      n("change", g);
    }, r = y(() => [
      "og-inputtext",
      e.size ? `og-inputtext--${e.size}` : "",
      e.variant ? `og-inputtext--${e.variant}` : "",
      {
        "og-inputtext--invalid": e.invalid,
        "og-inputtext--fluid": e.fluid,
        "og-inputtext--disabled": e.disabled
      }
    ]);
    return (g, i) => (o(), s("input", {
      type: t.type,
      value: t.modelValue,
      disabled: t.disabled,
      placeholder: t.placeholder,
      class: $(r.value),
      onInput: l,
      onChange: u,
      onFocus: i[0] || (i[0] = (d) => g.$emit("focus", d)),
      onBlur: i[1] || (i[1] = (d) => g.$emit("blur", d))
    }, null, 42, Me));
  }
}), Ee = /* @__PURE__ */ I(Re, [["__scopeId", "data-v-668f2852"]]), Pe = ["value", "rows", "cols", "disabled", "placeholder"], Ae = /* @__PURE__ */ B({
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
  setup(t, { emit: a }) {
    const e = t, n = a, l = D(null), u = () => {
      e.autoResize && l.value && (l.value.style.height = "auto", l.value.style.height = `${l.value.scrollHeight}px`);
    }, r = (i) => {
      const d = i.target;
      n("update:modelValue", d.value), u();
    };
    X(
      () => e.modelValue,
      () => {
        se(u);
      }
    ), ce(() => {
      u();
    });
    const g = y(() => [
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
    return (i, d) => (o(), s("textarea", {
      ref_key: "textareaRef",
      ref: l,
      value: t.modelValue,
      rows: t.rows,
      cols: t.cols,
      disabled: t.disabled,
      placeholder: t.placeholder,
      class: $(g.value),
      onInput: r,
      onChange: d[0] || (d[0] = (f) => i.$emit("change", f)),
      onFocus: d[1] || (d[1] = (f) => i.$emit("focus", f)),
      onBlur: d[2] || (d[2] = (f) => i.$emit("blur", f))
    }, null, 42, Pe));
  }
}), Ne = /* @__PURE__ */ I(Ae, [["__scopeId", "data-v-5ac57b30"]]), Ke = ["checked", "disabled", "readonly", "name", "value"], Fe = { class: "og-checkbox__box" }, je = {
  key: 0,
  class: "og-checkbox__icon",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, Ye = /* @__PURE__ */ B({
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
  setup(t, { emit: a }) {
    const e = t, n = a, l = y(() => e.binary ? !!e.modelValue : Array.isArray(e.modelValue) ? e.modelValue.includes(e.value) : e.modelValue === e.value), u = (i) => {
      e.disabled || e.readonly || n("click", i);
    }, r = (i) => {
      if (e.disabled || e.readonly) return;
      let d;
      if (e.binary)
        d = !l.value;
      else if (Array.isArray(e.modelValue)) {
        const f = [...e.modelValue];
        if (l.value) {
          const h = f.indexOf(e.value);
          h !== -1 && f.splice(h, 1);
        } else
          f.push(e.value);
        d = f;
      } else
        d = l.value ? null : e.value;
      n("update:modelValue", d), n("change", i);
    }, g = y(() => [
      "og-checkbox",
      e.size ? `og-checkbox--${e.size}` : "",
      {
        "og-checkbox--checked": l.value,
        "og-checkbox--disabled": e.disabled,
        "og-checkbox--invalid": e.invalid
      }
    ]);
    return (i, d) => (o(), s("div", {
      class: $(g.value),
      onClick: u
    }, [
      v("input", {
        type: "checkbox",
        checked: l.value,
        disabled: t.disabled,
        readonly: t.readonly,
        name: t.name,
        value: t.value,
        class: "og-checkbox__input",
        onFocus: d[0] || (d[0] = (f) => i.$emit("focus", f)),
        onBlur: d[1] || (d[1] = (f) => i.$emit("blur", f)),
        onChange: r
      }, null, 40, Ke),
      v("div", Fe, [
        _(i.$slots, "icon", { checked: l.value }, () => [
          l.value ? (o(), s("svg", je, [...d[2] || (d[2] = [
            v("polyline", { points: "20 6 9 17 4 12" }, null, -1)
          ])])) : m("", !0)
        ], !0)
      ])
    ], 2));
  }
}), ye = /* @__PURE__ */ I(Ye, [["__scopeId", "data-v-898e5709"]]), Ge = ["checked", "disabled", "readonly", "name", "value"], Xe = { class: "og-radiobutton__box" }, He = {
  key: 0,
  class: "og-radiobutton__icon"
}, qe = /* @__PURE__ */ B({
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
  setup(t, { emit: a }) {
    const e = t, n = a, l = y(() => e.modelValue === e.value), u = (g) => {
      e.disabled || e.readonly || (n("update:modelValue", e.value), n("change", g));
    }, r = y(() => [
      "og-radiobutton",
      e.size ? `og-radiobutton--${e.size}` : "",
      {
        "og-radiobutton--checked": l.value,
        "og-radiobutton--disabled": e.disabled,
        "og-radiobutton--invalid": e.invalid
      }
    ]);
    return (g, i) => (o(), s("div", {
      class: $(r.value)
    }, [
      v("input", {
        type: "radio",
        checked: l.value,
        disabled: t.disabled,
        readonly: t.readonly,
        name: t.name,
        value: t.value,
        class: "og-radiobutton__input",
        onFocus: i[0] || (i[0] = (d) => g.$emit("focus", d)),
        onBlur: i[1] || (i[1] = (d) => g.$emit("blur", d)),
        onChange: u
      }, null, 40, Ge),
      v("div", Xe, [
        l.value ? (o(), s("div", He)) : m("", !0)
      ])
    ], 2));
  }
}), Ue = /* @__PURE__ */ I(qe, [["__scopeId", "data-v-640c2086"]]), Je = ["aria-checked", "checked", "disabled", "readonly"], Qe = { class: "og-toggleswitch__slider" }, We = { class: "og-toggleswitch__handle" }, Ze = /* @__PURE__ */ B({
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
  setup(t, { emit: a }) {
    const e = t, n = a, l = (g) => {
      e.disabled || e.readonly || g.stopPropagation();
    }, u = (g) => {
      e.disabled || e.readonly || (n("update:modelValue", !e.modelValue), n("change", g));
    }, r = y(() => [
      "og-toggleswitch",
      e.size ? `og-toggleswitch--${e.size}` : "",
      {
        "og-toggleswitch--checked": e.modelValue,
        "og-toggleswitch--disabled": e.disabled,
        "og-toggleswitch--invalid": e.invalid
      }
    ]);
    return (g, i) => (o(), s("div", {
      class: $(r.value),
      onClick: l
    }, [
      v("input", {
        type: "checkbox",
        role: "switch",
        "aria-checked": t.modelValue,
        checked: t.modelValue,
        disabled: t.disabled,
        readonly: t.readonly,
        class: "og-toggleswitch__input",
        onFocus: i[0] || (i[0] = (d) => g.$emit("focus", d)),
        onBlur: i[1] || (i[1] = (d) => g.$emit("blur", d)),
        onChange: u
      }, null, 40, Je),
      v("div", Qe, [
        v("div", We, [
          _(g.$slots, "handle", { checked: t.modelValue }, void 0, !0)
        ])
      ])
    ], 2));
  }
}), et = /* @__PURE__ */ I(Ze, [["__scopeId", "data-v-a9f76058"]]), tt = ["disabled"], at = { class: "og-inputnumber__input-wrapper" }, ot = {
  key: 0,
  class: "og-inputnumber__prefix"
}, lt = ["value", "disabled", "aria-valuenow", "aria-valuemin", "aria-valuemax", "placeholder", "onKeydown"], st = {
  key: 1,
  class: "og-inputnumber__suffix"
}, nt = {
  key: 1,
  class: "og-inputnumber__stacked-buttons"
}, it = ["disabled"], dt = ["disabled"], ut = ["disabled"], rt = /* @__PURE__ */ B({
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
  setup(t, { emit: a }) {
    const e = t, n = a, l = D(null), u = y(() => e.modelValue === null || e.modelValue === void 0 || isNaN(e.modelValue) ? "" : String(e.modelValue)), r = y(() => e.min !== void 0 && e.modelValue !== null && e.modelValue <= e.min), g = y(() => e.max !== void 0 && e.modelValue !== null && e.modelValue >= e.max), i = (c) => {
      if (c === null) return null;
      let k = c;
      return e.min !== void 0 && k < e.min && (k = e.min), e.max !== void 0 && k > e.max && (k = e.max), k;
    }, d = (c) => {
      const k = i(c);
      n("update:modelValue", k), l.value && (l.value.value = k === null ? "" : String(k));
    }, f = () => {
      if (e.disabled) return;
      const c = e.modelValue ?? e.min ?? 0;
      d(c + e.step);
    }, h = () => {
      if (e.disabled) return;
      const c = e.modelValue ?? e.max ?? 0;
      d(c - e.step);
    }, b = (c) => {
      const k = c.target, O = k.value.trim();
      if (O === "" || O === "-") {
        n("update:modelValue", null);
        return;
      }
      const S = Number(O);
      isNaN(S) || (e.max !== void 0 && S > e.max ? (k.value = String(e.max), d(e.max)) : d(S));
    }, p = (c) => {
      const k = c.target, O = k.value.trim();
      if (O !== "") {
        const S = Number(O);
        if (!isNaN(S)) {
          const x = i(S);
          k.value = x === null ? "" : String(x), n("update:modelValue", x);
        }
      }
      n("blur", c);
    }, w = (c) => {
      n("change", c);
    };
    X(
      () => e.modelValue,
      (c) => {
        l.value && document.activeElement !== l.value && (l.value.value = c == null || isNaN(c) ? "" : String(c));
      }
    );
    const T = y(() => [
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
    return (c, k) => (o(), s("div", {
      class: $(T.value)
    }, [
      t.showButtons && t.buttonLayout === "horizontal" ? (o(), s("button", {
        key: 0,
        type: "button",
        tabindex: "-1",
        disabled: t.disabled || r.value,
        class: "og-inputnumber__button og-inputnumber__button--decrement",
        onClick: h
      }, [
        _(c.$slots, "decrementbuttonicon", {}, () => [
          k[1] || (k[1] = z("-", -1))
        ], !0)
      ], 8, tt)) : m("", !0),
      v("div", at, [
        t.prefix ? (o(), s("span", ot, V(t.prefix), 1)) : m("", !0),
        v("input", {
          ref_key: "inputRef",
          ref: l,
          type: "text",
          role: "spinbutton",
          value: u.value,
          disabled: t.disabled,
          "aria-valuenow": t.modelValue ?? void 0,
          "aria-valuemin": t.min,
          "aria-valuemax": t.max,
          placeholder: t.placeholder,
          class: "og-inputnumber__input",
          onInput: b,
          onChange: w,
          onFocus: k[0] || (k[0] = (O) => c.$emit("focus", O)),
          onBlur: p,
          onKeydown: [
            Y(A(f, ["prevent"]), ["up"]),
            Y(A(h, ["prevent"]), ["down"])
          ]
        }, null, 40, lt),
        t.suffix ? (o(), s("span", st, V(t.suffix), 1)) : m("", !0)
      ]),
      t.showButtons && t.buttonLayout === "stacked" ? (o(), s("div", nt, [
        v("button", {
          type: "button",
          tabindex: "-1",
          disabled: t.disabled || g.value,
          class: "og-inputnumber__button og-inputnumber__button--stacked-up",
          onClick: f
        }, " ▲ ", 8, it),
        v("button", {
          type: "button",
          tabindex: "-1",
          disabled: t.disabled || r.value,
          class: "og-inputnumber__button og-inputnumber__button--stacked-down",
          onClick: h
        }, " ▼ ", 8, dt)
      ])) : m("", !0),
      t.showButtons && t.buttonLayout === "horizontal" ? (o(), s("button", {
        key: 2,
        type: "button",
        tabindex: "-1",
        disabled: t.disabled || g.value,
        class: "og-inputnumber__button og-inputnumber__button--increment",
        onClick: f
      }, [
        _(c.$slots, "incrementbuttonicon", {}, () => [
          k[2] || (k[2] = z("+", -1))
        ], !0)
      ], 8, ut)) : m("", !0)
    ], 2));
  }
}), ct = /* @__PURE__ */ I(rt, [["__scopeId", "data-v-6d1cf868"]]);
function gt(t) {
  const a = D(!1), e = D(""), n = D(-1), l = (b) => {
    if (typeof b == "object" && b !== null) {
      const p = ee(t.optionLabel);
      if (p && p in b) return b[p];
      if ("label" in b) return b.label;
    }
    return String(b ?? "");
  }, u = (b) => {
    if (typeof b == "object" && b !== null) {
      const p = ee(t.optionValue);
      if (p && p in b) return b[p];
      if ("value" in b) return b.value;
    }
    return b;
  }, r = (b) => {
    if (typeof b == "object" && b !== null) {
      const p = ee(t.optionDisabled);
      if (p && p in b) return !!b[p];
      if ("disabled" in b) return !!b.disabled;
    }
    return !1;
  }, g = y(() => ee(t.options) || []), i = y(() => {
    const b = g.value;
    if (!ee(t.filter) || !e.value.trim())
      return b;
    const w = e.value.toLowerCase();
    return b.filter((T) => l(T).toLowerCase().includes(w));
  });
  return {
    isOpen: a,
    filterQuery: e,
    focusedIndex: n,
    rawOptions: g,
    filteredOptions: i,
    getOptionLabel: l,
    getOptionValue: u,
    isOptionDisabled: r,
    toggle: () => {
      a.value = !a.value, a.value || (n.value = -1, e.value = "");
    },
    open: () => {
      a.value = !0;
    },
    close: () => {
      a.value = !1, n.value = -1, e.value = "";
    }
  };
}
const vt = { class: "og-select__label" }, ft = { key: 0 }, bt = {
  key: 1,
  class: "og-select__placeholder"
}, pt = { class: "og-select__dropdown-icon" }, mt = {
  key: 0,
  class: "og-select__chevron",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, _t = {
  key: 1,
  class: "og-select__spinner",
  viewBox: "0 0 24 24",
  fill: "none"
}, ht = {
  key: 0,
  class: "og-select__header"
}, yt = {
  key: 1,
  class: "og-select__filter-container"
}, $t = ["placeholder"], kt = {
  class: "og-select__list",
  role: "listbox"
}, wt = ["aria-selected", "onClick"], Ot = {
  key: 0,
  class: "og-select__empty"
}, Ct = {
  key: 2,
  class: "og-select__footer"
}, Vt = /* @__PURE__ */ B({
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
  setup(t, { emit: a }) {
    const e = t, n = a, l = D(null), u = D(null), r = D(null), g = D({}), {
      isOpen: i,
      filterQuery: d,
      filteredOptions: f,
      getOptionLabel: h,
      getOptionValue: b,
      isOptionDisabled: p,
      toggle: w,
      close: T
    } = gt({
      options: () => e.options,
      optionLabel: () => e.optionLabel,
      optionValue: () => e.optionValue,
      optionDisabled: () => e.optionDisabled,
      filter: () => e.filter
    }), c = y(() => e.modelValue === null || e.modelValue === void 0 ? null : (e.options || []).find((F) => b(F) === e.modelValue) ?? e.modelValue), k = y(() => c.value !== null && c.value !== void 0 ? h(c.value) : ""), O = (L) => b(L) === e.modelValue, S = (L) => {
      if (p(L)) return;
      const F = b(L);
      n("update:modelValue", F), n("change", F), T();
    }, x = () => {
      n("update:modelValue", null), n("change", null);
    }, E = () => {
      if (!l.value || !e.overlayTeleport) return;
      const L = l.value.getBoundingClientRect();
      g.value = {
        position: "absolute",
        top: `${L.bottom + window.scrollY + 4}px`,
        left: `${L.left + window.scrollX}px`,
        width: `${L.width}px`,
        zIndex: "var(--og-z-dropdown)"
      };
    }, j = () => {
      e.disabled || e.loading || (w(), i.value && se(() => {
        E(), e.filter && r.value && r.value.focus();
      }));
    }, J = (L) => {
      L.key === "Enter" || L.key === " " ? (L.preventDefault(), j()) : L.key === "Escape" && T();
    }, Q = (L) => {
      l.value && !l.value.contains(L.target) && u.value && !u.value.contains(L.target) && T();
    };
    X(i, (L) => {
      L ? (window.addEventListener("resize", E), window.addEventListener("scroll", E, !0)) : (window.removeEventListener("resize", E), window.removeEventListener("scroll", E, !0));
    }), ce(() => {
      document.addEventListener("click", Q);
    }), te(() => {
      document.removeEventListener("click", Q), window.removeEventListener("resize", E), window.removeEventListener("scroll", E, !0);
    });
    const W = y(() => [
      "og-select",
      e.size ? `og-select--${e.size}` : "",
      {
        "og-select--open": i.value,
        "og-select--invalid": e.invalid,
        "og-select--fluid": e.fluid,
        "og-select--disabled": e.disabled
      }
    ]);
    return (L, F) => (o(), s("div", {
      ref_key: "containerRef",
      ref: l,
      class: $(W.value)
    }, [
      v("div", {
        class: "og-select__trigger",
        tabindex: "0",
        onClick: j,
        onKeydown: J
      }, [
        v("div", vt, [
          _(L.$slots, "value", {
            value: c.value,
            placeholder: t.placeholder
          }, () => [
            c.value !== null && c.value !== void 0 ? (o(), s("span", ft, V(k.value), 1)) : (o(), s("span", bt, V(t.placeholder), 1))
          ], !0)
        ]),
        t.showClear && c.value !== null && c.value !== void 0 && !t.disabled ? (o(), s("span", {
          key: 0,
          class: "og-select__clear",
          onClick: A(x, ["stop"])
        }, [
          _(L.$slots, "clearicon", {}, () => [
            F[1] || (F[1] = z("✕", -1))
          ], !0)
        ])) : m("", !0),
        v("span", pt, [
          _(L.$slots, "dropdownicon", {}, () => [
            t.loading ? (o(), s("svg", _t, [...F[3] || (F[3] = [
              v("circle", {
                cx: "12",
                cy: "12",
                r: "10",
                stroke: "currentColor",
                "stroke-width": "4",
                style: { opacity: "0.25" }
              }, null, -1),
              v("path", {
                fill: "currentColor",
                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z",
                style: { opacity: "0.75" }
              }, null, -1)
            ])])) : (o(), s("svg", mt, [...F[2] || (F[2] = [
              v("polyline", { points: "6 9 12 15 18 9" }, null, -1)
            ])]))
          ], !0)
        ])
      ], 32),
      (o(), U(le, {
        to: "body",
        disabled: !t.overlayTeleport
      }, [
        P(i) ? (o(), s("div", {
          key: 0,
          ref_key: "overlayRef",
          ref: u,
          class: "og-select__overlay",
          style: q(g.value)
        }, [
          L.$slots.header ? (o(), s("div", ht, [
            _(L.$slots, "header", {}, void 0, !0)
          ])) : m("", !0),
          t.filter ? (o(), s("div", yt, [
            ie(v("input", {
              ref_key: "filterInputRef",
              ref: r,
              "onUpdate:modelValue": F[0] || (F[0] = (H) => Ce(d) ? d.value = H : null),
              type: "text",
              class: "og-select__filter-input",
              placeholder: t.filterPlaceholder
            }, null, 8, $t), [
              [me, P(d)]
            ])
          ])) : m("", !0),
          v("ul", kt, [
            (o(!0), s(R, null, N(P(f), (H, de) => (o(), s("li", {
              key: de,
              class: $([
                "og-select__option",
                {
                  "og-select__option--selected": O(H),
                  "og-select__option--disabled": P(p)(H)
                }
              ]),
              role: "option",
              "aria-selected": O(H),
              onClick: (C) => S(H)
            }, [
              _(L.$slots, "option", {
                option: H,
                index: de
              }, () => [
                z(V(P(h)(H)), 1)
              ], !0)
            ], 10, wt))), 128)),
            P(f).length === 0 ? (o(), s("li", Ot, V(t.emptyMessage), 1)) : m("", !0)
          ]),
          L.$slots.footer ? (o(), s("div", Ct, [
            _(L.$slots, "footer", {}, void 0, !0)
          ])) : m("", !0)
        ], 4)) : m("", !0)
      ], 8, ["disabled"]))
    ], 2));
  }
}), Bt = /* @__PURE__ */ I(Vt, [["__scopeId", "data-v-094ca737"]]), It = {
  key: 0,
  class: "og-card__header"
}, Dt = { class: "og-card__body" }, xt = {
  key: 0,
  class: "og-card__title"
}, Tt = {
  key: 1,
  class: "og-card__subtitle"
}, Lt = {
  key: 2,
  class: "og-card__content"
}, St = {
  key: 3,
  class: "og-card__footer"
}, zt = /* @__PURE__ */ B({
  name: "OgCard",
  __name: "OgCard",
  props: {
    title: {},
    subtitle: {}
  },
  setup(t) {
    const a = y(() => ["og-card"]);
    return (e, n) => (o(), s("div", {
      class: $(a.value)
    }, [
      e.$slots.header ? (o(), s("div", It, [
        _(e.$slots, "header", {}, void 0, !0)
      ])) : m("", !0),
      v("div", Dt, [
        t.title || e.$slots.title ? (o(), s("div", xt, [
          _(e.$slots, "title", {}, () => [
            z(V(t.title), 1)
          ], !0)
        ])) : m("", !0),
        t.subtitle || e.$slots.subtitle ? (o(), s("div", Tt, [
          _(e.$slots, "subtitle", {}, () => [
            z(V(t.subtitle), 1)
          ], !0)
        ])) : m("", !0),
        e.$slots.content ? (o(), s("div", Lt, [
          _(e.$slots, "content", {}, void 0, !0)
        ])) : m("", !0),
        e.$slots.footer ? (o(), s("div", St, [
          _(e.$slots, "footer", {}, void 0, !0)
        ])) : m("", !0)
      ])
    ], 2));
  }
}), Mt = /* @__PURE__ */ I(zt, [["__scopeId", "data-v-becb22d8"]]), Rt = {
  key: 0,
  class: "og-dialog__header"
}, Et = { class: "og-dialog__title" }, Pt = { class: "og-dialog__content" }, At = {
  key: 1,
  class: "og-dialog__footer"
}, Nt = /* @__PURE__ */ B({
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
  setup(t, { emit: a }) {
    const e = t, n = a, l = D(null), u = () => {
      n("update:visible", !1), n("hide");
    }, r = () => {
      e.dismissableMask && u();
    }, g = () => {
      e.closeOnEscape && e.closable && u();
    };
    X(
      () => e.visible,
      (d) => {
        d ? (n("show"), document.body.style.overflow = e.modal ? "hidden" : "") : document.body.style.overflow = "";
      }
    ), te(() => {
      document.body.style.overflow = "";
    });
    const i = y(() => ["og-dialog"]);
    return (d, f) => (o(), U(le, { to: "body" }, [
      t.visible ? (o(), s("div", {
        key: 0,
        class: $(["og-dialog-mask", { "og-dialog-mask--modal": t.modal }, `og-dialog-mask--${t.position}`]),
        onClick: r
      }, [
        v("div", {
          ref_key: "dialogRef",
          ref: l,
          class: $(i.value),
          style: q(t.style),
          role: "dialog",
          "aria-modal": "true",
          tabindex: "-1",
          onClick: f[0] || (f[0] = A(() => {
          }, ["stop"])),
          onKeydown: Y(g, ["esc"])
        }, [
          t.header || d.$slots.header || t.closable ? (o(), s("div", Rt, [
            _(d.$slots, "header", {}, () => [
              v("span", Et, V(t.header), 1)
            ], !0),
            t.closable ? (o(), s("button", {
              key: 0,
              type: "button",
              class: "og-dialog__close",
              "aria-label": "Close",
              onClick: u
            }, [
              _(d.$slots, "closeicon", {}, () => [
                f[1] || (f[1] = z("✕", -1))
              ], !0)
            ])) : m("", !0)
          ])) : m("", !0),
          v("div", Pt, [
            _(d.$slots, "default", {}, void 0, !0)
          ]),
          d.$slots.footer ? (o(), s("div", At, [
            _(d.$slots, "footer", {}, void 0, !0)
          ])) : m("", !0)
        ], 38)
      ], 2)) : m("", !0)
    ]));
  }
}), Kt = /* @__PURE__ */ I(Nt, [["__scopeId", "data-v-d8d5495a"]]), oe = D([]);
function Ft() {
  const t = (l) => {
    const u = l.id || Math.random().toString(36).substring(2, 9), r = { ...l, id: u };
    oe.value.push(r), !r.sticky && (r.life || !0) && setTimeout(() => {
      a(u);
    }, r.life || 3e3);
  }, a = (l) => {
    oe.value = oe.value.filter((u) => u.id !== l);
  };
  return {
    messages: oe,
    add: t,
    remove: a,
    removeGroup: (l) => {
      oe.value = oe.value.filter((u) => u.group !== l);
    },
    clear: () => {
      oe.value = [];
    }
  };
}
const jt = { class: "og-toast__icon" }, Yt = { key: 0 }, Gt = { key: 1 }, Xt = { key: 2 }, Ht = { key: 3 }, qt = { class: "og-toast__body" }, Ut = {
  key: 0,
  class: "og-toast__summary"
}, Jt = {
  key: 1,
  class: "og-toast__detail"
}, Qt = ["onClick"], Wt = /* @__PURE__ */ B({
  name: "OgToast",
  __name: "OgToast",
  props: {
    position: { default: "top-right" },
    group: {}
  },
  setup(t) {
    const a = t, { messages: e, remove: n } = Ft(), l = y(() => a.group ? e.value.filter((u) => u.group === a.group) : e.value.filter((u) => !u.group));
    return (u, r) => (o(), U(le, { to: "body" }, [
      v("div", {
        class: $(["og-toast-container", `og-toast-container--${t.position}`])
      }, [
        _e(Ve, { name: "og-toast-anim" }, {
          default: pe(() => [
            (o(!0), s(R, null, N(l.value, (g) => (o(), s("div", {
              key: g.id,
              class: $(["og-toast", g.severity ? `og-toast--${g.severity}` : "og-toast--info"])
            }, [
              v("div", jt, [
                _(u.$slots, "icon", { message: g }, () => [
                  g.severity === "success" ? (o(), s("span", Yt, "✓")) : g.severity === "warn" ? (o(), s("span", Gt, "⚠")) : g.severity === "error" ? (o(), s("span", Xt, "✕")) : (o(), s("span", Ht, "ℹ"))
                ], !0)
              ]),
              v("div", qt, [
                g.summary ? (o(), s("div", Ut, V(g.summary), 1)) : m("", !0),
                g.detail ? (o(), s("div", Jt, V(g.detail), 1)) : m("", !0)
              ]),
              g.closable !== !1 ? (o(), s("button", {
                key: 0,
                type: "button",
                class: "og-toast__close",
                "aria-label": "Close",
                onClick: (i) => P(n)(g.id)
              }, " ✕ ", 8, Qt)) : m("", !0)
            ], 2))), 128))
          ]),
          _: 3
        })
      ], 2)
    ]));
  }
}), Zt = /* @__PURE__ */ I(Wt, [["__scopeId", "data-v-965c9c27"]]);
function ea(t) {
  const a = D(0), e = y(() => ee(t.rows) || 10), n = D(null), l = D(1), u = D([]), r = y(() => ee(t.value) || []), g = y(() => !!ee(t.paginator)), i = y(() => r.value.length), d = y(() => {
    const p = r.value;
    if (!n.value) return p;
    const w = n.value;
    return [...p].sort((T, c) => {
      const k = T[w], O = c[w];
      return k === O ? 0 : k == null ? 1 : O == null ? -1 : k < O ? -1 * l.value : 1 * l.value;
    });
  }), f = y(() => {
    if (!g.value) return d.value;
    const p = a.value * e.value;
    return d.value.slice(p, p + e.value);
  });
  return {
    currentPage: a,
    rowsPerPage: e,
    sortField: n,
    sortOrder: l,
    selectedRows: u,
    totalRecords: i,
    paginatedData: f,
    sort: (p) => {
      n.value === p ? l.value === 1 ? l.value = -1 : (n.value = null, l.value = 1) : (n.value = p, l.value = 1);
    },
    setPage: (p) => {
      a.value = p;
    }
  };
}
const ta = {
  key: 0,
  class: "og-datatable__header"
}, aa = { class: "og-datatable__wrapper" }, oa = { class: "og-datatable__table" }, la = { class: "og-datatable__thead" }, sa = ["onClick"], na = { class: "og-datatable__th-content" }, ia = {
  key: 0,
  class: "og-datatable__sort-icon"
}, da = { class: "og-datatable__tbody" }, ua = {
  key: 0,
  class: "og-datatable__loading-row"
}, ra = ["colspan"], ca = {
  key: 1,
  class: "og-datatable__empty-row"
}, ga = ["colspan"], va = { key: 1 }, fa = {
  key: 1,
  class: "og-datatable__paginator"
}, ba = ["disabled"], pa = ["onClick"], ma = ["disabled"], _a = {
  key: 2,
  class: "og-datatable__footer"
}, ha = /* @__PURE__ */ B({
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
    const a = t, e = Be(), {
      currentPage: n,
      sortField: l,
      sortOrder: u,
      paginatedData: r,
      sort: g,
      setPage: i
    } = ea({
      value: () => a.value,
      paginator: () => a.paginator,
      rows: () => a.rows
    }), d = y(() => {
      var p;
      const b = a.rows || 10;
      return Math.ceil((((p = a.value) == null ? void 0 : p.length) || 0) / b);
    }), f = y(() => {
      const b = e.default ? e.default() : [], p = [], w = (T) => {
        T.forEach((c) => {
          Array.isArray(c.children) && typeof c.type == "symbol" ? w(c.children) : c.props && p.push(c);
        });
      };
      return w(b), p.map((T) => ({
        props: T.props,
        children: T.children
      }));
    }), h = y(() => [
      "og-datatable",
      a.size ? `og-datatable--${a.size}` : "",
      {
        "og-datatable--striped": a.stripedRows,
        "og-datatable--gridlines": a.showGridlines
      }
    ]);
    return (b, p) => (o(), s("div", {
      class: $(h.value)
    }, [
      b.$slots.header ? (o(), s("div", ta, [
        _(b.$slots, "header", {}, void 0, !0)
      ])) : m("", !0),
      v("div", aa, [
        v("table", oa, [
          v("thead", la, [
            v("tr", null, [
              (o(!0), s(R, null, N(f.value, (w, T) => {
                var c, k, O, S, x, E;
                return o(), s("th", {
                  key: T,
                  style: q((c = w.props) == null ? void 0 : c.style),
                  class: $([
                    "og-datatable__th",
                    { "og-datatable__th--sortable": (k = w.props) == null ? void 0 : k.sortable }
                  ]),
                  onClick: (j) => {
                    var J, Q;
                    return (J = w.props) != null && J.sortable && ((Q = w.props) != null && Q.field) ? P(g)(w.props.field) : void 0;
                  }
                }, [
                  v("div", na, [
                    v("span", null, V(((O = w.props) == null ? void 0 : O.header) || ((S = w.props) == null ? void 0 : S.field)), 1),
                    (x = w.props) != null && x.sortable && P(l) === ((E = w.props) == null ? void 0 : E.field) ? (o(), s("span", ia, V(P(u) === 1 ? "▲" : "▼"), 1)) : m("", !0)
                  ])
                ], 14, sa);
              }), 128))
            ])
          ]),
          v("tbody", da, [
            t.loading ? (o(), s("tr", ua, [
              v("td", {
                colspan: f.value.length,
                class: "og-datatable__loading-cell"
              }, [
                _(b.$slots, "loading", {}, () => [
                  p[2] || (p[2] = z("Loading data...", -1))
                ], !0)
              ], 8, ra)
            ])) : P(r).length === 0 ? (o(), s("tr", ca, [
              v("td", {
                colspan: f.value.length,
                class: "og-datatable__empty-cell"
              }, [
                _(b.$slots, "empty", {}, () => [
                  p[3] || (p[3] = z("No records found", -1))
                ], !0)
              ], 8, ga)
            ])) : m("", !0),
            (o(!0), s(R, null, N(P(r), (w, T) => (o(), s("tr", {
              key: t.dataKey ? w[t.dataKey] : T,
              class: "og-datatable__row"
            }, [
              (o(!0), s(R, null, N(f.value, (c, k) => {
                var O, S, x, E, j;
                return o(), s("td", {
                  key: k,
                  style: q((O = c.props) == null ? void 0 : O.style),
                  class: "og-datatable__td"
                }, [
                  (S = c.children) != null && S.body ? (o(), U(be((x = c.children) == null ? void 0 : x.body), {
                    key: 0,
                    data: w,
                    index: T,
                    field: (E = c.props) == null ? void 0 : E.field
                  }, null, 8, ["data", "index", "field"])) : (j = c.props) != null && j.field ? (o(), s("span", va, V(w[c.props.field]), 1)) : m("", !0)
                ], 4);
              }), 128))
            ]))), 128))
          ])
        ])
      ]),
      t.paginator && d.value > 1 ? (o(), s("div", fa, [
        v("button", {
          type: "button",
          class: "og-datatable__page-btn",
          disabled: P(n) === 0,
          onClick: p[0] || (p[0] = (w) => P(i)(P(n) - 1))
        }, " ‹ ", 8, ba),
        (o(!0), s(R, null, N(d.value, (w) => (o(), s("button", {
          key: w,
          class: $(["og-datatable__page-btn", { "og-datatable__page-btn--active": P(n) === w - 1 }]),
          onClick: (T) => P(i)(w - 1)
        }, V(w), 11, pa))), 128)),
        v("button", {
          type: "button",
          class: "og-datatable__page-btn",
          disabled: P(n) >= d.value - 1,
          onClick: p[1] || (p[1] = (w) => P(i)(P(n) + 1))
        }, " › ", 8, ma)
      ])) : m("", !0),
      b.$slots.footer ? (o(), s("div", _a, [
        _(b.$slots, "footer", {}, void 0, !0)
      ])) : m("", !0)
    ], 2));
  }
}), ya = /* @__PURE__ */ I(ha, [["__scopeId", "data-v-899ad77c"]]), $a = /* @__PURE__ */ B({
  name: "OgColumn",
  __name: "OgColumn",
  props: {
    field: {},
    header: {},
    sortable: { type: Boolean },
    style: {}
  },
  setup(t) {
    return (a, e) => _(a.$slots, "default");
  }
}), ka = ["src", "alt"], wa = {
  key: 1,
  class: "og-avatar__label"
}, Oa = /* @__PURE__ */ B({
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
    const a = t, e = y(() => [
      "og-avatar",
      a.size ? `og-avatar--${a.size}` : "",
      `og-avatar--${a.shape}`
    ]);
    return (n, l) => (o(), s("div", {
      class: $(e.value)
    }, [
      _(n.$slots, "default", {}, () => [
        t.image ? (o(), s("img", {
          key: 0,
          src: t.image,
          alt: t.ariaLabel,
          class: "og-avatar__image"
        }, null, 8, ka)) : t.label ? (o(), s("span", wa, V(t.label), 1)) : t.icon ? (o(), s("span", {
          key: 2,
          class: $(["og-avatar__icon", t.icon])
        }, null, 2)) : m("", !0)
      ], !0)
    ], 2));
  }
}), Ca = /* @__PURE__ */ I(Oa, [["__scopeId", "data-v-d897d309"]]), Va = /* @__PURE__ */ B({
  name: "OgBadge",
  __name: "OgBadge",
  props: {
    value: {},
    severity: {},
    size: {}
  },
  setup(t) {
    const a = t, e = y(() => [
      "og-badge",
      a.severity ? `og-badge--${a.severity}` : "",
      a.size ? `og-badge--${a.size}` : "",
      {
        "og-badge--dot": a.value === void 0 || a.value === null || a.value === ""
      }
    ]);
    return (n, l) => (o(), s("span", {
      class: $(e.value)
    }, [
      _(n.$slots, "default", {}, () => [
        z(V(t.value), 1)
      ], !0)
    ], 2));
  }
}), Ba = /* @__PURE__ */ I(Va, [["__scopeId", "data-v-facd4d33"]]), Ia = ["aria-valuenow"], Da = {
  key: 0,
  class: "og-progressbar__label"
}, xa = {
  key: 1,
  class: "og-progressbar__indeterminate-container"
}, Ta = /* @__PURE__ */ B({
  name: "OgProgressBar",
  __name: "OgProgressBar",
  props: {
    value: { default: 0 },
    mode: { default: "determinate" },
    showValue: { type: Boolean, default: !0 },
    unit: { default: "%" }
  },
  setup(t) {
    const a = t, e = y(() => Math.min(100, Math.max(0, a.value)));
    return (n, l) => (o(), s("div", {
      class: $(["og-progressbar", `og-progressbar--${t.mode}`]),
      role: "progressbar",
      "aria-valuenow": t.value ?? void 0
    }, [
      t.mode === "determinate" ? (o(), s("div", {
        key: 0,
        class: "og-progressbar__value",
        style: q({ width: `${e.value}%` })
      }, [
        t.showValue ? (o(), s("span", Da, V(e.value) + V(t.unit), 1)) : m("", !0)
      ], 4)) : (o(), s("div", xa, [...l[0] || (l[0] = [
        v("div", { class: "og-progressbar__indeterminate-bar" }, null, -1)
      ])]))
    ], 10, Ia));
  }
}), La = /* @__PURE__ */ I(Ta, [["__scopeId", "data-v-5bd32dc7"]]), Sa = /* @__PURE__ */ B({
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
    const a = t, e = y(() => a.size ? {
      width: a.size,
      height: a.size,
      borderRadius: a.shape === "circle" ? "50%" : a.borderRadius
    } : {
      width: a.width,
      height: a.height,
      borderRadius: a.shape === "circle" ? "50%" : a.borderRadius
    }), n = y(() => [
      "og-skeleton",
      `og-skeleton--${a.shape}`,
      `og-skeleton--anim-${a.animation}`
    ]);
    return (l, u) => (o(), s("div", {
      class: $(n.value),
      style: q(e.value)
    }, null, 6));
  }
}), za = /* @__PURE__ */ I(Sa, [["__scopeId", "data-v-442ac949"]]), Ma = {
  key: 0,
  class: "og-divider__content"
}, Ra = /* @__PURE__ */ B({
  name: "OgDivider",
  __name: "OgDivider",
  props: {
    align: { default: "center" },
    layout: { default: "horizontal" },
    type: { default: "solid" }
  },
  setup(t) {
    const a = t, e = y(() => [
      "og-divider",
      `og-divider--${a.layout}`,
      `og-divider--${a.type}`,
      `og-divider--align-${a.align}`
    ]);
    return (n, l) => (o(), s("div", {
      class: $(e.value),
      role: "separator"
    }, [
      n.$slots.default ? (o(), s("div", Ma, [
        _(n.$slots, "default", {}, void 0, !0)
      ])) : m("", !0)
    ], 2));
  }
}), Ea = /* @__PURE__ */ I(Ra, [["__scopeId", "data-v-9409c09c"]]), Pa = { class: "og-accordion" }, Aa = /* @__PURE__ */ B({
  name: "OgAccordion",
  __name: "OgAccordion",
  props: {
    value: { default: null },
    multiple: { type: Boolean, default: !1 }
  },
  emits: ["update:value", "tab-open", "tab-close"],
  setup(t, { emit: a }) {
    const e = t, n = a, l = D(e.value ?? (e.multiple ? [] : null)), u = D([]);
    let r = 0;
    X(
      () => e.value,
      (d) => {
        l.value = d;
      }
    );
    const g = () => {
      const d = r++;
      return u.value.push(d), {
        id: d,
        unregister: () => {
          u.value = u.value.filter((f) => f !== d);
        }
      };
    }, i = (d) => {
      if (e.multiple) {
        let f = Array.isArray(l.value) ? [...l.value] : [];
        f.includes(d) ? (f = f.filter((h) => h !== d), n("tab-close", d)) : (f.push(d), n("tab-open", d)), l.value = f, n("update:value", f);
      } else
        l.value === d ? (l.value = null, n("tab-close", d), n("update:value", null)) : (l.value = d, n("tab-open", d), n("update:value", d));
    };
    return ve("ogAccordion", {
      multiple: e.multiple,
      activeValue: l,
      registeredTabs: u,
      registerTab: g,
      toggleTab: i
    }), (d, f) => (o(), s("div", Pa, [
      _(d.$slots, "default", {}, void 0, !0)
    ]));
  }
}), Na = /* @__PURE__ */ I(Aa, [["__scopeId", "data-v-c67797a3"]]), Ka = ["tabindex"], Fa = { class: "og-accordion-tab__title" }, ja = { class: "og-accordion-tab__toggle-icon" }, Ya = { class: "og-accordion-tab__content" }, Ga = /* @__PURE__ */ B({
  name: "OgAccordionTab",
  __name: "OgAccordionTab",
  props: {
    header: {},
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    const a = t, e = he("ogAccordion", null), n = D(-1);
    let l = null;
    e && (l = e.registerTab(), n.value = l.id), te(() => {
      l && l.unregister();
    });
    const u = y(() => e ? e.registeredTabs.value.indexOf(n.value) : -1), r = y(() => !e || u.value === -1 ? !1 : e.multiple ? Array.isArray(e.activeValue.value) && e.activeValue.value.includes(u.value) : e.activeValue.value === u.value), g = () => {
      a.disabled || !e || u.value === -1 || e.toggleTab(u.value);
    };
    return (i, d) => (o(), s("div", {
      class: $(["og-accordion-tab", { "og-accordion-tab--active": r.value, "og-accordion-tab--disabled": t.disabled }])
    }, [
      v("div", {
        class: "og-accordion-tab__header",
        role: "button",
        tabindex: t.disabled ? -1 : 0,
        onClick: g
      }, [
        _(i.$slots, "header", {}, () => [
          v("span", Fa, V(t.header), 1)
        ], !0),
        v("span", ja, V(r.value ? "−" : "+"), 1)
      ], 8, Ka),
      ie(v("div", Ya, [
        _(i.$slots, "default", {}, void 0, !0)
      ], 512), [
        [fe, r.value]
      ])
    ], 2));
  }
}), Xa = /* @__PURE__ */ I(Ga, [["__scopeId", "data-v-30d7e376"]]), Ha = { class: "og-tabs" }, qa = { class: "og-tabs__nav-container" }, Ua = {
  class: "og-tabs__nav",
  role: "tablist"
}, Ja = ["aria-selected", "disabled", "onClick"], Qa = { class: "og-tabs__panels" }, Wa = /* @__PURE__ */ B({
  name: "OgTabs",
  __name: "OgTabs",
  props: {
    value: { default: 0 }
  },
  emits: ["update:value", "tab-change"],
  setup(t, { emit: a }) {
    const e = t, n = a, l = D(e.value), u = D([]);
    let r = 0;
    X(
      () => e.value,
      (d) => {
        l.value = d;
      }
    );
    const g = (d) => {
      const f = r++, h = Ie({ id: f, header: d.header, disabled: d.disabled });
      return u.value.push(h), {
        id: f,
        update: (b) => {
          h.header = b.header, h.disabled = b.disabled;
        },
        unregister: () => {
          u.value = u.value.filter((b) => b.id !== f);
        }
      };
    }, i = (d, f) => {
      f || (l.value = d, n("update:value", d), n("tab-change", d));
    };
    return ve("ogTabs", {
      activeValue: l,
      registeredTabs: u,
      registerTab: g
    }), (d, f) => (o(), s("div", Ha, [
      v("div", qa, [
        v("div", Ua, [
          (o(!0), s(R, null, N(u.value, (h, b) => (o(), s("button", {
            key: h.id,
            type: "button",
            role: "tab",
            "aria-selected": l.value === b,
            disabled: h.disabled,
            class: $([
              "og-tabs__header",
              {
                "og-tabs__header--active": l.value === b,
                "og-tabs__header--disabled": h.disabled
              }
            ]),
            onClick: (p) => i(b, h.disabled)
          }, [
            v("span", null, V(h.header), 1)
          ], 10, Ja))), 128))
        ])
      ]),
      v("div", Qa, [
        _(d.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), Za = /* @__PURE__ */ I(Wa, [["__scopeId", "data-v-50236a70"]]), eo = {
  class: "og-tabpanel",
  role: "tabpanel"
}, to = /* @__PURE__ */ B({
  name: "OgTabPanel",
  __name: "OgTabPanel",
  props: {
    header: {},
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    const a = t, e = he("ogTabs", null), n = D(-1);
    let l = null;
    e && (l = e.registerTab({
      header: a.header,
      disabled: a.disabled
    }), n.value = l.id), X(
      () => [a.header, a.disabled],
      () => {
        l && l.update({ header: a.header, disabled: a.disabled });
      }
    ), te(() => {
      l && l.unregister();
    });
    const u = y(() => e ? e.registeredTabs.value.findIndex((g) => g.id === n.value) : -1), r = y(() => e ? e.activeValue.value === u.value : !1);
    return (g, i) => ie((o(), s("div", eo, [
      _(g.$slots, "default", {}, void 0, !0)
    ], 512)), [
      [fe, r.value]
    ]);
  }
}), ao = /* @__PURE__ */ I(to, [["__scopeId", "data-v-ea9476c4"]]), oo = { class: "og-tag__value" }, lo = /* @__PURE__ */ B({
  name: "OgTag",
  __name: "OgTag",
  props: {
    value: {},
    severity: {},
    rounded: { type: Boolean, default: !1 },
    icon: {}
  },
  setup(t) {
    const a = t, e = y(() => [
      "og-tag",
      a.severity ? `og-tag--${a.severity}` : "og-tag--primary",
      {
        "og-tag--rounded": a.rounded
      }
    ]);
    return (n, l) => (o(), s("span", {
      class: $(e.value)
    }, [
      _(n.$slots, "icon", {}, () => [
        t.icon ? (o(), s("span", {
          key: 0,
          class: $(["og-tag__icon", t.icon])
        }, null, 2)) : m("", !0)
      ], !0),
      v("span", oo, [
        _(n.$slots, "default", {}, () => [
          z(V(t.value), 1)
        ], !0)
      ])
    ], 2));
  }
}), so = /* @__PURE__ */ I(lo, [["__scopeId", "data-v-be36ea7e"]]), no = {
  key: 0,
  class: "og-chip"
}, io = ["src"], uo = { class: "og-chip__label" }, ro = /* @__PURE__ */ B({
  name: "OgChip",
  __name: "OgChip",
  props: {
    label: {},
    icon: {},
    image: {},
    removable: { type: Boolean, default: !1 }
  },
  emits: ["remove"],
  setup(t, { emit: a }) {
    const e = a, n = D(!0), l = (u) => {
      n.value = !1, e("remove", u);
    };
    return (u, r) => n.value ? (o(), s("div", no, [
      _(u.$slots, "icon", {}, () => [
        t.image ? (o(), s("img", {
          key: 0,
          src: t.image,
          alt: "chip avatar",
          class: "og-chip__image"
        }, null, 8, io)) : t.icon ? (o(), s("span", {
          key: 1,
          class: $(["og-chip__icon", t.icon])
        }, null, 2)) : m("", !0)
      ], !0),
      v("span", uo, [
        _(u.$slots, "default", {}, () => [
          z(V(t.label), 1)
        ], !0)
      ]),
      t.removable ? (o(), s("button", {
        key: 0,
        type: "button",
        class: "og-chip__remove",
        "aria-label": "Remove",
        onClick: l
      }, [
        _(u.$slots, "removeicon", {}, () => [
          r[0] || (r[0] = z("✕", -1))
        ], !0)
      ])) : m("", !0)
    ])) : m("", !0);
  }
}), co = /* @__PURE__ */ I(ro, [["__scopeId", "data-v-fc160651"]]), go = { class: "og-message__wrapper" }, vo = { class: "og-message__icon" }, fo = { key: 1 }, bo = { key: 2 }, po = { key: 3 }, mo = { key: 4 }, _o = { class: "og-message__content" }, ho = /* @__PURE__ */ B({
  name: "OgMessage",
  __name: "OgMessage",
  props: {
    severity: { default: "info" },
    closable: { type: Boolean, default: !1 },
    icon: {}
  },
  emits: ["close"],
  setup(t, { emit: a }) {
    const e = t, n = a, l = D(!0), u = (g) => {
      l.value = !1, n("close", g);
    }, r = y(() => [
      "og-message",
      `og-message--${e.severity}`
    ]);
    return (g, i) => l.value ? (o(), s("div", {
      key: 0,
      class: $(r.value),
      role: "alert"
    }, [
      v("div", go, [
        v("span", vo, [
          _(g.$slots, "icon", {}, () => [
            t.icon ? (o(), s("span", {
              key: 0,
              class: $(t.icon)
            }, null, 2)) : t.severity === "success" ? (o(), s("span", fo, "✓")) : t.severity === "warning" ? (o(), s("span", bo, "⚠")) : t.severity === "danger" ? (o(), s("span", po, "✕")) : (o(), s("span", mo, "ℹ"))
          ], !0)
        ]),
        v("div", _o, [
          _(g.$slots, "default", {}, void 0, !0)
        ]),
        t.closable ? (o(), s("button", {
          key: 0,
          type: "button",
          class: "og-message__close",
          "aria-label": "Close",
          onClick: u
        }, [
          _(g.$slots, "closeicon", {}, () => [
            i[0] || (i[0] = z("✕", -1))
          ], !0)
        ])) : m("", !0)
      ])
    ], 2)) : m("", !0);
  }
}), yo = /* @__PURE__ */ I(ho, [["__scopeId", "data-v-40394155"]]), $o = {
  key: 0,
  class: "og-drawer__header"
}, ko = { class: "og-drawer__title" }, wo = { class: "og-drawer__content" }, Oo = {
  key: 1,
  class: "og-drawer__footer"
}, Co = /* @__PURE__ */ B({
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
  setup(t, { emit: a }) {
    const e = t, n = a, l = () => {
      n("update:visible", !1), n("hide");
    }, u = () => {
      e.dismissableMask && l();
    }, r = () => {
      e.closeOnEscape && e.closable && l();
    };
    X(
      () => e.visible,
      (i) => {
        i ? (n("show"), e.modal && (document.body.style.overflow = "hidden")) : document.body.style.overflow = "";
      }
    ), te(() => {
      document.body.style.overflow = "";
    });
    const g = y(() => [
      "og-drawer",
      `og-drawer--${e.position}`,
      { "og-drawer--fullscreen": e.fullScreen }
    ]);
    return (i, d) => (o(), U(le, { to: "body" }, [
      t.visible ? (o(), s("div", {
        key: 0,
        class: $(["og-drawer-mask", { "og-drawer-mask--modal": t.modal }]),
        onClick: u
      }, [
        v("div", {
          class: $(g.value),
          role: "complementary",
          "aria-modal": "true",
          tabindex: "-1",
          onClick: d[0] || (d[0] = A(() => {
          }, ["stop"])),
          onKeydown: Y(r, ["esc"])
        }, [
          t.header || i.$slots.header || t.closable ? (o(), s("div", $o, [
            _(i.$slots, "header", {}, () => [
              v("span", ko, V(t.header), 1)
            ], !0),
            t.closable ? (o(), s("button", {
              key: 0,
              type: "button",
              class: "og-drawer__close",
              "aria-label": "Close",
              onClick: l
            }, [
              _(i.$slots, "closeicon", {}, () => [
                d[1] || (d[1] = z("✕", -1))
              ], !0)
            ])) : m("", !0)
          ])) : m("", !0),
          v("div", wo, [
            _(i.$slots, "default", {}, void 0, !0)
          ]),
          i.$slots.footer ? (o(), s("div", Oo, [
            _(i.$slots, "footer", {}, void 0, !0)
          ])) : m("", !0)
        ], 34)
      ], 2)) : m("", !0)
    ]));
  }
}), Vo = /* @__PURE__ */ I(Co, [["__scopeId", "data-v-a172d6a1"]]), Bo = { class: "og-slider__track" }, Io = ["onKeydown"], Do = /* @__PURE__ */ B({
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
  setup(t, { emit: a }) {
    const e = t, n = a, l = D(null), u = y(() => {
      const c = e.max - e.min;
      return c <= 0 ? 0 : (Math.min(e.max, Math.max(e.min, e.modelValue)) - e.min) / c * 100;
    }), r = y(() => e.orientation === "vertical" ? { height: `${u.value}%`, bottom: "0" } : { width: `${u.value}%`, left: "0" }), g = y(() => e.orientation === "vertical" ? { bottom: `${u.value}%`, left: "50%", transform: "translate(-50%, 50%)" } : { left: `${u.value}%`, top: "50%", transform: "translate(-50%, -50%)" }), i = (c) => {
      if (e.disabled) return;
      let k = Math.min(e.max, Math.max(e.min, c));
      n("update:modelValue", k), n("change", k);
    }, d = () => i(e.modelValue + e.step), f = () => i(e.modelValue - e.step), h = (c, k) => {
      if (!l.value || e.disabled) return;
      const O = l.value.getBoundingClientRect();
      let S = 0;
      e.orientation === "vertical" ? S = (O.bottom - k) / O.height : S = (c - O.left) / O.width, S = Math.max(0, Math.min(1, S));
      const x = e.min + S * (e.max - e.min), E = Math.round(x / e.step) * e.step;
      i(E);
    }, b = (c) => {
      const k = "touches" in c ? c.touches[0].clientX : c.clientX, O = "touches" in c ? c.touches[0].clientY : c.clientY;
      h(k, O);
    }, p = () => {
      window.removeEventListener("mousemove", b), window.removeEventListener("mouseup", p), window.removeEventListener("touchmove", b), window.removeEventListener("touchend", p);
    }, w = (c) => {
      if (e.disabled) return;
      const k = "touches" in c ? c.touches[0].clientX : c.clientX, O = "touches" in c ? c.touches[0].clientY : c.clientY;
      h(k, O), window.addEventListener("mousemove", b), window.addEventListener("mouseup", p), window.addEventListener("touchmove", b), window.addEventListener("touchend", p);
    };
    te(() => {
      p();
    });
    const T = y(() => [
      "og-slider",
      `og-slider--${e.orientation}`,
      { "og-slider--disabled": e.disabled }
    ]);
    return (c, k) => (o(), s("div", {
      ref_key: "sliderRef",
      ref: l,
      class: $(T.value),
      onMousedown: w,
      onTouchstartPassive: w
    }, [
      v("div", Bo, [
        v("div", {
          class: "og-slider__range",
          style: q(r.value)
        }, null, 4),
        v("div", {
          class: "og-slider__handle",
          tabindex: "0",
          style: q(g.value),
          onKeydown: [
            Y(A(f, ["prevent"]), ["left"]),
            Y(A(f, ["prevent"]), ["down"]),
            Y(A(d, ["prevent"]), ["right"]),
            Y(A(d, ["prevent"]), ["up"])
          ]
        }, null, 44, Io)
      ])
    ], 34));
  }
}), xo = /* @__PURE__ */ I(Do, [["__scopeId", "data-v-6614aa05"]]), To = ["disabled"], Lo = ["aria-label", "disabled", "onClick"], So = /* @__PURE__ */ B({
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
  setup(t, { emit: a }) {
    const e = t, n = a, l = (r) => {
      e.disabled || e.readonly || (n("update:modelValue", r), n("change", r));
    }, u = () => {
      e.disabled || e.readonly || (n("update:modelValue", null), n("change", null));
    };
    return (r, g) => (o(), s("div", {
      class: $(["og-rating", { "og-rating--disabled": t.disabled, "og-rating--readonly": t.readonly }])
    }, [
      t.cancel ? (o(), s("button", {
        key: 0,
        type: "button",
        class: "og-rating__cancel",
        "aria-label": "Cancel rating",
        disabled: t.disabled || t.readonly,
        onClick: u
      }, [
        _(r.$slots, "cancelicon", {}, () => [
          g[0] || (g[0] = z("⊘", -1))
        ], !0)
      ], 8, To)) : m("", !0),
      (o(!0), s(R, null, N(t.stars, (i) => (o(), s("button", {
        key: i,
        type: "button",
        class: $(["og-rating__star", { "og-rating__star--active": i <= (t.modelValue ?? 0) }]),
        "aria-label": `Rate ${i} stars`,
        disabled: t.disabled || t.readonly,
        onClick: (d) => l(i)
      }, [
        _(r.$slots, "item", {
          value: i,
          active: i <= (t.modelValue ?? 0)
        }, () => [
          g[1] || (g[1] = z(" ★ ", -1))
        ], !0)
      ], 10, Lo))), 128))
    ], 2));
  }
}), zo = /* @__PURE__ */ I(So, [["__scopeId", "data-v-74f409df"]]), Mo = ["value", "disabled", "onInput", "onKeydown"], Ro = /* @__PURE__ */ B({
  name: "OgInputOtp",
  __name: "OgInputOtp",
  props: {
    modelValue: { default: "" },
    length: { default: 4 },
    integerOnly: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "change"],
  setup(t, { emit: a }) {
    const e = t, n = a, l = D([]), u = y(() => (e.modelValue || "").split("")), r = (f) => {
      const h = f.join("").substring(0, e.length);
      n("update:modelValue", h), n("change", h);
    }, g = (f, h) => {
      let p = f.target.value;
      e.integerOnly && (p = p.replace(/\D/g, ""));
      const w = [...u.value];
      w[h] = p, r(w), p && h < e.length - 1 && l.value[h + 1] && l.value[h + 1].focus();
    }, i = (f, h) => {
      f.key === "Backspace" && !u.value[h] && h > 0 && l.value[h - 1] && l.value[h - 1].focus();
    }, d = (f) => {
      var p, w;
      if (f.preventDefault(), e.disabled) return;
      let b = (((p = f.clipboardData) == null ? void 0 : p.getData("text")) || "").trim();
      if (e.integerOnly && (b = b.replace(/\D/g, "")), b) {
        const T = b.split("").slice(0, e.length);
        r(T);
        const c = Math.min(T.length, e.length - 1);
        (w = l.value[c]) == null || w.focus();
      }
    };
    return (f, h) => (o(), s("div", {
      class: $(["og-inputotp", { "og-inputotp--disabled": t.disabled }])
    }, [
      (o(!0), s(R, null, N(t.length, (b) => (o(), s("input", {
        key: b,
        ref_for: !0,
        ref_key: "inputRefs",
        ref: l,
        type: "text",
        maxlength: "1",
        value: u.value[b - 1] || "",
        disabled: t.disabled,
        class: "og-inputotp__input",
        onInput: (p) => g(p, b - 1),
        onKeydown: (p) => i(p, b - 1),
        onPaste: d
      }, null, 40, Mo))), 128))
    ], 2));
  }
}), Eo = /* @__PURE__ */ I(Ro, [["__scopeId", "data-v-1a3402f6"]]), Po = {
  class: "og-menu__list",
  role: "menu"
}, Ao = {
  key: 0,
  class: "og-menu__separator",
  role: "separator"
}, No = ["href", "onClick"], Ko = { class: "og-menu__label" }, Fo = /* @__PURE__ */ B({
  name: "OgMenu",
  __name: "OgMenu",
  props: {
    model: { default: () => [] },
    popup: { type: Boolean, default: !1 }
  },
  setup(t, { expose: a }) {
    const e = t, n = D(!1), l = D(null), u = () => {
      n.value = !n.value;
    }, r = (g, i) => {
      i.disabled || (i.command && i.command({ originalEvent: g, item: i }), e.popup && (n.value = !1));
    };
    return a({
      toggle: u
    }), (g, i) => !t.popup || n.value ? (o(), s("div", {
      key: 0,
      ref_key: "menuRef",
      ref: l,
      class: $(["og-menu", { "og-menu--popup": t.popup }])
    }, [
      v("ul", Po, [
        (o(!0), s(R, null, N(t.model, (d, f) => (o(), s(R, { key: f }, [
          d.separator ? (o(), s("li", Ao)) : (o(), s("li", {
            key: 1,
            class: $(["og-menu__item", { "og-menu__item--disabled": d.disabled }]),
            role: "menuitem"
          }, [
            v("a", {
              href: d.url || "#",
              class: "og-menu__link",
              onClick: A((h) => r(h, d), ["prevent"])
            }, [
              d.icon ? (o(), s("span", {
                key: 0,
                class: $(["og-menu__icon", d.icon])
              }, null, 2)) : m("", !0),
              v("span", Ko, V(d.label), 1)
            ], 8, No)
          ], 2))
        ], 64))), 128))
      ])
    ], 2)) : m("", !0);
  }
}), jo = /* @__PURE__ */ I(Fo, [["__scopeId", "data-v-9f004ca7"]]), Yo = {
  class: "og-breadcrumb",
  "aria-label": "Breadcrumb"
}, Go = { class: "og-breadcrumb__list" }, Xo = {
  key: 0,
  class: "og-breadcrumb__item"
}, Ho = ["href"], qo = { key: 1 }, Uo = {
  key: 1,
  class: "og-breadcrumb__separator"
}, Jo = { class: "og-breadcrumb__item" }, Qo = ["href", "onClick"], Wo = {
  key: 0,
  class: "og-breadcrumb__separator"
}, Zo = /* @__PURE__ */ B({
  name: "OgBreadcrumb",
  __name: "OgBreadcrumb",
  props: {
    model: { default: () => [] },
    home: {}
  },
  setup(t) {
    const a = (e, n) => {
      n.disabled || n.command && n.command({ originalEvent: e, item: n });
    };
    return (e, n) => (o(), s("nav", Yo, [
      v("ol", Go, [
        t.home ? (o(), s("li", Xo, [
          v("a", {
            href: t.home.url || "#",
            class: "og-breadcrumb__link",
            onClick: n[0] || (n[0] = A((l) => a(l, t.home), ["prevent"]))
          }, [
            t.home.icon ? (o(), s("span", {
              key: 0,
              class: $(["og-breadcrumb__icon", t.home.icon])
            }, null, 2)) : m("", !0),
            t.home.label ? (o(), s("span", qo, V(t.home.label), 1)) : m("", !0)
          ], 8, Ho)
        ])) : m("", !0),
        t.home && t.model.length > 0 ? (o(), s("li", Uo, [
          _(e.$slots, "separator", {}, () => [
            n[1] || (n[1] = z("/", -1))
          ], !0)
        ])) : m("", !0),
        (o(!0), s(R, null, N(t.model, (l, u) => (o(), s(R, { key: u }, [
          v("li", Jo, [
            v("a", {
              href: l.url || "#",
              class: "og-breadcrumb__link",
              onClick: A((r) => a(r, l), ["prevent"])
            }, [
              l.icon ? (o(), s("span", {
                key: 0,
                class: $(["og-breadcrumb__icon", l.icon])
              }, null, 2)) : m("", !0),
              v("span", null, V(l.label), 1)
            ], 8, Qo)
          ]),
          u < t.model.length - 1 ? (o(), s("li", Wo, [
            _(e.$slots, "separator", {}, () => [
              n[2] || (n[2] = z("/", -1))
            ], !0)
          ])) : m("", !0)
        ], 64))), 128))
      ])
    ]));
  }
}), el = /* @__PURE__ */ I(Zo, [["__scopeId", "data-v-86bc2af1"]]), tl = ["placeholder", "disabled", "onKeydown"], al = {
  class: "og-autocomplete__list",
  role: "listbox"
}, ol = ["onClick"], ll = /* @__PURE__ */ B({
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
  setup(t, { emit: a }) {
    const e = t, n = a, l = D(typeof e.modelValue == "string" ? e.modelValue : ""), u = D(!1), r = D(-1), g = D(null), i = D(null), d = D({}), f = (x) => {
      if (typeof x == "object" && x !== null) {
        if (e.optionLabel) return x[e.optionLabel];
        if ("label" in x) return x.label;
      }
      return String(x);
    }, h = () => {
      if (!g.value) return;
      const x = g.value.getBoundingClientRect();
      d.value = {
        position: "absolute",
        top: `${x.bottom + window.scrollY + 4}px`,
        left: `${x.left + window.scrollX}px`,
        width: `${x.width}px`,
        zIndex: "var(--og-z-dropdown)"
      };
    }, b = (x) => {
      u.value = !0, r.value = -1, n("complete", { query: l.value }), n("update:modelValue", l.value), n("change", x), se(h);
    }, p = (x) => {
      l.value = f(x), n("update:modelValue", x), n("select", x), u.value = !1;
    }, w = () => {
      u.value && r.value < e.suggestions.length - 1 && r.value++;
    }, T = () => {
      u.value && r.value > 0 && r.value--;
    }, c = () => {
      u.value && r.value >= 0 && r.value < e.suggestions.length && p(e.suggestions[r.value]);
    }, k = () => {
      l.value.length > 0 && e.suggestions.length > 0 && (u.value = !0, se(h));
    }, O = () => {
      setTimeout(() => {
        u.value = !1;
      }, 200);
    }, S = y(() => [
      "og-autocomplete",
      e.size ? `og-autocomplete--${e.size}` : "",
      { "og-autocomplete--disabled": e.disabled }
    ]);
    return (x, E) => (o(), s("div", {
      ref_key: "containerRef",
      ref: g,
      class: $(S.value)
    }, [
      ie(v("input", {
        "onUpdate:modelValue": E[0] || (E[0] = (j) => l.value = j),
        type: "text",
        placeholder: t.placeholder,
        disabled: t.disabled,
        class: "og-autocomplete__input",
        onInput: b,
        onFocus: k,
        onBlur: O,
        onKeydown: [
          Y(A(w, ["prevent"]), ["down"]),
          Y(A(T, ["prevent"]), ["up"]),
          Y(A(c, ["prevent"]), ["enter"])
        ]
      }, null, 40, tl), [
        [me, l.value]
      ]),
      (o(), U(le, { to: "body" }, [
        u.value && t.suggestions.length > 0 ? (o(), s("div", {
          key: 0,
          ref_key: "overlayRef",
          ref: i,
          class: "og-autocomplete__overlay",
          style: q(d.value)
        }, [
          v("ul", al, [
            (o(!0), s(R, null, N(t.suggestions, (j, J) => (o(), s("li", {
              key: J,
              class: $(["og-autocomplete__item", { "og-autocomplete__item--focused": r.value === J }]),
              role: "option",
              onClick: (Q) => p(j)
            }, [
              _(x.$slots, "option", {
                item: j,
                index: J
              }, () => [
                z(V(f(j)), 1)
              ], !0)
            ], 10, ol))), 128))
          ])
        ], 4)) : m("", !0)
      ]))
    ], 2));
  }
}), sl = /* @__PURE__ */ I(ll, [["__scopeId", "data-v-8b9bbef0"]]), nl = ["type", "value", "placeholder", "disabled"], il = /* @__PURE__ */ B({
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
  setup(t, { emit: a }) {
    const e = a, n = D(!1), l = (u) => {
      const r = u.target;
      e("update:modelValue", r.value);
    };
    return (u, r) => (o(), s("div", {
      class: $(["og-password", { "og-password--invalid": t.invalid, "og-password--disabled": t.disabled }])
    }, [
      v("input", {
        type: n.value ? "text" : "password",
        value: t.modelValue,
        placeholder: t.placeholder,
        disabled: t.disabled,
        class: "og-password__input",
        onInput: l,
        onChange: r[0] || (r[0] = (g) => u.$emit("change", g))
      }, null, 40, nl),
      t.toggleMask ? (o(), s("button", {
        key: 0,
        type: "button",
        class: "og-password__toggle",
        "aria-label": "Toggle Password Visibility",
        onClick: r[1] || (r[1] = (g) => n.value = !n.value)
      }, [
        n.value ? _(u.$slots, "hideicon", {}, () => [
          r[2] || (r[2] = z("👁", -1))
        ], !0, 0) : _(u.$slots, "showicon", {}, () => [
          r[3] || (r[3] = z("👁‍🗨", -1))
        ], !0, 1)
      ])) : m("", !0)
    ], 2));
  }
}), dl = /* @__PURE__ */ I(il, [["__scopeId", "data-v-49678b27"]]), ul = ["onKeydown"], rl = { class: "og-multiselect__label" }, cl = { key: 0 }, gl = {
  key: 1,
  class: "og-multiselect__placeholder"
}, vl = { class: "og-multiselect__list" }, fl = ["onClick"], bl = /* @__PURE__ */ B({
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
  setup(t, { emit: a }) {
    const e = t, n = a, l = D(!1), u = D(null), r = D(null), g = D({}), i = (c) => {
      if (typeof c == "object" && c !== null) {
        if (e.optionLabel) return c[e.optionLabel];
        if ("label" in c) return c.label;
      }
      return String(c);
    }, d = (c) => {
      if (typeof c == "object" && c !== null) {
        if (e.optionValue) return c[e.optionValue];
        if ("value" in c) return c.value;
      }
      return c;
    }, f = (c) => {
      const k = d(c);
      return e.modelValue.includes(k);
    }, h = y(() => e.options.filter((c) => f(c)).map((c) => i(c))), b = (c) => {
      const k = d(c);
      let O = [...e.modelValue];
      O.includes(k) ? O = O.filter((S) => S !== k) : O.push(k), n("update:modelValue", O), n("change", O);
    }, p = () => {
      if (!u.value) return;
      const c = u.value.getBoundingClientRect();
      g.value = {
        position: "absolute",
        top: `${c.bottom + window.scrollY + 4}px`,
        left: `${c.left + window.scrollX}px`,
        width: `${c.width}px`,
        zIndex: "var(--og-z-dropdown)"
      };
    }, w = () => {
      e.disabled || (l.value = !l.value, l.value && se(p));
    }, T = (c) => {
      u.value && !u.value.contains(c.target) && r.value && !r.value.contains(c.target) && (l.value = !1);
    };
    return X(l, (c) => {
      c ? (window.addEventListener("resize", p), window.addEventListener("scroll", p, !0)) : (window.removeEventListener("resize", p), window.removeEventListener("scroll", p, !0));
    }), ce(() => {
      document.addEventListener("click", T);
    }), te(() => {
      document.removeEventListener("click", T), window.removeEventListener("resize", p), window.removeEventListener("scroll", p, !0);
    }), (c, k) => (o(), s("div", {
      ref_key: "containerRef",
      ref: u,
      class: $(["og-multiselect", { "og-multiselect--disabled": t.disabled }])
    }, [
      v("div", {
        class: "og-multiselect__trigger",
        tabindex: "0",
        onClick: w,
        onKeydown: Y(A(w, ["prevent"]), ["enter"])
      }, [
        v("div", rl, [
          h.value.length > 0 ? (o(), s("span", cl, V(h.value.join(", ")), 1)) : (o(), s("span", gl, V(t.placeholder), 1))
        ]),
        k[0] || (k[0] = v("span", { class: "og-multiselect__icon" }, "▼", -1))
      ], 40, ul),
      (o(), U(le, { to: "body" }, [
        l.value ? (o(), s("div", {
          key: 0,
          ref_key: "overlayRef",
          ref: r,
          class: "og-multiselect__overlay",
          style: q(g.value)
        }, [
          v("ul", vl, [
            (o(!0), s(R, null, N(t.options, (O, S) => (o(), s("li", {
              key: S,
              class: $(["og-multiselect__option", { "og-multiselect__option--selected": f(O) }]),
              onClick: (x) => b(O)
            }, [
              _e(ye, {
                "model-value": f(O),
                binary: "",
                style: { "pointer-events": "none" }
              }, null, 8, ["model-value"]),
              v("span", null, V(i(O)), 1)
            ], 10, fl))), 128))
          ])
        ], 4)) : m("", !0)
      ]))
    ], 2));
  }
}), pl = /* @__PURE__ */ I(bl, [["__scopeId", "data-v-e3015372"]]), ml = ["aria-expanded", "onKeydown"], _l = {
  key: 0,
  class: "og-datepicker__value"
}, hl = {
  key: 1,
  class: "og-datepicker__placeholder"
}, yl = { class: "og-datepicker__icons" }, $l = { class: "og-datepicker__header" }, kl = { class: "og-datepicker__title" }, wl = { class: "og-datepicker__month-name" }, Ol = { class: "og-datepicker__year-name" }, Cl = { class: "og-datepicker__weekdays" }, Vl = { class: "og-datepicker__days-grid" }, Bl = ["disabled", "onClick"], Il = { class: "og-datepicker__footer" }, Dl = /* @__PURE__ */ B({
  name: "OgDatePicker",
  __name: "OgDatePicker",
  props: {
    modelValue: { default: null },
    placeholder: { default: "Select a date" },
    disabled: { type: Boolean, default: !1 },
    invalid: { type: Boolean, default: !1 },
    fluid: { type: Boolean, default: !1 },
    size: {},
    showClear: { type: Boolean, default: !0 },
    minDate: {},
    maxDate: {}
  },
  emits: ["update:modelValue", "change"],
  setup(t, { emit: a }) {
    const e = t, n = a, l = D(!1), u = D(null), r = D(null), g = D({}), i = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"], d = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ], f = (C) => {
      if (!C) return null;
      if (C instanceof Date) return isNaN(C.getTime()) ? null : C;
      const M = String(C).split("-");
      if (M.length === 3) {
        const ae = parseInt(M[0], 10), ue = parseInt(M[1], 10) - 1, ge = parseInt(M[2], 10), re = new Date(ae, ue, ge);
        return isNaN(re.getTime()) ? null : re;
      }
      const K = new Date(C);
      return isNaN(K.getTime()) ? null : K;
    }, h = y(() => f(e.modelValue)), b = D(/* @__PURE__ */ new Date());
    X(
      h,
      (C) => {
        C && (b.value = new Date(C.getFullYear(), C.getMonth(), 1));
      },
      { immediate: !0 }
    );
    const p = y(() => b.value.getFullYear()), w = y(() => b.value.getMonth()), T = y(() => {
      const C = h.value;
      if (!C) return "";
      const M = C.getFullYear(), K = String(C.getMonth() + 1).padStart(2, "0"), ae = String(C.getDate()).padStart(2, "0");
      return `${M}-${K}-${ae}`;
    }), c = () => {
      b.value = new Date(p.value, w.value - 1, 1);
    }, k = () => {
      b.value = new Date(p.value, w.value + 1, 1);
    }, O = (C, M) => C.getFullYear() === M.getFullYear() && C.getMonth() === M.getMonth() && C.getDate() === M.getDate(), S = (C) => h.value ? O(C, h.value) : !1, x = (C) => !!(e.minDate && C < new Date(e.minDate.getFullYear(), e.minDate.getMonth(), e.minDate.getDate()) || e.maxDate && C > new Date(e.maxDate.getFullYear(), e.maxDate.getMonth(), e.maxDate.getDate())), E = y(() => {
      const C = p.value, M = w.value, K = /* @__PURE__ */ new Date(), ae = new Date(C, M, 1), ue = new Date(C, M + 1, 0), ge = (ae.getDay() + 6) % 7, re = ue.getDate(), ne = [], $e = new Date(C, M, 0).getDate();
      for (let G = ge - 1; G >= 0; G--) {
        const Z = new Date(C, M - 1, $e - G);
        ne.push({
          date: Z,
          dayNumber: Z.getDate(),
          isCurrentMonth: !1,
          isToday: O(Z, K)
        });
      }
      for (let G = 1; G <= re; G++) {
        const Z = new Date(C, M, G);
        ne.push({
          date: Z,
          dayNumber: G,
          isCurrentMonth: !0,
          isToday: O(Z, K)
        });
      }
      const ke = 42 - ne.length;
      for (let G = 1; G <= ke; G++) {
        const Z = new Date(C, M + 1, G);
        ne.push({
          date: Z,
          dayNumber: G,
          isCurrentMonth: !1,
          isToday: O(Z, K)
        });
      }
      return ne;
    }), j = (C) => {
      x(C) || e.disabled || (n("update:modelValue", C), n("change", C), F());
    }, J = () => {
      const C = /* @__PURE__ */ new Date();
      j(new Date(C.getFullYear(), C.getMonth(), C.getDate()));
    }, Q = () => {
      n("update:modelValue", null), n("change", null);
    }, W = () => {
      if (!u.value) return;
      const C = u.value.getBoundingClientRect();
      g.value = {
        position: "absolute",
        top: `${C.bottom + window.scrollY + 4}px`,
        left: `${C.left + window.scrollX}px`,
        width: "18rem",
        zIndex: "var(--og-z-dropdown)"
      };
    }, L = () => {
      e.disabled || (l.value = !l.value, l.value && (h.value && (b.value = new Date(h.value.getFullYear(), h.value.getMonth(), 1)), se(W)));
    }, F = () => {
      l.value = !1;
    }, H = (C) => {
      u.value && !u.value.contains(C.target) && r.value && !r.value.contains(C.target) && F();
    };
    X(l, (C) => {
      C ? (window.addEventListener("resize", W), window.addEventListener("scroll", W, !0)) : (window.removeEventListener("resize", W), window.removeEventListener("scroll", W, !0));
    }), ce(() => {
      document.addEventListener("click", H);
    }), te(() => {
      document.removeEventListener("click", H), window.removeEventListener("resize", W), window.removeEventListener("scroll", W, !0);
    });
    const de = y(() => [
      "og-datepicker",
      e.size ? `og-datepicker--${e.size}` : "",
      {
        "og-datepicker--open": l.value,
        "og-datepicker--invalid": e.invalid,
        "og-datepicker--disabled": e.disabled,
        "og-datepicker--fluid": e.fluid
      }
    ]);
    return (C, M) => (o(), s("div", {
      ref_key: "containerRef",
      ref: u,
      class: $(de.value)
    }, [
      v("div", {
        class: "og-datepicker__trigger",
        tabindex: "0",
        "aria-expanded": l.value,
        role: "combobox",
        "aria-haspopup": "dialog",
        onClick: L,
        onKeydown: [
          Y(A(L, ["prevent"]), ["enter"]),
          Y(A(L, ["prevent"]), ["space"]),
          Y(F, ["esc"])
        ]
      }, [
        T.value ? (o(), s("span", _l, V(T.value), 1)) : (o(), s("span", hl, V(t.placeholder), 1)),
        v("div", yl, [
          t.showClear && T.value && !t.disabled ? (o(), s("span", {
            key: 0,
            class: "og-datepicker__clear",
            title: "Clear date",
            onClick: A(Q, ["stop"])
          }, " ✕ ")) : m("", !0),
          M[1] || (M[1] = De('<span class="og-datepicker__calendar-icon" data-v-6201130b><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-6201130b><rect x="3" y="4" width="18" height="18" rx="2" ry="2" data-v-6201130b></rect><line x1="16" y1="2" x2="16" y2="6" data-v-6201130b></line><line x1="8" y1="2" x2="8" y2="6" data-v-6201130b></line><line x1="3" y1="10" x2="21" y2="10" data-v-6201130b></line></svg></span>', 1))
        ])
      ], 40, ml),
      (o(), U(le, { to: "body" }, [
        l.value ? (o(), s("div", {
          key: 0,
          ref_key: "overlayRef",
          ref: r,
          class: "og-datepicker__overlay",
          style: q(g.value),
          role: "dialog",
          "aria-modal": "true",
          onClick: M[0] || (M[0] = A(() => {
          }, ["stop"]))
        }, [
          v("div", $l, [
            v("button", {
              type: "button",
              class: "og-datepicker__nav-btn",
              "aria-label": "Previous Month",
              onClick: c
            }, " ‹ "),
            v("div", kl, [
              v("span", wl, V(d[w.value]), 1),
              v("span", Ol, V(p.value), 1)
            ]),
            v("button", {
              type: "button",
              class: "og-datepicker__nav-btn",
              "aria-label": "Next Month",
              onClick: k
            }, " › ")
          ]),
          v("div", Cl, [
            (o(), s(R, null, N(i, (K) => v("span", {
              key: K,
              class: "og-datepicker__weekday"
            }, V(K), 1)), 64))
          ]),
          v("div", Vl, [
            (o(!0), s(R, null, N(E.value, (K, ae) => (o(), s("button", {
              key: ae,
              type: "button",
              class: $([
                "og-datepicker__day",
                {
                  "og-datepicker__day--other-month": !K.isCurrentMonth,
                  "og-datepicker__day--selected": S(K.date),
                  "og-datepicker__day--today": K.isToday,
                  "og-datepicker__day--disabled": x(K.date)
                }
              ]),
              disabled: x(K.date),
              onClick: (ue) => j(K.date)
            }, V(K.dayNumber), 11, Bl))), 128))
          ]),
          v("div", Il, [
            v("button", {
              type: "button",
              class: "og-datepicker__action-btn",
              onClick: J
            }, " Today "),
            T.value ? (o(), s("button", {
              key: 0,
              type: "button",
              class: "og-datepicker__action-btn og-datepicker__action-btn--clear",
              onClick: Q
            }, " Clear ")) : m("", !0)
          ])
        ], 4)) : m("", !0)
      ]))
    ], 2));
  }
}), xl = /* @__PURE__ */ I(Dl, [["__scopeId", "data-v-6201130b"]]), Tl = ["value", "disabled"], Ll = /* @__PURE__ */ B({
  name: "OgColorPicker",
  __name: "OgColorPicker",
  props: {
    modelValue: { default: "#0f172a" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "change"],
  setup(t, { emit: a }) {
    const e = a, n = (l) => {
      const u = l.target;
      e("update:modelValue", u.value), e("change", l);
    };
    return (l, u) => (o(), s("div", {
      class: $(["og-colorpicker", { "og-colorpicker--disabled": t.disabled }])
    }, [
      v("input", {
        type: "color",
        value: t.modelValue,
        disabled: t.disabled,
        class: "og-colorpicker__input",
        onInput: n
      }, null, 40, Tl)
    ], 2));
  }
}), Sl = /* @__PURE__ */ I(Ll, [["__scopeId", "data-v-8b5a7233"]]), zl = {
  class: "og-listbox__list",
  role: "listbox"
}, Ml = ["aria-selected", "onClick"], Rl = /* @__PURE__ */ B({
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
  setup(t, { emit: a }) {
    const e = t, n = a, l = (i) => {
      if (typeof i == "object" && i !== null) {
        if (e.optionLabel) return i[e.optionLabel];
        if ("label" in i) return i.label;
      }
      return String(i);
    }, u = (i) => {
      if (typeof i == "object" && i !== null) {
        if (e.optionValue) return i[e.optionValue];
        if ("value" in i) return i.value;
      }
      return i;
    }, r = (i) => u(i) === e.modelValue, g = (i) => {
      if (e.disabled) return;
      const d = u(i);
      n("update:modelValue", d), n("change", d);
    };
    return (i, d) => (o(), s("div", {
      class: $(["og-listbox", { "og-listbox--disabled": t.disabled }])
    }, [
      v("ul", zl, [
        (o(!0), s(R, null, N(t.options, (f, h) => (o(), s("li", {
          key: h,
          class: $(["og-listbox__option", { "og-listbox__option--selected": r(f) }]),
          role: "option",
          "aria-selected": r(f),
          onClick: (b) => g(f)
        }, [
          _(i.$slots, "option", {
            option: f,
            index: h
          }, () => [
            z(V(l(f)), 1)
          ], !0)
        ], 10, Ml))), 128))
      ])
    ], 2));
  }
}), El = /* @__PURE__ */ I(Rl, [["__scopeId", "data-v-c053ef77"]]), Pl = ["disabled", "onClick"], Al = /* @__PURE__ */ B({
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
  setup(t, { emit: a }) {
    const e = t, n = a, l = (i) => {
      if (typeof i == "object" && i !== null) {
        if (e.optionLabel) return i[e.optionLabel];
        if ("label" in i) return i.label;
      }
      return String(i);
    }, u = (i) => {
      if (typeof i == "object" && i !== null) {
        if (e.optionValue) return i[e.optionValue];
        if ("value" in i) return i.value;
      }
      return i;
    }, r = (i) => {
      const d = u(i);
      return e.multiple ? Array.isArray(e.modelValue) && e.modelValue.includes(d) : e.modelValue === d;
    }, g = (i) => {
      if (e.disabled) return;
      const d = u(i);
      if (e.multiple) {
        let f = Array.isArray(e.modelValue) ? [...e.modelValue] : [];
        f.includes(d) ? f = f.filter((h) => h !== d) : f.push(d), n("update:modelValue", f), n("change", f);
      } else
        n("update:modelValue", d), n("change", d);
    };
    return (i, d) => (o(), s("div", {
      class: $(["og-selectbutton", { "og-selectbutton--disabled": t.disabled }])
    }, [
      (o(!0), s(R, null, N(t.options, (f, h) => (o(), s("button", {
        key: h,
        type: "button",
        class: $(["og-selectbutton__btn", { "og-selectbutton__btn--active": r(f) }]),
        disabled: t.disabled,
        onClick: (b) => g(f)
      }, [
        _(i.$slots, "option", {
          option: f,
          index: h
        }, () => [
          z(V(l(f)), 1)
        ], !0)
      ], 10, Pl))), 128))
    ], 2));
  }
}), Nl = /* @__PURE__ */ I(Al, [["__scopeId", "data-v-42050f87"]]), Kl = ["disabled"], Fl = { class: "og-togglebutton__label" }, jl = /* @__PURE__ */ B({
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
  setup(t, { emit: a }) {
    const e = t, n = a, l = y(() => e.modelValue ? e.onLabel : e.offLabel), u = y(() => e.modelValue ? e.onIcon : e.offIcon), r = (g) => {
      e.disabled || (n("update:modelValue", !e.modelValue), n("change", g));
    };
    return (g, i) => (o(), s("button", {
      type: "button",
      class: $(["og-togglebutton", { "og-togglebutton--checked": t.modelValue, "og-togglebutton--disabled": t.disabled }]),
      disabled: t.disabled,
      onClick: r
    }, [
      u.value ? (o(), s("span", {
        key: 0,
        class: $(["og-togglebutton__icon", u.value])
      }, null, 2)) : m("", !0),
      v("span", Fl, V(l.value), 1)
    ], 10, Kl));
  }
}), Yl = /* @__PURE__ */ I(jl, [["__scopeId", "data-v-bf6a463d"]]), Gl = { class: "og-floatlabel" }, Xl = /* @__PURE__ */ B({
  name: "OgFloatLabel",
  __name: "OgFloatLabel",
  setup(t) {
    return (a, e) => (o(), s("div", Gl, [
      _(a.$slots, "default", {}, void 0, !0)
    ]));
  }
}), Hl = /* @__PURE__ */ I(Xl, [["__scopeId", "data-v-2c438c2c"]]), ql = { class: "og-inputgroup" }, Ul = /* @__PURE__ */ B({
  name: "OgInputGroup",
  __name: "OgInputGroup",
  setup(t) {
    return (a, e) => (o(), s("div", ql, [
      _(a.$slots, "default", {}, void 0, !0)
    ]));
  }
}), Jl = /* @__PURE__ */ I(Ul, [["__scopeId", "data-v-8c486269"]]), Ql = { class: "og-inputgroupaddon" }, Wl = /* @__PURE__ */ B({
  name: "OgInputGroupAddon",
  __name: "OgInputGroupAddon",
  setup(t) {
    return (a, e) => (o(), s("div", Ql, [
      _(a.$slots, "default", {}, void 0, !0)
    ]));
  }
}), Zl = /* @__PURE__ */ I(Wl, [["__scopeId", "data-v-bcac245e"]]), es = { class: "og-panel" }, ts = { class: "og-panel__title" }, as = {
  key: 0,
  type: "button",
  class: "og-panel__toggle",
  "aria-label": "Toggle Panel"
}, os = { class: "og-panel__content" }, ls = {
  key: 1,
  class: "og-panel__footer"
}, ss = /* @__PURE__ */ B({
  name: "OgPanel",
  __name: "OgPanel",
  props: {
    header: {},
    toggleable: { type: Boolean, default: !1 },
    collapsed: { type: Boolean, default: !1 }
  },
  emits: ["update:collapsed", "toggle"],
  setup(t, { emit: a }) {
    const e = t, n = a, l = D(e.collapsed);
    X(
      () => e.collapsed,
      (r) => {
        l.value = r;
      }
    );
    const u = (r) => {
      e.toggleable && (l.value = !l.value, n("update:collapsed", l.value), n("toggle", { originalEvent: new CustomEvent("toggle"), collapsed: l.value }));
    };
    return (r, g) => (o(), s("div", es, [
      t.header || r.$slots.header || t.toggleable ? (o(), s("div", {
        key: 0,
        class: "og-panel__header",
        onClick: g[0] || (g[0] = (i) => t.toggleable && u())
      }, [
        _(r.$slots, "header", {}, () => [
          v("span", ts, V(t.header), 1)
        ], !0),
        t.toggleable ? (o(), s("button", as, V(l.value ? "+" : "−"), 1)) : m("", !0)
      ])) : m("", !0),
      ie(v("div", os, [
        _(r.$slots, "default", {}, void 0, !0)
      ], 512), [
        [fe, !l.value]
      ]),
      r.$slots.footer ? (o(), s("div", ls, [
        _(r.$slots, "footer", {}, void 0, !0)
      ])) : m("", !0)
    ]));
  }
}), ns = /* @__PURE__ */ I(ss, [["__scopeId", "data-v-f1e8c9a5"]]), is = {
  class: "og-toolbar",
  role: "toolbar"
}, ds = {
  key: 0,
  class: "og-toolbar__start"
}, us = {
  key: 1,
  class: "og-toolbar__center"
}, rs = {
  key: 2,
  class: "og-toolbar__end"
}, cs = /* @__PURE__ */ B({
  name: "OgToolbar",
  __name: "OgToolbar",
  setup(t) {
    return (a, e) => (o(), s("div", is, [
      a.$slots.start ? (o(), s("div", ds, [
        _(a.$slots, "start", {}, void 0, !0)
      ])) : m("", !0),
      a.$slots.center ? (o(), s("div", us, [
        _(a.$slots, "center", {}, void 0, !0)
      ])) : m("", !0),
      a.$slots.end ? (o(), s("div", rs, [
        _(a.$slots, "end", {}, void 0, !0)
      ])) : m("", !0)
    ]));
  }
}), gs = /* @__PURE__ */ I(cs, [["__scopeId", "data-v-dbb68d11"]]), vs = /* @__PURE__ */ B({
  name: "OgSplitter",
  __name: "OgSplitter",
  props: {
    layout: { default: "horizontal" }
  },
  setup(t) {
    return (a, e) => (o(), s("div", {
      class: $(["og-splitter", `og-splitter--${t.layout}`])
    }, [
      _(a.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), fs = /* @__PURE__ */ I(vs, [["__scopeId", "data-v-de819503"]]), bs = { class: "og-splitter-panel" }, ps = /* @__PURE__ */ B({
  name: "OgSplitterPanel",
  __name: "OgSplitterPanel",
  setup(t) {
    return (a, e) => (o(), s("div", bs, [
      _(a.$slots, "default", {}, void 0, !0)
    ]));
  }
}), ms = /* @__PURE__ */ I(ps, [["__scopeId", "data-v-802e3f15"]]), _s = {
  class: "og-tree__node",
  role: "treeitem"
}, hs = {
  key: 0,
  class: "og-tree__toggler"
}, ys = {
  key: 1,
  class: "og-tree__toggler-placeholder"
}, $s = { class: "og-tree__label" }, ks = {
  key: 0,
  class: "og-tree__sublist"
}, ws = /* @__PURE__ */ B({
  name: "OgTreeNode",
  __name: "OgTreeNode",
  props: {
    node: {},
    expandedKeys: {}
  },
  emits: ["toggle"],
  setup(t, { emit: a }) {
    const e = t, n = a, l = y(() => e.node.key || e.node.label || ""), u = y(() => !!e.expandedKeys[l.value]), r = () => {
      e.node.children && e.node.children.length > 0 && n("toggle", l.value);
    };
    return (g, i) => {
      const d = xe("OgTreeNode", !0);
      return o(), s("li", _s, [
        v("div", {
          class: "og-tree__content",
          onClick: r
        }, [
          t.node.children && t.node.children.length > 0 ? (o(), s("span", hs, V(u.value ? "▼" : "►"), 1)) : (o(), s("span", ys)),
          t.node.icon ? (o(), s("span", {
            key: 2,
            class: $(["og-tree__icon", t.node.icon])
          }, null, 2)) : m("", !0),
          v("span", $s, V(t.node.label), 1)
        ]),
        t.node.children && t.node.children.length > 0 && u.value ? (o(), s("ul", ks, [
          (o(!0), s(R, null, N(t.node.children, (f) => (o(), U(d, {
            key: f.key || f.label,
            node: f,
            "expanded-keys": t.expandedKeys,
            onToggle: i[0] || (i[0] = (h) => n("toggle", h))
          }, null, 8, ["node", "expanded-keys"]))), 128))
        ])) : m("", !0)
      ]);
    };
  }
}), Os = /* @__PURE__ */ I(ws, [["__scopeId", "data-v-d6b5bfeb"]]), Cs = { class: "og-tree" }, Vs = {
  class: "og-tree__list",
  role: "tree"
}, Bs = /* @__PURE__ */ B({
  name: "OgTree",
  __name: "OgTree",
  props: {
    value: { default: () => [] }
  },
  setup(t) {
    const a = D({}), e = (n) => {
      a.value[n] = !a.value[n];
    };
    return (n, l) => (o(), s("div", Cs, [
      v("ul", Vs, [
        (o(!0), s(R, null, N(t.value, (u) => (o(), U(Os, {
          key: u.key || u.label,
          node: u,
          "expanded-keys": a.value,
          onToggle: e
        }, null, 8, ["node", "expanded-keys"]))), 128))
      ])
    ]));
  }
}), Is = /* @__PURE__ */ I(Bs, [["__scopeId", "data-v-44dcce2c"]]), Ds = { class: "og-stepper" }, xs = { class: "og-stepper__header" }, Ts = ["onClick"], Ls = { class: "og-stepper__number" }, Ss = { class: "og-stepper__title" }, zs = { class: "og-stepper__content" }, Ms = /* @__PURE__ */ B({
  name: "OgStepper",
  __name: "OgStepper",
  props: {
    value: { default: 1 },
    steps: { default: () => ["Step 1", "Step 2", "Step 3"] }
  },
  emits: ["update:value"],
  setup(t, { emit: a }) {
    const e = t, n = a, l = D(e.value);
    X(
      () => e.value,
      (r) => {
        l.value = r;
      }
    );
    const u = (r) => {
      l.value = r, n("update:value", r);
    };
    return ve("ogStepper", { activeStep: l, setStep: u }), (r, g) => (o(), s("div", Ds, [
      v("div", xs, [
        (o(!0), s(R, null, N(t.steps, (i, d) => (o(), s("button", {
          key: d,
          type: "button",
          class: $(["og-stepper__step-btn", { "og-stepper__step-btn--active": l.value === d + 1 }]),
          onClick: (f) => u(d + 1)
        }, [
          v("span", Ls, V(d + 1), 1),
          v("span", Ss, V(i), 1)
        ], 10, Ts))), 128))
      ]),
      v("div", zs, [
        _(r.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), Rs = /* @__PURE__ */ I(Ms, [["__scopeId", "data-v-f1256a42"]]), Es = {
  mounted(t, a) {
    t.setAttribute("title", a.value || "");
  },
  updated(t, a) {
    t.setAttribute("title", a.value || "");
  }
}, Ps = {
  mounted(t) {
    t.style.position = "relative", t.style.overflow = "hidden";
  }
};
function Ks(t = {}) {
  const a = D(t.visible ?? !1), e = () => {
    a.value = !0;
  }, n = () => {
    a.value = !1, t.onClose && t.onClose();
  };
  return {
    isVisible: a,
    open: e,
    close: n,
    toggle: () => {
      a.value ? n() : e();
    }
  };
}
const As = {
  OgButton: ze,
  OgInputText: Ee,
  OgTextarea: Ne,
  OgCheckbox: ye,
  OgRadioButton: Ue,
  OgToggleSwitch: et,
  OgInputNumber: ct,
  OgSelect: Bt,
  OgCard: Mt,
  OgDialog: Kt,
  OgToast: Zt,
  OgDataTable: ya,
  OgColumn: $a,
  OgAvatar: Ca,
  OgBadge: Ba,
  OgProgressBar: La,
  OgSkeleton: za,
  OgDivider: Ea,
  OgAccordion: Na,
  OgAccordionTab: Xa,
  OgTabs: Za,
  OgTabPanel: ao,
  OgTag: so,
  OgChip: co,
  OgMessage: yo,
  OgDrawer: Vo,
  OgSlider: xo,
  OgRating: zo,
  OgInputOtp: Eo,
  OgMenu: jo,
  OgBreadcrumb: el,
  OgAutoComplete: sl,
  OgPassword: dl,
  OgMultiSelect: pl,
  OgDatePicker: xl,
  OgColorPicker: Sl,
  OgListbox: El,
  OgSelectButton: Nl,
  OgToggleButton: Yl,
  OgFloatLabel: Hl,
  OgInputGroup: Jl,
  OgInputGroupAddon: Zl,
  OgPanel: ns,
  OgToolbar: gs,
  OgSplitter: fs,
  OgSplitterPanel: ms,
  OgTree: Is,
  OgStepper: Rs
}, Fs = {
  install(t) {
    Object.entries(As).forEach(([a, e]) => {
      t.component(a, e);
    }), t.directive("og-tooltip", Es), t.directive("og-ripple", Ps);
  }
};
export {
  Na as OgAccordion,
  Xa as OgAccordionTab,
  sl as OgAutoComplete,
  Ca as OgAvatar,
  Ba as OgBadge,
  el as OgBreadcrumb,
  ze as OgButton,
  Mt as OgCard,
  ye as OgCheckbox,
  co as OgChip,
  Sl as OgColorPicker,
  $a as OgColumn,
  ya as OgDataTable,
  xl as OgDatePicker,
  Kt as OgDialog,
  Ea as OgDivider,
  Vo as OgDrawer,
  Hl as OgFloatLabel,
  Jl as OgInputGroup,
  Zl as OgInputGroupAddon,
  ct as OgInputNumber,
  Eo as OgInputOtp,
  Ee as OgInputText,
  El as OgListbox,
  jo as OgMenu,
  yo as OgMessage,
  pl as OgMultiSelect,
  ns as OgPanel,
  dl as OgPassword,
  La as OgProgressBar,
  Ue as OgRadioButton,
  zo as OgRating,
  Bt as OgSelect,
  Nl as OgSelectButton,
  za as OgSkeleton,
  xo as OgSlider,
  fs as OgSplitter,
  ms as OgSplitterPanel,
  Rs as OgStepper,
  ao as OgTabPanel,
  Za as OgTabs,
  so as OgTag,
  Ne as OgTextarea,
  Zt as OgToast,
  Yl as OgToggleButton,
  et as OgToggleSwitch,
  gs as OgToolbar,
  Is as OgTree,
  Os as OgTreeNode,
  Fs as OptimusGUI,
  Fs as default,
  ea as useDataTable,
  Ks as useDialog,
  gt as useSelect,
  Ft as useToast,
  Ps as vOgRipple,
  Es as vOgTooltip
};
