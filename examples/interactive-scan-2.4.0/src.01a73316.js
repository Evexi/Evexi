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

// Version: 2.4.0-alpha.5
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

    function n(t, r) {
      var i = e();
      return (n = function n(t, _n) {
        return i[t -= 330];
      })(t, r);
    }

    function e() {
      var t = ["Timed out in ", "stringToHex", "call", "onConnect", "connect", "STORAGE_EXISTS", "STORAGE_DELETE", "PLAYLIST", "create", "4698890uNssPP", "pop", "INFO", "return", "request", "SSSP2", "PING", "2616648FHmFhT", "storage.download", "asyncForEach", "SLIDE_LEFT", "DevicesAuth", "INTERACT_START", "DevicesLogs", "defineProperty", "default", "SLIDE_BOTTOM", "parse", "push", "error", "substr", "2333388oipnBx", "kiosk.printer", "fade-out", "byteCount", "ENV_VAR", "HTML", "postMessage", "INTERACT_KICK", "zoom-in", "onMessage", "14mtaFKf", "stopping", "fade-in", "DISCONNECT", "exports", "function", "data", "INACTIVE", "Platform", "iterator", "TransitionOUT", "onDisconnect", "length", "User", "zoom-out", "CLEAR_AND_RESTART", "Common", "Offline", "WebsocketAction", "slide-in-from-top", "label", "Auth", "ZOOM", "tizen", "INTERACT_MESSAGE", "KIOSK_BARCODE", "FADE", "Logs", "kiosk.barcode", "wrapper", "Players", "LOGS", "value", "Status", "STORAGE_DOWNLOAD", "storage.clear", "interactive", "LOG", "removeEventListener", "setTimeout", "EnvironmentType", "__esModule", "InteractiveEvent", "client", "all", "TransitionIn", "Actions", "PLAYING", "onKick", "envVar", "info", "substring", "charCodeAt", "Generator is already executing.", "Rotation", "Endpoints", "STORAGE_CLEAR", "slide-out-to-top", "planType", "Level", "__awaiter", "apply", "sendLogFormatter", "portrait", "5kNNHOK", "storage.exists", "NONE", "TIZEN", "stringify", "playing", "event", "landscape", "KICK", "proxy", "events", "1103006VrVneL", "STORAGE_GET", "__assign", "ACTIVE", "SCHEDULE", "__generator", "slide-in-from-left", "reboot", "slide-out-to-right", "clearTimeout", "throw", "storage.get", "then", "INTERACT", "__importStar", "slide-out-to-bottom", "LifeCycleEvent", "Inactive", "__importDefault", "KIOSK", "wrapperNoListener", "UserStatus", "message", "transition", "__createBinding", "storage.delete", "trys", "split", "slide-in-from-right", "4246695GSRdqc", "addEventListener", "Online", "keys", "MESSAGE", "4876888xxsGOk", "CONNECT", "interact.start", "Websocket", "ops", "STORAGE_LIST", "sleep", "interact.create", "PORTRAIT", "action", "SLIDE_TOP", "KIOSK_PRINTER", "874716PcAUDv", "interact.kick", "parent", "env", "playlist", "done", "OFFLINE", "__exportStar", "STORAGE_PUT", "log", "1B69", "assign", "INTERACT_DESTROY", "next", "ONLINE", "4VLFyoY", "hasOwnProperty", "sent", "prototype", "Devices", "interact.destroy", "race"];
      return (e = function e() {
        return t;
      })();
    }

    (function (t, r) {
      for (var i = n, o = e();;) {
        try {
          if (621649 === -parseInt(i(505)) / 1 + -parseInt(i(383)) / 2 * (-parseInt(i(368)) / 3) + parseInt(i(420)) / 4 * (-parseInt(i(494)) / 5) + -parseInt(i(406)) / 6 + -parseInt(i(430)) / 7 * (-parseInt(i(356)) / 8) + parseInt(i(351)) / 9 + parseInt(i(399)) / 10) break;
          o.push(o.shift());
        } catch (a) {
          o.push(o.shift());
        }
      }
    })(), function () {
      "use strict";

      var e = {
        846: function _(t, e, r) {
          var i = n,
              o = this && this.__importDefault || function (t) {
            return t && t[n(471)] ? t : {
              "default": t
            };
          };

          Object[i(413)](e, i(471), {
            value: !0
          });
          var a = r(430),
              c = o(r(895)),
              u = r(9),
              s = o(r(729)),
              f = o(r(13)),
              v = o(r(956)),
              l = o(r(269));
          window.Evexi = new function () {
            var t = i;
            this.fs = c[t(414)][t(474)], this[t(466)] = s[t(414)][t(474)], this[t(453)] = f[t(414)][t(474)], this[t(503)] = v[t(414)][t(474)][t(403)], this.env = l[t(414)].all[t(371)], this[t(377)] = function (n) {
              var e = t;
              return (0, u[e(342)])({
                action: a[e(476)][e(467)],
                data: n
              });
            }, this[t(480)] = function () {
              var n = t;
              return (0, u[n(459)])({
                action: a[n(476)].INFO
              });
            };
          }();
        },
        269: function _(t, e, r) {
          var i = n;
          Object[i(413)](e, i(471), {
            value: !0
          });
          var o = r(430),
              a = r(9);
          e[i(414)] = new function () {
            var t = i;
            this[t(474)] = {
              env: function env(n) {
                var e = t;
                return (0, a.wrapper)({
                  action: o.Actions[e(424)],
                  name: n
                }, {
                  name: n
                });
              }
            };
          }();
        },
        895: function _(t, e, r) {
          var i = n;
          Object.defineProperty(e, i(471), {
            value: !0
          });
          var o = r(430),
              a = r(9);
          e[i(414)] = new function () {
            var t = i;
            this[t(474)] = {
              get: function get(n) {
                var e = t;
                return (0, a[e(459)])({
                  action: o[e(476)][e(506)],
                  name: n
                }, {
                  name: n
                });
              },
              put: function put(n, e) {
                var r = t;
                return (0, a[r(459)])({
                  action: o[r(476)][r(376)],
                  name: n,
                  data: e
                }, {
                  name: n
                });
              },
              del: function del(n) {
                var e = t;
                return (0, a[e(459)])({
                  action: o.Actions[e(396)],
                  name: n
                }, {
                  name: n
                });
              },
              list: function list() {
                var n = t;
                return (0, a[n(459)])({
                  action: o[n(476)][n(361)]
                });
              },
              clear: function clear() {
                var n = t;
                return (0, a[n(459)])({
                  action: o[n(476)][n(486)]
                });
              },
              download: function download(n, e) {
                var r = t;
                return (0, a.wrapper)({
                  action: o[r(476)][r(464)],
                  url: n,
                  name: e
                }, {
                  name: e
                });
              },
              exists: function exists(n) {
                var e = t;
                return (0, a[e(459)])({
                  action: o[e(476)][e(395)],
                  name: n
                }, {
                  name: n
                });
              }
            };
          }();
        },
        9: function _(e, r, i) {
          var o = n,
              a = this && this.__assign || function () {
            var t = n;
            return (a = Object[t(379)] || function (n) {
              for (var e, r = t, i = 1, o = arguments.length; i < o; i++) {
                for (var a in e = arguments[i]) {
                  Object.prototype.hasOwnProperty[r(392)](e, a) && (n[a] = e[a]);
                }
              }

              return n;
            })[t(491)](this, arguments);
          },
              c = this && this[o(490)] || function (t, e, r, i) {
            return new (r || (r = Promise))(function (o, a) {
              var c = n;

              function u(t) {
                var e = n;

                try {
                  f(i[e(381)](t));
                } catch (r) {
                  a(r);
                }
              }

              function s(t) {
                var e = n;

                try {
                  f(i[e(332)](t));
                } catch (r) {
                  a(r);
                }
              }

              function f(t) {
                var e,
                    i = n;
                t.done ? o(t.value) : (e = t[i(462)], e instanceof r ? e : new r(function (t) {
                  t(e);
                }))[i(334)](u, s);
              }

              f((i = i.apply(t, e || []))[c(381)]());
            });
          },
              u = this && this[o(510)] || function (e, r) {
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
            }, s(435) == ("undefined" == typeof Symbol ? "undefined" : t(Symbol)) && (u[Symbol[s(439)]] = function () {
              return this;
            }), u;

            function v(t) {
              return function (o) {
                return function (t) {
                  var o = n;
                  if (i) throw new TypeError(o(483));

                  for (; f;) {
                    try {
                      if (i = 1, a && (c = 2 & t[0] ? a[o(402)] : t[0] ? a[o(332)] || ((c = a[o(402)]) && c[o(392)](a), 0) : a[o(381)]) && !(c = c[o(392)](a, t[1]))[o(373)]) return c;

                      switch (a = 0, c && (t = [2 & t[0], c[o(462)]]), t[0]) {
                        case 0:
                        case 1:
                          c = t;
                          break;

                        case 4:
                          return f.label++, {
                            value: t[1],
                            done: !1
                          };

                        case 5:
                          f[o(450)]++, a = t[1], t = [0];
                          continue;

                        case 7:
                          t = f[o(360)].pop(), f[o(348)][o(400)]();
                          continue;

                        default:
                          if (!((c = (c = f[o(348)])[o(442)] > 0 && c[c[o(442)] - 1]) || 6 !== t[0] && 2 !== t[0])) {
                            f = 0;
                            continue;
                          }

                          if (3 === t[0] && (!c || t[1] > c[0] && t[1] < c[3])) {
                            f[o(450)] = t[1];
                            break;
                          }

                          if (6 === t[0] && f[o(450)] < c[1]) {
                            f[o(450)] = c[1], c = t;
                            break;
                          }

                          if (c && f[o(450)] < c[2]) {
                            f.label = c[2], f[o(360)][o(417)](t);
                            break;
                          }

                          c[2] && f[o(360)].pop(), f[o(348)][o(400)]();
                          continue;
                      }

                      t = r[o(392)](e, f);
                    } catch (u) {
                      t = [6, u], a = 0;
                    } finally {
                      i = c = 0;
                    }
                  }

                  if (5 & t[0]) throw t[1];
                  return {
                    value: t[0] ? t[1] : void 0,
                    done: !0
                  };
                }([t, o]);
              };
            }
          };

          Object[o(413)](r, o(471), {
            value: !0
          }), r[o(459)] = r.wrapperNoListener = void 0;
          var s = i(519);
          r[o(342)] = function (t) {
            var n = o;

            try {
              window[n(370)][n(426)](JSON.stringify(a({}, t)), "*");
            } catch (e) {
              throw new Error("wrapperNoListener error");
            }
          }, r[o(459)] = function (t, e, r) {
            return c(this, void 0, void 0, function () {
              var i;
              return u(this, function (o) {
                var c = n;

                switch (o[c(450)]) {
                  case 0:
                    return o[c(348)].push([0, 2,, 3]), [4, (0, s.promiseTimeout)(r || 5e3, new Promise(function (n) {
                      var r,
                          i,
                          o,
                          u = c;
                      r = function r(t) {
                        n(t.response);
                      }, i = a({
                        action: t[u(365)]
                      }, e), o = function t(n) {
                        var e = u,
                            o = JSON[e(416)](n.data);
                        if (o) try {
                          (0, s.keys)(i).forEach(function (t) {
                            if (i[t] !== o[t]) throw new Error("");
                          }), window.removeEventListener(e(344), t, !0), r(o);
                        } catch (a) {}
                      }, window[u(352)](u(344), o, !0), window[u(370)][u(426)](JSON[u(498)](a({}, t)), "*");
                    }))];

                  case 1:
                    return [2, o[c(385)]()];

                  case 2:
                    throw i = o[c(385)](), new Error(i);

                  case 3:
                    return [2];
                }
              });
            });
          };
        },
        729: function _(t, e, r) {
          var i = n,
              o = this && this[i(507)] || function () {
            var t = i;
            return (o = Object.assign || function (t) {
              for (var e, r = n, i = 1, o = arguments.length; i < o; i++) {
                for (var a in e = arguments[i]) {
                  Object.prototype[r(384)][r(392)](e, a) && (t[a] = e[a]);
                }
              }

              return t;
            })[t(491)](this, arguments);
          },
              a = this && this[i(340)] || function (t) {
            return t && t[i(471)] ? t : {
              "default": t
            };
          };

          Object[i(413)](e, i(471), {
            value: !0
          });
          var c = r(430),
              u = r(9),
              s = a(r(33));
          e[i(414)] = new function () {
            var t = i,
                n = this;
            this[t(474)] = {
              create: function create(n, e, r, i) {
                return (0, u[t(459)])(o(o(o({
                  action: c.Actions.INTERACT_CREATE,
                  maxRuntime: n
                }, e && {
                  clientUrl: e
                }), r && {
                  maxClients: r
                }), i && {
                  noCommunicationTimeout: i
                }));
              },
              start: function start() {
                var n = t;
                return (0, u.wrapperNoListener)({
                  action: c[n(476)][n(411)]
                });
              },
              destroy: function destroy() {
                var e = t;
                n[e(504)] = {}, (0, u.wrapperNoListener)({
                  action: c.Actions[e(380)]
                });
              },
              message: function message(n, e) {
                var r = t;
                return (0, u[r(342)])(o({
                  action: c[r(476)][r(454)],
                  data: n
                }, e && {
                  client: e
                }));
              },
              kick: function kick(n) {
                var e = t;
                return (0, u[e(342)])({
                  action: c.Actions[e(427)],
                  client: n
                });
              },
              onMessage: function onMessage(e) {
                var r = t;
                n[r(504)][r(429)] = e;
              },
              onConnect: function onConnect(e) {
                var r = t;
                n.events[r(393)] = e;
              },
              onDisconnect: function onDisconnect(e) {
                var r = t;
                n[r(504)][r(441)] = e;
              },
              onKick: function onKick(e) {
                var r = t;
                n[r(504)][r(478)] = e;
              }
            }, this[t(504)] = {}, window[t(352)]("message", function (e) {
              var r = t,
                  i = JSON[r(416)](e[r(436)]);
              i.action === c.Actions[r(454)] && (i[r(500)] === s[r(414)][r(359)][r(472)][r(355)] && n.events.onMessage && i[r(436)] && n[r(504)][r(429)](i[r(436)], i[r(473)]), i[r(500)] === s["default"].Websocket[r(472)][r(357)] && n.events.onConnect && n[r(504)].onConnect(i[r(473)]), i[r(500)] === s[r(414)].Websocket[r(472)][r(433)] && n.events.onDisconnect && n[r(504)][r(441)](i[r(473)]), i[r(500)] === s["default"][r(359)][r(472)][r(502)] && n[r(504)][r(478)] && n[r(504)][r(478)](i[r(473)]));
            });
          }();
        },
        956: function _(t, e, r) {
          var i = n;
          Object[i(413)](e, i(471), {
            value: !0
          });
          var o = r(430),
              a = r(9);
          e["default"] = new function () {
            this.all = {
              request: function request(t, e) {
                var r = n;
                return (0, a[r(459)])({
                  action: o[r(476)].PROXY,
                  proxy: {
                    url: t,
                    request: e
                  }
                }, {
                  name: t
                });
              }
            };
          }();
        },
        13: function _(t, e, r) {
          var i = n;
          Object[i(413)](e, i(471), {
            value: !0
          });
          var o = r(430),
              a = r(9);
          e[i(414)] = new function () {
            var t = i;
            this[t(474)] = {
              barcode: function barcode() {
                var n = t;
                return (0, a[n(459)])({
                  action: o[n(476)][n(455)]
                }, void 0, 3e4);
              },
              printer: function printer(n, e) {
                var r = t;
                return (0, a[r(459)])({
                  action: o[r(476)].KIOSK_PRINTER,
                  data: n,
                  printerSettings: e
                });
              }
            };
          }();
        },
        519: function _(e, r) {
          var i = n,
              o = this && this[i(490)] || function (t, e, r, i) {
            return new (r || (r = Promise))(function (o, a) {
              function c(t) {
                var e = n;

                try {
                  s(i[e(381)](t));
                } catch (r) {
                  a(r);
                }
              }

              function u(t) {
                var e = n;

                try {
                  s(i[e(332)](t));
                } catch (r) {
                  a(r);
                }
              }

              function s(t) {
                var e,
                    i = n;
                t.done ? o(t.value) : (e = t[i(462)], e instanceof r ? e : new r(function (t) {
                  t(e);
                }))[i(334)](c, u);
              }

              s((i = i[n(491)](t, e || [])).next());
            });
          },
              a = this && this[i(510)] || function (e, r) {
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
            }, s(435) == ("undefined" == typeof Symbol ? "undefined" : t(Symbol)) && (u[Symbol.iterator] = function () {
              return this;
            }), u;

            function v(t) {
              return function (i) {
                return function (t) {
                  var i = n;
                  if (o) throw new TypeError("Generator is already executing.");

                  for (; f;) {
                    try {
                      if (o = 1, a && (c = 2 & t[0] ? a[i(402)] : t[0] ? a["throw"] || ((c = a[i(402)]) && c[i(392)](a), 0) : a[i(381)]) && !(c = c[i(392)](a, t[1]))[i(373)]) return c;

                      switch (a = 0, c && (t = [2 & t[0], c[i(462)]]), t[0]) {
                        case 0:
                        case 1:
                          c = t;
                          break;

                        case 4:
                          return f.label++, {
                            value: t[1],
                            done: !1
                          };

                        case 5:
                          f.label++, a = t[1], t = [0];
                          continue;

                        case 7:
                          t = f[i(360)].pop(), f.trys[i(400)]();
                          continue;

                        default:
                          if (!((c = (c = f[i(348)])[i(442)] > 0 && c[c[i(442)] - 1]) || 6 !== t[0] && 2 !== t[0])) {
                            f = 0;
                            continue;
                          }

                          if (3 === t[0] && (!c || t[1] > c[0] && t[1] < c[3])) {
                            f.label = t[1];
                            break;
                          }

                          if (6 === t[0] && f[i(450)] < c[1]) {
                            f[i(450)] = c[1], c = t;
                            break;
                          }

                          if (c && f[i(450)] < c[2]) {
                            f[i(450)] = c[2], f.ops[i(417)](t);
                            break;
                          }

                          c[2] && f[i(360)][i(400)](), f.trys.pop();
                          continue;
                      }

                      t = r[i(392)](e, f);
                    } catch (u) {
                      t = [6, u], a = 0;
                    } finally {
                      o = c = 0;
                    }
                  }

                  if (5 & t[0]) throw t[1];
                  return {
                    value: t[0] ? t[1] : void 0,
                    done: !0
                  };
                }([t, i]);
              };
            }
          };

          Object[i(413)](r, i(471), {
            value: !0
          }), r[i(391)] = r[i(362)] = r[i(354)] = r.addSelfDestructingEventListener = r[i(408)] = r.promiseTimeout = r[i(492)] = r[i(423)] = void 0, r[i(423)] = function (t) {
            var n = i;
            return encodeURI(t)[n(349)](/%..|./)[n(442)] - 1;
          }, r[i(492)] = function (t) {
            var n = i,
                e = t;
            return t ? (" " === e[n(419)](e[n(442)] - 1) && (e = e[n(481)](0, e[n(442)] - 1)), "\n" === e[n(419)](e[n(442)] - 1) && (e = e[n(481)](0, e[n(442)] - 1)), "," !== e[n(419)](e.length - 1) && "," !== e[n(419)](e.length - 2) || (e = e[n(481)](0, e[n(442)] - 1)), e = "[" + e + "]") : "[]";
          }, r.promiseTimeout = function (t, e) {
            var r = i,
                o = new Promise(function (e, r) {
              var i = window.setTimeout(function () {
                var e = n;
                window[e(331)](i), r(e(390) + t + "ms.");
              }, t);
            });
            return Promise[r(389)]([e, o]);
          }, r.asyncForEach = function (t, e) {
            return o(this, void 0, void 0, function () {
              var r;
              return a(this, function (i) {
                var o = n;

                switch (i.label) {
                  case 0:
                    r = 0, i.label = 1;

                  case 1:
                    return r < t[o(442)] ? [4, e(t[r], r)] : [3, 4];

                  case 2:
                    i[o(385)](), i[o(450)] = 3;

                  case 3:
                    return r++, [3, 1];

                  case 4:
                    return [2];
                }
              });
            });
          }, r.addSelfDestructingEventListener = function (t, n, e) {
            var r = i;
            t[r(352)](n, function i(o) {
              var a = r;
              e(o), t[a(468)](n, i, !0);
            }, !0);
          }, r.keys = function (t) {
            return Object[i(354)](t);
          }, r[i(362)] = function (t) {
            return new Promise(function (e) {
              window[n(469)](function () {
                return e();
              }, t);
            });
          }, r[i(391)] = function (t) {
            for (var n, e = i, r = t[e(442)], o = "", a = 0; a < r; a += 1) {
              "a" == (n = t[e(482)](a).toString(16)) && (n = "0A"), "a3" == n && (n = "9c"), o += n.toString(), a == r - 1 && (o += e(378));
            }

            return o;
          };
        },
        430: function _(t, e) {
          var r,
              i,
              o = n;
          Object[o(413)](e, o(471), {
            value: !0
          }), e.LifeCycleEvent = e[o(476)] = void 0, (i = e[o(476)] || (e[o(476)] = {})).INFO = o(480), i[o(467)] = o(377), i.STORAGE_GET = o(333), i.STORAGE_PUT = "storage.put", i[o(396)] = o(347), i[o(361)] = "storage.list", i[o(486)] = o(465), i[o(464)] = o(407), i[o(395)] = o(495), i.INTERACT_CREATE = o(363), i[o(411)] = o(358), i[o(380)] = o(388), i[o(454)] = "interact.message", i[o(427)] = o(369), i.KIOSK_BARCODE = o(458), i[o(367)] = o(421), i.PROXY = o(503), i[o(424)] = o(479), (r = e[o(338)] || (e[o(338)] = {}))[o(477)] = o(499), r.STOPPING = o(431);
        },
        922: function _(t, e, r) {
          var i = n,
              o = this && this[i(346)] || (Object[i(398)] ? function (t, n, e, r) {
            void 0 === r && (r = e), Object[i(413)](t, r, {
              enumerable: !0,
              get: function get() {
                return n[e];
              }
            });
          } : function (t, n, e, r) {
            void 0 === r && (r = e), t[r] = n[e];
          }),
              a = this && this[i(375)] || function (t, n) {
            var e = i;

            for (var r in t) {
              e(414) === r || Object.prototype[e(384)].call(n, r) || o(n, t, r);
            }
          };

          Object[i(413)](e, i(471), {
            value: !0
          }), a(r(314), e);
        },
        314: function _(t, e) {
          var r = n;
          Object[r(413)](e, r(471), {
            value: !0
          });
        },
        190: function _(t, e) {
          var r = n;
          Object.defineProperty(e, r(471), {
            value: !0
          });
        },
        345: function _(t, e) {
          Object[n(413)](e, "__esModule", {
            value: !0
          });
        },
        518: function _(t, e) {
          var r = n;
          Object.defineProperty(e, r(471), {
            value: !0
          });
        },
        439: function _(t, e) {
          var r,
              i,
              o,
              a,
              c,
              u = n;
          Object[u(413)](e, u(471), {
            value: !0
          }), e[u(460)] = void 0, (c = (r = e[u(460)] || (e[u(460)] = {}))[u(484)] || (r.Rotation = {})).LANDSCAPE = u(501), c[u(364)] = u(493), (a = r[u(438)] || (r.Platform = {}))[u(404)] = u(404), a.HTML = u(425), a[u(497)] = u(497), (o = r.Status || (r[u(463)] = {}))[u(374)] = u(447), o[u(382)] = u(353), (i = r[u(488)] || (r[u(488)] = {}))[u(397)] = u(372), i[u(509)] = "schedule";
        },
        836: function _(t, e) {
          var r,
              i,
              o = n;
          Object[o(413)](e, o(471), {
            value: !0
          }), e[o(443)] = void 0, (i = (r = e[o(443)] || (e[o(443)] = {}))[o(343)] || (r[o(343)] = {}))[o(508)] = "Active", i[o(437)] = o(339);
        },
        837: function _(t, e) {
          var r = n;
          Object[r(413)](e, r(471), {
            value: !0
          }), e[r(410)] = void 0, e[r(410)] || (e.DevicesAuth = {});
        },
        480: function _(t, e) {
          var r,
              i,
              o = n;
          Object[o(413)](e, o(471), {
            value: !0
          }), e.DevicesLogs = void 0, (i = (r = e[o(412)] || (e.DevicesLogs = {}))[o(489)] || (r[o(489)] = {})).ERROR = o(418), i[o(467)] = o(377), i[o(401)] = "info", i.WARN = "warn", i[o(496)] = "none";
        },
        88: function _(t, e, r) {
          var i = n;
          Object.defineProperty(e, i(471), {
            value: !0
          }), e[i(387)] = void 0;
          var o,
              a = r(837),
              c = r(480);
          (o = e.Devices || (e[i(387)] = {}))[i(451)] = a[i(410)], o[i(457)] = c[i(412)];
        },
        695: function _(t, e, r) {
          var i = n,
              o = this && this.__createBinding || (Object[i(398)] ? function (t, n, e, r) {
            void 0 === r && (r = e), Object[i(413)](t, r, {
              enumerable: !0,
              get: function get() {
                return n[e];
              }
            });
          } : function (t, n, e, r) {
            void 0 === r && (r = e), t[r] = n[e];
          }),
              a = this && this[i(375)] || function (t, n) {
            var e = i;

            for (var r in t) {
              "default" === r || Object[e(386)][e(384)].call(n, r) || o(n, t, r);
            }
          };

          Object[i(413)](e, "__esModule", {
            value: !0
          }), a(r(190), e), a(r(518), e), a(r(345), e), a(r(439), e), a(r(836), e), a(r(88), e);
        },
        33: function _(t, e, r) {
          var i = n,
              o = this && this[i(346)] || (Object.create ? function (t, n, e, r) {
            void 0 === r && (r = e), Object[i(413)](t, r, {
              enumerable: !0,
              get: function get() {
                return n[e];
              }
            });
          } : function (t, n, e, r) {
            void 0 === r && (r = e), t[r] = n[e];
          }),
              a = this && this.__setModuleDefault || (Object.create ? function (t, n) {
            var e = i;
            Object[e(413)](t, e(414), {
              enumerable: !0,
              value: n
            });
          } : function (t, n) {
            t["default"] = n;
          }),
              c = this && this[i(336)] || function (t) {
            var n = i;
            if (t && t[n(471)]) return t;
            var e = {};
            if (null != t) for (var r in t) {
              n(414) !== r && Object[n(386)][n(384)][n(392)](t, r) && o(e, t, r);
            }
            return a(e, t), e;
          };

          Object[i(413)](e, i(471), {
            value: !0
          });
          var u,
              s,
              f,
              v = c(r(695)),
              l = c(r(922)),
              d = c(r(283));
          (s = u || (u = {}))[(f = i)(485)] = v, s[f(446)] = l, s[f(359)] = d, e[i(414)] = u;
        },
        986: function _(t, e) {
          var r,
              i = n;
          Object[i(413)](e, "__esModule", {
            value: !0
          }), e[i(470)] = void 0, (r = e[i(470)] || (e[i(470)] = {}))[i(404)] = "SSSP2", r[i(425)] = i(425), r[i(497)] = i(497), r[i(341)] = i(341);
        },
        283: function _(t, e, r) {
          var i,
              o = n,
              a = this && this[o(346)] || (Object[o(398)] ? function (t, n, e, r) {
            void 0 === r && (r = e), Object[o(413)](t, r, {
              enumerable: !0,
              get: function get() {
                return n[e];
              }
            });
          } : function (t, n, e, r) {
            void 0 === r && (r = e), t[r] = n[e];
          }),
              c = this && this[o(375)] || function (t, n) {
            var e = o;

            for (var r in t) {
              "default" === r || Object[e(386)][e(384)][e(392)](n, r) || a(n, t, r);
            }
          };

          Object[o(413)](e, o(471), {
            value: !0
          }), e[o(448)] = void 0, c(r(317), e), c(r(239), e), c(r(968), e), c(r(986), e), (i = e.WebsocketAction || (e.WebsocketAction = {})).SP = "sp", i.SETTINGS = "settings", i.HC = "hc", i[o(445)] = "clearrestart", i.REBOOT = o(512), i[o(461)] = "logs", i[o(405)] = "ping", i[o(335)] = "interact", i.INTERACT_START = "interact:start", i.TRANSITION = o(345);
        },
        968: function _(t, e) {
          var r,
              i = n;
          Object.defineProperty(e, i(471), {
            value: !0
          }), e[i(472)] = void 0, (r = e[i(472)] || (e[i(472)] = {}))[i(355)] = "message", r[i(357)] = i(394), r[i(433)] = "disconnect", r[i(502)] = "kick";
        },
        239: function _(t, e) {
          var r = n;
          Object[r(413)](e, r(471), {
            value: !0
          });
        },
        317: function _(t, e) {
          var r,
              i,
              o = n;
          Object[o(413)](e, o(471), {
            value: !0
          }), e[o(440)] = e[o(475)] = void 0, (i = e[o(475)] || (e[o(475)] = {}))[o(409)] = o(511), i.SLIDE_TOP = o(449), i[o(415)] = "slide-in-from-bottom", i.SLIDE_RIGHT = o(350), i[o(456)] = o(432), i[o(452)] = o(428), (r = e.TransitionOUT || (e[o(440)] = {})).SLIDE_LEFT = "slide-out-to-left", r[o(366)] = o(487), r[o(415)] = o(337), r.SLIDE_RIGHT = o(330), r[o(456)] = o(422), r.ZOOM = o(444);
        }
      },
          r = {};
      !function t(i) {
        var o = n,
            a = r[i];
        if (void 0 !== a) return a[o(434)];
        var c = r[i] = {
          exports: {}
        };
        return e[i].call(c.exports, c, c[o(434)], t), c[o(434)];
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