(function () {
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
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $e08887ad8866e63a$var$asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
}
function $e08887ad8866e63a$export$2e2bcd8739ae039(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                $e08887ad8866e63a$var$asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                $e08887ad8866e63a$var$asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}


function $9f55f36f17d2ee36$export$2e2bcd8739ae039(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}


function $d13d1273b66fbb0e$var$_defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function $d13d1273b66fbb0e$export$2e2bcd8739ae039(Constructor, protoProps, staticProps) {
    if (protoProps) $d13d1273b66fbb0e$var$_defineProperties(Constructor.prototype, protoProps);
    if (staticProps) $d13d1273b66fbb0e$var$_defineProperties(Constructor, staticProps);
    return Constructor;
}


function $419c957f8991e376$export$2e2bcd8739ae039(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}


function $6d84196d07227dd4$export$2e2bcd8739ae039(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
        ownKeys.forEach(function(key) {
            (0, $419c957f8991e376$export$2e2bcd8739ae039)(target, key, source[key]);
        });
    }
    return target;
}


function $f53a7de5348002ff$var$ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function $f53a7de5348002ff$export$2e2bcd8739ae039(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    else $f53a7de5348002ff$var$ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
    return target;
}


var $79ae1ae4a16b6dd8$exports = {};
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $79ae1ae4a16b6dd8$var$runtime = function(exports) {
    "use strict";
    var define = function define(obj, key, value) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
        return obj[key];
    };
    var wrap = function wrap(innerFn, outerFn, self, tryLocsList) {
        // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
        var generator = Object.create(protoGenerator.prototype);
        var context = new Context(tryLocsList || []);
        // The ._invoke method unifies the implementations of the .next,
        // .throw, and .return methods.
        generator._invoke = makeInvokeMethod(innerFn, self, context);
        return generator;
    };
    var tryCatch = // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.
    function tryCatch(fn, obj, arg) {
        try {
            return {
                type: "normal",
                arg: fn.call(obj, arg)
            };
        } catch (err) {
            return {
                type: "throw",
                arg: err
            };
        }
    };
    var Generator = // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.
    function Generator() {};
    var GeneratorFunction = function GeneratorFunction() {};
    var GeneratorFunctionPrototype = function GeneratorFunctionPrototype() {};
    var defineIteratorMethods = // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.
    function defineIteratorMethods(prototype) {
        [
            "next",
            "throw",
            "return"
        ].forEach(function(method) {
            define(prototype, method, function(arg) {
                return this._invoke(method, arg);
            });
        });
    };
    var AsyncIterator = function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);
            if (record.type === "throw") reject(record.arg);
            else {
                var result = record.arg;
                var value1 = result.value;
                if (value1 && typeof value1 === "object" && hasOwn.call(value1, "__await")) return PromiseImpl.resolve(value1.__await).then(function(value) {
                    invoke("next", value, resolve, reject);
                }, function(err) {
                    invoke("throw", err, resolve, reject);
                });
                return PromiseImpl.resolve(value1).then(function(unwrapped) {
                    // When a yielded Promise is resolved, its final value becomes
                    // the .value of the Promise<{value,done}> result for the
                    // current iteration.
                    result.value = unwrapped;
                    resolve(result);
                }, function(error) {
                    // If a rejected Promise was yielded, throw the rejection back
                    // into the async generator function so it can be handled there.
                    return invoke("throw", error, resolve, reject);
                });
            }
        }
        var previousPromise;
        function enqueue(method, arg) {
            function callInvokeWithMethodAndArg() {
                return new PromiseImpl(function(resolve, reject) {
                    invoke(method, arg, resolve, reject);
                });
            }
            return previousPromise = // If enqueue has been called before, then we want to wait until
            // all previous Promises have been resolved before calling invoke,
            // so that results are always delivered in the correct order. If
            // enqueue has not been called before, then it is important to
            // call invoke immediately, without waiting on a callback to fire,
            // so that the async generator function has the opportunity to do
            // any necessary setup in a predictable way. This predictability
            // is why the Promise constructor synchronously invokes its
            // executor callback, and why async functions synchronously
            // execute code before the first await. Since we implement simple
            // async functions in terms of async generators, it is especially
            // important to get this right, even though it requires care.
            previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
            // invocations of the iterator.
            callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
        // Define the unified helper method that is used to implement .next,
        // .throw, and .return (see defineIteratorMethods).
        this._invoke = enqueue;
    };
    var makeInvokeMethod = function makeInvokeMethod(innerFn, self, context) {
        var state = GenStateSuspendedStart;
        return function invoke(method, arg) {
            if (state === GenStateExecuting) throw new Error("Generator is already running");
            if (state === GenStateCompleted) {
                if (method === "throw") throw arg;
                // Be forgiving, per 25.3.3.3.3 of the spec:
                // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
                return doneResult();
            }
            context.method = method;
            context.arg = arg;
            while(true){
                var delegate = context.delegate;
                if (delegate) {
                    var delegateResult = maybeInvokeDelegate(delegate, context);
                    if (delegateResult) {
                        if (delegateResult === ContinueSentinel) continue;
                        return delegateResult;
                    }
                }
                if (context.method === "next") // Setting context._sent for legacy support of Babel's
                // function.sent implementation.
                context.sent = context._sent = context.arg;
                else if (context.method === "throw") {
                    if (state === GenStateSuspendedStart) {
                        state = GenStateCompleted;
                        throw context.arg;
                    }
                    context.dispatchException(context.arg);
                } else if (context.method === "return") context.abrupt("return", context.arg);
                state = GenStateExecuting;
                var record = tryCatch(innerFn, self, context);
                if (record.type === "normal") {
                    // If an exception is thrown from innerFn, we leave state ===
                    // GenStateExecuting and loop back for another invocation.
                    state = context.done ? GenStateCompleted : GenStateSuspendedYield;
                    if (record.arg === ContinueSentinel) continue;
                    return {
                        value: record.arg,
                        done: context.done
                    };
                } else if (record.type === "throw") {
                    state = GenStateCompleted;
                    // Dispatch the exception by looping back around to the
                    // context.dispatchException(context.arg) call above.
                    context.method = "throw";
                    context.arg = record.arg;
                }
            }
        };
    };
    var pushTryEntry = function pushTryEntry(locs) {
        var entry = {
            tryLoc: locs[0]
        };
        if (1 in locs) entry.catchLoc = locs[1];
        if (2 in locs) {
            entry.finallyLoc = locs[2];
            entry.afterLoc = locs[3];
        }
        this.tryEntries.push(entry);
    };
    var resetTryEntry = function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
    };
    var Context = function Context(tryLocsList) {
        // The root entry object (effectively a try statement without a catch
        // or a finally block) gives us a place to store values thrown from
        // locations where there is no enclosing try statement.
        this.tryEntries = [
            {
                tryLoc: "root"
            }
        ];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
    };
    var values = function values(iterable) {
        if (iterable) {
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) return iteratorMethod.call(iterable);
            if (typeof iterable.next === "function") return iterable;
            if (!isNaN(iterable.length)) {
                var i = -1, next1 = function next() {
                    while(++i < iterable.length)if (hasOwn.call(iterable, i)) {
                        next.value = iterable[i];
                        next.done = false;
                        return next;
                    }
                    next.value = undefined;
                    next.done = true;
                    return next;
                };
                return next1.next = next1;
            }
        }
        // Return an iterator with no values.
        return {
            next: doneResult
        };
    };
    var doneResult = function doneResult() {
        return {
            value: undefined,
            done: true
        };
    };
    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined; // More compressible than void 0.
    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    try {
        // IE 8 has a broken Object.defineProperty that only works on DOM objects.
        define({}, "");
    } catch (err) {
        define = function define(obj, key, value) {
            return obj[key] = value;
        };
    }
    exports.wrap = wrap;
    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";
    // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.
    var ContinueSentinel = {};
    // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.
    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function() {
        return this;
    });
    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = GeneratorFunctionPrototype;
    define(Gp, "constructor", GeneratorFunctionPrototype);
    define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
    GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction");
    exports.isGeneratorFunction = function(genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };
    exports.mark = function(genFun) {
        if (Object.setPrototypeOf) Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
        else {
            genFun.__proto__ = GeneratorFunctionPrototype;
            define(genFun, toStringTagSymbol, "GeneratorFunction");
        }
        genFun.prototype = Object.create(Gp);
        return genFun;
    };
    // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.
    exports.awrap = function(arg) {
        return {
            __await: arg
        };
    };
    defineIteratorMethods(AsyncIterator.prototype);
    define(AsyncIterator.prototype, asyncIteratorSymbol, function() {
        return this;
    });
    exports.AsyncIterator = AsyncIterator;
    // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.
    exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
        if (PromiseImpl === void 0) PromiseImpl = Promise;
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
        return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
         : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
        });
    };
    // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.
    function maybeInvokeDelegate(delegate, context) {
        var method = delegate.iterator[context.method];
        if (method === undefined) {
            // A .throw or .return when the delegate iterator has no .throw
            // method always terminates the yield* loop.
            context.delegate = null;
            if (context.method === "throw") {
                // Note: ["return"] must be used for ES3 parsing compatibility.
                if (delegate.iterator["return"]) {
                    // If the delegate iterator has a return method, give it a
                    // chance to clean up.
                    context.method = "return";
                    context.arg = undefined;
                    maybeInvokeDelegate(delegate, context);
                    if (context.method === "throw") // If maybeInvokeDelegate(context) changed context.method from
                    // "return" to "throw", let that override the TypeError below.
                    return ContinueSentinel;
                }
                context.method = "throw";
                context.arg = new TypeError("The iterator does not provide a 'throw' method");
            }
            return ContinueSentinel;
        }
        var record = tryCatch(method, delegate.iterator, context.arg);
        if (record.type === "throw") {
            context.method = "throw";
            context.arg = record.arg;
            context.delegate = null;
            return ContinueSentinel;
        }
        var info = record.arg;
        if (!info) {
            context.method = "throw";
            context.arg = new TypeError("iterator result is not an object");
            context.delegate = null;
            return ContinueSentinel;
        }
        if (info.done) {
            // Assign the result of the finished delegate to the temporary
            // variable specified by delegate.resultName (see delegateYield).
            context[delegate.resultName] = info.value;
            // Resume execution at the desired location (see delegateYield).
            context.next = delegate.nextLoc;
            // If context.method was "throw" but the delegate handled the
            // exception, let the outer generator proceed normally. If
            // context.method was "next", forget context.arg since it has been
            // "consumed" by the delegate iterator. If context.method was
            // "return", allow the original .return call to continue in the
            // outer generator.
            if (context.method !== "return") {
                context.method = "next";
                context.arg = undefined;
            }
        } else // Re-yield the result returned by the delegate method.
        return info;
        // The delegate iterator is finished, so forget it and continue with
        // the outer generator.
        context.delegate = null;
        return ContinueSentinel;
    }
    // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.
    defineIteratorMethods(Gp);
    define(Gp, toStringTagSymbol, "Generator");
    // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.
    define(Gp, iteratorSymbol, function() {
        return this;
    });
    define(Gp, "toString", function() {
        return "[object Generator]";
    });
    exports.keys = function(object) {
        var keys = [];
        for(var key1 in object)keys.push(key1);
        keys.reverse();
        // Rather than returning an object with a next method, we keep
        // things simple and return the next function itself.
        return function next() {
            while(keys.length){
                var key = keys.pop();
                if (key in object) {
                    next.value = key;
                    next.done = false;
                    return next;
                }
            }
            // To avoid creating an additional object, we just hang the .value
            // and .done properties off the next function object itself. This
            // also ensures that the minifier will not anonymize the function.
            next.done = true;
            return next;
        };
    };
    exports.values = values;
    Context.prototype = {
        constructor: Context,
        reset: function reset(skipTempReset) {
            this.prev = 0;
            this.next = 0;
            // Resetting context._sent for legacy support of Babel's
            // function.sent implementation.
            this.sent = this._sent = undefined;
            this.done = false;
            this.delegate = null;
            this.method = "next";
            this.arg = undefined;
            this.tryEntries.forEach(resetTryEntry);
            if (!skipTempReset) {
                for(var name in this)// Not sure about the optimal order of these conditions:
                if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) this[name] = undefined;
            }
        },
        stop: function stop() {
            this.done = true;
            var rootEntry = this.tryEntries[0];
            var rootRecord = rootEntry.completion;
            if (rootRecord.type === "throw") throw rootRecord.arg;
            return this.rval;
        },
        dispatchException: function dispatchException(exception) {
            var handle = function handle(loc, caught) {
                record.type = "throw";
                record.arg = exception;
                context.next = loc;
                if (caught) {
                    // If the dispatched exception was caught by a catch block,
                    // then let that catch block handle the exception normally.
                    context.method = "next";
                    context.arg = undefined;
                }
                return !!caught;
            };
            if (this.done) throw exception;
            var context = this;
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                var record = entry.completion;
                if (entry.tryLoc === "root") // Exception thrown outside of any try block that could handle
                // it, so set the completion value of the entire function to
                // throw the exception.
                return handle("end");
                if (entry.tryLoc <= this.prev) {
                    var hasCatch = hasOwn.call(entry, "catchLoc");
                    var hasFinally = hasOwn.call(entry, "finallyLoc");
                    if (hasCatch && hasFinally) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                        else if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else if (hasCatch) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                    } else if (hasFinally) {
                        if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else throw new Error("try statement without catch or finally");
                }
            }
        },
        abrupt: function abrupt(type, arg) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                    var finallyEntry = entry;
                    break;
                }
            }
            if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) // Ignore the finally entry if control is not jumping to a
            // location outside the try/catch block.
            finallyEntry = null;
            var record = finallyEntry ? finallyEntry.completion : {};
            record.type = type;
            record.arg = arg;
            if (finallyEntry) {
                this.method = "next";
                this.next = finallyEntry.finallyLoc;
                return ContinueSentinel;
            }
            return this.complete(record);
        },
        complete: function complete(record, afterLoc) {
            if (record.type === "throw") throw record.arg;
            if (record.type === "break" || record.type === "continue") this.next = record.arg;
            else if (record.type === "return") {
                this.rval = this.arg = record.arg;
                this.method = "return";
                this.next = "end";
            } else if (record.type === "normal" && afterLoc) this.next = afterLoc;
            return ContinueSentinel;
        },
        finish: function finish(finallyLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc) {
                    this.complete(entry.completion, entry.afterLoc);
                    resetTryEntry(entry);
                    return ContinueSentinel;
                }
            }
        },
        "catch": function(tryLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                    var record = entry.completion;
                    if (record.type === "throw") {
                        var thrown = record.arg;
                        resetTryEntry(entry);
                    }
                    return thrown;
                }
            }
            // The context.catch method must only be called with a location
            // argument that corresponds to a known catch block.
            throw new Error("illegal catch attempt");
        },
        delegateYield: function delegateYield(iterable, resultName, nextLoc) {
            this.delegate = {
                iterator: values(iterable),
                resultName: resultName,
                nextLoc: nextLoc
            };
            if (this.method === "next") // Deliberately forget the last sent value so that we don't
            // accidentally pass it on to the delegate.
            this.arg = undefined;
            return ContinueSentinel;
        }
    };
    // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.
    return exports;
}($79ae1ae4a16b6dd8$exports);
try {
    regeneratorRuntime = $79ae1ae4a16b6dd8$var$runtime;
} catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, in modern engines
    // we can explicitly access globalThis. In older engines we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    if (typeof globalThis === "object") globalThis.regeneratorRuntime = $79ae1ae4a16b6dd8$var$runtime;
    else Function("r", "regeneratorRuntime = r")($79ae1ae4a16b6dd8$var$runtime);
}


/**
 * Evexi API
 * Version 2.6.0-alpha.8
 */ var $35968c1d1652764a$var$e159, $35968c1d1652764a$var$t, $35968c1d1652764a$var$n49, $35968c1d1652764a$var$o, $35968c1d1652764a$var$r, $35968c1d1652764a$var$i, $35968c1d1652764a$var$a1, $35968c1d1652764a$var$s1 = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof $parcel$global ? $parcel$global : "undefined" != typeof self ? self : {}, $35968c1d1652764a$var$c = {};
