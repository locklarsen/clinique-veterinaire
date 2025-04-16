(function () {
  const U = document.createElement("link").relList;
  if (U && U.supports && U.supports("modulepreload")) return;
  for (const q of document.querySelectorAll('link[rel="modulepreload"]')) o(q);
  new MutationObserver((q) => {
    for (const L of q)
      if (L.type === "childList")
        for (const dl of L.addedNodes)
          dl.tagName === "LINK" && dl.rel === "modulepreload" && o(dl);
  }).observe(document, { childList: !0, subtree: !0 });
  function M(q) {
    const L = {};
    return (
      q.integrity && (L.integrity = q.integrity),
      q.referrerPolicy && (L.referrerPolicy = q.referrerPolicy),
      q.crossOrigin === "use-credentials"
        ? (L.credentials = "include")
        : q.crossOrigin === "anonymous"
        ? (L.credentials = "omit")
        : (L.credentials = "same-origin"),
      L
    );
  }
  function o(q) {
    if (q.ep) return;
    q.ep = !0;
    const L = M(q);
    fetch(q.href, L);
  }
})();
function Yv(S) {
  return S && S.__esModule && Object.prototype.hasOwnProperty.call(S, "default")
    ? S.default
    : S;
}
var Fc = { exports: {} },
  ye = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fd;
function Bv() {
  if (Fd) return ye;
  Fd = 1;
  var S = Symbol.for("react.transitional.element"),
    U = Symbol.for("react.fragment");
  function M(o, q, L) {
    var dl = null;
    if (
      (L !== void 0 && (dl = "" + L),
      q.key !== void 0 && (dl = "" + q.key),
      "key" in q)
    ) {
      L = {};
      for (var El in q) El !== "key" && (L[El] = q[El]);
    } else L = q;
    return (
      (q = L.ref),
      { $$typeof: S, type: o, key: dl, ref: q !== void 0 ? q : null, props: L }
    );
  }
  return (ye.Fragment = U), (ye.jsx = M), (ye.jsxs = M), ye;
}
var Pd;
function Gv() {
  return Pd || ((Pd = 1), (Fc.exports = Bv())), Fc.exports;
}
var z = Gv(),
  Pc = { exports: {} },
  C = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Id;
