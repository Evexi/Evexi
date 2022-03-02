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

// Version: 2.4.0-alpha.8
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
        return i[t -= 266];
      })(t, r);
    }

    function e() {
      var t = ["event", "1072884qbbbdj", "STORAGE_EXISTS", "then", "ZOOM", "addEventListener", "140928ZvPuSe", "planType", "sleep", "slide-out-to-right", "value", "split", "Settings", "Websocket", "Logs", "wrapperNoListener error", "LOGS", "INTERACT_MESSAGE", "Endpoints", "stopping", "HTML", "wrapper", "interact.kick", "KICK", "__createBinding", "warn", "14106726fRDJfT", "LOG", "throw", "call", "ENV_VAR", "FADE", "7856ZpQoUP", "sent", "storage.get", "data", "Interact", "ERROR", "STORAGE_LIST", "defineProperty", "Pagination", "pop", "740721nlJWsq", "connect", "Active", "__awaiter", "schedule", "charCodeAt", "1148hRAUJo", "interact", "KIOSK_BARCODE", "slide-in-from-right", "__esModule", "env", "Online", "clearTimeout", "reboot", "STORAGE_GET", "24ujHACK", "wrapperNoListener", "apply", "iterator", "HealthCheck", "__assign", "asyncForEach", "INTERACT_START", "default", "STORAGE_DOWNLOAD", "ping", "assign", "landscape", "Offline", "KIOSK", "race", "__importStar", "SLIDE_LEFT", "byteCount", "Code", "14060020vLxvoE", "INTERACT_CREATE", "NONE", "info", "KIOSK_PRINTER", "SLIDE_BOTTOM", "disconnect", "STOPPING", "fade-in", "ops", "PROXY", "CONNECT", "keys", "INTERACT", "playlist", "Common", "517942hIChhb", "all", "proxy", "INTERACT_DESTROY", "SCHEDULE", "Rotation", "events", "Platform", "SSSP2", "slide-out-to-left", "Generator is already executing.", "forEach", "SLIDE_RIGHT", "addSelfDestructingEventListener", "function", "Devices", "LifeCycleEvent", "prototype", "Clients", "STORAGE_DELETE", "storage.exists", "130rKjXSa", "settings", "label", "SETTINGS", "hasOwnProperty", "request", "__generator", "return", "interact.create", "done", "TIZEN", "response", "substring", "__importDefault", "toString", "Level", "stringToHex", "action", "Actions", "CLEAR_AND_RESTART", "EnvironmentType", "substr", "UserStatus", "playing", "slide-out-to-top", "InteractiveEvent", "Timed out in ", "storage.clear", "log", "portrait", "length", "PLAYLIST", "promiseTimeout", "create", "STORAGE_PUT", "Auth", "Evexi", "setTimeout", "onKick", "MESSAGE", "exports", "fade-out", "storage.download", "trys", "LANDSCAPE", "client", "TransitionIn", "removeEventListener", "tizen", "DISCONNECT", "INFO", "WebsocketAction", "Players", "message", "kiosk.printer", "next", "onMessage", "ClientSettings", "STORAGE_CLEAR", "__setModuleDefault", "interact.start", "stringify", "slide-in-from-top", "zoom-in", "SLIDE_TOP", "kiosk.barcode", "push", "ACTIVE", "Status", "onDisconnect", "1B69", "onConnect", "logs", "storage.put", "REBOOT", "sendLogFormatter", "PING", "parse", "User", "ms."];
      return (e = function e() {
        return t;
      })();
    }

    (function (t, r) {
      for (var i = n, o = e();;) {
        try {
          if (931855 === -parseInt(i(302)) / 1 + -parseInt(i(395)) / 2 + parseInt(i(343)) / 3 * (-parseInt(i(359)) / 4) + -parseInt(i(416)) / 5 * (-parseInt(i(307)) / 6) + parseInt(i(349)) / 7 * (parseInt(i(333)) / 8) + parseInt(i(327)) / 9 + parseInt(i(379)) / 10) break;
          o.push(o.shift());
        } catch (a) {
          o.push(o.shift());
        }
      }
    })(), function () {
      "use strict";

      var e = {
        205: function _(t, e, r) {
          var i = n,
              o = this && this[i(325)] || (Object.create ? function (t, n, e, r) {
            void 0 === r && (r = e), Object[i(340)](t, r, {
              enumerable: !0,
              get: function get() {
                return n[e];
              }
            });
          } : function (t, n, e, r) {
            void 0 === r && (r = e), t[r] = n[e];
          }),
              a = this && this[i(280)] || (Object[i(449)] ? function (t, n) {
            var e = i;
            Object[e(340)](t, e(367), {
              enumerable: !0,
              value: n
            });
          } : function (t, n) {
            t[i(367)] = n;
          }),
              u = this && this.__importStar || function (t) {
            var n = i;
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t) for (var r in t) {
              "default" !== r && Object[n(412)].hasOwnProperty[n(330)](t, r) && o(e, t, r);
            }
            return a(e, t), e;
          };

          Object[i(340)](e, "__esModule", {
            value: !0
          }), e[i(341)] = void 0, e.Pagination = u(r(425));
        },
        425: function _(t, e) {
          var r = n;
          Object[r(340)](e, r(353), {
            value: !0
          });
        },
        565: function _(t, n) {
          Object.defineProperty(n, "__esModule", {
            value: !0
          });
        },
        178: function _(t, e) {
          Object[n(340)](e, "__esModule", {
            value: !0
          });
        },
        630: function _(t, e) {
          var r = n;
          Object[r(340)](e, r(353), {
            value: !0
          });
        },
        695: function _(t, e) {
          var r,
              i,
              o,
              a,
              u = n;
          Object.defineProperty(e, u(353), {
            value: !0
          }), e[u(308)] = e[u(289)] = e[u(402)] = e.Rotation = void 0, (a = e[u(400)] || (e.Rotation = {}))[u(460)] = u(371), a.PORTRAIT = u(445), (o = e[u(402)] || (e[u(402)] = {}))[u(403)] = u(403), o[u(321)] = u(321), o.TIZEN = u(426), (i = e[u(289)] || (e[u(289)] = {})).OFFLINE = u(372), i.ONLINE = u(355), (r = e[u(308)] || (e[u(308)] = {}))[u(447)] = u(393), r[u(399)] = u(347);
        },
        666: function _(t, e) {
          var r,
              i = n;
          Object[i(340)](e, i(353), {
            value: !0
          }), e[i(438)] = void 0, (r = e.UserStatus || (e[i(438)] = {}))[i(288)] = i(345), r.INACTIVE = "Inactive";
        },
        326: function _(t, e, r) {
          var i = n,
              o = this && this[i(325)] || (Object[i(449)] ? function (t, n, e, r) {
            void 0 === r && (r = e), Object[i(340)](t, r, {
              enumerable: !0,
              get: function get() {
                return n[e];
              }
            });
          } : function (t, n, e, r) {
            void 0 === r && (r = e), t[r] = n[e];
          }),
              a = this && this[i(280)] || (Object[i(449)] ? function (t, n) {
            var e = i;
            Object[e(340)](t, e(367), {
              enumerable: !0,
              value: n
            });
          } : function (t, n) {
            t[i(367)] = n;
          }),
              u = this && this.__importStar || function (t) {
            var n = i;
            if (t && t[n(353)]) return t;
            var e = {};
            if (null != t) for (var r in t) {
              n(367) !== r && Object[n(412)].hasOwnProperty[n(330)](t, r) && o(e, t, r);
            }
            return a(e, t), e;
          };

          Object[i(340)](e, "__esModule", {
            value: !0
          }), e.Code = void 0;
          var c = u(r(12));
          e[i(378)] = c;
        },
        12: function _(t, e) {
          var r = n;
          Object.defineProperty(e, r(353), {
            value: !0
          });
        },
        741: function _(t, e) {
          var r,
              i = n;
          Object.defineProperty(e, i(353), {
            value: !0
          }), e[i(431)] = void 0, (r = e.Level || (e[i(431)] = {}))[i(338)] = "error", r[i(328)] = "log", r[i(271)] = i(382), r.WARN = i(326), r[i(381)] = "none";
        },
        738: function _(t, e, r) {
          var i = n,
              o = this && this.__createBinding || (Object[i(449)] ? function (t, n, e, r) {
            void 0 === r && (r = e), Object[i(340)](t, r, {
              enumerable: !0,
              get: function get() {
                return n[e];
              }
            });
          } : function (t, n, e, r) {
            void 0 === r && (r = e), t[r] = n[e];
          }),
              a = this && this.__setModuleDefault || (Object[i(449)] ? function (t, n) {
            Object.defineProperty(t, "default", {
              enumerable: !0,
              value: n
            });
          } : function (t, n) {
            t[i(367)] = n;
          }),
              u = this && this.__importStar || function (t) {
            if (t && t[i(353)]) return t;
            var n = {};
            if (null != t) for (var e in t) {
              "default" !== e && Object.prototype.hasOwnProperty.call(t, e) && o(n, t, e);
            }
            return a(n, t), n;
          };

          Object[i(340)](e, i(353), {
            value: !0
          }), e[i(315)] = e[i(451)] = void 0, e[i(451)] = u(r(326)), e[i(315)] = u(r(741));
        },
        75: function _(t, e, r) {
          var i = n,
              o = this && this.__createBinding || (Object[i(449)] ? function (t, n, e, r) {
            void 0 === r && (r = e), Object[i(340)](t, r, {
              enumerable: !0,
              get: function get() {
                return n[e];
              }
            });
          } : function (t, n, e, r) {
            void 0 === r && (r = e), t[r] = n[e];
          }),
              a = this && this[i(280)] || (Object[i(449)] ? function (t, n) {
            var e = i;
            Object[e(340)](t, e(367), {
              enumerable: !0,
              value: n
            });
          } : function (t, n) {
            t["default"] = n;
          }),
              u = this && this.__importStar || function (t) {
            var n = i;
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t) for (var r in t) {
              n(367) !== r && Object[n(412)].hasOwnProperty[n(330)](t, r) && o(e, t, r);
            }
            return a(e, t), e;
          };

          Object[i(340)](e, i(353), {
            value: !0
          }), e[i(410)] = e[i(299)] = e.Players = e[i(278)] = e[i(413)] = e[i(451)] = void 0, e[i(451)] = u(r(565)), e[i(413)] = u(r(630)), e[i(278)] = u(r(178)), e[i(273)] = u(r(695)), e[i(299)] = u(r(666)), e[i(410)] = u(r(738));
        },
        722: function _(t, e, r) {
          var i = n,
              o = this && this.__createBinding || (Object[i(449)] ? function (t, n, e, r) {
            void 0 === r && (r = e), Object.defineProperty(t, r, {
              enumerable: !0,
              get: function get() {
                return n[e];
              }
            });
          } : function (t, n, e, r) {
            void 0 === r && (r = e), t[r] = n[e];
          }),
              a = this && this[i(280)] || (Object.create ? function (t, n) {
            var e = i;
            Object[e(340)](t, e(367), {
              enumerable: !0,
              value: n
            });
          } : function (t, n) {
            t[i(367)] = n;
          }),
              u = this && this[i(375)] || function (t) {
            var n = i;
            if (t && t[n(353)]) return t;
            var e = {};
            if (null != t) for (var r in t) {
              n(367) !== r && Object[n(412)][n(420)][n(330)](t, r) && o(e, t, r);
            }
            return a(e, t), e;
          };

          Object.defineProperty(e, i(353), {
            value: !0
          }), e.Websocket = e.Common = e[i(319)] = void 0, e[i(319)] = u(r(75)), e[i(394)] = u(r(205)), e[i(314)] = u(r(391));
        },
        517: function _(t, e) {
          var r,
              i = n;
          Object[i(340)](e, i(353), {
            value: !0
          }), e[i(436)] = void 0, (r = e[i(436)] || (e[i(436)] = {})).SSSP2 = i(403), r[i(321)] = "HTML", r[i(426)] = i(426), r[i(373)] = "KIOSK";
        },
        391: function _(t, e, r) {
          var i,
              o = n,
              a = this && this.__createBinding || (Object[o(449)] ? function (t, n, e, r) {
            void 0 === r && (r = e), Object[o(340)](t, r, {
              enumerable: !0,
              get: function get() {
                return n[e];
              }
            });
          } : function (t, n, e, r) {
            void 0 === r && (r = e), t[r] = n[e];
          }),
              u = this && this[o(280)] || (Object.create ? function (t, n) {
            var e = o;
            Object[e(340)](t, e(367), {
              enumerable: !0,
              value: n
            });
          } : function (t, n) {
            t["default"] = n;
          }),
              c = this && this[o(375)] || function (t) {
            var n = o;
            if (t && t[n(353)]) return t;
            var e = {};
            if (null != t) for (var r in t) {
              "default" !== r && Object[n(412)][n(420)][n(330)](t, r) && a(e, t, r);
            }
            return u(e, t), e;
          };

          Object[o(340)](e, o(353), {
            value: !0
          }), e[o(272)] = e[o(363)] = e[o(337)] = e[o(313)] = e.Sp = void 0, e.Sp = c(r(793)), e[o(313)] = c(r(118)), e[o(337)] = c(r(484)), e[o(363)] = c(r(517)), (i = e.WebsocketAction || (e[o(272)] = {})).SP = "sp", i[o(419)] = o(417), i.HC = "hc", i[o(435)] = "clearrestart", i[o(295)] = o(357), i[o(317)] = o(293), i[o(297)] = o(369), i[o(392)] = o(350), i[o(366)] = "interact:start", i.TRANSITION = "transition";
        },
        484: function _(t, e) {
          var r,
              i = n;
          Object[i(340)](e, i(353), {
            value: !0
          }), e.InteractiveEvent = void 0, (r = e[i(441)] || (e[i(441)] = {}))[i(455)] = i(274), r[i(390)] = i(344), r[i(270)] = i(385), r[i(324)] = "kick";
        },
        118: function _(t, e) {
          var r = n;
          Object[r(340)](e, r(353), {
            value: !0
          });
        },
        793: function _(t, e) {
          var r,
              i,
              o = n;
          Object[o(340)](e, "__esModule", {
            value: !0
          }), e.TransitionOUT = e[o(267)] = void 0, (i = e.TransitionIn || (e.TransitionIn = {}))[o(376)] = "slide-in-from-left", i[o(285)] = o(283), i[o(384)] = "slide-in-from-bottom", i.SLIDE_RIGHT = o(352), i[o(332)] = o(387), i[o(305)] = o(284), (r = e.TransitionOUT || (e.TransitionOUT = {}))[o(376)] = o(404), r[o(285)] = o(440), r.SLIDE_BOTTOM = "slide-out-to-bottom", r[o(407)] = o(310), r[o(332)] = o(457), r[o(305)] = "zoom-out";
        },
        846: function _(t, e, r) {
          var i = n,
              o = this && this[i(429)] || function (t) {
            return t && t.__esModule ? t : {
              "default": t
            };
          };

          Object[i(340)](e, i(353), {
            value: !0
          });
          var a = r(430),
              u = o(r(895)),
              c = r(9),
              s = o(r(729)),
              f = o(r(13)),
              v = o(r(956)),
              l = o(r(269));
          window[i(452)] = new function () {
            var t = i;
            this.fs = u[t(367)][t(396)], this.interactive = s["default"][t(396)], this[t(269)] = f[t(367)][t(396)], this[t(397)] = v[t(367)][t(396)][t(421)], this[t(354)] = l[t(367)][t(396)][t(354)], this.log = function (n) {
              var e = t;
              return (0, c.wrapperNoListener)({
                action: a[e(434)][e(328)],
                data: n
              });
            }, this[t(382)] = function () {
              var n = t;
              return (0, c[n(322)])({
                action: a[n(434)][n(271)]
              });
            };
          }();
        },
        269: function _(t, e, r) {
          var i = n;
          Object[i(340)](e, i(353), {
            value: !0
          });
          var o = r(430),
              a = r(9);
          e[i(367)] = new function () {
            this.all = {
              env: function env(t) {
                var e = n;
                return (0, a.wrapper)({
                  action: o[e(434)][e(331)],
                  name: t
                }, {
                  name: t
                });
              }
            };
          }();
        },
        895: function _(t, e, r) {
          var i = n;
          Object[i(340)](e, i(353), {
            value: !0
          });
          var o = r(430),
              a = r(9);
          e[i(367)] = new function () {
            this.all = {
              get: function get(t) {
                var e = n;
                return (0, a.wrapper)({
                  action: o[e(434)][e(358)],
                  name: t
                }, {
                  name: t
                });
              },
              put: function put(t, e) {
                var r = n;
                return (0, a[r(322)])({
                  action: o[r(434)][r(450)],
                  name: t,
                  data: e
                }, {
                  name: t
                });
              },
              del: function del(t) {
                var e = n;
                return (0, a[e(322)])({
                  action: o[e(434)][e(414)],
                  name: t
                }, {
                  name: t
                });
              },
              list: function list() {
                var t = n;
                return (0, a.wrapper)({
                  action: o[t(434)][t(339)]
                });
              },
              clear: function clear() {
                var t = n;
                return (0, a[t(322)])({
                  action: o[t(434)][t(279)]
                });
              },
              download: function download(t, e) {
                var r = n;
                return (0, a.wrapper)({
                  action: o[r(434)][r(368)],
                  url: t,
                  name: e
                }, {
                  name: e
                });
              },
              exists: function exists(t) {
                var e = n;
                return (0, a.wrapper)({
                  action: o[e(434)][e(303)],
                  name: t
                }, {
                  name: t
                });
              }
            };
          }();
        },
        9: function _(e, r, i) {
          var o = n,
              a = this && this[o(364)] || function () {
            var t = o;
            return (a = Object[t(370)] || function (n) {
              for (var e, r = t, i = 1, o = arguments[r(446)]; i < o; i++) {
                for (var a in e = arguments[i]) {
                  Object.prototype[r(420)][r(330)](e, a) && (n[a] = e[a]);
                }
              }

              return n;
            })[t(361)](this, arguments);
          },
              u = this && this[o(346)] || function (t, e, r, i) {
            return new (r || (r = Promise))(function (o, a) {
              var u = n;

              function c(t) {
                var e = n;

                try {
                  f(i[e(276)](t));
                } catch (r) {
                  a(r);
                }
              }

              function s(t) {
                var e = n;

                try {
                  f(i[e(329)](t));
                } catch (r) {
                  a(r);
                }
              }

              function f(t) {
                var e,
                    i = n;
                t[i(425)] ? o(t[i(311)]) : (e = t[i(311)], e instanceof r ? e : new r(function (t) {
                  t(e);
                })).then(c, s);
              }

              f((i = i[u(361)](t, e || []))[u(276)]());
            });
          },
              c = this && this[o(422)] || function (e, r) {
            var i,
                a,
                u,
                c,
                s = o,
                f = {
              label: 0,
              sent: function sent() {
                if (1 & u[0]) throw u[1];
                return u[1];
              },
              trys: [],
              ops: []
            };
            return c = {
              next: v(0),
              "throw": v(1),
              "return": v(2)
            }, s(409) == ("undefined" == typeof Symbol ? "undefined" : t(Symbol)) && (c[Symbol[s(362)]] = function () {
              return this;
            }), c;

            function v(t) {
              return function (o) {
                return function (t) {
                  var o = n;
                  if (i) throw new TypeError(o(405));

                  for (; f;) {
                    try {
                      if (i = 1, a && (u = 2 & t[0] ? a[o(423)] : t[0] ? a["throw"] || ((u = a[o(423)]) && u[o(330)](a), 0) : a[o(276)]) && !(u = u[o(330)](a, t[1]))[o(425)]) return u;

                      switch (a = 0, u && (t = [2 & t[0], u.value]), t[0]) {
                        case 0:
                        case 1:
                          u = t;
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
                          t = f[o(388)][o(342)](), f[o(459)].pop();
                          continue;

                        default:
                          if (!((u = (u = f[o(459)])[o(446)] > 0 && u[u[o(446)] - 1]) || 6 !== t[0] && 2 !== t[0])) {
                            f = 0;
                            continue;
                          }

                          if (3 === t[0] && (!u || t[1] > u[0] && t[1] < u[3])) {
                            f[o(418)] = t[1];
                            break;
                          }

                          if (6 === t[0] && f.label < u[1]) {
                            f[o(418)] = u[1], u = t;
                            break;
                          }

                          if (u && f.label < u[2]) {
                            f[o(418)] = u[2], f[o(388)][o(287)](t);
                            break;
                          }

                          u[2] && f[o(388)][o(342)](), f[o(459)].pop();
                          continue;
                      }

                      t = r.call(e, f);
                    } catch (c) {
                      t = [6, c], a = 0;
                    } finally {
                      i = u = 0;
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

          Object[o(340)](r, o(353), {
            value: !0
          }), r[o(322)] = r.wrapperNoListener = void 0;
          var s = i(519);
          r[o(360)] = function (t) {
            var n = o;

            try {
              window.parent.postMessage(JSON[n(282)](a({}, t)), "*");
            } catch (e) {
              throw new Error(n(316));
            }
          }, r[o(322)] = function (t, e, r) {
            return u(this, void 0, void 0, function () {
              var i;
              return c(this, function (o) {
                var u = n;

                switch (o[u(418)]) {
                  case 0:
                    return o.trys.push([0, 2,, 3]), [4, (0, s[u(448)])(r || 5e3, new Promise(function (r) {
                      var i,
                          o,
                          c,
                          f = u;
                      i = function i(t) {
                        r(t[n(427)]);
                      }, o = a({
                        action: t[f(433)]
                      }, e), c = function t(n) {
                        var e = f,
                            r = JSON[e(298)](n[e(336)]);
                        if (r) try {
                          (0, s[e(391)])(o)[e(406)](function (t) {
                            if (o[t] !== r[t]) throw new Error("");
                          }), window[e(268)](e(274), t, !0), i(r);
                        } catch (a) {}
                      }, window[f(306)](f(274), c, !0), window.parent.postMessage(JSON[f(282)](a({}, t)), "*");
                    }))];

                  case 1:
                    return [2, o[u(334)]()];

                  case 2:
                    throw i = o[u(334)](), new Error(i);

                  case 3:
                    return [2];
                }
              });
            });
          };
        },
        729: function _(t, e, r) {
          var i = n,
              o = this && this[i(364)] || function () {
            var t = i;
            return (o = Object[t(370)] || function (n) {
              for (var e, r = t, i = 1, o = arguments[r(446)]; i < o; i++) {
                for (var a in e = arguments[i]) {
                  Object[r(412)][r(420)][r(330)](e, a) && (n[a] = e[a]);
                }
              }

              return n;
            })[t(361)](this, arguments);
          },
              a = this && this[i(325)] || (Object[i(449)] ? function (t, n, e, r) {
            void 0 === r && (r = e), Object[i(340)](t, r, {
              enumerable: !0,
              get: function get() {
                return n[e];
              }
            });
          } : function (t, n, e, r) {
            void 0 === r && (r = e), t[r] = n[e];
          }),
              u = this && this[i(280)] || (Object[i(449)] ? function (t, n) {
            Object[i(340)](t, "default", {
              enumerable: !0,
              value: n
            });
          } : function (t, n) {
            t[i(367)] = n;
          }),
              c = this && this[i(375)] || function (t) {
            var n = i;
            if (t && t[n(353)]) return t;
            var e = {};
            if (null != t) for (var r in t) {
              n(367) !== r && Object[n(412)][n(420)][n(330)](t, r) && a(e, t, r);
            }
            return u(e, t), e;
          };

          Object[i(340)](e, "__esModule", {
            value: !0
          });
          var s = r(430),
              f = r(9),
              v = c(r(722));
          e[i(367)] = new function () {
            var t = i,
                n = this;
            this[t(396)] = {
              create: function create(n, e, r, i) {
                var a = t;
                return (0, f[a(322)])(o(o(o({
                  action: s.Actions[a(380)],
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
                return (0, f.wrapperNoListener)({
                  action: s[n(434)][n(366)]
                });
              },
              destroy: function destroy() {
                var e = t;
                n[e(401)] = {}, (0, f.wrapperNoListener)({
                  action: s[e(434)][e(398)]
                });
              },
              message: function message(n, e) {
                var r = t;
                return (0, f.wrapperNoListener)(o({
                  action: s[r(434)][r(318)],
                  data: n
                }, e && {
                  client: e
                }));
              },
              kick: function kick(n) {
                var e = t;
                return (0, f[e(360)])({
                  action: s[e(434)].INTERACT_KICK,
                  client: n
                });
              },
              onMessage: function onMessage(t) {
                n.events.onMessage = t;
              },
              onConnect: function onConnect(e) {
                var r = t;
                n[r(401)][r(292)] = e;
              },
              onDisconnect: function onDisconnect(e) {
                var r = t;
                n[r(401)][r(290)] = e;
              },
              onKick: function onKick(e) {
                var r = t;
                n[r(401)][r(454)] = e;
              }
            }, this[t(401)] = {}, window[t(306)](t(274), function (e) {
              var r = t,
                  i = JSON.parse(e[r(336)]);
              i[r(433)] === s[r(434)][r(318)] && (i[r(301)] === v[r(314)][r(337)].InteractiveEvent[r(455)] && n[r(401)][r(277)] && i.data && n[r(401)][r(277)](i[r(336)], i[r(266)]), i[r(301)] === v[r(314)].Interact[r(441)][r(390)] && n[r(401)][r(292)] && n[r(401)][r(292)](i[r(266)]), i[r(301)] === v.Websocket.Interact[r(441)].DISCONNECT && n[r(401)].onDisconnect && n[r(401)][r(290)](i[r(266)]), i[r(301)] === v.Websocket[r(337)][r(441)].KICK && n[r(401)][r(454)] && n[r(401)].onKick(i[r(266)]));
            });
          }();
        },
        956: function _(t, e, r) {
          var i = n;
          Object[i(340)](e, "__esModule", {
            value: !0
          });
          var o = r(430),
              a = r(9);
          e[i(367)] = new function () {
            this.all = {
              request: function request(t, e) {
                var r = n;
                return (0, a[r(322)])({
                  action: o.Actions[r(389)],
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
          Object[i(340)](e, "__esModule", {
            value: !0
          });
          var o = r(430),
              a = r(9);
          e["default"] = new function () {
            var t = i;
            this[t(396)] = {
              barcode: function barcode() {
                var n = t;
                return (0, a.wrapper)({
                  action: o[n(434)].KIOSK_BARCODE
                }, void 0, 3e4);
              },
              printer: function printer(n, e) {
                var r = t;
                return (0, a[r(322)])({
                  action: o[r(434)][r(383)],
                  data: n,
                  printerSettings: e
                });
              }
            };
          }();
        },
        519: function _(e, r) {
          var i = n,
              o = this && this[i(346)] || function (t, e, r, i) {
            return new (r || (r = Promise))(function (o, a) {
              var u = n;

              function c(t) {
                try {
                  f(i.next(t));
                } catch (n) {
                  a(n);
                }
              }

              function s(t) {
                var e = n;

                try {
                  f(i[e(329)](t));
                } catch (r) {
                  a(r);
                }
              }

              function f(t) {
                var e,
                    i = n;
                t[i(425)] ? o(t.value) : (e = t[i(311)], e instanceof r ? e : new r(function (t) {
                  t(e);
                }))[i(304)](c, s);
              }

              f((i = i[u(361)](t, e || []))[u(276)]());
            });
          },
              a = this && this[i(422)] || function (e, r) {
            var o,
                a,
                u,
                c,
                s = i,
                f = {
              label: 0,
              sent: function sent() {
                if (1 & u[0]) throw u[1];
                return u[1];
              },
              trys: [],
              ops: []
            };
            return c = {
              next: v(0),
              "throw": v(1),
              "return": v(2)
            }, s(409) == ("undefined" == typeof Symbol ? "undefined" : t(Symbol)) && (c[Symbol[s(362)]] = function () {
              return this;
            }), c;

            function v(t) {
              return function (i) {
                return function (t) {
                  var i = n;
                  if (o) throw new TypeError(i(405));

                  for (; f;) {
                    try {
                      if (o = 1, a && (u = 2 & t[0] ? a[i(423)] : t[0] ? a[i(329)] || ((u = a["return"]) && u[i(330)](a), 0) : a[i(276)]) && !(u = u[i(330)](a, t[1])).done) return u;

                      switch (a = 0, u && (t = [2 & t[0], u.value]), t[0]) {
                        case 0:
                        case 1:
                          u = t;
                          break;

                        case 4:
                          return f.label++, {
                            value: t[1],
                            done: !1
                          };

                        case 5:
                          f[i(418)]++, a = t[1], t = [0];
                          continue;

                        case 7:
                          t = f[i(388)].pop(), f[i(459)][i(342)]();
                          continue;

                        default:
                          if (!((u = (u = f[i(459)])[i(446)] > 0 && u[u.length - 1]) || 6 !== t[0] && 2 !== t[0])) {
                            f = 0;
                            continue;
                          }

                          if (3 === t[0] && (!u || t[1] > u[0] && t[1] < u[3])) {
                            f[i(418)] = t[1];
                            break;
                          }

                          if (6 === t[0] && f[i(418)] < u[1]) {
                            f[i(418)] = u[1], u = t;
                            break;
                          }

                          if (u && f[i(418)] < u[2]) {
                            f[i(418)] = u[2], f[i(388)][i(287)](t);
                            break;
                          }

                          u[2] && f[i(388)][i(342)](), f[i(459)].pop();
                          continue;
                      }

                      t = r[i(330)](e, f);
                    } catch (c) {
                      t = [6, c], a = 0;
                    } finally {
                      o = u = 0;
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

          Object[i(340)](r, i(353), {
            value: !0
          }), r[i(432)] = r[i(309)] = r[i(391)] = r[i(408)] = r[i(365)] = r[i(448)] = r[i(296)] = r.byteCount = void 0, r[i(377)] = function (t) {
            var n = i;
            return encodeURI(t)[n(312)](/%..|./)[n(446)] - 1;
          }, r[i(296)] = function (t) {
            var n = i,
                e = t;
            return t ? (" " === e.substr(e[n(446)] - 1) && (e = e[n(428)](0, e[n(446)] - 1)), "\n" === e[n(437)](e.length - 1) && (e = e[n(428)](0, e[n(446)] - 1)), "," !== e.substr(e[n(446)] - 1) && "," !== e[n(437)](e[n(446)] - 2) || (e = e[n(428)](0, e[n(446)] - 1)), e = "[" + e + "]") : "[]";
          }, r[i(448)] = function (t, e) {
            var r = i,
                o = new Promise(function (e, r) {
              var i = n,
                  o = window[i(453)](function () {
                var n = i;
                window[n(356)](o), r(n(442) + t + n(300));
              }, t);
            });
            return Promise[r(374)]([e, o]);
          }, r.asyncForEach = function (t, e) {
            return o(this, void 0, void 0, function () {
              var r;
              return a(this, function (i) {
                var o = n;

                switch (i[o(418)]) {
                  case 0:
                    r = 0, i[o(418)] = 1;

                  case 1:
                    return r < t[o(446)] ? [4, e(t[r], r)] : [3, 4];

                  case 2:
                    i[o(334)](), i[o(418)] = 3;

                  case 3:
                    return r++, [3, 1];

                  case 4:
                    return [2];
                }
              });
            });
          }, r[i(408)] = function (t, n, e) {
            t[i(306)](n, function r(i) {
              e(i), t.removeEventListener(n, r, !0);
            }, !0);
          }, r[i(391)] = function (t) {
            return Object[i(391)](t);
          }, r.sleep = function (t) {
            return new Promise(function (e) {
              window[n(453)](function () {
                return e();
              }, t);
            });
          }, r[i(432)] = function (t) {
            for (var n, e = i, r = t[e(446)], o = "", a = 0; a < r; a += 1) {
              "a" == (n = t[e(348)](a)[e(430)](16)) && (n = "0A"), "a3" == n && (n = "9c"), o += n[e(430)](), a == r - 1 && (o += e(291));
            }

            return o;
          };
        },
        430: function _(t, e) {
          var r,
              i,
              o = n;
          Object[o(340)](e, o(353), {
            value: !0
          }), e[o(411)] = e[o(434)] = void 0, (i = e.Actions || (e[o(434)] = {}))[o(271)] = o(382), i[o(328)] = o(444), i[o(358)] = o(335), i[o(450)] = o(294), i[o(414)] = "storage.delete", i.STORAGE_LIST = "storage.list", i.STORAGE_CLEAR = o(443), i[o(368)] = o(458), i[o(303)] = o(415), i[o(380)] = o(424), i[o(366)] = o(281), i[o(398)] = "interact.destroy", i[o(318)] = "interact.message", i.INTERACT_KICK = o(323), i[o(351)] = o(286), i[o(383)] = o(275), i.PROXY = "proxy", i.ENV_VAR = "envVar", (r = e[o(411)] || (e[o(411)] = {})).PLAYING = o(439), r[o(386)] = o(320);
        }
      },
          r = {};
      !function t(i) {
        var o = n,
            a = r[i];
        if (void 0 !== a) return a[o(456)];
        var u = r[i] = {
          exports: {}
        };
        return e[i].call(u.exports, u, u.exports, t), u[o(456)];
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