(self.webpackChunktelegram_t=self.webpackChunktelegram_t||[]).push([[9536],{59536:(n,e,r)=>{"use strict";r(8311),Module.onRuntimeInitialized=async()=>{self.postMessage({type:"initialized"})},self.onmessage=n=>{const{id:e,blob:r}=n.data,t=new FileReader;t.addEventListener("loadend",(()=>{const n=t.result,r=n.byteLength,a=Module._malloc(r);Module.HEAPU8.set(new Uint8Array(n),a);const i=Module.cwrap("getInfo","number",["number","number"])(a,r);if(!Module.getValue(i,"i32"))return Module._free(i),Module._free(a),void self.postMessage({type:"result",id:e,width:0,height:0,result:null});const u=Module.getValue(i+4,"i32"),o=Module.getValue(i+8,"i32");Module._free(i);const s=Module.cwrap("decode","number",["number","number"])(a,r),l=new Uint8Array(Module.HEAPU8.buffer,s,u*o*4),d=new Uint8ClampedArray(l);Module._free(s),Module._free(a),self.postMessage({type:"result",id:e,width:u,height:o,result:d})})),t.readAsArrayBuffer(r)}},72269:n=>{n.exports='var Module = typeof Module !== "undefined" ? Module : {};\nvar moduleOverrides = {};\nvar key;\nfor (key in Module) {\n  if (Module.hasOwnProperty(key)) {\n    moduleOverrides[key] = Module[key];\n  }\n}\nvar arguments_ = [];\nvar thisProgram = "./this.program";\nvar quit_ = function (status, toThrow) {\n  throw toThrow;\n};\nvar ENVIRONMENT_IS_WEB = false;\nvar ENVIRONMENT_IS_WORKER = false;\nvar ENVIRONMENT_IS_NODE = false;\nvar ENVIRONMENT_IS_SHELL = false;\nENVIRONMENT_IS_WEB = typeof window === "object";\nENVIRONMENT_IS_WORKER = typeof importScripts === "function";\nENVIRONMENT_IS_NODE = typeof process === "object" && typeof process.versions === "object" && typeof process.versions.node === "string";\nENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;\nvar scriptDirectory = "";\nfunction locateFile(path) {\n  if (Module["locateFile"]) {\n    return Module["locateFile"](path, scriptDirectory);\n  }\n  return scriptDirectory + path;\n}\nvar read_, readAsync, readBinary, setWindowTitle;\nvar nodeFS;\nvar nodePath;\nif (ENVIRONMENT_IS_NODE) {\n  if (ENVIRONMENT_IS_WORKER) {\n    scriptDirectory = require("path").dirname(scriptDirectory) + "/";\n  } else {\n    scriptDirectory = __dirname + "/";\n  }\n  read_ = function shell_read(filename, binary) {\n    if (!nodeFS) nodeFS = require("fs");\n    if (!nodePath) nodePath = require("path");\n    filename = nodePath["normalize"](filename);\n    return nodeFS["readFileSync"](filename, binary ? null : "utf8");\n  };\n  readBinary = function readBinary(filename) {\n    var ret = read_(filename, true);\n    if (!ret.buffer) {\n      ret = new Uint8Array(ret);\n    }\n    assert(ret.buffer);\n    return ret;\n  };\n  if (process["argv"].length > 1) {\n    thisProgram = process["argv"][1].replace(/\\\\/g, "/");\n  }\n  arguments_ = process["argv"].slice(2);\n  if (typeof module !== "undefined") {\n    module["exports"] = Module;\n  }\n  process["on"]("uncaughtException", function (ex) {\n    if (!(ex instanceof ExitStatus)) {\n      throw ex;\n    }\n  });\n  process["on"]("unhandledRejection", abort);\n  quit_ = function (status) {\n    process["exit"](status);\n  };\n  Module["inspect"] = function () {\n    return "[Emscripten Module object]";\n  };\n} else if (ENVIRONMENT_IS_SHELL) {\n  if (typeof read != "undefined") {\n    read_ = function shell_read(f) {\n      return read(f);\n    };\n  }\n  readBinary = function readBinary(f) {\n    var data;\n    if (typeof readbuffer === "function") {\n      return new Uint8Array(readbuffer(f));\n    }\n    data = read(f, "binary");\n    assert(typeof data === "object");\n    return data;\n  };\n  if (typeof scriptArgs != "undefined") {\n    arguments_ = scriptArgs;\n  } else if (typeof arguments != "undefined") {\n    arguments_ = arguments;\n  }\n  if (typeof quit === "function") {\n    quit_ = function (status) {\n      quit(status);\n    };\n  }\n  if (typeof print !== "undefined") {\n    if (typeof console === "undefined") console = {};\n    console.log = print;\n    console.warn = console.error = typeof printErr !== "undefined" ? printErr : print;\n  }\n} else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {\n  if (ENVIRONMENT_IS_WORKER) {\n    scriptDirectory = self.location.href;\n  } else if (document.currentScript) {\n    scriptDirectory = document.currentScript.src;\n  }\n  if (scriptDirectory.indexOf("blob:") !== 0) {\n    scriptDirectory = scriptDirectory.substr(0, scriptDirectory.lastIndexOf("/") + 1);\n  } else {\n    scriptDirectory = "";\n  }\n  {\n    read_ = function shell_read(url) {\n      var xhr = new XMLHttpRequest();\n      xhr.open("GET", url, false);\n      xhr.send(null);\n      return xhr.responseText;\n    };\n    if (ENVIRONMENT_IS_WORKER) {\n      readBinary = function readBinary(url) {\n        var xhr = new XMLHttpRequest();\n        xhr.open("GET", url, false);\n        xhr.responseType = "arraybuffer";\n        xhr.send(null);\n        return new Uint8Array(xhr.response);\n      };\n    }\n    readAsync = function readAsync(url, onload, onerror) {\n      var xhr = new XMLHttpRequest();\n      xhr.open("GET", url, true);\n      xhr.responseType = "arraybuffer";\n      xhr.onload = function xhr_onload() {\n        if (xhr.status == 200 || xhr.status == 0 && xhr.response) {\n          onload(xhr.response);\n          return;\n        }\n        onerror();\n      };\n      xhr.onerror = onerror;\n      xhr.send(null);\n    };\n  }\n  setWindowTitle = function (title) {\n    document.title = title;\n  };\n} else {}\nvar out = Module["print"] || console.log.bind(console);\nvar err = Module["printErr"] || console.warn.bind(console);\nfor (key in moduleOverrides) {\n  if (moduleOverrides.hasOwnProperty(key)) {\n    Module[key] = moduleOverrides[key];\n  }\n}\nmoduleOverrides = null;\nif (Module["arguments"]) arguments_ = Module["arguments"];\nif (Module["thisProgram"]) thisProgram = Module["thisProgram"];\nif (Module["quit"]) quit_ = Module["quit"];\nvar wasmBinary;\nif (Module["wasmBinary"]) wasmBinary = Module["wasmBinary"];\nvar noExitRuntime;\nif (Module["noExitRuntime"]) noExitRuntime = Module["noExitRuntime"];\nif (typeof WebAssembly !== "object") {\n  abort("no native wasm support detected");\n}\nfunction getValue(ptr, type, noSafe) {\n  type = type || "i8";\n  if (type.charAt(type.length - 1) === "*") type = "i32";\n  switch (type) {\n    case "i1":\n      return HEAP8[ptr >> 0];\n    case "i8":\n      return HEAP8[ptr >> 0];\n    case "i16":\n      return HEAP16[ptr >> 1];\n    case "i32":\n      return HEAP32[ptr >> 2];\n    case "i64":\n      return HEAP32[ptr >> 2];\n    case "float":\n      return HEAPF32[ptr >> 2];\n    case "double":\n      return HEAPF64[ptr >> 3];\n    default:\n      abort("invalid type for getValue: " + type);\n  }\n  return null;\n}\nvar wasmMemory;\nvar wasmTable = new WebAssembly.Table({\n  "initial": 157,\n  "maximum": 157 + 0,\n  "element": "anyfunc"\n});\nvar ABORT = false;\nvar EXITSTATUS = 0;\nfunction assert(condition, text) {\n  if (!condition) {\n    abort("Assertion failed: " + text);\n  }\n}\nfunction getCFunc(ident) {\n  var func = Module["_" + ident];\n  assert(func, "Cannot call unknown function " + ident + ", make sure it is exported");\n  return func;\n}\nfunction ccall(ident, returnType, argTypes, args, opts) {\n  var toC = {\n    "string": function (str) {\n      var ret = 0;\n      if (str !== null && str !== undefined && str !== 0) {\n        var len = (str.length << 2) + 1;\n        ret = stackAlloc(len);\n        stringToUTF8(str, ret, len);\n      }\n      return ret;\n    },\n    "array": function (arr) {\n      var ret = stackAlloc(arr.length);\n      writeArrayToMemory(arr, ret);\n      return ret;\n    }\n  };\n  function convertReturnValue(ret) {\n    if (returnType === "string") return UTF8ToString(ret);\n    if (returnType === "boolean") return Boolean(ret);\n    return ret;\n  }\n  var func = getCFunc(ident);\n  var cArgs = [];\n  var stack = 0;\n  if (args) {\n    for (var i = 0; i < args.length; i++) {\n      var converter = toC[argTypes[i]];\n      if (converter) {\n        if (stack === 0) stack = stackSave();\n        cArgs[i] = converter(args[i]);\n      } else {\n        cArgs[i] = args[i];\n      }\n    }\n  }\n  var ret = func.apply(null, cArgs);\n  ret = convertReturnValue(ret);\n  if (stack !== 0) stackRestore(stack);\n  return ret;\n}\nfunction cwrap(ident, returnType, argTypes, opts) {\n  argTypes = argTypes || [];\n  var numericArgs = argTypes.every(function (type) {\n    return type === "number";\n  });\n  var numericRet = returnType !== "string";\n  if (numericRet && numericArgs && !opts) {\n    return getCFunc(ident);\n  }\n  return function () {\n    return ccall(ident, returnType, argTypes, arguments, opts);\n  };\n}\nvar UTF8Decoder = typeof TextDecoder !== "undefined" ? new TextDecoder("utf8") : undefined;\nfunction UTF8ArrayToString(heap, idx, maxBytesToRead) {\n  var endIdx = idx + maxBytesToRead;\n  var endPtr = idx;\n  while (heap[endPtr] && !(endPtr >= endIdx)) ++endPtr;\n  if (endPtr - idx > 16 && heap.subarray && UTF8Decoder) {\n    return UTF8Decoder.decode(heap.subarray(idx, endPtr));\n  } else {\n    var str = "";\n    while (idx < endPtr) {\n      var u0 = heap[idx++];\n      if (!(u0 & 128)) {\n        str += String.fromCharCode(u0);\n        continue;\n      }\n      var u1 = heap[idx++] & 63;\n      if ((u0 & 224) == 192) {\n        str += String.fromCharCode((u0 & 31) << 6 | u1);\n        continue;\n      }\n      var u2 = heap[idx++] & 63;\n      if ((u0 & 240) == 224) {\n        u0 = (u0 & 15) << 12 | u1 << 6 | u2;\n      } else {\n        u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | heap[idx++] & 63;\n      }\n      if (u0 < 65536) {\n        str += String.fromCharCode(u0);\n      } else {\n        var ch = u0 - 65536;\n        str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);\n      }\n    }\n  }\n  return str;\n}\nfunction UTF8ToString(ptr, maxBytesToRead) {\n  return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : "";\n}\nfunction stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {\n  if (!(maxBytesToWrite > 0)) return 0;\n  var startIdx = outIdx;\n  var endIdx = outIdx + maxBytesToWrite - 1;\n  for (var i = 0; i < str.length; ++i) {\n    var u = str.charCodeAt(i);\n    if (u >= 55296 && u <= 57343) {\n      var u1 = str.charCodeAt(++i);\n      u = 65536 + ((u & 1023) << 10) | u1 & 1023;\n    }\n    if (u <= 127) {\n      if (outIdx >= endIdx) break;\n      heap[outIdx++] = u;\n    } else if (u <= 2047) {\n      if (outIdx + 1 >= endIdx) break;\n      heap[outIdx++] = 192 | u >> 6;\n      heap[outIdx++] = 128 | u & 63;\n    } else if (u <= 65535) {\n      if (outIdx + 2 >= endIdx) break;\n      heap[outIdx++] = 224 | u >> 12;\n      heap[outIdx++] = 128 | u >> 6 & 63;\n      heap[outIdx++] = 128 | u & 63;\n    } else {\n      if (outIdx + 3 >= endIdx) break;\n      heap[outIdx++] = 240 | u >> 18;\n      heap[outIdx++] = 128 | u >> 12 & 63;\n      heap[outIdx++] = 128 | u >> 6 & 63;\n      heap[outIdx++] = 128 | u & 63;\n    }\n  }\n  heap[outIdx] = 0;\n  return outIdx - startIdx;\n}\nfunction stringToUTF8(str, outPtr, maxBytesToWrite) {\n  return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);\n}\nfunction writeArrayToMemory(array, buffer) {\n  HEAP8.set(array, buffer);\n}\nvar WASM_PAGE_SIZE = 65536;\nfunction alignUp(x, multiple) {\n  if (x % multiple > 0) {\n    x += multiple - x % multiple;\n  }\n  return x;\n}\nvar buffer, HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;\nfunction updateGlobalBufferAndViews(buf) {\n  buffer = buf;\n  Module["HEAP8"] = HEAP8 = new Int8Array(buf);\n  Module["HEAP16"] = HEAP16 = new Int16Array(buf);\n  Module["HEAP32"] = HEAP32 = new Int32Array(buf);\n  Module["HEAPU8"] = HEAPU8 = new Uint8Array(buf);\n  Module["HEAPU16"] = HEAPU16 = new Uint16Array(buf);\n  Module["HEAPU32"] = HEAPU32 = new Uint32Array(buf);\n  Module["HEAPF32"] = HEAPF32 = new Float32Array(buf);\n  Module["HEAPF64"] = HEAPF64 = new Float64Array(buf);\n}\nvar DYNAMIC_BASE = 5259680,\n  DYNAMICTOP_PTR = 16640;\nvar INITIAL_INITIAL_MEMORY = Module["INITIAL_MEMORY"] || 16777216;\nif (Module["wasmMemory"]) {\n  wasmMemory = Module["wasmMemory"];\n} else {\n  wasmMemory = new WebAssembly.Memory({\n    "initial": INITIAL_INITIAL_MEMORY / WASM_PAGE_SIZE,\n    "maximum": 2147483648 / WASM_PAGE_SIZE\n  });\n}\nif (wasmMemory) {\n  buffer = wasmMemory.buffer;\n}\nINITIAL_INITIAL_MEMORY = buffer.byteLength;\nupdateGlobalBufferAndViews(buffer);\nHEAP32[DYNAMICTOP_PTR >> 2] = DYNAMIC_BASE;\nfunction callRuntimeCallbacks(callbacks) {\n  while (callbacks.length > 0) {\n    var callback = callbacks.shift();\n    if (typeof callback == "function") {\n      callback(Module);\n      continue;\n    }\n    var func = callback.func;\n    if (typeof func === "number") {\n      if (callback.arg === undefined) {\n        Module["dynCall_v"](func);\n      } else {\n        Module["dynCall_vi"](func, callback.arg);\n      }\n    } else {\n      func(callback.arg === undefined ? null : callback.arg);\n    }\n  }\n}\nvar __ATPRERUN__ = [];\nvar __ATINIT__ = [];\nvar __ATMAIN__ = [];\nvar __ATPOSTRUN__ = [];\nvar runtimeInitialized = false;\nfunction preRun() {\n  if (Module["preRun"]) {\n    if (typeof Module["preRun"] == "function") Module["preRun"] = [Module["preRun"]];\n    while (Module["preRun"].length) {\n      addOnPreRun(Module["preRun"].shift());\n    }\n  }\n  callRuntimeCallbacks(__ATPRERUN__);\n}\nfunction initRuntime() {\n  runtimeInitialized = true;\n  callRuntimeCallbacks(__ATINIT__);\n}\nfunction preMain() {\n  callRuntimeCallbacks(__ATMAIN__);\n}\nfunction postRun() {\n  if (Module["postRun"]) {\n    if (typeof Module["postRun"] == "function") Module["postRun"] = [Module["postRun"]];\n    while (Module["postRun"].length) {\n      addOnPostRun(Module["postRun"].shift());\n    }\n  }\n  callRuntimeCallbacks(__ATPOSTRUN__);\n}\nfunction addOnPreRun(cb) {\n  __ATPRERUN__.unshift(cb);\n}\nfunction addOnPostRun(cb) {\n  __ATPOSTRUN__.unshift(cb);\n}\nvar runDependencies = 0;\nvar runDependencyWatcher = null;\nvar dependenciesFulfilled = null;\nfunction addRunDependency(id) {\n  runDependencies++;\n  if (Module["monitorRunDependencies"]) {\n    Module["monitorRunDependencies"](runDependencies);\n  }\n}\nfunction removeRunDependency(id) {\n  runDependencies--;\n  if (Module["monitorRunDependencies"]) {\n    Module["monitorRunDependencies"](runDependencies);\n  }\n  if (runDependencies == 0) {\n    if (runDependencyWatcher !== null) {\n      clearInterval(runDependencyWatcher);\n      runDependencyWatcher = null;\n    }\n    if (dependenciesFulfilled) {\n      var callback = dependenciesFulfilled;\n      dependenciesFulfilled = null;\n      callback();\n    }\n  }\n}\nModule["preloadedImages"] = {};\nModule["preloadedAudios"] = {};\nfunction abort(what) {\n  if (Module["onAbort"]) {\n    Module["onAbort"](what);\n  }\n  what += "";\n  err(what);\n  ABORT = true;\n  EXITSTATUS = 1;\n  what = "abort(" + what + "). Build with -s ASSERTIONS=1 for more info.";\n  var e = new WebAssembly.RuntimeError(what);\n  throw e;\n}\nfunction hasPrefix(str, prefix) {\n  return String.prototype.startsWith ? str.startsWith(prefix) : str.indexOf(prefix) === 0;\n}\nvar dataURIPrefix = "data:application/octet-stream;base64,";\nfunction isDataURI(filename) {\n  return hasPrefix(filename, dataURIPrefix);\n}\nvar fileURIPrefix = "file://";\nfunction isFileURI(filename) {\n  return hasPrefix(filename, fileURIPrefix);\n}\nvar wasmBinaryFile = "webp_wasm.wasm";\nif (!isDataURI(wasmBinaryFile)) {\n  wasmBinaryFile = locateFile(wasmBinaryFile);\n}\nfunction getBinary() {\n  try {\n    if (wasmBinary) {\n      return new Uint8Array(wasmBinary);\n    }\n    if (readBinary) {\n      return readBinary(wasmBinaryFile);\n    } else {\n      throw "both async and sync fetching of the wasm failed";\n    }\n  } catch (err) {\n    abort(err);\n  }\n}\nfunction getBinaryPromise() {\n  if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) && typeof fetch === "function" && !isFileURI(wasmBinaryFile)) {\n    return fetch(wasmBinaryFile, {\n      credentials: "same-origin"\n    }).then(function (response) {\n      if (!response["ok"]) {\n        throw "failed to load wasm binary file at \'" + wasmBinaryFile + "\'";\n      }\n      return response["arrayBuffer"]();\n    }).catch(function () {\n      return getBinary();\n    });\n  }\n  return new Promise(function (resolve, reject) {\n    resolve(getBinary());\n  });\n}\nfunction createWasm() {\n  var info = {\n    "a": asmLibraryArg\n  };\n  function receiveInstance(instance, module) {\n    var exports = instance.exports;\n    Module["asm"] = exports;\n    removeRunDependency("wasm-instantiate");\n  }\n  addRunDependency("wasm-instantiate");\n  function receiveInstantiatedSource(output) {\n    receiveInstance(output["instance"]);\n  }\n  function instantiateArrayBuffer(receiver) {\n    return getBinaryPromise().then(function (binary) {\n      return WebAssembly.instantiate(binary, info);\n    }).then(receiver, function (reason) {\n      err("failed to asynchronously prepare wasm: " + reason);\n      abort(reason);\n    });\n  }\n  function instantiateAsync() {\n    if (!wasmBinary && typeof WebAssembly.instantiateStreaming === "function" && !isDataURI(wasmBinaryFile) && !isFileURI(wasmBinaryFile) && typeof fetch === "function") {\n      fetch(wasmBinaryFile, {\n        credentials: "same-origin"\n      }).then(function (response) {\n        var result = WebAssembly.instantiateStreaming(response, info);\n        return result.then(receiveInstantiatedSource, function (reason) {\n          err("wasm streaming compile failed: " + reason);\n          err("falling back to ArrayBuffer instantiation");\n          return instantiateArrayBuffer(receiveInstantiatedSource);\n        });\n      });\n    } else {\n      return instantiateArrayBuffer(receiveInstantiatedSource);\n    }\n  }\n  if (Module["instantiateWasm"]) {\n    try {\n      var exports = Module["instantiateWasm"](info, receiveInstance);\n      return exports;\n    } catch (e) {\n      err("Module.instantiateWasm callback failed with error: " + e);\n      return false;\n    }\n  }\n  instantiateAsync();\n  return {};\n}\n__ATINIT__.push({\n  func: function () {\n    ___wasm_call_ctors();\n  }\n});\nfunction ___assert_fail(condition, filename, line, func) {\n  abort("Assertion failed: " + UTF8ToString(condition) + ", at: " + [filename ? UTF8ToString(filename) : "unknown filename", line, func ? UTF8ToString(func) : "unknown function"]);\n}\nfunction _emscripten_memcpy_big(dest, src, num) {\n  HEAPU8.copyWithin(dest, src, src + num);\n}\nfunction _emscripten_get_heap_size() {\n  return HEAPU8.length;\n}\nfunction emscripten_realloc_buffer(size) {\n  try {\n    wasmMemory.grow(size - buffer.byteLength + 65535 >>> 16);\n    updateGlobalBufferAndViews(wasmMemory.buffer);\n    return 1;\n  } catch (e) {}\n}\nfunction _emscripten_resize_heap(requestedSize) {\n  requestedSize = requestedSize >>> 0;\n  var oldSize = _emscripten_get_heap_size();\n  var PAGE_MULTIPLE = 65536;\n  var maxHeapSize = 2147483648;\n  if (requestedSize > maxHeapSize) {\n    return false;\n  }\n  var minHeapSize = 16777216;\n  for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {\n    var overGrownHeapSize = oldSize * (1 + .2 / cutDown);\n    overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);\n    var newSize = Math.min(maxHeapSize, alignUp(Math.max(minHeapSize, requestedSize, overGrownHeapSize), PAGE_MULTIPLE));\n    var replacement = emscripten_realloc_buffer(newSize);\n    if (replacement) {\n      return true;\n    }\n  }\n  return false;\n}\nvar asmLibraryArg = {\n  "a": ___assert_fail,\n  "b": _emscripten_memcpy_big,\n  "c": _emscripten_resize_heap,\n  "memory": wasmMemory,\n  "table": wasmTable\n};\nvar asm = createWasm();\nvar ___wasm_call_ctors = Module["___wasm_call_ctors"] = function () {\n  return (___wasm_call_ctors = Module["___wasm_call_ctors"] = Module["asm"]["d"]).apply(null, arguments);\n};\nvar _version = Module["_version"] = function () {\n  return (_version = Module["_version"] = Module["asm"]["e"]).apply(null, arguments);\n};\nvar _getInfo = Module["_getInfo"] = function () {\n  return (_getInfo = Module["_getInfo"] = Module["asm"]["f"]).apply(null, arguments);\n};\nvar _malloc = Module["_malloc"] = function () {\n  return (_malloc = Module["_malloc"] = Module["asm"]["g"]).apply(null, arguments);\n};\nvar _decode = Module["_decode"] = function () {\n  return (_decode = Module["_decode"] = Module["asm"]["h"]).apply(null, arguments);\n};\nvar _free = Module["_free"] = function () {\n  return (_free = Module["_free"] = Module["asm"]["i"]).apply(null, arguments);\n};\nvar stackSave = Module["stackSave"] = function () {\n  return (stackSave = Module["stackSave"] = Module["asm"]["j"]).apply(null, arguments);\n};\nvar stackRestore = Module["stackRestore"] = function () {\n  return (stackRestore = Module["stackRestore"] = Module["asm"]["k"]).apply(null, arguments);\n};\nvar stackAlloc = Module["stackAlloc"] = function () {\n  return (stackAlloc = Module["stackAlloc"] = Module["asm"]["l"]).apply(null, arguments);\n};\nvar dynCall_vi = Module["dynCall_vi"] = function () {\n  return (dynCall_vi = Module["dynCall_vi"] = Module["asm"]["m"]).apply(null, arguments);\n};\nModule["cwrap"] = cwrap;\nModule["getValue"] = getValue;\nvar calledRun;\nfunction ExitStatus(status) {\n  this.name = "ExitStatus";\n  this.message = "Program terminated with exit(" + status + ")";\n  this.status = status;\n}\ndependenciesFulfilled = function runCaller() {\n  if (!calledRun) run();\n  if (!calledRun) dependenciesFulfilled = runCaller;\n};\nfunction run(args) {\n  args = args || arguments_;\n  if (runDependencies > 0) {\n    return;\n  }\n  preRun();\n  if (runDependencies > 0) return;\n  function doRun() {\n    if (calledRun) return;\n    calledRun = true;\n    Module["calledRun"] = true;\n    if (ABORT) return;\n    initRuntime();\n    preMain();\n    if (Module["onRuntimeInitialized"]) Module["onRuntimeInitialized"]();\n    postRun();\n  }\n  if (Module["setStatus"]) {\n    Module["setStatus"]("Running...");\n    setTimeout(function () {\n      setTimeout(function () {\n        Module["setStatus"]("");\n      }, 1);\n      doRun();\n    }, 1);\n  } else {\n    doRun();\n  }\n}\nModule["run"] = run;\nif (Module["preInit"]) {\n  if (typeof Module["preInit"] == "function") Module["preInit"] = [Module["preInit"]];\n  while (Module["preInit"].length > 0) {\n    Module["preInit"].pop()();\n  }\n}\nnoExitRuntime = true;\nrun();'},8311:(n,e,r)=>{r(69685)(r(72269))}}]);
//# sourceMappingURL=9536.cb82e1a63eeb39aab33f.js.map