$35968c1d1652764a$var$e159 = $35968c1d1652764a$var$c, Object.defineProperty($35968c1d1652764a$var$e159, "__esModule", {
    value: !0
}), $35968c1d1652764a$var$e159.b2bSerialPrint = $35968c1d1652764a$var$e159.EnvironmentType = $35968c1d1652764a$var$e159.Actions = void 0, ($35968c1d1652764a$var$t = $35968c1d1652764a$var$e159.Actions || ($35968c1d1652764a$var$e159.Actions = {})).INFO = "info", $35968c1d1652764a$var$t.LOG = "log", $35968c1d1652764a$var$t.STORAGE_GET = "storage.get", $35968c1d1652764a$var$t.STORAGE_PUT = "storage.put", $35968c1d1652764a$var$t.STORAGE_DELETE = "storage.delete", $35968c1d1652764a$var$t.STORAGE_LIST = "storage.list", $35968c1d1652764a$var$t.STORAGE_CLEAR = "storage.clear", $35968c1d1652764a$var$t.STORAGE_DOWNLOAD = "storage.download", $35968c1d1652764a$var$t.STORAGE_EXISTS = "storage.exists", $35968c1d1652764a$var$t.INTERACT_CREATE = "interact.create", $35968c1d1652764a$var$t.INTERACT_START = "interact.start", $35968c1d1652764a$var$t.INTERACT_DESTROY = "interact.destroy", $35968c1d1652764a$var$t.INTERACT_MESSAGE = "interact.message", $35968c1d1652764a$var$t.INTERACT_KICK = "interact.kick", $35968c1d1652764a$var$t.KIOSK_BARCODE = "kiosk.barcode", $35968c1d1652764a$var$t.KIOSK_PRINTER = "kiosk.printer", $35968c1d1652764a$var$t.PROXY = "proxy", $35968c1d1652764a$var$t.ENV_VAR = "envVar", ($35968c1d1652764a$var$n49 = $35968c1d1652764a$var$e159.EnvironmentType || ($35968c1d1652764a$var$e159.EnvironmentType = {})).SSSP2 = "SSSP2", $35968c1d1652764a$var$n49.HTML = "HTML", $35968c1d1652764a$var$n49.TIZEN = "TIZEN", $35968c1d1652764a$var$n49.KIOSK = "KIOSK", $35968c1d1652764a$var$o = $35968c1d1652764a$var$e159.b2bSerialPrint || ($35968c1d1652764a$var$e159.b2bSerialPrint = {}), ($35968c1d1652764a$var$r = $35968c1d1652764a$var$o.PrinterPort || ($35968c1d1652764a$var$o.PrinterPort = {})).PRINTERPORT0 = "PRINTERPORT0", $35968c1d1652764a$var$r.PRINTERPORT1 = "PRINTERPORT1", $35968c1d1652764a$var$r.PRINTERPORT2 = "PRINTERPORT2", ($35968c1d1652764a$var$i = $35968c1d1652764a$var$o.PrinterParity || ($35968c1d1652764a$var$o.PrinterParity = {})).NONE = "NONE", $35968c1d1652764a$var$i.ODD = "ODD", $35968c1d1652764a$var$i.EVEN = "EVEN", ($35968c1d1652764a$var$a1 = $35968c1d1652764a$var$o.PrinterDataBits || ($35968c1d1652764a$var$o.PrinterDataBits = {})).BITS5 = "BITS5", $35968c1d1652764a$var$a1.BITS6 = "BITS6", $35968c1d1652764a$var$a1.BITS7 = "BITS7", $35968c1d1652764a$var$a1.BITS8 = "BITS8";
var $35968c1d1652764a$var$d = function(e1, t1) {
    return $35968c1d1652764a$var$d = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(e2, t2) {
        e2.__proto__ = t2;
    } || function(e3, t3) {
        for(var n1 in t3)Object.prototype.hasOwnProperty.call(t3, n1) && (e3[n1] = t3[n1]);
    }, $35968c1d1652764a$var$d(e1, t1);
};
var $35968c1d1652764a$var$u = function() {
    return $35968c1d1652764a$var$u = Object.assign || function(e4) {
        for(var t4, n2 = 1, o1 = arguments.length; n2 < o1; n2++)for(var r1 in t4 = arguments[n2])Object.prototype.hasOwnProperty.call(t4, r1) && (e4[r1] = t4[r1]);
        return e4;
    }, $35968c1d1652764a$var$u.apply(this, arguments);
};
function $35968c1d1652764a$var$f(e5, t5, n3, o2) {
    return new (n3 || (n3 = Promise))(function(r2, i1) {
        var a = function a(e6) {
            try {
                c1(o2.next(e6));
            } catch (t6) {
                i1(t6);
            }
        };
        var s = function s(e7) {
            try {
                c1(o2["throw"](e7));
            } catch (t7) {
                i1(t7);
            }
        };
        var c1 = function c1(e8) {
            var _$t;
            e8.done ? r2(e8.value) : (_$t = e8.value, _$t instanceof n3 ? _$t : new n3(function(e9) {
                e9(_$t);
            })).then(a, s);
        };
        c1((o2 = o2.apply(e5, t5 || [])).next());
    });
}
function $35968c1d1652764a$var$h(e10, t8) {
    var s2 = function s2(i3) {
        return function(s4) {
            return function(i4) {
                if (n4) throw new TypeError("Generator is already executing.");
                for(; a;)try {
                    if (n4 = 1, o3 && (r3 = 2 & i4[0] ? o3["return"] : i4[0] ? o3["throw"] || ((r3 = o3["return"]) && r3.call(o3), 0) : o3.next) && !(r3 = r3.call(o3, i4[1])).done) return r3;
                    switch(o3 = 0, r3 && (i4 = [
                        2 & i4[0],
                        r3.value
                    ]), i4[0]){
                        case 0:
                        case 1:
                            r3 = i4;
                            break;
                        case 4:
                            return a.label++, {
                                value: i4[1],
                                done: !1
                            };
                        case 5:
                            a.label++, o3 = i4[1], i4 = [
                                0
                            ];
                            continue;
                        case 7:
                            i4 = a.ops.pop(), a.trys.pop();
                            continue;
                        default:
                            if (!(r3 = a.trys, (r3 = r3.length > 0 && r3[r3.length - 1]) || 6 !== i4[0] && 2 !== i4[0])) {
                                a = 0;
                                continue;
                            }
                            if (3 === i4[0] && (!r3 || i4[1] > r3[0] && i4[1] < r3[3])) {
                                a.label = i4[1];
                                break;
                            }
                            if (6 === i4[0] && a.label < r3[1]) {
                                a.label = r3[1], r3 = i4;
                                break;
                            }
                            if (r3 && a.label < r3[2]) {
                                a.label = r3[2], a.ops.push(i4);
                                break;
                            }
                            r3[2] && a.ops.pop(), a.trys.pop();
                            continue;
                    }
                    i4 = t8.call(e10, a);
                } catch (s) {
                    i4 = [
                        6,
                        s
                    ], o3 = 0;
                } finally{
                    n4 = r3 = 0;
                }
                if (5 & i4[0]) throw i4[1];
                return {
                    value: i4[0] ? i4[1] : void 0,
                    done: !0
                };
            }([
                i3,
                s4
            ]);
        };
    };
    var n4, o3, r3, i2, a = {
        label: 0,
        sent: function sent() {
            if (1 & r3[0]) throw r3[1];
            return r3[1];
        },
        trys: [],
        ops: []
    };
    return i2 = {
        next: s2(0),
        "throw": s2(1),
        "return": s2(2)
    }, "function" == typeof Symbol && (i2[Symbol.iterator] = function() {
        return this;
    }), i2;
}
var $35968c1d1652764a$var$l = {};
Object.defineProperty($35968c1d1652764a$var$l, "__esModule", {
    value: !0
}), $35968c1d1652764a$var$l.queryString = $35968c1d1652764a$var$p = $35968c1d1652764a$var$l.keys = $35968c1d1652764a$var$w = $35968c1d1652764a$var$l.promiseTimeout = void 0;
var $35968c1d1652764a$var$w = $35968c1d1652764a$var$l.promiseTimeout = function w(e11, t9) {
    var n5 = new Promise(function(t, n6) {
        var o4 = window.setTimeout(function() {
            window.clearTimeout(o4), n6("Timed out in " + e11 + "ms.");
        }, e11);
    });
    return Promise.race([
        t9,
        n5
    ]);
};
var $35968c1d1652764a$var$p = $35968c1d1652764a$var$l.keys = function p(e12) {
    return Object.keys(e12);
};
$35968c1d1652764a$var$l.queryString = function(e13) {
    var t10 = Object.keys(e13).map(function(t11) {
        return t11 + "=" + e13[t11];
    }).join("&");
    return t10 ? "?".concat(t10) : "";
};
function $35968c1d1652764a$var$v(e14) {
    try {
        window.parent.postMessage(JSON.stringify($35968c1d1652764a$var$u({}, e14)), "*");
    } catch (t) {
        throw new Error("wrapperNoListener error");
    }
}
function $35968c1d1652764a$var$y(e15, t12, n7) {
    return $35968c1d1652764a$var$f(this, void 0, void 0, function() {
        var o5;
        return $35968c1d1652764a$var$h(this, function(r4) {
            switch(r4.label){
                case 0:
                    return r4.trys.push([
                        0,
                        2,
                        ,
                        3
                    ]), [
                        4,
                        $35968c1d1652764a$var$w(n7 || 5e3, new Promise(function(n8) {
                            var o6, _$r, i5;
                            o6 = function o6(e16) {
                                n8(e16.response);
                            }, _$r = $35968c1d1652764a$var$u({
                                action: e15.action
                            }, t12), i5 = function(e17) {
                                var _$t = JSON.parse(e17.data);
                                if (_$t) try {
                                    $35968c1d1652764a$var$p(_$r).forEach(function(e18) {
                                        if (_$r[e18] !== _$t[e18]) throw new Error("");
                                    }), window.removeEventListener("message", i5, !0), o6(_$t);
                                } catch (e) {}
                            }, window.addEventListener("message", i5, !0), window.parent.postMessage(JSON.stringify($35968c1d1652764a$var$u({}, e15)), "*");
                        }))
                    ];
                case 1:
                    return [
                        2,
                        r4.sent()
                    ];
                case 2:
                    throw o5 = r4.sent(), new Error(o5);
                case 3:
                    return [
                        2
                    ];
            }
        });
    });
}
var $35968c1d1652764a$var$_ = new function() {
    this.all = {
        get: function get(e19) {
            return $35968c1d1652764a$var$y({
                action: $35968c1d1652764a$var$c.Actions.STORAGE_GET,
                name: e19
            }, {
                name: e19
            });
        },
        put: function put(e20, t13) {
            return $35968c1d1652764a$var$y({
                action: $35968c1d1652764a$var$c.Actions.STORAGE_PUT,
                name: e20,
                data: t13
            }, {
                name: e20
            });
        },
        del: function del(e21) {
            return $35968c1d1652764a$var$y({
                action: $35968c1d1652764a$var$c.Actions.STORAGE_DELETE,
                name: e21
            }, {
                name: e21
            });
        },
        list: function list() {
            return $35968c1d1652764a$var$y({
                action: $35968c1d1652764a$var$c.Actions.STORAGE_LIST
            });
        },
        clear: function clear() {
            return $35968c1d1652764a$var$y({
                action: $35968c1d1652764a$var$c.Actions.STORAGE_CLEAR
            });
        },
        download: function download(e22, t14) {
            return $35968c1d1652764a$var$y({
                action: $35968c1d1652764a$var$c.Actions.STORAGE_DOWNLOAD,
                url: e22,
                name: t14
            }, {
                name: t14
            });
        },
        exists: function exists(e23) {
            return $35968c1d1652764a$var$y({
                action: $35968c1d1652764a$var$c.Actions.STORAGE_EXISTS,
                name: e23
            }, {
                name: e23
            });
        }
    };
}, $35968c1d1652764a$var$g = {}, $35968c1d1652764a$var$T = {}, $35968c1d1652764a$var$P = {}, $35968c1d1652764a$var$m = {};
Object.defineProperty($35968c1d1652764a$var$m, "__esModule", {
    value: !0
});
$35968c1d1652764a$var$m["default"] = new /*#__PURE__*/ (function() {
    "use strict";
    function _class() {
        (0, $9f55f36f17d2ee36$export$2e2bcd8739ae039)(this, _class);
    }
    (0, $d13d1273b66fbb0e$export$2e2bcd8739ae039)(_class, [
        {
            key: "headers",
            get: function get() {
                return {
                    Authorization: "Bearer " + this.token
                };
            }
        },
        {
            key: "token",
            get: function get() {
                return this._token;
            },
            set: function set(e24) {
                this._token = e24;
            }
        }
    ]);
    return _class;
}());
var $35968c1d1652764a$var$E = $35968c1d1652764a$var$s1 && $35968c1d1652764a$var$s1.__importDefault || function(e25) {
    return e25 && e25.__esModule ? e25 : {
        "default": e25
    };
};
Object.defineProperty($35968c1d1652764a$var$P, "__esModule", {
    value: !0
});
var $35968c1d1652764a$var$I = $35968c1d1652764a$var$E($35968c1d1652764a$var$m);
$35968c1d1652764a$var$P["default"] = new /*#__PURE__*/ (function() {
    "use strict";
    function _class() {
        (0, $9f55f36f17d2ee36$export$2e2bcd8739ae039)(this, _class);
    }
    (0, $d13d1273b66fbb0e$export$2e2bcd8739ae039)(_class, [
        {
            key: "accountActivation",
            value: function accountActivation(e26, t15) {
                return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                    var n9;
                    return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _ctx.next = 2;
                                return window.fetch("".concat(undefined, "/account/activation/").concat(e26), (0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                    method: "PUT",
                                    body: JSON.stringify(t15)
                                }, $35968c1d1652764a$var$I["default"].headers));
                            case 2:
                                n9 = _ctx.sent;
                                if (n9.ok) {
                                    _ctx.next = 5;
                                    break;
                                }
                                throw n9;
                            case 5:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            key: "expiredAccount",
            value: function expiredAccount(e27) {
                return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                    var t16;
                    return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _ctx.next = 2;
                                return window.fetch("".concat(undefined, "/account/activation"), (0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                    method: "POST",
                                    body: JSON.stringify(e27)
                                }, $35968c1d1652764a$var$I["default"].headers));
                            case 2:
                                t16 = _ctx.sent;
                                if (t16.ok) {
                                    _ctx.next = 5;
                                    break;
                                }
                                throw t16;
                            case 5:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            key: "resetPassword",
            value: function resetPassword(e28, t17) {
                return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                    var n10;
                    return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _ctx.next = 2;
                                return window.fetch("".concat(undefined, "/account/password-reset/").concat(e28), (0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                    method: "PUT",
                                    body: JSON.stringify(t17)
                                }, $35968c1d1652764a$var$I["default"].headers));
                            case 2:
                                n10 = _ctx.sent;
                                if (n10.ok) {
                                    _ctx.next = 5;
                                    break;
                                }
                                throw n10;
                            case 5:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            key: "forgottenPassword",
            value: function forgottenPassword(e, t18) {
                return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                    var n11;
                    return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _ctx.next = 2;
                                return window.fetch("".concat(undefined, "/account/password-reset"), (0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                    method: "POST",
                                    body: JSON.stringify(t18)
                                }, $35968c1d1652764a$var$I["default"].headers));
                            case 2:
                                n11 = _ctx.sent;
                                if (n11.ok) {
                                    _ctx.next = 5;
                                    break;
                                }
                                throw n11;
                            case 5:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        }
    ]);
    return _class;
}());
var $35968c1d1652764a$var$O = {}, $35968c1d1652764a$var$R = $35968c1d1652764a$var$s1 && $35968c1d1652764a$var$s1.__importDefault || function(e29) {
    return e29 && e29.__esModule ? e29 : {
        "default": e29
    };
};
Object.defineProperty($35968c1d1652764a$var$O, "__esModule", {
    value: !0
});
var $35968c1d1652764a$var$A = $35968c1d1652764a$var$R($35968c1d1652764a$var$m);
$35968c1d1652764a$var$O["default"] = new /*#__PURE__*/ (function() {
    "use strict";
    function _class() {
        (0, $9f55f36f17d2ee36$export$2e2bcd8739ae039)(this, _class);
    }
    (0, $d13d1273b66fbb0e$export$2e2bcd8739ae039)(_class, [
        {
            key: "login",
            value: function login(e30) {
                return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                    var t19, n12;
                    return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _ctx.next = 2;
                                return window.fetch("".concat(undefined, "/auth/login"), {
                                    method: "POST",
                                    body: JSON.stringify(e30)
                                });
                            case 2:
                                t19 = _ctx.sent;
                                if (t19.ok) {
                                    _ctx.next = 5;
                                    break;
                                }
                                throw t19;
                            case 5:
                                _ctx.next = 7;
                                return t19.json();
                            case 7:
                                n12 = _ctx.sent;
                                return _ctx.abrupt("return", ($35968c1d1652764a$var$A["default"].token = n12.token, n12));
                            case 9:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            key: "getMe",
            value: function getMe() {
                return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                    var e31;
                    return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _ctx.next = 2;
                                return window.fetch("".concat(undefined, "/auth/me"), (0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                    method: "GET"
                                }, $35968c1d1652764a$var$A["default"].headers));
                            case 2:
                                e31 = _ctx.sent;
                                if (e31.ok) {
                                    _ctx.next = 5;
                                    break;
                                }
                                throw e31;
                            case 5:
                                _ctx.next = 7;
                                return e31.json();
                            case 7:
                                return _ctx.abrupt("return", _ctx.sent);
                            case 8:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            key: "updateMe",
            value: function updateMe(e32) {
                return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                    var t20;
                    return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _ctx.next = 2;
                                return window.fetch("".concat(undefined, "/auth/me"), (0, $f53a7de5348002ff$export$2e2bcd8739ae039)((0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                    method: "PUT"
                                }, $35968c1d1652764a$var$A["default"].headers), {
                                    body: JSON.stringify(e32)
                                }));
                            case 2:
                                t20 = _ctx.sent;
                                if (t20.ok) {
                                    _ctx.next = 5;
                                    break;
                                }
                                throw t20;
                            case 5:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            key: "mimicClient",
            value: function mimicClient(e33) {
                return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                    var t21, n13;
                    return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _ctx.next = 2;
                                return window.fetch("".concat(undefined, "/auth/me?client=").concat(e33), (0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                    method: "PUT"
                                }, $35968c1d1652764a$var$A["default"].headers));
                            case 2:
                                t21 = _ctx.sent;
                                if (t21.ok) {
                                    _ctx.next = 5;
                                    break;
                                }
                                throw t21;
                            case 5:
                                _ctx.next = 7;
                                return t21.json();
                            case 7:
                                n13 = _ctx.sent;
                                return _ctx.abrupt("return", ($35968c1d1652764a$var$A["default"].token = n13.token, n13));
                            case 9:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            key: "userPermissions",
            value: function userPermissions() {
                return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                    var e34;
                    return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _ctx.next = 2;
                                return window.fetch("".concat(undefined, "/auth/me/permissions"), (0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                    method: "GET"
                                }, $35968c1d1652764a$var$A["default"].headers));
                            case 2:
                                e34 = _ctx.sent;
                                if (e34.ok) {
                                    _ctx.next = 5;
                                    break;
                                }
                                throw e34;
                            case 5:
                                _ctx.next = 7;
                                return e34.json();
                            case 7:
                                return _ctx.abrupt("return", _ctx.sent);
                            case 8:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            key: "refreshToken",
            value: function refreshToken() {
                return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                    var e35, t22;
                    return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _ctx.next = 2;
                                return window.fetch("".concat(undefined, "/auth/refresh_token"), (0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                    method: "GET"
                                }, $35968c1d1652764a$var$A["default"].headers));
                            case 2:
                                e35 = _ctx.sent;
                                if (e35.ok) {
                                    _ctx.next = 5;
                                    break;
                                }
                                throw e35;
                            case 5:
                                _ctx.next = 7;
                                return e35.json();
                            case 7:
                                t22 = _ctx.sent;
                                return _ctx.abrupt("return", ($35968c1d1652764a$var$A["default"].token = t22.token, t22));
                            case 9:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        }
    ]);
    return _class;
}());
var $35968c1d1652764a$var$S = {}, $35968c1d1652764a$var$b = $35968c1d1652764a$var$s1 && $35968c1d1652764a$var$s1.__importDefault || function(e36) {
    return e36 && e36.__esModule ? e36 : {
        "default": e36
    };
};
Object.defineProperty($35968c1d1652764a$var$S, "__esModule", {
    value: !0
});
var $35968c1d1652764a$var$k = $35968c1d1652764a$var$b($35968c1d1652764a$var$m);
$35968c1d1652764a$var$S["default"] = new /*#__PURE__*/ (function() {
    "use strict";
    function _class() {
        (0, $9f55f36f17d2ee36$export$2e2bcd8739ae039)(this, _class);
    }
    (0, $d13d1273b66fbb0e$export$2e2bcd8739ae039)(_class, [
        {
            key: "get",
            value: function get(e37) {
                return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                    var t23;
                    return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _ctx.next = 2;
                                return window.fetch("".concat(undefined, "/clients/").concat(e37), (0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                    method: "GET"
                                }, $35968c1d1652764a$var$k["default"].headers));
                            case 2:
                                t23 = _ctx.sent;
                                if (t23.ok) {
                                    _ctx.next = 5;
                                    break;
                                }
                                throw t23;
                            case 5:
                                _ctx.next = 7;
                                return t23.json();
                            case 7:
                                return _ctx.abrupt("return", _ctx.sent);
                            case 8:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            key: "getAll",
            value: function getAll(e38) {
                return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                    var t24;
                    return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _ctx.next = 2;
                                return window.fetch("".concat(undefined, "/clients?page=").concat(e38.page, "&limit=").concat(e38.limit), (0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                    method: "GET"
                                }, $35968c1d1652764a$var$k["default"].headers));
                            case 2:
                                t24 = _ctx.sent;
                                if (t24.ok) {
                                    _ctx.next = 5;
                                    break;
                                }
                                throw t24;
                            case 5:
                                _ctx.next = 7;
                                return t24.json();
                            case 7:
                                return _ctx.abrupt("return", _ctx.sent);
                            case 8:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            key: "create",
            value: function create(e39) {
                return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                    var t25;
                    return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _ctx.next = 2;
                                return window.fetch("".concat(undefined, "/clients"), (0, $f53a7de5348002ff$export$2e2bcd8739ae039)((0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                    method: "POST"
                                }, $35968c1d1652764a$var$k["default"].headers), {
                                    body: JSON.stringify(e39)
                                }));
                            case 2:
                                t25 = _ctx.sent;
                                if (!(!t25.ok || !t25.headers)) {
                                    _ctx.next = 5;
                                    break;
                                }
                                throw t25;
                            case 5:
                                if (!(!t25.headers || !t25.headers.get("X-Resource-Id"))) {
                                    _ctx.next = 7;
                                    break;
                                }
                                throw new Error("Missing X-Resource-Id");
                            case 7:
                                return _ctx.abrupt("return", t25.headers.get("X-Resource-Id"));
                            case 8:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            key: "update",
            value: function update(e40, t26) {
                return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                    var n14;
                    return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _ctx.next = 2;
                                return window.fetch("".concat(undefined, "/clients/").concat(e40), (0, $f53a7de5348002ff$export$2e2bcd8739ae039)((0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                    method: "PUT"
                                }, $35968c1d1652764a$var$k["default"].headers), {
                                    body: JSON.stringify(t26)
                                }));
                            case 2:
                                n14 = _ctx.sent;
                                if (n14.ok) {
                                    _ctx.next = 5;
                                    break;
                                }
                                throw n14;
                            case 5:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        }
    ]);
    return _class;
}());
var $35968c1d1652764a$var$$ = {}, $35968c1d1652764a$var$L = $35968c1d1652764a$var$s1 && $35968c1d1652764a$var$s1.__importDefault || function(e41) {
    return e41 && e41.__esModule ? e41 : {
        "default": e41
    };
};
Object.defineProperty($35968c1d1652764a$var$$, "__esModule", {
    value: !0
});
var $35968c1d1652764a$var$U = $35968c1d1652764a$var$L($35968c1d1652764a$var$m);
$35968c1d1652764a$var$$["default"] = new /*#__PURE__*/ (function() {
    "use strict";
    function _class() {
        (0, $9f55f36f17d2ee36$export$2e2bcd8739ae039)(this, _class);
    }
    (0, $d13d1273b66fbb0e$export$2e2bcd8739ae039)(_class, [
        {
            key: "get",
            value: function get(e42) {
                return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                    var t27;
                    return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _ctx.next = 2;
                                return window.fetch("".concat(undefined, "/clients/").concat(e42, "/settings"), (0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                    method: "GET"
                                }, $35968c1d1652764a$var$U["default"].headers));
                            case 2:
                                t27 = _ctx.sent;
                                if (t27.ok) {
                                    _ctx.next = 5;
                                    break;
                                }
                                throw t27;
                            case 5:
                                _ctx.next = 7;
                                return t27.json();
                            case 7:
                                return _ctx.abrupt("return", _ctx.sent);
                            case 8:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            key: "update",
            value: function update(e43, t28) {
                return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                    var n15;
                    return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _ctx.next = 2;
                                return window.fetch("".concat(undefined, "/clients/").concat(e43, "/settings"), (0, $f53a7de5348002ff$export$2e2bcd8739ae039)((0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                    method: "PUT"
                                }, $35968c1d1652764a$var$U["default"].headers), {
                                    body: JSON.stringify(t28)
                                }));
                            case 2:
                                n15 = _ctx.sent;
                                if (n15.ok) {
                                    _ctx.next = 5;
                                    break;
                                }
                                throw n15;
                            case 5:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        }
    ]);
    return _class;
}());
var $35968c1d1652764a$var$N = {};
!function(e44) {
    var t29 = $35968c1d1652764a$var$s1 && $35968c1d1652764a$var$s1.__importDefault || function(e45) {
        return e45 && e45.__esModule ? e45 : {
            "default": e45
        };
    };
    Object.defineProperty(e44, "__esModule", {
        value: !0
    }), e44.Action = void 0;
    var n16 = t29($35968c1d1652764a$var$m);
    (e44.Action || (e44.Action = {})).AUTH = "Auth";
    e44["default"] = new /*#__PURE__*/ (function() {
        "use strict";
        function _class() {
            (0, $9f55f36f17d2ee36$export$2e2bcd8739ae039)(this, _class);
        }
        (0, $d13d1273b66fbb0e$export$2e2bcd8739ae039)(_class, [
            {
                key: "createCode",
                value: function createCode(e46) {
                    return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                        var t30;
                        return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                            while(1)switch(_ctx.prev = _ctx.next){
                                case 0:
                                    _ctx.next = 2;
                                    return window.fetch("".concat(undefined, "/devices/auth/code"), (0, $f53a7de5348002ff$export$2e2bcd8739ae039)((0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                        method: "POST"
                                    }, n16["default"].headers), {
                                        body: JSON.stringify(e46)
                                    }));
                                case 2:
                                    t30 = _ctx.sent;
                                    if (t30.ok) {
                                        _ctx.next = 5;
                                        break;
                                    }
                                    throw t30;
                                case 5:
                                case "end":
                                    return _ctx.stop();
                            }
                        }, _callee);
                    }))();
                }
            },
            {
                key: "resetDeviceCode",
                value: function resetDeviceCode(e47) {
                    return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                        var t31;
                        return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                            while(1)switch(_ctx.prev = _ctx.next){
                                case 0:
                                    _ctx.next = 2;
                                    return window.fetch("".concat(undefined, "/devices/").concat(e47, "/code"), (0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                        method: "DELETE"
                                    }, n16["default"].headers));
                                case 2:
                                    t31 = _ctx.sent;
                                    if (t31.ok) {
                                        _ctx.next = 5;
                                        break;
                                    }
                                    throw t31;
                                case 5:
                                case "end":
                                    return _ctx.stop();
                            }
                        }, _callee);
                    }))();
                }
            },
            {
                key: "deviceAuthentication",
                value: function deviceAuthentication(e48) {
                    return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                        var t32;
                        return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                            while(1)switch(_ctx.prev = _ctx.next){
                                case 0:
                                    _ctx.next = 2;
                                    return window.fetch("".concat(undefined, "/devices/auth"), (0, $f53a7de5348002ff$export$2e2bcd8739ae039)((0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                        method: "POST"
                                    }, n16["default"].headers), {
                                        body: JSON.stringify(e48)
                                    }));
                                case 2:
                                    t32 = _ctx.sent;
                                    if (t32.ok) {
                                        _ctx.next = 5;
                                        break;
                                    }
                                    throw t32;
                                case 5:
                                    _ctx.next = 7;
                                    return t32.json();
                                case 7:
                                    return _ctx.abrupt("return", _ctx.sent);
                                case 8:
                                case "end":
                                    return _ctx.stop();
                            }
                        }, _callee);
                    }))();
                }
            },
            {
                key: "establishSocketConnection",
                value: function establishSocketConnection(e49) {
                    return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                        var t33;
                        return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                            while(1)switch(_ctx.prev = _ctx.next){
                                case 0:
                                    _ctx.next = 2;
                                    return window.fetch("".concat(undefined, "/socket/").concat(e49), (0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                        method: "GET"
                                    }, n16["default"].headers));
                                case 2:
                                    t33 = _ctx.sent;
                                    if (t33.ok) {
                                        _ctx.next = 5;
                                        break;
                                    }
                                    throw t33;
                                case 5:
                                case "end":
                                    return _ctx.stop();
                            }
                        }, _callee);
                    }))();
                }
            }
        ]);
        return _class;
    }());
}($35968c1d1652764a$var$N);
var $35968c1d1652764a$var$M = {}, $35968c1d1652764a$var$j = $35968c1d1652764a$var$s1 && $35968c1d1652764a$var$s1.__importDefault || function(e50) {
    return e50 && e50.__esModule ? e50 : {
        "default": e50
    };
};
Object.defineProperty($35968c1d1652764a$var$M, "__esModule", {
    value: !0
});
var $35968c1d1652764a$var$D = $35968c1d1652764a$var$j($35968c1d1652764a$var$m);
$35968c1d1652764a$var$M["default"] = new /*#__PURE__*/ (function() {
    "use strict";
    function _class() {
        (0, $9f55f36f17d2ee36$export$2e2bcd8739ae039)(this, _class);
    }
    (0, $d13d1273b66fbb0e$export$2e2bcd8739ae039)(_class, [
        {
            key: "getAll",
            value: function getAll() {
                return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                    var e51;
                    return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _ctx.next = 2;
                                return window.fetch("".concat(undefined, "/integrations"), (0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                    method: "GET"
                                }, $35968c1d1652764a$var$D["default"].headers));
                            case 2:
                                e51 = _ctx.sent;
                                if (e51.ok) {
                                    _ctx.next = 5;
                                    break;
                                }
                                throw e51;
                            case 5:
                                _ctx.next = 7;
                                return e51.json();
                            case 7:
                                return _ctx.abrupt("return", _ctx.sent);
                            case 8:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            key: "getByName",
            value: function getByName(e52) {
                return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                    var t34;
                    return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _ctx.next = 2;
                                return window.fetch("".concat(undefined, "/integrations/").concat(e52), (0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                    method: "GET"
                                }, $35968c1d1652764a$var$D["default"].headers));
                            case 2:
                                t34 = _ctx.sent;
                                if (t34.ok) {
                                    _ctx.next = 5;
                                    break;
                                }
                                throw t34;
                            case 5:
                                _ctx.next = 7;
                                return t34.json();
                            case 7:
                                return _ctx.abrupt("return", _ctx.sent);
                            case 8:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            key: "enableById",
            value: function enableById(e53) {
                return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                    var t35;
                    return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _ctx.next = 2;
                                return window.fetch("".concat(undefined, "/integrations/").concat(e53), (0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                    method: "PUT"
                                }, $35968c1d1652764a$var$D["default"].headers));
                            case 2:
                                t35 = _ctx.sent;
                                if (t35.ok) {
                                    _ctx.next = 5;
                                    break;
                                }
                                throw t35;
                            case 5:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            key: "createSettings",
            value: function createSettings(e54, t36) {
                return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                    var n17;
                    return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _ctx.next = 2;
                                return window.fetch("".concat(undefined, "/integrations/").concat(e54, "/settings"), (0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                    method: "PUT",
                                    body: JSON.stringify(t36)
                                }, $35968c1d1652764a$var$D["default"].headers));
                            case 2:
                                n17 = _ctx.sent;
                                if (n17.ok) {
                                    _ctx.next = 5;
                                    break;
                                }
                                throw n17;
                            case 5:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            key: "updateByIdSettings",
            value: function updateByIdSettings(e55, t37) {
                return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                    var n18;
                    return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _ctx.next = 2;
                                return window.fetch("".concat(undefined, "/integrations/").concat(e55, "/settings"), (0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                    method: "PATCH",
                                    body: JSON.stringify(t37)
                                }, $35968c1d1652764a$var$D["default"].headers));
                            case 2:
                                n18 = _ctx.sent;
                                if (n18.ok) {
                                    _ctx.next = 5;
                                    break;
                                }
                                throw n18;
                            case 5:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            key: "deleteSettings",
            value: function deleteSettings(e56) {
                return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                    var t38;
                    return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _ctx.next = 2;
                                return window.fetch("".concat(undefined, "/integrations/").concat(e56, "/settings"), (0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                    method: "DELETE"
                                }, $35968c1d1652764a$var$D["default"].headers));
                            case 2:
                                t38 = _ctx.sent;
                                if (t38.ok) {
                                    _ctx.next = 5;
                                    break;
                                }
                                throw t38;
                            case 5:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        }
    ]);
    return _class;
}());
var $35968c1d1652764a$var$G = {}, $35968c1d1652764a$var$C = $35968c1d1652764a$var$s1 && $35968c1d1652764a$var$s1.__importDefault || function(e57) {
    return e57 && e57.__esModule ? e57 : {
        "default": e57
    };
};
Object.defineProperty($35968c1d1652764a$var$G, "__esModule", {
    value: !0
});
var $35968c1d1652764a$var$x = $35968c1d1652764a$var$C($35968c1d1652764a$var$m);
$35968c1d1652764a$var$G["default"] = new /*#__PURE__*/ (function() {
    "use strict";
    function _class() {
        (0, $9f55f36f17d2ee36$export$2e2bcd8739ae039)(this, _class);
    }
    (0, $d13d1273b66fbb0e$export$2e2bcd8739ae039)(_class, [
        {
            key: "accessClient",
            value: function accessClient(e58) {
                return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                    var t39;
                    return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _ctx.next = 2;
                                return window.fetch("".concat(undefined, "/u/").concat(e58), (0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                    method: "GET"
                                }, $35968c1d1652764a$var$x["default"].headers));
                            case 2:
                                t39 = _ctx.sent;
                                if (t39.ok) {
                                    _ctx.next = 5;
                                    break;
                                }
                                throw t39;
                            case 5:
                                if (!(!t39.headers || !t39.headers.get("Location"))) {
                                    _ctx.next = 7;
                                    break;
                                }
                                throw new Error("Missing Location header");
                            case 7:
                                return _ctx.abrupt("return", t39.headers.get("Location"));
                            case 8:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            key: "pushMessage",
            value: function pushMessage(e59, t40) {
                return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                    var n19;
                    return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _ctx.next = 2;
                                return window.fetch("".concat(undefined, "/interactive/message/").concat(e59), (0, $f53a7de5348002ff$export$2e2bcd8739ae039)((0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                    method: "POST"
                                }, $35968c1d1652764a$var$x["default"].headers), {
                                    body: JSON.stringify(t40)
                                }));
                            case 2:
                                n19 = _ctx.sent;
                                if (n19.ok) {
                                    _ctx.next = 5;
                                    break;
                                }
                                throw n19;
                            case 5:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            key: "enableConnection",
            value: function enableConnection(e60) {
                return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                    var t41;
                    return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _ctx.next = 2;
                                return window.fetch("".concat(undefined, "/interactive/socket/").concat(e60), (0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                    method: "GET"
                                }, $35968c1d1652764a$var$x["default"].headers));
                            case 2:
                                t41 = _ctx.sent;
                                if (t41.ok) {
                                    _ctx.next = 5;
                                    break;
                                }
                                throw t41;
                            case 5:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        }
    ]);
    return _class;
}());
var $35968c1d1652764a$var$J = {};
!function(e61) {
    var t42 = $35968c1d1652764a$var$s1 && $35968c1d1652764a$var$s1.__importDefault || function(e62) {
        return e62 && e62.__esModule ? e62 : {
            "default": e62
        };
    };
    Object.defineProperty(e61, "__esModule", {
        value: !0
    }), e61.Sort = e61.Rotation = void 0;
    var n20 = t42($35968c1d1652764a$var$m), o7 = $35968c1d1652764a$var$l;
    var r5, i6;
    (r5 = e61.Rotation || (e61.Rotation = {})).LANDSCAPE = "landscape", r5.PORTRAIT = "portrait", r5.ANY = "any", (i6 = e61.Sort || (e61.Sort = {})).NAME = "name", i6["-NAME"] = "-name", i6.UPDATED_AT = "updated_at", i6["-UPDATED_AT"] = "-updated_at", i6.CREATED_AT = "-created_at", i6["-CREATED_AT"] = "-created_at";
    e61["default"] = new /*#__PURE__*/ (function() {
        "use strict";
        function _class() {
            (0, $9f55f36f17d2ee36$export$2e2bcd8739ae039)(this, _class);
        }
        (0, $d13d1273b66fbb0e$export$2e2bcd8739ae039)(_class, [
            {
                key: "list",
                value: function list(e63) {
                    return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                        var t43;
                        return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                            while(1)switch(_ctx.prev = _ctx.next){
                                case 0:
                                    _ctx.next = 2;
                                    return window.fetch("".concat(undefined, "/media"), (0, $f53a7de5348002ff$export$2e2bcd8739ae039)((0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                        method: "GET"
                                    }, n20["default"].headers), {
                                        body: JSON.stringify(e63)
                                    }));
                                case 2:
                                    t43 = _ctx.sent;
                                    if (t43.ok) {
                                        _ctx.next = 5;
                                        break;
                                    }
                                    throw t43;
                                case 5:
                                    _ctx.next = 7;
                                    return t43.json();
                                case 7:
                                    return _ctx.abrupt("return", _ctx.sent);
                                case 8:
                                case "end":
                                    return _ctx.stop();
                            }
                        }, _callee);
                    }))();
                }
            },
            {
                key: "get",
                value: function get(e64) {
                    return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                        var t44;
                        return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                            while(1)switch(_ctx.prev = _ctx.next){
                                case 0:
                                    _ctx.next = 2;
                                    return window.fetch("".concat(undefined, "/media/").concat(e64), (0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                        method: "GET"
                                    }, n20["default"].headers));
                                case 2:
                                    t44 = _ctx.sent;
                                    if (t44.ok) {
                                        _ctx.next = 5;
                                        break;
                                    }
                                    throw t44;
                                case 5:
                                    _ctx.next = 7;
                                    return t44.json();
                                case 7:
                                    return _ctx.abrupt("return", _ctx.sent);
                                case 8:
                                case "end":
                                    return _ctx.stop();
                            }
                        }, _callee);
                    }))();
                }
            },
            {
                key: "update",
                value: function update(e65, t45) {
                    return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                        var o8;
                        return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                            while(1)switch(_ctx.prev = _ctx.next){
                                case 0:
                                    _ctx.next = 2;
                                    return window.fetch("".concat(undefined, "/media/").concat(e65), (0, $f53a7de5348002ff$export$2e2bcd8739ae039)((0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                        method: "PUT"
                                    }, n20["default"].headers), {
                                        body: JSON.stringify(t45)
                                    }));
                                case 2:
                                    o8 = _ctx.sent;
                                    if (o8.ok) {
                                        _ctx.next = 5;
                                        break;
                                    }
                                    throw o8;
                                case 5:
                                case "end":
                                    return _ctx.stop();
                            }
                        }, _callee);
                    }))();
                }
            },
            {
                key: "delete",
                value: function _delete(e66) {
                    return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                        var t46;
                        return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                            while(1)switch(_ctx.prev = _ctx.next){
                                case 0:
                                    _ctx.next = 2;
                                    return window.fetch("".concat(undefined, "/media/").concat(e66), (0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                        method: "DELETE"
                                    }, n20["default"].headers));
                                case 2:
                                    t46 = _ctx.sent;
                                    if (t46.ok) {
                                        _ctx.next = 5;
                                        break;
                                    }
                                    throw t46;
                                case 5:
                                case "end":
                                    return _ctx.stop();
                            }
                        }, _callee);
                    }))();
                }
            },
            {
                key: "createWeb",
                value: function createWeb(e67) {
                    return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                        var t47;
                        return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                            while(1)switch(_ctx.prev = _ctx.next){
                                case 0:
                                    _ctx.next = 2;
                                    return window.fetch("".concat(undefined, "/media/web"), (0, $f53a7de5348002ff$export$2e2bcd8739ae039)((0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                        method: "POST"
                                    }, n20["default"].headers), {
                                        body: JSON.stringify(e67)
                                    }));
                                case 2:
                                    t47 = _ctx.sent;
                                    if (t47.ok) {
                                        _ctx.next = 5;
                                        break;
                                    }
                                    throw t47;
                                case 5:
                                    if (!(!t47.headers || !t47.headers.get("X-Resource-Id"))) {
                                        _ctx.next = 7;
                                        break;
                                    }
                                    throw new Error("Missing X-Resource-Id header");
                                case 7:
                                    return _ctx.abrupt("return", t47.headers.get("X-Resource-Id"));
                                case 8:
                                case "end":
                                    return _ctx.stop();
                            }
                        }, _callee);
                    }))();
                }
            },
            {
                key: "validateUrl",
                value: function validateUrl(e68) {
                    return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                        var t48;
                        return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                            while(1)switch(_ctx.prev = _ctx.next){
                                case 0:
                                    _ctx.next = 2;
                                    return window.fetch("".concat(undefined, "/media/web/validate"), (0, $f53a7de5348002ff$export$2e2bcd8739ae039)((0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                        method: "POST"
                                    }, n20["default"].headers), {
                                        body: JSON.stringify(e68)
                                    }));
                                case 2:
                                    t48 = _ctx.sent;
                                    if (t48.ok) {
                                        _ctx.next = 5;
                                        break;
                                    }
                                    throw t48;
                                case 5:
                                case "end":
                                    return _ctx.stop();
                            }
                        }, _callee);
                    }))();
                }
            },
            {
                key: "streamMedia",
                value: function streamMedia(e69, t49) {
                    return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                        var o9;
                        return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                            while(1)switch(_ctx.prev = _ctx.next){
                                case 0:
                                    _ctx.next = 2;
                                    return window.fetch("".concat(undefined, "/media/stream/").concat(t49), (0, $f53a7de5348002ff$export$2e2bcd8739ae039)((0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                        method: "GET"
                                    }, n20["default"].headers), {
                                        headers: {
                                            "content-range": e69
                                        }
                                    }));
                                case 2:
                                    o9 = _ctx.sent;
                                    if (o9.ok) {
                                        _ctx.next = 5;
                                        break;
                                    }
                                    throw o9;
                                case 5:
                                    return _ctx.abrupt("return", o9.headers);
                                case 6:
                                case "end":
                                    return _ctx.stop();
                            }
                        }, _callee);
                    }))();
                }
            },
            {
                key: "uploadMedia",
                value: function uploadMedia(e70) {
                    return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                        var t50;
                        return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                            while(1)switch(_ctx.prev = _ctx.next){
                                case 0:
                                    _ctx.next = 2;
                                    return window.fetch("".concat(undefined, "/media/uploads"), (0, $f53a7de5348002ff$export$2e2bcd8739ae039)((0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                        method: "POST"
                                    }, n20["default"].headers), {
                                        headers: {
                                            "Context-Disposition": e70
                                        }
                                    }));
                                case 2:
                                    t50 = _ctx.sent;
                                    if (t50.ok) {
                                        _ctx.next = 5;
                                        break;
                                    }
                                    throw t50;
                                case 5:
                                    if (!(!t50.headers || !t50.headers.get("X-Resource-Id"))) {
                                        _ctx.next = 7;
                                        break;
                                    }
                                    throw new Error("Missing X-Resource-Id header");
                                case 7:
                                    return _ctx.abrupt("return", t50.headers.get("X-Resource-Id"));
                                case 8:
                                case "end":
                                    return _ctx.stop();
                            }
                        }, _callee);
                    }))();
                }
            },
            {
                key: "getFile",
                value: function getFile(e71, t51) {
                    return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                        var r6;
                        return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                            while(1)switch(_ctx.prev = _ctx.next){
                                case 0:
                                    _ctx.next = 2;
                                    return window.fetch("".concat(undefined, "/media/uploads/").concat(e71).concat((0, o7.queryString)((0, $6d84196d07227dd4$export$2e2bcd8739ae039)({}, t51))), (0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                        method: "GET"
                                    }, n20["default"].headers));
                                case 2:
                                    r6 = _ctx.sent;
                                    if (r6.ok) {
                                        _ctx.next = 5;
                                        break;
                                    }
                                    throw r6;
                                case 5:
                                    return _ctx.abrupt("return", r6.headers);
                                case 6:
                                case "end":
                                    return _ctx.stop();
                            }
                        }, _callee);
                    }))();
                }
            },
            {
                key: "assignMediaToGroup",
                value: function assignMediaToGroup(e72, t52) {
                    return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                        var o10;
                        return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                            while(1)switch(_ctx.prev = _ctx.next){
                                case 0:
                                    _ctx.next = 2;
                                    return window.fetch("".concat(undefined, "/media/").concat(e72, "/groups"), (0, $f53a7de5348002ff$export$2e2bcd8739ae039)((0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                        method: "POST"
                                    }, n20["default"].headers), {
                                        body: JSON.stringify(t52)
                                    }));
                                case 2:
                                    o10 = _ctx.sent;
                                    if (o10.ok) {
                                        _ctx.next = 5;
                                        break;
                                    }
                                    throw o10;
                                case 5:
                                case "end":
                                    return _ctx.stop();
                            }
                        }, _callee);
                    }))();
                }
            }
        ]);
        return _class;
    }());
}($35968c1d1652764a$var$J);
var $35968c1d1652764a$var$X = {}, $35968c1d1652764a$var$K = $35968c1d1652764a$var$s1 && $35968c1d1652764a$var$s1.__importDefault || function(e73) {
    return e73 && e73.__esModule ? e73 : {
        "default": e73
    };
};
Object.defineProperty($35968c1d1652764a$var$X, "__esModule", {
    value: !0
});
var $35968c1d1652764a$var$B = $35968c1d1652764a$var$K($35968c1d1652764a$var$m), $35968c1d1652764a$var$H = $35968c1d1652764a$var$l;
$35968c1d1652764a$var$X["default"] = new /*#__PURE__*/ (function() {
    "use strict";
    function _class() {
        (0, $9f55f36f17d2ee36$export$2e2bcd8739ae039)(this, _class);
    }
    (0, $d13d1273b66fbb0e$export$2e2bcd8739ae039)(_class, [
        {
            key: "list",
            value: function list(e74) {
                return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                    var t53;
                    return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _ctx.next = 2;
                                return window.fetch("".concat(undefined, "/media/groups").concat((0, $35968c1d1652764a$var$H.queryString)((0, $6d84196d07227dd4$export$2e2bcd8739ae039)({}, e74))), (0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                    method: "GET"
                                }, $35968c1d1652764a$var$B["default"].headers));
                            case 2:
                                t53 = _ctx.sent;
                                if (t53.ok) {
                                    _ctx.next = 5;
                                    break;
                                }
                                throw t53;
                            case 5:
                                _ctx.next = 7;
                                return t53.json();
                            case 7:
                                return _ctx.abrupt("return", _ctx.sent);
                            case 8:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            key: "get",
            value: function get(e75) {
                return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                    var t54;
                    return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _ctx.next = 2;
                                return window.fetch("".concat(undefined, "/media/groups/").concat(e75), (0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                    method: "GET"
                                }, $35968c1d1652764a$var$B["default"].headers));
                            case 2:
                                t54 = _ctx.sent;
                                if (t54.ok) {
                                    _ctx.next = 5;
                                    break;
                                }
                                throw t54;
                            case 5:
                                _ctx.next = 7;
                                return t54.json();
                            case 7:
                                return _ctx.abrupt("return", _ctx.sent);
                            case 8:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            key: "create",
            value: function create(e76) {
                return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                    var t55;
                    return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _ctx.next = 2;
                                return window.fetch("".concat(undefined, "/media/groups"), (0, $f53a7de5348002ff$export$2e2bcd8739ae039)((0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                    method: "POST"
                                }, $35968c1d1652764a$var$B["default"].headers), {
                                    body: JSON.stringify(e76)
                                }));
                            case 2:
                                t55 = _ctx.sent;
                                if (t55.ok) {
                                    _ctx.next = 5;
                                    break;
                                }
                                throw t55;
                            case 5:
                                if (!(!t55.headers || !t55.headers.get("X-Resource-Id"))) {
                                    _ctx.next = 7;
                                    break;
                                }
                                throw new Error("Missing X-Resource-Id header");
                            case 7:
                                return _ctx.abrupt("return", t55.headers.get("X-Resource-Id"));
                            case 8:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            key: "update",
            value: function update(e77, t56) {
                return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                    var n21;
                    return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _ctx.next = 2;
                                return window.fetch("".concat(undefined, "/media/groups/").concat(e77), (0, $f53a7de5348002ff$export$2e2bcd8739ae039)((0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                    method: "PUT"
                                }, $35968c1d1652764a$var$B["default"].headers), {
                                    body: JSON.stringify(t56)
                                }));
                            case 2:
                                n21 = _ctx.sent;
                                if (n21.ok) {
                                    _ctx.next = 5;
                                    break;
                                }
                                throw n21;
                            case 5:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            key: "delete",
            value: function _delete(e78) {
                return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                    var t57;
                    return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _ctx.next = 2;
                                return window.fetch("".concat(undefined, "/media/groups/").concat(e78), (0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                    method: "DELETE"
                                }, $35968c1d1652764a$var$B["default"].headers));
                            case 2:
                                t57 = _ctx.sent;
                                if (t57.ok) {
                                    _ctx.next = 5;
                                    break;
                                }
                                throw t57;
                            case 5:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            key: "updateItems",
            value: function updateItems(e79, t58) {
                return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                    var n22;
                    return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _ctx.next = 2;
                                return window.fetch("".concat(undefined, "/media/groups/").concat(e79, "/items"), (0, $f53a7de5348002ff$export$2e2bcd8739ae039)((0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                    method: "POST"
                                }, $35968c1d1652764a$var$B["default"].headers), {
                                    body: JSON.stringify(t58)
                                }));
                            case 2:
                                n22 = _ctx.sent;
                                if (n22.ok) {
                                    _ctx.next = 5;
                                    break;
                                }
                                throw n22;
                            case 5:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        }
    ]);
    return _class;
}());
var $35968c1d1652764a$var$q = {}, $35968c1d1652764a$var$V = $35968c1d1652764a$var$s1 && $35968c1d1652764a$var$s1.__importDefault || function(e80) {
    return e80 && e80.__esModule ? e80 : {
        "default": e80
    };
};
Object.defineProperty($35968c1d1652764a$var$q, "__esModule", {
    value: !0
});
var $35968c1d1652764a$var$z = $35968c1d1652764a$var$V($35968c1d1652764a$var$m), $35968c1d1652764a$var$W = $35968c1d1652764a$var$l;
$35968c1d1652764a$var$q["default"] = new /*#__PURE__*/ (function() {
    "use strict";
    function _class() {
        (0, $9f55f36f17d2ee36$export$2e2bcd8739ae039)(this, _class);
    }
    (0, $d13d1273b66fbb0e$export$2e2bcd8739ae039)(_class, [
        {
            key: "getAll",
            value: function getAll(e81, t59) {
                return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                    var n23;
                    return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _ctx.next = 2;
                                return window.fetch("".concat(undefined, "/media/").concat(e81, "/variations").concat((0, $35968c1d1652764a$var$W.queryString)((0, $6d84196d07227dd4$export$2e2bcd8739ae039)({}, t59))), (0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                    method: "GET"
                                }, $35968c1d1652764a$var$z["default"].headers));
                            case 2:
                                n23 = _ctx.sent;
                                if (n23.ok) {
                                    _ctx.next = 5;
                                    break;
                                }
                                throw n23;
                            case 5:
                                _ctx.next = 7;
                                return n23.json();
                            case 7:
                                return _ctx.abrupt("return", _ctx.sent);
                            case 8:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            key: "get",
            value: function get(e82, t60) {
                return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                    var n24;
                    return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _ctx.next = 2;
                                return window.fetch("".concat(undefined, "/media/").concat(e82, "/variations/").concat(t60), (0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                    method: "GET"
                                }, $35968c1d1652764a$var$z["default"].headers));
                            case 2:
                                n24 = _ctx.sent;
                                if (n24.ok) {
                                    _ctx.next = 5;
                                    break;
                                }
                                throw n24;
                            case 5:
                                _ctx.next = 7;
                                return n24.json();
                            case 7:
                                return _ctx.abrupt("return", _ctx.sent);
                            case 8:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            key: "getVariationAssets",
            value: function getVariationAssets(e83, t61) {
                return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                    var n25;
                    return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _ctx.next = 2;
                                return window.fetch("".concat(undefined, "/media/uploads/variations/").concat(e83).concat((0, $35968c1d1652764a$var$W.queryString)((0, $6d84196d07227dd4$export$2e2bcd8739ae039)({}, t61))), (0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                    method: "GET"
                                }, $35968c1d1652764a$var$z["default"].headers));
                            case 2:
                                n25 = _ctx.sent;
                                if (n25.ok) {
                                    _ctx.next = 5;
                                    break;
                                }
                                throw n25;
                            case 5:
                                if (!(!n25.headers || !n25.headers.get("Content-Length"))) {
                                    _ctx.next = 7;
                                    break;
                                }
                                throw new Error("Missing Content-Length header");
                            case 7:
                                return _ctx.abrupt("return", n25.headers.get("Content-Length"));
                            case 8:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        }
    ]);
    return _class;
}());
var $35968c1d1652764a$var$F = {};
!function(e84) {
    var t62 = $35968c1d1652764a$var$s1 && $35968c1d1652764a$var$s1.__importDefault || function(e85) {
        return e85 && e85.__esModule ? e85 : {
            "default": e85
        };
    };
    Object.defineProperty(e84, "__esModule", {
        value: !0
    }), e84.State = e84.Level = void 0;
    var n26 = $35968c1d1652764a$var$l, o11 = t62($35968c1d1652764a$var$m);
    var r7, i7;
    (r7 = e84.Level || (e84.Level = {})).DEBUG = "debug", r7.INFO = "info", r7.WARN = "warn", r7.ERROR = "error", (i7 = e84.State || (e84.State = {})).SEEN = "seen", i7.PENDING = "pending";
    e84["default"] = new /*#__PURE__*/ (function() {
        "use strict";
        function _class() {
            (0, $9f55f36f17d2ee36$export$2e2bcd8739ae039)(this, _class);
        }
        (0, $d13d1273b66fbb0e$export$2e2bcd8739ae039)(_class, [
            {
                key: "createSocket",
                value: function createSocket() {
                    return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                        var _$e;
                        return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                            while(1)switch(_ctx.prev = _ctx.next){
                                case 0:
                                    _ctx.next = 2;
                                    return window.fetch("".concat(undefined, "/notify/socket"), (0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                        method: "POST"
                                    }, o11["default"].headers));
                                case 2:
                                    _$e = _ctx.sent;
                                    if (_$e.ok) {
                                        _ctx.next = 5;
                                        break;
                                    }
                                    throw _$e;
                                case 5:
                                    _ctx.next = 7;
                                    return _$e.json();
                                case 7:
                                    return _ctx.abrupt("return", _ctx.sent);
                                case 8:
                                case "end":
                                    return _ctx.stop();
                            }
                        }, _callee);
                    }))();
                }
            },
            {
                key: "list",
                value: function list(e86) {
                    return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                        var t63;
                        return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                            while(1)switch(_ctx.prev = _ctx.next){
                                case 0:
                                    _ctx.next = 2;
                                    return window.fetch("".concat(undefined, "/notifications").concat((0, n26.queryString)((0, $6d84196d07227dd4$export$2e2bcd8739ae039)({}, e86))), (0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                        method: "GET"
                                    }, o11["default"].headers));
                                case 2:
                                    t63 = _ctx.sent;
                                    if (t63.ok) {
                                        _ctx.next = 5;
                                        break;
                                    }
                                    throw t63;
                                case 5:
                                    _ctx.next = 7;
                                    return t63.json();
                                case 7:
                                    return _ctx.abrupt("return", _ctx.sent);
                                case 8:
                                case "end":
                                    return _ctx.stop();
                            }
                        }, _callee);
                    }))();
                }
            },
            {
                key: "create",
                value: function create(e87) {
                    return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                        var t64;
                        return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                            while(1)switch(_ctx.prev = _ctx.next){
                                case 0:
                                    _ctx.next = 2;
                                    return window.fetch("".concat(undefined, "/notifications"), (0, $f53a7de5348002ff$export$2e2bcd8739ae039)((0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                        method: "POST"
                                    }, o11["default"].headers), {
                                        body: JSON.stringify(e87)
                                    }));
                                case 2:
                                    t64 = _ctx.sent;
                                    if (t64.ok) {
                                        _ctx.next = 5;
                                        break;
                                    }
                                    throw t64;
                                case 5:
                                case "end":
                                    return _ctx.stop();
                            }
                        }, _callee);
                    }))();
                }
            },
            {
                key: "get",
                value: function get(e88) {
                    return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                        var t65;
                        return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                            while(1)switch(_ctx.prev = _ctx.next){
                                case 0:
                                    _ctx.next = 2;
                                    return window.fetch("".concat(undefined, "/notifications/").concat(e88), (0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                        method: "GET"
                                    }, o11["default"].headers));
                                case 2:
                                    t65 = _ctx.sent;
                                    if (t65.ok) {
                                        _ctx.next = 5;
                                        break;
                                    }
                                    throw t65;
                                case 5:
                                    _ctx.next = 7;
                                    return t65.json();
                                case 7:
                                    return _ctx.abrupt("return", _ctx.sent);
                                case 8:
                                case "end":
                                    return _ctx.stop();
                            }
                        }, _callee);
                    }))();
                }
            },
            {
                key: "update",
                value: function update(e89, t66) {
                    return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                        var n27;
                        return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                            while(1)switch(_ctx.prev = _ctx.next){
                                case 0:
                                    _ctx.next = 2;
                                    return window.fetch("".concat(undefined, "/notifications/").concat(e89), (0, $f53a7de5348002ff$export$2e2bcd8739ae039)((0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                        method: "PUT"
                                    }, o11["default"].headers), {
                                        body: JSON.stringify(t66)
                                    }));
                                case 2:
                                    n27 = _ctx.sent;
                                    if (n27.ok) {
                                        _ctx.next = 5;
                                        break;
                                    }
                                    throw n27;
                                case 5:
                                case "end":
                                    return _ctx.stop();
                            }
                        }, _callee);
                    }))();
                }
            },
            {
                key: "delete",
                value: function _delete(e90) {
                    return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                        var t67;
                        return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                            while(1)switch(_ctx.prev = _ctx.next){
                                case 0:
                                    _ctx.next = 2;
                                    return window.fetch("".concat(undefined, "/notifications/").concat(e90), (0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                        method: "DELETE"
                                    }, o11["default"].headers));
                                case 2:
                                    t67 = _ctx.sent;
                                    if (t67.ok) {
                                        _ctx.next = 5;
                                        break;
                                    }
                                    throw t67;
                                case 5:
                                case "end":
                                    return _ctx.stop();
                            }
                        }, _callee);
                    }))();
                }
            }
        ]);
        return _class;
    }());
}($35968c1d1652764a$var$F);
var $35968c1d1652764a$var$Y = {};
!function(e91) {
    var t68 = $35968c1d1652764a$var$s1 && $35968c1d1652764a$var$s1.__importDefault || function(e92) {
        return e92 && e92.__esModule ? e92 : {
            "default": e92
        };
    };
    Object.defineProperty(e91, "__esModule", {
        value: !0
    }), e91.Status = e91.PlanType = void 0;
    var n28 = t68($35968c1d1652764a$var$m), o12 = $35968c1d1652764a$var$l;
    var r8, i8;
    (r8 = e91.PlanType || (e91.PlanType = {})).PLAYLIST = "playlist", r8.SCHEDULE = "schedule", (i8 = e91.Status || (e91.Status = {})).OFFLINE = "Offline", i8.ONLINE = "Online";
    e91["default"] = new /*#__PURE__*/ (function() {
        "use strict";
        function _class() {
            (0, $9f55f36f17d2ee36$export$2e2bcd8739ae039)(this, _class);
        }
        (0, $d13d1273b66fbb0e$export$2e2bcd8739ae039)(_class, [
            {
                key: "list",
                value: function list(e93) {
                    return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                        var t69;
                        return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                            while(1)switch(_ctx.prev = _ctx.next){
                                case 0:
                                    _ctx.next = 2;
                                    return window.fetch("".concat(undefined, "/players").concat((0, o12.queryString)((0, $6d84196d07227dd4$export$2e2bcd8739ae039)({}, e93))), (0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                        method: "GET"
                                    }, n28["default"].headers));
                                case 2:
                                    t69 = _ctx.sent;
                                    if (t69.ok) {
                                        _ctx.next = 5;
                                        break;
                                    }
                                    throw t69;
                                case 5:
                                    _ctx.next = 7;
                                    return t69.json();
                                case 7:
                                    return _ctx.abrupt("return", _ctx.sent);
                                case 8:
                                case "end":
                                    return _ctx.stop();
                            }
                        }, _callee);
                    }))();
                }
            },
            {
                key: "get",
                value: function get(e94) {
                    return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                        var t70;
                        return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                            while(1)switch(_ctx.prev = _ctx.next){
                                case 0:
                                    _ctx.next = 2;
                                    return window.fetch("".concat(undefined, "/players/").concat(e94), (0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                        method: "GET"
                                    }, n28["default"].headers));
                                case 2:
                                    t70 = _ctx.sent;
                                    if (t70.ok) {
                                        _ctx.next = 5;
                                        break;
                                    }
                                    throw t70;
                                case 5:
                                    _ctx.next = 7;
                                    return t70.json();
                                case 7:
                                    return _ctx.abrupt("return", _ctx.sent);
                                case 8:
                                case "end":
                                    return _ctx.stop();
                            }
                        }, _callee);
                    }))();
                }
            },
            {
                key: "create",
                value: function create(e95) {
                    return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                        var t71;
                        return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                            while(1)switch(_ctx.prev = _ctx.next){
                                case 0:
                                    _ctx.next = 2;
                                    return window.fetch("".concat(undefined, "/players"), (0, $f53a7de5348002ff$export$2e2bcd8739ae039)((0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                        method: "POST"
                                    }, n28["default"].headers), {
                                        body: JSON.stringify(e95)
                                    }));
                                case 2:
                                    t71 = _ctx.sent;
                                    if (t71.ok) {
                                        _ctx.next = 5;
                                        break;
                                    }
                                    throw t71;
                                case 5:
                                    if (!(!t71.headers || !t71.headers.get("X-Resource-Id"))) {
                                        _ctx.next = 7;
                                        break;
                                    }
                                    throw new Error("Missing X-Resource-Id header");
                                case 7:
                                    return _ctx.abrupt("return", t71.headers.get("X-Resource-Id"));
                                case 8:
                                case "end":
                                    return _ctx.stop();
                            }
                        }, _callee);
                    }))();
                }
            },
            {
                key: "update",
                value: function update(e96, t72) {
                    return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                        var o13;
                        return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                            while(1)switch(_ctx.prev = _ctx.next){
                                case 0:
                                    _ctx.next = 2;
                                    return window.fetch("".concat(undefined, "/players/").concat(e96), (0, $f53a7de5348002ff$export$2e2bcd8739ae039)((0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                        method: "PUT"
                                    }, n28["default"].headers), {
                                        body: JSON.stringify(t72)
                                    }));
                                case 2:
                                    o13 = _ctx.sent;
                                    if (o13.ok) {
                                        _ctx.next = 5;
                                        break;
                                    }
                                    throw o13;
                                case 5:
                                case "end":
                                    return _ctx.stop();
                            }
                        }, _callee);
                    }))();
                }
            },
            {
                key: "delete",
                value: function _delete(e97) {
                    return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                        var t73;
                        return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                            while(1)switch(_ctx.prev = _ctx.next){
                                case 0:
                                    _ctx.next = 2;
                                    return window.fetch("".concat(undefined, "/players/").concat(e97), (0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                        method: "DELETE"
                                    }, n28["default"].headers));
                                case 2:
                                    t73 = _ctx.sent;
                                    if (t73.ok) {
                                        _ctx.next = 5;
                                        break;
                                    }
                                    throw t73;
                                case 5:
                                case "end":
                                    return _ctx.stop();
                            }
                        }, _callee);
                    }))();
                }
            },
            {
                key: "getOverview",
                value: function getOverview() {
                    return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                        var _$e;
                        return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                            while(1)switch(_ctx.prev = _ctx.next){
                                case 0:
                                    _ctx.next = 2;
                                    return window.fetch("".concat(undefined, "/overview/players"), (0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                        method: "GET"
                                    }, n28["default"].headers));
                                case 2:
                                    _$e = _ctx.sent;
                                    if (_$e.ok) {
                                        _ctx.next = 5;
                                        break;
                                    }
                                    throw _$e;
                                case 5:
                                    _ctx.next = 7;
                                    return _$e.json();
                                case 7:
                                    return _ctx.abrupt("return", _ctx.sent);
                                case 8:
                                case "end":
                                    return _ctx.stop();
                            }
                        }, _callee);
                    }))();
                }
            },
            {
                key: "downloadVersions",
                value: function downloadVersions() {
                    return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                        var _$e;
                        return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                            while(1)switch(_ctx.prev = _ctx.next){
                                case 0:
                                    _ctx.next = 2;
                                    return window.fetch("".concat(undefined, "/versions"), (0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                        method: "GET"
                                    }, n28["default"].headers));
                                case 2:
                                    _$e = _ctx.sent;
                                    if (_$e.ok) {
                                        _ctx.next = 5;
                                        break;
                                    }
                                    throw _$e;
                                case 5:
                                    _ctx.next = 7;
                                    return _$e.json();
                                case 7:
                                    return _ctx.abrupt("return", _ctx.sent);
                                case 8:
                                case "end":
                                    return _ctx.stop();
                            }
                        }, _callee);
                    }))();
                }
            }
        ]);
        return _class;
    }());
}($35968c1d1652764a$var$Y);
var $35968c1d1652764a$var$Z = {}, $35968c1d1652764a$var$Q = $35968c1d1652764a$var$s1 && $35968c1d1652764a$var$s1.__importDefault || function(e98) {
    return e98 && e98.__esModule ? e98 : {
        "default": e98
    };
};
Object.defineProperty($35968c1d1652764a$var$Z, "__esModule", {
    value: !0
});
var $35968c1d1652764a$var$ee = $35968c1d1652764a$var$Q($35968c1d1652764a$var$m);
$35968c1d1652764a$var$Z["default"] = new /*#__PURE__*/ (function() {
    "use strict";
    function _class() {
        (0, $9f55f36f17d2ee36$export$2e2bcd8739ae039)(this, _class);
    }
    (0, $d13d1273b66fbb0e$export$2e2bcd8739ae039)(_class, [
        {
            key: "list",
            value: function list(e99) {
                return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                    var t74;
                    return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _ctx.next = 2;
                                return window.fetch("".concat(undefined, "/player/").concat(e99, "/variables"), (0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                    method: "GET"
                                }, $35968c1d1652764a$var$ee["default"].headers));
                            case 2:
                                t74 = _ctx.sent;
                                if (t74.ok) {
                                    _ctx.next = 5;
                                    break;
                                }
                                throw t74;
                            case 5:
                                _ctx.next = 7;
                                return t74.json();
                            case 7:
                                return _ctx.abrupt("return", _ctx.sent);
                            case 8:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            key: "get",
            value: function get(e100, t75) {
                return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                    var n29;
                    return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _ctx.next = 2;
                                return window.fetch("".concat(undefined, "/player/").concat(e100, "/variables/").concat(t75), (0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                    method: "GET"
                                }, $35968c1d1652764a$var$ee["default"].headers));
                            case 2:
                                n29 = _ctx.sent;
                                if (n29.ok) {
                                    _ctx.next = 5;
                                    break;
                                }
                                throw n29;
                            case 5:
                                _ctx.next = 7;
                                return n29.json();
                            case 7:
                                return _ctx.abrupt("return", _ctx.sent);
                            case 8:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            key: "create",
            value: function create(e101, t76) {
                return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                    var n30;
                    return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _ctx.next = 2;
                                return window.fetch("".concat(undefined, "/player/").concat(e101, "/variables"), (0, $f53a7de5348002ff$export$2e2bcd8739ae039)((0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                    method: "POST"
                                }, $35968c1d1652764a$var$ee["default"].headers), {
                                    body: JSON.stringify(t76)
                                }));
                            case 2:
                                n30 = _ctx.sent;
                                if (n30.ok) {
                                    _ctx.next = 5;
                                    break;
                                }
                                throw n30;
                            case 5:
                                if (!(!n30.headers || !n30.headers.get("X-Resource-Id"))) {
                                    _ctx.next = 7;
                                    break;
                                }
                                throw new Error("Missing X-Resource-Id header");
                            case 7:
                                return _ctx.abrupt("return", n30.headers.get("X-Resource-Id"));
                            case 8:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            key: "update",
            value: function update(e102, t77, n31) {
                return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                    var o14;
                    return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _ctx.next = 2;
                                return window.fetch("".concat(undefined, "/player/").concat(e102, "/variables/").concat(t77), (0, $f53a7de5348002ff$export$2e2bcd8739ae039)((0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                    method: "PUT"
                                }, $35968c1d1652764a$var$ee["default"].headers), {
                                    body: JSON.stringify(n31)
                                }));
                            case 2:
                                o14 = _ctx.sent;
                                if (o14.ok) {
                                    _ctx.next = 5;
                                    break;
                                }
                                throw o14;
                            case 5:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            key: "delete",
            value: function _delete(e103, t78) {
                return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                    var n32;
                    return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _ctx.next = 2;
                                return window.fetch("".concat(undefined, "/player/").concat(e103, "/variables/").concat(t78), (0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                    method: "DELETE"
                                }, $35968c1d1652764a$var$ee["default"].headers));
                            case 2:
                                n32 = _ctx.sent;
                                if (n32.ok) {
                                    _ctx.next = 5;
                                    break;
                                }
                                throw n32;
                            case 5:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        }
    ]);
    return _class;
}());
var $35968c1d1652764a$var$te = {}, $35968c1d1652764a$var$ne = $35968c1d1652764a$var$s1 && $35968c1d1652764a$var$s1.__importDefault || function(e104) {
    return e104 && e104.__esModule ? e104 : {
        "default": e104
    };
};
Object.defineProperty($35968c1d1652764a$var$te, "__esModule", {
    value: !0
});
var $35968c1d1652764a$var$oe = $35968c1d1652764a$var$l, $35968c1d1652764a$var$re = $35968c1d1652764a$var$ne($35968c1d1652764a$var$m);
$35968c1d1652764a$var$te["default"] = new /*#__PURE__*/ (function() {
    "use strict";
    function _class() {
        (0, $9f55f36f17d2ee36$export$2e2bcd8739ae039)(this, _class);
    }
    (0, $d13d1273b66fbb0e$export$2e2bcd8739ae039)(_class, [
        {
            key: "list",
            value: function list(e105) {
                return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                    var t79;
                    return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _ctx.next = 2;
                                return window.fetch("".concat(undefined, "/playlists/").concat((0, $35968c1d1652764a$var$oe.queryString)((0, $6d84196d07227dd4$export$2e2bcd8739ae039)({}, e105))), (0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                    method: "GET"
                                }, $35968c1d1652764a$var$re["default"].headers));
                            case 2:
                                t79 = _ctx.sent;
                                if (t79.ok) {
                                    _ctx.next = 5;
                                    break;
                                }
                                throw t79;
                            case 5:
                                _ctx.next = 7;
                                return t79.json();
                            case 7:
                                return _ctx.abrupt("return", _ctx.sent);
                            case 8:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            key: "get",
            value: function get(e106) {
                return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                    var t80;
                    return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _ctx.next = 2;
                                return window.fetch("".concat(undefined, "/playlists/").concat(e106), (0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                    method: "GET"
                                }, $35968c1d1652764a$var$re["default"].headers));
                            case 2:
                                t80 = _ctx.sent;
                                if (t80.ok) {
                                    _ctx.next = 5;
                                    break;
                                }
                                throw t80;
                            case 5:
                                _ctx.next = 7;
                                return t80.json();
                            case 7:
                                return _ctx.abrupt("return", _ctx.sent);
                            case 8:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            key: "create",
            value: function create(e107) {
                return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                    var t81;
                    return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _ctx.next = 2;
                                return window.fetch("".concat(undefined, "/playlists"), (0, $f53a7de5348002ff$export$2e2bcd8739ae039)((0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                    method: "POST"
                                }, $35968c1d1652764a$var$re["default"].headers), {
                                    body: JSON.stringify(e107)
                                }));
                            case 2:
                                t81 = _ctx.sent;
                                if (t81.ok) {
                                    _ctx.next = 5;
                                    break;
                                }
                                throw t81;
                            case 5:
                                if (!(!t81.headers || !t81.headers.get("X-Resource-Id"))) {
                                    _ctx.next = 7;
                                    break;
                                }
                                throw new Error("Missing X-Resource-Id header");
                            case 7:
                                return _ctx.abrupt("return", t81.headers.get("X-Resource-Id"));
                            case 8:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            key: "update",
            value: function update(e108, t82) {
                return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                    var n33;
                    return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _ctx.next = 2;
                                return window.fetch("".concat(undefined, "/playlists/").concat(e108), (0, $f53a7de5348002ff$export$2e2bcd8739ae039)((0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                    method: "PUT"
                                }, $35968c1d1652764a$var$re["default"].headers), {
                                    body: JSON.stringify(t82)
                                }));
                            case 2:
                                n33 = _ctx.sent;
                                if (n33.ok) {
                                    _ctx.next = 5;
                                    break;
                                }
                                throw n33;
                            case 5:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            key: "updateName",
            value: function updateName(e109, t83) {
                return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                    var n34;
                    return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _ctx.next = 2;
                                return window.fetch("".concat(undefined, "/playlists/").concat(e109, "/name"), (0, $f53a7de5348002ff$export$2e2bcd8739ae039)((0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                    method: "PUT"
                                }, $35968c1d1652764a$var$re["default"].headers), {
                                    body: JSON.stringify(t83)
                                }));
                            case 2:
                                n34 = _ctx.sent;
                                if (n34.ok) {
                                    _ctx.next = 5;
                                    break;
                                }
                                throw n34;
                            case 5:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            key: "delete",
            value: function _delete(e110) {
                return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                    var t84;
                    return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _ctx.next = 2;
                                return window.fetch("".concat(undefined, "/playlists/").concat(e110), (0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                    method: "DELETE"
                                }, $35968c1d1652764a$var$re["default"].headers));
                            case 2:
                                t84 = _ctx.sent;
                                if (t84.ok) {
                                    _ctx.next = 5;
                                    break;
                                }
                                throw t84;
                            case 5:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        }
    ]);
    return _class;
}());
var $35968c1d1652764a$var$ie = {}, $35968c1d1652764a$var$ae = $35968c1d1652764a$var$s1 && $35968c1d1652764a$var$s1.__importDefault || function(e111) {
    return e111 && e111.__esModule ? e111 : {
        "default": e111
    };
};
Object.defineProperty($35968c1d1652764a$var$ie, "__esModule", {
    value: !0
});
var $35968c1d1652764a$var$se = $35968c1d1652764a$var$ae($35968c1d1652764a$var$m);
$35968c1d1652764a$var$ie["default"] = new /*#__PURE__*/ (function() {
    "use strict";
    function _class() {
        (0, $9f55f36f17d2ee36$export$2e2bcd8739ae039)(this, _class);
    }
    (0, $d13d1273b66fbb0e$export$2e2bcd8739ae039)(_class, [
        {
            key: "get",
            value: function get(e112) {
                return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                    var t85;
                    return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _ctx.next = 2;
                                return window.fetch("".concat(undefined, "/users/roles/").concat(e112), (0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                    method: "GET"
                                }, $35968c1d1652764a$var$se["default"].headers));
                            case 2:
                                t85 = _ctx.sent;
                                if (t85.ok) {
                                    _ctx.next = 5;
                                    break;
                                }
                                throw t85;
                            case 5:
                                _ctx.next = 7;
                                return t85.json();
                            case 7:
                                return _ctx.abrupt("return", _ctx.sent);
                            case 8:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            key: "list",
            value: function list() {
                return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                    var e113;
                    return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _ctx.next = 2;
                                return window.fetch("".concat(undefined, "/users/roles"), (0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                    method: "GET"
                                }, $35968c1d1652764a$var$se["default"].headers));
                            case 2:
                                e113 = _ctx.sent;
                                if (e113.ok) {
                                    _ctx.next = 5;
                                    break;
                                }
                                throw e113;
                            case 5:
                                _ctx.next = 7;
                                return e113.json();
                            case 7:
                                return _ctx.abrupt("return", _ctx.sent);
                            case 8:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            key: "create",
            value: function create(e114) {
                return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                    var t86;
                    return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _ctx.next = 2;
                                return window.fetch("".concat(undefined, "/users/roles"), (0, $f53a7de5348002ff$export$2e2bcd8739ae039)((0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                    method: "POST"
                                }, $35968c1d1652764a$var$se["default"].headers), {
                                    body: JSON.stringify(e114)
                                }));
                            case 2:
                                t86 = _ctx.sent;
                                if (t86.ok) {
                                    _ctx.next = 5;
                                    break;
                                }
                                throw t86;
                            case 5:
                                if (!(!t86.headers || !t86.headers.get("X-Resource-Id"))) {
                                    _ctx.next = 7;
                                    break;
                                }
                                throw new Error("Missing X-Resource-Id header");
                            case 7:
                                return _ctx.abrupt("return", t86.headers.get("X-Resource-Id"));
                            case 8:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            key: "update",
            value: function update(e115) {
                return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                    var t87;
                    return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _ctx.next = 2;
                                return window.fetch("".concat(undefined, "/users/roles"), (0, $f53a7de5348002ff$export$2e2bcd8739ae039)((0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                    method: "PUT"
                                }, $35968c1d1652764a$var$se["default"].headers), {
                                    body: JSON.stringify(e115)
                                }));
                            case 2:
                                t87 = _ctx.sent;
                                if (t87.ok) {
                                    _ctx.next = 5;
                                    break;
                                }
                                throw t87;
                            case 5:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            key: "delete",
            value: function _delete(e116) {
                return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                    var t88;
                    return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _ctx.next = 2;
                                return window.fetch("".concat(undefined, "/users/roles/").concat(e116), (0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                    method: "DELETE"
                                }, $35968c1d1652764a$var$se["default"].headers));
                            case 2:
                                t88 = _ctx.sent;
                                if (t88.ok) {
                                    _ctx.next = 5;
                                    break;
                                }
                                throw t88;
                            case 5:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            key: "getUserPermissions",
            value: function getUserPermissions() {
                return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                    var e117;
                    return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _ctx.next = 2;
                                return window.fetch("".concat(undefined, "/users/permissions"), (0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                    method: "GET"
                                }, $35968c1d1652764a$var$se["default"].headers));
                            case 2:
                                e117 = _ctx.sent;
                                if (e117.ok) {
                                    _ctx.next = 5;
                                    break;
                                }
                                throw e117;
                            case 5:
                                _ctx.next = 7;
                                return e117.json();
                            case 7:
                                return _ctx.abrupt("return", _ctx.sent);
                            case 8:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        }
    ]);
    return _class;
}());
var $35968c1d1652764a$var$ce = {};
!function(e118) {
    var t89 = $35968c1d1652764a$var$s1 && $35968c1d1652764a$var$s1.__importDefault || function(e119) {
        return e119 && e119.__esModule ? e119 : {
            "default": e119
        };
    };
    Object.defineProperty(e118, "__esModule", {
        value: !0
    }), e118.Type = void 0;
    var n35 = t89($35968c1d1652764a$var$m), o15 = $35968c1d1652764a$var$l;
    var r9;
    (r9 = e118.Type || (e118.Type = {})).IMAGE = "image", r9.TEXT = "text", r9.VIDEO = "video", r9.WEB = "web", r9.RSS = "rss", r9.PIP = "pip";
    e118["default"] = new /*#__PURE__*/ (function() {
        "use strict";
        function _class() {
            (0, $9f55f36f17d2ee36$export$2e2bcd8739ae039)(this, _class);
        }
        (0, $d13d1273b66fbb0e$export$2e2bcd8739ae039)(_class, [
            {
                key: "list",
                value: function list(e120) {
                    return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                        var t90;
                        return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                            while(1)switch(_ctx.prev = _ctx.next){
                                case 0:
                                    _ctx.next = 2;
                                    return window.fetch("".concat(undefined, "/template").concat((0, o15.queryString)((0, $6d84196d07227dd4$export$2e2bcd8739ae039)({}, e120))), (0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                        method: "GET"
                                    }, n35["default"].headers));
                                case 2:
                                    t90 = _ctx.sent;
                                    if (t90.ok) {
                                        _ctx.next = 5;
                                        break;
                                    }
                                    throw t90;
                                case 5:
                                    _ctx.next = 7;
                                    return t90.json();
                                case 7:
                                    return _ctx.abrupt("return", _ctx.sent);
                                case 8:
                                case "end":
                                    return _ctx.stop();
                            }
                        }, _callee);
                    }))();
                }
            },
            {
                key: "get",
                value: function get(e121, t91) {
                    return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                        var r10;
                        return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                            while(1)switch(_ctx.prev = _ctx.next){
                                case 0:
                                    _ctx.next = 2;
                                    return window.fetch("".concat(undefined, "/template/").concat(e121).concat((0, o15.queryString)((0, $6d84196d07227dd4$export$2e2bcd8739ae039)({}, t91))), (0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                        method: "GET"
                                    }, n35["default"].headers));
                                case 2:
                                    r10 = _ctx.sent;
                                    if (r10.ok) {
                                        _ctx.next = 5;
                                        break;
                                    }
                                    throw r10;
                                case 5:
                                    _ctx.next = 7;
                                    return r10.json();
                                case 7:
                                    return _ctx.abrupt("return", _ctx.sent);
                                case 8:
                                case "end":
                                    return _ctx.stop();
                            }
                        }, _callee);
                    }))();
                }
            },
            {
                key: "create",
                value: function create(e122) {
                    return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                        var t92;
                        return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                            while(1)switch(_ctx.prev = _ctx.next){
                                case 0:
                                    _ctx.next = 2;
                                    return window.fetch("".concat(undefined, "/template"), (0, $f53a7de5348002ff$export$2e2bcd8739ae039)((0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                        method: "POST"
                                    }, n35["default"].headers), {
                                        body: JSON.stringify(e122)
                                    }));
                                case 2:
                                    t92 = _ctx.sent;
                                    if (t92.ok) {
                                        _ctx.next = 5;
                                        break;
                                    }
                                    throw t92;
                                case 5:
                                    if (!(!t92.headers || !t92.headers.get("X-Resource-Id"))) {
                                        _ctx.next = 7;
                                        break;
                                    }
                                    throw new Error("Missing X-Resource-Id header");
                                case 7:
                                    return _ctx.abrupt("return", t92.headers.get("X-Resource-Id"));
                                case 8:
                                case "end":
                                    return _ctx.stop();
                            }
                        }, _callee);
                    }))();
                }
            },
            {
                key: "update",
                value: function update(e123, t93) {
                    return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                        var o16;
                        return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                            while(1)switch(_ctx.prev = _ctx.next){
                                case 0:
                                    _ctx.next = 2;
                                    return window.fetch("".concat(undefined, "/template/").concat(e123), (0, $f53a7de5348002ff$export$2e2bcd8739ae039)((0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                        method: "PUT"
                                    }, n35["default"].headers), {
                                        body: JSON.stringify(t93)
                                    }));
                                case 2:
                                    o16 = _ctx.sent;
                                    if (o16.ok) {
                                        _ctx.next = 5;
                                        break;
                                    }
                                    throw o16;
                                case 5:
                                    if (!(!o16.headers || !o16.headers.get("X-Resource-Id"))) {
                                        _ctx.next = 7;
                                        break;
                                    }
                                    throw new Error("Missing X-Resource-Id header");
                                case 7:
                                    return _ctx.abrupt("return", o16.headers.get("X-Resource-Id"));
                                case 8:
                                case "end":
                                    return _ctx.stop();
                            }
                        }, _callee);
                    }))();
                }
            },
            {
                key: "clone",
                value: function clone(e124) {
                    return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                        var t94;
                        return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                            while(1)switch(_ctx.prev = _ctx.next){
                                case 0:
                                    _ctx.next = 2;
                                    return window.fetch("".concat(undefined, "/template/").concat(e124), (0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                        method: "POST"
                                    }, n35["default"].headers));
                                case 2:
                                    t94 = _ctx.sent;
                                    if (t94.ok) {
                                        _ctx.next = 5;
                                        break;
                                    }
                                    throw t94;
                                case 5:
                                    if (!(!t94.headers || !t94.headers.get("X-Resource-Id"))) {
                                        _ctx.next = 7;
                                        break;
                                    }
                                    throw new Error("Missing X-Resource-Id header");
                                case 7:
                                    return _ctx.abrupt("return", t94.headers.get("X-Resource-Id"));
                                case 8:
                                case "end":
                                    return _ctx.stop();
                            }
                        }, _callee);
                    }))();
                }
            },
            {
                key: "zip",
                value: function zip(e125, t95) {
                    return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                        var o17;
                        return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                            while(1)switch(_ctx.prev = _ctx.next){
                                case 0:
                                    _ctx.next = 2;
                                    return window.fetch("".concat(undefined, "/template/").concat(e125, "?zip"), (0, $f53a7de5348002ff$export$2e2bcd8739ae039)((0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                        method: "POST"
                                    }, n35["default"].headers), {
                                        body: JSON.stringify(t95)
                                    }));
                                case 2:
                                    o17 = _ctx.sent;
                                    if (o17.ok) {
                                        _ctx.next = 5;
                                        break;
                                    }
                                    throw o17;
                                case 5:
                                    if (!(!o17.headers || !o17.headers.get("X-Resource-Id"))) {
                                        _ctx.next = 7;
                                        break;
                                    }
                                    throw new Error("Missing X-Resource-Id header");
                                case 7:
                                    return _ctx.abrupt("return", o17.headers.get("X-Resource-Id"));
                                case 8:
                                case "end":
                                    return _ctx.stop();
                            }
                        }, _callee);
                    }))();
                }
            },
            {
                key: "delete",
                value: function _delete(e126) {
                    return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                        var t96;
                        return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                            while(1)switch(_ctx.prev = _ctx.next){
                                case 0:
                                    _ctx.next = 2;
                                    return window.fetch("".concat(undefined, "/template/").concat(e126), (0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                        method: "DELETE"
                                    }, n35["default"].headers));
                                case 2:
                                    t96 = _ctx.sent;
                                    if (t96.ok) {
                                        _ctx.next = 5;
                                        break;
                                    }
                                    throw t96;
                                case 5:
                                case "end":
                                    return _ctx.stop();
                            }
                        }, _callee);
                    }))();
                }
            }
        ]);
        return _class;
    }());
}($35968c1d1652764a$var$ce);
var $35968c1d1652764a$var$de = {};
!function(e127) {
    var t97 = $35968c1d1652764a$var$s1 && $35968c1d1652764a$var$s1.__importDefault || function(e128) {
        return e128 && e128.__esModule ? e128 : {
            "default": e128
        };
    };
    Object.defineProperty(e127, "__esModule", {
        value: !0
    }), e127.UserStatus = void 0;
    var n36 = t97($35968c1d1652764a$var$m), o18 = $35968c1d1652764a$var$l;
    var r11;
    (r11 = e127.UserStatus || (e127.UserStatus = {})).ACTIVE = "active", r11.INACTIVE = "inactive";
    e127["default"] = new /*#__PURE__*/ (function() {
        "use strict";
        function _class() {
            (0, $9f55f36f17d2ee36$export$2e2bcd8739ae039)(this, _class);
        }
        (0, $d13d1273b66fbb0e$export$2e2bcd8739ae039)(_class, [
            {
                key: "get",
                value: function get(e129) {
                    return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                        var t98;
                        return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                            while(1)switch(_ctx.prev = _ctx.next){
                                case 0:
                                    _ctx.next = 2;
                                    return window.fetch("".concat(undefined, "/users/").concat(e129), (0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                        method: "GET"
                                    }, n36["default"].headers));
                                case 2:
                                    t98 = _ctx.sent;
                                    if (t98.ok) {
                                        _ctx.next = 5;
                                        break;
                                    }
                                    throw t98;
                                case 5:
                                    _ctx.next = 7;
                                    return t98.json();
                                case 7:
                                    return _ctx.abrupt("return", _ctx.sent);
                                case 8:
                                case "end":
                                    return _ctx.stop();
                            }
                        }, _callee);
                    }))();
                }
            },
            {
                key: "list",
                value: function list(e130) {
                    return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                        var t99;
                        return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                            while(1)switch(_ctx.prev = _ctx.next){
                                case 0:
                                    _ctx.next = 2;
                                    return window.fetch("".concat(undefined, "/users").concat((0, o18.queryString)((0, $6d84196d07227dd4$export$2e2bcd8739ae039)({}, e130))), (0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                        method: "GET"
                                    }, n36["default"].headers));
                                case 2:
                                    t99 = _ctx.sent;
                                    if (t99.ok) {
                                        _ctx.next = 5;
                                        break;
                                    }
                                    throw t99;
                                case 5:
                                    _ctx.next = 7;
                                    return t99.json();
                                case 7:
                                    return _ctx.abrupt("return", _ctx.sent);
                                case 8:
                                case "end":
                                    return _ctx.stop();
                            }
                        }, _callee);
                    }))();
                }
            },
            {
                key: "create",
                value: function create(e131) {
                    return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                        var t100;
                        return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                            while(1)switch(_ctx.prev = _ctx.next){
                                case 0:
                                    _ctx.next = 2;
                                    return window.fetch("".concat(undefined, "/users"), (0, $f53a7de5348002ff$export$2e2bcd8739ae039)((0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                        method: "POST"
                                    }, n36["default"].headers), {
                                        body: JSON.stringify(e131)
                                    }));
                                case 2:
                                    t100 = _ctx.sent;
                                    if (t100.ok) {
                                        _ctx.next = 5;
                                        break;
                                    }
                                    throw t100;
                                case 5:
                                    if (!(!t100.headers || !t100.headers.get("X-Resource-Id"))) {
                                        _ctx.next = 7;
                                        break;
                                    }
                                    throw new Error("Missing X-Resource-Id header");
                                case 7:
                                    return _ctx.abrupt("return", t100.headers.get("X-Resource-Id"));
                                case 8:
                                case "end":
                                    return _ctx.stop();
                            }
                        }, _callee);
                    }))();
                }
            },
            {
                key: "update",
                value: function update(e132, t101) {
                    return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                        var o19;
                        return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                            while(1)switch(_ctx.prev = _ctx.next){
                                case 0:
                                    _ctx.next = 2;
                                    return window.fetch("".concat(undefined, "/users/").concat(e132, "?status=").concat(t101.status), (0, $f53a7de5348002ff$export$2e2bcd8739ae039)((0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                        method: "PUT"
                                    }, n36["default"].headers), {
                                        body: JSON.stringify(t101)
                                    }));
                                case 2:
                                    o19 = _ctx.sent;
                                    if (o19.ok) {
                                        _ctx.next = 5;
                                        break;
                                    }
                                    throw o19;
                                case 5:
                                case "end":
                                    return _ctx.stop();
                            }
                        }, _callee);
                    }))();
                }
            },
            {
                key: "delete",
                value: function _delete(e133) {
                    return (0, $e08887ad8866e63a$export$2e2bcd8739ae039)((0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).mark(function _callee() {
                        var t102;
                        return (0, (/*@__PURE__*/$parcel$interopDefault($79ae1ae4a16b6dd8$exports))).wrap(function _callee$(_ctx) {
                            while(1)switch(_ctx.prev = _ctx.next){
                                case 0:
                                    _ctx.next = 2;
                                    return window.fetch("".concat(undefined, "/users/").concat(e133), (0, $6d84196d07227dd4$export$2e2bcd8739ae039)({
                                        method: "DELETE"
                                    }, n36["default"].headers));
                                case 2:
                                    t102 = _ctx.sent;
                                    if (t102.ok) {
                                        _ctx.next = 5;
                                        break;
                                    }
                                    throw t102;
                                case 5:
                                case "end":
                                    return _ctx.stop();
                            }
                        }, _callee);
                    }))();
                }
            }
        ]);
        return _class;
    }());
}($35968c1d1652764a$var$de), function(e134) {
    var t103 = $35968c1d1652764a$var$s1 && $35968c1d1652764a$var$s1.__importDefault || function(e135) {
        return e135 && e135.__esModule ? e135 : {
            "default": e135
        };
    };
    Object.defineProperty(e134, "__esModule", {
        value: !0
    }), e134.Users = e134.Token = e134.Templates = e134.Roles = e134.Playlist = e134.PlayerVariables = e134.Players = e134.Notifications = e134.MediaVariation = e134.MediaGroups = e134.Media = e134.Interactive = e134.Integrations = e134.Devices = e134.ClientsSettings = e134.Clients = e134.Auth = e134.Account = void 0;
    var n37 = $35968c1d1652764a$var$P;
    Object.defineProperty(e134, "Account", {
        enumerable: !0,
        get: function get() {
            return t103(n37)["default"];
        }
    });
    var o20 = $35968c1d1652764a$var$O;
    Object.defineProperty(e134, "Auth", {
        enumerable: !0,
        get: function get() {
            return t103(o20)["default"];
        }
    });
    var r12 = $35968c1d1652764a$var$S;
    Object.defineProperty(e134, "Clients", {
        enumerable: !0,
        get: function get() {
            return t103(r12)["default"];
        }
    });
    var i9 = $35968c1d1652764a$var$$;
    Object.defineProperty(e134, "ClientsSettings", {
        enumerable: !0,
        get: function get() {
            return t103(i9)["default"];
        }
    });
    var a = $35968c1d1652764a$var$N;
    Object.defineProperty(e134, "Devices", {
        enumerable: !0,
        get: function get() {
            return t103(a)["default"];
        }
    });
    var c2 = $35968c1d1652764a$var$M;
    Object.defineProperty(e134, "Integrations", {
        enumerable: !0,
        get: function get() {
            return t103(c2)["default"];
        }
    });
    var d1 = $35968c1d1652764a$var$G;
    Object.defineProperty(e134, "Interactive", {
        enumerable: !0,
        get: function get() {
            return t103(d1)["default"];
        }
    });
    var u1 = $35968c1d1652764a$var$J;
    Object.defineProperty(e134, "Media", {
        enumerable: !0,
        get: function get() {
            return t103(u1)["default"];
        }
    });
    var f1 = $35968c1d1652764a$var$X;
    Object.defineProperty(e134, "MediaGroups", {
        enumerable: !0,
        get: function get() {
            return t103(f1)["default"];
        }
    });
    var h1 = $35968c1d1652764a$var$q;
    Object.defineProperty(e134, "MediaVariation", {
        enumerable: !0,
        get: function get() {
            return t103(h1)["default"];
        }
    });
    var l1 = $35968c1d1652764a$var$F;
    Object.defineProperty(e134, "Notifications", {
        enumerable: !0,
        get: function get() {
            return t103(l1)["default"];
        }
    });
    var w = $35968c1d1652764a$var$Y;
    Object.defineProperty(e134, "Players", {
        enumerable: !0,
        get: function get() {
            return t103(w)["default"];
        }
    });
    var p = $35968c1d1652764a$var$Z;
    Object.defineProperty(e134, "PlayerVariables", {
        enumerable: !0,
        get: function get() {
            return t103(p)["default"];
        }
    });
    var v1 = $35968c1d1652764a$var$te;
    Object.defineProperty(e134, "Playlist", {
        enumerable: !0,
        get: function get() {
            return t103(v1)["default"];
        }
    });
    var y1 = $35968c1d1652764a$var$ie;
    Object.defineProperty(e134, "Roles", {
        enumerable: !0,
        get: function get() {
            return t103(y1)["default"];
        }
    });
    var _1 = $35968c1d1652764a$var$ce;
    Object.defineProperty(e134, "Templates", {
        enumerable: !0,
        get: function get() {
            return t103(_1)["default"];
        }
    });
    var g1 = $35968c1d1652764a$var$m;
    Object.defineProperty(e134, "Token", {
        enumerable: !0,
        get: function get() {
            return t103(g1)["default"];
        }
    });
    var T1 = $35968c1d1652764a$var$de;
    Object.defineProperty(e134, "Users", {
        enumerable: !0,
        get: function get() {
            return t103(T1)["default"];
        }
    });
}($35968c1d1652764a$var$T);
var $35968c1d1652764a$var$ue = {}, $35968c1d1652764a$var$fe = {};
!function(e136) {
    var t104, n38;
    Object.defineProperty(e136, "__esModule", {
        value: !0
    }), e136.TransitionOUT = e136.TransitionIn = void 0, (t104 = e136.TransitionIn || (e136.TransitionIn = {})).SLIDE_LEFT = "slide-in-from-left", t104.SLIDE_TOP = "slide-in-from-top", t104.SLIDE_BOTTOM = "slide-in-from-bottom", t104.SLIDE_RIGHT = "slide-in-from-right", t104.FADE = "fade-in", t104.ZOOM = "zoom-in", (n38 = e136.TransitionOUT || (e136.TransitionOUT = {})).SLIDE_LEFT = "slide-out-to-left", n38.SLIDE_TOP = "slide-out-to-top", n38.SLIDE_BOTTOM = "slide-out-to-bottom", n38.SLIDE_RIGHT = "slide-out-to-right", n38.FADE = "fade-out", n38.ZOOM = "zoom-out";
}($35968c1d1652764a$var$fe);
var $35968c1d1652764a$var$he = {};
Object.defineProperty($35968c1d1652764a$var$he, "__esModule", {
    value: !0
});
var $35968c1d1652764a$var$le = {};
!function(e137) {
    var t105;
    Object.defineProperty(e137, "__esModule", {
        value: !0
    }), e137.InteractiveEvent = void 0, (t105 = e137.InteractiveEvent || (e137.InteractiveEvent = {})).MESSAGE = "message", t105.CONNECT = "connect", t105.DISCONNECT = "disconnect", t105.KICK = "kick";
}($35968c1d1652764a$var$le);
var $35968c1d1652764a$var$we = {};
!function(e138) {
    Object.defineProperty(e138, "__esModule", {
        value: !0
    }), e138.EnvironmentType = void 0, function(e139) {
        e139.SSSP2 = "SSSP2", e139.HTML = "HTML", e139.TIZEN = "TIZEN", e139.KIOSK = "KIOSK";
    }(e138.EnvironmentType || (e138.EnvironmentType = {}));
}($35968c1d1652764a$var$we), function(e140) {
    var t106, n39 = $35968c1d1652764a$var$s1 && $35968c1d1652764a$var$s1.__createBinding || (Object.create ? function(e141, t107, n40, o22) {
        o22 === undefined && (o22 = n40);
        var r14 = Object.getOwnPropertyDescriptor(t107, n40);
        r14 && !("get" in r14 ? !t107.__esModule : r14.writable || r14.configurable) || (r14 = {
            enumerable: !0,
            get: function get() {
                return t107[n40];
            }
        }), Object.defineProperty(e141, o22, r14);
    } : function(e142, t108, n41, o23) {
        o23 === undefined && (o23 = n41), e142[o23] = t108[n41];
    }), o21 = $35968c1d1652764a$var$s1 && $35968c1d1652764a$var$s1.__setModuleDefault || (Object.create ? function(e143, t109) {
        Object.defineProperty(e143, "default", {
            enumerable: !0,
            value: t109
        });
    } : function(e144, t110) {
        e144["default"] = t110;
    }), r13 = $35968c1d1652764a$var$s1 && $35968c1d1652764a$var$s1.__importStar || function(e145) {
        if (e145 && e145.__esModule) return e145;
        var t111 = {};
        if (null != e145) for(var r15 in e145)"default" !== r15 && Object.prototype.hasOwnProperty.call(e145, r15) && n39(t111, e145, r15);
        return o21(t111, e145), t111;
    };
    Object.defineProperty(e140, "__esModule", {
        value: !0
    }), e140.WebsocketAction = e140.HealthCheck = e140.Interact = e140.Settings = e140.Sp = void 0, e140.Sp = r13($35968c1d1652764a$var$fe), e140.Settings = r13($35968c1d1652764a$var$he), e140.Interact = r13($35968c1d1652764a$var$le), e140.HealthCheck = r13($35968c1d1652764a$var$we), (t106 = e140.WebsocketAction || (e140.WebsocketAction = {})).SP = "sp", t106.SETTINGS = "settings", t106.CLEAR_AND_RESTART = "clearrestart", t106.REBOOT = "reboot", t106.LOGS = "logs", t106.PING = "ping", t106.INTERACT = "interact", t106.INTERACT_START = "interact:start", t106.TRANSITION = "transition", t106.HC_HEALTH = "health", t106.HC_SETTINGS = "info:settings", t106.HC_INFO = "info", t106.HC_STORAGE = "info:storage";
}($35968c1d1652764a$var$ue);
var $35968c1d1652764a$var$pe = $35968c1d1652764a$var$s1 && $35968c1d1652764a$var$s1.__createBinding || (Object.create ? function(e146, t112, n42, o24) {
    o24 === undefined && (o24 = n42);
    var r16 = Object.getOwnPropertyDescriptor(t112, n42);
    r16 && !("get" in r16 ? !t112.__esModule : r16.writable || r16.configurable) || (r16 = {
        enumerable: !0,
        get: function get() {
            return t112[n42];
        }
    }), Object.defineProperty(e146, o24, r16);
} : function(e147, t113, n43, o25) {
    o25 === undefined && (o25 = n43), e147[o25] = t113[n43];
}), $35968c1d1652764a$var$ve = $35968c1d1652764a$var$s1 && $35968c1d1652764a$var$s1.__setModuleDefault || (Object.create ? function(e148, t114) {
    Object.defineProperty(e148, "default", {
        enumerable: !0,
        value: t114
    });
} : function(e149, t115) {
    e149["default"] = t115;
}), $35968c1d1652764a$var$ye = $35968c1d1652764a$var$s1 && $35968c1d1652764a$var$s1.__importStar || function(e150) {
    if (e150 && e150.__esModule) return e150;
    var t116 = {};
    if (null != e150) for(var n44 in e150)"default" !== n44 && Object.prototype.hasOwnProperty.call(e150, n44) && $35968c1d1652764a$var$pe(t116, e150, n44);
    return $35968c1d1652764a$var$ve(t116, e150), t116;
};
Object.defineProperty($35968c1d1652764a$var$g, "__esModule", {
    value: !0
});
var $35968c1d1652764a$var$_e = $35968c1d1652764a$var$g.Websocket = $35968c1d1652764a$var$g.Player = $35968c1d1652764a$var$g.Helpers = $35968c1d1652764a$var$g.Endpoints = void 0;
$35968c1d1652764a$var$g.Endpoints = $35968c1d1652764a$var$ye($35968c1d1652764a$var$T), $35968c1d1652764a$var$g.Helpers = $35968c1d1652764a$var$ye($35968c1d1652764a$var$l), $35968c1d1652764a$var$g.Player = $35968c1d1652764a$var$ye($35968c1d1652764a$var$c), $35968c1d1652764a$var$_e = $35968c1d1652764a$var$g.Websocket = $35968c1d1652764a$var$ye($35968c1d1652764a$var$ue);
var $35968c1d1652764a$var$ge, $35968c1d1652764a$var$Te, $35968c1d1652764a$var$Pe = new function() {
    var e151 = this;
    this.all = {
        create: function create(e152, t117, n45, o26) {
            return $35968c1d1652764a$var$y($35968c1d1652764a$var$u($35968c1d1652764a$var$u($35968c1d1652764a$var$u({
                action: $35968c1d1652764a$var$c.Actions.INTERACT_CREATE,
                maxRuntime: e152
            }, t117 && {
                clientUrl: t117
            }), n45 && {
                maxClients: n45
            }), o26 && {
                noCommunicationTimeout: o26
            }));
        },
        start: function start() {
            return $35968c1d1652764a$var$v({
                action: $35968c1d1652764a$var$c.Actions.INTERACT_START
            });
        },
        destroy: function destroy() {
            e151.events = {}, $35968c1d1652764a$var$v({
                action: $35968c1d1652764a$var$c.Actions.INTERACT_DESTROY
            });
        },
        message: function message(e153, t118) {
            return $35968c1d1652764a$var$v($35968c1d1652764a$var$u({
                action: $35968c1d1652764a$var$c.Actions.INTERACT_MESSAGE,
                data: e153
            }, t118 && {
                client: t118
            }));
        },
        kick: function kick(e154) {
            return $35968c1d1652764a$var$v({
                action: $35968c1d1652764a$var$c.Actions.INTERACT_KICK,
                client: e154
            });
        },
        onMessage: function onMessage(t119) {
            e151.events.onMessage = t119;
        },
        onConnect: function onConnect(t120) {
            e151.events.onConnect = t120;
        },
        onDisconnect: function onDisconnect(t121) {
            e151.events.onDisconnect = t121;
        },
        onKick: function onKick(t122) {
            e151.events.onKick = t122;
        }
    }, this.events = {}, window.addEventListener("message", function(t123) {
        var n46 = JSON.parse(t123.data);
        n46.action === $35968c1d1652764a$var$c.Actions.INTERACT_MESSAGE && (n46.event === $35968c1d1652764a$var$_e.Interact.InteractiveEvent.MESSAGE && e151.events.onMessage && n46.data && e151.events.onMessage(n46.data, n46.client), n46.event === $35968c1d1652764a$var$_e.Interact.InteractiveEvent.CONNECT && e151.events.onConnect && e151.events.onConnect(n46.client), n46.event === $35968c1d1652764a$var$_e.Interact.InteractiveEvent.DISCONNECT && e151.events.onDisconnect && e151.events.onDisconnect(n46.client), n46.event === $35968c1d1652764a$var$_e.Interact.InteractiveEvent.KICK && e151.events.onKick && e151.events.onKick(n46.client));
    });
}, $35968c1d1652764a$var$me = new function() {
    this.all = {
        barcode: function barcode() {
            return $35968c1d1652764a$var$y({
                action: $35968c1d1652764a$var$c.Actions.KIOSK_BARCODE
            }, undefined, 3e4);
        },
        printer: function printer(e155, t124) {
            return $35968c1d1652764a$var$y({
                action: $35968c1d1652764a$var$c.Actions.KIOSK_PRINTER,
                data: e155,
                printerSettings: t124
            });
        }
    };
}, $35968c1d1652764a$var$Ee = new function() {
    this.all = {
        request: function request(e156, t125) {
            return $35968c1d1652764a$var$y({
                action: $35968c1d1652764a$var$c.Actions.PROXY,
                proxy: {
                    url: e156,
                    request: t125
                }
            }, {
                name: e156
            });
        }
    };
}, $35968c1d1652764a$var$Ie = new function() {
    this.all = {
        env: function env(e157) {
            return $35968c1d1652764a$var$y({
                action: $35968c1d1652764a$var$c.Actions.ENV_VAR,
                name: e157
            }, {
                name: e157
            });
        }
    };
}, $35968c1d1652764a$var$Oe = function Oe() {
    this.fs = $35968c1d1652764a$var$_.all, this.interactive = $35968c1d1652764a$var$Pe.all, this.tizen = $35968c1d1652764a$var$me.all, this.proxy = $35968c1d1652764a$var$Ee.all.request, this.env = $35968c1d1652764a$var$Ie.all.env, this.log = function(e158) {
        return $35968c1d1652764a$var$v({
            action: $35968c1d1652764a$var$c.Actions.LOG,
            data: e158
        });
    }, this.info = function() {
        return $35968c1d1652764a$var$y({
            action: $35968c1d1652764a$var$c.Actions.INFO
        });
    };
}, $35968c1d1652764a$var$Re = {
    receiptGenerator: function() {
        var e159 = function e() {
            this.characters = 42, this.data = "";
        };
        return e159.prototype.blank = function(e) {
            return void 0 === e && (e = 1), this.data += "".concat(" ".repeat(this.characters), "\n").repeat(e), this;
        }, e159.prototype.left = function(e) {
            var t126 = this.characters - e.length;
            return this.data += "".concat(e).concat(" ".repeat(t126), "\n"), this;
        }, e159.prototype.right = function(e) {
            var t127 = this.characters - e.length;
            return this.data += "".concat(" ".repeat(t127)).concat(e, "\n"), this;
        }, e159.prototype.stretch = function(e, t128, n47) {
            void 0 === n47 && (n47 = " ");
            var o27 = this.characters - (e.length + t128.length);
            return this.data += "".concat(e).concat(n47.repeat(o27)).concat(t128, "\n"), this;
        }, e159.prototype.centre = function(e) {
            var t129 = this.characters - e.length;
            return this.data += "".concat(" ".repeat(Math.floor(t129 / 2))).concat(e).concat(" ".repeat(Math.floor(t129 / 2)), "\n"), this;
        }, e159.prototype.fill = function(e) {
            return this.data += "".concat(e.repeat(this.characters), "\n"), this;
        }, e159.prototype.inject = function(e) {
            return this.data += e, this;
        }, e159.prototype.generate = function(e) {
            return void 0 === e && (e = !0), e && (this.data += "".concat(" ".repeat(this.characters), "\n").repeat(6)), this.data;
        }, e159;
    }()
};
!function(e) {
    e.Prod = "wss://mrx.cx/interactive/socket", e.Dev = "wss://dev.mrx.cx/interactive/socket", e.Edge = "wss://edge.mrx.cx/interactive/socket", e.Local = "ws://localhost:1337";
}($35968c1d1652764a$var$ge || ($35968c1d1652764a$var$ge = {})), function(e) {
    e.InitializationError = "Initialization Failed";
}($35968c1d1652764a$var$Te || ($35968c1d1652764a$var$Te = {}));
var $35968c1d1652764a$var$Ae = function(e160) {
    var t130 = function t130(t131) {
        var n48 = e160.call(this, t131) || this;
        return n48.name = $35968c1d1652764a$var$Te.InitializationError, n48;
    };
    return function(e, t132) {
        var n = function n() {
            this.constructor = e;
        };
        if ("function" != typeof t132 && null !== t132) throw new TypeError("Class extends value " + String(t132) + " is not a constructor or null");
        $35968c1d1652764a$var$d(e, t132), e.prototype = null === t132 ? Object.create(t132) : (n.prototype = t132.prototype, new n);
    }(t130, e160), t130;
}(Error), $35968c1d1652764a$var$Se = function() {
    var e161 = function e161(e162, t133) {
        var n, o28 = this;
        if (this.sessionId = e162, this.environmentKey = t133, this.socket = null, this.pingInterval = null, this.events = {
            onMessage: null,
            onOpen: null,
            onClose: null
        }, !e162) throw new $35968c1d1652764a$var$Ae("sessionId not provided");
        this.socket = new WebSocket("".concat((n = t133, $35968c1d1652764a$var$ge[n || "Prod"]), "/").concat(e162)), this.socket.onmessage = function(e) {
            if (o28.events.onMessage) {
                var _$t = JSON.parse(e.data);
                "ping" !== _$t.action && "pong" !== _$t.action && o28.events.onMessage(_$t.data);
            }
        }, this.socket.onopen = function() {
            o28.events.onOpen && o28.events.onOpen();
        }, this.socket.onclose = function(e) {
            o28.events.onClose && o28.events.onClose(e.code), o28.destroy();
        }, this.pingInterval = window.setInterval(function() {
            return o28.send("ping", "ping");
        }, 5e3);
    };
    return e161.prototype.send = function(e, t134) {
        void 0 === t134 && (t134 = "message"), this.socket && this.socket.readyState === WebSocket.OPEN && this.socket.send(JSON.stringify({
            action: t134,
            data: e
        }));
    }, e161.prototype.onOpen = function(e) {
        return this.events.onOpen = e.bind(this), this;
    }, e161.prototype.onClose = function(e) {
        return this.events.onClose = e.bind(this), this;
    }, e161.prototype.onMessage = function(e) {
        return this.events.onMessage = e.bind(this), this;
    }, e161.prototype.destroy = function() {
        this.socket && this.socket.close(1e3), this.events.onMessage = null, this.events.onOpen = null, this.events.onClose = null, this.socket = null, this.pingInterval && window.clearInterval(this.pingInterval);
    }, e161.urlParam = function(e) {
        return void 0 === e && (e = "session"), new URLSearchParams(window.location.search).get(e);
    }, e161;
}(), $35968c1d1652764a$export$3245ed38508723bb = function() {
    var e163 = function e163(e) {
        this.Evexi = e, this.fs().interactive().proxy("/").env({}).tizen({
            barcodeReturn: ""
        }).log().info();
    };
    return e163.prototype.fs = function() {
        var e = this;
        return this.Evexi.fs = {
            get: function get(t135) {
                return $35968c1d1652764a$var$f(e, void 0, void 0, function() {
                    return $35968c1d1652764a$var$h(this, function(e) {
                        return [
                            2,
                            {
                                name: t135,
                                error: null,
                                type: "text",
                                data: "text"
                            }
                        ];
                    });
                });
            },
            put: function put(t, n) {
                return $35968c1d1652764a$var$f(e, void 0, void 0, function() {
                    return $35968c1d1652764a$var$h(this, function(e) {
                        return [
                            2,
                            !0
                        ];
                    });
                });
            },
            del: function del(t) {
                return $35968c1d1652764a$var$f(e, void 0, void 0, function() {
                    return $35968c1d1652764a$var$h(this, function(e) {
                        return [
                            2,
                            !0
                        ];
                    });
                });
            },
            list: function list() {
                return $35968c1d1652764a$var$f(e, void 0, void 0, function() {
                    return $35968c1d1652764a$var$h(this, function(e) {
                        return [
                            2,
                            []
                        ];
                    });
                });
            },
            clear: function clear() {
                return $35968c1d1652764a$var$f(e, void 0, void 0, function() {
                    return $35968c1d1652764a$var$h(this, function(e) {
                        return [
                            2,
                            !0
                        ];
                    });
                });
            },
            download: function download(t136, n) {
                return $35968c1d1652764a$var$f(e, void 0, void 0, function() {
                    return $35968c1d1652764a$var$h(this, function(e) {
                        return [
                            2,
                            {
                                url: t136,
                                data: "",
                                error: null
                            }
                        ];
                    });
                });
            },
            exists: function exists(t) {
                return $35968c1d1652764a$var$f(e, void 0, void 0, function() {
                    return $35968c1d1652764a$var$h(this, function(e) {
                        return [
                            2,
                            !0
                        ];
                    });
                });
            }
        }, this;
    }, e163.prototype.interactive = function() {
        var e = this;
        return this.Evexi.interactive = {
            create: function create(t, n, o, r) {
                return $35968c1d1652764a$var$f(e, void 0, void 0, function() {
                    return $35968c1d1652764a$var$h(this, function(e) {
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
            message: function message(e, t) {},
            kick: function kick(e) {},
            onMessage: function onMessage(e) {},
            onConnect: function onConnect(e) {},
            onDisconnect: function onDisconnect(e) {},
            onKick: function onKick(e) {}
        }, this;
    }, e163.prototype.proxy = function(e164) {
        var t137 = this, n50 = function n50(n, o30) {
            return $35968c1d1652764a$var$f(t137, void 0, void 0, function() {
                var t138, r17, i10;
                return $35968c1d1652764a$var$h(this, function(a) {
                    switch(a.label){
                        case 0:
                            return o30 || (o30 = {}), o30.headers || (o30.headers = {
                                "Content-Type": "application/json"
                            }), o30 ? [
                                4,
                                window.fetch("".concat(e164).concat(n), o30)
                            ] : [
                                3,
                                2
                            ];
                        case 1:
                            return r17 = a.sent(), [
                                3,
                                4
                            ];
                        case 2:
                            return [
                                4,
                                window.fetch("".concat(e164).concat(n))
                            ];
                        case 3:
                            r17 = a.sent(), a.label = 4;
                        case 4:
                            t138 = r17, a.label = 5;
                        case 5:
                            return a.trys.push([
                                5,
                                7,
                                ,
                                8
                            ]), [
                                4,
                                t138.json()
                            ];
                        case 6:
                            return i10 = a.sent(), [
                                3,
                                8
                            ];
                        case 7:
                            return a.sent(), [
                                2,
                                !1
                            ];
                        case 8:
                            return [
                                2,
                                {
                                    status: t138.status,
                                    statusText: t138.statusText,
                                    url: t138.url,
                                    ok: t138.ok,
                                    json: i10
                                }
                            ];
                    }
                });
            });
        }, o29 = function o29(n, o) {
            return $35968c1d1652764a$var$f(t137, void 0, void 0, function() {
                var t139;
                return $35968c1d1652764a$var$h(this, function(o) {
                    return (t139 = e164.find(function(e) {
                        return -1 !== n.indexOf(e.endpoint);
                    })) ? [
                        2,
                        {
                            status: 200,
                            statusText: "",
                            url: n,
                            ok: !0,
                            json: t139.response
                        }
                    ] : [
                        2,
                        {
                            status: 404,
                            statusText: "Endpoint not stubbed",
                            url: n,
                            ok: !1,
                            json: undefined
                        }
                    ];
                });
            });
        };
        return this.Evexi.proxy = function(t140, r18) {
            return $35968c1d1652764a$var$f(this, void 0, void 0, function() {
                return $35968c1d1652764a$var$h(this, function(i) {
                    return "object" == typeof e164 ? [
                        2,
                        o29(t140)
                    ] : [
                        2,
                        n50(t140, r18)
                    ];
                });
            });
        }, this;
    }, e163.prototype.env = function(e) {
        return this.Evexi.env = function(t141) {
            return $35968c1d1652764a$var$f(this, void 0, void 0, function() {
                return $35968c1d1652764a$var$h(this, function(n) {
                    return [
                        2,
                        e[t141]
                    ];
                });
            });
        }, this;
    }, e163.prototype.tizen = function(e165) {
        return this.Evexi.tizen = {
            printer: function printer(e, t142) {
                return $35968c1d1652764a$var$f(this, void 0, void 0, function() {
                    return $35968c1d1652764a$var$h(this, function(n) {
                        return console.log(e, t142), [
                            2,
                            Promise.resolve(!0)
                        ];
                    });
                });
            },
            barcode: function barcode() {
                var t143;
                return $35968c1d1652764a$var$f(this, void 0, void 0, function() {
                    return $35968c1d1652764a$var$h(this, function(n) {
                        return [
                            2,
                            null !== (t143 = e165.barcodeReturn) && void 0 !== t143 ? t143 : ""
                        ];
                    });
                });
            }
        }, this;
    }, e163.prototype.log = function() {
        return this.Evexi.log = function(e) {
            console.log(e);
        }, this;
    }, e163.prototype.info = function() {
        return this.Evexi.info = function() {
            return $35968c1d1652764a$var$f(this, void 0, void 0, function() {
                return $35968c1d1652764a$var$h(this, function(e) {
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
    }, e163;
}(), $35968c1d1652764a$export$429f1c4820dd15e8 = function ke() {
    this.api = new $35968c1d1652764a$var$Oe, this.helper = $35968c1d1652764a$var$Re, this.Scan = $35968c1d1652764a$var$Se, this.env = this.api.env, this.fs = this.api.fs, this.info = this.api.info, this.interactive = this.api.interactive, this.log = this.api.log, this.proxy = this.api.proxy, this.tizen = this.api.tizen;
}, $35968c1d1652764a$export$a228efff746656cd = new $35968c1d1652764a$export$429f1c4820dd15e8;
console.log("Running Evexi API");


// get the session id from the url param
var $6bdc933c470eb2c0$var$sessionId = (0, $35968c1d1652764a$export$a228efff746656cd).Scan.urlParam();
// listen and send messages to the WS API (the second optional argument is the environment Prod, Dev or Edge. DEFAULT: Prod)
var $6bdc933c470eb2c0$var$scan = new (0, $35968c1d1652764a$export$a228efff746656cd).Scan($6bdc933c470eb2c0$var$sessionId, "Edge").onMessage(function(message) {
    console.log("Message: ", message);
}).onOpen(function() {
    console.log("Opened");
    $6bdc933c470eb2c0$var$scan.send("message from scanURL to content");
}).onClose(function(code) {
    console.log("Closed: ", code);
});
// send message type into the input box on the page
// @ts-ignore
window.send = function() {
    var msg = document.getElementById("message").value;
    $6bdc933c470eb2c0$var$scan.send(msg);
};

})();
