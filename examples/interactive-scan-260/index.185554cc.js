var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
/**
 * Evexi API
 * Version 2.6.1
 */ var $0e35149d9d947b11$var$t42, $0e35149d9d947b11$var$n, $0e35149d9d947b11$var$e17, $0e35149d9d947b11$var$i, $0e35149d9d947b11$var$o, $0e35149d9d947b11$var$r, $0e35149d9d947b11$var$s1, $0e35149d9d947b11$var$c1 = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof $parcel$global ? $parcel$global : "undefined" != typeof self ? self : {}, $0e35149d9d947b11$var$a = {};
$0e35149d9d947b11$var$t42 = $0e35149d9d947b11$var$a, Object.defineProperty($0e35149d9d947b11$var$t42, "__esModule", {
    value: !0
}), $0e35149d9d947b11$var$t42.b2bSerialPrint = $0e35149d9d947b11$var$t42.EnvironmentType = $0e35149d9d947b11$var$t42.Actions = void 0, ($0e35149d9d947b11$var$n = $0e35149d9d947b11$var$t42.Actions || ($0e35149d9d947b11$var$t42.Actions = {})).INFO = "info", $0e35149d9d947b11$var$n.LOG = "log", $0e35149d9d947b11$var$n.STORAGE_GET = "storage.get", $0e35149d9d947b11$var$n.STORAGE_PUT = "storage.put", $0e35149d9d947b11$var$n.STORAGE_DELETE = "storage.delete", $0e35149d9d947b11$var$n.STORAGE_LIST = "storage.list", $0e35149d9d947b11$var$n.STORAGE_CLEAR = "storage.clear", $0e35149d9d947b11$var$n.STORAGE_DOWNLOAD = "storage.download", $0e35149d9d947b11$var$n.STORAGE_EXISTS = "storage.exists", $0e35149d9d947b11$var$n.INTERACT_CREATE = "interact.create", $0e35149d9d947b11$var$n.INTERACT_START = "interact.start", $0e35149d9d947b11$var$n.INTERACT_DESTROY = "interact.destroy", $0e35149d9d947b11$var$n.INTERACT_MESSAGE = "interact.message", $0e35149d9d947b11$var$n.INTERACT_KICK = "interact.kick", $0e35149d9d947b11$var$n.KIOSK_BARCODE = "kiosk.barcode", $0e35149d9d947b11$var$n.KIOSK_PRINTER = "kiosk.printer", $0e35149d9d947b11$var$n.PROXY = "proxy", $0e35149d9d947b11$var$n.ENV_VAR = "envVar", ($0e35149d9d947b11$var$e17 = $0e35149d9d947b11$var$t42.EnvironmentType || ($0e35149d9d947b11$var$t42.EnvironmentType = {})).SSSP2 = "SSSP2", $0e35149d9d947b11$var$e17.HTML = "HTML", $0e35149d9d947b11$var$e17.TIZEN = "TIZEN", $0e35149d9d947b11$var$e17.KIOSK = "KIOSK", $0e35149d9d947b11$var$i = $0e35149d9d947b11$var$t42.b2bSerialPrint || ($0e35149d9d947b11$var$t42.b2bSerialPrint = {}), ($0e35149d9d947b11$var$o = $0e35149d9d947b11$var$i.PrinterPort || ($0e35149d9d947b11$var$i.PrinterPort = {})).PRINTERPORT0 = "PRINTERPORT0", $0e35149d9d947b11$var$o.PRINTERPORT1 = "PRINTERPORT1", $0e35149d9d947b11$var$o.PRINTERPORT2 = "PRINTERPORT2", ($0e35149d9d947b11$var$r = $0e35149d9d947b11$var$i.PrinterParity || ($0e35149d9d947b11$var$i.PrinterParity = {})).NONE = "NONE", $0e35149d9d947b11$var$r.ODD = "ODD", $0e35149d9d947b11$var$r.EVEN = "EVEN", ($0e35149d9d947b11$var$s1 = $0e35149d9d947b11$var$i.PrinterDataBits || ($0e35149d9d947b11$var$i.PrinterDataBits = {})).BITS5 = "BITS5", $0e35149d9d947b11$var$s1.BITS6 = "BITS6", $0e35149d9d947b11$var$s1.BITS7 = "BITS7", $0e35149d9d947b11$var$s1.BITS8 = "BITS8";
var $0e35149d9d947b11$var$u = function(t1, n1) {
    return $0e35149d9d947b11$var$u = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(t2, n2) {
        t2.__proto__ = n2;
    } || function(t3, n3) {
        for(var e1 in n3)Object.prototype.hasOwnProperty.call(n3, e1) && (t3[e1] = n3[e1]);
    }, $0e35149d9d947b11$var$u(t1, n1);
};
var $0e35149d9d947b11$var$f = function() {
    return $0e35149d9d947b11$var$f = Object.assign || function(t4) {
        for(var n4, e2 = 1, i1 = arguments.length; e2 < i1; e2++)for(var o1 in n4 = arguments[e2])Object.prototype.hasOwnProperty.call(n4, o1) && (t4[o1] = n4[o1]);
        return t4;
    }, $0e35149d9d947b11$var$f.apply(this, arguments);
};
function $0e35149d9d947b11$var$l(t5, n5, e3, i2) {
    return new (e3 || (e3 = Promise))(function(o2, r1) {
        var s = function s(t6) {
            try {
                a1(i2.next(t6));
            } catch (n6) {
                r1(n6);
            }
        };
        var c = function c(t7) {
            try {
                a1(i2["throw"](t7));
            } catch (n7) {
                r1(n7);
            }
        };
        var a1 = function a1(t8) {
            var _$n;
            t8.done ? o2(t8.value) : (_$n = t8.value, _$n instanceof e3 ? _$n : new e3(function(t9) {
                t9(_$n);
            })).then(s, c);
        };
        a1((i2 = i2.apply(t5, n5 || [])).next());
    });
}
function $0e35149d9d947b11$var$h(t10, n8) {
    var c2 = function c2(r3) {
        return function(c4) {
            return function(r4) {
                if (e4) throw new TypeError("Generator is already executing.");
                for(; s;)try {
                    if (e4 = 1, i3 && (o3 = 2 & r4[0] ? i3["return"] : r4[0] ? i3["throw"] || ((o3 = i3["return"]) && o3.call(i3), 0) : i3.next) && !(o3 = o3.call(i3, r4[1])).done) return o3;
                    switch(i3 = 0, o3 && (r4 = [
                        2 & r4[0],
                        o3.value
                    ]), r4[0]){
                        case 0:
                        case 1:
                            o3 = r4;
                            break;
                        case 4:
                            return s.label++, {
                                value: r4[1],
                                done: !1
                            };
                        case 5:
                            s.label++, i3 = r4[1], r4 = [
                                0
                            ];
                            continue;
                        case 7:
                            r4 = s.ops.pop(), s.trys.pop();
                            continue;
                        default:
                            if (!(o3 = s.trys, (o3 = o3.length > 0 && o3[o3.length - 1]) || 6 !== r4[0] && 2 !== r4[0])) {
                                s = 0;
                                continue;
                            }
                            if (3 === r4[0] && (!o3 || r4[1] > o3[0] && r4[1] < o3[3])) {
                                s.label = r4[1];
                                break;
                            }
                            if (6 === r4[0] && s.label < o3[1]) {
                                s.label = o3[1], o3 = r4;
                                break;
                            }
                            if (o3 && s.label < o3[2]) {
                                s.label = o3[2], s.ops.push(r4);
                                break;
                            }
                            o3[2] && s.ops.pop(), s.trys.pop();
                            continue;
                    }
                    r4 = n8.call(t10, s);
                } catch (c) {
                    r4 = [
                        6,
                        c
                    ], i3 = 0;
                } finally{
                    e4 = o3 = 0;
                }
                if (5 & r4[0]) throw r4[1];
                return {
                    value: r4[0] ? r4[1] : void 0,
                    done: !0
                };
            }([
                r3,
                c4
            ]);
        };
    };
    var e4, i3, o3, r2, s = {
        label: 0,
        sent: function sent() {
            if (1 & o3[0]) throw o3[1];
            return o3[1];
        },
        trys: [],
        ops: []
    };
    return r2 = {
        next: c2(0),
        "throw": c2(1),
        "return": c2(2)
    }, "function" == typeof Symbol && (r2[Symbol.iterator] = function() {
        return this;
    }), r2;
}
var $0e35149d9d947b11$var$v = {};
Object.defineProperty($0e35149d9d947b11$var$v, "__esModule", {
    value: !0
}), $0e35149d9d947b11$var$v.queryString = $0e35149d9d947b11$var$p = $0e35149d9d947b11$var$v.keys = $0e35149d9d947b11$var$d = $0e35149d9d947b11$var$v.promiseTimeout = void 0;
var $0e35149d9d947b11$var$d = $0e35149d9d947b11$var$v.promiseTimeout = function d(t11, n9) {
    var e5 = new Promise(function(n, e6) {
        var i4 = window.setTimeout(function() {
            window.clearTimeout(i4), e6("Timed out in " + t11 + "ms.");
        }, t11);
    });
    return Promise.race([
        n9,
        e5
    ]);
};
var $0e35149d9d947b11$var$p = $0e35149d9d947b11$var$v.keys = function p(t12) {
    return Object.keys(t12);
};
$0e35149d9d947b11$var$v.queryString = function(t13) {
    var n10 = Object.keys(t13).map(function(n11) {
        return n11 + "=" + t13[n11];
    }).join("&");
    return n10 ? "?".concat(n10) : "";
};
function $0e35149d9d947b11$var$T(t14) {
    try {
        window.parent.postMessage(JSON.stringify($0e35149d9d947b11$var$f({}, t14)), "*");
    } catch (n) {
        throw new Error("wrapperNoListener error");
    }
}
function $0e35149d9d947b11$var$E(t15, n12, e7) {
    return $0e35149d9d947b11$var$l(this, void 0, void 0, function() {
        var i5;
        return $0e35149d9d947b11$var$h(this, function(o4) {
            switch(o4.label){
                case 0:
                    return o4.trys.push([
                        0,
                        2,
                        ,
                        3
                    ]), [
                        4,
                        $0e35149d9d947b11$var$d(e7 || 5e3, new Promise(function(e8) {
                            var i6, _$o, r5;
                            i6 = function i6(t16) {
                                e8(t16.response);
                            }, _$o = $0e35149d9d947b11$var$f({
                                action: t15.action
                            }, n12), r5 = function(t17) {
                                var _$n = JSON.parse(t17.data);
                                if (_$n) try {
                                    $0e35149d9d947b11$var$p(_$o).forEach(function(t18) {
                                        if (_$o[t18] !== _$n[t18]) throw new Error("");
                                    }), window.removeEventListener("message", r5, !0), i6(_$n);
                                } catch (t) {}
                            }, window.addEventListener("message", r5, !0), window.parent.postMessage(JSON.stringify($0e35149d9d947b11$var$f({}, t15)), "*");
                        }))
                    ];
                case 1:
                    return [
                        2,
                        o4.sent()
                    ];
                case 2:
                    throw i5 = o4.sent(), new Error(i5);
                case 3:
                    return [
                        2
                    ];
            }
        });
    });
}
var $0e35149d9d947b11$var$O = new function() {
    this.all = {
        get: function get(t19) {
            return $0e35149d9d947b11$var$E({
                action: $0e35149d9d947b11$var$a.Actions.STORAGE_GET,
                name: t19
            }, {
                name: t19
            });
        },
        put: function put(t20, n13) {
            return $0e35149d9d947b11$var$E({
                action: $0e35149d9d947b11$var$a.Actions.STORAGE_PUT,
                name: t20,
                data: n13
            }, {
                name: t20
            });
        },
        del: function del(t21) {
            return $0e35149d9d947b11$var$E({
                action: $0e35149d9d947b11$var$a.Actions.STORAGE_DELETE,
                name: t21
            }, {
                name: t21
            });
        },
        list: function list() {
            return $0e35149d9d947b11$var$E({
                action: $0e35149d9d947b11$var$a.Actions.STORAGE_LIST
            });
        },
        clear: function clear() {
            return $0e35149d9d947b11$var$E({
                action: $0e35149d9d947b11$var$a.Actions.STORAGE_CLEAR
            });
        },
        download: function download(t22, n14) {
            return $0e35149d9d947b11$var$E({
                action: $0e35149d9d947b11$var$a.Actions.STORAGE_DOWNLOAD,
                url: t22,
                name: n14
            }, {
                name: n14
            });
        },
        exists: function exists(t23) {
            return $0e35149d9d947b11$var$E({
                action: $0e35149d9d947b11$var$a.Actions.STORAGE_EXISTS,
                name: t23
            }, {
                name: t23
            });
        }
    };
}, $0e35149d9d947b11$var$S = {}, $0e35149d9d947b11$var$y = {};
!function(t24) {
    var n15, e9;
    Object.defineProperty(t24, "__esModule", {
        value: !0
    }), t24.TransitionOUT = t24.TransitionIn = void 0, (n15 = t24.TransitionIn || (t24.TransitionIn = {})).SLIDE_LEFT = "slide-in-from-left", n15.SLIDE_TOP = "slide-in-from-top", n15.SLIDE_BOTTOM = "slide-in-from-bottom", n15.SLIDE_RIGHT = "slide-in-from-right", n15.FADE = "fade-in", n15.ZOOM = "zoom-in", (e9 = t24.TransitionOUT || (t24.TransitionOUT = {})).SLIDE_LEFT = "slide-out-to-left", e9.SLIDE_TOP = "slide-out-to-top", e9.SLIDE_BOTTOM = "slide-out-to-bottom", e9.SLIDE_RIGHT = "slide-out-to-right", e9.FADE = "fade-out", e9.ZOOM = "zoom-out";
}($0e35149d9d947b11$var$y);
var $0e35149d9d947b11$var$I = {};
Object.defineProperty($0e35149d9d947b11$var$I, "__esModule", {
    value: !0
});
var $0e35149d9d947b11$var$g = {};
!function(t25) {
    var n16;
    Object.defineProperty(t25, "__esModule", {
        value: !0
    }), t25.InteractiveEvent = void 0, (n16 = t25.InteractiveEvent || (t25.InteractiveEvent = {})).MESSAGE = "message", n16.CONNECT = "connect", n16.DISCONNECT = "disconnect", n16.KICK = "kick";
}($0e35149d9d947b11$var$g);
var $0e35149d9d947b11$var$A = {};
!function(t26) {
    Object.defineProperty(t26, "__esModule", {
        value: !0
    }), t26.EnvironmentType = void 0, function(t27) {
        t27.SSSP2 = "SSSP2", t27.HTML = "HTML", t27.TIZEN = "TIZEN", t27.KIOSK = "KIOSK";
    }(t26.EnvironmentType || (t26.EnvironmentType = {}));
}($0e35149d9d947b11$var$A), function(t28) {
    var n17, e10 = $0e35149d9d947b11$var$c1 && $0e35149d9d947b11$var$c1.__createBinding || (Object.create ? function(t29, n18, e11, i8) {
        i8 === undefined && (i8 = e11);
        var o6 = Object.getOwnPropertyDescriptor(n18, e11);
        o6 && !("get" in o6 ? !n18.__esModule : o6.writable || o6.configurable) || (o6 = {
            enumerable: !0,
            get: function get() {
                return n18[e11];
            }
        }), Object.defineProperty(t29, i8, o6);
    } : function(t30, n19, e12, i9) {
        i9 === undefined && (i9 = e12), t30[i9] = n19[e12];
    }), i7 = $0e35149d9d947b11$var$c1 && $0e35149d9d947b11$var$c1.__setModuleDefault || (Object.create ? function(t31, n20) {
        Object.defineProperty(t31, "default", {
            enumerable: !0,
            value: n20
        });
    } : function(t32, n21) {
        t32["default"] = n21;
    }), o5 = $0e35149d9d947b11$var$c1 && $0e35149d9d947b11$var$c1.__importStar || function(t33) {
        if (t33 && t33.__esModule) return t33;
        var n22 = {};
        if (null != t33) for(var o7 in t33)"default" !== o7 && Object.prototype.hasOwnProperty.call(t33, o7) && e10(n22, t33, o7);
        return i7(n22, t33), n22;
    };
    Object.defineProperty(t28, "__esModule", {
        value: !0
    }), t28.WebsocketAction = t28.HealthCheck = t28.Interact = t28.Settings = t28.Sp = void 0, t28.Sp = o5($0e35149d9d947b11$var$y), t28.Settings = o5($0e35149d9d947b11$var$I), t28.Interact = o5($0e35149d9d947b11$var$g), t28.HealthCheck = o5($0e35149d9d947b11$var$A), (n17 = t28.WebsocketAction || (t28.WebsocketAction = {})).SP = "sp", n17.SETTINGS = "settings", n17.CLEAR_AND_RESTART = "clearrestart", n17.REBOOT = "reboot", n17.LOGS = "logs", n17.PING = "ping", n17.INTERACT = "interact", n17.INTERACT_START = "interact:start", n17.TRANSITION = "transition", n17.HC_HEALTH = "health", n17.HC_SETTINGS = "info:settings", n17.HC_INFO = "info", n17.HC_STORAGE = "info:storage";
}($0e35149d9d947b11$var$S);
var $0e35149d9d947b11$var$_, $0e35149d9d947b11$var$R, $0e35149d9d947b11$var$w = new function() {
    var t34 = this;
    this.all = {
        create: function create(t35, n23, e13, i10) {
            return $0e35149d9d947b11$var$E($0e35149d9d947b11$var$f($0e35149d9d947b11$var$f($0e35149d9d947b11$var$f({
                action: $0e35149d9d947b11$var$a.Actions.INTERACT_CREATE,
                maxRuntime: t35
            }, n23 && {
                clientUrl: n23
            }), e13 && {
                maxClients: e13
            }), i10 && {
                noCommunicationTimeout: i10
            }));
        },
        start: function start() {
            return $0e35149d9d947b11$var$T({
                action: $0e35149d9d947b11$var$a.Actions.INTERACT_START
            });
        },
        destroy: function destroy() {
            t34.events = {}, $0e35149d9d947b11$var$T({
                action: $0e35149d9d947b11$var$a.Actions.INTERACT_DESTROY
            });
        },
        message: function message(t36, n24) {
            return $0e35149d9d947b11$var$T($0e35149d9d947b11$var$f({
                action: $0e35149d9d947b11$var$a.Actions.INTERACT_MESSAGE,
                data: t36
            }, n24 && {
                client: n24
            }));
        },
        kick: function kick(t37) {
            return $0e35149d9d947b11$var$T({
                action: $0e35149d9d947b11$var$a.Actions.INTERACT_KICK,
                client: t37
            });
        },
        onMessage: function onMessage(n25) {
            t34.events.onMessage = n25;
        },
        onConnect: function onConnect(n26) {
            t34.events.onConnect = n26;
        },
        onDisconnect: function onDisconnect(n27) {
            t34.events.onDisconnect = n27;
        },
        onKick: function onKick(n28) {
            t34.events.onKick = n28;
        }
    }, this.events = {}, window.addEventListener("message", function(n29) {
        var e14 = JSON.parse(n29.data);
        e14.action === $0e35149d9d947b11$var$a.Actions.INTERACT_MESSAGE && (e14.event === $0e35149d9d947b11$var$S.Interact.InteractiveEvent.MESSAGE && t34.events.onMessage && e14.data && t34.events.onMessage(e14.data, e14.client), e14.event === $0e35149d9d947b11$var$S.Interact.InteractiveEvent.CONNECT && t34.events.onConnect && t34.events.onConnect(e14.client), e14.event === $0e35149d9d947b11$var$S.Interact.InteractiveEvent.DISCONNECT && t34.events.onDisconnect && t34.events.onDisconnect(e14.client), e14.event === $0e35149d9d947b11$var$S.Interact.InteractiveEvent.KICK && t34.events.onKick && t34.events.onKick(e14.client));
    });
}, $0e35149d9d947b11$var$b = new function() {
    this.all = {
        barcode: function barcode() {
            return $0e35149d9d947b11$var$E({
                action: $0e35149d9d947b11$var$a.Actions.KIOSK_BARCODE
            }, undefined, 3e4);
        },
        printer: function printer(t38, n30) {
            return $0e35149d9d947b11$var$E({
                action: $0e35149d9d947b11$var$a.Actions.KIOSK_PRINTER,
                data: t38,
                printerSettings: n30
            });
        }
    };
}, $0e35149d9d947b11$var$m = new function() {
    this.all = {
        request: function request(t39, n31) {
            return $0e35149d9d947b11$var$E({
                action: $0e35149d9d947b11$var$a.Actions.PROXY,
                proxy: {
                    url: t39,
                    request: n31
                }
            }, {
                name: t39
            });
        }
    };
}, $0e35149d9d947b11$var$P = new function() {
    this.all = {
        env: function env(t40) {
            return $0e35149d9d947b11$var$E({
                action: $0e35149d9d947b11$var$a.Actions.ENV_VAR,
                name: t40
            }, {
                name: t40
            });
        }
    };
}, $0e35149d9d947b11$var$N = function N() {
    this.fs = $0e35149d9d947b11$var$O.all, this.interactive = $0e35149d9d947b11$var$w.all, this.tizen = $0e35149d9d947b11$var$b.all, this.proxy = $0e35149d9d947b11$var$m.all.request, this.env = $0e35149d9d947b11$var$P.all.env, this.log = function(t41) {
        return $0e35149d9d947b11$var$T({
            action: $0e35149d9d947b11$var$a.Actions.LOG,
            data: t41
        });
    }, this.info = function() {
        return $0e35149d9d947b11$var$E({
            action: $0e35149d9d947b11$var$a.Actions.INFO
        });
    };
}, $0e35149d9d947b11$var$C = {
    receiptGenerator: function() {
        var t42 = function t() {
            this.characters = 42, this.data = "";
        };
        return t42.prototype.blank = function(t) {
            return void 0 === t && (t = 1), this.data += "".concat(" ".repeat(this.characters), "\n").repeat(t), this;
        }, t42.prototype.left = function(t) {
            var n32 = this.characters - t.length;
            return this.data += "".concat(t).concat(" ".repeat(n32), "\n"), this;
        }, t42.prototype.right = function(t) {
            var n33 = this.characters - t.length;
            return this.data += "".concat(" ".repeat(n33)).concat(t, "\n"), this;
        }, t42.prototype.stretch = function(t, n34, e15) {
            void 0 === e15 && (e15 = " ");
            var i11 = this.characters - (t.length + n34.length);
            return this.data += "".concat(t).concat(e15.repeat(i11)).concat(n34, "\n"), this;
        }, t42.prototype.centre = function(t) {
            var n35 = this.characters - t.length;
            return this.data += "".concat(" ".repeat(Math.floor(n35 / 2))).concat(t).concat(" ".repeat(Math.floor(n35 / 2)), "\n"), this;
        }, t42.prototype.fill = function(t) {
            return this.data += "".concat(t.repeat(this.characters), "\n"), this;
        }, t42.prototype.inject = function(t) {
            return this.data += t, this;
        }, t42.prototype.generate = function(t) {
            return void 0 === t && (t = !0), t && (this.data += "".concat(" ".repeat(this.characters), "\n").repeat(6)), this.data;
        }, t42;
    }()
};
!function(t) {
    t.Prod = "wss://mrx.cx/interactive/socket", t.Dev = "wss://dev.mrx.cx/interactive/socket", t.Edge = "wss://edge.mrx.cx/interactive/socket", t.Local = "ws://localhost:1337";
}($0e35149d9d947b11$var$_ || ($0e35149d9d947b11$var$_ = {})), function(t) {
    t.InitializationError = "Initialization Failed";
}($0e35149d9d947b11$var$R || ($0e35149d9d947b11$var$R = {}));
var $0e35149d9d947b11$var$k = function(t43) {
    var n36 = function n36(n37) {
        var e16 = t43.call(this, n37) || this;
        return e16.name = $0e35149d9d947b11$var$R.InitializationError, e16;
    };
    return function(t, n38) {
        var e = function e() {
            this.constructor = t;
        };
        if ("function" != typeof n38 && null !== n38) throw new TypeError("Class extends value " + String(n38) + " is not a constructor or null");
        $0e35149d9d947b11$var$u(t, n38), t.prototype = null === n38 ? Object.create(n38) : (e.prototype = n38.prototype, new e);
    }(n36, t43), n36;
}(Error), $0e35149d9d947b11$var$x = function() {
    var t44 = function t44(t45, n39) {
        var e, i12 = this;
        if (this.sessionId = t45, this.environmentKey = n39, this.socket = null, this.pingInterval = null, this.events = {
            onMessage: null,
            onOpen: null,
            onClose: null
        }, !t45) throw new $0e35149d9d947b11$var$k("sessionId not provided");
        this.socket = new WebSocket("".concat((e = n39, $0e35149d9d947b11$var$_[e || "Prod"]), "/").concat(t45)), this.socket.onmessage = function(t) {
            if (i12.events.onMessage) {
                var _$n = JSON.parse(t.data);
                "ping" !== _$n.action && "pong" !== _$n.action && i12.events.onMessage(_$n.data);
            }
        }, this.socket.onopen = function() {
            i12.events.onOpen && i12.events.onOpen();
        }, this.socket.onclose = function(t) {
            i12.events.onClose && i12.events.onClose(t.code), i12.destroy();
        }, this.pingInterval = window.setInterval(function() {
            return i12.send("ping", "ping");
        }, 5e3);
    };
    return t44.prototype.send = function(t, n40) {
        void 0 === n40 && (n40 = "message"), this.socket && this.socket.readyState === WebSocket.OPEN && this.socket.send(JSON.stringify({
            action: n40,
            data: t
        }));
    }, t44.prototype.onOpen = function(t) {
        return this.events.onOpen = t.bind(this), this;
    }, t44.prototype.onClose = function(t) {
        return this.events.onClose = t.bind(this), this;
    }, t44.prototype.onMessage = function(t) {
        return this.events.onMessage = t.bind(this), this;
    }, t44.prototype.destroy = function() {
        this.socket && this.socket.close(1e3), this.events.onMessage = null, this.events.onOpen = null, this.events.onClose = null, this.socket = null, this.pingInterval && window.clearInterval(this.pingInterval);
    }, t44.urlParam = function(t) {
        return void 0 === t && (t = "session"), new URLSearchParams(window.location.search).get(t);
    }, t44;
}(), $0e35149d9d947b11$export$3245ed38508723bb = function() {
    var t46 = function t46(t) {
        this.Evexi = t, this.fs().interactive().proxy("/").env({}).tizen({
            barcodeReturn: ""
        }).log().info();
    };
    return t46.prototype.fs = function() {
        var t = this;
        return this.Evexi.fs = {
            get: function get(n41) {
                return $0e35149d9d947b11$var$l(t, void 0, void 0, function() {
                    return $0e35149d9d947b11$var$h(this, function(t) {
                        return [
                            2,
                            {
                                name: n41,
                                error: null,
                                type: "text",
                                data: "text"
                            }
                        ];
                    });
                });
            },
            put: function put(n, e) {
                return $0e35149d9d947b11$var$l(t, void 0, void 0, function() {
                    return $0e35149d9d947b11$var$h(this, function(t) {
                        return [
                            2,
                            !0
                        ];
                    });
                });
            },
            del: function del(n) {
                return $0e35149d9d947b11$var$l(t, void 0, void 0, function() {
                    return $0e35149d9d947b11$var$h(this, function(t) {
                        return [
                            2,
                            !0
                        ];
                    });
                });
            },
            list: function list() {
                return $0e35149d9d947b11$var$l(t, void 0, void 0, function() {
                    return $0e35149d9d947b11$var$h(this, function(t) {
                        return [
                            2,
                            []
                        ];
                    });
                });
            },
            clear: function clear() {
                return $0e35149d9d947b11$var$l(t, void 0, void 0, function() {
                    return $0e35149d9d947b11$var$h(this, function(t) {
                        return [
                            2,
                            !0
                        ];
                    });
                });
            },
            download: function download(n42, e) {
                return $0e35149d9d947b11$var$l(t, void 0, void 0, function() {
                    return $0e35149d9d947b11$var$h(this, function(t) {
                        return [
                            2,
                            {
                                url: n42,
                                data: "",
                                error: null
                            }
                        ];
                    });
                });
            },
            exists: function exists(n) {
                return $0e35149d9d947b11$var$l(t, void 0, void 0, function() {
                    return $0e35149d9d947b11$var$h(this, function(t) {
                        return [
                            2,
                            !0
                        ];
                    });
                });
            }
        }, this;
    }, t46.prototype.interactive = function() {
        var t = this;
        return this.Evexi.interactive = {
            create: function create(n, e, i, o) {
                return $0e35149d9d947b11$var$l(t, void 0, void 0, function() {
                    return $0e35149d9d947b11$var$h(this, function(t) {
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
    }, t46.prototype.proxy = function(t47) {
        var n43 = this, e18 = function e18(e, i14) {
            return $0e35149d9d947b11$var$l(n43, void 0, void 0, function() {
                var n44, o8, r6;
                return $0e35149d9d947b11$var$h(this, function(s) {
                    switch(s.label){
                        case 0:
                            return i14 || (i14 = {}), i14.headers || (i14.headers = {
                                "Content-Type": "application/json"
                            }), i14 ? [
                                4,
                                window.fetch("".concat(t47).concat(e), i14)
                            ] : [
                                3,
                                2
                            ];
                        case 1:
                            return o8 = s.sent(), [
                                3,
                                4
                            ];
                        case 2:
                            return [
                                4,
                                window.fetch("".concat(t47).concat(e))
                            ];
                        case 3:
                            o8 = s.sent(), s.label = 4;
                        case 4:
                            n44 = o8, s.label = 5;
                        case 5:
                            return s.trys.push([
                                5,
                                7,
                                ,
                                8
                            ]), [
                                4,
                                n44.json()
                            ];
                        case 6:
                            return r6 = s.sent(), [
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
                                    status: n44.status,
                                    statusText: n44.statusText,
                                    url: n44.url,
                                    ok: n44.ok,
                                    json: r6
                                }
                            ];
                    }
                });
            });
        }, i13 = function i13(e, i) {
            return $0e35149d9d947b11$var$l(n43, void 0, void 0, function() {
                var n45;
                return $0e35149d9d947b11$var$h(this, function(i) {
                    return (n45 = t47.find(function(t) {
                        return -1 !== e.indexOf(t.endpoint);
                    })) ? [
                        2,
                        {
                            status: 200,
                            statusText: "",
                            url: e,
                            ok: !0,
                            json: n45.response
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
        return this.Evexi.proxy = function(n46, o9) {
            return $0e35149d9d947b11$var$l(this, void 0, void 0, function() {
                return $0e35149d9d947b11$var$h(this, function(r) {
                    return "object" == typeof t47 ? [
                        2,
                        i13(n46)
                    ] : [
                        2,
                        e18(n46, o9)
                    ];
                });
            });
        }, this;
    }, t46.prototype.env = function(t) {
        return this.Evexi.env = function(n47) {
            return $0e35149d9d947b11$var$l(this, void 0, void 0, function() {
                return $0e35149d9d947b11$var$h(this, function(e) {
                    return [
                        2,
                        t[n47]
                    ];
                });
            });
        }, this;
    }, t46.prototype.tizen = function(t48) {
        return this.Evexi.tizen = {
            printer: function printer(t, n48) {
                return $0e35149d9d947b11$var$l(this, void 0, void 0, function() {
                    return $0e35149d9d947b11$var$h(this, function(e) {
                        return console.log(t, n48), [
                            2,
                            Promise.resolve(!0)
                        ];
                    });
                });
            },
            barcode: function barcode() {
                var n49;
                return $0e35149d9d947b11$var$l(this, void 0, void 0, function() {
                    return $0e35149d9d947b11$var$h(this, function(e) {
                        return [
                            2,
                            null !== (n49 = t48.barcodeReturn) && void 0 !== n49 ? n49 : ""
                        ];
                    });
                });
            }
        }, this;
    }, t46.prototype.log = function() {
        return this.Evexi.log = function(t) {
            console.log(t);
        }, this;
    }, t46.prototype.info = function() {
        return this.Evexi.info = function() {
            return $0e35149d9d947b11$var$l(this, void 0, void 0, function() {
                return $0e35149d9d947b11$var$h(this, function(t) {
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
    }, t46;
}(), $0e35149d9d947b11$export$429f1c4820dd15e8 = function D() {
    this.api = new $0e35149d9d947b11$var$N, this.helper = $0e35149d9d947b11$var$C, this.Scan = $0e35149d9d947b11$var$x, this.env = this.api.env, this.fs = this.api.fs, this.info = this.api.info, this.interactive = this.api.interactive, this.log = this.api.log, this.proxy = this.api.proxy, this.tizen = this.api.tizen;
}, $0e35149d9d947b11$export$a228efff746656cd = new $0e35149d9d947b11$export$429f1c4820dd15e8;


// get the session id from the url param
var $a40ec457162b4691$var$sessionId = (0, $0e35149d9d947b11$export$a228efff746656cd).Scan.urlParam();
// listen and send messages to the WS API (the second optional argument is the environment Prod, Dev or Edge. DEFAULT: Prod)
var $a40ec457162b4691$var$scan = new (0, $0e35149d9d947b11$export$a228efff746656cd).Scan($a40ec457162b4691$var$sessionId, "Edge").onMessage(function(message) {
    console.log("Message: ", message);
}).onOpen(function() {
    console.log("Opened");
    $a40ec457162b4691$var$scan.send("message from scanURL to content");
}).onClose(function(code) {
    console.log("Closed: ", code);
});
// send message type into the input box on the page
// @ts-ignore
window.send = function() {
    var msg = document.getElementById("message").value;
    $a40ec457162b4691$var$scan.send(msg);
};


