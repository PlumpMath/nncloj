// Compiled by ClojureScript 0.0-2138
goog.provide('cljs_webgl.shaders');
goog.require('cljs.core');
cljs_webgl.shaders.create_shader = (function create_shader(gl_context,type,source){var shader = gl_context.createShader(type);gl_context.shaderSource(shader,source);
gl_context.compileShader(shader);
return shader;
});
cljs_webgl.shaders.create_program = (function create_program(gl_context,shaders){var program = gl_context.createProgram();cljs.core.dorun.call(null,cljs.core.map.call(null,(function (shader){return gl_context.attachShader(program,shader);
}),shaders));
gl_context.linkProgram(program);
return program;
});
cljs_webgl.shaders.get_attached_shaders = (function get_attached_shaders(gl_context,program){return (new cljs.core.LazySeq(null,(function (){return gl_context.getAttachedShaders(program);
}),null,null));
});
cljs_webgl.shaders.get_shader_source = (function get_shader_source(gl_context,shader){return gl_context.getShaderSource(shader);
});
cljs_webgl.shaders.get_shader_info_log = (function get_shader_info_log(gl_context,shader){return gl_context.getShaderInfoLog(shader);
});
/**
* Parameter may be the constants shader-type, compile-status and delete-status
*/
cljs_webgl.shaders.get_shader_parameter = (function get_shader_parameter(gl_context,shader,parameter){return gl_context.getShaderParameter(shader,parameter);
});
/**
* shader-type may be fragment-shader or vertex-shader. precision type may be low-float, medium-float, high-float, low-int, medium-int or high-int
*/
cljs_webgl.shaders.get_shader_precision_format = (function get_shader_precision_format(gl_context,shader_type,precision_type){var js_obj = gl_context.getShaderPrecisionFormat(shader_type,precision_type);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"range-min","range-min",4556087604),js_obj.rangeMin,new cljs.core.Keyword(null,"range-max","range-max",4556087366),js_obj.rangeMax,new cljs.core.Keyword(null,"precision","precision",3932694512),js_obj.precision], null);
});
cljs_webgl.shaders.get_attrib_location = (function get_attrib_location(gl_context,shader_program,attrib_name){return gl_context.getAttribLocation(shader_program,attrib_name);
});
cljs_webgl.shaders.get_uniform_location = (function get_uniform_location(gl_context,shader_program,uniform_name){return gl_context.getUniformLocation(shader_program,uniform_name);
});
cljs_webgl.shaders.is_shader_QMARK_ = (function is_shader_QMARK_(gl_context,shader){return gl_context.isShader(shader);
});

//# sourceMappingURL=shaders.js.map