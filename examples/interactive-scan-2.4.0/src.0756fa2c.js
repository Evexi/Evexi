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

// Version: 2.4.0-alpha.3
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
        return i[t -= 487];
      })(t, r);
    }

    function e() {
      var t = ["removeEventListener", "action", "3438qRqcyT", "storage.get", "INTERACT_MESSAGE", "Actions", "STORAGE_DELETE", "message", "KIOSK", "slide-out-to-bottom", "tizen", "STORAGE_GET", "next", "__createBinding", "create", "throw", "Evexi", "push", "warn", "STORAGE_CLEAR", "parent", "landscape", "1395910lAnvuW", "InteractiveEvent", "PROXY", "UserStatus", "__esModule", "48zdazTS", "Generator is already executing.", "STOPPING", "addSelfDestructingEventListener", "zoom-in", "PORTRAIT", "reboot", "ERROR", "Common", "setTimeout", "slide-out-to-left", "sent", "Devices", "disconnect", "kick", "portrait", "Auth", "KIOSK_BARCODE", "Status", "length", "INTERACT_CREATE", "Websocket", "split", "1457529UePeGd", "storage.exists", "STORAGE_EXISTS", "storage.put", "__importDefault", "stringToHex", "events", "ping", "race", "sendLogFormatter", "Endpoints", "iterator", "NONE", "PING", "log", "4357088hGkAug", "fade-in", "substr", "Platform", "parse", "done", "DevicesLogs", "DevicesAuth", "__exportStar", "kiosk.printer", "call", "slide-in-from-bottom", "promiseTimeout", "Rotation", "label", "interact:start", "TransitionIn", "toString", "Players", "stringify", "zoom-out", "FADE", "MESSAGE", "wrapper", "onKick", "addEventListener", "CLEAR_AND_RESTART", "WARN", "envVar", "fade-out", "value", "SLIDE_LEFT", "LOGS", "error", "onDisconnect", "SETTINGS", "defineProperty", "function", "return", "REBOOT", "CONNECT", "SLIDE_RIGHT", "then", "Active", "prototype", "event", "1403966ynRPXh", "transition", "apply", "onMessage", "assign", "19680VPCYEI", "interact", "INACTIVE", "sleep", "interact.create", "INTERACT_KICK", "info", "__setModuleDefault", "SSSP2", "Timed out in ", "SLIDE_BOTTOM", "Level", "interact.start", "__assign", "TransitionOUT", "clearrestart", "SLIDE_TOP", "DISCONNECT", "HTML", "trys", "811216QkgfDm", "18WEZJiF", "STORAGE_DOWNLOAD", "proxy", "slide-out-to-right", "planType", "1614098tCcJyi", "Logs", "byteCount", "schedule", "connect", "User", "Offline", "pop", "INTERACT_START", "wrapperNoListener", "ZOOM", "onConnect", "hasOwnProperty", "ENV_VAR", "interactive", "exports", "ONLINE", "settings", "TIZEN", "INTERACT_DESTROY", "KIOSK_PRINTER", "__generator", "all", "INFO", "Online", "playlist", "KICK", "PLAYING", "postMessage", "storage.list", "LifeCycleEvent", "none", "default", "slide-in-from-left", "WebsocketAction", "logs", "__awaiter", "env", "LOG", "asyncForEach", "STORAGE_PUT", "EnvironmentType", "interact.destroy", "STORAGE_LIST", "ops", "client", "data"];
      return (e = function e() {
        return t;
      })();
    }

    (function (t, r) {
      for (var i = n, o = e();;) {
        try {
          if (818658 === parseInt(i(566)) / 1 + parseInt(i(535)) / 2 + parseInt(i(663)) / 3 + -parseInt(i(489)) / 4 + -parseInt(i(635)) / 5 * (parseInt(i(561)) / 6) + parseInt(i(560)) / 7 * (parseInt(i(640)) / 8) + -parseInt(i(615)) / 9 * (parseInt(i(540)) / 10)) break;
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
              o = this && this[i(667)] || function (t) {
            return t && t[i(639)] ? t : {
              "default": t
            };
          };

          Object.defineProperty(e, i(639), {
            value: !0
          });
          var a = r(430),
              c = o(r(895)),
              u = r(9),
              s = o(r(729)),
              f = o(r(13)),
              v = o(r(956)),
              l = o(r(269));
          window[i(629)] = new function () {
            var t = i;
            this.fs = c["default"][t(588)], this[t(580)] = s[t(598)][t(588)], this[t(623)] = f[t(598)][t(588)], this[t(563)] = v["default"].all.request, this.env = l[t(598)].all[t(603)], this.log = function (n) {
              var e = t;
              return (0, u[e(575)])({
                action: a[e(618)][e(604)],
                data: n
              });
            }, this[t(546)] = function () {
              var n = t;
              return (0, u.wrapper)({
                action: a[n(618)][n(589)]
              });
            };
          }();
        },
        269: function _(t, e, r) {
          var i = n;
          Object[i(525)](e, i(639), {
            value: !0
          });
          var o = r(430),
              a = r(9);
          e[i(598)] = new function () {
            var t = i;
            this[t(588)] = {
              env: function env(n) {
                var e = t;
                return (0, a.wrapper)({
                  action: o.Actions[e(579)],
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
          Object[i(525)](e, i(639), {
            value: !0
          });
          var o = r(430),
              a = r(9);
          e[i(598)] = new function () {
            var t = i;
            this[t(588)] = {
              get: function get(n) {
                var e = t;
                return (0, a.wrapper)({
                  action: o[e(618)][e(624)],
                  name: n
                }, {
                  name: n
                });
              },
              put: function put(n, e) {
                var r = t;
                return (0, a[r(512)])({
                  action: o[r(618)][r(606)],
                  name: n,
                  data: e
                }, {
                  name: n
                });
              },
              del: function del(n) {
                var e = t;
                return (0, a.wrapper)({
                  action: o.Actions[e(619)],
                  name: n
                }, {
                  name: n
                });
              },
              list: function list() {
                var n = t;
                return (0, a.wrapper)({
                  action: o[n(618)][n(609)]
                });
              },
              clear: function clear() {
                var n = t;
                return (0, a.wrapper)({
                  action: o[n(618)][n(632)]
                });
              },
              download: function download(n, e) {
                var r = t;
                return (0, a[r(512)])({
                  action: o.Actions[r(562)],
                  url: n,
                  name: e
                }, {
                  name: e
                });
              },
              exists: function exists(n) {
                var e = t;
                return (0, a[e(512)])({
                  action: o[e(618)][e(665)],
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
              a = this && this[o(553)] || function () {
            var t = o;
            return (a = Object[t(539)] || function (n) {
              for (var e, r = t, i = 1, o = arguments[r(659)]; i < o; i++) {
                for (var a in e = arguments[i]) {
                  Object[r(533)][r(578)][r(499)](e, a) && (n[a] = e[a]);
                }
              }

              return n;
            }).apply(this, arguments);
          },
              c = this && this.__awaiter || function (t, e, r, i) {
            return new (r || (r = Promise))(function (o, a) {
              var c = n;

              function u(t) {
                var e = n;

                try {
                  f(i[e(625)](t));
                } catch (r) {
                  a(r);
                }
              }

              function s(t) {
                var e = n;

                try {
                  f(i[e(628)](t));
                } catch (r) {
                  a(r);
                }
              }

              function f(t) {
                var e,
                    i = n;
                t[i(494)] ? o(t[i(519)]) : (e = t.value, e instanceof r ? e : new r(function (t) {
                  t(e);
                }))[i(531)](u, s);
              }

              f((i = i.apply(t, e || []))[c(625)]());
            });
          },
              u = this && this[o(587)] || function (e, r) {
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
            }, s(526) == ("undefined" == typeof Symbol ? "undefined" : t(Symbol)) && (u[Symbol[s(674)]] = function () {
              return this;
            }), u;

            function v(t) {
              return function (o) {
                return function (t) {
                  var o = n;
                  if (i) throw new TypeError(o(641));

                  for (; f;) {
                    try {
                      if (i = 1, a && (c = 2 & t[0] ? a["return"] : t[0] ? a[o(628)] || ((c = a["return"]) && c[o(499)](a), 0) : a[o(625)]) && !(c = c[o(499)](a, t[1]))[o(494)]) return c;

                      switch (a = 0, c && (t = [2 & t[0], c.value]), t[0]) {
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
                          f[o(503)]++, a = t[1], t = [0];
                          continue;

                        case 7:
                          t = f.ops.pop(), f[o(559)][o(573)]();
                          continue;

                        default:
                          if (!((c = (c = f[o(559)])[o(659)] > 0 && c[c.length - 1]) || 6 !== t[0] && 2 !== t[0])) {
                            f = 0;
                            continue;
                          }

                          if (3 === t[0] && (!c || t[1] > c[0] && t[1] < c[3])) {
                            f[o(503)] = t[1];
                            break;
                          }

                          if (6 === t[0] && f[o(503)] < c[1]) {
                            f.label = c[1], c = t;
                            break;
                          }

                          if (c && f[o(503)] < c[2]) {
                            f[o(503)] = c[2], f[o(610)].push(t);
                            break;
                          }

                          c[2] && f[o(610)][o(573)](), f[o(559)][o(573)]();
                          continue;
                      }

                      t = r[o(499)](e, f);
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

          Object[o(525)](r, "__esModule", {
            value: !0
          }), r[o(512)] = r[o(575)] = void 0;
          var s = i(519);
          r[o(575)] = function (t) {
            var n = o;

            try {
              window[n(633)].postMessage(JSON.stringify(a({}, t)), "*");
            } catch (e) {
              throw new Error("wrapperNoListener error");
            }
          }, r[o(512)] = function (t, e, r) {
            return c(this, void 0, void 0, function () {
              var i;
              return u(this, function (o) {
                var c = n;

                switch (o[c(503)]) {
                  case 0:
                    return o.trys.push([0, 2,, 3]), [4, (0, s.promiseTimeout)(r || 5e3, new Promise(function (n) {
                      var r,
                          i,
                          o,
                          u = c;
                      r = function r(t) {
                        n(t.response);
                      }, i = a({
                        action: t[u(614)]
                      }, e), o = function t(n) {
                        var e = u,
                            o = JSON.parse(n[e(612)]);
                        if (o) try {
                          (0, s.keys)(i).forEach(function (t) {
                            if (i[t] !== o[t]) throw new Error("");
                          }), window[e(613)](e(620), t, !0), r(o);
                        } catch (a) {}
                      }, window.addEventListener("message", o, !0), window[u(633)][u(594)](JSON[u(508)](a({}, t)), "*");
                    }))];

                  case 1:
                    return [2, o[c(651)]()];

                  case 2:
                    throw i = o.sent(), new Error(i);

                  case 3:
                    return [2];
                }
              });
            });
          };
        },
        729: function _(t, e, r) {
          var i = n,
              o = this && this.__assign || function () {
            var t = n;
            return (o = Object[t(539)] || function (n) {
              for (var e, r = t, i = 1, o = arguments[r(659)]; i < o; i++) {
                for (var a in e = arguments[i]) {
                  Object[r(533)][r(578)].call(e, a) && (n[a] = e[a]);
                }
              }

              return n;
            })[t(537)](this, arguments);
          },
              a = this && this[i(667)] || function (t) {
            return t && t[i(639)] ? t : {
              "default": t
            };
          };

          Object[i(525)](e, i(639), {
            value: !0
          });
          var c = r(430),
              u = r(9),
              s = a(r(33));
          e[i(598)] = new function () {
            var t = i,
                n = this;
            this[t(588)] = {
              create: function create(n, e, r, i) {
                return (0, u[t(512)])(o(o(o({
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
                  action: c.Actions[n(574)]
                });
              },
              destroy: function destroy() {
                var e = t;
                n.events = {}, (0, u[e(575)])({
                  action: c[e(618)][e(585)]
                });
              },
              message: function message(n, e) {
                var r = t;
                return (0, u[r(575)])(o({
                  action: c[r(618)][r(617)],
                  data: n
                }, e && {
                  client: e
                }));
              },
              kick: function kick(n) {
                var e = t;
                return (0, u[e(575)])({
                  action: c.Actions[e(545)],
                  client: n
                });
              },
              onMessage: function onMessage(e) {
                n[t(669)].onMessage = e;
              },
              onConnect: function onConnect(e) {
                var r = t;
                n[r(669)][r(577)] = e;
              },
              onDisconnect: function onDisconnect(e) {
                n[t(669)].onDisconnect = e;
              },
              onKick: function onKick(e) {
                var r = t;
                n[r(669)][r(513)] = e;
              }
            }, this[t(669)] = {}, window[t(514)](t(620), function (e) {
              var r = t,
                  i = JSON[r(493)](e[r(612)]);
              i[r(614)] === c[r(618)][r(617)] && (i[r(534)] === s[r(598)][r(661)][r(636)].MESSAGE && n[r(669)][r(538)] && i[r(612)] && n[r(669)][r(538)](i[r(612)], i.client), i.event === s[r(598)][r(661)][r(636)][r(529)] && n[r(669)].onConnect && n[r(669)][r(577)](i[r(611)]), i[r(534)] === s[r(598)][r(661)][r(636)][r(557)] && n[r(669)][r(523)] && n.events[r(523)](i[r(611)]), i[r(534)] === s["default"][r(661)][r(636)][r(592)] && n[r(669)][r(513)] && n[r(669)][r(513)](i[r(611)]));
            });
          }();
        },
        956: function _(t, e, r) {
          var i = n;
          Object[i(525)](e, i(639), {
            value: !0
          });
          var o = r(430),
              a = r(9);
          e[i(598)] = new function () {
            var t = i;
            this[t(588)] = {
              request: function request(n, e) {
                var r = t;
                return (0, a[r(512)])({
                  action: o.Actions[r(637)],
                  proxy: {
                    url: n,
                    request: e
                  }
                }, {
                  url: n
                });
              }
            };
          }();
        },
        13: function _(t, e, r) {
          var i = n;
          Object[i(525)](e, "__esModule", {
            value: !0
          });
          var o = r(430),
              a = r(9);
          e["default"] = new function () {
            var t = i;
            this[t(588)] = {
              barcode: function barcode() {
                var n = t;
                return (0, a.wrapper)({
                  action: o[n(618)][n(657)]
                }, void 0, 3e4);
              },
              printer: function printer(n, e) {
                var r = t;
                return (0, a[r(512)])({
                  action: o.Actions[r(586)],
                  data: n,
                  printerSettings: e
                });
              }
            };
          }();
        },
        519: function _(e, r) {
          var i = n,
              o = this && this[i(602)] || function (t, e, r, i) {
            return new (r || (r = Promise))(function (o, a) {
              var c = n;

              function u(t) {
                var e = n;

                try {
                  f(i[e(625)](t));
                } catch (r) {
                  a(r);
                }
              }

              function s(t) {
                var e = n;

                try {
                  f(i[e(628)](t));
                } catch (r) {
                  a(r);
                }
              }

              function f(t) {
                var e,
                    i = n;
                t[i(494)] ? o(t[i(519)]) : (e = t.value, e instanceof r ? e : new r(function (t) {
                  t(e);
                })).then(u, s);
              }

              f((i = i[c(537)](t, e || []))[c(625)]());
            });
          },
              a = this && this[i(587)] || function (e, r) {
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
            }, s(526) == ("undefined" == typeof Symbol ? "undefined" : t(Symbol)) && (u[Symbol[s(674)]] = function () {
              return this;
            }), u;

            function v(t) {
              return function (i) {
                return function (t) {
                  var i = n;
                  if (o) throw new TypeError(i(641));

                  for (; f;) {
                    try {
                      if (o = 1, a && (c = 2 & t[0] ? a[i(527)] : t[0] ? a[i(628)] || ((c = a[i(527)]) && c[i(499)](a), 0) : a.next) && !(c = c[i(499)](a, t[1])).done) return c;

                      switch (a = 0, c && (t = [2 & t[0], c[i(519)]]), t[0]) {
                        case 0:
                        case 1:
                          c = t;
                          break;

                        case 4:
                          return f[i(503)]++, {
                            value: t[1],
                            done: !1
                          };

                        case 5:
                          f[i(503)]++, a = t[1], t = [0];
                          continue;

                        case 7:
                          t = f.ops.pop(), f[i(559)][i(573)]();
                          continue;

                        default:
                          if (!((c = (c = f.trys)[i(659)] > 0 && c[c.length - 1]) || 6 !== t[0] && 2 !== t[0])) {
                            f = 0;
                            continue;
                          }

                          if (3 === t[0] && (!c || t[1] > c[0] && t[1] < c[3])) {
                            f[i(503)] = t[1];
                            break;
                          }

                          if (6 === t[0] && f[i(503)] < c[1]) {
                            f[i(503)] = c[1], c = t;
                            break;
                          }

                          if (c && f[i(503)] < c[2]) {
                            f[i(503)] = c[2], f[i(610)][i(630)](t);
                            break;
                          }

                          c[2] && f[i(610)].pop(), f[i(559)][i(573)]();
                          continue;
                      }

                      t = r.call(e, f);
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

          Object[i(525)](r, i(639), {
            value: !0
          }), r[i(668)] = r[i(543)] = r.keys = r[i(643)] = r[i(605)] = r[i(501)] = r.sendLogFormatter = r[i(568)] = void 0, r[i(568)] = function (t) {
            var n = i;
            return encodeURI(t)[n(662)](/%..|./)[n(659)] - 1;
          }, r[i(672)] = function (t) {
            var n = i,
                e = t;
            return t ? (" " === e[n(491)](e[n(659)] - 1) && (e = e.substring(0, e[n(659)] - 1)), "\n" === e[n(491)](e[n(659)] - 1) && (e = e.substring(0, e[n(659)] - 1)), "," !== e[n(491)](e[n(659)] - 1) && "," !== e[n(491)](e[n(659)] - 2) || (e = e.substring(0, e[n(659)] - 1)), e = "[" + e + "]") : "[]";
          }, r[i(501)] = function (t, e) {
            var r = i,
                o = new Promise(function (e, r) {
              var i = n,
                  o = window[i(649)](function () {
                var n = i;
                window.clearTimeout(o), r(n(549) + t + "ms.");
              }, t);
            });
            return Promise[r(671)]([e, o]);
          }, r[i(605)] = function (t, e) {
            return o(this, void 0, void 0, function () {
              var r;
              return a(this, function (i) {
                var o = n;

                switch (i[o(503)]) {
                  case 0:
                    r = 0, i[o(503)] = 1;

                  case 1:
                    return r < t[o(659)] ? [4, e(t[r], r)] : [3, 4];

                  case 2:
                    i[o(651)](), i[o(503)] = 3;

                  case 3:
                    return r++, [3, 1];

                  case 4:
                    return [2];
                }
              });
            });
          }, r.addSelfDestructingEventListener = function (t, e, r) {
            t.addEventListener(e, function i(o) {
              var a = n;
              r(o), t[a(613)](e, i, !0);
            }, !0);
          }, r.keys = function (t) {
            return Object.keys(t);
          }, r[i(543)] = function (t) {
            return new Promise(function (e) {
              window[n(649)](function () {
                return e();
              }, t);
            });
          }, r[i(668)] = function (t) {
            for (var n, e = i, r = t[e(659)], o = "", a = 0; a < r; a += 1) {
              "a" == (n = t.charCodeAt(a)[e(506)](16)) && (n = "0A"), "a3" == n && (n = "9c"), o += n[e(506)](), a == r - 1 && (o += "1B69");
            }

            return o;
          };
        },
        430: function _(t, e) {
          var r,
              i,
              o = n;
          Object[o(525)](e, o(639), {
            value: !0
          }), e[o(596)] = e[o(618)] = void 0, (i = e.Actions || (e[o(618)] = {})).INFO = o(546), i.LOG = o(488), i[o(624)] = o(616), i[o(606)] = o(666), i[o(619)] = "storage.delete", i[o(609)] = o(595), i[o(632)] = "storage.clear", i[o(562)] = "storage.download", i[o(665)] = o(664), i[o(660)] = o(544), i.INTERACT_START = o(552), i[o(585)] = o(608), i[o(617)] = "interact.message", i[o(545)] = "interact.kick", i[o(657)] = "kiosk.barcode", i[o(586)] = o(498), i[o(637)] = o(563), i[o(579)] = o(517), (r = e[o(596)] || (e[o(596)] = {}))[o(593)] = "playing", r[o(642)] = "stopping";
        },
        922: function _(t, e, r) {
          var i = n,
              o = this && this[i(626)] || (Object.create ? function (t, n, e, r) {
            void 0 === r && (r = e), Object[i(525)](t, r, {
              enumerable: !0,
              get: function get() {
                return n[e];
              }
            });
          } : function (t, n, e, r) {
            void 0 === r && (r = e), t[r] = n[e];
          }),
              a = this && this.__exportStar || function (t, n) {
            var e = i;

            for (var r in t) {
              "default" === r || Object[e(533)][e(578)].call(n, r) || o(n, t, r);
            }
          };

          Object[i(525)](e, i(639), {
            value: !0
          }), a(r(314), e);
        },
        314: function _(t, e) {
          var r = n;
          Object[r(525)](e, r(639), {
            value: !0
          });
        },
        190: function _(t, e) {
          var r = n;
          Object[r(525)](e, r(639), {
            value: !0
          });
        },
        345: function _(t, e) {
          var r = n;
          Object[r(525)](e, r(639), {
            value: !0
          });
        },
        518: function _(t, e) {
          var r = n;
          Object[r(525)](e, r(639), {
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
          Object[u(525)](e, u(639), {
            value: !0
          }), e[u(507)] = void 0, (c = (r = e[u(507)] || (e[u(507)] = {})).Rotation || (r[u(502)] = {})).LANDSCAPE = u(634), c[u(645)] = u(655), (a = r[u(492)] || (r[u(492)] = {})).SSSP2 = u(548), a.HTML = u(558), a[u(584)] = "TIZEN", (o = r[u(658)] || (r[u(658)] = {})).OFFLINE = u(572), o[u(582)] = u(590), (i = r[u(565)] || (r[u(565)] = {})).PLAYLIST = u(591), i.SCHEDULE = u(569);
        },
        836: function _(t, e) {
          var r,
              i,
              o = n;
          Object[o(525)](e, o(639), {
            value: !0
          }), e[o(571)] = void 0, (i = (r = e[o(571)] || (e.User = {})).UserStatus || (r[o(638)] = {})).ACTIVE = o(532), i[o(542)] = "Inactive";
        },
        837: function _(t, e) {
          var r = n;
          Object[r(525)](e, "__esModule", {
            value: !0
          }), e[r(496)] = void 0, e[r(496)] || (e[r(496)] = {});
        },
        480: function _(t, e) {
          var r,
              i,
              o = n;
          Object[o(525)](e, o(639), {
            value: !0
          }), e[o(495)] = void 0, (i = (r = e[o(495)] || (e[o(495)] = {}))[o(551)] || (r.Level = {}))[o(647)] = o(522), i.LOG = "log", i[o(589)] = "info", i[o(516)] = o(631), i[o(675)] = o(597);
        },
        88: function _(t, e, r) {
          var i = n;
          Object[i(525)](e, i(639), {
            value: !0
          }), e[i(652)] = void 0;
          var o,
              a = r(837),
              c = r(480);
          (o = e[i(652)] || (e[i(652)] = {}))[i(656)] = a[i(496)], o[i(567)] = c[i(495)];
        },
        695: function _(t, e, r) {
          var i = n,
              o = this && this.__createBinding || (Object[i(627)] ? function (t, n, e, r) {
            void 0 === r && (r = e), Object[i(525)](t, r, {
              enumerable: !0,
              get: function get() {
                return n[e];
              }
            });
          } : function (t, n, e, r) {
            void 0 === r && (r = e), t[r] = n[e];
          }),
              a = this && this[i(497)] || function (t, n) {
            var e = i;

            for (var r in t) {
              e(598) === r || Object[e(533)].hasOwnProperty[e(499)](n, r) || o(n, t, r);
            }
          };

          Object[i(525)](e, "__esModule", {
            value: !0
          }), a(r(190), e), a(r(518), e), a(r(345), e), a(r(439), e), a(r(836), e), a(r(88), e);
        },
        33: function _(t, e, r) {
          var i = n,
              o = this && this[i(626)] || (Object[i(627)] ? function (t, n, e, r) {
            void 0 === r && (r = e), Object[i(525)](t, r, {
              enumerable: !0,
              get: function get() {
                return n[e];
              }
            });
          } : function (t, n, e, r) {
            void 0 === r && (r = e), t[r] = n[e];
          }),
              a = this && this[i(547)] || (Object[i(627)] ? function (t, n) {
            Object.defineProperty(t, "default", {
              enumerable: !0,
              value: n
            });
          } : function (t, n) {
            t[i(598)] = n;
          }),
              c = this && this.__importStar || function (t) {
            var n = i;
            if (t && t[n(639)]) return t;
            var e = {};
            if (null != t) for (var r in t) {
              n(598) !== r && Object[n(533)][n(578)].call(t, r) && o(e, t, r);
            }
            return a(e, t), e;
          };

          Object.defineProperty(e, i(639), {
            value: !0
          });
          var u,
              s,
              f,
              v = c(r(695)),
              l = c(r(922)),
              d = c(r(283));
          (s = u || (u = {}))[(f = i)(673)] = v, s[f(648)] = l, s[f(661)] = d, e["default"] = u;
        },
        986: function _(t, e) {
          var r,
              i = n;
          Object[i(525)](e, i(639), {
            value: !0
          }), e.EnvironmentType = void 0, (r = e[i(607)] || (e[i(607)] = {}))[i(548)] = "SSSP2", r[i(558)] = i(558), r.TIZEN = i(584), r[i(621)] = i(621);
        },
        283: function _(t, e, r) {
          var i,
              o = n,
              a = this && this[o(626)] || (Object.create ? function (t, n, e, r) {
            void 0 === r && (r = e), Object[o(525)](t, r, {
              enumerable: !0,
              get: function get() {
                return n[e];
              }
            });
          } : function (t, n, e, r) {
            void 0 === r && (r = e), t[r] = n[e];
          }),
              c = this && this.__exportStar || function (t, n) {
            var e = o;

            for (var r in t) {
              e(598) === r || Object[e(533)].hasOwnProperty[e(499)](n, r) || a(n, t, r);
            }
          };

          Object[o(525)](e, o(639), {
            value: !0
          }), e.WebsocketAction = void 0, c(r(317), e), c(r(239), e), c(r(968), e), c(r(986), e), (i = e[o(600)] || (e[o(600)] = {})).SP = "sp", i[o(524)] = o(583), i.HC = "hc", i[o(515)] = o(555), i[o(528)] = o(646), i[o(521)] = o(601), i[o(487)] = o(670), i.INTERACT = o(541), i.INTERACT_START = o(504), i.TRANSITION = o(536);
        },
        968: function _(t, e) {
          var r,
              i = n;
          Object[i(525)](e, "__esModule", {
            value: !0
          }), e[i(636)] = void 0, (r = e[i(636)] || (e[i(636)] = {}))[i(511)] = i(620), r.CONNECT = i(570), r.DISCONNECT = i(653), r[i(592)] = i(654);
        },
        239: function _(t, e) {
          var r = n;
          Object.defineProperty(e, r(639), {
            value: !0
          });
        },
        317: function _(t, e) {
          var r,
              i,
              o = n;
          Object[o(525)](e, o(639), {
            value: !0
          }), e[o(554)] = e[o(505)] = void 0, (i = e[o(505)] || (e[o(505)] = {}))[o(520)] = o(599), i[o(556)] = "slide-in-from-top", i[o(550)] = o(500), i[o(530)] = "slide-in-from-right", i.FADE = o(490), i[o(576)] = o(644), (r = e[o(554)] || (e[o(554)] = {}))[o(520)] = o(650), r.SLIDE_TOP = "slide-out-to-top", r[o(550)] = o(622), r[o(530)] = o(564), r[o(510)] = o(518), r.ZOOM = o(509);
        }
      },
          r = {};
      !function t(i) {
        var o = n,
            a = r[i];
        if (void 0 !== a) return a.exports;
        var c = r[i] = {
          exports: {}
        };
        return e[i][o(499)](c.exports, c, c[o(581)], t), c[o(581)];
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