// Compiled by ClojureScript 0.0-2173
goog.provide('cljs_webgl.context');
goog.require('cljs.core');
/**
* Gets a WebGL context from a canvas element.
* `context-attributes` may be a map in the following form:
* 
* {:alpha
* :depth
* :stencil
* :antialias
* :premultiplied-apha
* :preserve-drawing-buffer}
* If you don't specify any key, the default value is assumed.
* 
* For further information on context creation parameters see [WebGLContextAttributes](https://www.khronos.org/registry/webgl/specs/1.0.2/#WEBGLCONTEXTATTRIBUTES);
*/
cljs_webgl.context.get_context = (function() {
var get_context = null;
var get_context__1 = (function (canvas_element){return canvas_element.getContext("experimental-webgl");
});
var get_context__2 = (function (canvas_element,context_attributes){var default_attributes = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"alpha","alpha",1106814160),true,new cljs.core.Keyword(null,"depth","depth",1109376565),true,new cljs.core.Keyword(null,"stencil","stencil",3415245102),false,new cljs.core.Keyword(null,"antialias","antialias",3190264736),true,new cljs.core.Keyword(null,"premultiplied-alpha","premultiplied-alpha",794423513),true,new cljs.core.Keyword(null,"preserve-drawing-buffer","preserve-drawing-buffer",2221120994),false], null);var attributes__GT_js = ((function (default_attributes){
return (function (p__15055){var map__15056 = p__15055;var map__15056__$1 = ((cljs.core.seq_QMARK_.call(null,map__15056))?cljs.core.apply.call(null,cljs.core.hash_map,map__15056):map__15056);var alpha = cljs.core.get.call(null,map__15056__$1,new cljs.core.Keyword(null,"alpha","alpha",1106814160));var depth = cljs.core.get.call(null,map__15056__$1,new cljs.core.Keyword(null,"depth","depth",1109376565));var stencil = cljs.core.get.call(null,map__15056__$1,new cljs.core.Keyword(null,"stencil","stencil",3415245102));var antialias = cljs.core.get.call(null,map__15056__$1,new cljs.core.Keyword(null,"antialias","antialias",3190264736));var premultiplied_alpha = cljs.core.get.call(null,map__15056__$1,new cljs.core.Keyword(null,"premultiplied-alpha","premultiplied-alpha",794423513));var preserve_drawing_buffer = cljs.core.get.call(null,map__15056__$1,new cljs.core.Keyword(null,"preserve-drawing-buffer","preserve-drawing-buffer",2221120994));return cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"alpha","alpha",1106814160),alpha,new cljs.core.Keyword(null,"depth","depth",1109376565),depth,new cljs.core.Keyword(null,"stencil","stencil",3415245102),stencil,new cljs.core.Keyword(null,"antialias","antialias",3190264736),antialias,new cljs.core.Keyword(null,"premultipliedAplha","premultipliedAplha",1718477906),premultiplied_alpha,new cljs.core.Keyword(null,"preserveDrawingBuffer","preserveDrawingBuffer",4701009540),preserve_drawing_buffer], null));
});})(default_attributes))
;return canvas_element.getContext("experimental-webgl",attributes__GT_js.call(null,cljs.core.merge.call(null,default_attributes,context_attributes)));
});
get_context = function(canvas_element,context_attributes){
switch(arguments.length){
case 1:
return get_context__1.call(this,canvas_element);
case 2:
return get_context__2.call(this,canvas_element,context_attributes);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_context.cljs$core$IFn$_invoke$arity$1 = get_context__1;
get_context.cljs$core$IFn$_invoke$arity$2 = get_context__2;
return get_context;
})()
;
/**
* Returns the actual context parameters for a created context. The returned map has the following form:
* 
* {:alpha
* :depth
* :stencil
* :antialias
* :premultiplied-apha
* :preserve-drawing-buffer}
* 
* This function is helpful for testing if the requested parameters were satisfied.
*/
cljs_webgl.context.get_context_attributes = (function get_context_attributes(gl_context){var js_obj = gl_context.getContextAttributes();return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"alpha","alpha",1106814160),js_obj.alpha,new cljs.core.Keyword(null,"depth","depth",1109376565),js_obj.depth,new cljs.core.Keyword(null,"stencil","stencil",3415245102),js_obj.stencil,new cljs.core.Keyword(null,"antialias","antialias",3190264736),js_obj.antialias,new cljs.core.Keyword(null,"premultiplied-alpha","premultiplied-alpha",794423513),js_obj.premultipliedAlpha,new cljs.core.Keyword(null,"preserve-drawing-buffer","preserve-drawing-buffer",2221120994),js_obj.preserveDrawingBuffer], null);
});
/**
* Returns the canvas element from the given WebGL context.
*/
cljs_webgl.context.get_canvas = (function get_canvas(gl_context){return gl_context.canvas;
});
/**
* Returns the buffer current width.
*/
cljs_webgl.context.get_drawing_buffer_width = (function get_drawing_buffer_width(gl_context){return gl_context.drawingBufferWidth;
});
/**
* Returns the buffer current height.
*/
cljs_webgl.context.get_drawing_buffer_height = (function get_drawing_buffer_height(gl_context){return gl_context.drawingBufferHeight;
});
/**
* Returns whether the context was lost.
* 
* See [The Context Lost Event](http://www.khronos.org/registry/webgl/specs/1.0/#CONTEXT_LOST)
*/
cljs_webgl.context.is_context_lost_QMARK_ = (function is_context_lost_QMARK_(gl_context){return gl_context.isContextLost();
});
/**
* Returns a string sequence containing the name for each supported extension
*/
cljs_webgl.context.get_supported_extensions = (function get_supported_extensions(gl_context){return (new cljs.core.LazySeq(null,(function (){return gl_context.getSupportedExtensions();
}),null,null));
});
/**
* Returns the object for the requested extension. The returned value is not wrapped in any ClojureScript construct.
*/
cljs_webgl.context.get_extension = (function get_extension(gl_context,extension_name){return gl_context.getExtension(extension_name);
});

//# sourceMappingURL=context.js.map