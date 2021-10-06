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

// Version: 2.4.0-Alpha.3
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
    function n(e, r) {
      var i = t();
      return (n = function n(_n, t) {
        return i[_n -= 158];
      })(e, r);
    }

    function t() {
      var n = ["KIOSK_PRINTER", "message", "request", "PLAYING", "split", "STORAGE_DELETE", "__esModule", "disconnect", "INTERACT_MESSAGE", "data", "pop", "stopping", "INTERACT_KICK", "STORAGE_LIST", "KIOSK_BARCODE", "KICK", "exports", "19201QIlPQA", "Generator is already executing.", "interact.create", "prototype", "defineProperty", "onKick", "8998SyJZwM", "interact.start", "onMessage", "812XgnhLc", "INTERACT_START", "length", "hasOwnProperty", "stringify", "INTERACT_DESTROY", "ops", "all", "kiosk.barcode", "4314YpNkrE", "wrapperNoListener error", "8472kAHbmj", "assign", "interact.message", "__awaiter", "byteCount", "return", "PROXY", "promiseTimeout", "LOG", "STORAGE_CLEAR", "postMessage", "call", "storage.get", "asyncForEach", "STORAGE_PUT", "tizen", "substring", "STORAGE_EXISTS", "DISCONNECT", "5605430OVQNba", "LifeCycleEvent", "Evexi", "__assign", "2010UdSsJh", "337744UAnyFe", "substr", "sendLogFormatter", "284753BWnrBY", "connect", "onConnect", "INFO", "__generator", "setTimeout", "STORAGE_DOWNLOAD", "removeEventListener", "response", "done", "action", "forEach", "storage.exists", "events", "INTERACT_CREATE", "onDisconnect", "default", "ms.", "throw", "wrapper", "Actions", "storage.list", "info", "proxy", "sent", "696ZKFmQM", "storage.clear", "push", "__importDefault", "apply", "parent", "CONNECT", "9vcuPhu", "toString", "sleep", "value", "keys", "trys", "addEventListener", "clearTimeout", "storage.put", "parse", "label", "5568CizZXC", "client", "wrapperNoListener", "STOPPING", "next", "1B69", "iterator", "InteractiveEvent", "interact.destroy", "event", "stringToHex"];
      return (t = function t() {
        return n;
      })();
    }

    (function (e, r) {
      for (var i = n, o = t();;) {
        try {
          if (283757 === parseInt(i(252)) / 1 + -parseInt(i(249)) / 2 + -parseInt(i(177)) / 3 * (parseInt(i(214)) / 4) + parseInt(i(248)) / 5 * (parseInt(i(223)) / 6) + -parseInt(i(205)) / 7 * (-parseInt(i(159)) / 8) + parseInt(i(166)) / 9 * (-parseInt(i(244)) / 10) + parseInt(i(211)) / 11 * (parseInt(i(225)) / 12)) break;
          o.push(o.shift());
        } catch (a) {
          o.push(o.shift());
        }
      }
    })(), function () {
      "use strict";

      var t = {
        846: function _(t, e, r) {
          var i = n,
              o = this && this[i(162)] || function (n) {
            return n && n.__esModule ? n : {
              "default": n
            };
          };

          Object[i(209)](e, "__esModule", {
            value: !0
          });
          var a = r(430),
              c = o(r(895)),
              u = r(9),
              s = o(r(729)),
              f = o(r(91)),
              v = o(r(956));
          window[i(246)] = new function () {
            var n = i;
            this.fs = c[n(268)][n(221)], this.interactive = s[n(268)][n(221)], this[n(240)] = f[n(268)][n(221)], this[n(275)] = v[n(268)][n(221)][n(190)], this.log = function (t) {
              var e = n;
              return (0, u[e(179)])({
                action: a[e(272)][e(233)],
                data: t
              });
            }, this[n(274)] = function () {
              var t = n;
              return (0, u[t(271)])({
                action: a[t(272)][t(255)]
              });
            };
          }();
        },
        895: function _(t, e, r) {
          var i = n;
          Object[i(209)](e, i(194), {
            value: !0
          });
          var o = r(430),
              a = r(9);
          e[i(268)] = new function () {
            var n = i;
            this[n(221)] = {
              get: function get(t) {
                var e = n;
                return (0, a[e(271)])({
                  action: o[e(272)].STORAGE_GET,
                  name: t
                }, {
                  name: t
                });
              },
              put: function put(t, e) {
                var r = n;
                return (0, a[r(271)])({
                  action: o[r(272)].STORAGE_PUT,
                  name: t,
                  data: e
                }, {
                  name: t
                });
              },
              del: function del(t) {
                var e = n;
                return (0, a.wrapper)({
                  action: o[e(272)][e(193)],
                  name: t
                }, {
                  name: t
                });
              },
              list: function list() {
                var t = n;
                return (0, a[t(271)])({
                  action: o[t(272)][t(201)]
                });
              },
              clear: function clear() {
                var t = n;
                return (0, a[t(271)])({
                  action: o[t(272)][t(234)]
                });
              },
              download: function download(t, e) {
                var r = n;
                return (0, a[r(271)])({
                  action: o[r(272)][r(258)],
                  url: t,
                  name: e
                }, {
                  name: e
                });
              },
              exists: function exists(t) {
                var e = n;
                return (0, a[e(271)])({
                  action: o[e(272)].STORAGE_EXISTS,
                  name: t
                }, {
                  name: t
                });
              }
            };
          }();
        },
        9: function _(t, e, r) {
          var i = n,
              o = this && this[i(247)] || function () {
            var n = i;
            return (o = Object[n(226)] || function (t) {
              for (var e, r = n, i = 1, o = arguments[r(216)]; i < o; i++) {
                for (var a in e = arguments[i]) {
                  Object.prototype[r(217)][r(236)](e, a) && (t[a] = e[a]);
                }
              }

              return t;
            })[n(163)](this, arguments);
          },
              a = this && this[i(228)] || function (t, e, r, i) {
            return new (r || (r = Promise))(function (o, a) {
              var c = n;

              function u(t) {
                var e = n;

                try {
                  f(i[e(181)](t));
                } catch (r) {
                  a(r);
                }
              }

              function s(n) {
                try {
                  f(i["throw"](n));
                } catch (t) {
                  a(t);
                }
              }

              function f(t) {
                var e,
                    i = n;
                t.done ? o(t[i(169)]) : (e = t.value, e instanceof r ? e : new r(function (n) {
                  n(e);
                })).then(u, s);
              }

              f((i = i[c(163)](t, e || []))[c(181)]());
            });
          },
              c = this && this[i(256)] || function (t, e) {
            var r,
                o,
                a,
                c,
                u = i,
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
            }, "function" == typeof Symbol && (c[Symbol[u(183)]] = function () {
              return this;
            }), c;

            function f(i) {
              return function (c) {
                return function (i) {
                  var c = n;
                  if (r) throw new TypeError(c(206));

                  for (; s;) {
                    try {
                      if (r = 1, o && (a = 2 & i[0] ? o["return"] : i[0] ? o[c(270)] || ((a = o[c(230)]) && a.call(o), 0) : o[c(181)]) && !(a = a[c(236)](o, i[1]))[c(261)]) return a;

                      switch (o = 0, a && (i = [2 & i[0], a.value]), i[0]) {
                        case 0:
                        case 1:
                          a = i;
                          break;

                        case 4:
                          return s[c(176)]++, {
                            value: i[1],
                            done: !1
                          };

                        case 5:
                          s[c(176)]++, o = i[1], i = [0];
                          continue;

                        case 7:
                          i = s[c(220)].pop(), s.trys.pop();
                          continue;

                        default:
                          if (!((a = (a = s[c(171)])[c(216)] > 0 && a[a[c(216)] - 1]) || 6 !== i[0] && 2 !== i[0])) {
                            s = 0;
                            continue;
                          }

                          if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                            s[c(176)] = i[1];
                            break;
                          }

                          if (6 === i[0] && s.label < a[1]) {
                            s[c(176)] = a[1], a = i;
                            break;
                          }

                          if (a && s[c(176)] < a[2]) {
                            s[c(176)] = a[2], s[c(220)][c(161)](i);
                            break;
                          }

                          a[2] && s[c(220)][c(198)](), s[c(171)][c(198)]();
                          continue;
                      }

                      i = e[c(236)](t, s);
                    } catch (u) {
                      i = [6, u], o = 0;
                    } finally {
                      r = a = 0;
                    }
                  }

                  if (5 & i[0]) throw i[1];
                  return {
                    value: i[0] ? i[1] : void 0,
                    done: !0
                  };
                }([i, c]);
              };
            }
          };

          Object.defineProperty(e, i(194), {
            value: !0
          }), e.wrapper = e.wrapperNoListener = void 0;
          var u = r(519);
          e[i(179)] = function (n) {
            var t = i;

            try {
              window.parent.postMessage(JSON.stringify(o({}, n)), "*");
            } catch (e) {
              throw new Error(t(224));
            }
          }, e[i(271)] = function (t, e, r) {
            return a(this, void 0, void 0, function () {
              var i;
              return c(this, function (a) {
                var c = n;

                switch (a[c(176)]) {
                  case 0:
                    return a[c(171)][c(161)]([0, 2,, 3]), [4, (0, u[c(232)])(r || 5e3, new Promise(function (r) {
                      var i,
                          a,
                          s,
                          f = c;
                      i = function i(t) {
                        r(t[n(260)]);
                      }, a = o({
                        action: t[f(262)]
                      }, e), s = function n(t) {
                        var e = f,
                            r = JSON[e(175)](t[e(197)]);
                        if (r) try {
                          (0, u.keys)(a)[e(263)](function (n) {
                            if (a[n] !== r[n]) throw new Error("");
                          }), window[e(259)](e(189), n, !0), i(r);
                        } catch (o) {}
                      }, window[f(172)]("message", s, !0), window[f(164)][f(235)](JSON[f(218)](o({}, t)), "*");
                    }))];

                  case 1:
                    return [2, a[c(158)]()];

                  case 2:
                    throw i = a.sent(), new Error(i);

                  case 3:
                    return [2];
                }
              });
            });
          };
        },
        729: function _(t, e, r) {
          var i = n,
              o = this && this[i(247)] || function () {
            var n = i;
            return (o = Object[n(226)] || function (t) {
              for (var e, r = n, i = 1, o = arguments.length; i < o; i++) {
                for (var a in e = arguments[i]) {
                  Object[r(208)].hasOwnProperty[r(236)](e, a) && (t[a] = e[a]);
                }
              }

              return t;
            })[n(163)](this, arguments);
          };

          Object.defineProperty(e, "__esModule", {
            value: !0
          });
          var a = r(430),
              c = r(111),
              u = r(9);
          e[i(268)] = new function () {
            var n = i,
                t = this;
            this[n(221)] = {
              create: function create(t, e, r, i) {
                var c = n;
                return (0, u.wrapper)(o(o(o({
                  action: a[c(272)][c(266)],
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
                return (0, u.wrapperNoListener)({
                  action: a[t(272)].INTERACT_START
                });
              },
              destroy: function destroy() {
                var e = n;
                t[e(265)] = {}, (0, u[e(179)])({
                  action: a.Actions[e(219)]
                });
              },
              message: function message(t, e) {
                var r = n;
                return (0, u.wrapperNoListener)(o({
                  action: a.Actions[r(196)],
                  data: t
                }, e && {
                  client: e
                }));
              },
              kick: function kick(t) {
                var e = n;
                return (0, u.wrapperNoListener)({
                  action: a[e(272)][e(200)],
                  client: t
                });
              },
              onMessage: function onMessage(e) {
                var r = n;
                t[r(265)][r(213)] = e;
              },
              onConnect: function onConnect(e) {
                var r = n;
                t[r(265)][r(254)] = e;
              },
              onDisconnect: function onDisconnect(e) {
                var r = n;
                t[r(265)][r(267)] = e;
              },
              onKick: function onKick(e) {
                var r = n;
                t[r(265)][r(210)] = e;
              }
            }, this.events = {}, window[n(172)]("message", function (e) {
              var r = n,
                  i = JSON[r(175)](e[r(197)]);
              i[r(262)] === a[r(272)][r(196)] && (i.event === c[r(184)].MESSAGE && t[r(265)].onMessage && i[r(197)] && t[r(265)].onMessage(i[r(197)], i[r(178)]), i.event === c[r(184)].CONNECT && t.events[r(254)] && t.events[r(254)](i.client), i[r(186)] === c[r(184)][r(243)] && t[r(265)].onDisconnect && t.events[r(267)](i[r(178)]), i[r(186)] === c[r(184)][r(203)] && t[r(265)][r(210)] && t[r(265)][r(210)](i[r(178)]));
            });
          }();
        },
        91: function _(t, e, r) {
          var i = n;
          Object.defineProperty(e, "__esModule", {
            value: !0
          });
          var o = r(430),
              a = r(9);
          e[i(268)] = new function () {
            var n = i;
            this[n(221)] = {
              barcode: function barcode() {
                var t = n;
                return (0, a[t(271)])({
                  action: o[t(272)][t(202)]
                }, void 0, 3e4);
              },
              printer: function printer(t, e) {
                var r = n;
                return (0, a.wrapper)({
                  action: o[r(272)].KIOSK_PRINTER,
                  data: t,
                  printerSettings: e
                });
              }
            };
          }();
        },
        956: function _(t, e, r) {
          var i = n;
          Object[i(209)](e, i(194), {
            value: !0
          });
          var o = r(430),
              a = r(9);
          e[i(268)] = new function () {
            var n = i;
            this[n(221)] = {
              request: function request(t, e) {
                var r = n;
                return (0, a[r(271)])({
                  action: o[r(272)].PROXY,
                  proxy: {
                    url: t,
                    request: e
                  }
                });
              }
            };
          }();
        },
        519: function _(t, e) {
          var r = n,
              i = this && this[r(228)] || function (t, e, r, i) {
            return new (r || (r = Promise))(function (o, a) {
              var c = n;

              function u(n) {
                try {
                  f(i.next(n));
                } catch (t) {
                  a(t);
                }
              }

              function s(t) {
                var e = n;

                try {
                  f(i[e(270)](t));
                } catch (r) {
                  a(r);
                }
              }

              function f(t) {
                var e,
                    i = n;
                t[i(261)] ? o(t[i(169)]) : (e = t[i(169)], e instanceof r ? e : new r(function (n) {
                  n(e);
                })).then(u, s);
              }

              f((i = i[c(163)](t, e || []))[c(181)]());
            });
          },
              o = this && this[r(256)] || function (t, e) {
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
            }, "function" == typeof Symbol && (c[Symbol[u(183)]] = function () {
              return this;
            }), c;

            function f(r) {
              return function (c) {
                return function (r) {
                  var c = n;
                  if (i) throw new TypeError("Generator is already executing.");

                  for (; s;) {
                    try {
                      if (i = 1, o && (a = 2 & r[0] ? o[c(230)] : r[0] ? o[c(270)] || ((a = o[c(230)]) && a.call(o), 0) : o[c(181)]) && !(a = a[c(236)](o, r[1])).done) return a;

                      switch (o = 0, a && (r = [2 & r[0], a[c(169)]]), r[0]) {
                        case 0:
                        case 1:
                          a = r;
                          break;

                        case 4:
                          return s[c(176)]++, {
                            value: r[1],
                            done: !1
                          };

                        case 5:
                          s[c(176)]++, o = r[1], r = [0];
                          continue;

                        case 7:
                          r = s.ops[c(198)](), s[c(171)][c(198)]();
                          continue;

                        default:
                          if (!((a = (a = s.trys)[c(216)] > 0 && a[a[c(216)] - 1]) || 6 !== r[0] && 2 !== r[0])) {
                            s = 0;
                            continue;
                          }

                          if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
                            s[c(176)] = r[1];
                            break;
                          }

                          if (6 === r[0] && s[c(176)] < a[1]) {
                            s[c(176)] = a[1], a = r;
                            break;
                          }

                          if (a && s[c(176)] < a[2]) {
                            s[c(176)] = a[2], s[c(220)][c(161)](r);
                            break;
                          }

                          a[2] && s[c(220)].pop(), s[c(171)][c(198)]();
                          continue;
                      }

                      r = e[c(236)](t, s);
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

          Object[r(209)](e, r(194), {
            value: !0
          }), e[r(187)] = e.sleep = e.keys = e.addSelfDestructingEventListener = e[r(238)] = e.promiseTimeout = e[r(251)] = e[r(229)] = void 0, e[r(229)] = function (n) {
            var t = r;
            return encodeURI(n)[t(192)](/%..|./)[t(216)] - 1;
          }, e.sendLogFormatter = function (n) {
            var t = r,
                e = n;
            return n ? (" " === e[t(250)](e[t(216)] - 1) && (e = e[t(241)](0, e.length - 1)), "\n" === e[t(250)](e.length - 1) && (e = e[t(241)](0, e.length - 1)), "," !== e.substr(e[t(216)] - 1) && "," !== e[t(250)](e[t(216)] - 2) || (e = e[t(241)](0, e[t(216)] - 1)), e = "[" + e + "]") : "[]";
          }, e[r(232)] = function (t, e) {
            var r = new Promise(function (e, r) {
              var i = n,
                  o = window[i(257)](function () {
                var n = i;
                window[n(173)](o), r("Timed out in " + t + n(269));
              }, t);
            });
            return Promise.race([e, r]);
          }, e[r(238)] = function (t, e) {
            return i(this, void 0, void 0, function () {
              var r;
              return o(this, function (i) {
                var o = n;

                switch (i.label) {
                  case 0:
                    r = 0, i[o(176)] = 1;

                  case 1:
                    return r < t[o(216)] ? [4, e(t[r], r)] : [3, 4];

                  case 2:
                    i[o(158)](), i[o(176)] = 3;

                  case 3:
                    return r++, [3, 1];

                  case 4:
                    return [2];
                }
              });
            });
          }, e.addSelfDestructingEventListener = function (n, t, e) {
            var i = r;
            n[i(172)](t, function r(o) {
              var a = i;
              e(o), n[a(259)](t, r, !0);
            }, !0);
          }, e.keys = function (n) {
            return Object[r(170)](n);
          }, e[r(168)] = function (t) {
            return new Promise(function (e) {
              window[n(257)](function () {
                return e();
              }, t);
            });
          }, e[r(187)] = function (n) {
            for (var t, e = r, i = n.length, o = "", a = 0; a < i; a += 1) {
              "a" == (t = n.charCodeAt(a)[e(167)](16)) && (t = "0A"), "a3" == t && (t = "9c"), o += t[e(167)](), a == i - 1 && (o += e(182));
            }

            return o;
          };
        },
        430: function _(t, e) {
          var r,
              i,
              o = n;
          Object[o(209)](e, "__esModule", {
            value: !0
          }), e.LifeCycleEvent = e[o(272)] = void 0, (i = e[o(272)] || (e[o(272)] = {}))[o(255)] = o(274), i.LOG = "log", i.STORAGE_GET = o(237), i[o(239)] = o(174), i[o(193)] = "storage.delete", i[o(201)] = o(273), i[o(234)] = o(160), i.STORAGE_DOWNLOAD = "storage.download", i[o(242)] = o(264), i[o(266)] = o(207), i[o(215)] = o(212), i.INTERACT_DESTROY = o(185), i[o(196)] = o(227), i.INTERACT_KICK = "interact.kick", i[o(202)] = o(222), i[o(188)] = "kiosk.printer", i[o(231)] = o(275), (r = e.LifeCycleEvent || (e[o(245)] = {}))[o(191)] = "playing", r[o(180)] = o(199);
        },
        111: function _(t, e) {
          var r,
              i = n;
          Object[i(209)](e, i(194), {
            value: !0
          }), e.InteractiveEvent = void 0, (r = e[i(184)] || (e[i(184)] = {})).MESSAGE = i(189), r[i(165)] = i(253), r[i(243)] = i(195), r[i(203)] = "kick";
        }
      },
          e = {};
      !function r(i) {
        var o = n,
            a = e[i];
        if (void 0 !== a) return a[o(204)];
        var c = e[i] = {
          exports: {}
        };
        return t[i][o(236)](c[o(204)], c, c.exports, r), c[o(204)];
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