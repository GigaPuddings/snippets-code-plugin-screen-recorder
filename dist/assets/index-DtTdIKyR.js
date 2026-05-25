import { i as Ci, w as Nn, l as Tu, a as Ou, b as Iu, c as Ee, d as $u, e as zr, B as Au, h as Vr, f as Sr, g as Ei, j as Pu, k as $e, m as Ru, t as Mu, n as fe, o as Lu, p as xu, q as Nu, r as _e, s as Hr, u as ge, v as Ti, x as ku, N as Pt, y as Du, z as Bu, A as Ae, C as ae, D as A, E as y, F as c, G as Wr, H as Fu, I as Oi, J as cn, K as jr, L as be, M as X, O as zu, P as Ur, Q as xa, R as Qe, S as V, T as D, U as _, V as G, W as Xt, X as R, Y as it, Z as Kr, _ as Vu, $ as Gr, a0 as H, a1 as Ge, a2 as M, a3 as U, a4 as W, a5 as Be, a6 as ee, a7 as Z, a8 as pe, a9 as dt, aa as Ne, ab as Jt, ac as Hu, ad as Wu, ae as ju, af as Ii, ag as Uu, ah as Ku, ai as Gu, aj as qu, ak as gt, al as Yu, am as Zu, an as qr, ao as Xu, ap as on, aq as Ju, ar as Jn, as as Qu, at as ec, au as Qn } from "./runtime-entry-ThV4eVFo.js";
/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Cr;
const Na = typeof window < "u" && window.trustedTypes;
if (Na)
  try {
    Cr = /* @__PURE__ */ Na.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    process.env.NODE_ENV !== "production" && Nn(`Error creating trusted types policy: ${e}`);
  }
const $i = Cr ? (e) => Cr.createHTML(e) : (e) => e, tc = "http://www.w3.org/2000/svg", nc = "http://www.w3.org/1998/Math/MathML", Ot = typeof document < "u" ? document : null, ka = Ot && /* @__PURE__ */ Ot.createElement("template"), oc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const r = t === "svg" ? Ot.createElementNS(tc, e) : t === "mathml" ? Ot.createElementNS(nc, e) : n ? Ot.createElement(e, { is: n }) : Ot.createElement(e);
    return e === "select" && o && o.multiple != null && r.setAttribute("multiple", o.multiple), r;
  },
  createText: (e) => Ot.createTextNode(e),
  createComment: (e) => Ot.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ot.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, o, r, s) {
    const a = n ? n.previousSibling : t.lastChild;
    if (r && (r === s || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === s || !(r = r.nextSibling)); )
        ;
    else {
      ka.innerHTML = $i(
        o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e
      );
      const i = ka.content;
      if (o === "svg" || o === "mathml") {
        const l = i.firstChild;
        for (; l.firstChild; )
          i.appendChild(l.firstChild);
        i.removeChild(l);
      }
      t.insertBefore(i, n);
    }
    return [
      // first
      a ? a.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, Wt = "transition", zn = "animation", eo = Symbol("_vtc"), Ai = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
}, rc = /* @__PURE__ */ zr(
  {},
  Au,
  Ai
), ac = (e) => (e.displayName = "Transition", e.props = rc, e), gn = /* @__PURE__ */ ac(
  (e, { slots: t }) => Ei(Pu, sc(e), t)
), rn = (e, t = []) => {
  Ee(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Da = (e) => e ? Ee(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function sc(e) {
  const t = {};
  for (const P in e)
    P in Ai || (t[P] = e[P]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: o,
    duration: r,
    enterFromClass: s = `${n}-enter-from`,
    enterActiveClass: a = `${n}-enter-active`,
    enterToClass: i = `${n}-enter-to`,
    appearFromClass: l = s,
    appearActiveClass: u = a,
    appearToClass: p = i,
    leaveFromClass: f = `${n}-leave-from`,
    leaveActiveClass: v = `${n}-leave-active`,
    leaveToClass: g = `${n}-leave-to`
  } = e, d = ic(r), h = d && d[0], b = d && d[1], {
    onBeforeEnter: m,
    onEnter: C,
    onEnterCancelled: O,
    onLeave: $,
    onLeaveCancelled: S,
    onBeforeAppear: I = m,
    onAppear: E = C,
    onAppearCancelled: F = O
  } = t, T = (P, j, re, J) => {
    P._enterCancelled = J, an(P, j ? p : i), an(P, j ? u : a), re && re();
  }, z = (P, j) => {
    P._isLeaving = !1, an(P, f), an(P, g), an(P, v), j && j();
  }, N = (P) => (j, re) => {
    const J = P ? E : C, Q = () => T(j, P, re);
    rn(J, [j, Q]), Ba(() => {
      an(j, P ? l : s), Et(j, P ? p : i), Da(J) || Fa(j, o, h, Q);
    });
  };
  return zr(t, {
    onBeforeEnter(P) {
      rn(m, [P]), Et(P, s), Et(P, a);
    },
    onBeforeAppear(P) {
      rn(I, [P]), Et(P, l), Et(P, u);
    },
    onEnter: N(!1),
    onAppear: N(!0),
    onLeave(P, j) {
      P._isLeaving = !0;
      const re = () => z(P, j);
      Et(P, f), P._enterCancelled ? (Et(P, v), Ha()) : (Ha(), Et(P, v)), Ba(() => {
        P._isLeaving && (an(P, f), Et(P, g), Da($) || Fa(P, o, b, re));
      }), rn($, [P, re]);
    },
    onEnterCancelled(P) {
      T(P, !1, void 0, !0), rn(O, [P]);
    },
    onAppearCancelled(P) {
      T(P, !0, void 0, !0), rn(F, [P]);
    },
    onLeaveCancelled(P) {
      z(P), rn(S, [P]);
    }
  });
}
function ic(e) {
  if (e == null)
    return null;
  if ($e(e))
    return [sr(e.enter), sr(e.leave)];
  {
    const t = sr(e);
    return [t, t];
  }
}
function sr(e) {
  const t = Mu(e);
  return process.env.NODE_ENV !== "production" && Ru(t, "<transition> explicit duration"), t;
}
function Et(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[eo] || (e[eo] = /* @__PURE__ */ new Set())).add(t);
}
function an(e, t) {
  t.split(/\s+/).forEach((o) => o && e.classList.remove(o));
  const n = e[eo];
  n && (n.delete(t), n.size || (e[eo] = void 0));
}
function Ba(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let lc = 0;
function Fa(e, t, n, o) {
  const r = e._endId = ++lc, s = () => {
    r === e._endId && o();
  };
  if (n != null)
    return setTimeout(s, n);
  const { type: a, timeout: i, propCount: l } = uc(e, t);
  if (!a)
    return o();
  const u = a + "end";
  let p = 0;
  const f = () => {
    e.removeEventListener(u, v), s();
  }, v = (g) => {
    g.target === e && ++p >= l && f();
  };
  setTimeout(() => {
    p < l && f();
  }, i + 1), e.addEventListener(u, v);
}
function uc(e, t) {
  const n = window.getComputedStyle(e), o = (d) => (n[d] || "").split(", "), r = o(`${Wt}Delay`), s = o(`${Wt}Duration`), a = za(r, s), i = o(`${zn}Delay`), l = o(`${zn}Duration`), u = za(i, l);
  let p = null, f = 0, v = 0;
  t === Wt ? a > 0 && (p = Wt, f = a, v = s.length) : t === zn ? u > 0 && (p = zn, f = u, v = l.length) : (f = Math.max(a, u), p = f > 0 ? a > u ? Wt : zn : null, v = p ? p === Wt ? s.length : l.length : 0);
  const g = p === Wt && /\b(transform|all)(,|$)/.test(
    o(`${Wt}Property`).toString()
  );
  return {
    type: p,
    timeout: f,
    propCount: v,
    hasTransform: g
  };
}
function za(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, o) => Va(n) + Va(e[o])));
}
function Va(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Ha() {
  return document.body.offsetHeight;
}
function cc(e, t, n) {
  const o = e[eo];
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Po = Symbol("_vod"), Pi = Symbol("_vsh"), ut = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[Po] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Vn(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: o }) {
    !t != !n && (o ? t ? (o.beforeEnter(e), Vn(e, !0), o.enter(e)) : o.leave(e, () => {
      Vn(e, !1);
    }) : Vn(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Vn(e, t);
  }
};
process.env.NODE_ENV !== "production" && (ut.name = "show");
function Vn(e, t) {
  e.style.display = t ? e[Po] : "none", e[Pi] = !t;
}
const dc = Symbol(process.env.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), fc = /(^|;)\s*display\s*:/;
function pc(e, t, n) {
  const o = e.style, r = _e(n);
  let s = !1;
  if (n && !r) {
    if (t)
      if (_e(t))
        for (const a of t.split(";")) {
          const i = a.slice(0, a.indexOf(":")).trim();
          n[i] == null && Oo(o, i, "");
        }
      else
        for (const a in t)
          n[a] == null && Oo(o, a, "");
    for (const a in n)
      a === "display" && (s = !0), Oo(o, a, n[a]);
  } else if (r) {
    if (t !== n) {
      const a = o[dc];
      a && (n += ";" + a), o.cssText = n, s = fc.test(n);
    }
  } else t && e.removeAttribute("style");
  Po in e && (e[Po] = s ? o.display : "", e[Pi] && (o.display = "none"));
}
const vc = /[^\\];\s*$/, Wa = /\s*!important$/;
function Oo(e, t, n) {
  if (Ee(n))
    n.forEach((o) => Oo(e, t, o));
  else if (n == null && (n = ""), process.env.NODE_ENV !== "production" && vc.test(n) && Nn(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = hc(e, t);
    Wa.test(n) ? e.setProperty(
      Vr(o),
      n.replace(Wa, ""),
      "important"
    ) : e[o] = n;
  }
}
const ja = ["Webkit", "Moz", "ms"], ir = {};
function hc(e, t) {
  const n = ir[t];
  if (n)
    return n;
  let o = Hr(t);
  if (o !== "filter" && o in e)
    return ir[t] = o;
  o = Du(o);
  for (let r = 0; r < ja.length; r++) {
    const s = ja[r] + o;
    if (s in e)
      return ir[t] = s;
  }
  return t;
}
const Ua = "http://www.w3.org/1999/xlink";
function Ka(e, t, n, o, r, s = Nu(t)) {
  o && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ua, t.slice(6, t.length)) : e.setAttributeNS(Ua, t, n) : n == null || s && !Ti(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    s ? "" : ku(n) ? String(n) : n
  );
}
function Ga(e, t, n, o, r) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? $i(n) : n);
    return;
  }
  const s = e.tagName;
  if (t === "value" && s !== "PROGRESS" && // custom elements may use _value internally
  !s.includes("-")) {
    const i = s === "OPTION" ? e.getAttribute("value") || "" : e.value, l = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (i !== l || !("_value" in e)) && (e.value = l), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let a = !1;
  if (n === "" || n == null) {
    const i = typeof e[t];
    i === "boolean" ? n = Ti(n) : n == null && i === "string" ? (n = "", a = !0) : i === "number" && (n = 0, a = !0);
  }
  try {
    e[t] = n;
  } catch (i) {
    process.env.NODE_ENV !== "production" && !a && Nn(
      `Failed setting prop "${t}" on <${s.toLowerCase()}>: value ${n} is invalid.`,
      i
    );
  }
  a && e.removeAttribute(r || t);
}
function ln(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function gc(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
const qa = Symbol("_vei");
function mc(e, t, n, o, r = null) {
  const s = e[qa] || (e[qa] = {}), a = s[t];
  if (o && a)
    a.value = process.env.NODE_ENV !== "production" ? Za(o, t) : o;
  else {
    const [i, l] = bc(t);
    if (o) {
      const u = s[t] = _c(
        process.env.NODE_ENV !== "production" ? Za(o, t) : o,
        r
      );
      ln(e, i, u, l);
    } else a && (gc(e, i, a, l), s[t] = void 0);
  }
}
const Ya = /(?:Once|Passive|Capture)$/;
function bc(e) {
  let t;
  if (Ya.test(e)) {
    t = {};
    let o;
    for (; o = e.match(Ya); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Vr(e.slice(2)), t];
}
let lr = 0;
const yc = /* @__PURE__ */ Promise.resolve(), wc = () => lr || (yc.then(() => lr = 0), lr = Date.now());
function _c(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    Bu(
      Sc(o, n.value),
      t,
      5,
      [o]
    );
  };
  return n.value = e, n.attached = wc(), n;
}
function Za(e, t) {
  return ge(e) || Ee(e) ? e : (Nn(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), Pt);
}
function Sc(e, t) {
  if (Ee(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (o) => (r) => !r._stopped && o && o(r)
    );
  } else
    return t;
}
const Xa = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Cc = (e, t, n, o, r, s) => {
  const a = r === "svg";
  t === "class" ? cc(e, o, a) : t === "style" ? pc(e, n, o) : Lu(t) ? xu(t) || mc(e, t, n, o, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Ec(e, t, o, a)) ? (Ga(e, t, o), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ka(e, t, o, a, s, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !_e(o)) ? Ga(e, Hr(t), o, s, t) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), Ka(e, t, o, a));
};
function Ec(e, t, n, o) {
  if (o)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Xa(t) && ge(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return Xa(t) && _e(n) ? !1 : t in e;
}
const Ro = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Ee(t) ? (n) => Iu(t, n) : t;
};
function Tc(e) {
  e.target.composing = !0;
}
function Ja(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const On = Symbol("_assign"), Oc = {
  created(e, { modifiers: { lazy: t, trim: n, number: o } }, r) {
    e[On] = Ro(r);
    const s = o || r.props && r.props.type === "number";
    ln(e, t ? "change" : "input", (a) => {
      if (a.target.composing) return;
      let i = e.value;
      n && (i = i.trim()), s && (i = Sr(i)), e[On](i);
    }), n && ln(e, "change", () => {
      e.value = e.value.trim();
    }), t || (ln(e, "compositionstart", Tc), ln(e, "compositionend", Ja), ln(e, "change", Ja));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: o, trim: r, number: s } }, a) {
    if (e[On] = Ro(a), e.composing) return;
    const i = (s || e.type === "number") && !/^0\d/.test(e.value) ? Sr(e.value) : e.value, l = t ?? "";
    i !== l && (document.activeElement === e && e.type !== "range" && (o && t === n || r && e.value.trim() === l) || (e.value = l));
  }
}, Qa = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, o) {
    const r = Ci(t);
    ln(e, "change", () => {
      const s = Array.prototype.filter.call(e.options, (a) => a.selected).map(
        (a) => n ? Sr(Mo(a)) : Mo(a)
      );
      e[On](
        e.multiple ? r ? new Set(s) : s : s[0]
      ), e._assigning = !0, fe(() => {
        e._assigning = !1;
      });
    }), e[On] = Ro(o);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    es(e, t);
  },
  beforeUpdate(e, t, n) {
    e[On] = Ro(n);
  },
  updated(e, { value: t }) {
    e._assigning || es(e, t);
  }
};
function es(e, t) {
  const n = e.multiple, o = Ee(t);
  if (n && !o && !Ci(t)) {
    process.env.NODE_ENV !== "production" && Nn(
      `<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(t).slice(8, -1)}.`
    );
    return;
  }
  for (let r = 0, s = e.options.length; r < s; r++) {
    const a = e.options[r], i = Mo(a);
    if (n)
      if (o) {
        const l = typeof i;
        l === "string" || l === "number" ? a.selected = t.some((u) => String(u) === String(i)) : a.selected = Tu(t, i) > -1;
      } else
        a.selected = t.has(i);
    else if (Ou(Mo(a), t)) {
      e.selectedIndex !== r && (e.selectedIndex = r);
      return;
    }
  }
  !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
}
function Mo(e) {
  return "_value" in e ? e._value : e.value;
}
const Ic = ["ctrl", "shift", "alt", "meta"], $c = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => Ic.some((n) => e[`${n}Key`] && !t.includes(n))
}, Me = (e, t) => {
  const n = e._withMods || (e._withMods = {}), o = t.join(".");
  return n[o] || (n[o] = (r, ...s) => {
    for (let a = 0; a < t.length; a++) {
      const i = $c[t[a]];
      if (i && i(r, t)) return;
    }
    return e(r, ...s);
  });
}, Ac = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Hn = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), o = t.join(".");
  return n[o] || (n[o] = (r) => {
    if (!("key" in r))
      return;
    const s = Vr(r.key);
    if (t.some(
      (a) => a === s || Ac[a] === s
    ))
      return e(r);
  });
}, Pc = /* @__PURE__ */ zr({ patchProp: Cc }, oc);
let ts;
function Rc() {
  return ts || (ts = $u(Pc));
}
const Lo = (...e) => {
  Rc().render(...e);
};
function Mc(e, t, n, o) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? o : n === "a" ? o.call(e) : o ? o.value : t.get(e);
}
function Lc(e, t, n, o, r) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var Io;
const et = "__TAURI_TO_IPC_KEY__";
function xc(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function L(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
class Nc {
  get rid() {
    return Mc(this, Io, "f");
  }
  constructor(t) {
    Io.set(this, void 0), Lc(this, Io, t);
  }
  /**
   * Destroys and cleans up this resource from memory.
   * **You should not call any method on this object anymore and should drop any reference to it.**
   */
  async close() {
    return L("plugin:resources|close", {
      rid: this.rid
    });
  }
}
Io = /* @__PURE__ */ new WeakMap();
class Yr {
  constructor(...t) {
    this.type = "Logical", t.length === 1 ? "Logical" in t[0] ? (this.width = t[0].Logical.width, this.height = t[0].Logical.height) : (this.width = t[0].width, this.height = t[0].height) : (this.width = t[0], this.height = t[1]);
  }
  /**
   * Converts the logical size to a physical one.
   * @example
   * ```typescript
   * import { LogicalSize } from '@tauri-apps/api/dpi';
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   *
   * const appWindow = getCurrentWindow();
   * const factor = await appWindow.scaleFactor();
   * const size = new LogicalSize(400, 500);
   * const physical = size.toPhysical(factor);
   * ```
   *
   * @since 2.0.0
   */
  toPhysical(t) {
    return new Un(this.width * t, this.height * t);
  }
  [et]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[et]();
  }
}
class Un {
  constructor(...t) {
    this.type = "Physical", t.length === 1 ? "Physical" in t[0] ? (this.width = t[0].Physical.width, this.height = t[0].Physical.height) : (this.width = t[0].width, this.height = t[0].height) : (this.width = t[0], this.height = t[1]);
  }
  /**
   * Converts the physical size to a logical one.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const appWindow = getCurrentWindow();
   * const factor = await appWindow.scaleFactor();
   * const size = await appWindow.innerSize(); // PhysicalSize
   * const logical = size.toLogical(factor);
   * ```
   */
  toLogical(t) {
    return new Yr(this.width / t, this.height / t);
  }
  [et]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[et]();
  }
}
class _n {
  constructor(t) {
    this.size = t;
  }
  toLogical(t) {
    return this.size instanceof Yr ? this.size : this.size.toLogical(t);
  }
  toPhysical(t) {
    return this.size instanceof Un ? this.size : this.size.toPhysical(t);
  }
  [et]() {
    return {
      [`${this.size.type}`]: {
        width: this.size.width,
        height: this.size.height
      }
    };
  }
  toJSON() {
    return this[et]();
  }
}
class Zr {
  constructor(...t) {
    this.type = "Logical", t.length === 1 ? "Logical" in t[0] ? (this.x = t[0].Logical.x, this.y = t[0].Logical.y) : (this.x = t[0].x, this.y = t[0].y) : (this.x = t[0], this.y = t[1]);
  }
  /**
   * Converts the logical position to a physical one.
   * @example
   * ```typescript
   * import { LogicalPosition } from '@tauri-apps/api/dpi';
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   *
   * const appWindow = getCurrentWindow();
   * const factor = await appWindow.scaleFactor();
   * const position = new LogicalPosition(400, 500);
   * const physical = position.toPhysical(factor);
   * ```
   *
   * @since 2.0.0
   */
  toPhysical(t) {
    return new Kt(this.x * t, this.y * t);
  }
  [et]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[et]();
  }
}
class Kt {
  constructor(...t) {
    this.type = "Physical", t.length === 1 ? "Physical" in t[0] ? (this.x = t[0].Physical.x, this.y = t[0].Physical.y) : (this.x = t[0].x, this.y = t[0].y) : (this.x = t[0], this.y = t[1]);
  }
  /**
   * Converts the physical position to a logical one.
   * @example
   * ```typescript
   * import { PhysicalPosition } from '@tauri-apps/api/dpi';
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   *
   * const appWindow = getCurrentWindow();
   * const factor = await appWindow.scaleFactor();
   * const position = new PhysicalPosition(400, 500);
   * const physical = position.toLogical(factor);
   * ```
   *
   * @since 2.0.0
   */
  toLogical(t) {
    return new Zr(this.x / t, this.y / t);
  }
  [et]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[et]();
  }
}
class go {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof Zr ? this.position : this.position.toLogical(t);
  }
  toPhysical(t) {
    return this.position instanceof Kt ? this.position : this.position.toPhysical(t);
  }
  [et]() {
    return {
      [`${this.position.type}`]: {
        x: this.position.x,
        y: this.position.y
      }
    };
  }
  toJSON() {
    return this[et]();
  }
}
var Ue;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(Ue || (Ue = {}));
async function Ri(e, t) {
  await L("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function Xr(e, t, n) {
  var o;
  const r = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (o = n?.target) !== null && o !== void 0 ? o : { kind: "Any" };
  return L("plugin:event|listen", {
    event: e,
    target: r,
    handler: xc(t)
  }).then((s) => async () => Ri(e, s));
}
async function kc(e, t, n) {
  return Xr(e, (o) => {
    Ri(e, o.id), t(o);
  }, n);
}
async function Dc(e, t) {
  await L("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function Bc(e, t, n) {
  await L("plugin:event|emit_to", {
    target: typeof e == "string" ? { kind: "AnyLabel", label: e } : e,
    event: t,
    payload: n
  });
}
class Kn extends Nc {
  /**
   * Creates an Image from a resource ID. For internal use only.
   *
   * @ignore
   */
  constructor(t) {
    super(t);
  }
  /** Creates a new Image using RGBA data, in row-major order from top to bottom, and with specified width and height. */
  static async new(t, n, o) {
    return L("plugin:image|new", {
      rgba: xo(t),
      width: n,
      height: o
    }).then((r) => new Kn(r));
  }
  /**
   * Creates a new image using the provided bytes by inferring the file format.
   * If the format is known, prefer [@link Image.fromPngBytes] or [@link Image.fromIcoBytes].
   *
   * Only `ico` and `png` are supported (based on activated feature flag).
   *
   * Note that you need the `image-ico` or `image-png` Cargo features to use this API.
   * To enable it, change your Cargo.toml file:
   * ```toml
   * [dependencies]
   * tauri = { version = "...", features = ["...", "image-png"] }
   * ```
   */
  static async fromBytes(t) {
    return L("plugin:image|from_bytes", {
      bytes: xo(t)
    }).then((n) => new Kn(n));
  }
  /**
   * Creates a new image using the provided path.
   *
   * Only `ico` and `png` are supported (based on activated feature flag).
   *
   * Note that you need the `image-ico` or `image-png` Cargo features to use this API.
   * To enable it, change your Cargo.toml file:
   * ```toml
   * [dependencies]
   * tauri = { version = "...", features = ["...", "image-png"] }
   * ```
   */
  static async fromPath(t) {
    return L("plugin:image|from_path", { path: t }).then((n) => new Kn(n));
  }
  /** Returns the RGBA data for this image, in row-major order from top to bottom.  */
  async rgba() {
    return L("plugin:image|rgba", {
      rid: this.rid
    }).then((t) => new Uint8Array(t));
  }
  /** Returns the size of this image.  */
  async size() {
    return L("plugin:image|size", { rid: this.rid });
  }
}
function xo(e) {
  return e == null ? null : typeof e == "string" ? e : e instanceof Kn ? e.rid : e;
}
var Er;
(function(e) {
  e[e.Critical = 1] = "Critical", e[e.Informational = 2] = "Informational";
})(Er || (Er = {}));
class Fc {
  constructor(t) {
    this._preventDefault = !1, this.event = t.event, this.id = t.id;
  }
  preventDefault() {
    this._preventDefault = !0;
  }
  isPreventDefault() {
    return this._preventDefault;
  }
}
var ns;
(function(e) {
  e.None = "none", e.Normal = "normal", e.Indeterminate = "indeterminate", e.Paused = "paused", e.Error = "error";
})(ns || (ns = {}));
function Mi() {
  return new Li(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function ur() {
  return L("plugin:window|get_all_windows").then((e) => e.map((t) => new Li(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const cr = ["tauri://created", "tauri://error"];
class Li {
  /**
   * Creates a new Window.
   * @example
   * ```typescript
   * import { Window } from '@tauri-apps/api/window';
   * const appWindow = new Window('my-label');
   * appWindow.once('tauri://created', function () {
   *  // window successfully created
   * });
   * appWindow.once('tauri://error', function (e) {
   *  // an error happened creating the window
   * });
   * ```
   *
   * @param label The unique window label. Must be alphanumeric: `a-zA-Z-/:_`.
   * @returns The {@link Window} instance to communicate with the window.
   */
  constructor(t, n = {}) {
    var o;
    this.label = t, this.listeners = /* @__PURE__ */ Object.create(null), n?.skip || L("plugin:window|create", {
      options: {
        ...n,
        parent: typeof n.parent == "string" ? n.parent : (o = n.parent) === null || o === void 0 ? void 0 : o.label,
        label: t
      }
    }).then(async () => this.emit("tauri://created")).catch(async (r) => this.emit("tauri://error", r));
  }
  /**
   * Gets the Window associated with the given label.
   * @example
   * ```typescript
   * import { Window } from '@tauri-apps/api/window';
   * const mainWindow = Window.getByLabel('main');
   * ```
   *
   * @param label The window label.
   * @returns The Window instance to communicate with the window or null if the window doesn't exist.
   */
  static async getByLabel(t) {
    var n;
    return (n = (await ur()).find((o) => o.label === t)) !== null && n !== void 0 ? n : null;
  }
  /**
   * Get an instance of `Window` for the current window.
   */
  static getCurrent() {
    return Mi();
  }
  /**
   * Gets a list of instances of `Window` for all available windows.
   */
  static async getAll() {
    return ur();
  }
  /**
   *  Gets the focused window.
   * @example
   * ```typescript
   * import { Window } from '@tauri-apps/api/window';
   * const focusedWindow = Window.getFocusedWindow();
   * ```
   *
   * @returns The Window instance or `undefined` if there is not any focused window.
   */
  static async getFocusedWindow() {
    for (const t of await ur())
      if (await t.isFocused())
        return t;
    return null;
  }
  /**
   * Listen to an emitted event on this window.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const unlisten = await getCurrentWindow().listen<string>('state-changed', (event) => {
   *   console.log(`Got error: ${payload}`);
   * });
   *
   * // you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
   * unlisten();
   * ```
   *
   * @param event Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`.
   * @param handler Event handler.
   * @returns A promise resolving to a function to unlisten to the event.
   * Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.
   */
  async listen(t, n) {
    return this._handleTauriEvent(t, n) ? () => {
      const o = this.listeners[t];
      o.splice(o.indexOf(n), 1);
    } : Xr(t, n, {
      target: { kind: "Window", label: this.label }
    });
  }
  /**
   * Listen to an emitted event on this window only once.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const unlisten = await getCurrentWindow().once<null>('initialized', (event) => {
   *   console.log(`Window initialized!`);
   * });
   *
   * // you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
   * unlisten();
   * ```
   *
   * @param event Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`.
   * @param handler Event handler.
   * @returns A promise resolving to a function to unlisten to the event.
   * Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.
   */
  async once(t, n) {
    return this._handleTauriEvent(t, n) ? () => {
      const o = this.listeners[t];
      o.splice(o.indexOf(n), 1);
    } : kc(t, n, {
      target: { kind: "Window", label: this.label }
    });
  }
  /**
   * Emits an event to all {@link EventTarget|targets}.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().emit('window-loaded', { loggedIn: true, token: 'authToken' });
   * ```
   *
   * @param event Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`.
   * @param payload Event payload.
   */
  async emit(t, n) {
    if (cr.includes(t)) {
      for (const o of this.listeners[t] || [])
        o({
          event: t,
          id: -1,
          payload: n
        });
      return;
    }
    return Dc(t, n);
  }
  /**
   * Emits an event to all {@link EventTarget|targets} matching the given target.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().emit('main', 'window-loaded', { loggedIn: true, token: 'authToken' });
   * ```
   * @param target Label of the target Window/Webview/WebviewWindow or raw {@link EventTarget} object.
   * @param event Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`.
   * @param payload Event payload.
   */
  async emitTo(t, n, o) {
    if (cr.includes(n)) {
      for (const r of this.listeners[n] || [])
        r({
          event: n,
          id: -1,
          payload: o
        });
      return;
    }
    return Bc(t, n, o);
  }
  /** @ignore */
  _handleTauriEvent(t, n) {
    return cr.includes(t) ? (t in this.listeners ? this.listeners[t].push(n) : this.listeners[t] = [n], !0) : !1;
  }
  // Getters
  /**
   * The scale factor that can be used to map physical pixels to logical pixels.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const factor = await getCurrentWindow().scaleFactor();
   * ```
   *
   * @returns The window's monitor scale factor.
   */
  async scaleFactor() {
    return L("plugin:window|scale_factor", {
      label: this.label
    });
  }
  /**
   * The position of the top-left hand corner of the window's client area relative to the top-left hand corner of the desktop.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const position = await getCurrentWindow().innerPosition();
   * ```
   *
   * @returns The window's inner position.
   */
  async innerPosition() {
    return L("plugin:window|inner_position", {
      label: this.label
    }).then((t) => new Kt(t));
  }
  /**
   * The position of the top-left hand corner of the window relative to the top-left hand corner of the desktop.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const position = await getCurrentWindow().outerPosition();
   * ```
   *
   * @returns The window's outer position.
   */
  async outerPosition() {
    return L("plugin:window|outer_position", {
      label: this.label
    }).then((t) => new Kt(t));
  }
  /**
   * The physical size of the window's client area.
   * The client area is the content of the window, excluding the title bar and borders.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const size = await getCurrentWindow().innerSize();
   * ```
   *
   * @returns The window's inner size.
   */
  async innerSize() {
    return L("plugin:window|inner_size", {
      label: this.label
    }).then((t) => new Un(t));
  }
  /**
   * The physical size of the entire window.
   * These dimensions include the title bar and borders. If you don't want that (and you usually don't), use inner_size instead.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const size = await getCurrentWindow().outerSize();
   * ```
   *
   * @returns The window's outer size.
   */
  async outerSize() {
    return L("plugin:window|outer_size", {
      label: this.label
    }).then((t) => new Un(t));
  }
  /**
   * Gets the window's current fullscreen state.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const fullscreen = await getCurrentWindow().isFullscreen();
   * ```
   *
   * @returns Whether the window is in fullscreen mode or not.
   */
  async isFullscreen() {
    return L("plugin:window|is_fullscreen", {
      label: this.label
    });
  }
  /**
   * Gets the window's current minimized state.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const minimized = await getCurrentWindow().isMinimized();
   * ```
   */
  async isMinimized() {
    return L("plugin:window|is_minimized", {
      label: this.label
    });
  }
  /**
   * Gets the window's current maximized state.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const maximized = await getCurrentWindow().isMaximized();
   * ```
   *
   * @returns Whether the window is maximized or not.
   */
  async isMaximized() {
    return L("plugin:window|is_maximized", {
      label: this.label
    });
  }
  /**
   * Gets the window's current focus state.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const focused = await getCurrentWindow().isFocused();
   * ```
   *
   * @returns Whether the window is focused or not.
   */
  async isFocused() {
    return L("plugin:window|is_focused", {
      label: this.label
    });
  }
  /**
   * Gets the window's current decorated state.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const decorated = await getCurrentWindow().isDecorated();
   * ```
   *
   * @returns Whether the window is decorated or not.
   */
  async isDecorated() {
    return L("plugin:window|is_decorated", {
      label: this.label
    });
  }
  /**
   * Gets the window's current resizable state.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const resizable = await getCurrentWindow().isResizable();
   * ```
   *
   * @returns Whether the window is resizable or not.
   */
  async isResizable() {
    return L("plugin:window|is_resizable", {
      label: this.label
    });
  }
  /**
   * Gets the window's native maximize button state.
   *
   * #### Platform-specific
   *
   * - **Linux / iOS / Android:** Unsupported.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const maximizable = await getCurrentWindow().isMaximizable();
   * ```
   *
   * @returns Whether the window's native maximize button is enabled or not.
   */
  async isMaximizable() {
    return L("plugin:window|is_maximizable", {
      label: this.label
    });
  }
  /**
   * Gets the window's native minimize button state.
   *
   * #### Platform-specific
   *
   * - **Linux / iOS / Android:** Unsupported.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const minimizable = await getCurrentWindow().isMinimizable();
   * ```
   *
   * @returns Whether the window's native minimize button is enabled or not.
   */
  async isMinimizable() {
    return L("plugin:window|is_minimizable", {
      label: this.label
    });
  }
  /**
   * Gets the window's native close button state.
   *
   * #### Platform-specific
   *
   * - **iOS / Android:** Unsupported.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const closable = await getCurrentWindow().isClosable();
   * ```
   *
   * @returns Whether the window's native close button is enabled or not.
   */
  async isClosable() {
    return L("plugin:window|is_closable", {
      label: this.label
    });
  }
  /**
   * Gets the window's current visible state.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const visible = await getCurrentWindow().isVisible();
   * ```
   *
   * @returns Whether the window is visible or not.
   */
  async isVisible() {
    return L("plugin:window|is_visible", {
      label: this.label
    });
  }
  /**
   * Gets the window's current title.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const title = await getCurrentWindow().title();
   * ```
   */
  async title() {
    return L("plugin:window|title", {
      label: this.label
    });
  }
  /**
   * Gets the window's current theme.
   *
   * #### Platform-specific
   *
   * - **macOS:** Theme was introduced on macOS 10.14. Returns `light` on macOS 10.13 and below.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const theme = await getCurrentWindow().theme();
   * ```
   *
   * @returns The window theme.
   */
  async theme() {
    return L("plugin:window|theme", {
      label: this.label
    });
  }
  /**
   * Whether the window is configured to be always on top of other windows or not.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const alwaysOnTop = await getCurrentWindow().isAlwaysOnTop();
   * ```
   *
   * @returns Whether the window is visible or not.
   */
  async isAlwaysOnTop() {
    return L("plugin:window|is_always_on_top", {
      label: this.label
    });
  }
  // Setters
  /**
   * Centers the window.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().center();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async center() {
    return L("plugin:window|center", {
      label: this.label
    });
  }
  /**
   *  Requests user attention to the window, this has no effect if the application
   * is already focused. How requesting for user attention manifests is platform dependent,
   * see `UserAttentionType` for details.
   *
   * Providing `null` will unset the request for user attention. Unsetting the request for
   * user attention might not be done automatically by the WM when the window receives input.
   *
   * #### Platform-specific
   *
   * - **macOS:** `null` has no effect.
   * - **Linux:** Urgency levels have the same effect.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().requestUserAttention();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async requestUserAttention(t) {
    let n = null;
    return t && (t === Er.Critical ? n = { type: "Critical" } : n = { type: "Informational" }), L("plugin:window|request_user_attention", {
      label: this.label,
      value: n
    });
  }
  /**
   * Updates the window resizable flag.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setResizable(false);
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async setResizable(t) {
    return L("plugin:window|set_resizable", {
      label: this.label,
      value: t
    });
  }
  /**
   * Enable or disable the window.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setEnabled(false);
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   *
   * @since 2.0.0
   */
  async setEnabled(t) {
    return L("plugin:window|set_enabled", {
      label: this.label,
      value: t
    });
  }
  /**
   * Whether the window is enabled or disabled.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setEnabled(false);
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   *
   * @since 2.0.0
   */
  async isEnabled() {
    return L("plugin:window|is_enabled", {
      label: this.label
    });
  }
  /**
   * Sets whether the window's native maximize button is enabled or not.
   * If resizable is set to false, this setting is ignored.
   *
   * #### Platform-specific
   *
   * - **macOS:** Disables the "zoom" button in the window titlebar, which is also used to enter fullscreen mode.
   * - **Linux / iOS / Android:** Unsupported.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setMaximizable(false);
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async setMaximizable(t) {
    return L("plugin:window|set_maximizable", {
      label: this.label,
      value: t
    });
  }
  /**
   * Sets whether the window's native minimize button is enabled or not.
   *
   * #### Platform-specific
   *
   * - **Linux / iOS / Android:** Unsupported.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setMinimizable(false);
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async setMinimizable(t) {
    return L("plugin:window|set_minimizable", {
      label: this.label,
      value: t
    });
  }
  /**
   * Sets whether the window's native close button is enabled or not.
   *
   * #### Platform-specific
   *
   * - **Linux:** GTK+ will do its best to convince the window manager not to show a close button. Depending on the system, this function may not have any effect when called on a window that is already visible
   * - **iOS / Android:** Unsupported.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setClosable(false);
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async setClosable(t) {
    return L("plugin:window|set_closable", {
      label: this.label,
      value: t
    });
  }
  /**
   * Sets the window title.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setTitle('Tauri');
   * ```
   *
   * @param title The new title
   * @returns A promise indicating the success or failure of the operation.
   */
  async setTitle(t) {
    return L("plugin:window|set_title", {
      label: this.label,
      value: t
    });
  }
  /**
   * Maximizes the window.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().maximize();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async maximize() {
    return L("plugin:window|maximize", {
      label: this.label
    });
  }
  /**
   * Unmaximizes the window.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().unmaximize();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async unmaximize() {
    return L("plugin:window|unmaximize", {
      label: this.label
    });
  }
  /**
   * Toggles the window maximized state.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().toggleMaximize();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async toggleMaximize() {
    return L("plugin:window|toggle_maximize", {
      label: this.label
    });
  }
  /**
   * Minimizes the window.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().minimize();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async minimize() {
    return L("plugin:window|minimize", {
      label: this.label
    });
  }
  /**
   * Unminimizes the window.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().unminimize();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async unminimize() {
    return L("plugin:window|unminimize", {
      label: this.label
    });
  }
  /**
   * Sets the window visibility to true.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().show();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async show() {
    return L("plugin:window|show", {
      label: this.label
    });
  }
  /**
   * Sets the window visibility to false.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().hide();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async hide() {
    return L("plugin:window|hide", {
      label: this.label
    });
  }
  /**
   * Closes the window.
   *
   * Note this emits a closeRequested event so you can intercept it. To force window close, use {@link Window.destroy}.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().close();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async close() {
    return L("plugin:window|close", {
      label: this.label
    });
  }
  /**
   * Destroys the window. Behaves like {@link Window.close} but forces the window close instead of emitting a closeRequested event.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().destroy();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async destroy() {
    return L("plugin:window|destroy", {
      label: this.label
    });
  }
  /**
   * Whether the window should have borders and bars.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setDecorations(false);
   * ```
   *
   * @param decorations Whether the window should have borders and bars.
   * @returns A promise indicating the success or failure of the operation.
   */
  async setDecorations(t) {
    return L("plugin:window|set_decorations", {
      label: this.label,
      value: t
    });
  }
  /**
   * Whether or not the window should have shadow.
   *
   * #### Platform-specific
   *
   * - **Windows:**
   *   - `false` has no effect on decorated window, shadows are always ON.
   *   - `true` will make undecorated window have a 1px white border,
   * and on Windows 11, it will have a rounded corners.
   * - **Linux:** Unsupported.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setShadow(false);
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async setShadow(t) {
    return L("plugin:window|set_shadow", {
      label: this.label,
      value: t
    });
  }
  /**
   * Set window effects.
   */
  async setEffects(t) {
    return L("plugin:window|set_effects", {
      label: this.label,
      value: t
    });
  }
  /**
   * Clear any applied effects if possible.
   */
  async clearEffects() {
    return L("plugin:window|set_effects", {
      label: this.label,
      value: null
    });
  }
  /**
   * Whether the window should always be on top of other windows.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setAlwaysOnTop(true);
   * ```
   *
   * @param alwaysOnTop Whether the window should always be on top of other windows or not.
   * @returns A promise indicating the success or failure of the operation.
   */
  async setAlwaysOnTop(t) {
    return L("plugin:window|set_always_on_top", {
      label: this.label,
      value: t
    });
  }
  /**
   * Whether the window should always be below other windows.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setAlwaysOnBottom(true);
   * ```
   *
   * @param alwaysOnBottom Whether the window should always be below other windows or not.
   * @returns A promise indicating the success or failure of the operation.
   */
  async setAlwaysOnBottom(t) {
    return L("plugin:window|set_always_on_bottom", {
      label: this.label,
      value: t
    });
  }
  /**
   * Prevents the window contents from being captured by other apps.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setContentProtected(true);
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async setContentProtected(t) {
    return L("plugin:window|set_content_protected", {
      label: this.label,
      value: t
    });
  }
  /**
   * Resizes the window with a new inner size.
   * @example
   * ```typescript
   * import { getCurrentWindow, LogicalSize } from '@tauri-apps/api/window';
   * await getCurrentWindow().setSize(new LogicalSize(600, 500));
   * ```
   *
   * @param size The logical or physical inner size.
   * @returns A promise indicating the success or failure of the operation.
   */
  async setSize(t) {
    return L("plugin:window|set_size", {
      label: this.label,
      value: t instanceof _n ? t : new _n(t)
    });
  }
  /**
   * Sets the window minimum inner size. If the `size` argument is not provided, the constraint is unset.
   * @example
   * ```typescript
   * import { getCurrentWindow, PhysicalSize } from '@tauri-apps/api/window';
   * await getCurrentWindow().setMinSize(new PhysicalSize(600, 500));
   * ```
   *
   * @param size The logical or physical inner size, or `null` to unset the constraint.
   * @returns A promise indicating the success or failure of the operation.
   */
  async setMinSize(t) {
    return L("plugin:window|set_min_size", {
      label: this.label,
      value: t instanceof _n ? t : t ? new _n(t) : null
    });
  }
  /**
   * Sets the window maximum inner size. If the `size` argument is undefined, the constraint is unset.
   * @example
   * ```typescript
   * import { getCurrentWindow, LogicalSize } from '@tauri-apps/api/window';
   * await getCurrentWindow().setMaxSize(new LogicalSize(600, 500));
   * ```
   *
   * @param size The logical or physical inner size, or `null` to unset the constraint.
   * @returns A promise indicating the success or failure of the operation.
   */
  async setMaxSize(t) {
    return L("plugin:window|set_max_size", {
      label: this.label,
      value: t instanceof _n ? t : t ? new _n(t) : null
    });
  }
  /**
   * Sets the window inner size constraints.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setSizeConstraints({ minWidth: 300 });
   * ```
   *
   * @param constraints The logical or physical inner size, or `null` to unset the constraint.
   * @returns A promise indicating the success or failure of the operation.
   */
  async setSizeConstraints(t) {
    function n(o) {
      return o ? { Logical: o } : null;
    }
    return L("plugin:window|set_size_constraints", {
      label: this.label,
      value: {
        minWidth: n(t?.minWidth),
        minHeight: n(t?.minHeight),
        maxWidth: n(t?.maxWidth),
        maxHeight: n(t?.maxHeight)
      }
    });
  }
  /**
   * Sets the window outer position.
   * @example
   * ```typescript
   * import { getCurrentWindow, LogicalPosition } from '@tauri-apps/api/window';
   * await getCurrentWindow().setPosition(new LogicalPosition(600, 500));
   * ```
   *
   * @param position The new position, in logical or physical pixels.
   * @returns A promise indicating the success or failure of the operation.
   */
  async setPosition(t) {
    return L("plugin:window|set_position", {
      label: this.label,
      value: t instanceof go ? t : new go(t)
    });
  }
  /**
   * Sets the window fullscreen state.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setFullscreen(true);
   * ```
   *
   * @param fullscreen Whether the window should go to fullscreen or not.
   * @returns A promise indicating the success or failure of the operation.
   */
  async setFullscreen(t) {
    return L("plugin:window|set_fullscreen", {
      label: this.label,
      value: t
    });
  }
  /**
   * Bring the window to front and focus.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setFocus();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async setFocus() {
    return L("plugin:window|set_focus", {
      label: this.label
    });
  }
  /**
   * Sets the window icon.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setIcon('/tauri/awesome.png');
   * ```
   *
   * Note that you may need the `image-ico` or `image-png` Cargo features to use this API.
   * To enable it, change your Cargo.toml file:
   * ```toml
   * [dependencies]
   * tauri = { version = "...", features = ["...", "image-png"] }
   * ```
   *
   * @param icon Icon bytes or path to the icon file.
   * @returns A promise indicating the success or failure of the operation.
   */
  async setIcon(t) {
    return L("plugin:window|set_icon", {
      label: this.label,
      value: xo(t)
    });
  }
  /**
   * Whether the window icon should be hidden from the taskbar or not.
   *
   * #### Platform-specific
   *
   * - **macOS:** Unsupported.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setSkipTaskbar(true);
   * ```
   *
   * @param skip true to hide window icon, false to show it.
   * @returns A promise indicating the success or failure of the operation.
   */
  async setSkipTaskbar(t) {
    return L("plugin:window|set_skip_taskbar", {
      label: this.label,
      value: t
    });
  }
  /**
   * Grabs the cursor, preventing it from leaving the window.
   *
   * There's no guarantee that the cursor will be hidden. You should
   * hide it by yourself if you want so.
   *
   * #### Platform-specific
   *
   * - **Linux:** Unsupported.
   * - **macOS:** This locks the cursor in a fixed location, which looks visually awkward.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setCursorGrab(true);
   * ```
   *
   * @param grab `true` to grab the cursor icon, `false` to release it.
   * @returns A promise indicating the success or failure of the operation.
   */
  async setCursorGrab(t) {
    return L("plugin:window|set_cursor_grab", {
      label: this.label,
      value: t
    });
  }
  /**
   * Modifies the cursor's visibility.
   *
   * #### Platform-specific
   *
   * - **Windows:** The cursor is only hidden within the confines of the window.
   * - **macOS:** The cursor is hidden as long as the window has input focus, even if the cursor is
   *   outside of the window.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setCursorVisible(false);
   * ```
   *
   * @param visible If `false`, this will hide the cursor. If `true`, this will show the cursor.
   * @returns A promise indicating the success or failure of the operation.
   */
  async setCursorVisible(t) {
    return L("plugin:window|set_cursor_visible", {
      label: this.label,
      value: t
    });
  }
  /**
   * Modifies the cursor icon of the window.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setCursorIcon('help');
   * ```
   *
   * @param icon The new cursor icon.
   * @returns A promise indicating the success or failure of the operation.
   */
  async setCursorIcon(t) {
    return L("plugin:window|set_cursor_icon", {
      label: this.label,
      value: t
    });
  }
  /**
   * Sets the window background color.
   *
   * #### Platform-specific:
   *
   * - **Windows:** alpha channel is ignored.
   * - **iOS / Android:** Unsupported.
   *
   * @returns A promise indicating the success or failure of the operation.
   *
   * @since 2.1.0
   */
  async setBackgroundColor(t) {
    return L("plugin:window|set_background_color", { color: t });
  }
  /**
   * Changes the position of the cursor in window coordinates.
   * @example
   * ```typescript
   * import { getCurrentWindow, LogicalPosition } from '@tauri-apps/api/window';
   * await getCurrentWindow().setCursorPosition(new LogicalPosition(600, 300));
   * ```
   *
   * @param position The new cursor position.
   * @returns A promise indicating the success or failure of the operation.
   */
  async setCursorPosition(t) {
    return L("plugin:window|set_cursor_position", {
      label: this.label,
      value: t instanceof go ? t : new go(t)
    });
  }
  /**
   * Changes the cursor events behavior.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setIgnoreCursorEvents(true);
   * ```
   *
   * @param ignore `true` to ignore the cursor events; `false` to process them as usual.
   * @returns A promise indicating the success or failure of the operation.
   */
  async setIgnoreCursorEvents(t) {
    return L("plugin:window|set_ignore_cursor_events", {
      label: this.label,
      value: t
    });
  }
  /**
   * Starts dragging the window.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().startDragging();
   * ```
   *
   * @return A promise indicating the success or failure of the operation.
   */
  async startDragging() {
    return L("plugin:window|start_dragging", {
      label: this.label
    });
  }
  /**
   * Starts resize-dragging the window.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().startResizeDragging();
   * ```
   *
   * @return A promise indicating the success or failure of the operation.
   */
  async startResizeDragging(t) {
    return L("plugin:window|start_resize_dragging", {
      label: this.label,
      value: t
    });
  }
  /**
   * Sets the badge count. It is app wide and not specific to this window.
   *
   * #### Platform-specific
   *
   * - **Windows**: Unsupported. Use @{linkcode Window.setOverlayIcon} instead.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setBadgeCount(5);
   * ```
   *
   * @param count The badge count. Use `undefined` to remove the badge.
   * @return A promise indicating the success or failure of the operation.
   */
  async setBadgeCount(t) {
    return L("plugin:window|set_badge_count", {
      label: this.label,
      value: t
    });
  }
  /**
   * Sets the badge cont **macOS only**.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setBadgeLabel("Hello");
   * ```
   *
   * @param label The badge label. Use `undefined` to remove the badge.
   * @return A promise indicating the success or failure of the operation.
   */
  async setBadgeLabel(t) {
    return L("plugin:window|set_badge_label", {
      label: this.label,
      value: t
    });
  }
  /**
   * Sets the overlay icon. **Windows only**
   * The overlay icon can be set for every window.
   *
   *
   * Note that you may need the `image-ico` or `image-png` Cargo features to use this API.
   * To enable it, change your Cargo.toml file:
   *
   * ```toml
   * [dependencies]
   * tauri = { version = "...", features = ["...", "image-png"] }
   * ```
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setOverlayIcon("/tauri/awesome.png");
   * ```
   *
   * @param icon Icon bytes or path to the icon file. Use `undefined` to remove the overlay icon.
   * @return A promise indicating the success or failure of the operation.
   */
  async setOverlayIcon(t) {
    return L("plugin:window|set_overlay_icon", {
      label: this.label,
      value: t ? xo(t) : void 0
    });
  }
  /**
   * Sets the taskbar progress state.
   *
   * #### Platform-specific
   *
   * - **Linux / macOS**: Progress bar is app-wide and not specific to this window.
   * - **Linux**: Only supported desktop environments with `libunity` (e.g. GNOME).
   *
   * @example
   * ```typescript
   * import { getCurrentWindow, ProgressBarStatus } from '@tauri-apps/api/window';
   * await getCurrentWindow().setProgressBar({
   *   status: ProgressBarStatus.Normal,
   *   progress: 50,
   * });
   * ```
   *
   * @return A promise indicating the success or failure of the operation.
   */
  async setProgressBar(t) {
    return L("plugin:window|set_progress_bar", {
      label: this.label,
      value: t
    });
  }
  /**
   * Sets whether the window should be visible on all workspaces or virtual desktops.
   *
   * #### Platform-specific
   *
   * - **Windows / iOS / Android:** Unsupported.
   *
   * @since 2.0.0
   */
  async setVisibleOnAllWorkspaces(t) {
    return L("plugin:window|set_visible_on_all_workspaces", {
      label: this.label,
      value: t
    });
  }
  /**
   * Sets the title bar style. **macOS only**.
   *
   * @since 2.0.0
   */
  async setTitleBarStyle(t) {
    return L("plugin:window|set_title_bar_style", {
      label: this.label,
      value: t
    });
  }
  /**
   * Set window theme, pass in `null` or `undefined` to follow system theme
   *
   * #### Platform-specific
   *
   * - **Linux / macOS**: Theme is app-wide and not specific to this window.
   * - **iOS / Android:** Unsupported.
   *
   * @since 2.0.0
   */
  async setTheme(t) {
    return L("plugin:window|set_theme", {
      label: this.label,
      value: t
    });
  }
  // Listeners
  /**
   * Listen to window resize.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from "@tauri-apps/api/window";
   * const unlisten = await getCurrentWindow().onResized(({ payload: size }) => {
   *  console.log('Window resized', size);
   * });
   *
   * // you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
   * unlisten();
   * ```
   *
   * @returns A promise resolving to a function to unlisten to the event.
   * Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.
   */
  async onResized(t) {
    return this.listen(Ue.WINDOW_RESIZED, (n) => {
      n.payload = new Un(n.payload), t(n);
    });
  }
  /**
   * Listen to window move.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from "@tauri-apps/api/window";
   * const unlisten = await getCurrentWindow().onMoved(({ payload: position }) => {
   *  console.log('Window moved', position);
   * });
   *
   * // you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
   * unlisten();
   * ```
   *
   * @returns A promise resolving to a function to unlisten to the event.
   * Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.
   */
  async onMoved(t) {
    return this.listen(Ue.WINDOW_MOVED, (n) => {
      n.payload = new Kt(n.payload), t(n);
    });
  }
  /**
   * Listen to window close requested. Emitted when the user requests to closes the window.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from "@tauri-apps/api/window";
   * import { confirm } from '@tauri-apps/api/dialog';
   * const unlisten = await getCurrentWindow().onCloseRequested(async (event) => {
   *   const confirmed = await confirm('Are you sure?');
   *   if (!confirmed) {
   *     // user did not confirm closing the window; let's prevent it
   *     event.preventDefault();
   *   }
   * });
   *
   * // you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
   * unlisten();
   * ```
   *
   * @returns A promise resolving to a function to unlisten to the event.
   * Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.
   */
  async onCloseRequested(t) {
    return this.listen(Ue.WINDOW_CLOSE_REQUESTED, async (n) => {
      const o = new Fc(n);
      await t(o), o.isPreventDefault() || await this.destroy();
    });
  }
  /**
   * Listen to a file drop event.
   * The listener is triggered when the user hovers the selected files on the webview,
   * drops the files or cancels the operation.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from "@tauri-apps/api/webview";
   * const unlisten = await getCurrentWindow().onDragDropEvent((event) => {
   *  if (event.payload.type === 'over') {
   *    console.log('User hovering', event.payload.position);
   *  } else if (event.payload.type === 'drop') {
   *    console.log('User dropped', event.payload.paths);
   *  } else {
   *    console.log('File drop cancelled');
   *  }
   * });
   *
   * // you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
   * unlisten();
   * ```
   *
   * @returns A promise resolving to a function to unlisten to the event.
   * Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.
   */
  async onDragDropEvent(t) {
    const n = await this.listen(Ue.DRAG_ENTER, (a) => {
      t({
        ...a,
        payload: {
          type: "enter",
          paths: a.payload.paths,
          position: new Kt(a.payload.position)
        }
      });
    }), o = await this.listen(Ue.DRAG_OVER, (a) => {
      t({
        ...a,
        payload: {
          type: "over",
          position: new Kt(a.payload.position)
        }
      });
    }), r = await this.listen(Ue.DRAG_DROP, (a) => {
      t({
        ...a,
        payload: {
          type: "drop",
          paths: a.payload.paths,
          position: new Kt(a.payload.position)
        }
      });
    }), s = await this.listen(Ue.DRAG_LEAVE, (a) => {
      t({ ...a, payload: { type: "leave" } });
    });
    return () => {
      n(), r(), o(), s();
    };
  }
  /**
   * Listen to window focus change.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from "@tauri-apps/api/window";
   * const unlisten = await getCurrentWindow().onFocusChanged(({ payload: focused }) => {
   *  console.log('Focus changed, window is focused? ' + focused);
   * });
   *
   * // you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
   * unlisten();
   * ```
   *
   * @returns A promise resolving to a function to unlisten to the event.
   * Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.
   */
  async onFocusChanged(t) {
    const n = await this.listen(Ue.WINDOW_FOCUS, (r) => {
      t({ ...r, payload: !0 });
    }), o = await this.listen(Ue.WINDOW_BLUR, (r) => {
      t({ ...r, payload: !1 });
    });
    return () => {
      n(), o();
    };
  }
  /**
   * Listen to window scale change. Emitted when the window's scale factor has changed.
   * The following user actions can cause DPI changes:
   * - Changing the display's resolution.
   * - Changing the display's scale factor (e.g. in Control Panel on Windows).
   * - Moving the window to a display with a different scale factor.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from "@tauri-apps/api/window";
   * const unlisten = await getCurrentWindow().onScaleChanged(({ payload }) => {
   *  console.log('Scale changed', payload.scaleFactor, payload.size);
   * });
   *
   * // you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
   * unlisten();
   * ```
   *
   * @returns A promise resolving to a function to unlisten to the event.
   * Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.
   */
  async onScaleChanged(t) {
    return this.listen(Ue.WINDOW_SCALE_FACTOR_CHANGED, t);
  }
  /**
   * Listen to the system theme change.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from "@tauri-apps/api/window";
   * const unlisten = await getCurrentWindow().onThemeChanged(({ payload: theme }) => {
   *  console.log('New theme: ' + theme);
   * });
   *
   * // you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
   * unlisten();
   * ```
   *
   * @returns A promise resolving to a function to unlisten to the event.
   * Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.
   */
  async onThemeChanged(t) {
    return this.listen(Ue.WINDOW_THEME_CHANGED, t);
  }
}
var os;
(function(e) {
  e.Disabled = "disabled", e.Throttle = "throttle", e.Suspend = "suspend";
})(os || (os = {}));
var rs;
(function(e) {
  e.AppearanceBased = "appearanceBased", e.Light = "light", e.Dark = "dark", e.MediumLight = "mediumLight", e.UltraDark = "ultraDark", e.Titlebar = "titlebar", e.Selection = "selection", e.Menu = "menu", e.Popover = "popover", e.Sidebar = "sidebar", e.HeaderView = "headerView", e.Sheet = "sheet", e.WindowBackground = "windowBackground", e.HudWindow = "hudWindow", e.FullScreenUI = "fullScreenUI", e.Tooltip = "tooltip", e.ContentBackground = "contentBackground", e.UnderWindowBackground = "underWindowBackground", e.UnderPageBackground = "underPageBackground", e.Mica = "mica", e.Blur = "blur", e.Acrylic = "acrylic", e.Tabbed = "tabbed", e.TabbedDark = "tabbedDark", e.TabbedLight = "tabbedLight";
})(rs || (rs = {}));
var as;
(function(e) {
  e.FollowsWindowActiveState = "followsWindowActiveState", e.Active = "active", e.Inactive = "inactive";
})(as || (as = {}));
const xi = Symbol(), Gn = "el", zc = "is-", sn = (e, t, n, o, r) => {
  let s = `${e}-${t}`;
  return n && (s += `-${n}`), o && (s += `__${o}`), r && (s += `--${r}`), s;
}, Ni = Symbol("namespaceContextKey"), Jr = (e) => {
  const t = e || (Ae() ? ae(Ni, A(Gn)) : A(Gn));
  return y(() => c(t) || Gn);
}, de = (e, t) => {
  const n = Jr(t);
  return {
    namespace: n,
    b: (h = "") => sn(n.value, e, h, "", ""),
    e: (h) => h ? sn(n.value, e, "", h, "") : "",
    m: (h) => h ? sn(n.value, e, "", "", h) : "",
    be: (h, b) => h && b ? sn(n.value, e, h, b, "") : "",
    em: (h, b) => h && b ? sn(n.value, e, "", h, b) : "",
    bm: (h, b) => h && b ? sn(n.value, e, h, "", b) : "",
    bem: (h, b, m) => h && b && m ? sn(n.value, e, h, b, m) : "",
    is: (h, ...b) => {
      const m = b.length >= 1 ? b[0] : !0;
      return h && m ? `${zc}${h}` : "";
    },
    cssVar: (h) => {
      const b = {};
      for (const m in h)
        h[m] && (b[`--${n.value}-${m}`] = h[m]);
      return b;
    },
    cssVarName: (h) => `--${n.value}-${h}`,
    cssVarBlock: (h) => {
      const b = {};
      for (const m in h)
        h[m] && (b[`--${n.value}-${e}-${m}`] = h[m]);
      return b;
    },
    cssVarBlockName: (h) => `--${n.value}-${e}-${h}`
  };
};
var ki = typeof global == "object" && global && global.Object === Object && global, Vc = typeof self == "object" && self && self.Object === Object && self, _t = ki || Vc || Function("return this")(), yt = _t.Symbol, Di = Object.prototype, Hc = Di.hasOwnProperty, Wc = Di.toString, Wn = yt ? yt.toStringTag : void 0;
function jc(e) {
  var t = Hc.call(e, Wn), n = e[Wn];
  try {
    e[Wn] = void 0;
    var o = !0;
  } catch {
  }
  var r = Wc.call(e);
  return o && (t ? e[Wn] = n : delete e[Wn]), r;
}
var Uc = Object.prototype, Kc = Uc.toString;
function Gc(e) {
  return Kc.call(e);
}
var qc = "[object Null]", Yc = "[object Undefined]", ss = yt ? yt.toStringTag : void 0;
function kn(e) {
  return e == null ? e === void 0 ? Yc : qc : ss && ss in Object(e) ? jc(e) : Gc(e);
}
function In(e) {
  return e != null && typeof e == "object";
}
var Zc = "[object Symbol]";
function Uo(e) {
  return typeof e == "symbol" || In(e) && kn(e) == Zc;
}
function Xc(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, r = Array(o); ++n < o; )
    r[n] = t(e[n], n, e);
  return r;
}
var ct = Array.isArray, is = yt ? yt.prototype : void 0, ls = is ? is.toString : void 0;
function Bi(e) {
  if (typeof e == "string")
    return e;
  if (ct(e))
    return Xc(e, Bi) + "";
  if (Uo(e))
    return ls ? ls.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var Jc = /\s/;
function Qc(e) {
  for (var t = e.length; t-- && Jc.test(e.charAt(t)); )
    ;
  return t;
}
var ed = /^\s+/;
function td(e) {
  return e && e.slice(0, Qc(e) + 1).replace(ed, "");
}
function Qt(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var us = NaN, nd = /^[-+]0x[0-9a-f]+$/i, od = /^0b[01]+$/i, rd = /^0o[0-7]+$/i, ad = parseInt;
function cs(e) {
  if (typeof e == "number")
    return e;
  if (Uo(e))
    return us;
  if (Qt(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Qt(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = td(e);
  var n = od.test(e);
  return n || rd.test(e) ? ad(e.slice(2), n ? 2 : 8) : nd.test(e) ? us : +e;
}
function Fi(e) {
  return e;
}
var sd = "[object AsyncFunction]", id = "[object Function]", ld = "[object GeneratorFunction]", ud = "[object Proxy]";
function zi(e) {
  if (!Qt(e))
    return !1;
  var t = kn(e);
  return t == id || t == ld || t == sd || t == ud;
}
var dr = _t["__core-js_shared__"], ds = function() {
  var e = /[^.]+$/.exec(dr && dr.keys && dr.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function cd(e) {
  return !!ds && ds in e;
}
var dd = Function.prototype, fd = dd.toString;
function mn(e) {
  if (e != null) {
    try {
      return fd.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var pd = /[\\^$.*+?()[\]{}|]/g, vd = /^\[object .+?Constructor\]$/, hd = Function.prototype, gd = Object.prototype, md = hd.toString, bd = gd.hasOwnProperty, yd = RegExp(
  "^" + md.call(bd).replace(pd, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function wd(e) {
  if (!Qt(e) || cd(e))
    return !1;
  var t = zi(e) ? yd : vd;
  return t.test(mn(e));
}
function _d(e, t) {
  return e?.[t];
}
function bn(e, t) {
  var n = _d(e, t);
  return wd(n) ? n : void 0;
}
var Tr = bn(_t, "WeakMap");
function Sd(e, t, n) {
  switch (n.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, n[0]);
    case 2:
      return e.call(t, n[0], n[1]);
    case 3:
      return e.call(t, n[0], n[1], n[2]);
  }
  return e.apply(t, n);
}
var Cd = 800, Ed = 16, Td = Date.now;
function Od(e) {
  var t = 0, n = 0;
  return function() {
    var o = Td(), r = Ed - (o - n);
    if (n = o, r > 0) {
      if (++t >= Cd)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Id(e) {
  return function() {
    return e;
  };
}
var No = function() {
  try {
    var e = bn(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), $d = No ? function(e, t) {
  return No(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Id(t),
    writable: !0
  });
} : Fi, Ad = Od($d);
function Pd(e, t, n, o) {
  e.length;
  for (var r = n + 1; r--; )
    if (t(e[r], r, e))
      return r;
  return -1;
}
var Rd = 9007199254740991, Md = /^(?:0|[1-9]\d*)$/;
function Qr(e, t) {
  var n = typeof e;
  return t = t ?? Rd, !!t && (n == "number" || n != "symbol" && Md.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Ld(e, t, n) {
  t == "__proto__" && No ? No(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function ea(e, t) {
  return e === t || e !== e && t !== t;
}
var xd = Object.prototype, Nd = xd.hasOwnProperty;
function kd(e, t, n) {
  var o = e[t];
  (!(Nd.call(e, t) && ea(o, n)) || n === void 0 && !(t in e)) && Ld(e, t, n);
}
var fs = Math.max;
function Dd(e, t, n) {
  return t = fs(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var o = arguments, r = -1, s = fs(o.length - t, 0), a = Array(s); ++r < s; )
      a[r] = o[t + r];
    r = -1;
    for (var i = Array(t + 1); ++r < t; )
      i[r] = o[r];
    return i[t] = n(a), Sd(e, this, i);
  };
}
var Bd = 9007199254740991;
function ta(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Bd;
}
function Fd(e) {
  return e != null && ta(e.length) && !zi(e);
}
var zd = Object.prototype;
function Vd(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || zd;
  return e === n;
}
function Hd(e, t) {
  for (var n = -1, o = Array(e); ++n < e; )
    o[n] = t(n);
  return o;
}
var Wd = "[object Arguments]";
function ps(e) {
  return In(e) && kn(e) == Wd;
}
var Vi = Object.prototype, jd = Vi.hasOwnProperty, Ud = Vi.propertyIsEnumerable, na = ps(/* @__PURE__ */ function() {
  return arguments;
}()) ? ps : function(e) {
  return In(e) && jd.call(e, "callee") && !Ud.call(e, "callee");
};
function Kd() {
  return !1;
}
var Hi = typeof exports == "object" && exports && !exports.nodeType && exports, vs = Hi && typeof module == "object" && module && !module.nodeType && module, Gd = vs && vs.exports === Hi, hs = Gd ? _t.Buffer : void 0, qd = hs ? hs.isBuffer : void 0, Or = qd || Kd, Yd = "[object Arguments]", Zd = "[object Array]", Xd = "[object Boolean]", Jd = "[object Date]", Qd = "[object Error]", ef = "[object Function]", tf = "[object Map]", nf = "[object Number]", of = "[object Object]", rf = "[object RegExp]", af = "[object Set]", sf = "[object String]", lf = "[object WeakMap]", uf = "[object ArrayBuffer]", cf = "[object DataView]", df = "[object Float32Array]", ff = "[object Float64Array]", pf = "[object Int8Array]", vf = "[object Int16Array]", hf = "[object Int32Array]", gf = "[object Uint8Array]", mf = "[object Uint8ClampedArray]", bf = "[object Uint16Array]", yf = "[object Uint32Array]", ue = {};
ue[df] = ue[ff] = ue[pf] = ue[vf] = ue[hf] = ue[gf] = ue[mf] = ue[bf] = ue[yf] = !0;
ue[Yd] = ue[Zd] = ue[uf] = ue[Xd] = ue[cf] = ue[Jd] = ue[Qd] = ue[ef] = ue[tf] = ue[nf] = ue[of] = ue[rf] = ue[af] = ue[sf] = ue[lf] = !1;
function wf(e) {
  return In(e) && ta(e.length) && !!ue[kn(e)];
}
function _f(e) {
  return function(t) {
    return e(t);
  };
}
var Wi = typeof exports == "object" && exports && !exports.nodeType && exports, qn = Wi && typeof module == "object" && module && !module.nodeType && module, Sf = qn && qn.exports === Wi, fr = Sf && ki.process, gs = function() {
  try {
    var e = qn && qn.require && qn.require("util").types;
    return e || fr && fr.binding && fr.binding("util");
  } catch {
  }
}(), ms = gs && gs.isTypedArray, ji = ms ? _f(ms) : wf, Cf = Object.prototype, Ef = Cf.hasOwnProperty;
function Tf(e, t) {
  var n = ct(e), o = !n && na(e), r = !n && !o && Or(e), s = !n && !o && !r && ji(e), a = n || o || r || s, i = a ? Hd(e.length, String) : [], l = i.length;
  for (var u in e)
    Ef.call(e, u) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    r && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Qr(u, l))) && i.push(u);
  return i;
}
function Of(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var If = Of(Object.keys, Object), $f = Object.prototype, Af = $f.hasOwnProperty;
function Pf(e) {
  if (!Vd(e))
    return If(e);
  var t = [];
  for (var n in Object(e))
    Af.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function Ui(e) {
  return Fd(e) ? Tf(e) : Pf(e);
}
var Rf = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Mf = /^\w*$/;
function oa(e, t) {
  if (ct(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Uo(e) ? !0 : Mf.test(e) || !Rf.test(e) || t != null && e in Object(t);
}
var to = bn(Object, "create");
function Lf() {
  this.__data__ = to ? to(null) : {}, this.size = 0;
}
function xf(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Nf = "__lodash_hash_undefined__", kf = Object.prototype, Df = kf.hasOwnProperty;
function Bf(e) {
  var t = this.__data__;
  if (to) {
    var n = t[e];
    return n === Nf ? void 0 : n;
  }
  return Df.call(t, e) ? t[e] : void 0;
}
var Ff = Object.prototype, zf = Ff.hasOwnProperty;
function Vf(e) {
  var t = this.__data__;
  return to ? t[e] !== void 0 : zf.call(t, e);
}
var Hf = "__lodash_hash_undefined__";
function Wf(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = to && t === void 0 ? Hf : t, this;
}
function fn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
fn.prototype.clear = Lf;
fn.prototype.delete = xf;
fn.prototype.get = Bf;
fn.prototype.has = Vf;
fn.prototype.set = Wf;
function jf() {
  this.__data__ = [], this.size = 0;
}
function Ko(e, t) {
  for (var n = e.length; n--; )
    if (ea(e[n][0], t))
      return n;
  return -1;
}
var Uf = Array.prototype, Kf = Uf.splice;
function Gf(e) {
  var t = this.__data__, n = Ko(t, e);
  if (n < 0)
    return !1;
  var o = t.length - 1;
  return n == o ? t.pop() : Kf.call(t, n, 1), --this.size, !0;
}
function qf(e) {
  var t = this.__data__, n = Ko(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Yf(e) {
  return Ko(this.__data__, e) > -1;
}
function Zf(e, t) {
  var n = this.__data__, o = Ko(n, e);
  return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this;
}
function xt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
xt.prototype.clear = jf;
xt.prototype.delete = Gf;
xt.prototype.get = qf;
xt.prototype.has = Yf;
xt.prototype.set = Zf;
var no = bn(_t, "Map");
function Xf() {
  this.size = 0, this.__data__ = {
    hash: new fn(),
    map: new (no || xt)(),
    string: new fn()
  };
}
function Jf(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Go(e, t) {
  var n = e.__data__;
  return Jf(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Qf(e) {
  var t = Go(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function ep(e) {
  return Go(this, e).get(e);
}
function tp(e) {
  return Go(this, e).has(e);
}
function np(e, t) {
  var n = Go(this, e), o = n.size;
  return n.set(e, t), this.size += n.size == o ? 0 : 1, this;
}
function Nt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Nt.prototype.clear = Xf;
Nt.prototype.delete = Qf;
Nt.prototype.get = ep;
Nt.prototype.has = tp;
Nt.prototype.set = np;
var op = "Expected a function";
function ra(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(op);
  var n = function() {
    var o = arguments, r = t ? t.apply(this, o) : o[0], s = n.cache;
    if (s.has(r))
      return s.get(r);
    var a = e.apply(this, o);
    return n.cache = s.set(r, a) || s, a;
  };
  return n.cache = new (ra.Cache || Nt)(), n;
}
ra.Cache = Nt;
var rp = 500;
function ap(e) {
  var t = ra(e, function(o) {
    return n.size === rp && n.clear(), o;
  }), n = t.cache;
  return t;
}
var sp = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ip = /\\(\\)?/g, lp = ap(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(sp, function(n, o, r, s) {
    t.push(r ? s.replace(ip, "$1") : o || n);
  }), t;
});
function up(e) {
  return e == null ? "" : Bi(e);
}
function qo(e, t) {
  return ct(e) ? e : oa(e, t) ? [e] : lp(up(e));
}
function ao(e) {
  if (typeof e == "string" || Uo(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function aa(e, t) {
  t = qo(t, e);
  for (var n = 0, o = t.length; e != null && n < o; )
    e = e[ao(t[n++])];
  return n && n == o ? e : void 0;
}
function Yt(e, t, n) {
  var o = e == null ? void 0 : aa(e, t);
  return o === void 0 ? n : o;
}
function Ki(e, t) {
  for (var n = -1, o = t.length, r = e.length; ++n < o; )
    e[r + n] = t[n];
  return e;
}
var bs = yt ? yt.isConcatSpreadable : void 0;
function cp(e) {
  return ct(e) || na(e) || !!(bs && e && e[bs]);
}
function dp(e, t, n, o, r) {
  var s = -1, a = e.length;
  for (n || (n = cp), r || (r = []); ++s < a; ) {
    var i = e[s];
    n(i) ? Ki(r, i) : r[r.length] = i;
  }
  return r;
}
function fp(e) {
  var t = e == null ? 0 : e.length;
  return t ? dp(e) : [];
}
function pp(e) {
  return Ad(Dd(e, void 0, fp), e + "");
}
function qt() {
  if (!arguments.length)
    return [];
  var e = arguments[0];
  return ct(e) ? e : [e];
}
function vp() {
  this.__data__ = new xt(), this.size = 0;
}
function hp(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function gp(e) {
  return this.__data__.get(e);
}
function mp(e) {
  return this.__data__.has(e);
}
var bp = 200;
function yp(e, t) {
  var n = this.__data__;
  if (n instanceof xt) {
    var o = n.__data__;
    if (!no || o.length < bp - 1)
      return o.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new Nt(o);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Rt(e) {
  var t = this.__data__ = new xt(e);
  this.size = t.size;
}
Rt.prototype.clear = vp;
Rt.prototype.delete = hp;
Rt.prototype.get = gp;
Rt.prototype.has = mp;
Rt.prototype.set = yp;
function wp(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, r = 0, s = []; ++n < o; ) {
    var a = e[n];
    t(a, n, e) && (s[r++] = a);
  }
  return s;
}
function _p() {
  return [];
}
var Sp = Object.prototype, Cp = Sp.propertyIsEnumerable, ys = Object.getOwnPropertySymbols, Ep = ys ? function(e) {
  return e == null ? [] : (e = Object(e), wp(ys(e), function(t) {
    return Cp.call(e, t);
  }));
} : _p;
function Tp(e, t, n) {
  var o = t(e);
  return ct(e) ? o : Ki(o, n(e));
}
function ws(e) {
  return Tp(e, Ui, Ep);
}
var Ir = bn(_t, "DataView"), $r = bn(_t, "Promise"), Ar = bn(_t, "Set"), _s = "[object Map]", Op = "[object Object]", Ss = "[object Promise]", Cs = "[object Set]", Es = "[object WeakMap]", Ts = "[object DataView]", Ip = mn(Ir), $p = mn(no), Ap = mn($r), Pp = mn(Ar), Rp = mn(Tr), Gt = kn;
(Ir && Gt(new Ir(new ArrayBuffer(1))) != Ts || no && Gt(new no()) != _s || $r && Gt($r.resolve()) != Ss || Ar && Gt(new Ar()) != Cs || Tr && Gt(new Tr()) != Es) && (Gt = function(e) {
  var t = kn(e), n = t == Op ? e.constructor : void 0, o = n ? mn(n) : "";
  if (o)
    switch (o) {
      case Ip:
        return Ts;
      case $p:
        return _s;
      case Ap:
        return Ss;
      case Pp:
        return Cs;
      case Rp:
        return Es;
    }
  return t;
});
var Os = _t.Uint8Array, Mp = "__lodash_hash_undefined__";
function Lp(e) {
  return this.__data__.set(e, Mp), this;
}
function xp(e) {
  return this.__data__.has(e);
}
function ko(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new Nt(); ++t < n; )
    this.add(e[t]);
}
ko.prototype.add = ko.prototype.push = Lp;
ko.prototype.has = xp;
function Np(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length; ++n < o; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function kp(e, t) {
  return e.has(t);
}
var Dp = 1, Bp = 2;
function Gi(e, t, n, o, r, s) {
  var a = n & Dp, i = e.length, l = t.length;
  if (i != l && !(a && l > i))
    return !1;
  var u = s.get(e), p = s.get(t);
  if (u && p)
    return u == t && p == e;
  var f = -1, v = !0, g = n & Bp ? new ko() : void 0;
  for (s.set(e, t), s.set(t, e); ++f < i; ) {
    var d = e[f], h = t[f];
    if (o)
      var b = a ? o(h, d, f, t, e, s) : o(d, h, f, e, t, s);
    if (b !== void 0) {
      if (b)
        continue;
      v = !1;
      break;
    }
    if (g) {
      if (!Np(t, function(m, C) {
        if (!kp(g, C) && (d === m || r(d, m, n, o, s)))
          return g.push(C);
      })) {
        v = !1;
        break;
      }
    } else if (!(d === h || r(d, h, n, o, s))) {
      v = !1;
      break;
    }
  }
  return s.delete(e), s.delete(t), v;
}
function Fp(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o, r) {
    n[++t] = [r, o];
  }), n;
}
function zp(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o) {
    n[++t] = o;
  }), n;
}
var Vp = 1, Hp = 2, Wp = "[object Boolean]", jp = "[object Date]", Up = "[object Error]", Kp = "[object Map]", Gp = "[object Number]", qp = "[object RegExp]", Yp = "[object Set]", Zp = "[object String]", Xp = "[object Symbol]", Jp = "[object ArrayBuffer]", Qp = "[object DataView]", Is = yt ? yt.prototype : void 0, pr = Is ? Is.valueOf : void 0;
function ev(e, t, n, o, r, s, a) {
  switch (n) {
    case Qp:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Jp:
      return !(e.byteLength != t.byteLength || !s(new Os(e), new Os(t)));
    case Wp:
    case jp:
    case Gp:
      return ea(+e, +t);
    case Up:
      return e.name == t.name && e.message == t.message;
    case qp:
    case Zp:
      return e == t + "";
    case Kp:
      var i = Fp;
    case Yp:
      var l = o & Vp;
      if (i || (i = zp), e.size != t.size && !l)
        return !1;
      var u = a.get(e);
      if (u)
        return u == t;
      o |= Hp, a.set(e, t);
      var p = Gi(i(e), i(t), o, r, s, a);
      return a.delete(e), p;
    case Xp:
      if (pr)
        return pr.call(e) == pr.call(t);
  }
  return !1;
}
var tv = 1, nv = Object.prototype, ov = nv.hasOwnProperty;
function rv(e, t, n, o, r, s) {
  var a = n & tv, i = ws(e), l = i.length, u = ws(t), p = u.length;
  if (l != p && !a)
    return !1;
  for (var f = l; f--; ) {
    var v = i[f];
    if (!(a ? v in t : ov.call(t, v)))
      return !1;
  }
  var g = s.get(e), d = s.get(t);
  if (g && d)
    return g == t && d == e;
  var h = !0;
  s.set(e, t), s.set(t, e);
  for (var b = a; ++f < l; ) {
    v = i[f];
    var m = e[v], C = t[v];
    if (o)
      var O = a ? o(C, m, v, t, e, s) : o(m, C, v, e, t, s);
    if (!(O === void 0 ? m === C || r(m, C, n, o, s) : O)) {
      h = !1;
      break;
    }
    b || (b = v == "constructor");
  }
  if (h && !b) {
    var $ = e.constructor, S = t.constructor;
    $ != S && "constructor" in e && "constructor" in t && !(typeof $ == "function" && $ instanceof $ && typeof S == "function" && S instanceof S) && (h = !1);
  }
  return s.delete(e), s.delete(t), h;
}
var av = 1, $s = "[object Arguments]", As = "[object Array]", mo = "[object Object]", sv = Object.prototype, Ps = sv.hasOwnProperty;
function iv(e, t, n, o, r, s) {
  var a = ct(e), i = ct(t), l = a ? As : Gt(e), u = i ? As : Gt(t);
  l = l == $s ? mo : l, u = u == $s ? mo : u;
  var p = l == mo, f = u == mo, v = l == u;
  if (v && Or(e)) {
    if (!Or(t))
      return !1;
    a = !0, p = !1;
  }
  if (v && !p)
    return s || (s = new Rt()), a || ji(e) ? Gi(e, t, n, o, r, s) : ev(e, t, l, n, o, r, s);
  if (!(n & av)) {
    var g = p && Ps.call(e, "__wrapped__"), d = f && Ps.call(t, "__wrapped__");
    if (g || d) {
      var h = g ? e.value() : e, b = d ? t.value() : t;
      return s || (s = new Rt()), r(h, b, n, o, s);
    }
  }
  return v ? (s || (s = new Rt()), rv(e, t, n, o, r, s)) : !1;
}
function Yo(e, t, n, o, r) {
  return e === t ? !0 : e == null || t == null || !In(e) && !In(t) ? e !== e && t !== t : iv(e, t, n, o, Yo, r);
}
var lv = 1, uv = 2;
function cv(e, t, n, o) {
  var r = n.length, s = r;
  if (e == null)
    return !s;
  for (e = Object(e); r--; ) {
    var a = n[r];
    if (a[2] ? a[1] !== e[a[0]] : !(a[0] in e))
      return !1;
  }
  for (; ++r < s; ) {
    a = n[r];
    var i = a[0], l = e[i], u = a[1];
    if (a[2]) {
      if (l === void 0 && !(i in e))
        return !1;
    } else {
      var p = new Rt(), f;
      if (!(f === void 0 ? Yo(u, l, lv | uv, o, p) : f))
        return !1;
    }
  }
  return !0;
}
function qi(e) {
  return e === e && !Qt(e);
}
function dv(e) {
  for (var t = Ui(e), n = t.length; n--; ) {
    var o = t[n], r = e[o];
    t[n] = [o, r, qi(r)];
  }
  return t;
}
function Yi(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function fv(e) {
  var t = dv(e);
  return t.length == 1 && t[0][2] ? Yi(t[0][0], t[0][1]) : function(n) {
    return n === e || cv(n, e, t);
  };
}
function pv(e, t) {
  return e != null && t in Object(e);
}
function vv(e, t, n) {
  t = qo(t, e);
  for (var o = -1, r = t.length, s = !1; ++o < r; ) {
    var a = ao(t[o]);
    if (!(s = e != null && n(e, a)))
      break;
    e = e[a];
  }
  return s || ++o != r ? s : (r = e == null ? 0 : e.length, !!r && ta(r) && Qr(a, r) && (ct(e) || na(e)));
}
function Zi(e, t) {
  return e != null && vv(e, t, pv);
}
var hv = 1, gv = 2;
function mv(e, t) {
  return oa(e) && qi(t) ? Yi(ao(e), t) : function(n) {
    var o = Yt(n, e);
    return o === void 0 && o === t ? Zi(n, e) : Yo(t, o, hv | gv);
  };
}
function bv(e) {
  return function(t) {
    return t?.[e];
  };
}
function yv(e) {
  return function(t) {
    return aa(t, e);
  };
}
function wv(e) {
  return oa(e) ? bv(ao(e)) : yv(e);
}
function _v(e) {
  return typeof e == "function" ? e : e == null ? Fi : typeof e == "object" ? ct(e) ? mv(e[0], e[1]) : fv(e) : wv(e);
}
var vr = function() {
  return _t.Date.now();
}, Sv = "Expected a function", Cv = Math.max, Ev = Math.min;
function Tv(e, t, n) {
  var o, r, s, a, i, l, u = 0, p = !1, f = !1, v = !0;
  if (typeof e != "function")
    throw new TypeError(Sv);
  t = cs(t) || 0, Qt(n) && (p = !!n.leading, f = "maxWait" in n, s = f ? Cv(cs(n.maxWait) || 0, t) : s, v = "trailing" in n ? !!n.trailing : v);
  function g(I) {
    var E = o, F = r;
    return o = r = void 0, u = I, a = e.apply(F, E), a;
  }
  function d(I) {
    return u = I, i = setTimeout(m, t), p ? g(I) : a;
  }
  function h(I) {
    var E = I - l, F = I - u, T = t - E;
    return f ? Ev(T, s - F) : T;
  }
  function b(I) {
    var E = I - l, F = I - u;
    return l === void 0 || E >= t || E < 0 || f && F >= s;
  }
  function m() {
    var I = vr();
    if (b(I))
      return C(I);
    i = setTimeout(m, h(I));
  }
  function C(I) {
    return i = void 0, v && o ? g(I) : (o = r = void 0, a);
  }
  function O() {
    i !== void 0 && clearTimeout(i), u = 0, o = l = r = i = void 0;
  }
  function $() {
    return i === void 0 ? a : C(vr());
  }
  function S() {
    var I = vr(), E = b(I);
    if (o = arguments, r = this, l = I, E) {
      if (i === void 0)
        return d(l);
      if (f)
        return clearTimeout(i), i = setTimeout(m, t), g(l);
    }
    return i === void 0 && (i = setTimeout(m, t)), a;
  }
  return S.cancel = O, S.flush = $, S;
}
function Ov(e, t, n) {
  var o = e == null ? 0 : e.length;
  if (!o)
    return -1;
  var r = o - 1;
  return Pd(e, _v(t), r);
}
function Do(e) {
  for (var t = -1, n = e == null ? 0 : e.length, o = {}; ++t < n; ) {
    var r = e[t];
    o[r[0]] = r[1];
  }
  return o;
}
function Yn(e, t) {
  return Yo(e, t);
}
function Zo(e) {
  return e == null;
}
function Xi(e) {
  return e === void 0;
}
function Iv(e, t, n, o) {
  if (!Qt(e))
    return e;
  t = qo(t, e);
  for (var r = -1, s = t.length, a = s - 1, i = e; i != null && ++r < s; ) {
    var l = ao(t[r]), u = n;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return e;
    if (r != a) {
      var p = i[l];
      u = void 0, u === void 0 && (u = Qt(p) ? p : Qr(t[r + 1]) ? [] : {});
    }
    kd(i, l, u), i = i[l];
  }
  return e;
}
function $v(e, t, n) {
  for (var o = -1, r = t.length, s = {}; ++o < r; ) {
    var a = t[o], i = aa(e, a);
    n(i, a) && Iv(s, qo(a, e), i);
  }
  return s;
}
function Av(e, t) {
  return $v(e, t, function(n, o) {
    return Zi(e, o);
  });
}
var Pv = pp(function(e, t) {
  return e == null ? {} : Av(e, t);
});
const Tn = (e) => e === void 0, pn = (e) => typeof e == "boolean", me = (e) => typeof e == "number", Xe = (e) => typeof Element > "u" ? !1 : e instanceof Element, Rv = (e) => _e(e) ? !Number.isNaN(Number(e)) : !1;
var Mv = Object.defineProperty, Lv = Object.defineProperties, xv = Object.getOwnPropertyDescriptors, Rs = Object.getOwnPropertySymbols, Nv = Object.prototype.hasOwnProperty, kv = Object.prototype.propertyIsEnumerable, Ms = (e, t, n) => t in e ? Mv(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Dv = (e, t) => {
  for (var n in t || (t = {}))
    Nv.call(t, n) && Ms(e, n, t[n]);
  if (Rs)
    for (var n of Rs(t))
      kv.call(t, n) && Ms(e, n, t[n]);
  return e;
}, Bv = (e, t) => Lv(e, xv(t));
function Fv(e, t) {
  var n;
  const o = cn();
  return jr(() => {
    o.value = e();
  }, Bv(Dv({}, t), {
    flush: (n = void 0) != null ? n : "sync"
  })), Wr(o);
}
var Ls;
const ce = typeof window < "u", xs = (e) => typeof e == "function", zv = (e) => typeof e == "string", Ji = () => {
}, Pr = ce && ((Ls = window?.navigator) == null ? void 0 : Ls.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function sa(e) {
  return typeof e == "function" ? e() : c(e);
}
function Vv(e) {
  return e;
}
function Hv(e, t) {
  let n, o, r;
  const s = A(!0), a = () => {
    s.value = !0, r();
  };
  X(e, a, { flush: "sync" });
  const i = xs(t) ? t : t.get, l = xs(t) ? void 0 : t.set, u = zu((p, f) => (o = p, r = f, {
    get() {
      return s.value && (n = i(), s.value = !1), o(), n;
    },
    set(v) {
      l?.(v);
    }
  }));
  return Object.isExtensible(u) && (u.trigger = a), u;
}
function so(e) {
  return Fu() ? (Oi(e), !0) : !1;
}
function Wv(e, t = !0) {
  Ae() ? be(e) : t ? e() : fe(e);
}
function Bo(e, t, n = {}) {
  const {
    immediate: o = !0
  } = n, r = A(!1);
  let s = null;
  function a() {
    s && (clearTimeout(s), s = null);
  }
  function i() {
    r.value = !1, a();
  }
  function l(...u) {
    a(), r.value = !0, s = setTimeout(() => {
      r.value = !1, s = null, e(...u);
    }, sa(t));
  }
  return o && (r.value = !0, ce && l()), so(i), {
    isPending: Wr(r),
    start: l,
    stop: i
  };
}
function At(e) {
  var t;
  const n = sa(e);
  return (t = n?.$el) != null ? t : n;
}
const io = ce ? window : void 0;
function Le(...e) {
  let t, n, o, r;
  if (zv(e[0]) || Array.isArray(e[0]) ? ([n, o, r] = e, t = io) : [t, n, o, r] = e, !t)
    return Ji;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const s = [], a = () => {
    s.forEach((p) => p()), s.length = 0;
  }, i = (p, f, v, g) => (p.addEventListener(f, v, g), () => p.removeEventListener(f, v, g)), l = X(() => [At(t), sa(r)], ([p, f]) => {
    a(), p && s.push(...n.flatMap((v) => o.map((g) => i(p, v, g, f))));
  }, { immediate: !0, flush: "post" }), u = () => {
    l(), a();
  };
  return so(u), u;
}
let Ns = !1;
function jv(e, t, n = {}) {
  const { window: o = io, ignore: r = [], capture: s = !0, detectIframe: a = !1 } = n;
  if (!o)
    return;
  Pr && !Ns && (Ns = !0, Array.from(o.document.body.children).forEach((v) => v.addEventListener("click", Ji)));
  let i = !0;
  const l = (v) => r.some((g) => {
    if (typeof g == "string")
      return Array.from(o.document.querySelectorAll(g)).some((d) => d === v.target || v.composedPath().includes(d));
    {
      const d = At(g);
      return d && (v.target === d || v.composedPath().includes(d));
    }
  }), p = [
    Le(o, "click", (v) => {
      const g = At(e);
      if (!(!g || g === v.target || v.composedPath().includes(g))) {
        if (v.detail === 0 && (i = !l(v)), !i) {
          i = !0;
          return;
        }
        t(v);
      }
    }, { passive: !0, capture: s }),
    Le(o, "pointerdown", (v) => {
      const g = At(e);
      g && (i = !v.composedPath().includes(g) && !l(v));
    }, { passive: !0 }),
    a && Le(o, "blur", (v) => {
      var g;
      const d = At(e);
      ((g = o.document.activeElement) == null ? void 0 : g.tagName) === "IFRAME" && !d?.contains(o.document.activeElement) && t(v);
    })
  ].filter(Boolean);
  return () => p.forEach((v) => v());
}
function Uv(e = {}) {
  var t;
  const { window: n = io } = e, o = (t = e.document) != null ? t : n?.document, r = Hv(() => null, () => o?.activeElement);
  return n && (Le(n, "blur", (s) => {
    s.relatedTarget === null && r.trigger();
  }, !0), Le(n, "focus", r.trigger, !0)), r;
}
function Qi(e, t = !1) {
  const n = A(), o = () => n.value = !!e();
  return o(), Wv(o, t), n;
}
const ks = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ds = "__vueuse_ssr_handlers__";
ks[Ds] = ks[Ds] || {};
var Bs = Object.getOwnPropertySymbols, Kv = Object.prototype.hasOwnProperty, Gv = Object.prototype.propertyIsEnumerable, qv = (e, t) => {
  var n = {};
  for (var o in e)
    Kv.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && Bs)
    for (var o of Bs(e))
      t.indexOf(o) < 0 && Gv.call(e, o) && (n[o] = e[o]);
  return n;
};
function st(e, t, n = {}) {
  const o = n, { window: r = io } = o, s = qv(o, ["window"]);
  let a;
  const i = Qi(() => r && "ResizeObserver" in r), l = () => {
    a && (a.disconnect(), a = void 0);
  }, u = X(() => At(e), (f) => {
    l(), i.value && r && f && (a = new ResizeObserver(t), a.observe(f, s));
  }, { immediate: !0, flush: "post" }), p = () => {
    l(), u();
  };
  return so(p), {
    isSupported: i,
    stop: p
  };
}
var Fs = Object.getOwnPropertySymbols, Yv = Object.prototype.hasOwnProperty, Zv = Object.prototype.propertyIsEnumerable, Xv = (e, t) => {
  var n = {};
  for (var o in e)
    Yv.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && Fs)
    for (var o of Fs(e))
      t.indexOf(o) < 0 && Zv.call(e, o) && (n[o] = e[o]);
  return n;
};
function Jv(e, t, n = {}) {
  const o = n, { window: r = io } = o, s = Xv(o, ["window"]);
  let a;
  const i = Qi(() => r && "MutationObserver" in r), l = () => {
    a && (a.disconnect(), a = void 0);
  }, u = X(() => At(e), (f) => {
    l(), i.value && r && f && (a = new MutationObserver(t), a.observe(f, s));
  }, { immediate: !0 }), p = () => {
    l(), u();
  };
  return so(p), {
    isSupported: i,
    stop: p
  };
}
var zs;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(zs || (zs = {}));
var Qv = Object.defineProperty, Vs = Object.getOwnPropertySymbols, eh = Object.prototype.hasOwnProperty, th = Object.prototype.propertyIsEnumerable, Hs = (e, t, n) => t in e ? Qv(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, nh = (e, t) => {
  for (var n in t || (t = {}))
    eh.call(t, n) && Hs(e, n, t[n]);
  if (Vs)
    for (var n of Vs(t))
      th.call(t, n) && Hs(e, n, t[n]);
  return e;
};
const oh = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
nh({
  linear: Vv
}, oh);
class el extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function tl(e, t) {
  throw new el(`[${e}] ${t}`);
}
function Se(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = _e(e) ? new el(`[${e}] ${t}`) : e;
    console.warn(n);
  }
}
const Ws = {
  current: 0
}, js = A(0), nl = 2e3, Us = Symbol("elZIndexContextKey"), ol = Symbol("zIndexContextKey"), ia = (e) => {
  const t = Ae() ? ae(Us, Ws) : Ws, n = e || (Ae() ? ae(ol, void 0) : void 0), o = y(() => {
    const a = c(n);
    return me(a) ? a : nl;
  }), r = y(() => o.value + js.value), s = () => (t.current++, js.value = t.current, r.value);
  return !ce && !ae(Us) && Se("ZIndexInjection", `Looks like you are using server rendering, you must provide a z-index provider to ensure the hydration process to be succeed
usage: app.provide(ZINDEX_INJECTION_KEY, { current: 0 })`), {
    initialZIndex: o,
    currentZIndex: r,
    nextZIndex: s
  };
};
var rh = {
  name: "en",
  el: {
    breadcrumb: {
      label: "Breadcrumb"
    },
    colorpicker: {
      confirm: "OK",
      clear: "Clear",
      defaultLabel: "color picker",
      description: "current color is {color}. press enter to select a new color.",
      alphaLabel: "pick alpha value"
    },
    datepicker: {
      now: "Now",
      today: "Today",
      cancel: "Cancel",
      clear: "Clear",
      confirm: "OK",
      dateTablePrompt: "Use the arrow keys and enter to select the day of the month",
      monthTablePrompt: "Use the arrow keys and enter to select the month",
      yearTablePrompt: "Use the arrow keys and enter to select the year",
      selectedDate: "Selected date",
      selectDate: "Select date",
      selectTime: "Select time",
      startDate: "Start Date",
      startTime: "Start Time",
      endDate: "End Date",
      endTime: "End Time",
      prevYear: "Previous Year",
      nextYear: "Next Year",
      prevMonth: "Previous Month",
      nextMonth: "Next Month",
      year: "",
      month1: "January",
      month2: "February",
      month3: "March",
      month4: "April",
      month5: "May",
      month6: "June",
      month7: "July",
      month8: "August",
      month9: "September",
      month10: "October",
      month11: "November",
      month12: "December",
      week: "week",
      weeks: {
        sun: "Sun",
        mon: "Mon",
        tue: "Tue",
        wed: "Wed",
        thu: "Thu",
        fri: "Fri",
        sat: "Sat"
      },
      weeksFull: {
        sun: "Sunday",
        mon: "Monday",
        tue: "Tuesday",
        wed: "Wednesday",
        thu: "Thursday",
        fri: "Friday",
        sat: "Saturday"
      },
      months: {
        jan: "Jan",
        feb: "Feb",
        mar: "Mar",
        apr: "Apr",
        may: "May",
        jun: "Jun",
        jul: "Jul",
        aug: "Aug",
        sep: "Sep",
        oct: "Oct",
        nov: "Nov",
        dec: "Dec"
      }
    },
    inputNumber: {
      decrease: "decrease number",
      increase: "increase number"
    },
    select: {
      loading: "Loading",
      noMatch: "No matching data",
      noData: "No data",
      placeholder: "Select"
    },
    mention: {
      loading: "Loading"
    },
    dropdown: {
      toggleDropdown: "Toggle Dropdown"
    },
    cascader: {
      noMatch: "No matching data",
      loading: "Loading",
      placeholder: "Select",
      noData: "No data"
    },
    pagination: {
      goto: "Go to",
      pagesize: "/page",
      total: "Total {total}",
      pageClassifier: "",
      page: "Page",
      prev: "Go to previous page",
      next: "Go to next page",
      currentPage: "page {pager}",
      prevPages: "Previous {pager} pages",
      nextPages: "Next {pager} pages",
      deprecationWarning: "Deprecated usages detected, please refer to the el-pagination documentation for more details"
    },
    dialog: {
      close: "Close this dialog"
    },
    drawer: {
      close: "Close this dialog"
    },
    messagebox: {
      title: "Message",
      confirm: "OK",
      cancel: "Cancel",
      error: "Illegal input",
      close: "Close this dialog"
    },
    upload: {
      deleteTip: "press delete to remove",
      delete: "Delete",
      preview: "Preview",
      continue: "Continue"
    },
    slider: {
      defaultLabel: "slider between {min} and {max}",
      defaultRangeStartLabel: "pick start value",
      defaultRangeEndLabel: "pick end value"
    },
    table: {
      emptyText: "No Data",
      confirmFilter: "Confirm",
      resetFilter: "Reset",
      clearFilter: "All",
      sumText: "Sum"
    },
    tour: {
      next: "Next",
      previous: "Previous",
      finish: "Finish"
    },
    tree: {
      emptyText: "No Data"
    },
    transfer: {
      noMatch: "No matching data",
      noData: "No data",
      titles: ["List 1", "List 2"],
      filterPlaceholder: "Enter keyword",
      noCheckedFormat: "{total} items",
      hasCheckedFormat: "{checked}/{total} checked"
    },
    image: {
      error: "FAILED"
    },
    pageHeader: {
      title: "Back"
    },
    popconfirm: {
      confirmButtonText: "Yes",
      cancelButtonText: "No"
    },
    carousel: {
      leftArrow: "Carousel arrow left",
      rightArrow: "Carousel arrow right",
      indicator: "Carousel switch to index {index}"
    }
  }
};
const ah = (e) => (t, n) => sh(t, n, c(e)), sh = (e, t, n) => Yt(n, e, e).replace(/\{(\w+)\}/g, (o, r) => {
  var s;
  return `${(s = t?.[r]) != null ? s : `{${r}}`}`;
}), ih = (e) => {
  const t = y(() => c(e).name), n = Ur(e) ? e : A(e);
  return {
    lang: t,
    locale: n,
    t: ah(e)
  };
}, rl = Symbol("localeContextKey"), la = (e) => {
  const t = e || ae(rl, A());
  return ih(y(() => t.value || rh));
}, al = "__epPropKey", Y = (e) => e, lh = (e) => $e(e) && !!e[al], Xo = (e, t) => {
  if (!$e(e) || lh(e))
    return e;
  const { values: n, required: o, default: r, type: s, validator: a } = e, l = {
    type: s,
    required: !!o,
    validator: n || a ? (u) => {
      let p = !1, f = [];
      if (n && (f = Array.from(n), xa(e, "default") && f.push(r), p || (p = f.includes(u))), a && (p || (p = a(u))), !p && f.length > 0) {
        const v = [...new Set(f)].map((g) => JSON.stringify(g)).join(", ");
        Nn(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${v}], got value ${JSON.stringify(u)}.`);
      }
      return p;
    } : void 0,
    [al]: !0
  };
  return xa(e, "default") && (l.default = r), l;
}, se = (e) => Do(Object.entries(e).map(([t, n]) => [
  t,
  Xo(n, t)
])), sl = ["", "default", "small", "large"], Jo = Xo({
  type: String,
  values: sl,
  required: !1
}), il = Symbol("size"), uh = () => {
  const e = ae(il, {});
  return y(() => c(e.size) || "");
}, ll = Symbol("emptyValuesContextKey"), ch = "use-empty-values", dh = ["", void 0, null], fh = void 0, ph = se({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => ge(e) ? !e() : !e
  }
}), vh = (e, t) => {
  const n = Ae() ? ae(ll, A({})) : A({}), o = y(() => e.emptyValues || n.value.emptyValues || dh), r = y(() => ge(e.valueOnClear) ? e.valueOnClear() : e.valueOnClear !== void 0 ? e.valueOnClear : ge(n.value.valueOnClear) ? n.value.valueOnClear() : n.value.valueOnClear !== void 0 ? n.value.valueOnClear : fh), s = (a) => o.value.includes(a);
  return o.value.includes(r.value) || Se(ch, "value-on-clear should be a value of empty-values"), {
    emptyValues: o,
    valueOnClear: r,
    isEmptyValue: s
  };
}, Ks = (e) => Object.keys(e), Fo = A();
function Qo(e, t = void 0) {
  const n = Ae() ? ae(xi, Fo) : Fo;
  return e ? y(() => {
    var o, r;
    return (r = (o = n.value) == null ? void 0 : o[e]) != null ? r : t;
  }) : n;
}
function ul(e, t) {
  const n = Qo(), o = de(e, y(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.namespace) || Gn;
  })), r = la(y(() => {
    var i;
    return (i = n.value) == null ? void 0 : i.locale;
  })), s = ia(y(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.zIndex) || nl;
  })), a = y(() => {
    var i;
    return c(t) || ((i = n.value) == null ? void 0 : i.size) || "";
  });
  return hh(y(() => c(n) || {})), {
    ns: o,
    locale: r,
    zIndex: s,
    size: a
  };
}
const hh = (e, t, n = !1) => {
  var o;
  const r = !!Ae(), s = r ? Qo() : void 0, a = (o = void 0) != null ? o : r ? Qe : void 0;
  if (!a) {
    Se("provideGlobalConfig", "provideGlobalConfig() can only be used inside setup().");
    return;
  }
  const i = y(() => {
    const l = c(e);
    return s?.value ? gh(s.value, l) : l;
  });
  return a(xi, i), a(rl, y(() => i.value.locale)), a(Ni, y(() => i.value.namespace)), a(ol, y(() => i.value.zIndex)), a(il, {
    size: y(() => i.value.size || "")
  }), a(ll, y(() => ({
    emptyValues: i.value.emptyValues,
    valueOnClear: i.value.valueOnClear
  }))), (n || !Fo.value) && (Fo.value = i.value), i;
}, gh = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...Ks(e), ...Ks(t)])], o = {};
  for (const r of n)
    o[r] = t[r] !== void 0 ? t[r] : e[r];
  return o;
}, Ke = "update:modelValue", $n = "change", Gs = "input";
var ie = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
};
const mh = "utils/dom/style", cl = (e = "") => e.split(" ").filter((t) => !!t.trim()), qs = (e, t) => {
  if (!e || !t)
    return !1;
  if (t.includes(" "))
    throw new Error("className should not contain space.");
  return e.classList.contains(t);
}, bh = (e, t) => {
  !e || !t.trim() || e.classList.add(...cl(t));
}, yh = (e, t) => {
  !e || !t.trim() || e.classList.remove(...cl(t));
}, wh = (e, t) => {
  var n;
  if (!ce || !e)
    return "";
  let o = Hr(t);
  o === "float" && (o = "cssFloat");
  try {
    const r = e.style[o];
    if (r)
      return r;
    const s = (n = document.defaultView) == null ? void 0 : n.getComputedStyle(e, "");
    return s ? s[o] : "";
  } catch {
    return e.style[o];
  }
};
function en(e, t = "px") {
  if (!e)
    return "";
  if (me(e) || Rv(e))
    return `${e}${t}`;
  if (_e(e))
    return e;
  Se(mh, "binding value must be a string or number");
}
let bo;
const _h = (e) => {
  var t;
  if (!ce)
    return 0;
  if (bo !== void 0)
    return bo;
  const n = document.createElement("div");
  n.className = `${e}-scrollbar__wrap`, n.style.visibility = "hidden", n.style.width = "100px", n.style.position = "absolute", n.style.top = "-9999px", document.body.appendChild(n);
  const o = n.offsetWidth;
  n.style.overflow = "scroll";
  const r = document.createElement("div");
  r.style.width = "100%", n.appendChild(r);
  const s = r.offsetWidth;
  return (t = n.parentNode) == null || t.removeChild(n), bo = o - s, bo;
};
function Sh(e, t) {
  if (!ce)
    return;
  if (!t) {
    e.scrollTop = 0;
    return;
  }
  const n = [];
  let o = t.offsetParent;
  for (; o !== null && e !== o && e.contains(o); )
    n.push(o), o = o.offsetParent;
  const r = t.offsetTop + n.reduce((l, u) => l + u.offsetTop, 0), s = r + t.offsetHeight, a = e.scrollTop, i = a + e.clientHeight;
  r < a ? e.scrollTop = r : s > i && (e.scrollTop = s - e.clientHeight);
}
const ot = (e, t) => {
  if (e.install = (n) => {
    for (const o of [e, ...Object.values(t ?? {})])
      n.component(o.name, o);
  }, t)
    for (const [n, o] of Object.entries(t))
      e[n] = o;
  return e;
}, dl = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), ua = (e) => (e.install = Pt, e), Ch = se({
  size: {
    type: Y([Number, String])
  },
  color: {
    type: String
  }
}), Eh = V({
  name: "ElIcon",
  inheritAttrs: !1
}), Th = /* @__PURE__ */ V({
  ...Eh,
  props: Ch,
  setup(e) {
    const t = e, n = de("icon"), o = y(() => {
      const { size: r, color: s } = t;
      return !r && !s ? {} : {
        fontSize: Tn(r) ? void 0 : en(r),
        "--color": s
      };
    });
    return (r, s) => (_(), D("i", Xt({
      class: c(n).b(),
      style: c(o)
    }, r.$attrs), [
      G(r.$slots, "default")
    ], 16));
  }
});
var Oh = /* @__PURE__ */ ie(Th, [["__file", "icon.vue"]]);
const xe = ot(Oh);
/*! Element Plus Icons Vue v2.3.1 */
var Ih = /* @__PURE__ */ V({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(e) {
    return (t, n) => (_(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      R("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
      })
    ]));
  }
}), $h = Ih, Ah = /* @__PURE__ */ V({
  name: "CircleCheck",
  __name: "circle-check",
  setup(e) {
    return (t, n) => (_(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      R("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      }),
      R("path", {
        fill: "currentColor",
        d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
      })
    ]));
  }
}), Ph = Ah, Rh = /* @__PURE__ */ V({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (_(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      R("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), Mh = Rh, Lh = /* @__PURE__ */ V({
  name: "CircleClose",
  __name: "circle-close",
  setup(e) {
    return (t, n) => (_(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      R("path", {
        fill: "currentColor",
        d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248z"
      }),
      R("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      })
    ]));
  }
}), ca = Lh, xh = /* @__PURE__ */ V({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (_(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      R("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), zo = xh, Nh = /* @__PURE__ */ V({
  name: "Hide",
  __name: "hide",
  setup(e) {
    return (t, n) => (_(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      R("path", {
        fill: "currentColor",
        d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2zM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"
      }),
      R("path", {
        fill: "currentColor",
        d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"
      })
    ]));
  }
}), kh = Nh, Dh = /* @__PURE__ */ V({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (_(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      R("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), Bh = Dh, Fh = /* @__PURE__ */ V({
  name: "Loading",
  __name: "loading",
  setup(e) {
    return (t, n) => (_(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      R("path", {
        fill: "currentColor",
        d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
      })
    ]));
  }
}), fl = Fh, zh = /* @__PURE__ */ V({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (_(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      R("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), Vh = zh, Hh = /* @__PURE__ */ V({
  name: "View",
  __name: "view",
  setup(e) {
    return (t, n) => (_(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      R("path", {
        fill: "currentColor",
        d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"
      })
    ]));
  }
}), Wh = Hh, jh = /* @__PURE__ */ V({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (_(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      R("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), Uh = jh;
const Mt = Y([
  String,
  Object,
  Function
]), pl = {
  Close: zo
}, Kh = {
  Close: zo
}, Vo = {
  success: Vh,
  warning: Uh,
  error: Mh,
  info: Bh
}, vl = {
  validating: fl,
  success: Ph,
  error: ca
}, Gh = () => ce && /firefox/i.test(window.navigator.userAgent);
let De;
const qh = {
  height: "0",
  visibility: "hidden",
  overflow: Gh() ? "" : "hidden",
  position: "absolute",
  "z-index": "-1000",
  top: "0",
  right: "0"
}, Yh = [
  "letter-spacing",
  "line-height",
  "padding-top",
  "padding-bottom",
  "font-family",
  "font-weight",
  "font-size",
  "text-rendering",
  "text-transform",
  "width",
  "text-indent",
  "padding-left",
  "padding-right",
  "border-width",
  "box-sizing"
];
function Zh(e) {
  const t = window.getComputedStyle(e), n = t.getPropertyValue("box-sizing"), o = Number.parseFloat(t.getPropertyValue("padding-bottom")) + Number.parseFloat(t.getPropertyValue("padding-top")), r = Number.parseFloat(t.getPropertyValue("border-bottom-width")) + Number.parseFloat(t.getPropertyValue("border-top-width"));
  return { contextStyle: Yh.map((a) => [
    a,
    t.getPropertyValue(a)
  ]), paddingSize: o, borderSize: r, boxSizing: n };
}
function Ys(e, t = 1, n) {
  var o;
  De || (De = document.createElement("textarea"), document.body.appendChild(De));
  const { paddingSize: r, borderSize: s, boxSizing: a, contextStyle: i } = Zh(e);
  i.forEach(([f, v]) => De?.style.setProperty(f, v)), Object.entries(qh).forEach(([f, v]) => De?.style.setProperty(f, v, "important")), De.value = e.value || e.placeholder || "";
  let l = De.scrollHeight;
  const u = {};
  a === "border-box" ? l = l + s : a === "content-box" && (l = l - r), De.value = "";
  const p = De.scrollHeight - r;
  if (me(t)) {
    let f = p * t;
    a === "border-box" && (f = f + r + s), l = Math.max(f, l), u.minHeight = `${f}px`;
  }
  if (me(n)) {
    let f = p * n;
    a === "border-box" && (f = f + r + s), l = Math.min(f, l);
  }
  return u.height = `${l}px`, (o = De.parentNode) == null || o.removeChild(De), De = void 0, u;
}
const hl = (e) => e, Xh = se({
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical", "undefined"]
  },
  ariaControls: String
}), Dn = (e) => Pv(Xh, e), Jh = se({
  id: {
    type: String,
    default: void 0
  },
  size: Jo,
  disabled: Boolean,
  modelValue: {
    type: Y([
      String,
      Number,
      Object
    ]),
    default: ""
  },
  maxlength: {
    type: [String, Number]
  },
  minlength: {
    type: [String, Number]
  },
  type: {
    type: String,
    default: "text"
  },
  resize: {
    type: String,
    values: ["none", "both", "horizontal", "vertical"]
  },
  autosize: {
    type: Y([Boolean, Object]),
    default: !1
  },
  autocomplete: {
    type: String,
    default: "off"
  },
  formatter: {
    type: Function
  },
  parser: {
    type: Function
  },
  placeholder: {
    type: String
  },
  form: {
    type: String
  },
  readonly: Boolean,
  clearable: Boolean,
  showPassword: Boolean,
  showWordLimit: Boolean,
  suffixIcon: {
    type: Mt
  },
  prefixIcon: {
    type: Mt
  },
  containerRole: {
    type: String,
    default: void 0
  },
  tabindex: {
    type: [String, Number],
    default: 0
  },
  validateEvent: {
    type: Boolean,
    default: !0
  },
  inputStyle: {
    type: Y([Object, Array, String]),
    default: () => hl({})
  },
  autofocus: Boolean,
  rows: {
    type: Number,
    default: 2
  },
  ...Dn(["ariaLabel"])
}), Qh = {
  [Ke]: (e) => _e(e),
  input: (e) => _e(e),
  change: (e) => _e(e),
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent,
  clear: () => !0,
  mouseleave: (e) => e instanceof MouseEvent,
  mouseenter: (e) => e instanceof MouseEvent,
  keydown: (e) => e instanceof Event,
  compositionstart: (e) => e instanceof CompositionEvent,
  compositionupdate: (e) => e instanceof CompositionEvent,
  compositionend: (e) => e instanceof CompositionEvent
}, eg = ["class", "style"], tg = /^on[A-Z]/, ng = (e = {}) => {
  const { excludeListeners: t = !1, excludeKeys: n } = e, o = y(() => (n?.value || []).concat(eg)), r = Ae();
  return r ? y(() => {
    var s;
    return Do(Object.entries((s = r.proxy) == null ? void 0 : s.$attrs).filter(([a]) => !o.value.includes(a) && !(t && tg.test(a))));
  }) : (Se("use-attrs", "getCurrentInstance() returned null. useAttrs() must be called at the top of a setup function"), y(() => ({})));
}, da = Symbol("formContextKey"), Ho = Symbol("formItemContextKey"), Rr = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, og = Symbol("elIdInjection"), gl = () => Ae() ? ae(og, Rr) : Rr, vn = (e) => {
  const t = gl();
  !ce && t === Rr && Se("IdInjection", `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`);
  const n = Jr();
  return Fv(() => c(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
}, er = () => {
  const e = ae(da, void 0), t = ae(Ho, void 0);
  return {
    form: e,
    formItem: t
  };
}, fa = (e, {
  formItemContext: t,
  disableIdGeneration: n,
  disableIdManagement: o
}) => {
  n || (n = A(!1)), o || (o = A(!1));
  const r = A();
  let s;
  const a = y(() => {
    var i;
    return !!(!(e.label || e.ariaLabel) && t && t.inputIds && ((i = t.inputIds) == null ? void 0 : i.length) <= 1);
  });
  return be(() => {
    s = X([it(e, "id"), n], ([i, l]) => {
      const u = i ?? (l ? void 0 : vn().value);
      u !== r.value && (t?.removeInputId && (r.value && t.removeInputId(r.value), !o?.value && !l && u && t.addInputId(u)), r.value = u);
    }, { immediate: !0 });
  }), Kr(() => {
    s && s(), t?.removeInputId && r.value && t.removeInputId(r.value);
  }), {
    isLabeledByFormItem: a,
    inputId: r
  };
}, ml = (e) => {
  const t = Ae();
  return y(() => {
    var n, o;
    return (o = (n = t?.proxy) == null ? void 0 : n.$props) == null ? void 0 : o[e];
  });
}, lo = (e, t = {}) => {
  const n = A(void 0), o = t.prop ? n : ml("size"), r = t.global ? n : uh(), s = t.form ? { size: void 0 } : ae(da, void 0), a = t.formItem ? { size: void 0 } : ae(Ho, void 0);
  return y(() => o.value || c(e) || a?.size || s?.size || r.value || "");
}, tr = (e) => {
  const t = ml("disabled"), n = ae(da, void 0);
  return y(() => t.value || c(e) || n?.disabled || !1);
};
function bl(e, {
  beforeFocus: t,
  afterFocus: n,
  beforeBlur: o,
  afterBlur: r
} = {}) {
  const s = Ae(), { emit: a } = s, i = cn(), l = A(!1), u = (v) => {
    ge(t) && t(v) || l.value || (l.value = !0, a("focus", v), n?.());
  }, p = (v) => {
    var g;
    ge(o) && o(v) || v.relatedTarget && ((g = i.value) != null && g.contains(v.relatedTarget)) || (l.value = !1, a("blur", v), r?.());
  }, f = () => {
    var v, g;
    (v = i.value) != null && v.contains(document.activeElement) && i.value !== document.activeElement || (g = e.value) == null || g.focus();
  };
  return X(i, (v) => {
    v && v.setAttribute("tabindex", "-1");
  }), Le(i, "focus", u, !0), Le(i, "blur", p, !0), Le(i, "click", f, !0), process.env.NODE_ENV === "test" && be(() => {
    const v = Xe(e.value) ? e.value : document.querySelector("input,textarea");
    v && (Le(v, "focus", u, !0), Le(v, "blur", p, !0));
  }), {
    isFocused: l,
    wrapperRef: i,
    handleFocus: u,
    handleBlur: p
  };
}
const rg = (e) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e);
function yl({
  afterComposition: e,
  emit: t
}) {
  const n = A(!1), o = (i) => {
    t?.("compositionstart", i), n.value = !0;
  }, r = (i) => {
    var l;
    t?.("compositionupdate", i);
    const u = (l = i.target) == null ? void 0 : l.value, p = u[u.length - 1] || "";
    n.value = !rg(p);
  }, s = (i) => {
    t?.("compositionend", i), n.value && (n.value = !1, fe(() => e(i)));
  };
  return {
    isComposing: n,
    handleComposition: (i) => {
      i.type === "compositionend" ? s(i) : r(i);
    },
    handleCompositionStart: o,
    handleCompositionUpdate: r,
    handleCompositionEnd: s
  };
}
function ag(e) {
  let t;
  function n() {
    if (e.value == null)
      return;
    const { selectionStart: r, selectionEnd: s, value: a } = e.value;
    if (r == null || s == null)
      return;
    const i = a.slice(0, Math.max(0, r)), l = a.slice(Math.max(0, s));
    t = {
      selectionStart: r,
      selectionEnd: s,
      value: a,
      beforeTxt: i,
      afterTxt: l
    };
  }
  function o() {
    if (e.value == null || t == null)
      return;
    const { value: r } = e.value, { beforeTxt: s, afterTxt: a, selectionStart: i } = t;
    if (s == null || a == null || i == null)
      return;
    let l = r.length;
    if (r.endsWith(a))
      l = r.length - a.length;
    else if (r.startsWith(s))
      l = s.length;
    else {
      const u = s[i - 1], p = r.indexOf(u, i - 1);
      p !== -1 && (l = p + 1);
    }
    e.value.setSelectionRange(l, l);
  }
  return [n, o];
}
const wl = "ElInput", sg = V({
  name: wl,
  inheritAttrs: !1
}), ig = /* @__PURE__ */ V({
  ...sg,
  props: Jh,
  emits: Qh,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = Vu(), s = ng(), a = Gr(), i = y(() => [
      o.type === "textarea" ? h.b() : d.b(),
      d.m(v.value),
      d.is("disabled", g.value),
      d.is("exceed", Ve.value),
      {
        [d.b("group")]: a.prepend || a.append,
        [d.m("prefix")]: a.prefix || o.prefixIcon,
        [d.m("suffix")]: a.suffix || o.suffixIcon || o.clearable || o.showPassword,
        [d.bm("suffix", "password-clear")]: le.value && ve.value,
        [d.b("hidden")]: o.type === "hidden"
      },
      r.class
    ]), l = y(() => [
      d.e("wrapper"),
      d.is("focus", F.value)
    ]), { form: u, formItem: p } = er(), { inputId: f } = fa(o, {
      formItemContext: p
    }), v = lo(), g = tr(), d = de("input"), h = de("textarea"), b = cn(), m = cn(), C = A(!1), O = A(!1), $ = A(), S = cn(o.inputStyle), I = y(() => b.value || m.value), { wrapperRef: E, isFocused: F, handleFocus: T, handleBlur: z } = bl(I, {
      beforeFocus() {
        return g.value;
      },
      afterBlur() {
        var x;
        o.validateEvent && ((x = p?.validate) == null || x.call(p, "blur").catch((oe) => Se(oe)));
      }
    }), N = y(() => {
      var x;
      return (x = u?.statusIcon) != null ? x : !1;
    }), P = y(() => p?.validateState || ""), j = y(() => P.value && vl[P.value]), re = y(() => O.value ? Wh : kh), J = y(() => [
      r.style
    ]), Q = y(() => [
      o.inputStyle,
      S.value,
      { resize: o.resize }
    ]), B = y(() => Zo(o.modelValue) ? "" : String(o.modelValue)), le = y(() => o.clearable && !g.value && !o.readonly && !!B.value && (F.value || C.value)), ve = y(() => o.showPassword && !g.value && !!B.value && (!!B.value || F.value)), ye = y(() => o.showWordLimit && !!o.maxlength && (o.type === "text" || o.type === "textarea") && !g.value && !o.readonly && !o.showPassword), rt = y(() => B.value.length), Ve = y(() => !!ye.value && rt.value > Number(o.maxlength)), ft = y(() => !!a.suffix || !!o.suffixIcon || le.value || o.showPassword || ye.value || !!P.value && N.value), [ke, Ce] = ag(b);
    st(m, (x) => {
      if (q(), !ye.value || o.resize !== "both")
        return;
      const oe = x[0], { width: Ze } = oe.contentRect;
      $.value = {
        right: `calc(100% - ${Ze + 15 + 6}px)`
      };
    });
    const K = () => {
      const { type: x, autosize: oe } = o;
      if (!(!ce || x !== "textarea" || !m.value))
        if (oe) {
          const Ze = $e(oe) ? oe.minRows : void 0, zt = $e(oe) ? oe.maxRows : void 0, Vt = Ys(m.value, Ze, zt);
          S.value = {
            overflowY: "hidden",
            ...Vt
          }, fe(() => {
            m.value.offsetHeight, S.value = Vt;
          });
        } else
          S.value = {
            minHeight: Ys(m.value).minHeight
          };
    }, q = ((x) => {
      let oe = !1;
      return () => {
        var Ze;
        if (oe || !o.autosize)
          return;
        ((Ze = m.value) == null ? void 0 : Ze.offsetParent) === null || (x(), oe = !0);
      };
    })(K), he = () => {
      const x = I.value, oe = o.formatter ? o.formatter(B.value) : B.value;
      !x || x.value === oe || (x.value = oe);
    }, Pe = async (x) => {
      ke();
      let { value: oe } = x.target;
      if (o.formatter && o.parser && (oe = o.parser(oe)), !pt.value) {
        if (oe === B.value) {
          he();
          return;
        }
        n(Ke, oe), n(Gs, oe), await fe(), he(), Ce();
      }
    }, He = (x) => {
      let { value: oe } = x.target;
      o.formatter && o.parser && (oe = o.parser(oe)), n($n, oe);
    }, {
      isComposing: pt,
      handleCompositionStart: Re,
      handleCompositionUpdate: kt,
      handleCompositionEnd: St
    } = yl({ emit: n, afterComposition: Pe }), Dt = () => {
      ke(), O.value = !O.value, setTimeout(Ce);
    }, Ct = () => {
      var x;
      return (x = I.value) == null ? void 0 : x.focus();
    }, vt = () => {
      var x;
      return (x = I.value) == null ? void 0 : x.blur();
    }, Bt = (x) => {
      C.value = !1, n("mouseleave", x);
    }, Oe = (x) => {
      C.value = !0, n("mouseenter", x);
    }, Ye = (x) => {
      n("keydown", x);
    }, Ft = () => {
      var x;
      (x = I.value) == null || x.select();
    }, nn = () => {
      n(Ke, ""), n($n, ""), n("clear"), n(Gs, "");
    };
    return X(() => o.modelValue, () => {
      var x;
      fe(() => K()), o.validateEvent && ((x = p?.validate) == null || x.call(p, "change").catch((oe) => Se(oe)));
    }), X(B, () => he()), X(() => o.type, async () => {
      await fe(), he(), K();
    }), be(() => {
      !o.formatter && o.parser && Se(wl, "If you set the parser, you also need to set the formatter."), he(), fe(K);
    }), t({
      input: b,
      textarea: m,
      ref: I,
      textareaStyle: Q,
      autosize: it(o, "autosize"),
      isComposing: pt,
      focus: Ct,
      blur: vt,
      select: Ft,
      clear: nn,
      resizeTextarea: K
    }), (x, oe) => (_(), D("div", {
      class: M([
        c(i),
        {
          [c(d).bm("group", "append")]: x.$slots.append,
          [c(d).bm("group", "prepend")]: x.$slots.prepend
        }
      ]),
      style: pe(c(J)),
      onMouseenter: Oe,
      onMouseleave: Bt
    }, [
      H(" input "),
      x.type !== "textarea" ? (_(), D(Ge, { key: 0 }, [
        H(" prepend slot "),
        x.$slots.prepend ? (_(), D("div", {
          key: 0,
          class: M(c(d).be("group", "prepend"))
        }, [
          G(x.$slots, "prepend")
        ], 2)) : H("v-if", !0),
        R("div", {
          ref_key: "wrapperRef",
          ref: E,
          class: M(c(l))
        }, [
          H(" prefix slot "),
          x.$slots.prefix || x.prefixIcon ? (_(), D("span", {
            key: 0,
            class: M(c(d).e("prefix"))
          }, [
            R("span", {
              class: M(c(d).e("prefix-inner"))
            }, [
              G(x.$slots, "prefix"),
              x.prefixIcon ? (_(), U(c(xe), {
                key: 0,
                class: M(c(d).e("icon"))
              }, {
                default: W(() => [
                  (_(), U(Be(x.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : H("v-if", !0)
            ], 2)
          ], 2)) : H("v-if", !0),
          R("input", Xt({
            id: c(f),
            ref_key: "input",
            ref: b,
            class: c(d).e("inner")
          }, c(s), {
            minlength: x.minlength,
            maxlength: x.maxlength,
            type: x.showPassword ? O.value ? "text" : "password" : x.type,
            disabled: c(g),
            readonly: x.readonly,
            autocomplete: x.autocomplete,
            tabindex: x.tabindex,
            "aria-label": x.ariaLabel,
            placeholder: x.placeholder,
            style: x.inputStyle,
            form: x.form,
            autofocus: x.autofocus,
            role: x.containerRole,
            onCompositionstart: c(Re),
            onCompositionupdate: c(kt),
            onCompositionend: c(St),
            onInput: Pe,
            onChange: He,
            onKeydown: Ye
          }), null, 16, ["id", "minlength", "maxlength", "type", "disabled", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form", "autofocus", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend"]),
          H(" suffix slot "),
          c(ft) ? (_(), D("span", {
            key: 1,
            class: M(c(d).e("suffix"))
          }, [
            R("span", {
              class: M(c(d).e("suffix-inner"))
            }, [
              !c(le) || !c(ve) || !c(ye) ? (_(), D(Ge, { key: 0 }, [
                G(x.$slots, "suffix"),
                x.suffixIcon ? (_(), U(c(xe), {
                  key: 0,
                  class: M(c(d).e("icon"))
                }, {
                  default: W(() => [
                    (_(), U(Be(x.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : H("v-if", !0)
              ], 64)) : H("v-if", !0),
              c(le) ? (_(), U(c(xe), {
                key: 1,
                class: M([c(d).e("icon"), c(d).e("clear")]),
                onMousedown: Me(c(Pt), ["prevent"]),
                onClick: nn
              }, {
                default: W(() => [
                  ee(c(ca))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : H("v-if", !0),
              c(ve) ? (_(), U(c(xe), {
                key: 2,
                class: M([c(d).e("icon"), c(d).e("password")]),
                onClick: Dt
              }, {
                default: W(() => [
                  (_(), U(Be(c(re))))
                ]),
                _: 1
              }, 8, ["class"])) : H("v-if", !0),
              c(ye) ? (_(), D("span", {
                key: 3,
                class: M(c(d).e("count"))
              }, [
                R("span", {
                  class: M(c(d).e("count-inner"))
                }, Z(c(rt)) + " / " + Z(x.maxlength), 3)
              ], 2)) : H("v-if", !0),
              c(P) && c(j) && c(N) ? (_(), U(c(xe), {
                key: 4,
                class: M([
                  c(d).e("icon"),
                  c(d).e("validateIcon"),
                  c(d).is("loading", c(P) === "validating")
                ])
              }, {
                default: W(() => [
                  (_(), U(Be(c(j))))
                ]),
                _: 1
              }, 8, ["class"])) : H("v-if", !0)
            ], 2)
          ], 2)) : H("v-if", !0)
        ], 2),
        H(" append slot "),
        x.$slots.append ? (_(), D("div", {
          key: 1,
          class: M(c(d).be("group", "append"))
        }, [
          G(x.$slots, "append")
        ], 2)) : H("v-if", !0)
      ], 64)) : (_(), D(Ge, { key: 1 }, [
        H(" textarea "),
        R("textarea", Xt({
          id: c(f),
          ref_key: "textarea",
          ref: m,
          class: [c(h).e("inner"), c(d).is("focus", c(F))]
        }, c(s), {
          minlength: x.minlength,
          maxlength: x.maxlength,
          tabindex: x.tabindex,
          disabled: c(g),
          readonly: x.readonly,
          autocomplete: x.autocomplete,
          style: c(Q),
          "aria-label": x.ariaLabel,
          placeholder: x.placeholder,
          form: x.form,
          autofocus: x.autofocus,
          rows: x.rows,
          role: x.containerRole,
          onCompositionstart: c(Re),
          onCompositionupdate: c(kt),
          onCompositionend: c(St),
          onInput: Pe,
          onFocus: c(T),
          onBlur: c(z),
          onChange: He,
          onKeydown: Ye
        }), null, 16, ["id", "minlength", "maxlength", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form", "autofocus", "rows", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onFocus", "onBlur"]),
        c(ye) ? (_(), D("span", {
          key: 0,
          style: pe($.value),
          class: M(c(d).e("count"))
        }, Z(c(rt)) + " / " + Z(x.maxlength), 7)) : H("v-if", !0)
      ], 64))
    ], 38));
  }
});
var lg = /* @__PURE__ */ ie(ig, [["__file", "input.vue"]]);
const ug = ot(lg), Sn = 4, cg = {
  vertical: {
    offset: "offsetHeight",
    scroll: "scrollTop",
    scrollSize: "scrollHeight",
    size: "height",
    key: "vertical",
    axis: "Y",
    client: "clientY",
    direction: "top"
  },
  horizontal: {
    offset: "offsetWidth",
    scroll: "scrollLeft",
    scrollSize: "scrollWidth",
    size: "width",
    key: "horizontal",
    axis: "X",
    client: "clientX",
    direction: "left"
  }
}, dg = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), pa = Symbol("scrollbarContextKey"), fg = se({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), pg = "Thumb", vg = /* @__PURE__ */ V({
  __name: "thumb",
  props: fg,
  setup(e) {
    const t = e, n = ae(pa), o = de("scrollbar");
    n || tl(pg, "can not inject scrollbar context");
    const r = A(), s = A(), a = A({}), i = A(!1);
    let l = !1, u = !1, p = ce ? document.onselectstart : null;
    const f = y(() => cg[t.vertical ? "vertical" : "horizontal"]), v = y(() => dg({
      size: t.size,
      move: t.move,
      bar: f.value
    })), g = y(() => r.value[f.value.offset] ** 2 / n.wrapElement[f.value.scrollSize] / t.ratio / s.value[f.value.offset]), d = (I) => {
      var E;
      if (I.stopPropagation(), I.ctrlKey || [1, 2].includes(I.button))
        return;
      (E = window.getSelection()) == null || E.removeAllRanges(), b(I);
      const F = I.currentTarget;
      F && (a.value[f.value.axis] = F[f.value.offset] - (I[f.value.client] - F.getBoundingClientRect()[f.value.direction]));
    }, h = (I) => {
      if (!s.value || !r.value || !n.wrapElement)
        return;
      const E = Math.abs(I.target.getBoundingClientRect()[f.value.direction] - I[f.value.client]), F = s.value[f.value.offset] / 2, T = (E - F) * 100 * g.value / r.value[f.value.offset];
      n.wrapElement[f.value.scroll] = T * n.wrapElement[f.value.scrollSize] / 100;
    }, b = (I) => {
      I.stopImmediatePropagation(), l = !0, document.addEventListener("mousemove", m), document.addEventListener("mouseup", C), p = document.onselectstart, document.onselectstart = () => !1;
    }, m = (I) => {
      if (!r.value || !s.value || l === !1)
        return;
      const E = a.value[f.value.axis];
      if (!E)
        return;
      const F = (r.value.getBoundingClientRect()[f.value.direction] - I[f.value.client]) * -1, T = s.value[f.value.offset] - E, z = (F - T) * 100 * g.value / r.value[f.value.offset];
      n.wrapElement[f.value.scroll] = z * n.wrapElement[f.value.scrollSize] / 100;
    }, C = () => {
      l = !1, a.value[f.value.axis] = 0, document.removeEventListener("mousemove", m), document.removeEventListener("mouseup", C), S(), u && (i.value = !1);
    }, O = () => {
      u = !1, i.value = !!t.size;
    }, $ = () => {
      u = !0, i.value = l;
    };
    dt(() => {
      S(), document.removeEventListener("mouseup", C);
    });
    const S = () => {
      document.onselectstart !== p && (document.onselectstart = p);
    };
    return Le(it(n, "scrollbarElement"), "mousemove", O), Le(it(n, "scrollbarElement"), "mouseleave", $), (I, E) => (_(), U(gn, {
      name: c(o).b("fade"),
      persisted: ""
    }, {
      default: W(() => [
        Ne(R("div", {
          ref_key: "instance",
          ref: r,
          class: M([c(o).e("bar"), c(o).is(c(f).key)]),
          onMousedown: h
        }, [
          R("div", {
            ref_key: "thumb",
            ref: s,
            class: M(c(o).e("thumb")),
            style: pe(c(v)),
            onMousedown: d
          }, null, 38)
        ], 34), [
          [ut, I.always || i.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var Zs = /* @__PURE__ */ ie(vg, [["__file", "thumb.vue"]]);
const hg = se({
  always: {
    type: Boolean,
    default: !0
  },
  minSize: {
    type: Number,
    required: !0
  }
}), gg = /* @__PURE__ */ V({
  __name: "bar",
  props: hg,
  setup(e, { expose: t }) {
    const n = e, o = ae(pa), r = A(0), s = A(0), a = A(""), i = A(""), l = A(1), u = A(1);
    return t({
      handleScroll: (v) => {
        if (v) {
          const g = v.offsetHeight - Sn, d = v.offsetWidth - Sn;
          s.value = v.scrollTop * 100 / g * l.value, r.value = v.scrollLeft * 100 / d * u.value;
        }
      },
      update: () => {
        const v = o?.wrapElement;
        if (!v)
          return;
        const g = v.offsetHeight - Sn, d = v.offsetWidth - Sn, h = g ** 2 / v.scrollHeight, b = d ** 2 / v.scrollWidth, m = Math.max(h, n.minSize), C = Math.max(b, n.minSize);
        l.value = h / (g - h) / (m / (g - m)), u.value = b / (d - b) / (C / (d - C)), i.value = m + Sn < g ? `${m}px` : "", a.value = C + Sn < d ? `${C}px` : "";
      }
    }), (v, g) => (_(), D(Ge, null, [
      ee(Zs, {
        move: r.value,
        ratio: u.value,
        size: a.value,
        always: v.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      ee(Zs, {
        move: s.value,
        ratio: l.value,
        size: i.value,
        vertical: "",
        always: v.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var mg = /* @__PURE__ */ ie(gg, [["__file", "bar.vue"]]);
const bg = se({
  height: {
    type: [String, Number],
    default: ""
  },
  maxHeight: {
    type: [String, Number],
    default: ""
  },
  native: {
    type: Boolean,
    default: !1
  },
  wrapStyle: {
    type: Y([String, Object, Array]),
    default: ""
  },
  wrapClass: {
    type: [String, Array],
    default: ""
  },
  viewClass: {
    type: [String, Array],
    default: ""
  },
  viewStyle: {
    type: [String, Array, Object],
    default: ""
  },
  noresize: Boolean,
  tag: {
    type: String,
    default: "div"
  },
  always: Boolean,
  minSize: {
    type: Number,
    default: 20
  },
  tabindex: {
    type: [String, Number],
    default: void 0
  },
  id: String,
  role: String,
  ...Dn(["ariaLabel", "ariaOrientation"])
}), yg = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every(me)
}, Mr = "ElScrollbar", wg = V({
  name: Mr
}), _g = /* @__PURE__ */ V({
  ...wg,
  props: bg,
  emits: yg,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = de("scrollbar");
    let s, a, i = 0, l = 0;
    const u = A(), p = A(), f = A(), v = A(), g = y(() => {
      const S = {};
      return o.height && (S.height = en(o.height)), o.maxHeight && (S.maxHeight = en(o.maxHeight)), [o.wrapStyle, S];
    }), d = y(() => [
      o.wrapClass,
      r.e("wrap"),
      { [r.em("wrap", "hidden-default")]: !o.native }
    ]), h = y(() => [r.e("view"), o.viewClass]), b = () => {
      var S;
      p.value && ((S = v.value) == null || S.handleScroll(p.value), i = p.value.scrollTop, l = p.value.scrollLeft, n("scroll", {
        scrollTop: p.value.scrollTop,
        scrollLeft: p.value.scrollLeft
      }));
    };
    function m(S, I) {
      $e(S) ? p.value.scrollTo(S) : me(S) && me(I) && p.value.scrollTo(S, I);
    }
    const C = (S) => {
      if (!me(S)) {
        Se(Mr, "value must be a number");
        return;
      }
      p.value.scrollTop = S;
    }, O = (S) => {
      if (!me(S)) {
        Se(Mr, "value must be a number");
        return;
      }
      p.value.scrollLeft = S;
    }, $ = () => {
      var S;
      (S = v.value) == null || S.update();
    };
    return X(() => o.noresize, (S) => {
      S ? (s?.(), a?.()) : ({ stop: s } = st(f, $), a = Le("resize", $));
    }, { immediate: !0 }), X(() => [o.maxHeight, o.height], () => {
      o.native || fe(() => {
        var S;
        $(), p.value && ((S = v.value) == null || S.handleScroll(p.value));
      });
    }), Qe(pa, Jt({
      scrollbarElement: u,
      wrapElement: p
    })), Hu(() => {
      p.value && (p.value.scrollTop = i, p.value.scrollLeft = l);
    }), be(() => {
      o.native || fe(() => {
        $();
      });
    }), Wu(() => $()), t({
      wrapRef: p,
      update: $,
      scrollTo: m,
      setScrollTop: C,
      setScrollLeft: O,
      handleScroll: b
    }), (S, I) => (_(), D("div", {
      ref_key: "scrollbarRef",
      ref: u,
      class: M(c(r).b())
    }, [
      R("div", {
        ref_key: "wrapRef",
        ref: p,
        class: M(c(d)),
        style: pe(c(g)),
        tabindex: S.tabindex,
        onScroll: b
      }, [
        (_(), U(Be(S.tag), {
          id: S.id,
          ref_key: "resizeRef",
          ref: f,
          class: M(c(h)),
          style: pe(S.viewStyle),
          role: S.role,
          "aria-label": S.ariaLabel,
          "aria-orientation": S.ariaOrientation
        }, {
          default: W(() => [
            G(S.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "class", "style", "role", "aria-label", "aria-orientation"]))
      ], 46, ["tabindex"]),
      S.native ? H("v-if", !0) : (_(), U(mg, {
        key: 0,
        ref_key: "barRef",
        ref: v,
        always: S.always,
        "min-size": S.minSize
      }, null, 8, ["always", "min-size"]))
    ], 2));
  }
});
var Sg = /* @__PURE__ */ ie(_g, [["__file", "scrollbar.vue"]]);
const Cg = ot(Sg), va = Symbol("popper"), _l = Symbol("popperContent"), Eg = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], Sl = se({
  role: {
    type: String,
    values: Eg,
    default: "tooltip"
  }
}), Tg = V({
  name: "ElPopper",
  inheritAttrs: !1
}), Og = /* @__PURE__ */ V({
  ...Tg,
  props: Sl,
  setup(e, { expose: t }) {
    const n = e, o = A(), r = A(), s = A(), a = A(), i = y(() => n.role), l = {
      triggerRef: o,
      popperInstanceRef: r,
      contentRef: s,
      referenceRef: a,
      role: i
    };
    return t(l), Qe(va, l), (u, p) => G(u.$slots, "default");
  }
});
var Ig = /* @__PURE__ */ ie(Og, [["__file", "popper.vue"]]);
const Cl = se({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), $g = V({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), Ag = /* @__PURE__ */ V({
  ...$g,
  props: Cl,
  setup(e, { expose: t }) {
    const n = e, o = de("popper"), { arrowOffset: r, arrowRef: s, arrowStyle: a } = ae(_l, void 0);
    return X(() => n.arrowOffset, (i) => {
      r.value = i;
    }), dt(() => {
      s.value = void 0;
    }), t({
      arrowRef: s
    }), (i, l) => (_(), D("span", {
      ref_key: "arrowRef",
      ref: s,
      class: M(c(o).e("arrow")),
      style: pe(c(a)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var Pg = /* @__PURE__ */ ie(Ag, [["__file", "arrow.vue"]]);
const El = se({
  virtualRef: {
    type: Y(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: {
    type: Y(Function)
  },
  onMouseleave: {
    type: Y(Function)
  },
  onClick: {
    type: Y(Function)
  },
  onKeydown: {
    type: Y(Function)
  },
  onFocus: {
    type: Y(Function)
  },
  onBlur: {
    type: Y(Function)
  },
  onContextmenu: {
    type: Y(Function)
  },
  id: String,
  open: Boolean
}), Tl = Symbol("elForwardRef"), Rg = (e) => {
  Qe(Tl, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, Mg = (e) => ({
  mounted(t) {
    e(t);
  },
  updated(t) {
    e(t);
  },
  unmounted() {
    e(null);
  }
}), Lr = (e) => {
  if (e.tabIndex > 0 || e.tabIndex === 0 && e.getAttribute("tabIndex") !== null)
    return !0;
  if (e.tabIndex < 0 || e.hasAttribute("disabled") || e.getAttribute("aria-disabled") === "true")
    return !1;
  switch (e.nodeName) {
    case "A":
      return !!e.href && e.rel !== "ignore";
    case "INPUT":
      return !(e.type === "hidden" || e.type === "file");
    case "BUTTON":
    case "SELECT":
    case "TEXTAREA":
      return !0;
    default:
      return !1;
  }
}, hr = "ElOnlyChild", Lg = V({
  name: hr,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var o;
    const r = ae(Tl), s = Mg((o = r?.setForwardRef) != null ? o : Pt);
    return () => {
      var a;
      const i = (a = t.default) == null ? void 0 : a.call(t, n);
      if (!i)
        return null;
      if (i.length > 1)
        return Se(hr, "requires exact only one valid child."), null;
      const l = Ol(i);
      return l ? Ne(ju(l, n), [[s]]) : (Se(hr, "no valid child node found"), null);
    };
  }
});
function Ol(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if ($e(n))
      switch (n.type) {
        case Uu:
          continue;
        case Ii:
        case "svg":
          return Xs(n);
        case Ge:
          return Ol(n.children);
        default:
          return n;
      }
    return Xs(n);
  }
  return null;
}
function Xs(e) {
  const t = de("only-child");
  return ee("span", {
    class: t.e("content")
  }, [e]);
}
const xg = V({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), Ng = /* @__PURE__ */ V({
  ...xg,
  props: El,
  setup(e, { expose: t }) {
    const n = e, { role: o, triggerRef: r } = ae(va, void 0);
    Rg(r);
    const s = y(() => i.value ? n.id : void 0), a = y(() => {
      if (o && o.value === "tooltip")
        return n.open && n.id ? n.id : void 0;
    }), i = y(() => {
      if (o && o.value !== "tooltip")
        return o.value;
    }), l = y(() => i.value ? `${n.open}` : void 0);
    let u;
    const p = [
      "onMouseenter",
      "onMouseleave",
      "onClick",
      "onKeydown",
      "onFocus",
      "onBlur",
      "onContextmenu"
    ];
    return be(() => {
      X(() => n.virtualRef, (f) => {
        f && (r.value = At(f));
      }, {
        immediate: !0
      }), X(r, (f, v) => {
        u?.(), u = void 0, Xe(f) && (p.forEach((g) => {
          var d;
          const h = n[g];
          h && (f.addEventListener(g.slice(2).toLowerCase(), h), (d = v?.removeEventListener) == null || d.call(v, g.slice(2).toLowerCase(), h));
        }), Lr(f) && (u = X([s, a, i, l], (g) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((d, h) => {
            Zo(g[h]) ? f.removeAttribute(d) : f.setAttribute(d, g[h]);
          });
        }, { immediate: !0 }))), Xe(v) && Lr(v) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((g) => v.removeAttribute(g));
      }, {
        immediate: !0
      });
    }), dt(() => {
      if (u?.(), u = void 0, r.value && Xe(r.value)) {
        const f = r.value;
        p.forEach((v) => {
          const g = n[v];
          g && f.removeEventListener(v.slice(2).toLowerCase(), g);
        }), r.value = void 0;
      }
    }), t({
      triggerRef: r
    }), (f, v) => f.virtualTriggering ? H("v-if", !0) : (_(), U(c(Lg), Xt({ key: 0 }, f.$attrs, {
      "aria-controls": c(s),
      "aria-describedby": c(a),
      "aria-expanded": c(l),
      "aria-haspopup": c(i)
    }), {
      default: W(() => [
        G(f.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var kg = /* @__PURE__ */ ie(Ng, [["__file", "trigger.vue"]]);
const gr = "focus-trap.focus-after-trapped", mr = "focus-trap.focus-after-released", Dg = "focus-trap.focusout-prevented", Js = {
  cancelable: !0,
  bubbles: !1
}, Bg = {
  cancelable: !0,
  bubbles: !1
}, Qs = "focusAfterTrapped", ei = "focusAfterReleased", Il = Symbol("elFocusTrap"), ha = A(), nr = A(0), ga = A(0);
let yo = 0;
const $l = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const r = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 || o === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}, ti = (e, t) => {
  for (const n of e)
    if (!Fg(n, t))
      return n;
}, Fg = (e, t) => {
  if (process.env.NODE_ENV === "test")
    return !1;
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  for (; e; ) {
    if (t && e === t)
      return !1;
    if (getComputedStyle(e).display === "none")
      return !0;
    e = e.parentElement;
  }
  return !1;
}, zg = (e) => {
  const t = $l(e), n = ti(t, e), o = ti(t.reverse(), e);
  return [n, o];
}, Vg = (e) => e instanceof HTMLInputElement && "select" in e, It = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    let o = !1;
    Xe(e) && !Lr(e) && !e.getAttribute("tabindex") && (e.setAttribute("tabindex", "-1"), o = !0), e.focus({ preventScroll: !0 }), ga.value = window.performance.now(), e !== n && Vg(e) && t && e.select(), Xe(e) && o && e.removeAttribute("tabindex");
  }
};
function ni(e, t) {
  const n = [...e], o = e.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
const Hg = () => {
  let e = [];
  return {
    push: (o) => {
      const r = e[0];
      r && o !== r && r.pause(), e = ni(e, o), e.unshift(o);
    },
    remove: (o) => {
      var r, s;
      e = ni(e, o), (s = (r = e[0]) == null ? void 0 : r.resume) == null || s.call(r);
    }
  };
}, Wg = (e, t = !1) => {
  const n = document.activeElement;
  for (const o of e)
    if (It(o, t), document.activeElement !== n)
      return;
}, oi = Hg(), jg = () => nr.value > ga.value, wo = () => {
  ha.value = "pointer", nr.value = window.performance.now();
}, ri = () => {
  ha.value = "keyboard", nr.value = window.performance.now();
}, Ug = () => (be(() => {
  yo === 0 && (document.addEventListener("mousedown", wo), document.addEventListener("touchstart", wo), document.addEventListener("keydown", ri)), yo++;
}), dt(() => {
  yo--, yo <= 0 && (document.removeEventListener("mousedown", wo), document.removeEventListener("touchstart", wo), document.removeEventListener("keydown", ri));
}), {
  focusReason: ha,
  lastUserFocusTimestamp: nr,
  lastAutomatedFocusTimestamp: ga
}), _o = (e) => new CustomEvent(Dg, {
  ...Bg,
  detail: e
}), mt = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace",
  numpadEnter: "NumpadEnter"
};
let En = [];
const ai = (e) => {
  e.code === mt.esc && En.forEach((t) => t(e));
}, Kg = (e) => {
  be(() => {
    En.length === 0 && document.addEventListener("keydown", ai), ce && En.push(e);
  }), dt(() => {
    En = En.filter((t) => t !== e), En.length === 0 && ce && document.removeEventListener("keydown", ai);
  });
}, Gg = V({
  name: "ElFocusTrap",
  inheritAttrs: !1,
  props: {
    loop: Boolean,
    trapped: Boolean,
    focusTrapEl: Object,
    focusStartEl: {
      type: [Object, String],
      default: "first"
    }
  },
  emits: [
    Qs,
    ei,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = A();
    let o, r;
    const { focusReason: s } = Ug();
    Kg((d) => {
      e.trapped && !a.paused && t("release-requested", d);
    });
    const a = {
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    }, i = (d) => {
      if (!e.loop && !e.trapped || a.paused)
        return;
      const { code: h, altKey: b, ctrlKey: m, metaKey: C, currentTarget: O, shiftKey: $ } = d, { loop: S } = e, I = h === mt.tab && !b && !m && !C, E = document.activeElement;
      if (I && E) {
        const F = O, [T, z] = zg(F);
        if (T && z) {
          if (!$ && E === z) {
            const P = _o({
              focusReason: s.value
            });
            t("focusout-prevented", P), P.defaultPrevented || (d.preventDefault(), S && It(T, !0));
          } else if ($ && [T, F].includes(E)) {
            const P = _o({
              focusReason: s.value
            });
            t("focusout-prevented", P), P.defaultPrevented || (d.preventDefault(), S && It(z, !0));
          }
        } else if (E === F) {
          const P = _o({
            focusReason: s.value
          });
          t("focusout-prevented", P), P.defaultPrevented || d.preventDefault();
        }
      }
    };
    Qe(Il, {
      focusTrapRef: n,
      onKeydown: i
    }), X(() => e.focusTrapEl, (d) => {
      d && (n.value = d);
    }, { immediate: !0 }), X([n], ([d], [h]) => {
      d && (d.addEventListener("keydown", i), d.addEventListener("focusin", p), d.addEventListener("focusout", f)), h && (h.removeEventListener("keydown", i), h.removeEventListener("focusin", p), h.removeEventListener("focusout", f));
    });
    const l = (d) => {
      t(Qs, d);
    }, u = (d) => t(ei, d), p = (d) => {
      const h = c(n);
      if (!h)
        return;
      const b = d.target, m = d.relatedTarget, C = b && h.contains(b);
      e.trapped || m && h.contains(m) || (o = m), C && t("focusin", d), !a.paused && e.trapped && (C ? r = b : It(r, !0));
    }, f = (d) => {
      const h = c(n);
      if (!(a.paused || !h))
        if (e.trapped) {
          const b = d.relatedTarget;
          !Zo(b) && !h.contains(b) && setTimeout(() => {
            if (!a.paused && e.trapped) {
              const m = _o({
                focusReason: s.value
              });
              t("focusout-prevented", m), m.defaultPrevented || It(r, !0);
            }
          }, 0);
        } else {
          const b = d.target;
          b && h.contains(b) || t("focusout", d);
        }
    };
    async function v() {
      await fe();
      const d = c(n);
      if (d) {
        oi.push(a);
        const h = d.contains(document.activeElement) ? o : document.activeElement;
        if (o = h, !d.contains(h)) {
          const m = new Event(gr, Js);
          d.addEventListener(gr, l), d.dispatchEvent(m), m.defaultPrevented || fe(() => {
            let C = e.focusStartEl;
            _e(C) || (It(C), document.activeElement !== C && (C = "first")), C === "first" && Wg($l(d), !0), (document.activeElement === h || C === "container") && It(d);
          });
        }
      }
    }
    function g() {
      const d = c(n);
      if (d) {
        d.removeEventListener(gr, l);
        const h = new CustomEvent(mr, {
          ...Js,
          detail: {
            focusReason: s.value
          }
        });
        d.addEventListener(mr, u), d.dispatchEvent(h), !h.defaultPrevented && (s.value == "keyboard" || !jg() || d.contains(document.activeElement)) && It(o ?? document.body), d.removeEventListener(mr, u), oi.remove(a);
      }
    }
    return be(() => {
      e.trapped && v(), X(() => e.trapped, (d) => {
        d ? v() : g();
      });
    }), dt(() => {
      e.trapped && g(), n.value && (n.value.removeEventListener("keydown", i), n.value.removeEventListener("focusin", p), n.value.removeEventListener("focusout", f), n.value = void 0);
    }), {
      onKeydown: i
    };
  }
});
function qg(e, t, n, o, r, s) {
  return G(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var Al = /* @__PURE__ */ ie(Gg, [["render", qg], ["__file", "focus-trap.vue"]]), Fe = "top", tt = "bottom", nt = "right", ze = "left", ma = "auto", uo = [Fe, tt, nt, ze], An = "start", oo = "end", Yg = "clippingParents", Pl = "viewport", jn = "popper", Zg = "reference", si = uo.reduce(function(e, t) {
  return e.concat([t + "-" + An, t + "-" + oo]);
}, []), or = [].concat(uo, [ma]).reduce(function(e, t) {
  return e.concat([t, t + "-" + An, t + "-" + oo]);
}, []), Xg = "beforeRead", Jg = "read", Qg = "afterRead", em = "beforeMain", tm = "main", nm = "afterMain", om = "beforeWrite", rm = "write", am = "afterWrite", sm = [Xg, Jg, Qg, em, tm, nm, om, rm, am];
function wt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function qe(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function hn(e) {
  var t = qe(e).Element;
  return e instanceof t || e instanceof Element;
}
function Je(e) {
  var t = qe(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function ba(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = qe(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function im(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var o = t.styles[n] || {}, r = t.attributes[n] || {}, s = t.elements[n];
    !Je(s) || !wt(s) || (Object.assign(s.style, o), Object.keys(r).forEach(function(a) {
      var i = r[a];
      i === !1 ? s.removeAttribute(a) : s.setAttribute(a, i === !0 ? "" : i);
    }));
  });
}
function lm(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(o) {
      var r = t.elements[o], s = t.attributes[o] || {}, a = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]), i = a.reduce(function(l, u) {
        return l[u] = "", l;
      }, {});
      !Je(r) || !wt(r) || (Object.assign(r.style, i), Object.keys(s).forEach(function(l) {
        r.removeAttribute(l);
      }));
    });
  };
}
var Rl = { name: "applyStyles", enabled: !0, phase: "write", fn: im, effect: lm, requires: ["computeStyles"] };
function bt(e) {
  return e.split("-")[0];
}
var dn = Math.max, Wo = Math.min, Pn = Math.round;
function xr() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Ml() {
  return !/^((?!chrome|android).)*safari/i.test(xr());
}
function Rn(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var o = e.getBoundingClientRect(), r = 1, s = 1;
  t && Je(e) && (r = e.offsetWidth > 0 && Pn(o.width) / e.offsetWidth || 1, s = e.offsetHeight > 0 && Pn(o.height) / e.offsetHeight || 1);
  var a = hn(e) ? qe(e) : window, i = a.visualViewport, l = !Ml() && n, u = (o.left + (l && i ? i.offsetLeft : 0)) / r, p = (o.top + (l && i ? i.offsetTop : 0)) / s, f = o.width / r, v = o.height / s;
  return { width: f, height: v, top: p, right: u + f, bottom: p + v, left: u, x: u, y: p };
}
function ya(e) {
  var t = Rn(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: o };
}
function Ll(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && ba(n)) {
    var o = t;
    do {
      if (o && e.isSameNode(o)) return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function Lt(e) {
  return qe(e).getComputedStyle(e);
}
function um(e) {
  return ["table", "td", "th"].indexOf(wt(e)) >= 0;
}
function tn(e) {
  return ((hn(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function rr(e) {
  return wt(e) === "html" ? e : e.assignedSlot || e.parentNode || (ba(e) ? e.host : null) || tn(e);
}
function ii(e) {
  return !Je(e) || Lt(e).position === "fixed" ? null : e.offsetParent;
}
function cm(e) {
  var t = /firefox/i.test(xr()), n = /Trident/i.test(xr());
  if (n && Je(e)) {
    var o = Lt(e);
    if (o.position === "fixed") return null;
  }
  var r = rr(e);
  for (ba(r) && (r = r.host); Je(r) && ["html", "body"].indexOf(wt(r)) < 0; ) {
    var s = Lt(r);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none") return r;
    r = r.parentNode;
  }
  return null;
}
function co(e) {
  for (var t = qe(e), n = ii(e); n && um(n) && Lt(n).position === "static"; ) n = ii(n);
  return n && (wt(n) === "html" || wt(n) === "body" && Lt(n).position === "static") ? t : n || cm(e) || t;
}
function wa(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Zn(e, t, n) {
  return dn(e, Wo(t, n));
}
function dm(e, t, n) {
  var o = Zn(e, t, n);
  return o > n ? n : o;
}
function xl() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Nl(e) {
  return Object.assign({}, xl(), e);
}
function kl(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
var fm = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, Nl(typeof e != "number" ? e : kl(e, uo));
};
function pm(e) {
  var t, n = e.state, o = e.name, r = e.options, s = n.elements.arrow, a = n.modifiersData.popperOffsets, i = bt(n.placement), l = wa(i), u = [ze, nt].indexOf(i) >= 0, p = u ? "height" : "width";
  if (!(!s || !a)) {
    var f = fm(r.padding, n), v = ya(s), g = l === "y" ? Fe : ze, d = l === "y" ? tt : nt, h = n.rects.reference[p] + n.rects.reference[l] - a[l] - n.rects.popper[p], b = a[l] - n.rects.reference[l], m = co(s), C = m ? l === "y" ? m.clientHeight || 0 : m.clientWidth || 0 : 0, O = h / 2 - b / 2, $ = f[g], S = C - v[p] - f[d], I = C / 2 - v[p] / 2 + O, E = Zn($, I, S), F = l;
    n.modifiersData[o] = (t = {}, t[F] = E, t.centerOffset = E - I, t);
  }
}
function vm(e) {
  var t = e.state, n = e.options, o = n.element, r = o === void 0 ? "[data-popper-arrow]" : o;
  r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || Ll(t.elements.popper, r) && (t.elements.arrow = r));
}
var hm = { name: "arrow", enabled: !0, phase: "main", fn: pm, effect: vm, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function Mn(e) {
  return e.split("-")[1];
}
var gm = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function mm(e, t) {
  var n = e.x, o = e.y, r = t.devicePixelRatio || 1;
  return { x: Pn(n * r) / r || 0, y: Pn(o * r) / r || 0 };
}
function li(e) {
  var t, n = e.popper, o = e.popperRect, r = e.placement, s = e.variation, a = e.offsets, i = e.position, l = e.gpuAcceleration, u = e.adaptive, p = e.roundOffsets, f = e.isFixed, v = a.x, g = v === void 0 ? 0 : v, d = a.y, h = d === void 0 ? 0 : d, b = typeof p == "function" ? p({ x: g, y: h }) : { x: g, y: h };
  g = b.x, h = b.y;
  var m = a.hasOwnProperty("x"), C = a.hasOwnProperty("y"), O = ze, $ = Fe, S = window;
  if (u) {
    var I = co(n), E = "clientHeight", F = "clientWidth";
    if (I === qe(n) && (I = tn(n), Lt(I).position !== "static" && i === "absolute" && (E = "scrollHeight", F = "scrollWidth")), I = I, r === Fe || (r === ze || r === nt) && s === oo) {
      $ = tt;
      var T = f && I === S && S.visualViewport ? S.visualViewport.height : I[E];
      h -= T - o.height, h *= l ? 1 : -1;
    }
    if (r === ze || (r === Fe || r === tt) && s === oo) {
      O = nt;
      var z = f && I === S && S.visualViewport ? S.visualViewport.width : I[F];
      g -= z - o.width, g *= l ? 1 : -1;
    }
  }
  var N = Object.assign({ position: i }, u && gm), P = p === !0 ? mm({ x: g, y: h }, qe(n)) : { x: g, y: h };
  if (g = P.x, h = P.y, l) {
    var j;
    return Object.assign({}, N, (j = {}, j[$] = C ? "0" : "", j[O] = m ? "0" : "", j.transform = (S.devicePixelRatio || 1) <= 1 ? "translate(" + g + "px, " + h + "px)" : "translate3d(" + g + "px, " + h + "px, 0)", j));
  }
  return Object.assign({}, N, (t = {}, t[$] = C ? h + "px" : "", t[O] = m ? g + "px" : "", t.transform = "", t));
}
function bm(e) {
  var t = e.state, n = e.options, o = n.gpuAcceleration, r = o === void 0 ? !0 : o, s = n.adaptive, a = s === void 0 ? !0 : s, i = n.roundOffsets, l = i === void 0 ? !0 : i, u = { placement: bt(t.placement), variation: Mn(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: r, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, li(Object.assign({}, u, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: a, roundOffsets: l })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, li(Object.assign({}, u, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: l })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var Dl = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: bm, data: {} }, So = { passive: !0 };
function ym(e) {
  var t = e.state, n = e.instance, o = e.options, r = o.scroll, s = r === void 0 ? !0 : r, a = o.resize, i = a === void 0 ? !0 : a, l = qe(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return s && u.forEach(function(p) {
    p.addEventListener("scroll", n.update, So);
  }), i && l.addEventListener("resize", n.update, So), function() {
    s && u.forEach(function(p) {
      p.removeEventListener("scroll", n.update, So);
    }), i && l.removeEventListener("resize", n.update, So);
  };
}
var Bl = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: ym, data: {} }, wm = { left: "right", right: "left", bottom: "top", top: "bottom" };
function $o(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return wm[t];
  });
}
var _m = { start: "end", end: "start" };
function ui(e) {
  return e.replace(/start|end/g, function(t) {
    return _m[t];
  });
}
function _a(e) {
  var t = qe(e), n = t.pageXOffset, o = t.pageYOffset;
  return { scrollLeft: n, scrollTop: o };
}
function Sa(e) {
  return Rn(tn(e)).left + _a(e).scrollLeft;
}
function Sm(e, t) {
  var n = qe(e), o = tn(e), r = n.visualViewport, s = o.clientWidth, a = o.clientHeight, i = 0, l = 0;
  if (r) {
    s = r.width, a = r.height;
    var u = Ml();
    (u || !u && t === "fixed") && (i = r.offsetLeft, l = r.offsetTop);
  }
  return { width: s, height: a, x: i + Sa(e), y: l };
}
function Cm(e) {
  var t, n = tn(e), o = _a(e), r = (t = e.ownerDocument) == null ? void 0 : t.body, s = dn(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), a = dn(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), i = -o.scrollLeft + Sa(e), l = -o.scrollTop;
  return Lt(r || n).direction === "rtl" && (i += dn(n.clientWidth, r ? r.clientWidth : 0) - s), { width: s, height: a, x: i, y: l };
}
function Ca(e) {
  var t = Lt(e), n = t.overflow, o = t.overflowX, r = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + r + o);
}
function Fl(e) {
  return ["html", "body", "#document"].indexOf(wt(e)) >= 0 ? e.ownerDocument.body : Je(e) && Ca(e) ? e : Fl(rr(e));
}
function Xn(e, t) {
  var n;
  t === void 0 && (t = []);
  var o = Fl(e), r = o === ((n = e.ownerDocument) == null ? void 0 : n.body), s = qe(o), a = r ? [s].concat(s.visualViewport || [], Ca(o) ? o : []) : o, i = t.concat(a);
  return r ? i : i.concat(Xn(rr(a)));
}
function Nr(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function Em(e, t) {
  var n = Rn(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function ci(e, t, n) {
  return t === Pl ? Nr(Sm(e, n)) : hn(t) ? Em(t, n) : Nr(Cm(tn(e)));
}
function Tm(e) {
  var t = Xn(rr(e)), n = ["absolute", "fixed"].indexOf(Lt(e).position) >= 0, o = n && Je(e) ? co(e) : e;
  return hn(o) ? t.filter(function(r) {
    return hn(r) && Ll(r, o) && wt(r) !== "body";
  }) : [];
}
function Om(e, t, n, o) {
  var r = t === "clippingParents" ? Tm(e) : [].concat(t), s = [].concat(r, [n]), a = s[0], i = s.reduce(function(l, u) {
    var p = ci(e, u, o);
    return l.top = dn(p.top, l.top), l.right = Wo(p.right, l.right), l.bottom = Wo(p.bottom, l.bottom), l.left = dn(p.left, l.left), l;
  }, ci(e, a, o));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function zl(e) {
  var t = e.reference, n = e.element, o = e.placement, r = o ? bt(o) : null, s = o ? Mn(o) : null, a = t.x + t.width / 2 - n.width / 2, i = t.y + t.height / 2 - n.height / 2, l;
  switch (r) {
    case Fe:
      l = { x: a, y: t.y - n.height };
      break;
    case tt:
      l = { x: a, y: t.y + t.height };
      break;
    case nt:
      l = { x: t.x + t.width, y: i };
      break;
    case ze:
      l = { x: t.x - n.width, y: i };
      break;
    default:
      l = { x: t.x, y: t.y };
  }
  var u = r ? wa(r) : null;
  if (u != null) {
    var p = u === "y" ? "height" : "width";
    switch (s) {
      case An:
        l[u] = l[u] - (t[p] / 2 - n[p] / 2);
        break;
      case oo:
        l[u] = l[u] + (t[p] / 2 - n[p] / 2);
        break;
    }
  }
  return l;
}
function ro(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = o === void 0 ? e.placement : o, s = n.strategy, a = s === void 0 ? e.strategy : s, i = n.boundary, l = i === void 0 ? Yg : i, u = n.rootBoundary, p = u === void 0 ? Pl : u, f = n.elementContext, v = f === void 0 ? jn : f, g = n.altBoundary, d = g === void 0 ? !1 : g, h = n.padding, b = h === void 0 ? 0 : h, m = Nl(typeof b != "number" ? b : kl(b, uo)), C = v === jn ? Zg : jn, O = e.rects.popper, $ = e.elements[d ? C : v], S = Om(hn($) ? $ : $.contextElement || tn(e.elements.popper), l, p, a), I = Rn(e.elements.reference), E = zl({ reference: I, element: O, placement: r }), F = Nr(Object.assign({}, O, E)), T = v === jn ? F : I, z = { top: S.top - T.top + m.top, bottom: T.bottom - S.bottom + m.bottom, left: S.left - T.left + m.left, right: T.right - S.right + m.right }, N = e.modifiersData.offset;
  if (v === jn && N) {
    var P = N[r];
    Object.keys(z).forEach(function(j) {
      var re = [nt, tt].indexOf(j) >= 0 ? 1 : -1, J = [Fe, tt].indexOf(j) >= 0 ? "y" : "x";
      z[j] += P[J] * re;
    });
  }
  return z;
}
function Im(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = n.boundary, s = n.rootBoundary, a = n.padding, i = n.flipVariations, l = n.allowedAutoPlacements, u = l === void 0 ? or : l, p = Mn(o), f = p ? i ? si : si.filter(function(d) {
    return Mn(d) === p;
  }) : uo, v = f.filter(function(d) {
    return u.indexOf(d) >= 0;
  });
  v.length === 0 && (v = f);
  var g = v.reduce(function(d, h) {
    return d[h] = ro(e, { placement: h, boundary: r, rootBoundary: s, padding: a })[bt(h)], d;
  }, {});
  return Object.keys(g).sort(function(d, h) {
    return g[d] - g[h];
  });
}
function $m(e) {
  if (bt(e) === ma) return [];
  var t = $o(e);
  return [ui(e), t, ui(t)];
}
function Am(e) {
  var t = e.state, n = e.options, o = e.name;
  if (!t.modifiersData[o]._skip) {
    for (var r = n.mainAxis, s = r === void 0 ? !0 : r, a = n.altAxis, i = a === void 0 ? !0 : a, l = n.fallbackPlacements, u = n.padding, p = n.boundary, f = n.rootBoundary, v = n.altBoundary, g = n.flipVariations, d = g === void 0 ? !0 : g, h = n.allowedAutoPlacements, b = t.options.placement, m = bt(b), C = m === b, O = l || (C || !d ? [$o(b)] : $m(b)), $ = [b].concat(O).reduce(function(ke, Ce) {
      return ke.concat(bt(Ce) === ma ? Im(t, { placement: Ce, boundary: p, rootBoundary: f, padding: u, flipVariations: d, allowedAutoPlacements: h }) : Ce);
    }, []), S = t.rects.reference, I = t.rects.popper, E = /* @__PURE__ */ new Map(), F = !0, T = $[0], z = 0; z < $.length; z++) {
      var N = $[z], P = bt(N), j = Mn(N) === An, re = [Fe, tt].indexOf(P) >= 0, J = re ? "width" : "height", Q = ro(t, { placement: N, boundary: p, rootBoundary: f, altBoundary: v, padding: u }), B = re ? j ? nt : ze : j ? tt : Fe;
      S[J] > I[J] && (B = $o(B));
      var le = $o(B), ve = [];
      if (s && ve.push(Q[P] <= 0), i && ve.push(Q[B] <= 0, Q[le] <= 0), ve.every(function(ke) {
        return ke;
      })) {
        T = N, F = !1;
        break;
      }
      E.set(N, ve);
    }
    if (F) for (var ye = d ? 3 : 1, rt = function(ke) {
      var Ce = $.find(function(K) {
        var ne = E.get(K);
        if (ne) return ne.slice(0, ke).every(function(q) {
          return q;
        });
      });
      if (Ce) return T = Ce, "break";
    }, Ve = ye; Ve > 0; Ve--) {
      var ft = rt(Ve);
      if (ft === "break") break;
    }
    t.placement !== T && (t.modifiersData[o]._skip = !0, t.placement = T, t.reset = !0);
  }
}
var Pm = { name: "flip", enabled: !0, phase: "main", fn: Am, requiresIfExists: ["offset"], data: { _skip: !1 } };
function di(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function fi(e) {
  return [Fe, nt, tt, ze].some(function(t) {
    return e[t] >= 0;
  });
}
function Rm(e) {
  var t = e.state, n = e.name, o = t.rects.reference, r = t.rects.popper, s = t.modifiersData.preventOverflow, a = ro(t, { elementContext: "reference" }), i = ro(t, { altBoundary: !0 }), l = di(a, o), u = di(i, r, s), p = fi(l), f = fi(u);
  t.modifiersData[n] = { referenceClippingOffsets: l, popperEscapeOffsets: u, isReferenceHidden: p, hasPopperEscaped: f }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": p, "data-popper-escaped": f });
}
var Mm = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: Rm };
function Lm(e, t, n) {
  var o = bt(e), r = [ze, Fe].indexOf(o) >= 0 ? -1 : 1, s = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, a = s[0], i = s[1];
  return a = a || 0, i = (i || 0) * r, [ze, nt].indexOf(o) >= 0 ? { x: i, y: a } : { x: a, y: i };
}
function xm(e) {
  var t = e.state, n = e.options, o = e.name, r = n.offset, s = r === void 0 ? [0, 0] : r, a = or.reduce(function(p, f) {
    return p[f] = Lm(f, t.rects, s), p;
  }, {}), i = a[t.placement], l = i.x, u = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[o] = a;
}
var Nm = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: xm };
function km(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = zl({ reference: t.rects.reference, element: t.rects.popper, placement: t.placement });
}
var Vl = { name: "popperOffsets", enabled: !0, phase: "read", fn: km, data: {} };
function Dm(e) {
  return e === "x" ? "y" : "x";
}
function Bm(e) {
  var t = e.state, n = e.options, o = e.name, r = n.mainAxis, s = r === void 0 ? !0 : r, a = n.altAxis, i = a === void 0 ? !1 : a, l = n.boundary, u = n.rootBoundary, p = n.altBoundary, f = n.padding, v = n.tether, g = v === void 0 ? !0 : v, d = n.tetherOffset, h = d === void 0 ? 0 : d, b = ro(t, { boundary: l, rootBoundary: u, padding: f, altBoundary: p }), m = bt(t.placement), C = Mn(t.placement), O = !C, $ = wa(m), S = Dm($), I = t.modifiersData.popperOffsets, E = t.rects.reference, F = t.rects.popper, T = typeof h == "function" ? h(Object.assign({}, t.rects, { placement: t.placement })) : h, z = typeof T == "number" ? { mainAxis: T, altAxis: T } : Object.assign({ mainAxis: 0, altAxis: 0 }, T), N = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, P = { x: 0, y: 0 };
  if (I) {
    if (s) {
      var j, re = $ === "y" ? Fe : ze, J = $ === "y" ? tt : nt, Q = $ === "y" ? "height" : "width", B = I[$], le = B + b[re], ve = B - b[J], ye = g ? -F[Q] / 2 : 0, rt = C === An ? E[Q] : F[Q], Ve = C === An ? -F[Q] : -E[Q], ft = t.elements.arrow, ke = g && ft ? ya(ft) : { width: 0, height: 0 }, Ce = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : xl(), K = Ce[re], ne = Ce[J], q = Zn(0, E[Q], ke[Q]), he = O ? E[Q] / 2 - ye - q - K - z.mainAxis : rt - q - K - z.mainAxis, Pe = O ? -E[Q] / 2 + ye + q + ne + z.mainAxis : Ve + q + ne + z.mainAxis, He = t.elements.arrow && co(t.elements.arrow), pt = He ? $ === "y" ? He.clientTop || 0 : He.clientLeft || 0 : 0, Re = (j = N?.[$]) != null ? j : 0, kt = B + he - Re - pt, St = B + Pe - Re, Dt = Zn(g ? Wo(le, kt) : le, B, g ? dn(ve, St) : ve);
      I[$] = Dt, P[$] = Dt - B;
    }
    if (i) {
      var Ct, vt = $ === "x" ? Fe : ze, Bt = $ === "x" ? tt : nt, Oe = I[S], Ye = S === "y" ? "height" : "width", Ft = Oe + b[vt], nn = Oe - b[Bt], x = [Fe, ze].indexOf(m) !== -1, oe = (Ct = N?.[S]) != null ? Ct : 0, Ze = x ? Ft : Oe - E[Ye] - F[Ye] - oe + z.altAxis, zt = x ? Oe + E[Ye] + F[Ye] - oe - z.altAxis : nn, Vt = g && x ? dm(Ze, Oe, zt) : Zn(g ? Ze : Ft, Oe, g ? zt : nn);
      I[S] = Vt, P[S] = Vt - Oe;
    }
    t.modifiersData[o] = P;
  }
}
var Fm = { name: "preventOverflow", enabled: !0, phase: "main", fn: Bm, requiresIfExists: ["offset"] };
function zm(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function Vm(e) {
  return e === qe(e) || !Je(e) ? _a(e) : zm(e);
}
function Hm(e) {
  var t = e.getBoundingClientRect(), n = Pn(t.width) / e.offsetWidth || 1, o = Pn(t.height) / e.offsetHeight || 1;
  return n !== 1 || o !== 1;
}
function Wm(e, t, n) {
  n === void 0 && (n = !1);
  var o = Je(t), r = Je(t) && Hm(t), s = tn(t), a = Rn(e, r, n), i = { scrollLeft: 0, scrollTop: 0 }, l = { x: 0, y: 0 };
  return (o || !o && !n) && ((wt(t) !== "body" || Ca(s)) && (i = Vm(t)), Je(t) ? (l = Rn(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : s && (l.x = Sa(s))), { x: a.left + i.scrollLeft - l.x, y: a.top + i.scrollTop - l.y, width: a.width, height: a.height };
}
function jm(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), o = [];
  e.forEach(function(s) {
    t.set(s.name, s);
  });
  function r(s) {
    n.add(s.name);
    var a = [].concat(s.requires || [], s.requiresIfExists || []);
    a.forEach(function(i) {
      if (!n.has(i)) {
        var l = t.get(i);
        l && r(l);
      }
    }), o.push(s);
  }
  return e.forEach(function(s) {
    n.has(s.name) || r(s);
  }), o;
}
function Um(e) {
  var t = jm(e);
  return sm.reduce(function(n, o) {
    return n.concat(t.filter(function(r) {
      return r.phase === o;
    }));
  }, []);
}
function Km(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function Gm(e) {
  var t = e.reduce(function(n, o) {
    var r = n[o.name];
    return n[o.name] = r ? Object.assign({}, r, o, { options: Object.assign({}, r.options, o.options), data: Object.assign({}, r.data, o.data) }) : o, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var pi = { placement: "bottom", modifiers: [], strategy: "absolute" };
function vi() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return !t.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function Ea(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, r = t.defaultOptions, s = r === void 0 ? pi : r;
  return function(a, i, l) {
    l === void 0 && (l = s);
    var u = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, pi, s), modifiersData: {}, elements: { reference: a, popper: i }, attributes: {}, styles: {} }, p = [], f = !1, v = { state: u, setOptions: function(h) {
      var b = typeof h == "function" ? h(u.options) : h;
      d(), u.options = Object.assign({}, s, u.options, b), u.scrollParents = { reference: hn(a) ? Xn(a) : a.contextElement ? Xn(a.contextElement) : [], popper: Xn(i) };
      var m = Um(Gm([].concat(o, u.options.modifiers)));
      return u.orderedModifiers = m.filter(function(C) {
        return C.enabled;
      }), g(), v.update();
    }, forceUpdate: function() {
      if (!f) {
        var h = u.elements, b = h.reference, m = h.popper;
        if (vi(b, m)) {
          u.rects = { reference: Wm(b, co(m), u.options.strategy === "fixed"), popper: ya(m) }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(F) {
            return u.modifiersData[F.name] = Object.assign({}, F.data);
          });
          for (var C = 0; C < u.orderedModifiers.length; C++) {
            if (u.reset === !0) {
              u.reset = !1, C = -1;
              continue;
            }
            var O = u.orderedModifiers[C], $ = O.fn, S = O.options, I = S === void 0 ? {} : S, E = O.name;
            typeof $ == "function" && (u = $({ state: u, options: I, name: E, instance: v }) || u);
          }
        }
      }
    }, update: Km(function() {
      return new Promise(function(h) {
        v.forceUpdate(), h(u);
      });
    }), destroy: function() {
      d(), f = !0;
    } };
    if (!vi(a, i)) return v;
    v.setOptions(l).then(function(h) {
      !f && l.onFirstUpdate && l.onFirstUpdate(h);
    });
    function g() {
      u.orderedModifiers.forEach(function(h) {
        var b = h.name, m = h.options, C = m === void 0 ? {} : m, O = h.effect;
        if (typeof O == "function") {
          var $ = O({ state: u, name: b, instance: v, options: C }), S = function() {
          };
          p.push($ || S);
        }
      });
    }
    function d() {
      p.forEach(function(h) {
        return h();
      }), p = [];
    }
    return v;
  };
}
Ea();
var qm = [Bl, Vl, Dl, Rl];
Ea({ defaultModifiers: qm });
var Ym = [Bl, Vl, Dl, Rl, Nm, Pm, Fm, hm, Mm], Zm = Ea({ defaultModifiers: Ym });
const Xm = ["fixed", "absolute"], Jm = se({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: Y(Array),
    default: void 0
  },
  gpuAcceleration: {
    type: Boolean,
    default: !0
  },
  offset: {
    type: Number,
    default: 12
  },
  placement: {
    type: String,
    values: or,
    default: "bottom"
  },
  popperOptions: {
    type: Y(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: Xm,
    default: "absolute"
  }
}), Hl = se({
  ...Jm,
  id: String,
  style: {
    type: Y([String, Array, Object])
  },
  className: {
    type: Y([String, Array, Object])
  },
  effect: {
    type: Y(String),
    default: "dark"
  },
  visible: Boolean,
  enterable: {
    type: Boolean,
    default: !0
  },
  pure: Boolean,
  focusOnShow: {
    type: Boolean,
    default: !1
  },
  trapping: {
    type: Boolean,
    default: !1
  },
  popperClass: {
    type: Y([String, Array, Object])
  },
  popperStyle: {
    type: Y([String, Array, Object])
  },
  referenceEl: {
    type: Y(Object)
  },
  triggerTargetEl: {
    type: Y(Object)
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: !0
  },
  virtualTriggering: Boolean,
  zIndex: Number,
  ...Dn(["ariaLabel"])
}), Qm = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, eb = (e, t) => {
  const n = A(!1), o = A();
  return {
    focusStartRef: o,
    trapped: n,
    onFocusAfterReleased: (u) => {
      var p;
      ((p = u.detail) == null ? void 0 : p.focusReason) !== "pointer" && (o.value = "first", t("blur"));
    },
    onFocusAfterTrapped: () => {
      t("focus");
    },
    onFocusInTrap: (u) => {
      e.visible && !n.value && (u.target && (o.value = u.target), n.value = !0);
    },
    onFocusoutPrevented: (u) => {
      e.trapping || (u.detail.focusReason === "pointer" && u.preventDefault(), n.value = !1);
    },
    onReleaseRequested: () => {
      n.value = !1, t("close");
    }
  };
}, tb = (e, t = []) => {
  const { placement: n, strategy: o, popperOptions: r } = e, s = {
    placement: n,
    strategy: o,
    ...r,
    modifiers: [...ob(e), ...t]
  };
  return rb(s, r?.modifiers), s;
}, nb = (e) => {
  if (ce)
    return At(e);
};
function ob(e) {
  const { offset: t, gpuAcceleration: n, fallbackPlacements: o } = e;
  return [
    {
      name: "offset",
      options: {
        offset: [0, t ?? 12]
      }
    },
    {
      name: "preventOverflow",
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    },
    {
      name: "flip",
      options: {
        padding: 5,
        fallbackPlacements: o
      }
    },
    {
      name: "computeStyles",
      options: {
        gpuAcceleration: n
      }
    }
  ];
}
function rb(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const ab = (e, t, n = {}) => {
  const o = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: l }) => {
      const u = sb(l);
      Object.assign(a.value, u);
    },
    requires: ["computeStyles"]
  }, r = y(() => {
    const { onFirstUpdate: l, placement: u, strategy: p, modifiers: f } = c(n);
    return {
      onFirstUpdate: l,
      placement: u || "bottom",
      strategy: p || "absolute",
      modifiers: [
        ...f || [],
        o,
        { name: "applyStyles", enabled: !1 }
      ]
    };
  }), s = cn(), a = A({
    styles: {
      popper: {
        position: c(r).strategy,
        left: "0",
        top: "0"
      },
      arrow: {
        position: "absolute"
      }
    },
    attributes: {}
  }), i = () => {
    s.value && (s.value.destroy(), s.value = void 0);
  };
  return X(r, (l) => {
    const u = c(s);
    u && u.setOptions(l);
  }, {
    deep: !0
  }), X([e, t], ([l, u]) => {
    i(), !(!l || !u) && (s.value = Zm(l, u, c(r)));
  }), dt(() => {
    i();
  }), {
    state: y(() => {
      var l;
      return { ...((l = c(s)) == null ? void 0 : l.state) || {} };
    }),
    styles: y(() => c(a).styles),
    attributes: y(() => c(a).attributes),
    update: () => {
      var l;
      return (l = c(s)) == null ? void 0 : l.update();
    },
    forceUpdate: () => {
      var l;
      return (l = c(s)) == null ? void 0 : l.forceUpdate();
    },
    instanceRef: y(() => c(s))
  };
};
function sb(e) {
  const t = Object.keys(e.elements), n = Do(t.map((r) => [r, e.styles[r] || {}])), o = Do(t.map((r) => [r, e.attributes[r]]));
  return {
    styles: n,
    attributes: o
  };
}
const ib = 0, lb = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: o, role: r } = ae(va, void 0), s = A(), a = A(), i = y(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), l = y(() => {
    var m;
    const C = c(s), O = (m = c(a)) != null ? m : ib;
    return {
      name: "arrow",
      enabled: !Xi(C),
      options: {
        element: C,
        padding: O
      }
    };
  }), u = y(() => ({
    onFirstUpdate: () => {
      d();
    },
    ...tb(e, [
      c(l),
      c(i)
    ])
  })), p = y(() => nb(e.referenceEl) || c(o)), { attributes: f, state: v, styles: g, update: d, forceUpdate: h, instanceRef: b } = ab(p, n, u);
  return X(b, (m) => t.value = m), be(() => {
    X(() => {
      var m;
      return (m = c(p)) == null ? void 0 : m.getBoundingClientRect();
    }, () => {
      d();
    });
  }), {
    attributes: f,
    arrowRef: s,
    contentRef: n,
    instanceRef: b,
    state: v,
    styles: g,
    role: r,
    forceUpdate: h,
    update: d
  };
}, ub = (e, {
  attributes: t,
  styles: n,
  role: o
}) => {
  const { nextZIndex: r } = ia(), s = de("popper"), a = y(() => c(t).popper), i = A(me(e.zIndex) ? e.zIndex : r()), l = y(() => [
    s.b(),
    s.is("pure", e.pure),
    s.is(e.effect),
    e.popperClass
  ]), u = y(() => [
    { zIndex: c(i) },
    c(n).popper,
    e.popperStyle || {}
  ]), p = y(() => o.value === "dialog" ? "false" : void 0), f = y(() => c(n).arrow || {});
  return {
    ariaModal: p,
    arrowStyle: f,
    contentAttrs: a,
    contentClass: l,
    contentStyle: u,
    contentZIndex: i,
    updateZIndex: () => {
      i.value = me(e.zIndex) ? e.zIndex : r();
    }
  };
}, cb = V({
  name: "ElPopperContent"
}), db = /* @__PURE__ */ V({
  ...cb,
  props: Hl,
  emits: Qm,
  setup(e, { expose: t, emit: n }) {
    const o = e, {
      focusStartRef: r,
      trapped: s,
      onFocusAfterReleased: a,
      onFocusAfterTrapped: i,
      onFocusInTrap: l,
      onFocusoutPrevented: u,
      onReleaseRequested: p
    } = eb(o, n), { attributes: f, arrowRef: v, contentRef: g, styles: d, instanceRef: h, role: b, update: m } = lb(o), {
      ariaModal: C,
      arrowStyle: O,
      contentAttrs: $,
      contentClass: S,
      contentStyle: I,
      updateZIndex: E
    } = ub(o, {
      styles: d,
      attributes: f,
      role: b
    }), F = ae(Ho, void 0), T = A();
    Qe(_l, {
      arrowStyle: O,
      arrowRef: v,
      arrowOffset: T
    }), F && Qe(Ho, {
      ...F,
      addInputId: Pt,
      removeInputId: Pt
    });
    let z;
    const N = (j = !0) => {
      m(), j && E();
    }, P = () => {
      N(!1), o.visible && o.focusOnShow ? s.value = !0 : o.visible === !1 && (s.value = !1);
    };
    return be(() => {
      X(() => o.triggerTargetEl, (j, re) => {
        z?.(), z = void 0;
        const J = c(j || g.value), Q = c(re || g.value);
        Xe(J) && (z = X([b, () => o.ariaLabel, C, () => o.id], (B) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((le, ve) => {
            Zo(B[ve]) ? J.removeAttribute(le) : J.setAttribute(le, B[ve]);
          });
        }, { immediate: !0 })), Q !== J && Xe(Q) && ["role", "aria-label", "aria-modal", "id"].forEach((B) => {
          Q.removeAttribute(B);
        });
      }, { immediate: !0 }), X(() => o.visible, P, { immediate: !0 });
    }), dt(() => {
      z?.(), z = void 0;
    }), t({
      popperContentRef: g,
      popperInstanceRef: h,
      updatePopper: N,
      contentStyle: I
    }), (j, re) => (_(), D("div", Xt({
      ref_key: "contentRef",
      ref: g
    }, c($), {
      style: c(I),
      class: c(S),
      tabindex: "-1",
      onMouseenter: (J) => j.$emit("mouseenter", J),
      onMouseleave: (J) => j.$emit("mouseleave", J)
    }), [
      ee(c(Al), {
        trapped: c(s),
        "trap-on-focus-in": !0,
        "focus-trap-el": c(g),
        "focus-start-el": c(r),
        onFocusAfterTrapped: c(i),
        onFocusAfterReleased: c(a),
        onFocusin: c(l),
        onFocusoutPrevented: c(u),
        onReleaseRequested: c(p)
      }, {
        default: W(() => [
          G(j.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16, ["onMouseenter", "onMouseleave"]));
  }
});
var fb = /* @__PURE__ */ ie(db, [["__file", "content.vue"]]);
const pb = ot(Ig), Ta = Symbol("elTooltip");
function hi() {
  let e;
  const t = (o, r) => {
    n(), e = window.setTimeout(o, r);
  }, n = () => window.clearTimeout(e);
  return so(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
const vb = se({
  showAfter: {
    type: Number,
    default: 0
  },
  hideAfter: {
    type: Number,
    default: 200
  },
  autoClose: {
    type: Number,
    default: 0
  }
}), hb = ({
  showAfter: e,
  hideAfter: t,
  autoClose: n,
  open: o,
  close: r
}) => {
  const { registerTimeout: s } = hi(), {
    registerTimeout: a,
    cancelTimeout: i
  } = hi();
  return {
    onOpen: (p) => {
      s(() => {
        o(p);
        const f = c(n);
        me(f) && f > 0 && a(() => {
          r(p);
        }, f);
      }, c(e));
    },
    onClose: (p) => {
      i(), s(() => {
        r(p);
      }, c(t));
    }
  };
}, Oa = se({
  ...vb,
  ...Hl,
  appendTo: {
    type: Y([String, Object])
  },
  content: {
    type: String,
    default: ""
  },
  rawContent: Boolean,
  persistent: Boolean,
  visible: {
    type: Y(Boolean),
    default: null
  },
  transition: String,
  teleported: {
    type: Boolean,
    default: !0
  },
  disabled: Boolean,
  ...Dn(["ariaLabel"])
}), Wl = se({
  ...El,
  disabled: Boolean,
  trigger: {
    type: Y([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: Y(Array),
    default: () => [mt.enter, mt.numpadEnter, mt.space]
  }
}), gb = Xo({
  type: Y(Boolean),
  default: null
}), mb = Xo({
  type: Y(Function)
}), bb = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, o = [t], r = {
    [e]: gb,
    [n]: mb
  };
  return {
    useModelToggle: ({
      indicator: a,
      toggleReason: i,
      shouldHideWhenRouteChanges: l,
      shouldProceed: u,
      onShow: p,
      onHide: f
    }) => {
      const v = Ae(), { emit: g } = v, d = v.props, h = y(() => ge(d[n])), b = y(() => d[e] === null), m = (E) => {
        a.value !== !0 && (a.value = !0, i && (i.value = E), ge(p) && p(E));
      }, C = (E) => {
        a.value !== !1 && (a.value = !1, i && (i.value = E), ge(f) && f(E));
      }, O = (E) => {
        if (d.disabled === !0 || ge(u) && !u())
          return;
        const F = h.value && ce;
        F && g(t, !0), (b.value || !F) && m(E);
      }, $ = (E) => {
        if (d.disabled === !0 || !ce)
          return;
        const F = h.value && ce;
        F && g(t, !1), (b.value || !F) && C(E);
      }, S = (E) => {
        pn(E) && (d.disabled && E ? h.value && g(t, !1) : a.value !== E && (E ? m() : C()));
      }, I = () => {
        a.value ? $() : O();
      };
      return X(() => d[e], S), l && v.appContext.config.globalProperties.$route !== void 0 && X(() => ({
        ...v.proxy.$route
      }), () => {
        l.value && a.value && $();
      }), be(() => {
        S(d[e]);
      }), {
        hide: $,
        show: O,
        toggle: I,
        hasUpdateHandler: h
      };
    },
    useModelToggleProps: r,
    useModelToggleEmits: o
  };
}, {
  useModelToggleProps: yb,
  useModelToggleEmits: wb,
  useModelToggle: _b
} = bb("visible"), Sb = se({
  ...Sl,
  ...yb,
  ...Oa,
  ...Wl,
  ...Cl,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), Cb = [
  ...wb,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], Eb = (e, t) => Ee(e) ? e.includes(t) : e === t, Cn = (e, t, n) => (o) => {
  Eb(c(e), t) && n(o);
}, $t = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (r) => {
  const s = e?.(r);
  if (n === !1 || !s)
    return t?.(r);
}, Tb = V({
  name: "ElTooltipTrigger"
}), Ob = /* @__PURE__ */ V({
  ...Tb,
  props: Wl,
  setup(e, { expose: t }) {
    const n = e, o = de("tooltip"), { controlled: r, id: s, open: a, onOpen: i, onClose: l, onToggle: u } = ae(Ta, void 0), p = A(null), f = () => {
      if (c(r) || n.disabled)
        return !0;
    }, v = it(n, "trigger"), g = $t(f, Cn(v, "hover", i)), d = $t(f, Cn(v, "hover", l)), h = $t(f, Cn(v, "click", ($) => {
      $.button === 0 && u($);
    })), b = $t(f, Cn(v, "focus", i)), m = $t(f, Cn(v, "focus", l)), C = $t(f, Cn(v, "contextmenu", ($) => {
      $.preventDefault(), u($);
    })), O = $t(f, ($) => {
      const { code: S } = $;
      n.triggerKeys.includes(S) && ($.preventDefault(), u($));
    });
    return t({
      triggerRef: p
    }), ($, S) => (_(), U(c(kg), {
      id: c(s),
      "virtual-ref": $.virtualRef,
      open: c(a),
      "virtual-triggering": $.virtualTriggering,
      class: M(c(o).e("trigger")),
      onBlur: c(m),
      onClick: c(h),
      onContextmenu: c(C),
      onFocus: c(b),
      onMouseenter: c(g),
      onMouseleave: c(d),
      onKeydown: c(O)
    }, {
      default: W(() => [
        G($.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var Ib = /* @__PURE__ */ ie(Ob, [["__file", "trigger.vue"]]);
const $b = se({
  to: {
    type: Y([String, Object]),
    required: !0
  },
  disabled: Boolean
}), Ab = /* @__PURE__ */ V({
  __name: "teleport",
  props: $b,
  setup(e) {
    return (t, n) => t.disabled ? G(t.$slots, "default", { key: 0 }) : (_(), U(Ku, {
      key: 1,
      to: t.to
    }, [
      G(t.$slots, "default")
    ], 8, ["to"]));
  }
});
var Pb = /* @__PURE__ */ ie(Ab, [["__file", "teleport.vue"]]);
const jl = ot(Pb), Ul = () => {
  const e = Jr(), t = gl(), n = y(() => `${e.value}-popper-container-${t.prefix}`), o = y(() => `#${n.value}`);
  return {
    id: n,
    selector: o
  };
}, Rb = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, Mb = () => {
  const { id: e, selector: t } = Ul();
  return Gu(() => {
    ce && (process.env.NODE_ENV === "test" || !document.body.querySelector(t.value)) && Rb(e.value);
  }), {
    id: e,
    selector: t
  };
}, Lb = V({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), xb = /* @__PURE__ */ V({
  ...Lb,
  props: Oa,
  setup(e, { expose: t }) {
    const n = e, { selector: o } = Ul(), r = de("tooltip"), s = A();
    let a;
    const {
      controlled: i,
      id: l,
      open: u,
      trigger: p,
      onClose: f,
      onOpen: v,
      onShow: g,
      onHide: d,
      onBeforeShow: h,
      onBeforeHide: b
    } = ae(Ta, void 0), m = y(() => n.transition || `${r.namespace.value}-fade-in-linear`), C = y(() => process.env.NODE_ENV === "test" ? !0 : n.persistent);
    dt(() => {
      a?.();
    });
    const O = y(() => c(C) ? !0 : c(u)), $ = y(() => n.disabled ? !1 : c(u)), S = y(() => n.appendTo || o.value), I = y(() => {
      var B;
      return (B = n.style) != null ? B : {};
    }), E = A(!0), F = () => {
      d(), Q() && It(document.body), E.value = !0;
    }, T = () => {
      if (c(i))
        return !0;
    }, z = $t(T, () => {
      n.enterable && c(p) === "hover" && v();
    }), N = $t(T, () => {
      c(p) === "hover" && f();
    }), P = () => {
      var B, le;
      (le = (B = s.value) == null ? void 0 : B.updatePopper) == null || le.call(B), h?.();
    }, j = () => {
      b?.();
    }, re = () => {
      g(), a = jv(y(() => {
        var B;
        return (B = s.value) == null ? void 0 : B.popperContentRef;
      }), () => {
        if (c(i))
          return;
        c(p) !== "hover" && f();
      });
    }, J = () => {
      n.virtualTriggering || f();
    }, Q = (B) => {
      var le;
      const ve = (le = s.value) == null ? void 0 : le.popperContentRef, ye = B?.relatedTarget || document.activeElement;
      return ve?.contains(ye);
    };
    return X(() => c(u), (B) => {
      B ? E.value = !1 : a?.();
    }, {
      flush: "post"
    }), X(() => n.content, () => {
      var B, le;
      (le = (B = s.value) == null ? void 0 : B.updatePopper) == null || le.call(B);
    }), t({
      contentRef: s,
      isFocusInsideContent: Q
    }), (B, le) => (_(), U(c(jl), {
      disabled: !B.teleported,
      to: c(S)
    }, {
      default: W(() => [
        ee(gn, {
          name: c(m),
          onAfterLeave: F,
          onBeforeEnter: P,
          onAfterEnter: re,
          onBeforeLeave: j
        }, {
          default: W(() => [
            c(O) ? Ne((_(), U(c(fb), Xt({
              key: 0,
              id: c(l),
              ref_key: "contentRef",
              ref: s
            }, B.$attrs, {
              "aria-label": B.ariaLabel,
              "aria-hidden": E.value,
              "boundaries-padding": B.boundariesPadding,
              "fallback-placements": B.fallbackPlacements,
              "gpu-acceleration": B.gpuAcceleration,
              offset: B.offset,
              placement: B.placement,
              "popper-options": B.popperOptions,
              strategy: B.strategy,
              effect: B.effect,
              enterable: B.enterable,
              pure: B.pure,
              "popper-class": B.popperClass,
              "popper-style": [B.popperStyle, c(I)],
              "reference-el": B.referenceEl,
              "trigger-target-el": B.triggerTargetEl,
              visible: c($),
              "z-index": B.zIndex,
              onMouseenter: c(z),
              onMouseleave: c(N),
              onBlur: J,
              onClose: c(f)
            }), {
              default: W(() => [
                G(B.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
              [ut, c($)]
            ]) : H("v-if", !0)
          ]),
          _: 3
        }, 8, ["name"])
      ]),
      _: 3
    }, 8, ["disabled", "to"]));
  }
});
var Nb = /* @__PURE__ */ ie(xb, [["__file", "content.vue"]]);
const kb = V({
  name: "ElTooltip"
}), Db = /* @__PURE__ */ V({
  ...kb,
  props: Sb,
  emits: Cb,
  setup(e, { expose: t, emit: n }) {
    const o = e;
    Mb();
    const r = vn(), s = A(), a = A(), i = () => {
      var m;
      const C = c(s);
      C && ((m = C.popperInstanceRef) == null || m.update());
    }, l = A(!1), u = A(), { show: p, hide: f, hasUpdateHandler: v } = _b({
      indicator: l,
      toggleReason: u
    }), { onOpen: g, onClose: d } = hb({
      showAfter: it(o, "showAfter"),
      hideAfter: it(o, "hideAfter"),
      autoClose: it(o, "autoClose"),
      open: p,
      close: f
    }), h = y(() => pn(o.visible) && !v.value);
    Qe(Ta, {
      controlled: h,
      id: r,
      open: Wr(l),
      trigger: it(o, "trigger"),
      onOpen: (m) => {
        g(m);
      },
      onClose: (m) => {
        d(m);
      },
      onToggle: (m) => {
        c(l) ? d(m) : g(m);
      },
      onShow: () => {
        n("show", u.value);
      },
      onHide: () => {
        n("hide", u.value);
      },
      onBeforeShow: () => {
        n("before-show", u.value);
      },
      onBeforeHide: () => {
        n("before-hide", u.value);
      },
      updatePopper: i
    }), X(() => o.disabled, (m) => {
      m && l.value && (l.value = !1);
    });
    const b = (m) => {
      var C;
      return (C = a.value) == null ? void 0 : C.isFocusInsideContent(m);
    };
    return qu(() => l.value && f()), t({
      popperRef: s,
      contentRef: a,
      isFocusInsideContent: b,
      updatePopper: i,
      onOpen: g,
      onClose: d,
      hide: f
    }), (m, C) => (_(), U(c(pb), {
      ref_key: "popperRef",
      ref: s,
      role: m.role
    }, {
      default: W(() => [
        ee(Ib, {
          disabled: m.disabled,
          trigger: m.trigger,
          "trigger-keys": m.triggerKeys,
          "virtual-ref": m.virtualRef,
          "virtual-triggering": m.virtualTriggering
        }, {
          default: W(() => [
            m.$slots.default ? G(m.$slots, "default", { key: 0 }) : H("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        ee(Nb, {
          ref_key: "contentRef",
          ref: a,
          "aria-label": m.ariaLabel,
          "boundaries-padding": m.boundariesPadding,
          content: m.content,
          disabled: m.disabled,
          effect: m.effect,
          enterable: m.enterable,
          "fallback-placements": m.fallbackPlacements,
          "hide-after": m.hideAfter,
          "gpu-acceleration": m.gpuAcceleration,
          offset: m.offset,
          persistent: m.persistent,
          "popper-class": m.popperClass,
          "popper-style": m.popperStyle,
          placement: m.placement,
          "popper-options": m.popperOptions,
          pure: m.pure,
          "raw-content": m.rawContent,
          "reference-el": m.referenceEl,
          "trigger-target-el": m.triggerTargetEl,
          "show-after": m.showAfter,
          strategy: m.strategy,
          teleported: m.teleported,
          transition: m.transition,
          "virtual-triggering": m.virtualTriggering,
          "z-index": m.zIndex,
          "append-to": m.appendTo
        }, {
          default: W(() => [
            G(m.$slots, "content", {}, () => [
              m.rawContent ? (_(), D("span", {
                key: 0,
                innerHTML: m.content
              }, null, 8, ["innerHTML"])) : (_(), D("span", { key: 1 }, Z(m.content), 1))
            ]),
            m.showArrow ? (_(), U(c(Pg), {
              key: 0,
              "arrow-offset": m.arrowOffset
            }, null, 8, ["arrow-offset"])) : H("v-if", !0)
          ]),
          _: 3
        }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
      ]),
      _: 3
    }, 8, ["role"]));
  }
});
var Bb = /* @__PURE__ */ ie(Db, [["__file", "tooltip.vue"]]);
const Fb = ot(Bb), zb = se({
  value: {
    type: [String, Number],
    default: ""
  },
  max: {
    type: Number,
    default: 99
  },
  isDot: Boolean,
  hidden: Boolean,
  type: {
    type: String,
    values: ["primary", "success", "warning", "info", "danger"],
    default: "danger"
  },
  showZero: {
    type: Boolean,
    default: !0
  },
  color: String,
  badgeStyle: {
    type: Y([String, Object, Array])
  },
  offset: {
    type: Y(Array),
    default: [0, 0]
  },
  badgeClass: {
    type: String
  }
}), Vb = V({
  name: "ElBadge"
}), Hb = /* @__PURE__ */ V({
  ...Vb,
  props: zb,
  setup(e, { expose: t }) {
    const n = e, o = de("badge"), r = y(() => n.isDot ? "" : me(n.value) && me(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), s = y(() => {
      var a, i, l, u, p;
      return [
        {
          backgroundColor: n.color,
          marginRight: en(-((i = (a = n.offset) == null ? void 0 : a[0]) != null ? i : 0)),
          marginTop: en((u = (l = n.offset) == null ? void 0 : l[1]) != null ? u : 0)
        },
        (p = n.badgeStyle) != null ? p : {}
      ];
    });
    return t({
      content: r
    }), (a, i) => (_(), D("div", {
      class: M(c(o).b())
    }, [
      G(a.$slots, "default"),
      ee(gn, {
        name: `${c(o).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: W(() => [
          Ne(R("sup", {
            class: M([
              c(o).e("content"),
              c(o).em("content", a.type),
              c(o).is("fixed", !!a.$slots.default),
              c(o).is("dot", a.isDot),
              c(o).is("hide-zero", !a.showZero && n.value === 0),
              a.badgeClass
            ]),
            style: pe(c(s))
          }, [
            G(a.$slots, "content", { value: c(r) }, () => [
              gt(Z(c(r)), 1)
            ])
          ], 6), [
            [ut, !a.hidden && (c(r) || a.isDot || a.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var Wb = /* @__PURE__ */ ie(Hb, [["__file", "badge.vue"]]);
const jb = ot(Wb), Kl = Symbol("buttonGroupContextKey"), Gl = ({ from: e, replacement: t, scope: n, version: o, ref: r, type: s = "API" }, a) => {
  X(() => c(a), (i) => {
    i && Se(n, `[${s}] ${e} is about to be deprecated in version ${o}, please use ${t} instead.
For more detail, please visit: ${r}
`);
  }, {
    immediate: !0
  });
}, Ub = (e, t) => {
  Gl({
    from: "type.text",
    replacement: "link",
    version: "3.0.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/button.html#button-attributes"
  }, y(() => e.type === "text"));
  const n = ae(Kl, void 0), o = Qo("button"), { form: r } = er(), s = lo(y(() => n?.size)), a = tr(), i = A(), l = Gr(), u = y(() => e.type || n?.type || ""), p = y(() => {
    var d, h, b;
    return (b = (h = e.autoInsertSpace) != null ? h : (d = o.value) == null ? void 0 : d.autoInsertSpace) != null ? b : !1;
  }), f = y(() => e.tag === "button" ? {
    ariaDisabled: a.value || e.loading,
    disabled: a.value || e.loading,
    autofocus: e.autofocus,
    type: e.nativeType
  } : {}), v = y(() => {
    var d;
    const h = (d = l.default) == null ? void 0 : d.call(l);
    if (p.value && h?.length === 1) {
      const b = h[0];
      if (b?.type === Ii) {
        const m = b.children;
        return /^\p{Unified_Ideograph}{2}$/u.test(m.trim());
      }
    }
    return !1;
  });
  return {
    _disabled: a,
    _size: s,
    _type: u,
    _ref: i,
    _props: f,
    shouldAddSpace: v,
    handleClick: (d) => {
      if (a.value || e.loading) {
        d.stopPropagation();
        return;
      }
      e.nativeType === "reset" && r?.resetFields(), t("click", d);
    }
  };
}, Kb = [
  "default",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
  "text",
  ""
], Gb = ["button", "submit", "reset"], kr = se({
  size: Jo,
  disabled: Boolean,
  type: {
    type: String,
    values: Kb,
    default: ""
  },
  icon: {
    type: Mt
  },
  nativeType: {
    type: String,
    values: Gb,
    default: "button"
  },
  loading: Boolean,
  loadingIcon: {
    type: Mt,
    default: () => fl
  },
  plain: Boolean,
  text: Boolean,
  link: Boolean,
  bg: Boolean,
  autofocus: Boolean,
  round: Boolean,
  circle: Boolean,
  color: String,
  dark: Boolean,
  autoInsertSpace: {
    type: Boolean,
    default: void 0
  },
  tag: {
    type: Y([String, Object]),
    default: "button"
  }
}), qb = {
  click: (e) => e instanceof MouseEvent
};
function Te(e, t) {
  Yb(e) && (e = "100%");
  var n = Zb(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function Co(e) {
  return Math.min(1, Math.max(0, e));
}
function Yb(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function Zb(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function ql(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function Eo(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function un(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function Xb(e, t, n) {
  return {
    r: Te(e, 255) * 255,
    g: Te(t, 255) * 255,
    b: Te(n, 255) * 255
  };
}
function gi(e, t, n) {
  e = Te(e, 255), t = Te(t, 255), n = Te(n, 255);
  var o = Math.max(e, t, n), r = Math.min(e, t, n), s = 0, a = 0, i = (o + r) / 2;
  if (o === r)
    a = 0, s = 0;
  else {
    var l = o - r;
    switch (a = i > 0.5 ? l / (2 - o - r) : l / (o + r), o) {
      case e:
        s = (t - n) / l + (t < n ? 6 : 0);
        break;
      case t:
        s = (n - e) / l + 2;
        break;
      case n:
        s = (e - t) / l + 4;
        break;
    }
    s /= 6;
  }
  return { h: s, s: a, l: i };
}
function br(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function Jb(e, t, n) {
  var o, r, s;
  if (e = Te(e, 360), t = Te(t, 100), n = Te(n, 100), t === 0)
    r = n, s = n, o = n;
  else {
    var a = n < 0.5 ? n * (1 + t) : n + t - n * t, i = 2 * n - a;
    o = br(i, a, e + 1 / 3), r = br(i, a, e), s = br(i, a, e - 1 / 3);
  }
  return { r: o * 255, g: r * 255, b: s * 255 };
}
function mi(e, t, n) {
  e = Te(e, 255), t = Te(t, 255), n = Te(n, 255);
  var o = Math.max(e, t, n), r = Math.min(e, t, n), s = 0, a = o, i = o - r, l = o === 0 ? 0 : i / o;
  if (o === r)
    s = 0;
  else {
    switch (o) {
      case e:
        s = (t - n) / i + (t < n ? 6 : 0);
        break;
      case t:
        s = (n - e) / i + 2;
        break;
      case n:
        s = (e - t) / i + 4;
        break;
    }
    s /= 6;
  }
  return { h: s, s: l, v: a };
}
function Qb(e, t, n) {
  e = Te(e, 360) * 6, t = Te(t, 100), n = Te(n, 100);
  var o = Math.floor(e), r = e - o, s = n * (1 - t), a = n * (1 - r * t), i = n * (1 - (1 - r) * t), l = o % 6, u = [n, a, s, s, i, n][l], p = [i, n, n, a, s, s][l], f = [s, s, i, n, n, a][l];
  return { r: u * 255, g: p * 255, b: f * 255 };
}
function bi(e, t, n, o) {
  var r = [
    un(Math.round(e).toString(16)),
    un(Math.round(t).toString(16)),
    un(Math.round(n).toString(16))
  ];
  return o && r[0].startsWith(r[0].charAt(1)) && r[1].startsWith(r[1].charAt(1)) && r[2].startsWith(r[2].charAt(1)) ? r[0].charAt(0) + r[1].charAt(0) + r[2].charAt(0) : r.join("");
}
function e0(e, t, n, o, r) {
  var s = [
    un(Math.round(e).toString(16)),
    un(Math.round(t).toString(16)),
    un(Math.round(n).toString(16)),
    un(t0(o))
  ];
  return r && s[0].startsWith(s[0].charAt(1)) && s[1].startsWith(s[1].charAt(1)) && s[2].startsWith(s[2].charAt(1)) && s[3].startsWith(s[3].charAt(1)) ? s[0].charAt(0) + s[1].charAt(0) + s[2].charAt(0) + s[3].charAt(0) : s.join("");
}
function t0(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function yi(e) {
  return je(e) / 255;
}
function je(e) {
  return parseInt(e, 16);
}
function n0(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var Dr = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function o0(e) {
  var t = { r: 0, g: 0, b: 0 }, n = 1, o = null, r = null, s = null, a = !1, i = !1;
  return typeof e == "string" && (e = s0(e)), typeof e == "object" && (Tt(e.r) && Tt(e.g) && Tt(e.b) ? (t = Xb(e.r, e.g, e.b), a = !0, i = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : Tt(e.h) && Tt(e.s) && Tt(e.v) ? (o = Eo(e.s), r = Eo(e.v), t = Qb(e.h, o, r), a = !0, i = "hsv") : Tt(e.h) && Tt(e.s) && Tt(e.l) && (o = Eo(e.s), s = Eo(e.l), t = Jb(e.h, o, s), a = !0, i = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = ql(n), {
    ok: a,
    format: e.format || i,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: n
  };
}
var r0 = "[-\\+]?\\d+%?", a0 = "[-\\+]?\\d*\\.\\d+%?", Zt = "(?:".concat(a0, ")|(?:").concat(r0, ")"), yr = "[\\s|\\(]+(".concat(Zt, ")[,|\\s]+(").concat(Zt, ")[,|\\s]+(").concat(Zt, ")\\s*\\)?"), wr = "[\\s|\\(]+(".concat(Zt, ")[,|\\s]+(").concat(Zt, ")[,|\\s]+(").concat(Zt, ")[,|\\s]+(").concat(Zt, ")\\s*\\)?"), at = {
  CSS_UNIT: new RegExp(Zt),
  rgb: new RegExp("rgb" + yr),
  rgba: new RegExp("rgba" + wr),
  hsl: new RegExp("hsl" + yr),
  hsla: new RegExp("hsla" + wr),
  hsv: new RegExp("hsv" + yr),
  hsva: new RegExp("hsva" + wr),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function s0(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (Dr[e])
    e = Dr[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var n = at.rgb.exec(e);
  return n ? { r: n[1], g: n[2], b: n[3] } : (n = at.rgba.exec(e), n ? { r: n[1], g: n[2], b: n[3], a: n[4] } : (n = at.hsl.exec(e), n ? { h: n[1], s: n[2], l: n[3] } : (n = at.hsla.exec(e), n ? { h: n[1], s: n[2], l: n[3], a: n[4] } : (n = at.hsv.exec(e), n ? { h: n[1], s: n[2], v: n[3] } : (n = at.hsva.exec(e), n ? { h: n[1], s: n[2], v: n[3], a: n[4] } : (n = at.hex8.exec(e), n ? {
    r: je(n[1]),
    g: je(n[2]),
    b: je(n[3]),
    a: yi(n[4]),
    format: t ? "name" : "hex8"
  } : (n = at.hex6.exec(e), n ? {
    r: je(n[1]),
    g: je(n[2]),
    b: je(n[3]),
    format: t ? "name" : "hex"
  } : (n = at.hex4.exec(e), n ? {
    r: je(n[1] + n[1]),
    g: je(n[2] + n[2]),
    b: je(n[3] + n[3]),
    a: yi(n[4] + n[4]),
    format: t ? "name" : "hex8"
  } : (n = at.hex3.exec(e), n ? {
    r: je(n[1] + n[1]),
    g: je(n[2] + n[2]),
    b: je(n[3] + n[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function Tt(e) {
  return !!at.CSS_UNIT.exec(String(e));
}
var i0 = (
  /** @class */
  function() {
    function e(t, n) {
      t === void 0 && (t = ""), n === void 0 && (n = {});
      var o;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = n0(t)), this.originalInput = t;
      var r = o0(t);
      this.originalInput = t, this.r = r.r, this.g = r.g, this.b = r.b, this.a = r.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (o = n.format) !== null && o !== void 0 ? o : r.format, this.gradientType = n.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = r.ok;
    }
    return e.prototype.isDark = function() {
      return this.getBrightness() < 128;
    }, e.prototype.isLight = function() {
      return !this.isDark();
    }, e.prototype.getBrightness = function() {
      var t = this.toRgb();
      return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
    }, e.prototype.getLuminance = function() {
      var t = this.toRgb(), n, o, r, s = t.r / 255, a = t.g / 255, i = t.b / 255;
      return s <= 0.03928 ? n = s / 12.92 : n = Math.pow((s + 0.055) / 1.055, 2.4), a <= 0.03928 ? o = a / 12.92 : o = Math.pow((a + 0.055) / 1.055, 2.4), i <= 0.03928 ? r = i / 12.92 : r = Math.pow((i + 0.055) / 1.055, 2.4), 0.2126 * n + 0.7152 * o + 0.0722 * r;
    }, e.prototype.getAlpha = function() {
      return this.a;
    }, e.prototype.setAlpha = function(t) {
      return this.a = ql(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = mi(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = mi(this.r, this.g, this.b), n = Math.round(t.h * 360), o = Math.round(t.s * 100), r = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(n, ", ").concat(o, "%, ").concat(r, "%)") : "hsva(".concat(n, ", ").concat(o, "%, ").concat(r, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = gi(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = gi(this.r, this.g, this.b), n = Math.round(t.h * 360), o = Math.round(t.s * 100), r = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(n, ", ").concat(o, "%, ").concat(r, "%)") : "hsla(".concat(n, ", ").concat(o, "%, ").concat(r, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), bi(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), e0(this.r, this.g, this.b, this.a, t);
    }, e.prototype.toHex8String = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex8(t);
    }, e.prototype.toHexShortString = function(t) {
      return t === void 0 && (t = !1), this.a === 1 ? this.toHexString(t) : this.toHex8String(t);
    }, e.prototype.toRgb = function() {
      return {
        r: Math.round(this.r),
        g: Math.round(this.g),
        b: Math.round(this.b),
        a: this.a
      };
    }, e.prototype.toRgbString = function() {
      var t = Math.round(this.r), n = Math.round(this.g), o = Math.round(this.b);
      return this.a === 1 ? "rgb(".concat(t, ", ").concat(n, ", ").concat(o, ")") : "rgba(".concat(t, ", ").concat(n, ", ").concat(o, ", ").concat(this.roundA, ")");
    }, e.prototype.toPercentageRgb = function() {
      var t = function(n) {
        return "".concat(Math.round(Te(n, 255) * 100), "%");
      };
      return {
        r: t(this.r),
        g: t(this.g),
        b: t(this.b),
        a: this.a
      };
    }, e.prototype.toPercentageRgbString = function() {
      var t = function(n) {
        return Math.round(Te(n, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
    }, e.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var t = "#" + bi(this.r, this.g, this.b, !1), n = 0, o = Object.entries(Dr); n < o.length; n++) {
        var r = o[n], s = r[0], a = r[1];
        if (t === a)
          return s;
      }
      return !1;
    }, e.prototype.toString = function(t) {
      var n = !!t;
      t = t ?? this.format;
      var o = !1, r = this.a < 1 && this.a >= 0, s = !n && r && (t.startsWith("hex") || t === "name");
      return s ? t === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (o = this.toRgbString()), t === "prgb" && (o = this.toPercentageRgbString()), (t === "hex" || t === "hex6") && (o = this.toHexString()), t === "hex3" && (o = this.toHexString(!0)), t === "hex4" && (o = this.toHex8String(!0)), t === "hex8" && (o = this.toHex8String()), t === "name" && (o = this.toName()), t === "hsl" && (o = this.toHslString()), t === "hsv" && (o = this.toHsvString()), o || this.toHexString());
    }, e.prototype.toNumber = function() {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    }, e.prototype.clone = function() {
      return new e(this.toString());
    }, e.prototype.lighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l += t / 100, n.l = Co(n.l), new e(n);
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toRgb();
      return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), new e(n);
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l -= t / 100, n.l = Co(n.l), new e(n);
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s -= t / 100, n.s = Co(n.s), new e(n);
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s += t / 100, n.s = Co(n.s), new e(n);
    }, e.prototype.greyscale = function() {
      return this.desaturate(100);
    }, e.prototype.spin = function(t) {
      var n = this.toHsl(), o = (n.h + t) % 360;
      return n.h = o < 0 ? 360 + o : o, new e(n);
    }, e.prototype.mix = function(t, n) {
      n === void 0 && (n = 50);
      var o = this.toRgb(), r = new e(t).toRgb(), s = n / 100, a = {
        r: (r.r - o.r) * s + o.r,
        g: (r.g - o.g) * s + o.g,
        b: (r.b - o.b) * s + o.b,
        a: (r.a - o.a) * s + o.a
      };
      return new e(a);
    }, e.prototype.analogous = function(t, n) {
      t === void 0 && (t = 6), n === void 0 && (n = 30);
      var o = this.toHsl(), r = 360 / n, s = [this];
      for (o.h = (o.h - (r * t >> 1) + 720) % 360; --t; )
        o.h = (o.h + r) % 360, s.push(new e(o));
      return s;
    }, e.prototype.complement = function() {
      var t = this.toHsl();
      return t.h = (t.h + 180) % 360, new e(t);
    }, e.prototype.monochromatic = function(t) {
      t === void 0 && (t = 6);
      for (var n = this.toHsv(), o = n.h, r = n.s, s = n.v, a = [], i = 1 / t; t--; )
        a.push(new e({ h: o, s: r, v: s })), s = (s + i) % 1;
      return a;
    }, e.prototype.splitcomplement = function() {
      var t = this.toHsl(), n = t.h;
      return [
        this,
        new e({ h: (n + 72) % 360, s: t.s, l: t.l }),
        new e({ h: (n + 216) % 360, s: t.s, l: t.l })
      ];
    }, e.prototype.onBackground = function(t) {
      var n = this.toRgb(), o = new e(t).toRgb(), r = n.a + o.a * (1 - n.a);
      return new e({
        r: (n.r * n.a + o.r * o.a * (1 - n.a)) / r,
        g: (n.g * n.a + o.g * o.a * (1 - n.a)) / r,
        b: (n.b * n.a + o.b * o.a * (1 - n.a)) / r,
        a: r
      });
    }, e.prototype.triad = function() {
      return this.polyad(3);
    }, e.prototype.tetrad = function() {
      return this.polyad(4);
    }, e.prototype.polyad = function(t) {
      for (var n = this.toHsl(), o = n.h, r = [this], s = 360 / t, a = 1; a < t; a++)
        r.push(new e({ h: (o + a * s) % 360, s: n.s, l: n.l }));
      return r;
    }, e.prototype.equals = function(t) {
      return this.toRgbString() === new e(t).toRgbString();
    }, e;
  }()
);
function jt(e, t = 20) {
  return e.mix("#141414", t).toString();
}
function l0(e) {
  const t = tr(), n = de("button");
  return y(() => {
    let o = {}, r = e.color;
    if (r) {
      const s = r.match(/var\((.*?)\)/);
      s && (r = window.getComputedStyle(window.document.documentElement).getPropertyValue(s[1]));
      const a = new i0(r), i = e.dark ? a.tint(20).toString() : jt(a, 20);
      if (e.plain)
        o = n.cssVarBlock({
          "bg-color": e.dark ? jt(a, 90) : a.tint(90).toString(),
          "text-color": r,
          "border-color": e.dark ? jt(a, 50) : a.tint(50).toString(),
          "hover-text-color": `var(${n.cssVarName("color-white")})`,
          "hover-bg-color": r,
          "hover-border-color": r,
          "active-bg-color": i,
          "active-text-color": `var(${n.cssVarName("color-white")})`,
          "active-border-color": i
        }), t.value && (o[n.cssVarBlockName("disabled-bg-color")] = e.dark ? jt(a, 90) : a.tint(90).toString(), o[n.cssVarBlockName("disabled-text-color")] = e.dark ? jt(a, 50) : a.tint(50).toString(), o[n.cssVarBlockName("disabled-border-color")] = e.dark ? jt(a, 80) : a.tint(80).toString());
      else {
        const l = e.dark ? jt(a, 30) : a.tint(30).toString(), u = a.isDark() ? `var(${n.cssVarName("color-white")})` : `var(${n.cssVarName("color-black")})`;
        if (o = n.cssVarBlock({
          "bg-color": r,
          "text-color": u,
          "border-color": r,
          "hover-bg-color": l,
          "hover-text-color": u,
          "hover-border-color": l,
          "active-bg-color": i,
          "active-border-color": i
        }), t.value) {
          const p = e.dark ? jt(a, 50) : a.tint(50).toString();
          o[n.cssVarBlockName("disabled-bg-color")] = p, o[n.cssVarBlockName("disabled-text-color")] = e.dark ? "rgba(255, 255, 255, 0.5)" : `var(${n.cssVarName("color-white")})`, o[n.cssVarBlockName("disabled-border-color")] = p;
        }
      }
    }
    return o;
  });
}
const u0 = V({
  name: "ElButton"
}), c0 = /* @__PURE__ */ V({
  ...u0,
  props: kr,
  emits: qb,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = l0(o), s = de("button"), { _ref: a, _size: i, _type: l, _disabled: u, _props: p, shouldAddSpace: f, handleClick: v } = Ub(o, n), g = y(() => [
      s.b(),
      s.m(l.value),
      s.m(i.value),
      s.is("disabled", u.value),
      s.is("loading", o.loading),
      s.is("plain", o.plain),
      s.is("round", o.round),
      s.is("circle", o.circle),
      s.is("text", o.text),
      s.is("link", o.link),
      s.is("has-bg", o.bg)
    ]);
    return t({
      ref: a,
      size: i,
      type: l,
      disabled: u,
      shouldAddSpace: f
    }), (d, h) => (_(), U(Be(d.tag), Xt({
      ref_key: "_ref",
      ref: a
    }, c(p), {
      class: c(g),
      style: c(r),
      onClick: c(v)
    }), {
      default: W(() => [
        d.loading ? (_(), D(Ge, { key: 0 }, [
          d.$slots.loading ? G(d.$slots, "loading", { key: 0 }) : (_(), U(c(xe), {
            key: 1,
            class: M(c(s).is("loading"))
          }, {
            default: W(() => [
              (_(), U(Be(d.loadingIcon)))
            ]),
            _: 1
          }, 8, ["class"]))
        ], 64)) : d.icon || d.$slots.icon ? (_(), U(c(xe), { key: 1 }, {
          default: W(() => [
            d.icon ? (_(), U(Be(d.icon), { key: 0 })) : G(d.$slots, "icon", { key: 1 })
          ]),
          _: 3
        })) : H("v-if", !0),
        d.$slots.default ? (_(), D("span", {
          key: 2,
          class: M({ [c(s).em("text", "expand")]: c(f) })
        }, [
          G(d.$slots, "default")
        ], 2)) : H("v-if", !0)
      ]),
      _: 3
    }, 16, ["class", "style", "onClick"]));
  }
});
var d0 = /* @__PURE__ */ ie(c0, [["__file", "button.vue"]]);
const f0 = {
  size: kr.size,
  type: kr.type
}, p0 = V({
  name: "ElButtonGroup"
}), v0 = /* @__PURE__ */ V({
  ...p0,
  props: f0,
  setup(e) {
    const t = e;
    Qe(Kl, Jt({
      size: it(t, "size"),
      type: it(t, "type")
    }));
    const n = de("button");
    return (o, r) => (_(), D("div", {
      class: M(c(n).b("group"))
    }, [
      G(o.$slots, "default")
    ], 2));
  }
});
var Yl = /* @__PURE__ */ ie(v0, [["__file", "button-group.vue"]]);
const Zl = ot(d0, {
  ButtonGroup: Yl
});
ua(Yl);
var Ao = /* @__PURE__ */ ((e) => (e[e.TEXT = 1] = "TEXT", e[e.CLASS = 2] = "CLASS", e[e.STYLE = 4] = "STYLE", e[e.PROPS = 8] = "PROPS", e[e.FULL_PROPS = 16] = "FULL_PROPS", e[e.HYDRATE_EVENTS = 32] = "HYDRATE_EVENTS", e[e.STABLE_FRAGMENT = 64] = "STABLE_FRAGMENT", e[e.KEYED_FRAGMENT = 128] = "KEYED_FRAGMENT", e[e.UNKEYED_FRAGMENT = 256] = "UNKEYED_FRAGMENT", e[e.NEED_PATCH = 512] = "NEED_PATCH", e[e.DYNAMIC_SLOTS = 1024] = "DYNAMIC_SLOTS", e[e.HOISTED = -1] = "HOISTED", e[e.BAIL = -2] = "BAIL", e))(Ao || {});
const h0 = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"), Br = se({
  type: {
    type: String,
    values: ["primary", "success", "info", "warning", "danger"],
    default: "primary"
  },
  closable: Boolean,
  disableTransitions: Boolean,
  hit: Boolean,
  color: String,
  size: {
    type: String,
    values: sl
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
}), g0 = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
}, m0 = V({
  name: "ElTag"
}), b0 = /* @__PURE__ */ V({
  ...m0,
  props: Br,
  emits: g0,
  setup(e, { emit: t }) {
    const n = e, o = lo(), r = de("tag"), s = y(() => {
      const { type: u, hit: p, effect: f, closable: v, round: g } = n;
      return [
        r.b(),
        r.is("closable", v),
        r.m(u || "primary"),
        r.m(o.value),
        r.m(f),
        r.is("hit", p),
        r.is("round", g)
      ];
    }), a = (u) => {
      t("close", u);
    }, i = (u) => {
      t("click", u);
    }, l = (u) => {
      var p, f, v;
      (v = (f = (p = u?.component) == null ? void 0 : p.subTree) == null ? void 0 : f.component) != null && v.bum && (u.component.subTree.component.bum = null);
    };
    return (u, p) => u.disableTransitions ? (_(), D("span", {
      key: 0,
      class: M(c(s)),
      style: pe({ backgroundColor: u.color }),
      onClick: i
    }, [
      R("span", {
        class: M(c(r).e("content"))
      }, [
        G(u.$slots, "default")
      ], 2),
      u.closable ? (_(), U(c(xe), {
        key: 0,
        class: M(c(r).e("close")),
        onClick: Me(a, ["stop"])
      }, {
        default: W(() => [
          ee(c(zo))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : H("v-if", !0)
    ], 6)) : (_(), U(gn, {
      key: 1,
      name: `${c(r).namespace.value}-zoom-in-center`,
      appear: "",
      onVnodeMounted: l
    }, {
      default: W(() => [
        R("span", {
          class: M(c(s)),
          style: pe({ backgroundColor: u.color }),
          onClick: i
        }, [
          R("span", {
            class: M(c(r).e("content"))
          }, [
            G(u.$slots, "default")
          ], 2),
          u.closable ? (_(), U(c(xe), {
            key: 0,
            class: M(c(r).e("close")),
            onClick: Me(a, ["stop"])
          }, {
            default: W(() => [
              ee(c(zo))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : H("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var y0 = /* @__PURE__ */ ie(b0, [["__file", "tag.vue"]]);
const w0 = ot(y0), Ut = /* @__PURE__ */ new Map();
if (ce) {
  let e;
  document.addEventListener("mousedown", (t) => e = t), document.addEventListener("mouseup", (t) => {
    if (e) {
      for (const n of Ut.values())
        for (const { documentHandler: o } of n)
          o(t, e);
      e = void 0;
    }
  });
}
function wi(e, t) {
  let n = [];
  return Ee(t.arg) ? n = t.arg : Xe(t.arg) && n.push(t.arg), function(o, r) {
    const s = t.instance.popperRef, a = o.target, i = r?.target, l = !t || !t.instance, u = !a || !i, p = e.contains(a) || e.contains(i), f = e === a, v = n.length && n.some((d) => d?.contains(a)) || n.length && n.includes(i), g = s && (s.contains(a) || s.contains(i));
    l || u || p || f || v || g || t.value(o, r);
  };
}
const _0 = {
  beforeMount(e, t) {
    Ut.has(e) || Ut.set(e, []), Ut.get(e).push({
      documentHandler: wi(e, t),
      bindingFn: t.value
    });
  },
  updated(e, t) {
    Ut.has(e) || Ut.set(e, []);
    const n = Ut.get(e), o = n.findIndex((s) => s.bindingFn === t.oldValue), r = {
      documentHandler: wi(e, t),
      bindingFn: t.value
    };
    o >= 0 ? n.splice(o, 1, r) : n.push(r);
  },
  unmounted(e) {
    Ut.delete(e);
  }
}, ht = {}, Xl = (e) => {
  if (!e)
    return { onClick: Pt, onMousedown: Pt, onMouseup: Pt };
  let t = !1, n = !1;
  return { onClick: (a) => {
    t && n && e(a), t = n = !1;
  }, onMousedown: (a) => {
    t = a.target === a.currentTarget;
  }, onMouseup: (a) => {
    n = a.target === a.currentTarget;
  } };
}, S0 = se({
  mask: {
    type: Boolean,
    default: !0
  },
  customMaskEvent: Boolean,
  overlayClass: {
    type: Y([
      String,
      Array,
      Object
    ])
  },
  zIndex: {
    type: Y([String, Number])
  }
}), C0 = {
  click: (e) => e instanceof MouseEvent
}, E0 = "overlay";
var T0 = V({
  name: "ElOverlay",
  props: S0,
  emits: C0,
  setup(e, { slots: t, emit: n }) {
    const o = de(E0), r = (l) => {
      n("click", l);
    }, { onClick: s, onMousedown: a, onMouseup: i } = Xl(e.customMaskEvent ? void 0 : r);
    return () => e.mask ? ee("div", {
      class: [o.b(), e.overlayClass],
      style: {
        zIndex: e.zIndex
      },
      onClick: s,
      onMousedown: a,
      onMouseup: i
    }, [G(t, "default")], Ao.STYLE | Ao.CLASS | Ao.PROPS, ["onClick", "onMouseup", "onMousedown"]) : Ei("div", {
      class: e.overlayClass,
      style: {
        zIndex: e.zIndex,
        position: "fixed",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px"
      }
    }, [G(t, "default")]);
  }
});
const O0 = T0, Jl = Symbol("dialogInjectionKey"), Ql = se({
  center: Boolean,
  alignCenter: Boolean,
  closeIcon: {
    type: Mt
  },
  draggable: Boolean,
  overflow: Boolean,
  fullscreen: Boolean,
  headerClass: String,
  bodyClass: String,
  footerClass: String,
  showClose: {
    type: Boolean,
    default: !0
  },
  title: {
    type: String,
    default: ""
  },
  ariaLevel: {
    type: String,
    default: "2"
  }
}), I0 = {
  close: () => !0
}, $0 = (e, t, n, o) => {
  let r = {
    offsetX: 0,
    offsetY: 0
  };
  const s = (u) => {
    const p = u.clientX, f = u.clientY, { offsetX: v, offsetY: g } = r, d = e.value.getBoundingClientRect(), h = d.left, b = d.top, m = d.width, C = d.height, O = document.documentElement.clientWidth, $ = document.documentElement.clientHeight, S = -h + v, I = -b + g, E = O - h - m + v, F = $ - b - C + g, T = (N) => {
      let P = v + N.clientX - p, j = g + N.clientY - f;
      o?.value || (P = Math.min(Math.max(P, S), E), j = Math.min(Math.max(j, I), F)), r = {
        offsetX: P,
        offsetY: j
      }, e.value && (e.value.style.transform = `translate(${en(P)}, ${en(j)})`);
    }, z = () => {
      document.removeEventListener("mousemove", T), document.removeEventListener("mouseup", z);
    };
    document.addEventListener("mousemove", T), document.addEventListener("mouseup", z);
  }, a = () => {
    t.value && e.value && t.value.addEventListener("mousedown", s);
  }, i = () => {
    t.value && e.value && t.value.removeEventListener("mousedown", s);
  }, l = () => {
    r = {
      offsetX: 0,
      offsetY: 0
    }, e.value && (e.value.style.transform = "none");
  };
  return be(() => {
    jr(() => {
      n.value ? a() : i();
    });
  }), dt(() => {
    i();
  }), {
    resetPosition: l
  };
}, A0 = (...e) => (t) => {
  e.forEach((n) => {
    ge(n) ? n(t) : n.value = t;
  });
}, P0 = V({ name: "ElDialogContent" }), R0 = /* @__PURE__ */ V({
  ...P0,
  props: Ql,
  emits: I0,
  setup(e, { expose: t }) {
    const n = e, { t: o } = la(), { Close: r } = pl, { dialogRef: s, headerRef: a, bodyId: i, ns: l, style: u } = ae(Jl), { focusTrapRef: p } = ae(Il), f = y(() => [
      l.b(),
      l.is("fullscreen", n.fullscreen),
      l.is("draggable", n.draggable),
      l.is("align-center", n.alignCenter),
      { [l.m("center")]: n.center }
    ]), v = A0(p, s), g = y(() => n.draggable), d = y(() => n.overflow), { resetPosition: h } = $0(s, a, g, d);
    return t({
      resetPosition: h
    }), (b, m) => (_(), D("div", {
      ref: c(v),
      class: M(c(f)),
      style: pe(c(u)),
      tabindex: "-1"
    }, [
      R("header", {
        ref_key: "headerRef",
        ref: a,
        class: M([c(l).e("header"), b.headerClass, { "show-close": b.showClose }])
      }, [
        G(b.$slots, "header", {}, () => [
          R("span", {
            role: "heading",
            "aria-level": b.ariaLevel,
            class: M(c(l).e("title"))
          }, Z(b.title), 11, ["aria-level"])
        ]),
        b.showClose ? (_(), D("button", {
          key: 0,
          "aria-label": c(o)("el.dialog.close"),
          class: M(c(l).e("headerbtn")),
          type: "button",
          onClick: (C) => b.$emit("close")
        }, [
          ee(c(xe), {
            class: M(c(l).e("close"))
          }, {
            default: W(() => [
              (_(), U(Be(b.closeIcon || c(r))))
            ]),
            _: 1
          }, 8, ["class"])
        ], 10, ["aria-label", "onClick"])) : H("v-if", !0)
      ], 2),
      R("div", {
        id: c(i),
        class: M([c(l).e("body"), b.bodyClass])
      }, [
        G(b.$slots, "default")
      ], 10, ["id"]),
      b.$slots.footer ? (_(), D("footer", {
        key: 0,
        class: M([c(l).e("footer"), b.footerClass])
      }, [
        G(b.$slots, "footer")
      ], 2)) : H("v-if", !0)
    ], 6));
  }
});
var M0 = /* @__PURE__ */ ie(R0, [["__file", "dialog-content.vue"]]);
const L0 = se({
  ...Ql,
  appendToBody: Boolean,
  appendTo: {
    type: Y([String, Object]),
    default: "body"
  },
  beforeClose: {
    type: Y(Function)
  },
  destroyOnClose: Boolean,
  closeOnClickModal: {
    type: Boolean,
    default: !0
  },
  closeOnPressEscape: {
    type: Boolean,
    default: !0
  },
  lockScroll: {
    type: Boolean,
    default: !0
  },
  modal: {
    type: Boolean,
    default: !0
  },
  openDelay: {
    type: Number,
    default: 0
  },
  closeDelay: {
    type: Number,
    default: 0
  },
  top: {
    type: String
  },
  modelValue: Boolean,
  modalClass: String,
  headerClass: String,
  bodyClass: String,
  footerClass: String,
  width: {
    type: [String, Number]
  },
  zIndex: {
    type: Number
  },
  trapFocus: Boolean,
  headerAriaLevel: {
    type: String,
    default: "2"
  }
}), x0 = {
  open: () => !0,
  opened: () => !0,
  close: () => !0,
  closed: () => !0,
  [Ke]: (e) => pn(e),
  openAutoFocus: () => !0,
  closeAutoFocus: () => !0
}, N0 = (e, t = {}) => {
  Ur(e) || tl("[useLockscreen]", "You need to pass a ref param to this function");
  const n = t.ns || de("popup"), o = y(() => n.bm("parent", "hidden"));
  if (!ce || qs(document.body, o.value))
    return;
  let r = 0, s = !1, a = "0";
  const i = () => {
    setTimeout(() => {
      typeof document > "u" || s && document && (document.body.style.width = a, yh(document.body, o.value));
    }, 200);
  };
  X(e, (l) => {
    if (!l) {
      i();
      return;
    }
    s = !qs(document.body, o.value), s && (a = document.body.style.width, bh(document.body, o.value)), r = _h(n.namespace.value);
    const u = document.documentElement.clientHeight < document.body.scrollHeight, p = wh(document.body, "overflowY");
    r > 0 && (u || p === "scroll") && s && (document.body.style.width = `calc(100% - ${r}px)`);
  }), Oi(() => i());
}, k0 = (e, t) => {
  var n;
  const r = Ae().emit, { nextZIndex: s } = ia();
  let a = "";
  const i = vn(), l = vn(), u = A(!1), p = A(!1), f = A(!1), v = A((n = e.zIndex) != null ? n : s());
  let g, d;
  const h = Qo("namespace", Gn), b = y(() => {
    const J = {}, Q = `--${h.value}-dialog`;
    return e.fullscreen || (e.top && (J[`${Q}-margin-top`] = e.top), e.width && (J[`${Q}-width`] = en(e.width))), J;
  }), m = y(() => e.alignCenter ? { display: "flex" } : {});
  function C() {
    r("opened");
  }
  function O() {
    r("closed"), r(Ke, !1), e.destroyOnClose && (f.value = !1);
  }
  function $() {
    r("close");
  }
  function S() {
    d?.(), g?.(), e.openDelay && e.openDelay > 0 ? { stop: g } = Bo(() => T(), e.openDelay) : T();
  }
  function I() {
    g?.(), d?.(), e.closeDelay && e.closeDelay > 0 ? { stop: d } = Bo(() => z(), e.closeDelay) : z();
  }
  function E() {
    function J(Q) {
      Q || (p.value = !0, u.value = !1);
    }
    e.beforeClose ? e.beforeClose(J) : I();
  }
  function F() {
    e.closeOnClickModal && E();
  }
  function T() {
    ce && (u.value = !0);
  }
  function z() {
    u.value = !1;
  }
  function N() {
    r("openAutoFocus");
  }
  function P() {
    r("closeAutoFocus");
  }
  function j(J) {
    var Q;
    ((Q = J.detail) == null ? void 0 : Q.focusReason) === "pointer" && J.preventDefault();
  }
  e.lockScroll && N0(u);
  function re() {
    e.closeOnPressEscape && E();
  }
  return X(() => e.modelValue, (J) => {
    J ? (p.value = !1, S(), f.value = !0, v.value = Xi(e.zIndex) ? s() : v.value++, fe(() => {
      r("open"), t.value && (t.value.parentElement.scrollTop = 0, t.value.parentElement.scrollLeft = 0, t.value.scrollTop = 0);
    })) : u.value && I();
  }), X(() => e.fullscreen, (J) => {
    t.value && (J ? (a = t.value.style.transform, t.value.style.transform = "") : t.value.style.transform = a);
  }), be(() => {
    e.modelValue && (u.value = !0, f.value = !0, S());
  }), {
    afterEnter: C,
    afterLeave: O,
    beforeLeave: $,
    handleClose: E,
    onModalClick: F,
    close: I,
    doClose: z,
    onOpenAutoFocus: N,
    onCloseAutoFocus: P,
    onCloseRequested: re,
    onFocusoutPrevented: j,
    titleId: i,
    bodyId: l,
    closed: p,
    style: b,
    overlayDialogStyle: m,
    rendered: f,
    visible: u,
    zIndex: v
  };
}, D0 = V({
  name: "ElDialog",
  inheritAttrs: !1
}), B0 = /* @__PURE__ */ V({
  ...D0,
  props: L0,
  emits: x0,
  setup(e, { expose: t }) {
    const n = e, o = Gr();
    Gl({
      scope: "el-dialog",
      from: "the title slot",
      replacement: "the header slot",
      version: "3.0.0",
      ref: "https://element-plus.org/en-US/component/dialog.html#slots"
    }, y(() => !!o.title));
    const r = de("dialog"), s = A(), a = A(), i = A(), {
      visible: l,
      titleId: u,
      bodyId: p,
      style: f,
      overlayDialogStyle: v,
      rendered: g,
      zIndex: d,
      afterEnter: h,
      afterLeave: b,
      beforeLeave: m,
      handleClose: C,
      onModalClick: O,
      onOpenAutoFocus: $,
      onCloseAutoFocus: S,
      onCloseRequested: I,
      onFocusoutPrevented: E
    } = k0(n, s);
    Qe(Jl, {
      dialogRef: s,
      headerRef: a,
      bodyId: p,
      ns: r,
      rendered: g,
      style: f
    });
    const F = Xl(O), T = y(() => n.draggable && !n.fullscreen);
    return t({
      visible: l,
      dialogContentRef: i,
      resetPosition: () => {
        var N;
        (N = i.value) == null || N.resetPosition();
      }
    }), (N, P) => (_(), U(c(jl), {
      to: N.appendTo,
      disabled: N.appendTo !== "body" ? !1 : !N.appendToBody
    }, {
      default: W(() => [
        ee(gn, {
          name: "dialog-fade",
          onAfterEnter: c(h),
          onAfterLeave: c(b),
          onBeforeLeave: c(m),
          persisted: ""
        }, {
          default: W(() => [
            Ne(ee(c(O0), {
              "custom-mask-event": "",
              mask: N.modal,
              "overlay-class": N.modalClass,
              "z-index": c(d)
            }, {
              default: W(() => [
                R("div", {
                  role: "dialog",
                  "aria-modal": "true",
                  "aria-label": N.title || void 0,
                  "aria-labelledby": N.title ? void 0 : c(u),
                  "aria-describedby": c(p),
                  class: M(`${c(r).namespace.value}-overlay-dialog`),
                  style: pe(c(v)),
                  onClick: c(F).onClick,
                  onMousedown: c(F).onMousedown,
                  onMouseup: c(F).onMouseup
                }, [
                  ee(c(Al), {
                    loop: "",
                    trapped: c(l),
                    "focus-start-el": "container",
                    onFocusAfterTrapped: c($),
                    onFocusAfterReleased: c(S),
                    onFocusoutPrevented: c(E),
                    onReleaseRequested: c(I)
                  }, {
                    default: W(() => [
                      c(g) ? (_(), U(M0, Xt({
                        key: 0,
                        ref_key: "dialogContentRef",
                        ref: i
                      }, N.$attrs, {
                        center: N.center,
                        "align-center": N.alignCenter,
                        "close-icon": N.closeIcon,
                        draggable: c(T),
                        overflow: N.overflow,
                        fullscreen: N.fullscreen,
                        "header-class": N.headerClass,
                        "body-class": N.bodyClass,
                        "footer-class": N.footerClass,
                        "show-close": N.showClose,
                        title: N.title,
                        "aria-level": N.headerAriaLevel,
                        onClose: c(C)
                      }), Yu({
                        header: W(() => [
                          N.$slots.title ? G(N.$slots, "title", { key: 1 }) : G(N.$slots, "header", {
                            key: 0,
                            close: c(C),
                            titleId: c(u),
                            titleClass: c(r).e("title")
                          })
                        ]),
                        default: W(() => [
                          G(N.$slots, "default")
                        ]),
                        _: 2
                      }, [
                        N.$slots.footer ? {
                          name: "footer",
                          fn: W(() => [
                            G(N.$slots, "footer")
                          ])
                        } : void 0
                      ]), 1040, ["center", "align-center", "close-icon", "draggable", "overflow", "fullscreen", "header-class", "body-class", "footer-class", "show-close", "title", "aria-level", "onClose"])) : H("v-if", !0)
                    ]),
                    _: 3
                  }, 8, ["trapped", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusoutPrevented", "onReleaseRequested"])
                ], 46, ["aria-label", "aria-labelledby", "aria-describedby", "onClick", "onMousedown", "onMouseup"])
              ]),
              _: 3
            }, 8, ["mask", "overlay-class", "z-index"]), [
              [ut, c(l)]
            ])
          ]),
          _: 3
        }, 8, ["onAfterEnter", "onAfterLeave", "onBeforeLeave"])
      ]),
      _: 3
    }, 8, ["to", "disabled"]));
  }
});
var F0 = /* @__PURE__ */ ie(B0, [["__file", "dialog.vue"]]);
const z0 = ot(F0);
function V0() {
  const e = cn(), t = A(0), n = 11, o = y(() => ({
    minWidth: `${Math.max(t.value, n)}px`
  }));
  return st(e, () => {
    var s, a;
    t.value = (a = (s = e.value) == null ? void 0 : s.getBoundingClientRect().width) != null ? a : 0;
  }), {
    calculatorRef: e,
    calculatorWidth: t,
    inputStyle: o
  };
}
const eu = Symbol("ElSelectGroup"), ar = Symbol("ElSelect");
function H0(e, t) {
  const n = ae(ar), o = ae(eu, { disabled: !1 }), r = y(() => p(qt(n.props.modelValue), e.value)), s = y(() => {
    var g;
    if (n.props.multiple) {
      const d = qt((g = n.props.modelValue) != null ? g : []);
      return !r.value && d.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return !1;
  }), a = y(() => e.label || ($e(e.value) ? "" : e.value)), i = y(() => e.value || e.label || ""), l = y(() => e.disabled || t.groupDisabled || s.value), u = Ae(), p = (g = [], d) => {
    if ($e(e.value)) {
      const h = n.props.valueKey;
      return g && g.some((b) => Zu(Yt(b, h)) === Yt(d, h));
    } else
      return g && g.includes(d);
  }, f = () => {
    !e.disabled && !o.disabled && (n.states.hoveringIndex = n.optionsArray.indexOf(u.proxy));
  }, v = (g) => {
    const d = new RegExp(h0(g), "i");
    t.visible = d.test(a.value) || e.created;
  };
  return X(() => a.value, () => {
    !e.created && !n.props.remote && n.setSelected();
  }), X(() => e.value, (g, d) => {
    const { remote: h, valueKey: b } = n.props;
    if ((h ? g !== d : !Yn(g, d)) && (n.onOptionDestroy(d, u.proxy), n.onOptionCreate(u.proxy)), !e.created && !h) {
      if (b && $e(g) && $e(d) && g[b] === d[b])
        return;
      n.setSelected();
    }
  }), X(() => o.disabled, () => {
    t.groupDisabled = o.disabled;
  }, { immediate: !0 }), {
    select: n,
    currentLabel: a,
    currentValue: i,
    itemSelected: r,
    isDisabled: l,
    hoverItem: f,
    updateOption: v
  };
}
const W0 = V({
  name: "ElOption",
  componentName: "ElOption",
  props: {
    value: {
      required: !0,
      type: [String, Number, Boolean, Object]
    },
    label: [String, Number],
    created: Boolean,
    disabled: Boolean
  },
  setup(e) {
    const t = de("select"), n = vn(), o = y(() => [
      t.be("dropdown", "item"),
      t.is("disabled", c(i)),
      t.is("selected", c(a)),
      t.is("hovering", c(v))
    ]), r = Jt({
      index: -1,
      groupDisabled: !1,
      visible: !0,
      hover: !1
    }), {
      currentLabel: s,
      itemSelected: a,
      isDisabled: i,
      select: l,
      hoverItem: u,
      updateOption: p
    } = H0(e, r), { visible: f, hover: v } = qr(r), g = Ae().proxy;
    l.onOptionCreate(g), dt(() => {
      const h = g.value, { selected: b } = l.states, m = b.some((C) => C.value === g.value);
      fe(() => {
        l.states.cachedOptions.get(h) === g && !m && l.states.cachedOptions.delete(h);
      }), l.onOptionDestroy(h, g);
    });
    function d() {
      i.value || l.handleOptionSelect(g);
    }
    return {
      ns: t,
      id: n,
      containerKls: o,
      currentLabel: s,
      itemSelected: a,
      isDisabled: i,
      select: l,
      hoverItem: u,
      updateOption: p,
      visible: f,
      hover: v,
      selectOptionClick: d,
      states: r
    };
  }
});
function j0(e, t, n, o, r, s) {
  return Ne((_(), D("li", {
    id: e.id,
    class: M(e.containerKls),
    role: "option",
    "aria-disabled": e.isDisabled || void 0,
    "aria-selected": e.itemSelected,
    onMousemove: e.hoverItem,
    onClick: Me(e.selectOptionClick, ["stop"])
  }, [
    G(e.$slots, "default", {}, () => [
      R("span", null, Z(e.currentLabel), 1)
    ])
  ], 42, ["id", "aria-disabled", "aria-selected", "onMousemove", "onClick"])), [
    [ut, e.visible]
  ]);
}
var Ia = /* @__PURE__ */ ie(W0, [["render", j0], ["__file", "option.vue"]]);
const U0 = V({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = ae(ar), t = de("select"), n = y(() => e.props.popperClass), o = y(() => e.props.multiple), r = y(() => e.props.fitInputWidth), s = A("");
    function a() {
      var i;
      s.value = `${(i = e.selectRef) == null ? void 0 : i.offsetWidth}px`;
    }
    return be(() => {
      a(), st(e.selectRef, a);
    }), {
      ns: t,
      minWidth: s,
      popperClass: n,
      isMultiple: o,
      isFitInputWidth: r
    };
  }
});
function K0(e, t, n, o, r, s) {
  return _(), D("div", {
    class: M([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: pe({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    e.$slots.header ? (_(), D("div", {
      key: 0,
      class: M(e.ns.be("dropdown", "header"))
    }, [
      G(e.$slots, "header")
    ], 2)) : H("v-if", !0),
    G(e.$slots, "default"),
    e.$slots.footer ? (_(), D("div", {
      key: 1,
      class: M(e.ns.be("dropdown", "footer"))
    }, [
      G(e.$slots, "footer")
    ], 2)) : H("v-if", !0)
  ], 6);
}
var G0 = /* @__PURE__ */ ie(U0, [["render", K0], ["__file", "select-dropdown.vue"]]);
const q0 = (e, t) => {
  const { t: n } = la(), o = vn(), r = de("select"), s = de("input"), a = Jt({
    inputValue: "",
    options: /* @__PURE__ */ new Map(),
    cachedOptions: /* @__PURE__ */ new Map(),
    optionValues: [],
    selected: [],
    selectionWidth: 0,
    collapseItemWidth: 0,
    selectedLabel: "",
    hoveringIndex: -1,
    previousQuery: null,
    inputHovering: !1,
    menuVisibleOnFocus: !1,
    isBeforeHide: !1
  }), i = A(null), l = A(null), u = A(null), p = A(null), f = A(null), v = A(null), g = A(null), d = A(null), h = A(null), b = A(null), m = A(null), {
    isComposing: C,
    handleCompositionStart: O,
    handleCompositionUpdate: $,
    handleCompositionEnd: S
  } = yl({
    afterComposition: (w) => Vt(w)
  }), { wrapperRef: I, isFocused: E, handleBlur: F } = bl(f, {
    beforeFocus() {
      return Q.value;
    },
    afterFocus() {
      e.automaticDropdown && !T.value && (T.value = !0, a.menuVisibleOnFocus = !0);
    },
    beforeBlur(w) {
      var k, te;
      return ((k = u.value) == null ? void 0 : k.isFocusInsideContent(w)) || ((te = p.value) == null ? void 0 : te.isFocusInsideContent(w));
    },
    afterBlur() {
      T.value = !1, a.menuVisibleOnFocus = !1;
    }
  }), T = A(!1), z = A(), { form: N, formItem: P } = er(), { inputId: j } = fa(e, {
    formItemContext: P
  }), { valueOnClear: re, isEmptyValue: J } = vh(e), Q = y(() => e.disabled || N?.disabled), B = y(() => Ee(e.modelValue) ? e.modelValue.length > 0 : !J(e.modelValue)), le = y(() => {
    var w;
    return (w = N?.statusIcon) != null ? w : !1;
  }), ve = y(() => e.clearable && !Q.value && a.inputHovering && B.value), ye = y(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), rt = y(() => r.is("reverse", ye.value && T.value)), Ve = y(() => P?.validateState || ""), ft = y(() => vl[Ve.value]), ke = y(() => e.remote ? 300 : 0), Ce = y(() => e.remote && !a.inputValue && a.options.size === 0), K = y(() => e.loading ? e.loadingText || n("el.select.loading") : e.filterable && a.inputValue && a.options.size > 0 && ne.value === 0 ? e.noMatchText || n("el.select.noMatch") : a.options.size === 0 ? e.noDataText || n("el.select.noData") : null), ne = y(() => q.value.filter((w) => w.visible).length), q = y(() => {
    const w = Array.from(a.options.values()), k = [];
    return a.optionValues.forEach((te) => {
      const we = w.findIndex((We) => We.value === te);
      we > -1 && k.push(w[we]);
    }), k.length >= w.length ? k : w;
  }), he = y(() => Array.from(a.cachedOptions.values())), Pe = y(() => {
    const w = q.value.filter((k) => !k.created).some((k) => k.currentLabel === a.inputValue);
    return e.filterable && e.allowCreate && a.inputValue !== "" && !w;
  }), He = () => {
    e.filterable && ge(e.filterMethod) || e.filterable && e.remote && ge(e.remoteMethod) || q.value.forEach((w) => {
      var k;
      (k = w.updateOption) == null || k.call(w, a.inputValue);
    });
  }, pt = lo(), Re = y(() => ["small"].includes(pt.value) ? "small" : "default"), kt = y({
    get() {
      return T.value && !Ce.value;
    },
    set(w) {
      T.value = w;
    }
  }), St = y(() => {
    if (e.multiple && !Tn(e.modelValue))
      return qt(e.modelValue).length === 0 && !a.inputValue;
    const w = Ee(e.modelValue) ? e.modelValue[0] : e.modelValue;
    return e.filterable || Tn(w) ? !a.inputValue : !0;
  }), Dt = y(() => {
    var w;
    const k = (w = e.placeholder) != null ? w : n("el.select.placeholder");
    return e.multiple || !B.value ? k : a.selectedLabel;
  }), Ct = y(() => Pr ? null : "mouseenter");
  X(() => e.modelValue, (w, k) => {
    e.multiple && e.filterable && !e.reserveKeyword && (a.inputValue = "", vt("")), Oe(), !Yn(w, k) && e.validateEvent && P?.validate("change").catch((te) => Se(te));
  }, {
    flush: "post",
    deep: !0
  }), X(() => T.value, (w) => {
    w ? vt(a.inputValue) : (a.inputValue = "", a.previousQuery = null, a.isBeforeHide = !0), t("visible-change", w);
  }), X(() => a.options.entries(), () => {
    ce && (Oe(), e.defaultFirstOption && (e.filterable || e.remote) && ne.value && Bt());
  }, {
    flush: "post"
  }), X([() => a.hoveringIndex, q], ([w]) => {
    me(w) && w > -1 ? z.value = q.value[w] || {} : z.value = {}, q.value.forEach((k) => {
      k.hover = z.value === k;
    });
  }), jr(() => {
    a.isBeforeHide || He();
  });
  const vt = (w) => {
    a.previousQuery === w || C.value || (a.previousQuery = w, e.filterable && ge(e.filterMethod) ? e.filterMethod(w) : e.filterable && e.remote && ge(e.remoteMethod) && e.remoteMethod(w), e.defaultFirstOption && (e.filterable || e.remote) && ne.value ? fe(Bt) : fe(Ft));
  }, Bt = () => {
    const w = q.value.filter((We) => We.visible && !We.disabled && !We.states.groupDisabled), k = w.find((We) => We.created), te = w[0], we = q.value.map((We) => We.value);
    a.hoveringIndex = Ra(we, k || te);
  }, Oe = () => {
    if (e.multiple)
      a.selectedLabel = "";
    else {
      const k = Ee(e.modelValue) ? e.modelValue[0] : e.modelValue, te = Ye(k);
      a.selectedLabel = te.currentLabel, a.selected = [te];
      return;
    }
    const w = [];
    Tn(e.modelValue) || qt(e.modelValue).forEach((k) => {
      w.push(Ye(k));
    }), a.selected = w;
  }, Ye = (w) => {
    let k;
    const te = Xu(w);
    for (let wn = a.cachedOptions.size - 1; wn >= 0; wn--) {
      const Ht = he.value[wn];
      if (te ? Yt(Ht.value, e.valueKey) === Yt(w, e.valueKey) : Ht.value === w) {
        k = {
          value: w,
          currentLabel: Ht.currentLabel,
          get isDisabled() {
            return Ht.isDisabled;
          }
        };
        break;
      }
    }
    if (k)
      return k;
    const we = te ? w.label : w ?? "";
    return {
      value: w,
      currentLabel: we
    };
  }, Ft = () => {
    a.hoveringIndex = q.value.findIndex((w) => a.selected.some((k) => vo(k) === vo(w)));
  }, nn = () => {
    a.selectionWidth = l.value.getBoundingClientRect().width;
  }, x = () => {
    a.collapseItemWidth = b.value.getBoundingClientRect().width;
  }, oe = () => {
    var w, k;
    (k = (w = u.value) == null ? void 0 : w.updatePopper) == null || k.call(w);
  }, Ze = () => {
    var w, k;
    (k = (w = p.value) == null ? void 0 : w.updatePopper) == null || k.call(w);
  }, zt = () => {
    a.inputValue.length > 0 && !T.value && (T.value = !0), vt(a.inputValue);
  }, Vt = (w) => {
    if (a.inputValue = w.target.value, e.remote)
      $a();
    else
      return zt();
  }, $a = Tv(() => {
    zt();
  }, ke.value), Bn = (w) => {
    Yn(e.modelValue, w) || t($n, w);
  }, au = (w) => Ov(w, (k) => {
    const te = a.cachedOptions.get(k);
    return te && !te.disabled && !te.states.groupDisabled;
  }), su = (w) => {
    if (e.multiple && w.code !== mt.delete && w.target.value.length <= 0) {
      const k = qt(e.modelValue).slice(), te = au(k);
      if (te < 0)
        return;
      const we = k[te];
      k.splice(te, 1), t(Ke, k), Bn(k), t("remove-tag", we);
    }
  }, iu = (w, k) => {
    const te = a.selected.indexOf(k);
    if (te > -1 && !Q.value) {
      const we = qt(e.modelValue).slice();
      we.splice(te, 1), t(Ke, we), Bn(we), t("remove-tag", k.value);
    }
    w.stopPropagation(), po();
  }, Aa = (w) => {
    w.stopPropagation();
    const k = e.multiple ? [] : re.value;
    if (e.multiple)
      for (const te of a.selected)
        te.isDisabled && k.push(te.value);
    t(Ke, k), Bn(k), a.hoveringIndex = -1, T.value = !1, t("clear"), po();
  }, Pa = (w) => {
    var k;
    if (e.multiple) {
      const te = qt((k = e.modelValue) != null ? k : []).slice(), we = Ra(te, w);
      we > -1 ? te.splice(we, 1) : (e.multipleLimit <= 0 || te.length < e.multipleLimit) && te.push(w.value), t(Ke, te), Bn(te), w.created && vt(""), e.filterable && !e.reserveKeyword && (a.inputValue = "");
    } else
      t(Ke, w.value), Bn(w.value), T.value = !1;
    po(), !T.value && fe(() => {
      fo(w);
    });
  }, Ra = (w = [], k) => Tn(k) ? -1 : $e(k.value) ? w.findIndex((te) => Yn(Yt(te, e.valueKey), vo(k))) : w.indexOf(k.value), fo = (w) => {
    var k, te, we, We, wn;
    const Ht = Ee(w) ? w[0] : w;
    let ho = null;
    if (Ht?.value) {
      const Fn = q.value.filter((Eu) => Eu.value === Ht.value);
      Fn.length > 0 && (ho = Fn[0].$el);
    }
    if (u.value && ho) {
      const Fn = (We = (we = (te = (k = u.value) == null ? void 0 : k.popperRef) == null ? void 0 : te.contentRef) == null ? void 0 : we.querySelector) == null ? void 0 : We.call(we, `.${r.be("dropdown", "wrap")}`);
      Fn && Sh(Fn, ho);
    }
    (wn = m.value) == null || wn.handleScroll();
  }, lu = (w) => {
    a.options.set(w.value, w), a.cachedOptions.set(w.value, w);
  }, uu = (w, k) => {
    a.options.get(w) === k && a.options.delete(w);
  }, cu = y(() => {
    var w, k;
    return (k = (w = u.value) == null ? void 0 : w.popperRef) == null ? void 0 : k.contentRef;
  }), du = () => {
    a.isBeforeHide = !1, fe(() => {
      var w;
      (w = m.value) == null || w.update(), fo(a.selected);
    });
  }, po = () => {
    var w;
    (w = f.value) == null || w.focus();
  }, fu = () => {
    var w;
    if (T.value) {
      T.value = !1, fe(() => {
        var k;
        return (k = f.value) == null ? void 0 : k.blur();
      });
      return;
    }
    (w = f.value) == null || w.blur();
  }, pu = (w) => {
    Aa(w);
  }, vu = (w) => {
    if (T.value = !1, E.value) {
      const k = new FocusEvent("focus", w);
      fe(() => F(k));
    }
  }, hu = () => {
    a.inputValue.length > 0 ? a.inputValue = "" : T.value = !1;
  }, Ma = () => {
    Q.value || (Pr && (a.inputHovering = !0), a.menuVisibleOnFocus ? a.menuVisibleOnFocus = !1 : T.value = !T.value);
  }, gu = () => {
    if (!T.value)
      Ma();
    else {
      const w = q.value[a.hoveringIndex];
      w && !w.isDisabled && Pa(w);
    }
  }, vo = (w) => $e(w.value) ? Yt(w.value, e.valueKey) : w.value, mu = y(() => q.value.filter((w) => w.visible).every((w) => w.isDisabled)), bu = y(() => e.multiple ? e.collapseTags ? a.selected.slice(0, e.maxCollapseTags) : a.selected : []), yu = y(() => e.multiple ? e.collapseTags ? a.selected.slice(e.maxCollapseTags) : [] : []), La = (w) => {
    if (!T.value) {
      T.value = !0;
      return;
    }
    if (!(a.options.size === 0 || ne.value === 0 || C.value) && !mu.value) {
      w === "next" ? (a.hoveringIndex++, a.hoveringIndex === a.options.size && (a.hoveringIndex = 0)) : w === "prev" && (a.hoveringIndex--, a.hoveringIndex < 0 && (a.hoveringIndex = a.options.size - 1));
      const k = q.value[a.hoveringIndex];
      (k.isDisabled || !k.visible) && La(w), fe(() => fo(z.value));
    }
  }, wu = () => {
    if (!l.value)
      return 0;
    const w = window.getComputedStyle(l.value);
    return Number.parseFloat(w.gap || "6px");
  }, _u = y(() => {
    const w = wu();
    return { maxWidth: `${b.value && e.maxCollapseTags === 1 ? a.selectionWidth - a.collapseItemWidth - w : a.selectionWidth}px` };
  }), Su = y(() => ({ maxWidth: `${a.selectionWidth}px` })), Cu = (w) => {
    t("popup-scroll", w);
  };
  return st(l, nn), st(d, oe), st(I, oe), st(h, Ze), st(b, x), be(() => {
    Oe();
  }), {
    inputId: j,
    contentId: o,
    nsSelect: r,
    nsInput: s,
    states: a,
    isFocused: E,
    expanded: T,
    optionsArray: q,
    hoverOption: z,
    selectSize: pt,
    filteredOptionsCount: ne,
    updateTooltip: oe,
    updateTagTooltip: Ze,
    debouncedOnInputChange: $a,
    onInput: Vt,
    deletePrevTag: su,
    deleteTag: iu,
    deleteSelected: Aa,
    handleOptionSelect: Pa,
    scrollToOption: fo,
    hasModelValue: B,
    shouldShowPlaceholder: St,
    currentPlaceholder: Dt,
    mouseEnterEventName: Ct,
    needStatusIcon: le,
    showClose: ve,
    iconComponent: ye,
    iconReverse: rt,
    validateState: Ve,
    validateIcon: ft,
    showNewOption: Pe,
    updateOptions: He,
    collapseTagSize: Re,
    setSelected: Oe,
    selectDisabled: Q,
    emptyText: K,
    handleCompositionStart: O,
    handleCompositionUpdate: $,
    handleCompositionEnd: S,
    onOptionCreate: lu,
    onOptionDestroy: uu,
    handleMenuEnter: du,
    focus: po,
    blur: fu,
    handleClearClick: pu,
    handleClickOutside: vu,
    handleEsc: hu,
    toggleMenu: Ma,
    selectOption: gu,
    getValueKey: vo,
    navigateOptions: La,
    dropdownMenuVisible: kt,
    showTagList: bu,
    collapseTagList: yu,
    popupScroll: Cu,
    tagStyle: _u,
    collapseTagStyle: Su,
    popperRef: cu,
    inputRef: f,
    tooltipRef: u,
    tagTooltipRef: p,
    prefixRef: v,
    suffixRef: g,
    selectRef: i,
    wrapperRef: I,
    selectionRef: l,
    scrollbarRef: m,
    menuRef: d,
    tagMenuRef: h,
    collapseItemRef: b
  };
};
var Y0 = V({
  name: "ElOptions",
  setup(e, { slots: t }) {
    const n = ae(ar);
    let o = [];
    return () => {
      var r, s;
      const a = (r = t.default) == null ? void 0 : r.call(t), i = [];
      function l(u) {
        Ee(u) && u.forEach((p) => {
          var f, v, g, d;
          const h = (f = p?.type || {}) == null ? void 0 : f.name;
          h === "ElOptionGroup" ? l(!_e(p.children) && !Ee(p.children) && ge((v = p.children) == null ? void 0 : v.default) ? (g = p.children) == null ? void 0 : g.default() : p.children) : h === "ElOption" ? i.push((d = p.props) == null ? void 0 : d.value) : Ee(p.children) && l(p.children);
        });
      }
      return a.length && l((s = a[0]) == null ? void 0 : s.children), Yn(i, o) || (o = i, n && (n.states.optionValues = i)), a;
    };
  }
});
const Z0 = se({
  name: String,
  id: String,
  modelValue: {
    type: [Array, String, Number, Boolean, Object],
    default: void 0
  },
  autocomplete: {
    type: String,
    default: "off"
  },
  automaticDropdown: Boolean,
  size: Jo,
  effect: {
    type: Y(String),
    default: "light"
  },
  disabled: Boolean,
  clearable: Boolean,
  filterable: Boolean,
  allowCreate: Boolean,
  loading: Boolean,
  popperClass: {
    type: String,
    default: ""
  },
  popperOptions: {
    type: Y(Object),
    default: () => ({})
  },
  remote: Boolean,
  loadingText: String,
  noMatchText: String,
  noDataText: String,
  remoteMethod: Function,
  filterMethod: Function,
  multiple: Boolean,
  multipleLimit: {
    type: Number,
    default: 0
  },
  placeholder: {
    type: String
  },
  defaultFirstOption: Boolean,
  reserveKeyword: {
    type: Boolean,
    default: !0
  },
  valueKey: {
    type: String,
    default: "value"
  },
  collapseTags: Boolean,
  collapseTagsTooltip: Boolean,
  maxCollapseTags: {
    type: Number,
    default: 1
  },
  teleported: Oa.teleported,
  persistent: {
    type: Boolean,
    default: !0
  },
  clearIcon: {
    type: Mt,
    default: ca
  },
  fitInputWidth: Boolean,
  suffixIcon: {
    type: Mt,
    default: $h
  },
  tagType: { ...Br.type, default: "info" },
  tagEffect: { ...Br.effect, default: "light" },
  validateEvent: {
    type: Boolean,
    default: !0
  },
  remoteShowSuffix: Boolean,
  showArrow: {
    type: Boolean,
    default: !0
  },
  offset: {
    type: Number,
    default: 12
  },
  placement: {
    type: Y(String),
    values: or,
    default: "bottom-start"
  },
  fallbackPlacements: {
    type: Y(Array),
    default: ["bottom-start", "top-start", "right", "left"]
  },
  tabindex: {
    type: [String, Number],
    default: 0
  },
  appendTo: String,
  ...ph,
  ...Dn(["ariaLabel"])
}), _i = "ElSelect", X0 = V({
  name: _i,
  componentName: _i,
  components: {
    ElSelectMenu: G0,
    ElOption: Ia,
    ElOptions: Y0,
    ElTag: w0,
    ElScrollbar: Cg,
    ElTooltip: Fb,
    ElIcon: xe
  },
  directives: { ClickOutside: _0 },
  props: Z0,
  emits: [
    Ke,
    $n,
    "remove-tag",
    "clear",
    "visible-change",
    "focus",
    "blur",
    "popup-scroll"
  ],
  setup(e, { emit: t }) {
    const n = y(() => {
      const { modelValue: l, multiple: u } = e, p = u ? [] : void 0;
      return Ee(l) ? u ? l : p : u ? p : l;
    }), o = Jt({
      ...qr(e),
      modelValue: n
    }), r = q0(o, t), { calculatorRef: s, inputStyle: a } = V0();
    Qe(ar, Jt({
      props: o,
      states: r.states,
      optionsArray: r.optionsArray,
      handleOptionSelect: r.handleOptionSelect,
      onOptionCreate: r.onOptionCreate,
      onOptionDestroy: r.onOptionDestroy,
      selectRef: r.selectRef,
      setSelected: r.setSelected
    }));
    const i = y(() => e.multiple ? r.states.selected.map((l) => l.currentLabel) : r.states.selectedLabel);
    return {
      ...r,
      modelValue: n,
      selectedLabel: i,
      calculatorRef: s,
      inputStyle: a
    };
  }
});
function J0(e, t, n, o, r, s) {
  const a = on("el-tag"), i = on("el-tooltip"), l = on("el-icon"), u = on("el-option"), p = on("el-options"), f = on("el-scrollbar"), v = on("el-select-menu"), g = Ju("click-outside");
  return Ne((_(), D("div", {
    ref: "selectRef",
    class: M([e.nsSelect.b(), e.nsSelect.m(e.selectSize)]),
    [Qu(e.mouseEnterEventName)]: (d) => e.states.inputHovering = !0,
    onMouseleave: (d) => e.states.inputHovering = !1
  }, [
    ee(i, {
      ref: "tooltipRef",
      visible: e.dropdownMenuVisible,
      placement: e.placement,
      teleported: e.teleported,
      "popper-class": [e.nsSelect.e("popper"), e.popperClass],
      "popper-options": e.popperOptions,
      "fallback-placements": e.fallbackPlacements,
      effect: e.effect,
      pure: "",
      trigger: "click",
      transition: `${e.nsSelect.namespace.value}-zoom-in-top`,
      "stop-popper-mouse-event": !1,
      "gpu-acceleration": !1,
      persistent: e.persistent,
      "append-to": e.appendTo,
      "show-arrow": e.showArrow,
      offset: e.offset,
      onBeforeShow: e.handleMenuEnter,
      onHide: (d) => e.states.isBeforeHide = !1
    }, {
      default: W(() => {
        var d;
        return [
          R("div", {
            ref: "wrapperRef",
            class: M([
              e.nsSelect.e("wrapper"),
              e.nsSelect.is("focused", e.isFocused),
              e.nsSelect.is("hovering", e.states.inputHovering),
              e.nsSelect.is("filterable", e.filterable),
              e.nsSelect.is("disabled", e.selectDisabled)
            ]),
            onClick: Me(e.toggleMenu, ["prevent"])
          }, [
            e.$slots.prefix ? (_(), D("div", {
              key: 0,
              ref: "prefixRef",
              class: M(e.nsSelect.e("prefix"))
            }, [
              G(e.$slots, "prefix")
            ], 2)) : H("v-if", !0),
            R("div", {
              ref: "selectionRef",
              class: M([
                e.nsSelect.e("selection"),
                e.nsSelect.is("near", e.multiple && !e.$slots.prefix && !!e.states.selected.length)
              ])
            }, [
              e.multiple ? G(e.$slots, "tag", { key: 0 }, () => [
                (_(!0), D(Ge, null, Jn(e.showTagList, (h) => (_(), D("div", {
                  key: e.getValueKey(h),
                  class: M(e.nsSelect.e("selected-item"))
                }, [
                  ee(a, {
                    closable: !e.selectDisabled && !h.isDisabled,
                    size: e.collapseTagSize,
                    type: e.tagType,
                    effect: e.tagEffect,
                    "disable-transitions": "",
                    style: pe(e.tagStyle),
                    onClose: (b) => e.deleteTag(b, h)
                  }, {
                    default: W(() => [
                      R("span", {
                        class: M(e.nsSelect.e("tags-text"))
                      }, [
                        G(e.$slots, "label", {
                          label: h.currentLabel,
                          value: h.value
                        }, () => [
                          gt(Z(h.currentLabel), 1)
                        ])
                      ], 2)
                    ]),
                    _: 2
                  }, 1032, ["closable", "size", "type", "effect", "style", "onClose"])
                ], 2))), 128)),
                e.collapseTags && e.states.selected.length > e.maxCollapseTags ? (_(), U(i, {
                  key: 0,
                  ref: "tagTooltipRef",
                  disabled: e.dropdownMenuVisible || !e.collapseTagsTooltip,
                  "fallback-placements": ["bottom", "top", "right", "left"],
                  effect: e.effect,
                  placement: "bottom",
                  teleported: e.teleported
                }, {
                  default: W(() => [
                    R("div", {
                      ref: "collapseItemRef",
                      class: M(e.nsSelect.e("selected-item"))
                    }, [
                      ee(a, {
                        closable: !1,
                        size: e.collapseTagSize,
                        type: e.tagType,
                        effect: e.tagEffect,
                        "disable-transitions": "",
                        style: pe(e.collapseTagStyle)
                      }, {
                        default: W(() => [
                          R("span", {
                            class: M(e.nsSelect.e("tags-text"))
                          }, " + " + Z(e.states.selected.length - e.maxCollapseTags), 3)
                        ]),
                        _: 1
                      }, 8, ["size", "type", "effect", "style"])
                    ], 2)
                  ]),
                  content: W(() => [
                    R("div", {
                      ref: "tagMenuRef",
                      class: M(e.nsSelect.e("selection"))
                    }, [
                      (_(!0), D(Ge, null, Jn(e.collapseTagList, (h) => (_(), D("div", {
                        key: e.getValueKey(h),
                        class: M(e.nsSelect.e("selected-item"))
                      }, [
                        ee(a, {
                          class: "in-tooltip",
                          closable: !e.selectDisabled && !h.isDisabled,
                          size: e.collapseTagSize,
                          type: e.tagType,
                          effect: e.tagEffect,
                          "disable-transitions": "",
                          onClose: (b) => e.deleteTag(b, h)
                        }, {
                          default: W(() => [
                            R("span", {
                              class: M(e.nsSelect.e("tags-text"))
                            }, [
                              G(e.$slots, "label", {
                                label: h.currentLabel,
                                value: h.value
                              }, () => [
                                gt(Z(h.currentLabel), 1)
                              ])
                            ], 2)
                          ]),
                          _: 2
                        }, 1032, ["closable", "size", "type", "effect", "onClose"])
                      ], 2))), 128))
                    ], 2)
                  ]),
                  _: 3
                }, 8, ["disabled", "effect", "teleported"])) : H("v-if", !0)
              ]) : H("v-if", !0),
              R("div", {
                class: M([
                  e.nsSelect.e("selected-item"),
                  e.nsSelect.e("input-wrapper"),
                  e.nsSelect.is("hidden", !e.filterable)
                ])
              }, [
                Ne(R("input", {
                  id: e.inputId,
                  ref: "inputRef",
                  "onUpdate:modelValue": (h) => e.states.inputValue = h,
                  type: "text",
                  name: e.name,
                  class: M([e.nsSelect.e("input"), e.nsSelect.is(e.selectSize)]),
                  disabled: e.selectDisabled,
                  autocomplete: e.autocomplete,
                  style: pe(e.inputStyle),
                  tabindex: e.tabindex,
                  role: "combobox",
                  readonly: !e.filterable,
                  spellcheck: "false",
                  "aria-activedescendant": ((d = e.hoverOption) == null ? void 0 : d.id) || "",
                  "aria-controls": e.contentId,
                  "aria-expanded": e.dropdownMenuVisible,
                  "aria-label": e.ariaLabel,
                  "aria-autocomplete": "none",
                  "aria-haspopup": "listbox",
                  onKeydown: [
                    Hn(Me((h) => e.navigateOptions("next"), ["stop", "prevent"]), ["down"]),
                    Hn(Me((h) => e.navigateOptions("prev"), ["stop", "prevent"]), ["up"]),
                    Hn(Me(e.handleEsc, ["stop", "prevent"]), ["esc"]),
                    Hn(Me(e.selectOption, ["stop", "prevent"]), ["enter"]),
                    Hn(Me(e.deletePrevTag, ["stop"]), ["delete"])
                  ],
                  onCompositionstart: e.handleCompositionStart,
                  onCompositionupdate: e.handleCompositionUpdate,
                  onCompositionend: e.handleCompositionEnd,
                  onInput: e.onInput,
                  onClick: Me(e.toggleMenu, ["stop"])
                }, null, 46, ["id", "onUpdate:modelValue", "name", "disabled", "autocomplete", "tabindex", "readonly", "aria-activedescendant", "aria-controls", "aria-expanded", "aria-label", "onKeydown", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onInput", "onClick"]), [
                  [Oc, e.states.inputValue]
                ]),
                e.filterable ? (_(), D("span", {
                  key: 0,
                  ref: "calculatorRef",
                  "aria-hidden": "true",
                  class: M(e.nsSelect.e("input-calculator")),
                  textContent: Z(e.states.inputValue)
                }, null, 10, ["textContent"])) : H("v-if", !0)
              ], 2),
              e.shouldShowPlaceholder ? (_(), D("div", {
                key: 1,
                class: M([
                  e.nsSelect.e("selected-item"),
                  e.nsSelect.e("placeholder"),
                  e.nsSelect.is("transparent", !e.hasModelValue || e.expanded && !e.states.inputValue)
                ])
              }, [
                e.hasModelValue ? G(e.$slots, "label", {
                  key: 0,
                  label: e.currentPlaceholder,
                  value: e.modelValue
                }, () => [
                  R("span", null, Z(e.currentPlaceholder), 1)
                ]) : (_(), D("span", { key: 1 }, Z(e.currentPlaceholder), 1))
              ], 2)) : H("v-if", !0)
            ], 2),
            R("div", {
              ref: "suffixRef",
              class: M(e.nsSelect.e("suffix"))
            }, [
              e.iconComponent && !e.showClose ? (_(), U(l, {
                key: 0,
                class: M([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.iconReverse])
              }, {
                default: W(() => [
                  (_(), U(Be(e.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : H("v-if", !0),
              e.showClose && e.clearIcon ? (_(), U(l, {
                key: 1,
                class: M([
                  e.nsSelect.e("caret"),
                  e.nsSelect.e("icon"),
                  e.nsSelect.e("clear")
                ]),
                onClick: e.handleClearClick
              }, {
                default: W(() => [
                  (_(), U(Be(e.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : H("v-if", !0),
              e.validateState && e.validateIcon && e.needStatusIcon ? (_(), U(l, {
                key: 2,
                class: M([
                  e.nsInput.e("icon"),
                  e.nsInput.e("validateIcon"),
                  e.nsInput.is("loading", e.validateState === "validating")
                ])
              }, {
                default: W(() => [
                  (_(), U(Be(e.validateIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : H("v-if", !0)
            ], 2)
          ], 10, ["onClick"])
        ];
      }),
      content: W(() => [
        ee(v, { ref: "menuRef" }, {
          default: W(() => [
            e.$slots.header ? (_(), D("div", {
              key: 0,
              class: M(e.nsSelect.be("dropdown", "header")),
              onClick: Me(() => {
              }, ["stop"])
            }, [
              G(e.$slots, "header")
            ], 10, ["onClick"])) : H("v-if", !0),
            Ne(ee(f, {
              id: e.contentId,
              ref: "scrollbarRef",
              tag: "ul",
              "wrap-class": e.nsSelect.be("dropdown", "wrap"),
              "view-class": e.nsSelect.be("dropdown", "list"),
              class: M([e.nsSelect.is("empty", e.filteredOptionsCount === 0)]),
              role: "listbox",
              "aria-label": e.ariaLabel,
              "aria-orientation": "vertical",
              onScroll: e.popupScroll
            }, {
              default: W(() => [
                e.showNewOption ? (_(), U(u, {
                  key: 0,
                  value: e.states.inputValue,
                  created: !0
                }, null, 8, ["value"])) : H("v-if", !0),
                ee(p, null, {
                  default: W(() => [
                    G(e.$slots, "default")
                  ]),
                  _: 3
                })
              ]),
              _: 3
            }, 8, ["id", "wrap-class", "view-class", "class", "aria-label", "onScroll"]), [
              [ut, e.states.options.size > 0 && !e.loading]
            ]),
            e.$slots.loading && e.loading ? (_(), D("div", {
              key: 1,
              class: M(e.nsSelect.be("dropdown", "loading"))
            }, [
              G(e.$slots, "loading")
            ], 2)) : e.loading || e.filteredOptionsCount === 0 ? (_(), D("div", {
              key: 2,
              class: M(e.nsSelect.be("dropdown", "empty"))
            }, [
              G(e.$slots, "empty", {}, () => [
                R("span", null, Z(e.emptyText), 1)
              ])
            ], 2)) : H("v-if", !0),
            e.$slots.footer ? (_(), D("div", {
              key: 3,
              class: M(e.nsSelect.be("dropdown", "footer")),
              onClick: Me(() => {
              }, ["stop"])
            }, [
              G(e.$slots, "footer")
            ], 10, ["onClick"])) : H("v-if", !0)
          ]),
          _: 3
        }, 512)
      ]),
      _: 3
    }, 8, ["visible", "placement", "teleported", "popper-class", "popper-options", "fallback-placements", "effect", "transition", "persistent", "append-to", "show-arrow", "offset", "onBeforeShow", "onHide"])
  ], 16, ["onMouseleave"])), [
    [g, e.handleClickOutside, e.popperRef]
  ]);
}
var Q0 = /* @__PURE__ */ ie(X0, [["render", J0], ["__file", "select.vue"]]);
const ey = V({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: Boolean
  },
  setup(e) {
    const t = de("select"), n = A(null), o = Ae(), r = A([]);
    Qe(eu, Jt({
      ...qr(e)
    }));
    const s = y(() => r.value.some((u) => u.visible === !0)), a = (u) => {
      var p, f;
      return ((p = u.type) == null ? void 0 : p.name) === "ElOption" && !!((f = u.component) != null && f.proxy);
    }, i = (u) => {
      const p = qt(u), f = [];
      return p.forEach((v) => {
        var g, d;
        a(v) ? f.push(v.component.proxy) : (g = v.children) != null && g.length ? f.push(...i(v.children)) : (d = v.component) != null && d.subTree && f.push(...i(v.component.subTree));
      }), f;
    }, l = () => {
      r.value = i(o.subTree);
    };
    return be(() => {
      l();
    }), Jv(n, l, {
      attributes: !0,
      subtree: !0,
      childList: !0
    }), {
      groupRef: n,
      visible: s,
      ns: t
    };
  }
});
function ty(e, t, n, o, r, s) {
  return Ne((_(), D("ul", {
    ref: "groupRef",
    class: M(e.ns.be("group", "wrap"))
  }, [
    R("li", {
      class: M(e.ns.be("group", "title"))
    }, Z(e.label), 3),
    R("li", null, [
      R("ul", {
        class: M(e.ns.b("group"))
      }, [
        G(e.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [ut, e.visible]
  ]);
}
var tu = /* @__PURE__ */ ie(ey, [["render", ty], ["__file", "option-group.vue"]]);
const ny = ot(Q0, {
  Option: Ia,
  OptionGroup: tu
}), oy = ua(Ia);
ua(tu);
const ry = se({
  direction: {
    type: Y(String),
    default: "horizontal"
  },
  options: {
    type: Y(Array),
    default: () => []
  },
  modelValue: {
    type: [String, Number, Boolean],
    default: void 0
  },
  block: Boolean,
  size: Jo,
  disabled: Boolean,
  validateEvent: {
    type: Boolean,
    default: !0
  },
  id: String,
  name: String,
  ...Dn(["ariaLabel"])
}), ay = {
  [Ke]: (e) => _e(e) || me(e) || pn(e),
  [$n]: (e) => _e(e) || me(e) || pn(e)
}, sy = V({
  name: "ElSegmented"
}), iy = /* @__PURE__ */ V({
  ...sy,
  props: ry,
  emits: ay,
  setup(e, { emit: t }) {
    const n = e, o = de("segmented"), r = vn(), s = lo(), a = tr(), { formItem: i } = er(), { inputId: l, isLabeledByFormItem: u } = fa(n, {
      formItemContext: i
    }), p = A(null), f = Uv(), v = Jt({
      isInit: !1,
      width: 0,
      height: 0,
      translateX: 0,
      translateY: 0,
      focusVisible: !1
    }), g = (T) => {
      const z = d(T);
      t(Ke, z), t($n, z);
    }, d = (T) => $e(T) ? T.value : T, h = (T) => $e(T) ? T.label : T, b = (T) => !!(a.value || $e(T) && T.disabled), m = (T) => n.modelValue === d(T), C = (T) => n.options.find((z) => d(z) === T), O = (T) => [
      o.e("item"),
      o.is("selected", m(T)),
      o.is("disabled", b(T))
    ], $ = () => {
      if (!p.value)
        return;
      const T = p.value.querySelector(".is-selected"), z = p.value.querySelector(".is-selected input");
      if (!T || !z) {
        v.width = 0, v.height = 0, v.translateX = 0, v.translateY = 0, v.focusVisible = !1;
        return;
      }
      const N = T.getBoundingClientRect();
      v.isInit = !0, n.direction === "vertical" ? (v.height = N.height, v.translateY = T.offsetTop) : (v.width = N.width, v.translateX = T.offsetLeft);
      try {
        v.focusVisible = z.matches(":focus-visible");
      } catch {
      }
    }, S = y(() => [
      o.b(),
      o.m(s.value),
      o.is("block", n.block)
    ]), I = y(() => ({
      width: n.direction === "vertical" ? "100%" : `${v.width}px`,
      height: n.direction === "vertical" ? `${v.height}px` : "100%",
      transform: n.direction === "vertical" ? `translateY(${v.translateY}px)` : `translateX(${v.translateX}px)`,
      display: v.isInit ? "block" : "none"
    })), E = y(() => [
      o.e("item-selected"),
      o.is("disabled", b(C(n.modelValue))),
      o.is("focus-visible", v.focusVisible)
    ]), F = y(() => n.name || r.value);
    return st(p, $), X(f, $), X(() => n.modelValue, () => {
      var T;
      $(), n.validateEvent && ((T = i?.validate) == null || T.call(i, "change").catch((z) => Se(z)));
    }, {
      flush: "post"
    }), (T, z) => T.options.length ? (_(), D("div", {
      key: 0,
      id: c(l),
      ref_key: "segmentedRef",
      ref: p,
      class: M(c(S)),
      role: "radiogroup",
      "aria-label": c(u) ? void 0 : T.ariaLabel || "segmented",
      "aria-labelledby": c(u) ? c(i).labelId : void 0
    }, [
      R("div", {
        class: M([c(o).e("group"), c(o).m(n.direction)])
      }, [
        R("div", {
          style: pe(c(I)),
          class: M(c(E))
        }, null, 6),
        (_(!0), D(Ge, null, Jn(T.options, (N, P) => (_(), D("label", {
          key: P,
          class: M(O(N))
        }, [
          R("input", {
            class: M(c(o).e("item-input")),
            type: "radio",
            name: c(F),
            disabled: b(N),
            checked: m(N),
            onChange: (j) => g(N)
          }, null, 42, ["name", "disabled", "checked", "onChange"]),
          R("div", {
            class: M(c(o).e("item-label"))
          }, [
            G(T.$slots, "default", { item: N }, () => [
              gt(Z(h(N)), 1)
            ])
          ], 2)
        ], 2))), 128))
      ], 2)
    ], 10, ["id", "aria-label", "aria-labelledby"])) : H("v-if", !0);
  }
});
var ly = /* @__PURE__ */ ie(iy, [["__file", "segmented.vue"]]);
const uy = ot(ly), nu = ["success", "info", "warning", "error"], Ie = hl({
  customClass: "",
  center: !1,
  dangerouslyUseHTMLString: !1,
  duration: 3e3,
  icon: void 0,
  id: "",
  message: "",
  onClose: void 0,
  showClose: !1,
  type: "info",
  plain: !1,
  offset: 16,
  zIndex: 0,
  grouping: !1,
  repeatNum: 1,
  appendTo: ce ? document.body : void 0
}), cy = se({
  customClass: {
    type: String,
    default: Ie.customClass
  },
  center: {
    type: Boolean,
    default: Ie.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: Ie.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: Ie.duration
  },
  icon: {
    type: Mt,
    default: Ie.icon
  },
  id: {
    type: String,
    default: Ie.id
  },
  message: {
    type: Y([
      String,
      Object,
      Function
    ]),
    default: Ie.message
  },
  onClose: {
    type: Y(Function),
    default: Ie.onClose
  },
  showClose: {
    type: Boolean,
    default: Ie.showClose
  },
  type: {
    type: String,
    values: nu,
    default: Ie.type
  },
  plain: {
    type: Boolean,
    default: Ie.plain
  },
  offset: {
    type: Number,
    default: Ie.offset
  },
  zIndex: {
    type: Number,
    default: Ie.zIndex
  },
  grouping: {
    type: Boolean,
    default: Ie.grouping
  },
  repeatNum: {
    type: Number,
    default: Ie.repeatNum
  }
}), dy = {
  destroy: () => !0
}, lt = ec([]), fy = (e) => {
  const t = lt.findIndex((r) => r.id === e), n = lt[t];
  let o;
  return t > 0 && (o = lt[t - 1]), { current: n, prev: o };
}, py = (e) => {
  const { prev: t } = fy(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, vy = (e, t) => lt.findIndex((o) => o.id === e) > 0 ? 16 : t, hy = V({
  name: "ElMessage"
}), gy = /* @__PURE__ */ V({
  ...hy,
  props: cy,
  emits: dy,
  setup(e, { expose: t }) {
    const n = e, { Close: o } = Kh, { ns: r, zIndex: s } = ul("message"), { currentZIndex: a, nextZIndex: i } = s, l = A(), u = A(!1), p = A(0);
    let f;
    const v = y(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), g = y(() => {
      const E = n.type;
      return { [r.bm("icon", E)]: E && Vo[E] };
    }), d = y(() => n.icon || Vo[n.type] || ""), h = y(() => py(n.id)), b = y(() => vy(n.id, n.offset) + h.value), m = y(() => p.value + b.value), C = y(() => ({
      top: `${b.value}px`,
      zIndex: a.value
    }));
    function O() {
      n.duration !== 0 && ({ stop: f } = Bo(() => {
        S();
      }, n.duration));
    }
    function $() {
      f?.();
    }
    function S() {
      u.value = !1;
    }
    function I({ code: E }) {
      E === mt.esc && S();
    }
    return be(() => {
      O(), i(), u.value = !0;
    }), X(() => n.repeatNum, () => {
      $(), O();
    }), Le(document, "keydown", I), st(l, () => {
      p.value = l.value.getBoundingClientRect().height;
    }), t({
      visible: u,
      bottom: m,
      close: S
    }), (E, F) => (_(), U(gn, {
      name: c(r).b("fade"),
      onBeforeLeave: E.onClose,
      onAfterLeave: (T) => E.$emit("destroy"),
      persisted: ""
    }, {
      default: W(() => [
        Ne(R("div", {
          id: E.id,
          ref_key: "messageRef",
          ref: l,
          class: M([
            c(r).b(),
            { [c(r).m(E.type)]: E.type },
            c(r).is("center", E.center),
            c(r).is("closable", E.showClose),
            c(r).is("plain", E.plain),
            E.customClass
          ]),
          style: pe(c(C)),
          role: "alert",
          onMouseenter: $,
          onMouseleave: O
        }, [
          E.repeatNum > 1 ? (_(), U(c(jb), {
            key: 0,
            value: E.repeatNum,
            type: c(v),
            class: M(c(r).e("badge"))
          }, null, 8, ["value", "type", "class"])) : H("v-if", !0),
          c(d) ? (_(), U(c(xe), {
            key: 1,
            class: M([c(r).e("icon"), c(g)])
          }, {
            default: W(() => [
              (_(), U(Be(c(d))))
            ]),
            _: 1
          }, 8, ["class"])) : H("v-if", !0),
          G(E.$slots, "default", {}, () => [
            E.dangerouslyUseHTMLString ? (_(), D(Ge, { key: 1 }, [
              H(" Caution here, message could've been compromised, never use user's input as message "),
              R("p", {
                class: M(c(r).e("content")),
                innerHTML: E.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (_(), D("p", {
              key: 0,
              class: M(c(r).e("content"))
            }, Z(E.message), 3))
          ]),
          E.showClose ? (_(), U(c(xe), {
            key: 2,
            class: M(c(r).e("closeBtn")),
            onClick: Me(S, ["stop"])
          }, {
            default: W(() => [
              ee(c(o))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : H("v-if", !0)
        ], 46, ["id"]), [
          [ut, u.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var my = /* @__PURE__ */ ie(gy, [["__file", "message.vue"]]);
let by = 1;
const ou = (e) => {
  const t = !e || _e(e) || Qn(e) || ge(e) ? { message: e } : e, n = {
    ...Ie,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (_e(n.appendTo)) {
    let o = document.querySelector(n.appendTo);
    Xe(o) || (Se("ElMessage", "the appendTo option is not an HTMLElement. Falling back to document.body."), o = document.body), n.appendTo = o;
  }
  return pn(ht.grouping) && !n.grouping && (n.grouping = ht.grouping), me(ht.duration) && n.duration === 3e3 && (n.duration = ht.duration), me(ht.offset) && n.offset === 16 && (n.offset = ht.offset), pn(ht.showClose) && !n.showClose && (n.showClose = ht.showClose), n;
}, yy = (e) => {
  const t = lt.indexOf(e);
  if (t === -1)
    return;
  lt.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, wy = ({ appendTo: e, ...t }, n) => {
  const o = `message_${by++}`, r = t.onClose, s = document.createElement("div"), a = {
    ...t,
    id: o,
    onClose: () => {
      r?.(), yy(p);
    },
    onDestroy: () => {
      Lo(null, s);
    }
  }, i = ee(my, a, ge(a.message) || Qn(a.message) ? {
    default: ge(a.message) ? a.message : () => a.message
  } : null);
  i.appContext = n || Ln._context, Lo(i, s), e.appendChild(s.firstElementChild);
  const l = i.component, p = {
    id: o,
    vnode: i,
    vm: l,
    handler: {
      close: () => {
        l.exposed.visible.value = !1;
      }
    },
    props: i.component.props
  };
  return p;
}, Ln = (e = {}, t) => {
  if (!ce)
    return { close: () => {
    } };
  const n = ou(e);
  if (n.grouping && lt.length) {
    const r = lt.find(({ vnode: s }) => {
      var a;
      return ((a = s.props) == null ? void 0 : a.message) === n.message;
    });
    if (r)
      return r.props.repeatNum += 1, r.props.type = n.type, r.handler;
  }
  if (me(ht.max) && lt.length >= ht.max)
    return { close: () => {
    } };
  const o = wy(n, t);
  return lt.push(o), o.handler;
};
nu.forEach((e) => {
  Ln[e] = (t = {}, n) => {
    const o = ou(t);
    return Ln({ ...o, type: e }, n);
  };
});
function _y(e) {
  for (const t of lt)
    (!e || e === t.props.type) && t.handler.close();
}
Ln.closeAll = _y;
Ln._context = null;
const Sy = dl(Ln, "$message"), ru = [
  "success",
  "info",
  "warning",
  "error"
], Cy = se({
  customClass: {
    type: String,
    default: ""
  },
  dangerouslyUseHTMLString: Boolean,
  duration: {
    type: Number,
    default: 4500
  },
  icon: {
    type: Mt
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: Y([
      String,
      Object,
      Function
    ]),
    default: ""
  },
  offset: {
    type: Number,
    default: 0
  },
  onClick: {
    type: Y(Function),
    default: () => {
    }
  },
  onClose: {
    type: Y(Function),
    required: !0
  },
  position: {
    type: String,
    values: ["top-right", "top-left", "bottom-right", "bottom-left"],
    default: "top-right"
  },
  showClose: {
    type: Boolean,
    default: !0
  },
  title: {
    type: String,
    default: ""
  },
  type: {
    type: String,
    values: [...ru, ""],
    default: ""
  },
  zIndex: Number
}), Ey = {
  destroy: () => !0
}, Ty = V({
  name: "ElNotification"
}), Oy = /* @__PURE__ */ V({
  ...Ty,
  props: Cy,
  emits: Ey,
  setup(e, { expose: t }) {
    const n = e, { ns: o, zIndex: r } = ul("notification"), { nextZIndex: s, currentZIndex: a } = r, { Close: i } = pl, l = A(!1);
    let u;
    const p = y(() => {
      const O = n.type;
      return O && Vo[n.type] ? o.m(O) : "";
    }), f = y(() => n.type && Vo[n.type] || n.icon), v = y(() => n.position.endsWith("right") ? "right" : "left"), g = y(() => n.position.startsWith("top") ? "top" : "bottom"), d = y(() => {
      var O;
      return {
        [g.value]: `${n.offset}px`,
        zIndex: (O = n.zIndex) != null ? O : a.value
      };
    });
    function h() {
      n.duration > 0 && ({ stop: u } = Bo(() => {
        l.value && m();
      }, n.duration));
    }
    function b() {
      u?.();
    }
    function m() {
      l.value = !1;
    }
    function C({ code: O }) {
      O === mt.delete || O === mt.backspace ? b() : O === mt.esc ? l.value && m() : h();
    }
    return be(() => {
      h(), s(), l.value = !0;
    }), Le(document, "keydown", C), t({
      visible: l,
      close: m
    }), (O, $) => (_(), U(gn, {
      name: c(o).b("fade"),
      onBeforeLeave: O.onClose,
      onAfterLeave: (S) => O.$emit("destroy"),
      persisted: ""
    }, {
      default: W(() => [
        Ne(R("div", {
          id: O.id,
          class: M([c(o).b(), O.customClass, c(v)]),
          style: pe(c(d)),
          role: "alert",
          onMouseenter: b,
          onMouseleave: h,
          onClick: O.onClick
        }, [
          c(f) ? (_(), U(c(xe), {
            key: 0,
            class: M([c(o).e("icon"), c(p)])
          }, {
            default: W(() => [
              (_(), U(Be(c(f))))
            ]),
            _: 1
          }, 8, ["class"])) : H("v-if", !0),
          R("div", {
            class: M(c(o).e("group"))
          }, [
            R("h2", {
              class: M(c(o).e("title")),
              textContent: Z(O.title)
            }, null, 10, ["textContent"]),
            Ne(R("div", {
              class: M(c(o).e("content")),
              style: pe(O.title ? void 0 : { margin: 0 })
            }, [
              G(O.$slots, "default", {}, () => [
                O.dangerouslyUseHTMLString ? (_(), D(Ge, { key: 1 }, [
                  H(" Caution here, message could've been compromised, never use user's input as message "),
                  R("p", { innerHTML: O.message }, null, 8, ["innerHTML"])
                ], 2112)) : (_(), D("p", { key: 0 }, Z(O.message), 1))
              ])
            ], 6), [
              [ut, O.message]
            ]),
            O.showClose ? (_(), U(c(xe), {
              key: 0,
              class: M(c(o).e("closeBtn")),
              onClick: Me(m, ["stop"])
            }, {
              default: W(() => [
                ee(c(i))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : H("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [ut, l.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Iy = /* @__PURE__ */ ie(Oy, [["__file", "notification.vue"]]);
const jo = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, Fr = 16;
let $y = 1;
const xn = function(e = {}, t) {
  if (!ce)
    return { close: () => {
    } };
  (_e(e) || Qn(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let o = e.offset || 0;
  jo[n].forEach(({ vm: p }) => {
    var f;
    o += (((f = p.el) == null ? void 0 : f.offsetHeight) || 0) + Fr;
  }), o += Fr;
  const r = `notification_${$y++}`, s = e.onClose, a = {
    ...e,
    offset: o,
    id: r,
    onClose: () => {
      Ay(r, n, s);
    }
  };
  let i = document.body;
  Xe(e.appendTo) ? i = e.appendTo : _e(e.appendTo) && (i = document.querySelector(e.appendTo)), Xe(i) || (Se("ElNotification", "the appendTo option is not an HTMLElement. Falling back to document.body."), i = document.body);
  const l = document.createElement("div"), u = ee(Iy, a, ge(a.message) ? a.message : Qn(a.message) ? () => a.message : null);
  return u.appContext = Tn(t) ? xn._context : t, u.props.onDestroy = () => {
    Lo(null, l);
  }, Lo(u, l), jo[n].push({ vm: u }), i.appendChild(l.firstElementChild), {
    close: () => {
      u.component.exposed.visible.value = !1;
    }
  };
};
ru.forEach((e) => {
  xn[e] = (t = {}, n) => ((_e(t) || Qn(t)) && (t = {
    message: t
  }), xn({ ...t, type: e }, n));
});
function Ay(e, t, n) {
  const o = jo[t], r = o.findIndex(({ vm: u }) => {
    var p;
    return ((p = u.component) == null ? void 0 : p.props.id) === e;
  });
  if (r === -1)
    return;
  const { vm: s } = o[r];
  if (!s)
    return;
  n?.(s);
  const a = s.el.offsetHeight, i = t.split("-")[0];
  o.splice(r, 1);
  const l = o.length;
  if (!(l < 1))
    for (let u = r; u < l; u++) {
      const { el: p, component: f } = o[u].vm, v = Number.parseInt(p.style[i], 10) - a - Fr;
      f.props.offset = v;
    }
}
function Py() {
  for (const e of Object.values(jo))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
xn.closeAll = Py;
xn._context = null;
const Ry = dl(xn, "$notify"), My = {
  /**
   * 显示消息提示（简化版）
   * @param message 消息内容
   * @param type 消息类型，默认 success
   * @param position 显示位置，默认 center
   * @param duration 显示时长（毫秒），默认 3000
   */
  msg(e, t = "success", n = "center", o) {
    this.message({
      message: e,
      type: t,
      position: n,
      duration: o
    });
  },
  /**
   * 显示消息提示（完整版）
   * @param options 消息选项
   */
  message(e) {
    const {
      message: t,
      type: n = "success",
      position: o = "center",
      duration: r = 3e3,
      showClose: s = !1
    } = e;
    o === "center" ? Sy({
      message: t,
      type: n,
      duration: r,
      showClose: s,
      grouping: !0
    }) : Ry({
      message: t,
      type: n,
      position: o,
      duration: r,
      showClose: !1,
      // 角落通知统一不显示关闭按钮，更简洁
      title: "",
      offset: 50,
      // 距离顶部/底部 50px，避免遮挡窗口控制按钮
      customClass: "custom-notification"
      // 自定义样式类
    });
  },
  /**
   * 显示成功消息
   * @param message 消息内容
   * @param position 显示位置，默认 center
   * @param duration 显示时长（毫秒），默认 3000
   */
  success(e, t = "center", n) {
    this.msg(e, "success", t, n);
  },
  /**
   * 显示警告消息
   * @param message 消息内容
   * @param position 显示位置，默认 center
   * @param duration 显示时长（毫秒），默认 3000
   */
  warning(e, t = "center", n) {
    this.msg(e, "warning", t, n);
  },
  /**
   * 显示信息消息
   * @param message 消息内容
   * @param position 显示位置，默认 center
   * @param duration 显示时长（毫秒），默认 3000
   */
  info(e, t = "center", n) {
    this.msg(e, "info", t, n);
  },
  /**
   * 显示错误消息
   * @param message 消息内容
   * @param position 显示位置，默认 center
   * @param duration 显示时长（毫秒），默认 3000
   */
  error(e, t = "center", n) {
    this.msg(e, "error", t, n);
  }
}, Ly = {
  key: 0,
  class: "selection-hint"
}, xy = /* @__PURE__ */ V({
  __name: "RegionSelector",
  props: {
    modelValue: {},
    locked: { type: Boolean }
  },
  emits: ["update:modelValue", "complete"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = A(null), s = A(null), a = ["nw", "n", "ne", "e", "se", "s", "sw", "w"], i = y(() => s.value ?? n.modelValue), l = y(() => i.value ? {
      left: `${i.value.x}px`,
      top: `${i.value.y}px`,
      width: `${i.value.width}px`,
      height: `${i.value.height}px`
    } : {}), u = (d, h, b, m) => ({
      x: Math.min(d, b),
      y: Math.min(h, m),
      width: Math.abs(b - d),
      height: Math.abs(m - h)
    }), p = (d, h, b) => Math.min(Math.max(d, h), b), f = (d) => {
      n.locked || d.button !== 0 || d.target.closest(".selected-region") || (r.value = { x: d.clientX, y: d.clientY }, s.value = { x: d.clientX, y: d.clientY, width: 0, height: 0 }, o("update:modelValue", null), window.addEventListener("mousemove", v), window.addEventListener("mouseup", g, { once: !0 }));
    }, v = (d) => {
      if (!r.value) return;
      const h = p(d.clientX, 0, window.innerWidth), b = p(d.clientY, 0, window.innerHeight);
      s.value = u(r.value.x, r.value.y, h, b);
    }, g = () => {
      window.removeEventListener("mousemove", v);
      const d = s.value;
      if (s.value = null, r.value = null, !d || d.width < 20 || d.height < 20) {
        o("update:modelValue", null);
        return;
      }
      const h = {
        ...d,
        x: Math.round(d.x),
        y: Math.round(d.y),
        width: Math.round(d.width),
        height: Math.round(d.height)
      };
      o("update:modelValue", h), o("complete", h);
    };
    return (d, h) => (_(), D(
      "div",
      {
        class: "region-selector",
        onMousedown: f
      },
      [
        h[0] || (h[0] = R(
          "div",
          { class: "grid-layer" },
          null,
          -1
          /* HOISTED */
        )),
        i.value ? H("v-if", !0) : (_(), D(
          "div",
          Ly,
          Z(d.$t("screenRecorder.dragToSelect")),
          1
          /* TEXT */
        )),
        i.value ? (_(), D(
          "div",
          {
            key: 1,
            class: "selected-region",
            style: pe(l.value)
          },
          [
            (_(), D(
              Ge,
              null,
              Jn(a, (b) => R(
                "span",
                {
                  key: b,
                  class: M(["resize-handle", b])
                },
                null,
                2
                /* CLASS */
              )),
              64
              /* STABLE_FRAGMENT */
            ))
          ],
          4
          /* STYLE */
        )) : H("v-if", !0)
      ],
      32
      /* NEED_HYDRATION */
    ));
  }
}), yn = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, Ny = /* @__PURE__ */ yn(xy, [["__scopeId", "data-v-f61ad013"]]), ky = { class: "dimension" }, Dy = ["value"], By = { class: "dimension" }, Fy = ["value"], zy = ["disabled"], Vy = /* @__PURE__ */ V({
  __name: "RecordingEntry",
  props: {
    width: {},
    height: {},
    top: {},
    left: {},
    fps: {},
    format: {},
    disabled: { type: Boolean }
  },
  emits: ["start", "cancel", "update:fps", "update:format"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = y({
      get: () => n.fps,
      set: (i) => o("update:fps", Number(i))
    }), s = y({
      get: () => n.format,
      set: (i) => o("update:format", i)
    }), a = y(() => ({
      left: `${n.left}px`,
      top: `${n.top}px`
    }));
    return (i, l) => (_(), D(
      "div",
      {
        class: "recording-entry",
        style: pe(a.value)
      },
      [
        R("label", ky, [
          R(
            "span",
            null,
            Z(i.$t("screenRecorder.width")),
            1
            /* TEXT */
          ),
          R("input", {
            value: i.width,
            readonly: ""
          }, null, 8, Dy)
        ]),
        R("label", By, [
          R(
            "span",
            null,
            Z(i.$t("screenRecorder.height")),
            1
            /* TEXT */
          ),
          R("input", {
            value: i.height,
            readonly: ""
          }, null, 8, Fy)
        ]),
        Ne(R(
          "select",
          {
            "onUpdate:modelValue": l[0] || (l[0] = (u) => r.value = u)
          },
          l[4] || (l[4] = [
            R(
              "option",
              { value: 15 },
              "15 FPS",
              -1
              /* HOISTED */
            ),
            R(
              "option",
              { value: 24 },
              "24 FPS",
              -1
              /* HOISTED */
            ),
            R(
              "option",
              { value: 30 },
              "30 FPS",
              -1
              /* HOISTED */
            ),
            R(
              "option",
              { value: 60 },
              "60 FPS",
              -1
              /* HOISTED */
            )
          ]),
          512
          /* NEED_PATCH */
        ), [
          [Qa, r.value]
        ]),
        Ne(R(
          "select",
          {
            "onUpdate:modelValue": l[1] || (l[1] = (u) => s.value = u)
          },
          l[5] || (l[5] = [
            R(
              "option",
              { value: "mp4" },
              "MP4",
              -1
              /* HOISTED */
            ),
            R(
              "option",
              { value: "gif" },
              "GIF",
              -1
              /* HOISTED */
            )
          ]),
          512
          /* NEED_PATCH */
        ), [
          [Qa, s.value]
        ]),
        R("button", {
          class: "primary",
          disabled: i.disabled,
          onClick: l[2] || (l[2] = (u) => i.$emit("start"))
        }, Z(i.$t("screenRecorder.start")), 9, zy),
        R("button", {
          class: "ghost",
          onClick: l[3] || (l[3] = (u) => i.$emit("cancel"))
        }, "×")
      ],
      4
      /* STYLE */
    ));
  }
}), Hy = /* @__PURE__ */ yn(Vy, [["__scopeId", "data-v-ea3f2aa6"]]), Wy = { class: "floating-control" }, jy = { class: "time" }, Uy = /* @__PURE__ */ V({
  __name: "FloatingControlBar",
  props: {
    elapsedMs: {},
    paused: { type: Boolean }
  },
  emits: ["pause", "resume", "stop", "cancel"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = y(() => {
      const a = Math.floor(n.elapsedMs / 1e3), i = Math.floor(a / 60).toString().padStart(2, "0"), l = (a % 60).toString().padStart(2, "0");
      return `${i}:${l}`;
    }), s = () => {
      n.paused ? o("resume") : o("pause");
    };
    return (a, i) => (_(), D("div", Wy, [
      R(
        "span",
        {
          class: M(["record-dot", { paused: a.paused }])
        },
        null,
        2
        /* CLASS */
      ),
      R(
        "span",
        jy,
        Z(r.value),
        1
        /* TEXT */
      ),
      R(
        "button",
        { onClick: s },
        Z(a.paused ? a.$t("screenRecorder.resume") : a.$t("screenRecorder.pause")),
        1
        /* TEXT */
      ),
      R(
        "button",
        {
          class: "danger",
          onClick: i[0] || (i[0] = (l) => a.$emit("stop"))
        },
        Z(a.$t("screenRecorder.stop")),
        1
        /* TEXT */
      ),
      R(
        "button",
        {
          class: "ghost",
          onClick: i[1] || (i[1] = (l) => a.$emit("cancel"))
        },
        Z(a.$t("screenRecorder.cancel")),
        1
        /* TEXT */
      )
    ]));
  }
}), Ky = /* @__PURE__ */ yn(Uy, [["__scopeId", "data-v-934c1ee3"]]);
async function Gy(e = {}) {
  return typeof e == "object" && Object.freeze(e), await L("plugin:dialog|save", { options: e });
}
const qy = { class: "export-form" }, Yy = { class: "path-row" }, Zy = /* @__PURE__ */ V({
  __name: "ExportSettingsDialog",
  props: {
    modelValue: { type: Boolean },
    settings: {}
  },
  emits: ["update:modelValue", "update:settings", "export", "cancel"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = [
      { label: "MP4", value: "mp4" },
      { label: "GIF", value: "gif" }
    ], s = [15, 24, 30, 60], a = (f, v) => {
      o("update:settings", {
        ...n.settings,
        [f]: v
      });
    }, i = (f) => {
      a("format", f === "gif" ? "gif" : "mp4");
    }, l = (f) => {
      const v = Number(f);
      a("fps", [15, 24, 30, 60].includes(v) ? v : 30);
    }, u = (f) => {
      const v = String(f);
      a(
        "quality",
        ["high", "standard", "small"].includes(v) ? v : "standard"
      );
    }, p = async () => {
      const f = n.settings.format, v = await Gy({
        title: "保存录屏",
        defaultPath: `recording.${f}`,
        filters: [
          { name: f.toUpperCase(), extensions: [f] }
        ]
      });
      v && a("savePath", v);
    };
    return (f, v) => {
      const g = uy, d = oy, h = ny, b = ug, m = Zl, C = z0;
      return _(), U(C, {
        "model-value": f.modelValue,
        title: f.$t("screenRecorder.exportSettings"),
        width: "420px",
        "append-to-body": "",
        "onUpdate:modelValue": v[2] || (v[2] = (O) => f.$emit("update:modelValue", O))
      }, {
        footer: W(() => [
          ee(m, {
            onClick: v[0] || (v[0] = (O) => f.$emit("cancel"))
          }, {
            default: W(() => [
              gt(
                Z(f.$t("common.cancel")),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }),
          ee(m, {
            type: "primary",
            disabled: !f.settings.savePath,
            onClick: v[1] || (v[1] = (O) => f.$emit("export"))
          }, {
            default: W(() => [
              gt(
                Z(f.$t("screenRecorder.export")),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["disabled"])
        ]),
        default: W(() => [
          R("div", qy, [
            R("label", null, [
              R(
                "span",
                null,
                Z(f.$t("screenRecorder.format")),
                1
                /* TEXT */
              ),
              ee(g, {
                "model-value": f.settings.format,
                options: r,
                "onUpdate:modelValue": i
              }, null, 8, ["model-value"])
            ]),
            R("label", null, [
              R(
                "span",
                null,
                Z(f.$t("screenRecorder.fps")),
                1
                /* TEXT */
              ),
              ee(h, {
                "model-value": f.settings.fps,
                "onUpdate:modelValue": l
              }, {
                default: W(() => [
                  (_(), D(
                    Ge,
                    null,
                    Jn(s, (O) => ee(d, {
                      key: O,
                      label: `${O} FPS`,
                      value: O
                    }, null, 8, ["label", "value"])),
                    64
                    /* STABLE_FRAGMENT */
                  ))
                ]),
                _: 1
                /* STABLE */
              }, 8, ["model-value"])
            ]),
            R("label", null, [
              R(
                "span",
                null,
                Z(f.$t("screenRecorder.quality")),
                1
                /* TEXT */
              ),
              ee(h, {
                "model-value": f.settings.quality,
                "onUpdate:modelValue": u
              }, {
                default: W(() => [
                  ee(d, {
                    label: f.$t("screenRecorder.qualityHigh"),
                    value: "high"
                  }, null, 8, ["label"]),
                  ee(d, {
                    label: f.$t("screenRecorder.qualityStandard"),
                    value: "standard"
                  }, null, 8, ["label"]),
                  ee(d, {
                    label: f.$t("screenRecorder.qualitySmall"),
                    value: "small"
                  }, null, 8, ["label"])
                ]),
                _: 1
                /* STABLE */
              }, 8, ["model-value"])
            ]),
            R("label", null, [
              R(
                "span",
                null,
                Z(f.$t("screenRecorder.savePath")),
                1
                /* TEXT */
              ),
              R("div", Yy, [
                ee(b, {
                  "model-value": f.settings.savePath,
                  readonly: ""
                }, null, 8, ["model-value"]),
                ee(m, { onClick: p }, {
                  default: W(() => [
                    gt(
                      Z(f.$t("common.browse")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                })
              ])
            ])
          ])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["model-value", "title"]);
    };
  }
}), Xy = /* @__PURE__ */ yn(Zy, [["__scopeId", "data-v-11026f25"]]), Jy = {}, Qy = { class: "export-progress" };
function ew(e, t) {
  return _(), D("div", Qy, [
    t[0] || (t[0] = R(
      "div",
      { class: "spinner" },
      null,
      -1
      /* HOISTED */
    )),
    R(
      "div",
      null,
      Z(e.$t("screenRecorder.exporting")),
      1
      /* TEXT */
    )
  ]);
}
const tw = /* @__PURE__ */ yn(Jy, [["render", ew], ["__scopeId", "data-v-92ef9ccc"]]), nw = { class: "recording-result" }, ow = { class: "actions" }, rw = /* @__PURE__ */ V({
  __name: "RecordingResult",
  props: {
    result: {}
  },
  emits: ["open", "reveal", "recordAgain"],
  setup(e) {
    const t = e, n = y(() => {
      const o = t.result.sizeBytes / 1024 / 1024;
      return o >= 1 ? `${o.toFixed(2)} MB` : `${(t.result.sizeBytes / 1024).toFixed(1)} KB`;
    });
    return (o, r) => {
      const s = Zl;
      return _(), D("div", nw, [
        R(
          "h3",
          null,
          Z(o.$t("screenRecorder.exportDone")),
          1
          /* TEXT */
        ),
        R(
          "p",
          null,
          Z(o.result.width) + " × " + Z(o.result.height) + " · " + Z(n.value),
          1
          /* TEXT */
        ),
        R("div", ow, [
          ee(s, {
            type: "primary",
            onClick: r[0] || (r[0] = (a) => o.$emit("open"))
          }, {
            default: W(() => [
              gt(
                Z(o.$t("screenRecorder.openFile")),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }),
          ee(s, {
            onClick: r[1] || (r[1] = (a) => o.$emit("reveal"))
          }, {
            default: W(() => [
              gt(
                Z(o.$t("screenRecorder.openFolder")),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }),
          ee(s, {
            onClick: r[2] || (r[2] = (a) => o.$emit("recordAgain"))
          }, {
            default: W(() => [
              gt(
                Z(o.$t("screenRecorder.recordAgain")),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          })
        ])
      ]);
    };
  }
}), aw = /* @__PURE__ */ yn(rw, [["__scopeId", "data-v-2c0d75b1"]]), sw = () => L("screen_recorder_get_ffmpeg_status"), iw = () => L("screen_recorder_get_background"), lw = () => L("screen_recorder_get_preview"), uw = () => L("screen_recorder_clear_background"), cw = () => L("screen_recorder_close_window"), dw = (e, t) => L("screen_recorder_start_recording", {
  region: e,
  fps: t.fps,
  quality: t.quality
}), fw = () => L("screen_recorder_pause_recording"), pw = (e, t) => L("screen_recorder_resume_recording", {
  region: e,
  fps: t.fps,
  quality: t.quality
}), vw = () => L("screen_recorder_stop_recording"), hw = () => L("screen_recorder_cancel_recording"), gw = (e) => L("screen_recorder_export_recording", {
  format: e.format,
  fps: e.fps,
  quality: e.quality,
  savePath: e.savePath
}), Si = () => ({
  format: "mp4",
  fps: 30,
  quality: "standard",
  savePath: ""
});
function mw() {
  const e = A("selecting"), t = A(Si()), n = A(null), o = A(null), r = A(""), s = A(null), a = A(0), i = A(null), l = y(() => e.value !== "recording" || s.value === null ? a.value : a.value + Date.now() - s.value), u = () => {
    i.value !== null && (window.clearInterval(i.value), i.value = null);
  }, p = () => {
    u(), i.value = window.setInterval(() => {
      a.value = l.value, s.value = Date.now();
    }, 500);
  }, f = async () => (n.value = await sw(), n.value), v = async (O) => {
    r.value = "", o.value = null;
    const $ = n.value ?? await f();
    if (!$.available)
      throw new Error($.message || "FFmpeg unavailable");
    await dw(O, t.value), e.value = "recording", a.value = 0, s.value = Date.now(), p();
  }, g = async () => {
    e.value === "recording" && (a.value = l.value, s.value = null, u(), await fw(), e.value = "paused");
  }, d = async (O) => {
    e.value === "paused" && (await pw(O, t.value), e.value = "recording", s.value = Date.now(), p());
  }, h = async () => {
    e.value !== "recording" && e.value !== "paused" || (a.value = l.value, s.value = null, u(), await vw(), e.value = "exporting");
  }, b = async () => (e.value = "exporting", o.value = await gw(t.value), e.value = "completed", o.value), m = async () => {
    u(), await hw(), e.value = "selecting", s.value = null, a.value = 0, o.value = null;
  }, C = () => {
    e.value = "selecting", s.value = null, a.value = 0, o.value = null, r.value = "", t.value = Si();
  };
  return Kr(() => {
    u();
  }), {
    status: e,
    settings: t,
    ffmpegStatus: n,
    result: o,
    errorMessage: r,
    elapsedMs: l,
    refreshFfmpegStatus: f,
    begin: v,
    pause: g,
    resume: d,
    stop: h,
    exportFile: b,
    cancel: m,
    reset: C
  };
}
const bw = {
  key: 6,
  class: "ffmpeg-warning"
}, _r = 430, To = 92, yw = /* @__PURE__ */ V({
  __name: "index",
  setup(e) {
    const t = Mi(), n = A(null), o = A(null), r = A(!1), s = A(!1), a = A("");
    let i = null;
    const {
      status: l,
      settings: u,
      ffmpegStatus: p,
      result: f,
      elapsedMs: v,
      refreshFfmpegStatus: g,
      begin: d,
      pause: h,
      resume: b,
      stop: m,
      exportFile: C,
      cancel: O,
      reset: $
    } = mw(), S = y(() => {
      if (!n.value) return { left: 36, top: 36 };
      const K = 10, ne = 470, q = 38, he = Math.min(
        Math.max(n.value.x, K),
        Math.max(K, window.innerWidth - ne - K)
      ), Pe = n.value.y + n.value.height + K, He = Pe + q <= window.innerHeight ? Pe : Math.max(K, n.value.y - q - K);
      return { left: he, top: He };
    }), I = y(
      () => s.value || l.value === "recording" || l.value === "paused"
    ), E = async () => {
      await fe(), await new Promise((K) => window.setTimeout(K, 120));
    }, F = async (K = !1) => {
      const ne = K ? 50 : 1;
      for (let q = 0; q < ne; q += 1) {
        try {
          return a.value = await iw(), !0;
        } catch {
          try {
            const he = await lw();
            he && (a.value = he);
          } catch {
          }
        }
        if (!K) break;
        await new Promise((he) => window.setTimeout(he, 100));
      }
      return !!a.value;
    }, T = async (K) => {
      const ne = await t.scaleFactor(), q = await t.outerPosition(), he = q.x / ne, Pe = q.y / ne, He = window.innerWidth, pt = window.innerHeight, Re = 12, kt = he + K.x, St = Pe + K.y, Dt = kt + K.width / 2, Ct = St + K.height + Re, vt = St - To - Re, Bt = he + He - _r - Re, Oe = Pe + pt - To - Re, Ye = Math.min(
        Math.max(he + Re, Dt - _r / 2),
        Math.max(he + Re, Bt)
      ), Ft = Ct + To <= Pe + pt ? Ct : Math.max(Pe + Re, Math.min(vt, Oe));
      await t.setFullscreen(!1), await t.setSize(new Yr(_r, To)), await t.setPosition(new Zr(Ye, Ft));
    }, z = async () => {
      await t.setFullscreen(!0);
    }, N = async (K) => {
      const ne = await t.outerPosition(), q = await t.scaleFactor();
      return {
        x: K.x,
        y: K.y,
        width: K.width,
        height: K.height,
        screenX: Math.round(ne.x + K.x * q),
        screenY: Math.round(ne.y + K.y * q),
        physicalWidth: Math.max(1, Math.round(K.width * q)),
        physicalHeight: Math.max(1, Math.round(K.height * q)),
        scale: q
      };
    }, P = async (K) => {
      o.value = await N(K), l.value = "ready";
    }, j = async () => {
      if (!n.value)
        throw new Error("NO_REGION");
      return o.value = await N(n.value), o.value;
    }, re = async (K) => {
      try {
        await K();
      } catch (ne) {
        My.msg(ne?.message || String(ne), "error");
      }
    }, J = () => re(async () => {
      const K = await j();
      s.value = !0, await T(K).catch(() => {
      }), await E();
      try {
        await d(K);
      } catch (ne) {
        throw s.value = !1, ne;
      } finally {
        s.value = !1;
      }
    }), Q = () => re(h), B = () => re(async () => {
      const K = await j();
      await E(), await b(K);
    }), le = () => re(async () => {
      await m(), s.value = !1, await z().catch(() => {
      }), r.value = !0;
    }), ve = () => re(async () => {
      r.value = !1, await C();
    }), ye = () => re(async () => {
      r.value = !1, await O(), s.value = !1, await z().catch(() => {
      }), $(), n.value = null, o.value = null;
    }), rt = () => {
      s.value = !1, z(), $(), n.value = null, o.value = null;
    }, Ve = async () => {
      try {
        await O();
      } catch {
      }
      await cw();
    }, ft = async () => {
      f.value && await L("open_file_with_default_app", { filePath: f.value.path });
    }, ke = async () => {
      f.value && await L("show_file_in_folder", { filePath: f.value.path });
    }, Ce = (K) => {
      K.key === "Escape" && (K.preventDefault(), Ve());
    };
    return be(async () => {
      i = await Xr("background-ready", () => {
        F();
      }), await F(!0), await t.emit("screen_recorder_ready"), await g().catch(() => {
      }), window.addEventListener("keydown", Ce);
    }), Kr(() => {
      window.removeEventListener("keydown", Ce), i?.(), uw();
    }), (K, ne) => (_(), D(
      "div",
      {
        class: M(["screen-recorder", { "screen-recorder--capture-surface": I.value }])
      },
      [
        !I.value && a.value ? (_(), D(
          "div",
          {
            key: 0,
            class: "screen-background",
            style: pe({ backgroundImage: `url(data:image/jpeg;base64,${a.value})` })
          },
          null,
          4
          /* STYLE */
        )) : H("v-if", !0),
        !I.value && (c(l) === "selecting" || c(l) === "ready") ? (_(), U(Ny, {
          key: 1,
          modelValue: n.value,
          "onUpdate:modelValue": ne[0] || (ne[0] = (q) => n.value = q),
          locked: c(l) !== "selecting" && c(l) !== "ready",
          onComplete: P
        }, null, 8, ["modelValue", "locked"])) : H("v-if", !0),
        !I.value && n.value && (c(l) === "selecting" || c(l) === "ready") ? (_(), U(Hy, {
          key: 2,
          width: Math.round(n.value.width),
          height: Math.round(n.value.height),
          left: S.value.left,
          top: S.value.top,
          fps: c(u).fps,
          format: c(u).format,
          disabled: c(p)?.available === !1,
          "onUpdate:fps": ne[1] || (ne[1] = (q) => c(u).fps = q),
          "onUpdate:format": ne[2] || (ne[2] = (q) => c(u).format = q),
          onStart: J,
          onCancel: Ve
        }, null, 8, ["width", "height", "left", "top", "fps", "format", "disabled"])) : H("v-if", !0),
        c(l) === "recording" || c(l) === "paused" ? (_(), U(Ky, {
          key: 3,
          "elapsed-ms": c(v),
          paused: c(l) === "paused",
          onPause: Q,
          onResume: B,
          onStop: le,
          onCancel: ye
        }, null, 8, ["elapsed-ms", "paused"])) : H("v-if", !0),
        ee(Xy, {
          modelValue: r.value,
          "onUpdate:modelValue": ne[3] || (ne[3] = (q) => r.value = q),
          settings: c(u),
          "onUpdate:settings": ne[4] || (ne[4] = (q) => Ur(u) ? u.value = q : null),
          onExport: ve,
          onCancel: ye
        }, null, 8, ["modelValue", "settings"]),
        c(l) === "exporting" && !r.value ? (_(), U(tw, { key: 4 })) : H("v-if", !0),
        c(l) === "completed" && c(f) ? (_(), U(aw, {
          key: 5,
          result: c(f),
          onOpen: ft,
          onReveal: ke,
          onRecordAgain: rt
        }, null, 8, ["result"])) : H("v-if", !0),
        !I.value && c(p) && !c(p).available ? (_(), D(
          "div",
          bw,
          Z(c(p).message || K.$t("screenRecorder.ffmpegMissing")),
          1
          /* TEXT */
        )) : H("v-if", !0)
      ],
      2
      /* CLASS */
    ));
  }
}), _w = /* @__PURE__ */ yn(yw, [["__scopeId", "data-v-1ac6eb0c"]]);
export {
  _w as default
};
