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

// Version: 2.4.0-Alpha.1
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
      var i = e();
      return (t = function t(n, _t) {
        return i[n -= 151];
      })(n, r);
    }

    function e() {
      var n = ["Actions", "7MkGGWX", "kiosk.printer", "wrapperNoListener", "info", "LifeCycleEvent", "STORAGE_DELETE", "InteractiveEvent", "STORAGE_PUT", "playing", "PLAYING", "log", "INTERACT_KICK", "storage.get", "684168LjZDxs", "__importDefault", "sendLogFormatter", "__assign", "substring", "setTimeout", "STORAGE_DOWNLOAD", "DISCONNECT", "INFO", "stringToHex", "interact.message", "storage.exists", "length", "storage.list", "INTERACT_CREATE", "9ivWcVI", "addSelfDestructingEventListener", "split", "message", "pop", "KIOSK_BARCODE", "all", "ops", "Timed out in ", "removeEventListener", "CONNECT", "event", "done", "interactive", "byteCount", "keys", "__esModule", "STORAGE_EXISTS", "prototype", "then", "data", "KICK", "397544qNMnPD", "688786fcJpaZ", "STORAGE_GET", "exports", "4388oMoOtp", "value", "substr", "wrapperNoListener error", "default", "355116AxGDpV", "action", "kick", "apply", "storage.delete", "STORAGE_LIST", "race", "kiosk.barcode", "postMessage", "stopping", "parse", "promiseTimeout", "INTERACT_MESSAGE", "call", "throw", "trys", "events", "925iDCYnT", "clearTimeout", "wrapper", "__awaiter", "return", "connect", "charCodeAt", "sent", "1721360IVCAyx", "onKick", "INTERACT_START", "ms.", "label", "asyncForEach", "interact.start", "onConnect", "storage.clear", "KIOSK_PRINTER", "interact.destroy", "defineProperty", "next", "onDisconnect", "__generator", "33940IxRYWA", "addEventListener", "hasOwnProperty", "addTargetedSelfDestructingEventListener", "parent", "iterator", "LOG", "onMessage", "push", "function", "stringify", "INTERACT_DESTROY", "STOPPING"];
      return (e = function e() {
        return n;
      })();
    }

    (function (n, r) {
      for (var i = t, o = e();;) {
        try {
          if (103856 === -parseInt(i(218)) / 1 * (parseInt(i(204)) / 2) + -parseInt(i(164)) / 3 + -parseInt(i(159)) / 4 * (-parseInt(i(181)) / 5) + parseInt(i(231)) / 6 + -parseInt(i(156)) / 7 + parseInt(i(155)) / 8 * (-parseInt(i(246)) / 9) + parseInt(i(189)) / 10) break;
          o.push(o.shift());
        } catch (a) {
          o.push(o.shift());
        }
      }
    })(), function () {
      "use strict";

      var e = {
        846: function _(n, e, r) {
          var i = t,
              o = this && this[i(232)] || function (n) {
            return n && n[i(262)] ? n : {
              "default": n
            };
          };

          Object[i(200)](e, i(262), {
            value: !0
          });
          var a = r(430),
              c = o(r(895)),
              u = r(9),
              s = o(r(729)),
              f = o(r(91));
          window.Evexi = new function () {
            var n = i;
            this.fs = c[n(163)][n(252)], this[n(259)] = s[n(163)][n(252)], this.tizen = f["default"][n(252)], this[n(228)] = function (t) {
              var e = n;
              return (0, u[e(220)])({
                action: a[e(217)][e(210)],
                data: t
              });
            }, this[n(221)] = function () {
              var t = n;
              return (0, u[t(183)])({
                action: a[t(217)][t(239)]
              });
            };
          }();
        },
        895: function _(n, e, r) {
          var i = t;
          Object.defineProperty(e, i(262), {
            value: !0
          });
          var o = r(430),
              a = r(9);
          e["default"] = new function () {
            this.all = {
              get: function get(n) {
                return (0, a[t(183)])({
                  action: o.Actions.STORAGE_GET,
                  name: n
                }, {
                  name: n
                });
              },
              put: function put(n, e) {
                var r = t;
                return (0, a[r(183)])({
                  action: o[r(217)][r(225)],
                  name: n,
                  data: e
                }, {
                  name: n
                });
              },
              del: function del(n) {
                var e = t;
                return (0, a.wrapper)({
                  action: o[e(217)].STORAGE_DELETE,
                  name: n
                }, {
                  name: n
                });
              },
              list: function list() {
                var n = t;
                return (0, a[n(183)])({
                  action: o[n(217)][n(169)]
                });
              },
              clear: function clear() {
                return (0, a[t(183)])({
                  action: o.Actions.STORAGE_CLEAR
                });
              },
              download: function download(n, e) {
                return (0, a[t(183)])({
                  action: o.Actions.STORAGE_DOWNLOAD,
                  url: n,
                  name: e
                }, {
                  name: e
                });
              },
              exists: function exists(n) {
                var e = t;
                return (0, a[e(183)])({
                  action: o[e(217)][e(263)],
                  name: n
                }, {
                  name: n
                });
              }
            };
          }();
        },
        9: function _(e, r, i) {
          var o = t,
              a = this && this[o(234)] || function () {
            var n = o;
            return (a = Object.assign || function (n) {
              for (var e, r = t, i = 1, o = arguments.length; i < o; i++) {
                for (var a in e = arguments[i]) {
                  Object[r(151)][r(206)].call(e, a) && (n[a] = e[a]);
                }
              }

              return n;
            })[n(167)](this, arguments);
          },
              c = this && this[o(184)] || function (n, e, r, i) {
            return new (r || (r = Promise))(function (o, a) {
              var c = t;

              function u(n) {
                try {
                  f(i.next(n));
                } catch (t) {
                  a(t);
                }
              }

              function s(n) {
                try {
                  f(i["throw"](n));
                } catch (t) {
                  a(t);
                }
              }

              function f(n) {
                var e,
                    i = t;
                n.done ? o(n[i(160)]) : (e = n[i(160)], e instanceof r ? e : new r(function (n) {
                  n(e);
                }))[i(152)](u, s);
              }

              f((i = i[c(167)](n, e || []))[c(201)]());
            });
          },
              u = this && this[o(203)] || function (e, r) {
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
            }, s(213) == ("undefined" == typeof Symbol ? "undefined" : n(Symbol)) && (u[Symbol[s(209)]] = function () {
              return this;
            }), u;

            function v(n) {
              return function (o) {
                return function (n) {
                  var o = t;
                  if (i) throw new TypeError("Generator is already executing.");

                  for (; f;) {
                    try {
                      if (i = 1, a && (c = 2 & n[0] ? a[o(185)] : n[0] ? a["throw"] || ((c = a["return"]) && c[o(177)](a), 0) : a[o(201)]) && !(c = c[o(177)](a, n[1]))[o(258)]) return c;

                      switch (a = 0, c && (n = [2 & n[0], c[o(160)]]), n[0]) {
                        case 0:
                        case 1:
                          c = n;
                          break;

                        case 4:
                          return f.label++, {
                            value: n[1],
                            done: !1
                          };

                        case 5:
                          f[o(193)]++, a = n[1], n = [0];
                          continue;

                        case 7:
                          n = f[o(253)][o(250)](), f[o(179)][o(250)]();
                          continue;

                        default:
                          if (!((c = (c = f.trys)[o(243)] > 0 && c[c[o(243)] - 1]) || 6 !== n[0] && 2 !== n[0])) {
                            f = 0;
                            continue;
                          }

                          if (3 === n[0] && (!c || n[1] > c[0] && n[1] < c[3])) {
                            f[o(193)] = n[1];
                            break;
                          }

                          if (6 === n[0] && f[o(193)] < c[1]) {
                            f[o(193)] = c[1], c = n;
                            break;
                          }

                          if (c && f[o(193)] < c[2]) {
                            f[o(193)] = c[2], f[o(253)][o(212)](n);
                            break;
                          }

                          c[2] && f[o(253)][o(250)](), f[o(179)][o(250)]();
                          continue;
                      }

                      n = r[o(177)](e, f);
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

          Object[o(200)](r, "__esModule", {
            value: !0
          }), r[o(207)] = r.wrapper = r.wrapperNoListener = void 0;
          var s = i(519);

          function f(n, t) {
            var e = o;
            window[e(205)](e(249), function r(i) {
              var o = e,
                  a = JSON.parse(i.data);
              if (a) try {
                (0, s[o(261)])(t).forEach(function (n) {
                  if (t[n] !== a[n]) throw new Error("");
                }), window[o(255)]("message", r, !0), n(a);
              } catch (c) {}
            }, !0);
          }

          r.wrapperNoListener = function (n) {
            var t = o;

            try {
              window[t(208)][t(172)](JSON[t(214)](a({}, n)), "*");
            } catch (e) {
              throw new Error(t(162));
            }
          }, r[o(183)] = function (n, e, r) {
            return c(this, void 0, void 0, function () {
              var i;
              return u(this, function (o) {
                var c = t;

                switch (o.label) {
                  case 0:
                    return o[c(179)][c(212)]([0, 2,, 3]), [4, (0, s.promiseTimeout)(r || 5e3, new Promise(function (t) {
                      var r = c;
                      f(function (n) {
                        t(n.response);
                      }, a({
                        action: n[r(165)]
                      }, e)), window[r(208)][r(172)](JSON[r(214)](a({}, n)), "*");
                    }))];

                  case 1:
                    return [2, o[c(188)]()];

                  case 2:
                    throw i = o[c(188)](), new Error(i);

                  case 3:
                    return [2];
                }
              });
            });
          }, r.addTargetedSelfDestructingEventListener = f;
        },
        729: function _(n, e, r) {
          var i = t,
              o = this && this[i(234)] || function () {
            return (o = Object.assign || function (n) {
              for (var e, r = t, i = 1, o = arguments[r(243)]; i < o; i++) {
                for (var a in e = arguments[i]) {
                  Object.prototype.hasOwnProperty[r(177)](e, a) && (n[a] = e[a]);
                }
              }

              return n;
            }).apply(this, arguments);
          };

          Object[i(200)](e, i(262), {
            value: !0
          });
          var a = r(430),
              c = r(111),
              u = r(9);
          e[i(163)] = new function () {
            var n = i,
                t = this;
            this[n(252)] = {
              create: function create(t, e, r, i) {
                var c = n;
                return (0, u.wrapper)(o(o(o({
                  action: a[c(217)].INTERACT_CREATE,
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
                return (0, u[t(220)])({
                  action: a[t(217)].INTERACT_START
                });
              },
              destroy: function destroy() {
                var e = n;
                t.events = {}, (0, u[e(220)])({
                  action: a.Actions[e(215)]
                });
              },
              message: function message(t, e) {
                var r = n;
                return (0, u[r(220)])(o({
                  action: a[r(217)][r(176)],
                  data: t
                }, e && {
                  client: e
                }));
              },
              kick: function kick(t) {
                var e = n;
                return (0, u.wrapperNoListener)({
                  action: a[e(217)][e(229)],
                  client: t
                });
              },
              onMessage: function onMessage(e) {
                var r = n;
                t[r(180)][r(211)] = e;
              },
              onConnect: function onConnect(e) {
                var r = n;
                t[r(180)][r(196)] = e;
              },
              onDisconnect: function onDisconnect(e) {
                var r = n;
                t[r(180)][r(202)] = e;
              },
              onKick: function onKick(e) {
                var r = n;
                t.events[r(190)] = e;
              }
            }, this.events = {}, window[n(205)](n(249), function (e) {
              var r = n,
                  i = JSON[r(174)](e[r(153)]);
              i.action === a[r(217)][r(176)] && (i[r(257)] === c[r(224)].MESSAGE && t.events.onMessage && i.data && t[r(180)][r(211)](i[r(153)], i.client), i.event === c[r(224)][r(256)] && t[r(180)][r(196)] && t[r(180)][r(196)](i.client), i[r(257)] === c[r(224)][r(238)] && t[r(180)].onDisconnect && t[r(180)][r(202)](i.client), i.event === c[r(224)][r(154)] && t[r(180)][r(190)] && t[r(180)].onKick(i.client));
            });
          }();
        },
        91: function _(n, e, r) {
          var i = t;
          Object.defineProperty(e, i(262), {
            value: !0
          });
          var o = r(430),
              a = r(9);
          e[i(163)] = new function () {
            var n = i;
            this[n(252)] = {
              barcode: function barcode() {
                var t = n;
                return (0, a.wrapper)({
                  action: o[t(217)][t(251)]
                }, void 0, 3e4);
              },
              printer: function printer(t, e) {
                var r = n;
                return (0, a[r(183)])({
                  action: o.Actions[r(198)],
                  data: t,
                  printerSettings: e
                });
              }
            };
          }();
        },
        519: function _(e, r) {
          var i = t,
              o = this && this[i(184)] || function (n, e, r, i) {
            return new (r || (r = Promise))(function (o, a) {
              function c(n) {
                try {
                  s(i.next(n));
                } catch (t) {
                  a(t);
                }
              }

              function u(n) {
                var e = t;

                try {
                  s(i[e(178)](n));
                } catch (r) {
                  a(r);
                }
              }

              function s(n) {
                var e,
                    i = t;
                n[i(258)] ? o(n[i(160)]) : (e = n[i(160)], e instanceof r ? e : new r(function (n) {
                  n(e);
                }))[i(152)](c, u);
              }

              s((i = i[t(167)](n, e || [])).next());
            });
          },
              a = this && this.__generator || function (e, r) {
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
            }, s(213) == ("undefined" == typeof Symbol ? "undefined" : n(Symbol)) && (u[Symbol[s(209)]] = function () {
              return this;
            }), u;

            function v(n) {
              return function (i) {
                return function (n) {
                  var i = t;
                  if (o) throw new TypeError("Generator is already executing.");

                  for (; f;) {
                    try {
                      if (o = 1, a && (c = 2 & n[0] ? a[i(185)] : n[0] ? a[i(178)] || ((c = a[i(185)]) && c[i(177)](a), 0) : a[i(201)]) && !(c = c[i(177)](a, n[1])).done) return c;

                      switch (a = 0, c && (n = [2 & n[0], c[i(160)]]), n[0]) {
                        case 0:
                        case 1:
                          c = n;
                          break;

                        case 4:
                          return f[i(193)]++, {
                            value: n[1],
                            done: !1
                          };

                        case 5:
                          f[i(193)]++, a = n[1], n = [0];
                          continue;

                        case 7:
                          n = f[i(253)][i(250)](), f[i(179)][i(250)]();
                          continue;

                        default:
                          if (!((c = (c = f[i(179)])[i(243)] > 0 && c[c[i(243)] - 1]) || 6 !== n[0] && 2 !== n[0])) {
                            f = 0;
                            continue;
                          }

                          if (3 === n[0] && (!c || n[1] > c[0] && n[1] < c[3])) {
                            f[i(193)] = n[1];
                            break;
                          }

                          if (6 === n[0] && f[i(193)] < c[1]) {
                            f.label = c[1], c = n;
                            break;
                          }

                          if (c && f.label < c[2]) {
                            f.label = c[2], f[i(253)].push(n);
                            break;
                          }

                          c[2] && f[i(253)][i(250)](), f[i(179)].pop();
                          continue;
                      }

                      n = r.call(e, f);
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

          Object[i(200)](r, "__esModule", {
            value: !0
          }), r.stringToHex = r.sleep = r[i(261)] = r[i(247)] = r[i(194)] = r[i(175)] = r.sendLogFormatter = r[i(260)] = void 0, r[i(260)] = function (n) {
            var t = i;
            return encodeURI(n)[t(248)](/%..|./)[t(243)] - 1;
          }, r[i(233)] = function (n) {
            var t = i,
                e = n;
            return n ? (" " === e[t(161)](e.length - 1) && (e = e[t(235)](0, e[t(243)] - 1)), "\n" === e.substr(e[t(243)] - 1) && (e = e[t(235)](0, e[t(243)] - 1)), "," !== e[t(161)](e[t(243)] - 1) && "," !== e.substr(e[t(243)] - 2) || (e = e[t(235)](0, e[t(243)] - 1)), e = "[" + e + "]") : "[]";
          }, r[i(175)] = function (n, e) {
            var r = i,
                o = new Promise(function (e, r) {
              var i = t,
                  o = window[i(236)](function () {
                var t = i;
                window[t(182)](o), r(t(254) + n + t(192));
              }, n);
            });
            return Promise[r(170)]([e, o]);
          }, r[i(194)] = function (n, e) {
            return o(this, void 0, void 0, function () {
              var r;
              return a(this, function (i) {
                var o = t;

                switch (i[o(193)]) {
                  case 0:
                    r = 0, i[o(193)] = 1;

                  case 1:
                    return r < n[o(243)] ? [4, e(n[r], r)] : [3, 4];

                  case 2:
                    i[o(188)](), i[o(193)] = 3;

                  case 3:
                    return r++, [3, 1];

                  case 4:
                    return [2];
                }
              });
            });
          }, r[i(247)] = function (n, e, r) {
            n.addEventListener(e, function i(o) {
              var a = t;
              r(o), n[a(255)](e, i, !0);
            }, !0);
          }, r[i(261)] = function (n) {
            return Object[i(261)](n);
          }, r.sleep = function (n) {
            return new Promise(function (t) {
              window.setTimeout(function () {
                return t();
              }, n);
            });
          }, r[i(240)] = function (n) {
            for (var t, e = i, r = n[e(243)], o = "", a = 0; a < r; a += 1) {
              "a" == (t = n[e(187)](a).toString(16)) && (t = "0A"), o += t.toString(), a == r - 1 && (o += "1B69");
            }

            return o;
          };
        },
        430: function _(n, e) {
          var r,
              i,
              o = t;
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e[o(222)] = e[o(217)] = void 0, (i = e[o(217)] || (e[o(217)] = {}))[o(239)] = o(221), i[o(210)] = o(228), i[o(157)] = o(230), i[o(225)] = "storage.put", i[o(223)] = o(168), i[o(169)] = o(244), i.STORAGE_CLEAR = o(197), i[o(237)] = "storage.download", i[o(263)] = o(242), i[o(245)] = "interact.create", i[o(191)] = o(195), i.INTERACT_DESTROY = o(199), i.INTERACT_MESSAGE = o(241), i[o(229)] = "interact.kick", i[o(251)] = o(171), i[o(198)] = o(219), (r = e.LifeCycleEvent || (e[o(222)] = {}))[o(227)] = o(226), r[o(216)] = o(173);
        },
        111: function _(n, e) {
          var r,
              i = t;
          Object[i(200)](e, i(262), {
            value: !0
          }), e[i(224)] = void 0, (r = e[i(224)] || (e[i(224)] = {})).MESSAGE = i(249), r[i(256)] = i(186), r[i(238)] = "disconnect", r[i(154)] = i(166);
        }
      },
          r = {};
      !function n(i) {
        var o = t,
            a = r[i];
        if (void 0 !== a) return a[o(158)];
        var c = r[i] = {
          exports: {}
        };
        return e[i][o(177)](c[o(158)], c, c[o(158)], n), c.exports;
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