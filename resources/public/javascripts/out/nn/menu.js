// Compiled by ClojureScript 0.0-2173
goog.provide('nn.menu');
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
nn.menu.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e-films","e-films",1843209081),null], null));
React.initializeTouchEvents(true);
nn.menu.url = "http://gdata.youtube.com/feeds/api/users/neurosisnow/uploads?max-results=4&v=2&alt=jsonc";
nn.menu.xhr = (function xhr(p__10823){var map__10825 = p__10823;var map__10825__$1 = ((cljs.core.seq_QMARK_.call(null,map__10825))?cljs.core.apply.call(null,cljs.core.hash_map,map__10825):map__10825);var on_error = cljs.core.get.call(null,map__10825__$1,new cljs.core.Keyword(null,"on-error","on-error",1418576908));var on_complete = cljs.core.get.call(null,map__10825__$1,new cljs.core.Keyword(null,"on-complete","on-complete",2943599833));var url = cljs.core.get.call(null,map__10825__$1,new cljs.core.Keyword(null,"url","url",1014020321));var method = cljs.core.get.call(null,map__10825__$1,new cljs.core.Keyword(null,"method","method",4231316563));var xhr__$1 = (new goog.net.XhrIo());goog.events.listen(xhr__$1,goog.net.EventType.SUCCESS,(function (e){return on_complete.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map_indexed.call(null,(function (p1__10820_SHARP_,p2__10821_SHARP_){return cljs.core.conj.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nid","nid",1014013307),p1__10820_SHARP_], null),p2__10821_SHARP_);
}),cljs.core.map.call(null,(function (p1__10822_SHARP_){return cljs.core.select_keys.call(null,p1__10822_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Keyword(null,"title","title",1124275658),new cljs.core.Keyword(null,"description","description",3584325486),new cljs.core.Keyword(null,"thumbnail","thumbnail",2344436830)], null));
}),cljs.core.js__GT_clj.call(null,xhr__$1.getResponseJson().data.items,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true)))));
}));
goog.events.listen(xhr__$1,goog.net.EventType.ERROR,(function (e){return on_error.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",1110689146),xhr__$1.getResponseText()], null));
}));
return xhr__$1.send(url,method);
});
nn.menu.rgb = (function rgb(r,g,b){return [cljs.core.str("rgb("),cljs.core.str(r),cljs.core.str(","),cljs.core.str(g),cljs.core.str(","),cljs.core.str(b),cljs.core.str(")")].join('');
});
nn.menu.hsl = (function hsl(h,s,l){return [cljs.core.str("hsl("),cljs.core.str(h),cljs.core.str(","),cljs.core.str(s),cljs.core.str("%,"),cljs.core.str(l),cljs.core.str("%)")].join('');
});
nn.menu.on_hover = (function() {
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
nn.menu.on_click = (function on_click(owner,chan,nid,selected){om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core.not.call(null,selected));
return cljs.core.async.put_BANG_.call(null,chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clicked","clicked",1874428825),nid], null));
});
nn.menu.range_change = (function range_change(owner,chan,app){var val = om.core.get_node.call(null,owner,"range").value;var id = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (val){
return (function (p1__10826_SHARP_){return cljs.core._EQ_.call(null,[cljs.core.str(p1__10826_SHARP_.call(null,new cljs.core.Keyword(null,"nid","nid",1014013307)))].join(''),val);
});})(val))
,cljs.core.deref.call(null,app))));return cljs.core.async.put_BANG_.call(null,chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clicked","clicked",1874428825),parseInt(val)], null));
});
nn.menu.e_film = (function e_film(p__10827,owner){var map__10834 = p__10827;var map__10834__$1 = ((cljs.core.seq_QMARK_.call(null,map__10834))?cljs.core.apply.call(null,cljs.core.hash_map,map__10834):map__10834);var description = cljs.core.get.call(null,map__10834__$1,new cljs.core.Keyword(null,"description","description",3584325486));var thumbnail = cljs.core.get.call(null,map__10834__$1,new cljs.core.Keyword(null,"thumbnail","thumbnail",2344436830));var title = cljs.core.get.call(null,map__10834__$1,new cljs.core.Keyword(null,"title","title",1124275658));var id = cljs.core.get.call(null,map__10834__$1,new cljs.core.Keyword(null,"id","id",1013907597));var nid = cljs.core.get.call(null,map__10834__$1,new cljs.core.Keyword(null,"nid","nid",1014013307));if(typeof nn.menu.t10835 !== 'undefined')
{} else
{
/**
* @constructor
*/
nn.menu.t10835 = (function (nid,id,title,thumbnail,description,map__10834,owner,p__10827,e_film,meta10836){
this.nid = nid;
this.id = id;
this.title = title;
this.thumbnail = thumbnail;
this.description = description;
this.map__10834 = map__10834;
this.owner = owner;
this.p__10827 = p__10827;
this.e_film = e_film;
this.meta10836 = meta10836;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
nn.menu.t10835.cljs$lang$type = true;
nn.menu.t10835.cljs$lang$ctorStr = "nn.menu/t10835";
nn.menu.t10835.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"nn.menu/t10835");
});
nn.menu.t10835.prototype.om$core$IRenderState$ = true;
nn.menu.t10835.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__10838){var self__ = this;
var map__10839 = p__10838;var map__10839__$1 = ((cljs.core.seq_QMARK_.call(null,map__10839))?cljs.core.apply.call(null,cljs.core.hash_map,map__10839):map__10839);var selected = cljs.core.get.call(null,map__10839__$1,new cljs.core.Keyword(null,"selected","selected",2205476365));var hovered = cljs.core.get.call(null,map__10839__$1,new cljs.core.Keyword(null,"hovered","hovered",2114939469));var root_chan = cljs.core.get.call(null,map__10839__$1,new cljs.core.Keyword(null,"root-chan","root-chan",4395197647));var ___$1 = this;return React.DOM.div({"onClick": (function (){return nn.menu.on_click.call(null,self__.owner,root_chan,self__.nid,selected);
}), "className": (cljs.core.truth_(hovered)?"title now-reading trans":"title trans"), "style": cljs.core.clj__GT_js.call(null,((cljs.core._EQ_.call(null,selected,self__.nid))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",2685668404),"none"], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",4502531971),"0px"], null))), "onMouseLeave": (function (){return nn.menu.on_hover.call(null,self__.owner,root_chan);
}), "onMouseEnter": (function (){return nn.menu.on_hover.call(null,self__.owner,root_chan,cljs.core.deref.call(null,self__.thumbnail).call(null,new cljs.core.Keyword(null,"hqDefault","hqDefault",4595730538)));
})},(function (){var or__3443__auto__ = self__.title;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return "test";
}
})());
});
nn.menu.t10835.prototype.om$core$IWillUpdate$ = true;
nn.menu.t10835.prototype.om$core$IWillUpdate$will_update$arity$3 = (function (_,next_props,next_state){var self__ = this;
var ___$1 = this;if((cljs.core._EQ_.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",2205476365)),self__.nid)) && (cljs.core._EQ_.call(null,next_state.call(null,new cljs.core.Keyword(null,"selected","selected",2205476365)),self__.nid)))
{return om.core.get_node.call(null,self__.owner).classList.add("work");
} else
{return om.core.get_node.call(null,self__.owner).classList.remove("work");
}
});
nn.menu.t10835.prototype.om$core$IDidUpdate$ = true;
nn.menu.t10835.prototype.om$core$IDidUpdate$did_update$arity$3 = (function (this$,prev_props,prev_state){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_((function (){var or__3443__auto__ = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"hovered","hovered",2114939469));if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"clicked","clicked",1874428825));
}
})()))
{var h = cljs.core.mod.call(null,360,(175 + (60 * cljs.core.rand_int.call(null,3))));var hsl = nn.menu.hsl.call(null,h,100,61);return cljs.core.async.put_BANG_.call(null,prev_state.call(null,new cljs.core.Keyword(null,"root-chan","root-chan",4395197647)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color","color",1108746965),hsl], null));
} else
{return null;
}
});
nn.menu.t10835.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10837){var self__ = this;
var _10837__$1 = this;return self__.meta10836;
});
nn.menu.t10835.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10837,meta10836__$1){var self__ = this;
var _10837__$1 = this;return (new nn.menu.t10835(self__.nid,self__.id,self__.title,self__.thumbnail,self__.description,self__.map__10834,self__.owner,self__.p__10827,self__.e_film,meta10836__$1));
});
nn.menu.__GT_t10835 = (function __GT_t10835(nid__$1,id__$1,title__$1,thumbnail__$1,description__$1,map__10834__$2,owner__$1,p__10827__$1,e_film__$1,meta10836){return (new nn.menu.t10835(nid__$1,id__$1,title__$1,thumbnail__$1,description__$1,map__10834__$2,owner__$1,p__10827__$1,e_film__$1,meta10836));
});
}
return (new nn.menu.t10835(nid,id,title,thumbnail,description,map__10834__$1,owner,p__10827,e_film,null));
});
nn.menu.mobile_scroll = (function mobile_scroll(app,owner){if(typeof nn.menu.t10846 !== 'undefined')
{} else
{
/**
* @constructor
*/
nn.menu.t10846 = (function (owner,app,mobile_scroll,meta10847){
this.owner = owner;
this.app = app;
this.mobile_scroll = mobile_scroll;
this.meta10847 = meta10847;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
nn.menu.t10846.cljs$lang$type = true;
nn.menu.t10846.cljs$lang$ctorStr = "nn.menu/t10846";
nn.menu.t10846.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"nn.menu/t10846");
});
nn.menu.t10846.prototype.om$core$IRenderState$ = true;
nn.menu.t10846.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__10849){var self__ = this;
var map__10850 = p__10849;var map__10850__$1 = ((cljs.core.seq_QMARK_.call(null,map__10850))?cljs.core.apply.call(null,cljs.core.hash_map,map__10850):map__10850);var selected = cljs.core.get.call(null,map__10850__$1,new cljs.core.Keyword(null,"selected","selected",2205476365));var root_chan = cljs.core.get.call(null,map__10850__$1,new cljs.core.Keyword(null,"root-chan","root-chan",4395197647));var ___$1 = this;var val_map = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p1__10840_SHARP_){return cljs.core._EQ_.call(null,p1__10840_SHARP_.call(null,new cljs.core.Keyword(null,"id","id",1013907597)),selected);
}),self__.app));var val = [cljs.core.str(val_map.call(null,new cljs.core.Keyword(null,"nid","nid",1014013307)))].join('');return om.dom.input.call(null,{"value": ((cljs.core._EQ_.call(null,[cljs.core.str(selected)].join(''),""))?"0":selected), "onChange": (function (){return nn.menu.range_change.call(null,self__.owner,root_chan,self__.app);
}), "ref": "range", "max": [cljs.core.str((cljs.core.count.call(null,self__.app) - 1))].join(''), "min": "0", "type": "range", "className": "flex scroller"},null);
});
nn.menu.t10846.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10848){var self__ = this;
var _10848__$1 = this;return self__.meta10847;
});
nn.menu.t10846.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10848,meta10847__$1){var self__ = this;
var _10848__$1 = this;return (new nn.menu.t10846(self__.owner,self__.app,self__.mobile_scroll,meta10847__$1));
});
nn.menu.__GT_t10846 = (function __GT_t10846(owner__$1,app__$1,mobile_scroll__$1,meta10847){return (new nn.menu.t10846(owner__$1,app__$1,mobile_scroll__$1,meta10847));
});
}
return (new nn.menu.t10846(owner,app,mobile_scroll,null));
});
nn.menu.iframe = (function iframe(p__10851,owner){var map__10858 = p__10851;var map__10858__$1 = ((cljs.core.seq_QMARK_.call(null,map__10858))?cljs.core.apply.call(null,cljs.core.hash_map,map__10858):map__10858);var id = cljs.core.get.call(null,map__10858__$1,new cljs.core.Keyword(null,"id","id",1013907597));var nid = cljs.core.get.call(null,map__10858__$1,new cljs.core.Keyword(null,"nid","nid",1014013307));if(typeof nn.menu.t10859 !== 'undefined')
{} else
{
/**
* @constructor
*/
nn.menu.t10859 = (function (nid,id,map__10858,owner,p__10851,iframe,meta10860){
this.nid = nid;
this.id = id;
this.map__10858 = map__10858;
this.owner = owner;
this.p__10851 = p__10851;
this.iframe = iframe;
this.meta10860 = meta10860;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
nn.menu.t10859.cljs$lang$type = true;
nn.menu.t10859.cljs$lang$ctorStr = "nn.menu/t10859";
nn.menu.t10859.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"nn.menu/t10859");
});
nn.menu.t10859.prototype.om$core$IRenderState$ = true;
nn.menu.t10859.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__10862){var self__ = this;
var map__10863 = p__10862;var map__10863__$1 = ((cljs.core.seq_QMARK_.call(null,map__10863))?cljs.core.apply.call(null,cljs.core.hash_map,map__10863):map__10863);var selected = cljs.core.get.call(null,map__10863__$1,new cljs.core.Keyword(null,"selected","selected",2205476365));var root_chan = cljs.core.get.call(null,map__10863__$1,new cljs.core.Keyword(null,"root-chan","root-chan",4395197647));var ___$1 = this;return React.DOM.iframe({"style": cljs.core.clj__GT_js.call(null,((cljs.core._EQ_.call(null,selected,self__.nid))?cljs.core.PersistentArrayMap.EMPTY:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",2685668404),"none"], null))), "frameBorder": "0", "className": "full", "src": [cljs.core.str("//www.youtube.com/embed/"),cljs.core.str(self__.id)].join('')},"");
});
nn.menu.t10859.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10861){var self__ = this;
var _10861__$1 = this;return self__.meta10860;
});
nn.menu.t10859.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10861,meta10860__$1){var self__ = this;
var _10861__$1 = this;return (new nn.menu.t10859(self__.nid,self__.id,self__.map__10858,self__.owner,self__.p__10851,self__.iframe,meta10860__$1));
});
nn.menu.__GT_t10859 = (function __GT_t10859(nid__$1,id__$1,map__10858__$2,owner__$1,p__10851__$1,iframe__$1,meta10860){return (new nn.menu.t10859(nid__$1,id__$1,map__10858__$2,owner__$1,p__10851__$1,iframe__$1,meta10860));
});
}
return (new nn.menu.t10859(nid,id,map__10858__$1,owner,p__10851,iframe,null));
});
nn.menu.video_widget = (function video_widget(p__10867,owner){var map__10920 = p__10867;var map__10920__$1 = ((cljs.core.seq_QMARK_.call(null,map__10920))?cljs.core.apply.call(null,cljs.core.hash_map,map__10920):map__10920);var app = map__10920__$1;var e_films = cljs.core.get.call(null,map__10920__$1,new cljs.core.Keyword(null,"e-films","e-films",1843209081));if(typeof nn.menu.t10921 !== 'undefined')
{} else
{
/**
* @constructor
*/
nn.menu.t10921 = (function (e_films,app,map__10920,owner,p__10867,video_widget,meta10922){
this.e_films = e_films;
this.app = app;
this.map__10920 = map__10920;
this.owner = owner;
this.p__10867 = p__10867;
this.video_widget = video_widget;
this.meta10922 = meta10922;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
nn.menu.t10921.cljs$lang$type = true;
nn.menu.t10921.cljs$lang$ctorStr = "nn.menu/t10921";
nn.menu.t10921.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"nn.menu/t10921");
});
nn.menu.t10921.prototype.om$core$IRenderState$ = true;
nn.menu.t10921.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__10924){var self__ = this;
var map__10925 = p__10924;var map__10925__$1 = ((cljs.core.seq_QMARK_.call(null,map__10925))?cljs.core.apply.call(null,cljs.core.hash_map,map__10925):map__10925);var color = cljs.core.get.call(null,map__10925__$1,new cljs.core.Keyword(null,"color","color",1108746965));var selected = cljs.core.get.call(null,map__10925__$1,new cljs.core.Keyword(null,"selected","selected",2205476365));var hovered = cljs.core.get.call(null,map__10925__$1,new cljs.core.Keyword(null,"hovered","hovered",2114939469));var chans = cljs.core.get.call(null,map__10925__$1,new cljs.core.Keyword(null,"chans","chans",1108527827));var ___$1 = this;return React.DOM.div({"className": "full flex mobile"},cljs.core.apply.call(null,om.dom.div,{"style": {"background": (cljs.core.truth_(hovered)?[cljs.core.str("url("),cljs.core.str(hovered),cljs.core.str(")")].join(''):[cljs.core.str((function (){var or__3443__auto__ = color;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return nn.menu.hsl.call(null,175,100,61);
}
})()),cljs.core.str(" "),cljs.core.str("url("),cljs.core.str("http://i.imgur.com/fPRkry0.png)")].join(''))}, "className": "vid-frame"},om.core.build_all.call(null,nn.menu.iframe,self__.e_films,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),chans,new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),selected], null)], null))),om.core.build.call(null,nn.menu.mobile_scroll,self__.e_films,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),chans,new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),selected], null)], null)),cljs.core.apply.call(null,om.dom.div,{"style": {"padding-left": "10px"}, "className": ""},(cljs.core.truth_(selected)?(function (){var e_film = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p1__10866_SHARP_){return cljs.core._EQ_.call(null,p1__10866_SHARP_.call(null,new cljs.core.Keyword(null,"nid","nid",1014013307)),selected);
}),self__.app.call(null,new cljs.core.Keyword(null,"e-films","e-films",1843209081))));return React.DOM.i({"onClick": (function (){return cljs.core.async.put_BANG_.call(null,chans.call(null,new cljs.core.Keyword(null,"root-chan","root-chan",4395197647)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clicked","clicked",1874428825),null], null));
}), "className": "title"},e_film.call(null,new cljs.core.Keyword(null,"title","title",1124275658)));
})():null),((cljs.core.not.call(null,self__.e_films))?"loading":om.core.build_all.call(null,nn.menu.e_film,self__.e_films,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),chans,new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),selected], null)], null)))));
});
nn.menu.t10921.prototype.om$core$IDidMount$ = true;
nn.menu.t10921.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return null;
});
nn.menu.t10921.prototype.om$core$IWillMount$ = true;
nn.menu.t10921.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;nn.menu.xhr.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",4231316563),"GET",new cljs.core.Keyword(null,"url","url",1014020321),nn.menu.url,new cljs.core.Keyword(null,"on-complete","on-complete",2943599833),(function (p1__10864_SHARP_){return om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"e-films","e-films",1843209081),(function (___$2){return p1__10864_SHARP_;
}));
}),new cljs.core.Keyword(null,"on-error","on-error",1418576908),(function (p1__10865_SHARP_){return cljs.core.print.call(null,p1__10865_SHARP_);
})], null));
var root_chan = om.core.get_state.call(null,self__.owner,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chans","chans",1108527827),new cljs.core.Keyword(null,"root-chan","root-chan",4395197647)], null));var c__6192__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_10948){var state_val_10949 = (state_10948[1]);if((state_val_10949 === 1))
{var state_10948__$1 = state_10948;var statearr_10950_10972 = state_10948__$1;(statearr_10950_10972[2] = null);
(statearr_10950_10972[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10949 === 2))
{var state_10948__$1 = state_10948;if(true)
{var statearr_10951_10973 = state_10948__$1;(statearr_10951_10973[1] = 4);
} else
{var statearr_10952_10974 = state_10948__$1;(statearr_10952_10974[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10949 === 3))
{var inst_10946 = (state_10948[2]);var state_10948__$1 = state_10948;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10948__$1,inst_10946);
} else
{if((state_val_10949 === 4))
{var state_10948__$1 = state_10948;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10948__$1,7,root_chan);
} else
{if((state_val_10949 === 5))
{var state_10948__$1 = state_10948;var statearr_10953_10975 = state_10948__$1;(statearr_10953_10975[2] = null);
(statearr_10953_10975[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10949 === 6))
{var inst_10944 = (state_10948[2]);var state_10948__$1 = state_10948;var statearr_10954_10976 = state_10948__$1;(statearr_10954_10976[2] = inst_10944);
(statearr_10954_10976[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10949 === 7))
{var inst_10930 = (state_10948[2]);var inst_10931 = cljs.core.nth.call(null,inst_10930,0,null);var inst_10932 = cljs.core.nth.call(null,inst_10930,1,null);var state_10948__$1 = (function (){var statearr_10955 = state_10948;(statearr_10955[7] = inst_10932);
return statearr_10955;
})();var G__10956_10977 = inst_10931;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"color","color",1108746965),G__10956_10977))
{var statearr_10957_10978 = state_10948__$1;(statearr_10957_10978[1] = 11);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"clicked","clicked",1874428825),G__10956_10977))
{var statearr_10958_10979 = state_10948__$1;(statearr_10958_10979[1] = 10);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"hovered","hovered",2114939469),G__10956_10977))
{var statearr_10959_10980 = state_10948__$1;(statearr_10959_10980[1] = 9);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_10931)].join('')));
} else
{}
}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10949 === 8))
{var inst_10940 = (state_10948[2]);var state_10948__$1 = (function (){var statearr_10960 = state_10948;(statearr_10960[8] = inst_10940);
return statearr_10960;
})();var statearr_10961_10981 = state_10948__$1;(statearr_10961_10981[2] = null);
(statearr_10961_10981[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10949 === 9))
{var inst_10932 = (state_10948[7]);var inst_10933 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"hovered","hovered",2114939469),inst_10932);var state_10948__$1 = state_10948;var statearr_10962_10982 = state_10948__$1;(statearr_10962_10982[2] = inst_10933);
(statearr_10962_10982[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10949 === 10))
{var inst_10932 = (state_10948[7]);var inst_10935 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",2205476365),inst_10932);var state_10948__$1 = state_10948;var statearr_10963_10983 = state_10948__$1;(statearr_10963_10983[2] = inst_10935);
(statearr_10963_10983[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10949 === 11))
{var inst_10932 = (state_10948[7]);var inst_10937 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"color","color",1108746965),inst_10932);var state_10948__$1 = state_10948;var statearr_10964_10984 = state_10948__$1;(statearr_10964_10984[2] = inst_10937);
(statearr_10964_10984[1] = 8);
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
var state_machine__6178__auto____0 = (function (){var statearr_10968 = [null,null,null,null,null,null,null,null,null];(statearr_10968[0] = state_machine__6178__auto__);
(statearr_10968[1] = 1);
return statearr_10968;
});
var state_machine__6178__auto____1 = (function (state_10948){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_10948);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e10969){if((e10969 instanceof Object))
{var ex__6181__auto__ = e10969;var statearr_10970_10985 = state_10948;(statearr_10970_10985[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10948);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10969;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10986 = state_10948;
state_10948 = G__10986;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_10948){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_10948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_10971 = f__6193__auto__.call(null);(statearr_10971[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_10971;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return c__6192__auto__;
});
nn.menu.t10921.prototype.om$core$IInitState$ = true;
nn.menu.t10921.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"chans","chans",1108527827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"root-chan","root-chan",4395197647),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,1))], null)], null);
});
nn.menu.t10921.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10923){var self__ = this;
var _10923__$1 = this;return self__.meta10922;
});
nn.menu.t10921.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10923,meta10922__$1){var self__ = this;
var _10923__$1 = this;return (new nn.menu.t10921(self__.e_films,self__.app,self__.map__10920,self__.owner,self__.p__10867,self__.video_widget,meta10922__$1));
});
nn.menu.__GT_t10921 = (function __GT_t10921(e_films__$1,app__$1,map__10920__$2,owner__$1,p__10867__$1,video_widget__$1,meta10922){return (new nn.menu.t10921(e_films__$1,app__$1,map__10920__$2,owner__$1,p__10867__$1,video_widget__$1,meta10922));
});
}
return (new nn.menu.t10921(e_films,app,map__10920__$1,owner,p__10867,video_widget,null));
});
om.core.root.call(null,nn.menu.video_widget,nn.menu.app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",4427965699),goog.dom.getElement("menu"),new cljs.core.Keyword(null,"tx-listen","tx-listen",666878114),(function (tx_data,root_cursor){return cljs.core.println.call(null,tx_data);
})], null));

//# sourceMappingURL=menu.js.map