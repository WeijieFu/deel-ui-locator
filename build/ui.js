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

  // node_modules/@create-figma-plugin/ui/lib/utilities/create-class-name.js
  function createClassName(classNames) {
    return classNames.filter(function(className) {
      return className !== null;
    }).join(" ");
  }
  var init_create_class_name = __esm({
    "node_modules/@create-figma-plugin/ui/lib/utilities/create-class-name.js"() {
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

  // ../../../../../private/var/folders/q3/phj1q3716nq2zh1ttfzj02g80000gn/T/006d6366-0a16-4873-b6d3-7ebf2304ed2a/icon.module.js
  var icon_module_default;
  var init_icon_module = __esm({
    "../../../../../private/var/folders/q3/phj1q3716nq2zh1ttfzj02g80000gn/T/006d6366-0a16-4873-b6d3-7ebf2304ed2a/icon.module.js"() {
      if (document.getElementById("7de6ccef03") === null) {
        const element = document.createElement("style");
        element.id = "7de6ccef03";
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

  // ../../../../../private/var/folders/q3/phj1q3716nq2zh1ttfzj02g80000gn/T/511193d5-ee15-4b47-b34c-5f0a0df3d597/disclosure.module.js
  var disclosure_module_default;
  var init_disclosure_module = __esm({
    "../../../../../private/var/folders/q3/phj1q3716nq2zh1ttfzj02g80000gn/T/511193d5-ee15-4b47-b34c-5f0a0df3d597/disclosure.module.js"() {
      if (document.getElementById("02cd1665bc") === null) {
        const element = document.createElement("style");
        element.id = "02cd1665bc";
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

  // ../../../../../private/var/folders/q3/phj1q3716nq2zh1ttfzj02g80000gn/T/355fbf15-78e4-4b91-bf3e-cac603eff25e/text.module.js
  var text_module_default;
  var init_text_module = __esm({
    "../../../../../private/var/folders/q3/phj1q3716nq2zh1ttfzj02g80000gn/T/355fbf15-78e4-4b91-bf3e-cac603eff25e/text.module.js"() {
      if (document.getElementById("729f65f79c") === null) {
        const element = document.createElement("style");
        element.id = "729f65f79c";
        element.textContent = `._text_mh6mm_1 {
  padding-top: 1px;
  color: var(--figma-color-text);
  pointer-events: none;
  transform: translateY(4px);
}
._text_mh6mm_1:before {
  display: block;
  height: 0;
  margin-top: -9px;
  content: '';
  pointer-events: none;
}

._numeric_mh6mm_15 {
  font-variant-numeric: tabular-nums;
}

._left_mh6mm_19 {
  text-align: left;
}
._center_mh6mm_22 {
  text-align: center;
}
._right_mh6mm_25 {
  text-align: right;
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy90ZXh0L3RleHQubW9kdWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQiw4QkFBOEI7RUFDOUIsb0JBQW9CO0VBQ3BCLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsY0FBYztFQUNkLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoibm9kZV9tb2R1bGVzL0BjcmVhdGUtZmlnbWEtcGx1Z2luL3VpL2xpYi9jb21wb25lbnRzL3RleHQvdGV4dC5tb2R1bGUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQge1xuICBwYWRkaW5nLXRvcDogMXB4O1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dCk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcbn1cbi50ZXh0OmJlZm9yZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDA7XG4gIG1hcmdpbi10b3A6IC05cHg7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLm51bWVyaWMge1xuICBmb250LXZhcmlhbnQtbnVtZXJpYzogdGFidWxhci1udW1zO1xufVxuXG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4iXX0= */`;
        document.head.append(element);
      }
      text_module_default = { "text": "_text_mh6mm_1", "numeric": "_numeric_mh6mm_15", "left": "_left_mh6mm_19", "center": "_center_mh6mm_22", "right": "_right_mh6mm_25" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/text/text.js
  function Text(_a) {
    var _b = _a, { align = "left", children, numeric = false } = _b, rest = __objRest(_b, ["align", "children", "numeric"]);
    return y("div", __spreadProps(__spreadValues({}, rest), { class: createClassName([
      text_module_default.text,
      text_module_default[align],
      numeric === true ? text_module_default.numeric : null
    ]) }), children);
  }
  var init_text = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/text/text.js"() {
      init_preact_module();
      init_create_class_name();
      init_text_module();
    }
  });

  // ../../../../../private/var/folders/q3/phj1q3716nq2zh1ttfzj02g80000gn/T/43077929-6fea-40b5-ab1e-4fe146c070c8/stack.module.js
  var stack_module_default;
  var init_stack_module = __esm({
    "../../../../../private/var/folders/q3/phj1q3716nq2zh1ttfzj02g80000gn/T/43077929-6fea-40b5-ab1e-4fe146c070c8/stack.module.js"() {
      if (document.getElementById("12d8feb4a7") === null) {
        const element = document.createElement("style");
        element.id = "12d8feb4a7";
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

  // ../../../../../private/var/folders/q3/phj1q3716nq2zh1ttfzj02g80000gn/T/56b319df-58f4-4bc9-b202-6f4191d568ec/tabs.module.js
  var tabs_module_default;
  var init_tabs_module = __esm({
    "../../../../../private/var/folders/q3/phj1q3716nq2zh1ttfzj02g80000gn/T/56b319df-58f4-4bc9-b202-6f4191d568ec/tabs.module.js"() {
      if (document.getElementById("738847a2ac") === null) {
        const element = document.createElement("style");
        element.id = "738847a2ac";
        element.textContent = `._tabs_61qsz_1 {
  position: relative;
  z-index: var(--z-index-1);
  display: flex;
  padding-left: var(--space-extra-small);
  border-bottom: 1px solid var(--figma-color-border);
}

._label_61qsz_9 {
  padding: var(--space-small) var(--space-extra-small);
  color: var(--figma-color-text-secondary);
}
._label_61qsz_9:hover {
  color: var(--figma-color-text);
}

._input_61qsz_17 {
  display: block;
  width: 0;
  height: 0;
}

._input_61qsz_17:checked ~ ._value_61qsz_23 {
  color: var(--figma-color-text);
  font-weight: var(--font-weight-bold);
}

._children_61qsz_28 {
  color: var(--figma-color-text);
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy90YWJzL3RhYnMubW9kdWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxrREFBa0Q7QUFDcEQ7O0FBRUE7RUFDRSxvREFBb0Q7RUFDcEQsd0NBQXdDO0FBQzFDO0FBQ0E7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsUUFBUTtFQUNSLFNBQVM7QUFDWDs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEMiLCJmaWxlIjoibm9kZV9tb2R1bGVzL0BjcmVhdGUtZmlnbWEtcGx1Z2luL3VpL2xpYi9jb21wb25lbnRzL3RhYnMvdGFicy5tb2R1bGUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYnMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IHZhcigtLXotaW5kZXgtMSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmctbGVmdDogdmFyKC0tc3BhY2UtZXh0cmEtc21hbGwpO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyKTtcbn1cblxuLmxhYmVsIHtcbiAgcGFkZGluZzogdmFyKC0tc3BhY2Utc21hbGwpIHZhcigtLXNwYWNlLWV4dHJhLXNtYWxsKTtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQtc2Vjb25kYXJ5KTtcbn1cbi5sYWJlbDpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0KTtcbn1cblxuLmlucHV0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG59XG5cbi5pbnB1dDpjaGVja2VkIH4gLnZhbHVlIHtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQpO1xuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtYm9sZCk7XG59XG5cbi5jaGlsZHJlbiB7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0KTtcbn1cbiJdfQ== */`;
        document.head.append(element);
      }
      tabs_module_default = { "tabs": "_tabs_61qsz_1", "label": "_label_61qsz_9", "input": "_input_61qsz_17", "value": "_value_61qsz_23", "children": "_children_61qsz_28" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/tabs/tabs.js
  function Tabs(_a) {
    var _b = _a, { name, onChange = function() {
    }, onValueChange = function() {
    }, options, propagateEscapeKeyDown = true, value } = _b, rest = __objRest(_b, ["name", "onChange", "onValueChange", "options", "propagateEscapeKeyDown", "value"]);
    const handleChange = T2(function(event) {
      const id = event.currentTarget.getAttribute(ITEM_ID_DATA_ATTRIBUTE_NAME);
      const newValue = options[parseInt(id, 10)].value;
      onValueChange(newValue, name);
      onChange(event);
    }, [name, onChange, onValueChange, options]);
    const handleKeyDown = T2(function(event) {
      if (event.key !== "Escape") {
        return;
      }
      if (propagateEscapeKeyDown === false) {
        event.stopPropagation();
      }
      event.currentTarget.blur();
    }, [propagateEscapeKeyDown]);
    const activeOption = options.find(function(option) {
      return option.value === value;
    });
    return y(
      k,
      null,
      y("div", { class: tabs_module_default.tabs }, options.map(function(option, index) {
        return y(
          "label",
          { key: index, class: tabs_module_default.label },
          y("input", __spreadProps(__spreadValues({}, rest), { checked: value === option.value, class: tabs_module_default.input, name, onChange: handleChange, onKeyDown: handleKeyDown, tabIndex: 0, type: "radio", value: option.value, [ITEM_ID_DATA_ATTRIBUTE_NAME]: `${index}` })),
          y("div", { class: tabs_module_default.value }, option.value)
        );
      })),
      typeof activeOption === "undefined" ? null : y("div", { class: tabs_module_default.children }, activeOption.children)
    );
  }
  var ITEM_ID_DATA_ATTRIBUTE_NAME;
  var init_tabs = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/tabs/tabs.js"() {
      init_preact_module();
      init_hooks_module();
      init_tabs_module();
      ITEM_ID_DATA_ATTRIBUTE_NAME = "data-tabs-item-id";
    }
  });

  // node_modules/@create-figma-plugin/utilities/lib/events.js
  function invokeEventHandler(name, args) {
    let invoked = false;
    for (const id in eventHandlers) {
      if (eventHandlers[id].name === name) {
        eventHandlers[id].handler.apply(null, args);
        invoked = true;
      }
    }
    if (invoked === false) {
      throw new Error(`No event handler with name \`${name}\``);
    }
  }
  var eventHandlers, emit;
  var init_events = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/events.js"() {
      eventHandlers = {};
      emit = typeof window === "undefined" ? function(name, ...args) {
        figma.ui.postMessage([name, ...args]);
      } : function(name, ...args) {
        window.parent.postMessage({
          pluginMessage: [name, ...args]
        }, "*");
      };
      if (typeof window === "undefined") {
        figma.ui.onmessage = function(args) {
          if (!Array.isArray(args)) {
            return;
          }
          const [name, ...rest] = args;
          if (typeof name !== "string") {
            return;
          }
          invokeEventHandler(name, rest);
        };
      } else {
        window.onmessage = function(event) {
          if (typeof event.data.pluginMessage === "undefined") {
            return;
          }
          const args = event.data.pluginMessage;
          if (!Array.isArray(args)) {
            return;
          }
          const [name, ...rest] = event.data.pluginMessage;
          if (typeof name !== "string") {
            return;
          }
          invokeEventHandler(name, rest);
        };
      }
    }
  });

  // node_modules/@create-figma-plugin/utilities/lib/index.js
  var init_lib = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/index.js"() {
      init_events();
    }
  });

  // ../../../../../private/var/folders/q3/phj1q3716nq2zh1ttfzj02g80000gn/T/5274daea-5c0a-4845-a71a-8b15ba1f8eb3/container.module.js
  var container_module_default;
  var init_container_module = __esm({
    "../../../../../private/var/folders/q3/phj1q3716nq2zh1ttfzj02g80000gn/T/5274daea-5c0a-4845-a71a-8b15ba1f8eb3/container.module.js"() {
      if (document.getElementById("e1fc3e4553") === null) {
        const element = document.createElement("style");
        element.id = "e1fc3e4553";
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

  // ../../../../../private/var/folders/q3/phj1q3716nq2zh1ttfzj02g80000gn/T/e97dd016-7a16-414f-84dc-c86cc767f2b8/vertical-space.module.js
  var vertical_space_module_default;
  var init_vertical_space_module = __esm({
    "../../../../../private/var/folders/q3/phj1q3716nq2zh1ttfzj02g80000gn/T/e97dd016-7a16-414f-84dc-c86cc767f2b8/vertical-space.module.js"() {
      if (document.getElementById("ab07f39c21") === null) {
        const element = document.createElement("style");
        element.id = "ab07f39c21";
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

  // ../../../../../private/var/folders/q3/phj1q3716nq2zh1ttfzj02g80000gn/T/80fddd87-44fe-471b-b221-5bd67e98eba5/base.js
  var init_base = __esm({
    "../../../../../private/var/folders/q3/phj1q3716nq2zh1ttfzj02g80000gn/T/80fddd87-44fe-471b-b221-5bd67e98eba5/base.js"() {
      if (document.getElementById("8ec4ca419e") === null) {
        const element = document.createElement("style");
        element.id = "8ec4ca419e";
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
  var init_lib2 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/index.js"() {
      init_disclosure();
      init_tabs();
      init_text();
      init_container();
      init_stack();
      init_vertical_space();
      init_render();
    }
  });

  // ../../../../../private/var/folders/q3/phj1q3716nq2zh1ttfzj02g80000gn/T/45ef84bf-0e29-469e-a66d-fbf216965a18/styles.js
  var styles_default;
  var init_styles = __esm({
    "../../../../../private/var/folders/q3/phj1q3716nq2zh1ttfzj02g80000gn/T/45ef84bf-0e29-469e-a66d-fbf216965a18/styles.js"() {
      if (document.getElementById("ed07d7d4b2") === null) {
        const element = document.createElement("style");
        element.id = "ed07d7d4b2";
        element.textContent = `._boxesWrapper_1nnil_1{
    width: 100%;
    display: grid;

    grid-gap: 0.5rem;    
}

._box_1nnil_1 {
    border: #ddd 1px solid;
    padding: 0.5rem;
    border-radius: 4px;
    width: 100%;
    height: 134px;
    background-color: #fff;
    position: relative;
}

._boilerplate_1nnil_18{
    border: #ddd 1px solid;
    padding: 0.5rem;
    border-radius: 4px;
    width: 100%;
    height: 196px;
    background-color: #fff;
    position: relative;
}

._boilerplate_1nnil_18:hover ._title_1nnil_28,
._box_1nnil_1:hover ._title_1nnil_28{
    opacity: 0;
}

._boilerplate_1nnil_18:hover ._iconButtons_1nnil_33,
._box_1nnil_1:hover ._iconButtons_1nnil_33{
    display: flex;
}

._boilerplate_1nnil_18:hover ._description_1nnil_38{
    display: block;
}
._title_1nnil_28{
    font-size: 0.75rem;
    font-weight: 500;
    color: #555;
    height: 1rem;
    overflow: visible;
 
    position: absolute;
   top: 0.5rem;
}

._description_1nnil_38{
    display: none;
    width: 100%;
    height: 148px;
    position: absolute;
    color: #999;
    bottom: 0.25rem;
    background-color: #fff;
    width: calc(100% - 1rem);
    z-index: 10;
}

._thumbnailWrapper_1nnil_64{
    position: absolute;
    bottom: 0.5rem;
    width: calc(100% - 1rem);
    height: 88px;
    overflow: hidden;
    display: flex;
    align-items: center;
    z-index: 0;
}


._boilerplate_1nnil_18 ._thumbnailWrapper_1nnil_64{
    height: 154px;


}
._thumbnail_1nnil_64{
    width: 100%;

}
._iconButtons_1nnil_33{
    position: absolute;
    gap: 0.25rem;
    height: 2rem;
    overflow: hidden;
    display: none;
    background-color: #fff;
    top: 0.5rem;
    left: 0.5rem;
}
._iconButton_1nnil_33 {
    width: 1.6rem;
    height: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    cursor: pointer;
}
._iconButton_1nnil_33:hover {
    background-color: #E9E9E9;
}
._iconButton_1nnil_33 img{
    width: 1rem;
}
._link_1nnil_110{
    text-decoration: none;
}
._article_1nnil_113{
    font-size: 0.75rem;
    cursor: pointer;
    width: 100%;
    padding: 0.5rem;
    color: var(--figma-color-text);
    border-radius: 0.125rem;
    background-color: var(--figma-color-bg-secondary);
    text-decoration: none;
}


._article_1nnil_113:hover{
    background-color: var(--figma-color-border-disabled);
}


/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGFBQWE7O0lBRWIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLFVBQVU7QUFDZDs7QUFFQTs7SUFFSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjs7SUFFakIsa0JBQWtCO0dBQ25CLFdBQVc7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZUFBZTtJQUNmLHNCQUFzQjtJQUN0Qix3QkFBd0I7SUFDeEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDs7O0FBR0E7SUFDSSxhQUFhOzs7QUFHakI7QUFDQTtJQUNJLFdBQVc7O0FBRWY7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFdBQVc7SUFDWCxlQUFlO0lBQ2YsOEJBQThCO0lBQzlCLHVCQUF1QjtJQUN2QixpREFBaUQ7SUFDakQscUJBQXFCO0FBQ3pCOzs7QUFHQTtJQUNJLG9EQUFvRDtBQUN4RCIsImZpbGUiOiJzcmMvc3R5bGVzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3hlc1dyYXBwZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZ3JpZDtcblxuICAgIGdyaWQtZ2FwOiAwLjVyZW07ICAgIFxufVxuXG4uYm94IHtcbiAgICBib3JkZXI6ICNkZGQgMXB4IHNvbGlkO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMzRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmJvaWxlcnBsYXRle1xuICAgIGJvcmRlcjogI2RkZCAxcHggc29saWQ7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDE5NnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYm9pbGVycGxhdGU6aG92ZXIgLnRpdGxlLFxuLmJveDpob3ZlciAudGl0bGV7XG4gICAgb3BhY2l0eTogMDtcbn1cblxuLmJvaWxlcnBsYXRlOmhvdmVyIC5pY29uQnV0dG9ucyxcbi5ib3g6aG92ZXIgLmljb25CdXR0b25ze1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5ib2lsZXJwbGF0ZTpob3ZlciAuZGVzY3JpcHRpb257XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4udGl0bGV7XG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICM1NTU7XG4gICAgaGVpZ2h0OiAxcmVtO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuIFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgIHRvcDogMC41cmVtO1xufVxuXG4uZGVzY3JpcHRpb257XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDE0OHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb2xvcjogIzk5OTtcbiAgICBib3R0b206IDAuMjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMXJlbSk7XG4gICAgei1pbmRleDogMTA7XG59XG5cbi50aHVtYm5haWxXcmFwcGVye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDAuNXJlbTtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMXJlbSk7XG4gICAgaGVpZ2h0OiA4OHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHotaW5kZXg6IDA7XG59XG5cblxuLmJvaWxlcnBsYXRlIC50aHVtYm5haWxXcmFwcGVye1xuICAgIGhlaWdodDogMTU0cHg7XG5cblxufVxuLnRodW1ibmFpbHtcbiAgICB3aWR0aDogMTAwJTtcblxufVxuLmljb25CdXR0b25ze1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBnYXA6IDAuMjVyZW07XG4gICAgaGVpZ2h0OiAycmVtO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHRvcDogMC41cmVtO1xuICAgIGxlZnQ6IDAuNXJlbTtcbn1cbi5pY29uQnV0dG9uIHtcbiAgICB3aWR0aDogMS42cmVtO1xuICAgIGhlaWdodDogMS42cmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmljb25CdXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFOUU5RTk7XG59XG4uaWNvbkJ1dHRvbiBpbWd7XG4gICAgd2lkdGg6IDFyZW07XG59XG4ubGlua3tcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uYXJ0aWNsZXtcbiAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dCk7XG4gICAgYm9yZGVyLXJhZGl1czogMC4xMjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYmctc2Vjb25kYXJ5KTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cblxuLmFydGljbGU6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyLWRpc2FibGVkKTtcbn1cblxuIl19 */`;
        document.head.append(element);
      }
      styles_default = { "boxesWrapper": "_boxesWrapper_1nnil_1", "box": "_box_1nnil_1", "boilerplate": "_boilerplate_1nnil_18", "title": "_title_1nnil_28", "iconButtons": "_iconButtons_1nnil_33", "description": "_description_1nnil_38", "thumbnailWrapper": "_thumbnailWrapper_1nnil_64", "thumbnail": "_thumbnail_1nnil_64", "iconButton": "_iconButton_1nnil_33", "link": "_link_1nnil_110", "article": "_article_1nnil_113" };
    }
  });

  // ../../../../../private/var/folders/q3/phj1q3716nq2zh1ttfzj02g80000gn/T/9d22aaa8-2fd6-4ca6-b188-9b3394602a29/styles.js
  var styles_default2;
  var init_styles2 = __esm({
    "../../../../../private/var/folders/q3/phj1q3716nq2zh1ttfzj02g80000gn/T/9d22aaa8-2fd6-4ca6-b188-9b3394602a29/styles.js"() {
      if (document.getElementById("ed07d7d4b2") === null) {
        const element = document.createElement("style");
        element.id = "ed07d7d4b2";
        element.textContent = `._boxesWrapper_1nnil_1{
    width: 100%;
    display: grid;

    grid-gap: 0.5rem;    
}

._box_1nnil_1 {
    border: #ddd 1px solid;
    padding: 0.5rem;
    border-radius: 4px;
    width: 100%;
    height: 134px;
    background-color: #fff;
    position: relative;
}

._boilerplate_1nnil_18{
    border: #ddd 1px solid;
    padding: 0.5rem;
    border-radius: 4px;
    width: 100%;
    height: 196px;
    background-color: #fff;
    position: relative;
}

._boilerplate_1nnil_18:hover ._title_1nnil_28,
._box_1nnil_1:hover ._title_1nnil_28{
    opacity: 0;
}

._boilerplate_1nnil_18:hover ._iconButtons_1nnil_33,
._box_1nnil_1:hover ._iconButtons_1nnil_33{
    display: flex;
}

._boilerplate_1nnil_18:hover ._description_1nnil_38{
    display: block;
}
._title_1nnil_28{
    font-size: 0.75rem;
    font-weight: 500;
    color: #555;
    height: 1rem;
    overflow: visible;
 
    position: absolute;
   top: 0.5rem;
}

._description_1nnil_38{
    display: none;
    width: 100%;
    height: 148px;
    position: absolute;
    color: #999;
    bottom: 0.25rem;
    background-color: #fff;
    width: calc(100% - 1rem);
    z-index: 10;
}

._thumbnailWrapper_1nnil_64{
    position: absolute;
    bottom: 0.5rem;
    width: calc(100% - 1rem);
    height: 88px;
    overflow: hidden;
    display: flex;
    align-items: center;
    z-index: 0;
}


._boilerplate_1nnil_18 ._thumbnailWrapper_1nnil_64{
    height: 154px;


}
._thumbnail_1nnil_64{
    width: 100%;

}
._iconButtons_1nnil_33{
    position: absolute;
    gap: 0.25rem;
    height: 2rem;
    overflow: hidden;
    display: none;
    background-color: #fff;
    top: 0.5rem;
    left: 0.5rem;
}
._iconButton_1nnil_33 {
    width: 1.6rem;
    height: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    cursor: pointer;
}
._iconButton_1nnil_33:hover {
    background-color: #E9E9E9;
}
._iconButton_1nnil_33 img{
    width: 1rem;
}
._link_1nnil_110{
    text-decoration: none;
}
._article_1nnil_113{
    font-size: 0.75rem;
    cursor: pointer;
    width: 100%;
    padding: 0.5rem;
    color: var(--figma-color-text);
    border-radius: 0.125rem;
    background-color: var(--figma-color-bg-secondary);
    text-decoration: none;
}


._article_1nnil_113:hover{
    background-color: var(--figma-color-border-disabled);
}


/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGFBQWE7O0lBRWIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLFVBQVU7QUFDZDs7QUFFQTs7SUFFSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjs7SUFFakIsa0JBQWtCO0dBQ25CLFdBQVc7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZUFBZTtJQUNmLHNCQUFzQjtJQUN0Qix3QkFBd0I7SUFDeEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDs7O0FBR0E7SUFDSSxhQUFhOzs7QUFHakI7QUFDQTtJQUNJLFdBQVc7O0FBRWY7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFdBQVc7SUFDWCxlQUFlO0lBQ2YsOEJBQThCO0lBQzlCLHVCQUF1QjtJQUN2QixpREFBaUQ7SUFDakQscUJBQXFCO0FBQ3pCOzs7QUFHQTtJQUNJLG9EQUFvRDtBQUN4RCIsImZpbGUiOiJzcmMvc3R5bGVzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3hlc1dyYXBwZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZ3JpZDtcblxuICAgIGdyaWQtZ2FwOiAwLjVyZW07ICAgIFxufVxuXG4uYm94IHtcbiAgICBib3JkZXI6ICNkZGQgMXB4IHNvbGlkO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMzRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmJvaWxlcnBsYXRle1xuICAgIGJvcmRlcjogI2RkZCAxcHggc29saWQ7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDE5NnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYm9pbGVycGxhdGU6aG92ZXIgLnRpdGxlLFxuLmJveDpob3ZlciAudGl0bGV7XG4gICAgb3BhY2l0eTogMDtcbn1cblxuLmJvaWxlcnBsYXRlOmhvdmVyIC5pY29uQnV0dG9ucyxcbi5ib3g6aG92ZXIgLmljb25CdXR0b25ze1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5ib2lsZXJwbGF0ZTpob3ZlciAuZGVzY3JpcHRpb257XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4udGl0bGV7XG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICM1NTU7XG4gICAgaGVpZ2h0OiAxcmVtO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuIFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgIHRvcDogMC41cmVtO1xufVxuXG4uZGVzY3JpcHRpb257XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDE0OHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb2xvcjogIzk5OTtcbiAgICBib3R0b206IDAuMjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMXJlbSk7XG4gICAgei1pbmRleDogMTA7XG59XG5cbi50aHVtYm5haWxXcmFwcGVye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDAuNXJlbTtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMXJlbSk7XG4gICAgaGVpZ2h0OiA4OHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHotaW5kZXg6IDA7XG59XG5cblxuLmJvaWxlcnBsYXRlIC50aHVtYm5haWxXcmFwcGVye1xuICAgIGhlaWdodDogMTU0cHg7XG5cblxufVxuLnRodW1ibmFpbHtcbiAgICB3aWR0aDogMTAwJTtcblxufVxuLmljb25CdXR0b25ze1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBnYXA6IDAuMjVyZW07XG4gICAgaGVpZ2h0OiAycmVtO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHRvcDogMC41cmVtO1xuICAgIGxlZnQ6IDAuNXJlbTtcbn1cbi5pY29uQnV0dG9uIHtcbiAgICB3aWR0aDogMS42cmVtO1xuICAgIGhlaWdodDogMS42cmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmljb25CdXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFOUU5RTk7XG59XG4uaWNvbkJ1dHRvbiBpbWd7XG4gICAgd2lkdGg6IDFyZW07XG59XG4ubGlua3tcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uYXJ0aWNsZXtcbiAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dCk7XG4gICAgYm9yZGVyLXJhZGl1czogMC4xMjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYmctc2Vjb25kYXJ5KTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cblxuLmFydGljbGU6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyLWRpc2FibGVkKTtcbn1cblxuIl19 */`;
        document.head.append(element);
      }
      styles_default2 = { "boxesWrapper": "_boxesWrapper_1nnil_1", "box": "_box_1nnil_1", "boilerplate": "_boilerplate_1nnil_18", "title": "_title_1nnil_28", "iconButtons": "_iconButtons_1nnil_33", "description": "_description_1nnil_38", "thumbnailWrapper": "_thumbnailWrapper_1nnil_64", "thumbnail": "_thumbnail_1nnil_64", "iconButton": "_iconButton_1nnil_33", "link": "_link_1nnil_110", "article": "_article_1nnil_113" };
    }
  });

  // ../../../../../private/var/folders/q3/phj1q3716nq2zh1ttfzj02g80000gn/T/2125af34-f4b0-4fbf-b889-c1b57f115c9f/styles.js
  var styles_default3;
  var init_styles3 = __esm({
    "../../../../../private/var/folders/q3/phj1q3716nq2zh1ttfzj02g80000gn/T/2125af34-f4b0-4fbf-b889-c1b57f115c9f/styles.js"() {
      if (document.getElementById("ed07d7d4b2") === null) {
        const element = document.createElement("style");
        element.id = "ed07d7d4b2";
        element.textContent = `._boxesWrapper_1nnil_1{
    width: 100%;
    display: grid;

    grid-gap: 0.5rem;    
}

._box_1nnil_1 {
    border: #ddd 1px solid;
    padding: 0.5rem;
    border-radius: 4px;
    width: 100%;
    height: 134px;
    background-color: #fff;
    position: relative;
}

._boilerplate_1nnil_18{
    border: #ddd 1px solid;
    padding: 0.5rem;
    border-radius: 4px;
    width: 100%;
    height: 196px;
    background-color: #fff;
    position: relative;
}

._boilerplate_1nnil_18:hover ._title_1nnil_28,
._box_1nnil_1:hover ._title_1nnil_28{
    opacity: 0;
}

._boilerplate_1nnil_18:hover ._iconButtons_1nnil_33,
._box_1nnil_1:hover ._iconButtons_1nnil_33{
    display: flex;
}

._boilerplate_1nnil_18:hover ._description_1nnil_38{
    display: block;
}
._title_1nnil_28{
    font-size: 0.75rem;
    font-weight: 500;
    color: #555;
    height: 1rem;
    overflow: visible;
 
    position: absolute;
   top: 0.5rem;
}

._description_1nnil_38{
    display: none;
    width: 100%;
    height: 148px;
    position: absolute;
    color: #999;
    bottom: 0.25rem;
    background-color: #fff;
    width: calc(100% - 1rem);
    z-index: 10;
}

._thumbnailWrapper_1nnil_64{
    position: absolute;
    bottom: 0.5rem;
    width: calc(100% - 1rem);
    height: 88px;
    overflow: hidden;
    display: flex;
    align-items: center;
    z-index: 0;
}


._boilerplate_1nnil_18 ._thumbnailWrapper_1nnil_64{
    height: 154px;


}
._thumbnail_1nnil_64{
    width: 100%;

}
._iconButtons_1nnil_33{
    position: absolute;
    gap: 0.25rem;
    height: 2rem;
    overflow: hidden;
    display: none;
    background-color: #fff;
    top: 0.5rem;
    left: 0.5rem;
}
._iconButton_1nnil_33 {
    width: 1.6rem;
    height: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    cursor: pointer;
}
._iconButton_1nnil_33:hover {
    background-color: #E9E9E9;
}
._iconButton_1nnil_33 img{
    width: 1rem;
}
._link_1nnil_110{
    text-decoration: none;
}
._article_1nnil_113{
    font-size: 0.75rem;
    cursor: pointer;
    width: 100%;
    padding: 0.5rem;
    color: var(--figma-color-text);
    border-radius: 0.125rem;
    background-color: var(--figma-color-bg-secondary);
    text-decoration: none;
}


._article_1nnil_113:hover{
    background-color: var(--figma-color-border-disabled);
}


/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGFBQWE7O0lBRWIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLFVBQVU7QUFDZDs7QUFFQTs7SUFFSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjs7SUFFakIsa0JBQWtCO0dBQ25CLFdBQVc7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZUFBZTtJQUNmLHNCQUFzQjtJQUN0Qix3QkFBd0I7SUFDeEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDs7O0FBR0E7SUFDSSxhQUFhOzs7QUFHakI7QUFDQTtJQUNJLFdBQVc7O0FBRWY7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFdBQVc7SUFDWCxlQUFlO0lBQ2YsOEJBQThCO0lBQzlCLHVCQUF1QjtJQUN2QixpREFBaUQ7SUFDakQscUJBQXFCO0FBQ3pCOzs7QUFHQTtJQUNJLG9EQUFvRDtBQUN4RCIsImZpbGUiOiJzcmMvc3R5bGVzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3hlc1dyYXBwZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZ3JpZDtcblxuICAgIGdyaWQtZ2FwOiAwLjVyZW07ICAgIFxufVxuXG4uYm94IHtcbiAgICBib3JkZXI6ICNkZGQgMXB4IHNvbGlkO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMzRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmJvaWxlcnBsYXRle1xuICAgIGJvcmRlcjogI2RkZCAxcHggc29saWQ7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDE5NnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYm9pbGVycGxhdGU6aG92ZXIgLnRpdGxlLFxuLmJveDpob3ZlciAudGl0bGV7XG4gICAgb3BhY2l0eTogMDtcbn1cblxuLmJvaWxlcnBsYXRlOmhvdmVyIC5pY29uQnV0dG9ucyxcbi5ib3g6aG92ZXIgLmljb25CdXR0b25ze1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5ib2lsZXJwbGF0ZTpob3ZlciAuZGVzY3JpcHRpb257XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4udGl0bGV7XG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICM1NTU7XG4gICAgaGVpZ2h0OiAxcmVtO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuIFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgIHRvcDogMC41cmVtO1xufVxuXG4uZGVzY3JpcHRpb257XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDE0OHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb2xvcjogIzk5OTtcbiAgICBib3R0b206IDAuMjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMXJlbSk7XG4gICAgei1pbmRleDogMTA7XG59XG5cbi50aHVtYm5haWxXcmFwcGVye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDAuNXJlbTtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMXJlbSk7XG4gICAgaGVpZ2h0OiA4OHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHotaW5kZXg6IDA7XG59XG5cblxuLmJvaWxlcnBsYXRlIC50aHVtYm5haWxXcmFwcGVye1xuICAgIGhlaWdodDogMTU0cHg7XG5cblxufVxuLnRodW1ibmFpbHtcbiAgICB3aWR0aDogMTAwJTtcblxufVxuLmljb25CdXR0b25ze1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBnYXA6IDAuMjVyZW07XG4gICAgaGVpZ2h0OiAycmVtO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHRvcDogMC41cmVtO1xuICAgIGxlZnQ6IDAuNXJlbTtcbn1cbi5pY29uQnV0dG9uIHtcbiAgICB3aWR0aDogMS42cmVtO1xuICAgIGhlaWdodDogMS42cmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmljb25CdXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFOUU5RTk7XG59XG4uaWNvbkJ1dHRvbiBpbWd7XG4gICAgd2lkdGg6IDFyZW07XG59XG4ubGlua3tcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uYXJ0aWNsZXtcbiAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dCk7XG4gICAgYm9yZGVyLXJhZGl1czogMC4xMjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYmctc2Vjb25kYXJ5KTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cblxuLmFydGljbGU6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyLWRpc2FibGVkKTtcbn1cblxuIl19 */`;
        document.head.append(element);
      }
      styles_default3 = { "boxesWrapper": "_boxesWrapper_1nnil_1", "box": "_box_1nnil_1", "boilerplate": "_boilerplate_1nnil_18", "title": "_title_1nnil_28", "iconButtons": "_iconButtons_1nnil_33", "description": "_description_1nnil_38", "thumbnailWrapper": "_thumbnailWrapper_1nnil_64", "thumbnail": "_thumbnail_1nnil_64", "iconButton": "_iconButton_1nnil_33", "link": "_link_1nnil_110", "article": "_article_1nnil_113" };
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
      init_lib2();
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

  // ../../../../../private/var/folders/q3/phj1q3716nq2zh1ttfzj02g80000gn/T/f746b274-f1d6-48e8-9ea0-3a07c6394272/styles.js
  var styles_default4;
  var init_styles4 = __esm({
    "../../../../../private/var/folders/q3/phj1q3716nq2zh1ttfzj02g80000gn/T/f746b274-f1d6-48e8-9ea0-3a07c6394272/styles.js"() {
      if (document.getElementById("ed07d7d4b2") === null) {
        const element = document.createElement("style");
        element.id = "ed07d7d4b2";
        element.textContent = `._boxesWrapper_1nnil_1{
    width: 100%;
    display: grid;

    grid-gap: 0.5rem;    
}

._box_1nnil_1 {
    border: #ddd 1px solid;
    padding: 0.5rem;
    border-radius: 4px;
    width: 100%;
    height: 134px;
    background-color: #fff;
    position: relative;
}

._boilerplate_1nnil_18{
    border: #ddd 1px solid;
    padding: 0.5rem;
    border-radius: 4px;
    width: 100%;
    height: 196px;
    background-color: #fff;
    position: relative;
}

._boilerplate_1nnil_18:hover ._title_1nnil_28,
._box_1nnil_1:hover ._title_1nnil_28{
    opacity: 0;
}

._boilerplate_1nnil_18:hover ._iconButtons_1nnil_33,
._box_1nnil_1:hover ._iconButtons_1nnil_33{
    display: flex;
}

._boilerplate_1nnil_18:hover ._description_1nnil_38{
    display: block;
}
._title_1nnil_28{
    font-size: 0.75rem;
    font-weight: 500;
    color: #555;
    height: 1rem;
    overflow: visible;
 
    position: absolute;
   top: 0.5rem;
}

._description_1nnil_38{
    display: none;
    width: 100%;
    height: 148px;
    position: absolute;
    color: #999;
    bottom: 0.25rem;
    background-color: #fff;
    width: calc(100% - 1rem);
    z-index: 10;
}

._thumbnailWrapper_1nnil_64{
    position: absolute;
    bottom: 0.5rem;
    width: calc(100% - 1rem);
    height: 88px;
    overflow: hidden;
    display: flex;
    align-items: center;
    z-index: 0;
}


._boilerplate_1nnil_18 ._thumbnailWrapper_1nnil_64{
    height: 154px;


}
._thumbnail_1nnil_64{
    width: 100%;

}
._iconButtons_1nnil_33{
    position: absolute;
    gap: 0.25rem;
    height: 2rem;
    overflow: hidden;
    display: none;
    background-color: #fff;
    top: 0.5rem;
    left: 0.5rem;
}
._iconButton_1nnil_33 {
    width: 1.6rem;
    height: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    cursor: pointer;
}
._iconButton_1nnil_33:hover {
    background-color: #E9E9E9;
}
._iconButton_1nnil_33 img{
    width: 1rem;
}
._link_1nnil_110{
    text-decoration: none;
}
._article_1nnil_113{
    font-size: 0.75rem;
    cursor: pointer;
    width: 100%;
    padding: 0.5rem;
    color: var(--figma-color-text);
    border-radius: 0.125rem;
    background-color: var(--figma-color-bg-secondary);
    text-decoration: none;
}


._article_1nnil_113:hover{
    background-color: var(--figma-color-border-disabled);
}


/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGFBQWE7O0lBRWIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLFVBQVU7QUFDZDs7QUFFQTs7SUFFSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjs7SUFFakIsa0JBQWtCO0dBQ25CLFdBQVc7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZUFBZTtJQUNmLHNCQUFzQjtJQUN0Qix3QkFBd0I7SUFDeEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDs7O0FBR0E7SUFDSSxhQUFhOzs7QUFHakI7QUFDQTtJQUNJLFdBQVc7O0FBRWY7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFdBQVc7SUFDWCxlQUFlO0lBQ2YsOEJBQThCO0lBQzlCLHVCQUF1QjtJQUN2QixpREFBaUQ7SUFDakQscUJBQXFCO0FBQ3pCOzs7QUFHQTtJQUNJLG9EQUFvRDtBQUN4RCIsImZpbGUiOiJzcmMvc3R5bGVzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3hlc1dyYXBwZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZ3JpZDtcblxuICAgIGdyaWQtZ2FwOiAwLjVyZW07ICAgIFxufVxuXG4uYm94IHtcbiAgICBib3JkZXI6ICNkZGQgMXB4IHNvbGlkO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMzRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmJvaWxlcnBsYXRle1xuICAgIGJvcmRlcjogI2RkZCAxcHggc29saWQ7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDE5NnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYm9pbGVycGxhdGU6aG92ZXIgLnRpdGxlLFxuLmJveDpob3ZlciAudGl0bGV7XG4gICAgb3BhY2l0eTogMDtcbn1cblxuLmJvaWxlcnBsYXRlOmhvdmVyIC5pY29uQnV0dG9ucyxcbi5ib3g6aG92ZXIgLmljb25CdXR0b25ze1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5ib2lsZXJwbGF0ZTpob3ZlciAuZGVzY3JpcHRpb257XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4udGl0bGV7XG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICM1NTU7XG4gICAgaGVpZ2h0OiAxcmVtO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuIFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgIHRvcDogMC41cmVtO1xufVxuXG4uZGVzY3JpcHRpb257XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDE0OHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb2xvcjogIzk5OTtcbiAgICBib3R0b206IDAuMjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMXJlbSk7XG4gICAgei1pbmRleDogMTA7XG59XG5cbi50aHVtYm5haWxXcmFwcGVye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDAuNXJlbTtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMXJlbSk7XG4gICAgaGVpZ2h0OiA4OHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHotaW5kZXg6IDA7XG59XG5cblxuLmJvaWxlcnBsYXRlIC50aHVtYm5haWxXcmFwcGVye1xuICAgIGhlaWdodDogMTU0cHg7XG5cblxufVxuLnRodW1ibmFpbHtcbiAgICB3aWR0aDogMTAwJTtcblxufVxuLmljb25CdXR0b25ze1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBnYXA6IDAuMjVyZW07XG4gICAgaGVpZ2h0OiAycmVtO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHRvcDogMC41cmVtO1xuICAgIGxlZnQ6IDAuNXJlbTtcbn1cbi5pY29uQnV0dG9uIHtcbiAgICB3aWR0aDogMS42cmVtO1xuICAgIGhlaWdodDogMS42cmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmljb25CdXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFOUU5RTk7XG59XG4uaWNvbkJ1dHRvbiBpbWd7XG4gICAgd2lkdGg6IDFyZW07XG59XG4ubGlua3tcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uYXJ0aWNsZXtcbiAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dCk7XG4gICAgYm9yZGVyLXJhZGl1czogMC4xMjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYmctc2Vjb25kYXJ5KTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cblxuLmFydGljbGU6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyLWRpc2FibGVkKTtcbn1cblxuIl19 */`;
        document.head.append(element);
      }
      styles_default4 = { "boxesWrapper": "_boxesWrapper_1nnil_1", "box": "_box_1nnil_1", "boilerplate": "_boilerplate_1nnil_18", "title": "_title_1nnil_28", "iconButtons": "_iconButtons_1nnil_33", "description": "_description_1nnil_38", "thumbnailWrapper": "_thumbnailWrapper_1nnil_64", "thumbnail": "_thumbnail_1nnil_64", "iconButton": "_iconButton_1nnil_33", "link": "_link_1nnil_110", "article": "_article_1nnil_113" };
    }
  });

  // src/icons/add.svg
  var add_default;
  var init_add = __esm({
    "src/icons/add.svg"() {
      add_default = 'data:image/svg+xml,<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">%0A<path d="M11 19V13H5V11H11V5H13V11H19V13H13V19H11Z" fill="black"/>%0A</svg>%0A';
    }
  });

  // src/components/_BoilerPlate.jsx
  var _BoilerPlate;
  var init_BoilerPlate = __esm({
    "src/components/_BoilerPlate.jsx"() {
      "use strict";
      init_lib2();
      init_styles4();
      init_preact_module();
      init_IconButton();
      init_figma();
      init_add();
      init_lib();
      _BoilerPlate = ({ comp }) => {
        const handleAddBoilerplate = () => {
          emit("ADDBOILERPLATE", comp.componentKey);
        };
        return /* @__PURE__ */ y("div", { class: `${styles_default4.boilerplate}` }, /* @__PURE__ */ y(Stack, { space: "extraSmall" }, /* @__PURE__ */ y("div", { class: styles_default4.title }, comp.name), /* @__PURE__ */ y("div", { className: styles_default4.description }, comp.description), /* @__PURE__ */ y("div", { class: [styles_default4.iconButtons] }, /* @__PURE__ */ y(
          _IconButton,
          {
            src: figma_default,
            url: comp.figmaLink
          }
        ), /* @__PURE__ */ y(
          "div",
          {
            class: styles_default4.iconButton,
            onClick: handleAddBoilerplate
          },
          /* @__PURE__ */ y("img", { src: add_default })
        )), /* @__PURE__ */ y("div", { className: styles_default4.thumbnailWrapper }, /* @__PURE__ */ y(
          "img",
          {
            class: styles_default4.thumbnail,
            src: comp.imageSrc
          }
        ))));
      };
    }
  });

  // ../../../../../private/var/folders/q3/phj1q3716nq2zh1ttfzj02g80000gn/T/f9d74aba-81da-42ff-bb18-4085d50b6679/styles.js
  var styles_default5;
  var init_styles5 = __esm({
    "../../../../../private/var/folders/q3/phj1q3716nq2zh1ttfzj02g80000gn/T/f9d74aba-81da-42ff-bb18-4085d50b6679/styles.js"() {
      if (document.getElementById("ed07d7d4b2") === null) {
        const element = document.createElement("style");
        element.id = "ed07d7d4b2";
        element.textContent = `._boxesWrapper_1nnil_1{
    width: 100%;
    display: grid;

    grid-gap: 0.5rem;    
}

._box_1nnil_1 {
    border: #ddd 1px solid;
    padding: 0.5rem;
    border-radius: 4px;
    width: 100%;
    height: 134px;
    background-color: #fff;
    position: relative;
}

._boilerplate_1nnil_18{
    border: #ddd 1px solid;
    padding: 0.5rem;
    border-radius: 4px;
    width: 100%;
    height: 196px;
    background-color: #fff;
    position: relative;
}

._boilerplate_1nnil_18:hover ._title_1nnil_28,
._box_1nnil_1:hover ._title_1nnil_28{
    opacity: 0;
}

._boilerplate_1nnil_18:hover ._iconButtons_1nnil_33,
._box_1nnil_1:hover ._iconButtons_1nnil_33{
    display: flex;
}

._boilerplate_1nnil_18:hover ._description_1nnil_38{
    display: block;
}
._title_1nnil_28{
    font-size: 0.75rem;
    font-weight: 500;
    color: #555;
    height: 1rem;
    overflow: visible;
 
    position: absolute;
   top: 0.5rem;
}

._description_1nnil_38{
    display: none;
    width: 100%;
    height: 148px;
    position: absolute;
    color: #999;
    bottom: 0.25rem;
    background-color: #fff;
    width: calc(100% - 1rem);
    z-index: 10;
}

._thumbnailWrapper_1nnil_64{
    position: absolute;
    bottom: 0.5rem;
    width: calc(100% - 1rem);
    height: 88px;
    overflow: hidden;
    display: flex;
    align-items: center;
    z-index: 0;
}


._boilerplate_1nnil_18 ._thumbnailWrapper_1nnil_64{
    height: 154px;


}
._thumbnail_1nnil_64{
    width: 100%;

}
._iconButtons_1nnil_33{
    position: absolute;
    gap: 0.25rem;
    height: 2rem;
    overflow: hidden;
    display: none;
    background-color: #fff;
    top: 0.5rem;
    left: 0.5rem;
}
._iconButton_1nnil_33 {
    width: 1.6rem;
    height: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    cursor: pointer;
}
._iconButton_1nnil_33:hover {
    background-color: #E9E9E9;
}
._iconButton_1nnil_33 img{
    width: 1rem;
}
._link_1nnil_110{
    text-decoration: none;
}
._article_1nnil_113{
    font-size: 0.75rem;
    cursor: pointer;
    width: 100%;
    padding: 0.5rem;
    color: var(--figma-color-text);
    border-radius: 0.125rem;
    background-color: var(--figma-color-bg-secondary);
    text-decoration: none;
}


._article_1nnil_113:hover{
    background-color: var(--figma-color-border-disabled);
}


/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGFBQWE7O0lBRWIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLFVBQVU7QUFDZDs7QUFFQTs7SUFFSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjs7SUFFakIsa0JBQWtCO0dBQ25CLFdBQVc7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZUFBZTtJQUNmLHNCQUFzQjtJQUN0Qix3QkFBd0I7SUFDeEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDs7O0FBR0E7SUFDSSxhQUFhOzs7QUFHakI7QUFDQTtJQUNJLFdBQVc7O0FBRWY7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFdBQVc7SUFDWCxlQUFlO0lBQ2YsOEJBQThCO0lBQzlCLHVCQUF1QjtJQUN2QixpREFBaUQ7SUFDakQscUJBQXFCO0FBQ3pCOzs7QUFHQTtJQUNJLG9EQUFvRDtBQUN4RCIsImZpbGUiOiJzcmMvc3R5bGVzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3hlc1dyYXBwZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZ3JpZDtcblxuICAgIGdyaWQtZ2FwOiAwLjVyZW07ICAgIFxufVxuXG4uYm94IHtcbiAgICBib3JkZXI6ICNkZGQgMXB4IHNvbGlkO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMzRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmJvaWxlcnBsYXRle1xuICAgIGJvcmRlcjogI2RkZCAxcHggc29saWQ7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDE5NnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYm9pbGVycGxhdGU6aG92ZXIgLnRpdGxlLFxuLmJveDpob3ZlciAudGl0bGV7XG4gICAgb3BhY2l0eTogMDtcbn1cblxuLmJvaWxlcnBsYXRlOmhvdmVyIC5pY29uQnV0dG9ucyxcbi5ib3g6aG92ZXIgLmljb25CdXR0b25ze1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5ib2lsZXJwbGF0ZTpob3ZlciAuZGVzY3JpcHRpb257XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4udGl0bGV7XG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICM1NTU7XG4gICAgaGVpZ2h0OiAxcmVtO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuIFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgIHRvcDogMC41cmVtO1xufVxuXG4uZGVzY3JpcHRpb257XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDE0OHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb2xvcjogIzk5OTtcbiAgICBib3R0b206IDAuMjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMXJlbSk7XG4gICAgei1pbmRleDogMTA7XG59XG5cbi50aHVtYm5haWxXcmFwcGVye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDAuNXJlbTtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMXJlbSk7XG4gICAgaGVpZ2h0OiA4OHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHotaW5kZXg6IDA7XG59XG5cblxuLmJvaWxlcnBsYXRlIC50aHVtYm5haWxXcmFwcGVye1xuICAgIGhlaWdodDogMTU0cHg7XG5cblxufVxuLnRodW1ibmFpbHtcbiAgICB3aWR0aDogMTAwJTtcblxufVxuLmljb25CdXR0b25ze1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBnYXA6IDAuMjVyZW07XG4gICAgaGVpZ2h0OiAycmVtO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHRvcDogMC41cmVtO1xuICAgIGxlZnQ6IDAuNXJlbTtcbn1cbi5pY29uQnV0dG9uIHtcbiAgICB3aWR0aDogMS42cmVtO1xuICAgIGhlaWdodDogMS42cmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmljb25CdXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFOUU5RTk7XG59XG4uaWNvbkJ1dHRvbiBpbWd7XG4gICAgd2lkdGg6IDFyZW07XG59XG4ubGlua3tcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uYXJ0aWNsZXtcbiAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dCk7XG4gICAgYm9yZGVyLXJhZGl1czogMC4xMjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYmctc2Vjb25kYXJ5KTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cblxuLmFydGljbGU6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyLWRpc2FibGVkKTtcbn1cblxuIl19 */`;
        document.head.append(element);
      }
      styles_default5 = { "boxesWrapper": "_boxesWrapper_1nnil_1", "box": "_box_1nnil_1", "boilerplate": "_boilerplate_1nnil_18", "title": "_title_1nnil_28", "iconButtons": "_iconButtons_1nnil_33", "description": "_description_1nnil_38", "thumbnailWrapper": "_thumbnailWrapper_1nnil_64", "thumbnail": "_thumbnail_1nnil_64", "iconButton": "_iconButton_1nnil_33", "link": "_link_1nnil_110", "article": "_article_1nnil_113" };
    }
  });

  // src/components/_Article.jsx
  var _Article;
  var init_Article = __esm({
    "src/components/_Article.jsx"() {
      "use strict";
      init_styles5();
      init_preact_module();
      init_IconButton();
      _Article = ({ comp }) => {
        return /* @__PURE__ */ y(
          "a",
          {
            href: comp.link,
            target: "_blank",
            class: styles_default5.link
          },
          /* @__PURE__ */ y("div", { class: `${styles_default5.article}` }, comp.name)
        );
      };
    }
  });

  // src/components/_Section.jsx
  var _Section;
  var init_Section = __esm({
    "src/components/_Section.jsx"() {
      "use strict";
      init_lib2();
      init_hooks_module();
      init_styles();
      init_preact_module();
      init_Box();
      init_BoilerPlate();
      init_Article();
      _Section = ({ section, currentTab }) => {
        const [open, setOpen] = h2(true);
        const handleClick = () => {
          setOpen(!open);
        };
        return /* @__PURE__ */ y(
          Disclosure,
          {
            title: section.name.replaceAll("_", " "),
            open,
            onClick: handleClick
          },
          /* @__PURE__ */ y(
            "div",
            {
              class: styles_default.boxesWrapper,
              style: {
                gridTemplateColumns: currentTab === "COMPONENTS" ? `repeat(3, 134px)` : currentTab === "BOILERPLATES" ? `repeat(2, 205px)` : `repeat(1, 420px)`
              }
            },
            section.children.map((comp) => {
              if (currentTab === "COMPONENTS") {
                return /* @__PURE__ */ y(_Box, { comp });
              }
              if (currentTab === "BOILERPLATES") {
                return /* @__PURE__ */ y(_BoilerPlate, { comp });
              }
              if (currentTab === "USEFUL RESOURCES") {
                return /* @__PURE__ */ y(_Article, { comp });
              }
            })
          )
        );
      };
    }
  });

  // ../../../../../private/var/folders/q3/phj1q3716nq2zh1ttfzj02g80000gn/T/429287ee-3a87-4440-9004-81a20ff8b764/styles.js
  var styles_default6;
  var init_styles6 = __esm({
    "../../../../../private/var/folders/q3/phj1q3716nq2zh1ttfzj02g80000gn/T/429287ee-3a87-4440-9004-81a20ff8b764/styles.js"() {
      if (document.getElementById("ed07d7d4b2") === null) {
        const element = document.createElement("style");
        element.id = "ed07d7d4b2";
        element.textContent = `._boxesWrapper_1nnil_1{
    width: 100%;
    display: grid;

    grid-gap: 0.5rem;    
}

._box_1nnil_1 {
    border: #ddd 1px solid;
    padding: 0.5rem;
    border-radius: 4px;
    width: 100%;
    height: 134px;
    background-color: #fff;
    position: relative;
}

._boilerplate_1nnil_18{
    border: #ddd 1px solid;
    padding: 0.5rem;
    border-radius: 4px;
    width: 100%;
    height: 196px;
    background-color: #fff;
    position: relative;
}

._boilerplate_1nnil_18:hover ._title_1nnil_28,
._box_1nnil_1:hover ._title_1nnil_28{
    opacity: 0;
}

._boilerplate_1nnil_18:hover ._iconButtons_1nnil_33,
._box_1nnil_1:hover ._iconButtons_1nnil_33{
    display: flex;
}

._boilerplate_1nnil_18:hover ._description_1nnil_38{
    display: block;
}
._title_1nnil_28{
    font-size: 0.75rem;
    font-weight: 500;
    color: #555;
    height: 1rem;
    overflow: visible;
 
    position: absolute;
   top: 0.5rem;
}

._description_1nnil_38{
    display: none;
    width: 100%;
    height: 148px;
    position: absolute;
    color: #999;
    bottom: 0.25rem;
    background-color: #fff;
    width: calc(100% - 1rem);
    z-index: 10;
}

._thumbnailWrapper_1nnil_64{
    position: absolute;
    bottom: 0.5rem;
    width: calc(100% - 1rem);
    height: 88px;
    overflow: hidden;
    display: flex;
    align-items: center;
    z-index: 0;
}


._boilerplate_1nnil_18 ._thumbnailWrapper_1nnil_64{
    height: 154px;


}
._thumbnail_1nnil_64{
    width: 100%;

}
._iconButtons_1nnil_33{
    position: absolute;
    gap: 0.25rem;
    height: 2rem;
    overflow: hidden;
    display: none;
    background-color: #fff;
    top: 0.5rem;
    left: 0.5rem;
}
._iconButton_1nnil_33 {
    width: 1.6rem;
    height: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    cursor: pointer;
}
._iconButton_1nnil_33:hover {
    background-color: #E9E9E9;
}
._iconButton_1nnil_33 img{
    width: 1rem;
}
._link_1nnil_110{
    text-decoration: none;
}
._article_1nnil_113{
    font-size: 0.75rem;
    cursor: pointer;
    width: 100%;
    padding: 0.5rem;
    color: var(--figma-color-text);
    border-radius: 0.125rem;
    background-color: var(--figma-color-bg-secondary);
    text-decoration: none;
}


._article_1nnil_113:hover{
    background-color: var(--figma-color-border-disabled);
}


/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGFBQWE7O0lBRWIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLFVBQVU7QUFDZDs7QUFFQTs7SUFFSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjs7SUFFakIsa0JBQWtCO0dBQ25CLFdBQVc7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZUFBZTtJQUNmLHNCQUFzQjtJQUN0Qix3QkFBd0I7SUFDeEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDs7O0FBR0E7SUFDSSxhQUFhOzs7QUFHakI7QUFDQTtJQUNJLFdBQVc7O0FBRWY7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFdBQVc7SUFDWCxlQUFlO0lBQ2YsOEJBQThCO0lBQzlCLHVCQUF1QjtJQUN2QixpREFBaUQ7SUFDakQscUJBQXFCO0FBQ3pCOzs7QUFHQTtJQUNJLG9EQUFvRDtBQUN4RCIsImZpbGUiOiJzcmMvc3R5bGVzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3hlc1dyYXBwZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZ3JpZDtcblxuICAgIGdyaWQtZ2FwOiAwLjVyZW07ICAgIFxufVxuXG4uYm94IHtcbiAgICBib3JkZXI6ICNkZGQgMXB4IHNvbGlkO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMzRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmJvaWxlcnBsYXRle1xuICAgIGJvcmRlcjogI2RkZCAxcHggc29saWQ7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDE5NnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYm9pbGVycGxhdGU6aG92ZXIgLnRpdGxlLFxuLmJveDpob3ZlciAudGl0bGV7XG4gICAgb3BhY2l0eTogMDtcbn1cblxuLmJvaWxlcnBsYXRlOmhvdmVyIC5pY29uQnV0dG9ucyxcbi5ib3g6aG92ZXIgLmljb25CdXR0b25ze1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5ib2lsZXJwbGF0ZTpob3ZlciAuZGVzY3JpcHRpb257XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4udGl0bGV7XG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICM1NTU7XG4gICAgaGVpZ2h0OiAxcmVtO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuIFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgIHRvcDogMC41cmVtO1xufVxuXG4uZGVzY3JpcHRpb257XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDE0OHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb2xvcjogIzk5OTtcbiAgICBib3R0b206IDAuMjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMXJlbSk7XG4gICAgei1pbmRleDogMTA7XG59XG5cbi50aHVtYm5haWxXcmFwcGVye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDAuNXJlbTtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMXJlbSk7XG4gICAgaGVpZ2h0OiA4OHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHotaW5kZXg6IDA7XG59XG5cblxuLmJvaWxlcnBsYXRlIC50aHVtYm5haWxXcmFwcGVye1xuICAgIGhlaWdodDogMTU0cHg7XG5cblxufVxuLnRodW1ibmFpbHtcbiAgICB3aWR0aDogMTAwJTtcblxufVxuLmljb25CdXR0b25ze1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBnYXA6IDAuMjVyZW07XG4gICAgaGVpZ2h0OiAycmVtO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHRvcDogMC41cmVtO1xuICAgIGxlZnQ6IDAuNXJlbTtcbn1cbi5pY29uQnV0dG9uIHtcbiAgICB3aWR0aDogMS42cmVtO1xuICAgIGhlaWdodDogMS42cmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmljb25CdXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFOUU5RTk7XG59XG4uaWNvbkJ1dHRvbiBpbWd7XG4gICAgd2lkdGg6IDFyZW07XG59XG4ubGlua3tcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uYXJ0aWNsZXtcbiAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dCk7XG4gICAgYm9yZGVyLXJhZGl1czogMC4xMjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYmctc2Vjb25kYXJ5KTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cblxuLmFydGljbGU6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyLWRpc2FibGVkKTtcbn1cblxuIl19 */`;
        document.head.append(element);
      }
      styles_default6 = { "boxesWrapper": "_boxesWrapper_1nnil_1", "box": "_box_1nnil_1", "boilerplate": "_boilerplate_1nnil_18", "title": "_title_1nnil_28", "iconButtons": "_iconButtons_1nnil_33", "description": "_description_1nnil_38", "thumbnailWrapper": "_thumbnailWrapper_1nnil_64", "thumbnail": "_thumbnail_1nnil_64", "iconButton": "_iconButton_1nnil_33", "link": "_link_1nnil_110", "article": "_article_1nnil_113" };
    }
  });

  // src/components/_About.jsx
  var _About;
  var init_About = __esm({
    "src/components/_About.jsx"() {
      "use strict";
      init_preact_module();
      init_lib2();
      init_styles6();
      _About = () => {
        return /* @__PURE__ */ y(Container, { space: "medium" }, /* @__PURE__ */ y(VerticalSpace, { space: "medium" }), /* @__PURE__ */ y(Stack, { space: "medium" }, /* @__PURE__ */ y(Text, null, "This plugin creates a central place for the resources related to the Deel UI design system."), /* @__PURE__ */ y(Text, null, "If you have any feedback or suggestion, please reach out to @Weijie Fu on Slack."), /* @__PURE__ */ y(VerticalSpace, { space: "large" }), /* @__PURE__ */ y(Text, null, "Developed by: Weijie Fu"), /* @__PURE__ */ y(Text, null, "Last update: Sep 9, 2023"), /* @__PURE__ */ y(
          "a",
          {
            href: "https://github.com/WeijieFu/deel-ui-locator",
            target: "_blank",
            class: styles_default6.link
          },
          /* @__PURE__ */ y("div", { class: styles_default6.article }, "Download the latest version")
        )));
      };
    }
  });

  // src/ui.jsx
  var ui_exports = {};
  __export(ui_exports, {
    default: () => ui_default
  });
  function Plugin({ data }) {
    const [currentTab, setCurrentTab] = h2("COMPONENTS");
    const tabOptions = [
      {
        children: /* @__PURE__ */ y("div", null, data.COMPONENTS.map((section) => {
          return /* @__PURE__ */ y(
            _Section,
            {
              section,
              currentTab
            }
          );
        })),
        value: "COMPONENTS"
      },
      {
        children: /* @__PURE__ */ y("div", null, data.BOILERPLATES.map((section) => {
          return /* @__PURE__ */ y(
            _Section,
            {
              section,
              currentTab
            }
          );
        })),
        value: "BOILERPLATES"
      },
      {
        children: /* @__PURE__ */ y("div", null, data.RESOURCES.map((section) => {
          return /* @__PURE__ */ y(
            _Section,
            {
              section,
              currentTab
            }
          );
        })),
        value: "USEFUL RESOURCES"
      },
      {
        children: /* @__PURE__ */ y(_About, null),
        value: "ABOUT"
      }
    ];
    const handleTabClick = (value) => {
      setCurrentTab(value);
    };
    return /* @__PURE__ */ y(Container, { space: "extraSmall" }, /* @__PURE__ */ y(VerticalSpace, { space: "extraSmall" }), /* @__PURE__ */ y(
      Tabs,
      {
        options: tabOptions,
        value: currentTab,
        onValueChange: handleTabClick
      }
    ), /* @__PURE__ */ y(VerticalSpace, { space: "extraSmall" }));
  }
  var ui_default;
  var init_ui = __esm({
    "src/ui.jsx"() {
      "use strict";
      init_lib2();
      init_hooks_module();
      init_preact_module();
      init_Section();
      init_BoilerPlate();
      init_About();
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
