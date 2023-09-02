(() => {
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a3, b3) => {
    for (var prop in b3 || (b3 = {}))
      if (__hasOwnProp.call(b3, prop))
        __defNormalProp(a3, prop, b3[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b3)) {
        if (__propIsEnum.call(b3, prop))
          __defNormalProp(a3, prop, b3[prop]);
      }
    return a3;
  };
  var __spreadProps = (a3, b3) => __defProps(a3, __getOwnPropDescs(b3));
  var __objRest = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // node_modules/preact/dist/preact.module.js
  function v(n2, l3) {
    for (var u3 in l3)
      n2[u3] = l3[u3];
    return n2;
  }
  function p(n2) {
    var l3 = n2.parentNode;
    l3 && l3.removeChild(n2);
  }
  function y(l3, u3, t3) {
    var i3, o3, r3, f3 = {};
    for (r3 in u3)
      "key" == r3 ? i3 = u3[r3] : "ref" == r3 ? o3 = u3[r3] : f3[r3] = u3[r3];
    if (arguments.length > 2 && (f3.children = arguments.length > 3 ? n.call(arguments, 2) : t3), "function" == typeof l3 && null != l3.defaultProps)
      for (r3 in l3.defaultProps)
        void 0 === f3[r3] && (f3[r3] = l3.defaultProps[r3]);
    return d(l3, f3, i3, o3, null);
  }
  function d(n2, t3, i3, o3, r3) {
    var f3 = { type: n2, props: t3, key: i3, ref: o3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == r3 ? ++u : r3 };
    return null == r3 && null != l.vnode && l.vnode(f3), f3;
  }
  function k(n2) {
    return n2.children;
  }
  function b(n2, l3) {
    this.props = n2, this.context = l3;
  }
  function g(n2, l3) {
    if (null == l3)
      return n2.__ ? g(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
    for (var u3; l3 < n2.__k.length; l3++)
      if (null != (u3 = n2.__k[l3]) && null != u3.__e)
        return u3.__e;
    return "function" == typeof n2.type ? g(n2) : null;
  }
  function m(n2) {
    var l3, u3;
    if (null != (n2 = n2.__) && null != n2.__c) {
      for (n2.__e = n2.__c.base = null, l3 = 0; l3 < n2.__k.length; l3++)
        if (null != (u3 = n2.__k[l3]) && null != u3.__e) {
          n2.__e = n2.__c.base = u3.__e;
          break;
        }
      return m(n2);
    }
  }
  function w(n2) {
    (!n2.__d && (n2.__d = true) && i.push(n2) && !x.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || r)(x);
  }
  function x() {
    var n2, l3, u3, t3, o3, r3, e3, c3, s3;
    for (i.sort(f); n2 = i.shift(); )
      n2.__d && (l3 = i.length, t3 = void 0, o3 = void 0, r3 = void 0, c3 = (e3 = (u3 = n2).__v).__e, (s3 = u3.__P) && (t3 = [], o3 = [], (r3 = v({}, e3)).__v = e3.__v + 1, L(s3, e3, r3, u3.__n, void 0 !== s3.ownerSVGElement, null != e3.__h ? [c3] : null, t3, null == c3 ? g(e3) : c3, e3.__h, o3), M(t3, e3, o3), e3.__e != c3 && m(e3)), i.length > l3 && i.sort(f));
    x.__r = 0;
  }
  function P(n2, l3, u3, t3, i3, o3, r3, f3, e3, a3, v3) {
    var p2, y2, _, b3, m3, w3, x2, P2, C2, H2 = 0, I2 = t3 && t3.__k || s, T3 = I2.length, j3 = T3, z3 = l3.length;
    for (u3.__k = [], p2 = 0; p2 < z3; p2++)
      null != (b3 = u3.__k[p2] = null == (b3 = l3[p2]) || "boolean" == typeof b3 || "function" == typeof b3 ? null : "string" == typeof b3 || "number" == typeof b3 || "bigint" == typeof b3 ? d(null, b3, null, null, b3) : h(b3) ? d(k, { children: b3 }, null, null, null) : b3.__b > 0 ? d(b3.type, b3.props, b3.key, b3.ref ? b3.ref : null, b3.__v) : b3) ? (b3.__ = u3, b3.__b = u3.__b + 1, -1 === (P2 = A(b3, I2, x2 = p2 + H2, j3)) ? _ = c : (_ = I2[P2] || c, I2[P2] = void 0, j3--), L(n2, b3, _, i3, o3, r3, f3, e3, a3, v3), m3 = b3.__e, (y2 = b3.ref) && _.ref != y2 && (_.ref && O(_.ref, null, b3), v3.push(y2, b3.__c || m3, b3)), null != m3 && (null == w3 && (w3 = m3), (C2 = _ === c || null === _.__v) ? -1 == P2 && H2-- : P2 !== x2 && (P2 === x2 + 1 ? H2++ : P2 > x2 ? j3 > z3 - x2 ? H2 += P2 - x2 : H2-- : H2 = P2 < x2 && P2 == x2 - 1 ? P2 - x2 : 0), x2 = p2 + H2, "function" != typeof b3.type || P2 === x2 && _.__k !== b3.__k ? "function" == typeof b3.type || P2 === x2 && !C2 ? void 0 !== b3.__d ? (e3 = b3.__d, b3.__d = void 0) : e3 = m3.nextSibling : e3 = S(n2, m3, e3) : e3 = $(b3, e3, n2), "function" == typeof u3.type && (u3.__d = e3))) : (_ = I2[p2]) && null == _.key && _.__e && (_.__e == e3 && (e3 = g(_)), q(_, _, false), I2[p2] = null);
    for (u3.__e = w3, p2 = T3; p2--; )
      null != I2[p2] && ("function" == typeof u3.type && null != I2[p2].__e && I2[p2].__e == u3.__d && (u3.__d = I2[p2].__e.nextSibling), q(I2[p2], I2[p2]));
  }
  function $(n2, l3, u3) {
    for (var t3, i3 = n2.__k, o3 = 0; i3 && o3 < i3.length; o3++)
      (t3 = i3[o3]) && (t3.__ = n2, l3 = "function" == typeof t3.type ? $(t3, l3, u3) : S(u3, t3.__e, l3));
    return l3;
  }
  function C(n2, l3) {
    return l3 = l3 || [], null == n2 || "boolean" == typeof n2 || (h(n2) ? n2.some(function(n3) {
      C(n3, l3);
    }) : l3.push(n2)), l3;
  }
  function S(n2, l3, u3) {
    return null == u3 || u3.parentNode !== n2 ? n2.insertBefore(l3, null) : l3 == u3 && null != l3.parentNode || n2.insertBefore(l3, u3), l3.nextSibling;
  }
  function A(n2, l3, u3, t3) {
    var i3 = n2.key, o3 = n2.type, r3 = u3 - 1, f3 = u3 + 1, e3 = l3[u3];
    if (null === e3 || e3 && i3 == e3.key && o3 === e3.type)
      return u3;
    if (t3 > (null != e3 ? 1 : 0))
      for (; r3 >= 0 || f3 < l3.length; ) {
        if (r3 >= 0) {
          if ((e3 = l3[r3]) && i3 == e3.key && o3 === e3.type)
            return r3;
          r3--;
        }
        if (f3 < l3.length) {
          if ((e3 = l3[f3]) && i3 == e3.key && o3 === e3.type)
            return f3;
          f3++;
        }
      }
    return -1;
  }
  function H(n2, l3, u3, t3, i3) {
    var o3;
    for (o3 in u3)
      "children" === o3 || "key" === o3 || o3 in l3 || T(n2, o3, null, u3[o3], t3);
    for (o3 in l3)
      i3 && "function" != typeof l3[o3] || "children" === o3 || "key" === o3 || "value" === o3 || "checked" === o3 || u3[o3] === l3[o3] || T(n2, o3, l3[o3], u3[o3], t3);
  }
  function I(n2, l3, u3) {
    "-" === l3[0] ? n2.setProperty(l3, null == u3 ? "" : u3) : n2[l3] = null == u3 ? "" : "number" != typeof u3 || a.test(l3) ? u3 : u3 + "px";
  }
  function T(n2, l3, u3, t3, i3) {
    var o3;
    n:
      if ("style" === l3)
        if ("string" == typeof u3)
          n2.style.cssText = u3;
        else {
          if ("string" == typeof t3 && (n2.style.cssText = t3 = ""), t3)
            for (l3 in t3)
              u3 && l3 in u3 || I(n2.style, l3, "");
          if (u3)
            for (l3 in u3)
              t3 && u3[l3] === t3[l3] || I(n2.style, l3, u3[l3]);
        }
      else if ("o" === l3[0] && "n" === l3[1])
        o3 = l3 !== (l3 = l3.replace(/(PointerCapture)$|Capture$/, "$1")), l3 = l3.toLowerCase() in n2 ? l3.toLowerCase().slice(2) : l3.slice(2), n2.l || (n2.l = {}), n2.l[l3 + o3] = u3, u3 ? t3 || n2.addEventListener(l3, o3 ? z : j, o3) : n2.removeEventListener(l3, o3 ? z : j, o3);
      else if ("dangerouslySetInnerHTML" !== l3) {
        if (i3)
          l3 = l3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ("width" !== l3 && "height" !== l3 && "href" !== l3 && "list" !== l3 && "form" !== l3 && "tabIndex" !== l3 && "download" !== l3 && "rowSpan" !== l3 && "colSpan" !== l3 && l3 in n2)
          try {
            n2[l3] = null == u3 ? "" : u3;
            break n;
          } catch (n3) {
          }
        "function" == typeof u3 || (null == u3 || false === u3 && "-" !== l3[4] ? n2.removeAttribute(l3) : n2.setAttribute(l3, u3));
      }
  }
  function j(n2) {
    return this.l[n2.type + false](l.event ? l.event(n2) : n2);
  }
  function z(n2) {
    return this.l[n2.type + true](l.event ? l.event(n2) : n2);
  }
  function L(n2, u3, t3, i3, o3, r3, f3, e3, c3, s3) {
    var a3, p2, y2, d3, _, g3, m3, w3, x2, $2, C2, S2, A2, H2, I2, T3 = u3.type;
    if (void 0 !== u3.constructor)
      return null;
    null != t3.__h && (c3 = t3.__h, e3 = u3.__e = t3.__e, u3.__h = null, r3 = [e3]), (a3 = l.__b) && a3(u3);
    n:
      if ("function" == typeof T3)
        try {
          if (w3 = u3.props, x2 = (a3 = T3.contextType) && i3[a3.__c], $2 = a3 ? x2 ? x2.props.value : a3.__ : i3, t3.__c ? m3 = (p2 = u3.__c = t3.__c).__ = p2.__E : ("prototype" in T3 && T3.prototype.render ? u3.__c = p2 = new T3(w3, $2) : (u3.__c = p2 = new b(w3, $2), p2.constructor = T3, p2.render = B), x2 && x2.sub(p2), p2.props = w3, p2.state || (p2.state = {}), p2.context = $2, p2.__n = i3, y2 = p2.__d = true, p2.__h = [], p2._sb = []), null == p2.__s && (p2.__s = p2.state), null != T3.getDerivedStateFromProps && (p2.__s == p2.state && (p2.__s = v({}, p2.__s)), v(p2.__s, T3.getDerivedStateFromProps(w3, p2.__s))), d3 = p2.props, _ = p2.state, p2.__v = u3, y2)
            null == T3.getDerivedStateFromProps && null != p2.componentWillMount && p2.componentWillMount(), null != p2.componentDidMount && p2.__h.push(p2.componentDidMount);
          else {
            if (null == T3.getDerivedStateFromProps && w3 !== d3 && null != p2.componentWillReceiveProps && p2.componentWillReceiveProps(w3, $2), !p2.__e && (null != p2.shouldComponentUpdate && false === p2.shouldComponentUpdate(w3, p2.__s, $2) || u3.__v === t3.__v)) {
              for (u3.__v !== t3.__v && (p2.props = w3, p2.state = p2.__s, p2.__d = false), u3.__e = t3.__e, u3.__k = t3.__k, u3.__k.forEach(function(n3) {
                n3 && (n3.__ = u3);
              }), C2 = 0; C2 < p2._sb.length; C2++)
                p2.__h.push(p2._sb[C2]);
              p2._sb = [], p2.__h.length && f3.push(p2);
              break n;
            }
            null != p2.componentWillUpdate && p2.componentWillUpdate(w3, p2.__s, $2), null != p2.componentDidUpdate && p2.__h.push(function() {
              p2.componentDidUpdate(d3, _, g3);
            });
          }
          if (p2.context = $2, p2.props = w3, p2.__P = n2, p2.__e = false, S2 = l.__r, A2 = 0, "prototype" in T3 && T3.prototype.render) {
            for (p2.state = p2.__s, p2.__d = false, S2 && S2(u3), a3 = p2.render(p2.props, p2.state, p2.context), H2 = 0; H2 < p2._sb.length; H2++)
              p2.__h.push(p2._sb[H2]);
            p2._sb = [];
          } else
            do {
              p2.__d = false, S2 && S2(u3), a3 = p2.render(p2.props, p2.state, p2.context), p2.state = p2.__s;
            } while (p2.__d && ++A2 < 25);
          p2.state = p2.__s, null != p2.getChildContext && (i3 = v(v({}, i3), p2.getChildContext())), y2 || null == p2.getSnapshotBeforeUpdate || (g3 = p2.getSnapshotBeforeUpdate(d3, _)), P(n2, h(I2 = null != a3 && a3.type === k && null == a3.key ? a3.props.children : a3) ? I2 : [I2], u3, t3, i3, o3, r3, f3, e3, c3, s3), p2.base = u3.__e, u3.__h = null, p2.__h.length && f3.push(p2), m3 && (p2.__E = p2.__ = null);
        } catch (n3) {
          u3.__v = null, (c3 || null != r3) && (u3.__e = e3, u3.__h = !!c3, r3[r3.indexOf(e3)] = null), l.__e(n3, u3, t3);
        }
      else
        null == r3 && u3.__v === t3.__v ? (u3.__k = t3.__k, u3.__e = t3.__e) : u3.__e = N(t3.__e, u3, t3, i3, o3, r3, f3, c3, s3);
    (a3 = l.diffed) && a3(u3);
  }
  function M(n2, u3, t3) {
    for (var i3 = 0; i3 < t3.length; i3++)
      O(t3[i3], t3[++i3], t3[++i3]);
    l.__c && l.__c(u3, n2), n2.some(function(u4) {
      try {
        n2 = u4.__h, u4.__h = [], n2.some(function(n3) {
          n3.call(u4);
        });
      } catch (n3) {
        l.__e(n3, u4.__v);
      }
    });
  }
  function N(l3, u3, t3, i3, o3, r3, f3, e3, s3) {
    var a3, v3, y2, d3 = t3.props, _ = u3.props, k3 = u3.type, b3 = 0;
    if ("svg" === k3 && (o3 = true), null != r3) {
      for (; b3 < r3.length; b3++)
        if ((a3 = r3[b3]) && "setAttribute" in a3 == !!k3 && (k3 ? a3.localName === k3 : 3 === a3.nodeType)) {
          l3 = a3, r3[b3] = null;
          break;
        }
    }
    if (null == l3) {
      if (null === k3)
        return document.createTextNode(_);
      l3 = o3 ? document.createElementNS("http://www.w3.org/2000/svg", k3) : document.createElement(k3, _.is && _), r3 = null, e3 = false;
    }
    if (null === k3)
      d3 === _ || e3 && l3.data === _ || (l3.data = _);
    else {
      if (r3 = r3 && n.call(l3.childNodes), v3 = (d3 = t3.props || c).dangerouslySetInnerHTML, y2 = _.dangerouslySetInnerHTML, !e3) {
        if (null != r3)
          for (d3 = {}, b3 = 0; b3 < l3.attributes.length; b3++)
            d3[l3.attributes[b3].name] = l3.attributes[b3].value;
        (y2 || v3) && (y2 && (v3 && y2.__html == v3.__html || y2.__html === l3.innerHTML) || (l3.innerHTML = y2 && y2.__html || ""));
      }
      if (H(l3, _, d3, o3, e3), y2)
        u3.__k = [];
      else if (P(l3, h(b3 = u3.props.children) ? b3 : [b3], u3, t3, i3, o3 && "foreignObject" !== k3, r3, f3, r3 ? r3[0] : t3.__k && g(t3, 0), e3, s3), null != r3)
        for (b3 = r3.length; b3--; )
          null != r3[b3] && p(r3[b3]);
      e3 || ("value" in _ && void 0 !== (b3 = _.value) && (b3 !== l3.value || "progress" === k3 && !b3 || "option" === k3 && b3 !== d3.value) && T(l3, "value", b3, d3.value, false), "checked" in _ && void 0 !== (b3 = _.checked) && b3 !== l3.checked && T(l3, "checked", b3, d3.checked, false));
    }
    return l3;
  }
  function O(n2, u3, t3) {
    try {
      "function" == typeof n2 ? n2(u3) : n2.current = u3;
    } catch (n3) {
      l.__e(n3, t3);
    }
  }
  function q(n2, u3, t3) {
    var i3, o3;
    if (l.unmount && l.unmount(n2), (i3 = n2.ref) && (i3.current && i3.current !== n2.__e || O(i3, null, u3)), null != (i3 = n2.__c)) {
      if (i3.componentWillUnmount)
        try {
          i3.componentWillUnmount();
        } catch (n3) {
          l.__e(n3, u3);
        }
      i3.base = i3.__P = null, n2.__c = void 0;
    }
    if (i3 = n2.__k)
      for (o3 = 0; o3 < i3.length; o3++)
        i3[o3] && q(i3[o3], u3, t3 || "function" != typeof n2.type);
    t3 || null == n2.__e || p(n2.__e), n2.__ = n2.__e = n2.__d = void 0;
  }
  function B(n2, l3, u3) {
    return this.constructor(n2, u3);
  }
  function D(u3, t3, i3) {
    var o3, r3, f3, e3;
    l.__ && l.__(u3, t3), r3 = (o3 = "function" == typeof i3) ? null : i3 && i3.__k || t3.__k, f3 = [], e3 = [], L(t3, u3 = (!o3 && i3 || t3).__k = y(k, null, [u3]), r3 || c, c, void 0 !== t3.ownerSVGElement, !o3 && i3 ? [i3] : r3 ? null : t3.firstChild ? n.call(t3.childNodes) : null, f3, !o3 && i3 ? i3 : r3 ? r3.__e : t3.firstChild, o3, e3), M(f3, u3, e3);
  }
  var n, l, u, t, i, o, r, f, e, c, s, a, h;
  var init_preact_module = __esm({
    "node_modules/preact/dist/preact.module.js"() {
      c = {};
      s = [];
      a = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
      h = Array.isArray;
      n = s.slice, l = { __e: function(n2, l3, u3, t3) {
        for (var i3, o3, r3; l3 = l3.__; )
          if ((i3 = l3.__c) && !i3.__)
            try {
              if ((o3 = i3.constructor) && null != o3.getDerivedStateFromError && (i3.setState(o3.getDerivedStateFromError(n2)), r3 = i3.__d), null != i3.componentDidCatch && (i3.componentDidCatch(n2, t3 || {}), r3 = i3.__d), r3)
                return i3.__E = i3;
            } catch (l4) {
              n2 = l4;
            }
        throw n2;
      } }, u = 0, t = function(n2) {
        return null != n2 && void 0 === n2.constructor;
      }, b.prototype.setState = function(n2, l3) {
        var u3;
        u3 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = v({}, this.state), "function" == typeof n2 && (n2 = n2(v({}, u3), this.props)), n2 && v(u3, n2), null != n2 && this.__v && (l3 && this._sb.push(l3), w(this));
      }, b.prototype.forceUpdate = function(n2) {
        this.__v && (this.__e = true, n2 && this.__h.push(n2), w(this));
      }, b.prototype.render = k, i = [], r = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f = function(n2, l3) {
        return n2.__v.__b - l3.__v.__b;
      }, x.__r = 0, e = 0;
    }
  });

  // node_modules/preact/hooks/dist/hooks.module.js
  function d2(t3, u3) {
    l.__h && l.__h(r2, t3, o2 || u3), o2 = 0;
    var i3 = r2.__H || (r2.__H = { __: [], __h: [] });
    return t3 >= i3.__.length && i3.__.push({ __V: c2 }), i3.__[t3];
  }
  function h2(n2) {
    return o2 = 1, s2(B2, n2);
  }
  function s2(n2, u3, i3) {
    var o3 = d2(t2++, 2);
    if (o3.t = n2, !o3.__c && (o3.__ = [i3 ? i3(u3) : B2(void 0, u3), function(n3) {
      var t3 = o3.__N ? o3.__N[0] : o3.__[0], r3 = o3.t(t3, n3);
      t3 !== r3 && (o3.__N = [r3, o3.__[1]], o3.__c.setState({}));
    }], o3.__c = r2, !r2.u)) {
      var f3 = function(n3, t3, r3) {
        if (!o3.__c.__H)
          return true;
        var u4 = o3.__c.__H.__.filter(function(n4) {
          return n4.__c;
        });
        if (u4.every(function(n4) {
          return !n4.__N;
        }))
          return !c3 || c3.call(this, n3, t3, r3);
        var i4 = false;
        return u4.forEach(function(n4) {
          if (n4.__N) {
            var t4 = n4.__[0];
            n4.__ = n4.__N, n4.__N = void 0, t4 !== n4.__[0] && (i4 = true);
          }
        }), !(!i4 && o3.__c.props === n3) && (!c3 || c3.call(this, n3, t3, r3));
      };
      r2.u = true;
      var c3 = r2.shouldComponentUpdate, e3 = r2.componentWillUpdate;
      r2.componentWillUpdate = function(n3, t3, r3) {
        if (this.__e) {
          var u4 = c3;
          c3 = void 0, f3(n3, t3, r3), c3 = u4;
        }
        e3 && e3.call(this, n3, t3, r3);
      }, r2.shouldComponentUpdate = f3;
    }
    return o3.__N || o3.__;
  }
  function F(n2, r3) {
    var u3 = d2(t2++, 7);
    return z2(u3.__H, r3) ? (u3.__V = n2(), u3.i = r3, u3.__h = n2, u3.__V) : u3.__;
  }
  function T2(n2, t3) {
    return o2 = 8, F(function() {
      return n2;
    }, t3);
  }
  function b2() {
    for (var t3; t3 = f2.shift(); )
      if (t3.__P && t3.__H)
        try {
          t3.__H.__h.forEach(k2), t3.__H.__h.forEach(w2), t3.__H.__h = [];
        } catch (r3) {
          t3.__H.__h = [], l.__e(r3, t3.__v);
        }
  }
  function j2(n2) {
    var t3, r3 = function() {
      clearTimeout(u3), g2 && cancelAnimationFrame(t3), setTimeout(n2);
    }, u3 = setTimeout(r3, 100);
    g2 && (t3 = requestAnimationFrame(r3));
  }
  function k2(n2) {
    var t3 = r2, u3 = n2.__c;
    "function" == typeof u3 && (n2.__c = void 0, u3()), r2 = t3;
  }
  function w2(n2) {
    var t3 = r2;
    n2.__c = n2.__(), r2 = t3;
  }
  function z2(n2, t3) {
    return !n2 || n2.length !== t3.length || t3.some(function(t4, r3) {
      return t4 !== n2[r3];
    });
  }
  function B2(n2, t3) {
    return "function" == typeof t3 ? t3(n2) : t3;
  }
  var t2, r2, u2, i2, o2, f2, c2, e2, a2, v2, l2, m2, g2;
  var init_hooks_module = __esm({
    "node_modules/preact/hooks/dist/hooks.module.js"() {
      init_preact_module();
      o2 = 0;
      f2 = [];
      c2 = [];
      e2 = l.__b;
      a2 = l.__r;
      v2 = l.diffed;
      l2 = l.__c;
      m2 = l.unmount;
      l.__b = function(n2) {
        r2 = null, e2 && e2(n2);
      }, l.__r = function(n2) {
        a2 && a2(n2), t2 = 0;
        var i3 = (r2 = n2.__c).__H;
        i3 && (u2 === r2 ? (i3.__h = [], r2.__h = [], i3.__.forEach(function(n3) {
          n3.__N && (n3.__ = n3.__N), n3.__V = c2, n3.__N = n3.i = void 0;
        })) : (i3.__h.forEach(k2), i3.__h.forEach(w2), i3.__h = [], t2 = 0)), u2 = r2;
      }, l.diffed = function(t3) {
        v2 && v2(t3);
        var o3 = t3.__c;
        o3 && o3.__H && (o3.__H.__h.length && (1 !== f2.push(o3) && i2 === l.requestAnimationFrame || ((i2 = l.requestAnimationFrame) || j2)(b2)), o3.__H.__.forEach(function(n2) {
          n2.i && (n2.__H = n2.i), n2.__V !== c2 && (n2.__ = n2.__V), n2.i = void 0, n2.__V = c2;
        })), u2 = r2 = null;
      }, l.__c = function(t3, r3) {
        r3.some(function(t4) {
          try {
            t4.__h.forEach(k2), t4.__h = t4.__h.filter(function(n2) {
              return !n2.__ || w2(n2);
            });
          } catch (u3) {
            r3.some(function(n2) {
              n2.__h && (n2.__h = []);
            }), r3 = [], l.__e(u3, t4.__v);
          }
        }), l2 && l2(t3, r3);
      }, l.unmount = function(t3) {
        m2 && m2(t3);
        var r3, u3 = t3.__c;
        u3 && u3.__H && (u3.__H.__.forEach(function(n2) {
          try {
            k2(n2);
          } catch (n3) {
            r3 = n3;
          }
        }), u3.__H = void 0, r3 && l.__e(r3, u3.__v));
      };
      g2 = "function" == typeof requestAnimationFrame;
    }
  });

  // ../../../../../private/var/folders/q3/phj1q3716nq2zh1ttfzj02g80000gn/T/8037c18b-fddc-4e5d-aa41-c51038f577c2/icon.module.js
  var icon_module_default;
  var init_icon_module = __esm({
    "../../../../../private/var/folders/q3/phj1q3716nq2zh1ttfzj02g80000gn/T/8037c18b-fddc-4e5d-aa41-c51038f577c2/icon.module.js"() {
      if (document.getElementById("6037c5805d") === null) {
        const element = document.createElement("style");
        element.id = "6037c5805d";
        element.textContent = `._icon_13804_1 {
  fill: currentColor;
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvaWNvbnMvaWNvbi5tb2R1bGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6Im5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvaWNvbnMvaWNvbi5tb2R1bGUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb24ge1xuICBmaWxsOiBjdXJyZW50Q29sb3I7XG59XG4iXX0= */`;
        document.head.append(element);
      }
      icon_module_default = { "icon": "_icon_13804_1" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/icons/create-icon.js
  function createIcon(path, options) {
    const { width, height } = options;
    return function Icon(_a) {
      var _b = _a, { color } = _b, rest = __objRest(_b, ["color"]);
      return y(
        "svg",
        __spreadProps(__spreadValues({}, rest), { class: icon_module_default.icon, height, style: typeof color === "undefined" ? void 0 : {
          fill: `var(--figma-color-icon-${color})`
        }, width, xmlns: "http://www.w3.org/2000/svg" }),
        y("path", { "clip-rule": "evenodd", d: path, "fill-rule": "evenodd" })
      );
    };
  }
  var init_create_icon = __esm({
    "node_modules/@create-figma-plugin/ui/lib/icons/create-icon.js"() {
      init_preact_module();
      init_icon_module();
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/icons/icon-16/icon-caret-right-16.js
  var IconCaretRight16;
  var init_icon_caret_right_16 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/icons/icon-16/icon-caret-right-16.js"() {
      init_create_icon();
      IconCaretRight16 = createIcon("M12 8 8 5v6l4-3Z", {
        height: 16,
        width: 16
      });
    }
  });

  // ../../../../../private/var/folders/q3/phj1q3716nq2zh1ttfzj02g80000gn/T/fcf3c024-ee36-44c6-aa3b-5f341e98484d/disclosure.module.js
  var disclosure_module_default;
  var init_disclosure_module = __esm({
    "../../../../../private/var/folders/q3/phj1q3716nq2zh1ttfzj02g80000gn/T/fcf3c024-ee36-44c6-aa3b-5f341e98484d/disclosure.module.js"() {
      if (document.getElementById("4602545e40") === null) {
        const element = document.createElement("style");
        element.id = "4602545e40";
        element.textContent = `._label_ekvh7_1 {
  position: relative;
}

._input_ekvh7_5 {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

._title_ekvh7_13,
._children_ekvh7_14 {
  padding: var(--space-extra-small) var(--space-small) var(--space-extra-small)
    var(--space-large);
}

._title_ekvh7_13 {
  position: relative;
  color: var(--figma-color-text);
  font-weight: var(--font-weight-bold);
}
._title_ekvh7_13:hover,
._input_ekvh7_5:focus ~ ._title_ekvh7_13 {
  background-color: var(--figma-color-bg-hover);
}

._icon_ekvh7_29 {
  position: absolute;
  top: var(--space-extra-small);
  left: 0;
  color: var(--figma-color-icon);
}
._input_ekvh7_5:checked ~ ._title_ekvh7_13 ._icon_ekvh7_29 {
  top: calc(var(--space-extra-small) - 2px);
  left: 2px;
  transform: rotate(90deg);
}

._children_ekvh7_14 {
  color: var(--figma-color-text);
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy9kaXNjbG9zdXJlL2Rpc2Nsb3N1cmUubW9kdWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sUUFBUTtFQUNSLFNBQVM7RUFDVCxPQUFPO0FBQ1Q7O0FBRUE7O0VBRUU7c0JBQ29CO0FBQ3RCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDhCQUE4QjtFQUM5QixvQ0FBb0M7QUFDdEM7QUFDQTs7RUFFRSw2Q0FBNkM7QUFDL0M7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLE9BQU87RUFDUCw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLHlDQUF5QztFQUN6QyxTQUFTO0VBQ1Qsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDIiwiZmlsZSI6Im5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy9kaXNjbG9zdXJlL2Rpc2Nsb3N1cmUubW9kdWxlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYWJlbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmlucHV0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG59XG5cbi50aXRsZSxcbi5jaGlsZHJlbiB7XG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlLWV4dHJhLXNtYWxsKSB2YXIoLS1zcGFjZS1zbWFsbCkgdmFyKC0tc3BhY2UtZXh0cmEtc21hbGwpXG4gICAgdmFyKC0tc3BhY2UtbGFyZ2UpO1xufVxuXG4udGl0bGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0KTtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LWJvbGQpO1xufVxuLnRpdGxlOmhvdmVyLFxuLmlucHV0OmZvY3VzIH4gLnRpdGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYmctaG92ZXIpO1xufVxuXG4uaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiB2YXIoLS1zcGFjZS1leHRyYS1zbWFsbCk7XG4gIGxlZnQ6IDA7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1pY29uKTtcbn1cbi5pbnB1dDpjaGVja2VkIH4gLnRpdGxlIC5pY29uIHtcbiAgdG9wOiBjYWxjKHZhcigtLXNwYWNlLWV4dHJhLXNtYWxsKSAtIDJweCk7XG4gIGxlZnQ6IDJweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xufVxuXG4uY2hpbGRyZW4ge1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dCk7XG59XG4iXX0= */`;
        document.head.append(element);
      }
      disclosure_module_default = { "label": "_label_ekvh7_1", "input": "_input_ekvh7_5", "title": "_title_ekvh7_13", "children": "_children_ekvh7_14", "icon": "_icon_ekvh7_29" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/disclosure/disclosure.js
  function Disclosure(_a) {
    var _b = _a, { children, onClick, open, propagateEscapeKeyDown = true, title } = _b, rest = __objRest(_b, ["children", "onClick", "open", "propagateEscapeKeyDown", "title"]);
    const handleKeyDown = T2(function(event) {
      if (event.key !== "Escape") {
        return;
      }
      if (propagateEscapeKeyDown === false) {
        event.stopPropagation();
      }
      event.currentTarget.blur();
    }, [propagateEscapeKeyDown]);
    return y(
      k,
      null,
      y(
        "label",
        { class: disclosure_module_default.label },
        y("input", __spreadProps(__spreadValues({}, rest), { checked: open === true, class: disclosure_module_default.input, onClick, onKeyDown: handleKeyDown, tabIndex: 0, type: "checkbox" })),
        y(
          "div",
          { class: disclosure_module_default.title },
          y(
            "div",
            { class: disclosure_module_default.icon },
            y(IconCaretRight16, null)
          ),
          title
        )
      ),
      open === true ? y("div", { class: disclosure_module_default.children }, children) : null
    );
  }
  var init_disclosure = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/disclosure/disclosure.js"() {
      init_preact_module();
      init_hooks_module();
      init_icon_caret_right_16();
      init_disclosure_module();
    }
  });

  // ../../../../../private/var/folders/q3/phj1q3716nq2zh1ttfzj02g80000gn/T/6aa7a8f8-8eb4-458d-96e8-49fb22371d79/stack.module.js
  var stack_module_default;
  var init_stack_module = __esm({
    "../../../../../private/var/folders/q3/phj1q3716nq2zh1ttfzj02g80000gn/T/6aa7a8f8-8eb4-458d-96e8-49fb22371d79/stack.module.js"() {
      if (document.getElementById("3d1fd46604") === null) {
        const element = document.createElement("style");
        element.id = "3d1fd46604";
        element.textContent = `._extraSmall_dpsd3_1 > ._child_dpsd3_1:not(:first-child) {
  margin-top: var(--space-extra-small);
}
._small_dpsd3_4 > ._child_dpsd3_1:not(:first-child) {
  margin-top: var(--space-small);
}
._medium_dpsd3_7 > ._child_dpsd3_1:not(:first-child) {
  margin-top: var(--space-medium);
}
._large_dpsd3_10 > ._child_dpsd3_1:not(:first-child) {
  margin-top: var(--space-large);
}
._extraLarge_dpsd3_13 > ._child_dpsd3_1:not(:first-child) {
  margin-top: var(--space-extra-large);
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvbGF5b3V0L3N0YWNrL3N0YWNrLm1vZHVsZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBb0M7QUFDdEM7QUFDQTtFQUNFLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsK0JBQStCO0FBQ2pDO0FBQ0E7RUFDRSw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLG9DQUFvQztBQUN0QyIsImZpbGUiOiJub2RlX21vZHVsZXMvQGNyZWF0ZS1maWdtYS1wbHVnaW4vdWkvbGliL2xheW91dC9zdGFjay9zdGFjay5tb2R1bGUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4dHJhU21hbGwgPiAuY2hpbGQ6bm90KDpmaXJzdC1jaGlsZCkge1xuICBtYXJnaW4tdG9wOiB2YXIoLS1zcGFjZS1leHRyYS1zbWFsbCk7XG59XG4uc21hbGwgPiAuY2hpbGQ6bm90KDpmaXJzdC1jaGlsZCkge1xuICBtYXJnaW4tdG9wOiB2YXIoLS1zcGFjZS1zbWFsbCk7XG59XG4ubWVkaXVtID4gLmNoaWxkOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgbWFyZ2luLXRvcDogdmFyKC0tc3BhY2UtbWVkaXVtKTtcbn1cbi5sYXJnZSA+IC5jaGlsZDpub3QoOmZpcnN0LWNoaWxkKSB7XG4gIG1hcmdpbi10b3A6IHZhcigtLXNwYWNlLWxhcmdlKTtcbn1cbi5leHRyYUxhcmdlID4gLmNoaWxkOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgbWFyZ2luLXRvcDogdmFyKC0tc3BhY2UtZXh0cmEtbGFyZ2UpO1xufVxuIl19 */`;
        document.head.append(element);
      }
      stack_module_default = { "extraSmall": "_extraSmall_dpsd3_1", "child": "_child_dpsd3_1", "small": "_small_dpsd3_4", "medium": "_medium_dpsd3_7", "large": "_large_dpsd3_10", "extraLarge": "_extraLarge_dpsd3_13" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/layout/stack/stack.js
  function Stack(_a) {
    var _b = _a, { children, space } = _b, rest = __objRest(_b, ["children", "space"]);
    return y("div", __spreadProps(__spreadValues({}, rest), { class: stack_module_default[space] }), C(children).map(function(element, index) {
      return y("div", { key: index, class: stack_module_default.child }, element);
    }));
  }
  var init_stack = __esm({
    "node_modules/@create-figma-plugin/ui/lib/layout/stack/stack.js"() {
      init_preact_module();
      init_stack_module();
    }
  });

  // ../../../../../private/var/folders/q3/phj1q3716nq2zh1ttfzj02g80000gn/T/f72795c2-68c1-4872-89c8-20e51e0bce33/container.module.js
  var container_module_default;
  var init_container_module = __esm({
    "../../../../../private/var/folders/q3/phj1q3716nq2zh1ttfzj02g80000gn/T/f72795c2-68c1-4872-89c8-20e51e0bce33/container.module.js"() {
      if (document.getElementById("17c5b6fb16") === null) {
        const element = document.createElement("style");
        element.id = "17c5b6fb16";
        element.textContent = `._extraSmall_1oe77_1 {
  padding: 0 var(--space-extra-small);
}
._small_1oe77_4 {
  padding: 0 var(--space-small);
}
._medium_1oe77_7 {
  padding: 0 var(--space-medium);
}
._large_1oe77_10 {
  padding: 0 var(--space-large);
}
._extraLarge_1oe77_13 {
  padding: 0 var(--space-extra-large);
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvbGF5b3V0L2NvbnRhaW5lci9jb250YWluZXIubW9kdWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1DQUFtQztBQUNyQztBQUNBO0VBQ0UsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsbUNBQW1DO0FBQ3JDIiwiZmlsZSI6Im5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvbGF5b3V0L2NvbnRhaW5lci9jb250YWluZXIubW9kdWxlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leHRyYVNtYWxsIHtcbiAgcGFkZGluZzogMCB2YXIoLS1zcGFjZS1leHRyYS1zbWFsbCk7XG59XG4uc21hbGwge1xuICBwYWRkaW5nOiAwIHZhcigtLXNwYWNlLXNtYWxsKTtcbn1cbi5tZWRpdW0ge1xuICBwYWRkaW5nOiAwIHZhcigtLXNwYWNlLW1lZGl1bSk7XG59XG4ubGFyZ2Uge1xuICBwYWRkaW5nOiAwIHZhcigtLXNwYWNlLWxhcmdlKTtcbn1cbi5leHRyYUxhcmdlIHtcbiAgcGFkZGluZzogMCB2YXIoLS1zcGFjZS1leHRyYS1sYXJnZSk7XG59XG4iXX0= */`;
        document.head.append(element);
      }
      container_module_default = { "extraSmall": "_extraSmall_1oe77_1", "small": "_small_1oe77_4", "medium": "_medium_1oe77_7", "large": "_large_1oe77_10", "extraLarge": "_extraLarge_1oe77_13" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/layout/container/container.js
  function Container(_a) {
    var _b = _a, { space } = _b, rest = __objRest(_b, ["space"]);
    return y("div", __spreadProps(__spreadValues({}, rest), { class: container_module_default[space] }));
  }
  var init_container = __esm({
    "node_modules/@create-figma-plugin/ui/lib/layout/container/container.js"() {
      init_preact_module();
      init_container_module();
    }
  });

  // ../../../../../private/var/folders/q3/phj1q3716nq2zh1ttfzj02g80000gn/T/2a06f2f5-ac69-4cb7-92c2-0d0ecf282a42/vertical-space.module.js
  var vertical_space_module_default;
  var init_vertical_space_module = __esm({
    "../../../../../private/var/folders/q3/phj1q3716nq2zh1ttfzj02g80000gn/T/2a06f2f5-ac69-4cb7-92c2-0d0ecf282a42/vertical-space.module.js"() {
      if (document.getElementById("17a57a42c6") === null) {
        const element = document.createElement("style");
        element.id = "17a57a42c6";
        element.textContent = `._extraSmall_zc4n0_1 {
  height: var(--space-extra-small);
}
._small_zc4n0_4 {
  height: var(--space-small);
}
._medium_zc4n0_7 {
  height: var(--space-medium);
}
._large_zc4n0_10 {
  height: var(--space-large);
}
._extraLarge_zc4n0_13 {
  height: var(--space-extra-large);
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvbGF5b3V0L3ZlcnRpY2FsLXNwYWNlL3ZlcnRpY2FsLXNwYWNlLm1vZHVsZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLGdDQUFnQztBQUNsQyIsImZpbGUiOiJub2RlX21vZHVsZXMvQGNyZWF0ZS1maWdtYS1wbHVnaW4vdWkvbGliL2xheW91dC92ZXJ0aWNhbC1zcGFjZS92ZXJ0aWNhbC1zcGFjZS5tb2R1bGUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4dHJhU21hbGwge1xuICBoZWlnaHQ6IHZhcigtLXNwYWNlLWV4dHJhLXNtYWxsKTtcbn1cbi5zbWFsbCB7XG4gIGhlaWdodDogdmFyKC0tc3BhY2Utc21hbGwpO1xufVxuLm1lZGl1bSB7XG4gIGhlaWdodDogdmFyKC0tc3BhY2UtbWVkaXVtKTtcbn1cbi5sYXJnZSB7XG4gIGhlaWdodDogdmFyKC0tc3BhY2UtbGFyZ2UpO1xufVxuLmV4dHJhTGFyZ2Uge1xuICBoZWlnaHQ6IHZhcigtLXNwYWNlLWV4dHJhLWxhcmdlKTtcbn1cbiJdfQ== */`;
        document.head.append(element);
      }
      vertical_space_module_default = { "extraSmall": "_extraSmall_zc4n0_1", "small": "_small_zc4n0_4", "medium": "_medium_zc4n0_7", "large": "_large_zc4n0_10", "extraLarge": "_extraLarge_zc4n0_13" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/layout/vertical-space/vertical-space.js
  function VerticalSpace(_a) {
    var _b = _a, { space } = _b, rest = __objRest(_b, ["space"]);
    return y("div", __spreadProps(__spreadValues({}, rest), { class: vertical_space_module_default[space] }));
  }
  var init_vertical_space = __esm({
    "node_modules/@create-figma-plugin/ui/lib/layout/vertical-space/vertical-space.js"() {
      init_preact_module();
      init_vertical_space_module();
    }
  });

  // ../../../../../private/var/folders/q3/phj1q3716nq2zh1ttfzj02g80000gn/T/0f91afad-4bd9-4962-afc9-67a0e4fd3ad6/base.js
  var init_base = __esm({
    "../../../../../private/var/folders/q3/phj1q3716nq2zh1ttfzj02g80000gn/T/0f91afad-4bd9-4962-afc9-67a0e4fd3ad6/base.js"() {
      if (document.getElementById("f81f2f82ca") === null) {
        const element = document.createElement("style");
        element.id = "f81f2f82ca";
        element.innerHTML = `@import url('https://fonts.googleapis.com/css?family=Inter:400,600&display=swap');

:root {
  /* border-radius */
  --border-radius-2: 2px;
  --border-radius-6: 6px;
  /* box-shadow */
  --box-shadow: var(--box-shadow-menu);
  --box-shadow-menu: 0 5px 17px rgba(0, 0, 0, 0.2),
    0 2px 7px rgba(0, 0, 0, 0.15), inset 0 0 0 0.5px #000000,
    0 0 0 0.5px rgba(0, 0, 0, 0.1);
  --box-shadow-modal: 0 2px 14px rgba(0, 0, 0, 0.15),
    0 0 0 0.5px rgba(0, 0, 0, 0.2);
  /* font */
  --font-family: 'Inter', 'Helvetica', sans-serif;
  --font-family-code: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
    'Courier New', monospace;
  --font-size-11: 11px;
  --font-size-12: 12px;
  --font-weight-regular: 400;
  --font-weight-bold: 600;
  --line-height-16: 16px;
  /* opacity */
  --opacity-30: 0.3;
  /* space */
  --space-extra-small: 8px;
  --space-small: 12px;
  --space-medium: 16px;
  --space-large: 20px;
  --space-extra-large: 24px;
  /* z-index */
  --z-index-1: 1;
  --z-index-2: 2;
}

.figma-dark {
  color-scheme: dark;
}

* {
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: currentColor;
}

body {
  margin: 0;
  background-color: var(--figma-color-bg);
  color: var(--figma-color-text);
  font-family: var(--font-family);
  font-size: var(--font-size-11);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-16);
}

div,
span {
  cursor: default;
  user-select: none;
}

h1,
h2,
h3 {
  margin: 0;
  font-weight: inherit;
}

button {
  padding: 0;
  border: 0;
  -webkit-appearance: none;
  background-color: transparent;
  font: inherit;
  outline: 0;
}

hr {
  border: 0;
  margin: 0;
}

label {
  display: block;
}

input,
textarea {
  padding: 0;
  border: 0;
  margin: 0;
  -webkit-appearance: none;
  cursor: default;
  font: inherit;
  outline: 0;
}

svg {
  display: block;
}

::selection {
  background-color: var(--figma-color-bg-onselected);
}
`;
        document.head.prepend(element);
      }
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/utilities/render.js
  function render(Plugin2) {
    return function(rootNode2, props) {
      D(y(Plugin2, __spreadValues({}, props)), rootNode2);
    };
  }
  var init_render = __esm({
    "node_modules/@create-figma-plugin/ui/lib/utilities/render.js"() {
      init_base();
      init_preact_module();
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/index.js
  var init_lib = __esm({
    "node_modules/@create-figma-plugin/ui/lib/index.js"() {
      init_disclosure();
      init_container();
      init_stack();
      init_vertical_space();
      init_render();
    }
  });

  // ../../../../../private/var/folders/q3/phj1q3716nq2zh1ttfzj02g80000gn/T/3ed1bb6a-f8f8-47b8-854e-456fad807c3a/styles.js
  var styles_default;
  var init_styles = __esm({
    "../../../../../private/var/folders/q3/phj1q3716nq2zh1ttfzj02g80000gn/T/3ed1bb6a-f8f8-47b8-854e-456fad807c3a/styles.js"() {
      if (document.getElementById("b80a332cca") === null) {
        const element = document.createElement("style");
        element.id = "b80a332cca";
        element.textContent = `._boxesWrapper_18f2i_1{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 134px);
    grid-gap: 0.5rem;    
}

._box_18f2i_1 {
    border: #ddd 1px solid;
    padding: 0.5rem;
    border-radius: 4px;
    width: 100%;
    height: 134px;
    background-color: #fff;
    position: relative;
}
._box_18f2i_1:hover ._title_18f2i_17{
    opacity: 0;
}
._box_18f2i_1:hover ._iconButtons_18f2i_20{
    display: flex;
}
._title_18f2i_17{
    font-size: 0.8rem;
    font-weight: 500;
    color: #000;
    width: 100%;
}
._thumbnailWrapper_18f2i_29{
    height: 88px;
    overflow: hidden;

    display: flex;
    align-items: center;
}
._thumbnail_18f2i_29{
    width: 100%;
}
._iconButtons_18f2i_20{
    position: absolute;
    gap: 0.25rem;
    height: 2rem;
    overflow: hidden;
    display: none;
    background-color: #fff;
    top: 0.5rem;
    left: 0.5rem;
}
._iconButton_18f2i_20 {
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    cursor: pointer;
}
._iconButton_18f2i_20:hover {
    background-color: #E9E9E9;
}
._iconButton_18f2i_20 img{
    width: 1.5rem;
}
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYix1Q0FBdUM7SUFDdkMsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFdBQVc7QUFDZjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjs7SUFFaEIsYUFBYTtJQUNiLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9zdHlsZXMuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJveGVzV3JhcHBlcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDEzNHB4KTtcbiAgICBncmlkLWdhcDogMC41cmVtOyAgICBcbn1cblxuLmJveCB7XG4gICAgYm9yZGVyOiAjZGRkIDFweCBzb2xpZDtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTM0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uYm94OmhvdmVyIC50aXRsZXtcbiAgICBvcGFjaXR5OiAwO1xufVxuLmJveDpob3ZlciAuaWNvbkJ1dHRvbnN7XG4gICAgZGlzcGxheTogZmxleDtcbn1cbi50aXRsZXtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLnRodW1ibmFpbFdyYXBwZXJ7XG4gICAgaGVpZ2h0OiA4OHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udGh1bWJuYWlse1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLmljb25CdXR0b25ze1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBnYXA6IDAuMjVyZW07XG4gICAgaGVpZ2h0OiAycmVtO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHRvcDogMC41cmVtO1xuICAgIGxlZnQ6IDAuNXJlbTtcbn1cbi5pY29uQnV0dG9uIHtcbiAgICB3aWR0aDogMnJlbTtcbiAgICBoZWlnaHQ6IDJyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaWNvbkJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U5RTlFOTtcbn1cbi5pY29uQnV0dG9uIGltZ3tcbiAgICB3aWR0aDogMS41cmVtO1xufSJdfQ== */`;
        document.head.append(element);
      }
      styles_default = { "boxesWrapper": "_boxesWrapper_18f2i_1", "box": "_box_18f2i_1", "title": "_title_18f2i_17", "iconButtons": "_iconButtons_18f2i_20", "thumbnailWrapper": "_thumbnailWrapper_18f2i_29", "thumbnail": "_thumbnail_18f2i_29", "iconButton": "_iconButton_18f2i_20" };
    }
  });

  // ../../../../../private/var/folders/q3/phj1q3716nq2zh1ttfzj02g80000gn/T/825cb808-14e6-4407-9114-0020b7ad797a/styles.js
  var styles_default2;
  var init_styles2 = __esm({
    "../../../../../private/var/folders/q3/phj1q3716nq2zh1ttfzj02g80000gn/T/825cb808-14e6-4407-9114-0020b7ad797a/styles.js"() {
      if (document.getElementById("b80a332cca") === null) {
        const element = document.createElement("style");
        element.id = "b80a332cca";
        element.textContent = `._boxesWrapper_18f2i_1{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 134px);
    grid-gap: 0.5rem;    
}

._box_18f2i_1 {
    border: #ddd 1px solid;
    padding: 0.5rem;
    border-radius: 4px;
    width: 100%;
    height: 134px;
    background-color: #fff;
    position: relative;
}
._box_18f2i_1:hover ._title_18f2i_17{
    opacity: 0;
}
._box_18f2i_1:hover ._iconButtons_18f2i_20{
    display: flex;
}
._title_18f2i_17{
    font-size: 0.8rem;
    font-weight: 500;
    color: #000;
    width: 100%;
}
._thumbnailWrapper_18f2i_29{
    height: 88px;
    overflow: hidden;

    display: flex;
    align-items: center;
}
._thumbnail_18f2i_29{
    width: 100%;
}
._iconButtons_18f2i_20{
    position: absolute;
    gap: 0.25rem;
    height: 2rem;
    overflow: hidden;
    display: none;
    background-color: #fff;
    top: 0.5rem;
    left: 0.5rem;
}
._iconButton_18f2i_20 {
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    cursor: pointer;
}
._iconButton_18f2i_20:hover {
    background-color: #E9E9E9;
}
._iconButton_18f2i_20 img{
    width: 1.5rem;
}
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYix1Q0FBdUM7SUFDdkMsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFdBQVc7QUFDZjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjs7SUFFaEIsYUFBYTtJQUNiLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9zdHlsZXMuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJveGVzV3JhcHBlcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDEzNHB4KTtcbiAgICBncmlkLWdhcDogMC41cmVtOyAgICBcbn1cblxuLmJveCB7XG4gICAgYm9yZGVyOiAjZGRkIDFweCBzb2xpZDtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTM0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uYm94OmhvdmVyIC50aXRsZXtcbiAgICBvcGFjaXR5OiAwO1xufVxuLmJveDpob3ZlciAuaWNvbkJ1dHRvbnN7XG4gICAgZGlzcGxheTogZmxleDtcbn1cbi50aXRsZXtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLnRodW1ibmFpbFdyYXBwZXJ7XG4gICAgaGVpZ2h0OiA4OHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udGh1bWJuYWlse1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLmljb25CdXR0b25ze1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBnYXA6IDAuMjVyZW07XG4gICAgaGVpZ2h0OiAycmVtO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHRvcDogMC41cmVtO1xuICAgIGxlZnQ6IDAuNXJlbTtcbn1cbi5pY29uQnV0dG9uIHtcbiAgICB3aWR0aDogMnJlbTtcbiAgICBoZWlnaHQ6IDJyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaWNvbkJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U5RTlFOTtcbn1cbi5pY29uQnV0dG9uIGltZ3tcbiAgICB3aWR0aDogMS41cmVtO1xufSJdfQ== */`;
        document.head.append(element);
      }
      styles_default2 = { "boxesWrapper": "_boxesWrapper_18f2i_1", "box": "_box_18f2i_1", "title": "_title_18f2i_17", "iconButtons": "_iconButtons_18f2i_20", "thumbnailWrapper": "_thumbnailWrapper_18f2i_29", "thumbnail": "_thumbnail_18f2i_29", "iconButton": "_iconButton_18f2i_20" };
    }
  });

  // ../../../../../private/var/folders/q3/phj1q3716nq2zh1ttfzj02g80000gn/T/dc604dfa-93c9-4436-9fff-fdde647601da/styles.js
  var styles_default3;
  var init_styles3 = __esm({
    "../../../../../private/var/folders/q3/phj1q3716nq2zh1ttfzj02g80000gn/T/dc604dfa-93c9-4436-9fff-fdde647601da/styles.js"() {
      if (document.getElementById("b80a332cca") === null) {
        const element = document.createElement("style");
        element.id = "b80a332cca";
        element.textContent = `._boxesWrapper_18f2i_1{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 134px);
    grid-gap: 0.5rem;    
}

._box_18f2i_1 {
    border: #ddd 1px solid;
    padding: 0.5rem;
    border-radius: 4px;
    width: 100%;
    height: 134px;
    background-color: #fff;
    position: relative;
}
._box_18f2i_1:hover ._title_18f2i_17{
    opacity: 0;
}
._box_18f2i_1:hover ._iconButtons_18f2i_20{
    display: flex;
}
._title_18f2i_17{
    font-size: 0.8rem;
    font-weight: 500;
    color: #000;
    width: 100%;
}
._thumbnailWrapper_18f2i_29{
    height: 88px;
    overflow: hidden;

    display: flex;
    align-items: center;
}
._thumbnail_18f2i_29{
    width: 100%;
}
._iconButtons_18f2i_20{
    position: absolute;
    gap: 0.25rem;
    height: 2rem;
    overflow: hidden;
    display: none;
    background-color: #fff;
    top: 0.5rem;
    left: 0.5rem;
}
._iconButton_18f2i_20 {
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    cursor: pointer;
}
._iconButton_18f2i_20:hover {
    background-color: #E9E9E9;
}
._iconButton_18f2i_20 img{
    width: 1.5rem;
}
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYix1Q0FBdUM7SUFDdkMsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFdBQVc7QUFDZjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjs7SUFFaEIsYUFBYTtJQUNiLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9zdHlsZXMuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJveGVzV3JhcHBlcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDEzNHB4KTtcbiAgICBncmlkLWdhcDogMC41cmVtOyAgICBcbn1cblxuLmJveCB7XG4gICAgYm9yZGVyOiAjZGRkIDFweCBzb2xpZDtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTM0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uYm94OmhvdmVyIC50aXRsZXtcbiAgICBvcGFjaXR5OiAwO1xufVxuLmJveDpob3ZlciAuaWNvbkJ1dHRvbnN7XG4gICAgZGlzcGxheTogZmxleDtcbn1cbi50aXRsZXtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLnRodW1ibmFpbFdyYXBwZXJ7XG4gICAgaGVpZ2h0OiA4OHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udGh1bWJuYWlse1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLmljb25CdXR0b25ze1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBnYXA6IDAuMjVyZW07XG4gICAgaGVpZ2h0OiAycmVtO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHRvcDogMC41cmVtO1xuICAgIGxlZnQ6IDAuNXJlbTtcbn1cbi5pY29uQnV0dG9uIHtcbiAgICB3aWR0aDogMnJlbTtcbiAgICBoZWlnaHQ6IDJyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaWNvbkJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U5RTlFOTtcbn1cbi5pY29uQnV0dG9uIGltZ3tcbiAgICB3aWR0aDogMS41cmVtO1xufSJdfQ== */`;
        document.head.append(element);
      }
      styles_default3 = { "boxesWrapper": "_boxesWrapper_18f2i_1", "box": "_box_18f2i_1", "title": "_title_18f2i_17", "iconButtons": "_iconButtons_18f2i_20", "thumbnailWrapper": "_thumbnailWrapper_18f2i_29", "thumbnail": "_thumbnail_18f2i_29", "iconButton": "_iconButton_18f2i_20" };
    }
  });

  // src/components/_IconButton.jsx
  var _IconButton;
  var init_IconButton = __esm({
    "src/components/_IconButton.jsx"() {
      "use strict";
      init_styles3();
      init_preact_module();
      _IconButton = ({ src, url }) => {
        return /* @__PURE__ */ y("a", { href: url, target: "_blank" }, /* @__PURE__ */ y("div", { class: styles_default3.iconButton }, /* @__PURE__ */ y("img", { src })));
      };
    }
  });

  // src/icons/figma.svg
  var figma_default;
  var init_figma = __esm({
    "src/icons/figma.svg"() {
      figma_default = 'data:image/svg+xml,<svg width="40" height="42" viewBox="0 0 40 42" fill="none" xmlns="http://www.w3.org/2000/svg">%0A<path d="M20 21.5C20 20.0413 20.5795 18.6424 21.6109 17.6109C22.6424 16.5795 24.0413 16 25.5 16C26.9587 16 28.3576 16.5795 29.3891 17.6109C30.4205 18.6424 31 20.0413 31 21.5C31 22.9587 30.4205 24.3576 29.3891 25.3891C28.3576 26.4205 26.9587 27 25.5 27C24.0413 27 22.6424 26.4205 21.6109 25.3891C20.5795 24.3576 20 22.9587 20 21.5V21.5Z" stroke="%231E1E1E" stroke-width="3.5"/>%0A<path d="M9 32.5C9 31.0413 9.57946 29.6424 10.6109 28.6109C11.6424 27.5795 13.0413 27 14.5 27H20V32.5C20 33.9587 19.4205 35.3576 18.3891 36.3891C17.3576 37.4205 15.9587 38 14.5 38C13.0413 38 11.6424 37.4205 10.6109 36.3891C9.57946 35.3576 9 33.9587 9 32.5Z" stroke="%231E1E1E" stroke-width="3.5"/>%0A<path d="M20 5V16H25.5C26.9587 16 28.3576 15.4205 29.3891 14.3891C30.4205 13.3576 31 11.9587 31 10.5C31 9.04131 30.4205 7.64236 29.3891 6.61091C28.3576 5.57946 26.9587 5 25.5 5H20Z" stroke="%231E1E1E" stroke-width="3.5"/>%0A<path d="M9 10.5C9 11.9587 9.57946 13.3576 10.6109 14.3891C11.6424 15.4205 13.0413 16 14.5 16H20V5H14.5C13.0413 5 11.6424 5.57946 10.6109 6.61091C9.57946 7.64236 9 9.04131 9 10.5Z" stroke="%231E1E1E" stroke-width="3.5"/>%0A<path d="M9 21.5C9 22.9587 9.57946 24.3576 10.6109 25.3891C11.6424 26.4205 13.0413 27 14.5 27H20V16H14.5C13.0413 16 11.6424 16.5795 10.6109 17.6109C9.57946 18.6424 9 20.0413 9 21.5Z" stroke="%231E1E1E" stroke-width="3.5"/>%0A</svg>%0A';
    }
  });

  // src/icons/storybook.svg
  var storybook_default;
  var init_storybook = __esm({
    "src/icons/storybook.svg"() {
      storybook_default = 'data:image/svg+xml,<?xml version="1.0" encoding="UTF-8"?>%0A<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->%0A<svg width="800px" height="800px" viewBox="-31.5 0 319 319" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">%0A    <defs>%0A        <path d="M9.87245893,293.324145 L0.0114611411,30.5732167 C-0.314208957,21.8955842 6.33948896,14.5413918 15.0063196,13.9997149 L238.494389,0.0317105427 C247.316188,-0.519651867 254.914637,6.18486163 255.466,15.0066607 C255.486773,15.339032 255.497167,15.6719708 255.497167,16.0049907 L255.497167,302.318596 C255.497167,311.157608 248.331732,318.323043 239.492719,318.323043 C239.253266,318.323043 239.013844,318.317669 238.774632,318.306926 L25.1475605,308.712253 C16.8276309,308.338578 10.1847994,301.646603 9.87245893,293.324145 L9.87245893,293.324145 Z" id="path-1">%0A%0A</path>%0A    </defs>%0A%09%09<g>%0A%09%09%09%09<mask id="mask-2" fill="white">%0A%09%09%09%09%09%09<use xlink:href="%23path-1">%0A%0A</use>%0A%09%09%09%09</mask>%0A%09%09%09%09<use fill="%23000" fill-rule="nonzero" xlink:href="%23path-1">%0A%0A</use>%0A%09%09%09%09<path d="M188.665358,39.126973 L190.191903,2.41148534 L220.883535,0 L222.205755,37.8634126 C222.251771,39.1811466 221.22084,40.2866846 219.903106,40.3327009 C219.338869,40.3524045 218.785907,40.1715096 218.342409,39.8221376 L206.506729,30.4984116 L192.493574,41.1282444 C191.443077,41.9251106 189.945493,41.7195021 189.148627,40.6690048 C188.813185,40.2267976 188.6423,39.6815326 188.665358,39.126973 Z M149.413703,119.980309 C149.413703,126.206975 191.355678,123.222696 196.986019,118.848893 C196.986019,76.4467826 174.234041,54.1651411 132.57133,54.1651411 C90.9086182,54.1651411 67.5656805,76.7934542 67.5656805,110.735941 C67.5656805,169.85244 147.345341,170.983856 147.345341,203.229219 C147.345341,212.280549 142.913138,217.654777 133.162291,217.654777 C120.456641,217.654777 115.433477,211.165914 116.024438,189.103298 C116.024438,184.317101 67.5656805,182.824962 66.0882793,189.103298 C62.3262146,242.56887 95.6363019,257.990394 133.753251,257.990394 C170.688279,257.990394 199.645341,238.303123 199.645341,202.663511 C199.645341,139.304202 118.683759,141.001326 118.683759,109.604526 C118.683759,96.8760922 128.139127,95.178968 133.753251,95.178968 C139.662855,95.178968 150.300143,96.2205679 149.413703,119.980309 Z" fill="%23FFFFFF" fill-rule="nonzero" mask="url(%23mask-2)">%0A%0A</path>%0A%09%09</g>%0A</svg>';
    }
  });

  // src/icons/doc.svg
  var doc_default;
  var init_doc = __esm({
    "src/icons/doc.svg"() {
      doc_default = 'data:image/svg+xml,<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">%0A<path d="M8 16H16V18H8V16ZM8 12H16V14H8V12ZM14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20Z" fill="%23000"/>%0A</svg>%0A';
    }
  });

  // src/components/_Box.jsx
  var _Box;
  var init_Box = __esm({
    "src/components/_Box.jsx"() {
      "use strict";
      init_lib();
      init_styles2();
      init_preact_module();
      init_IconButton();
      init_figma();
      init_storybook();
      init_doc();
      _Box = ({ comp }) => {
        return /* @__PURE__ */ y("div", { class: styles_default2.box }, /* @__PURE__ */ y(Stack, { space: "extraSmall" }, /* @__PURE__ */ y("div", { class: styles_default2.title }, comp.name), /* @__PURE__ */ y("div", { class: [styles_default2.iconButtons] }, /* @__PURE__ */ y(_IconButton, { src: figma_default, url: comp.figmaLink }), comp.storybookLink && /* @__PURE__ */ y(_IconButton, { src: storybook_default, url: comp.storybookLink }), comp.documentationLink && /* @__PURE__ */ y(_IconButton, { src: doc_default, url: comp.documentationLink })), /* @__PURE__ */ y("div", { className: styles_default2.thumbnailWrapper }, /* @__PURE__ */ y("img", { class: styles_default2.thumbnail, src: comp.imageSrc }))));
      };
    }
  });

  // src/components/_Section.jsx
  var _Section;
  var init_Section = __esm({
    "src/components/_Section.jsx"() {
      "use strict";
      init_lib();
      init_hooks_module();
      init_styles();
      init_preact_module();
      init_Box();
      _Section = ({ section }) => {
        const [open, setOpen] = h2(true);
        const handleClick = () => {
          setOpen(!open);
        };
        return /* @__PURE__ */ y(Disclosure, { title: section.name, open, onClick: handleClick }, /* @__PURE__ */ y("div", { class: styles_default.boxesWrapper }, section.children.map((comp) => {
          return /* @__PURE__ */ y(_Box, { comp });
        })));
      };
    }
  });

  // src/images/Button.png
  var Button_default;
  var init_Button = __esm({
    "src/images/Button.png"() {
      Button_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABJPSURBVHgB7Z15lJTVmcbf2qt6oVlkR9l3RUR2DIqauA0ROIMxk5gxhmTiH56ZZOYQ9cSZzDjnOJkko45O5iRqjkmI2YxRFBSRIIRFQRCQVUD2Vfala6/K+9yvCqqhee0mXUAnzy+ngxTd33Lv+7zb/b7bvrwihJB68Qsh5JxQIIQYUCCEGFAghBhQIIQYUCCEGFAghBhQIIQYUCCEGFAghBhQIIQYUCCEGFAghBhQIIQYUCCEGFAghBhQIIQYUCCEGFAghBhQIIQYUCCEGFAghBhQIIQYUCCEGFAghBhQIIQYUCCEGFAghBhQIIQYUCCEGFAghBhQIIQYUCCEGFAghBhQIIQYUCCEGFAghBhQIIQYUCCEGFAghBhQIIQYUCCEGFAghBhQIIQYUCCEGFAghBhQIIQYUCCEGFAghBhQIIQYUCCEGFAghBhQIIQYUCCEGFAghBhQIIQYUCCEGFAghBhQIIQYUCCEGFAghBhQIIQYUCCEGFAghBhQIIQYUCCEGFAghBhQIIQYUCCEGFAghBhQIIQYUCCEGATxf9mcyPItGVm0PiMfbM/KzoN5OR7PybF4Xgj5S6c65pOaCp+0r/HLVVcE5Lr+IRnRO+D+zZdX5qxKy1OvJ2XL/qzkqAnyV06Hln751sSojBsYlOC8tWl57OWE7DuSE0KIyF7Vwg+mJ6RFLCb+9zZlKQ5CzmD3oZws/jAjftQchJC6oNT4YGtW/PuOMnoQUh87D6pAjpxkVU5IfRxP6DrIiQQFQkh9YJmDC4WEGFAghBhQIIQYUCCEGFAghBhQIIQYUCCEGFAghBhQIIQYUCCEGFAg54HPpwPnE9IAME7+ZmxlQblABHWQul7ml+oKn3uU+OCxnOw9mnev+zY3ruwSlIGXB2T++rR7b+BigVdFW1WIHI3rV23Dn6lrVemT6qhIKity4FheMmW8heG9gtKzQ0BmLk/J4Wb4YGzZBQIPcm2PoEweFVKjCkosoh/mMaEia3Zk5IUFSVm3Kyf5CzR2bVv4nEc7dEIknTm/k95/a1g+1T8kg5YF5OFf1MrF4oaBQblvXER+szglv1yQavDPTZ0QdXNx5GRO/vvlhKze8ee/E9S+pU+yENzxumP6n5+vcP+W1/+98MeGX+OlQlmDH6LG6D5BeXpKhdw2JCyJtLjJ2LwvJ+GQyN8MDcsTX66UoT0uWCCThyfF5Lf/XCXDegbkfJm1IiPvbc7K/DVpuZhgo4Hu7QPSsrLh+V6rKp/ceGVIurfzy9XdgnJV1/Mfh1Iwps98vfKsz2e8n5JFGzKyupm+mFdWy+zbOSBTJ8YkoEL53Tspee4PSRfSw3rWy6p98g+ficpt14TkqzdH3IYRZ3qfchANa1pS6Zdo6PyLiNeWpeSP69IahZpfyjBcnVFFxOeuvbWK5YYBwUZFn3OBMc3Wky8/NTPhznestnm+VlFWgXzt0xHnqX4+PylPzkhKMu0NUjzl5cyPvRSXjq38cm3PoNwyOKTpVsqlWiiCO2hYHtErJNd0D0hl1Cc7DmTVE2Vl1baMJDOnzzF+SEh6dvTLq0vT0rLKLzdeFXS7UkBwb63MaLTKSlqdF67jzmHqOdt6QfOOazVF6uqXheszsnSz590iQZ/b7gXX07m1T47H87J1f15mf1C31hjVOyhDewVkoV7P0k0ZqdLrg9ArNX2ctzYjvTTnHtkHnt0vazViztfPNu6t60ERXeHBR/cNSFe9Jpxrraaac1ennRMpJaKzNFzPia9Oel17DuXlpXcbH70QacYP00iu4//Eawl54I6IDOsdcrXhtgNnG3dMnUmfTn4Zq+lklzaeQ1m5DZEzIzt1PIIafIb3xHV5UQjO55/uiLj/fnZOUk4kdJw1c+jezifTdX4+2n/6HB11jjCGyB4wftt0ft/9MCsr9PhFOwG3Xh2Ufl0C8suFKenSOiDjNPp1bOWTg8dz8sb7abWHbFlrqLIKBOkV+L1Gj9KbLnJERfLcW0npohO0Rg2pWId0VtF8954KNzmnPX1Ixg/NyW8XpeQnc5PO6MHNV4dUFCGtddRIVSwQB8jlQ3L7kJx8+4VaWb4l6yLWV26Knjr3Z/TncMzaZMIJBEZ4/60R+duRYZe6JFJ5N+FgZN+g/O/MuKzb6c3EUC08v3JTRI4lEk4gUaSLKrjL2/ilb6eA3DworD/rnecmvbbbhmTlgWdrZU9hcwxE1E8PCsk3Pxs9db0A9wTxPfV6XAXuDUYo4JO7x4RctEVRXqSfRucdBxpnGXASvXVMIdZlH2Vk+hK/uw84ix/OSp71/ROHh2SKRve2LU5f4y2D8XlWHn0xLht2ZZ1Dua8wrjD04hg//7Z3vFvVcVzXL+jGuCgQRK6HJkVldL+QG/fifE0elddMIylPzDh9LRDwXaPDrma978aImxtfYRhG6ljhe/+wunypbtkE0kMnAwZ2UEP5xr31TyQE8fbaujeHcPyg1gn91WsglXlKB+BoPOe8GPYq+qpGpY/Ve5zpQSGSn85NyUzNedvV+GXqnVEZpob8uTERWbG1Vt5XkYx95Jj8z71a82j98a1pcVm8IX0qGsGw7xwakq0f5+T7r8RllebMrdXjwojHXxuW/Uci8m+/iVu3LG3UkPp0CsrUaSdlhZ4Px/zm+Kj7E+KF0eR0KMYNDMl3PheTfdrFu/fpk84LXqbNg0kjQvJ1FQIM4BvPe8X/sJ5+Z6R48/NJFelbqzJaOOp1jfcMO9CIKvL6ASHp1ArRNiHbVVxvaw01WY0PIkaaVdplGqNG/Y93RKVWo82//iour6u3rtGO2QO3F9JiFcJD6nx+OCul95WS+Y+20MiXk0nfO+F+/sjJ+q8BjuqRyTEZ1TckCzVNhYHvOJjV+wzJgzq/91wfVeeQk+nvpes0bjAG338lIQs04ndq7Ze/vyHsnMwXx4bLKpCyFeltWngyP9rI3LN/Z78M7uZ3KdWvNaxCDCk1YgzCM7OTEgl56cyZvLkqrWE46XLr9erZntcoU5vMSzcVKjwvwjAMIFGIZIgQ+Du+B+w6nJdH1BAe+11cBZV1hoyaCGkauLztJw8VjjljedKlVDj2ks0Z195M67FwHRWFiITuEwz7x7MTzpOns3nZczgnP5uXckY2Qr1mZSHYXa9iQqr2zsaMvLg4ralF3o3JjzTybtnXuMIXRg+WbPJ+bvuBvGzak5W2NT6XFhaBkxqtUTOo0QvXP1PFgXGDoJ/T1GmOijSuf0erOJnJ1xEW/ttq57bXiDlE0+btH2fl/2YlXCqcyeKa0ur04EDyMlaF3CJWt0ZEKvzqe2oPOj4rt2bkx296UeaKy8q7yFK2CJIrBI1gI2vhAdp+rI765ZWlKdlcEnmwdgIjgccf2Sek4VxcjltktdYmpTXi/qOe8aPNHGpAowY57aINOVcPXKfG0QJbUepkIoyDQAPuA84ALevidWAM4KmP1+akRiccqRjqnD4aUeCZca4Jw+qKHaLs19lrjUNoowpp6mvqUUvvb7tGurlaC/Tr3LApHKMeG2kZrmfJJk/0h054ez8N6RF1qdCanVk3ZkiBBmgEx5jAMEvTY3j3qdPOv7Xdr5NXmy1Yl5IPd5++Idzb3NVZmTA877b/7KBZwNHa0w5gga45ldYa63d7/9a+ZTMVyJ4j3qDWVDZOITB8rFOcSOROefsicfXQ8LCdNcTWVPjd9zQViExf/BTWN4LOcKv1+EFfvlGdKqQEmU9YW4mpd8a5sFiHdOpcVEe9cSvWHSeTde8VDgNpV0OvDs0LUKE19KN3x059fkUhMqKWiGndVJv0HArqiWRa3FpJU9KyyvsT0ehMDuu5IFDskVus4YqkMnJRKJtA0PXZezTnPAHWHIqdojonV/c+cWRQBl0RdJ7sjRVpt9gEz1ulUQTt4NKBCQW9TYbB0dqmnbgpN4WdwaKQ/Pn8lKzRGgSNg8Hdg/L/X6uQpgIiwhciBdK57ecotPcU9itLFdLr8BltaURGGHFDHnnpqB1B1F0YVxT91/WrO+1wRF3bBlzHEDUOxIe0r0rFGQs37TM1tYWoXxk7+7hV6jww5xBJ6hJZNilrFwv5O4qoL4yNyK5Dcdl9uK7X6KsdlSk3Rl3Ou1TzdUzgtoNac+jkoPWIPLR0baRPx4AzCoivNL1qCgZ1DbpU4gfT4y61KRJu4hHar4Z/SFOXjq0CroFRTBWKoIhF+lWsjdZpPdVJu2Pobr3/UbbO92GdydcA++1/ecA1LpBCoYZAalXKxOERmagNArRQ316t9ZNe1zZN4Xp3DLoUDl3AYsGMyDdpRFj8GmVeXFS3sI80YG1pix43owocoNeOY5X+fN/CZ2g5H79EfrNAWRO4l95NyTsaGdAlefTzFXK1rtp205COLxSM370n5joSSzamnecCyzQ/3qor7dcP9DpQ7bSAhFB6qzjQkkSu+os/45GFE4WBH9LDr+1knxMngEEG1B0j4mHdBcLAOb90Q1iaErRyX1qSctHwYW119lMngXQK5xzcLSCvPlQtb3y7+lSLeYYWyEilJqhRonhto/UBxHHL4LBrozfkER2sRcCxzNOu1Rxd00FHr/Tr14uSgg0EsS6DVjD2g5qtzi2l6eJdo0JurQKRG+sod48Ju/WtM59+QBRCOoh7wLieC9SVyzWbwNjiOJ1aeVkBWvr4e9sa1CeZelOwi0FZI8hG7ZBgl2wIAQ+tPXt/lXaLclrw5qWjLvpgoQnrCD+anTrlMREx/uvlhDz2hZjcOy7iilT8WwdtT3ZRMc3VSZ614vwFgmIPXaTJoyOuW/SzeUntjugxV6a1DRrUtZCoq0PQnUHLthwbe8MApmsTYsLwsDw9pdKtS+TzPvXWfpf/v6jrRuiIAfzOFrRjb78mLP9+l6aA+7wFukoVNjpgKL4t4FyGFx6rwSMf9YGIjG7WNWr0aK9v0nOgIYICHR3D730pJh/uyTmn0V8jSiKVcwt3pb8/Bo/eIHV7/MuVrk78uydPSLqe0x3Q6IknKv7jbr9zgINVlMfVASAN7NYuoN1KHRvtVp3vc3JNTaDdqAe/I2UEBr+ksIN8RdTrBsGLbtNc/xltVSLk7zhY1wjR8sTaQETnHh4FXh5edJpGjmfneK3c4vD1VaNCVMHAlnod/AyeIt2ux4ZBFtc7sM6B72upXgttTKQS2MAbtQBWh7FI2a4m4LwhVrXRTUOUQ6oDgwFY2ISBohu0UQ0H0QAeEQXt4o1Z14otAq+LTgtW9OGtUfgWn0nD2MB7tq7S42nE2KeNjcdfS2qrOO2+B2CskOJkCjUB8nR89ryu+WB9CU2QZWqcG3bXn7RjDNC9wkbMLyxM1RtxcC4cO6zjsV+Ne52mYvgMbWosRrap9rv7COt9rtmRk8dnJFzNmCuZto3akYK4Efnw+ZsrvXtAZEAbd5523PYX5meXjjPGLZvz6bF9bizRAcRazLT5CTcORbCehroJjm3XoboXP0xX8SHuV5aWbx3Ed+U3jlwwqaL3jxwzl/daop/0qDu6WS114nz6Z1yjSG0TPgwKb4gCFMIrvQ4YYIsKrzlwIZ4NQ9u3OuYV7vDIaaM4hWhx3XhUBx29C/UENM6JSIR5Qypm/ZIlCB6NlhPJhl0chIfHbtA9q01des9rXVCBENLc4BuFhBhQIIQYUCCEGFAghBhQIIQYUCCEGFAghBhQIIQYUCCEGFAghBhQIIQY+FvEuAszIfXh3tispkAIqRc8aezv3IZZFiH1gbdZ/XgNlr/rgpCzwWYi/pFuv1dGEUJKaa/RY1gvDR7YqPlfPhsr+wZchDQHkE3hNV9sf4tNMnz5vPfi5rsb0+7d7VXbc25rGrwSe6lsvUJIOUEnFzvLoB4f1C3gdovBBhZ4FfiUQAghZ8O8ihADCoQQAwqEEAMKhBADCoQQAwqEEAMKhBADCoQQAwqEEAMKhBADCoQQAwqEEAMKhBADCoQQAwqEEAMKhBADCoQQAwqEEAMKhBADCoQQAwqEEAMKhBADCoQQAwqEEAMKhBADCoQQAwqEEAMKhBADCoQQAwqEEAMKhBADCoQQAwqEEAMKhBADCoQQAwqEEAMKhBADCoQQAwqEEAMKhBADCoQQAwqEEAMKhBADCoQQAwqEEAMKhBADCoQQAwqEEAMKhBADCoQQAwqEEAMKhBADCoQQAwqEEAMKhBADCoQQAwqEEAMKhBADCoQQAwqEEAMKhBADCoQQAwqEEAMKhBADCoQQAwqEEAMKhBADCoQQAwqEEAMKhBADCoQQAwqEEIM/AVP+BmTs2pk/AAAAAElFTkSuQmCC";
    }
  });

  // src/images/Autocomplete.png
  var Autocomplete_default;
  var init_Autocomplete = __esm({
    "src/images/Autocomplete.png"() {
      Autocomplete_default = "data:image/png;base64,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";
    }
  });

  // src/data.js
  var INPUT, DATADISPLAY, NAVIGATION, DATA;
  var init_data = __esm({
    "src/data.js"() {
      "use strict";
      init_Button();
      init_Autocomplete();
      INPUT = {
        name: "Input",
        children: [
          {
            name: "Autocomplete",
            figmaLink: "https://www.figma.com/file/DtsfadHWxtkdJIiGkih7U0/Design-System?type=design&node-id=50037-623016&mode=design&t=gjLJVWdj3ztgpDFn-4",
            storybookLink: "https://storybook-master.deel.wtf/?path=/story/components-inputs-button--contained",
            documentationLink: "https://www.figma.com/file/O4MvZHdnrMOA7QyHdTQyZe/Docs%3A-02-INPUTS?type=design&node-id=36228-389921&mode=design&t=xBsa3r48UZKJzlDV-4",
            imageSrc: Autocomplete_default
          },
          {
            name: "Button",
            figmaLink: "https://www.figma.com/file/DtsfadHWxtkdJIiGkih7U0/Design-System?type=design&node-id=50037-623016&mode=design&t=gjLJVWdj3ztgpDFn-4",
            storybookLink: "https://storybook-master.deel.wtf/?path=/story/components-inputs-button--contained",
            documentationLink: "https://www.figma.com/file/O4MvZHdnrMOA7QyHdTQyZe/Docs%3A-02-INPUTS?type=design&node-id=36228-389921&mode=design&t=xBsa3r48UZKJzlDV-4",
            imageSrc: Button_default
          },
          {
            name: "Action Group",
            figmaLink: "https://www.figma.com/file/DtsfadHWxtkdJIiGkih7U0/Design-System?type=design&node-id=50037-623016&mode=design&t=gjLJVWdj3ztgpDFn-4",
            storybookLink: "https://storybook-master.deel.wtf/?path=/story/components-inputs-button--contained",
            documentationLink: "https://www.figma.com/file/O4MvZHdnrMOA7QyHdTQyZe/Docs%3A-02-INPUTS?type=design&node-id=36228-389921&mode=design&t=xBsa3r48UZKJzlDV-4",
            imageSrc: Button_default
          },
          {
            name: "Button",
            figmaLink: "https://www.figma.com/file/DtsfadHWxtkdJIiGkih7U0/Design-System?type=design&node-id=50037-623016&mode=design&t=gjLJVWdj3ztgpDFn-4",
            storybookLink: "https://storybook-master.deel.wtf/?path=/story/components-inputs-button--contained",
            documentationLink: "https://www.figma.com/file/O4MvZHdnrMOA7QyHdTQyZe/Docs%3A-02-INPUTS?type=design&node-id=36228-389921&mode=design&t=xBsa3r48UZKJzlDV-4",
            imageSrc: Button_default
          },
          {
            name: "Button",
            figmaLink: "https://www.figma.com/file/DtsfadHWxtkdJIiGkih7U0/Design-System?type=design&node-id=50037-623016&mode=design&t=gjLJVWdj3ztgpDFn-4",
            storybookLink: "https://storybook-master.deel.wtf/?path=/story/components-inputs-button--contained",
            documentationLink: "https://www.figma.com/file/O4MvZHdnrMOA7QyHdTQyZe/Docs%3A-02-INPUTS?type=design&node-id=36228-389921&mode=design&t=xBsa3r48UZKJzlDV-4",
            imageSrc: Button_default
          }
        ]
      };
      DATADISPLAY = {
        name: "Data Display",
        children: [
          {
            name: "Button",
            figmaLink: "https://google.com",
            storybookLink: "https://google.com",
            documentationLink: "https://google.com",
            imageSrc: Button_default
          },
          {
            name: "Button",
            figmaLink: "https://google.com",
            storybookLink: "https://google.com",
            documentationLink: "https://google.com",
            imageSrc: Button_default
          },
          {
            name: "Button",
            figmaLink: "https://google.com",
            storybookLink: "https://google.com",
            documentationLink: "https://google.com",
            imageSrc: Button_default
          },
          {
            name: "Button",
            figmaLink: "https://google.com",
            storybookLink: "https://google.com",
            documentationLink: "https://google.com",
            imageSrc: Button_default
          },
          {
            name: "Button",
            figmaLink: "https://google.com",
            storybookLink: "https://google.com",
            documentationLink: "https://google.com",
            imageSrc: Button_default
          }
        ]
      };
      NAVIGATION = {
        name: "Navigation",
        children: [
          {
            name: "Button",
            figmaLink: "https://google.com",
            storybookLink: "https://google.com",
            documentationLink: "https://google.com",
            imageSrc: Button_default
          },
          {
            name: "Button",
            figmaLink: "https://google.com",
            storybookLink: "https://google.com",
            documentationLink: "https://google.com",
            imageSrc: Button_default
          },
          {
            name: "Button",
            figmaLink: "https://google.com",
            storybookLink: "https://google.com",
            documentationLink: "https://google.com",
            imageSrc: Button_default
          },
          {
            name: "Button",
            figmaLink: "https://google.com",
            storybookLink: "https://google.com",
            documentationLink: "https://google.com",
            imageSrc: Button_default
          },
          {
            name: "Button",
            figmaLink: "https://google.com",
            storybookLink: "https://google.com",
            documentationLink: "https://google.com",
            imageSrc: Button_default
          }
        ]
      };
      DATA = [INPUT, DATADISPLAY, NAVIGATION];
    }
  });

  // src/ui.jsx
  var ui_exports = {};
  __export(ui_exports, {
    default: () => ui_default
  });
  function Plugin() {
    return /* @__PURE__ */ y(Container, { space: "extraSmall" }, /* @__PURE__ */ y(VerticalSpace, { space: "extraSmall" }), DATA.map((section) => {
      return /* @__PURE__ */ y(_Section, { section });
    }), /* @__PURE__ */ y(VerticalSpace, { space: "extraSmall" }));
  }
  var ui_default;
  var init_ui = __esm({
    "src/ui.jsx"() {
      "use strict";
      init_lib();
      init_preact_module();
      init_Section();
      init_data();
      ui_default = render(Plugin);
    }
  });

  // <stdin>
  var rootNode = document.getElementById("create-figma-plugin");
  var modules = { "src/main.jsx--default": (init_ui(), __toCommonJS(ui_exports))["default"] };
  var commandId = __FIGMA_COMMAND__ === "" ? "src/main.jsx--default" : __FIGMA_COMMAND__;
  if (typeof modules[commandId] === "undefined") {
    throw new Error(
      "No UI defined for command `" + commandId + "`"
    );
  }
  modules[commandId](rootNode, __SHOW_UI_DATA__);
})();
