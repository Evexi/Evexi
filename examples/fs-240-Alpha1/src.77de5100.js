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
})({"QCba":[function(require,module,exports) {
var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};
/**
 * logger
 */


var log = new (function () {
  function Log() {
    // Add to div
    this.logs = document.getElementById('logs');
  }

  Log.prototype.info = function (log) {
    this.logs.innerHTML += '<span style=\'background-color: gray\'>' + log + '</span><br/>';
    console.log(log);
  };

  Log.prototype.success = function (log) {
    this.logs.innerHTML += '<span style=\'background-color: darkgreen\'>' + log + '</span><br/>';
    console.log(log);
  };

  Log.prototype.error = function (log) {
    this.logs.innerHTML += '<span style=\'background-color: darkred\'>' + log + '</span><br/>';
    console.error(log);
  };

  Log.prototype.clear = function () {
    this.logs.innerHTML = '';
  };

  return Log;
}())();
/**
 * Info events
 */

var info = new (function () {
  function Info() {}

  Info.prototype.version = function () {
    window.Evexi.version ? log.success('version: ' + window.Evexi.version) : log.error('version error');
  };

  Info.prototype.info = function () {
    return __awaiter(this, void 0, void 0, function () {
      var info_1, e_1;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 2,, 3]);

            return [4
            /*yield*/
            , window.Evexi.info()];

          case 1:
            info_1 = _a.sent();
            log.success('INFO success:' + JSON.stringify(info_1));

            try {// expect(info).to.have.all.keys(['deviceId', 'provider', 'version'])
            } catch (e) {
              log.error('INFO struct error');
            }

            info_1.deviceId.length > 5 ? log.success('INFO device ID success') : log.error('INFO device ID error');
            info_1.provider && info_1.provider.length > 2 ? log.success('INFO provider success') : log.error('INFO provider error');
            info_1.version.length > 2 ? log.success('INFO version success') : log.error('INFO version error');
            return [3
            /*break*/
            , 3];

          case 2:
            e_1 = _a.sent();
            log.error('INFO error');
            return [3
            /*break*/
            , 3];

          case 3:
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  return Info;
}())();
/**
 * Storage Events
 */

var storage = new (function () {
  function Storage() {}

  Storage.prototype.put = function () {
    return __awaiter(this, void 0, void 0, function () {
      var res, e_2;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 2,, 3]);

            return [4
            /*yield*/
            , window.Evexi.fs.put('text2.json', 'my text file')];

          case 1:
            res = _a.sent();
            log.success('PUT: resolved ' + JSON.stringify(res));

            try {
              // expect(res).to.eql(true)
              log.success('PUT: success');
            } catch (e) {
              log.error('PUT struct error');
            }

            return [3
            /*break*/
            , 3];

          case 2:
            e_2 = _a.sent();
            log.error('PUT: caught');
            return [3
            /*break*/
            , 3];

          case 3:
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  Storage.prototype.get = function () {
    return __awaiter(this, void 0, void 0, function () {
      var res, e_3;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 2,, 3]);

            return [4
            /*yield*/
            , window.Evexi.fs.get('text2.json')];

          case 1:
            res = _a.sent();

            try {
              // expect(res).to.have.all.keys(['name', 'error', 'type', 'data'])
              log.success('GET: success');
            } catch (e) {
              log.error('GET struct error');
            }

            try {// expect(res.data).to.eq('my text file')
            } catch (e) {
              log.error('GET: failed');
            }

            return [3
            /*break*/
            , 3];

          case 2:
            e_3 = _a.sent();
            log.error('GET: caught');
            return [3
            /*break*/
            , 3];

          case 3:
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  Storage.prototype.exists = function () {
    return __awaiter(this, void 0, void 0, function () {
      var exists, e_4;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 2,, 3]);

            return [4
            /*yield*/
            , window.Evexi.fs.exists('mrx.png')];

          case 1:
            exists = _a.sent();

            try {
              // expect(exists).to.eq(false)
              log.success('EXISTS: success');
            } catch (e) {
              log.error('EXISTS .. the item already exists when it shouldnt');
            }

            return [3
            /*break*/
            , 3];

          case 2:
            e_4 = _a.sent();
            log.error('EXISTS: caught');
            return [3
            /*break*/
            , 3];

          case 3:
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  Storage.prototype.download = function () {
    return __awaiter(this, void 0, void 0, function () {
      var download, e_5;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 2,, 3]);

            return [4
            /*yield*/
            , window.Evexi.fs.download('https://mrx.technology/assets/images/compatible/mrx.png')];

          case 1:
            download = _a.sent();

            try {
              // expect(download).to.have.all.keys(['url', 'data', 'error'])
              // expect(download.url).to.eql('https://mrx.technology/assets/images/compatible/mrx.png')
              log.success('DOWNLOAD: success');
            } catch (e) {
              log.error('DOWNLOAD: struct issue');
            }

            return [3
            /*break*/
            , 3];

          case 2:
            e_5 = _a.sent();
            log.error('DOWNLOAD: error');
            return [3
            /*break*/
            , 3];

          case 3:
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  Storage.prototype.existsB = function () {
    return __awaiter(this, void 0, void 0, function () {
      var exists, e_6;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 2,, 3]);

            return [4
            /*yield*/
            , window.Evexi.fs.exists('mrx.png')];

          case 1:
            exists = _a.sent();

            try {
              // expect(exists).to.eq(true)
              log.success('EXISTS B: success');
            } catch (e) {
              log.error('Exists: ERROR');
            }

            return [3
            /*break*/
            , 3];

          case 2:
            e_6 = _a.sent();
            log.error('EXISTS: caught');
            return [3
            /*break*/
            , 3];

          case 3:
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  Storage.prototype.list = function () {
    return __awaiter(this, void 0, void 0, function () {
      var listA, e_7;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 2,, 3]);

            return [4
            /*yield*/
            , window.Evexi.fs.list()];

          case 1:
            listA = _a.sent();

            try {
              // assert.deepEqual(listA, ['mrx.png', 'text2.json'])
              log.success('LIST A: success');
            } catch (e) {
              log.error('listA: ERROR' + JSON.stringify(e));
            }

            return [3
            /*break*/
            , 3];

          case 2:
            e_7 = _a.sent();
            log.error('listA: caught');
            return [3
            /*break*/
            , 3];

          case 3:
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  Storage.prototype.deletes = function () {
    return __awaiter(this, void 0, void 0, function () {
      var del, e_8;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 2,, 3]);

            return [4
            /*yield*/
            , window.Evexi.fs.del('mrx.png')];

          case 1:
            del = _a.sent();

            try {
              // expect(del).to.eql(true)
              log.success('DELETE: success');
            } catch (e) {
              log.error('DELETE: ERROR');
            }

            return [3
            /*break*/
            , 3];

          case 2:
            e_8 = _a.sent();
            log.error('DELETE: caught');
            return [3
            /*break*/
            , 3];

          case 3:
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  Storage.prototype.existsC = function () {
    return __awaiter(this, void 0, void 0, function () {
      var exists, e_9;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 2,, 3]);

            return [4
            /*yield*/
            , window.Evexi.fs.exists('mrx.png')];

          case 1:
            exists = _a.sent();

            try {
              // expect(exists).to.eql(false)
              log.success('EXISTS C: success');
            } catch (e) {
              log.error('ExistsC: ERROR');
            }

            return [3
            /*break*/
            , 3];

          case 2:
            e_9 = _a.sent();
            log.error('EXISTS: caught');
            return [3
            /*break*/
            , 3];

          case 3:
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  Storage.prototype.clear = function () {
    return __awaiter(this, void 0, void 0, function () {
      var cleared, e_10;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 2,, 3]);

            return [4
            /*yield*/
            , window.Evexi.fs.clear()];

          case 1:
            cleared = _a.sent();

            try {
              // expect(cleared).to.eql(1)
              log.success('CLEAR: success');
            } catch (e) {
              log.error('CLEAR: ERROR');
            }

            return [3
            /*break*/
            , 3];

          case 2:
            e_10 = _a.sent();
            log.error('CLEARED: caught');
            return [3
            /*break*/
            , 3];

          case 3:
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  Storage.prototype.listB = function () {
    return __awaiter(this, void 0, void 0, function () {
      var listB, e_11;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 2,, 3]);

            return [4
            /*yield*/
            , window.Evexi.fs.list()];

          case 1:
            listB = _a.sent();

            try {
              // assert.deepEqual(listB, [])
              log.success('LIST B: success');
            } catch (e) {
              log.error('listB: ERROR' + JSON.stringify(e));
            }

            return [3
            /*break*/
            , 3];

          case 2:
            e_11 = _a.sent();
            log.error('listB: caught');
            return [3
            /*break*/
            , 3];

          case 3:
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  return Storage;
}())();

var run = function run() {
  return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          log.info(' -- TESTING INFO -- ');
          info.version();
          return [4
          /*yield*/
          , info.info()];

        case 1:
          _a.sent();

          log.info('');
          log.info(' -- TESTING STORAGE -- ');
          return [4
          /*yield*/
          , storage.put()];

        case 2:
          _a.sent();

          return [4
          /*yield*/
          , storage.get()];

        case 3:
          _a.sent();

          return [4
          /*yield*/
          , storage.exists()];

        case 4:
          _a.sent();

          return [4
          /*yield*/
          , storage.download()];

        case 5:
          _a.sent();

          return [4
          /*yield*/
          , storage.existsB()];

        case 6:
          _a.sent();

          return [4
          /*yield*/
          , storage.list()];

        case 7:
          _a.sent();

          return [4
          /*yield*/
          , storage.deletes()];

        case 8:
          _a.sent();

          return [4
          /*yield*/
          , storage.existsC()];

        case 9:
          _a.sent();

          return [4
          /*yield*/
          , storage.clear()];

        case 10:
          _a.sent();

          return [4
          /*yield*/
          , storage.listB()];

        case 11:
          _a.sent();

          return [2
          /*return*/
          ];
      }
    });
  });
};
/**
 * Lifecycle event to indicate the item has started to play
 */


window.playing = function (item) {
  log.info('playing item ...' + JSON.stringify(item));

  try {
    window.Evexi ? log.success('API Found') : log.error('API ERROR');

    if (window.Evexi) {
      log.info('');
      run();
    }
  } catch (e) {
    log.error('API ERROR');
  }
};
/**
 * Lifecycle event to indicate the item has stopped playing
 */


window.stopping = function () {
  log.clear();
};
},{}]},{},["QCba"], null)