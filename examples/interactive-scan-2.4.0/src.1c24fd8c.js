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
})({"PWbL":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EnvironmentUrl = void 0;
var Environment;

(function (Environment) {
  Environment["Prod"] = "wss://mrx.cx/interactive/socket";
  Environment["Dev"] = "wss://dev.mrx.cx/interactive/socket";
  Environment["Edge"] = "wss://edge.mrx.cx/interactive/socket";
  Environment["Local"] = "ws://localhost:1337";
})(Environment || (Environment = {}));

function EnvironmentUrl(env) {
  return Environment[env ? env : 'Prod'];
}

exports.EnvironmentUrl = EnvironmentUrl;
},{}],"cjRt":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InitializationError = exports.ErrorMessage = void 0;
var ErrorMessage;

(function (ErrorMessage) {
  ErrorMessage["InitializationError"] = "Initialization Failed";
})(ErrorMessage = exports.ErrorMessage || (exports.ErrorMessage = {}));

var InitializationError = function (_super) {
  __extends(InitializationError, _super);

  function InitializationError(details) {
    var _this = _super.call(this, details) || this;

    _this.name = ErrorMessage.InitializationError;
    return _this;
  }

  return InitializationError;
}(Error);

exports.InitializationError = InitializationError;
},{}],"EW1r":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var environment_1 = require("./core/environment");

var errors_1 = require("./core/errors");

var Scan = function () {
  function Scan(sessionId, environmentKey) {
    var _this = this;

    this.sessionId = sessionId;
    this.environmentKey = environmentKey;
    this.socket = null;
    this.pingInterval = null;
    this.events = {
      onMessage: null,
      onOpen: null,
      onClose: null
    };
    if (!sessionId) throw new errors_1.InitializationError('sessionId not provided');
    this.socket = new WebSocket((0, environment_1.EnvironmentUrl)(environmentKey) + "/" + sessionId);

    this.socket.onmessage = function (message) {
      if (!_this.events.onMessage) return;
      var msg = JSON.parse(message.data);
      if (msg.action === 'ping' || msg.action === 'pong') return;

      _this.events.onMessage(msg.data);
    };

    this.socket.onopen = function () {
      if (_this.events.onOpen) _this.events.onOpen();
    };

    this.socket.onclose = function (event) {
      if (_this.events.onClose) _this.events.onClose(event.code);

      _this.destroy();
    };

    this.pingInterval = window.setInterval(function () {
      return _this.send('ping', 'ping');
    }, 5000);
  }
  /**
   * Send a relay message to all clients (broadcast)
   */


  Scan.prototype.send = function (data, action) {
    if (action === void 0) {
      action = 'message';
    }

    if (!this.socket || this.socket.readyState !== WebSocket.OPEN) return;
    this.socket.send(JSON.stringify({
      action: action,
      data: data
    }));
  };
  /**
   * On Open
   */


  Scan.prototype.onOpen = function (cb) {
    this.events.onOpen = cb.bind(this);
    return this;
  };
  /**
   * On Close
   */


  Scan.prototype.onClose = function (cb) {
    this.events.onClose = cb.bind(this);
    return this;
  };
  /**
   * listener for messages
   */


  Scan.prototype.onMessage = function (cb) {
    this.events.onMessage = cb.bind(this);
    return this;
  };
  /**
   * the item has finshed, manually close the WS connection for the client (runs automatically when page closes)
   */


  Scan.prototype.destroy = function () {
    if (this.socket) this.socket.close(1000);
    this.events.onMessage = null;
    this.events.onOpen = null;
    this.events.onClose = null;
    this.socket = null;
    if (this.pingInterval) window.clearInterval(this.pingInterval);
  };
  /**
   * get query string param
   */


  Scan.urlParam = function (query) {
    if (query === void 0) {
      query = 'session';
    }

    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(query);
  };

  return Scan;
}();

exports["default"] = Scan;
window.Scan = Scan;
},{"./core/environment":"PWbL","./core/errors":"cjRt"}],"QCba":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Scan_1 = __importDefault(require("../../../../src/scan/Scan")); // get the session id from the url param


var sessionId = Scan_1["default"].urlParam(); // listen and send messages to the WS API (the second optional argument is the environment Prod, Dev or Edge. DEFAULT: Prod)

var scan = new Scan_1["default"](sessionId, 'Edge').onMessage(function (message) {
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
},{"../../../../src/scan/Scan":"EW1r"}]},{},["QCba"], null)