// Compiled by ClojureScript 0.0-2173
goog.provide('cljs_webgl.buffers');
goog.require('cljs.core');
goog.require('cljs_webgl.shaders');
goog.require('cljs_webgl.shaders');
goog.require('cljs_webgl.constants');
goog.require('cljs_webgl.constants');
goog.require('cljs_webgl.typed_arrays');
goog.require('cljs_webgl.typed_arrays');
goog.require('cljs.core.match');
/**
* Creates a new buffer with initialized `data`.
* 
* `data` must be a typed-array
* 
* `target` may be `array-buffer` or `element-array-buffer`
* 
* `usage` may be `static-draw` or `dynamic-draw`
*/
cljs_webgl.buffers.create_buffer = (function create_buffer(gl_context,data,target,usage){var buffer = gl_context.createBuffer();gl_context.bindBuffer(target,buffer);
gl_context.bufferData(target,data,usage);
return buffer;
});
cljs_webgl.buffers.clear_color_buffer = (function clear_color_buffer(gl_context,red,green,blue,alpha){gl_context.clearColor(red,green,blue,alpha);
return gl_context.clear(cljs_webgl.constants.color_buffer_bit);
});
cljs_webgl.buffers.draw_BANG_ = (function draw_BANG_(gl_context,shader,vertex_array,uniforms,element_array){var bool__GT_float = (function (val){if(cljs.core.truth_(val))
{return 1.0;
} else
{return 0.0;
}
});var set_uniform = ((function (bool__GT_float){
return (function (p__15062){var map__15063 = p__15062;var map__15063__$1 = ((cljs.core.seq_QMARK_.call(null,map__15063))?cljs.core.apply.call(null,cljs.core.hash_map,map__15063):map__15063);var name = cljs.core.get.call(null,map__15063__$1,new cljs.core.Keyword(null,"name","name",1017277949));var type = cljs.core.get.call(null,map__15063__$1,new cljs.core.Keyword(null,"type","type",1017479852));var values = cljs.core.get.call(null,map__15063__$1,new cljs.core.Keyword(null,"values","values",4485058708));var transpose = cljs.core.get.call(null,map__15063__$1,new cljs.core.Keyword(null,"transpose","transpose",2066868907));var uniform_location = cljs_webgl.shaders.get_uniform_location.call(null,gl_context,shader,name);try{if(cljs.core.keyword_identical_QMARK_.call(null,type,new cljs.core.Keyword(null,"bool","bool",1016933980)))
{return gl_context.uniform1fv(uniform_location,cljs_webgl.typed_arrays.float32.call(null,cljs.core.map.call(null,bool__GT_float,values)));
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,type,new cljs.core.Keyword(null,"bvec2","bvec2",1108024818)))
{return gl_context.uniform2fv(uniform_location,cljs_webgl.typed_arrays.float32.call(null,cljs.core.map.call(null,bool__GT_float,values)));
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,type,new cljs.core.Keyword(null,"bvec3","bvec3",1108024819)))
{return gl_context.uniform3fv(uniform_location,cljs_webgl.typed_arrays.float32.call(null,cljs.core.map.call(null,bool__GT_float,values)));
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,type,new cljs.core.Keyword(null,"bvec4","bvec4",1108024820)))
{return gl_context.uniform4fv(uniform_location,cljs_webgl.typed_arrays.float$.call(null,cljs.core.map.call(null,bool__GT_float,values)));
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,type,new cljs.core.Keyword(null,"float","float",1111430606)))
{return gl_context.uniform1fv(uniform_location,cljs_webgl.typed_arrays.float32.call(null,values));
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,type,new cljs.core.Keyword(null,"vec2","vec2",1017519760)))
{return gl_context.uniform2fv(uniform_location,cljs_webgl.typed_arrays.float32.call(null,values));
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,type,new cljs.core.Keyword(null,"vec3","vec3",1017519761)))
{return gl_context.uniform3fv(uniform_location,cljs_webgl.typed_arrays.float32.call(null,values));
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,type,new cljs.core.Keyword(null,"vec4","vec4",1017519762)))
{return gl_context.uniform4fv(uniform_location,cljs_webgl.typed_arrays.float32.call(null,values));
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,type,new cljs.core.Keyword(null,"int","int",1014008673)))
{return gl_context.uniform1iv(uniform_location,cljs_webgl.typed_arrays.int32.call(null,values));
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,type,new cljs.core.Keyword(null,"ivec2","ivec2",1114489465)))
{return gl_context.uniform2iv(uniform_location,cljs_webgl.typed_arrays.int32.call(null,values));
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,type,new cljs.core.Keyword(null,"ivec3","ivec3",1114489466)))
{return gl_context.uniform3iv(uniform_location,cljs_webgl.typed_arrays.int32.call(null,values));
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,type,new cljs.core.Keyword(null,"ivec4","ivec4",1114489467)))
{return gl_context.uniform4iv(uniform_location,cljs_webgl.typed_arrays.int32.call(null,values));
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,type,new cljs.core.Keyword(null,"mat2","mat2",1017248324)))
{return gl_context.uniformMatrix2fv(uniform_location,transpose,cljs_webgl.typed_arrays.float32.call(null,values));
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,type,new cljs.core.Keyword(null,"mat3","mat3",1017248325)))
{return gl_context.uniformMatrix3fv(uniform_location,transpose,cljs_webgl.typed_arrays.float32.call(null,values));
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,type,new cljs.core.Keyword(null,"mat4","mat4",1017248326)))
{return gl_context.uniformMatrix4fv(uniform_location,transpose,cljs_webgl.typed_arrays.float32.call(null,values));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}catch (e15065){if((e15065 instanceof Error))
{var e__9913__auto__ = e15065;if((e__9913__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__9913__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15065;
} else
{return null;
}
}
}});})(bool__GT_float))
;gl_context.useProgram(shader);
cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__15057_SHARP_){return set_uniform.call(null,p1__15057_SHARP_);
}),uniforms));
gl_context.bindBuffer(cljs_webgl.constants.array_buffer,new cljs.core.Keyword(null,"buffer","buffer",3930752946).cljs$core$IFn$_invoke$arity$1(vertex_array));
gl_context.enableVertexAttribArray(new cljs.core.Keyword(null,"attrib-array","attrib-array",2213865736).cljs$core$IFn$_invoke$arity$1(vertex_array));
gl_context.vertexAttribPointer(new cljs.core.Keyword(null,"attrib-array","attrib-array",2213865736).cljs$core$IFn$_invoke$arity$1(vertex_array),new cljs.core.Keyword(null,"components-per-vertex","components-per-vertex",4105343709).cljs$core$IFn$_invoke$arity$1(vertex_array),new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(vertex_array),new cljs.core.Keyword(null,"normalized?","normalized?",762171290).cljs$core$IFn$_invoke$arity$1(vertex_array),new cljs.core.Keyword(null,"stride","stride",4416885323).cljs$core$IFn$_invoke$arity$1(vertex_array),new cljs.core.Keyword(null,"offset","offset",4289091589).cljs$core$IFn$_invoke$arity$1(vertex_array));
if((element_array == null))
{return gl_context.drawArrays(new cljs.core.Keyword(null,"mode","mode",1017261333).cljs$core$IFn$_invoke$arity$1(vertex_array),new cljs.core.Keyword(null,"first","first",1111344674).cljs$core$IFn$_invoke$arity$1(vertex_array),new cljs.core.Keyword(null,"count","count",1108755585).cljs$core$IFn$_invoke$arity$1(vertex_array));
} else
{return (function (){gl_context.bindBuffer(cljs_webgl.constants.element_array_buffer,new cljs.core.Keyword(null,"buffer","buffer",3930752946).cljs$core$IFn$_invoke$arity$1(element_array));
return gl_context.drawElements(new cljs.core.Keyword(null,"mode","mode",1017261333).cljs$core$IFn$_invoke$arity$1(vertex_array),new cljs.core.Keyword(null,"count","count",1108755585).cljs$core$IFn$_invoke$arity$1(element_array),new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(element_array),new cljs.core.Keyword(null,"offset","offset",4289091589).cljs$core$IFn$_invoke$arity$1(element_array));
}).call(null);
}
});

//# sourceMappingURL=buffers.js.map