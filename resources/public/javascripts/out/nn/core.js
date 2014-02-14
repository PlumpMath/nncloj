// Compiled by ClojureScript 0.0-2138
goog.provide('nn.core');
goog.require('cljs.core');
goog.require('cljs_webgl.typed_arrays');
goog.require('cljs_webgl.constants');
goog.require('goog.events');
goog.require('cljs_webgl.constants');
goog.require('cljs.reader');
goog.require('goog.dom');
goog.require('cljs_webgl.shaders');
goog.require('om.dom');
goog.require('cljs_webgl.context');
goog.require('om.core');
goog.require('goog.net.XhrIo');
goog.require('goog.dom');
goog.require('om.core');
goog.require('cljs_webgl.shaders');
goog.require('cljs_webgl.context');
goog.require('cljs_webgl.buffers');
goog.require('cljs_webgl.buffers');
goog.require('om.dom');
goog.require('cljs.reader');
goog.require('goog.ui.IdGenerator');
goog.require('cljs_webgl.typed_arrays');
goog.require('goog.events.EventType');
goog.require('goog.events');
cljs.core.enable_console_print_BANG_.call(null);
nn.core.vertex_shader_source = "attribute vec3 vertex_position;\n  uniform int thing;\n   void main() {\n     gl_Position = vec4(vertex_position, thing);\n   }";
nn.core.fragment_shader_source = "uniform int frame;\n   void main() {\n     gl_FragColor.r = sin(float(frame) * 0.05) / 2.0 + 0.6;\n     gl_FragColor.g = sin(float(frame) * 0.1) / 2.0 + 0.5;\n     gl_FragColor.b = sin(float(frame) * 0.02) / 2.0 + 0.5;\n     gl_FragColor.a = 1.0;\n   }";
var gl_7057 = cljs_webgl.context.get_context.call(null,goog.dom.getElement("grid"));var shader_7058 = cljs_webgl.shaders.create_program.call(null,gl_7057,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_webgl.shaders.create_shader.call(null,gl_7057,cljs_webgl.constants.vertex_shader,nn.core.vertex_shader_source),cljs_webgl.shaders.create_shader.call(null,gl_7057,cljs_webgl.constants.fragment_shader,nn.core.fragment_shader_source)], null));var vertex_buffer_7059 = cljs_webgl.buffers.create_buffer.call(null,gl_7057,cljs_webgl.typed_arrays.float32.call(null,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.0,-1.0,0.0,-1.0,1.0,0.0,-1.0,-1.0,-1.0,1.0,-1.0,1.0], null)),cljs_webgl.constants.array_buffer,cljs_webgl.constants.static_draw);var element_buffer_7060 = cljs_webgl.buffers.create_buffer.call(null,gl_7057,cljs_webgl.typed_arrays.unsigned_int16.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,1,2,3], null)),cljs_webgl.constants.element_array_buffer,cljs_webgl.constants.static_draw);var draw_7061 = ((function (gl_7057,shader_7058,vertex_buffer_7059,element_buffer_7060){
return (function (frame,thing,continue$){cljs_webgl.buffers.clear_color_buffer.call(null,gl_7057,0,0,0,1);
cljs_webgl.buffers.draw_BANG_.call(null,gl_7057,shader_7058,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"attrib-array","attrib-array",2213865736),new cljs.core.Keyword(null,"buffer","buffer",3930752946),new cljs.core.Keyword(null,"normalized?","normalized?",762171290),new cljs.core.Keyword(null,"offset","offset",4289091589),new cljs.core.Keyword(null,"count","count",1108755585),new cljs.core.Keyword(null,"first","first",1111344674),new cljs.core.Keyword(null,"stride","stride",4416885323),new cljs.core.Keyword(null,"components-per-vertex","components-per-vertex",4105343709),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"mode","mode",1017261333)],[cljs_webgl.shaders.get_attrib_location.call(null,gl_7057,shader_7058,"vertex_position"),vertex_buffer_7059,false,0,4,1,0,3,cljs_webgl.constants.float$,cljs_webgl.constants.triangle_fan]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),"frame",new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"int","int",1014008673),new cljs.core.Keyword(null,"values","values",4485058708),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frame], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),"thing",new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"int","int",1014008673),new cljs.core.Keyword(null,"values","values",4485058708),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [thing], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"buffer","buffer",3930752946),element_buffer_7060,new cljs.core.Keyword(null,"count","count",1108755585),4,new cljs.core.Keyword(null,"type","type",1017479852),cljs_webgl.constants.unsigned_short,new cljs.core.Keyword(null,"offset","offset",4289091589),0], null));
return window.requestAnimationFrame(((function (gl_7057,shader_7058,vertex_buffer_7059,element_buffer_7060){
return (function (time_elapsed){return continue$.call(null,(frame + 1),cljs.core.mod.call(null,(frame + 1),50),continue$);
});})(gl_7057,shader_7058,vertex_buffer_7059,element_buffer_7060))
);
});})(gl_7057,shader_7058,vertex_buffer_7059,element_buffer_7060))
;window.requestAnimationFrame((function (time_elapsed){return draw_7061.call(null,0,0,draw_7061);
}));

//# sourceMappingURL=core.js.map