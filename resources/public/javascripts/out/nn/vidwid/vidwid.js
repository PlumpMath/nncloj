// Compiled by ClojureScript 0.0-2173
goog.provide('nn.vidwid.vidwid');
goog.require('cljs.core');
goog.require('om_sync.util');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('goog.debug');
goog.require('cljs.reader');
goog.require('goog.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('goog.net.XhrIo');
goog.require('goog.dom');
goog.require('om_sync.util');
goog.require('om.core');
goog.require('om.dom');
goog.require('cljs.reader');
goog.require('goog.events.EventType');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('goog.debug');
cljs.core.enable_console_print_BANG_.call(null);
nn.vidwid.vidwid.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e-films","e-films",1843209081),null], null));
React.initializeTouchEvents(true);
nn.vidwid.vidwid.url = "http://gdata.youtube.com/feeds/api/users/neurosisnow/uploads?max-results=4&v=2&alt=jsonc";
nn.vidwid.vidwid.xhr = (function xhr(p__15125){var map__15127 = p__15125;var map__15127__$1 = ((cljs.core.seq_QMARK_.call(null,map__15127))?cljs.core.apply.call(null,cljs.core.hash_map,map__15127):map__15127);var on_error = cljs.core.get.call(null,map__15127__$1,new cljs.core.Keyword(null,"on-error","on-error",1418576908));var on_complete = cljs.core.get.call(null,map__15127__$1,new cljs.core.Keyword(null,"on-complete","on-complete",2943599833));var url = cljs.core.get.call(null,map__15127__$1,new cljs.core.Keyword(null,"url","url",1014020321));var method = cljs.core.get.call(null,map__15127__$1,new cljs.core.Keyword(null,"method","method",4231316563));var xhr__$1 = (new goog.net.XhrIo());goog.events.listen(xhr__$1,goog.net.EventType.SUCCESS,(function (e){return on_complete.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map_indexed.call(null,(function (p1__15122_SHARP_,p2__15123_SHARP_){return cljs.core.conj.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nid","nid",1014013307),p1__15122_SHARP_], null),p2__15123_SHARP_);
}),cljs.core.map.call(null,(function (p1__15124_SHARP_){return cljs.core.select_keys.call(null,p1__15124_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Keyword(null,"title","title",1124275658),new cljs.core.Keyword(null,"description","description",3584325486),new cljs.core.Keyword(null,"thumbnail","thumbnail",2344436830)], null));
}),cljs.core.js__GT_clj.call(null,xhr__$1.getResponseJson().data.items,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true)))));
}));
goog.events.listen(xhr__$1,goog.net.EventType.ERROR,(function (e){return on_error.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",1110689146),xhr__$1.getResponseText()], null));
}));
return xhr__$1.send(url,method);
});
nn.vidwid.vidwid.rgb = (function rgb(r,g,b){return [cljs.core.str("rgb("),cljs.core.str(r),cljs.core.str(","),cljs.core.str(g),cljs.core.str(","),cljs.core.str(b),cljs.core.str(")")].join('');
});
nn.vidwid.vidwid.hsl = (function hsl(h,s,l){return [cljs.core.str("hsl("),cljs.core.str(h),cljs.core.str(","),cljs.core.str(s),cljs.core.str("%,"),cljs.core.str(l),cljs.core.str("%)")].join('');
});
nn.vidwid.vidwid.on_hover = (function() {
var on_hover = null;
var on_hover__2 = (function (owner,chan){om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"hovered","hovered",2114939469),null);
return cljs.core.async.put_BANG_.call(null,chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hovered","hovered",2114939469),null], null));
});
var on_hover__3 = (function (owner,chan,img){om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"hovered","hovered",2114939469),true);
return cljs.core.async.put_BANG_.call(null,chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hovered","hovered",2114939469),img], null));
});
on_hover = function(owner,chan,img){
switch(arguments.length){
case 2:
return on_hover__2.call(this,owner,chan);
case 3:
return on_hover__3.call(this,owner,chan,img);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
on_hover.cljs$core$IFn$_invoke$arity$2 = on_hover__2;
on_hover.cljs$core$IFn$_invoke$arity$3 = on_hover__3;
return on_hover;
})()
;
nn.vidwid.vidwid.on_click = (function on_click(owner,chan,nid,selected){om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core.not.call(null,selected));
return cljs.core.async.put_BANG_.call(null,chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clicked","clicked",1874428825),nid], null));
});
nn.vidwid.vidwid.range_change = (function range_change(owner,chan,app){var val = om.core.get_node.call(null,owner,"range").value;var id = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (val){
return (function (p1__15128_SHARP_){return cljs.core._EQ_.call(null,[cljs.core.str(p1__15128_SHARP_.call(null,new cljs.core.Keyword(null,"nid","nid",1014013307)))].join(''),val);
});})(val))
,cljs.core.deref.call(null,app))));return cljs.core.async.put_BANG_.call(null,chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clicked","clicked",1874428825),parseInt(val)], null));
});
nn.vidwid.vidwid.e_film = (function e_film(p__15129,owner){var map__15136 = p__15129;var map__15136__$1 = ((cljs.core.seq_QMARK_.call(null,map__15136))?cljs.core.apply.call(null,cljs.core.hash_map,map__15136):map__15136);var description = cljs.core.get.call(null,map__15136__$1,new cljs.core.Keyword(null,"description","description",3584325486));var thumbnail = cljs.core.get.call(null,map__15136__$1,new cljs.core.Keyword(null,"thumbnail","thumbnail",2344436830));var title = cljs.core.get.call(null,map__15136__$1,new cljs.core.Keyword(null,"title","title",1124275658));var id = cljs.core.get.call(null,map__15136__$1,new cljs.core.Keyword(null,"id","id",1013907597));var nid = cljs.core.get.call(null,map__15136__$1,new cljs.core.Keyword(null,"nid","nid",1014013307));if(typeof nn.vidwid.vidwid.t15137 !== 'undefined')
{} else
{
/**
* @constructor
*/
nn.vidwid.vidwid.t15137 = (function (nid,id,title,thumbnail,description,map__15136,owner,p__15129,e_film,meta15138){
this.nid = nid;
this.id = id;
this.title = title;
this.thumbnail = thumbnail;
this.description = description;
this.map__15136 = map__15136;
this.owner = owner;
this.p__15129 = p__15129;
this.e_film = e_film;
this.meta15138 = meta15138;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
nn.vidwid.vidwid.t15137.cljs$lang$type = true;
nn.vidwid.vidwid.t15137.cljs$lang$ctorStr = "nn.vidwid.vidwid/t15137";
nn.vidwid.vidwid.t15137.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"nn.vidwid.vidwid/t15137");
});
nn.vidwid.vidwid.t15137.prototype.om$core$IRenderState$ = true;
nn.vidwid.vidwid.t15137.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__15140){var self__ = this;
var map__15141 = p__15140;var map__15141__$1 = ((cljs.core.seq_QMARK_.call(null,map__15141))?cljs.core.apply.call(null,cljs.core.hash_map,map__15141):map__15141);var selected = cljs.core.get.call(null,map__15141__$1,new cljs.core.Keyword(null,"selected","selected",2205476365));var hovered = cljs.core.get.call(null,map__15141__$1,new cljs.core.Keyword(null,"hovered","hovered",2114939469));var root_chan = cljs.core.get.call(null,map__15141__$1,new cljs.core.Keyword(null,"root-chan","root-chan",4395197647));var ___$1 = this;return React.DOM.div({"onClick": (function (){return nn.vidwid.vidwid.on_click.call(null,self__.owner,root_chan,self__.nid,selected);
}), "className": (cljs.core.truth_(hovered)?"title now-reading trans":"title trans"), "style": cljs.core.clj__GT_js.call(null,((cljs.core._EQ_.call(null,selected,self__.nid))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",2685668404),"none"], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",4502531971),"0px"], null))), "onMouseLeave": (function (){return nn.vidwid.vidwid.on_hover.call(null,self__.owner,root_chan);
}), "onMouseEnter": (function (){return nn.vidwid.vidwid.on_hover.call(null,self__.owner,root_chan,cljs.core.deref.call(null,self__.thumbnail).call(null,new cljs.core.Keyword(null,"hqDefault","hqDefault",4595730538)));
})},(function (){var or__3443__auto__ = self__.title;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return "test";
}
})());
});
nn.vidwid.vidwid.t15137.prototype.om$core$IWillUpdate$ = true;
nn.vidwid.vidwid.t15137.prototype.om$core$IWillUpdate$will_update$arity$3 = (function (_,next_props,next_state){var self__ = this;
var ___$1 = this;if((cljs.core._EQ_.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",2205476365)),self__.nid)) && (cljs.core._EQ_.call(null,next_state.call(null,new cljs.core.Keyword(null,"selected","selected",2205476365)),self__.nid)))
{return om.core.get_node.call(null,self__.owner).classList.add("work");
} else
{return om.core.get_node.call(null,self__.owner).classList.remove("work");
}
});
nn.vidwid.vidwid.t15137.prototype.om$core$IDidUpdate$ = true;
nn.vidwid.vidwid.t15137.prototype.om$core$IDidUpdate$did_update$arity$3 = (function (this$,prev_props,prev_state){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_((function (){var or__3443__auto__ = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"hovered","hovered",2114939469));if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"clicked","clicked",1874428825));
}
})()))
{var h = cljs.core.mod.call(null,360,(175 + (60 * cljs.core.rand_int.call(null,3))));var hsl = nn.vidwid.vidwid.hsl.call(null,h,100,61);return cljs.core.async.put_BANG_.call(null,prev_state.call(null,new cljs.core.Keyword(null,"root-chan","root-chan",4395197647)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color","color",1108746965),hsl], null));
} else
{return null;
}
});
nn.vidwid.vidwid.t15137.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15139){var self__ = this;
var _15139__$1 = this;return self__.meta15138;
});
nn.vidwid.vidwid.t15137.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15139,meta15138__$1){var self__ = this;
var _15139__$1 = this;return (new nn.vidwid.vidwid.t15137(self__.nid,self__.id,self__.title,self__.thumbnail,self__.description,self__.map__15136,self__.owner,self__.p__15129,self__.e_film,meta15138__$1));
});
nn.vidwid.vidwid.__GT_t15137 = (function __GT_t15137(nid__$1,id__$1,title__$1,thumbnail__$1,description__$1,map__15136__$2,owner__$1,p__15129__$1,e_film__$1,meta15138){return (new nn.vidwid.vidwid.t15137(nid__$1,id__$1,title__$1,thumbnail__$1,description__$1,map__15136__$2,owner__$1,p__15129__$1,e_film__$1,meta15138));
});
}
return (new nn.vidwid.vidwid.t15137(nid,id,title,thumbnail,description,map__15136__$1,owner,p__15129,e_film,null));
});
nn.vidwid.vidwid.mobile_scroll = (function mobile_scroll(app,owner){if(typeof nn.vidwid.vidwid.t15148 !== 'undefined')
{} else
{
/**
* @constructor
*/
nn.vidwid.vidwid.t15148 = (function (owner,app,mobile_scroll,meta15149){
this.owner = owner;
this.app = app;
this.mobile_scroll = mobile_scroll;
this.meta15149 = meta15149;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
nn.vidwid.vidwid.t15148.cljs$lang$type = true;
nn.vidwid.vidwid.t15148.cljs$lang$ctorStr = "nn.vidwid.vidwid/t15148";
nn.vidwid.vidwid.t15148.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"nn.vidwid.vidwid/t15148");
});
nn.vidwid.vidwid.t15148.prototype.om$core$IRenderState$ = true;
nn.vidwid.vidwid.t15148.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__15151){var self__ = this;
var map__15152 = p__15151;var map__15152__$1 = ((cljs.core.seq_QMARK_.call(null,map__15152))?cljs.core.apply.call(null,cljs.core.hash_map,map__15152):map__15152);var selected = cljs.core.get.call(null,map__15152__$1,new cljs.core.Keyword(null,"selected","selected",2205476365));var root_chan = cljs.core.get.call(null,map__15152__$1,new cljs.core.Keyword(null,"root-chan","root-chan",4395197647));var ___$1 = this;var val_map = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p1__15142_SHARP_){return cljs.core._EQ_.call(null,p1__15142_SHARP_.call(null,new cljs.core.Keyword(null,"id","id",1013907597)),selected);
}),self__.app));var val = [cljs.core.str(val_map.call(null,new cljs.core.Keyword(null,"nid","nid",1014013307)))].join('');return om.dom.input.call(null,{"value": ((cljs.core._EQ_.call(null,[cljs.core.str(selected)].join(''),""))?"0":selected), "onChange": (function (){return nn.vidwid.vidwid.range_change.call(null,self__.owner,root_chan,self__.app);
}), "ref": "range", "max": [cljs.core.str((cljs.core.count.call(null,self__.app) - 1))].join(''), "min": "0", "type": "range", "className": "flex scroller"},null);
});
nn.vidwid.vidwid.t15148.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15150){var self__ = this;
var _15150__$1 = this;return self__.meta15149;
});
nn.vidwid.vidwid.t15148.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15150,meta15149__$1){var self__ = this;
var _15150__$1 = this;return (new nn.vidwid.vidwid.t15148(self__.owner,self__.app,self__.mobile_scroll,meta15149__$1));
});
nn.vidwid.vidwid.__GT_t15148 = (function __GT_t15148(owner__$1,app__$1,mobile_scroll__$1,meta15149){return (new nn.vidwid.vidwid.t15148(owner__$1,app__$1,mobile_scroll__$1,meta15149));
});
}
return (new nn.vidwid.vidwid.t15148(owner,app,mobile_scroll,null));
});
nn.vidwid.vidwid.iframe = (function iframe(p__15153,owner){var map__15160 = p__15153;var map__15160__$1 = ((cljs.core.seq_QMARK_.call(null,map__15160))?cljs.core.apply.call(null,cljs.core.hash_map,map__15160):map__15160);var id = cljs.core.get.call(null,map__15160__$1,new cljs.core.Keyword(null,"id","id",1013907597));var nid = cljs.core.get.call(null,map__15160__$1,new cljs.core.Keyword(null,"nid","nid",1014013307));if(typeof nn.vidwid.vidwid.t15161 !== 'undefined')
{} else
{
/**
* @constructor
*/
nn.vidwid.vidwid.t15161 = (function (nid,id,map__15160,owner,p__15153,iframe,meta15162){
this.nid = nid;
this.id = id;
this.map__15160 = map__15160;
this.owner = owner;
this.p__15153 = p__15153;
this.iframe = iframe;
this.meta15162 = meta15162;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
nn.vidwid.vidwid.t15161.cljs$lang$type = true;
nn.vidwid.vidwid.t15161.cljs$lang$ctorStr = "nn.vidwid.vidwid/t15161";
nn.vidwid.vidwid.t15161.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"nn.vidwid.vidwid/t15161");
});
nn.vidwid.vidwid.t15161.prototype.om$core$IRenderState$ = true;
nn.vidwid.vidwid.t15161.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__15164){var self__ = this;
var map__15165 = p__15164;var map__15165__$1 = ((cljs.core.seq_QMARK_.call(null,map__15165))?cljs.core.apply.call(null,cljs.core.hash_map,map__15165):map__15165);var selected = cljs.core.get.call(null,map__15165__$1,new cljs.core.Keyword(null,"selected","selected",2205476365));var root_chan = cljs.core.get.call(null,map__15165__$1,new cljs.core.Keyword(null,"root-chan","root-chan",4395197647));var ___$1 = this;return React.DOM.iframe({"style": cljs.core.clj__GT_js.call(null,((cljs.core._EQ_.call(null,selected,self__.nid))?cljs.core.PersistentArrayMap.EMPTY:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",2685668404),"none"], null))), "frameBorder": "0", "className": "full", "src": [cljs.core.str("//www.youtube.com/embed/"),cljs.core.str(self__.id)].join('')},"");
});
nn.vidwid.vidwid.t15161.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15163){var self__ = this;
var _15163__$1 = this;return self__.meta15162;
});
nn.vidwid.vidwid.t15161.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15163,meta15162__$1){var self__ = this;
var _15163__$1 = this;return (new nn.vidwid.vidwid.t15161(self__.nid,self__.id,self__.map__15160,self__.owner,self__.p__15153,self__.iframe,meta15162__$1));
});
nn.vidwid.vidwid.__GT_t15161 = (function __GT_t15161(nid__$1,id__$1,map__15160__$2,owner__$1,p__15153__$1,iframe__$1,meta15162){return (new nn.vidwid.vidwid.t15161(nid__$1,id__$1,map__15160__$2,owner__$1,p__15153__$1,iframe__$1,meta15162));
});
}
return (new nn.vidwid.vidwid.t15161(nid,id,map__15160__$1,owner,p__15153,iframe,null));
});
nn.vidwid.vidwid.video_widget = (function video_widget(p__15169,owner){var map__15222 = p__15169;var map__15222__$1 = ((cljs.core.seq_QMARK_.call(null,map__15222))?cljs.core.apply.call(null,cljs.core.hash_map,map__15222):map__15222);var app = map__15222__$1;var e_films = cljs.core.get.call(null,map__15222__$1,new cljs.core.Keyword(null,"e-films","e-films",1843209081));if(typeof nn.vidwid.vidwid.t15223 !== 'undefined')
{} else
{
/**
* @constructor
*/
nn.vidwid.vidwid.t15223 = (function (e_films,app,map__15222,owner,p__15169,video_widget,meta15224){
this.e_films = e_films;
this.app = app;
this.map__15222 = map__15222;
this.owner = owner;
this.p__15169 = p__15169;
this.video_widget = video_widget;
this.meta15224 = meta15224;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
nn.vidwid.vidwid.t15223.cljs$lang$type = true;
nn.vidwid.vidwid.t15223.cljs$lang$ctorStr = "nn.vidwid.vidwid/t15223";
nn.vidwid.vidwid.t15223.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"nn.vidwid.vidwid/t15223");
});
nn.vidwid.vidwid.t15223.prototype.om$core$IRenderState$ = true;
nn.vidwid.vidwid.t15223.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__15226){var self__ = this;
var map__15227 = p__15226;var map__15227__$1 = ((cljs.core.seq_QMARK_.call(null,map__15227))?cljs.core.apply.call(null,cljs.core.hash_map,map__15227):map__15227);var color = cljs.core.get.call(null,map__15227__$1,new cljs.core.Keyword(null,"color","color",1108746965));var selected = cljs.core.get.call(null,map__15227__$1,new cljs.core.Keyword(null,"selected","selected",2205476365));var hovered = cljs.core.get.call(null,map__15227__$1,new cljs.core.Keyword(null,"hovered","hovered",2114939469));var chans = cljs.core.get.call(null,map__15227__$1,new cljs.core.Keyword(null,"chans","chans",1108527827));var ___$1 = this;return React.DOM.div({"className": "full flex mobile"},cljs.core.apply.call(null,om.dom.div,{"style": {"background": (cljs.core.truth_(hovered)?[cljs.core.str("url("),cljs.core.str(hovered),cljs.core.str(")")].join(''):[cljs.core.str((function (){var or__3443__auto__ = color;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return nn.vidwid.vidwid.hsl.call(null,175,100,61);
}
})()),cljs.core.str(" "),cljs.core.str("url("),cljs.core.str("http://i.imgur.com/fPRkry0.png)")].join(''))}, "className": "vid-frame"},om.core.build_all.call(null,nn.vidwid.vidwid.iframe,self__.e_films,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),chans,new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),selected], null)], null))),om.core.build.call(null,nn.vidwid.vidwid.mobile_scroll,self__.e_films,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),chans,new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),selected], null)], null)),cljs.core.apply.call(null,om.dom.div,{"style": {"padding-left": "10px"}, "className": ""},(cljs.core.truth_(selected)?(function (){var e_film = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p1__15168_SHARP_){return cljs.core._EQ_.call(null,p1__15168_SHARP_.call(null,new cljs.core.Keyword(null,"nid","nid",1014013307)),selected);
}),self__.app.call(null,new cljs.core.Keyword(null,"e-films","e-films",1843209081))));return React.DOM.i({"onClick": (function (){return cljs.core.async.put_BANG_.call(null,chans.call(null,new cljs.core.Keyword(null,"root-chan","root-chan",4395197647)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clicked","clicked",1874428825),null], null));
}), "className": "title"},e_film.call(null,new cljs.core.Keyword(null,"title","title",1124275658)));
})():null),((cljs.core.not.call(null,self__.e_films))?"loading":om.core.build_all.call(null,nn.vidwid.vidwid.e_film,self__.e_films,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),chans,new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),selected], null)], null)))));
});
nn.vidwid.vidwid.t15223.prototype.om$core$IDidMount$ = true;
nn.vidwid.vidwid.t15223.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return null;
});
nn.vidwid.vidwid.t15223.prototype.om$core$IWillMount$ = true;
nn.vidwid.vidwid.t15223.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;nn.vidwid.vidwid.xhr.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",4231316563),"GET",new cljs.core.Keyword(null,"url","url",1014020321),nn.vidwid.vidwid.url,new cljs.core.Keyword(null,"on-complete","on-complete",2943599833),(function (p1__15166_SHARP_){return om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"e-films","e-films",1843209081),(function (___$2){return p1__15166_SHARP_;
}));
}),new cljs.core.Keyword(null,"on-error","on-error",1418576908),(function (p1__15167_SHARP_){return cljs.core.print.call(null,p1__15167_SHARP_);
})], null));
var root_chan = om.core.get_state.call(null,self__.owner,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chans","chans",1108527827),new cljs.core.Keyword(null,"root-chan","root-chan",4395197647)], null));var c__6192__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_15250){var state_val_15251 = (state_15250[1]);if((state_val_15251 === 1))
{var state_15250__$1 = state_15250;var statearr_15252_15274 = state_15250__$1;(statearr_15252_15274[2] = null);
(statearr_15252_15274[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15251 === 2))
{var state_15250__$1 = state_15250;if(true)
{var statearr_15253_15275 = state_15250__$1;(statearr_15253_15275[1] = 4);
} else
{var statearr_15254_15276 = state_15250__$1;(statearr_15254_15276[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15251 === 3))
{var inst_15248 = (state_15250[2]);var state_15250__$1 = state_15250;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15250__$1,inst_15248);
} else
{if((state_val_15251 === 4))
{var state_15250__$1 = state_15250;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15250__$1,7,root_chan);
} else
{if((state_val_15251 === 5))
{var state_15250__$1 = state_15250;var statearr_15255_15277 = state_15250__$1;(statearr_15255_15277[2] = null);
(statearr_15255_15277[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15251 === 6))
{var inst_15246 = (state_15250[2]);var state_15250__$1 = state_15250;var statearr_15256_15278 = state_15250__$1;(statearr_15256_15278[2] = inst_15246);
(statearr_15256_15278[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15251 === 7))
{var inst_15232 = (state_15250[2]);var inst_15233 = cljs.core.nth.call(null,inst_15232,0,null);var inst_15234 = cljs.core.nth.call(null,inst_15232,1,null);var state_15250__$1 = (function (){var statearr_15257 = state_15250;(statearr_15257[7] = inst_15234);
return statearr_15257;
})();var G__15258_15279 = inst_15233;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"color","color",1108746965),G__15258_15279))
{var statearr_15259_15280 = state_15250__$1;(statearr_15259_15280[1] = 11);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"clicked","clicked",1874428825),G__15258_15279))
{var statearr_15260_15281 = state_15250__$1;(statearr_15260_15281[1] = 10);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"hovered","hovered",2114939469),G__15258_15279))
{var statearr_15261_15282 = state_15250__$1;(statearr_15261_15282[1] = 9);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_15233)].join('')));
} else
{}
}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15251 === 8))
{var inst_15242 = (state_15250[2]);var state_15250__$1 = (function (){var statearr_15262 = state_15250;(statearr_15262[8] = inst_15242);
return statearr_15262;
})();var statearr_15263_15283 = state_15250__$1;(statearr_15263_15283[2] = null);
(statearr_15263_15283[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15251 === 9))
{var inst_15234 = (state_15250[7]);var inst_15235 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"hovered","hovered",2114939469),inst_15234);var state_15250__$1 = state_15250;var statearr_15264_15284 = state_15250__$1;(statearr_15264_15284[2] = inst_15235);
(statearr_15264_15284[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15251 === 10))
{var inst_15234 = (state_15250[7]);var inst_15237 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",2205476365),inst_15234);var state_15250__$1 = state_15250;var statearr_15265_15285 = state_15250__$1;(statearr_15265_15285[2] = inst_15237);
(statearr_15265_15285[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15251 === 11))
{var inst_15234 = (state_15250[7]);var inst_15239 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"color","color",1108746965),inst_15234);var state_15250__$1 = state_15250;var statearr_15266_15286 = state_15250__$1;(statearr_15266_15286[2] = inst_15239);
(statearr_15266_15286[1] = 8);
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
var state_machine__6178__auto____0 = (function (){var statearr_15270 = [null,null,null,null,null,null,null,null,null];(statearr_15270[0] = state_machine__6178__auto__);
(statearr_15270[1] = 1);
return statearr_15270;
});
var state_machine__6178__auto____1 = (function (state_15250){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_15250);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e15271){if((e15271 instanceof Object))
{var ex__6181__auto__ = e15271;var statearr_15272_15287 = state_15250;(statearr_15272_15287[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15250);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15271;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15288 = state_15250;
state_15250 = G__15288;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_15250){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_15250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_15273 = f__6193__auto__.call(null);(statearr_15273[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_15273;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return c__6192__auto__;
});
nn.vidwid.vidwid.t15223.prototype.om$core$IInitState$ = true;
nn.vidwid.vidwid.t15223.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"chans","chans",1108527827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"root-chan","root-chan",4395197647),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,1))], null)], null);
});
nn.vidwid.vidwid.t15223.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15225){var self__ = this;
var _15225__$1 = this;return self__.meta15224;
});
nn.vidwid.vidwid.t15223.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15225,meta15224__$1){var self__ = this;
var _15225__$1 = this;return (new nn.vidwid.vidwid.t15223(self__.e_films,self__.app,self__.map__15222,self__.owner,self__.p__15169,self__.video_widget,meta15224__$1));
});
nn.vidwid.vidwid.__GT_t15223 = (function __GT_t15223(e_films__$1,app__$1,map__15222__$2,owner__$1,p__15169__$1,video_widget__$1,meta15224){return (new nn.vidwid.vidwid.t15223(e_films__$1,app__$1,map__15222__$2,owner__$1,p__15169__$1,video_widget__$1,meta15224));
});
}
return (new nn.vidwid.vidwid.t15223(e_films,app,map__15222__$1,owner,p__15169,video_widget,null));
});
om.core.root.call(null,nn.vidwid.vidwid.video_widget,nn.vidwid.vidwid.app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",4427965699),goog.dom.getElement("menu"),new cljs.core.Keyword(null,"tx-listen","tx-listen",666878114),(function (tx_data,root_cursor){return cljs.core.println.call(null,tx_data);
})], null));

//# sourceMappingURL=vidwid.js.map