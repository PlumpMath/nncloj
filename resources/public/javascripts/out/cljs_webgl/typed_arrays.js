// Compiled by ClojureScript 0.0-2173
goog.provide('cljs_webgl.typed_arrays');
goog.require('cljs.core');
/**
* Creates a native Int8Array for a given `collection`.
*/
cljs_webgl.typed_arrays.int8 = (function int8(collection){return (new Int8Array(cljs.core.clj__GT_js.call(null,collection)));
});
/**
* Creates a native Uint8Array for a given `collection`.
*/
cljs_webgl.typed_arrays.unsigned_int8 = (function unsigned_int8(collection){return (new Uint8Array(cljs.core.clj__GT_js.call(null,collection)));
});
/**
* Creates a native Uint8ClampedArray for a given `collection`.
*/
cljs_webgl.typed_arrays.unsigned_int8_clamped = (function unsigned_int8_clamped(collection){return (new Uint8ClampedArray(cljs.core.clj__GT_js.call(null,collection)));
});
/**
* Creates a native Int16Array for a given `collection`.
*/
cljs_webgl.typed_arrays.int16 = (function int16(collection){return (new Int16Array(cljs.core.clj__GT_js.call(null,collection)));
});
/**
* Creates a native Uint16Array for a given `collection`.
*/
cljs_webgl.typed_arrays.unsigned_int16 = (function unsigned_int16(collection){return (new Uint16Array(cljs.core.clj__GT_js.call(null,collection)));
});
/**
* Creates a native Int32Array for a given `collection`.
*/
cljs_webgl.typed_arrays.int32 = (function int32(collection){return (new Int32Array(cljs.core.clj__GT_js.call(null,collection)));
});
/**
* Creates a native Uint32Array for a given `collection`.
*/
cljs_webgl.typed_arrays.unsigned_int32 = (function unsigned_int32(collection){return (new Uint32Array(cljs.core.clj__GT_js.call(null,collection)));
});
/**
* Creates a native Float32Array for a given `collection`.
*/
cljs_webgl.typed_arrays.float32 = (function float32(collection){return (new Float32Array(cljs.core.clj__GT_js.call(null,collection)));
});
/**
* Creates a native Float64Array for a given `collection`.
*/
cljs_webgl.typed_arrays.float64 = (function float64(collection){return (new Float64Array(cljs.core.clj__GT_js.call(null,collection)));
});
/**
* Tests whether a given `value` is a typed array.
*/
cljs_webgl.typed_arrays.typed_array_QMARK_ = (function typed_array_QMARK_(value){var value_type = cljs.core.type.call(null,value);return (cljs.core._EQ_.call(null,value_type,Int8Array)) || (cljs.core._EQ_.call(null,value_type,Uint8Array)) || (cljs.core._EQ_.call(null,value_type,Uint8ClampedArray)) || (cljs.core._EQ_.call(null,value_type,Int16Array)) || (cljs.core._EQ_.call(null,value_type,Uint16Array)) || (cljs.core._EQ_.call(null,value_type,Int32Array)) || (cljs.core._EQ_.call(null,value_type,Uint32Array)) || (cljs.core._EQ_.call(null,value_type,Float32Array)) || (cljs.core._EQ_.call(null,value_type,Float64Array));
});

//# sourceMappingURL=typed_arrays.js.map