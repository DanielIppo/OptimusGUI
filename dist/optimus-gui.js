import { defineComponent as B, useAttrs as we, computed as y, openBlock as o, createBlock as W, resolveDynamicComponent as be, mergeProps as Oe, withCtx as me, renderSlot as m, createElementBlock as s, normalizeClass as $, createElementVNode as g, createCommentVNode as b, toDisplayString as C, ref as V, watch as J, nextTick as se, onMounted as de, createTextVNode as R, withKeys as H, withModifiers as F, toValue as te, onUnmounted as ee, Teleport as le, unref as j, normalizeStyle as Q, withDirectives as ne, isRef as Ce, vModelText as ve, Fragment as K, renderList as Y, createVNode as _e, TransitionGroup as Ve, useSlots as Be, provide as fe, inject as he, vShow as pe, reactive as Ie, createStaticVNode as xe, resolveComponent as De } from "vue";
const Le = {
  key: 1,
  class: "og-button__icon og-button__spinner og-button__spinner-svg",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Te = {
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
    const a = t, e = we(), n = y(() => typeof a.as == "string" && a.as.toLowerCase() === "button"), l = y(() => a.disabled || a.loading), d = y(() => a.label ? a.badge ? `${a.label} ${a.badge}` : a.label : e["aria-label"] || void 0), r = y(() => (!!a.icon || !!a.loading) && !a.label && !a.badge), c = y(() => {
      const i = a.outlined || a.variant === "outlined", u = a.text || a.variant === "text", v = a.link || a.variant === "link";
      return [
        "og-button",
        a.severity ? `og-button--${a.severity}` : "",
        a.size ? `og-button--${a.size}` : "",
        `og-button--icon-${a.iconPos}`,
        {
          "og-button--outlined": i,
          "og-button--text": u,
          "og-button--link": v,
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
    return (i, u) => t.asChild ? m(i.$slots, "default", {
      class: $(c.value),
      disabled: l.value
    }, void 0, !0, 1) : (o(), W(be(t.as), Oe({
      key: 0,
      type: n.value ? t.type : void 0,
      disabled: l.value,
      "aria-disabled": l.value,
      "aria-label": d.value,
      class: c.value
    }, i.$attrs), {
      default: me(() => [
        m(i.$slots, "default", {}, () => [
          t.loading ? m(i.$slots, "loadingicon", { class: "og-button__icon og-button__spinner" }, () => [
            t.loadingIcon ? (o(), s("span", {
              key: 0,
              class: $(["og-button__icon", "og-button__spinner", t.loadingIcon])
            }, null, 2)) : (o(), s("svg", Le, [...u[0] || (u[0] = [
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
          ], !0, 0) : t.icon || i.$slots.icon ? m(i.$slots, "icon", { class: "og-button__icon" }, () => [
            t.icon ? (o(), s("span", {
              key: 0,
              class: $(["og-button__icon", t.icon, t.iconClass])
            }, null, 2)) : b("", !0)
          ], !0, 1) : b("", !0),
          t.label ? (o(), s("span", Te, C(t.label), 1)) : b("", !0),
          t.badge ? (o(), s("span", {
            key: 3,
            class: $(["og-button__badge", t.badgeSeverity ? `og-button__badge--${t.badgeSeverity}` : "", t.badgeClass])
          }, C(t.badge), 3)) : b("", !0)
        ], !0)
      ]),
      _: 3
    }, 16, ["type", "disabled", "aria-disabled", "aria-label", "class"]));
  }
}), x = (t, a) => {
  const e = t.__vccOpts || t;
  for (const [n, l] of a)
    e[n] = l;
  return e;
}, ze = /* @__PURE__ */ x(Se, [["__scopeId", "data-v-8b7a59cc"]]), Me = ["type", "value", "disabled", "placeholder"], Ee = /* @__PURE__ */ B({
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
    const e = t, n = a, l = (c) => {
      const i = c.target;
      n("update:modelValue", i.value);
    }, d = (c) => {
      n("change", c);
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
    return (c, i) => (o(), s("input", {
      type: t.type,
      value: t.modelValue,
      disabled: t.disabled,
      placeholder: t.placeholder,
      class: $(r.value),
      onInput: l,
      onChange: d,
      onFocus: i[0] || (i[0] = (u) => c.$emit("focus", u)),
      onBlur: i[1] || (i[1] = (u) => c.$emit("blur", u))
    }, null, 42, Me));
  }
}), Re = /* @__PURE__ */ x(Ee, [["__scopeId", "data-v-668f2852"]]), Pe = ["value", "rows", "cols", "disabled", "placeholder"], Ae = /* @__PURE__ */ B({
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
    const e = t, n = a, l = V(null), d = () => {
      e.autoResize && l.value && (l.value.style.height = "auto", l.value.style.height = `${l.value.scrollHeight}px`);
    }, r = (i) => {
      const u = i.target;
      n("update:modelValue", u.value), d();
    };
    J(
      () => e.modelValue,
      () => {
        se(d);
      }
    ), de(() => {
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
    return (i, u) => (o(), s("textarea", {
      ref_key: "textareaRef",
      ref: l,
      value: t.modelValue,
      rows: t.rows,
      cols: t.cols,
      disabled: t.disabled,
      placeholder: t.placeholder,
      class: $(c.value),
      onInput: r,
      onChange: u[0] || (u[0] = (v) => i.$emit("change", v)),
      onFocus: u[1] || (u[1] = (v) => i.$emit("focus", v)),
      onBlur: u[2] || (u[2] = (v) => i.$emit("blur", v))
    }, null, 42, Pe));
  }
}), Ne = /* @__PURE__ */ x(Ae, [["__scopeId", "data-v-5ac57b30"]]), Ke = ["checked", "disabled", "readonly", "name", "value"], Fe = { class: "og-checkbox__box" }, je = {
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
    const e = t, n = a, l = y(() => e.binary ? !!e.modelValue : Array.isArray(e.modelValue) ? e.modelValue.includes(e.value) : e.modelValue === e.value), d = (i) => {
      e.disabled || e.readonly || n("click", i);
    }, r = (i) => {
      if (e.disabled || e.readonly) return;
      let u;
      if (e.binary)
        u = !l.value;
      else if (Array.isArray(e.modelValue)) {
        const v = [...e.modelValue];
        if (l.value) {
          const h = v.indexOf(e.value);
          h !== -1 && v.splice(h, 1);
        } else
          v.push(e.value);
        u = v;
      } else
        u = l.value ? null : e.value;
      n("update:modelValue", u), n("change", i);
    }, c = y(() => [
      "og-checkbox",
      e.size ? `og-checkbox--${e.size}` : "",
      {
        "og-checkbox--checked": l.value,
        "og-checkbox--disabled": e.disabled,
        "og-checkbox--invalid": e.invalid
      }
    ]);
    return (i, u) => (o(), s("div", {
      class: $(c.value),
      onClick: d
    }, [
      g("input", {
        type: "checkbox",
        checked: l.value,
        disabled: t.disabled,
        readonly: t.readonly,
        name: t.name,
        value: t.value,
        class: "og-checkbox__input",
        onFocus: u[0] || (u[0] = (v) => i.$emit("focus", v)),
        onBlur: u[1] || (u[1] = (v) => i.$emit("blur", v)),
        onChange: r
      }, null, 40, Ke),
      g("div", Fe, [
        m(i.$slots, "icon", { checked: l.value }, () => [
          l.value ? (o(), s("svg", je, [...u[2] || (u[2] = [
            g("polyline", { points: "20 6 9 17 4 12" }, null, -1)
          ])])) : b("", !0)
        ], !0)
      ])
    ], 2));
  }
}), ye = /* @__PURE__ */ x(Ye, [["__scopeId", "data-v-898e5709"]]), Ge = ["checked", "disabled", "readonly", "name", "value"], He = { class: "og-radiobutton__box" }, Ue = {
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
    const e = t, n = a, l = y(() => e.modelValue === e.value), d = (c) => {
      e.disabled || e.readonly || (n("update:modelValue", e.value), n("change", c));
    }, r = y(() => [
      "og-radiobutton",
      e.size ? `og-radiobutton--${e.size}` : "",
      {
        "og-radiobutton--checked": l.value,
        "og-radiobutton--disabled": e.disabled,
        "og-radiobutton--invalid": e.invalid
      }
    ]);
    return (c, i) => (o(), s("div", {
      class: $(r.value)
    }, [
      g("input", {
        type: "radio",
        checked: l.value,
        disabled: t.disabled,
        readonly: t.readonly,
        name: t.name,
        value: t.value,
        class: "og-radiobutton__input",
        onFocus: i[0] || (i[0] = (u) => c.$emit("focus", u)),
        onBlur: i[1] || (i[1] = (u) => c.$emit("blur", u)),
        onChange: d
      }, null, 40, Ge),
      g("div", He, [
        l.value ? (o(), s("div", Ue)) : b("", !0)
      ])
    ], 2));
  }
}), Xe = /* @__PURE__ */ x(qe, [["__scopeId", "data-v-640c2086"]]), Je = ["aria-checked", "checked", "disabled", "readonly"], Qe = { class: "og-toggleswitch__slider" }, We = { class: "og-toggleswitch__handle" }, Ze = /* @__PURE__ */ B({
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
    const e = t, n = a, l = (c) => {
      e.disabled || e.readonly || c.stopPropagation();
    }, d = (c) => {
      e.disabled || e.readonly || (n("update:modelValue", !e.modelValue), n("change", c));
    }, r = y(() => [
      "og-toggleswitch",
      e.size ? `og-toggleswitch--${e.size}` : "",
      {
        "og-toggleswitch--checked": e.modelValue,
        "og-toggleswitch--disabled": e.disabled,
        "og-toggleswitch--invalid": e.invalid
      }
    ]);
    return (c, i) => (o(), s("div", {
      class: $(r.value),
      onClick: l
    }, [
      g("input", {
        type: "checkbox",
        role: "switch",
        "aria-checked": t.modelValue,
        checked: t.modelValue,
        disabled: t.disabled,
        readonly: t.readonly,
        class: "og-toggleswitch__input",
        onFocus: i[0] || (i[0] = (u) => c.$emit("focus", u)),
        onBlur: i[1] || (i[1] = (u) => c.$emit("blur", u)),
        onChange: d
      }, null, 40, Je),
      g("div", Qe, [
        g("div", We, [
          m(c.$slots, "handle", { checked: t.modelValue }, void 0, !0)
        ])
      ])
    ], 2));
  }
}), et = /* @__PURE__ */ x(Ze, [["__scopeId", "data-v-a9f76058"]]), tt = ["disabled"], at = { class: "og-inputnumber__input-wrapper" }, ot = {
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
    const e = t, n = a, l = V(null), d = y(() => e.modelValue === null || e.modelValue === void 0 || isNaN(e.modelValue) ? "" : String(e.modelValue)), r = y(() => e.min !== void 0 && e.modelValue !== null && e.modelValue <= e.min), c = y(() => e.max !== void 0 && e.modelValue !== null && e.modelValue >= e.max), i = (p) => {
      if (p === null) return null;
      let w = p;
      return e.min !== void 0 && w < e.min && (w = e.min), e.max !== void 0 && w > e.max && (w = e.max), w;
    }, u = (p) => {
      const w = i(p);
      n("update:modelValue", w), l.value && (l.value.value = w === null ? "" : String(w));
    }, v = () => {
      if (e.disabled) return;
      const p = e.modelValue ?? e.min ?? 0;
      u(p + e.step);
    }, h = () => {
      if (e.disabled) return;
      const p = e.modelValue ?? e.max ?? 0;
      u(p - e.step);
    }, f = (p) => {
      const w = p.target, D = w.value.trim().replace(",", ".");
      if (D === "" || D === "-") {
        n("update:modelValue", null);
        return;
      }
      const E = Number(D);
      isNaN(E) || (e.max !== void 0 && E > e.max ? (w.value = String(e.max), u(e.max)) : n("update:modelValue", E));
    }, _ = (p) => {
      const w = p.target, D = w.value.trim().replace(",", ".");
      if (D !== "") {
        const E = Number(D);
        if (!isNaN(E)) {
          const P = i(E);
          w.value = P === null ? "" : String(P), n("update:modelValue", P);
        }
      }
      n("blur", p);
    }, O = (p) => {
      n("change", p);
    };
    J(
      () => e.modelValue,
      (p) => {
        l.value && document.activeElement !== l.value && (l.value.value = p == null || isNaN(p) ? "" : String(p));
      }
    );
    const S = y(() => [
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
    return (p, w) => (o(), s("div", {
      class: $(S.value)
    }, [
      t.showButtons && t.buttonLayout === "horizontal" ? (o(), s("button", {
        key: 0,
        type: "button",
        tabindex: "-1",
        disabled: t.disabled || r.value,
        class: "og-inputnumber__button og-inputnumber__button--decrement",
        onClick: h
      }, [
        m(p.$slots, "decrementbuttonicon", {}, () => [
          w[1] || (w[1] = R("-", -1))
        ], !0)
      ], 8, tt)) : b("", !0),
      g("div", at, [
        t.prefix ? (o(), s("span", ot, C(t.prefix), 1)) : b("", !0),
        g("input", {
          ref_key: "inputRef",
          ref: l,
          type: "text",
          role: "spinbutton",
          value: d.value,
          disabled: t.disabled,
          "aria-valuenow": t.modelValue ?? void 0,
          "aria-valuemin": t.min,
          "aria-valuemax": t.max,
          placeholder: t.placeholder,
          class: "og-inputnumber__input",
          onInput: f,
          onChange: O,
          onFocus: w[0] || (w[0] = (D) => p.$emit("focus", D)),
          onBlur: _,
          onKeydown: [
            H(F(v, ["prevent"]), ["up"]),
            H(F(h, ["prevent"]), ["down"])
          ]
        }, null, 40, lt),
        t.suffix ? (o(), s("span", st, C(t.suffix), 1)) : b("", !0)
      ]),
      t.showButtons && t.buttonLayout === "stacked" ? (o(), s("div", nt, [
        g("button", {
          type: "button",
          tabindex: "-1",
          disabled: t.disabled || c.value,
          class: "og-inputnumber__button og-inputnumber__button--stacked-up",
          onClick: v
        }, " ▲ ", 8, it),
        g("button", {
          type: "button",
          tabindex: "-1",
          disabled: t.disabled || r.value,
          class: "og-inputnumber__button og-inputnumber__button--stacked-down",
          onClick: h
        }, " ▼ ", 8, dt)
      ])) : b("", !0),
      t.showButtons && t.buttonLayout === "horizontal" ? (o(), s("button", {
        key: 2,
        type: "button",
        tabindex: "-1",
        disabled: t.disabled || c.value,
        class: "og-inputnumber__button og-inputnumber__button--increment",
        onClick: v
      }, [
        m(p.$slots, "incrementbuttonicon", {}, () => [
          w[2] || (w[2] = R("+", -1))
        ], !0)
      ], 8, ut)) : b("", !0)
    ], 2));
  }
}), ct = /* @__PURE__ */ x(rt, [["__scopeId", "data-v-71d20810"]]);
function gt(t) {
  const a = V(!1), e = V(""), n = V(-1), l = (f) => {
    if (typeof f == "object" && f !== null) {
      const _ = te(t.optionLabel);
      if (_ && _ in f) return f[_];
      if ("label" in f) return f.label;
    }
    return String(f ?? "");
  }, d = (f) => {
    if (typeof f == "object" && f !== null) {
      const _ = te(t.optionValue);
      if (_ && _ in f) return f[_];
      if ("value" in f) return f.value;
    }
    return f;
  }, r = (f) => {
    if (typeof f == "object" && f !== null) {
      const _ = te(t.optionDisabled);
      if (_ && _ in f) return !!f[_];
      if ("disabled" in f) return !!f.disabled;
    }
    return !1;
  }, c = y(() => te(t.options) || []), i = y(() => {
    const f = c.value;
    if (!te(t.filter) || !e.value.trim())
      return f;
    const O = e.value.toLowerCase();
    return f.filter((S) => l(S).toLowerCase().includes(O));
  });
  return {
    isOpen: a,
    filterQuery: e,
    focusedIndex: n,
    rawOptions: c,
    filteredOptions: i,
    getOptionLabel: l,
    getOptionValue: d,
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
const vt = { class: "og-select__label" }, ft = { key: 0 }, pt = {
  key: 1,
  class: "og-select__placeholder"
}, bt = { class: "og-select__dropdown-icon" }, mt = {
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
    const e = t, n = a, l = V(null), d = V(null), r = V(null), c = V({}), {
      isOpen: i,
      filterQuery: u,
      filteredOptions: v,
      getOptionLabel: h,
      getOptionValue: f,
      isOptionDisabled: _,
      toggle: O,
      close: S
    } = gt({
      options: () => e.options,
      optionLabel: () => e.optionLabel,
      optionValue: () => e.optionValue,
      optionDisabled: () => e.optionDisabled,
      filter: () => e.filter
    }), p = y(() => e.modelValue === null || e.modelValue === void 0 ? null : (e.options || []).find((A) => f(A) === e.modelValue) ?? e.modelValue), w = y(() => p.value !== null && p.value !== void 0 ? h(p.value) : ""), D = (T) => f(T) === e.modelValue, E = (T) => {
      if (_(T)) return;
      const A = f(T);
      n("update:modelValue", A), n("change", A), S();
    }, P = () => {
      n("update:modelValue", null), n("change", null);
    }, L = () => {
      if (!l.value || !e.overlayTeleport) return;
      const T = l.value.getBoundingClientRect(), A = window.innerHeight - T.bottom < 220 && T.top > 240;
      c.value = {
        position: "fixed",
        ...A ? { bottom: `${window.innerHeight - T.top + 4}px` } : { top: `${T.bottom + 4}px` },
        left: `${T.left}px`,
        width: `${T.width}px`,
        zIndex: "var(--og-z-dropdown, 1150)"
      };
    }, k = () => {
      e.disabled || e.loading || (O(), i.value && se(() => {
        L(), e.filter && r.value && r.value.focus();
      }));
    }, z = (T) => {
      T.key === "Enter" || T.key === " " ? (T.preventDefault(), k()) : T.key === "Escape" && S();
    }, M = (T) => {
      if (!i.value) return;
      const A = T.target;
      A && l.value && !l.value.contains(A) && d.value && !d.value.contains(A) && S();
    };
    J(i, (T) => {
      T ? (window.addEventListener("resize", L), window.addEventListener("scroll", L, !0)) : (window.removeEventListener("resize", L), window.removeEventListener("scroll", L, !0));
    }), de(() => {
      document.addEventListener("pointerdown", M, !0), document.addEventListener("click", M, !0);
    }), ee(() => {
      document.removeEventListener("pointerdown", M, !0), document.removeEventListener("click", M, !0), window.removeEventListener("resize", L), window.removeEventListener("scroll", L, !0);
    });
    const U = y(() => [
      "og-select",
      e.size ? `og-select--${e.size}` : "",
      {
        "og-select--open": i.value,
        "og-select--invalid": e.invalid,
        "og-select--fluid": e.fluid,
        "og-select--disabled": e.disabled
      }
    ]);
    return (T, A) => (o(), s("div", {
      ref_key: "containerRef",
      ref: l,
      class: $(U.value)
    }, [
      g("div", {
        class: "og-select__trigger",
        tabindex: "0",
        onClick: k,
        onKeydown: z
      }, [
        g("div", vt, [
          m(T.$slots, "value", {
            value: p.value,
            placeholder: t.placeholder
          }, () => [
            p.value !== null && p.value !== void 0 ? (o(), s("span", ft, C(w.value), 1)) : (o(), s("span", pt, C(t.placeholder), 1))
          ], !0)
        ]),
        t.showClear && p.value !== null && p.value !== void 0 && !t.disabled ? (o(), s("span", {
          key: 0,
          class: "og-select__clear",
          onClick: F(P, ["stop"])
        }, [
          m(T.$slots, "clearicon", {}, () => [
            A[1] || (A[1] = R("✕", -1))
          ], !0)
        ])) : b("", !0),
        g("span", bt, [
          m(T.$slots, "dropdownicon", {}, () => [
            t.loading ? (o(), s("svg", _t, [...A[3] || (A[3] = [
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
            ])])) : (o(), s("svg", mt, [...A[2] || (A[2] = [
              g("polyline", { points: "6 9 12 15 18 9" }, null, -1)
            ])]))
          ], !0)
        ])
      ], 32),
      (o(), W(le, {
        to: "body",
        disabled: !t.overlayTeleport
      }, [
        j(i) ? (o(), s("div", {
          key: 0,
          ref_key: "overlayRef",
          ref: d,
          class: "og-select__overlay",
          style: Q(c.value)
        }, [
          T.$slots.header ? (o(), s("div", ht, [
            m(T.$slots, "header", {}, void 0, !0)
          ])) : b("", !0),
          t.filter ? (o(), s("div", yt, [
            ne(g("input", {
              ref_key: "filterInputRef",
              ref: r,
              "onUpdate:modelValue": A[0] || (A[0] = (q) => Ce(u) ? u.value = q : null),
              type: "text",
              class: "og-select__filter-input",
              placeholder: t.filterPlaceholder
            }, null, 8, $t), [
              [ve, j(u)]
            ])
          ])) : b("", !0),
          g("ul", kt, [
            (o(!0), s(K, null, Y(j(v), (q, ue) => (o(), s("li", {
              key: ue,
              class: $([
                "og-select__option",
                {
                  "og-select__option--selected": D(q),
                  "og-select__option--disabled": j(_)(q)
                }
              ]),
              role: "option",
              "aria-selected": D(q),
              onClick: (I) => E(q)
            }, [
              m(T.$slots, "option", {
                option: q,
                index: ue
              }, () => [
                R(C(j(h)(q)), 1)
              ], !0)
            ], 10, wt))), 128)),
            j(v).length === 0 ? (o(), s("li", Ot, C(t.emptyMessage), 1)) : b("", !0)
          ]),
          T.$slots.footer ? (o(), s("div", Ct, [
            m(T.$slots, "footer", {}, void 0, !0)
          ])) : b("", !0)
        ], 4)) : b("", !0)
      ], 8, ["disabled"]))
    ], 2));
  }
}), Bt = /* @__PURE__ */ x(Vt, [["__scopeId", "data-v-f5438695"]]), It = {
  key: 0,
  class: "og-card__header"
}, xt = { class: "og-card__body" }, Dt = {
  key: 0,
  class: "og-card__title"
}, Lt = {
  key: 1,
  class: "og-card__subtitle"
}, Tt = {
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
        m(e.$slots, "header", {}, void 0, !0)
      ])) : b("", !0),
      g("div", xt, [
        t.title || e.$slots.title ? (o(), s("div", Dt, [
          m(e.$slots, "title", {}, () => [
            R(C(t.title), 1)
          ], !0)
        ])) : b("", !0),
        t.subtitle || e.$slots.subtitle ? (o(), s("div", Lt, [
          m(e.$slots, "subtitle", {}, () => [
            R(C(t.subtitle), 1)
          ], !0)
        ])) : b("", !0),
        e.$slots.content ? (o(), s("div", Tt, [
          m(e.$slots, "content", {}, void 0, !0)
        ])) : b("", !0),
        e.$slots.footer ? (o(), s("div", St, [
          m(e.$slots, "footer", {}, void 0, !0)
        ])) : b("", !0)
      ])
    ], 2));
  }
}), Mt = /* @__PURE__ */ x(zt, [["__scopeId", "data-v-becb22d8"]]), Et = {
  key: 0,
  class: "og-dialog__header"
}, Rt = { class: "og-dialog__title" }, Pt = { class: "og-dialog__content" }, At = {
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
    const e = t, n = a, l = V(null), d = () => {
      n("update:visible", !1), n("hide");
    }, r = () => {
      e.dismissableMask && d();
    }, c = () => {
      e.closeOnEscape && e.closable && d();
    };
    J(
      () => e.visible,
      (u) => {
        u ? (n("show"), document.body.style.overflow = e.modal ? "hidden" : "") : document.body.style.overflow = "";
      }
    ), ee(() => {
      document.body.style.overflow = "";
    });
    const i = y(() => ["og-dialog"]);
    return (u, v) => (o(), W(le, { to: "body" }, [
      t.visible ? (o(), s("div", {
        key: 0,
        class: $(["og-dialog-mask", { "og-dialog-mask--modal": t.modal }, `og-dialog-mask--${t.position}`]),
        onClick: F(r, ["self"])
      }, [
        g("div", {
          ref_key: "dialogRef",
          ref: l,
          class: $(i.value),
          style: Q(t.style),
          role: "dialog",
          "aria-modal": "true",
          tabindex: "-1",
          onKeydown: H(c, ["esc"])
        }, [
          t.header || u.$slots.header || t.closable ? (o(), s("div", Et, [
            m(u.$slots, "header", {}, () => [
              g("span", Rt, C(t.header), 1)
            ], !0),
            t.closable ? (o(), s("button", {
              key: 0,
              type: "button",
              class: "og-dialog__close",
              "aria-label": "Close",
              onClick: d
            }, [
              m(u.$slots, "closeicon", {}, () => [
                v[0] || (v[0] = R("✕", -1))
              ], !0)
            ])) : b("", !0)
          ])) : b("", !0),
          g("div", Pt, [
            m(u.$slots, "default", {}, void 0, !0)
          ]),
          u.$slots.footer ? (o(), s("div", At, [
            m(u.$slots, "footer", {}, void 0, !0)
          ])) : b("", !0)
        ], 38)
      ], 2)) : b("", !0)
    ]));
  }
}), Kt = /* @__PURE__ */ x(Nt, [["__scopeId", "data-v-592dfff2"]]), oe = V([]);
function Ft() {
  const t = (l) => {
    const d = l.id || Math.random().toString(36).substring(2, 9), r = { ...l, id: d };
    oe.value.push(r), !r.sticky && (r.life || !0) && setTimeout(() => {
      a(d);
    }, r.life || 3e3);
  }, a = (l) => {
    oe.value = oe.value.filter((d) => d.id !== l);
  };
  return {
    messages: oe,
    add: t,
    remove: a,
    removeGroup: (l) => {
      oe.value = oe.value.filter((d) => d.group !== l);
    },
    clear: () => {
      oe.value = [];
    }
  };
}
const jt = { class: "og-toast__icon" }, Yt = { key: 0 }, Gt = { key: 1 }, Ht = { key: 2 }, Ut = { key: 3 }, qt = { class: "og-toast__body" }, Xt = {
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
    const a = t, { messages: e, remove: n } = Ft(), l = y(() => a.group ? e.value.filter((d) => d.group === a.group) : e.value.filter((d) => !d.group));
    return (d, r) => (o(), W(le, { to: "body" }, [
      g("div", {
        class: $(["og-toast-container", `og-toast-container--${t.position}`])
      }, [
        _e(Ve, { name: "og-toast-anim" }, {
          default: me(() => [
            (o(!0), s(K, null, Y(l.value, (c) => (o(), s("div", {
              key: c.id,
              class: $(["og-toast", c.severity ? `og-toast--${c.severity}` : "og-toast--info"])
            }, [
              g("div", jt, [
                m(d.$slots, "icon", { message: c }, () => [
                  c.severity === "success" ? (o(), s("span", Yt, "✓")) : c.severity === "warn" ? (o(), s("span", Gt, "⚠")) : c.severity === "error" ? (o(), s("span", Ht, "✕")) : (o(), s("span", Ut, "ℹ"))
                ], !0)
              ]),
              g("div", qt, [
                c.summary ? (o(), s("div", Xt, C(c.summary), 1)) : b("", !0),
                c.detail ? (o(), s("div", Jt, C(c.detail), 1)) : b("", !0)
              ]),
              c.closable !== !1 ? (o(), s("button", {
                key: 0,
                type: "button",
                class: "og-toast__close",
                "aria-label": "Close",
                onClick: (i) => j(n)(c.id)
              }, " ✕ ", 8, Qt)) : b("", !0)
            ], 2))), 128))
          ]),
          _: 3
        })
      ], 2)
    ]));
  }
}), Zt = /* @__PURE__ */ x(Wt, [["__scopeId", "data-v-965c9c27"]]);
function ea(t) {
  const a = V(0), e = y(() => te(t.rows) || 10), n = V(null), l = V(1), d = V([]), r = y(() => te(t.value) || []), c = y(() => !!te(t.paginator)), i = y(() => r.value.length), u = y(() => {
    const _ = r.value;
    if (!n.value) return _;
    const O = n.value;
    return [..._].sort((S, p) => {
      const w = S[O], D = p[O];
      return w === D ? 0 : w == null ? 1 : D == null ? -1 : w < D ? -1 * l.value : 1 * l.value;
    });
  }), v = y(() => {
    if (!c.value) return u.value;
    const _ = a.value * e.value;
    return u.value.slice(_, _ + e.value);
  });
  return {
    currentPage: a,
    rowsPerPage: e,
    sortField: n,
    sortOrder: l,
    selectedRows: d,
    totalRecords: i,
    paginatedData: v,
    sort: (_) => {
      n.value === _ ? l.value === 1 ? l.value = -1 : (n.value = null, l.value = 1) : (n.value = _, l.value = 1);
    },
    setPage: (_) => {
      a.value = _;
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
}, pa = ["disabled"], ba = ["onClick"], ma = ["disabled"], _a = {
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
      sortOrder: d,
      paginatedData: r,
      sort: c,
      setPage: i
    } = ea({
      value: () => a.value,
      paginator: () => a.paginator,
      rows: () => a.rows
    }), u = y(() => {
      var _;
      const f = a.rows || 10;
      return Math.ceil((((_ = a.value) == null ? void 0 : _.length) || 0) / f);
    }), v = y(() => {
      const f = e.default ? e.default() : [], _ = [], O = (S) => {
        S.forEach((p) => {
          Array.isArray(p.children) && typeof p.type == "symbol" ? O(p.children) : p.props && _.push(p);
        });
      };
      return O(f), _.map((S) => ({
        props: S.props,
        children: S.children
      }));
    }), h = y(() => [
      "og-datatable",
      a.size ? `og-datatable--${a.size}` : "",
      {
        "og-datatable--striped": a.stripedRows,
        "og-datatable--gridlines": a.showGridlines
      }
    ]);
    return (f, _) => (o(), s("div", {
      class: $(h.value)
    }, [
      f.$slots.header ? (o(), s("div", ta, [
        m(f.$slots, "header", {}, void 0, !0)
      ])) : b("", !0),
      g("div", aa, [
        g("table", oa, [
          g("thead", la, [
            g("tr", null, [
              (o(!0), s(K, null, Y(v.value, (O, S) => {
                var p, w, D, E, P, L;
                return o(), s("th", {
                  key: S,
                  style: Q((p = O.props) == null ? void 0 : p.style),
                  class: $([
                    "og-datatable__th",
                    { "og-datatable__th--sortable": (w = O.props) == null ? void 0 : w.sortable }
                  ]),
                  onClick: (k) => {
                    var z, M;
                    return (z = O.props) != null && z.sortable && ((M = O.props) != null && M.field) ? j(c)(O.props.field) : void 0;
                  }
                }, [
                  g("div", na, [
                    g("span", null, C(((D = O.props) == null ? void 0 : D.header) || ((E = O.props) == null ? void 0 : E.field)), 1),
                    (P = O.props) != null && P.sortable && j(l) === ((L = O.props) == null ? void 0 : L.field) ? (o(), s("span", ia, C(j(d) === 1 ? "▲" : "▼"), 1)) : b("", !0)
                  ])
                ], 14, sa);
              }), 128))
            ])
          ]),
          g("tbody", da, [
            t.loading ? (o(), s("tr", ua, [
              g("td", {
                colspan: v.value.length,
                class: "og-datatable__loading-cell"
              }, [
                m(f.$slots, "loading", {}, () => [
                  _[2] || (_[2] = R("Loading data...", -1))
                ], !0)
              ], 8, ra)
            ])) : j(r).length === 0 ? (o(), s("tr", ca, [
              g("td", {
                colspan: v.value.length,
                class: "og-datatable__empty-cell"
              }, [
                m(f.$slots, "empty", {}, () => [
                  _[3] || (_[3] = R("No records found", -1))
                ], !0)
              ], 8, ga)
            ])) : b("", !0),
            (o(!0), s(K, null, Y(j(r), (O, S) => (o(), s("tr", {
              key: t.dataKey ? O[t.dataKey] : S,
              class: "og-datatable__row"
            }, [
              (o(!0), s(K, null, Y(v.value, (p, w) => {
                var D, E, P, L, k;
                return o(), s("td", {
                  key: w,
                  style: Q((D = p.props) == null ? void 0 : D.style),
                  class: "og-datatable__td"
                }, [
                  (E = p.children) != null && E.body ? (o(), W(be((P = p.children) == null ? void 0 : P.body), {
                    key: 0,
                    data: O,
                    index: S,
                    field: (L = p.props) == null ? void 0 : L.field
                  }, null, 8, ["data", "index", "field"])) : (k = p.props) != null && k.field ? (o(), s("span", va, C(O[p.props.field]), 1)) : b("", !0)
                ], 4);
              }), 128))
            ]))), 128))
          ])
        ])
      ]),
      t.paginator && u.value > 1 ? (o(), s("div", fa, [
        g("button", {
          type: "button",
          class: "og-datatable__page-btn",
          disabled: j(n) === 0,
          onClick: _[0] || (_[0] = (O) => j(i)(j(n) - 1))
        }, " ‹ ", 8, pa),
        (o(!0), s(K, null, Y(u.value, (O) => (o(), s("button", {
          key: O,
          class: $(["og-datatable__page-btn", { "og-datatable__page-btn--active": j(n) === O - 1 }]),
          onClick: (S) => j(i)(O - 1)
        }, C(O), 11, ba))), 128)),
        g("button", {
          type: "button",
          class: "og-datatable__page-btn",
          disabled: j(n) >= u.value - 1,
          onClick: _[1] || (_[1] = (O) => j(i)(j(n) + 1))
        }, " › ", 8, ma)
      ])) : b("", !0),
      f.$slots.footer ? (o(), s("div", _a, [
        m(f.$slots, "footer", {}, void 0, !0)
      ])) : b("", !0)
    ], 2));
  }
}), ya = /* @__PURE__ */ x(ha, [["__scopeId", "data-v-899ad77c"]]), $a = /* @__PURE__ */ B({
  name: "OgColumn",
  __name: "OgColumn",
  props: {
    field: {},
    header: {},
    sortable: { type: Boolean },
    style: {}
  },
  setup(t) {
    return (a, e) => m(a.$slots, "default");
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
      m(n.$slots, "default", {}, () => [
        t.image ? (o(), s("img", {
          key: 0,
          src: t.image,
          alt: t.ariaLabel,
          class: "og-avatar__image"
        }, null, 8, ka)) : t.label ? (o(), s("span", wa, C(t.label), 1)) : t.icon ? (o(), s("span", {
          key: 2,
          class: $(["og-avatar__icon", t.icon])
        }, null, 2)) : b("", !0)
      ], !0)
    ], 2));
  }
}), Ca = /* @__PURE__ */ x(Oa, [["__scopeId", "data-v-d897d309"]]), Va = /* @__PURE__ */ B({
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
      m(n.$slots, "default", {}, () => [
        R(C(t.value), 1)
      ], !0)
    ], 2));
  }
}), Ba = /* @__PURE__ */ x(Va, [["__scopeId", "data-v-facd4d33"]]), Ia = ["aria-valuenow"], xa = {
  key: 0,
  class: "og-progressbar__label"
}, Da = {
  key: 1,
  class: "og-progressbar__indeterminate-container"
}, La = /* @__PURE__ */ B({
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
        style: Q({ width: `${e.value}%` })
      }, [
        t.showValue ? (o(), s("span", xa, C(e.value) + C(t.unit), 1)) : b("", !0)
      ], 4)) : (o(), s("div", Da, [...l[0] || (l[0] = [
        g("div", { class: "og-progressbar__indeterminate-bar" }, null, -1)
      ])]))
    ], 10, Ia));
  }
}), Ta = /* @__PURE__ */ x(La, [["__scopeId", "data-v-5bd32dc7"]]), Sa = /* @__PURE__ */ B({
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
    return (l, d) => (o(), s("div", {
      class: $(n.value),
      style: Q(e.value)
    }, null, 6));
  }
}), za = /* @__PURE__ */ x(Sa, [["__scopeId", "data-v-442ac949"]]), Ma = {
  key: 0,
  class: "og-divider__content"
}, Ea = /* @__PURE__ */ B({
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
        m(n.$slots, "default", {}, void 0, !0)
      ])) : b("", !0)
    ], 2));
  }
}), Ra = /* @__PURE__ */ x(Ea, [["__scopeId", "data-v-9409c09c"]]), Pa = { class: "og-accordion" }, Aa = /* @__PURE__ */ B({
  name: "OgAccordion",
  __name: "OgAccordion",
  props: {
    value: { default: null },
    multiple: { type: Boolean, default: !1 }
  },
  emits: ["update:value", "tab-open", "tab-close"],
  setup(t, { emit: a }) {
    const e = t, n = a, l = V(e.value ?? (e.multiple ? [] : null)), d = V([]);
    let r = 0;
    J(
      () => e.value,
      (u) => {
        l.value = u;
      }
    );
    const c = () => {
      const u = r++;
      return d.value.push(u), {
        id: u,
        unregister: () => {
          d.value = d.value.filter((v) => v !== u);
        }
      };
    }, i = (u) => {
      if (e.multiple) {
        let v = Array.isArray(l.value) ? [...l.value] : [];
        v.includes(u) ? (v = v.filter((h) => h !== u), n("tab-close", u)) : (v.push(u), n("tab-open", u)), l.value = v, n("update:value", v);
      } else
        l.value === u ? (l.value = null, n("tab-close", u), n("update:value", null)) : (l.value = u, n("tab-open", u), n("update:value", u));
    };
    return fe("ogAccordion", {
      multiple: e.multiple,
      activeValue: l,
      registeredTabs: d,
      registerTab: c,
      toggleTab: i
    }), (u, v) => (o(), s("div", Pa, [
      m(u.$slots, "default", {}, void 0, !0)
    ]));
  }
}), Na = /* @__PURE__ */ x(Aa, [["__scopeId", "data-v-c67797a3"]]), Ka = ["tabindex"], Fa = { class: "og-accordion-tab__title" }, ja = { class: "og-accordion-tab__toggle-icon" }, Ya = { class: "og-accordion-tab__content" }, Ga = /* @__PURE__ */ B({
  name: "OgAccordionTab",
  __name: "OgAccordionTab",
  props: {
    header: {},
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    const a = t, e = he("ogAccordion", null), n = V(-1);
    let l = null;
    e && (l = e.registerTab(), n.value = l.id), ee(() => {
      l && l.unregister();
    });
    const d = y(() => e ? e.registeredTabs.value.indexOf(n.value) : -1), r = y(() => !e || d.value === -1 ? !1 : e.multiple ? Array.isArray(e.activeValue.value) && e.activeValue.value.includes(d.value) : e.activeValue.value === d.value), c = () => {
      a.disabled || !e || d.value === -1 || e.toggleTab(d.value);
    };
    return (i, u) => (o(), s("div", {
      class: $(["og-accordion-tab", { "og-accordion-tab--active": r.value, "og-accordion-tab--disabled": t.disabled }])
    }, [
      g("div", {
        class: "og-accordion-tab__header",
        role: "button",
        tabindex: t.disabled ? -1 : 0,
        onClick: c
      }, [
        m(i.$slots, "header", {}, () => [
          g("span", Fa, C(t.header), 1)
        ], !0),
        g("span", ja, C(r.value ? "−" : "+"), 1)
      ], 8, Ka),
      ne(g("div", Ya, [
        m(i.$slots, "default", {}, void 0, !0)
      ], 512), [
        [pe, r.value]
      ])
    ], 2));
  }
}), Ha = /* @__PURE__ */ x(Ga, [["__scopeId", "data-v-30d7e376"]]), Ua = { class: "og-tabs" }, qa = { class: "og-tabs__nav-container" }, Xa = {
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
    const e = t, n = a, l = V(e.value), d = V([]);
    let r = 0;
    J(
      () => e.value,
      (u) => {
        l.value = u;
      }
    );
    const c = (u) => {
      const v = r++, h = Ie({ id: v, header: u.header, disabled: u.disabled });
      return d.value.push(h), {
        id: v,
        update: (f) => {
          h.header = f.header, h.disabled = f.disabled;
        },
        unregister: () => {
          d.value = d.value.filter((f) => f.id !== v);
        }
      };
    }, i = (u, v) => {
      v || (l.value = u, n("update:value", u), n("tab-change", u));
    };
    return fe("ogTabs", {
      activeValue: l,
      registeredTabs: d,
      registerTab: c
    }), (u, v) => (o(), s("div", Ua, [
      g("div", qa, [
        g("div", Xa, [
          (o(!0), s(K, null, Y(d.value, (h, f) => (o(), s("button", {
            key: h.id,
            type: "button",
            role: "tab",
            "aria-selected": l.value === f,
            disabled: h.disabled,
            class: $([
              "og-tabs__header",
              {
                "og-tabs__header--active": l.value === f,
                "og-tabs__header--disabled": h.disabled
              }
            ]),
            onClick: (_) => i(f, h.disabled)
          }, [
            g("span", null, C(h.header), 1)
          ], 10, Ja))), 128))
        ])
      ]),
      g("div", Qa, [
        m(u.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), Za = /* @__PURE__ */ x(Wa, [["__scopeId", "data-v-50236a70"]]), eo = {
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
    const a = t, e = he("ogTabs", null), n = V(-1);
    let l = null;
    e && (l = e.registerTab({
      header: a.header,
      disabled: a.disabled
    }), n.value = l.id), J(
      () => [a.header, a.disabled],
      () => {
        l && l.update({ header: a.header, disabled: a.disabled });
      }
    ), ee(() => {
      l && l.unregister();
    });
    const d = y(() => e ? e.registeredTabs.value.findIndex((c) => c.id === n.value) : -1), r = y(() => e ? e.activeValue.value === d.value : !1);
    return (c, i) => ne((o(), s("div", eo, [
      m(c.$slots, "default", {}, void 0, !0)
    ], 512)), [
      [pe, r.value]
    ]);
  }
}), ao = /* @__PURE__ */ x(to, [["__scopeId", "data-v-ea9476c4"]]), oo = { class: "og-tag__value" }, lo = /* @__PURE__ */ B({
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
      m(n.$slots, "icon", {}, () => [
        t.icon ? (o(), s("span", {
          key: 0,
          class: $(["og-tag__icon", t.icon])
        }, null, 2)) : b("", !0)
      ], !0),
      g("span", oo, [
        m(n.$slots, "default", {}, () => [
          R(C(t.value), 1)
        ], !0)
      ])
    ], 2));
  }
}), so = /* @__PURE__ */ x(lo, [["__scopeId", "data-v-0ece605b"]]), no = {
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
    const e = a, n = V(!0), l = (d) => {
      n.value = !1, e("remove", d);
    };
    return (d, r) => n.value ? (o(), s("div", no, [
      m(d.$slots, "icon", {}, () => [
        t.image ? (o(), s("img", {
          key: 0,
          src: t.image,
          alt: "chip avatar",
          class: "og-chip__image"
        }, null, 8, io)) : t.icon ? (o(), s("span", {
          key: 1,
          class: $(["og-chip__icon", t.icon])
        }, null, 2)) : b("", !0)
      ], !0),
      g("span", uo, [
        m(d.$slots, "default", {}, () => [
          R(C(t.label), 1)
        ], !0)
      ]),
      t.removable ? (o(), s("button", {
        key: 0,
        type: "button",
        class: "og-chip__remove",
        "aria-label": "Remove",
        onClick: l
      }, [
        m(d.$slots, "removeicon", {}, () => [
          r[0] || (r[0] = R("✕", -1))
        ], !0)
      ])) : b("", !0)
    ])) : b("", !0);
  }
}), co = /* @__PURE__ */ x(ro, [["__scopeId", "data-v-fc160651"]]), go = { class: "og-message__wrapper" }, vo = { class: "og-message__icon" }, fo = { key: 1 }, po = { key: 2 }, bo = { key: 3 }, mo = { key: 4 }, _o = { class: "og-message__content" }, ho = /* @__PURE__ */ B({
  name: "OgMessage",
  __name: "OgMessage",
  props: {
    severity: { default: "info" },
    closable: { type: Boolean, default: !1 },
    icon: {}
  },
  emits: ["close"],
  setup(t, { emit: a }) {
    const e = t, n = a, l = V(!0), d = (c) => {
      l.value = !1, n("close", c);
    }, r = y(() => [
      "og-message",
      `og-message--${e.severity}`
    ]);
    return (c, i) => l.value ? (o(), s("div", {
      key: 0,
      class: $(r.value),
      role: "alert"
    }, [
      g("div", go, [
        g("span", vo, [
          m(c.$slots, "icon", {}, () => [
            t.icon ? (o(), s("span", {
              key: 0,
              class: $(t.icon)
            }, null, 2)) : t.severity === "success" ? (o(), s("span", fo, "✓")) : t.severity === "warning" ? (o(), s("span", po, "⚠")) : t.severity === "danger" ? (o(), s("span", bo, "✕")) : (o(), s("span", mo, "ℹ"))
          ], !0)
        ]),
        g("div", _o, [
          m(c.$slots, "default", {}, void 0, !0)
        ]),
        t.closable ? (o(), s("button", {
          key: 0,
          type: "button",
          class: "og-message__close",
          "aria-label": "Close",
          onClick: d
        }, [
          m(c.$slots, "closeicon", {}, () => [
            i[0] || (i[0] = R("✕", -1))
          ], !0)
        ])) : b("", !0)
      ])
    ], 2)) : b("", !0);
  }
}), yo = /* @__PURE__ */ x(ho, [["__scopeId", "data-v-40394155"]]), $o = {
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
    }, d = () => {
      e.dismissableMask && l();
    }, r = () => {
      e.closeOnEscape && e.closable && l();
    };
    J(
      () => e.visible,
      (i) => {
        i ? (n("show"), e.modal && (document.body.style.overflow = "hidden")) : document.body.style.overflow = "";
      }
    ), ee(() => {
      document.body.style.overflow = "";
    });
    const c = y(() => [
      "og-drawer",
      `og-drawer--${e.position}`,
      { "og-drawer--fullscreen": e.fullScreen }
    ]);
    return (i, u) => (o(), W(le, { to: "body" }, [
      t.visible ? (o(), s("div", {
        key: 0,
        class: $(["og-drawer-mask", { "og-drawer-mask--modal": t.modal }]),
        onClick: F(d, ["self"])
      }, [
        g("div", {
          class: $(c.value),
          role: "complementary",
          "aria-modal": "true",
          tabindex: "-1",
          onKeydown: H(r, ["esc"])
        }, [
          t.header || i.$slots.header || t.closable ? (o(), s("div", $o, [
            m(i.$slots, "header", {}, () => [
              g("span", ko, C(t.header), 1)
            ], !0),
            t.closable ? (o(), s("button", {
              key: 0,
              type: "button",
              class: "og-drawer__close",
              "aria-label": "Close",
              onClick: l
            }, [
              m(i.$slots, "closeicon", {}, () => [
                u[0] || (u[0] = R("✕", -1))
              ], !0)
            ])) : b("", !0)
          ])) : b("", !0),
          g("div", wo, [
            m(i.$slots, "default", {}, void 0, !0)
          ]),
          i.$slots.footer ? (o(), s("div", Oo, [
            m(i.$slots, "footer", {}, void 0, !0)
          ])) : b("", !0)
        ], 34)
      ], 2)) : b("", !0)
    ]));
  }
}), Vo = /* @__PURE__ */ x(Co, [["__scopeId", "data-v-ed0262d2"]]), Bo = { class: "og-slider__track" }, Io = ["onKeydown"], xo = /* @__PURE__ */ B({
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
    const e = t, n = a, l = V(null), d = y(() => {
      const p = e.max - e.min;
      return p <= 0 ? 0 : (Math.min(e.max, Math.max(e.min, e.modelValue)) - e.min) / p * 100;
    }), r = y(() => e.orientation === "vertical" ? { height: `${d.value}%`, bottom: "0" } : { width: `${d.value}%`, left: "0" }), c = y(() => e.orientation === "vertical" ? { bottom: `${d.value}%`, left: "50%", transform: "translate(-50%, 50%)" } : { left: `${d.value}%`, top: "50%", transform: "translate(-50%, -50%)" }), i = (p) => {
      if (e.disabled) return;
      let w = Math.min(e.max, Math.max(e.min, p));
      n("update:modelValue", w), n("change", w);
    }, u = () => i(e.modelValue + e.step), v = () => i(e.modelValue - e.step), h = (p, w) => {
      if (!l.value || e.disabled) return;
      const D = l.value.getBoundingClientRect();
      let E = 0;
      e.orientation === "vertical" ? E = (D.bottom - w) / D.height : E = (p - D.left) / D.width, E = Math.max(0, Math.min(1, E));
      const P = e.min + E * (e.max - e.min), L = Math.round(P / e.step) * e.step;
      i(L);
    }, f = (p) => {
      const w = "touches" in p ? p.touches[0].clientX : p.clientX, D = "touches" in p ? p.touches[0].clientY : p.clientY;
      h(w, D);
    }, _ = () => {
      window.removeEventListener("mousemove", f), window.removeEventListener("mouseup", _), window.removeEventListener("touchmove", f), window.removeEventListener("touchend", _);
    }, O = (p) => {
      if (e.disabled) return;
      const w = "touches" in p ? p.touches[0].clientX : p.clientX, D = "touches" in p ? p.touches[0].clientY : p.clientY;
      h(w, D), window.addEventListener("mousemove", f), window.addEventListener("mouseup", _), window.addEventListener("touchmove", f), window.addEventListener("touchend", _);
    };
    ee(() => {
      _();
    });
    const S = y(() => [
      "og-slider",
      `og-slider--${e.orientation}`,
      { "og-slider--disabled": e.disabled }
    ]);
    return (p, w) => (o(), s("div", {
      ref_key: "sliderRef",
      ref: l,
      class: $(S.value),
      onMousedown: O,
      onTouchstartPassive: O
    }, [
      g("div", Bo, [
        g("div", {
          class: "og-slider__range",
          style: Q(r.value)
        }, null, 4),
        g("div", {
          class: "og-slider__handle",
          tabindex: "0",
          style: Q(c.value),
          onKeydown: [
            H(F(v, ["prevent"]), ["left"]),
            H(F(v, ["prevent"]), ["down"]),
            H(F(u, ["prevent"]), ["right"]),
            H(F(u, ["prevent"]), ["up"])
          ]
        }, null, 44, Io)
      ])
    ], 34));
  }
}), Do = /* @__PURE__ */ x(xo, [["__scopeId", "data-v-6614aa05"]]), Lo = ["disabled"], To = ["aria-label", "disabled", "onClick"], So = /* @__PURE__ */ B({
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
    }, d = () => {
      e.disabled || e.readonly || (n("update:modelValue", null), n("change", null));
    };
    return (r, c) => (o(), s("div", {
      class: $(["og-rating", { "og-rating--disabled": t.disabled, "og-rating--readonly": t.readonly }])
    }, [
      t.cancel ? (o(), s("button", {
        key: 0,
        type: "button",
        class: "og-rating__cancel",
        "aria-label": "Cancel rating",
        disabled: t.disabled || t.readonly,
        onClick: d
      }, [
        m(r.$slots, "cancelicon", {}, () => [
          c[0] || (c[0] = R("⊘", -1))
        ], !0)
      ], 8, Lo)) : b("", !0),
      (o(!0), s(K, null, Y(t.stars, (i) => (o(), s("button", {
        key: i,
        type: "button",
        class: $(["og-rating__star", { "og-rating__star--active": i <= (t.modelValue ?? 0) }]),
        "aria-label": `Rate ${i} stars`,
        disabled: t.disabled || t.readonly,
        onClick: (u) => l(i)
      }, [
        m(r.$slots, "item", {
          value: i,
          active: i <= (t.modelValue ?? 0)
        }, () => [
          c[1] || (c[1] = R(" ★ ", -1))
        ], !0)
      ], 10, To))), 128))
    ], 2));
  }
}), zo = /* @__PURE__ */ x(So, [["__scopeId", "data-v-74f409df"]]), Mo = ["value", "disabled", "onInput", "onKeydown"], Eo = /* @__PURE__ */ B({
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
    const e = t, n = a, l = V([]), d = y(() => (e.modelValue || "").split("")), r = (v) => {
      const h = v.join("").substring(0, e.length);
      n("update:modelValue", h), n("change", h);
    }, c = (v, h) => {
      let _ = v.target.value;
      e.integerOnly && (_ = _.replace(/\D/g, ""));
      const O = [...d.value];
      O[h] = _, r(O), _ && h < e.length - 1 && l.value[h + 1] && l.value[h + 1].focus();
    }, i = (v, h) => {
      v.key === "Backspace" && !d.value[h] && h > 0 && l.value[h - 1] && l.value[h - 1].focus();
    }, u = (v) => {
      var _, O;
      if (v.preventDefault(), e.disabled) return;
      let f = (((_ = v.clipboardData) == null ? void 0 : _.getData("text")) || "").trim();
      if (e.integerOnly && (f = f.replace(/\D/g, "")), f) {
        const S = f.split("").slice(0, e.length);
        r(S);
        const p = Math.min(S.length, e.length - 1);
        (O = l.value[p]) == null || O.focus();
      }
    };
    return (v, h) => (o(), s("div", {
      class: $(["og-inputotp", { "og-inputotp--disabled": t.disabled }])
    }, [
      (o(!0), s(K, null, Y(t.length, (f) => (o(), s("input", {
        key: f,
        ref_for: !0,
        ref_key: "inputRefs",
        ref: l,
        type: "text",
        maxlength: "1",
        value: d.value[f - 1] || "",
        disabled: t.disabled,
        class: "og-inputotp__input",
        onInput: (_) => c(_, f - 1),
        onKeydown: (_) => i(_, f - 1),
        onPaste: u
      }, null, 40, Mo))), 128))
    ], 2));
  }
}), Ro = /* @__PURE__ */ x(Eo, [["__scopeId", "data-v-1a3402f6"]]), Po = {
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
    const e = t, n = V(!1), l = V(null), d = () => {
      n.value = !n.value;
    }, r = (c, i) => {
      i.disabled || (i.command && i.command({ originalEvent: c, item: i }), e.popup && (n.value = !1));
    };
    return a({
      toggle: d
    }), (c, i) => !t.popup || n.value ? (o(), s("div", {
      key: 0,
      ref_key: "menuRef",
      ref: l,
      class: $(["og-menu", { "og-menu--popup": t.popup }])
    }, [
      g("ul", Po, [
        (o(!0), s(K, null, Y(t.model, (u, v) => (o(), s(K, { key: v }, [
          u.separator ? (o(), s("li", Ao)) : (o(), s("li", {
            key: 1,
            class: $(["og-menu__item", { "og-menu__item--disabled": u.disabled }]),
            role: "menuitem"
          }, [
            g("a", {
              href: u.url || "#",
              class: "og-menu__link",
              onClick: F((h) => r(h, u), ["prevent"])
            }, [
              u.icon ? (o(), s("span", {
                key: 0,
                class: $(["og-menu__icon", u.icon])
              }, null, 2)) : b("", !0),
              g("span", Ko, C(u.label), 1)
            ], 8, No)
          ], 2))
        ], 64))), 128))
      ])
    ], 2)) : b("", !0);
  }
}), jo = /* @__PURE__ */ x(Fo, [["__scopeId", "data-v-9f004ca7"]]), Yo = {
  class: "og-breadcrumb",
  "aria-label": "Breadcrumb"
}, Go = { class: "og-breadcrumb__list" }, Ho = {
  key: 0,
  class: "og-breadcrumb__item"
}, Uo = ["href"], qo = { key: 1 }, Xo = {
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
      g("ol", Go, [
        t.home ? (o(), s("li", Ho, [
          g("a", {
            href: t.home.url || "#",
            class: "og-breadcrumb__link",
            onClick: n[0] || (n[0] = F((l) => a(l, t.home), ["prevent"]))
          }, [
            t.home.icon ? (o(), s("span", {
              key: 0,
              class: $(["og-breadcrumb__icon", t.home.icon])
            }, null, 2)) : b("", !0),
            t.home.label ? (o(), s("span", qo, C(t.home.label), 1)) : b("", !0)
          ], 8, Uo)
        ])) : b("", !0),
        t.home && t.model.length > 0 ? (o(), s("li", Xo, [
          m(e.$slots, "separator", {}, () => [
            n[1] || (n[1] = R("/", -1))
          ], !0)
        ])) : b("", !0),
        (o(!0), s(K, null, Y(t.model, (l, d) => (o(), s(K, { key: d }, [
          g("li", Jo, [
            g("a", {
              href: l.url || "#",
              class: "og-breadcrumb__link",
              onClick: F((r) => a(r, l), ["prevent"])
            }, [
              l.icon ? (o(), s("span", {
                key: 0,
                class: $(["og-breadcrumb__icon", l.icon])
              }, null, 2)) : b("", !0),
              g("span", null, C(l.label), 1)
            ], 8, Qo)
          ]),
          d < t.model.length - 1 ? (o(), s("li", Wo, [
            m(e.$slots, "separator", {}, () => [
              n[2] || (n[2] = R("/", -1))
            ], !0)
          ])) : b("", !0)
        ], 64))), 128))
      ])
    ]));
  }
}), el = /* @__PURE__ */ x(Zo, [["__scopeId", "data-v-86bc2af1"]]), tl = ["placeholder", "disabled", "onKeydown"], al = {
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
    const e = t, n = a, l = V(typeof e.modelValue == "string" ? e.modelValue : ""), d = V(!1), r = V(-1), c = V(null), i = V(null), u = V({}), v = (L) => {
      if (typeof L == "object" && L !== null) {
        if (e.optionLabel) return L[e.optionLabel];
        if ("label" in L) return L.label;
      }
      return String(L);
    }, h = () => {
      if (!c.value) return;
      const L = c.value.getBoundingClientRect();
      u.value = {
        position: "fixed",
        top: `${L.bottom + 4}px`,
        left: `${L.left}px`,
        width: `${L.width}px`,
        zIndex: "var(--og-z-dropdown, 1150)"
      };
    }, f = (L) => {
      d.value = !0, r.value = -1, n("complete", { query: l.value }), n("update:modelValue", l.value), n("change", L), se(h);
    }, _ = (L) => {
      l.value = v(L), n("update:modelValue", L), n("select", L), d.value = !1;
    }, O = () => {
      d.value && r.value < e.suggestions.length - 1 && r.value++;
    }, S = () => {
      d.value && r.value > 0 && r.value--;
    }, p = () => {
      d.value && r.value >= 0 && r.value < e.suggestions.length && _(e.suggestions[r.value]);
    }, w = () => {
      l.value.length > 0 && e.suggestions.length > 0 && (d.value = !0, se(h));
    }, D = () => {
      setTimeout(() => {
        d.value = !1;
      }, 200);
    }, E = (L) => {
      if (!d.value) return;
      const k = L.target;
      k && c.value && !c.value.contains(k) && i.value && !i.value.contains(k) && (d.value = !1);
    };
    de(() => {
      document.addEventListener("pointerdown", E, !0), document.addEventListener("click", E, !0);
    }), ee(() => {
      document.removeEventListener("pointerdown", E, !0), document.removeEventListener("click", E, !0);
    });
    const P = y(() => [
      "og-autocomplete",
      e.size ? `og-autocomplete--${e.size}` : "",
      { "og-autocomplete--disabled": e.disabled }
    ]);
    return (L, k) => (o(), s("div", {
      ref_key: "containerRef",
      ref: c,
      class: $(P.value)
    }, [
      ne(g("input", {
        "onUpdate:modelValue": k[0] || (k[0] = (z) => l.value = z),
        type: "text",
        placeholder: t.placeholder,
        disabled: t.disabled,
        class: "og-autocomplete__input",
        onInput: f,
        onFocus: w,
        onBlur: D,
        onKeydown: [
          H(F(O, ["prevent"]), ["down"]),
          H(F(S, ["prevent"]), ["up"]),
          H(F(p, ["prevent"]), ["enter"])
        ]
      }, null, 40, tl), [
        [ve, l.value]
      ]),
      (o(), W(le, { to: "body" }, [
        d.value && t.suggestions.length > 0 ? (o(), s("div", {
          key: 0,
          ref_key: "overlayRef",
          ref: i,
          class: "og-autocomplete__overlay",
          style: Q(u.value)
        }, [
          g("ul", al, [
            (o(!0), s(K, null, Y(t.suggestions, (z, M) => (o(), s("li", {
              key: M,
              class: $(["og-autocomplete__item", { "og-autocomplete__item--focused": r.value === M }]),
              role: "option",
              onClick: (U) => _(z)
            }, [
              m(L.$slots, "option", {
                item: z,
                index: M
              }, () => [
                R(C(v(z)), 1)
              ], !0)
            ], 10, ol))), 128))
          ])
        ], 4)) : b("", !0)
      ]))
    ], 2));
  }
}), sl = /* @__PURE__ */ x(ll, [["__scopeId", "data-v-03b3cc88"]]), nl = ["type", "value", "placeholder", "disabled"], il = /* @__PURE__ */ B({
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
    const e = a, n = V(!1), l = (d) => {
      const r = d.target;
      e("update:modelValue", r.value);
    };
    return (d, r) => (o(), s("div", {
      class: $(["og-password", { "og-password--invalid": t.invalid, "og-password--disabled": t.disabled }])
    }, [
      g("input", {
        type: n.value ? "text" : "password",
        value: t.modelValue,
        placeholder: t.placeholder,
        disabled: t.disabled,
        class: "og-password__input",
        onInput: l,
        onChange: r[0] || (r[0] = (c) => d.$emit("change", c))
      }, null, 40, nl),
      t.toggleMask ? (o(), s("button", {
        key: 0,
        type: "button",
        class: "og-password__toggle",
        "aria-label": "Toggle Password Visibility",
        onClick: r[1] || (r[1] = (c) => n.value = !n.value)
      }, [
        n.value ? m(d.$slots, "hideicon", {}, () => [
          r[2] || (r[2] = R("👁", -1))
        ], !0, 0) : m(d.$slots, "showicon", {}, () => [
          r[3] || (r[3] = R("👁‍🗨", -1))
        ], !0, 1)
      ])) : b("", !0)
    ], 2));
  }
}), dl = /* @__PURE__ */ x(il, [["__scopeId", "data-v-49678b27"]]), ul = ["onKeydown"], rl = { class: "og-multiselect__label" }, cl = { key: 0 }, gl = {
  key: 1,
  class: "og-multiselect__placeholder"
}, vl = { class: "og-multiselect__actions" }, fl = { class: "og-multiselect__icon" }, pl = {
  key: 0,
  class: "og-multiselect__header"
}, bl = {
  key: 1,
  class: "og-multiselect__filter-container"
}, ml = ["placeholder"], _l = {
  class: "og-multiselect__list",
  role: "listbox",
  "aria-multiselectable": "true"
}, hl = ["aria-selected", "onClick"], yl = {
  key: 0,
  class: "og-multiselect__empty"
}, $l = {
  key: 2,
  class: "og-multiselect__footer"
}, kl = /* @__PURE__ */ B({
  name: "OgMultiSelect",
  __name: "OgMultiSelect",
  props: {
    modelValue: { default: () => [] },
    options: { default: () => [] },
    optionLabel: {},
    optionValue: {},
    placeholder: { default: "Select items" },
    filter: { type: Boolean, default: !1 },
    filterPlaceholder: { default: "Search..." },
    emptyMessage: { default: "No options found" },
    showClear: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    invalid: { type: Boolean, default: !1 },
    fluid: { type: Boolean, default: !1 },
    size: {}
  },
  emits: ["update:modelValue", "change"],
  setup(t, { emit: a }) {
    const e = t, n = a, l = V(!1), d = V(""), r = V(null), c = V(null), i = V(null), u = V({}), v = (k) => {
      if (typeof k == "object" && k !== null) {
        if (e.optionLabel) return k[e.optionLabel];
        if ("label" in k) return k.label;
      }
      return String(k);
    }, h = (k) => {
      if (typeof k == "object" && k !== null) {
        if (e.optionValue) return k[e.optionValue];
        if ("value" in k) return k.value;
      }
      return k;
    }, f = (k) => {
      const z = h(k);
      return (e.modelValue || []).includes(z);
    }, _ = y(() => {
      const k = e.options || [];
      if (!e.filter || !d.value.trim())
        return k;
      const z = d.value.toLowerCase().trim();
      return k.filter((M) => v(M).toLowerCase().includes(z));
    }), O = y(() => (e.options || []).filter((k) => f(k)).map((k) => v(k))), S = (k) => {
      if (e.disabled) return;
      const z = h(k);
      let M = [...e.modelValue || []];
      M.includes(z) ? M = M.filter((U) => U !== z) : M.push(z), n("update:modelValue", M), n("change", M);
    }, p = () => {
      n("update:modelValue", []), n("change", []);
    }, w = () => {
      if (!r.value) return;
      const k = r.value.getBoundingClientRect(), z = window.innerHeight - k.bottom < 220 && k.top > 240;
      u.value = {
        position: "fixed",
        ...z ? { bottom: `${window.innerHeight - k.top + 4}px` } : { top: `${k.bottom + 4}px` },
        left: `${k.left}px`,
        width: `${k.width}px`,
        zIndex: "var(--og-z-dropdown, 1150)"
      };
    }, D = () => {
      e.disabled || (l.value = !l.value, l.value ? se(() => {
        w(), e.filter && i.value && i.value.focus();
      }) : d.value = "");
    }, E = () => {
      l.value = !1, d.value = "";
    }, P = (k) => {
      if (!l.value) return;
      const z = k.target;
      z && r.value && !r.value.contains(z) && c.value && !c.value.contains(z) && E();
    };
    J(l, (k) => {
      k ? (window.addEventListener("resize", w), window.addEventListener("scroll", w, !0)) : (window.removeEventListener("resize", w), window.removeEventListener("scroll", w, !0));
    }), de(() => {
      document.addEventListener("pointerdown", P, !0), document.addEventListener("click", P, !0);
    }), ee(() => {
      document.removeEventListener("pointerdown", P, !0), document.removeEventListener("click", P, !0), window.removeEventListener("resize", w), window.removeEventListener("scroll", w, !0);
    });
    const L = y(() => [
      "og-multiselect",
      e.size ? `og-multiselect--${e.size}` : "",
      {
        "og-multiselect--open": l.value,
        "og-multiselect--invalid": e.invalid,
        "og-multiselect--fluid": e.fluid,
        "og-multiselect--disabled": e.disabled
      }
    ]);
    return (k, z) => (o(), s("div", {
      ref_key: "containerRef",
      ref: r,
      class: $(L.value)
    }, [
      g("div", {
        class: "og-multiselect__trigger",
        tabindex: "0",
        onClick: D,
        onKeydown: [
          H(F(D, ["prevent"]), ["enter"]),
          H(F(D, ["prevent"]), ["space"]),
          H(E, ["esc"])
        ]
      }, [
        g("div", rl, [
          m(k.$slots, "value", {
            value: t.modelValue,
            placeholder: t.placeholder
          }, () => [
            O.value.length > 0 ? (o(), s("span", cl, C(O.value.join(", ")), 1)) : (o(), s("span", gl, C(t.placeholder), 1))
          ], !0)
        ]),
        g("div", vl, [
          t.showClear && t.modelValue && t.modelValue.length > 0 && !t.disabled ? (o(), s("span", {
            key: 0,
            class: "og-multiselect__clear",
            title: "Clear selection",
            onClick: F(p, ["stop"])
          }, [
            m(k.$slots, "clearicon", {}, () => [
              z[1] || (z[1] = R("✕", -1))
            ], !0)
          ])) : b("", !0),
          g("span", fl, [
            m(k.$slots, "dropdownicon", {}, () => [
              z[2] || (z[2] = g("svg", {
                class: "og-multiselect__chevron",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              }, [
                g("polyline", { points: "6 9 12 15 18 9" })
              ], -1))
            ], !0)
          ])
        ])
      ], 40, ul),
      (o(), W(le, { to: "body" }, [
        l.value ? (o(), s("div", {
          key: 0,
          ref_key: "overlayRef",
          ref: c,
          class: "og-multiselect__overlay",
          style: Q(u.value)
        }, [
          k.$slots.header ? (o(), s("div", pl, [
            m(k.$slots, "header", {}, void 0, !0)
          ])) : b("", !0),
          t.filter ? (o(), s("div", bl, [
            ne(g("input", {
              ref_key: "filterInputRef",
              ref: i,
              "onUpdate:modelValue": z[0] || (z[0] = (M) => d.value = M),
              type: "text",
              class: "og-multiselect__filter-input",
              placeholder: t.filterPlaceholder
            }, null, 8, ml), [
              [ve, d.value]
            ])
          ])) : b("", !0),
          g("ul", _l, [
            (o(!0), s(K, null, Y(_.value, (M, U) => (o(), s("li", {
              key: U,
              class: $(["og-multiselect__option", { "og-multiselect__option--selected": f(M) }]),
              role: "option",
              "aria-selected": f(M),
              onClick: (T) => S(M)
            }, [
              _e(ye, {
                "model-value": f(M),
                binary: "",
                style: { "pointer-events": "none" }
              }, null, 8, ["model-value"]),
              g("span", null, C(v(M)), 1)
            ], 10, hl))), 128)),
            _.value.length === 0 ? (o(), s("li", yl, C(t.emptyMessage), 1)) : b("", !0)
          ]),
          k.$slots.footer ? (o(), s("div", $l, [
            m(k.$slots, "footer", {}, void 0, !0)
          ])) : b("", !0)
        ], 4)) : b("", !0)
      ]))
    ], 2));
  }
}), wl = /* @__PURE__ */ x(kl, [["__scopeId", "data-v-36f31872"]]), Ol = ["aria-expanded", "onKeydown"], Cl = {
  key: 0,
  class: "og-datepicker__value"
}, Vl = {
  key: 1,
  class: "og-datepicker__placeholder"
}, Bl = { class: "og-datepicker__icons" }, Il = { class: "og-datepicker__header" }, xl = { class: "og-datepicker__title" }, Dl = { class: "og-datepicker__month-name" }, Ll = { class: "og-datepicker__year-name" }, Tl = { class: "og-datepicker__weekdays" }, Sl = { class: "og-datepicker__days-grid" }, zl = ["disabled", "onClick"], Ml = { class: "og-datepicker__footer" }, El = /* @__PURE__ */ B({
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
    const e = t, n = a, l = V(!1), d = V(null), r = V(null), c = V({}), i = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"], u = [
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
    ], v = (I) => {
      if (!I) return null;
      if (I instanceof Date) return isNaN(I.getTime()) ? null : I;
      const N = String(I).split("-");
      if (N.length === 3) {
        const ae = parseInt(N[0], 10), re = parseInt(N[1], 10) - 1, ge = parseInt(N[2], 10), ce = new Date(ae, re, ge);
        return isNaN(ce.getTime()) ? null : ce;
      }
      const G = new Date(I);
      return isNaN(G.getTime()) ? null : G;
    }, h = y(() => v(e.modelValue)), f = V(/* @__PURE__ */ new Date());
    J(
      h,
      (I) => {
        I && (f.value = new Date(I.getFullYear(), I.getMonth(), 1));
      },
      { immediate: !0 }
    );
    const _ = y(() => f.value.getFullYear()), O = y(() => f.value.getMonth()), S = y(() => {
      const I = h.value;
      if (!I) return "";
      const N = I.getFullYear(), G = String(I.getMonth() + 1).padStart(2, "0"), ae = String(I.getDate()).padStart(2, "0");
      return `${N}-${G}-${ae}`;
    }), p = () => {
      f.value = new Date(_.value, O.value - 1, 1);
    }, w = () => {
      f.value = new Date(_.value, O.value + 1, 1);
    }, D = (I, N) => I.getFullYear() === N.getFullYear() && I.getMonth() === N.getMonth() && I.getDate() === N.getDate(), E = (I) => h.value ? D(I, h.value) : !1, P = (I) => !!(e.minDate && I < new Date(e.minDate.getFullYear(), e.minDate.getMonth(), e.minDate.getDate()) || e.maxDate && I > new Date(e.maxDate.getFullYear(), e.maxDate.getMonth(), e.maxDate.getDate())), L = y(() => {
      const I = _.value, N = O.value, G = /* @__PURE__ */ new Date(), ae = new Date(I, N, 1), re = new Date(I, N + 1, 0), ge = (ae.getDay() + 6) % 7, ce = re.getDate(), ie = [], $e = new Date(I, N, 0).getDate();
      for (let X = ge - 1; X >= 0; X--) {
        const Z = new Date(I, N - 1, $e - X);
        ie.push({
          date: Z,
          dayNumber: Z.getDate(),
          isCurrentMonth: !1,
          isToday: D(Z, G)
        });
      }
      for (let X = 1; X <= ce; X++) {
        const Z = new Date(I, N, X);
        ie.push({
          date: Z,
          dayNumber: X,
          isCurrentMonth: !0,
          isToday: D(Z, G)
        });
      }
      const ke = 42 - ie.length;
      for (let X = 1; X <= ke; X++) {
        const Z = new Date(I, N + 1, X);
        ie.push({
          date: Z,
          dayNumber: X,
          isCurrentMonth: !1,
          isToday: D(Z, G)
        });
      }
      return ie;
    }), k = (I) => {
      P(I) || e.disabled || (n("update:modelValue", I), n("change", I), A());
    }, z = () => {
      const I = /* @__PURE__ */ new Date();
      k(new Date(I.getFullYear(), I.getMonth(), I.getDate()));
    }, M = () => {
      n("update:modelValue", null), n("change", null);
    }, U = () => {
      if (!d.value) return;
      const I = d.value.getBoundingClientRect();
      c.value = {
        position: "fixed",
        top: `${I.bottom + 4}px`,
        left: `${I.left}px`,
        width: "18rem",
        zIndex: "var(--og-z-dropdown, 1150)"
      };
    }, T = () => {
      e.disabled || (l.value = !l.value, l.value && (h.value && (f.value = new Date(h.value.getFullYear(), h.value.getMonth(), 1)), se(U)));
    }, A = () => {
      l.value = !1;
    }, q = (I) => {
      if (!l.value) return;
      const N = I.target;
      N && d.value && !d.value.contains(N) && r.value && !r.value.contains(N) && A();
    };
    J(l, (I) => {
      I ? (window.addEventListener("resize", U), window.addEventListener("scroll", U, !0)) : (window.removeEventListener("resize", U), window.removeEventListener("scroll", U, !0));
    }), de(() => {
      document.addEventListener("pointerdown", q, !0), document.addEventListener("click", q, !0);
    }), ee(() => {
      document.removeEventListener("pointerdown", q, !0), document.removeEventListener("click", q, !0), window.removeEventListener("resize", U), window.removeEventListener("scroll", U, !0);
    });
    const ue = y(() => [
      "og-datepicker",
      e.size ? `og-datepicker--${e.size}` : "",
      {
        "og-datepicker--open": l.value,
        "og-datepicker--invalid": e.invalid,
        "og-datepicker--disabled": e.disabled,
        "og-datepicker--fluid": e.fluid
      }
    ]);
    return (I, N) => (o(), s("div", {
      ref_key: "containerRef",
      ref: d,
      class: $(ue.value)
    }, [
      g("div", {
        class: "og-datepicker__trigger",
        tabindex: "0",
        "aria-expanded": l.value,
        role: "combobox",
        "aria-haspopup": "dialog",
        onClick: T,
        onKeydown: [
          H(F(T, ["prevent"]), ["enter"]),
          H(F(T, ["prevent"]), ["space"]),
          H(A, ["esc"])
        ]
      }, [
        S.value ? (o(), s("span", Cl, C(S.value), 1)) : (o(), s("span", Vl, C(t.placeholder), 1)),
        g("div", Bl, [
          t.showClear && S.value && !t.disabled ? (o(), s("span", {
            key: 0,
            class: "og-datepicker__clear",
            title: "Clear date",
            onClick: F(M, ["stop"])
          }, " ✕ ")) : b("", !0),
          N[0] || (N[0] = xe('<span class="og-datepicker__calendar-icon" data-v-4b221a6c><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-4b221a6c><rect x="3" y="4" width="18" height="18" rx="2" ry="2" data-v-4b221a6c></rect><line x1="16" y1="2" x2="16" y2="6" data-v-4b221a6c></line><line x1="8" y1="2" x2="8" y2="6" data-v-4b221a6c></line><line x1="3" y1="10" x2="21" y2="10" data-v-4b221a6c></line></svg></span>', 1))
        ])
      ], 40, Ol),
      (o(), W(le, { to: "body" }, [
        l.value ? (o(), s("div", {
          key: 0,
          ref_key: "overlayRef",
          ref: r,
          class: "og-datepicker__overlay",
          style: Q(c.value),
          role: "dialog",
          "aria-modal": "true"
        }, [
          g("div", Il, [
            g("button", {
              type: "button",
              class: "og-datepicker__nav-btn",
              "aria-label": "Previous Month",
              onClick: p
            }, " ‹ "),
            g("div", xl, [
              g("span", Dl, C(u[O.value]), 1),
              g("span", Ll, C(_.value), 1)
            ]),
            g("button", {
              type: "button",
              class: "og-datepicker__nav-btn",
              "aria-label": "Next Month",
              onClick: w
            }, " › ")
          ]),
          g("div", Tl, [
            (o(), s(K, null, Y(i, (G) => g("span", {
              key: G,
              class: "og-datepicker__weekday"
            }, C(G), 1)), 64))
          ]),
          g("div", Sl, [
            (o(!0), s(K, null, Y(L.value, (G, ae) => (o(), s("button", {
              key: ae,
              type: "button",
              class: $([
                "og-datepicker__day",
                {
                  "og-datepicker__day--other-month": !G.isCurrentMonth,
                  "og-datepicker__day--selected": E(G.date),
                  "og-datepicker__day--today": G.isToday,
                  "og-datepicker__day--disabled": P(G.date)
                }
              ]),
              disabled: P(G.date),
              onClick: (re) => k(G.date)
            }, C(G.dayNumber), 11, zl))), 128))
          ]),
          g("div", Ml, [
            g("button", {
              type: "button",
              class: "og-datepicker__action-btn",
              onClick: z
            }, " Today "),
            S.value ? (o(), s("button", {
              key: 0,
              type: "button",
              class: "og-datepicker__action-btn og-datepicker__action-btn--clear",
              onClick: M
            }, " Clear ")) : b("", !0)
          ])
        ], 4)) : b("", !0)
      ]))
    ], 2));
  }
}), Rl = /* @__PURE__ */ x(El, [["__scopeId", "data-v-4b221a6c"]]), Pl = ["value", "disabled"], Al = /* @__PURE__ */ B({
  name: "OgColorPicker",
  __name: "OgColorPicker",
  props: {
    modelValue: { default: "#0f172a" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "change"],
  setup(t, { emit: a }) {
    const e = a, n = (l) => {
      const d = l.target;
      e("update:modelValue", d.value), e("change", l);
    };
    return (l, d) => (o(), s("div", {
      class: $(["og-colorpicker", { "og-colorpicker--disabled": t.disabled }])
    }, [
      g("input", {
        type: "color",
        value: t.modelValue,
        disabled: t.disabled,
        class: "og-colorpicker__input",
        onInput: n
      }, null, 40, Pl)
    ], 2));
  }
}), Nl = /* @__PURE__ */ x(Al, [["__scopeId", "data-v-8b5a7233"]]), Kl = {
  class: "og-listbox__list",
  role: "listbox"
}, Fl = ["aria-selected", "onClick"], jl = /* @__PURE__ */ B({
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
    }, d = (i) => {
      if (typeof i == "object" && i !== null) {
        if (e.optionValue) return i[e.optionValue];
        if ("value" in i) return i.value;
      }
      return i;
    }, r = (i) => d(i) === e.modelValue, c = (i) => {
      if (e.disabled) return;
      const u = d(i);
      n("update:modelValue", u), n("change", u);
    };
    return (i, u) => (o(), s("div", {
      class: $(["og-listbox", { "og-listbox--disabled": t.disabled }])
    }, [
      g("ul", Kl, [
        (o(!0), s(K, null, Y(t.options, (v, h) => (o(), s("li", {
          key: h,
          class: $(["og-listbox__option", { "og-listbox__option--selected": r(v) }]),
          role: "option",
          "aria-selected": r(v),
          onClick: (f) => c(v)
        }, [
          m(i.$slots, "option", {
            option: v,
            index: h
          }, () => [
            R(C(l(v)), 1)
          ], !0)
        ], 10, Fl))), 128))
      ])
    ], 2));
  }
}), Yl = /* @__PURE__ */ x(jl, [["__scopeId", "data-v-c053ef77"]]), Gl = ["disabled", "onClick"], Hl = /* @__PURE__ */ B({
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
    }, d = (i) => {
      if (typeof i == "object" && i !== null) {
        if (e.optionValue) return i[e.optionValue];
        if ("value" in i) return i.value;
      }
      return i;
    }, r = (i) => {
      const u = d(i);
      return e.multiple ? Array.isArray(e.modelValue) && e.modelValue.includes(u) : e.modelValue === u;
    }, c = (i) => {
      if (e.disabled) return;
      const u = d(i);
      if (e.multiple) {
        let v = Array.isArray(e.modelValue) ? [...e.modelValue] : [];
        v.includes(u) ? v = v.filter((h) => h !== u) : v.push(u), n("update:modelValue", v), n("change", v);
      } else
        n("update:modelValue", u), n("change", u);
    };
    return (i, u) => (o(), s("div", {
      class: $(["og-selectbutton", { "og-selectbutton--disabled": t.disabled }])
    }, [
      (o(!0), s(K, null, Y(t.options, (v, h) => (o(), s("button", {
        key: h,
        type: "button",
        class: $(["og-selectbutton__btn", { "og-selectbutton__btn--active": r(v) }]),
        disabled: t.disabled,
        onClick: (f) => c(v)
      }, [
        m(i.$slots, "option", {
          option: v,
          index: h
        }, () => [
          R(C(l(v)), 1)
        ], !0)
      ], 10, Gl))), 128))
    ], 2));
  }
}), Ul = /* @__PURE__ */ x(Hl, [["__scopeId", "data-v-42050f87"]]), ql = ["disabled"], Xl = { class: "og-togglebutton__label" }, Jl = /* @__PURE__ */ B({
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
    const e = t, n = a, l = y(() => e.modelValue ? e.onLabel : e.offLabel), d = y(() => e.modelValue ? e.onIcon : e.offIcon), r = (c) => {
      e.disabled || (n("update:modelValue", !e.modelValue), n("change", c));
    };
    return (c, i) => (o(), s("button", {
      type: "button",
      class: $(["og-togglebutton", { "og-togglebutton--checked": t.modelValue, "og-togglebutton--disabled": t.disabled }]),
      disabled: t.disabled,
      onClick: r
    }, [
      d.value ? (o(), s("span", {
        key: 0,
        class: $(["og-togglebutton__icon", d.value])
      }, null, 2)) : b("", !0),
      g("span", Xl, C(l.value), 1)
    ], 10, ql));
  }
}), Ql = /* @__PURE__ */ x(Jl, [["__scopeId", "data-v-bf6a463d"]]), Wl = { class: "og-floatlabel" }, Zl = /* @__PURE__ */ B({
  name: "OgFloatLabel",
  __name: "OgFloatLabel",
  setup(t) {
    return (a, e) => (o(), s("div", Wl, [
      m(a.$slots, "default", {}, void 0, !0)
    ]));
  }
}), es = /* @__PURE__ */ x(Zl, [["__scopeId", "data-v-2c438c2c"]]), ts = { class: "og-inputgroup" }, as = /* @__PURE__ */ B({
  name: "OgInputGroup",
  __name: "OgInputGroup",
  setup(t) {
    return (a, e) => (o(), s("div", ts, [
      m(a.$slots, "default", {}, void 0, !0)
    ]));
  }
}), os = /* @__PURE__ */ x(as, [["__scopeId", "data-v-8c486269"]]), ls = { class: "og-inputgroupaddon" }, ss = /* @__PURE__ */ B({
  name: "OgInputGroupAddon",
  __name: "OgInputGroupAddon",
  setup(t) {
    return (a, e) => (o(), s("div", ls, [
      m(a.$slots, "default", {}, void 0, !0)
    ]));
  }
}), ns = /* @__PURE__ */ x(ss, [["__scopeId", "data-v-bcac245e"]]), is = { class: "og-panel" }, ds = { class: "og-panel__title" }, us = {
  key: 0,
  type: "button",
  class: "og-panel__toggle",
  "aria-label": "Toggle Panel"
}, rs = { class: "og-panel__content" }, cs = {
  key: 1,
  class: "og-panel__footer"
}, gs = /* @__PURE__ */ B({
  name: "OgPanel",
  __name: "OgPanel",
  props: {
    header: {},
    toggleable: { type: Boolean, default: !1 },
    collapsed: { type: Boolean, default: !1 }
  },
  emits: ["update:collapsed", "toggle"],
  setup(t, { emit: a }) {
    const e = t, n = a, l = V(e.collapsed);
    J(
      () => e.collapsed,
      (r) => {
        l.value = r;
      }
    );
    const d = (r) => {
      e.toggleable && (l.value = !l.value, n("update:collapsed", l.value), n("toggle", { originalEvent: new CustomEvent("toggle"), collapsed: l.value }));
    };
    return (r, c) => (o(), s("div", is, [
      t.header || r.$slots.header || t.toggleable ? (o(), s("div", {
        key: 0,
        class: "og-panel__header",
        onClick: c[0] || (c[0] = (i) => t.toggleable && d())
      }, [
        m(r.$slots, "header", {}, () => [
          g("span", ds, C(t.header), 1)
        ], !0),
        t.toggleable ? (o(), s("button", us, C(l.value ? "+" : "−"), 1)) : b("", !0)
      ])) : b("", !0),
      ne(g("div", rs, [
        m(r.$slots, "default", {}, void 0, !0)
      ], 512), [
        [pe, !l.value]
      ]),
      r.$slots.footer ? (o(), s("div", cs, [
        m(r.$slots, "footer", {}, void 0, !0)
      ])) : b("", !0)
    ]));
  }
}), vs = /* @__PURE__ */ x(gs, [["__scopeId", "data-v-f1e8c9a5"]]), fs = {
  class: "og-toolbar",
  role: "toolbar"
}, ps = {
  key: 0,
  class: "og-toolbar__start"
}, bs = {
  key: 1,
  class: "og-toolbar__center"
}, ms = {
  key: 2,
  class: "og-toolbar__end"
}, _s = /* @__PURE__ */ B({
  name: "OgToolbar",
  __name: "OgToolbar",
  setup(t) {
    return (a, e) => (o(), s("div", fs, [
      a.$slots.start ? (o(), s("div", ps, [
        m(a.$slots, "start", {}, void 0, !0)
      ])) : b("", !0),
      a.$slots.center ? (o(), s("div", bs, [
        m(a.$slots, "center", {}, void 0, !0)
      ])) : b("", !0),
      a.$slots.end ? (o(), s("div", ms, [
        m(a.$slots, "end", {}, void 0, !0)
      ])) : b("", !0)
    ]));
  }
}), hs = /* @__PURE__ */ x(_s, [["__scopeId", "data-v-dbb68d11"]]), ys = /* @__PURE__ */ B({
  name: "OgSplitter",
  __name: "OgSplitter",
  props: {
    layout: { default: "horizontal" }
  },
  setup(t) {
    return (a, e) => (o(), s("div", {
      class: $(["og-splitter", `og-splitter--${t.layout}`])
    }, [
      m(a.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), $s = /* @__PURE__ */ x(ys, [["__scopeId", "data-v-de819503"]]), ks = { class: "og-splitter-panel" }, ws = /* @__PURE__ */ B({
  name: "OgSplitterPanel",
  __name: "OgSplitterPanel",
  setup(t) {
    return (a, e) => (o(), s("div", ks, [
      m(a.$slots, "default", {}, void 0, !0)
    ]));
  }
}), Os = /* @__PURE__ */ x(ws, [["__scopeId", "data-v-802e3f15"]]), Cs = {
  class: "og-tree__node",
  role: "treeitem"
}, Vs = {
  key: 0,
  class: "og-tree__toggler"
}, Bs = {
  key: 1,
  class: "og-tree__toggler-placeholder"
}, Is = { class: "og-tree__label" }, xs = {
  key: 0,
  class: "og-tree__sublist"
}, Ds = /* @__PURE__ */ B({
  name: "OgTreeNode",
  __name: "OgTreeNode",
  props: {
    node: {},
    expandedKeys: {}
  },
  emits: ["toggle"],
  setup(t, { emit: a }) {
    const e = t, n = a, l = y(() => e.node.key || e.node.label || ""), d = y(() => !!e.expandedKeys[l.value]), r = () => {
      e.node.children && e.node.children.length > 0 && n("toggle", l.value);
    };
    return (c, i) => {
      const u = De("OgTreeNode", !0);
      return o(), s("li", Cs, [
        g("div", {
          class: "og-tree__content",
          onClick: r
        }, [
          t.node.children && t.node.children.length > 0 ? (o(), s("span", Vs, C(d.value ? "▼" : "►"), 1)) : (o(), s("span", Bs)),
          t.node.icon ? (o(), s("span", {
            key: 2,
            class: $(["og-tree__icon", t.node.icon])
          }, null, 2)) : b("", !0),
          g("span", Is, C(t.node.label), 1)
        ]),
        t.node.children && t.node.children.length > 0 && d.value ? (o(), s("ul", xs, [
          (o(!0), s(K, null, Y(t.node.children, (v) => (o(), W(u, {
            key: v.key || v.label,
            node: v,
            "expanded-keys": t.expandedKeys,
            onToggle: i[0] || (i[0] = (h) => n("toggle", h))
          }, null, 8, ["node", "expanded-keys"]))), 128))
        ])) : b("", !0)
      ]);
    };
  }
}), Ls = /* @__PURE__ */ x(Ds, [["__scopeId", "data-v-d6b5bfeb"]]), Ts = { class: "og-tree" }, Ss = {
  class: "og-tree__list",
  role: "tree"
}, zs = /* @__PURE__ */ B({
  name: "OgTree",
  __name: "OgTree",
  props: {
    value: { default: () => [] }
  },
  setup(t) {
    const a = V({}), e = (n) => {
      a.value[n] = !a.value[n];
    };
    return (n, l) => (o(), s("div", Ts, [
      g("ul", Ss, [
        (o(!0), s(K, null, Y(t.value, (d) => (o(), W(Ls, {
          key: d.key || d.label,
          node: d,
          "expanded-keys": a.value,
          onToggle: e
        }, null, 8, ["node", "expanded-keys"]))), 128))
      ])
    ]));
  }
}), Ms = /* @__PURE__ */ x(zs, [["__scopeId", "data-v-44dcce2c"]]), Es = { class: "og-stepper" }, Rs = { class: "og-stepper__header" }, Ps = ["onClick"], As = { class: "og-stepper__number" }, Ns = { class: "og-stepper__title" }, Ks = { class: "og-stepper__content" }, Fs = /* @__PURE__ */ B({
  name: "OgStepper",
  __name: "OgStepper",
  props: {
    value: { default: 1 },
    steps: { default: () => ["Step 1", "Step 2", "Step 3"] }
  },
  emits: ["update:value"],
  setup(t, { emit: a }) {
    const e = t, n = a, l = V(e.value);
    J(
      () => e.value,
      (r) => {
        l.value = r;
      }
    );
    const d = (r) => {
      l.value = r, n("update:value", r);
    };
    return fe("ogStepper", { activeStep: l, setStep: d }), (r, c) => (o(), s("div", Es, [
      g("div", Rs, [
        (o(!0), s(K, null, Y(t.steps, (i, u) => (o(), s("button", {
          key: u,
          type: "button",
          class: $(["og-stepper__step-btn", { "og-stepper__step-btn--active": l.value === u + 1 }]),
          onClick: (v) => d(u + 1)
        }, [
          g("span", As, C(u + 1), 1),
          g("span", Ns, C(i), 1)
        ], 10, Ps))), 128))
      ]),
      g("div", Ks, [
        m(r.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), js = /* @__PURE__ */ x(Fs, [["__scopeId", "data-v-f1256a42"]]), Ys = {
  mounted(t, a) {
    t.setAttribute("title", a.value || "");
  },
  updated(t, a) {
    t.setAttribute("title", a.value || "");
  }
}, Gs = {
  mounted(t) {
    t.style.position = "relative", t.style.overflow = "hidden";
  }
};
function qs(t = {}) {
  const a = V(t.visible ?? !1), e = () => {
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
const Hs = {
  OgButton: ze,
  OgInputText: Re,
  OgTextarea: Ne,
  OgCheckbox: ye,
  OgRadioButton: Xe,
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
  OgProgressBar: Ta,
  OgSkeleton: za,
  OgDivider: Ra,
  OgAccordion: Na,
  OgAccordionTab: Ha,
  OgTabs: Za,
  OgTabPanel: ao,
  OgTag: so,
  OgChip: co,
  OgMessage: yo,
  OgDrawer: Vo,
  OgSlider: Do,
  OgRating: zo,
  OgInputOtp: Ro,
  OgMenu: jo,
  OgBreadcrumb: el,
  OgAutoComplete: sl,
  OgPassword: dl,
  OgMultiSelect: wl,
  OgDatePicker: Rl,
  OgColorPicker: Nl,
  OgListbox: Yl,
  OgSelectButton: Ul,
  OgToggleButton: Ql,
  OgFloatLabel: es,
  OgInputGroup: os,
  OgInputGroupAddon: ns,
  OgPanel: vs,
  OgToolbar: hs,
  OgSplitter: $s,
  OgSplitterPanel: Os,
  OgTree: Ms,
  OgStepper: js
}, Xs = {
  install(t) {
    Object.entries(Hs).forEach(([a, e]) => {
      t.component(a, e);
    }), t.directive("og-tooltip", Ys), t.directive("og-ripple", Gs);
  }
};
export {
  Na as OgAccordion,
  Ha as OgAccordionTab,
  sl as OgAutoComplete,
  Ca as OgAvatar,
  Ba as OgBadge,
  el as OgBreadcrumb,
  ze as OgButton,
  Mt as OgCard,
  ye as OgCheckbox,
  co as OgChip,
  Nl as OgColorPicker,
  $a as OgColumn,
  ya as OgDataTable,
  Rl as OgDatePicker,
  Kt as OgDialog,
  Ra as OgDivider,
  Vo as OgDrawer,
  es as OgFloatLabel,
  os as OgInputGroup,
  ns as OgInputGroupAddon,
  ct as OgInputNumber,
  Ro as OgInputOtp,
  Re as OgInputText,
  Yl as OgListbox,
  jo as OgMenu,
  yo as OgMessage,
  wl as OgMultiSelect,
  vs as OgPanel,
  dl as OgPassword,
  Ta as OgProgressBar,
  Xe as OgRadioButton,
  zo as OgRating,
  Bt as OgSelect,
  Ul as OgSelectButton,
  za as OgSkeleton,
  Do as OgSlider,
  $s as OgSplitter,
  Os as OgSplitterPanel,
  js as OgStepper,
  ao as OgTabPanel,
  Za as OgTabs,
  so as OgTag,
  Ne as OgTextarea,
  Zt as OgToast,
  Ql as OgToggleButton,
  et as OgToggleSwitch,
  hs as OgToolbar,
  Ms as OgTree,
  Ls as OgTreeNode,
  Xs as OptimusGUI,
  Xs as default,
  ea as useDataTable,
  qs as useDialog,
  gt as useSelect,
  Ft as useToast,
  Gs as vOgRipple,
  Ys as vOgTooltip
};
