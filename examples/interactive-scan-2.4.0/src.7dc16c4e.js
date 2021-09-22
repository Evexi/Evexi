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

    function t(n, r) {
      var o = e();
      return (t = function t(n, _t) {
        return o[n -= 124];
      })(n, r);
    }

    function e() {
      var n = ["label", "removeEventListener", "1072298cahpsN", "onKick", "substring", "1niPRGj", "onMessage", "sent", "split", "action", "toString", "STORAGE_CLEAR", "prototype", "CONNECT", "281183pPRCmM", "ms.", "PLAYING", "call", "11007novXaB", "STORAGE_DOWNLOAD", "INTERACT_CREATE", "STOPPING", "interactive", "interact.message", "client", "throw", "function", "2932904SpvOlE", "message", "event", "INTERACT_START", "parent", "STORAGE_GET", "interact.destroy", "push", "__assign", "length", "kick", "Actions", "response", "storage.clear", "152OwmKFO", "default", "wrapperNoListener error", "INTERACT_KICK", "playing", "setTimeout", "stringToHex", "forEach", "all", "storage.put", "wrapper", "wrapperNoListener", "apply", "LOG", "interact.kick", "hasOwnProperty", "stringify", "__awaiter", "INTERACT_DESTROY", "STORAGE_EXISTS", "addSelfDestructingEventListener", "LifeCycleEvent", "Evexi", "data", "race", "tizen", "STORAGE_LIST", "byteCount", "events", "7320eWEXai", "value", "DISCONNECT", "return", "promiseTimeout", "sendLogFormatter", "5590IgFJqP", "1488imLMQC", "iterator", "addTargetedSelfDestructingEventListener", "MESSAGE", "substr", "KICK", "pop", "__esModule", "1099191HNjhjs", "storage.get", "asyncForEach", "interact.start", "storage.list", "Timed out in ", "INFO", "postMessage", "onConnect", "addEventListener", "Generator is already executing.", "parse", "KIOSK_PRINTER", "storage.download", "onDisconnect", "then", "STORAGE_PUT", "done", "__importDefault", "ops", "charCodeAt", "disconnect", "STORAGE_DELETE", "sleep", "INTERACT_MESSAGE", "trys", "next", "defineProperty", "InteractiveEvent", "assign", "connect", "KIOSK_BARCODE", "keys", "exports", "info", "7226868lTxJdr"];
      return (e = function e() {
        return n;
      })();
    }

    (function (n, r) {
      for (var o = t, i = e();;) {
        try {
          if (482820 === parseInt(o(131)) / 1 * (parseInt(o(128)) / 2) + parseInt(o(211)) / 3 + parseInt(o(153)) / 4 + parseInt(o(196)) / 5 * (-parseInt(o(203)) / 6) + -parseInt(o(140)) / 7 * (parseInt(o(167)) / 8) + -parseInt(o(144)) / 9 * (parseInt(o(202)) / 10) + parseInt(o(125)) / 11) break;
          i.push(i.shift());
        } catch (a) {
          i.push(i.shift());
        }
      }
    })(), function () {
      "use strict";

      var e = {
        846: function _(n, e, r) {
          var o = t,
              i = this && this[o(229)] || function (n) {
            return n && n.__esModule ? n : {
              "default": n
            };
          };

          Object[o(238)](e, "__esModule", {
            value: !0
          });
          var a = r(430),
              c = i(r(895)),
              u = r(9),
              s = i(r(729)),
              f = i(r(91));
          window[o(189)] = new function () {
            var n = o;
            this.fs = c[n(168)][n(175)], this[n(148)] = s["default"].all, this[n(192)] = f[n(168)].all, this.log = function (t) {
              var e = n;
              return (0, u.wrapperNoListener)({
                action: a[e(164)][e(180)],
                data: t
              });
            }, this.info = function () {
              var t = n;
              return (0, u[t(177)])({
                action: a.Actions[t(217)]
              });
            };
          }();
        },
        895: function _(n, e, r) {
          var o = t;
          Object[o(238)](e, o(210), {
            value: !0
          });
          var i = r(430),
              a = r(9);
          e[o(168)] = new function () {
            var n = o;
            this[n(175)] = {
              get: function get(t) {
                var e = n;
                return (0, a[e(177)])({
                  action: i[e(164)].STORAGE_GET,
                  name: t
                }, {
                  name: t
                });
              },
              put: function put(t, e) {
                var r = n;
                return (0, a[r(177)])({
                  action: i[r(164)][r(227)],
                  name: t,
                  data: e
                }, {
                  name: t
                });
              },
              del: function del(t) {
                var e = n;
                return (0, a[e(177)])({
                  action: i[e(164)][e(233)],
                  name: t
                }, {
                  name: t
                });
              },
              list: function list() {
                var t = n;
                return (0, a.wrapper)({
                  action: i[t(164)].STORAGE_LIST
                });
              },
              clear: function clear() {
                var t = n;
                return (0, a[t(177)])({
                  action: i[t(164)][t(137)]
                });
              },
              download: function download(t, e) {
                var r = n;
                return (0, a[r(177)])({
                  action: i[r(164)][r(145)],
                  url: t,
                  name: e
                }, {
                  name: e
                });
              },
              exists: function exists(t) {
                var e = n;
                return (0, a[e(177)])({
                  action: i[e(164)][e(186)],
                  name: t
                }, {
                  name: t
                });
              }
            };
          }();
        },
        9: function _(e, r, o) {
          var i = t,
              a = this && this[i(161)] || function () {
            var n = i;
            return (a = Object.assign || function (n) {
              for (var e, r = t, o = 1, i = arguments.length; o < i; o++) {
                for (var a in e = arguments[o]) {
                  Object.prototype[r(182)].call(e, a) && (n[a] = e[a]);
                }
              }

              return n;
            })[n(179)](this, arguments);
          },
              c = this && this[i(184)] || function (n, e, r, o) {
            return new (r || (r = Promise))(function (i, a) {
              var c = t;

              function u(n) {
                var e = t;

                try {
                  f(o[e(237)](n));
                } catch (r) {
                  a(r);
                }
              }

              function s(n) {
                var e = t;

                try {
                  f(o[e(151)](n));
                } catch (r) {
                  a(r);
                }
              }

              function f(n) {
                var e,
                    o = t;
                n[o(228)] ? i(n[o(197)]) : (e = n[o(197)], e instanceof r ? e : new r(function (n) {
                  n(e);
                }))[o(226)](u, s);
              }

              f((o = o.apply(n, e || []))[c(237)]());
            });
          },
              u = this && this.__generator || function (e, r) {
            var o,
                a,
                c,
                u,
                s = i,
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
            }, s(152) == ("undefined" == typeof Symbol ? "undefined" : n(Symbol)) && (u[Symbol[s(204)]] = function () {
              return this;
            }), u;

            function v(n) {
              return function (i) {
                return function (n) {
                  var i = t;
                  if (o) throw new TypeError(i(221));

                  for (; f;) {
                    try {
                      if (o = 1, a && (c = 2 & n[0] ? a[i(199)] : n[0] ? a[i(151)] || ((c = a["return"]) && c[i(143)](a), 0) : a[i(237)]) && !(c = c[i(143)](a, n[1]))[i(228)]) return c;

                      switch (a = 0, c && (n = [2 & n[0], c.value]), n[0]) {
                        case 0:
                        case 1:
                          c = n;
                          break;

                        case 4:
                          return f[i(126)]++, {
                            value: n[1],
                            done: !1
                          };

                        case 5:
                          f[i(126)]++, a = n[1], n = [0];
                          continue;

                        case 7:
                          n = f[i(230)].pop(), f[i(236)][i(209)]();
                          continue;

                        default:
                          if (!((c = (c = f[i(236)])[i(162)] > 0 && c[c[i(162)] - 1]) || 6 !== n[0] && 2 !== n[0])) {
                            f = 0;
                            continue;
                          }

                          if (3 === n[0] && (!c || n[1] > c[0] && n[1] < c[3])) {
                            f.label = n[1];
                            break;
                          }

                          if (6 === n[0] && f[i(126)] < c[1]) {
                            f[i(126)] = c[1], c = n;
                            break;
                          }

                          if (c && f[i(126)] < c[2]) {
                            f[i(126)] = c[2], f.ops.push(n);
                            break;
                          }

                          c[2] && f[i(230)][i(209)](), f.trys[i(209)]();
                          continue;
                      }

                      n = r[i(143)](e, f);
                    } catch (u) {
                      n = [6, u], a = 0;
                    } finally {
                      o = c = 0;
                    }
                  }

                  if (5 & n[0]) throw n[1];
                  return {
                    value: n[0] ? n[1] : void 0,
                    done: !0
                  };
                }([n, i]);
              };
            }
          };

          Object[i(238)](r, "__esModule", {
            value: !0
          }), r[i(205)] = r[i(177)] = r[i(178)] = void 0;
          var s = o(519);

          function f(n, t) {
            var e = i;
            window[e(220)](e(154), function r(o) {
              var i = e,
                  a = JSON.parse(o[i(190)]);
              if (a) try {
                (0, s[i(243)])(t)[i(174)](function (n) {
                  if (t[n] !== a[n]) throw new Error("");
                }), window[i(127)](i(154), r, !0), n(a);
              } catch (c) {}
            }, !0);
          }

          r[i(178)] = function (n) {
            var t = i;

            try {
              window[t(157)][t(218)](JSON[t(183)](a({}, n)), "*");
            } catch (e) {
              throw new Error(t(169));
            }
          }, r[i(177)] = function (n, e, r) {
            return c(this, void 0, void 0, function () {
              var o;
              return u(this, function (i) {
                var c = t;

                switch (i[c(126)]) {
                  case 0:
                    return i[c(236)][c(160)]([0, 2,, 3]), [4, (0, s[c(200)])(r || 5e3, new Promise(function (r) {
                      var o = c;
                      f(function (n) {
                        r(n[t(165)]);
                      }, a({
                        action: n[o(135)]
                      }, e)), window.parent[o(218)](JSON[o(183)](a({}, n)), "*");
                    }))];

                  case 1:
                    return [2, i.sent()];

                  case 2:
                    throw o = i[c(133)](), new Error(o);

                  case 3:
                    return [2];
                }
              });
            });
          }, r.addTargetedSelfDestructingEventListener = f;
        },
        729: function _(n, e, r) {
          var o = t,
              i = this && this.__assign || function () {
            var n = t;
            return (i = Object[n(240)] || function (t) {
              for (var e, r = n, o = 1, i = arguments[r(162)]; o < i; o++) {
                for (var a in e = arguments[o]) {
                  Object[r(138)][r(182)][r(143)](e, a) && (t[a] = e[a]);
                }
              }

              return t;
            }).apply(this, arguments);
          };

          Object[o(238)](e, o(210), {
            value: !0
          });
          var a = r(430),
              c = r(111),
              u = r(9);
          e[o(168)] = new function () {
            var n = o,
                t = this;
            this[n(175)] = {
              create: function create(t, e, r, o) {
                var c = n;
                return (0, u[c(177)])(i(i(i({
                  action: a[c(164)][c(146)],
                  maxRuntime: t
                }, e && {
                  clientUrl: e
                }), r && {
                  maxClients: r
                }), o && {
                  noCommunicationTimeout: o
                }));
              },
              start: function start() {
                var t = n;
                return (0, u[t(178)])({
                  action: a.Actions[t(156)]
                });
              },
              destroy: function destroy() {
                var e = n;
                t[e(195)] = {}, (0, u.wrapperNoListener)({
                  action: a[e(164)].INTERACT_DESTROY
                });
              },
              message: function message(t, e) {
                var r = n;
                return (0, u.wrapperNoListener)(i({
                  action: a[r(164)].INTERACT_MESSAGE,
                  data: t
                }, e && {
                  client: e
                }));
              },
              kick: function kick(t) {
                var e = n;
                return (0, u.wrapperNoListener)({
                  action: a.Actions[e(170)],
                  client: t
                });
              },
              onMessage: function onMessage(e) {
                t[n(195)].onMessage = e;
              },
              onConnect: function onConnect(e) {
                t[n(195)].onConnect = e;
              },
              onDisconnect: function onDisconnect(e) {
                var r = n;
                t[r(195)][r(225)] = e;
              },
              onKick: function onKick(e) {
                var r = n;
                t.events[r(129)] = e;
              }
            }, this[n(195)] = {}, window[n(220)](n(154), function (e) {
              var r = n,
                  o = JSON[r(222)](e[r(190)]);
              o[r(135)] === a[r(164)][r(235)] && (o.event === c[r(239)][r(206)] && t[r(195)][r(132)] && o[r(190)] && t[r(195)][r(132)](o[r(190)], o.client), o[r(155)] === c[r(239)][r(139)] && t[r(195)].onConnect && t[r(195)][r(219)](o.client), o[r(155)] === c[r(239)].DISCONNECT && t[r(195)][r(225)] && t.events.onDisconnect(o[r(150)]), o.event === c[r(239)].KICK && t[r(195)][r(129)] && t[r(195)][r(129)](o.client));
            });
          }();
        },
        91: function _(n, e, r) {
          Object[t(238)](e, "__esModule", {
            value: !0
          });
          var o = r(430),
              i = r(9);
          e["default"] = new function () {
            this.all = {
              barcode: function barcode() {
                var n = t;
                return (0, i[n(177)])({
                  action: o.Actions[n(242)]
                }, void 0, 3e4);
              },
              printer: function printer(n, e) {
                var r = t;
                return (0, i[r(177)])({
                  action: o[r(164)].KIOSK_PRINTER,
                  data: n,
                  printerSettings: e
                });
              }
            };
          }();
        },
        519: function _(e, r) {
          var o = t,
              i = this && this[o(184)] || function (n, e, r, o) {
            return new (r || (r = Promise))(function (i, a) {
              var c = t;

              function u(n) {
                var e = t;

                try {
                  f(o[e(237)](n));
                } catch (r) {
                  a(r);
                }
              }

              function s(n) {
                try {
                  f(o["throw"](n));
                } catch (t) {
                  a(t);
                }
              }

              function f(n) {
                var e,
                    o = t;
                n[o(228)] ? i(n[o(197)]) : (e = n[o(197)], e instanceof r ? e : new r(function (n) {
                  n(e);
                }))[o(226)](u, s);
              }

              f((o = o[c(179)](n, e || []))[c(237)]());
            });
          },
              a = this && this.__generator || function (e, r) {
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
            }, s(152) == ("undefined" == typeof Symbol ? "undefined" : n(Symbol)) && (u[Symbol[s(204)]] = function () {
              return this;
            }), u;

            function v(n) {
              return function (o) {
                return function (n) {
                  var o = t;
                  if (i) throw new TypeError(o(221));

                  for (; f;) {
                    try {
                      if (i = 1, a && (c = 2 & n[0] ? a[o(199)] : n[0] ? a[o(151)] || ((c = a[o(199)]) && c[o(143)](a), 0) : a[o(237)]) && !(c = c.call(a, n[1]))[o(228)]) return c;

                      switch (a = 0, c && (n = [2 & n[0], c[o(197)]]), n[0]) {
                        case 0:
                        case 1:
                          c = n;
                          break;

                        case 4:
                          return f[o(126)]++, {
                            value: n[1],
                            done: !1
                          };

                        case 5:
                          f.label++, a = n[1], n = [0];
                          continue;

                        case 7:
                          n = f[o(230)][o(209)](), f[o(236)][o(209)]();
                          continue;

                        default:
                          if (!((c = (c = f.trys).length > 0 && c[c[o(162)] - 1]) || 6 !== n[0] && 2 !== n[0])) {
                            f = 0;
                            continue;
                          }

                          if (3 === n[0] && (!c || n[1] > c[0] && n[1] < c[3])) {
                            f[o(126)] = n[1];
                            break;
                          }

                          if (6 === n[0] && f[o(126)] < c[1]) {
                            f.label = c[1], c = n;
                            break;
                          }

                          if (c && f.label < c[2]) {
                            f[o(126)] = c[2], f[o(230)].push(n);
                            break;
                          }

                          c[2] && f.ops[o(209)](), f[o(236)][o(209)]();
                          continue;
                      }

                      n = r[o(143)](e, f);
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

          Object[o(238)](r, o(210), {
            value: !0
          }), r[o(173)] = r[o(234)] = r.keys = r[o(187)] = r[o(213)] = r[o(200)] = r.sendLogFormatter = r.byteCount = void 0, r[o(194)] = function (n) {
            var t = o;
            return encodeURI(n)[t(134)](/%..|./).length - 1;
          }, r[o(201)] = function (n) {
            var t = o,
                e = n;
            return n ? (" " === e[t(207)](e.length - 1) && (e = e[t(130)](0, e[t(162)] - 1)), "\n" === e.substr(e.length - 1) && (e = e.substring(0, e[t(162)] - 1)), "," !== e.substr(e.length - 1) && "," !== e[t(207)](e.length - 2) || (e = e[t(130)](0, e.length - 1)), e = "[" + e + "]") : "[]";
          }, r.promiseTimeout = function (n, e) {
            var r = o,
                i = new Promise(function (e, r) {
              var o = t,
                  i = window[o(172)](function () {
                var t = o;
                window.clearTimeout(i), r(t(216) + n + t(141));
              }, n);
            });
            return Promise[r(191)]([e, i]);
          }, r.asyncForEach = function (n, e) {
            return i(this, void 0, void 0, function () {
              var r;
              return a(this, function (o) {
                var i = t;

                switch (o[i(126)]) {
                  case 0:
                    r = 0, o.label = 1;

                  case 1:
                    return r < n[i(162)] ? [4, e(n[r], r)] : [3, 4];

                  case 2:
                    o[i(133)](), o[i(126)] = 3;

                  case 3:
                    return r++, [3, 1];

                  case 4:
                    return [2];
                }
              });
            });
          }, r[o(187)] = function (n, e, r) {
            n.addEventListener(e, function o(i) {
              var a = t;
              r(i), n[a(127)](e, o, !0);
            }, !0);
          }, r.keys = function (n) {
            return Object[o(243)](n);
          }, r[o(234)] = function (n) {
            return new Promise(function (e) {
              window[t(172)](function () {
                return e();
              }, n);
            });
          }, r[o(173)] = function (n) {
            for (var t, e = o, r = n.length, i = "", a = 0; a < r; a += 1) {
              "a" == (t = n[e(231)](a)[e(136)](16)) && (t = "0A"), i += t[e(136)](), a == r - 1 && (i += "1B69");
            }

            return i;
          };
        },
        430: function _(n, e) {
          var r,
              o,
              i = t;
          Object[i(238)](e, "__esModule", {
            value: !0
          }), e[i(188)] = e[i(164)] = void 0, (o = e.Actions || (e.Actions = {}))[i(217)] = i(124), o[i(180)] = "log", o[i(158)] = i(212), o.STORAGE_PUT = i(176), o[i(233)] = "storage.delete", o[i(193)] = i(215), o[i(137)] = i(166), o[i(145)] = i(224), o[i(186)] = "storage.exists", o[i(146)] = "interact.create", o.INTERACT_START = i(214), o[i(185)] = i(159), o[i(235)] = i(149), o[i(170)] = i(181), o[i(242)] = "kiosk.barcode", o[i(223)] = "kiosk.printer", (r = e[i(188)] || (e.LifeCycleEvent = {}))[i(142)] = i(171), r[i(147)] = "stopping";
        },
        111: function _(n, e) {
          var r,
              o = t;
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.InteractiveEvent = void 0, (r = e[o(239)] || (e.InteractiveEvent = {}))[o(206)] = o(154), r.CONNECT = o(241), r[o(198)] = o(232), r[o(208)] = o(163);
        }
      },
          r = {};
      !function n(o) {
        var i = t,
            a = r[o];
        if (void 0 !== a) return a[i(244)];
        var c = r[o] = {
          exports: {}
        };
        return e[o][i(143)](c[i(244)], c, c[i(244)], n), c[i(244)];
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