function Xv() {
  if (Id) return C;
  Id = 1;
  var S = Symbol.for("react.transitional.element"),
    U = Symbol.for("react.portal"),
    M = Symbol.for("react.fragment"),
    o = Symbol.for("react.strict_mode"),
    q = Symbol.for("react.profiler"),
    L = Symbol.for("react.consumer"),
    dl = Symbol.for("react.context"),
    El = Symbol.for("react.forward_ref"),
    N = Symbol.for("react.suspense"),
    O = Symbol.for("react.memo"),
    j = Symbol.for("react.lazy"),
    cl = Symbol.iterator;
  function nl(s) {
    return s === null || typeof s != "object"
      ? null
      : ((s = (cl && s[cl]) || s["@@iterator"]),
        typeof s == "function" ? s : null);
  }
  var ql = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Hl = Object.assign,
    rt = {};
  function Bl(s, A, D) {
    (this.props = s),
      (this.context = A),
      (this.refs = rt),
      (this.updater = D || ql);
  }
  (Bl.prototype.isReactComponent = {}),
    (Bl.prototype.setState = function (s, A) {
      if (typeof s != "object" && typeof s != "function" && s != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, s, A, "setState");
    }),
    (Bl.prototype.forceUpdate = function (s) {
      this.updater.enqueueForceUpdate(this, s, "forceUpdate");
    });
  function ra() {}
  ra.prototype = Bl.prototype;
  function Ot(s, A, D) {
    (this.props = s),
      (this.context = A),
      (this.refs = rt),
      (this.updater = D || ql);
  }
  var Dl = (Ot.prototype = new ra());
  (Dl.constructor = Ot), Hl(Dl, Bl.prototype), (Dl.isPureReactComponent = !0);
  var ot = Array.isArray,
    W = { H: null, A: null, T: null, S: null, V: null },
    Vl = Object.prototype.hasOwnProperty;
  function Ll(s, A, D, p, H, $) {
    return (
      (D = $.ref),
      { $$typeof: S, type: s, key: A, ref: D !== void 0 ? D : null, props: $ }
    );
  }
  function Kl(s, A) {
    return Ll(s.type, A, void 0, void 0, void 0, s.props);
  }
  function yt(s) {
    return typeof s == "object" && s !== null && s.$$typeof === S;
  }
  function ja(s) {
    var A = { "=": "=0", ":": "=2" };
    return (
      "$" +
      s.replace(/[=:]/g, function (D) {
        return A[D];
      })
    );
  }
  var zt = /\/+/g;
  function xl(s, A) {
    return typeof s == "object" && s !== null && s.key != null
      ? ja("" + s.key)
      : A.toString(36);
  }
  function oa() {}
  function va(s) {
    switch (s.status) {
      case "fulfilled":
        return s.value;
      case "rejected":
        throw s.reason;
      default:
        switch (
          (typeof s.status == "string"
            ? s.then(oa, oa)
            : ((s.status = "pending"),
              s.then(
                function (A) {
                  s.status === "pending" &&
                    ((s.status = "fulfilled"), (s.value = A));
                },
                function (A) {
                  s.status === "pending" &&
                    ((s.status = "rejected"), (s.reason = A));
                }
              )),
          s.status)
        ) {
          case "fulfilled":
            return s.value;
          case "rejected":
            throw s.reason;
        }
    }
    throw s;
  }
  function Ul(s, A, D, p, H) {
    var $ = typeof s;
    ($ === "undefined" || $ === "boolean") && (s = null);
    var Q = !1;
    if (s === null) Q = !0;
    else
      switch ($) {
        case "bigint":
        case "string":
        case "number":
          Q = !0;
          break;
        case "object":
          switch (s.$$typeof) {
            case S:
            case U:
              Q = !0;
              break;
            case j:
              return (Q = s._init), Ul(Q(s._payload), A, D, p, H);
          }
      }
    if (Q)
      return (
        (H = H(s)),
        (Q = p === "" ? "." + xl(s, 0) : p),
        ot(H)
          ? ((D = ""),
            Q != null && (D = Q.replace(zt, "$&/") + "/"),
            Ul(H, A, D, "", function (Qt) {
              return Qt;
            }))
          : H != null &&
            (yt(H) &&
              (H = Kl(
                H,
                D +
                  (H.key == null || (s && s.key === H.key)
                    ? ""
                    : ("" + H.key).replace(zt, "$&/") + "/") +
                  Q
              )),
            A.push(H)),
        1
      );
    Q = 0;
    var Jl = p === "" ? "." : p + ":";
    if (ot(s))
      for (var fl = 0; fl < s.length; fl++)
        (p = s[fl]), ($ = Jl + xl(p, fl)), (Q += Ul(p, A, D, $, H));
    else if (((fl = nl(s)), typeof fl == "function"))
      for (s = fl.call(s), fl = 0; !(p = s.next()).done; )
        (p = p.value), ($ = Jl + xl(p, fl++)), (Q += Ul(p, A, D, $, H));
    else if ($ === "object") {
      if (typeof s.then == "function") return Ul(va(s), A, D, p, H);
      throw (
        ((A = String(s)),
        Error(
          "Objects are not valid as a React child (found: " +
            (A === "[object Object]"
              ? "object with keys {" + Object.keys(s).join(", ") + "}"
              : A) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return Q;
  }
  function b(s, A, D) {
    if (s == null) return s;
    var p = [],
      H = 0;
    return (
      Ul(s, p, "", "", function ($) {
        return A.call(D, $, H++);
      }),
      p
    );
  }
  function _(s) {
    if (s._status === -1) {
      var A = s._result;
      (A = A()),
        A.then(
          function (D) {
            (s._status === 0 || s._status === -1) &&
              ((s._status = 1), (s._result = D));
          },
          function (D) {
            (s._status === 0 || s._status === -1) &&
              ((s._status = 2), (s._result = D));
          }
        ),
        s._status === -1 && ((s._status = 0), (s._result = A));
    }
    if (s._status === 1) return s._result.default;
    throw s._result;
  }
  var G =
    typeof reportError == "function"
      ? reportError
      : function (s) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var A = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof s == "object" &&
                s !== null &&
                typeof s.message == "string"
                  ? String(s.message)
                  : String(s),
              error: s,
            });
            if (!window.dispatchEvent(A)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", s);
            return;
          }
          console.error(s);
        };
  function ul() {}
  return (
    (C.Children = {
      map: b,
      forEach: function (s, A, D) {
        b(
          s,
          function () {
            A.apply(this, arguments);
          },
          D
        );
      },
      count: function (s) {
        var A = 0;
        return (
          b(s, function () {
            A++;
          }),
          A
        );
      },
      toArray: function (s) {
        return (
          b(s, function (A) {
            return A;
          }) || []
        );
      },
      only: function (s) {
        if (!yt(s))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return s;
      },
    }),
    (C.Component = Bl),
    (C.Fragment = M),
    (C.Profiler = q),
    (C.PureComponent = Ot),
    (C.StrictMode = o),
    (C.Suspense = N),
    (C.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = W),
    (C.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (s) {
        return W.H.useMemoCache(s);
      },
    }),
    (C.cache = function (s) {
      return function () {
        return s.apply(null, arguments);
      };
    }),
    (C.cloneElement = function (s, A, D) {
      if (s == null)
        throw Error(
          "The argument must be a React element, but you passed " + s + "."
        );
      var p = Hl({}, s.props),
        H = s.key,
        $ = void 0;
      if (A != null)
        for (Q in (A.ref !== void 0 && ($ = void 0),
        A.key !== void 0 && (H = "" + A.key),
        A))
          !Vl.call(A, Q) ||
            Q === "key" ||
            Q === "__self" ||
            Q === "__source" ||
            (Q === "ref" && A.ref === void 0) ||
            (p[Q] = A[Q]);
      var Q = arguments.length - 2;
      if (Q === 1) p.children = D;
      else if (1 < Q) {
        for (var Jl = Array(Q), fl = 0; fl < Q; fl++)
          Jl[fl] = arguments[fl + 2];
        p.children = Jl;
      }
      return Ll(s.type, H, void 0, void 0, $, p);
    }),
    (C.createContext = function (s) {
      return (
        (s = {
          $$typeof: dl,
          _currentValue: s,
          _currentValue2: s,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (s.Provider = s),
        (s.Consumer = { $$typeof: L, _context: s }),
        s
      );
    }),
    (C.createElement = function (s, A, D) {
      var p,
        H = {},
        $ = null;
      if (A != null)
        for (p in (A.key !== void 0 && ($ = "" + A.key), A))
          Vl.call(A, p) &&
            p !== "key" &&
            p !== "__self" &&
            p !== "__source" &&
            (H[p] = A[p]);
      var Q = arguments.length - 2;
      if (Q === 1) H.children = D;
      else if (1 < Q) {
        for (var Jl = Array(Q), fl = 0; fl < Q; fl++)
          Jl[fl] = arguments[fl + 2];
        H.children = Jl;
      }
      if (s && s.defaultProps)
        for (p in ((Q = s.defaultProps), Q)) H[p] === void 0 && (H[p] = Q[p]);
      return Ll(s, $, void 0, void 0, null, H);
    }),
    (C.createRef = function () {
      return { current: null };
    }),
    (C.forwardRef = function (s) {
      return { $$typeof: El, render: s };
    }),
    (C.isValidElement = yt),
    (C.lazy = function (s) {
      return { $$typeof: j, _payload: { _status: -1, _result: s }, _init: _ };
    }),
    (C.memo = function (s, A) {
      return { $$typeof: O, type: s, compare: A === void 0 ? null : A };
    }),
    (C.startTransition = function (s) {
      var A = W.T,
        D = {};
      W.T = D;
      try {
        var p = s(),
          H = W.S;
        H !== null && H(D, p),
          typeof p == "object" &&
            p !== null &&
            typeof p.then == "function" &&
            p.then(ul, G);
      } catch ($) {
        G($);
      } finally {
        W.T = A;
      }
    }),
    (C.unstable_useCacheRefresh = function () {
      return W.H.useCacheRefresh();
    }),
    (C.use = function (s) {
      return W.H.use(s);
    }),
    (C.useActionState = function (s, A, D) {
      return W.H.useActionState(s, A, D);
    }),
    (C.useCallback = function (s, A) {
      return W.H.useCallback(s, A);
    }),
    (C.useContext = function (s) {
      return W.H.useContext(s);
    }),
    (C.useDebugValue = function () {}),
    (C.useDeferredValue = function (s, A) {
      return W.H.useDeferredValue(s, A);
    }),
    (C.useEffect = function (s, A, D) {
      var p = W.H;
      if (typeof D == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React."
        );
      return p.useEffect(s, A);
    }),
    (C.useId = function () {
      return W.H.useId();
    }),
    (C.useImperativeHandle = function (s, A, D) {
      return W.H.useImperativeHandle(s, A, D);
    }),
    (C.useInsertionEffect = function (s, A) {
      return W.H.useInsertionEffect(s, A);
    }),
    (C.useLayoutEffect = function (s, A) {
      return W.H.useLayoutEffect(s, A);
    }),
    (C.useMemo = function (s, A) {
      return W.H.useMemo(s, A);
    }),
    (C.useOptimistic = function (s, A) {
      return W.H.useOptimistic(s, A);
    }),
    (C.useReducer = function (s, A, D) {
      return W.H.useReducer(s, A, D);
    }),
    (C.useRef = function (s) {
      return W.H.useRef(s);
    }),
    (C.useState = function (s) {
      return W.H.useState(s);
    }),
    (C.useSyncExternalStore = function (s, A, D) {
      return W.H.useSyncExternalStore(s, A, D);
    }),
    (C.useTransition = function () {
      return W.H.useTransition();
    }),
    (C.version = "19.1.0"),
    C
  );
}
var lr;
function uf() {
  return lr || ((lr = 1), (Pc.exports = Xv())), Pc.exports;
}
var sr = uf();
const Ra = Yv(sr);
var Ic = { exports: {} },
  ge = {},
  lf = { exports: {} },
  tf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var tr;
function Qv() {
  return (
    tr ||
      ((tr = 1),
      (function (S) {
        function U(b, _) {
          var G = b.length;
          b.push(_);
          l: for (; 0 < G; ) {
            var ul = (G - 1) >>> 1,
              s = b[ul];
            if (0 < q(s, _)) (b[ul] = _), (b[G] = s), (G = ul);
            else break l;
          }
        }
        function M(b) {
          return b.length === 0 ? null : b[0];
        }
        function o(b) {
          if (b.length === 0) return null;
          var _ = b[0],
            G = b.pop();
          if (G !== _) {
            b[0] = G;
            l: for (var ul = 0, s = b.length, A = s >>> 1; ul < A; ) {
              var D = 2 * (ul + 1) - 1,
                p = b[D],
                H = D + 1,
                $ = b[H];
              if (0 > q(p, G))
                H < s && 0 > q($, p)
                  ? ((b[ul] = $), (b[H] = G), (ul = H))
                  : ((b[ul] = p), (b[D] = G), (ul = D));
              else if (H < s && 0 > q($, G)) (b[ul] = $), (b[H] = G), (ul = H);
              else break l;
            }
          }
          return _;
        }
        function q(b, _) {
          var G = b.sortIndex - _.sortIndex;
          return G !== 0 ? G : b.id - _.id;
        }
        if (
          ((S.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var L = performance;
          S.unstable_now = function () {
            return L.now();
          };
        } else {
          var dl = Date,
            El = dl.now();
          S.unstable_now = function () {
            return dl.now() - El;
          };
        }
        var N = [],
          O = [],
          j = 1,
          cl = null,
          nl = 3,
          ql = !1,
          Hl = !1,
          rt = !1,
          Bl = !1,
          ra = typeof setTimeout == "function" ? setTimeout : null,
          Ot = typeof clearTimeout == "function" ? clearTimeout : null,
          Dl = typeof setImmediate < "u" ? setImmediate : null;
        function ot(b) {
          for (var _ = M(O); _ !== null; ) {
            if (_.callback === null) o(O);
            else if (_.startTime <= b)
              o(O), (_.sortIndex = _.expirationTime), U(N, _);
            else break;
            _ = M(O);
          }
        }
        function W(b) {
          if (((rt = !1), ot(b), !Hl))
            if (M(N) !== null) (Hl = !0), Vl || ((Vl = !0), xl());
            else {
              var _ = M(O);
              _ !== null && Ul(W, _.startTime - b);
            }
        }
        var Vl = !1,
          Ll = -1,
          Kl = 5,
          yt = -1;
        function ja() {
          return Bl ? !0 : !(S.unstable_now() - yt < Kl);
        }
        function zt() {
          if (((Bl = !1), Vl)) {
            var b = S.unstable_now();
            yt = b;
            var _ = !0;
            try {
              l: {
                (Hl = !1), rt && ((rt = !1), Ot(Ll), (Ll = -1)), (ql = !0);
                var G = nl;
                try {
                  t: {
                    for (
                      ot(b), cl = M(N);
                      cl !== null && !(cl.expirationTime > b && ja());

                    ) {
                      var ul = cl.callback;
                      if (typeof ul == "function") {
                        (cl.callback = null), (nl = cl.priorityLevel);
                        var s = ul(cl.expirationTime <= b);
                        if (((b = S.unstable_now()), typeof s == "function")) {
                          (cl.callback = s), ot(b), (_ = !0);
                          break t;
                        }
                        cl === M(N) && o(N), ot(b);
                      } else o(N);
                      cl = M(N);
                    }
                    if (cl !== null) _ = !0;
                    else {
                      var A = M(O);
                      A !== null && Ul(W, A.startTime - b), (_ = !1);
                    }
                  }
                  break l;
                } finally {
                  (cl = null), (nl = G), (ql = !1);
                }
                _ = void 0;
              }
            } finally {
              _ ? xl() : (Vl = !1);
            }
          }
        }
        var xl;
        if (typeof Dl == "function")
          xl = function () {
            Dl(zt);
          };
        else if (typeof MessageChannel < "u") {
          var oa = new MessageChannel(),
            va = oa.port2;
          (oa.port1.onmessage = zt),
            (xl = function () {
              va.postMessage(null);
            });
        } else
          xl = function () {
            ra(zt, 0);
          };
        function Ul(b, _) {
          Ll = ra(function () {
            b(S.unstable_now());
          }, _);
        }
        (S.unstable_IdlePriority = 5),
          (S.unstable_ImmediatePriority = 1),
          (S.unstable_LowPriority = 4),
          (S.unstable_NormalPriority = 3),
          (S.unstable_Profiling = null),
          (S.unstable_UserBlockingPriority = 2),
          (S.unstable_cancelCallback = function (b) {
            b.callback = null;
          }),
          (S.unstable_forceFrameRate = function (b) {
            0 > b || 125 < b
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (Kl = 0 < b ? Math.floor(1e3 / b) : 5);
          }),
          (S.unstable_getCurrentPriorityLevel = function () {
            return nl;
          }),
          (S.unstable_next = function (b) {
            switch (nl) {
              case 1:
              case 2:
              case 3:
                var _ = 3;
                break;
              default:
                _ = nl;
            }
            var G = nl;
            nl = _;
            try {
              return b();
            } finally {
              nl = G;
            }
          }),
          (S.unstable_requestPaint = function () {
            Bl = !0;
          }),
          (S.unstable_runWithPriority = function (b, _) {
            switch (b) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                b = 3;
            }
            var G = nl;
            nl = b;
            try {
              return _();
            } finally {
              nl = G;
            }
          }),
          (S.unstable_scheduleCallback = function (b, _, G) {
            var ul = S.unstable_now();
            switch (
              (typeof G == "object" && G !== null
                ? ((G = G.delay),
                  (G = typeof G == "number" && 0 < G ? ul + G : ul))
                : (G = ul),
              b)
            ) {
              case 1:
                var s = -1;
                break;
              case 2:
                s = 250;
                break;
              case 5:
                s = 1073741823;
                break;
              case 4:
                s = 1e4;
                break;
              default:
                s = 5e3;
            }
            return (
              (s = G + s),
              (b = {
                id: j++,
                callback: _,
                priorityLevel: b,
                startTime: G,
                expirationTime: s,
                sortIndex: -1,
              }),
              G > ul
                ? ((b.sortIndex = G),
                  U(O, b),
                  M(N) === null &&
                    b === M(O) &&
                    (rt ? (Ot(Ll), (Ll = -1)) : (rt = !0), Ul(W, G - ul)))
                : ((b.sortIndex = s),
                  U(N, b),
                  Hl || ql || ((Hl = !0), Vl || ((Vl = !0), xl()))),
              b
            );
          }),
          (S.unstable_shouldYield = ja),
          (S.unstable_wrapCallback = function (b) {
            var _ = nl;
            return function () {
              var G = nl;
              nl = _;
              try {
                return b.apply(this, arguments);
              } finally {
                nl = G;
              }
            };
          });
      })(tf)),
    tf
  );
}
var ar;
function Cv() {
  return ar || ((ar = 1), (lf.exports = Qv())), lf.exports;
}
var af = { exports: {} },
  jl = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ur;
function Zv() {
  if (ur) return jl;
  ur = 1;
  var S = uf();
  function U(N) {
    var O = "https://react.dev/errors/" + N;
    if (1 < arguments.length) {
      O += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var j = 2; j < arguments.length; j++)
        O += "&args[]=" + encodeURIComponent(arguments[j]);
    }
    return (
      "Minified React error #" +
      N +
      "; visit " +
      O +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function M() {}
  var o = {
      d: {
        f: M,
        r: function () {
          throw Error(U(522));
        },
        D: M,
        C: M,
        L: M,
        m: M,
        X: M,
        S: M,
        M,
      },
      p: 0,
      findDOMNode: null,
    },
    q = Symbol.for("react.portal");
  function L(N, O, j) {
    var cl =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: q,
      key: cl == null ? null : "" + cl,
      children: N,
      containerInfo: O,
      implementation: j,
    };
  }
  var dl = S.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function El(N, O) {
    if (N === "font") return "";
    if (typeof O == "string") return O === "use-credentials" ? O : "";
  }
  return (
    (jl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o),
    (jl.createPortal = function (N, O) {
      var j =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!O || (O.nodeType !== 1 && O.nodeType !== 9 && O.nodeType !== 11))
        throw Error(U(299));
      return L(N, O, null, j);
    }),
    (jl.flushSync = function (N) {
      var O = dl.T,
        j = o.p;
      try {
        if (((dl.T = null), (o.p = 2), N)) return N();
      } finally {
        (dl.T = O), (o.p = j), o.d.f();
      }
    }),
    (jl.preconnect = function (N, O) {
      typeof N == "string" &&
        (O
          ? ((O = O.crossOrigin),
            (O =
              typeof O == "string"
                ? O === "use-credentials"
                  ? O
                  : ""
                : void 0))
          : (O = null),
        o.d.C(N, O));
    }),
    (jl.prefetchDNS = function (N) {
      typeof N == "string" && o.d.D(N);
    }),
    (jl.preinit = function (N, O) {
      if (typeof N == "string" && O && typeof O.as == "string") {
        var j = O.as,
          cl = El(j, O.crossOrigin),
          nl = typeof O.integrity == "string" ? O.integrity : void 0,
          ql = typeof O.fetchPriority == "string" ? O.fetchPriority : void 0;
        j === "style"
          ? o.d.S(N, typeof O.precedence == "string" ? O.precedence : void 0, {
              crossOrigin: cl,
              integrity: nl,
              fetchPriority: ql,
            })
          : j === "script" &&
            o.d.X(N, {
              crossOrigin: cl,
              integrity: nl,
              fetchPriority: ql,
              nonce: typeof O.nonce == "string" ? O.nonce : void 0,
            });
      }
    }),
    (jl.preinitModule = function (N, O) {
      if (typeof N == "string")
        if (typeof O == "object" && O !== null) {
          if (O.as == null || O.as === "script") {
            var j = El(O.as, O.crossOrigin);
            o.d.M(N, {
              crossOrigin: j,
              integrity: typeof O.integrity == "string" ? O.integrity : void 0,
              nonce: typeof O.nonce == "string" ? O.nonce : void 0,
            });
          }
        } else O == null && o.d.M(N);
    }),
    (jl.preload = function (N, O) {
      if (
        typeof N == "string" &&
        typeof O == "object" &&
        O !== null &&
        typeof O.as == "string"
      ) {
        var j = O.as,
          cl = El(j, O.crossOrigin);
        o.d.L(N, j, {
          crossOrigin: cl,
          integrity: typeof O.integrity == "string" ? O.integrity : void 0,
          nonce: typeof O.nonce == "string" ? O.nonce : void 0,
          type: typeof O.type == "string" ? O.type : void 0,
          fetchPriority:
            typeof O.fetchPriority == "string" ? O.fetchPriority : void 0,
          referrerPolicy:
            typeof O.referrerPolicy == "string" ? O.referrerPolicy : void 0,
          imageSrcSet:
            typeof O.imageSrcSet == "string" ? O.imageSrcSet : void 0,
          imageSizes: typeof O.imageSizes == "string" ? O.imageSizes : void 0,
          media: typeof O.media == "string" ? O.media : void 0,
        });
      }
    }),
    (jl.preloadModule = function (N, O) {
      if (typeof N == "string")
        if (O) {
          var j = El(O.as, O.crossOrigin);
          o.d.m(N, {
            as: typeof O.as == "string" && O.as !== "script" ? O.as : void 0,
            crossOrigin: j,
            integrity: typeof O.integrity == "string" ? O.integrity : void 0,
          });
        } else o.d.m(N);
    }),
    (jl.requestFormReset = function (N) {
      o.d.r(N);
    }),
    (jl.unstable_batchedUpdates = function (N, O) {
      return N(O);
    }),
    (jl.useFormState = function (N, O, j) {
      return dl.H.useFormState(N, O, j);
    }),
    (jl.useFormStatus = function () {
      return dl.H.useHostTransitionStatus();
    }),
    (jl.version = "19.1.0"),
    jl
  );
}
var er;
function Vv() {
  if (er) return af.exports;
  er = 1;
  function S() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(S);
      } catch (U) {
        console.error(U);
      }
  }
  return S(), (af.exports = Zv()), af.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var nr;
function Lv() {
  if (nr) return ge;
  nr = 1;
  var S = Cv(),
    U = uf(),
    M = Vv();
  function o(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return (
      "Minified React error #" +
      l +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function q(l) {
    return !(!l || (l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11));
  }
  function L(l) {
    var t = l,
      a = l;
    if (l.alternate) for (; t.return; ) t = t.return;
    else {
      l = t;
      do (t = l), (t.flags & 4098) !== 0 && (a = t.return), (l = t.return);
      while (l);
    }
    return t.tag === 3 ? a : null;
  }
  function dl(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (
        (t === null && ((l = l.alternate), l !== null && (t = l.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function El(l) {
    if (L(l) !== l) throw Error(o(188));
  }
  function N(l) {
    var t = l.alternate;
    if (!t) {
      if (((t = L(l)), t === null)) throw Error(o(188));
      return t !== l ? null : l;
    }
    for (var a = l, u = t; ; ) {
      var e = a.return;
      if (e === null) break;
      var n = e.alternate;
      if (n === null) {
        if (((u = e.return), u !== null)) {
          a = u;
          continue;
        }
        break;
      }
      if (e.child === n.child) {
        for (n = e.child; n; ) {
          if (n === a) return El(e), l;
          if (n === u) return El(e), t;
          n = n.sibling;
        }
        throw Error(o(188));
      }
      if (a.return !== u.return) (a = e), (u = n);
      else {
        for (var i = !1, c = e.child; c; ) {
          if (c === a) {
            (i = !0), (a = e), (u = n);
            break;
          }
          if (c === u) {
            (i = !0), (u = e), (a = n);
            break;
          }
          c = c.sibling;
        }
        if (!i) {
          for (c = n.child; c; ) {
            if (c === a) {
              (i = !0), (a = n), (u = e);
              break;
            }
            if (c === u) {
              (i = !0), (u = n), (a = e);
              break;
            }
            c = c.sibling;
          }
          if (!i) throw Error(o(189));
        }
      }
      if (a.alternate !== u) throw Error(o(190));
    }
    if (a.tag !== 3) throw Error(o(188));
    return a.stateNode.current === a ? l : t;
  }
  function O(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (((t = O(l)), t !== null)) return t;
      l = l.sibling;
    }
    return null;
  }
  var j = Object.assign,
    cl = Symbol.for("react.element"),
    nl = Symbol.for("react.transitional.element"),
    ql = Symbol.for("react.portal"),
    Hl = Symbol.for("react.fragment"),
    rt = Symbol.for("react.strict_mode"),
    Bl = Symbol.for("react.profiler"),
    ra = Symbol.for("react.provider"),
    Ot = Symbol.for("react.consumer"),
    Dl = Symbol.for("react.context"),
    ot = Symbol.for("react.forward_ref"),
    W = Symbol.for("react.suspense"),
    Vl = Symbol.for("react.suspense_list"),
    Ll = Symbol.for("react.memo"),
    Kl = Symbol.for("react.lazy"),
    yt = Symbol.for("react.activity"),
    ja = Symbol.for("react.memo_cache_sentinel"),
    zt = Symbol.iterator;
  function xl(l) {
    return l === null || typeof l != "object"
      ? null
      : ((l = (zt && l[zt]) || l["@@iterator"]),
        typeof l == "function" ? l : null);
  }
  var oa = Symbol.for("react.client.reference");
  function va(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === oa ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case Hl:
        return "Fragment";
      case Bl:
        return "Profiler";
      case rt:
        return "StrictMode";
      case W:
        return "Suspense";
      case Vl:
        return "SuspenseList";
      case yt:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case ql:
          return "Portal";
        case Dl:
          return (l.displayName || "Context") + ".Provider";
        case Ot:
          return (l._context.displayName || "Context") + ".Consumer";
        case ot:
          var t = l.render;
          return (
            (l = l.displayName),
            l ||
              ((l = t.displayName || t.name || ""),
              (l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef")),
            l
          );
        case Ll:
          return (
            (t = l.displayName || null), t !== null ? t : va(l.type) || "Memo"
          );
        case Kl:
          (t = l._payload), (l = l._init);
          try {
            return va(l(t));
          } catch {}
      }
    return null;
  }
  var Ul = Array.isArray,
    b = U.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    _ = M.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    G = { pending: !1, data: null, method: null, action: null },
    ul = [],
    s = -1;
  function A(l) {
    return { current: l };
  }
  function D(l) {
    0 > s || ((l.current = ul[s]), (ul[s] = null), s--);
  }
  function p(l, t) {
    s++, (ul[s] = l.current), (l.current = t);
  }
  var H = A(null),
    $ = A(null),
    Q = A(null),
    Jl = A(null);
  function fl(l, t) {
    switch ((p(Q, t), p($, l), p(H, null), t.nodeType)) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? pd(l) : 0;
        break;
      default:
        if (((l = t.tagName), (t = t.namespaceURI)))
          (t = pd(t)), (l = _d(t, l));
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    D(H), p(H, l);
  }
  function Qt() {
    D(H), D($), D(Q);
  }
  function Yn(l) {
    l.memoizedState !== null && p(Jl, l);
    var t = H.current,
      a = _d(t, l.type);
    t !== a && (p($, l), p(H, a));
  }
  function Se(l) {
    $.current === l && (D(H), D($)),
      Jl.current === l && (D(Jl), (re._currentValue = G));
  }
  var Bn = Object.prototype.hasOwnProperty,
    Gn = S.unstable_scheduleCallback,
    Xn = S.unstable_cancelCallback,
    vr = S.unstable_shouldYield,
    hr = S.unstable_requestPaint,
    gt = S.unstable_now,
    mr = S.unstable_getCurrentPriorityLevel,
    ef = S.unstable_ImmediatePriority,
    nf = S.unstable_UserBlockingPriority,
    be = S.unstable_NormalPriority,
    yr = S.unstable_LowPriority,
    cf = S.unstable_IdlePriority,
    gr = S.log,
    Sr = S.unstable_setDisableYieldValue,
    bu = null,
    wl = null;
  function Ct(l) {
    if (
      (typeof gr == "function" && Sr(l),
      wl && typeof wl.setStrictMode == "function")
    )
      try {
        wl.setStrictMode(bu, l);
      } catch {}
  }
  var Wl = Math.clz32 ? Math.clz32 : Tr,
    br = Math.log,
    Er = Math.LN2;
  function Tr(l) {
    return (l >>>= 0), l === 0 ? 32 : (31 - ((br(l) / Er) | 0)) | 0;
  }
  var Ee = 256,
    Te = 4194304;
  function ha(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function Ae(l, t, a) {
    var u = l.pendingLanes;
    if (u === 0) return 0;
    var e = 0,
      n = l.suspendedLanes,
      i = l.pingedLanes;
    l = l.warmLanes;
    var c = u & 134217727;
    return (
      c !== 0
        ? ((u = c & ~n),
          u !== 0
            ? (e = ha(u))
            : ((i &= c),
              i !== 0
                ? (e = ha(i))
                : a || ((a = c & ~l), a !== 0 && (e = ha(a)))))
        : ((c = u & ~n),
          c !== 0
            ? (e = ha(c))
            : i !== 0
            ? (e = ha(i))
            : a || ((a = u & ~l), a !== 0 && (e = ha(a)))),
      e === 0
        ? 0
        : t !== 0 &&
          t !== e &&
          (t & n) === 0 &&
          ((n = e & -e),
          (a = t & -t),
          n >= a || (n === 32 && (a & 4194048) !== 0))
        ? t
        : e
    );
  }
  function Eu(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function Ar(l, t) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function ff() {
    var l = Ee;
    return (Ee <<= 1), (Ee & 4194048) === 0 && (Ee = 256), l;
  }
  function sf() {
    var l = Te;
    return (Te <<= 1), (Te & 62914560) === 0 && (Te = 4194304), l;
  }
  function Qn(l) {
    for (var t = [], a = 0; 31 > a; a++) t.push(l);
    return t;
  }
  function Tu(l, t) {
    (l.pendingLanes |= t),
      t !== 268435456 &&
        ((l.suspendedLanes = 0), (l.pingedLanes = 0), (l.warmLanes = 0));
  }
  function Or(l, t, a, u, e, n) {
    var i = l.pendingLanes;
    (l.pendingLanes = a),
      (l.suspendedLanes = 0),
      (l.pingedLanes = 0),
      (l.warmLanes = 0),
      (l.expiredLanes &= a),
      (l.entangledLanes &= a),
      (l.errorRecoveryDisabledLanes &= a),
      (l.shellSuspendCounter = 0);
    var c = l.entanglements,
      f = l.expirationTimes,
      h = l.hiddenUpdates;
    for (a = i & ~a; 0 < a; ) {
      var g = 31 - Wl(a),
        T = 1 << g;
      (c[g] = 0), (f[g] = -1);
      var m = h[g];
      if (m !== null)
        for (h[g] = null, g = 0; g < m.length; g++) {
          var y = m[g];
          y !== null && (y.lane &= -536870913);
        }
      a &= ~T;
    }
    u !== 0 && df(l, u, 0),
      n !== 0 && e === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(i & ~t));
  }
  function df(l, t, a) {
    (l.pendingLanes |= t), (l.suspendedLanes &= ~t);
    var u = 31 - Wl(t);
    (l.entangledLanes |= t),
      (l.entanglements[u] = l.entanglements[u] | 1073741824 | (a & 4194090));
  }
  function rf(l, t) {
    var a = (l.entangledLanes |= t);
    for (l = l.entanglements; a; ) {
      var u = 31 - Wl(a),
        e = 1 << u;
      (e & t) | (l[u] & t) && (l[u] |= t), (a &= ~e);
    }
  }
  function Cn(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function Zn(l) {
    return (
      (l &= -l),
      2 < l ? (8 < l ? ((l & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function of() {
    var l = _.p;
    return l !== 0 ? l : ((l = window.event), l === void 0 ? 32 : Kd(l.type));
  }
  function zr(l, t) {
    var a = _.p;
    try {
      return (_.p = l), t();
    } finally {
      _.p = a;
    }
  }
  var Zt = Math.random().toString(36).slice(2),
    Nl = "__reactFiber$" + Zt,
    Gl = "__reactProps$" + Zt,
    qa = "__reactContainer$" + Zt,
    Vn = "__reactEvents$" + Zt,
    pr = "__reactListeners$" + Zt,
    _r = "__reactHandles$" + Zt,
    vf = "__reactResources$" + Zt,
    Au = "__reactMarker$" + Zt;
  function Ln(l) {
    delete l[Nl], delete l[Gl], delete l[Vn], delete l[pr], delete l[_r];
  }
  function Ha(l) {
    var t = l[Nl];
    if (t) return t;
    for (var a = l.parentNode; a; ) {
      if ((t = a[qa] || a[Nl])) {
        if (
          ((a = t.alternate),
          t.child !== null || (a !== null && a.child !== null))
        )
          for (l = Ud(l); l !== null; ) {
            if ((a = l[Nl])) return a;
            l = Ud(l);
          }
        return t;
      }
      (l = a), (a = l.parentNode);
    }
    return null;
  }
  function Ya(l) {
    if ((l = l[Nl] || l[qa])) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return l;
    }
    return null;
  }
  function Ou(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(o(33));
  }
  function Ba(l) {
    var t = l[vf];
    return (
      t ||
        (t = l[vf] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function Tl(l) {
    l[Au] = !0;
  }
  var hf = new Set(),
    mf = {};
  function ma(l, t) {
    Ga(l, t), Ga(l + "Capture", t);
  }
  function Ga(l, t) {
    for (mf[l] = t, l = 0; l < t.length; l++) hf.add(t[l]);
  }
  var Mr = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    yf = {},
    gf = {};
  function Dr(l) {
    return Bn.call(gf, l)
      ? !0
      : Bn.call(yf, l)
      ? !1
      : Mr.test(l)
      ? (gf[l] = !0)
      : ((yf[l] = !0), !1);
  }
  function Oe(l, t, a) {
    if (Dr(t))
      if (a === null) l.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var u = t.toLowerCase().slice(0, 5);
            if (u !== "data-" && u !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, "" + a);
      }
  }
  function ze(l, t, a) {
    if (a === null) l.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, "" + a);
    }
  }
  function pt(l, t, a, u) {
    if (u === null) l.removeAttribute(a);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(a);
          return;
      }
      l.setAttributeNS(t, a, "" + u);
    }
  }
  var Kn, Sf;
  function Xa(l) {
    if (Kn === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        (Kn = (t && t[1]) || ""),
          (Sf =
            -1 <
            a.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < a.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      Kn +
      l +
      Sf
    );
  }
  var Jn = !1;
  function wn(l, t) {
    if (!l || Jn) return "";
    Jn = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var u = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var T = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(T.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(T, []);
                } catch (y) {
                  var m = y;
                }
                Reflect.construct(l, [], T);
              } else {
                try {
                  T.call();
                } catch (y) {
                  m = y;
                }
                l.call(T.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (y) {
                m = y;
              }
              (T = l()) &&
                typeof T.catch == "function" &&
                T.catch(function () {});
            }
          } catch (y) {
            if (y && m && typeof y.stack == "string") return [y.stack, m.stack];
          }
          return [null, null];
        },
      };
      u.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var e = Object.getOwnPropertyDescriptor(
        u.DetermineComponentFrameRoot,
        "name"
      );
      e &&
        e.configurable &&
        Object.defineProperty(u.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var n = u.DetermineComponentFrameRoot(),
        i = n[0],
        c = n[1];
      if (i && c) {
        var f = i.split(`
`),
          h = c.split(`
`);
        for (
          e = u = 0;
          u < f.length && !f[u].includes("DetermineComponentFrameRoot");

        )
          u++;
        for (; e < h.length && !h[e].includes("DetermineComponentFrameRoot"); )
          e++;
        if (u === f.length || e === h.length)
          for (
            u = f.length - 1, e = h.length - 1;
            1 <= u && 0 <= e && f[u] !== h[e];

          )
            e--;
        for (; 1 <= u && 0 <= e; u--, e--)
          if (f[u] !== h[e]) {
            if (u !== 1 || e !== 1)
              do
                if ((u--, e--, 0 > e || f[u] !== h[e])) {
                  var g =
                    `
` + f[u].replace(" at new ", " at ");
                  return (
                    l.displayName &&
                      g.includes("<anonymous>") &&
                      (g = g.replace("<anonymous>", l.displayName)),
                    g
                  );
                }
              while (1 <= u && 0 <= e);
            break;
          }
      }
    } finally {
      (Jn = !1), (Error.prepareStackTrace = a);
    }
    return (a = l ? l.displayName || l.name : "") ? Xa(a) : "";
  }
  function xr(l) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Xa(l.type);
      case 16:
        return Xa("Lazy");
      case 13:
        return Xa("Suspense");
      case 19:
        return Xa("SuspenseList");
      case 0:
      case 15:
        return wn(l.type, !1);
      case 11:
        return wn(l.type.render, !1);
      case 1:
        return wn(l.type, !0);
      case 31:
        return Xa("Activity");
      default:
        return "";
    }
  }
  function bf(l) {
    try {
      var t = "";
      do (t += xr(l)), (l = l.return);
      while (l);
      return t;
    } catch (a) {
      return (
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack
      );
    }
  }
  function at(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function Ef(l) {
    var t = l.type;
    return (
      (l = l.nodeName) &&
      l.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Ur(l) {
    var t = Ef(l) ? "checked" : "value",
      a = Object.getOwnPropertyDescriptor(l.constructor.prototype, t),
      u = "" + l[t];
    if (
      !l.hasOwnProperty(t) &&
      typeof a < "u" &&
      typeof a.get == "function" &&
      typeof a.set == "function"
    ) {
      var e = a.get,
        n = a.set;
      return (
        Object.defineProperty(l, t, {
          configurable: !0,
          get: function () {
            return e.call(this);
          },
          set: function (i) {
            (u = "" + i), n.call(this, i);
          },
        }),
        Object.defineProperty(l, t, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return u;
          },
          setValue: function (i) {
            u = "" + i;
          },
          stopTracking: function () {
            (l._valueTracker = null), delete l[t];
          },
        }
      );
    }
  }
  function pe(l) {
    l._valueTracker || (l._valueTracker = Ur(l));
  }
  function Tf(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var a = t.getValue(),
      u = "";
    return (
      l && (u = Ef(l) ? (l.checked ? "true" : "false") : l.value),
      (l = u),
      l !== a ? (t.setValue(l), !0) : !1
    );
  }
  function _e(l) {
    if (
      ((l = l || (typeof document < "u" ? document : void 0)), typeof l > "u")
    )
      return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var Nr = /[\n"\\]/g;
  function ut(l) {
    return l.replace(Nr, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function Wn(l, t, a, u, e, n, i, c) {
    (l.name = ""),
      i != null &&
      typeof i != "function" &&
      typeof i != "symbol" &&
      typeof i != "boolean"
        ? (l.type = i)
        : l.removeAttribute("type"),
      t != null
        ? i === "number"
          ? ((t === 0 && l.value === "") || l.value != t) &&
            (l.value = "" + at(t))
          : l.value !== "" + at(t) && (l.value = "" + at(t))
        : (i !== "submit" && i !== "reset") || l.removeAttribute("value"),
      t != null
        ? $n(l, i, at(t))
        : a != null
        ? $n(l, i, at(a))
        : u != null && l.removeAttribute("value"),
      e == null && n != null && (l.defaultChecked = !!n),
      e != null &&
        (l.checked = e && typeof e != "function" && typeof e != "symbol"),
      c != null &&
      typeof c != "function" &&
      typeof c != "symbol" &&
      typeof c != "boolean"
        ? (l.name = "" + at(c))
        : l.removeAttribute("name");
  }
  function Af(l, t, a, u, e, n, i, c) {
    if (
      (n != null &&
        typeof n != "function" &&
        typeof n != "symbol" &&
        typeof n != "boolean" &&
        (l.type = n),
      t != null || a != null)
    ) {
      if (!((n !== "submit" && n !== "reset") || t != null)) return;
      (a = a != null ? "" + at(a) : ""),
        (t = t != null ? "" + at(t) : a),
        c || t === l.value || (l.value = t),
        (l.defaultValue = t);
    }
    (u = u ?? e),
      (u = typeof u != "function" && typeof u != "symbol" && !!u),
      (l.checked = c ? l.checked : !!u),
      (l.defaultChecked = !!u),
      i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        typeof i != "boolean" &&
        (l.name = i);
  }
  function $n(l, t, a) {
    (t === "number" && _e(l.ownerDocument) === l) ||
      l.defaultValue === "" + a ||
      (l.defaultValue = "" + a);
  }
  function Qa(l, t, a, u) {
    if (((l = l.options), t)) {
      t = {};
      for (var e = 0; e < a.length; e++) t["$" + a[e]] = !0;
      for (a = 0; a < l.length; a++)
        (e = t.hasOwnProperty("$" + l[a].value)),
          l[a].selected !== e && (l[a].selected = e),
          e && u && (l[a].defaultSelected = !0);
    } else {
      for (a = "" + at(a), t = null, e = 0; e < l.length; e++) {
        if (l[e].value === a) {
          (l[e].selected = !0), u && (l[e].defaultSelected = !0);
          return;
        }
        t !== null || l[e].disabled || (t = l[e]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Of(l, t, a) {
    if (
      t != null &&
      ((t = "" + at(t)), t !== l.value && (l.value = t), a == null)
    ) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = a != null ? "" + at(a) : "";
  }
  function zf(l, t, a, u) {
    if (t == null) {
      if (u != null) {
        if (a != null) throw Error(o(92));
        if (Ul(u)) {
          if (1 < u.length) throw Error(o(93));
          u = u[0];
        }
        a = u;
      }
      a == null && (a = ""), (t = a);
    }
    (a = at(t)),
      (l.defaultValue = a),
      (u = l.textContent),
      u === a && u !== "" && u !== null && (l.value = u);
  }
  function Ca(l, t) {
    if (t) {
      var a = l.firstChild;
      if (a && a === l.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var Rr = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function pf(l, t, a) {
    var u = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === ""
      ? u
        ? l.setProperty(t, "")
        : t === "float"
        ? (l.cssFloat = "")
        : (l[t] = "")
      : u
      ? l.setProperty(t, a)
      : typeof a != "number" || a === 0 || Rr.has(t)
      ? t === "float"
        ? (l.cssFloat = a)
        : (l[t] = ("" + a).trim())
      : (l[t] = a + "px");
  }
  function _f(l, t, a) {
    if (t != null && typeof t != "object") throw Error(o(62));
    if (((l = l.style), a != null)) {
      for (var u in a)
        !a.hasOwnProperty(u) ||
          (t != null && t.hasOwnProperty(u)) ||
          (u.indexOf("--") === 0
            ? l.setProperty(u, "")
            : u === "float"
            ? (l.cssFloat = "")
            : (l[u] = ""));
      for (var e in t)
        (u = t[e]), t.hasOwnProperty(e) && a[e] !== u && pf(l, e, u);
    } else for (var n in t) t.hasOwnProperty(n) && pf(l, n, t[n]);
  }
  function kn(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var jr = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    qr =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Me(l) {
    return qr.test("" + l)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : l;
  }
  var Fn = null;
  function Pn(l) {
    return (
      (l = l.target || l.srcElement || window),
      l.correspondingUseElement && (l = l.correspondingUseElement),
      l.nodeType === 3 ? l.parentNode : l
    );
  }
  var Za = null,
    Va = null;
  function Mf(l) {
    var t = Ya(l);
    if (t && (l = t.stateNode)) {
      var a = l[Gl] || null;
      l: switch (((l = t.stateNode), t.type)) {
        case "input":
          if (
            (Wn(
              l,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name
            ),
            (t = a.name),
            a.type === "radio" && t != null)
          ) {
            for (a = l; a.parentNode; ) a = a.parentNode;
            for (
              a = a.querySelectorAll(
                'input[name="' + ut("" + t) + '"][type="radio"]'
              ),
                t = 0;
              t < a.length;
              t++
            ) {
              var u = a[t];
              if (u !== l && u.form === l.form) {
                var e = u[Gl] || null;
                if (!e) throw Error(o(90));
                Wn(
                  u,
                  e.value,
                  e.defaultValue,
                  e.defaultValue,
                  e.checked,
                  e.defaultChecked,
                  e.type,
                  e.name
                );
              }
            }
            for (t = 0; t < a.length; t++)
              (u = a[t]), u.form === l.form && Tf(u);
          }
          break l;
        case "textarea":
          Of(l, a.value, a.defaultValue);
          break l;
        case "select":
          (t = a.value), t != null && Qa(l, !!a.multiple, t, !1);
      }
    }
  }
  var In = !1;
  function Df(l, t, a) {
    if (In) return l(t, a);
    In = !0;
    try {
      var u = l(t);
      return u;
    } finally {
      if (
        ((In = !1),
        (Za !== null || Va !== null) &&
          (vn(), Za && ((t = Za), (l = Va), (Va = Za = null), Mf(t), l)))
      )
        for (t = 0; t < l.length; t++) Mf(l[t]);
    }
  }
  function zu(l, t) {
    var a = l.stateNode;
    if (a === null) return null;
    var u = a[Gl] || null;
    if (u === null) return null;
    a = u[t];
    l: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (u = !u.disabled) ||
          ((l = l.type),
          (u = !(
            l === "button" ||
            l === "input" ||
            l === "select" ||
            l === "textarea"
          ))),
          (l = !u);
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (a && typeof a != "function") throw Error(o(231, t, typeof a));
    return a;
  }
  var _t = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    li = !1;
  if (_t)
    try {
      var pu = {};
      Object.defineProperty(pu, "passive", {
        get: function () {
          li = !0;
        },
      }),
        window.addEventListener("test", pu, pu),
        window.removeEventListener("test", pu, pu);
    } catch {
      li = !1;
    }
  var Vt = null,
    ti = null,
    De = null;
  function xf() {
    if (De) return De;
    var l,
      t = ti,
      a = t.length,
      u,
      e = "value" in Vt ? Vt.value : Vt.textContent,
      n = e.length;
    for (l = 0; l < a && t[l] === e[l]; l++);
    var i = a - l;
    for (u = 1; u <= i && t[a - u] === e[n - u]; u++);
    return (De = e.slice(l, 1 < u ? 1 - u : void 0));
  }
  function xe(l) {
    var t = l.keyCode;
    return (
      "charCode" in l
        ? ((l = l.charCode), l === 0 && t === 13 && (l = 13))
        : (l = t),
      l === 10 && (l = 13),
      32 <= l || l === 13 ? l : 0
    );
  }
  function Ue() {
    return !0;
  }
  function Uf() {
    return !1;
  }
  function Xl(l) {
    function t(a, u, e, n, i) {
      (this._reactName = a),
        (this._targetInst = e),
        (this.type = u),
        (this.nativeEvent = n),
        (this.target = i),
        (this.currentTarget = null);
      for (var c in l)
        l.hasOwnProperty(c) && ((a = l[c]), (this[c] = a ? a(n) : n[c]));
      return (
        (this.isDefaultPrevented = (
          n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1
        )
          ? Ue
          : Uf),
        (this.isPropagationStopped = Uf),
        this
      );
    }
    return (
      j(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a &&
            (a.preventDefault
              ? a.preventDefault()
              : typeof a.returnValue != "unknown" && (a.returnValue = !1),
            (this.isDefaultPrevented = Ue));
        },
        stopPropagation: function () {
          var a = this.nativeEvent;
          a &&
            (a.stopPropagation
              ? a.stopPropagation()
              : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
            (this.isPropagationStopped = Ue));
        },
        persist: function () {},
        isPersistent: Ue,
      }),
      t
    );
  }
  var ya = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (l) {
        return l.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Ne = Xl(ya),
    _u = j({}, ya, { view: 0, detail: 0 }),
    Hr = Xl(_u),
    ai,
    ui,
    Mu,
    Re = j({}, _u, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: ni,
      button: 0,
      buttons: 0,
      relatedTarget: function (l) {
        return l.relatedTarget === void 0
          ? l.fromElement === l.srcElement
            ? l.toElement
            : l.fromElement
          : l.relatedTarget;
      },
      movementX: function (l) {
        return "movementX" in l
          ? l.movementX
          : (l !== Mu &&
              (Mu && l.type === "mousemove"
                ? ((ai = l.screenX - Mu.screenX), (ui = l.screenY - Mu.screenY))
                : (ui = ai = 0),
              (Mu = l)),
            ai);
      },
      movementY: function (l) {
        return "movementY" in l ? l.movementY : ui;
      },
    }),
    Nf = Xl(Re),
    Yr = j({}, Re, { dataTransfer: 0 }),
    Br = Xl(Yr),
    Gr = j({}, _u, { relatedTarget: 0 }),
    ei = Xl(Gr),
    Xr = j({}, ya, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Qr = Xl(Xr),
    Cr = j({}, ya, {
      clipboardData: function (l) {
        return "clipboardData" in l ? l.clipboardData : window.clipboardData;
      },
    }),
    Zr = Xl(Cr),
    Vr = j({}, ya, { data: 0 }),
    Rf = Xl(Vr),
    Lr = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Kr = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    Jr = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function wr(l) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(l)
      : (l = Jr[l])
      ? !!t[l]
      : !1;
  }
  function ni() {
    return wr;
  }
  var Wr = j({}, _u, {
      key: function (l) {
        if (l.key) {
          var t = Lr[l.key] || l.key;
          if (t !== "Unidentified") return t;
        }
        return l.type === "keypress"
          ? ((l = xe(l)), l === 13 ? "Enter" : String.fromCharCode(l))
          : l.type === "keydown" || l.type === "keyup"
          ? Kr[l.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: ni,
      charCode: function (l) {
        return l.type === "keypress" ? xe(l) : 0;
      },
      keyCode: function (l) {
        return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
      },
      which: function (l) {
        return l.type === "keypress"
          ? xe(l)
          : l.type === "keydown" || l.type === "keyup"
          ? l.keyCode
          : 0;
      },
    }),
    $r = Xl(Wr),
    kr = j({}, Re, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    jf = Xl(kr),
    Fr = j({}, _u, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ni,
    }),
    Pr = Xl(Fr),
    Ir = j({}, ya, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    lo = Xl(Ir),
    to = j({}, Re, {
      deltaX: function (l) {
        return "deltaX" in l
          ? l.deltaX
          : "wheelDeltaX" in l
          ? -l.wheelDeltaX
          : 0;
      },
      deltaY: function (l) {
        return "deltaY" in l
          ? l.deltaY
          : "wheelDeltaY" in l
          ? -l.wheelDeltaY
          : "wheelDelta" in l
          ? -l.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    ao = Xl(to),
    uo = j({}, ya, { newState: 0, oldState: 0 }),
    eo = Xl(uo),
    no = [9, 13, 27, 32],
    ii = _t && "CompositionEvent" in window,
    Du = null;
  _t && "documentMode" in document && (Du = document.documentMode);
  var io = _t && "TextEvent" in window && !Du,
    qf = _t && (!ii || (Du && 8 < Du && 11 >= Du)),
    Hf = " ",
    Yf = !1;
  function Bf(l, t) {
    switch (l) {
      case "keyup":
        return no.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Gf(l) {
    return (l = l.detail), typeof l == "object" && "data" in l ? l.data : null;
  }
  var La = !1;
  function co(l, t) {
    switch (l) {
      case "compositionend":
        return Gf(t);
      case "keypress":
        return t.which !== 32 ? null : ((Yf = !0), Hf);
      case "textInput":
        return (l = t.data), l === Hf && Yf ? null : l;
      default:
        return null;
    }
  }
  function fo(l, t) {
    if (La)
      return l === "compositionend" || (!ii && Bf(l, t))
        ? ((l = xf()), (De = ti = Vt = null), (La = !1), l)
        : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return qf && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var so = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Xf(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!so[l.type] : t === "textarea";
  }
  function Qf(l, t, a, u) {
    Za ? (Va ? Va.push(u) : (Va = [u])) : (Za = u),
      (t = bn(t, "onChange")),
      0 < t.length &&
        ((a = new Ne("onChange", "change", null, a, u)),
        l.push({ event: a, listeners: t }));
  }
  var xu = null,
    Uu = null;
  function ro(l) {
    Ed(l, 0);
  }
  function je(l) {
    var t = Ou(l);
    if (Tf(t)) return l;
  }
  function Cf(l, t) {
    if (l === "change") return t;
  }
  var Zf = !1;
  if (_t) {
    var ci;
    if (_t) {
      var fi = "oninput" in document;
      if (!fi) {
        var Vf = document.createElement("div");
        Vf.setAttribute("oninput", "return;"),
          (fi = typeof Vf.oninput == "function");
      }
      ci = fi;
    } else ci = !1;
    Zf = ci && (!document.documentMode || 9 < document.documentMode);
  }
  function Lf() {
    xu && (xu.detachEvent("onpropertychange", Kf), (Uu = xu = null));
  }
  function Kf(l) {
    if (l.propertyName === "value" && je(Uu)) {
      var t = [];
      Qf(t, Uu, l, Pn(l)), Df(ro, t);
    }
  }
  function oo(l, t, a) {
    l === "focusin"
      ? (Lf(), (xu = t), (Uu = a), xu.attachEvent("onpropertychange", Kf))
      : l === "focusout" && Lf();
  }
  function vo(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return je(Uu);
  }
  function ho(l, t) {
    if (l === "click") return je(t);
  }
  function mo(l, t) {
    if (l === "input" || l === "change") return je(t);
  }
  function yo(l, t) {
    return (l === t && (l !== 0 || 1 / l === 1 / t)) || (l !== l && t !== t);
  }
  var $l = typeof Object.is == "function" ? Object.is : yo;
  function Nu(l, t) {
    if ($l(l, t)) return !0;
    if (
      typeof l != "object" ||
      l === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var a = Object.keys(l),
      u = Object.keys(t);
    if (a.length !== u.length) return !1;
    for (u = 0; u < a.length; u++) {
      var e = a[u];
      if (!Bn.call(t, e) || !$l(l[e], t[e])) return !1;
    }
    return !0;
  }
  function Jf(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function wf(l, t) {
    var a = Jf(l);
    l = 0;
    for (var u; a; ) {
      if (a.nodeType === 3) {
        if (((u = l + a.textContent.length), l <= t && u >= t))
          return { node: a, offset: t - l };
        l = u;
      }
      l: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break l;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = Jf(a);
    }
  }
  function Wf(l, t) {
    return l && t
      ? l === t
        ? !0
        : l && l.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? Wf(l, t.parentNode)
        : "contains" in l
        ? l.contains(t)
        : l.compareDocumentPosition
        ? !!(l.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function $f(l) {
    l =
      l != null &&
      l.ownerDocument != null &&
      l.ownerDocument.defaultView != null
        ? l.ownerDocument.defaultView
        : window;
    for (var t = _e(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) l = t.contentWindow;
      else break;
      t = _e(l.document);
    }
    return t;
  }
  function si(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (l.type === "text" ||
          l.type === "search" ||
          l.type === "tel" ||
          l.type === "url" ||
          l.type === "password")) ||
        t === "textarea" ||
        l.contentEditable === "true")
    );
  }
  var go = _t && "documentMode" in document && 11 >= document.documentMode,
    Ka = null,
    di = null,
    Ru = null,
    ri = !1;
  function kf(l, t, a) {
    var u =
      a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    ri ||
      Ka == null ||
      Ka !== _e(u) ||
      ((u = Ka),
      "selectionStart" in u && si(u)
        ? (u = { start: u.selectionStart, end: u.selectionEnd })
        : ((u = (
            (u.ownerDocument && u.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (u = {
            anchorNode: u.anchorNode,
            anchorOffset: u.anchorOffset,
            focusNode: u.focusNode,
            focusOffset: u.focusOffset,
          })),
      (Ru && Nu(Ru, u)) ||
        ((Ru = u),
        (u = bn(di, "onSelect")),
        0 < u.length &&
          ((t = new Ne("onSelect", "select", null, t, a)),
          l.push({ event: t, listeners: u }),
          (t.target = Ka))));
  }
  function ga(l, t) {
    var a = {};
    return (
      (a[l.toLowerCase()] = t.toLowerCase()),
      (a["Webkit" + l] = "webkit" + t),
      (a["Moz" + l] = "moz" + t),
      a
    );
  }
  var Ja = {
      animationend: ga("Animation", "AnimationEnd"),
      animationiteration: ga("Animation", "AnimationIteration"),
      animationstart: ga("Animation", "AnimationStart"),
      transitionrun: ga("Transition", "TransitionRun"),
      transitionstart: ga("Transition", "TransitionStart"),
      transitioncancel: ga("Transition", "TransitionCancel"),
      transitionend: ga("Transition", "TransitionEnd"),
    },
    oi = {},
    Ff = {};
  _t &&
    ((Ff = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Ja.animationend.animation,
      delete Ja.animationiteration.animation,
      delete Ja.animationstart.animation),
    "TransitionEvent" in window || delete Ja.transitionend.transition);
  function Sa(l) {
    if (oi[l]) return oi[l];
    if (!Ja[l]) return l;
    var t = Ja[l],
      a;
    for (a in t) if (t.hasOwnProperty(a) && a in Ff) return (oi[l] = t[a]);
    return l;
  }
  var Pf = Sa("animationend"),
    If = Sa("animationiteration"),
    ls = Sa("animationstart"),
    So = Sa("transitionrun"),
    bo = Sa("transitionstart"),
    Eo = Sa("transitioncancel"),
    ts = Sa("transitionend"),
    as = new Map(),
    vi =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  vi.push("scrollEnd");
  function vt(l, t) {
    as.set(l, t), ma(t, [l]);
  }
  var us = new WeakMap();
  function et(l, t) {
    if (typeof l == "object" && l !== null) {
      var a = us.get(l);
      return a !== void 0
        ? a
        : ((t = { value: l, source: t, stack: bf(t) }), us.set(l, t), t);
    }
    return { value: l, source: t, stack: bf(t) };
  }
  var nt = [],
    wa = 0,
    hi = 0;
  function qe() {
    for (var l = wa, t = (hi = wa = 0); t < l; ) {
      var a = nt[t];
      nt[t++] = null;
      var u = nt[t];
      nt[t++] = null;
      var e = nt[t];
      nt[t++] = null;
      var n = nt[t];
      if (((nt[t++] = null), u !== null && e !== null)) {
        var i = u.pending;
        i === null ? (e.next = e) : ((e.next = i.next), (i.next = e)),
          (u.pending = e);
      }
      n !== 0 && es(a, e, n);
    }
  }
  function He(l, t, a, u) {
    (nt[wa++] = l),
      (nt[wa++] = t),
      (nt[wa++] = a),
      (nt[wa++] = u),
      (hi |= u),
      (l.lanes |= u),
      (l = l.alternate),
      l !== null && (l.lanes |= u);
  }
  function mi(l, t, a, u) {
    return He(l, t, a, u), Ye(l);
  }
  function Wa(l, t) {
    return He(l, null, null, t), Ye(l);
  }
  function es(l, t, a) {
    l.lanes |= a;
    var u = l.alternate;
    u !== null && (u.lanes |= a);
    for (var e = !1, n = l.return; n !== null; )
      (n.childLanes |= a),
        (u = n.alternate),
        u !== null && (u.childLanes |= a),
        n.tag === 22 &&
          ((l = n.stateNode), l === null || l._visibility & 1 || (e = !0)),
        (l = n),
        (n = n.return);
    return l.tag === 3
      ? ((n = l.stateNode),
        e &&
          t !== null &&
          ((e = 31 - Wl(a)),
          (l = n.hiddenUpdates),
          (u = l[e]),
          u === null ? (l[e] = [t]) : u.push(t),
          (t.lane = a | 536870912)),
        n)
      : null;
  }
  function Ye(l) {
    if (50 < ue) throw ((ue = 0), (Tc = null), Error(o(185)));
    for (var t = l.return; t !== null; ) (l = t), (t = l.return);
    return l.tag === 3 ? l.stateNode : null;
  }
  var $a = {};
  function To(l, t, a, u) {
    (this.tag = l),
      (this.key = a),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = u),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function kl(l, t, a, u) {
    return new To(l, t, a, u);
  }
  function yi(l) {
    return (l = l.prototype), !(!l || !l.isReactComponent);
  }
  function Mt(l, t) {
    var a = l.alternate;
    return (
      a === null
        ? ((a = kl(l.tag, t, l.key, l.mode)),
          (a.elementType = l.elementType),
          (a.type = l.type),
          (a.stateNode = l.stateNode),
          (a.alternate = l),
          (l.alternate = a))
        : ((a.pendingProps = t),
          (a.type = l.type),
          (a.flags = 0),
          (a.subtreeFlags = 0),
          (a.deletions = null)),
      (a.flags = l.flags & 65011712),
      (a.childLanes = l.childLanes),
      (a.lanes = l.lanes),
      (a.child = l.child),
      (a.memoizedProps = l.memoizedProps),
      (a.memoizedState = l.memoizedState),
      (a.updateQueue = l.updateQueue),
      (t = l.dependencies),
      (a.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (a.sibling = l.sibling),
      (a.index = l.index),
      (a.ref = l.ref),
      (a.refCleanup = l.refCleanup),
      a
    );
  }
  function ns(l, t) {
    l.flags &= 65011714;
    var a = l.alternate;
    return (
      a === null
        ? ((l.childLanes = 0),
          (l.lanes = t),
          (l.child = null),
          (l.subtreeFlags = 0),
          (l.memoizedProps = null),
          (l.memoizedState = null),
          (l.updateQueue = null),
          (l.dependencies = null),
          (l.stateNode = null))
        : ((l.childLanes = a.childLanes),
          (l.lanes = a.lanes),
          (l.child = a.child),
          (l.subtreeFlags = 0),
          (l.deletions = null),
          (l.memoizedProps = a.memoizedProps),
          (l.memoizedState = a.memoizedState),
          (l.updateQueue = a.updateQueue),
          (l.type = a.type),
          (t = a.dependencies),
          (l.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      l
    );
  }
  function Be(l, t, a, u, e, n) {
    var i = 0;
    if (((u = l), typeof l == "function")) yi(l) && (i = 1);
    else if (typeof l == "string")
      i = Ov(l, a, H.current)
        ? 26
        : l === "html" || l === "head" || l === "body"
        ? 27
        : 5;
    else
      l: switch (l) {
        case yt:
          return (l = kl(31, a, t, e)), (l.elementType = yt), (l.lanes = n), l;
        case Hl:
          return ba(a.children, e, n, t);
        case rt:
          (i = 8), (e |= 24);
          break;
        case Bl:
          return (
            (l = kl(12, a, t, e | 2)), (l.elementType = Bl), (l.lanes = n), l
          );
        case W:
          return (l = kl(13, a, t, e)), (l.elementType = W), (l.lanes = n), l;
        case Vl:
          return (l = kl(19, a, t, e)), (l.elementType = Vl), (l.lanes = n), l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case ra:
              case Dl:
                i = 10;
                break l;
              case Ot:
                i = 9;
                break l;
              case ot:
                i = 11;
                break l;
              case Ll:
                i = 14;
                break l;
              case Kl:
                (i = 16), (u = null);
                break l;
            }
          (i = 29),
            (a = Error(o(130, l === null ? "null" : typeof l, ""))),
            (u = null);
      }
    return (
      (t = kl(i, a, t, e)), (t.elementType = l), (t.type = u), (t.lanes = n), t
    );
  }
  function ba(l, t, a, u) {
    return (l = kl(7, l, u, t)), (l.lanes = a), l;
  }
  function gi(l, t, a) {
    return (l = kl(6, l, null, t)), (l.lanes = a), l;
  }
  function Si(l, t, a) {
    return (
      (t = kl(4, l.children !== null ? l.children : [], l.key, t)),
      (t.lanes = a),
      (t.stateNode = {
        containerInfo: l.containerInfo,
        pendingChildren: null,
        implementation: l.implementation,
      }),
      t
    );
  }
  var ka = [],
    Fa = 0,
    Ge = null,
    Xe = 0,
    it = [],
    ct = 0,
    Ea = null,
    Dt = 1,
    xt = "";
  function Ta(l, t) {
    (ka[Fa++] = Xe), (ka[Fa++] = Ge), (Ge = l), (Xe = t);
  }
  function is(l, t, a) {
    (it[ct++] = Dt), (it[ct++] = xt), (it[ct++] = Ea), (Ea = l);
    var u = Dt;
    l = xt;
    var e = 32 - Wl(u) - 1;
    (u &= ~(1 << e)), (a += 1);
    var n = 32 - Wl(t) + e;
    if (30 < n) {
      var i = e - (e % 5);
      (n = (u & ((1 << i) - 1)).toString(32)),
        (u >>= i),
        (e -= i),
        (Dt = (1 << (32 - Wl(t) + e)) | (a << e) | u),
        (xt = n + l);
    } else (Dt = (1 << n) | (a << e) | u), (xt = l);
  }
  function bi(l) {
    l.return !== null && (Ta(l, 1), is(l, 1, 0));
  }
  function Ei(l) {
    for (; l === Ge; )
      (Ge = ka[--Fa]), (ka[Fa] = null), (Xe = ka[--Fa]), (ka[Fa] = null);
    for (; l === Ea; )
      (Ea = it[--ct]),
        (it[ct] = null),
        (xt = it[--ct]),
        (it[ct] = null),
        (Dt = it[--ct]),
        (it[ct] = null);
  }
  var Yl = null,
    ol = null,
    F = !1,
    Aa = null,
    St = !1,
    Ti = Error(o(519));
  function Oa(l) {
    var t = Error(o(418, ""));
    throw (Hu(et(t, l)), Ti);
  }
  function cs(l) {
    var t = l.stateNode,
      a = l.type,
      u = l.memoizedProps;
    switch (((t[Nl] = l), (t[Gl] = u), a)) {
      case "dialog":
        J("cancel", t), J("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        J("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < ne.length; a++) J(ne[a], t);
        break;
      case "source":
        J("error", t);
        break;
      case "img":
      case "image":
      case "link":
        J("error", t), J("load", t);
        break;
      case "details":
        J("toggle", t);
        break;
      case "input":
        J("invalid", t),
          Af(
            t,
            u.value,
            u.defaultValue,
            u.checked,
            u.defaultChecked,
            u.type,
            u.name,
            !0
          ),
          pe(t);
        break;
      case "select":
        J("invalid", t);
        break;
      case "textarea":
        J("invalid", t), zf(t, u.value, u.defaultValue, u.children), pe(t);
    }
    (a = u.children),
      (typeof a != "string" && typeof a != "number" && typeof a != "bigint") ||
      t.textContent === "" + a ||
      u.suppressHydrationWarning === !0 ||
      zd(t.textContent, a)
        ? (u.popover != null && (J("beforetoggle", t), J("toggle", t)),
          u.onScroll != null && J("scroll", t),
          u.onScrollEnd != null && J("scrollend", t),
          u.onClick != null && (t.onclick = En),
          (t = !0))
        : (t = !1),
      t || Oa(l);
  }
  function fs(l) {
    for (Yl = l.return; Yl; )
      switch (Yl.tag) {
        case 5:
        case 13:
          St = !1;
          return;
        case 27:
        case 3:
          St = !0;
          return;
        default:
          Yl = Yl.return;
      }
  }
  function ju(l) {
    if (l !== Yl) return !1;
    if (!F) return fs(l), (F = !0), !1;
    var t = l.tag,
      a;
    if (
      ((a = t !== 3 && t !== 27) &&
        ((a = t === 5) &&
          ((a = l.type),
          (a =
            !(a !== "form" && a !== "button") || Bc(l.type, l.memoizedProps))),
        (a = !a)),
      a && ol && Oa(l),
      fs(l),
      t === 13)
    ) {
      if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
        throw Error(o(317));
      l: {
        for (l = l.nextSibling, t = 0; l; ) {
          if (l.nodeType === 8)
            if (((a = l.data), a === "/$")) {
              if (t === 0) {
                ol = mt(l.nextSibling);
                break l;
              }
              t--;
            } else (a !== "$" && a !== "$!" && a !== "$?") || t++;
          l = l.nextSibling;
        }
        ol = null;
      }
    } else
      t === 27
        ? ((t = ol), na(l.type) ? ((l = Cc), (Cc = null), (ol = l)) : (ol = t))
        : (ol = Yl ? mt(l.stateNode.nextSibling) : null);
    return !0;
  }
  function qu() {
    (ol = Yl = null), (F = !1);
  }
  function ss() {
    var l = Aa;
    return (
      l !== null &&
        (Zl === null ? (Zl = l) : Zl.push.apply(Zl, l), (Aa = null)),
      l
    );
  }
  function Hu(l) {
    Aa === null ? (Aa = [l]) : Aa.push(l);
  }
  var Ai = A(null),
    za = null,
    Ut = null;
  function Lt(l, t, a) {
    p(Ai, t._currentValue), (t._currentValue = a);
  }
  function Nt(l) {
    (l._currentValue = Ai.current), D(Ai);
  }
  function Oi(l, t, a) {
    for (; l !== null; ) {
      var u = l.alternate;
      if (
        ((l.childLanes & t) !== t
          ? ((l.childLanes |= t), u !== null && (u.childLanes |= t))
          : u !== null && (u.childLanes & t) !== t && (u.childLanes |= t),
        l === a)
      )
        break;
      l = l.return;
    }
  }
  function zi(l, t, a, u) {
    var e = l.child;
    for (e !== null && (e.return = l); e !== null; ) {
      var n = e.dependencies;
      if (n !== null) {
        var i = e.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var c = n;
          n = e;
          for (var f = 0; f < t.length; f++)
            if (c.context === t[f]) {
              (n.lanes |= a),
                (c = n.alternate),
                c !== null && (c.lanes |= a),
                Oi(n.return, a, l),
                u || (i = null);
              break l;
            }
          n = c.next;
        }
      } else if (e.tag === 18) {
        if (((i = e.return), i === null)) throw Error(o(341));
        (i.lanes |= a),
          (n = i.alternate),
          n !== null && (n.lanes |= a),
          Oi(i, a, l),
          (i = null);
      } else i = e.child;
      if (i !== null) i.return = e;
      else
        for (i = e; i !== null; ) {
          if (i === l) {
            i = null;
            break;
          }
          if (((e = i.sibling), e !== null)) {
            (e.return = i.return), (i = e);
            break;
          }
          i = i.return;
        }
      e = i;
    }
  }
  function Yu(l, t, a, u) {
    l = null;
    for (var e = t, n = !1; e !== null; ) {
      if (!n) {
        if ((e.flags & 524288) !== 0) n = !0;
        else if ((e.flags & 262144) !== 0) break;
      }
      if (e.tag === 10) {
        var i = e.alternate;
        if (i === null) throw Error(o(387));
        if (((i = i.memoizedProps), i !== null)) {
          var c = e.type;
          $l(e.pendingProps.value, i.value) ||
            (l !== null ? l.push(c) : (l = [c]));
        }
      } else if (e === Jl.current) {
        if (((i = e.alternate), i === null)) throw Error(o(387));
        i.memoizedState.memoizedState !== e.memoizedState.memoizedState &&
          (l !== null ? l.push(re) : (l = [re]));
      }
      e = e.return;
    }
    l !== null && zi(t, l, a, u), (t.flags |= 262144);
  }
  function Qe(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!$l(l.context._currentValue, l.memoizedValue)) return !0;
      l = l.next;
    }
    return !1;
  }
  function pa(l) {
    (za = l),
      (Ut = null),
      (l = l.dependencies),
      l !== null && (l.firstContext = null);
  }
  function Rl(l) {
    return ds(za, l);
  }
  function Ce(l, t) {
    return za === null && pa(l), ds(l, t);
  }
  function ds(l, t) {
    var a = t._currentValue;
    if (((t = { context: t, memoizedValue: a, next: null }), Ut === null)) {
      if (l === null) throw Error(o(308));
      (Ut = t),
        (l.dependencies = { lanes: 0, firstContext: t }),
        (l.flags |= 524288);
    } else Ut = Ut.next = t;
    return a;
  }
  var Ao =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var l = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (a, u) {
                  l.push(u);
                },
              });
            this.abort = function () {
              (t.aborted = !0),
                l.forEach(function (a) {
                  return a();
                });
            };
          },
    Oo = S.unstable_scheduleCallback,
    zo = S.unstable_NormalPriority,
    Sl = {
      $$typeof: Dl,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function pi() {
    return { controller: new Ao(), data: new Map(), refCount: 0 };
  }
  function Bu(l) {
    l.refCount--,
      l.refCount === 0 &&
        Oo(zo, function () {
          l.controller.abort();
        });
  }
  var Gu = null,
    _i = 0,
    Pa = 0,
    Ia = null;
  function po(l, t) {
    if (Gu === null) {
      var a = (Gu = []);
      (_i = 0),
        (Pa = Dc()),
        (Ia = {
          status: "pending",
          value: void 0,
          then: function (u) {
            a.push(u);
          },
        });
    }
    return _i++, t.then(rs, rs), t;
  }
  function rs() {
    if (--_i === 0 && Gu !== null) {
      Ia !== null && (Ia.status = "fulfilled");
      var l = Gu;
      (Gu = null), (Pa = 0), (Ia = null);
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function _o(l, t) {
    var a = [],
      u = {
        status: "pending",
        value: null,
        reason: null,
        then: function (e) {
          a.push(e);
        },
      };
    return (
      l.then(
        function () {
          (u.status = "fulfilled"), (u.value = t);
          for (var e = 0; e < a.length; e++) (0, a[e])(t);
        },
        function (e) {
          for (u.status = "rejected", u.reason = e, e = 0; e < a.length; e++)
            (0, a[e])(void 0);
        }
      ),
      u
    );
  }
  var os = b.S;
  b.S = function (l, t) {
    typeof t == "object" &&
      t !== null &&
      typeof t.then == "function" &&
      po(l, t),
      os !== null && os(l, t);
  };
  var _a = A(null);
  function Mi() {
    var l = _a.current;
    return l !== null ? l : il.pooledCache;
  }
  function Ze(l, t) {
    t === null ? p(_a, _a.current) : p(_a, t.pool);
  }
  function vs() {
    var l = Mi();
    return l === null ? null : { parent: Sl._currentValue, pool: l };
  }
  var Xu = Error(o(460)),
    hs = Error(o(474)),
    Ve = Error(o(542)),
    Di = { then: function () {} };
  function ms(l) {
    return (l = l.status), l === "fulfilled" || l === "rejected";
  }
  function Le() {}
  function ys(l, t, a) {
    switch (
      ((a = l[a]),
      a === void 0 ? l.push(t) : a !== t && (t.then(Le, Le), (t = a)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((l = t.reason), Ss(l), l);
      default:
        if (typeof t.status == "string") t.then(Le, Le);
        else {
          if (((l = il), l !== null && 100 < l.shellSuspendCounter))
            throw Error(o(482));
          (l = t),
            (l.status = "pending"),
            l.then(
              function (u) {
                if (t.status === "pending") {
                  var e = t;
                  (e.status = "fulfilled"), (e.value = u);
                }
              },
              function (u) {
                if (t.status === "pending") {
                  var e = t;
                  (e.status = "rejected"), (e.reason = u);
                }
              }
            );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((l = t.reason), Ss(l), l);
        }
        throw ((Qu = t), Xu);
    }
  }
  var Qu = null;
  function gs() {
    if (Qu === null) throw Error(o(459));
    var l = Qu;
    return (Qu = null), l;
  }
  function Ss(l) {
    if (l === Xu || l === Ve) throw Error(o(483));
  }
  var Kt = !1;
  function xi(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Ui(l, t) {
    (l = l.updateQueue),
      t.updateQueue === l &&
        (t.updateQueue = {
          baseState: l.baseState,
          firstBaseUpdate: l.firstBaseUpdate,
          lastBaseUpdate: l.lastBaseUpdate,
          shared: l.shared,
          callbacks: null,
        });
  }
  function Jt(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function wt(l, t, a) {
    var u = l.updateQueue;
    if (u === null) return null;
    if (((u = u.shared), (P & 2) !== 0)) {
      var e = u.pending;
      return (
        e === null ? (t.next = t) : ((t.next = e.next), (e.next = t)),
        (u.pending = t),
        (t = Ye(l)),
        es(l, null, a),
        t
      );
    }
    return He(l, u, t, a), Ye(l);
  }
  function Cu(l, t, a) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (a & 4194048) !== 0))
    ) {
      var u = t.lanes;
      (u &= l.pendingLanes), (a |= u), (t.lanes = a), rf(l, a);
    }
  }
  function Ni(l, t) {
    var a = l.updateQueue,
      u = l.alternate;
    if (u !== null && ((u = u.updateQueue), a === u)) {
      var e = null,
        n = null;
      if (((a = a.firstBaseUpdate), a !== null)) {
        do {
          var i = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null,
          };
          n === null ? (e = n = i) : (n = n.next = i), (a = a.next);
        } while (a !== null);
        n === null ? (e = n = t) : (n = n.next = t);
      } else e = n = t;
      (a = {
        baseState: u.baseState,
        firstBaseUpdate: e,
        lastBaseUpdate: n,
        shared: u.shared,
        callbacks: u.callbacks,
      }),
        (l.updateQueue = a);
      return;
    }
    (l = a.lastBaseUpdate),
      l === null ? (a.firstBaseUpdate = t) : (l.next = t),
      (a.lastBaseUpdate = t);
  }
  var Ri = !1;
  function Zu() {
    if (Ri) {
      var l = Ia;
      if (l !== null) throw l;
    }
  }
  function Vu(l, t, a, u) {
    Ri = !1;
    var e = l.updateQueue;
    Kt = !1;
    var n = e.firstBaseUpdate,
      i = e.lastBaseUpdate,
      c = e.shared.pending;
    if (c !== null) {
      e.shared.pending = null;
      var f = c,
        h = f.next;
      (f.next = null), i === null ? (n = h) : (i.next = h), (i = f);
      var g = l.alternate;
      g !== null &&
        ((g = g.updateQueue),
        (c = g.lastBaseUpdate),
        c !== i &&
          (c === null ? (g.firstBaseUpdate = h) : (c.next = h),
          (g.lastBaseUpdate = f)));
    }
    if (n !== null) {
      var T = e.baseState;
      (i = 0), (g = h = f = null), (c = n);
      do {
        var m = c.lane & -536870913,
          y = m !== c.lane;
        if (y ? (w & m) === m : (u & m) === m) {
          m !== 0 && m === Pa && (Ri = !0),
            g !== null &&
              (g = g.next =
                {
                  lane: 0,
                  tag: c.tag,
                  payload: c.payload,
                  callback: null,
                  next: null,
                });
          l: {
            var X = l,
              Y = c;
            m = t;
            var al = a;
            switch (Y.tag) {
              case 1:
                if (((X = Y.payload), typeof X == "function")) {
                  T = X.call(al, T, m);
                  break l;
                }
                T = X;
                break l;
              case 3:
                X.flags = (X.flags & -65537) | 128;
              case 0:
                if (
                  ((X = Y.payload),
                  (m = typeof X == "function" ? X.call(al, T, m) : X),
                  m == null)
                )
                  break l;
                T = j({}, T, m);
                break l;
              case 2:
                Kt = !0;
            }
          }
          (m = c.callback),
            m !== null &&
              ((l.flags |= 64),
              y && (l.flags |= 8192),
              (y = e.callbacks),
              y === null ? (e.callbacks = [m]) : y.push(m));
        } else
          (y = {
            lane: m,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null,
          }),
            g === null ? ((h = g = y), (f = T)) : (g = g.next = y),
            (i |= m);
        if (((c = c.next), c === null)) {
          if (((c = e.shared.pending), c === null)) break;
          (y = c),
            (c = y.next),
            (y.next = null),
            (e.lastBaseUpdate = y),
            (e.shared.pending = null);
        }
      } while (!0);
      g === null && (f = T),
        (e.baseState = f),
        (e.firstBaseUpdate = h),
        (e.lastBaseUpdate = g),
        n === null && (e.shared.lanes = 0),
        (ta |= i),
        (l.lanes = i),
        (l.memoizedState = T);
    }
  }
  function bs(l, t) {
    if (typeof l != "function") throw Error(o(191, l));
    l.call(t);
  }
  function Es(l, t) {
    var a = l.callbacks;
    if (a !== null)
      for (l.callbacks = null, l = 0; l < a.length; l++) bs(a[l], t);
  }
  var lu = A(null),
    Ke = A(0);
  function Ts(l, t) {
    (l = Gt), p(Ke, l), p(lu, t), (Gt = l | t.baseLanes);
  }
  function ji() {
    p(Ke, Gt), p(lu, lu.current);
  }
  function qi() {
    (Gt = Ke.current), D(lu), D(Ke);
  }
  var Wt = 0,
    Z = null,
    ll = null,
    yl = null,
    Je = !1,
    tu = !1,
    Ma = !1,
    we = 0,
    Lu = 0,
    au = null,
    Mo = 0;
  function hl() {
    throw Error(o(321));
  }
  function Hi(l, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < l.length; a++)
      if (!$l(l[a], t[a])) return !1;
    return !0;
  }
  function Yi(l, t, a, u, e, n) {
    return (
      (Wt = n),
      (Z = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (b.H = l === null || l.memoizedState === null ? e0 : n0),
      (Ma = !1),
      (n = a(u, e)),
      (Ma = !1),
      tu && (n = Os(t, a, u, e)),
      As(l),
      n
    );
  }
  function As(l) {
    b.H = Ie;
    var t = ll !== null && ll.next !== null;
    if (((Wt = 0), (yl = ll = Z = null), (Je = !1), (Lu = 0), (au = null), t))
      throw Error(o(300));
    l === null ||
      Al ||
      ((l = l.dependencies), l !== null && Qe(l) && (Al = !0));
  }
  function Os(l, t, a, u) {
    Z = l;
    var e = 0;
    do {
      if ((tu && (au = null), (Lu = 0), (tu = !1), 25 <= e))
        throw Error(o(301));
      if (((e += 1), (yl = ll = null), l.updateQueue != null)) {
        var n = l.updateQueue;
        (n.lastEffect = null),
          (n.events = null),
          (n.stores = null),
          n.memoCache != null && (n.memoCache.index = 0);
      }
      (b.H = qo), (n = t(a, u));
    } while (tu);
    return n;
  }
  function Do() {
    var l = b.H,
      t = l.useState()[0];
    return (
      (t = typeof t.then == "function" ? Ku(t) : t),
      (l = l.useState()[0]),
      (ll !== null ? ll.memoizedState : null) !== l && (Z.flags |= 1024),
      t
    );
  }
  function Bi() {
    var l = we !== 0;
    return (we = 0), l;
  }
  function Gi(l, t, a) {
    (t.updateQueue = l.updateQueue), (t.flags &= -2053), (l.lanes &= ~a);
  }
  function Xi(l) {
    if (Je) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), (l = l.next);
      }
      Je = !1;
    }
    (Wt = 0), (yl = ll = Z = null), (tu = !1), (Lu = we = 0), (au = null);
  }
  function Ql() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return yl === null ? (Z.memoizedState = yl = l) : (yl = yl.next = l), yl;
  }
  function gl() {
    if (ll === null) {
      var l = Z.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = ll.next;
    var t = yl === null ? Z.memoizedState : yl.next;
    if (t !== null) (yl = t), (ll = l);
    else {
      if (l === null)
        throw Z.alternate === null ? Error(o(467)) : Error(o(310));
      (ll = l),
        (l = {
          memoizedState: ll.memoizedState,
          baseState: ll.baseState,
          baseQueue: ll.baseQueue,
          queue: ll.queue,
          next: null,
        }),
        yl === null ? (Z.memoizedState = yl = l) : (yl = yl.next = l);
    }
    return yl;
  }
  function Qi() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ku(l) {
    var t = Lu;
    return (
      (Lu += 1),
      au === null && (au = []),
      (l = ys(au, l, t)),
      (t = Z),
      (yl === null ? t.memoizedState : yl.next) === null &&
        ((t = t.alternate),
        (b.H = t === null || t.memoizedState === null ? e0 : n0)),
      l
    );
  }
  function We(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Ku(l);
      if (l.$$typeof === Dl) return Rl(l);
    }
    throw Error(o(438, String(l)));
  }
  function Ci(l) {
    var t = null,
      a = Z.updateQueue;
    if ((a !== null && (t = a.memoCache), t == null)) {
      var u = Z.alternate;
      u !== null &&
        ((u = u.updateQueue),
        u !== null &&
          ((u = u.memoCache),
          u != null &&
            (t = {
              data: u.data.map(function (e) {
                return e.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      a === null && ((a = Qi()), (Z.updateQueue = a)),
      (a.memoCache = t),
      (a = t.data[t.index]),
      a === void 0)
    )
      for (a = t.data[t.index] = Array(l), u = 0; u < l; u++) a[u] = ja;
    return t.index++, a;
  }
  function Rt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function $e(l) {
    var t = gl();
    return Zi(t, ll, l);
  }
  function Zi(l, t, a) {
    var u = l.queue;
    if (u === null) throw Error(o(311));
    u.lastRenderedReducer = a;
    var e = l.baseQueue,
      n = u.pending;
    if (n !== null) {
      if (e !== null) {
        var i = e.next;
        (e.next = n.next), (n.next = i);
      }
      (t.baseQueue = e = n), (u.pending = null);
    }
    if (((n = l.baseState), e === null)) l.memoizedState = n;
    else {
      t = e.next;
      var c = (i = null),
        f = null,
        h = t,
        g = !1;
      do {
        var T = h.lane & -536870913;
        if (T !== h.lane ? (w & T) === T : (Wt & T) === T) {
          var m = h.revertLane;
          if (m === 0)
            f !== null &&
              (f = f.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: h.action,
                  hasEagerState: h.hasEagerState,
                  eagerState: h.eagerState,
                  next: null,
                }),
              T === Pa && (g = !0);
          else if ((Wt & m) === m) {
            (h = h.next), m === Pa && (g = !0);
            continue;
          } else
            (T = {
              lane: 0,
              revertLane: h.revertLane,
              action: h.action,
              hasEagerState: h.hasEagerState,
              eagerState: h.eagerState,
              next: null,
            }),
              f === null ? ((c = f = T), (i = n)) : (f = f.next = T),
              (Z.lanes |= m),
              (ta |= m);
          (T = h.action),
            Ma && a(n, T),
            (n = h.hasEagerState ? h.eagerState : a(n, T));
        } else
          (m = {
            lane: T,
            revertLane: h.revertLane,
            action: h.action,
            hasEagerState: h.hasEagerState,
            eagerState: h.eagerState,
            next: null,
          }),
            f === null ? ((c = f = m), (i = n)) : (f = f.next = m),
            (Z.lanes |= T),
            (ta |= T);
        h = h.next;
      } while (h !== null && h !== t);
      if (
        (f === null ? (i = n) : (f.next = c),
        !$l(n, l.memoizedState) && ((Al = !0), g && ((a = Ia), a !== null)))
      )
        throw a;
      (l.memoizedState = n),
        (l.baseState = i),
        (l.baseQueue = f),
        (u.lastRenderedState = n);
    }
    return e === null && (u.lanes = 0), [l.memoizedState, u.dispatch];
  }
  function Vi(l) {
    var t = gl(),
      a = t.queue;
    if (a === null) throw Error(o(311));
    a.lastRenderedReducer = l;
    var u = a.dispatch,
      e = a.pending,
      n = t.memoizedState;
    if (e !== null) {
      a.pending = null;
      var i = (e = e.next);
      do (n = l(n, i.action)), (i = i.next);
      while (i !== e);
      $l(n, t.memoizedState) || (Al = !0),
        (t.memoizedState = n),
        t.baseQueue === null && (t.baseState = n),
        (a.lastRenderedState = n);
    }
    return [n, u];
  }
  function zs(l, t, a) {
    var u = Z,
      e = gl(),
      n = F;
    if (n) {
      if (a === void 0) throw Error(o(407));
      a = a();
    } else a = t();
    var i = !$l((ll || e).memoizedState, a);
    i && ((e.memoizedState = a), (Al = !0)), (e = e.queue);
    var c = Ms.bind(null, u, e, l);
    if (
      (Ju(2048, 8, c, [l]),
      e.getSnapshot !== t || i || (yl !== null && yl.memoizedState.tag & 1))
    ) {
      if (
        ((u.flags |= 2048),
        uu(9, ke(), _s.bind(null, u, e, a, t), null),
        il === null)
      )
        throw Error(o(349));
      n || (Wt & 124) !== 0 || ps(u, t, a);
    }
    return a;
  }
  function ps(l, t, a) {
    (l.flags |= 16384),
      (l = { getSnapshot: t, value: a }),
      (t = Z.updateQueue),
      t === null
        ? ((t = Qi()), (Z.updateQueue = t), (t.stores = [l]))
        : ((a = t.stores), a === null ? (t.stores = [l]) : a.push(l));
  }
  function _s(l, t, a, u) {
    (t.value = a), (t.getSnapshot = u), Ds(t) && xs(l);
  }
  function Ms(l, t, a) {
    return a(function () {
      Ds(t) && xs(l);
    });
  }
  function Ds(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var a = t();
      return !$l(l, a);
    } catch {
      return !0;
    }
  }
  function xs(l) {
    var t = Wa(l, 2);
    t !== null && tt(t, l, 2);
  }
  function Li(l) {
    var t = Ql();
    if (typeof l == "function") {
      var a = l;
      if (((l = a()), Ma)) {
        Ct(!0);
        try {
          a();
        } finally {
          Ct(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = l),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Rt,
        lastRenderedState: l,
      }),
      t
    );
  }
  function Us(l, t, a, u) {
    return (l.baseState = a), Zi(l, ll, typeof u == "function" ? u : Rt);
  }
  function xo(l, t, a, u, e) {
    if (Pe(l)) throw Error(o(485));
    if (((l = t.action), l !== null)) {
      var n = {
        payload: e,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (i) {
          n.listeners.push(i);
        },
      };
      b.T !== null ? a(!0) : (n.isTransition = !1),
        u(n),
        (a = t.pending),
        a === null
          ? ((n.next = t.pending = n), Ns(t, n))
          : ((n.next = a.next), (t.pending = a.next = n));
    }
  }
  function Ns(l, t) {
    var a = t.action,
      u = t.payload,
      e = l.state;
    if (t.isTransition) {
      var n = b.T,
        i = {};
      b.T = i;
      try {
        var c = a(e, u),
          f = b.S;
        f !== null && f(i, c), Rs(l, t, c);
      } catch (h) {
        Ki(l, t, h);
      } finally {
        b.T = n;
      }
    } else
      try {
        (n = a(e, u)), Rs(l, t, n);
      } catch (h) {
        Ki(l, t, h);
      }
  }
  function Rs(l, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function"
      ? a.then(
          function (u) {
            js(l, t, u);
          },
          function (u) {
            return Ki(l, t, u);
          }
        )
      : js(l, t, a);
  }
  function js(l, t, a) {
    (t.status = "fulfilled"),
      (t.value = a),
      qs(t),
      (l.state = a),
      (t = l.pending),
      t !== null &&
        ((a = t.next),
        a === t ? (l.pending = null) : ((a = a.next), (t.next = a), Ns(l, a)));
  }
  function Ki(l, t, a) {
    var u = l.pending;
    if (((l.pending = null), u !== null)) {
      u = u.next;
      do (t.status = "rejected"), (t.reason = a), qs(t), (t = t.next);
      while (t !== u);
    }
    l.action = null;
  }
  function qs(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function Hs(l, t) {
    return t;
  }
  function Ys(l, t) {
    if (F) {
      var a = il.formState;
      if (a !== null) {
        l: {
          var u = Z;
          if (F) {
            if (ol) {
              t: {
                for (var e = ol, n = St; e.nodeType !== 8; ) {
                  if (!n) {
                    e = null;
                    break t;
                  }
                  if (((e = mt(e.nextSibling)), e === null)) {
                    e = null;
                    break t;
                  }
                }
                (n = e.data), (e = n === "F!" || n === "F" ? e : null);
              }
              if (e) {
                (ol = mt(e.nextSibling)), (u = e.data === "F!");
                break l;
              }
            }
            Oa(u);
          }
          u = !1;
        }
        u && (t = a[0]);
      }
    }
    return (
      (a = Ql()),
      (a.memoizedState = a.baseState = t),
      (u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Hs,
        lastRenderedState: t,
      }),
      (a.queue = u),
      (a = t0.bind(null, Z, u)),
      (u.dispatch = a),
      (u = Li(!1)),
      (n = ki.bind(null, Z, !1, u.queue)),
      (u = Ql()),
      (e = { state: t, dispatch: null, action: l, pending: null }),
      (u.queue = e),
      (a = xo.bind(null, Z, e, n, a)),
      (e.dispatch = a),
      (u.memoizedState = l),
      [t, a, !1]
    );
  }
  function Bs(l) {
    var t = gl();
    return Gs(t, ll, l);
  }
  function Gs(l, t, a) {
    if (
      ((t = Zi(l, t, Hs)[0]),
      (l = $e(Rt)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var u = Ku(t);
      } catch (i) {
        throw i === Xu ? Ve : i;
      }
    else u = t;
    t = gl();
    var e = t.queue,
      n = e.dispatch;
    return (
      a !== t.memoizedState &&
        ((Z.flags |= 2048), uu(9, ke(), Uo.bind(null, e, a), null)),
      [u, n, l]
    );
  }
  function Uo(l, t) {
    l.action = t;
  }
  function Xs(l) {
    var t = gl(),
      a = ll;
    if (a !== null) return Gs(t, a, l);
    gl(), (t = t.memoizedState), (a = gl());
    var u = a.queue.dispatch;
    return (a.memoizedState = l), [t, u, !1];
  }
  function uu(l, t, a, u) {
    return (
      (l = { tag: l, create: a, deps: u, inst: t, next: null }),
      (t = Z.updateQueue),
      t === null && ((t = Qi()), (Z.updateQueue = t)),
      (a = t.lastEffect),
      a === null
        ? (t.lastEffect = l.next = l)
        : ((u = a.next), (a.next = l), (l.next = u), (t.lastEffect = l)),
      l
    );
  }
  function ke() {
    return { destroy: void 0, resource: void 0 };
  }
  function Qs() {
    return gl().memoizedState;
  }
  function Fe(l, t, a, u) {
    var e = Ql();
    (u = u === void 0 ? null : u),
      (Z.flags |= l),
      (e.memoizedState = uu(1 | t, ke(), a, u));
  }
  function Ju(l, t, a, u) {
    var e = gl();
    u = u === void 0 ? null : u;
    var n = e.memoizedState.inst;
    ll !== null && u !== null && Hi(u, ll.memoizedState.deps)
      ? (e.memoizedState = uu(t, n, a, u))
      : ((Z.flags |= l), (e.memoizedState = uu(1 | t, n, a, u)));
  }
  function Cs(l, t) {
    Fe(8390656, 8, l, t);
  }
  function Zs(l, t) {
    Ju(2048, 8, l, t);
  }
  function Vs(l, t) {
    return Ju(4, 2, l, t);
  }
  function Ls(l, t) {
    return Ju(4, 4, l, t);
  }
  function Ks(l, t) {
    if (typeof t == "function") {
      l = l();
      var a = t(l);
      return function () {
        typeof a == "function" ? a() : t(null);
      };
    }
    if (t != null)
      return (
        (l = l()),
        (t.current = l),
        function () {
          t.current = null;
        }
      );
  }
  function Js(l, t, a) {
    (a = a != null ? a.concat([l]) : null), Ju(4, 4, Ks.bind(null, t, l), a);
  }
  function Ji() {}
  function ws(l, t) {
    var a = gl();
    t = t === void 0 ? null : t;
    var u = a.memoizedState;
    return t !== null && Hi(t, u[1]) ? u[0] : ((a.memoizedState = [l, t]), l);
  }
  function Ws(l, t) {
    var a = gl();
    t = t === void 0 ? null : t;
    var u = a.memoizedState;
    if (t !== null && Hi(t, u[1])) return u[0];
    if (((u = l()), Ma)) {
      Ct(!0);
      try {
        l();
      } finally {
        Ct(!1);
      }
    }
    return (a.memoizedState = [u, t]), u;
  }
  function wi(l, t, a) {
    return a === void 0 || (Wt & 1073741824) !== 0
      ? (l.memoizedState = t)
      : ((l.memoizedState = a), (l = F0()), (Z.lanes |= l), (ta |= l), a);
  }
  function $s(l, t, a, u) {
    return $l(a, t)
      ? a
      : lu.current !== null
      ? ((l = wi(l, a, u)), $l(l, t) || (Al = !0), l)
      : (Wt & 42) === 0
      ? ((Al = !0), (l.memoizedState = a))
      : ((l = F0()), (Z.lanes |= l), (ta |= l), t);
  }
  function ks(l, t, a, u, e) {
    var n = _.p;
    _.p = n !== 0 && 8 > n ? n : 8;
    var i = b.T,
      c = {};
    (b.T = c), ki(l, !1, t, a);
    try {
      var f = e(),
        h = b.S;
      if (
        (h !== null && h(c, f),
        f !== null && typeof f == "object" && typeof f.then == "function")
      ) {
        var g = _o(f, u);
        wu(l, t, g, lt(l));
      } else wu(l, t, u, lt(l));
    } catch (T) {
      wu(l, t, { then: function () {}, status: "rejected", reason: T }, lt());
    } finally {
      (_.p = n), (b.T = i);
    }
  }
  function No() {}
  function Wi(l, t, a, u) {
    if (l.tag !== 5) throw Error(o(476));
    var e = Fs(l).queue;
    ks(
      l,
      e,
      t,
      G,
      a === null
        ? No
        : function () {
            return Ps(l), a(u);
          }
    );
  }
  function Fs(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: G,
      baseState: G,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Rt,
        lastRenderedState: G,
      },
      next: null,
    };
    var a = {};
    return (
      (t.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Rt,
          lastRenderedState: a,
        },
        next: null,
      }),
      (l.memoizedState = t),
      (l = l.alternate),
      l !== null && (l.memoizedState = t),
      t
    );
  }
  function Ps(l) {
    var t = Fs(l).next.queue;
    wu(l, t, {}, lt());
  }
  function $i() {
    return Rl(re);
  }
  function Is() {
    return gl().memoizedState;
  }
  function l0() {
    return gl().memoizedState;
  }
  function Ro(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = lt();
          l = Jt(a);
          var u = wt(t, l, a);
          u !== null && (tt(u, t, a), Cu(u, t, a)),
            (t = { cache: pi() }),
            (l.payload = t);
          return;
      }
      t = t.return;
    }
  }
  function jo(l, t, a) {
    var u = lt();
    (a = {
      lane: u,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Pe(l)
        ? a0(t, a)
        : ((a = mi(l, t, a, u)), a !== null && (tt(a, l, u), u0(a, t, u)));
  }
  function t0(l, t, a) {
    var u = lt();
    wu(l, t, a, u);
  }
  function wu(l, t, a, u) {
    var e = {
      lane: u,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Pe(l)) a0(t, e);
    else {
      var n = l.alternate;
      if (
        l.lanes === 0 &&
        (n === null || n.lanes === 0) &&
        ((n = t.lastRenderedReducer), n !== null)
      )
        try {
          var i = t.lastRenderedState,
            c = n(i, a);
          if (((e.hasEagerState = !0), (e.eagerState = c), $l(c, i)))
            return He(l, t, e, 0), il === null && qe(), !1;
        } catch {
        } finally {
        }
      if (((a = mi(l, t, e, u)), a !== null))
        return tt(a, l, u), u0(a, t, u), !0;
    }
    return !1;
  }
  function ki(l, t, a, u) {
    if (
      ((u = {
        lane: 2,
        revertLane: Dc(),
        action: u,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Pe(l))
    ) {
      if (t) throw Error(o(479));
    } else (t = mi(l, a, u, 2)), t !== null && tt(t, l, 2);
  }
  function Pe(l) {
    var t = l.alternate;
    return l === Z || (t !== null && t === Z);
  }
  function a0(l, t) {
    tu = Je = !0;
    var a = l.pending;
    a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
      (l.pending = t);
  }
  function u0(l, t, a) {
    if ((a & 4194048) !== 0) {
      var u = t.lanes;
      (u &= l.pendingLanes), (a |= u), (t.lanes = a), rf(l, a);
    }
  }
  var Ie = {
      readContext: Rl,
      use: We,
      useCallback: hl,
      useContext: hl,
      useEffect: hl,
      useImperativeHandle: hl,
      useLayoutEffect: hl,
      useInsertionEffect: hl,
      useMemo: hl,
      useReducer: hl,
      useRef: hl,
      useState: hl,
      useDebugValue: hl,
      useDeferredValue: hl,
      useTransition: hl,
      useSyncExternalStore: hl,
      useId: hl,
      useHostTransitionStatus: hl,
      useFormState: hl,
      useActionState: hl,
      useOptimistic: hl,
      useMemoCache: hl,
      useCacheRefresh: hl,
    },
    e0 = {
      readContext: Rl,
      use: We,
      useCallback: function (l, t) {
        return (Ql().memoizedState = [l, t === void 0 ? null : t]), l;
      },
      useContext: Rl,
      useEffect: Cs,
      useImperativeHandle: function (l, t, a) {
        (a = a != null ? a.concat([l]) : null),
          Fe(4194308, 4, Ks.bind(null, t, l), a);
      },
      useLayoutEffect: function (l, t) {
        return Fe(4194308, 4, l, t);
      },
      useInsertionEffect: function (l, t) {
        Fe(4, 2, l, t);
      },
      useMemo: function (l, t) {
        var a = Ql();
        t = t === void 0 ? null : t;
        var u = l();
        if (Ma) {
          Ct(!0);
          try {
            l();
          } finally {
            Ct(!1);
          }
        }
        return (a.memoizedState = [u, t]), u;
      },
      useReducer: function (l, t, a) {
        var u = Ql();
        if (a !== void 0) {
          var e = a(t);
          if (Ma) {
            Ct(!0);
            try {
              a(t);
            } finally {
              Ct(!1);
            }
          }
        } else e = t;
        return (
          (u.memoizedState = u.baseState = e),
          (l = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: l,
            lastRenderedState: e,
          }),
          (u.queue = l),
          (l = l.dispatch = jo.bind(null, Z, l)),
          [u.memoizedState, l]
        );
      },
      useRef: function (l) {
        var t = Ql();
        return (l = { current: l }), (t.memoizedState = l);
      },
      useState: function (l) {
        l = Li(l);
        var t = l.queue,
          a = t0.bind(null, Z, t);
        return (t.dispatch = a), [l.memoizedState, a];
      },
      useDebugValue: Ji,
      useDeferredValue: function (l, t) {
        var a = Ql();
        return wi(a, l, t);
      },
      useTransition: function () {
        var l = Li(!1);
        return (
          (l = ks.bind(null, Z, l.queue, !0, !1)),
          (Ql().memoizedState = l),
          [!1, l]
        );
      },
      useSyncExternalStore: function (l, t, a) {
        var u = Z,
          e = Ql();
        if (F) {
          if (a === void 0) throw Error(o(407));
          a = a();
        } else {
          if (((a = t()), il === null)) throw Error(o(349));
          (w & 124) !== 0 || ps(u, t, a);
        }
        e.memoizedState = a;
        var n = { value: a, getSnapshot: t };
        return (
          (e.queue = n),
          Cs(Ms.bind(null, u, n, l), [l]),
          (u.flags |= 2048),
          uu(9, ke(), _s.bind(null, u, n, a, t), null),
          a
        );
      },
      useId: function () {
        var l = Ql(),
          t = il.identifierPrefix;
        if (F) {
          var a = xt,
            u = Dt;
          (a = (u & ~(1 << (32 - Wl(u) - 1))).toString(32) + a),
            (t = "«" + t + "R" + a),
            (a = we++),
            0 < a && (t += "H" + a.toString(32)),
            (t += "»");
        } else (a = Mo++), (t = "«" + t + "r" + a.toString(32) + "»");
        return (l.memoizedState = t);
      },
      useHostTransitionStatus: $i,
      useFormState: Ys,
      useActionState: Ys,
      useOptimistic: function (l) {
        var t = Ql();
        t.memoizedState = t.baseState = l;
        var a = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = a), (t = ki.bind(null, Z, !0, a)), (a.dispatch = t), [l, t]
        );
      },
      useMemoCache: Ci,
      useCacheRefresh: function () {
        return (Ql().memoizedState = Ro.bind(null, Z));
      },
    },
    n0 = {
      readContext: Rl,
      use: We,
      useCallback: ws,
      useContext: Rl,
      useEffect: Zs,
      useImperativeHandle: Js,
      useInsertionEffect: Vs,
      useLayoutEffect: Ls,
      useMemo: Ws,
      useReducer: $e,
      useRef: Qs,
      useState: function () {
        return $e(Rt);
      },
      useDebugValue: Ji,
      useDeferredValue: function (l, t) {
        var a = gl();
        return $s(a, ll.memoizedState, l, t);
      },
      useTransition: function () {
        var l = $e(Rt)[0],
          t = gl().memoizedState;
        return [typeof l == "boolean" ? l : Ku(l), t];
      },
      useSyncExternalStore: zs,
      useId: Is,
      useHostTransitionStatus: $i,
      useFormState: Bs,
      useActionState: Bs,
      useOptimistic: function (l, t) {
        var a = gl();
        return Us(a, ll, l, t);
      },
      useMemoCache: Ci,
      useCacheRefresh: l0,
    },
    qo = {
      readContext: Rl,
      use: We,
      useCallback: ws,
      useContext: Rl,
      useEffect: Zs,
      useImperativeHandle: Js,
      useInsertionEffect: Vs,
      useLayoutEffect: Ls,
      useMemo: Ws,
      useReducer: Vi,
      useRef: Qs,
      useState: function () {
        return Vi(Rt);
      },
      useDebugValue: Ji,
      useDeferredValue: function (l, t) {
        var a = gl();
        return ll === null ? wi(a, l, t) : $s(a, ll.memoizedState, l, t);
      },
      useTransition: function () {
        var l = Vi(Rt)[0],
          t = gl().memoizedState;
        return [typeof l == "boolean" ? l : Ku(l), t];
      },
      useSyncExternalStore: zs,
      useId: Is,
      useHostTransitionStatus: $i,
      useFormState: Xs,
      useActionState: Xs,
      useOptimistic: function (l, t) {
        var a = gl();
        return ll !== null
          ? Us(a, ll, l, t)
          : ((a.baseState = l), [l, a.queue.dispatch]);
      },
      useMemoCache: Ci,
      useCacheRefresh: l0,
    },
    eu = null,
    Wu = 0;
  function ln(l) {
    var t = Wu;
    return (Wu += 1), eu === null && (eu = []), ys(eu, l, t);
  }
  function $u(l, t) {
    (t = t.props.ref), (l.ref = t !== void 0 ? t : null);
  }
  function tn(l, t) {
    throw t.$$typeof === cl
      ? Error(o(525))
      : ((l = Object.prototype.toString.call(t)),
        Error(
          o(
            31,
            l === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : l
          )
        ));
  }
  function i0(l) {
    var t = l._init;
    return t(l._payload);
  }
  function c0(l) {
    function t(r, d) {
      if (l) {
        var v = r.deletions;
        v === null ? ((r.deletions = [d]), (r.flags |= 16)) : v.push(d);
      }
    }
    function a(r, d) {
      if (!l) return null;
      for (; d !== null; ) t(r, d), (d = d.sibling);
      return null;
    }
    function u(r) {
      for (var d = new Map(); r !== null; )
        r.key !== null ? d.set(r.key, r) : d.set(r.index, r), (r = r.sibling);
      return d;
    }
    function e(r, d) {
      return (r = Mt(r, d)), (r.index = 0), (r.sibling = null), r;
    }
    function n(r, d, v) {
      return (
        (r.index = v),
        l
          ? ((v = r.alternate),
            v !== null
              ? ((v = v.index), v < d ? ((r.flags |= 67108866), d) : v)
              : ((r.flags |= 67108866), d))
          : ((r.flags |= 1048576), d)
      );
    }
    function i(r) {
      return l && r.alternate === null && (r.flags |= 67108866), r;
    }
    function c(r, d, v, E) {
      return d === null || d.tag !== 6
        ? ((d = gi(v, r.mode, E)), (d.return = r), d)
        : ((d = e(d, v)), (d.return = r), d);
    }
    function f(r, d, v, E) {
      var x = v.type;
      return x === Hl
        ? g(r, d, v.props.children, E, v.key)
        : d !== null &&
          (d.elementType === x ||
            (typeof x == "object" &&
              x !== null &&
              x.$$typeof === Kl &&
              i0(x) === d.type))
        ? ((d = e(d, v.props)), $u(d, v), (d.return = r), d)
        : ((d = Be(v.type, v.key, v.props, null, r.mode, E)),
          $u(d, v),
          (d.return = r),
          d);
    }
    function h(r, d, v, E) {
      return d === null ||
        d.tag !== 4 ||
        d.stateNode.containerInfo !== v.containerInfo ||
        d.stateNode.implementation !== v.implementation
        ? ((d = Si(v, r.mode, E)), (d.return = r), d)
        : ((d = e(d, v.children || [])), (d.return = r), d);
    }
    function g(r, d, v, E, x) {
      return d === null || d.tag !== 7
        ? ((d = ba(v, r.mode, E, x)), (d.return = r), d)
        : ((d = e(d, v)), (d.return = r), d);
    }
    function T(r, d, v) {
      if (
        (typeof d == "string" && d !== "") ||
        typeof d == "number" ||
        typeof d == "bigint"
      )
        return (d = gi("" + d, r.mode, v)), (d.return = r), d;
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case nl:
            return (
              (v = Be(d.type, d.key, d.props, null, r.mode, v)),
              $u(v, d),
              (v.return = r),
              v
            );
          case ql:
            return (d = Si(d, r.mode, v)), (d.return = r), d;
          case Kl:
            var E = d._init;
            return (d = E(d._payload)), T(r, d, v);
        }
        if (Ul(d) || xl(d))
          return (d = ba(d, r.mode, v, null)), (d.return = r), d;
        if (typeof d.then == "function") return T(r, ln(d), v);
        if (d.$$typeof === Dl) return T(r, Ce(r, d), v);
        tn(r, d);
      }
      return null;
    }
    function m(r, d, v, E) {
      var x = d !== null ? d.key : null;
      if (
        (typeof v == "string" && v !== "") ||
        typeof v == "number" ||
        typeof v == "bigint"
      )
        return x !== null ? null : c(r, d, "" + v, E);
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case nl:
            return v.key === x ? f(r, d, v, E) : null;
          case ql:
            return v.key === x ? h(r, d, v, E) : null;
          case Kl:
            return (x = v._init), (v = x(v._payload)), m(r, d, v, E);
        }
        if (Ul(v) || xl(v)) return x !== null ? null : g(r, d, v, E, null);
        if (typeof v.then == "function") return m(r, d, ln(v), E);
        if (v.$$typeof === Dl) return m(r, d, Ce(r, v), E);
        tn(r, v);
      }
      return null;
    }
    function y(r, d, v, E, x) {
      if (
        (typeof E == "string" && E !== "") ||
        typeof E == "number" ||
        typeof E == "bigint"
      )
        return (r = r.get(v) || null), c(d, r, "" + E, x);
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case nl:
            return (
              (r = r.get(E.key === null ? v : E.key) || null), f(d, r, E, x)
            );
          case ql:
            return (
              (r = r.get(E.key === null ? v : E.key) || null), h(d, r, E, x)
            );
          case Kl:
            var V = E._init;
            return (E = V(E._payload)), y(r, d, v, E, x);
        }
        if (Ul(E) || xl(E)) return (r = r.get(v) || null), g(d, r, E, x, null);
        if (typeof E.then == "function") return y(r, d, v, ln(E), x);
        if (E.$$typeof === Dl) return y(r, d, v, Ce(d, E), x);
        tn(d, E);
      }
      return null;
    }
    function X(r, d, v, E) {
      for (
        var x = null, V = null, R = d, B = (d = 0), zl = null;
        R !== null && B < v.length;
        B++
      ) {
        R.index > B ? ((zl = R), (R = null)) : (zl = R.sibling);
        var k = m(r, R, v[B], E);
        if (k === null) {
          R === null && (R = zl);
          break;
        }
        l && R && k.alternate === null && t(r, R),
          (d = n(k, d, B)),
          V === null ? (x = k) : (V.sibling = k),
          (V = k),
          (R = zl);
      }
      if (B === v.length) return a(r, R), F && Ta(r, B), x;
      if (R === null) {
        for (; B < v.length; B++)
          (R = T(r, v[B], E)),
            R !== null &&
              ((d = n(R, d, B)),
              V === null ? (x = R) : (V.sibling = R),
              (V = R));
        return F && Ta(r, B), x;
      }
      for (R = u(R); B < v.length; B++)
        (zl = y(R, r, B, v[B], E)),
          zl !== null &&
            (l &&
              zl.alternate !== null &&
              R.delete(zl.key === null ? B : zl.key),
            (d = n(zl, d, B)),
            V === null ? (x = zl) : (V.sibling = zl),
            (V = zl));
      return (
        l &&
          R.forEach(function (da) {
            return t(r, da);
          }),
        F && Ta(r, B),
        x
      );
    }
    function Y(r, d, v, E) {
      if (v == null) throw Error(o(151));
      for (
        var x = null, V = null, R = d, B = (d = 0), zl = null, k = v.next();
        R !== null && !k.done;
        B++, k = v.next()
      ) {
        R.index > B ? ((zl = R), (R = null)) : (zl = R.sibling);
        var da = m(r, R, k.value, E);
        if (da === null) {
          R === null && (R = zl);
          break;
        }
        l && R && da.alternate === null && t(r, R),
          (d = n(da, d, B)),
          V === null ? (x = da) : (V.sibling = da),
          (V = da),
          (R = zl);
      }
      if (k.done) return a(r, R), F && Ta(r, B), x;
      if (R === null) {
        for (; !k.done; B++, k = v.next())
          (k = T(r, k.value, E)),
            k !== null &&
              ((d = n(k, d, B)),
              V === null ? (x = k) : (V.sibling = k),
              (V = k));
        return F && Ta(r, B), x;
      }
      for (R = u(R); !k.done; B++, k = v.next())
        (k = y(R, r, B, k.value, E)),
          k !== null &&
            (l && k.alternate !== null && R.delete(k.key === null ? B : k.key),
            (d = n(k, d, B)),
            V === null ? (x = k) : (V.sibling = k),
            (V = k));
      return (
        l &&
          R.forEach(function (Hv) {
            return t(r, Hv);
          }),
        F && Ta(r, B),
        x
      );
    }
    function al(r, d, v, E) {
      if (
        (typeof v == "object" &&
          v !== null &&
          v.type === Hl &&
          v.key === null &&
          (v = v.props.children),
        typeof v == "object" && v !== null)
      ) {
        switch (v.$$typeof) {
          case nl:
            l: {
              for (var x = v.key; d !== null; ) {
                if (d.key === x) {
                  if (((x = v.type), x === Hl)) {
                    if (d.tag === 7) {
                      a(r, d.sibling),
                        (E = e(d, v.props.children)),
                        (E.return = r),
                        (r = E);
                      break l;
                    }
                  } else if (
                    d.elementType === x ||
                    (typeof x == "object" &&
                      x !== null &&
                      x.$$typeof === Kl &&
                      i0(x) === d.type)
                  ) {
                    a(r, d.sibling),
                      (E = e(d, v.props)),
                      $u(E, v),
                      (E.return = r),
                      (r = E);
                    break l;
                  }
                  a(r, d);
                  break;
                } else t(r, d);
                d = d.sibling;
              }
              v.type === Hl
                ? ((E = ba(v.props.children, r.mode, E, v.key)),
                  (E.return = r),
                  (r = E))
                : ((E = Be(v.type, v.key, v.props, null, r.mode, E)),
                  $u(E, v),
                  (E.return = r),
                  (r = E));
            }
            return i(r);
          case ql:
            l: {
              for (x = v.key; d !== null; ) {
                if (d.key === x)
                  if (
                    d.tag === 4 &&
                    d.stateNode.containerInfo === v.containerInfo &&
                    d.stateNode.implementation === v.implementation
                  ) {
                    a(r, d.sibling),
                      (E = e(d, v.children || [])),
                      (E.return = r),
                      (r = E);
                    break l;
                  } else {
                    a(r, d);
                    break;
                  }
                else t(r, d);
                d = d.sibling;
              }
              (E = Si(v, r.mode, E)), (E.return = r), (r = E);
            }
            return i(r);
          case Kl:
            return (x = v._init), (v = x(v._payload)), al(r, d, v, E);
        }
        if (Ul(v)) return X(r, d, v, E);
        if (xl(v)) {
          if (((x = xl(v)), typeof x != "function")) throw Error(o(150));
          return (v = x.call(v)), Y(r, d, v, E);
        }
        if (typeof v.then == "function") return al(r, d, ln(v), E);
        if (v.$$typeof === Dl) return al(r, d, Ce(r, v), E);
        tn(r, v);
      }
      return (typeof v == "string" && v !== "") ||
        typeof v == "number" ||
        typeof v == "bigint"
        ? ((v = "" + v),
          d !== null && d.tag === 6
            ? (a(r, d.sibling), (E = e(d, v)), (E.return = r), (r = E))
            : (a(r, d), (E = gi(v, r.mode, E)), (E.return = r), (r = E)),
          i(r))
        : a(r, d);
    }
    return function (r, d, v, E) {
      try {
        Wu = 0;
        var x = al(r, d, v, E);
        return (eu = null), x;
      } catch (R) {
        if (R === Xu || R === Ve) throw R;
        var V = kl(29, R, null, r.mode);
        return (V.lanes = E), (V.return = r), V;
      } finally {
      }
    };
  }
  var nu = c0(!0),
    f0 = c0(!1),
    ft = A(null),
    bt = null;
  function $t(l) {
    var t = l.alternate;
    p(bl, bl.current & 1),
      p(ft, l),
      bt === null &&
        (t === null || lu.current !== null || t.memoizedState !== null) &&
        (bt = l);
  }
  function s0(l) {
    if (l.tag === 22) {
      if ((p(bl, bl.current), p(ft, l), bt === null)) {
        var t = l.alternate;
        t !== null && t.memoizedState !== null && (bt = l);
      }
    } else kt();
  }
  function kt() {
    p(bl, bl.current), p(ft, ft.current);
  }
  function jt(l) {
    D(ft), bt === l && (bt = null), D(bl);
  }
  var bl = A(0);
  function an(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (
          a !== null &&
          ((a = a.dehydrated), a === null || a.data === "$?" || Qc(a))
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  function Fi(l, t, a, u) {
    (t = l.memoizedState),
      (a = a(u, t)),
      (a = a == null ? t : j({}, t, a)),
      (l.memoizedState = a),
      l.lanes === 0 && (l.updateQueue.baseState = a);
  }
  var Pi = {
    enqueueSetState: function (l, t, a) {
      l = l._reactInternals;
      var u = lt(),
        e = Jt(u);
      (e.payload = t),
        a != null && (e.callback = a),
        (t = wt(l, e, u)),
        t !== null && (tt(t, l, u), Cu(t, l, u));
    },
    enqueueReplaceState: function (l, t, a) {
      l = l._reactInternals;
      var u = lt(),
        e = Jt(u);
      (e.tag = 1),
        (e.payload = t),
        a != null && (e.callback = a),
        (t = wt(l, e, u)),
        t !== null && (tt(t, l, u), Cu(t, l, u));
    },
    enqueueForceUpdate: function (l, t) {
      l = l._reactInternals;
      var a = lt(),
        u = Jt(a);
      (u.tag = 2),
        t != null && (u.callback = t),
        (t = wt(l, u, a)),
        t !== null && (tt(t, l, a), Cu(t, l, a));
    },
  };
  function d0(l, t, a, u, e, n, i) {
    return (
      (l = l.stateNode),
      typeof l.shouldComponentUpdate == "function"
        ? l.shouldComponentUpdate(u, n, i)
        : t.prototype && t.prototype.isPureReactComponent
        ? !Nu(a, u) || !Nu(e, n)
        : !0
    );
  }
  function r0(l, t, a, u) {
    (l = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(a, u),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(a, u),
      t.state !== l && Pi.enqueueReplaceState(t, t.state, null);
  }
  function Da(l, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var u in t) u !== "ref" && (a[u] = t[u]);
    }
    if ((l = l.defaultProps)) {
      a === t && (a = j({}, a));
      for (var e in l) a[e] === void 0 && (a[e] = l[e]);
    }
    return a;
  }
  var un =
    typeof reportError == "function"
      ? reportError
      : function (l) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var t = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof l == "object" &&
                l !== null &&
                typeof l.message == "string"
                  ? String(l.message)
                  : String(l),
              error: l,
            });
            if (!window.dispatchEvent(t)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", l);
            return;
          }
          console.error(l);
        };
  function o0(l) {
    un(l);
  }
  function v0(l) {
    console.error(l);
  }
  function h0(l) {
    un(l);
  }
  function en(l, t) {
    try {
      var a = l.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function m0(l, t, a) {
    try {
      var u = l.onCaughtError;
      u(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (e) {
      setTimeout(function () {
        throw e;
      });
    }
  }
  function Ii(l, t, a) {
    return (
      (a = Jt(a)),
      (a.tag = 3),
      (a.payload = { element: null }),
      (a.callback = function () {
        en(l, t);
      }),
      a
    );
  }
  function y0(l) {
    return (l = Jt(l)), (l.tag = 3), l;
  }
  function g0(l, t, a, u) {
    var e = a.type.getDerivedStateFromError;
    if (typeof e == "function") {
      var n = u.value;
      (l.payload = function () {
        return e(n);
      }),
        (l.callback = function () {
          m0(t, a, u);
        });
    }
    var i = a.stateNode;
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (l.callback = function () {
        m0(t, a, u),
          typeof e != "function" &&
            (aa === null ? (aa = new Set([this])) : aa.add(this));
        var c = u.stack;
        this.componentDidCatch(u.value, {
          componentStack: c !== null ? c : "",
        });
      });
  }
  function Ho(l, t, a, u, e) {
    if (
      ((a.flags |= 32768),
      u !== null && typeof u == "object" && typeof u.then == "function")
    ) {
      if (
        ((t = a.alternate),
        t !== null && Yu(t, a, e, !0),
        (a = ft.current),
        a !== null)
      ) {
        switch (a.tag) {
          case 13:
            return (
              bt === null ? Oc() : a.alternate === null && vl === 0 && (vl = 3),
              (a.flags &= -257),
              (a.flags |= 65536),
              (a.lanes = e),
              u === Di
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null ? (a.updateQueue = new Set([u])) : t.add(u),
                  pc(l, u, e)),
              !1
            );
          case 22:
            return (
              (a.flags |= 65536),
              u === Di
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([u]),
                      }),
                      (a.updateQueue = t))
                    : ((a = t.retryQueue),
                      a === null ? (t.retryQueue = new Set([u])) : a.add(u)),
                  pc(l, u, e)),
              !1
            );
        }
        throw Error(o(435, a.tag));
      }
      return pc(l, u, e), Oc(), !1;
    }
    if (F)
      return (
        (t = ft.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = e),
            u !== Ti && ((l = Error(o(422), { cause: u })), Hu(et(l, a))))
          : (u !== Ti && ((t = Error(o(423), { cause: u })), Hu(et(t, a))),
            (l = l.current.alternate),
            (l.flags |= 65536),
            (e &= -e),
            (l.lanes |= e),
            (u = et(u, a)),
            (e = Ii(l.stateNode, u, e)),
            Ni(l, e),
            vl !== 4 && (vl = 2)),
        !1
      );
    var n = Error(o(520), { cause: u });
    if (
      ((n = et(n, a)),
      ae === null ? (ae = [n]) : ae.push(n),
      vl !== 4 && (vl = 2),
      t === null)
    )
      return !0;
    (u = et(u, a)), (a = t);
    do {
      switch (a.tag) {
        case 3:
          return (
            (a.flags |= 65536),
            (l = e & -e),
            (a.lanes |= l),
            (l = Ii(a.stateNode, u, l)),
            Ni(a, l),
            !1
          );
        case 1:
          if (
            ((t = a.type),
            (n = a.stateNode),
            (a.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (n !== null &&
                  typeof n.componentDidCatch == "function" &&
                  (aa === null || !aa.has(n)))))
          )
            return (
              (a.flags |= 65536),
              (e &= -e),
              (a.lanes |= e),
              (e = y0(e)),
              g0(e, l, a, u),
              Ni(a, e),
              !1
            );
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var S0 = Error(o(461)),
    Al = !1;
  function pl(l, t, a, u) {
    t.child = l === null ? f0(t, null, a, u) : nu(t, l.child, a, u);
  }
  function b0(l, t, a, u, e) {
    a = a.render;
    var n = t.ref;
    if ("ref" in u) {
      var i = {};
      for (var c in u) c !== "ref" && (i[c] = u[c]);
    } else i = u;
    return (
      pa(t),
      (u = Yi(l, t, a, i, n, e)),
      (c = Bi()),
      l !== null && !Al
        ? (Gi(l, t, e), qt(l, t, e))
        : (F && c && bi(t), (t.flags |= 1), pl(l, t, u, e), t.child)
    );
  }
  function E0(l, t, a, u, e) {
    if (l === null) {
      var n = a.type;
      return typeof n == "function" &&
        !yi(n) &&
        n.defaultProps === void 0 &&
        a.compare === null
        ? ((t.tag = 15), (t.type = n), T0(l, t, n, u, e))
        : ((l = Be(a.type, null, u, t, t.mode, e)),
          (l.ref = t.ref),
          (l.return = t),
          (t.child = l));
    }
    if (((n = l.child), !cc(l, e))) {
      var i = n.memoizedProps;
      if (
        ((a = a.compare), (a = a !== null ? a : Nu), a(i, u) && l.ref === t.ref)
      )
        return qt(l, t, e);
    }
    return (
      (t.flags |= 1),
      (l = Mt(n, u)),
      (l.ref = t.ref),
      (l.return = t),
      (t.child = l)
    );
  }
  function T0(l, t, a, u, e) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (Nu(n, u) && l.ref === t.ref)
        if (((Al = !1), (t.pendingProps = u = n), cc(l, e)))
          (l.flags & 131072) !== 0 && (Al = !0);
        else return (t.lanes = l.lanes), qt(l, t, e);
    }
    return lc(l, t, a, u, e);
  }
  function A0(l, t, a) {
    var u = t.pendingProps,
      e = u.children,
      n = l !== null ? l.memoizedState : null;
    if (u.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (((u = n !== null ? n.baseLanes | a : a), l !== null)) {
          for (e = t.child = l.child, n = 0; e !== null; )
            (n = n | e.lanes | e.childLanes), (e = e.sibling);
          t.childLanes = n & ~u;
        } else (t.childLanes = 0), (t.child = null);
        return O0(l, t, u, a);
      }
      if ((a & 536870912) !== 0)
        (t.memoizedState = { baseLanes: 0, cachePool: null }),
          l !== null && Ze(t, n !== null ? n.cachePool : null),
          n !== null ? Ts(t, n) : ji(),
          s0(t);
      else
        return (
          (t.lanes = t.childLanes = 536870912),
          O0(l, t, n !== null ? n.baseLanes | a : a, a)
        );
    } else
      n !== null
        ? (Ze(t, n.cachePool), Ts(t, n), kt(), (t.memoizedState = null))
        : (l !== null && Ze(t, null), ji(), kt());
    return pl(l, t, e, a), t.child;
  }
  function O0(l, t, a, u) {
    var e = Mi();
    return (
      (e = e === null ? null : { parent: Sl._currentValue, pool: e }),
      (t.memoizedState = { baseLanes: a, cachePool: e }),
      l !== null && Ze(t, null),
      ji(),
      s0(t),
      l !== null && Yu(l, t, u, !0),
      null
    );
  }
  function nn(l, t) {
    var a = t.ref;
    if (a === null) l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object") throw Error(o(284));
      (l === null || l.ref !== a) && (t.flags |= 4194816);
    }
  }
  function lc(l, t, a, u, e) {
    return (
      pa(t),
      (a = Yi(l, t, a, u, void 0, e)),
      (u = Bi()),
      l !== null && !Al
        ? (Gi(l, t, e), qt(l, t, e))
        : (F && u && bi(t), (t.flags |= 1), pl(l, t, a, e), t.child)
    );
  }
  function z0(l, t, a, u, e, n) {
    return (
      pa(t),
      (t.updateQueue = null),
      (a = Os(t, u, a, e)),
      As(l),
      (u = Bi()),
      l !== null && !Al
        ? (Gi(l, t, n), qt(l, t, n))
        : (F && u && bi(t), (t.flags |= 1), pl(l, t, a, n), t.child)
    );
  }
  function p0(l, t, a, u, e) {
    if ((pa(t), t.stateNode === null)) {
      var n = $a,
        i = a.contextType;
      typeof i == "object" && i !== null && (n = Rl(i)),
        (n = new a(u, n)),
        (t.memoizedState =
          n.state !== null && n.state !== void 0 ? n.state : null),
        (n.updater = Pi),
        (t.stateNode = n),
        (n._reactInternals = t),
        (n = t.stateNode),
        (n.props = u),
        (n.state = t.memoizedState),
        (n.refs = {}),
        xi(t),
        (i = a.contextType),
        (n.context = typeof i == "object" && i !== null ? Rl(i) : $a),
        (n.state = t.memoizedState),
        (i = a.getDerivedStateFromProps),
        typeof i == "function" && (Fi(t, a, i, u), (n.state = t.memoizedState)),
        typeof a.getDerivedStateFromProps == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function" ||
          (typeof n.UNSAFE_componentWillMount != "function" &&
            typeof n.componentWillMount != "function") ||
          ((i = n.state),
          typeof n.componentWillMount == "function" && n.componentWillMount(),
          typeof n.UNSAFE_componentWillMount == "function" &&
            n.UNSAFE_componentWillMount(),
          i !== n.state && Pi.enqueueReplaceState(n, n.state, null),
          Vu(t, u, n, e),
          Zu(),
          (n.state = t.memoizedState)),
        typeof n.componentDidMount == "function" && (t.flags |= 4194308),
        (u = !0);
    } else if (l === null) {
      n = t.stateNode;
      var c = t.memoizedProps,
        f = Da(a, c);
      n.props = f;
      var h = n.context,
        g = a.contextType;
      (i = $a), typeof g == "object" && g !== null && (i = Rl(g));
      var T = a.getDerivedStateFromProps;
      (g =
        typeof T == "function" ||
        typeof n.getSnapshotBeforeUpdate == "function"),
        (c = t.pendingProps !== c),
        g ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((c || h !== i) && r0(t, n, u, i)),
        (Kt = !1);
      var m = t.memoizedState;
      (n.state = m),
        Vu(t, u, n, e),
        Zu(),
        (h = t.memoizedState),
        c || m !== h || Kt
          ? (typeof T == "function" && (Fi(t, a, T, u), (h = t.memoizedState)),
            (f = Kt || d0(t, a, f, u, m, h, i))
              ? (g ||
                  (typeof n.UNSAFE_componentWillMount != "function" &&
                    typeof n.componentWillMount != "function") ||
                  (typeof n.componentWillMount == "function" &&
                    n.componentWillMount(),
                  typeof n.UNSAFE_componentWillMount == "function" &&
                    n.UNSAFE_componentWillMount()),
                typeof n.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof n.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = u),
                (t.memoizedState = h)),
            (n.props = u),
            (n.state = h),
            (n.context = i),
            (u = f))
          : (typeof n.componentDidMount == "function" && (t.flags |= 4194308),
            (u = !1));
    } else {
      (n = t.stateNode),
        Ui(l, t),
        (i = t.memoizedProps),
        (g = Da(a, i)),
        (n.props = g),
        (T = t.pendingProps),
        (m = n.context),
        (h = a.contextType),
        (f = $a),
        typeof h == "object" && h !== null && (f = Rl(h)),
        (c = a.getDerivedStateFromProps),
        (h =
          typeof c == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function") ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((i !== T || m !== f) && r0(t, n, u, f)),
        (Kt = !1),
        (m = t.memoizedState),
        (n.state = m),
        Vu(t, u, n, e),
        Zu();
      var y = t.memoizedState;
      i !== T ||
      m !== y ||
      Kt ||
      (l !== null && l.dependencies !== null && Qe(l.dependencies))
        ? (typeof c == "function" && (Fi(t, a, c, u), (y = t.memoizedState)),
          (g =
            Kt ||
            d0(t, a, g, u, m, y, f) ||
            (l !== null && l.dependencies !== null && Qe(l.dependencies)))
            ? (h ||
                (typeof n.UNSAFE_componentWillUpdate != "function" &&
                  typeof n.componentWillUpdate != "function") ||
                (typeof n.componentWillUpdate == "function" &&
                  n.componentWillUpdate(u, y, f),
                typeof n.UNSAFE_componentWillUpdate == "function" &&
                  n.UNSAFE_componentWillUpdate(u, y, f)),
              typeof n.componentDidUpdate == "function" && (t.flags |= 4),
              typeof n.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof n.componentDidUpdate != "function" ||
                (i === l.memoizedProps && m === l.memoizedState) ||
                (t.flags |= 4),
              typeof n.getSnapshotBeforeUpdate != "function" ||
                (i === l.memoizedProps && m === l.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = u),
              (t.memoizedState = y)),
          (n.props = u),
          (n.state = y),
          (n.context = f),
          (u = g))
        : (typeof n.componentDidUpdate != "function" ||
            (i === l.memoizedProps && m === l.memoizedState) ||
            (t.flags |= 4),
          typeof n.getSnapshotBeforeUpdate != "function" ||
            (i === l.memoizedProps && m === l.memoizedState) ||
            (t.flags |= 1024),
          (u = !1));
    }
    return (
      (n = u),
      nn(l, t),
      (u = (t.flags & 128) !== 0),
      n || u
        ? ((n = t.stateNode),
          (a =
            u && typeof a.getDerivedStateFromError != "function"
              ? null
              : n.render()),
          (t.flags |= 1),
          l !== null && u
            ? ((t.child = nu(t, l.child, null, e)),
              (t.child = nu(t, null, a, e)))
            : pl(l, t, a, e),
          (t.memoizedState = n.state),
          (l = t.child))
        : (l = qt(l, t, e)),
      l
    );
  }
  function _0(l, t, a, u) {
    return qu(), (t.flags |= 256), pl(l, t, a, u), t.child;
  }
  var tc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function ac(l) {
    return { baseLanes: l, cachePool: vs() };
  }
  function uc(l, t, a) {
    return (l = l !== null ? l.childLanes & ~a : 0), t && (l |= st), l;
  }
  function M0(l, t, a) {
    var u = t.pendingProps,
      e = !1,
      n = (t.flags & 128) !== 0,
      i;
    if (
      ((i = n) ||
        (i =
          l !== null && l.memoizedState === null ? !1 : (bl.current & 2) !== 0),
      i && ((e = !0), (t.flags &= -129)),
      (i = (t.flags & 32) !== 0),
      (t.flags &= -33),
      l === null)
    ) {
      if (F) {
        if ((e ? $t(t) : kt(), F)) {
          var c = ol,
            f;
          if ((f = c)) {
            l: {
              for (f = c, c = St; f.nodeType !== 8; ) {
                if (!c) {
                  c = null;
                  break l;
                }
                if (((f = mt(f.nextSibling)), f === null)) {
                  c = null;
                  break l;
                }
              }
              c = f;
            }
            c !== null
              ? ((t.memoizedState = {
                  dehydrated: c,
                  treeContext: Ea !== null ? { id: Dt, overflow: xt } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (f = kl(18, null, null, 0)),
                (f.stateNode = c),
                (f.return = t),
                (t.child = f),
                (Yl = t),
                (ol = null),
                (f = !0))
              : (f = !1);
          }
          f || Oa(t);
        }
        if (
          ((c = t.memoizedState),
          c !== null && ((c = c.dehydrated), c !== null))
        )
          return Qc(c) ? (t.lanes = 32) : (t.lanes = 536870912), null;
        jt(t);
      }
      return (
        (c = u.children),
        (u = u.fallback),
        e
          ? (kt(),
            (e = t.mode),
            (c = cn({ mode: "hidden", children: c }, e)),
            (u = ba(u, e, a, null)),
            (c.return = t),
            (u.return = t),
            (c.sibling = u),
            (t.child = c),
            (e = t.child),
            (e.memoizedState = ac(a)),
            (e.childLanes = uc(l, i, a)),
            (t.memoizedState = tc),
            u)
          : ($t(t), ec(t, c))
      );
    }
    if (
      ((f = l.memoizedState), f !== null && ((c = f.dehydrated), c !== null))
    ) {
      if (n)
        t.flags & 256
          ? ($t(t), (t.flags &= -257), (t = nc(l, t, a)))
          : t.memoizedState !== null
          ? (kt(), (t.child = l.child), (t.flags |= 128), (t = null))
          : (kt(),
            (e = u.fallback),
            (c = t.mode),
            (u = cn({ mode: "visible", children: u.children }, c)),
            (e = ba(e, c, a, null)),
            (e.flags |= 2),
            (u.return = t),
            (e.return = t),
            (u.sibling = e),
            (t.child = u),
            nu(t, l.child, null, a),
            (u = t.child),
            (u.memoizedState = ac(a)),
            (u.childLanes = uc(l, i, a)),
            (t.memoizedState = tc),
            (t = e));
      else if (($t(t), Qc(c))) {
        if (((i = c.nextSibling && c.nextSibling.dataset), i)) var h = i.dgst;
        (i = h),
          (u = Error(o(419))),
          (u.stack = ""),
          (u.digest = i),
          Hu({ value: u, source: null, stack: null }),
          (t = nc(l, t, a));
      } else if (
        (Al || Yu(l, t, a, !1), (i = (a & l.childLanes) !== 0), Al || i)
      ) {
        if (
          ((i = il),
          i !== null &&
            ((u = a & -a),
            (u = (u & 42) !== 0 ? 1 : Cn(u)),
            (u = (u & (i.suspendedLanes | a)) !== 0 ? 0 : u),
            u !== 0 && u !== f.retryLane))
        )
          throw ((f.retryLane = u), Wa(l, u), tt(i, l, u), S0);
        c.data === "$?" || Oc(), (t = nc(l, t, a));
      } else
        c.data === "$?"
          ? ((t.flags |= 192), (t.child = l.child), (t = null))
          : ((l = f.treeContext),
            (ol = mt(c.nextSibling)),
            (Yl = t),
            (F = !0),
            (Aa = null),
            (St = !1),
            l !== null &&
              ((it[ct++] = Dt),
              (it[ct++] = xt),
              (it[ct++] = Ea),
              (Dt = l.id),
              (xt = l.overflow),
              (Ea = t)),
            (t = ec(t, u.children)),
            (t.flags |= 4096));
      return t;
    }
    return e
      ? (kt(),
        (e = u.fallback),
        (c = t.mode),
        (f = l.child),
        (h = f.sibling),
        (u = Mt(f, { mode: "hidden", children: u.children })),
        (u.subtreeFlags = f.subtreeFlags & 65011712),
        h !== null ? (e = Mt(h, e)) : ((e = ba(e, c, a, null)), (e.flags |= 2)),
        (e.return = t),
        (u.return = t),
        (u.sibling = e),
        (t.child = u),
        (u = e),
        (e = t.child),
        (c = l.child.memoizedState),
        c === null
          ? (c = ac(a))
          : ((f = c.cachePool),
            f !== null
              ? ((h = Sl._currentValue),
                (f = f.parent !== h ? { parent: h, pool: h } : f))
              : (f = vs()),
            (c = { baseLanes: c.baseLanes | a, cachePool: f })),
        (e.memoizedState = c),
        (e.childLanes = uc(l, i, a)),
        (t.memoizedState = tc),
        u)
      : ($t(t),
        (a = l.child),
        (l = a.sibling),
        (a = Mt(a, { mode: "visible", children: u.children })),
        (a.return = t),
        (a.sibling = null),
        l !== null &&
          ((i = t.deletions),
          i === null ? ((t.deletions = [l]), (t.flags |= 16)) : i.push(l)),
        (t.child = a),
        (t.memoizedState = null),
        a);
  }
  function ec(l, t) {
    return (
      (t = cn({ mode: "visible", children: t }, l.mode)),
      (t.return = l),
      (l.child = t)
    );
  }
  function cn(l, t) {
    return (
      (l = kl(22, l, null, t)),
      (l.lanes = 0),
      (l.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      l
    );
  }
  function nc(l, t, a) {
    return (
      nu(t, l.child, null, a),
      (l = ec(t, t.pendingProps.children)),
      (l.flags |= 2),
      (t.memoizedState = null),
      l
    );
  }
  function D0(l, t, a) {
    l.lanes |= t;
    var u = l.alternate;
    u !== null && (u.lanes |= t), Oi(l.return, t, a);
  }
  function ic(l, t, a, u, e) {
    var n = l.memoizedState;
    n === null
      ? (l.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: u,
          tail: a,
          tailMode: e,
        })
      : ((n.isBackwards = t),
        (n.rendering = null),
        (n.renderingStartTime = 0),
        (n.last = u),
        (n.tail = a),
        (n.tailMode = e));
  }
  function x0(l, t, a) {
    var u = t.pendingProps,
      e = u.revealOrder,
      n = u.tail;
    if ((pl(l, t, u.children, a), (u = bl.current), (u & 2) !== 0))
      (u = (u & 1) | 2), (t.flags |= 128);
    else {
      if (l !== null && (l.flags & 128) !== 0)
        l: for (l = t.child; l !== null; ) {
          if (l.tag === 13) l.memoizedState !== null && D0(l, a, t);
          else if (l.tag === 19) D0(l, a, t);
          else if (l.child !== null) {
            (l.child.return = l), (l = l.child);
            continue;
          }
          if (l === t) break l;
          for (; l.sibling === null; ) {
            if (l.return === null || l.return === t) break l;
            l = l.return;
          }
          (l.sibling.return = l.return), (l = l.sibling);
        }
      u &= 1;
    }
    switch ((p(bl, u), e)) {
      case "forwards":
        for (a = t.child, e = null; a !== null; )
          (l = a.alternate),
            l !== null && an(l) === null && (e = a),
            (a = a.sibling);
        (a = e),
          a === null
            ? ((e = t.child), (t.child = null))
            : ((e = a.sibling), (a.sibling = null)),
          ic(t, !1, e, a, n);
        break;
      case "backwards":
        for (a = null, e = t.child, t.child = null; e !== null; ) {
          if (((l = e.alternate), l !== null && an(l) === null)) {
            t.child = e;
            break;
          }
          (l = e.sibling), (e.sibling = a), (a = e), (e = l);
        }
        ic(t, !0, a, null, n);
        break;
      case "together":
        ic(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function qt(l, t, a) {
    if (
      (l !== null && (t.dependencies = l.dependencies),
      (ta |= t.lanes),
      (a & t.childLanes) === 0)
    )
      if (l !== null) {
        if ((Yu(l, t, a, !1), (a & t.childLanes) === 0)) return null;
      } else return null;
    if (l !== null && t.child !== l.child) throw Error(o(153));
    if (t.child !== null) {
      for (
        l = t.child, a = Mt(l, l.pendingProps), t.child = a, a.return = t;
        l.sibling !== null;

      )
        (l = l.sibling),
          (a = a.sibling = Mt(l, l.pendingProps)),
          (a.return = t);
      a.sibling = null;
    }
    return t.child;
  }
  function cc(l, t) {
    return (l.lanes & t) !== 0
      ? !0
      : ((l = l.dependencies), !!(l !== null && Qe(l)));
  }
  function Yo(l, t, a) {
    switch (t.tag) {
      case 3:
        fl(t, t.stateNode.containerInfo),
          Lt(t, Sl, l.memoizedState.cache),
          qu();
        break;
      case 27:
      case 5:
        Yn(t);
        break;
      case 4:
        fl(t, t.stateNode.containerInfo);
        break;
      case 10:
        Lt(t, t.type, t.memoizedProps.value);
        break;
      case 13:
        var u = t.memoizedState;
        if (u !== null)
          return u.dehydrated !== null
            ? ($t(t), (t.flags |= 128), null)
            : (a & t.child.childLanes) !== 0
            ? M0(l, t, a)
            : ($t(t), (l = qt(l, t, a)), l !== null ? l.sibling : null);
        $t(t);
        break;
      case 19:
        var e = (l.flags & 128) !== 0;
        if (
          ((u = (a & t.childLanes) !== 0),
          u || (Yu(l, t, a, !1), (u = (a & t.childLanes) !== 0)),
          e)
        ) {
          if (u) return x0(l, t, a);
          t.flags |= 128;
        }
        if (
          ((e = t.memoizedState),
          e !== null &&
            ((e.rendering = null), (e.tail = null), (e.lastEffect = null)),
          p(bl, bl.current),
          u)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), A0(l, t, a);
      case 24:
        Lt(t, Sl, l.memoizedState.cache);
    }
    return qt(l, t, a);
  }
  function U0(l, t, a) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps) Al = !0;
      else {
        if (!cc(l, a) && (t.flags & 128) === 0) return (Al = !1), Yo(l, t, a);
        Al = (l.flags & 131072) !== 0;
      }
    else (Al = !1), F && (t.flags & 1048576) !== 0 && is(t, Xe, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        l: {
          l = t.pendingProps;
          var u = t.elementType,
            e = u._init;
          if (((u = e(u._payload)), (t.type = u), typeof u == "function"))
            yi(u)
              ? ((l = Da(u, l)), (t.tag = 1), (t = p0(null, t, u, l, a)))
              : ((t.tag = 0), (t = lc(null, t, u, l, a)));
          else {
            if (u != null) {
              if (((e = u.$$typeof), e === ot)) {
                (t.tag = 11), (t = b0(null, t, u, l, a));
                break l;
              } else if (e === Ll) {
                (t.tag = 14), (t = E0(null, t, u, l, a));
                break l;
              }
            }
            throw ((t = va(u) || u), Error(o(306, t, "")));
          }
        }
        return t;
      case 0:
        return lc(l, t, t.type, t.pendingProps, a);
      case 1:
        return (u = t.type), (e = Da(u, t.pendingProps)), p0(l, t, u, e, a);
      case 3:
        l: {
          if ((fl(t, t.stateNode.containerInfo), l === null))
            throw Error(o(387));
          u = t.pendingProps;
          var n = t.memoizedState;
          (e = n.element), Ui(l, t), Vu(t, u, null, a);
          var i = t.memoizedState;
          if (
            ((u = i.cache),
            Lt(t, Sl, u),
            u !== n.cache && zi(t, [Sl], a, !0),
            Zu(),
            (u = i.element),
            n.isDehydrated)
          )
            if (
              ((n = { element: u, isDehydrated: !1, cache: i.cache }),
              (t.updateQueue.baseState = n),
              (t.memoizedState = n),
              t.flags & 256)
            ) {
              t = _0(l, t, u, a);
              break l;
            } else if (u !== e) {
              (e = et(Error(o(424)), t)), Hu(e), (t = _0(l, t, u, a));
              break l;
            } else {
              switch (((l = t.stateNode.containerInfo), l.nodeType)) {
                case 9:
                  l = l.body;
                  break;
                default:
                  l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
              }
              for (
                ol = mt(l.firstChild),
                  Yl = t,
                  F = !0,
                  Aa = null,
                  St = !0,
                  a = f0(t, null, u, a),
                  t.child = a;
                a;

              )
                (a.flags = (a.flags & -3) | 4096), (a = a.sibling);
            }
          else {
            if ((qu(), u === e)) {
              t = qt(l, t, a);
              break l;
            }
            pl(l, t, u, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          nn(l, t),
          l === null
            ? (a = qd(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = a)
              : F ||
                ((a = t.type),
                (l = t.pendingProps),
                (u = Tn(Q.current).createElement(a)),
                (u[Nl] = t),
                (u[Gl] = l),
                Ml(u, a, l),
                Tl(u),
                (t.stateNode = u))
            : (t.memoizedState = qd(
                t.type,
                l.memoizedProps,
                t.pendingProps,
                l.memoizedState
              )),
          null
        );
      case 27:
        return (
          Yn(t),
          l === null &&
            F &&
            ((u = t.stateNode = Nd(t.type, t.pendingProps, Q.current)),
            (Yl = t),
            (St = !0),
            (e = ol),
            na(t.type) ? ((Cc = e), (ol = mt(u.firstChild))) : (ol = e)),
          pl(l, t, t.pendingProps.children, a),
          nn(l, t),
          l === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          l === null &&
            F &&
            ((e = u = ol) &&
              ((u = dv(u, t.type, t.pendingProps, St)),
              u !== null
                ? ((t.stateNode = u),
                  (Yl = t),
                  (ol = mt(u.firstChild)),
                  (St = !1),
                  (e = !0))
                : (e = !1)),
            e || Oa(t)),
          Yn(t),
          (e = t.type),
          (n = t.pendingProps),
          (i = l !== null ? l.memoizedProps : null),
          (u = n.children),
          Bc(e, n) ? (u = null) : i !== null && Bc(e, i) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((e = Yi(l, t, Do, null, null, a)), (re._currentValue = e)),
          nn(l, t),
          pl(l, t, u, a),
          t.child
        );
      case 6:
        return (
          l === null &&
            F &&
            ((l = a = ol) &&
              ((a = rv(a, t.pendingProps, St)),
              a !== null
                ? ((t.stateNode = a), (Yl = t), (ol = null), (l = !0))
                : (l = !1)),
            l || Oa(t)),
          null
        );
      case 13:
        return M0(l, t, a);
      case 4:
        return (
          fl(t, t.stateNode.containerInfo),
          (u = t.pendingProps),
          l === null ? (t.child = nu(t, null, u, a)) : pl(l, t, u, a),
          t.child
        );
      case 11:
        return b0(l, t, t.type, t.pendingProps, a);
      case 7:
        return pl(l, t, t.pendingProps, a), t.child;
      case 8:
        return pl(l, t, t.pendingProps.children, a), t.child;
      case 12:
        return pl(l, t, t.pendingProps.children, a), t.child;
      case 10:
        return (
          (u = t.pendingProps),
          Lt(t, t.type, u.value),
          pl(l, t, u.children, a),
          t.child
        );
      case 9:
        return (
          (e = t.type._context),
          (u = t.pendingProps.children),
          pa(t),
          (e = Rl(e)),
          (u = u(e)),
          (t.flags |= 1),
          pl(l, t, u, a),
          t.child
        );
      case 14:
        return E0(l, t, t.type, t.pendingProps, a);
      case 15:
        return T0(l, t, t.type, t.pendingProps, a);
      case 19:
        return x0(l, t, a);
      case 31:
        return (
          (u = t.pendingProps),
          (a = t.mode),
          (u = { mode: u.mode, children: u.children }),
          l === null
            ? ((a = cn(u, a)),
              (a.ref = t.ref),
              (t.child = a),
              (a.return = t),
              (t = a))
            : ((a = Mt(l.child, u)),
              (a.ref = t.ref),
              (t.child = a),
              (a.return = t),
              (t = a)),
          t
        );
      case 22:
        return A0(l, t, a);
      case 24:
        return (
          pa(t),
          (u = Rl(Sl)),
          l === null
            ? ((e = Mi()),
              e === null &&
                ((e = il),
                (n = pi()),
                (e.pooledCache = n),
                n.refCount++,
                n !== null && (e.pooledCacheLanes |= a),
                (e = n)),
              (t.memoizedState = { parent: u, cache: e }),
              xi(t),
              Lt(t, Sl, e))
            : ((l.lanes & a) !== 0 && (Ui(l, t), Vu(t, null, null, a), Zu()),
              (e = l.memoizedState),
              (n = t.memoizedState),
              e.parent !== u
                ? ((e = { parent: u, cache: u }),
                  (t.memoizedState = e),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = e),
                  Lt(t, Sl, u))
                : ((u = n.cache),
                  Lt(t, Sl, u),
                  u !== e.cache && zi(t, [Sl], a, !0))),
          pl(l, t, t.pendingProps.children, a),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(o(156, t.tag));
  }
  function Ht(l) {
    l.flags |= 4;
  }
  function N0(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (((l.flags |= 16777216), !Xd(t))) {
      if (
        ((t = ft.current),
        t !== null &&
          ((w & 4194048) === w
            ? bt !== null
            : ((w & 62914560) !== w && (w & 536870912) === 0) || t !== bt))
      )
        throw ((Qu = Di), hs);
      l.flags |= 8192;
    }
  }
  function fn(l, t) {
    t !== null && (l.flags |= 4),
      l.flags & 16384 &&
        ((t = l.tag !== 22 ? sf() : 536870912), (l.lanes |= t), (su |= t));
  }
  function ku(l, t) {
    if (!F)
      switch (l.tailMode) {
        case "hidden":
          t = l.tail;
          for (var a = null; t !== null; )
            t.alternate !== null && (a = t), (t = t.sibling);
          a === null ? (l.tail = null) : (a.sibling = null);
          break;
        case "collapsed":
          a = l.tail;
          for (var u = null; a !== null; )
            a.alternate !== null && (u = a), (a = a.sibling);
          u === null
            ? t || l.tail === null
              ? (l.tail = null)
              : (l.tail.sibling = null)
            : (u.sibling = null);
      }
  }
  function rl(l) {
    var t = l.alternate !== null && l.alternate.child === l.child,
      a = 0,
      u = 0;
    if (t)
      for (var e = l.child; e !== null; )
        (a |= e.lanes | e.childLanes),
          (u |= e.subtreeFlags & 65011712),
          (u |= e.flags & 65011712),
          (e.return = l),
          (e = e.sibling);
    else
      for (e = l.child; e !== null; )
        (a |= e.lanes | e.childLanes),
          (u |= e.subtreeFlags),
          (u |= e.flags),
          (e.return = l),
          (e = e.sibling);
    return (l.subtreeFlags |= u), (l.childLanes = a), t;
  }
  function Bo(l, t, a) {
    var u = t.pendingProps;
    switch ((Ei(t), t.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return rl(t), null;
      case 1:
        return rl(t), null;
      case 3:
        return (
          (a = t.stateNode),
          (u = null),
          l !== null && (u = l.memoizedState.cache),
          t.memoizedState.cache !== u && (t.flags |= 2048),
          Nt(Sl),
          Qt(),
          a.pendingContext &&
            ((a.context = a.pendingContext), (a.pendingContext = null)),
          (l === null || l.child === null) &&
            (ju(t)
              ? Ht(t)
              : l === null ||
                (l.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), ss())),
          rl(t),
          null
        );
      case 26:
        return (
          (a = t.memoizedState),
          l === null
            ? (Ht(t),
              a !== null ? (rl(t), N0(t, a)) : (rl(t), (t.flags &= -16777217)))
            : a
            ? a !== l.memoizedState
              ? (Ht(t), rl(t), N0(t, a))
              : (rl(t), (t.flags &= -16777217))
            : (l.memoizedProps !== u && Ht(t), rl(t), (t.flags &= -16777217)),
          null
        );
      case 27:
        Se(t), (a = Q.current);
        var e = t.type;
        if (l !== null && t.stateNode != null) l.memoizedProps !== u && Ht(t);
        else {
          if (!u) {
            if (t.stateNode === null) throw Error(o(166));
            return rl(t), null;
          }
          (l = H.current),
            ju(t) ? cs(t) : ((l = Nd(e, u, a)), (t.stateNode = l), Ht(t));
        }
        return rl(t), null;
      case 5:
        if ((Se(t), (a = t.type), l !== null && t.stateNode != null))
          l.memoizedProps !== u && Ht(t);
        else {
          if (!u) {
            if (t.stateNode === null) throw Error(o(166));
            return rl(t), null;
          }
          if (((l = H.current), ju(t))) cs(t);
          else {
            switch (((e = Tn(Q.current)), l)) {
              case 1:
                l = e.createElementNS("http://www.w3.org/2000/svg", a);
                break;
              case 2:
                l = e.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                break;
              default:
                switch (a) {
                  case "svg":
                    l = e.createElementNS("http://www.w3.org/2000/svg", a);
                    break;
                  case "math":
                    l = e.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      a
                    );
                    break;
                  case "script":
                    (l = e.createElement("div")),
                      (l.innerHTML = "<script></script>"),
                      (l = l.removeChild(l.firstChild));
                    break;
                  case "select":
                    (l =
                      typeof u.is == "string"
                        ? e.createElement("select", { is: u.is })
                        : e.createElement("select")),
                      u.multiple
                        ? (l.multiple = !0)
                        : u.size && (l.size = u.size);
                    break;
                  default:
                    l =
                      typeof u.is == "string"
                        ? e.createElement(a, { is: u.is })
                        : e.createElement(a);
                }
            }
            (l[Nl] = t), (l[Gl] = u);
            l: for (e = t.child; e !== null; ) {
              if (e.tag === 5 || e.tag === 6) l.appendChild(e.stateNode);
              else if (e.tag !== 4 && e.tag !== 27 && e.child !== null) {
                (e.child.return = e), (e = e.child);
                continue;
              }
              if (e === t) break l;
              for (; e.sibling === null; ) {
                if (e.return === null || e.return === t) break l;
                e = e.return;
              }
              (e.sibling.return = e.return), (e = e.sibling);
            }
            t.stateNode = l;
            l: switch ((Ml(l, a, u), a)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!u.autoFocus;
                break l;
              case "img":
                l = !0;
                break l;
              default:
                l = !1;
            }
            l && Ht(t);
          }
        }
        return rl(t), (t.flags &= -16777217), null;
      case 6:
        if (l && t.stateNode != null) l.memoizedProps !== u && Ht(t);
        else {
          if (typeof u != "string" && t.stateNode === null) throw Error(o(166));
          if (((l = Q.current), ju(t))) {
            if (
              ((l = t.stateNode),
              (a = t.memoizedProps),
              (u = null),
              (e = Yl),
              e !== null)
            )
              switch (e.tag) {
                case 27:
                case 5:
                  u = e.memoizedProps;
              }
            (l[Nl] = t),
              (l = !!(
                l.nodeValue === a ||
                (u !== null && u.suppressHydrationWarning === !0) ||
                zd(l.nodeValue, a)
              )),
              l || Oa(t);
          } else (l = Tn(l).createTextNode(u)), (l[Nl] = t), (t.stateNode = l);
        }
        return rl(t), null;
      case 13:
        if (
          ((u = t.memoizedState),
          l === null ||
            (l.memoizedState !== null && l.memoizedState.dehydrated !== null))
        ) {
          if (((e = ju(t)), u !== null && u.dehydrated !== null)) {
            if (l === null) {
              if (!e) throw Error(o(318));
              if (
                ((e = t.memoizedState),
                (e = e !== null ? e.dehydrated : null),
                !e)
              )
                throw Error(o(317));
              e[Nl] = t;
            } else
              qu(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            rl(t), (e = !1);
          } else
            (e = ss()),
              l !== null &&
                l.memoizedState !== null &&
                (l.memoizedState.hydrationErrors = e),
              (e = !0);
          if (!e) return t.flags & 256 ? (jt(t), t) : (jt(t), null);
        }
        if ((jt(t), (t.flags & 128) !== 0)) return (t.lanes = a), t;
        if (
          ((a = u !== null), (l = l !== null && l.memoizedState !== null), a)
        ) {
          (u = t.child),
            (e = null),
            u.alternate !== null &&
              u.alternate.memoizedState !== null &&
              u.alternate.memoizedState.cachePool !== null &&
              (e = u.alternate.memoizedState.cachePool.pool);
          var n = null;
          u.memoizedState !== null &&
            u.memoizedState.cachePool !== null &&
            (n = u.memoizedState.cachePool.pool),
            n !== e && (u.flags |= 2048);
        }
        return (
          a !== l && a && (t.child.flags |= 8192),
          fn(t, t.updateQueue),
          rl(t),
          null
        );
      case 4:
        return Qt(), l === null && Rc(t.stateNode.containerInfo), rl(t), null;
      case 10:
        return Nt(t.type), rl(t), null;
      case 19:
        if ((D(bl), (e = t.memoizedState), e === null)) return rl(t), null;
        if (((u = (t.flags & 128) !== 0), (n = e.rendering), n === null))
          if (u) ku(e, !1);
          else {
            if (vl !== 0 || (l !== null && (l.flags & 128) !== 0))
              for (l = t.child; l !== null; ) {
                if (((n = an(l)), n !== null)) {
                  for (
                    t.flags |= 128,
                      ku(e, !1),
                      l = n.updateQueue,
                      t.updateQueue = l,
                      fn(t, l),
                      t.subtreeFlags = 0,
                      l = a,
                      a = t.child;
                    a !== null;

                  )
                    ns(a, l), (a = a.sibling);
                  return p(bl, (bl.current & 1) | 2), t.child;
                }
                l = l.sibling;
              }
            e.tail !== null &&
              gt() > rn &&
              ((t.flags |= 128), (u = !0), ku(e, !1), (t.lanes = 4194304));
          }
        else {
          if (!u)
            if (((l = an(n)), l !== null)) {
              if (
                ((t.flags |= 128),
                (u = !0),
                (l = l.updateQueue),
                (t.updateQueue = l),
                fn(t, l),
                ku(e, !0),
                e.tail === null &&
                  e.tailMode === "hidden" &&
                  !n.alternate &&
                  !F)
              )
                return rl(t), null;
            } else
              2 * gt() - e.renderingStartTime > rn &&
                a !== 536870912 &&
                ((t.flags |= 128), (u = !0), ku(e, !1), (t.lanes = 4194304));
          e.isBackwards
            ? ((n.sibling = t.child), (t.child = n))
            : ((l = e.last),
              l !== null ? (l.sibling = n) : (t.child = n),
              (e.last = n));
        }
        return e.tail !== null
          ? ((t = e.tail),
            (e.rendering = t),
            (e.tail = t.sibling),
            (e.renderingStartTime = gt()),
            (t.sibling = null),
            (l = bl.current),
            p(bl, u ? (l & 1) | 2 : l & 1),
            t)
          : (rl(t), null);
      case 22:
      case 23:
        return (
          jt(t),
          qi(),
          (u = t.memoizedState !== null),
          l !== null
            ? (l.memoizedState !== null) !== u && (t.flags |= 8192)
            : u && (t.flags |= 8192),
          u
            ? (a & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (rl(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : rl(t),
          (a = t.updateQueue),
          a !== null && fn(t, a.retryQueue),
          (a = null),
          l !== null &&
            l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (a = l.memoizedState.cachePool.pool),
          (u = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (u = t.memoizedState.cachePool.pool),
          u !== a && (t.flags |= 2048),
          l !== null && D(_a),
          null
        );
      case 24:
        return (
          (a = null),
          l !== null && (a = l.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          Nt(Sl),
          rl(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function Go(l, t) {
    switch ((Ei(t), t.tag)) {
      case 1:
        return (
          (l = t.flags), l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 3:
        return (
          Nt(Sl),
          Qt(),
          (l = t.flags),
          (l & 65536) !== 0 && (l & 128) === 0
            ? ((t.flags = (l & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return Se(t), null;
      case 13:
        if (
          (jt(t), (l = t.memoizedState), l !== null && l.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(o(340));
          qu();
        }
        return (
          (l = t.flags), l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 19:
        return D(bl), null;
      case 4:
        return Qt(), null;
      case 10:
        return Nt(t.type), null;
      case 22:
      case 23:
        return (
          jt(t),
          qi(),
          l !== null && D(_a),
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 24:
        return Nt(Sl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function R0(l, t) {
    switch ((Ei(t), t.tag)) {
      case 3:
        Nt(Sl), Qt();
        break;
      case 26:
      case 27:
      case 5:
        Se(t);
        break;
      case 4:
        Qt();
        break;
      case 13:
        jt(t);
        break;
      case 19:
        D(bl);
        break;
      case 10:
        Nt(t.type);
        break;
      case 22:
      case 23:
        jt(t), qi(), l !== null && D(_a);
        break;
      case 24:
        Nt(Sl);
    }
  }
  function Fu(l, t) {
    try {
      var a = t.updateQueue,
        u = a !== null ? a.lastEffect : null;
      if (u !== null) {
        var e = u.next;
        a = e;
        do {
          if ((a.tag & l) === l) {
            u = void 0;
            var n = a.create,
              i = a.inst;
            (u = n()), (i.destroy = u);
          }
          a = a.next;
        } while (a !== e);
      }
    } catch (c) {
      el(t, t.return, c);
    }
  }
  function Ft(l, t, a) {
    try {
      var u = t.updateQueue,
        e = u !== null ? u.lastEffect : null;
      if (e !== null) {
        var n = e.next;
        u = n;
        do {
          if ((u.tag & l) === l) {
            var i = u.inst,
              c = i.destroy;
            if (c !== void 0) {
              (i.destroy = void 0), (e = t);
              var f = a,
                h = c;
              try {
                h();
              } catch (g) {
                el(e, f, g);
              }
            }
          }
          u = u.next;
        } while (u !== n);
      }
    } catch (g) {
      el(t, t.return, g);
    }
  }
  function j0(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var a = l.stateNode;
      try {
        Es(t, a);
      } catch (u) {
        el(l, l.return, u);
      }
    }
  }
  function q0(l, t, a) {
    (a.props = Da(l.type, l.memoizedProps)), (a.state = l.memoizedState);
    try {
      a.componentWillUnmount();
    } catch (u) {
      el(l, t, u);
    }
  }
  function Pu(l, t) {
    try {
      var a = l.ref;
      if (a !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var u = l.stateNode;
            break;
          case 30:
            u = l.stateNode;
            break;
          default:
            u = l.stateNode;
        }
        typeof a == "function" ? (l.refCleanup = a(u)) : (a.current = u);
      }
    } catch (e) {
      el(l, t, e);
    }
  }
  function Et(l, t) {
    var a = l.ref,
      u = l.refCleanup;
    if (a !== null)
      if (typeof u == "function")
        try {
          u();
        } catch (e) {
          el(l, t, e);
        } finally {
          (l.refCleanup = null),
            (l = l.alternate),
            l != null && (l.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (e) {
          el(l, t, e);
        }
      else a.current = null;
  }
  function H0(l) {
    var t = l.type,
      a = l.memoizedProps,
      u = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && u.focus();
          break l;
        case "img":
          a.src ? (u.src = a.src) : a.srcSet && (u.srcset = a.srcSet);
      }
    } catch (e) {
      el(l, l.return, e);
    }
  }
  function fc(l, t, a) {
    try {
      var u = l.stateNode;
      nv(u, l.type, a, t), (u[Gl] = t);
    } catch (e) {
      el(l, l.return, e);
    }
  }
  function Y0(l) {
    return (
      l.tag === 5 ||
      l.tag === 3 ||
      l.tag === 26 ||
      (l.tag === 27 && na(l.type)) ||
      l.tag === 4
    );
  }
  function sc(l) {
    l: for (;;) {
      for (; l.sibling === null; ) {
        if (l.return === null || Y0(l.return)) return null;
        l = l.return;
      }
      for (
        l.sibling.return = l.return, l = l.sibling;
        l.tag !== 5 && l.tag !== 6 && l.tag !== 18;

      ) {
        if (
          (l.tag === 27 && na(l.type)) ||
          l.flags & 2 ||
          l.child === null ||
          l.tag === 4
        )
          continue l;
        (l.child.return = l), (l = l.child);
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function dc(l, t, a) {
    var u = l.tag;
    if (u === 5 || u === 6)
      (l = l.stateNode),
        t
          ? (a.nodeType === 9
              ? a.body
              : a.nodeName === "HTML"
              ? a.ownerDocument.body
              : a
            ).insertBefore(l, t)
          : ((t =
              a.nodeType === 9
                ? a.body
                : a.nodeName === "HTML"
                ? a.ownerDocument.body
                : a),
            t.appendChild(l),
            (a = a._reactRootContainer),
            a != null || t.onclick !== null || (t.onclick = En));
    else if (
      u !== 4 &&
      (u === 27 && na(l.type) && ((a = l.stateNode), (t = null)),
      (l = l.child),
      l !== null)
    )
      for (dc(l, t, a), l = l.sibling; l !== null; )
        dc(l, t, a), (l = l.sibling);
  }
  function sn(l, t, a) {
    var u = l.tag;
    if (u === 5 || u === 6)
      (l = l.stateNode), t ? a.insertBefore(l, t) : a.appendChild(l);
    else if (
      u !== 4 &&
      (u === 27 && na(l.type) && (a = l.stateNode), (l = l.child), l !== null)
    )
      for (sn(l, t, a), l = l.sibling; l !== null; )
        sn(l, t, a), (l = l.sibling);
  }
  function B0(l) {
    var t = l.stateNode,
      a = l.memoizedProps;
    try {
      for (var u = l.type, e = t.attributes; e.length; )
        t.removeAttributeNode(e[0]);
      Ml(t, u, a), (t[Nl] = l), (t[Gl] = a);
    } catch (n) {
      el(l, l.return, n);
    }
  }
  var Yt = !1,
    ml = !1,
    rc = !1,
    G0 = typeof WeakSet == "function" ? WeakSet : Set,
    Ol = null;
  function Xo(l, t) {
    if (((l = l.containerInfo), (Hc = Mn), (l = $f(l)), si(l))) {
      if ("selectionStart" in l)
        var a = { start: l.selectionStart, end: l.selectionEnd };
      else
        l: {
          a = ((a = l.ownerDocument) && a.defaultView) || window;
          var u = a.getSelection && a.getSelection();
          if (u && u.rangeCount !== 0) {
            a = u.anchorNode;
            var e = u.anchorOffset,
              n = u.focusNode;
            u = u.focusOffset;
            try {
              a.nodeType, n.nodeType;
            } catch {
              a = null;
              break l;
            }
            var i = 0,
              c = -1,
              f = -1,
              h = 0,
              g = 0,
              T = l,
              m = null;
            t: for (;;) {
              for (
                var y;
                T !== a || (e !== 0 && T.nodeType !== 3) || (c = i + e),
                  T !== n || (u !== 0 && T.nodeType !== 3) || (f = i + u),
                  T.nodeType === 3 && (i += T.nodeValue.length),
                  (y = T.firstChild) !== null;

              )
                (m = T), (T = y);
              for (;;) {
                if (T === l) break t;
                if (
                  (m === a && ++h === e && (c = i),
                  m === n && ++g === u && (f = i),
                  (y = T.nextSibling) !== null)
                )
                  break;
                (T = m), (m = T.parentNode);
              }
              T = y;
            }
            a = c === -1 || f === -1 ? null : { start: c, end: f };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (
      Yc = { focusedElem: l, selectionRange: a }, Mn = !1, Ol = t;
      Ol !== null;

    )
      if (
        ((t = Ol), (l = t.child), (t.subtreeFlags & 1024) !== 0 && l !== null)
      )
        (l.return = t), (Ol = l);
      else
        for (; Ol !== null; ) {
          switch (((t = Ol), (n = t.alternate), (l = t.flags), t.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && n !== null) {
                (l = void 0),
                  (a = t),
                  (e = n.memoizedProps),
                  (n = n.memoizedState),
                  (u = a.stateNode);
                try {
                  var X = Da(a.type, e, a.elementType === a.type);
                  (l = u.getSnapshotBeforeUpdate(X, n)),
                    (u.__reactInternalSnapshotBeforeUpdate = l);
                } catch (Y) {
                  el(a, a.return, Y);
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (
                  ((l = t.stateNode.containerInfo), (a = l.nodeType), a === 9)
                )
                  Xc(l);
                else if (a === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Xc(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(o(163));
          }
          if (((l = t.sibling), l !== null)) {
            (l.return = t.return), (Ol = l);
            break;
          }
          Ol = t.return;
        }
  }
  function X0(l, t, a) {
    var u = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        Pt(l, a), u & 4 && Fu(5, a);
        break;
      case 1:
        if ((Pt(l, a), u & 4))
          if (((l = a.stateNode), t === null))
            try {
              l.componentDidMount();
            } catch (i) {
              el(a, a.return, i);
            }
          else {
            var e = Da(a.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              l.componentDidUpdate(e, t, l.__reactInternalSnapshotBeforeUpdate);
            } catch (i) {
              el(a, a.return, i);
            }
          }
        u & 64 && j0(a), u & 512 && Pu(a, a.return);
        break;
      case 3:
        if ((Pt(l, a), u & 64 && ((l = a.updateQueue), l !== null))) {
          if (((t = null), a.child !== null))
            switch (a.child.tag) {
              case 27:
              case 5:
                t = a.child.stateNode;
                break;
              case 1:
                t = a.child.stateNode;
            }
          try {
            Es(l, t);
          } catch (i) {
            el(a, a.return, i);
          }
        }
        break;
      case 27:
        t === null && u & 4 && B0(a);
      case 26:
      case 5:
        Pt(l, a), t === null && u & 4 && H0(a), u & 512 && Pu(a, a.return);
        break;
      case 12:
        Pt(l, a);
        break;
      case 13:
        Pt(l, a),
          u & 4 && Z0(l, a),
          u & 64 &&
            ((l = a.memoizedState),
            l !== null &&
              ((l = l.dehydrated),
              l !== null && ((a = Wo.bind(null, a)), ov(l, a))));
        break;
      case 22:
        if (((u = a.memoizedState !== null || Yt), !u)) {
          (t = (t !== null && t.memoizedState !== null) || ml), (e = Yt);
          var n = ml;
          (Yt = u),
            (ml = t) && !n ? It(l, a, (a.subtreeFlags & 8772) !== 0) : Pt(l, a),
            (Yt = e),
            (ml = n);
        }
        break;
      case 30:
        break;
      default:
        Pt(l, a);
    }
  }
  function Q0(l) {
    var t = l.alternate;
    t !== null && ((l.alternate = null), Q0(t)),
      (l.child = null),
      (l.deletions = null),
      (l.sibling = null),
      l.tag === 5 && ((t = l.stateNode), t !== null && Ln(t)),
      (l.stateNode = null),
      (l.return = null),
      (l.dependencies = null),
      (l.memoizedProps = null),
      (l.memoizedState = null),
      (l.pendingProps = null),
      (l.stateNode = null),
      (l.updateQueue = null);
  }
  var sl = null,
    Cl = !1;
  function Bt(l, t, a) {
    for (a = a.child; a !== null; ) C0(l, t, a), (a = a.sibling);
  }
  function C0(l, t, a) {
    if (wl && typeof wl.onCommitFiberUnmount == "function")
      try {
        wl.onCommitFiberUnmount(bu, a);
      } catch {}
    switch (a.tag) {
      case 26:
        ml || Et(a, t),
          Bt(l, t, a),
          a.memoizedState
            ? a.memoizedState.count--
            : a.stateNode && ((a = a.stateNode), a.parentNode.removeChild(a));
        break;
      case 27:
        ml || Et(a, t);
        var u = sl,
          e = Cl;
        na(a.type) && ((sl = a.stateNode), (Cl = !1)),
          Bt(l, t, a),
          ce(a.stateNode),
          (sl = u),
          (Cl = e);
        break;
      case 5:
        ml || Et(a, t);
      case 6:
        if (
          ((u = sl),
          (e = Cl),
          (sl = null),
          Bt(l, t, a),
          (sl = u),
          (Cl = e),
          sl !== null)
        )
          if (Cl)
            try {
              (sl.nodeType === 9
                ? sl.body
                : sl.nodeName === "HTML"
                ? sl.ownerDocument.body
                : sl
              ).removeChild(a.stateNode);
            } catch (n) {
              el(a, t, n);
            }
          else
            try {
              sl.removeChild(a.stateNode);
            } catch (n) {
              el(a, t, n);
            }
        break;
      case 18:
        sl !== null &&
          (Cl
            ? ((l = sl),
              xd(
                l.nodeType === 9
                  ? l.body
                  : l.nodeName === "HTML"
                  ? l.ownerDocument.body
                  : l,
                a.stateNode
              ),
              me(l))
            : xd(sl, a.stateNode));
        break;
      case 4:
        (u = sl),
          (e = Cl),
          (sl = a.stateNode.containerInfo),
          (Cl = !0),
          Bt(l, t, a),
          (sl = u),
          (Cl = e);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        ml || Ft(2, a, t), ml || Ft(4, a, t), Bt(l, t, a);
        break;
      case 1:
        ml ||
          (Et(a, t),
          (u = a.stateNode),
          typeof u.componentWillUnmount == "function" && q0(a, t, u)),
          Bt(l, t, a);
        break;
      case 21:
        Bt(l, t, a);
        break;
      case 22:
        (ml = (u = ml) || a.memoizedState !== null), Bt(l, t, a), (ml = u);
        break;
      default:
        Bt(l, t, a);
    }
  }
  function Z0(l, t) {
    if (
      t.memoizedState === null &&
      ((l = t.alternate),
      l !== null &&
        ((l = l.memoizedState), l !== null && ((l = l.dehydrated), l !== null)))
    )
      try {
        me(l);
      } catch (a) {
        el(t, t.return, a);
      }
  }
  function Qo(l) {
    switch (l.tag) {
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new G0()), t;
      case 22:
        return (
          (l = l.stateNode),
          (t = l._retryCache),
          t === null && (t = l._retryCache = new G0()),
          t
        );
      default:
        throw Error(o(435, l.tag));
    }
  }
  function oc(l, t) {
    var a = Qo(l);
    t.forEach(function (u) {
      var e = $o.bind(null, l, u);
      a.has(u) || (a.add(u), u.then(e, e));
    });
  }
  function Fl(l, t) {
    var a = t.deletions;
    if (a !== null)
      for (var u = 0; u < a.length; u++) {
        var e = a[u],
          n = l,
          i = t,
          c = i;
        l: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
              if (na(c.type)) {
                (sl = c.stateNode), (Cl = !1);
                break l;
              }
              break;
            case 5:
              (sl = c.stateNode), (Cl = !1);
              break l;
            case 3:
            case 4:
              (sl = c.stateNode.containerInfo), (Cl = !0);
              break l;
          }
          c = c.return;
        }
        if (sl === null) throw Error(o(160));
        C0(n, i, e),
          (sl = null),
          (Cl = !1),
          (n = e.alternate),
          n !== null && (n.return = null),
          (e.return = null);
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; ) V0(t, l), (t = t.sibling);
  }
  var ht = null;
  function V0(l, t) {
    var a = l.alternate,
      u = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Fl(t, l),
          Pl(l),
          u & 4 && (Ft(3, l, l.return), Fu(3, l), Ft(5, l, l.return));
        break;
      case 1:
        Fl(t, l),
          Pl(l),
          u & 512 && (ml || a === null || Et(a, a.return)),
          u & 64 &&
            Yt &&
            ((l = l.updateQueue),
            l !== null &&
              ((u = l.callbacks),
              u !== null &&
                ((a = l.shared.hiddenCallbacks),
                (l.shared.hiddenCallbacks = a === null ? u : a.concat(u)))));
        break;
      case 26:
        var e = ht;
        if (
          (Fl(t, l),
          Pl(l),
          u & 512 && (ml || a === null || Et(a, a.return)),
          u & 4)
        ) {
          var n = a !== null ? a.memoizedState : null;
          if (((u = l.memoizedState), a === null))
            if (u === null)
              if (l.stateNode === null) {
                l: {
                  (u = l.type),
                    (a = l.memoizedProps),
                    (e = e.ownerDocument || e);
                  t: switch (u) {
                    case "title":
                      (n = e.getElementsByTagName("title")[0]),
                        (!n ||
                          n[Au] ||
                          n[Nl] ||
                          n.namespaceURI === "http://www.w3.org/2000/svg" ||
                          n.hasAttribute("itemprop")) &&
                          ((n = e.createElement(u)),
                          e.head.insertBefore(
                            n,
                            e.querySelector("head > title")
                          )),
                        Ml(n, u, a),
                        (n[Nl] = l),
                        Tl(n),
                        (u = n);
                      break l;
                    case "link":
                      var i = Bd("link", "href", e).get(u + (a.href || ""));
                      if (i) {
                        for (var c = 0; c < i.length; c++)
                          if (
                            ((n = i[c]),
                            n.getAttribute("href") ===
                              (a.href == null || a.href === ""
                                ? null
                                : a.href) &&
                              n.getAttribute("rel") ===
                                (a.rel == null ? null : a.rel) &&
                              n.getAttribute("title") ===
                                (a.title == null ? null : a.title) &&
                              n.getAttribute("crossorigin") ===
                                (a.crossOrigin == null ? null : a.crossOrigin))
                          ) {
                            i.splice(c, 1);
                            break t;
                          }
                      }
                      (n = e.createElement(u)),
                        Ml(n, u, a),
                        e.head.appendChild(n);
                      break;
                    case "meta":
                      if (
                        (i = Bd("meta", "content", e).get(
                          u + (a.content || "")
                        ))
                      ) {
                        for (c = 0; c < i.length; c++)
                          if (
                            ((n = i[c]),
                            n.getAttribute("content") ===
                              (a.content == null ? null : "" + a.content) &&
                              n.getAttribute("name") ===
                                (a.name == null ? null : a.name) &&
                              n.getAttribute("property") ===
                                (a.property == null ? null : a.property) &&
                              n.getAttribute("http-equiv") ===
                                (a.httpEquiv == null ? null : a.httpEquiv) &&
                              n.getAttribute("charset") ===
                                (a.charSet == null ? null : a.charSet))
                          ) {
                            i.splice(c, 1);
                            break t;
                          }
                      }
                      (n = e.createElement(u)),
                        Ml(n, u, a),
                        e.head.appendChild(n);
                      break;
                    default:
                      throw Error(o(468, u));
                  }
                  (n[Nl] = l), Tl(n), (u = n);
                }
                l.stateNode = u;
              } else Gd(e, l.type, l.stateNode);
            else l.stateNode = Yd(e, u, l.memoizedProps);
          else
            n !== u
              ? (n === null
                  ? a.stateNode !== null &&
                    ((a = a.stateNode), a.parentNode.removeChild(a))
                  : n.count--,
                u === null
                  ? Gd(e, l.type, l.stateNode)
                  : Yd(e, u, l.memoizedProps))
              : u === null &&
                l.stateNode !== null &&
                fc(l, l.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        Fl(t, l),
          Pl(l),
          u & 512 && (ml || a === null || Et(a, a.return)),
          a !== null && u & 4 && fc(l, l.memoizedProps, a.memoizedProps);
        break;
      case 5:
        if (
          (Fl(t, l),
          Pl(l),
          u & 512 && (ml || a === null || Et(a, a.return)),
          l.flags & 32)
        ) {
          e = l.stateNode;
          try {
            Ca(e, "");
          } catch (y) {
            el(l, l.return, y);
          }
        }
        u & 4 &&
          l.stateNode != null &&
          ((e = l.memoizedProps), fc(l, e, a !== null ? a.memoizedProps : e)),
          u & 1024 && (rc = !0);
        break;
      case 6:
        if ((Fl(t, l), Pl(l), u & 4)) {
          if (l.stateNode === null) throw Error(o(162));
          (u = l.memoizedProps), (a = l.stateNode);
          try {
            a.nodeValue = u;
          } catch (y) {
            el(l, l.return, y);
          }
        }
        break;
      case 3:
        if (
          ((zn = null),
          (e = ht),
          (ht = An(t.containerInfo)),
          Fl(t, l),
          (ht = e),
          Pl(l),
          u & 4 && a !== null && a.memoizedState.isDehydrated)
        )
          try {
            me(t.containerInfo);
          } catch (y) {
            el(l, l.return, y);
          }
        rc && ((rc = !1), L0(l));
        break;
      case 4:
        (u = ht),
          (ht = An(l.stateNode.containerInfo)),
          Fl(t, l),
          Pl(l),
          (ht = u);
        break;
      case 12:
        Fl(t, l), Pl(l);
        break;
      case 13:
        Fl(t, l),
          Pl(l),
          l.child.flags & 8192 &&
            (l.memoizedState !== null) !=
              (a !== null && a.memoizedState !== null) &&
            (Sc = gt()),
          u & 4 &&
            ((u = l.updateQueue),
            u !== null && ((l.updateQueue = null), oc(l, u)));
        break;
      case 22:
        e = l.memoizedState !== null;
        var f = a !== null && a.memoizedState !== null,
          h = Yt,
          g = ml;
        if (
          ((Yt = h || e),
          (ml = g || f),
          Fl(t, l),
          (ml = g),
          (Yt = h),
          Pl(l),
          u & 8192)
        )
          l: for (
            t = l.stateNode,
              t._visibility = e ? t._visibility & -2 : t._visibility | 1,
              e && (a === null || f || Yt || ml || xa(l)),
              a = null,
              t = l;
            ;

          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                f = a = t;
                try {
                  if (((n = f.stateNode), e))
                    (i = n.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none");
                  else {
                    c = f.stateNode;
                    var T = f.memoizedProps.style,
                      m =
                        T != null && T.hasOwnProperty("display")
                          ? T.display
                          : null;
                    c.style.display =
                      m == null || typeof m == "boolean" ? "" : ("" + m).trim();
                  }
                } catch (y) {
                  el(f, f.return, y);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                f = t;
                try {
                  f.stateNode.nodeValue = e ? "" : f.memoizedProps;
                } catch (y) {
                  el(f, f.return, y);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === l) &&
              t.child !== null
            ) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === l) break l;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === l) break l;
              a === t && (a = null), (t = t.return);
            }
            a === t && (a = null),
              (t.sibling.return = t.return),
              (t = t.sibling);
          }
        u & 4 &&
          ((u = l.updateQueue),
          u !== null &&
            ((a = u.retryQueue),
            a !== null && ((u.retryQueue = null), oc(l, a))));
        break;
      case 19:
        Fl(t, l),
          Pl(l),
          u & 4 &&
            ((u = l.updateQueue),
            u !== null && ((l.updateQueue = null), oc(l, u)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Fl(t, l), Pl(l);
    }
  }
  function Pl(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var a, u = l.return; u !== null; ) {
          if (Y0(u)) {
            a = u;
            break;
          }
          u = u.return;
        }
        if (a == null) throw Error(o(160));
        switch (a.tag) {
          case 27:
            var e = a.stateNode,
              n = sc(l);
            sn(l, n, e);
            break;
          case 5:
            var i = a.stateNode;
            a.flags & 32 && (Ca(i, ""), (a.flags &= -33));
            var c = sc(l);
            sn(l, c, i);
            break;
          case 3:
          case 4:
            var f = a.stateNode.containerInfo,
              h = sc(l);
            dc(l, h, f);
            break;
          default:
            throw Error(o(161));
        }
      } catch (g) {
        el(l, l.return, g);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function L0(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        L0(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (l = l.sibling);
      }
  }
  function Pt(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) X0(l, t.alternate, t), (t = t.sibling);
  }
  function xa(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Ft(4, t, t.return), xa(t);
          break;
        case 1:
          Et(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && q0(t, t.return, a),
            xa(t);
          break;
        case 27:
          ce(t.stateNode);
        case 26:
        case 5:
          Et(t, t.return), xa(t);
          break;
        case 22:
          t.memoizedState === null && xa(t);
          break;
        case 30:
          xa(t);
          break;
        default:
          xa(t);
      }
      l = l.sibling;
    }
  }
  function It(l, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var u = t.alternate,
        e = l,
        n = t,
        i = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          It(e, n, a), Fu(4, n);
          break;
        case 1:
          if (
            (It(e, n, a),
            (u = n),
            (e = u.stateNode),
            typeof e.componentDidMount == "function")
          )
            try {
              e.componentDidMount();
            } catch (h) {
              el(u, u.return, h);
            }
          if (((u = n), (e = u.updateQueue), e !== null)) {
            var c = u.stateNode;
            try {
              var f = e.shared.hiddenCallbacks;
              if (f !== null)
                for (e.shared.hiddenCallbacks = null, e = 0; e < f.length; e++)
                  bs(f[e], c);
            } catch (h) {
              el(u, u.return, h);
            }
          }
          a && i & 64 && j0(n), Pu(n, n.return);
          break;
        case 27:
          B0(n);
        case 26:
        case 5:
          It(e, n, a), a && u === null && i & 4 && H0(n), Pu(n, n.return);
          break;
        case 12:
          It(e, n, a);
          break;
        case 13:
          It(e, n, a), a && i & 4 && Z0(e, n);
          break;
        case 22:
          n.memoizedState === null && It(e, n, a), Pu(n, n.return);
          break;
        case 30:
          break;
        default:
          It(e, n, a);
      }
      t = t.sibling;
    }
  }
  function vc(l, t) {
    var a = null;
    l !== null &&
      l.memoizedState !== null &&
      l.memoizedState.cachePool !== null &&
      (a = l.memoizedState.cachePool.pool),
      (l = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (l = t.memoizedState.cachePool.pool),
      l !== a && (l != null && l.refCount++, a != null && Bu(a));
  }
  function hc(l, t) {
    (l = null),
      t.alternate !== null && (l = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== l && (t.refCount++, l != null && Bu(l));
  }
  function Tt(l, t, a, u) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) K0(l, t, a, u), (t = t.sibling);
  }
  function K0(l, t, a, u) {
    var e = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Tt(l, t, a, u), e & 2048 && Fu(9, t);
        break;
      case 1:
        Tt(l, t, a, u);
        break;
      case 3:
        Tt(l, t, a, u),
          e & 2048 &&
            ((l = null),
            t.alternate !== null && (l = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== l && (t.refCount++, l != null && Bu(l)));
        break;
      case 12:
        if (e & 2048) {
          Tt(l, t, a, u), (l = t.stateNode);
          try {
            var n = t.memoizedProps,
              i = n.id,
              c = n.onPostCommit;
            typeof c == "function" &&
              c(
                i,
                t.alternate === null ? "mount" : "update",
                l.passiveEffectDuration,
                -0
              );
          } catch (f) {
            el(t, t.return, f);
          }
        } else Tt(l, t, a, u);
        break;
      case 13:
        Tt(l, t, a, u);
        break;
      case 23:
        break;
      case 22:
        (n = t.stateNode),
          (i = t.alternate),
          t.memoizedState !== null
            ? n._visibility & 2
              ? Tt(l, t, a, u)
              : Iu(l, t)
            : n._visibility & 2
            ? Tt(l, t, a, u)
            : ((n._visibility |= 2),
              iu(l, t, a, u, (t.subtreeFlags & 10256) !== 0)),
          e & 2048 && vc(i, t);
        break;
      case 24:
        Tt(l, t, a, u), e & 2048 && hc(t.alternate, t);
        break;
      default:
        Tt(l, t, a, u);
    }
  }
  function iu(l, t, a, u, e) {
    for (e = e && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var n = l,
        i = t,
        c = a,
        f = u,
        h = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          iu(n, i, c, f, e), Fu(8, i);
          break;
        case 23:
          break;
        case 22:
          var g = i.stateNode;
          i.memoizedState !== null
            ? g._visibility & 2
              ? iu(n, i, c, f, e)
              : Iu(n, i)
            : ((g._visibility |= 2), iu(n, i, c, f, e)),
            e && h & 2048 && vc(i.alternate, i);
          break;
        case 24:
          iu(n, i, c, f, e), e && h & 2048 && hc(i.alternate, i);
          break;
        default:
          iu(n, i, c, f, e);
      }
      t = t.sibling;
    }
  }
  function Iu(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = l,
          u = t,
          e = u.flags;
        switch (u.tag) {
          case 22:
            Iu(a, u), e & 2048 && vc(u.alternate, u);
            break;
          case 24:
            Iu(a, u), e & 2048 && hc(u.alternate, u);
            break;
          default:
            Iu(a, u);
        }
        t = t.sibling;
      }
  }
  var le = 8192;
  function cu(l) {
    if (l.subtreeFlags & le)
      for (l = l.child; l !== null; ) J0(l), (l = l.sibling);
  }
  function J0(l) {
    switch (l.tag) {
      case 26:
        cu(l),
          l.flags & le &&
            l.memoizedState !== null &&
            pv(ht, l.memoizedState, l.memoizedProps);
        break;
      case 5:
        cu(l);
        break;
      case 3:
      case 4:
        var t = ht;
        (ht = An(l.stateNode.containerInfo)), cu(l), (ht = t);
        break;
      case 22:
        l.memoizedState === null &&
          ((t = l.alternate),
          t !== null && t.memoizedState !== null
            ? ((t = le), (le = 16777216), cu(l), (le = t))
            : cu(l));
        break;
      default:
        cu(l);
    }
  }
  function w0(l) {
    var t = l.alternate;
    if (t !== null && ((l = t.child), l !== null)) {
      t.child = null;
      do (t = l.sibling), (l.sibling = null), (l = t);
      while (l !== null);
    }
  }
  function te(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var u = t[a];
          (Ol = u), $0(u, l);
        }
      w0(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) W0(l), (l = l.sibling);
  }
  function W0(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        te(l), l.flags & 2048 && Ft(9, l, l.return);
        break;
      case 3:
        te(l);
        break;
      case 12:
        te(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null &&
        t._visibility & 2 &&
        (l.return === null || l.return.tag !== 13)
          ? ((t._visibility &= -3), dn(l))
          : te(l);
        break;
      default:
        te(l);
    }
  }
  function dn(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var u = t[a];
          (Ol = u), $0(u, l);
        }
      w0(l);
    }
    for (l = l.child; l !== null; ) {
      switch (((t = l), t.tag)) {
        case 0:
        case 11:
        case 15:
          Ft(8, t, t.return), dn(t);
          break;
        case 22:
          (a = t.stateNode),
            a._visibility & 2 && ((a._visibility &= -3), dn(t));
          break;
        default:
          dn(t);
      }
      l = l.sibling;
    }
  }
  function $0(l, t) {
    for (; Ol !== null; ) {
      var a = Ol;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Ft(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var u = a.memoizedState.cachePool.pool;
            u != null && u.refCount++;
          }
          break;
        case 24:
          Bu(a.memoizedState.cache);
      }
      if (((u = a.child), u !== null)) (u.return = a), (Ol = u);
      else
        l: for (a = l; Ol !== null; ) {
          u = Ol;
          var e = u.sibling,
            n = u.return;
          if ((Q0(u), u === a)) {
            Ol = null;
            break l;
          }
          if (e !== null) {
            (e.return = n), (Ol = e);
            break l;
          }
          Ol = n;
        }
    }
  }
  var Co = {
      getCacheForType: function (l) {
        var t = Rl(Sl),
          a = t.data.get(l);
        return a === void 0 && ((a = l()), t.data.set(l, a)), a;
      },
    },
    Zo = typeof WeakMap == "function" ? WeakMap : Map,
    P = 0,
    il = null,
    K = null,
    w = 0,
    I = 0,
    Il = null,
    la = !1,
    fu = !1,
    mc = !1,
    Gt = 0,
    vl = 0,
    ta = 0,
    Ua = 0,
    yc = 0,
    st = 0,
    su = 0,
    ae = null,
    Zl = null,
    gc = !1,
    Sc = 0,
    rn = 1 / 0,
    on = null,
    aa = null,
    _l = 0,
    ua = null,
    du = null,
    ru = 0,
    bc = 0,
    Ec = null,
    k0 = null,
    ue = 0,
    Tc = null;
  function lt() {
    if ((P & 2) !== 0 && w !== 0) return w & -w;
    if (b.T !== null) {
      var l = Pa;
      return l !== 0 ? l : Dc();
    }
    return of();
  }
  function F0() {
    st === 0 && (st = (w & 536870912) === 0 || F ? ff() : 536870912);
    var l = ft.current;
    return l !== null && (l.flags |= 32), st;
  }
  function tt(l, t, a) {
    ((l === il && (I === 2 || I === 9)) || l.cancelPendingCommit !== null) &&
      (ou(l, 0), ea(l, w, st, !1)),
      Tu(l, a),
      ((P & 2) === 0 || l !== il) &&
        (l === il && ((P & 2) === 0 && (Ua |= a), vl === 4 && ea(l, w, st, !1)),
        At(l));
  }
  function P0(l, t, a) {
    if ((P & 6) !== 0) throw Error(o(327));
    var u = (!a && (t & 124) === 0 && (t & l.expiredLanes) === 0) || Eu(l, t),
      e = u ? Ko(l, t) : zc(l, t, !0),
      n = u;
    do {
      if (e === 0) {
        fu && !u && ea(l, t, 0, !1);
        break;
      } else {
        if (((a = l.current.alternate), n && !Vo(a))) {
          (e = zc(l, t, !1)), (n = !1);
          continue;
        }
        if (e === 2) {
          if (((n = t), l.errorRecoveryDisabledLanes & n)) var i = 0;
          else
            (i = l.pendingLanes & -536870913),
              (i = i !== 0 ? i : i & 536870912 ? 536870912 : 0);
          if (i !== 0) {
            t = i;
            l: {
              var c = l;
              e = ae;
              var f = c.current.memoizedState.isDehydrated;
              if ((f && (ou(c, i).flags |= 256), (i = zc(c, i, !1)), i !== 2)) {
                if (mc && !f) {
                  (c.errorRecoveryDisabledLanes |= n), (Ua |= n), (e = 4);
                  break l;
                }
                (n = Zl),
                  (Zl = e),
                  n !== null && (Zl === null ? (Zl = n) : Zl.push.apply(Zl, n));
              }
              e = i;
            }
            if (((n = !1), e !== 2)) continue;
          }
        }
        if (e === 1) {
          ou(l, 0), ea(l, t, 0, !0);
          break;
        }
        l: {
          switch (((u = l), (n = e), n)) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              ea(u, t, st, !la);
              break l;
            case 2:
              Zl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((t & 62914560) === t && ((e = Sc + 300 - gt()), 10 < e)) {
            if ((ea(u, t, st, !la), Ae(u, 0, !0) !== 0)) break l;
            u.timeoutHandle = Md(
              I0.bind(null, u, a, Zl, on, gc, t, st, Ua, su, la, n, 2, -0, 0),
              e
            );
            break l;
          }
          I0(u, a, Zl, on, gc, t, st, Ua, su, la, n, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    At(l);
  }
  function I0(l, t, a, u, e, n, i, c, f, h, g, T, m, y) {
    if (
      ((l.timeoutHandle = -1),
      (T = t.subtreeFlags),
      (T & 8192 || (T & 16785408) === 16785408) &&
        ((de = { stylesheets: null, count: 0, unsuspend: zv }),
        J0(t),
        (T = _v()),
        T !== null))
    ) {
      (l.cancelPendingCommit = T(
        id.bind(null, l, t, n, a, u, e, i, c, f, g, 1, m, y)
      )),
        ea(l, n, i, !h);
      return;
    }
    id(l, t, n, a, u, e, i, c, f);
  }
  function Vo(l) {
    for (var t = l; ; ) {
      var a = t.tag;
      if (
        (a === 0 || a === 11 || a === 15) &&
        t.flags & 16384 &&
        ((a = t.updateQueue), a !== null && ((a = a.stores), a !== null))
      )
        for (var u = 0; u < a.length; u++) {
          var e = a[u],
            n = e.getSnapshot;
          e = e.value;
          try {
            if (!$l(n(), e)) return !1;
          } catch {
            return !1;
          }
        }
      if (((a = t.child), t.subtreeFlags & 16384 && a !== null))
        (a.return = t), (t = a);
      else {
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function ea(l, t, a, u) {
    (t &= ~yc),
      (t &= ~Ua),
      (l.suspendedLanes |= t),
      (l.pingedLanes &= ~t),
      u && (l.warmLanes |= t),
      (u = l.expirationTimes);
    for (var e = t; 0 < e; ) {
      var n = 31 - Wl(e),
        i = 1 << n;
      (u[n] = -1), (e &= ~i);
    }
    a !== 0 && df(l, a, t);
  }
  function vn() {
    return (P & 6) === 0 ? (ee(0), !1) : !0;
  }
  function Ac() {
    if (K !== null) {
      if (I === 0) var l = K.return;
      else (l = K), (Ut = za = null), Xi(l), (eu = null), (Wu = 0), (l = K);
      for (; l !== null; ) R0(l.alternate, l), (l = l.return);
      K = null;
    }
  }
  function ou(l, t) {
    var a = l.timeoutHandle;
    a !== -1 && ((l.timeoutHandle = -1), cv(a)),
      (a = l.cancelPendingCommit),
      a !== null && ((l.cancelPendingCommit = null), a()),
      Ac(),
      (il = l),
      (K = a = Mt(l.current, null)),
      (w = t),
      (I = 0),
      (Il = null),
      (la = !1),
      (fu = Eu(l, t)),
      (mc = !1),
      (su = st = yc = Ua = ta = vl = 0),
      (Zl = ae = null),
      (gc = !1),
      (t & 8) !== 0 && (t |= t & 32);
    var u = l.entangledLanes;
    if (u !== 0)
      for (l = l.entanglements, u &= t; 0 < u; ) {
        var e = 31 - Wl(u),
          n = 1 << e;
        (t |= l[e]), (u &= ~n);
      }
    return (Gt = t), qe(), a;
  }
  function ld(l, t) {
    (Z = null),
      (b.H = Ie),
      t === Xu || t === Ve
        ? ((t = gs()), (I = 3))
        : t === hs
        ? ((t = gs()), (I = 4))
        : (I =
            t === S0
              ? 8
              : t !== null &&
                typeof t == "object" &&
                typeof t.then == "function"
              ? 6
              : 1),
      (Il = t),
      K === null && ((vl = 1), en(l, et(t, l.current)));
  }
  function td() {
    var l = b.H;
    return (b.H = Ie), l === null ? Ie : l;
  }
  function ad() {
    var l = b.A;
    return (b.A = Co), l;
  }
  function Oc() {
    (vl = 4),
      la || ((w & 4194048) !== w && ft.current !== null) || (fu = !0),
      ((ta & 134217727) === 0 && (Ua & 134217727) === 0) ||
        il === null ||
        ea(il, w, st, !1);
  }
  function zc(l, t, a) {
    var u = P;
    P |= 2;
    var e = td(),
      n = ad();
    (il !== l || w !== t) && ((on = null), ou(l, t)), (t = !1);
    var i = vl;
    l: do
      try {
        if (I !== 0 && K !== null) {
          var c = K,
            f = Il;
          switch (I) {
            case 8:
              Ac(), (i = 6);
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              ft.current === null && (t = !0);
              var h = I;
              if (((I = 0), (Il = null), vu(l, c, f, h), a && fu)) {
                i = 0;
                break l;
              }
              break;
            default:
              (h = I), (I = 0), (Il = null), vu(l, c, f, h);
          }
        }
        Lo(), (i = vl);
        break;
      } catch (g) {
        ld(l, g);
      }
    while (!0);
    return (
      t && l.shellSuspendCounter++,
      (Ut = za = null),
      (P = u),
      (b.H = e),
      (b.A = n),
      K === null && ((il = null), (w = 0), qe()),
      i
    );
  }
  function Lo() {
    for (; K !== null; ) ud(K);
  }
  function Ko(l, t) {
    var a = P;
    P |= 2;
    var u = td(),
      e = ad();
    il !== l || w !== t
      ? ((on = null), (rn = gt() + 500), ou(l, t))
      : (fu = Eu(l, t));
    l: do
      try {
        if (I !== 0 && K !== null) {
          t = K;
          var n = Il;
          t: switch (I) {
            case 1:
              (I = 0), (Il = null), vu(l, t, n, 1);
              break;
            case 2:
            case 9:
              if (ms(n)) {
                (I = 0), (Il = null), ed(t);
                break;
              }
              (t = function () {
                (I !== 2 && I !== 9) || il !== l || (I = 7), At(l);
              }),
                n.then(t, t);
              break l;
            case 3:
              I = 7;
              break l;
            case 4:
              I = 5;
              break l;
            case 7:
              ms(n)
                ? ((I = 0), (Il = null), ed(t))
                : ((I = 0), (Il = null), vu(l, t, n, 7));
              break;
            case 5:
              var i = null;
              switch (K.tag) {
                case 26:
                  i = K.memoizedState;
                case 5:
                case 27:
                  var c = K;
                  if (!i || Xd(i)) {
                    (I = 0), (Il = null);
                    var f = c.sibling;
                    if (f !== null) K = f;
                    else {
                      var h = c.return;
                      h !== null ? ((K = h), hn(h)) : (K = null);
                    }
                    break t;
                  }
              }
              (I = 0), (Il = null), vu(l, t, n, 5);
              break;
            case 6:
              (I = 0), (Il = null), vu(l, t, n, 6);
              break;
            case 8:
              Ac(), (vl = 6);
              break l;
            default:
              throw Error(o(462));
          }
        }
        Jo();
        break;
      } catch (g) {
        ld(l, g);
      }
    while (!0);
    return (
      (Ut = za = null),
      (b.H = u),
      (b.A = e),
      (P = a),
      K !== null ? 0 : ((il = null), (w = 0), qe(), vl)
    );
  }
  function Jo() {
    for (; K !== null && !vr(); ) ud(K);
  }
  function ud(l) {
    var t = U0(l.alternate, l, Gt);
    (l.memoizedProps = l.pendingProps), t === null ? hn(l) : (K = t);
  }
  function ed(l) {
    var t = l,
      a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = z0(a, t, t.pendingProps, t.type, void 0, w);
        break;
      case 11:
        t = z0(a, t, t.pendingProps, t.type.render, t.ref, w);
        break;
      case 5:
        Xi(t);
      default:
        R0(a, t), (t = K = ns(t, Gt)), (t = U0(a, t, Gt));
    }
    (l.memoizedProps = l.pendingProps), t === null ? hn(l) : (K = t);
  }
  function vu(l, t, a, u) {
    (Ut = za = null), Xi(t), (eu = null), (Wu = 0);
    var e = t.return;
    try {
      if (Ho(l, e, t, a, w)) {
        (vl = 1), en(l, et(a, l.current)), (K = null);
        return;
      }
    } catch (n) {
      if (e !== null) throw ((K = e), n);
      (vl = 1), en(l, et(a, l.current)), (K = null);
      return;
    }
    t.flags & 32768
      ? (F || u === 1
          ? (l = !0)
          : fu || (w & 536870912) !== 0
          ? (l = !1)
          : ((la = l = !0),
            (u === 2 || u === 9 || u === 3 || u === 6) &&
              ((u = ft.current),
              u !== null && u.tag === 13 && (u.flags |= 16384))),
        nd(t, l))
      : hn(t);
  }
  function hn(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        nd(t, la);
        return;
      }
      l = t.return;
      var a = Bo(t.alternate, t, Gt);
      if (a !== null) {
        K = a;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        K = t;
        return;
      }
      K = t = l;
    } while (t !== null);
    vl === 0 && (vl = 5);
  }
  function nd(l, t) {
    do {
      var a = Go(l.alternate, l);
      if (a !== null) {
        (a.flags &= 32767), (K = a);
        return;
      }
      if (
        ((a = l.return),
        a !== null &&
          ((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
        !t && ((l = l.sibling), l !== null))
      ) {
        K = l;
        return;
      }
      K = l = a;
    } while (l !== null);
    (vl = 6), (K = null);
  }
  function id(l, t, a, u, e, n, i, c, f) {
    l.cancelPendingCommit = null;
    do mn();
    while (_l !== 0);
    if ((P & 6) !== 0) throw Error(o(327));
    if (t !== null) {
      if (t === l.current) throw Error(o(177));
      if (
        ((n = t.lanes | t.childLanes),
        (n |= hi),
        Or(l, a, n, i, c, f),
        l === il && ((K = il = null), (w = 0)),
        (du = t),
        (ua = l),
        (ru = a),
        (bc = n),
        (Ec = e),
        (k0 = u),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((l.callbackNode = null),
            (l.callbackPriority = 0),
            ko(be, function () {
              return rd(), null;
            }))
          : ((l.callbackNode = null), (l.callbackPriority = 0)),
        (u = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || u)
      ) {
        (u = b.T), (b.T = null), (e = _.p), (_.p = 2), (i = P), (P |= 4);
        try {
          Xo(l, t, a);
        } finally {
          (P = i), (_.p = e), (b.T = u);
        }
      }
      (_l = 1), cd(), fd(), sd();
    }
  }
  function cd() {
    if (_l === 1) {
      _l = 0;
      var l = ua,
        t = du,
        a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        (a = b.T), (b.T = null);
        var u = _.p;
        _.p = 2;
        var e = P;
        P |= 4;
        try {
          V0(t, l);
          var n = Yc,
            i = $f(l.containerInfo),
            c = n.focusedElem,
            f = n.selectionRange;
          if (
            i !== c &&
            c &&
            c.ownerDocument &&
            Wf(c.ownerDocument.documentElement, c)
          ) {
            if (f !== null && si(c)) {
              var h = f.start,
                g = f.end;
              if ((g === void 0 && (g = h), "selectionStart" in c))
                (c.selectionStart = h),
                  (c.selectionEnd = Math.min(g, c.value.length));
              else {
                var T = c.ownerDocument || document,
                  m = (T && T.defaultView) || window;
                if (m.getSelection) {
                  var y = m.getSelection(),
                    X = c.textContent.length,
                    Y = Math.min(f.start, X),
                    al = f.end === void 0 ? Y : Math.min(f.end, X);
                  !y.extend && Y > al && ((i = al), (al = Y), (Y = i));
                  var r = wf(c, Y),
                    d = wf(c, al);
                  if (
                    r &&
                    d &&
                    (y.rangeCount !== 1 ||
                      y.anchorNode !== r.node ||
                      y.anchorOffset !== r.offset ||
                      y.focusNode !== d.node ||
                      y.focusOffset !== d.offset)
                  ) {
                    var v = T.createRange();
                    v.setStart(r.node, r.offset),
                      y.removeAllRanges(),
                      Y > al
                        ? (y.addRange(v), y.extend(d.node, d.offset))
                        : (v.setEnd(d.node, d.offset), y.addRange(v));
                  }
                }
              }
            }
            for (T = [], y = c; (y = y.parentNode); )
              y.nodeType === 1 &&
                T.push({ element: y, left: y.scrollLeft, top: y.scrollTop });
            for (
              typeof c.focus == "function" && c.focus(), c = 0;
              c < T.length;
              c++
            ) {
              var E = T[c];
              (E.element.scrollLeft = E.left), (E.element.scrollTop = E.top);
            }
          }
          (Mn = !!Hc), (Yc = Hc = null);
        } finally {
          (P = e), (_.p = u), (b.T = a);
        }
      }
      (l.current = t), (_l = 2);
    }
  }
  function fd() {
    if (_l === 2) {
      _l = 0;
      var l = ua,
        t = du,
        a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        (a = b.T), (b.T = null);
        var u = _.p;
        _.p = 2;
        var e = P;
        P |= 4;
        try {
          X0(l, t.alternate, t);
        } finally {
          (P = e), (_.p = u), (b.T = a);
        }
      }
      _l = 3;
    }
  }
  function sd() {
    if (_l === 4 || _l === 3) {
      (_l = 0), hr();
      var l = ua,
        t = du,
        a = ru,
        u = k0;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (_l = 5)
        : ((_l = 0), (du = ua = null), dd(l, l.pendingLanes));
      var e = l.pendingLanes;
      if (
        (e === 0 && (aa = null),
        Zn(a),
        (t = t.stateNode),
        wl && typeof wl.onCommitFiberRoot == "function")
      )
        try {
          wl.onCommitFiberRoot(bu, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (u !== null) {
        (t = b.T), (e = _.p), (_.p = 2), (b.T = null);
        try {
          for (var n = l.onRecoverableError, i = 0; i < u.length; i++) {
            var c = u[i];
            n(c.value, { componentStack: c.stack });
          }
        } finally {
          (b.T = t), (_.p = e);
        }
      }
      (ru & 3) !== 0 && mn(),
        At(l),
        (e = l.pendingLanes),
        (a & 4194090) !== 0 && (e & 42) !== 0
          ? l === Tc
            ? ue++
            : ((ue = 0), (Tc = l))
          : (ue = 0),
        ee(0);
    }
  }
  function dd(l, t) {
    (l.pooledCacheLanes &= t) === 0 &&
      ((t = l.pooledCache), t != null && ((l.pooledCache = null), Bu(t)));
  }
  function mn(l) {
    return cd(), fd(), sd(), rd();
  }
  function rd() {
    if (_l !== 5) return !1;
    var l = ua,
      t = bc;
    bc = 0;
    var a = Zn(ru),
      u = b.T,
      e = _.p;
    try {
      (_.p = 32 > a ? 32 : a), (b.T = null), (a = Ec), (Ec = null);
      var n = ua,
        i = ru;
      if (((_l = 0), (du = ua = null), (ru = 0), (P & 6) !== 0))
        throw Error(o(331));
      var c = P;
      if (
        ((P |= 4),
        W0(n.current),
        K0(n, n.current, i, a),
        (P = c),
        ee(0, !1),
        wl && typeof wl.onPostCommitFiberRoot == "function")
      )
        try {
          wl.onPostCommitFiberRoot(bu, n);
        } catch {}
      return !0;
    } finally {
      (_.p = e), (b.T = u), dd(l, t);
    }
  }
  function od(l, t, a) {
    (t = et(a, t)),
      (t = Ii(l.stateNode, t, 2)),
      (l = wt(l, t, 2)),
      l !== null && (Tu(l, 2), At(l));
  }
  function el(l, t, a) {
    if (l.tag === 3) od(l, l, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          od(t, l, a);
          break;
        } else if (t.tag === 1) {
          var u = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof u.componentDidCatch == "function" &&
              (aa === null || !aa.has(u)))
          ) {
            (l = et(a, l)),
              (a = y0(2)),
              (u = wt(t, a, 2)),
              u !== null && (g0(a, u, t, l), Tu(u, 2), At(u));
            break;
          }
        }
        t = t.return;
      }
  }
  function pc(l, t, a) {
    var u = l.pingCache;
    if (u === null) {
      u = l.pingCache = new Zo();
      var e = new Set();
      u.set(t, e);
    } else (e = u.get(t)), e === void 0 && ((e = new Set()), u.set(t, e));
    e.has(a) ||
      ((mc = !0), e.add(a), (l = wo.bind(null, l, t, a)), t.then(l, l));
  }
  function wo(l, t, a) {
    var u = l.pingCache;
    u !== null && u.delete(t),
      (l.pingedLanes |= l.suspendedLanes & a),
      (l.warmLanes &= ~a),
      il === l &&
        (w & a) === a &&
        (vl === 4 || (vl === 3 && (w & 62914560) === w && 300 > gt() - Sc)
          ? (P & 2) === 0 && ou(l, 0)
          : (yc |= a),
        su === w && (su = 0)),
      At(l);
  }
  function vd(l, t) {
    t === 0 && (t = sf()), (l = Wa(l, t)), l !== null && (Tu(l, t), At(l));
  }
  function Wo(l) {
    var t = l.memoizedState,
      a = 0;
    t !== null && (a = t.retryLane), vd(l, a);
  }
  function $o(l, t) {
    var a = 0;
    switch (l.tag) {
      case 13:
        var u = l.stateNode,
          e = l.memoizedState;
        e !== null && (a = e.retryLane);
        break;
      case 19:
        u = l.stateNode;
        break;
      case 22:
        u = l.stateNode._retryCache;
        break;
      default:
        throw Error(o(314));
    }
    u !== null && u.delete(t), vd(l, a);
  }
  function ko(l, t) {
    return Gn(l, t);
  }
  var yn = null,
    hu = null,
    _c = !1,
    gn = !1,
    Mc = !1,
    Na = 0;
  function At(l) {
    l !== hu &&
      l.next === null &&
      (hu === null ? (yn = hu = l) : (hu = hu.next = l)),
      (gn = !0),
      _c || ((_c = !0), Po());
  }
  function ee(l, t) {
    if (!Mc && gn) {
      Mc = !0;
      do
        for (var a = !1, u = yn; u !== null; ) {
          if (l !== 0) {
            var e = u.pendingLanes;
            if (e === 0) var n = 0;
            else {
              var i = u.suspendedLanes,
                c = u.pingedLanes;
              (n = (1 << (31 - Wl(42 | l) + 1)) - 1),
                (n &= e & ~(i & ~c)),
                (n = n & 201326741 ? (n & 201326741) | 1 : n ? n | 2 : 0);
            }
            n !== 0 && ((a = !0), gd(u, n));
          } else
            (n = w),
              (n = Ae(
                u,
                u === il ? n : 0,
                u.cancelPendingCommit !== null || u.timeoutHandle !== -1
              )),
              (n & 3) === 0 || Eu(u, n) || ((a = !0), gd(u, n));
          u = u.next;
        }
      while (a);
      Mc = !1;
    }
  }
  function Fo() {
    hd();
  }
  function hd() {
    gn = _c = !1;
    var l = 0;
    Na !== 0 && (iv() && (l = Na), (Na = 0));
    for (var t = gt(), a = null, u = yn; u !== null; ) {
      var e = u.next,
        n = md(u, t);
      n === 0
        ? ((u.next = null),
          a === null ? (yn = e) : (a.next = e),
          e === null && (hu = a))
        : ((a = u), (l !== 0 || (n & 3) !== 0) && (gn = !0)),
        (u = e);
    }
    ee(l);
  }
  function md(l, t) {
    for (
      var a = l.suspendedLanes,
        u = l.pingedLanes,
        e = l.expirationTimes,
        n = l.pendingLanes & -62914561;
      0 < n;

    ) {
      var i = 31 - Wl(n),
        c = 1 << i,
        f = e[i];
      f === -1
        ? ((c & a) === 0 || (c & u) !== 0) && (e[i] = Ar(c, t))
        : f <= t && (l.expiredLanes |= c),
        (n &= ~c);
    }
    if (
      ((t = il),
      (a = w),
      (a = Ae(
        l,
        l === t ? a : 0,
        l.cancelPendingCommit !== null || l.timeoutHandle !== -1
      )),
      (u = l.callbackNode),
      a === 0 ||
        (l === t && (I === 2 || I === 9)) ||
        l.cancelPendingCommit !== null)
    )
      return (
        u !== null && u !== null && Xn(u),
        (l.callbackNode = null),
        (l.callbackPriority = 0)
      );
    if ((a & 3) === 0 || Eu(l, a)) {
      if (((t = a & -a), t === l.callbackPriority)) return t;
      switch ((u !== null && Xn(u), Zn(a))) {
        case 2:
        case 8:
          a = nf;
          break;
        case 32:
          a = be;
          break;
        case 268435456:
          a = cf;
          break;
        default:
          a = be;
      }
      return (
        (u = yd.bind(null, l)),
        (a = Gn(a, u)),
        (l.callbackPriority = t),
        (l.callbackNode = a),
        t
      );
    }
    return (
      u !== null && u !== null && Xn(u),
      (l.callbackPriority = 2),
      (l.callbackNode = null),
      2
    );
  }
  function yd(l, t) {
    if (_l !== 0 && _l !== 5)
      return (l.callbackNode = null), (l.callbackPriority = 0), null;
    var a = l.callbackNode;
    if (mn() && l.callbackNode !== a) return null;
    var u = w;
    return (
      (u = Ae(
        l,
        l === il ? u : 0,
        l.cancelPendingCommit !== null || l.timeoutHandle !== -1
      )),
      u === 0
        ? null
        : (P0(l, u, t),
          md(l, gt()),
          l.callbackNode != null && l.callbackNode === a
            ? yd.bind(null, l)
            : null)
    );
  }
  function gd(l, t) {
    if (mn()) return null;
    P0(l, t, !0);
  }
  function Po() {
    fv(function () {
      (P & 6) !== 0 ? Gn(ef, Fo) : hd();
    });
  }
  function Dc() {
    return Na === 0 && (Na = ff()), Na;
  }
  function Sd(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean"
      ? null
      : typeof l == "function"
      ? l
      : Me("" + l);
  }
  function bd(l, t) {
    var a = t.ownerDocument.createElement("input");
    return (
      (a.name = t.name),
      (a.value = t.value),
      l.id && a.setAttribute("form", l.id),
      t.parentNode.insertBefore(a, t),
      (l = new FormData(l)),
      a.parentNode.removeChild(a),
      l
    );
  }
  function Io(l, t, a, u, e) {
    if (t === "submit" && a && a.stateNode === e) {
      var n = Sd((e[Gl] || null).action),
        i = u.submitter;
      i &&
        ((t = (t = i[Gl] || null)
          ? Sd(t.formAction)
          : i.getAttribute("formAction")),
        t !== null && ((n = t), (i = null)));
      var c = new Ne("action", "action", null, u, e);
      l.push({
        event: c,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (u.defaultPrevented) {
                if (Na !== 0) {
                  var f = i ? bd(e, i) : new FormData(e);
                  Wi(
                    a,
                    { pending: !0, data: f, method: e.method, action: n },
                    null,
                    f
                  );
                }
              } else
                typeof n == "function" &&
                  (c.preventDefault(),
                  (f = i ? bd(e, i) : new FormData(e)),
                  Wi(
                    a,
                    { pending: !0, data: f, method: e.method, action: n },
                    n,
                    f
                  ));
            },
            currentTarget: e,
          },
        ],
      });
    }
  }
  for (var xc = 0; xc < vi.length; xc++) {
    var Uc = vi[xc],
      lv = Uc.toLowerCase(),
      tv = Uc[0].toUpperCase() + Uc.slice(1);
    vt(lv, "on" + tv);
  }
  vt(Pf, "onAnimationEnd"),
    vt(If, "onAnimationIteration"),
    vt(ls, "onAnimationStart"),
    vt("dblclick", "onDoubleClick"),
    vt("focusin", "onFocus"),
    vt("focusout", "onBlur"),
    vt(So, "onTransitionRun"),
    vt(bo, "onTransitionStart"),
    vt(Eo, "onTransitionCancel"),
    vt(ts, "onTransitionEnd"),
    Ga("onMouseEnter", ["mouseout", "mouseover"]),
    Ga("onMouseLeave", ["mouseout", "mouseover"]),
    Ga("onPointerEnter", ["pointerout", "pointerover"]),
    Ga("onPointerLeave", ["pointerout", "pointerover"]),
    ma(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    ma(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    ma("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    ma(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    ma(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    ma(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var ne =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    av = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(ne)
    );
  function Ed(l, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < l.length; a++) {
      var u = l[a],
        e = u.event;
      u = u.listeners;
      l: {
        var n = void 0;
        if (t)
          for (var i = u.length - 1; 0 <= i; i--) {
            var c = u[i],
              f = c.instance,
              h = c.currentTarget;
            if (((c = c.listener), f !== n && e.isPropagationStopped()))
              break l;
            (n = c), (e.currentTarget = h);
            try {
              n(e);
            } catch (g) {
              un(g);
            }
            (e.currentTarget = null), (n = f);
          }
        else
          for (i = 0; i < u.length; i++) {
            if (
              ((c = u[i]),
              (f = c.instance),
              (h = c.currentTarget),
              (c = c.listener),
              f !== n && e.isPropagationStopped())
            )
              break l;
            (n = c), (e.currentTarget = h);
            try {
              n(e);
            } catch (g) {
              un(g);
            }
            (e.currentTarget = null), (n = f);
          }
      }
    }
  }
  function J(l, t) {
    var a = t[Vn];
    a === void 0 && (a = t[Vn] = new Set());
    var u = l + "__bubble";
    a.has(u) || (Td(t, l, 2, !1), a.add(u));
  }
  function Nc(l, t, a) {
    var u = 0;
    t && (u |= 4), Td(a, l, u, t);
  }
  var Sn = "_reactListening" + Math.random().toString(36).slice(2);
  function Rc(l) {
    if (!l[Sn]) {
      (l[Sn] = !0),
        hf.forEach(function (a) {
          a !== "selectionchange" && (av.has(a) || Nc(a, !1, l), Nc(a, !0, l));
        });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[Sn] || ((t[Sn] = !0), Nc("selectionchange", !1, t));
    }
  }
  function Td(l, t, a, u) {
    switch (Kd(t)) {
      case 2:
        var e = xv;
        break;
      case 8:
        e = Uv;
        break;
      default:
        e = Jc;
    }
    (a = e.bind(null, t, a, l)),
      (e = void 0),
      !li ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (e = !0),
      u
        ? e !== void 0
          ? l.addEventListener(t, a, { capture: !0, passive: e })
          : l.addEventListener(t, a, !0)
        : e !== void 0
        ? l.addEventListener(t, a, { passive: e })
        : l.addEventListener(t, a, !1);
  }
  function jc(l, t, a, u, e) {
    var n = u;
    if ((t & 1) === 0 && (t & 2) === 0 && u !== null)
      l: for (;;) {
        if (u === null) return;
        var i = u.tag;
        if (i === 3 || i === 4) {
          var c = u.stateNode.containerInfo;
          if (c === e) break;
          if (i === 4)
            for (i = u.return; i !== null; ) {
              var f = i.tag;
              if ((f === 3 || f === 4) && i.stateNode.containerInfo === e)
                return;
              i = i.return;
            }
          for (; c !== null; ) {
            if (((i = Ha(c)), i === null)) return;
            if (((f = i.tag), f === 5 || f === 6 || f === 26 || f === 27)) {
              u = n = i;
              continue l;
            }
            c = c.parentNode;
          }
        }
        u = u.return;
      }
    Df(function () {
      var h = n,
        g = Pn(a),
        T = [];
      l: {
        var m = as.get(l);
        if (m !== void 0) {
          var y = Ne,
            X = l;
          switch (l) {
            case "keypress":
              if (xe(a) === 0) break l;
            case "keydown":
            case "keyup":
              y = $r;
              break;
            case "focusin":
              (X = "focus"), (y = ei);
              break;
            case "focusout":
              (X = "blur"), (y = ei);
              break;
            case "beforeblur":
            case "afterblur":
              y = ei;
              break;
            case "click":
              if (a.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              y = Nf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              y = Br;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              y = Pr;
              break;
            case Pf:
            case If:
            case ls:
              y = Qr;
              break;
            case ts:
              y = lo;
              break;
            case "scroll":
            case "scrollend":
              y = Hr;
              break;
            case "wheel":
              y = ao;
              break;
            case "copy":
            case "cut":
            case "paste":
              y = Zr;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              y = jf;
              break;
            case "toggle":
            case "beforetoggle":
              y = eo;
          }
          var Y = (t & 4) !== 0,
            al = !Y && (l === "scroll" || l === "scrollend"),
            r = Y ? (m !== null ? m + "Capture" : null) : m;
          Y = [];
          for (var d = h, v; d !== null; ) {
            var E = d;
            if (
              ((v = E.stateNode),
              (E = E.tag),
              (E !== 5 && E !== 26 && E !== 27) ||
                v === null ||
                r === null ||
                ((E = zu(d, r)), E != null && Y.push(ie(d, E, v))),
              al)
            )
              break;
            d = d.return;
          }
          0 < Y.length &&
            ((m = new y(m, X, null, a, g)), T.push({ event: m, listeners: Y }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (
            ((m = l === "mouseover" || l === "pointerover"),
            (y = l === "mouseout" || l === "pointerout"),
            m &&
              a !== Fn &&
              (X = a.relatedTarget || a.fromElement) &&
              (Ha(X) || X[qa]))
          )
            break l;
          if (
            (y || m) &&
            ((m =
              g.window === g
                ? g
                : (m = g.ownerDocument)
                ? m.defaultView || m.parentWindow
                : window),
            y
              ? ((X = a.relatedTarget || a.toElement),
                (y = h),
                (X = X ? Ha(X) : null),
                X !== null &&
                  ((al = L(X)),
                  (Y = X.tag),
                  X !== al || (Y !== 5 && Y !== 27 && Y !== 6)) &&
                  (X = null))
              : ((y = null), (X = h)),
            y !== X)
          ) {
            if (
              ((Y = Nf),
              (E = "onMouseLeave"),
              (r = "onMouseEnter"),
              (d = "mouse"),
              (l === "pointerout" || l === "pointerover") &&
                ((Y = jf),
                (E = "onPointerLeave"),
                (r = "onPointerEnter"),
                (d = "pointer")),
              (al = y == null ? m : Ou(y)),
              (v = X == null ? m : Ou(X)),
              (m = new Y(E, d + "leave", y, a, g)),
              (m.target = al),
              (m.relatedTarget = v),
              (E = null),
              Ha(g) === h &&
                ((Y = new Y(r, d + "enter", X, a, g)),
                (Y.target = v),
                (Y.relatedTarget = al),
                (E = Y)),
              (al = E),
              y && X)
            )
              t: {
                for (Y = y, r = X, d = 0, v = Y; v; v = mu(v)) d++;
                for (v = 0, E = r; E; E = mu(E)) v++;
                for (; 0 < d - v; ) (Y = mu(Y)), d--;
                for (; 0 < v - d; ) (r = mu(r)), v--;
                for (; d--; ) {
                  if (Y === r || (r !== null && Y === r.alternate)) break t;
                  (Y = mu(Y)), (r = mu(r));
                }
                Y = null;
              }
            else Y = null;
            y !== null && Ad(T, m, y, Y, !1),
              X !== null && al !== null && Ad(T, al, X, Y, !0);
          }
        }
        l: {
          if (
            ((m = h ? Ou(h) : window),
            (y = m.nodeName && m.nodeName.toLowerCase()),
            y === "select" || (y === "input" && m.type === "file"))
          )
            var x = Cf;
          else if (Xf(m))
            if (Zf) x = mo;
            else {
              x = vo;
              var V = oo;
            }
          else
            (y = m.nodeName),
              !y ||
              y.toLowerCase() !== "input" ||
              (m.type !== "checkbox" && m.type !== "radio")
                ? h && kn(h.elementType) && (x = Cf)
                : (x = ho);
          if (x && (x = x(l, h))) {
            Qf(T, x, a, g);
            break l;
          }
          V && V(l, m, h),
            l === "focusout" &&
              h &&
              m.type === "number" &&
              h.memoizedProps.value != null &&
              $n(m, "number", m.value);
        }
        switch (((V = h ? Ou(h) : window), l)) {
          case "focusin":
            (Xf(V) || V.contentEditable === "true") &&
              ((Ka = V), (di = h), (Ru = null));
            break;
          case "focusout":
            Ru = di = Ka = null;
            break;
          case "mousedown":
            ri = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (ri = !1), kf(T, a, g);
            break;
          case "selectionchange":
            if (go) break;
          case "keydown":
          case "keyup":
            kf(T, a, g);
        }
        var R;
        if (ii)
          l: {
            switch (l) {
              case "compositionstart":
                var B = "onCompositionStart";
                break l;
              case "compositionend":
                B = "onCompositionEnd";
                break l;
              case "compositionupdate":
                B = "onCompositionUpdate";
                break l;
            }
            B = void 0;
          }
        else
          La
            ? Bf(l, a) && (B = "onCompositionEnd")
            : l === "keydown" &&
              a.keyCode === 229 &&
              (B = "onCompositionStart");
        B &&
          (qf &&
            a.locale !== "ko" &&
            (La || B !== "onCompositionStart"
              ? B === "onCompositionEnd" && La && (R = xf())
              : ((Vt = g),
                (ti = "value" in Vt ? Vt.value : Vt.textContent),
                (La = !0))),
          (V = bn(h, B)),
          0 < V.length &&
            ((B = new Rf(B, l, null, a, g)),
            T.push({ event: B, listeners: V }),
            R ? (B.data = R) : ((R = Gf(a)), R !== null && (B.data = R)))),
          (R = io ? co(l, a) : fo(l, a)) &&
            ((B = bn(h, "onBeforeInput")),
            0 < B.length &&
              ((V = new Rf("onBeforeInput", "beforeinput", null, a, g)),
              T.push({ event: V, listeners: B }),
              (V.data = R))),
          Io(T, l, h, a, g);
      }
      Ed(T, t);
    });
  }
  function ie(l, t, a) {
    return { instance: l, listener: t, currentTarget: a };
  }
  function bn(l, t) {
    for (var a = t + "Capture", u = []; l !== null; ) {
      var e = l,
        n = e.stateNode;
      if (
        ((e = e.tag),
        (e !== 5 && e !== 26 && e !== 27) ||
          n === null ||
          ((e = zu(l, a)),
          e != null && u.unshift(ie(l, e, n)),
          (e = zu(l, t)),
          e != null && u.push(ie(l, e, n))),
        l.tag === 3)
      )
        return u;
      l = l.return;
    }
    return [];
  }
  function mu(l) {
    if (l === null) return null;
    do l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function Ad(l, t, a, u, e) {
    for (var n = t._reactName, i = []; a !== null && a !== u; ) {
      var c = a,
        f = c.alternate,
        h = c.stateNode;
      if (((c = c.tag), f !== null && f === u)) break;
      (c !== 5 && c !== 26 && c !== 27) ||
        h === null ||
        ((f = h),
        e
          ? ((h = zu(a, n)), h != null && i.unshift(ie(a, h, f)))
          : e || ((h = zu(a, n)), h != null && i.push(ie(a, h, f)))),
        (a = a.return);
    }
    i.length !== 0 && l.push({ event: t, listeners: i });
  }
  var uv = /\r\n?/g,
    ev = /\u0000|\uFFFD/g;
  function Od(l) {
    return (typeof l == "string" ? l : "" + l)
      .replace(
        uv,
        `
`
      )
      .replace(ev, "");
  }
  function zd(l, t) {
    return (t = Od(t)), Od(l) === t;
  }
  function En() {}
  function tl(l, t, a, u, e, n) {
    switch (a) {
      case "children":
        typeof u == "string"
          ? t === "body" || (t === "textarea" && u === "") || Ca(l, u)
          : (typeof u == "number" || typeof u == "bigint") &&
            t !== "body" &&
            Ca(l, "" + u);
        break;
      case "className":
        ze(l, "class", u);
        break;
      case "tabIndex":
        ze(l, "tabindex", u);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        ze(l, a, u);
        break;
      case "style":
        _f(l, u, n);
        break;
      case "data":
        if (t !== "object") {
          ze(l, "data", u);
          break;
        }
      case "src":
      case "href":
        if (u === "" && (t !== "a" || a !== "href")) {
          l.removeAttribute(a);
          break;
        }
        if (
          u == null ||
          typeof u == "function" ||
          typeof u == "symbol" ||
          typeof u == "boolean"
        ) {
          l.removeAttribute(a);
          break;
        }
        (u = Me("" + u)), l.setAttribute(a, u);
        break;
      case "action":
      case "formAction":
        if (typeof u == "function") {
          l.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof n == "function" &&
            (a === "formAction"
              ? (t !== "input" && tl(l, t, "name", e.name, e, null),
                tl(l, t, "formEncType", e.formEncType, e, null),
                tl(l, t, "formMethod", e.formMethod, e, null),
                tl(l, t, "formTarget", e.formTarget, e, null))
              : (tl(l, t, "encType", e.encType, e, null),
                tl(l, t, "method", e.method, e, null),
                tl(l, t, "target", e.target, e, null)));
        if (u == null || typeof u == "symbol" || typeof u == "boolean") {
          l.removeAttribute(a);
          break;
        }
        (u = Me("" + u)), l.setAttribute(a, u);
        break;
      case "onClick":
        u != null && (l.onclick = En);
        break;
      case "onScroll":
        u != null && J("scroll", l);
        break;
      case "onScrollEnd":
        u != null && J("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u)) throw Error(o(61));
          if (((a = u.__html), a != null)) {
            if (e.children != null) throw Error(o(60));
            l.innerHTML = a;
          }
        }
        break;
      case "multiple":
        l.multiple = u && typeof u != "function" && typeof u != "symbol";
        break;
      case "muted":
        l.muted = u && typeof u != "function" && typeof u != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          u == null ||
          typeof u == "function" ||
          typeof u == "boolean" ||
          typeof u == "symbol"
        ) {
          l.removeAttribute("xlink:href");
          break;
        }
        (a = Me("" + u)),
          l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        u != null && typeof u != "function" && typeof u != "symbol"
          ? l.setAttribute(a, "" + u)
          : l.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        u && typeof u != "function" && typeof u != "symbol"
          ? l.setAttribute(a, "")
          : l.removeAttribute(a);
        break;
      case "capture":
      case "download":
        u === !0
          ? l.setAttribute(a, "")
          : u !== !1 &&
            u != null &&
            typeof u != "function" &&
            typeof u != "symbol"
          ? l.setAttribute(a, u)
          : l.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        u != null &&
        typeof u != "function" &&
        typeof u != "symbol" &&
        !isNaN(u) &&
        1 <= u
          ? l.setAttribute(a, u)
          : l.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        u == null || typeof u == "function" || typeof u == "symbol" || isNaN(u)
          ? l.removeAttribute(a)
          : l.setAttribute(a, u);
        break;
      case "popover":
        J("beforetoggle", l), J("toggle", l), Oe(l, "popover", u);
        break;
      case "xlinkActuate":
        pt(l, "http://www.w3.org/1999/xlink", "xlink:actuate", u);
        break;
      case "xlinkArcrole":
        pt(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", u);
        break;
      case "xlinkRole":
        pt(l, "http://www.w3.org/1999/xlink", "xlink:role", u);
        break;
      case "xlinkShow":
        pt(l, "http://www.w3.org/1999/xlink", "xlink:show", u);
        break;
      case "xlinkTitle":
        pt(l, "http://www.w3.org/1999/xlink", "xlink:title", u);
        break;
      case "xlinkType":
        pt(l, "http://www.w3.org/1999/xlink", "xlink:type", u);
        break;
      case "xmlBase":
        pt(l, "http://www.w3.org/XML/1998/namespace", "xml:base", u);
        break;
      case "xmlLang":
        pt(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", u);
        break;
      case "xmlSpace":
        pt(l, "http://www.w3.org/XML/1998/namespace", "xml:space", u);
        break;
      case "is":
        Oe(l, "is", u);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) ||
          (a[0] !== "o" && a[0] !== "O") ||
          (a[1] !== "n" && a[1] !== "N")) &&
          ((a = jr.get(a) || a), Oe(l, a, u));
    }
  }
  function qc(l, t, a, u, e, n) {
    switch (a) {
      case "style":
        _f(l, u, n);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u)) throw Error(o(61));
          if (((a = u.__html), a != null)) {
            if (e.children != null) throw Error(o(60));
            l.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof u == "string"
          ? Ca(l, u)
          : (typeof u == "number" || typeof u == "bigint") && Ca(l, "" + u);
        break;
      case "onScroll":
        u != null && J("scroll", l);
        break;
      case "onScrollEnd":
        u != null && J("scrollend", l);
        break;
      case "onClick":
        u != null && (l.onclick = En);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!mf.hasOwnProperty(a))
          l: {
            if (
              a[0] === "o" &&
              a[1] === "n" &&
              ((e = a.endsWith("Capture")),
              (t = a.slice(2, e ? a.length - 7 : void 0)),
              (n = l[Gl] || null),
              (n = n != null ? n[a] : null),
              typeof n == "function" && l.removeEventListener(t, n, e),
              typeof u == "function")
            ) {
              typeof n != "function" &&
                n !== null &&
                (a in l
                  ? (l[a] = null)
                  : l.hasAttribute(a) && l.removeAttribute(a)),
                l.addEventListener(t, u, e);
              break l;
            }
            a in l
              ? (l[a] = u)
              : u === !0
              ? l.setAttribute(a, "")
              : Oe(l, a, u);
          }
    }
  }
  function Ml(l, t, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        J("error", l), J("load", l);
        var u = !1,
          e = !1,
          n;
        for (n in a)
          if (a.hasOwnProperty(n)) {
            var i = a[n];
            if (i != null)
              switch (n) {
                case "src":
                  u = !0;
                  break;
                case "srcSet":
                  e = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(137, t));
                default:
                  tl(l, t, n, i, a, null);
              }
          }
        e && tl(l, t, "srcSet", a.srcSet, a, null),
          u && tl(l, t, "src", a.src, a, null);
        return;
      case "input":
        J("invalid", l);
        var c = (n = i = e = null),
          f = null,
          h = null;
        for (u in a)
          if (a.hasOwnProperty(u)) {
            var g = a[u];
            if (g != null)
              switch (u) {
                case "name":
                  e = g;
                  break;
                case "type":
                  i = g;
                  break;
                case "checked":
                  f = g;
                  break;
                case "defaultChecked":
                  h = g;
                  break;
                case "value":
                  n = g;
                  break;
                case "defaultValue":
                  c = g;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (g != null) throw Error(o(137, t));
                  break;
                default:
                  tl(l, t, u, g, a, null);
              }
          }
        Af(l, n, c, f, h, i, e, !1), pe(l);
        return;
      case "select":
        J("invalid", l), (u = i = n = null);
        for (e in a)
          if (a.hasOwnProperty(e) && ((c = a[e]), c != null))
            switch (e) {
              case "value":
                n = c;
                break;
              case "defaultValue":
                i = c;
                break;
              case "multiple":
                u = c;
              default:
                tl(l, t, e, c, a, null);
            }
        (t = n),
          (a = i),
          (l.multiple = !!u),
          t != null ? Qa(l, !!u, t, !1) : a != null && Qa(l, !!u, a, !0);
        return;
      case "textarea":
        J("invalid", l), (n = e = u = null);
        for (i in a)
          if (a.hasOwnProperty(i) && ((c = a[i]), c != null))
            switch (i) {
              case "value":
                u = c;
                break;
              case "defaultValue":
                e = c;
                break;
              case "children":
                n = c;
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(o(91));
                break;
              default:
                tl(l, t, i, c, a, null);
            }
        zf(l, u, e, n), pe(l);
        return;
      case "option":
        for (f in a)
          if (a.hasOwnProperty(f) && ((u = a[f]), u != null))
            switch (f) {
              case "selected":
                l.selected =
                  u && typeof u != "function" && typeof u != "symbol";
                break;
              default:
                tl(l, t, f, u, a, null);
            }
        return;
      case "dialog":
        J("beforetoggle", l), J("toggle", l), J("cancel", l), J("close", l);
        break;
      case "iframe":
      case "object":
        J("load", l);
        break;
      case "video":
      case "audio":
        for (u = 0; u < ne.length; u++) J(ne[u], l);
        break;
      case "image":
        J("error", l), J("load", l);
        break;
      case "details":
        J("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        J("error", l), J("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (h in a)
          if (a.hasOwnProperty(h) && ((u = a[h]), u != null))
            switch (h) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, t));
              default:
                tl(l, t, h, u, a, null);
            }
        return;
      default:
        if (kn(t)) {
          for (g in a)
            a.hasOwnProperty(g) &&
              ((u = a[g]), u !== void 0 && qc(l, t, g, u, a, void 0));
          return;
        }
    }
    for (c in a)
      a.hasOwnProperty(c) && ((u = a[c]), u != null && tl(l, t, c, u, a, null));
  }
  function nv(l, t, a, u) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var e = null,
          n = null,
          i = null,
          c = null,
          f = null,
          h = null,
          g = null;
        for (y in a) {
          var T = a[y];
          if (a.hasOwnProperty(y) && T != null)
            switch (y) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                f = T;
              default:
                u.hasOwnProperty(y) || tl(l, t, y, null, u, T);
            }
        }
        for (var m in u) {
          var y = u[m];
          if (((T = a[m]), u.hasOwnProperty(m) && (y != null || T != null)))
            switch (m) {
              case "type":
                n = y;
                break;
              case "name":
                e = y;
                break;
              case "checked":
                h = y;
                break;
              case "defaultChecked":
                g = y;
                break;
              case "value":
                i = y;
                break;
              case "defaultValue":
                c = y;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (y != null) throw Error(o(137, t));
                break;
              default:
                y !== T && tl(l, t, m, y, u, T);
            }
        }
        Wn(l, i, c, f, h, g, n, e);
        return;
      case "select":
        y = i = c = m = null;
        for (n in a)
          if (((f = a[n]), a.hasOwnProperty(n) && f != null))
            switch (n) {
              case "value":
                break;
              case "multiple":
                y = f;
              default:
                u.hasOwnProperty(n) || tl(l, t, n, null, u, f);
            }
        for (e in u)
          if (
            ((n = u[e]),
            (f = a[e]),
            u.hasOwnProperty(e) && (n != null || f != null))
          )
            switch (e) {
              case "value":
                m = n;
                break;
              case "defaultValue":
                c = n;
                break;
              case "multiple":
                i = n;
              default:
                n !== f && tl(l, t, e, n, u, f);
            }
        (t = c),
          (a = i),
          (u = y),
          m != null
            ? Qa(l, !!a, m, !1)
            : !!u != !!a &&
              (t != null ? Qa(l, !!a, t, !0) : Qa(l, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        y = m = null;
        for (c in a)
          if (
            ((e = a[c]),
            a.hasOwnProperty(c) && e != null && !u.hasOwnProperty(c))
          )
            switch (c) {
              case "value":
                break;
              case "children":
                break;
              default:
                tl(l, t, c, null, u, e);
            }
        for (i in u)
          if (
            ((e = u[i]),
            (n = a[i]),
            u.hasOwnProperty(i) && (e != null || n != null))
          )
            switch (i) {
              case "value":
                m = e;
                break;
              case "defaultValue":
                y = e;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (e != null) throw Error(o(91));
                break;
              default:
                e !== n && tl(l, t, i, e, u, n);
            }
        Of(l, m, y);
        return;
      case "option":
        for (var X in a)
          if (
            ((m = a[X]),
            a.hasOwnProperty(X) && m != null && !u.hasOwnProperty(X))
          )
            switch (X) {
              case "selected":
                l.selected = !1;
                break;
              default:
                tl(l, t, X, null, u, m);
            }
        for (f in u)
          if (
            ((m = u[f]),
            (y = a[f]),
            u.hasOwnProperty(f) && m !== y && (m != null || y != null))
          )
            switch (f) {
              case "selected":
                l.selected =
                  m && typeof m != "function" && typeof m != "symbol";
                break;
              default:
                tl(l, t, f, m, u, y);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var Y in a)
          (m = a[Y]),
            a.hasOwnProperty(Y) &&
              m != null &&
              !u.hasOwnProperty(Y) &&
              tl(l, t, Y, null, u, m);
        for (h in u)
          if (
            ((m = u[h]),
            (y = a[h]),
            u.hasOwnProperty(h) && m !== y && (m != null || y != null))
          )
            switch (h) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (m != null) throw Error(o(137, t));
                break;
              default:
                tl(l, t, h, m, u, y);
            }
        return;
      default:
        if (kn(t)) {
          for (var al in a)
            (m = a[al]),
              a.hasOwnProperty(al) &&
                m !== void 0 &&
                !u.hasOwnProperty(al) &&
                qc(l, t, al, void 0, u, m);
          for (g in u)
            (m = u[g]),
              (y = a[g]),
              !u.hasOwnProperty(g) ||
                m === y ||
                (m === void 0 && y === void 0) ||
                qc(l, t, g, m, u, y);
          return;
        }
    }
    for (var r in a)
      (m = a[r]),
        a.hasOwnProperty(r) &&
          m != null &&
          !u.hasOwnProperty(r) &&
          tl(l, t, r, null, u, m);
    for (T in u)
      (m = u[T]),
        (y = a[T]),
        !u.hasOwnProperty(T) ||
          m === y ||
          (m == null && y == null) ||
          tl(l, t, T, m, u, y);
  }
  var Hc = null,
    Yc = null;
  function Tn(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function pd(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function _d(l, t) {
    if (l === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && t === "foreignObject" ? 0 : l;
  }
  function Bc(l, t) {
    return (
      l === "textarea" ||
      l === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Gc = null;
  function iv() {
    var l = window.event;
    return l && l.type === "popstate"
      ? l === Gc
        ? !1
        : ((Gc = l), !0)
      : ((Gc = null), !1);
  }
  var Md = typeof setTimeout == "function" ? setTimeout : void 0,
    cv = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Dd = typeof Promise == "function" ? Promise : void 0,
    fv =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Dd < "u"
        ? function (l) {
            return Dd.resolve(null).then(l).catch(sv);
          }
        : Md;
  function sv(l) {
    setTimeout(function () {
      throw l;
    });
  }
  function na(l) {
    return l === "head";
  }
  function xd(l, t) {
    var a = t,
      u = 0,
      e = 0;
    do {
      var n = a.nextSibling;
      if ((l.removeChild(a), n && n.nodeType === 8))
        if (((a = n.data), a === "/$")) {
          if (0 < u && 8 > u) {
            a = u;
            var i = l.ownerDocument;
            if ((a & 1 && ce(i.documentElement), a & 2 && ce(i.body), a & 4))
              for (a = i.head, ce(a), i = a.firstChild; i; ) {
                var c = i.nextSibling,
                  f = i.nodeName;
                i[Au] ||
                  f === "SCRIPT" ||
                  f === "STYLE" ||
                  (f === "LINK" && i.rel.toLowerCase() === "stylesheet") ||
                  a.removeChild(i),
                  (i = c);
              }
          }
          if (e === 0) {
            l.removeChild(n), me(t);
            return;
          }
          e--;
        } else
          a === "$" || a === "$?" || a === "$!"
            ? e++
            : (u = a.charCodeAt(0) - 48);
      else u = 0;
      a = n;
    } while (a);
    me(t);
  }
  function Xc(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (((t = t.nextSibling), a.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Xc(a), Ln(a);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(a);
    }
  }
  function dv(l, t, a, u) {
    for (; l.nodeType === 1; ) {
      var e = a;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!u && (l.nodeName !== "INPUT" || l.type !== "hidden")) break;
      } else if (u) {
        if (!l[Au])
          switch (t) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (
                ((n = l.getAttribute("rel")),
                n === "stylesheet" && l.hasAttribute("data-precedence"))
              )
                break;
              if (
                n !== e.rel ||
                l.getAttribute("href") !==
                  (e.href == null || e.href === "" ? null : e.href) ||
                l.getAttribute("crossorigin") !==
                  (e.crossOrigin == null ? null : e.crossOrigin) ||
                l.getAttribute("title") !== (e.title == null ? null : e.title)
              )
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (
                ((n = l.getAttribute("src")),
                (n !== (e.src == null ? null : e.src) ||
                  l.getAttribute("type") !== (e.type == null ? null : e.type) ||
                  l.getAttribute("crossorigin") !==
                    (e.crossOrigin == null ? null : e.crossOrigin)) &&
                  n &&
                  l.hasAttribute("async") &&
                  !l.hasAttribute("itemprop"))
              )
                break;
              return l;
            default:
              return l;
          }
      } else if (t === "input" && l.type === "hidden") {
        var n = e.name == null ? null : "" + e.name;
        if (e.type === "hidden" && l.getAttribute("name") === n) return l;
      } else return l;
      if (((l = mt(l.nextSibling)), l === null)) break;
    }
    return null;
  }
  function rv(l, t, a) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if (
        ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") &&
          !a) ||
        ((l = mt(l.nextSibling)), l === null)
      )
        return null;
    return l;
  }
  function Qc(l) {
    return (
      l.data === "$!" ||
      (l.data === "$?" && l.ownerDocument.readyState === "complete")
    );
  }
  function ov(l, t) {
    var a = l.ownerDocument;
    if (l.data !== "$?" || a.readyState === "complete") t();
    else {
      var u = function () {
        t(), a.removeEventListener("DOMContentLoaded", u);
      };
      a.addEventListener("DOMContentLoaded", u), (l._reactRetry = u);
    }
  }
  function mt(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = l.data),
          t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F")
        )
          break;
        if (t === "/$") return null;
      }
    }
    return l;
  }
  var Cc = null;
  function Ud(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var a = l.data;
        if (a === "$" || a === "$!" || a === "$?") {
          if (t === 0) return l;
          t--;
        } else a === "/$" && t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function Nd(l, t, a) {
    switch (((t = Tn(a)), l)) {
      case "html":
        if (((l = t.documentElement), !l)) throw Error(o(452));
        return l;
      case "head":
        if (((l = t.head), !l)) throw Error(o(453));
        return l;
      case "body":
        if (((l = t.body), !l)) throw Error(o(454));
        return l;
      default:
        throw Error(o(451));
    }
  }
  function ce(l) {
    for (var t = l.attributes; t.length; ) l.removeAttributeNode(t[0]);
    Ln(l);
  }
  var dt = new Map(),
    Rd = new Set();
  function An(l) {
    return typeof l.getRootNode == "function"
      ? l.getRootNode()
      : l.nodeType === 9
      ? l
      : l.ownerDocument;
  }
  var Xt = _.d;
  _.d = { f: vv, r: hv, D: mv, C: yv, L: gv, m: Sv, X: Ev, S: bv, M: Tv };
  function vv() {
    var l = Xt.f(),
      t = vn();
    return l || t;
  }
  function hv(l) {
    var t = Ya(l);
    t !== null && t.tag === 5 && t.type === "form" ? Ps(t) : Xt.r(l);
  }
  var yu = typeof document > "u" ? null : document;
  function jd(l, t, a) {
    var u = yu;
    if (u && typeof t == "string" && t) {
      var e = ut(t);
      (e = 'link[rel="' + l + '"][href="' + e + '"]'),
        typeof a == "string" && (e += '[crossorigin="' + a + '"]'),
        Rd.has(e) ||
          (Rd.add(e),
          (l = { rel: l, crossOrigin: a, href: t }),
          u.querySelector(e) === null &&
            ((t = u.createElement("link")),
            Ml(t, "link", l),
            Tl(t),
            u.head.appendChild(t)));
    }
  }
  function mv(l) {
    Xt.D(l), jd("dns-prefetch", l, null);
  }
  function yv(l, t) {
    Xt.C(l, t), jd("preconnect", l, t);
  }
  function gv(l, t, a) {
    Xt.L(l, t, a);
    var u = yu;
    if (u && l && t) {
      var e = 'link[rel="preload"][as="' + ut(t) + '"]';
      t === "image" && a && a.imageSrcSet
        ? ((e += '[imagesrcset="' + ut(a.imageSrcSet) + '"]'),
          typeof a.imageSizes == "string" &&
            (e += '[imagesizes="' + ut(a.imageSizes) + '"]'))
        : (e += '[href="' + ut(l) + '"]');
      var n = e;
      switch (t) {
        case "style":
          n = gu(l);
          break;
        case "script":
          n = Su(l);
      }
      dt.has(n) ||
        ((l = j(
          {
            rel: "preload",
            href: t === "image" && a && a.imageSrcSet ? void 0 : l,
            as: t,
          },
          a
        )),
        dt.set(n, l),
        u.querySelector(e) !== null ||
          (t === "style" && u.querySelector(fe(n))) ||
          (t === "script" && u.querySelector(se(n))) ||
          ((t = u.createElement("link")),
          Ml(t, "link", l),
          Tl(t),
          u.head.appendChild(t)));
    }
  }
  function Sv(l, t) {
    Xt.m(l, t);
    var a = yu;
    if (a && l) {
      var u = t && typeof t.as == "string" ? t.as : "script",
        e =
          'link[rel="modulepreload"][as="' + ut(u) + '"][href="' + ut(l) + '"]',
        n = e;
      switch (u) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = Su(l);
      }
      if (
        !dt.has(n) &&
        ((l = j({ rel: "modulepreload", href: l }, t)),
        dt.set(n, l),
        a.querySelector(e) === null)
      ) {
        switch (u) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(se(n))) return;
        }
        (u = a.createElement("link")),
          Ml(u, "link", l),
          Tl(u),
          a.head.appendChild(u);
      }
    }
  }
  function bv(l, t, a) {
    Xt.S(l, t, a);
    var u = yu;
    if (u && l) {
      var e = Ba(u).hoistableStyles,
        n = gu(l);
      t = t || "default";
      var i = e.get(n);
      if (!i) {
        var c = { loading: 0, preload: null };
        if ((i = u.querySelector(fe(n)))) c.loading = 5;
        else {
          (l = j({ rel: "stylesheet", href: l, "data-precedence": t }, a)),
            (a = dt.get(n)) && Zc(l, a);
          var f = (i = u.createElement("link"));
          Tl(f),
            Ml(f, "link", l),
            (f._p = new Promise(function (h, g) {
              (f.onload = h), (f.onerror = g);
            })),
            f.addEventListener("load", function () {
              c.loading |= 1;
            }),
            f.addEventListener("error", function () {
              c.loading |= 2;
            }),
            (c.loading |= 4),
            On(i, t, u);
        }
        (i = { type: "stylesheet", instance: i, count: 1, state: c }),
          e.set(n, i);
      }
    }
  }
  function Ev(l, t) {
    Xt.X(l, t);
    var a = yu;
    if (a && l) {
      var u = Ba(a).hoistableScripts,
        e = Su(l),
        n = u.get(e);
      n ||
        ((n = a.querySelector(se(e))),
        n ||
          ((l = j({ src: l, async: !0 }, t)),
          (t = dt.get(e)) && Vc(l, t),
          (n = a.createElement("script")),
          Tl(n),
          Ml(n, "link", l),
          a.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        u.set(e, n));
    }
  }
  function Tv(l, t) {
    Xt.M(l, t);
    var a = yu;
    if (a && l) {
      var u = Ba(a).hoistableScripts,
        e = Su(l),
        n = u.get(e);
      n ||
        ((n = a.querySelector(se(e))),
        n ||
          ((l = j({ src: l, async: !0, type: "module" }, t)),
          (t = dt.get(e)) && Vc(l, t),
          (n = a.createElement("script")),
          Tl(n),
          Ml(n, "link", l),
          a.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        u.set(e, n));
    }
  }
  function qd(l, t, a, u) {
    var e = (e = Q.current) ? An(e) : null;
    if (!e) throw Error(o(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string"
          ? ((t = gu(a.href)),
            (a = Ba(e).hoistableStyles),
            (u = a.get(t)),
            u ||
              ((u = { type: "style", instance: null, count: 0, state: null }),
              a.set(t, u)),
            u)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          a.rel === "stylesheet" &&
          typeof a.href == "string" &&
          typeof a.precedence == "string"
        ) {
          l = gu(a.href);
          var n = Ba(e).hoistableStyles,
            i = n.get(l);
          if (
            (i ||
              ((e = e.ownerDocument || e),
              (i = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              n.set(l, i),
              (n = e.querySelector(fe(l))) &&
                !n._p &&
                ((i.instance = n), (i.state.loading = 5)),
              dt.has(l) ||
                ((a = {
                  rel: "preload",
                  as: "style",
                  href: a.href,
                  crossOrigin: a.crossOrigin,
                  integrity: a.integrity,
                  media: a.media,
                  hrefLang: a.hrefLang,
                  referrerPolicy: a.referrerPolicy,
                }),
                dt.set(l, a),
                n || Av(e, l, a, i.state))),
            t && u === null)
          )
            throw Error(o(528, ""));
          return i;
        }
        if (t && u !== null) throw Error(o(529, ""));
        return null;
      case "script":
        return (
          (t = a.async),
          (a = a.src),
          typeof a == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = Su(a)),
              (a = Ba(e).hoistableScripts),
              (u = a.get(t)),
              u ||
                ((u = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                a.set(t, u)),
              u)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(o(444, l));
    }
  }
  function gu(l) {
    return 'href="' + ut(l) + '"';
  }
  function fe(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function Hd(l) {
    return j({}, l, { "data-precedence": l.precedence, precedence: null });
  }
  function Av(l, t, a, u) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (u.loading = 1)
      : ((t = l.createElement("link")),
        (u.preload = t),
        t.addEventListener("load", function () {
          return (u.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (u.loading |= 2);
        }),
        Ml(t, "link", a),
        Tl(t),
        l.head.appendChild(t));
  }
  function Su(l) {
    return '[src="' + ut(l) + '"]';
  }
  function se(l) {
    return "script[async]" + l;
  }
  function Yd(l, t, a) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var u = l.querySelector('style[data-href~="' + ut(a.href) + '"]');
          if (u) return (t.instance = u), Tl(u), u;
          var e = j({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null,
          });
          return (
            (u = (l.ownerDocument || l).createElement("style")),
            Tl(u),
            Ml(u, "style", e),
            On(u, a.precedence, l),
            (t.instance = u)
          );
        case "stylesheet":
          e = gu(a.href);
          var n = l.querySelector(fe(e));
          if (n) return (t.state.loading |= 4), (t.instance = n), Tl(n), n;
          (u = Hd(a)),
            (e = dt.get(e)) && Zc(u, e),
            (n = (l.ownerDocument || l).createElement("link")),
            Tl(n);
          var i = n;
          return (
            (i._p = new Promise(function (c, f) {
              (i.onload = c), (i.onerror = f);
            })),
            Ml(n, "link", u),
            (t.state.loading |= 4),
            On(n, a.precedence, l),
            (t.instance = n)
          );
        case "script":
          return (
            (n = Su(a.src)),
            (e = l.querySelector(se(n)))
              ? ((t.instance = e), Tl(e), e)
              : ((u = a),
                (e = dt.get(n)) && ((u = j({}, a)), Vc(u, e)),
                (l = l.ownerDocument || l),
                (e = l.createElement("script")),
                Tl(e),
                Ml(e, "link", u),
                l.head.appendChild(e),
                (t.instance = e))
          );
        case "void":
          return null;
        default:
          throw Error(o(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((u = t.instance), (t.state.loading |= 4), On(u, a.precedence, l));
    return t.instance;
  }
  function On(l, t, a) {
    for (
      var u = a.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        e = u.length ? u[u.length - 1] : null,
        n = e,
        i = 0;
      i < u.length;
      i++
    ) {
      var c = u[i];
      if (c.dataset.precedence === t) n = c;
      else if (n !== e) break;
    }
    n
      ? n.parentNode.insertBefore(l, n.nextSibling)
      : ((t = a.nodeType === 9 ? a.head : a), t.insertBefore(l, t.firstChild));
  }
  function Zc(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.title == null && (l.title = t.title);
  }
  function Vc(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.integrity == null && (l.integrity = t.integrity);
  }
  var zn = null;
  function Bd(l, t, a) {
    if (zn === null) {
      var u = new Map(),
        e = (zn = new Map());
      e.set(a, u);
    } else (e = zn), (u = e.get(a)), u || ((u = new Map()), e.set(a, u));
    if (u.has(l)) return u;
    for (
      u.set(l, null), a = a.getElementsByTagName(l), e = 0;
      e < a.length;
      e++
    ) {
      var n = a[e];
      if (
        !(
          n[Au] ||
          n[Nl] ||
          (l === "link" && n.getAttribute("rel") === "stylesheet")
        ) &&
        n.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var i = n.getAttribute(t) || "";
        i = l + i;
        var c = u.get(i);
        c ? c.push(n) : u.set(i, [n]);
      }
    }
    return u;
  }
  function Gd(l, t, a) {
    (l = l.ownerDocument || l),
      l.head.insertBefore(
        a,
        t === "title" ? l.querySelector("head > title") : null
      );
  }
  function Ov(l, t, a) {
    if (a === 1 || t.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case "stylesheet":
            return (
              (l = t.disabled), typeof t.precedence == "string" && l == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Xd(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  var de = null;
  function zv() {}
  function pv(l, t, a) {
    if (de === null) throw Error(o(475));
    var u = de;
    if (
      t.type === "stylesheet" &&
      (typeof a.media != "string" || matchMedia(a.media).matches !== !1) &&
      (t.state.loading & 4) === 0
    ) {
      if (t.instance === null) {
        var e = gu(a.href),
          n = l.querySelector(fe(e));
        if (n) {
          (l = n._p),
            l !== null &&
              typeof l == "object" &&
              typeof l.then == "function" &&
              (u.count++, (u = pn.bind(u)), l.then(u, u)),
            (t.state.loading |= 4),
            (t.instance = n),
            Tl(n);
          return;
        }
        (n = l.ownerDocument || l),
          (a = Hd(a)),
          (e = dt.get(e)) && Zc(a, e),
          (n = n.createElement("link")),
          Tl(n);
        var i = n;
        (i._p = new Promise(function (c, f) {
          (i.onload = c), (i.onerror = f);
        })),
          Ml(n, "link", a),
          (t.instance = n);
      }
      u.stylesheets === null && (u.stylesheets = new Map()),
        u.stylesheets.set(t, l),
        (l = t.state.preload) &&
          (t.state.loading & 3) === 0 &&
          (u.count++,
          (t = pn.bind(u)),
          l.addEventListener("load", t),
          l.addEventListener("error", t));
    }
  }
  function _v() {
    if (de === null) throw Error(o(475));
    var l = de;
    return (
      l.stylesheets && l.count === 0 && Lc(l, l.stylesheets),
      0 < l.count
        ? function (t) {
            var a = setTimeout(function () {
              if ((l.stylesheets && Lc(l, l.stylesheets), l.unsuspend)) {
                var u = l.unsuspend;
                (l.unsuspend = null), u();
              }
            }, 6e4);
            return (
              (l.unsuspend = t),
              function () {
                (l.unsuspend = null), clearTimeout(a);
              }
            );
          }
        : null
    );
  }
  function pn() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) Lc(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        (this.unsuspend = null), l();
      }
    }
  }
  var _n = null;
  function Lc(l, t) {
    (l.stylesheets = null),
      l.unsuspend !== null &&
        (l.count++,
        (_n = new Map()),
        t.forEach(Mv, l),
        (_n = null),
        pn.call(l));
  }
  function Mv(l, t) {
    if (!(t.state.loading & 4)) {
      var a = _n.get(l);
      if (a) var u = a.get(null);
      else {
        (a = new Map()), _n.set(l, a);
        for (
          var e = l.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            n = 0;
          n < e.length;
          n++
        ) {
          var i = e[n];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") &&
            (a.set(i.dataset.precedence, i), (u = i));
        }
        u && a.set(null, u);
      }
      (e = t.instance),
        (i = e.getAttribute("data-precedence")),
        (n = a.get(i) || u),
        n === u && a.set(null, e),
        a.set(i, e),
        this.count++,
        (u = pn.bind(this)),
        e.addEventListener("load", u),
        e.addEventListener("error", u),
        n
          ? n.parentNode.insertBefore(e, n.nextSibling)
          : ((l = l.nodeType === 9 ? l.head : l),
            l.insertBefore(e, l.firstChild)),
        (t.state.loading |= 4);
    }
  }
  var re = {
    $$typeof: Dl,
    Provider: null,
    Consumer: null,
    _currentValue: G,
    _currentValue2: G,
    _threadCount: 0,
  };
  function Dv(l, t, a, u, e, n, i, c) {
    (this.tag = 1),
      (this.containerInfo = l),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Qn(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Qn(0)),
      (this.hiddenUpdates = Qn(null)),
      (this.identifierPrefix = u),
      (this.onUncaughtError = e),
      (this.onCaughtError = n),
      (this.onRecoverableError = i),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = c),
      (this.incompleteTransitions = new Map());
  }
  function Qd(l, t, a, u, e, n, i, c, f, h, g, T) {
    return (
      (l = new Dv(l, t, a, i, c, f, h, T)),
      (t = 1),
      n === !0 && (t |= 24),
      (n = kl(3, null, null, t)),
      (l.current = n),
      (n.stateNode = l),
      (t = pi()),
      t.refCount++,
      (l.pooledCache = t),
      t.refCount++,
      (n.memoizedState = { element: u, isDehydrated: a, cache: t }),
      xi(n),
      l
    );
  }
  function Cd(l) {
    return l ? ((l = $a), l) : $a;
  }
  function Zd(l, t, a, u, e, n) {
    (e = Cd(e)),
      u.context === null ? (u.context = e) : (u.pendingContext = e),
      (u = Jt(t)),
      (u.payload = { element: a }),
      (n = n === void 0 ? null : n),
      n !== null && (u.callback = n),
      (a = wt(l, u, t)),
      a !== null && (tt(a, l, t), Cu(a, l, t));
  }
  function Vd(l, t) {
    if (((l = l.memoizedState), l !== null && l.dehydrated !== null)) {
      var a = l.retryLane;
      l.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function Kc(l, t) {
    Vd(l, t), (l = l.alternate) && Vd(l, t);
  }
  function Ld(l) {
    if (l.tag === 13) {
      var t = Wa(l, 67108864);
      t !== null && tt(t, l, 67108864), Kc(l, 67108864);
    }
  }
  var Mn = !0;
  function xv(l, t, a, u) {
    var e = b.T;
    b.T = null;
    var n = _.p;
    try {
      (_.p = 2), Jc(l, t, a, u);
    } finally {
      (_.p = n), (b.T = e);
    }
  }
  function Uv(l, t, a, u) {
    var e = b.T;
    b.T = null;
    var n = _.p;
    try {
      (_.p = 8), Jc(l, t, a, u);
    } finally {
      (_.p = n), (b.T = e);
    }
  }
  function Jc(l, t, a, u) {
    if (Mn) {
      var e = wc(u);
      if (e === null) jc(l, t, u, Dn, a), Jd(l, u);
      else if (Rv(e, l, t, a, u)) u.stopPropagation();
      else if ((Jd(l, u), t & 4 && -1 < Nv.indexOf(l))) {
        for (; e !== null; ) {
          var n = Ya(e);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (((n = n.stateNode), n.current.memoizedState.isDehydrated)) {
                  var i = ha(n.pendingLanes);
                  if (i !== 0) {
                    var c = n;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; i; ) {
                      var f = 1 << (31 - Wl(i));
                      (c.entanglements[1] |= f), (i &= ~f);
                    }
                    At(n), (P & 6) === 0 && ((rn = gt() + 500), ee(0));
                  }
                }
                break;
              case 13:
                (c = Wa(n, 2)), c !== null && tt(c, n, 2), vn(), Kc(n, 2);
            }
          if (((n = wc(u)), n === null && jc(l, t, u, Dn, a), n === e)) break;
          e = n;
        }
        e !== null && u.stopPropagation();
      } else jc(l, t, u, null, a);
    }
  }
  function wc(l) {
    return (l = Pn(l)), Wc(l);
  }
  var Dn = null;
  function Wc(l) {
    if (((Dn = null), (l = Ha(l)), l !== null)) {
      var t = L(l);
      if (t === null) l = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (((l = dl(t)), l !== null)) return l;
          l = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return (Dn = l), null;
  }
  function Kd(l) {
    switch (l) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (mr()) {
          case ef:
            return 2;
          case nf:
            return 8;
          case be:
          case yr:
            return 32;
          case cf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var $c = !1,
    ia = null,
    ca = null,
    fa = null,
    oe = new Map(),
    ve = new Map(),
    sa = [],
    Nv =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function Jd(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        ia = null;
        break;
      case "dragenter":
      case "dragleave":
        ca = null;
        break;
      case "mouseover":
      case "mouseout":
        fa = null;
        break;
      case "pointerover":
      case "pointerout":
        oe.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ve.delete(t.pointerId);
    }
  }
  function he(l, t, a, u, e, n) {
    return l === null || l.nativeEvent !== n
      ? ((l = {
          blockedOn: t,
          domEventName: a,
          eventSystemFlags: u,
          nativeEvent: n,
          targetContainers: [e],
        }),
        t !== null && ((t = Ya(t)), t !== null && Ld(t)),
        l)
      : ((l.eventSystemFlags |= u),
        (t = l.targetContainers),
        e !== null && t.indexOf(e) === -1 && t.push(e),
        l);
  }
  function Rv(l, t, a, u, e) {
    switch (t) {
      case "focusin":
        return (ia = he(ia, l, t, a, u, e)), !0;
      case "dragenter":
        return (ca = he(ca, l, t, a, u, e)), !0;
      case "mouseover":
        return (fa = he(fa, l, t, a, u, e)), !0;
      case "pointerover":
        var n = e.pointerId;
        return oe.set(n, he(oe.get(n) || null, l, t, a, u, e)), !0;
      case "gotpointercapture":
        return (
          (n = e.pointerId), ve.set(n, he(ve.get(n) || null, l, t, a, u, e)), !0
        );
    }
    return !1;
  }
  function wd(l) {
    var t = Ha(l.target);
    if (t !== null) {
      var a = L(t);
      if (a !== null) {
        if (((t = a.tag), t === 13)) {
          if (((t = dl(a)), t !== null)) {
            (l.blockedOn = t),
              zr(l.priority, function () {
                if (a.tag === 13) {
                  var u = lt();
                  u = Cn(u);
                  var e = Wa(a, u);
                  e !== null && tt(e, a, u), Kc(a, u);
                }
              });
            return;
          }
        } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function xn(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var a = wc(l.nativeEvent);
      if (a === null) {
        a = l.nativeEvent;
        var u = new a.constructor(a.type, a);
        (Fn = u), a.target.dispatchEvent(u), (Fn = null);
      } else return (t = Ya(a)), t !== null && Ld(t), (l.blockedOn = a), !1;
      t.shift();
    }
    return !0;
  }
  function Wd(l, t, a) {
    xn(l) && a.delete(t);
  }
  function jv() {
    ($c = !1),
      ia !== null && xn(ia) && (ia = null),
      ca !== null && xn(ca) && (ca = null),
      fa !== null && xn(fa) && (fa = null),
      oe.forEach(Wd),
      ve.forEach(Wd);
  }
  function Un(l, t) {
    l.blockedOn === t &&
      ((l.blockedOn = null),
      $c ||
        (($c = !0),
        S.unstable_scheduleCallback(S.unstable_NormalPriority, jv)));
  }
  var Nn = null;
  function $d(l) {
    Nn !== l &&
      ((Nn = l),
      S.unstable_scheduleCallback(S.unstable_NormalPriority, function () {
        Nn === l && (Nn = null);
        for (var t = 0; t < l.length; t += 3) {
          var a = l[t],
            u = l[t + 1],
            e = l[t + 2];
          if (typeof u != "function") {
            if (Wc(u || a) === null) continue;
            break;
          }
          var n = Ya(a);
          n !== null &&
            (l.splice(t, 3),
            (t -= 3),
            Wi(n, { pending: !0, data: e, method: a.method, action: u }, u, e));
        }
      }));
  }
  function me(l) {
    function t(f) {
      return Un(f, l);
    }
    ia !== null && Un(ia, l),
      ca !== null && Un(ca, l),
      fa !== null && Un(fa, l),
      oe.forEach(t),
      ve.forEach(t);
    for (var a = 0; a < sa.length; a++) {
      var u = sa[a];
      u.blockedOn === l && (u.blockedOn = null);
    }
    for (; 0 < sa.length && ((a = sa[0]), a.blockedOn === null); )
      wd(a), a.blockedOn === null && sa.shift();
    if (((a = (l.ownerDocument || l).$$reactFormReplay), a != null))
      for (u = 0; u < a.length; u += 3) {
        var e = a[u],
          n = a[u + 1],
          i = e[Gl] || null;
        if (typeof n == "function") i || $d(a);
        else if (i) {
          var c = null;
          if (n && n.hasAttribute("formAction")) {
            if (((e = n), (i = n[Gl] || null))) c = i.formAction;
            else if (Wc(e) !== null) continue;
          } else c = i.action;
          typeof c == "function" ? (a[u + 1] = c) : (a.splice(u, 3), (u -= 3)),
            $d(a);
        }
      }
  }
  function kc(l) {
    this._internalRoot = l;
  }
  (Rn.prototype.render = kc.prototype.render =
    function (l) {
      var t = this._internalRoot;
      if (t === null) throw Error(o(409));
      var a = t.current,
        u = lt();
      Zd(a, u, l, t, null, null);
    }),
    (Rn.prototype.unmount = kc.prototype.unmount =
      function () {
        var l = this._internalRoot;
        if (l !== null) {
          this._internalRoot = null;
          var t = l.containerInfo;
          Zd(l.current, 2, null, l, null, null), vn(), (t[qa] = null);
        }
      });
  function Rn(l) {
    this._internalRoot = l;
  }
  Rn.prototype.unstable_scheduleHydration = function (l) {
    if (l) {
      var t = of();
      l = { blockedOn: null, target: l, priority: t };
      for (var a = 0; a < sa.length && t !== 0 && t < sa[a].priority; a++);
      sa.splice(a, 0, l), a === 0 && wd(l);
    }
  };
  var kd = U.version;
  if (kd !== "19.1.0") throw Error(o(527, kd, "19.1.0"));
  _.findDOMNode = function (l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function"
        ? Error(o(188))
        : ((l = Object.keys(l).join(",")), Error(o(268, l)));
    return (
      (l = N(t)),
      (l = l !== null ? O(l) : null),
      (l = l === null ? null : l.stateNode),
      l
    );
  };
  var qv = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: b,
    reconcilerVersion: "19.1.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var jn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!jn.isDisabled && jn.supportsFiber)
      try {
        (bu = jn.inject(qv)), (wl = jn);
      } catch {}
  }
  return (
    (ge.createRoot = function (l, t) {
      if (!q(l)) throw Error(o(299));
      var a = !1,
        u = "",
        e = o0,
        n = v0,
        i = h0,
        c = null;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (a = !0),
          t.identifierPrefix !== void 0 && (u = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (e = t.onUncaughtError),
          t.onCaughtError !== void 0 && (n = t.onCaughtError),
          t.onRecoverableError !== void 0 && (i = t.onRecoverableError),
          t.unstable_transitionCallbacks !== void 0 &&
            (c = t.unstable_transitionCallbacks)),
        (t = Qd(l, 1, !1, null, null, a, u, e, n, i, c, null)),
        (l[qa] = t.current),
        Rc(l),
        new kc(t)
      );
    }),
    (ge.hydrateRoot = function (l, t, a) {
      if (!q(l)) throw Error(o(299));
      var u = !1,
        e = "",
        n = o0,
        i = v0,
        c = h0,
        f = null,
        h = null;
      return (
        a != null &&
          (a.unstable_strictMode === !0 && (u = !0),
          a.identifierPrefix !== void 0 && (e = a.identifierPrefix),
          a.onUncaughtError !== void 0 && (n = a.onUncaughtError),
          a.onCaughtError !== void 0 && (i = a.onCaughtError),
          a.onRecoverableError !== void 0 && (c = a.onRecoverableError),
          a.unstable_transitionCallbacks !== void 0 &&
            (f = a.unstable_transitionCallbacks),
          a.formState !== void 0 && (h = a.formState)),
        (t = Qd(l, 1, !0, t, a ?? null, u, e, n, i, c, f, h)),
        (t.context = Cd(null)),
        (a = t.current),
        (u = lt()),
        (u = Cn(u)),
        (e = Jt(u)),
        (e.callback = null),
        wt(a, e, u),
        (a = u),
        (t.current.lanes = a),
        Tu(t, a),
        At(t),
        (l[qa] = t.current),
        Rc(l),
        new Rn(t)
      );
    }),
    (ge.version = "19.1.0"),
    ge
  );
}
var ir;
function Kv() {
  if (ir) return Ic.exports;
  ir = 1;
  function S() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(S);
      } catch (U) {
        console.error(U);
      }
  }
  return S(), (Ic.exports = Lv()), Ic.exports;
}
var Jv = Kv();
const wv = () =>
    z.jsxs("nav", {
      className: "bg-indigo-600 flex items-center justify-between p-6",
      children: [
        z.jsx("h2", {
          className: "text-white font-bold italic text-2xl",
          children: "Clinique veterinaire",
        }),
        z.jsxs("ul", {
          className:
            " text-lg text-white font-medium flex space-x-8 justify-end ",
          children: [
            z.jsx("li", {
              className: "hover:bg-white hover:text-indigo-600 p-2",
              children: z.jsx("a", { href: "#", children: "A propos" }),
            }),
            z.jsx("li", {
              className:
                "hover:bg-white hover:text-indigo-600 p-2 transition-all",
              children: z.jsx("a", { href: "#", children: "Servives" }),
            }),
            z.jsx("li", {
              className: "hover:bg-white hover:text-indigo-600 p-2",
              children: z.jsx("a", { href: "#", children: "Contact" }),
            }),
          ],
        }),
      ],
    }),
  Wv = () =>
    z.jsx("div", {
      className: `bg-[url('./assets/images/bg.jpg')] w-full h-screen\r
     bg-start bg-cover flex items-center justify-center`,
      children: z.jsx("h1", {
        className: "text-5xl font-extrabold text-white",
        children: "BIENVENUE CHEZ VOTRE VETRINAIRE",
      }),
    }),
  $v = () =>
    z.jsxs("section", {
      className: "bg-white p-8 grid grid-cols-2 gap-8",
      children: [
        z.jsxs("div", {
          children: [
            z.jsx("h2", {
              className: "text-indigo-600 font-bold text-3xl mb-4 text-center",
              children: "QUI SOMMES-NOUS ?",
            }),
            z.jsx("p", {
              className: "text-black text-justify",
              children:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nostrum explicabo, necessitatibus illum placeat odit iste nulla cumque. Ducimus vitae suscipit ullam quas dignissimos, mollitia facilis voluptatibus ratione repudiandae voluptas ex praesentium atque consectetur sapiente commodi quisquam, hic, magni iusto rem illum. Blanditiis, quas. Repellat omnis, minima deserunt, amet, iste reprehenderit porro suscipit dolore repellendus cupiditate numquam iusto eaque fuga placeat nostrum aperiam. Ratione molestias maiores aperiam non omnis necessitatibus reprehenderit error excepturi ipsa expedita totam illo distinctio deserunt minima neque, deleniti hic, eligendi porro eius culpa modi. Distinctio odio, ducimus maiores sequi tenetur assumenda repellendus unde earum. Obcaecati modi excepturi repellendus optio reprehenderit consequuntur, quas, blanditiis odio, animi mollitia cum. Minus corporis a commodi nisi debitis quia.",
            }),
          ],
        }),
        z.jsx("div", {
          children: z.jsx("img", {
            src: "./assets/images/capuchin.jpg",
            className: "w-full rounded-lg shadow-md",
          }),
        }),
      ],
    }),
  kv = () => {
    const S = [
        { race: "Berger allemand", image: "./assets/images/berger-allemend.jpg" },
        { race: "Caniches", image: "./assets/images/caniche.jpg" },
        { race: "Boerboel", image: "./assets/images/boerboel.jpg" },
        {
          race: "Labrador Retriever",
          image: "./assets/images/labrador-retriever.jpg",
        },
        { race: "Rotweiler", image: "./assets/images/rotweiler.jpg" },
      ],
      U = [
        { race: "Ragdoll", image: "./assets/images/ragdoll.jpg" },
        { race: "Bengal", image: "./assets/images/bengal.jpg" },
        { race: "Persan", image: "./assets/images/persan.jpg" },
        { race: "Siamois", image: "./assets/images/siamois.jpg" },
        { race: "Maine-coon", image: "./assets/images/maine-coon.jpg" },
      ],
      M = [
        { race: "Capucin", image: "./assets/images/capucin.jpg" },
        { race: "Spider Monkey", image: "./assets/images/spider-monkey.jpg" },
      ];
    return z.jsxs("section", {
      className: "bg-indigo-600 p-8",
      children: [
        z.jsxs("div", {
          className: "flex flex-col",
          children: [
            z.jsx("h2", {
              className: "text-3xl text-white font-bold mb-4 text-center",
              children: "NOS SERVICE",
            }),
            z.jsx("p", {
              className: "text-white text-justify",
              children:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sunt veniam molestias amet, dolorem labore eveniet voluptatibus quasi accusantium sit delectus omnis molestiae eaque cumque consequatur? Repellendus unde recusandae, expedita exercitationem ut harum non maiores aliquid quasi a, nihil debitis cumque quia mollitia! Odio aperiam placeat magnam maiores rem illo obcaecati facere fugit, incidunt quas eius repudiandae porro nam dicta inventore ad neque ipsam recusandae expedita! Excepturi optio nemo voluptatum, et quis quia in amet itaque deserunt. Modi molestias deserunt deleniti, accusantium sunt nulla minus ea? Impedit deserunt quo, cupiditate tenetur vero qui voluptas, beatae quis quaerat nostrum assumenda officia.",
            }),
          ],
        }),
        z.jsxs("div", {
          className: " p-8",
          children: [
            z.jsx("h4", {
              className:
                "text-white text-2xl uppercase text-center font-bold mb-4",
              children: "Les chiens",
            }),
            z.jsx("div", {
              className: "grid grid-cols-5 gap-3",
              children: S.map((o, q) =>
                z.jsxs(
                  "article",
                  {
                    className: "",
                    children: [
                      z.jsx("img", {
                        src: o.image,
                        className:
                          "rounded-lg shadow-lg hover:scale-105 border-2  border-white transition-all",
                      }),
                      z.jsx("h5", {
                        className: "text-white text-lg text-center",
                        children: o.race,
                      }),
                    ],
                  },
                  q
                )
              ),
            }),
          ],
        }),
        z.jsxs("div", {
          className: " p-8",
          children: [
            z.jsx("h4", {
              className:
                "text-white text-2xl uppercase text-center font-bold mb-4",
              children: "Les chats",
            }),
            z.jsx("div", {
              className: "grid grid-cols-5 gap-3",
              children: U.map((o, q) =>
                z.jsxs(
                  "article",
                  {
                    children: [
                      z.jsx("img", {
                        src: o.image,
                        className:
                          "rounded-lg shadow-lg border-2 hover:scale-105 transition-all",
                      }),
                      z.jsx("h5", {
                        className: "text-white text-lg text-center",
                        children: o.race,
                      }),
                    ],
                  },
                  q
                )
              ),
            }),
          ],
        }),
        z.jsxs("div", {
          className: " p-8 flex-col items-center",
          children: [
            z.jsx("h4", {
              className:
                "text-white text-2xl uppercase text-center font-bold mb-4",
              children: "Les singes",
            }),
            z.jsx("div", {
              className: "grid grid-cols-5 gap-3",
              children: M.map((o, q) =>
                z.jsxs(
                  "article",
                  {
                    children: [
                      z.jsx("img", {
                        src: o.image,
                        className:
                          "rounded-lg shadow-lg border-2 hover:scale-105 transition-all",
                      }),
                      z.jsx("h5", {
                        className: "text-white text-lg text-center",
                        children: o.race,
                      }),
                    ],
                  },
                  q
                )
              ),
            }),
          ],
        }),
      ],
    });
  },
  Fv = () =>
    z.jsxs("section", {
      className: "bg-white flex flex-col items-center justify-between p-8",
      children: [
        z.jsx("h2", {
          className: "text-3xl text-indigo-600 font-bold mb-4 text-center",
          children: "CONTACTEZ-NOUS",
        }),
        z.jsxs("form", {
          onSubmit: () => alert("Vous avez envoyé votre emessage"),
          className:
            "bg-gray-900 p-8 rounded-lg shadow-sm space-y-3 w-fit flex flex-col",
          children: [
            z.jsx("input", {
              type: "text",
              placeholder: "Votre nom complet",
              className:
                "bg-white w-96 text-gray-700 p-2 rounded-lg outline-indigo-400",
            }),
            z.jsx("input", {
              type: "email",
              placeholder: "Votre adresse email",
              className:
                "bg-white w-96 text-gray-700 p-2 rounded-lg outline-indigo-400",
            }),
            z.jsx("input", {
              type: "tel",
              placeholder: "Votre numéro de téléphone",
              className:
                "bg-white w-96 text-gray-700 p-2 rounded-lg outline-indigo-400",
            }),
            z.jsx("textarea", {
              type: "text",
              placeholder: "Votre message",
              className:
                "bg-white w-96 text-gray-700 p-2 rounded-lg outline-indigo-400",
            }),
            z.jsx("input", {
              type: "submit",
              value: "Envoyer",
              className: "bg-indigo-600 hover:bg-indigo-700 p-3",
            }),
          ],
        }),
      ],
    });
var dr = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  cr = Ra.createContext && Ra.createContext(dr),
  Pv = ["attr", "size", "title"];
function Iv(S, U) {
  if (S == null) return {};
  var M = lh(S, U),
    o,
    q;
  if (Object.getOwnPropertySymbols) {
    var L = Object.getOwnPropertySymbols(S);
    for (q = 0; q < L.length; q++)
      (o = L[q]),
        !(U.indexOf(o) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(S, o) &&
          (M[o] = S[o]);
  }
  return M;
}
function lh(S, U) {
  if (S == null) return {};
  var M = {};
  for (var o in S)
    if (Object.prototype.hasOwnProperty.call(S, o)) {
      if (U.indexOf(o) >= 0) continue;
      M[o] = S[o];
    }
  return M;
}
function qn() {
  return (
    (qn = Object.assign
      ? Object.assign.bind()
      : function (S) {
          for (var U = 1; U < arguments.length; U++) {
            var M = arguments[U];
            for (var o in M)
              Object.prototype.hasOwnProperty.call(M, o) && (S[o] = M[o]);
          }
          return S;
        }),
    qn.apply(this, arguments)
  );
}
function fr(S, U) {
  var M = Object.keys(S);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(S);
    U &&
      (o = o.filter(function (q) {
        return Object.getOwnPropertyDescriptor(S, q).enumerable;
      })),
      M.push.apply(M, o);
  }
  return M;
}
function Hn(S) {
  for (var U = 1; U < arguments.length; U++) {
    var M = arguments[U] != null ? arguments[U] : {};
    U % 2
      ? fr(Object(M), !0).forEach(function (o) {
          th(S, o, M[o]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(S, Object.getOwnPropertyDescriptors(M))
      : fr(Object(M)).forEach(function (o) {
          Object.defineProperty(S, o, Object.getOwnPropertyDescriptor(M, o));
        });
  }
  return S;
}
function th(S, U, M) {
  return (
    (U = ah(U)),
    U in S
      ? Object.defineProperty(S, U, {
          value: M,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (S[U] = M),
    S
  );
}
function ah(S) {
  var U = uh(S, "string");
  return typeof U == "symbol" ? U : U + "";
}
function uh(S, U) {
  if (typeof S != "object" || !S) return S;
  var M = S[Symbol.toPrimitive];
  if (M !== void 0) {
    var o = M.call(S, U);
    if (typeof o != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (U === "string" ? String : Number)(S);
}
function rr(S) {
  return (
    S &&
    S.map((U, M) =>
      Ra.createElement(U.tag, Hn({ key: M }, U.attr), rr(U.child))
    )
  );
}
function or(S) {
  return (U) =>
    Ra.createElement(eh, qn({ attr: Hn({}, S.attr) }, U), rr(S.child));
}
function eh(S) {
  var U = (M) => {
    var { attr: o, size: q, title: L } = S,
      dl = Iv(S, Pv),
      El = q || M.size || "1em",
      N;
    return (
      M.className && (N = M.className),
      S.className && (N = (N ? N + " " : "") + S.className),
      Ra.createElement(
        "svg",
        qn(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          M.attr,
          o,
          dl,
          {
            className: N,
            style: Hn(Hn({ color: S.color || M.color }, M.style), S.style),
            height: El,
            width: El,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        L && Ra.createElement("title", null, L),
        S.children
      )
    );
  };
  return cr !== void 0
    ? Ra.createElement(cr.Consumer, null, (M) => U(M))
    : U(dr);
}
function nh(S) {
  return or({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z",
        },
        child: [],
      },
    ],
  })(S);
}
function ih(S) {
  return or({
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] },
      {
        tag: "path",
        attr: {
          d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z",
        },
        child: [],
      },
    ],
  })(S);
}
const ch = () =>
  z.jsx("footer", {
    className: "p-8 bg-gradient-to-b from-indigo-600 to-indigo-900",
    children: z.jsxs("section", {
      className: "grid grid-cols-4 gap-8",
      children: [
        z.jsxs("div", {
          className: "flex flex-col",
          children: [
            z.jsx("h2", {
              className: "text-xl font-bold text-left uppercase mb-4",
              children: "Clinique vétérinaire",
            }),
            z.jsx("p", {
              children:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, dicta?",
            }),
          ],
        }),
        z.jsxs("div", {
          children: [
            z.jsx("h2", {
              className: "text-xl font-bold text-left uppercase mb-4",
              children: "Nos services",
            }),
            z.jsxs("ul", {
              children: [
                z.jsx("li", { children: "Soins vétérinaires" }),
                z.jsx("li", { children: "Vaccination" }),
                z.jsx("li", { children: "Reproduction" }),
              ],
            }),
          ],
        }),
        z.jsxs("div", {
          children: [
            z.jsx("h2", {
              className: "text-xl font-bold text-left uppercase mb-4",
              children: "Liens utiles",
            }),
            z.jsxs("ul", {
              children: [
                z.jsx("li", { children: z.jsx("a", { children: "Accueil" }) }),
                z.jsx("li", { children: z.jsx("a", { children: "A propos" }) }),
                z.jsx("li", { children: z.jsx("a", { children: "Services" }) }),
                z.jsx("li", { children: z.jsx("a", { children: "Contact" }) }),
              ],
            }),
          ],
        }),
        z.jsxs("div", {
          children: [
            z.jsx("h2", {
              className: "text-xl font-bold text-left uppercase mb-4",
              children: "Contact",
            }),
            z.jsxs("ul", {
              children: [
                z.jsxs("li", {
                  className: "flex items-center gap-3",
                  children: [
                    z.jsx(nh, {}),
                    z.jsx("a", { children: "(+237) 657 03 6 751)" }),
                  ],
                }),
                z.jsxs("li", {
                  className: "flex items-center gap-3",
                  children: [
                    z.jsx(ih, {}),
                    z.jsx("a", { children: "clinique@gmail.com" }),
                  ],
                }),
                z.jsxs("li", {
                  className: "flex items-center gap-3",
                  children: [
                    z.jsx("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 24 24",
                      fill: "currentColor",
                      className: "size-4",
                      children: z.jsx("path", {
                        fillRule: "evenodd",
                        d: "m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
                        clipRule: "evenodd",
                      }),
                    }),
                    z.jsx("a", { children: "Yaoundé, Cameroun" }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
function fh() {
  return z.jsxs(z.Fragment, {
    children: [
      z.jsx(wv, {}),
      z.jsx(Wv, {}),
      z.jsx($v, {}),
      z.jsx(kv, {}),
      z.jsx(Fv, {}),
      z.jsx(ch, {}),
    ],
  });
}
Jv.createRoot(document.getElementById("root")).render(
  z.jsx(sr.StrictMode, { children: z.jsx(fh, {}) })
);
