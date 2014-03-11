// Compiled by ClojureScript 0.0-2173
goog.provide('nn.render');
goog.require('cljs.core');
goog.require('cljs_webgl.typed_arrays');
goog.require('cljs_webgl.constants');
goog.require('goog.events');
goog.require('cljs_webgl.constants');
goog.require('nn.utils.matrix');
goog.require('cljs.reader');
goog.require('goog.dom');
goog.require('cljs_webgl.shaders');
goog.require('cljs_webgl.context');
goog.require('goog.net.XhrIo');
goog.require('goog.dom');
goog.require('cljs_webgl.shaders');
goog.require('cljs_webgl.context');
goog.require('nn.utils.matrix');
goog.require('cljs_webgl.buffers');
goog.require('cljs_webgl.buffers');
goog.require('cljs.reader');
goog.require('cljs_webgl.typed_arrays');
goog.require('goog.events.EventType');
goog.require('goog.events');
nn.render.world = cljs.core.atom.call(null,null);
nn.render.triangle = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.5,0.0,-0.5,-0.5,0.0,0.5,-0.5,0.0], null);
nn.render.triangulator = (function triangulator(triangle,key){var G__10651 = key;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"minus","minus",1117805538),G__10651))
{return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__10648_SHARP_){return (p1__10648_SHARP_ - 0.5);
}),cljs.core.map.call(null,(function (p1__10649_SHARP_){return (p1__10649_SHARP_ * -1);
}),triangle)));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"plus","plus",1017348364),G__10651))
{return cljs.core.map.call(null,(function (p1__10646_SHARP_){return (p1__10646_SHARP_ + 0.5);
}),cljs.core.map.call(null,(function (p1__10647_SHARP_){return (p1__10647_SHARP_ * 1);
}),triangle));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(key)].join('')));
} else
{return null;
}
}
}
});
nn.render.triangle_verts = cljs.core.into.call(null,nn.render.triangulator.call(null,nn.render.triangle,new cljs.core.Keyword(null,"minus","minus",1117805538)),cljs.core.into.call(null,nn.render.triangle,nn.render.triangulator.call(null,nn.render.triangle,new cljs.core.Keyword(null,"plus","plus",1017348364))));
nn.render.vertex_shader_source = "attribute vec3 vertex_position;\n  uniform mat4 thing;\n\n  void main() {\n     gl_Position = thing * vec4(vertex_position, 5.0);\n   }";
nn.render.fragment_shader_source = "uniform int frame;\n   void main() {\n     gl_FragColor.r = sin(float(frame) * 0.05) / 2.0 + 0.6;\n     gl_FragColor.g = sin(float(frame) * 0.1) / 2.0 + 0.5;\n     gl_FragColor.b = sin(float(frame) * 0.02) / 2.0 + 0.5;\n     gl_FragColor.a = 1.0;\n   }";
nn.render.element_buffer = (function element_buffer(gl){return cljs_webgl.buffers.create_buffer.call(null,gl,cljs_webgl.typed_arrays.unsigned_int16.call(null,cljs.core.shuffle.call(null,cljs.core.range.call(null,9))),cljs_webgl.constants.element_array_buffer,cljs_webgl.constants.static_draw);
});
nn.render.gl = cljs_webgl.context.get_context.call(null,goog.dom.getElement("grid"));
nn.render.shader = cljs_webgl.shaders.create_program.call(null,nn.render.gl,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_webgl.shaders.create_shader.call(null,nn.render.gl,cljs_webgl.constants.vertex_shader,nn.render.vertex_shader_source),cljs_webgl.shaders.create_shader.call(null,nn.render.gl,cljs_webgl.constants.fragment_shader,nn.render.fragment_shader_source)], null));
nn.render.vertex_buffer = cljs_webgl.buffers.create_buffer.call(null,nn.render.gl,cljs_webgl.typed_arrays.float32.call(null,nn.render.triangle_verts),cljs_webgl.constants.array_buffer,cljs_webgl.constants.static_draw);
nn.render.draw = (function draw(p__10652){var map__10656 = p__10652;var map__10656__$1 = ((cljs.core.seq_QMARK_.call(null,map__10656))?cljs.core.apply.call(null,cljs.core.hash_map,map__10656):map__10656);var mode = cljs.core.get.call(null,map__10656__$1,new cljs.core.Keyword(null,"mode","mode",1017261333));var name = cljs.core.get.call(null,map__10656__$1,new cljs.core.Keyword(null,"name","name",1017277949));var vec__10657 = name;var frame = cljs.core.nth.call(null,vec__10657,0,null);var thing = cljs.core.nth.call(null,vec__10657,1,null);var shape = (function (){var G__10658 = mode;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"strip","strip",1123677834),G__10658))
{return cljs_webgl.constants.triangle_strip;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"tri","tri",1014019357),G__10658))
{return cljs_webgl.constants.triangles;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs_webgl.constants.line_loop;
} else
{return null;
}
}
}
})();cljs_webgl.buffers.clear_color_buffer.call(null,nn.render.gl,0,0,0,1);
return cljs_webgl.buffers.draw_BANG_.call(null,nn.render.gl,nn.render.shader,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"attrib-array","attrib-array",2213865736),new cljs.core.Keyword(null,"buffer","buffer",3930752946),new cljs.core.Keyword(null,"normalized?","normalized?",762171290),new cljs.core.Keyword(null,"offset","offset",4289091589),new cljs.core.Keyword(null,"count","count",1108755585),new cljs.core.Keyword(null,"first","first",1111344674),new cljs.core.Keyword(null,"stride","stride",4416885323),new cljs.core.Keyword(null,"components-per-vertex","components-per-vertex",4105343709),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"mode","mode",1017261333)],[cljs_webgl.shaders.get_attrib_location.call(null,nn.render.gl,nn.render.shader,"vertex_position"),nn.render.vertex_buffer,false,0,9,0,0,3,cljs_webgl.constants.float$,shape]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),"frame",new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"int","int",1014008673),new cljs.core.Keyword(null,"values","values",4485058708),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frame], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),"thing",new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"mat4","mat4",1017248326),new cljs.core.Keyword(null,"values","values",4485058708),nn.utils.matrix.transform_matrix.call(null,0,frame,0)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"buffer","buffer",3930752946),nn.render.element_buffer.call(null,nn.render.gl),new cljs.core.Keyword(null,"count","count",1108755585),9,new cljs.core.Keyword(null,"type","type",1017479852),cljs_webgl.constants.unsigned_short,new cljs.core.Keyword(null,"offset","offset",4289091589),0], null));
});
/**
* Render loop. Watches for updates from the game and sets the
* actual loop that renders
*/
nn.render.render_loop_BANG_ = (function render_loop_BANG_(notifos){var c__6192__auto___10775 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_10749){var state_val_10750 = (state_10749[1]);if((state_val_10750 === 1))
{var state_10749__$1 = state_10749;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10749__$1,2,notifos);
} else
{if((state_val_10750 === 2))
{var inst_10721 = (state_10749[2]);var inst_10722 = cljs.core.nth.call(null,inst_10721,0,null);var inst_10723 = cljs.core.nth.call(null,inst_10721,1,null);var inst_10724 = inst_10721;var state_10749__$1 = (function (){var statearr_10751 = state_10749;(statearr_10751[7] = inst_10722);
(statearr_10751[8] = inst_10724);
(statearr_10751[9] = inst_10723);
return statearr_10751;
})();var statearr_10752_10776 = state_10749__$1;(statearr_10752_10776[2] = null);
(statearr_10752_10776[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10750 === 3))
{var inst_10724 = (state_10749[8]);var inst_10727 = (state_10749[10]);var inst_10727__$1 = cljs.core.nth.call(null,inst_10724,0,null);var inst_10728 = cljs.core.nth.call(null,inst_10724,1,null);var state_10749__$1 = (function (){var statearr_10753 = state_10749;(statearr_10753[10] = inst_10727__$1);
(statearr_10753[11] = inst_10728);
return statearr_10753;
})();var G__10754_10777 = inst_10727__$1;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"tick","tick",1017464079),G__10754_10777))
{var statearr_10755_10778 = state_10749__$1;(statearr_10755_10778[1] = 9);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"game-start","game-start",552852025),G__10754_10777))
{var statearr_10756_10779 = state_10749__$1;(statearr_10756_10779[1] = 8);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"game-over","game-over",1968745793),G__10754_10777))
{var statearr_10757_10780 = state_10749__$1;(statearr_10757_10780[1] = 7);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"world","world",1127223044),G__10754_10777))
{var statearr_10758_10781 = state_10749__$1;(statearr_10758_10781[1] = 6);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var statearr_10759_10782 = state_10749__$1;(statearr_10759_10782[1] = 10);
} else
{}
}
}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10750 === 4))
{var inst_10747 = (state_10749[2]);var state_10749__$1 = state_10749;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10749__$1,inst_10747);
} else
{if((state_val_10750 === 5))
{var inst_10742 = (state_10749[2]);var state_10749__$1 = (function (){var statearr_10760 = state_10749;(statearr_10760[12] = inst_10742);
return statearr_10760;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10749__$1,11,notifos);
} else
{if((state_val_10750 === 6))
{var inst_10728 = (state_10749[11]);var inst_10729 = cljs.core.reset_BANG_.call(null,nn.render.world,inst_10728);var state_10749__$1 = state_10749;var statearr_10761_10783 = state_10749__$1;(statearr_10761_10783[2] = inst_10729);
(statearr_10761_10783[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10750 === 7))
{var inst_10731 = cljs.core.print.call(null,"i will use this eventually");var state_10749__$1 = state_10749;var statearr_10762_10784 = state_10749__$1;(statearr_10762_10784[2] = inst_10731);
(statearr_10762_10784[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10750 === 8))
{var inst_10733 = cljs.core.print.call(null,"fuck");var state_10749__$1 = state_10749;var statearr_10763_10785 = state_10749__$1;(statearr_10763_10785[2] = inst_10733);
(statearr_10763_10785[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10750 === 9))
{var inst_10728 = (state_10749[11]);var inst_10735 = cljs.core.print.call(null,inst_10728);var state_10749__$1 = state_10749;var statearr_10764_10786 = state_10749__$1;(statearr_10764_10786[2] = inst_10735);
(statearr_10764_10786[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10750 === 10))
{var inst_10727 = (state_10749[10]);var inst_10737 = [cljs.core.str("Unrecognized UI command: "),cljs.core.str(inst_10727)].join('');var inst_10738 = (new Error(inst_10737));var inst_10739 = cljs.core.println.call(null,inst_10738);var state_10749__$1 = state_10749;var statearr_10765_10787 = state_10749__$1;(statearr_10765_10787[2] = inst_10739);
(statearr_10765_10787[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10750 === 11))
{var inst_10744 = (state_10749[2]);var inst_10724 = inst_10744;var state_10749__$1 = (function (){var statearr_10766 = state_10749;(statearr_10766[8] = inst_10724);
return statearr_10766;
})();var statearr_10767_10788 = state_10749__$1;(statearr_10767_10788[2] = null);
(statearr_10767_10788[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_10771 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10771[0] = state_machine__6178__auto__);
(statearr_10771[1] = 1);
return statearr_10771;
});
var state_machine__6178__auto____1 = (function (state_10749){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_10749);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e10772){if((e10772 instanceof Object))
{var ex__6181__auto__ = e10772;var statearr_10773_10789 = state_10749;(statearr_10773_10789[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10749);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10772;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10790 = state_10749;
state_10749 = G__10790;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_10749){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_10749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_10774 = f__6193__auto__.call(null);(statearr_10774[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___10775);
return statearr_10774;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return window.requestAnimationFrame((function hi(time_elapsed){window.requestAnimationFrame(hi);
return nn.render.draw.call(null,cljs.core.deref.call(null,nn.render.world));
}));
});

//# sourceMappingURL=render.js.map