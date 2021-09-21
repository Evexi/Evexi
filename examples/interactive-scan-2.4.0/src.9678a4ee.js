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
    function n(t) {
      return (n = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (n) {
        return _typeof(n);
      } : function (n) {
        return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : _typeof(n);
      })(t);
    }

    function t() {
      var n = ["1B69", "398617ldKods", "push", "substr", "length", "return", "message", "InteractiveEvent", "tizen", "interactive", "ops", "2728413NXjljE", "CONNECT", "KIOSK_BARCODE", "removeEventListener", "interact.destroy", "INTERACT_MESSAGE", "STORAGE_EXISTS", "onKick", "STORAGE_GET", "onMessage", "info", "keys", "sendLogFormatter", "hasOwnProperty", "apply", "value", "parse", "pop", "disconnect", "addSelfDestructingEventListener", "__awaiter", "interact.start", "wrapperNoListener error", "events", "stringToHex", "storage.delete", "wrapperNoListener", "log", "107716mZGZEa", "storage.exists", "action", "MESSAGE", "defineProperty", "kick", "interact.message", "storage.get", "response", "STOPPING", "storage.put", "promiseTimeout", "addEventListener", "INTERACT_KICK", "playing", "2889880PprNby", "2006834DKDMCY", "split", "exports", "label", "byteCount", "2491398CGMLnw", "prototype", "STORAGE_DELETE", "interact.create", "call", "STORAGE_PUT", "stringify", "interact.kick", "addTargetedSelfDestructingEventListener", "iterator", "INTERACT_CREATE", "__importDefault", "__esModule", "STORAGE_LIST", "setTimeout", "done", "STORAGE_DOWNLOAD", "asyncForEach", "charCodeAt", "substring", "setup self destructing listener: ", "wrapper", "storage.download", "data", "INFO", "default", "onDisconnect", "all", "Evexi", "126bBDgyh", "assign", "parent", "stopping", "sent", "onConnect", "__assign", "STORAGE_CLEAR", "forEach", "trys", "4501JSDBVK", "LifeCycleEvent", "DISCONNECT", "__generator", "client", "connect", "toString", "next", "function", "4568BjYZRS", "race", "KICK", "postMessage", "sleep", "event", "throw", "Actions"];
      return (t = function t() {
        return n;
      })();
    }

    function e(n, r) {
      var i = t();
      return (e = function e(n, t) {
        return i[n -= 170];
      })(n, r);
    }

    (function (n, r) {
      for (var i = e, o = t();;) {
        try {
          if (624965 === parseInt(i(240)) / 1 + -parseInt(i(178)) / 2 + -parseInt(i(212)) / 3 * (-parseInt(i(278)) / 4) + parseInt(i(177)) / 5 + -parseInt(i(183)) / 6 + -parseInt(i(222)) / 7 * (parseInt(i(231)) / 8) + parseInt(i(250)) / 9) break;
          o.push(o.shift());
        } catch (a) {
          o.push(o.shift());
        }
      }
    })(), function () {
      "use strict";

      var t = {
        846: function _(n, t, r) {
          var i = e,
              o = this && this[i(194)] || function (n) {
            return n && n[i(195)] ? n : {
              "default": n
            };
          };

          Object[i(282)](t, "__esModule", {
            value: !0
          });
          var a = r(430),
              c = o(r(895)),
              u = r(9),
              s = o(r(729)),
              f = o(r(91));
          window[i(211)] = new function () {
            var n = i;
            this.fs = c[n(208)][n(210)], this[n(248)] = s[n(208)][n(210)], this[n(247)] = f[n(208)][n(210)], this[n(277)] = function (t) {
              var e = n;
              return (0, u[e(276)])({
                action: a[e(238)].LOG,
                data: t
              });
            }, this[n(260)] = function () {
              var t = n;
              return (0, u.wrapper)({
                action: a[t(238)][t(207)]
              });
            };
          }();
        },
        895: function _(n, t, r) {
          var i = e;
          Object[i(282)](t, i(195), {
            value: !0
          });
          var o = r(430),
              a = r(9);
          t["default"] = new function () {
            var n = i;
            this[n(210)] = {
              get: function get(t) {
                var e = n;
                return (0, a.wrapper)({
                  action: o[e(238)][e(258)],
                  name: t
                }, {
                  name: t
                });
              },
              put: function put(t, e) {
                var r = n;
                return (0, a[r(204)])({
                  action: o[r(238)].STORAGE_PUT,
                  name: t,
                  data: e
                }, {
                  name: t
                });
              },
              del: function del(t) {
                return (0, a[n(204)])({
                  action: o.Actions.STORAGE_DELETE,
                  name: t
                }, {
                  name: t
                });
              },
              list: function list() {
                var t = n;
                return (0, a.wrapper)({
                  action: o.Actions[t(196)]
                });
              },
              clear: function clear() {
                var t = n;
                return (0, a[t(204)])({
                  action: o[t(238)][t(219)]
                });
              },
              download: function download(t, e) {
                var r = n;
                return (0, a.wrapper)({
                  action: o[r(238)][r(199)],
                  url: t,
                  name: e
                }, {
                  name: e
                });
              },
              exists: function exists(t) {
                var e = n;
                return (0, a[e(204)])({
                  action: o.Actions[e(256)],
                  name: t
                }, {
                  name: t
                });
              }
            };
          }();
        },
        9: function _(t, r, i) {
          var o = e,
              a = this && this[o(218)] || function () {
            var n = o;
            return (a = Object[n(213)] || function (t) {
              for (var e, r = n, i = 1, o = arguments[r(243)]; i < o; i++) {
                for (var a in e = arguments[i]) {
                  Object[r(184)][r(263)][r(187)](e, a) && (t[a] = e[a]);
                }
              }

              return t;
            })[n(264)](this, arguments);
          },
              c = this && this[o(270)] || function (n, t, r, i) {
            return new (r || (r = Promise))(function (o, a) {
              var c = e;

              function u(n) {
                var t = e;

                try {
                  f(i[t(229)](n));
                } catch (r) {
                  a(r);
                }
              }

              function s(n) {
                var t = e;

                try {
                  f(i[t(237)](n));
                } catch (r) {
                  a(r);
                }
              }

              function f(n) {
                var t,
                    i = e;
                n.done ? o(n[i(265)]) : (t = n.value, t instanceof r ? t : new r(function (n) {
                  n(t);
                })).then(u, s);
              }

              f((i = i.apply(n, t || []))[c(229)]());
            });
          },
              u = this && this[o(225)] || function (t, r) {
            var i,
                a,
                c,
                u,
                s = o,
                f = {
              label: 0,
              sent: function sent() {
                if (1 & c[0]) throw c[1];
                return c[1];
              },
              trys: [],
              ops: []
            };
            return u = {
              next: v(0),
              "throw": v(1),
              "return": v(2)
            }, s(230) == ("undefined" == typeof Symbol ? "undefined" : n(Symbol)) && (u[Symbol[s(192)]] = function () {
              return this;
            }), u;

            function v(n) {
              return function (o) {
                return function (n) {
                  var o = e;
                  if (i) throw new TypeError("Generator is already executing.");

                  for (; f;) {
                    try {
                      if (i = 1, a && (c = 2 & n[0] ? a[o(244)] : n[0] ? a["throw"] || ((c = a[o(244)]) && c[o(187)](a), 0) : a.next) && !(c = c[o(187)](a, n[1]))[o(198)]) return c;

                      switch (a = 0, c && (n = [2 & n[0], c[o(265)]]), n[0]) {
                        case 0:
                        case 1:
                          c = n;
                          break;

                        case 4:
                          return f[o(181)]++, {
                            value: n[1],
                            done: !1
                          };

                        case 5:
                          f[o(181)]++, a = n[1], n = [0];
                          continue;

                        case 7:
                          n = f[o(249)][o(267)](), f[o(221)][o(267)]();
                          continue;

                        default:
                          if (!((c = (c = f.trys).length > 0 && c[c[o(243)] - 1]) || 6 !== n[0] && 2 !== n[0])) {
                            f = 0;
                            continue;
                          }

                          if (3 === n[0] && (!c || n[1] > c[0] && n[1] < c[3])) {
                            f.label = n[1];
                            break;
                          }

                          if (6 === n[0] && f[o(181)] < c[1]) {
                            f.label = c[1], c = n;
                            break;
                          }

                          if (c && f[o(181)] < c[2]) {
                            f[o(181)] = c[2], f[o(249)].push(n);
                            break;
                          }

                          c[2] && f[o(249)][o(267)](), f[o(221)][o(267)]();
                          continue;
                      }

                      n = r[o(187)](t, f);
                    } catch (u) {
                      n = [6, u], a = 0;
                    } finally {
                      i = c = 0;
                    }
                  }

                  if (5 & n[0]) throw n[1];
                  return {
                    value: n[0] ? n[1] : void 0,
                    done: !0
                  };
                }([n, o]);
              };
            }
          };

          Object[o(282)](r, "__esModule", {
            value: !0
          }), r.addTargetedSelfDestructingEventListener = r.wrapper = r[o(276)] = void 0;
          var s = i(519);

          function f(n, t) {
            var e = o;
            console.log("api/Helper.ts (86:4)", e(203) + t[e(280)]), window[e(174)]("message", function r(i) {
              var o = e,
                  a = JSON[o(266)](i[o(206)]);
              if (a) try {
                (0, s[o(261)])(t)[o(220)](function (n) {
                  if (t[n] !== a[n]) throw new Error("");
                }), window.removeEventListener(o(245), r, !0), n(a);
              } catch (c) {}
            }, !0);
          }

          r[o(276)] = function (n) {
            var t = o;

            try {
              window[t(214)][t(234)](JSON.stringify(a({}, n)), "*");
            } catch (e) {
              throw new Error(t(272));
            }
          }, r.wrapper = function (n, t) {
            return c(this, void 0, void 0, function () {
              var r;
              return u(this, function (i) {
                var o = e;

                switch (i[o(181)]) {
                  case 0:
                    return i[o(221)][o(241)]([0, 2,, 3]), [4, (0, s[o(173)])(5e3, new Promise(function (r) {
                      var i = o;
                      f(function (n) {
                        r(n[e(170)]);
                      }, a({
                        action: n.action
                      }, t)), window[i(214)][i(234)](JSON[i(189)](a({}, n)), "*");
                    }))];

                  case 1:
                    return [2, i[o(216)]()];

                  case 2:
                    throw r = i.sent(), new Error(r);

                  case 3:
                    return [2];
                }
              });
            });
          }, r[o(191)] = f;
        },
        729: function _(n, t, r) {
          var i = e,
              o = this && this.__assign || function () {
            return (o = Object.assign || function (n) {
              for (var t, r = e, i = 1, o = arguments.length; i < o; i++) {
                for (var a in t = arguments[i]) {
                  Object[r(184)][r(263)][r(187)](t, a) && (n[a] = t[a]);
                }
              }

              return n;
            }).apply(this, arguments);
          };

          Object[i(282)](t, i(195), {
            value: !0
          });
          var a = r(430),
              c = r(111),
              u = r(9);
          t[i(208)] = new function () {
            var n = i,
                t = this;
            this[n(210)] = {
              create: function create(t, e, r, i) {
                var c = n;
                return (0, u.wrapper)(o(o(o({
                  action: a[c(238)][c(193)],
                  maxRuntime: t
                }, e && {
                  clientUrl: e
                }), r && {
                  maxClients: r
                }), i && {
                  noCommunicationTimeout: i
                }));
              },
              start: function start() {
                var t = n;
                return (0, u[t(276)])({
                  action: a[t(238)].INTERACT_START
                });
              },
              destroy: function destroy() {
                var e = n;
                t[e(273)] = {}, (0, u[e(276)])({
                  action: a[e(238)].INTERACT_DESTROY
                });
              },
              message: function message(t, e) {
                var r = n;
                return (0, u[r(276)])(o({
                  action: a[r(238)][r(255)],
                  data: t
                }, e && {
                  client: e
                }));
              },
              kick: function kick(t) {
                var e = n;
                return (0, u[e(276)])({
                  action: a[e(238)][e(175)],
                  client: t
                });
              },
              onMessage: function onMessage(e) {
                var r = n;
                t[r(273)][r(259)] = e;
              },
              onConnect: function onConnect(e) {
                var r = n;
                t[r(273)][r(217)] = e;
              },
              onDisconnect: function onDisconnect(e) {
                var r = n;
                t[r(273)][r(209)] = e;
              },
              onKick: function onKick(e) {
                var r = n;
                t[r(273)][r(257)] = e;
              }
            }, this[n(273)] = {}, window.addEventListener(n(245), function (e) {
              var r = n,
                  i = JSON.parse(e[r(206)]);
              i[r(280)] === a.Actions.INTERACT_MESSAGE && (i[r(236)] === c.InteractiveEvent[r(281)] && t[r(273)][r(259)] && i[r(206)] && t.events[r(259)](i[r(206)], i[r(226)]), i[r(236)] === c[r(246)][r(251)] && t[r(273)][r(217)] && t[r(273)][r(217)](i[r(226)]), i[r(236)] === c.InteractiveEvent.DISCONNECT && t[r(273)][r(209)] && t[r(273)][r(209)](i[r(226)]), i[r(236)] === c.InteractiveEvent[r(233)] && t.events[r(257)] && t[r(273)][r(257)](i[r(226)]));
            });
          }();
        },
        91: function _(n, t, r) {
          var i = e;
          Object[i(282)](t, i(195), {
            value: !0
          });
          var o = r(430),
              a = r(9);
          t[i(208)] = new function () {
            var n = i;
            this[n(210)] = {
              barcode: function barcode() {
                var t = n;
                return (0, a[t(204)])({
                  action: o[t(238)][t(252)]
                });
              }
            };
          }();
        },
        519: function _(n, t) {
          var r = e,
              i = this && this.__awaiter || function (n, t, r, i) {
            return new (r || (r = Promise))(function (o, a) {
              var c = e;

              function u(n) {
                try {
                  f(i.next(n));
                } catch (t) {
                  a(t);
                }
              }

              function s(n) {
                var t = e;

                try {
                  f(i[t(237)](n));
                } catch (r) {
                  a(r);
                }
              }

              function f(n) {
                var t,
                    i = e;
                n[i(198)] ? o(n.value) : (t = n[i(265)], t instanceof r ? t : new r(function (n) {
                  n(t);
                })).then(u, s);
              }

              f((i = i[c(264)](n, t || []))[c(229)]());
            });
          },
              o = this && this[r(225)] || function (n, t) {
            var i,
                o,
                a,
                c,
                u = r,
                s = {
              label: 0,
              sent: function sent() {
                if (1 & a[0]) throw a[1];
                return a[1];
              },
              trys: [],
              ops: []
            };
            return c = {
              next: f(0),
              "throw": f(1),
              "return": f(2)
            }, "function" == typeof Symbol && (c[Symbol[u(192)]] = function () {
              return this;
            }), c;

            function f(r) {
              return function (c) {
                return function (r) {
                  var c = e;
                  if (i) throw new TypeError("Generator is already executing.");

                  for (; s;) {
                    try {
                      if (i = 1, o && (a = 2 & r[0] ? o[c(244)] : r[0] ? o["throw"] || ((a = o[c(244)]) && a[c(187)](o), 0) : o[c(229)]) && !(a = a[c(187)](o, r[1]))[c(198)]) return a;

                      switch (o = 0, a && (r = [2 & r[0], a[c(265)]]), r[0]) {
                        case 0:
                        case 1:
                          a = r;
                          break;

                        case 4:
                          return s[c(181)]++, {
                            value: r[1],
                            done: !1
                          };

                        case 5:
                          s[c(181)]++, o = r[1], r = [0];
                          continue;

                        case 7:
                          r = s.ops.pop(), s[c(221)][c(267)]();
                          continue;

                        default:
                          if (!((a = (a = s[c(221)])[c(243)] > 0 && a[a.length - 1]) || 6 !== r[0] && 2 !== r[0])) {
                            s = 0;
                            continue;
                          }

                          if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
                            s[c(181)] = r[1];
                            break;
                          }

                          if (6 === r[0] && s[c(181)] < a[1]) {
                            s[c(181)] = a[1], a = r;
                            break;
                          }

                          if (a && s[c(181)] < a[2]) {
                            s[c(181)] = a[2], s.ops[c(241)](r);
                            break;
                          }

                          a[2] && s[c(249)].pop(), s[c(221)][c(267)]();
                          continue;
                      }

                      r = t[c(187)](n, s);
                    } catch (u) {
                      r = [6, u], o = 0;
                    } finally {
                      i = a = 0;
                    }
                  }

                  if (5 & r[0]) throw r[1];
                  return {
                    value: r[0] ? r[1] : void 0,
                    done: !0
                  };
                }([r, c]);
              };
            }
          };

          Object.defineProperty(t, r(195), {
            value: !0
          }), t[r(274)] = t[r(235)] = t[r(261)] = t[r(269)] = t[r(200)] = t[r(173)] = t[r(262)] = t[r(182)] = void 0, t[r(182)] = function (n) {
            var t = r;
            return encodeURI(n)[t(179)](/%..|./).length - 1;
          }, t[r(262)] = function (n) {
            var t = r,
                e = n;
            return n ? (" " === e[t(242)](e[t(243)] - 1) && (e = e[t(202)](0, e[t(243)] - 1)), "\n" === e[t(242)](e[t(243)] - 1) && (e = e[t(202)](0, e.length - 1)), "," !== e[t(242)](e[t(243)] - 1) && "," !== e[t(242)](e[t(243)] - 2) || (e = e[t(202)](0, e[t(243)] - 1)), e = "[" + e + "]") : "[]";
          }, t[r(173)] = function (n, t) {
            var i = r,
                o = new Promise(function (t, r) {
              var i = window[e(197)](function () {
                window.clearTimeout(i), r("Timed out in " + n + "ms.");
              }, n);
            });
            return Promise[i(232)]([t, o]);
          }, t.asyncForEach = function (n, t) {
            return i(this, void 0, void 0, function () {
              var r;
              return o(this, function (i) {
                var o = e;

                switch (i[o(181)]) {
                  case 0:
                    r = 0, i[o(181)] = 1;

                  case 1:
                    return r < n[o(243)] ? [4, t(n[r], r)] : [3, 4];

                  case 2:
                    i[o(216)](), i[o(181)] = 3;

                  case 3:
                    return r++, [3, 1];

                  case 4:
                    return [2];
                }
              });
            });
          }, t[r(269)] = function (n, t, e) {
            var i = r;
            n[i(174)](t, function r(o) {
              var a = i;
              e(o), n[a(253)](t, r, !0);
            }, !0);
          }, t[r(261)] = function (n) {
            return Object[r(261)](n);
          }, t[r(235)] = function (n) {
            return new Promise(function (t) {
              window[e(197)](function () {
                return t();
              }, n);
            });
          }, t.stringToHex = function (n) {
            for (var t, e = r, i = n.length, o = "", a = 0; a < i; a += 1) {
              "a" == (t = n[e(201)](a)[e(228)](16)) && (t = "0A"), o += t.toString(), a == i - 1 && (o += e(239));
            }

            return o;
          };
        },
        430: function _(n, t) {
          var r,
              i,
              o = e;
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.LifeCycleEvent = t[o(238)] = void 0, (i = t[o(238)] || (t.Actions = {}))[o(207)] = o(260), i.LOG = "log", i[o(258)] = o(285), i[o(188)] = o(172), i[o(185)] = o(275), i[o(196)] = "storage.list", i.STORAGE_CLEAR = "storage.clear", i[o(199)] = o(205), i.STORAGE_EXISTS = o(279), i.INTERACT_CREATE = o(186), i.INTERACT_START = o(271), i.INTERACT_DESTROY = o(254), i[o(255)] = o(284), i[o(175)] = o(190), i[o(252)] = "kiosk.barcode", (r = t[o(223)] || (t[o(223)] = {})).PLAYING = o(176), r[o(171)] = o(215);
        },
        111: function _(n, t) {
          var r,
              i = e;
          Object[i(282)](t, "__esModule", {
            value: !0
          }), t[i(246)] = void 0, (r = t.InteractiveEvent || (t[i(246)] = {}))[i(281)] = i(245), r[i(251)] = i(227), r[i(224)] = i(268), r.KICK = i(283);
        }
      },
          r = {};
      !function n(i) {
        var o = e,
            a = r[i];
        if (void 0 !== a) return a[o(180)];
        var c = r[i] = {
          exports: {}
        };
        return t[i][o(187)](c[o(180)], c, c[o(180)], n), c[o(180)];
      }(846);
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
        this.socket = new WebSocket((0, e.EnvironmentUrl)(s) + "/" + t), this.socket.onmessage = function (e) {
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

require("../../../../package/index.js"); // get the session id from the url param


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