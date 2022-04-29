/**
 * Evexi API
 * Version 2.6.0-alpha.6
 */ var $0e35149d9d947b11$var$t, $0e35149d9d947b11$var$n, $0e35149d9d947b11$var$e;
!function(t) {
    t.INFO = "info", t.LOG = "log", t.STORAGE_GET = "storage.get", t.STORAGE_PUT = "storage.put", t.STORAGE_DELETE = "storage.delete", t.STORAGE_LIST = "storage.list", t.STORAGE_CLEAR = "storage.clear", t.STORAGE_DOWNLOAD = "storage.download", t.STORAGE_EXISTS = "storage.exists", t.INTERACT_CREATE = "interact.create", t.INTERACT_START = "interact.start", t.INTERACT_DESTROY = "interact.destroy", t.INTERACT_MESSAGE = "interact.message", t.INTERACT_KICK = "interact.kick", t.KIOSK_BARCODE = "kiosk.barcode", t.KIOSK_PRINTER = "kiosk.printer", t.PROXY = "proxy", t.ENV_VAR = "envVar";
}($0e35149d9d947b11$var$t || ($0e35149d9d947b11$var$t = {})), function(t) {
    t.SSSP2 = "SSSP2", t.HTML = "HTML", t.TIZEN = "TIZEN", t.KIOSK = "KIOSK";
}($0e35149d9d947b11$var$n || ($0e35149d9d947b11$var$n = {})), function(t) {
    var n, e, o;
    (n = t.PrinterPort || (t.PrinterPort = {})).PRINTERPORT0 = "PRINTERPORT0", n.PRINTERPORT1 = "PRINTERPORT1", n.PRINTERPORT2 = "PRINTERPORT2", (e = t.PrinterParity || (t.PrinterParity = {})).NONE = "NONE", e.ODD = "ODD", e.EVEN = "EVEN", (o = t.PrinterDataBits || (t.PrinterDataBits = {})).BITS5 = "BITS5", o.BITS6 = "BITS6", o.BITS7 = "BITS7", o.BITS8 = "BITS8";
}($0e35149d9d947b11$var$e || ($0e35149d9d947b11$var$e = {}));
var $0e35149d9d947b11$var$o = function(t1, n1) {
    return $0e35149d9d947b11$var$o = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(t, n) {
        t.__proto__ = n;
    } || function(t, n) {
        for(var e in n)Object.prototype.hasOwnProperty.call(n, e) && (t[e] = n[e]);
    }, $0e35149d9d947b11$var$o(t1, n1);
};
var $0e35149d9d947b11$var$i = function() {
    return $0e35149d9d947b11$var$i = Object.assign || function(t) {
        for(var n, e = 1, o = arguments.length; e < o; e++)for(var i in n = arguments[e])Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        return t;
    }, $0e35149d9d947b11$var$i.apply(this, arguments);
};
function $0e35149d9d947b11$var$r(t2, n2, e, o) {
    return new (e || (e = Promise))(function(i, r) {
        var s = function s(t) {
            try {
                a(o.next(t));
            } catch (n) {
                r(n);
            }
        };
        var c = function c(t) {
            try {
                a(o["throw"](t));
            } catch (n) {
                r(n);
            }
        };
        var a = function a(t3) {
            var _$n;
            t3.done ? i(t3.value) : (_$n = t3.value, _$n instanceof e ? _$n : new e(function(t) {
                t(_$n);
            })).then(s, c);
        };
        a((o = o.apply(t2, n2 || [])).next());
    });
}
function $0e35149d9d947b11$var$s(t, n) {
    var c1 = function c1(r2) {
        return function(c3) {
            return function(r) {
                if (e) throw new TypeError("Generator is already executing.");
                for(; s;)try {
                    if (e = 1, o && (i = 2 & r[0] ? o["return"] : r[0] ? o["throw"] || ((i = o["return"]) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
                    switch(o = 0, i && (r = [
                        2 & r[0],
                        i.value
                    ]), r[0]){
                        case 0:
                        case 1:
                            i = r;
                            break;
                        case 4:
                            return s.label++, {
                                value: r[1],
                                done: !1
                            };
                        case 5:
                            s.label++, o = r[1], r = [
                                0
                            ];
                            continue;
                        case 7:
                            r = s.ops.pop(), s.trys.pop();
                            continue;
                        default:
                            if (!(i = s.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== r[0] && 2 !== r[0])) {
                                s = 0;
                                continue;
                            }
                            if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                s.label = r[1];
                                break;
                            }
                            if (6 === r[0] && s.label < i[1]) {
                                s.label = i[1], i = r;
                                break;
                            }
                            if (i && s.label < i[2]) {
                                s.label = i[2], s.ops.push(r);
                                break;
                            }
                            i[2] && s.ops.pop(), s.trys.pop();
                            continue;
                    }
                    r = n.call(t, s);
                } catch (c) {
                    r = [
                        6,
                        c
                    ], o = 0;
                } finally{
                    e = i = 0;
                }
                if (5 & r[0]) throw r[1];
                return {
                    value: r[0] ? r[1] : void 0,
                    done: !0
                };
            }([
                r2,
                c3
            ]);
        };
    };
    var e, o, i, r1, s = {
        label: 0,
        sent: function sent() {
            if (1 & i[0]) throw i[1];
            return i[1];
        },
        trys: [],
        ops: []
    };
    return r1 = {
        next: c1(0),
        "throw": c1(1),
        "return": c1(2)
    }, "function" == typeof Symbol && (r1[Symbol.iterator] = function() {
        return this;
    }), r1;
}
function $0e35149d9d947b11$var$c(t, n) {
    var e1 = new Promise(function(n, e) {
        var o = window.setTimeout(function() {
            window.clearTimeout(o), e("Timed out in " + t + "ms.");
        }, t);
    });
    return Promise.race([
        n,
        e1
    ]);
}
function $0e35149d9d947b11$var$a(t) {
    try {
        window.parent.postMessage(JSON.stringify($0e35149d9d947b11$var$i({}, t)), "*");
    } catch (n) {
        throw new Error("wrapperNoListener error");
    }
}
function $0e35149d9d947b11$var$u(t4, n, e2) {
    return $0e35149d9d947b11$var$r(this, void 0, void 0, function() {
        var o1;
        return $0e35149d9d947b11$var$s(this, function(r) {
            switch(r.label){
                case 0:
                    return r.trys.push([
                        0,
                        2,
                        ,
                        3
                    ]), [
                        4,
                        $0e35149d9d947b11$var$c(e2 || 5e3, new Promise(function(e) {
                            var o, _$r, _$s;
                            o = function o(t) {
                                e(t.response);
                            }, _$r = $0e35149d9d947b11$var$i({
                                action: t4.action
                            }, n), _$s = function(t5) {
                                var _$n, _$e = JSON.parse(t5.data);
                                if (_$e) try {
                                    (_$n = _$r, Object.keys(_$n)).forEach(function(t) {
                                        if (_$r[t] !== _$e[t]) throw new Error("");
                                    }), window.removeEventListener("message", _$s, !0), o(_$e);
                                } catch (t) {}
                            }, window.addEventListener("message", _$s, !0), window.parent.postMessage(JSON.stringify($0e35149d9d947b11$var$i({}, t4)), "*");
                        }))
                    ];
                case 1:
                    return [
                        2,
                        r.sent()
                    ];
                case 2:
                    throw o1 = r.sent(), new Error(o1);
                case 3:
                    return [
                        2
                    ];
            }
        });
    });
}
var $0e35149d9d947b11$var$f, $0e35149d9d947b11$var$l, $0e35149d9d947b11$var$h, $0e35149d9d947b11$var$d, $0e35149d9d947b11$var$p, $0e35149d9d947b11$var$v, $0e35149d9d947b11$var$E, $0e35149d9d947b11$var$T, $0e35149d9d947b11$var$S, $0e35149d9d947b11$var$O, $0e35149d9d947b11$var$I, $0e35149d9d947b11$var$R, $0e35149d9d947b11$var$g, $0e35149d9d947b11$var$A, $0e35149d9d947b11$var$N, $0e35149d9d947b11$var$y = new function() {
    this.all = {
        get: function get(n) {
            return $0e35149d9d947b11$var$u({
                action: $0e35149d9d947b11$var$t.STORAGE_GET,
                name: n
            }, {
                name: n
            });
        },
        put: function put(n, e) {
            return $0e35149d9d947b11$var$u({
                action: $0e35149d9d947b11$var$t.STORAGE_PUT,
                name: n,
                data: e
            }, {
                name: n
            });
        },
        del: function del(n) {
            return $0e35149d9d947b11$var$u({
                action: $0e35149d9d947b11$var$t.STORAGE_DELETE,
                name: n
            }, {
                name: n
            });
        },
        list: function list() {
            return $0e35149d9d947b11$var$u({
                action: $0e35149d9d947b11$var$t.STORAGE_LIST
            });
        },
        clear: function clear() {
            return $0e35149d9d947b11$var$u({
                action: $0e35149d9d947b11$var$t.STORAGE_CLEAR
            });
        },
        download: function download(n, e) {
            return $0e35149d9d947b11$var$u({
                action: $0e35149d9d947b11$var$t.STORAGE_DOWNLOAD,
                url: n,
                name: e
            }, {
                name: e
            });
        },
        exists: function exists(n) {
            return $0e35149d9d947b11$var$u({
                action: $0e35149d9d947b11$var$t.STORAGE_EXISTS,
                name: n
            }, {
                name: n
            });
        }
    };
};
!function(t) {
    t.ERROR = "error", t.LOG = "log", t.INFO = "info", t.WARN = "warn", t.NONE = "none";
}($0e35149d9d947b11$var$f || ($0e35149d9d947b11$var$f = {})), function(t) {
    t.AUTH = "Auth";
}($0e35149d9d947b11$var$l || ($0e35149d9d947b11$var$l = {})), function(t) {
    t.LANDSCAPE = "landscape", t.PORTRAIT = "portrait", t.ANY = "any";
}($0e35149d9d947b11$var$h || ($0e35149d9d947b11$var$h = {})), function(t) {
    t.NAME = "name", t["-NAME"] = "-name", t.UPDATED_AT = "updated_at", t["-UPDATED_AT"] = "-updated_at", t.CREATED_AT = "-created_at", t["-CREATED_AT"] = "-created_at";
}($0e35149d9d947b11$var$d || ($0e35149d9d947b11$var$d = {})), function(t) {
    t.DEBUG = "debug", t.INFO = "info", t.WARN = "warn", t.ERROR = "error";
}($0e35149d9d947b11$var$p || ($0e35149d9d947b11$var$p = {})), function(t) {
    t.SEEN = "seen", t.PENDING = "pending";
}($0e35149d9d947b11$var$v || ($0e35149d9d947b11$var$v = {})), function(t) {
    t.PLAYLIST = "playlist", t.SCHEDULE = "schedule";
}($0e35149d9d947b11$var$E || ($0e35149d9d947b11$var$E = {})), function(t) {
    t.OFFLINE = "Offline", t.ONLINE = "Online";
}($0e35149d9d947b11$var$T || ($0e35149d9d947b11$var$T = {})), function(t) {
    t.IMAGE = "image", t.TEXT = "text", t.VIDEO = "video", t.WEB = "web", t.RSS = "rss", t.PIP = "pip";
}($0e35149d9d947b11$var$S || ($0e35149d9d947b11$var$S = {})), function(t) {
    t.ACTIVE = "Active", t.INACTIVE = "Inactive";
}($0e35149d9d947b11$var$O || ($0e35149d9d947b11$var$O = {})), function(t) {
    t.SLIDE_LEFT = "slide-in-from-left", t.SLIDE_TOP = "slide-in-from-top", t.SLIDE_BOTTOM = "slide-in-from-bottom", t.SLIDE_RIGHT = "slide-in-from-right", t.FADE = "fade-in", t.ZOOM = "zoom-in";
}($0e35149d9d947b11$var$I || ($0e35149d9d947b11$var$I = {})), function(t) {
    t.SLIDE_LEFT = "slide-out-to-left", t.SLIDE_TOP = "slide-out-to-top", t.SLIDE_BOTTOM = "slide-out-to-bottom", t.SLIDE_RIGHT = "slide-out-to-right", t.FADE = "fade-out", t.ZOOM = "zoom-out";
}($0e35149d9d947b11$var$R || ($0e35149d9d947b11$var$R = {})), function(t) {
    t.MESSAGE = "message", t.CONNECT = "connect", t.DISCONNECT = "disconnect", t.KICK = "kick";
}($0e35149d9d947b11$var$g || ($0e35149d9d947b11$var$g = {})), function(t) {
    t.SSSP2 = "SSSP2", t.HTML = "HTML", t.TIZEN = "TIZEN", t.KIOSK = "KIOSK";
}($0e35149d9d947b11$var$A || ($0e35149d9d947b11$var$A = {})), function(t) {
    t.SP = "sp", t.SETTINGS = "settings", t.CLEAR_AND_RESTART = "clearrestart", t.REBOOT = "reboot", t.LOGS = "logs", t.PING = "ping", t.INTERACT = "interact", t.INTERACT_START = "interact:start", t.TRANSITION = "transition", t.HC_HEALTH = "health", t.HC_SETTINGS = "info:settings", t.HC_INFO = "info";
}($0e35149d9d947b11$var$N || ($0e35149d9d947b11$var$N = {}));
var $0e35149d9d947b11$var$w, $0e35149d9d947b11$var$_, $0e35149d9d947b11$var$m = new function() {
    var n3 = this;
    this.all = {
        create: function create(n, e, o, r) {
            return $0e35149d9d947b11$var$u($0e35149d9d947b11$var$i($0e35149d9d947b11$var$i($0e35149d9d947b11$var$i({
                action: $0e35149d9d947b11$var$t.INTERACT_CREATE,
                maxRuntime: n
            }, e && {
                clientUrl: e
            }), o && {
                maxClients: o
            }), r && {
                noCommunicationTimeout: r
            }));
        },
        start: function start() {
            return $0e35149d9d947b11$var$a({
                action: $0e35149d9d947b11$var$t.INTERACT_START
            });
        },
        destroy: function destroy() {
            n3.events = {}, $0e35149d9d947b11$var$a({
                action: $0e35149d9d947b11$var$t.INTERACT_DESTROY
            });
        },
        message: function message(n, e) {
            return $0e35149d9d947b11$var$a($0e35149d9d947b11$var$i({
                action: $0e35149d9d947b11$var$t.INTERACT_MESSAGE,
                data: n
            }, e && {
                client: e
            }));
        },
        kick: function kick(n) {
            return $0e35149d9d947b11$var$a({
                action: $0e35149d9d947b11$var$t.INTERACT_KICK,
                client: n
            });
        },
        onMessage: function onMessage(t) {
            n3.events.onMessage = t;
        },
        onConnect: function onConnect(t) {
            n3.events.onConnect = t;
        },
        onDisconnect: function onDisconnect(t) {
            n3.events.onDisconnect = t;
        },
        onKick: function onKick(t) {
            n3.events.onKick = t;
        }
    }, this.events = {}, window.addEventListener("message", function(e) {
        var o = JSON.parse(e.data);
        o.action === $0e35149d9d947b11$var$t.INTERACT_MESSAGE && (o.event === $0e35149d9d947b11$var$g.MESSAGE && n3.events.onMessage && o.data && n3.events.onMessage(o.data, o.client), o.event === $0e35149d9d947b11$var$g.CONNECT && n3.events.onConnect && n3.events.onConnect(o.client), o.event === $0e35149d9d947b11$var$g.DISCONNECT && n3.events.onDisconnect && n3.events.onDisconnect(o.client), o.event === $0e35149d9d947b11$var$g.KICK && n3.events.onKick && n3.events.onKick(o.client));
    });
}, $0e35149d9d947b11$var$P = new function() {
    this.all = {
        barcode: function barcode() {
            return $0e35149d9d947b11$var$u({
                action: $0e35149d9d947b11$var$t.KIOSK_BARCODE
            }, undefined, 3e4);
        },
        printer: function printer(n, e) {
            return $0e35149d9d947b11$var$u({
                action: $0e35149d9d947b11$var$t.KIOSK_PRINTER,
                data: n,
                printerSettings: e
            });
        }
    };
}, $0e35149d9d947b11$var$C = new function() {
    this.all = {
        request: function request(n, e) {
            return $0e35149d9d947b11$var$u({
                action: $0e35149d9d947b11$var$t.PROXY,
                proxy: {
                    url: n,
                    request: e
                }
            }, {
                name: n
            });
        }
    };
}, $0e35149d9d947b11$var$D = new function() {
    this.all = {
        env: function env(n) {
            return $0e35149d9d947b11$var$u({
                action: $0e35149d9d947b11$var$t.ENV_VAR,
                name: n
            }, {
                name: n
            });
        }
    };
}, $0e35149d9d947b11$var$b = function $0e35149d9d947b11$var$b() {
    this.fs = $0e35149d9d947b11$var$y.all, this.interactive = $0e35149d9d947b11$var$m.all, this.tizen = $0e35149d9d947b11$var$P.all, this.proxy = $0e35149d9d947b11$var$C.all.request, this.env = $0e35149d9d947b11$var$D.all.env, this.log = function(n) {
        return $0e35149d9d947b11$var$a({
            action: $0e35149d9d947b11$var$t.LOG,
            data: n
        });
    }, this.info = function() {
        return $0e35149d9d947b11$var$u({
            action: $0e35149d9d947b11$var$t.INFO
        });
    };
}, $0e35149d9d947b11$var$k = {
    receiptGenerator: function() {
        var t = function t() {
            this.characters = 42, this.data = "";
        };
        return t.prototype.blank = function(t) {
            return void 0 === t && (t = 1), this.data += "".concat(" ".repeat(this.characters), "\n").repeat(t), this;
        }, t.prototype.left = function(t) {
            var n = this.characters - t.length;
            return this.data += "".concat(t).concat(" ".repeat(n), "\n"), this;
        }, t.prototype.right = function(t) {
            var n = this.characters - t.length;
            return this.data += "".concat(" ".repeat(n)).concat(t, "\n"), this;
        }, t.prototype.stretch = function(t, n, e) {
            void 0 === e && (e = " ");
            var o = this.characters - (t.length + n.length);
            return this.data += "".concat(t).concat(e.repeat(o)).concat(n, "\n"), this;
        }, t.prototype.centre = function(t) {
            var n = this.characters - t.length;
            return this.data += "".concat(" ".repeat(Math.floor(n / 2))).concat(t).concat(" ".repeat(Math.floor(n / 2)), "\n"), this;
        }, t.prototype.fill = function(t) {
            return this.data += "".concat(t.repeat(this.characters), "\n"), this;
        }, t.prototype.inject = function(t) {
            return this.data += t, this;
        }, t.prototype.generate = function(t) {
            return void 0 === t && (t = !0), t && (this.data += "".concat(" ".repeat(this.characters), "\n").repeat(6)), this.data;
        }, t;
    }()
};
!function(t) {
    t.Prod = "wss://mrx.cx/interactive/socket", t.Dev = "wss://dev.mrx.cx/interactive/socket", t.Edge = "wss://edge.mrx.cx/interactive/socket", t.Local = "ws://localhost:1337";
}($0e35149d9d947b11$var$w || ($0e35149d9d947b11$var$w = {})), function(t) {
    t.InitializationError = "Initialization Failed";
}($0e35149d9d947b11$var$_ || ($0e35149d9d947b11$var$_ = {}));
var $0e35149d9d947b11$var$x = function(t6) {
    var n4 = function n4(n) {
        var e = t6.call(this, n) || this;
        return e.name = $0e35149d9d947b11$var$_.InitializationError, e;
    };
    return function(t, n) {
        var e = function e() {
            this.constructor = t;
        };
        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
        $0e35149d9d947b11$var$o(t, n), t.prototype = null === n ? Object.create(n) : (e.prototype = n.prototype, new e);
    }(n4, t6), n4;
}(Error), $0e35149d9d947b11$var$L = function() {
    var t7 = function t7(t8, n) {
        var e, o = this;
        if (this.sessionId = t8, this.environmentKey = n, this.socket = null, this.pingInterval = null, this.events = {
            onMessage: null,
            onOpen: null,
            onClose: null
        }, !t8) throw new $0e35149d9d947b11$var$x("sessionId not provided");
        this.socket = new WebSocket("".concat((e = n, $0e35149d9d947b11$var$w[e || "Prod"]), "/").concat(t8)), this.socket.onmessage = function(t) {
            if (o.events.onMessage) {
                var _$n = JSON.parse(t.data);
                "ping" !== _$n.action && "pong" !== _$n.action && o.events.onMessage(_$n.data);
            }
        }, this.socket.onopen = function() {
            o.events.onOpen && o.events.onOpen();
        }, this.socket.onclose = function(t) {
            o.events.onClose && o.events.onClose(t.code), o.destroy();
        }, this.pingInterval = window.setInterval(function() {
            return o.send("ping", "ping");
        }, 5e3);
    };
    return t7.prototype.send = function(t, n) {
        void 0 === n && (n = "message"), this.socket && this.socket.readyState === WebSocket.OPEN && this.socket.send(JSON.stringify({
            action: n,
            data: t
        }));
    }, t7.prototype.onOpen = function(t) {
        return this.events.onOpen = t.bind(this), this;
    }, t7.prototype.onClose = function(t) {
        return this.events.onClose = t.bind(this), this;
    }, t7.prototype.onMessage = function(t) {
        return this.events.onMessage = t.bind(this), this;
    }, t7.prototype.destroy = function() {
        this.socket && this.socket.close(1e3), this.events.onMessage = null, this.events.onOpen = null, this.events.onClose = null, this.socket = null, this.pingInterval && window.clearInterval(this.pingInterval);
    }, t7.urlParam = function(t) {
        return void 0 === t && (t = "session"), new URLSearchParams(window.location.search).get(t);
    }, t7;
}(), $0e35149d9d947b11$export$3245ed38508723bb = function() {
    var t9 = function t9(t) {
        this.Evexi = t, this.fs().interactive().proxy("/").env({}).tizen({
            barcodeReturn: ""
        }).log().info();
    };
    return t9.prototype.fs = function() {
        var t = this;
        return this.Evexi.fs = {
            get: function get(n) {
                return $0e35149d9d947b11$var$r(t, void 0, void 0, function() {
                    return $0e35149d9d947b11$var$s(this, function(t) {
                        return [
                            2,
                            {
                                name: n,
                                error: null,
                                type: "text",
                                data: "text"
                            }
                        ];
                    });
                });
            },
            put: function put(n, e) {
                return $0e35149d9d947b11$var$r(t, void 0, void 0, function() {
                    return $0e35149d9d947b11$var$s(this, function(t) {
                        return [
                            2,
                            !0
                        ];
                    });
                });
            },
            del: function del(n) {
                return $0e35149d9d947b11$var$r(t, void 0, void 0, function() {
                    return $0e35149d9d947b11$var$s(this, function(t) {
                        return [
                            2,
                            !0
                        ];
                    });
                });
            },
            list: function list() {
                return $0e35149d9d947b11$var$r(t, void 0, void 0, function() {
                    return $0e35149d9d947b11$var$s(this, function(t) {
                        return [
                            2,
                            []
                        ];
                    });
                });
            },
            clear: function clear() {
                return $0e35149d9d947b11$var$r(t, void 0, void 0, function() {
                    return $0e35149d9d947b11$var$s(this, function(t) {
                        return [
                            2,
                            !0
                        ];
                    });
                });
            },
            download: function download(n, e) {
                return $0e35149d9d947b11$var$r(t, void 0, void 0, function() {
                    return $0e35149d9d947b11$var$s(this, function(t) {
                        return [
                            2,
                            {
                                url: n,
                                data: "",
                                error: null
                            }
                        ];
                    });
                });
            },
            exists: function exists(n) {
                return $0e35149d9d947b11$var$r(t, void 0, void 0, function() {
                    return $0e35149d9d947b11$var$s(this, function(t) {
                        return [
                            2,
                            !0
                        ];
                    });
                });
            }
        }, this;
    }, t9.prototype.interactive = function() {
        var t = this;
        return this.Evexi.interactive = {
            create: function create(n, e, o, i) {
                return $0e35149d9d947b11$var$r(t, void 0, void 0, function() {
                    return $0e35149d9d947b11$var$s(this, function(t) {
                        return [
                            2,
                            {
                                qr: "",
                                url: "",
                                sessionId: ""
                            }
                        ];
                    });
                });
            },
            start: function start() {},
            destroy: function destroy() {},
            message: function message(t, n) {},
            kick: function kick(t) {},
            onMessage: function onMessage(t) {},
            onConnect: function onConnect(t) {},
            onDisconnect: function onDisconnect(t) {},
            onKick: function onKick(t) {}
        }, this;
    }, t9.prototype.proxy = function(t10) {
        var n5 = this, e3 = function e3(e, o) {
            return $0e35149d9d947b11$var$r(n5, void 0, void 0, function() {
                var n, i, _$r;
                return $0e35149d9d947b11$var$s(this, function(s) {
                    switch(s.label){
                        case 0:
                            return o || (o = {}), o.headers || (o.headers = {
                                "Content-Type": "application/json"
                            }), o ? [
                                4,
                                window.fetch("".concat(t10).concat(e), o)
                            ] : [
                                3,
                                2
                            ];
                        case 1:
                            return i = s.sent(), [
                                3,
                                4
                            ];
                        case 2:
                            return [
                                4,
                                window.fetch("".concat(t10).concat(e))
                            ];
                        case 3:
                            i = s.sent(), s.label = 4;
                        case 4:
                            n = i, s.label = 5;
                        case 5:
                            return s.trys.push([
                                5,
                                7,
                                ,
                                8
                            ]), [
                                4,
                                n.json()
                            ];
                        case 6:
                            return _$r = s.sent(), [
                                3,
                                8
                            ];
                        case 7:
                            return s.sent(), [
                                2,
                                !1
                            ];
                        case 8:
                            return [
                                2,
                                {
                                    status: n.status,
                                    statusText: n.statusText,
                                    url: n.url,
                                    ok: n.ok,
                                    json: _$r
                                }
                            ];
                    }
                });
            });
        }, o2 = function o2(e, o) {
            return $0e35149d9d947b11$var$r(n5, void 0, void 0, function() {
                var n;
                return $0e35149d9d947b11$var$s(this, function(o) {
                    return (n = t10.find(function(t) {
                        return -1 !== e.indexOf(t.endpoint);
                    })) ? [
                        2,
                        {
                            status: 200,
                            statusText: "",
                            url: e,
                            ok: !0,
                            json: n.response
                        }
                    ] : [
                        2,
                        {
                            status: 404,
                            statusText: "Endpoint not stubbed",
                            url: e,
                            ok: !1,
                            json: undefined
                        }
                    ];
                });
            });
        };
        return this.Evexi.proxy = function(n, i) {
            return $0e35149d9d947b11$var$r(this, void 0, void 0, function() {
                return $0e35149d9d947b11$var$s(this, function(r) {
                    return "object" == typeof t10 ? [
                        2,
                        o2(n)
                    ] : [
                        2,
                        e3(n, i)
                    ];
                });
            });
        }, this;
    }, t9.prototype.env = function(t) {
        return this.Evexi.env = function(n) {
            return $0e35149d9d947b11$var$r(this, void 0, void 0, function() {
                return $0e35149d9d947b11$var$s(this, function(e) {
                    return [
                        2,
                        t[n]
                    ];
                });
            });
        }, this;
    }, t9.prototype.tizen = function(t11) {
        return this.Evexi.tizen = {
            printer: function printer(t, n) {
                return $0e35149d9d947b11$var$r(this, void 0, void 0, function() {
                    return $0e35149d9d947b11$var$s(this, function(e) {
                        return console.log(t, n), [
                            2,
                            Promise.resolve(!0)
                        ];
                    });
                });
            },
            barcode: function barcode() {
                var n;
                return $0e35149d9d947b11$var$r(this, void 0, void 0, function() {
                    return $0e35149d9d947b11$var$s(this, function(e) {
                        return [
                            2,
                            null !== (n = t11.barcodeReturn) && void 0 !== n ? n : ""
                        ];
                    });
                });
            }
        }, this;
    }, t9.prototype.log = function() {
        return this.Evexi.log = function(t) {
            console.log(t);
        }, this;
    }, t9.prototype.info = function() {
        return this.Evexi.info = function() {
            return $0e35149d9d947b11$var$r(this, void 0, void 0, function() {
                return $0e35149d9d947b11$var$s(this, function(t) {
                    return [
                        2,
                        {
                            deviceId: "",
                            version: "",
                            provider: !1
                        }
                    ];
                });
            });
        }, this;
    }, t9;
}(), $0e35149d9d947b11$export$429f1c4820dd15e8 = function $0e35149d9d947b11$export$429f1c4820dd15e8() {
    this.api = new $0e35149d9d947b11$var$b, this.helper = $0e35149d9d947b11$var$k, this.Scan = $0e35149d9d947b11$var$L, this.env = this.api.env, this.fs = this.api.fs, this.info = this.api.info, this.interactive = this.api.interactive, this.log = this.api.log, this.proxy = this.api.proxy, this.tizen = this.api.tizen;
}, $0e35149d9d947b11$export$a228efff746656cd = new $0e35149d9d947b11$export$429f1c4820dd15e8;
console.log("Running Evexi API");


// get the session id from the url param
var $a40ec457162b4691$var$sessionId = $0e35149d9d947b11$export$a228efff746656cd.Scan.urlParam();
// listen and send messages to the WS API (the second optional argument is the environment Prod, Dev or Edge. DEFAULT: Prod)
var $a40ec457162b4691$var$scan = new $0e35149d9d947b11$export$a228efff746656cd.Scan($a40ec457162b4691$var$sessionId, 'Edge').onMessage(function(message) {
    console.log('Message: ', message);
}).onOpen(function() {
    console.log('Opened');
    $a40ec457162b4691$var$scan.send('message from scanURL to content');
}).onClose(function(code) {
    console.log('Closed: ', code);
});
// send message type into the input box on the page
// @ts-ignore
window.send = function() {
    var msg = document.getElementById("message").value;
    $a40ec457162b4691$var$scan.send(msg);
};


