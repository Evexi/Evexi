// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"eaYU":[function(require,module,exports) {
var define;
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// Version: 2.5.0
parcelRequire = function (e, r, t, n) {
  var i,
      o = "function" == typeof parcelRequire && parcelRequire,
      u = "function" == typeof require && require;

  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = "function" == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && "string" == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw c.code = "MODULE_NOT_FOUND", c;
      }

      p.resolve = function (r) {
        return e[t][1][r] || r;
      }, p.cache = {};
      var l = r[t] = new f.Module(t);
      e[t][0].call(l.exports, p, l, l.exports, this);
    }

    return r[t].exports;

    function p(e) {
      return f(p.resolve(e));
    }
  }

  f.isParcelRequire = !0, f.Module = function (e) {
    this.id = e, this.bundle = f, this.exports = {};
  }, f.modules = e, f.cache = r, f.parent = o, f.register = function (r, t) {
    e[r] = [function (e, r) {
      r.exports = t;
    }, {}];
  };

  for (var c = 0; c < t.length; c++) {
    try {
      f(t[c]);
    } catch (e) {
      i || (i = e);
    }
  }

  if (t.length) {
    var l = f(t[t.length - 1]);
    "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = l : "function" == typeof define && define.amd ? define(function () {
      return l;
    }) : n && (this[n] = l);
  }

  if (parcelRequire = f, i) throw i;
  return f;
}({
  "pk3D": [function (require, module, exports) {
    function t(n) {
      return (t = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
        return _typeof(t);
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
      })(n);
    }

    function n() {
      var t = ["STORAGE_CLEAR", "value", "request", "proxy", "warn", "TRANSITION", "end", "TIZEN", "slide-in-from-top", "slide-in-from-right", "disconnect", "fade-out", "fade-in", "PING", "catchLoc", "SETTINGS", "KIOSK_BARCODE", "KIOSK", "PLAYLIST", "INTERACT_KICK", "onMessage", "type", "asyncIterator", "storage.delete", "Online", "interact.message", "default", "tryEntries", "KIOSK_PRINTER", "function", "storage.clear", "slide-out-to-left", "STORAGE_DOWNLOAD", "interact.start", "action", "FADE", "slide-in-from-left", "portrait", "try statement without catch or finally", "completion", "INTERACT_CREATE", "suspendedStart", "Inactive", "displayName", "normal", "CONNECT", "STOPPING", "sent", "ZOOM", "iterator result is not an object", "pop", "__esModule", "onConnect", "ACTIVE", "iterator", "landscape", "envVar", "stringify", "SCHEDULE", "dispatchException", "apply", "slice", "all", "slide-out-to-bottom", "Cannot call a class as a function", "CLEAR_AND_RESTART", "_sent", "hasOwnProperty", "log", "NONE", "15412uMtCpk", "schedule", "postMessage", "STORAGE_EXISTS", "parent", "illegal catch attempt", "REBOOT", "interactive", "2620163IKklpn", "delegate", "ENV_VAR", "throw", "resultName", "slide-out-to-top", "finallyLoc", "method", "interact.destroy", "next", "STORAGE_GET", "afterLoc", "[object Generator]", "ERROR", "kiosk.barcode", "prototype", "onDisconnect", "completed", "reboot", "done", "executing", "PROXY", "call", "SSSP2", "@@asyncIterator", "1966944qXXnxv", "2235jEHQqA", "INACTIVE", "isGeneratorFunction", "Generator is already running", "@@toStringTag", "LOG", "arg", "client", "logs", "PLAYING", "rval", "info", "INTERACT_START", "interact.kick", "STORAGE_DELETE", "playlist", "parse", "key", "values", "stop", "_invoke", "tizen", "setPrototypeOf", "return", "interact:start", "complete", "STORAGE_PUT", "race", "wrap", "15595668oROqeM", "3202jSWUTv", "ms.", "settings", "continue", "then", "__await", "constructor", "storage.list", "events", "playing", "forEach", "exports", "GeneratorFunction", "async", "regeneratorRuntime = r", "40jiBgHI", "keys", "DISCONNECT", "assign", "mark", "storage.exists", "2888100qUuwQg", "SLIDE_LEFT", "interact", "onKick", "abrupt", "slide-in-from-bottom", "create", "push", "transition", "storage.get", "tryLoc", "kiosk.printer", "connect", "message", "data", "SLIDE_BOTTOM", "enumerable", "SLIDE_TOP", "env", "INTERACT_DESTROY", "KICK", "error", "Timed out in ", "catch", "AsyncIterator", "removeEventListener", "name", "374DTbzsA", "Active", "PORTRAIT", "MESSAGE", "toStringTag", "13126420nPvTjK", "setTimeout", "break", "getPrototypeOf", "addEventListener", "__proto__", "STORAGE_LIST", "INFO", "awrap", "object", "event", "length", "HTML", "toString", "INTERACT_MESSAGE", "defineProperty", "SLIDE_RIGHT", "resolve", "nextLoc", "root", "reset", "prev", "storage.download"];
      return (n = function n() {
        return t;
      })();
    }

    function r(t, e) {
      var i = n();
      return (r = function r(t, n) {
        return i[t -= 364];
      })(t, e);
    }

    (function (t, e) {
      for (var i = r, o = n();;) {
        try {
          if (962694 === -parseInt(i(367)) / 1 * (-parseInt(i(529)) / 2) + parseInt(i(550)) / 3 + parseInt(i(465)) / 4 * (-parseInt(i(499)) / 5) + -parseInt(i(498)) / 6 + -parseInt(i(473)) / 7 * (-parseInt(i(544)) / 8) + -parseInt(i(528)) / 9 + parseInt(i(372)) / 10) break;
          o.push(o.shift());
        } catch (a) {
          o.push(o.shift());
        }
      }
    })(), function () {
      var n = {
        757: function _(t, n, r) {
          t.exports = r(666);
        },
        666: function _(n) {
          var e = r,
              i = function (n) {
            "use strict";

            var e,
                i = r,
                o = Object[i(488)],
                a = o[i(462)],
                c = "function" == typeof Symbol ? Symbol : {},
                u = c[i(449)] || "@@iterator",
                s = c[i(417)] || i(497),
                f = c[i(371)] || i(503);

            function h(t, n, r) {
              return Object[i(387)](t, n, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
              }), t[n];
            }

            try {
              h({}, "");
            } catch (k) {
              h = function h(t, n, r) {
                return t[n] = r;
              };
            }

            function v(t, n, e, o) {
              var a,
                  c,
                  u,
                  s,
                  f = i,
                  h = n && n[f(488)] instanceof O ? n : O,
                  v = Object.create(h[f(488)]),
                  w = new C(o || []);
              return v._invoke = (a = t, c = e, u = w, s = p, function (t, n) {
                var e = r;
                if (s === E) throw new Error(e(502));

                if (s === T) {
                  if (e(476) === t) throw n;
                  return j();
                }

                for (u.method = t, u[e(505)] = n;;) {
                  var i = u[e(474)];

                  if (i) {
                    var o = N(i, u);

                    if (o) {
                      if (o === m) continue;
                      return o;
                    }
                  }

                  if ("next" === u.method) u.sent = u[e(461)] = u[e(505)];else if (e(476) === u.method) {
                    if (s === p) throw s = T, u[e(505)];
                    u[e(454)](u.arg);
                  } else e(522) === u[e(480)] && u[e(554)](e(522), u[e(505)]);
                  s = E;
                  var f = l(a, c, u);

                  if (e(439) === f[e(416)]) {
                    if (s = u[e(492)] ? T : d, f.arg === m) continue;
                    return {
                      value: f[e(505)],
                      done: u.done
                    };
                  }

                  "throw" === f[e(416)] && (s = T, u[e(480)] = e(476), u.arg = f[e(505)]);
                }
              }), v;
            }

            function l(t, n, r) {
              var e = i;

              try {
                return {
                  type: "normal",
                  arg: t[e(495)](n, r)
                };
              } catch (o) {
                return {
                  type: e(476),
                  arg: o
                };
              }
            }

            n[i(527)] = v;
            var p = i(436),
                d = "suspendedYield",
                E = i(493),
                T = i(490),
                m = {};

            function O() {}

            function w() {}

            function g() {}

            var y = {};
            h(y, u, function () {
              return this;
            });
            var S = Object[i(375)],
                I = S && S(S(x([])));
            I && I !== o && a.call(I, u) && (y = I);
            var b = g[i(488)] = O[i(488)] = Object[i(556)](y);

            function A(t) {
              var n = i;
              ["next", n(476), n(522)].forEach(function (n) {
                h(t, n, function (t) {
                  return this._invoke(n, t);
                });
              });
            }

            function R(n, e) {
              var o,
                  c = i;

              this[c(519)] = function (i, u) {
                function s() {
                  return new e(function (o, c) {
                    !function i(o, c, u, s) {
                      var f = r,
                          h = l(n[o], n, c);

                      if (f(476) !== h[f(416)]) {
                        var v = h[f(505)],
                            p = v[f(396)];
                        return p && f(381) == t(p) && a[f(495)](p, f(534)) ? e[f(389)](p[f(534)]).then(function (t) {
                          i(f(482), t, u, s);
                        }, function (t) {
                          i(f(476), t, u, s);
                        }) : e[f(389)](p)[f(533)](function (t) {
                          v.value = t, u(v);
                        }, function (t) {
                          return i(f(476), t, u, s);
                        });
                      }

                      s(h[f(505)]);
                    }(i, u, o, c);
                  });
                }

                return o = o ? o[c(533)](s, s) : s();
              };
            }

            function N(t, n) {
              var r = i,
                  o = t[r(449)][n.method];

              if (o === e) {
                if (n[r(474)] = null, r(476) === n[r(480)]) {
                  if (t[r(449)][r(522)] && (n[r(480)] = r(522), n[r(505)] = e, N(t, n), r(476) === n[r(480)])) return m;
                  n[r(480)] = r(476), n.arg = new TypeError("The iterator does not provide a 'throw' method");
                }

                return m;
              }

              var a = l(o, t[r(449)], n[r(505)]);
              if ("throw" === a[r(416)]) return n[r(480)] = r(476), n.arg = a.arg, n[r(474)] = null, m;
              var c = a[r(505)];
              return c ? c[r(492)] ? (n[t[r(477)]] = c[r(396)], n[r(482)] = t[r(390)], r(522) !== n.method && (n.method = r(482), n[r(505)] = e), n[r(474)] = null, m) : c : (n.method = "throw", n.arg = new TypeError(r(444)), n[r(474)] = null, m);
            }

            function _(t) {
              var n = i,
                  r = {
                tryLoc: t[0]
              };
              1 in t && (r[n(409)] = t[1]), 2 in t && (r[n(479)] = t[2], r.afterLoc = t[3]), this.tryEntries[n(557)](r);
            }

            function L(t) {
              var n = i,
                  r = t[n(434)] || {};
              r[n(416)] = "normal", delete r.arg, t[n(434)] = r;
            }

            function C(t) {
              var n = i;
              this[n(422)] = [{
                tryLoc: "root"
              }], t[n(539)](_, this), this[n(392)](!0);
            }

            function x(n) {
              var r = i;

              if (n) {
                var o = n[u];
                if (o) return o[r(495)](n);
                if (r(424) == t(n[r(482)])) return n;

                if (!isNaN(n[r(383)])) {
                  var c = -1,
                      s = function t() {
                    for (var i = r; ++c < n[i(383)];) {
                      if (a[i(495)](n, c)) return t[i(396)] = n[c], t[i(492)] = !1, t;
                    }

                    return t[i(396)] = e, t[i(492)] = !0, t;
                  };

                  return s.next = s;
                }
              }

              return {
                next: j
              };
            }

            function j() {
              return {
                value: e,
                done: !0
              };
            }

            return w[i(488)] = g, h(b, i(535), g), h(g, i(535), w), w[i(438)] = h(g, f, i(541)), n[i(501)] = function (n) {
              var r = i,
                  e = r(424) == t(n) && n[r(535)];
              return !!e && (e === w || r(541) === (e[r(438)] || e[r(366)]));
            }, n[i(548)] = function (t) {
              var n = i;
              return Object[n(521)] ? Object.setPrototypeOf(t, g) : (t[n(377)] = g, h(t, f, n(541))), t[n(488)] = Object[n(556)](b), t;
            }, n[i(380)] = function (t) {
              return {
                __await: t
              };
            }, A(R[i(488)]), h(R[i(488)], s, function () {
              return this;
            }), n[i(364)] = R, n[i(542)] = function (t, r, e, o, a) {
              var c = i;
              void 0 === a && (a = Promise);
              var u = new R(v(t, r, e, o), a);
              return n[c(501)](r) ? u : u.next().then(function (t) {
                var n = c;
                return t[n(492)] ? t[n(396)] : u.next();
              });
            }, A(b), h(b, f, "Generator"), h(b, u, function () {
              return this;
            }), h(b, i(385), function () {
              return i(485);
            }), n[i(545)] = function (t) {
              var n = i,
                  r = [];

              for (var e in t) {
                r[n(557)](e);
              }

              return r.reverse(), function e() {
                for (var i = n; r[i(383)];) {
                  var o = r[i(445)]();
                  if (o in t) return e.value = o, e.done = !1, e;
                }

                return e[i(492)] = !0, e;
              };
            }, n[i(517)] = x, C[i(488)] = {
              constructor: C,
              reset: function reset(t) {
                var n = i;
                if (this[n(393)] = 0, this.next = 0, this[n(442)] = this[n(461)] = e, this.done = !1, this[n(474)] = null, this[n(480)] = n(482), this.arg = e, this[n(422)][n(539)](L), !t) for (var r in this) {
                  "t" === r.charAt(0) && a[n(495)](this, r) && !isNaN(+r[n(456)](1)) && (this[r] = e);
                }
              },
              stop: function stop() {
                var t = i;
                this.done = !0;
                var n = this[t(422)][0][t(434)];
                if ("throw" === n[t(416)]) throw n[t(505)];
                return this.rval;
              },
              dispatchException: function dispatchException(t) {
                var n = i;
                if (this[n(492)]) throw t;
                var r = this;

                function o(i, o) {
                  var a = n;
                  return s[a(416)] = a(476), s[a(505)] = t, r.next = i, o && (r[a(480)] = a(482), r[a(505)] = e), !!o;
                }

                for (var c = this[n(422)][n(383)] - 1; c >= 0; --c) {
                  var u = this[n(422)][c],
                      s = u[n(434)];
                  if (n(391) === u[n(560)]) return o("end");

                  if (u.tryLoc <= this[n(393)]) {
                    var f = a[n(495)](u, "catchLoc"),
                        h = a[n(495)](u, n(479));

                    if (f && h) {
                      if (this[n(393)] < u[n(409)]) return o(u[n(409)], !0);
                      if (this[n(393)] < u[n(479)]) return o(u[n(479)]);
                    } else if (f) {
                      if (this.prev < u[n(409)]) return o(u[n(409)], !0);
                    } else {
                      if (!h) throw new Error(n(433));
                      if (this[n(393)] < u[n(479)]) return o(u[n(479)]);
                    }
                  }
                }
              },
              abrupt: function abrupt(t, n) {
                for (var r = i, e = this[r(422)][r(383)] - 1; e >= 0; --e) {
                  var o = this[r(422)][e];

                  if (o[r(560)] <= this[r(393)] && a[r(495)](o, "finallyLoc") && this[r(393)] < o.finallyLoc) {
                    var c = o;
                    break;
                  }
                }

                c && (r(374) === t || r(532) === t) && c[r(560)] <= n && n <= c[r(479)] && (c = null);
                var u = c ? c[r(434)] : {};
                return u.type = t, u[r(505)] = n, c ? (this[r(480)] = "next", this[r(482)] = c[r(479)], m) : this.complete(u);
              },
              complete: function complete(t, n) {
                var r = i;
                if (r(476) === t[r(416)]) throw t.arg;
                return r(374) === t[r(416)] || r(532) === t[r(416)] ? this[r(482)] = t[r(505)] : r(522) === t[r(416)] ? (this[r(509)] = this[r(505)] = t[r(505)], this[r(480)] = r(522), this[r(482)] = r(401)) : r(439) === t[r(416)] && n && (this[r(482)] = n), m;
              },
              finish: function finish(t) {
                for (var n = i, r = this[n(422)][n(383)] - 1; r >= 0; --r) {
                  var e = this[n(422)][r];
                  if (e[n(479)] === t) return this[n(524)](e[n(434)], e[n(484)]), L(e), m;
                }
              },
              "catch": function _catch(t) {
                for (var n = i, r = this[n(422)][n(383)] - 1; r >= 0; --r) {
                  var e = this[n(422)][r];

                  if (e[n(560)] === t) {
                    var o = e[n(434)];

                    if (n(476) === o.type) {
                      var a = o[n(505)];
                      L(e);
                    }

                    return a;
                  }
                }

                throw new Error(n(470));
              },
              delegateYield: function delegateYield(t, n, r) {
                var o = i;
                return this[o(474)] = {
                  iterator: x(t),
                  resultName: n,
                  nextLoc: r
                }, o(482) === this[o(480)] && (this[o(505)] = e), m;
              }
            }, n;
          }(n[e(540)]);

          try {
            regeneratorRuntime = i;
          } catch (o) {
            e(381) == ("undefined" == typeof globalThis ? "undefined" : t(globalThis)) ? globalThis.regeneratorRuntime = i : Function("r", e(543))(i);
          }
        }
      },
          e = {};

      function i(t) {
        var o = r,
            a = e[t];
        if (void 0 !== a) return a[o(540)];
        var c = e[t] = {
          exports: {}
        };
        return n[t](c, c[o(540)], i), c[o(540)];
      }

      i.n = function (t) {
        var n = r,
            e = t && t[n(446)] ? function () {
          return t[n(421)];
        } : function () {
          return t;
        };
        return i.d(e, {
          a: e
        }), e;
      }, i.d = function (t, n) {
        var e = r;

        for (var o in n) {
          i.o(n, o) && !i.o(t, o) && Object[e(387)](t, o, {
            enumerable: !0,
            get: n[o]
          });
        }
      }, i.o = function (t, n) {
        var e = r;
        return Object[e(488)][e(462)][e(495)](t, n);
      }, function () {
        "use strict";

        function t(t, n) {
          for (var e = r, i = 0; i < n[e(383)]; i++) {
            var o = n[i];
            o[e(566)] = o[e(566)] || !1, o.configurable = !0, e(396) in o && (o.writable = !0), Object[e(387)](t, o[e(516)], o);
          }
        }

        function n(n, e, i) {
          var o = r;
          return e && t(n[o(488)], e), i && t(n, i), Object[o(387)](n, o(488), {
            writable: !1
          }), n;
        }

        function e(t, n) {
          if (!(t instanceof n)) throw new TypeError(r(459));
        }

        var o, a, c, u, s, f;
        (s = o || (o = {}))[(f = r)(379)] = f(510), s[f(504)] = f(463), s[f(483)] = f(559), s[f(525)] = "storage.put", s.STORAGE_DELETE = f(418), s[f(378)] = f(536), s.STORAGE_CLEAR = f(425), s[f(427)] = f(394), s[f(468)] = f(549), s.INTERACT_CREATE = "interact.create", s[f(511)] = f(428), s[f(569)] = f(481), s.INTERACT_MESSAGE = f(420), s[f(414)] = f(512), s[f(411)] = f(487), s[f(423)] = f(561), s[f(494)] = f(398), s[f(475)] = f(451), (c = a || (a = {}))[(u = r)(508)] = u(538), c[u(441)] = "stopping";
        var h = i(757),
            v = i.n(h);

        function l(t, n) {
          var e = r,
              i = new Promise(function (n, e) {
            var i = r,
                o = window[i(373)](function () {
              var n = i;
              window.clearTimeout(o), e(n(572) + t + n(530));
            }, t);
          });
          return Promise[e(526)]([n, i]);
        }

        function p(t) {
          var n = r;

          try {
            window[n(469)].postMessage(JSON[n(452)](Object.assign({}, t)), "*");
          } catch (e) {
            throw new Error("wrapperNoListener error");
          }
        }

        function d(t, n, e) {
          return i = this, void 0, o = void 0, a = v().mark(function i() {
            var o = r;
            return v()[o(527)](function (r) {
              for (var i = o;;) {
                switch (r[i(393)] = r[i(482)]) {
                  case 0:
                    return r[i(393)] = 0, r.next = 3, l(e || 5e3, new Promise(function (r) {
                      var e,
                          o,
                          a = i;
                      e = function e(t) {
                        r(t.response);
                      }, o = Object.assign({
                        action: t.action
                      }, n), window[a(376)](a(563), function t(n) {
                        var r,
                            i = a,
                            c = JSON[i(515)](n.data);
                        if (c) try {
                          (r = o, Object.keys(r)).forEach(function (t) {
                            if (o[t] !== c[t]) throw new Error("");
                          }), window[i(365)](i(563), t, !0), e(c);
                        } catch (u) {}
                      }, !0), window.parent[a(467)](JSON[a(452)](Object.assign({}, t)), "*");
                    }));

                  case 3:
                    return r.abrupt(i(522), r[i(442)]);

                  case 6:
                    throw r[i(393)] = 6, r.t0 = r[i(573)](0), new Error(r.t0);

                  case 9:
                  case i(401):
                    return r[i(518)]();
                }
              }
            }, i, null, [[0, 6]]);
          }), new (o || (o = Promise))(function (t, n) {
            function e(t) {
              var e = r;

              try {
                u(a[e(482)](t));
              } catch (i) {
                n(i);
              }
            }

            function c(t) {
              var e = r;

              try {
                u(a[e(476)](t));
              } catch (i) {
                n(i);
              }
            }

            function u(n) {
              var i,
                  a = r;
              n.done ? t(n.value) : (i = n[a(396)], i instanceof o ? i : new o(function (t) {
                t(i);
              })).then(e, c);
            }

            u((a = a[r(455)](i, [])).next());
          });
          var i, o, a;
        }

        var E,
            T,
            m,
            O,
            w,
            g,
            y,
            S,
            I,
            b,
            A,
            R,
            N,
            _,
            L,
            C,
            x,
            j,
            k,
            G,
            P,
            D,
            K,
            M,
            F,
            q,
            Y,
            H,
            B,
            U,
            V,
            z,
            J,
            X = new (n(function t() {
          var n = r;
          e(this, t), this[n(457)] = {
            get: function get(t) {
              return d({
                action: o[n(483)],
                name: t
              }, {
                name: t
              });
            },
            put: function put(t, r) {
              return d({
                action: o[n(525)],
                name: t,
                data: r
              }, {
                name: t
              });
            },
            del: function del(t) {
              return d({
                action: o[n(513)],
                name: t
              }, {
                name: t
              });
            },
            list: function list() {
              return d({
                action: o[n(378)]
              });
            },
            clear: function clear() {
              return d({
                action: o[n(395)]
              });
            },
            download: function download(t, r) {
              return d({
                action: o[n(427)],
                url: t,
                name: r
              }, {
                name: r
              });
            },
            exists: function exists(t) {
              return d({
                action: o[n(468)],
                name: t
              }, {
                name: t
              });
            }
          };
        }))();

        z = E || (E = {}), J = r, z.LANDSCAPE = J(450), z[J(369)] = J(432), (U = T || (T = {}))[(V = r)(496)] = V(496), U[V(384)] = V(384), U[V(402)] = V(402), H = m || (m = {}), B = r, H.OFFLINE = "Offline", H.ONLINE = B(419), (q = O || (O = {}))[(Y = r)(413)] = Y(514), q[Y(453)] = Y(466), (M = w || (w = {}))[(F = r)(448)] = F(368), M[F(500)] = F(437), (D = g || (g = {}))[(K = r)(486)] = K(571), D[K(504)] = K(463), D.INFO = K(510), D.WARN = K(399), D[K(464)] = "none", (G = y || (y = {}))[(P = r)(551)] = P(431), G.SLIDE_TOP = P(403), G.SLIDE_BOTTOM = P(555), G[P(388)] = P(404), G[P(430)] = P(407), G[P(443)] = "zoom-in", (j = S || (S = {}))[(k = r)(551)] = k(426), j[k(567)] = k(478), j[k(565)] = k(458), j[k(388)] = "slide-out-to-right", j[k(430)] = k(406), j[k(443)] = "zoom-out", (C = I || (I = {}))[(x = r)(370)] = "message", C[x(440)] = x(562), C[x(546)] = x(405), C.KICK = "kick", (_ = b || (b = {}))[(L = r)(496)] = L(496), _[L(384)] = L(384), _[L(402)] = L(402), _[L(412)] = L(412), R = A || (A = {}), N = r, R.SP = "sp", R[N(410)] = N(531), R.HC = "hc", R[N(460)] = "clearrestart", R[N(471)] = N(491), R.LOGS = N(507), R[N(408)] = "ping", R.INTERACT = N(552), R[N(511)] = N(523), R[N(400)] = N(558);
        var W = new (n(function t() {
          var n = r,
              i = this;
          e(this, t), this[n(457)] = {
            create: function create(t, r, e, i) {
              var a = n;
              return d(Object[a(547)](Object.assign(Object[a(547)]({
                action: o[a(435)],
                maxRuntime: t
              }, r && {
                clientUrl: r
              }), e && {
                maxClients: e
              }), i && {
                noCommunicationTimeout: i
              }));
            },
            start: function start() {
              return p({
                action: o[n(511)]
              });
            },
            destroy: function destroy() {
              i[n(537)] = {}, p({
                action: o.INTERACT_DESTROY
              });
            },
            message: function message(t, r) {
              var e = n;
              return p(Object[e(547)]({
                action: o[e(386)],
                data: t
              }, r && {
                client: r
              }));
            },
            kick: function kick(t) {
              return p({
                action: o.INTERACT_KICK,
                client: t
              });
            },
            onMessage: function onMessage(t) {
              var r = n;
              i[r(537)][r(415)] = t;
            },
            onConnect: function onConnect(t) {
              var r = n;
              i[r(537)][r(447)] = t;
            },
            onDisconnect: function onDisconnect(t) {
              i[n(537)].onDisconnect = t;
            },
            onKick: function onKick(t) {
              var r = n;
              i[r(537)][r(553)] = t;
            }
          }, this[n(537)] = {}, window[n(376)]("message", function (t) {
            var r = n,
                e = JSON[r(515)](t[r(564)]);
            e[r(429)] === o[r(386)] && (e[r(382)] === I[r(370)] && i[r(537)][r(415)] && e[r(564)] && i.events.onMessage(e[r(564)], e[r(506)]), e.event === I[r(440)] && i[r(537)][r(447)] && i[r(537)].onConnect(e.client), e[r(382)] === I[r(546)] && i[r(537)][r(489)] && i[r(537)].onDisconnect(e[r(506)]), e[r(382)] === I[r(570)] && i.events[r(553)] && i.events[r(553)](e[r(506)]));
          });
        }))(),
            Q = new (n(function t() {
          e(this, t), this.all = {
            barcode: function barcode() {
              return d({
                action: o[r(411)]
              }, void 0, 3e4);
            },
            printer: function printer(t, n) {
              return d({
                action: o[r(423)],
                data: t,
                printerSettings: n
              });
            }
          };
        }))(),
            Z = new (n(function t() {
          var n = r;
          e(this, t), this[n(457)] = {
            request: function request(t, r) {
              return d({
                action: o[n(494)],
                proxy: {
                  url: t,
                  request: r
                }
              }, {
                name: t
              });
            }
          };
        }))(),
            $ = new (n(function t() {
          var n = r;
          e(this, t), this[n(457)] = {
            env: function env(t) {
              return d({
                action: o[n(475)],
                name: t
              }, {
                name: t
              });
            }
          };
        }))(),
            tt = n(function t() {
          var n = r;
          e(this, t), this.fs = X[n(457)], this[n(472)] = W[n(457)], this[n(520)] = Q.all, this.proxy = Z[n(457)][n(397)], this[n(568)] = $[n(457)].env, this[n(463)] = function (t) {
            return p({
              action: o[n(504)],
              data: t
            });
          }, this[n(510)] = function () {
            return d({
              action: o[n(379)]
            });
          };
        });
        window.Evexi = new tt();
      }();
    }();
  }, {}],
  "bWjP": [function (require, module, exports) {
    "use strict";

    var e;

    function t(t) {
      return e[t || "Prod"];
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.EnvironmentUrl = void 0, function (e) {
      e.Prod = "wss://mrx.cx/interactive/socket", e.Dev = "wss://dev.mrx.cx/interactive/socket", e.Edge = "wss://edge.mrx.cx/interactive/socket", e.Local = "ws://localhost:1337";
    }(e || (e = {})), exports.EnvironmentUrl = t;
  }, {}],
  "qlF2": [function (require, module, exports) {
    "use strict";

    var r,
        t = this && this.__extends || function () {
      var _r = function r(t, o) {
        return (_r = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (r, t) {
          r.__proto__ = t;
        } || function (r, t) {
          for (var o in t) {
            Object.prototype.hasOwnProperty.call(t, o) && (r[o] = t[o]);
          }
        })(t, o);
      };

      return function (t, o) {
        if ("function" != typeof o && null !== o) throw new TypeError("Class extends value " + String(o) + " is not a constructor or null");

        function n() {
          this.constructor = t;
        }

        _r(t, o), t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
      };
    }();

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.InitializationError = exports.ErrorMessage = void 0, function (r) {
      r.InitializationError = "Initialization Failed";
    }(r = exports.ErrorMessage || (exports.ErrorMessage = {}));

    var o = function (o) {
      function n(t) {
        var n = o.call(this, t) || this;
        return n.name = r.InitializationError, n;
      }

      return t(n, o), n;
    }(Error);

    exports.InitializationError = o;
  }, {}],
  "TBXW": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    });

    var e = require("./core/environment"),
        n = require("./core/errors"),
        t = function () {
      function t(t, s) {
        var o = this;
        if (this.sessionId = t, this.environmentKey = s, this.socket = null, this.pingInterval = null, this.events = {
          onMessage: null,
          onOpen: null,
          onClose: null
        }, !t) throw new n.InitializationError("sessionId not provided");
        this.socket = new WebSocket("".concat((0, e.EnvironmentUrl)(s), "/").concat(t)), this.socket.onmessage = function (e) {
          if (o.events.onMessage) {
            var n = JSON.parse(e.data);
            "ping" !== n.action && "pong" !== n.action && o.events.onMessage(n.data);
          }
        }, this.socket.onopen = function () {
          o.events.onOpen && o.events.onOpen();
        }, this.socket.onclose = function (e) {
          o.events.onClose && o.events.onClose(e.code), o.destroy();
        }, this.pingInterval = window.setInterval(function () {
          return o.send("ping", "ping");
        }, 5e3);
      }

      return t.prototype.send = function (e, n) {
        void 0 === n && (n = "message"), this.socket && this.socket.readyState === WebSocket.OPEN && this.socket.send(JSON.stringify({
          action: n,
          data: e
        }));
      }, t.prototype.onOpen = function (e) {
        return this.events.onOpen = e.bind(this), this;
      }, t.prototype.onClose = function (e) {
        return this.events.onClose = e.bind(this), this;
      }, t.prototype.onMessage = function (e) {
        return this.events.onMessage = e.bind(this), this;
      }, t.prototype.destroy = function () {
        this.socket && this.socket.close(1e3), this.events.onMessage = null, this.events.onOpen = null, this.events.onClose = null, this.socket = null, this.pingInterval && window.clearInterval(this.pingInterval);
      }, t.urlParam = function (e) {
        return void 0 === e && (e = "session"), new URLSearchParams(window.location.search).get(e);
      }, t;
    }();

    exports["default"] = t, window.Scan = t;
  }, {
    "./core/environment": "bWjP",
    "./core/errors": "qlF2"
  }],
  "QCba": [function (require, module, exports) {
    "use strict";

    var e = this && this.__createBinding || (Object.create ? function (e, t, r, i) {
      void 0 === i && (i = r), Object.defineProperty(e, i, {
        enumerable: !0,
        get: function get() {
          return t[r];
        }
      });
    } : function (e, t, r, i) {
      void 0 === i && (i = r), e[i] = t[r];
    }),
        t = this && this.__exportStar || function (t, r) {
      for (var i in t) {
        "default" === i || Object.prototype.hasOwnProperty.call(r, i) || e(r, t, i);
      }
    };

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), t(require("./evexi/Evexi.js"), exports), t(require("./scan/Scan"), exports);
  }, {
    "./evexi/Evexi.js": "pk3D",
    "./scan/Scan": "TBXW"
  }]
}, {}, ["QCba"], null);
},{}],"QCba":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

require("../../../../package/index.js"); // importing the evexi API
// get the session id from the url param


var sessionId = window.Scan.urlParam(); // listen and send messages to the WS API (the second optional argument is the environment Prod, Dev or Edge. DEFAULT: Prod)

var scan = new window.Scan(sessionId, 'Edge').onMessage(function (message) {
  console.log('Message: ', message);
}).onOpen(function () {
  console.log('Opened');
  scan.send('message from scanURL to content');
}).onClose(function (code) {
  console.log('Closed: ', code);
}); // send message type into the input box on the page
// @ts-ignore

window.send = function () {
  var msg = document.getElementById("message").value;
  scan.send(msg);
};
},{"../../../../package/index.js":"eaYU"}]},{},["QCba"], null)