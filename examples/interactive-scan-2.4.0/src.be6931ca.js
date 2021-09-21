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
      var i = e();
      return (t = function t(n, _t) {
        return i[n -= 369];
      })(n, r);
    }

    function e() {
      var n = ["INTERACT_DESTROY", "stopping", "postMessage", "8248900SiZfiB", "INTERACT_CREATE", "then", "STORAGE_PUT", "InteractiveEvent", "STORAGE_DOWNLOAD", "532600PTmctI", "interact.kick", "8dZbCxr", "LifeCycleEvent", "pop", "keys", "1B69", "__generator", "label", "defineProperty", "length", "playing", "done", "clearTimeout", "promiseTimeout", "stringToHex", "action", "substr", "byteCount", "storage.list", "STORAGE_DELETE", "data", "sent", "Timed out in ", "11460nmnkMM", "log", "event", "prototype", "INTERACT_START", "storage.exists", "toString", "INTERACT_KICK", "default", "wrapper", "MESSAGE", "disconnect", "stringify", "ms.", "value", "info", "interactive", "storage.put", "addTargetedSelfDestructingEventListener", "DISCONNECT", "13824ArAgod", "KICK", "STORAGE_GET", "race", "sendLogFormatter", "ops", "assign", "KIOSK_PRINTER", "9JmWmrh", "apply", "interact.destroy", "Evexi", "charCodeAt", "kiosk.barcode", "trys", "CONNECT", "__awaiter", "events", "substring", "storage.download", "LOG", "next", "exports", "KIOSK_BARCODE", "storage.delete", "wrapperNoListener error", "sleep", "storage.clear", "connect", "onDisconnect", "client", "addEventListener", "parent", "tizen", "wrapperNoListener", "2226BmJahN", "815697lyKWcA", "storage.get", "all", "setup self destructing listener: ", "STORAGE_EXISTS", "return", "onConnect", "PLAYING", "iterator", "onKick", "response", "__importDefault", "6204987vKKJRG", "2049192HbpFwC", "addSelfDestructingEventListener", "INTERACT_MESSAGE", "asyncForEach", "push", "hasOwnProperty", "Actions", "Generator is already executing.", "INFO", "throw", "call", "STOPPING", "STORAGE_LIST", "onMessage", "function", "api/Helper.ts (86:4)", "__assign", "__esModule", "message", "kiosk.printer", "parse"];
      return (e = function e() {
        return n;
      })();
    }

    (function (n, r) {
      for (var i = t, o = e();;) {
        try {
          if (457912 === parseInt(i(481)) / 1 + parseInt(i(445)) / 2 * (-parseInt(i(453)) / 3) + parseInt(i(371)) / 4 + -parseInt(i(401)) / 5 + -parseInt(i(425)) / 6 * (parseInt(i(480)) / 7) + parseInt(i(403)) / 8 * (parseInt(i(370)) / 9) + -parseInt(i(395)) / 10) break;
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
              o = this && this[i(369)] || function (n) {
            return n && n[i(388)] ? n : {
              "default": n
            };
          };

          Object.defineProperty(e, i(388), {
            value: !0
          });
          var a = r(430),
              c = o(r(895)),
              u = r(9),
              s = o(r(729)),
              f = o(r(91));
          window[i(456)] = new function () {
            var n = i;
            this.fs = c["default"][n(483)], this[n(441)] = s[n(433)][n(483)], this[n(478)] = f["default"].all, this[n(426)] = function (t) {
              var e = n;
              return (0, u[e(479)])({
                action: a[e(377)][e(465)],
                data: t
              });
            }, this[n(440)] = function () {
              var t = n;
              return (0, u[t(434)])({
                action: a[t(377)][t(379)]
              });
            };
          }();
        },
        895: function _(n, e, r) {
          var i = t;
          Object[i(410)](e, "__esModule", {
            value: !0
          });
          var o = r(430),
              a = r(9);
          e[i(433)] = new function () {
            var n = i;
            this[n(483)] = {
              get: function get(t) {
                var e = n;
                return (0, a[e(434)])({
                  action: o.Actions[e(447)],
                  name: t
                }, {
                  name: t
                });
              },
              put: function put(t, e) {
                var r = n;
                return (0, a[r(434)])({
                  action: o.Actions[r(398)],
                  name: t,
                  data: e
                }, {
                  name: t
                });
              },
              del: function del(t) {
                var e = n;
                return (0, a.wrapper)({
                  action: o.Actions[e(421)],
                  name: t
                }, {
                  name: t
                });
              },
              list: function list() {
                var t = n;
                return (0, a[t(434)])({
                  action: o[t(377)][t(383)]
                });
              },
              clear: function clear() {
                var t = n;
                return (0, a[t(434)])({
                  action: o[t(377)].STORAGE_CLEAR
                });
              },
              download: function download(t, e) {
                var r = n;
                return (0, a[r(434)])({
                  action: o[r(377)][r(400)],
                  url: t,
                  name: e
                }, {
                  name: e
                });
              },
              exists: function exists(t) {
                var e = n;
                return (0, a[e(434)])({
                  action: o[e(377)].STORAGE_EXISTS,
                  name: t
                }, {
                  name: t
                });
              }
            };
          }();
        },
        9: function _(e, r, i) {
          var o = t,
              a = this && this[o(387)] || function () {
            var n = o;
            return (a = Object[n(451)] || function (t) {
              for (var e, r = n, i = 1, o = arguments[r(411)]; i < o; i++) {
                for (var a in e = arguments[i]) {
                  Object.prototype[r(376)][r(381)](e, a) && (t[a] = e[a]);
                }
              }

              return t;
            }).apply(this, arguments);
          },
              c = this && this.__awaiter || function (n, e, r, i) {
            return new (r || (r = Promise))(function (o, a) {
              var c = t;

              function u(n) {
                var e = t;

                try {
                  f(i[e(466)](n));
                } catch (r) {
                  a(r);
                }
              }

              function s(n) {
                var e = t;

                try {
                  f(i[e(380)](n));
                } catch (r) {
                  a(r);
                }
              }

              function f(n) {
                var e,
                    i = t;
                n[i(413)] ? o(n[i(439)]) : (e = n.value, e instanceof r ? e : new r(function (n) {
                  n(e);
                }))[i(397)](u, s);
              }

              f((i = i[c(454)](n, e || []))[c(466)]());
            });
          },
              u = this && this[o(408)] || function (e, r) {
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
            }, s(385) == ("undefined" == typeof Symbol ? "undefined" : n(Symbol)) && (u[Symbol[s(489)]] = function () {
              return this;
            }), u;

            function v(n) {
              return function (o) {
                return function (n) {
                  var o = t;
                  if (i) throw new TypeError(o(378));

                  for (; f;) {
                    try {
                      if (i = 1, a && (c = 2 & n[0] ? a[o(486)] : n[0] ? a[o(380)] || ((c = a[o(486)]) && c[o(381)](a), 0) : a[o(466)]) && !(c = c[o(381)](a, n[1]))[o(413)]) return c;

                      switch (a = 0, c && (n = [2 & n[0], c.value]), n[0]) {
                        case 0:
                        case 1:
                          c = n;
                          break;

                        case 4:
                          return f[o(409)]++, {
                            value: n[1],
                            done: !1
                          };

                        case 5:
                          f[o(409)]++, a = n[1], n = [0];
                          continue;

                        case 7:
                          n = f[o(450)][o(405)](), f.trys.pop();
                          continue;

                        default:
                          if (!((c = (c = f[o(459)])[o(411)] > 0 && c[c[o(411)] - 1]) || 6 !== n[0] && 2 !== n[0])) {
                            f = 0;
                            continue;
                          }

                          if (3 === n[0] && (!c || n[1] > c[0] && n[1] < c[3])) {
                            f[o(409)] = n[1];
                            break;
                          }

                          if (6 === n[0] && f[o(409)] < c[1]) {
                            f[o(409)] = c[1], c = n;
                            break;
                          }

                          if (c && f.label < c[2]) {
                            f.label = c[2], f[o(450)][o(375)](n);
                            break;
                          }

                          c[2] && f.ops.pop(), f[o(459)][o(405)]();
                          continue;
                      }

                      n = r[o(381)](e, f);
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

          Object[o(410)](r, o(388), {
            value: !0
          }), r[o(443)] = r[o(434)] = r.wrapperNoListener = void 0;
          var s = i(519);

          function f(n, t) {
            var e = o;
            console[e(426)](e(386), e(484) + t.action), window[e(476)](e(389), function r(i) {
              var o = e,
                  a = JSON[o(391)](i[o(422)]);
              if (a) try {
                (0, s[o(406)])(t).forEach(function (n) {
                  if (t[n] !== a[n]) throw new Error("");
                }), window.removeEventListener(o(389), r, !0), n(a);
              } catch (c) {}
            }, !0);
          }

          r[o(479)] = function (n) {
            var t = o;

            try {
              window[t(477)][t(394)](JSON[t(437)](a({}, n)), "*");
            } catch (e) {
              throw new Error(t(470));
            }
          }, r[o(434)] = function (n, e) {
            return c(this, void 0, void 0, function () {
              var r;
              return u(this, function (i) {
                var o = t;

                switch (i.label) {
                  case 0:
                    return i[o(459)][o(375)]([0, 2,, 3]), [4, (0, s[o(415)])(5e3, new Promise(function (r) {
                      f(function (n) {
                        r(n[t(491)]);
                      }, a({
                        action: n[o(417)]
                      }, e)), window.parent.postMessage(JSON.stringify(a({}, n)), "*");
                    }))];

                  case 1:
                    return [2, i[o(423)]()];

                  case 2:
                    throw r = i[o(423)](), new Error(r);

                  case 3:
                    return [2];
                }
              });
            });
          }, r[o(443)] = f;
        },
        729: function _(n, e, r) {
          var i = t,
              o = this && this[i(387)] || function () {
            var n = i;
            return (o = Object.assign || function (n) {
              for (var e, r = t, i = 1, o = arguments[r(411)]; i < o; i++) {
                for (var a in e = arguments[i]) {
                  Object[r(428)].hasOwnProperty[r(381)](e, a) && (n[a] = e[a]);
                }
              }

              return n;
            })[n(454)](this, arguments);
          };

          Object[i(410)](e, i(388), {
            value: !0
          });
          var a = r(430),
              c = r(111),
              u = r(9);
          e[i(433)] = new function () {
            var n = i,
                t = this;
            this[n(483)] = {
              create: function create(t, e, r, i) {
                var c = n;
                return (0, u[c(434)])(o(o(o({
                  action: a[c(377)].INTERACT_CREATE,
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
                return (0, u[t(479)])({
                  action: a[t(377)][t(429)]
                });
              },
              destroy: function destroy() {
                var e = n;
                t.events = {}, (0, u[e(479)])({
                  action: a.Actions[e(392)]
                });
              },
              message: function message(t, e) {
                var r = n;
                return (0, u.wrapperNoListener)(o({
                  action: a[r(377)][r(373)],
                  data: t
                }, e && {
                  client: e
                }));
              },
              kick: function kick(t) {
                var e = n;
                return (0, u[e(479)])({
                  action: a.Actions[e(432)],
                  client: t
                });
              },
              onMessage: function onMessage(e) {
                var r = n;
                t[r(462)][r(384)] = e;
              },
              onConnect: function onConnect(e) {
                var r = n;
                t.events[r(487)] = e;
              },
              onDisconnect: function onDisconnect(e) {
                var r = n;
                t[r(462)][r(474)] = e;
              },
              onKick: function onKick(e) {
                t[n(462)].onKick = e;
              }
            }, this[n(462)] = {}, window[n(476)](n(389), function (e) {
              var r = n,
                  i = JSON[r(391)](e[r(422)]);
              i[r(417)] === a.Actions[r(373)] && (i[r(427)] === c[r(399)][r(435)] && t[r(462)][r(384)] && i.data && t[r(462)][r(384)](i[r(422)], i.client), i[r(427)] === c[r(399)][r(460)] && t[r(462)][r(487)] && t[r(462)][r(487)](i[r(475)]), i[r(427)] === c[r(399)].DISCONNECT && t[r(462)][r(474)] && t[r(462)][r(474)](i.client), i[r(427)] === c.InteractiveEvent[r(446)] && t[r(462)][r(490)] && t[r(462)][r(490)](i[r(475)]));
            });
          }();
        },
        91: function _(n, e, r) {
          var i = t;
          Object[i(410)](e, i(388), {
            value: !0
          });
          var o = r(430),
              a = r(9);
          e["default"] = new function () {
            var n = i;
            this[n(483)] = {
              barcode: function barcode() {
                var t = n;
                return (0, a[t(434)])({
                  action: o[t(377)][t(468)]
                });
              },
              printer: function printer(t) {
                var e = n;
                return (0, a[e(434)])({
                  action: o[e(377)].KIOSK_PRINTER,
                  data: t
                });
              }
            };
          }();
        },
        519: function _(e, r) {
          var i = t,
              o = this && this[i(461)] || function (n, e, r, i) {
            return new (r || (r = Promise))(function (o, a) {
              var c = t;

              function u(n) {
                var e = t;

                try {
                  f(i[e(466)](n));
                } catch (r) {
                  a(r);
                }
              }

              function s(n) {
                var e = t;

                try {
                  f(i[e(380)](n));
                } catch (r) {
                  a(r);
                }
              }

              function f(n) {
                var e,
                    i = t;
                n[i(413)] ? o(n[i(439)]) : (e = n[i(439)], e instanceof r ? e : new r(function (n) {
                  n(e);
                }))[i(397)](u, s);
              }

              f((i = i[c(454)](n, e || []))[c(466)]());
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
            }, s(385) == ("undefined" == typeof Symbol ? "undefined" : n(Symbol)) && (u[Symbol.iterator] = function () {
              return this;
            }), u;

            function v(n) {
              return function (i) {
                return function (n) {
                  var i = t;
                  if (o) throw new TypeError(i(378));

                  for (; f;) {
                    try {
                      if (o = 1, a && (c = 2 & n[0] ? a[i(486)] : n[0] ? a["throw"] || ((c = a[i(486)]) && c[i(381)](a), 0) : a[i(466)]) && !(c = c[i(381)](a, n[1])).done) return c;

                      switch (a = 0, c && (n = [2 & n[0], c[i(439)]]), n[0]) {
                        case 0:
                        case 1:
                          c = n;
                          break;

                        case 4:
                          return f[i(409)]++, {
                            value: n[1],
                            done: !1
                          };

                        case 5:
                          f[i(409)]++, a = n[1], n = [0];
                          continue;

                        case 7:
                          n = f[i(450)][i(405)](), f[i(459)][i(405)]();
                          continue;

                        default:
                          if (!((c = (c = f.trys)[i(411)] > 0 && c[c.length - 1]) || 6 !== n[0] && 2 !== n[0])) {
                            f = 0;
                            continue;
                          }

                          if (3 === n[0] && (!c || n[1] > c[0] && n[1] < c[3])) {
                            f.label = n[1];
                            break;
                          }

                          if (6 === n[0] && f[i(409)] < c[1]) {
                            f[i(409)] = c[1], c = n;
                            break;
                          }

                          if (c && f[i(409)] < c[2]) {
                            f.label = c[2], f.ops[i(375)](n);
                            break;
                          }

                          c[2] && f.ops[i(405)](), f[i(459)][i(405)]();
                          continue;
                      }

                      n = r[i(381)](e, f);
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

          Object[i(410)](r, i(388), {
            value: !0
          }), r.stringToHex = r[i(471)] = r.keys = r[i(372)] = r[i(374)] = r[i(415)] = r[i(449)] = r[i(419)] = void 0, r[i(419)] = function (n) {
            var t = i;
            return encodeURI(n).split(/%..|./)[t(411)] - 1;
          }, r[i(449)] = function (n) {
            var t = i,
                e = n;
            return n ? (" " === e.substr(e[t(411)] - 1) && (e = e[t(463)](0, e[t(411)] - 1)), "\n" === e.substr(e[t(411)] - 1) && (e = e.substring(0, e[t(411)] - 1)), "," !== e[t(418)](e[t(411)] - 1) && "," !== e.substr(e[t(411)] - 2) || (e = e[t(463)](0, e[t(411)] - 1)), e = "[" + e + "]") : "[]";
          }, r[i(415)] = function (n, e) {
            var r = i,
                o = new Promise(function (e, r) {
              var i = window.setTimeout(function () {
                var e = t;
                window[e(414)](i), r(e(424) + n + e(438));
              }, n);
            });
            return Promise[r(448)]([e, o]);
          }, r[i(374)] = function (n, e) {
            return o(this, void 0, void 0, function () {
              var r;
              return a(this, function (i) {
                var o = t;

                switch (i[o(409)]) {
                  case 0:
                    r = 0, i.label = 1;

                  case 1:
                    return r < n.length ? [4, e(n[r], r)] : [3, 4];

                  case 2:
                    i.sent(), i[o(409)] = 3;

                  case 3:
                    return r++, [3, 1];

                  case 4:
                    return [2];
                }
              });
            });
          }, r[i(372)] = function (n, t, e) {
            n[i(476)](t, function r(i) {
              e(i), n.removeEventListener(t, r, !0);
            }, !0);
          }, r[i(406)] = function (n) {
            return Object[i(406)](n);
          }, r[i(471)] = function (n) {
            return new Promise(function (t) {
              window.setTimeout(function () {
                return t();
              }, n);
            });
          }, r[i(416)] = function (n) {
            for (var t, e = i, r = n[e(411)], o = "", a = 0; a < r; a += 1) {
              "a" == (t = n[e(457)](a)[e(431)](16)) && (t = "0A"), o += t[e(431)](), a == r - 1 && (o += e(407));
            }

            return o;
          };
        },
        430: function _(n, e) {
          var r,
              i,
              o = t;
          Object[o(410)](e, o(388), {
            value: !0
          }), e[o(404)] = e[o(377)] = void 0, (i = e.Actions || (e[o(377)] = {}))[o(379)] = o(440), i[o(465)] = o(426), i[o(447)] = o(482), i[o(398)] = o(442), i[o(421)] = o(469), i[o(383)] = o(420), i.STORAGE_CLEAR = o(472), i[o(400)] = o(464), i[o(485)] = o(430), i[o(396)] = "interact.create", i[o(429)] = "interact.start", i[o(392)] = o(455), i[o(373)] = "interact.message", i[o(432)] = o(402), i[o(468)] = o(458), i[o(452)] = o(390), (r = e[o(404)] || (e.LifeCycleEvent = {}))[o(488)] = o(412), r[o(382)] = o(393);
        },
        111: function _(n, e) {
          var r,
              i = t;
          Object.defineProperty(e, i(388), {
            value: !0
          }), e[i(399)] = void 0, (r = e.InteractiveEvent || (e.InteractiveEvent = {}))[i(435)] = i(389), r[i(460)] = i(473), r[i(444)] = i(436), r.KICK = "kick";
        }
      },
          r = {};
      !function n(i) {
        var o = t,
            a = r[i];
        if (void 0 !== a) return a[o(467)];
        var c = r[i] = {
          exports: {}
        };
        return e[i].call(c[o(467)], c, c[o(467)], n), c.exports;
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