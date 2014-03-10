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
nn.menu.xhr = (function xhr(p__18433){var map__18435 = p__18433;var map__18435__$1 = ((cljs.core.seq_QMARK_.call(null,map__18435))?cljs.core.apply.call(null,cljs.core.hash_map,map__18435):map__18435);var on_error = cljs.core.get.call(null,map__18435__$1,new cljs.core.Keyword(null,"on-error","on-error",1418576908));var on_complete = cljs.core.get.call(null,map__18435__$1,new cljs.core.Keyword(null,"on-complete","on-complete",2943599833));var url = cljs.core.get.call(null,map__18435__$1,new cljs.core.Keyword(null,"url","url",1014020321));var method = cljs.core.get.call(null,map__18435__$1,new cljs.core.Keyword(null,"method","method",4231316563));var xhr__$1 = (new goog.net.XhrIo());goog.events.listen(xhr__$1,goog.net.EventType.SUCCESS,(function (e){return on_complete.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map_indexed.call(null,(function (p1__18430_SHARP_,p2__18431_SHARP_){return cljs.core.conj.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nid","nid",1014013307),p1__18430_SHARP_], null),p2__18431_SHARP_);
}),cljs.core.map.call(null,(function (p1__18432_SHARP_){return cljs.core.select_keys.call(null,p1__18432_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Keyword(null,"title","title",1124275658),new cljs.core.Keyword(null,"description","description",3584325486),new cljs.core.Keyword(null,"thumbnail","thumbnail",2344436830)], null));
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
nn.menu.shades = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [255,145,121], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [204,31,25], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [95,127,153], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [25,124,204], null)], null);
nn.menu.on_click = (function on_click(owner,chan,nid,selected){om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core.not.call(null,selected));
return cljs.core.async.put_BANG_.call(null,chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clicked","clicked",1874428825),nid], null));
});
nn.menu.range_change = (function range_change(owner,chan,app){var val = om.core.get_node.call(null,owner,"range").value;var id = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (val){
return (function (p1__18436_SHARP_){return cljs.core._EQ_.call(null,[cljs.core.str(p1__18436_SHARP_.call(null,new cljs.core.Keyword(null,"nid","nid",1014013307)))].join(''),val);
});})(val))
,cljs.core.deref.call(null,app))));return cljs.core.async.put_BANG_.call(null,chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clicked","clicked",1874428825),parseInt(val)], null));
});
nn.menu.e_film = (function e_film(p__18437,owner){var map__18444 = p__18437;var map__18444__$1 = ((cljs.core.seq_QMARK_.call(null,map__18444))?cljs.core.apply.call(null,cljs.core.hash_map,map__18444):map__18444);var description = cljs.core.get.call(null,map__18444__$1,new cljs.core.Keyword(null,"description","description",3584325486));var thumbnail = cljs.core.get.call(null,map__18444__$1,new cljs.core.Keyword(null,"thumbnail","thumbnail",2344436830));var title = cljs.core.get.call(null,map__18444__$1,new cljs.core.Keyword(null,"title","title",1124275658));var id = cljs.core.get.call(null,map__18444__$1,new cljs.core.Keyword(null,"id","id",1013907597));var nid = cljs.core.get.call(null,map__18444__$1,new cljs.core.Keyword(null,"nid","nid",1014013307));if(typeof nn.menu.t18445 !== 'undefined')
{} else
{
/**
* @constructor
*/
nn.menu.t18445 = (function (nid,id,title,thumbnail,description,map__18444,owner,p__18437,e_film,meta18446){
this.nid = nid;
this.id = id;
this.title = title;
this.thumbnail = thumbnail;
this.description = description;
this.map__18444 = map__18444;
this.owner = owner;
this.p__18437 = p__18437;
this.e_film = e_film;
this.meta18446 = meta18446;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
nn.menu.t18445.cljs$lang$type = true;
nn.menu.t18445.cljs$lang$ctorStr = "nn.menu/t18445";
nn.menu.t18445.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"nn.menu/t18445");
});
nn.menu.t18445.prototype.om$core$IRenderState$ = true;
nn.menu.t18445.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__18448){var self__ = this;
var map__18449 = p__18448;var map__18449__$1 = ((cljs.core.seq_QMARK_.call(null,map__18449))?cljs.core.apply.call(null,cljs.core.hash_map,map__18449):map__18449);var selected = cljs.core.get.call(null,map__18449__$1,new cljs.core.Keyword(null,"selected","selected",2205476365));var hovered = cljs.core.get.call(null,map__18449__$1,new cljs.core.Keyword(null,"hovered","hovered",2114939469));var root_chan = cljs.core.get.call(null,map__18449__$1,new cljs.core.Keyword(null,"root-chan","root-chan",4395197647));var ___$1 = this;return React.DOM.div({"onClick": (function (){return nn.menu.on_click.call(null,self__.owner,root_chan,self__.nid,selected);
}), "className": (cljs.core.truth_(hovered)?"title now-reading trans":"title trans"), "style": cljs.core.clj__GT_js.call(null,((cljs.core._EQ_.call(null,selected,self__.nid))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",2685668404),"none"], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",4502531971),"0px"], null))), "onMouseLeave": (function (){return nn.menu.on_hover.call(null,self__.owner,root_chan);
}), "onMouseEnter": (function (){return nn.menu.on_hover.call(null,self__.owner,root_chan,cljs.core.deref.call(null,self__.thumbnail).call(null,new cljs.core.Keyword(null,"hqDefault","hqDefault",4595730538)));
})},self__.title);
});
nn.menu.t18445.prototype.om$core$IWillUpdate$ = true;
nn.menu.t18445.prototype.om$core$IWillUpdate$will_update$arity$3 = (function (_,next_props,next_state){var self__ = this;
var ___$1 = this;if((cljs.core._EQ_.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",2205476365)),self__.nid)) && (cljs.core._EQ_.call(null,next_state.call(null,new cljs.core.Keyword(null,"selected","selected",2205476365)),self__.nid)))
{return om.core.get_node.call(null,self__.owner).classList.add("work");
} else
{return om.core.get_node.call(null,self__.owner).classList.remove("work");
}
});
nn.menu.t18445.prototype.om$core$IDidUpdate$ = true;
nn.menu.t18445.prototype.om$core$IDidUpdate$did_update$arity$3 = (function (this$,prev_props,prev_state){var self__ = this;
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
nn.menu.t18445.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18447){var self__ = this;
var _18447__$1 = this;return self__.meta18446;
});
nn.menu.t18445.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18447,meta18446__$1){var self__ = this;
var _18447__$1 = this;return (new nn.menu.t18445(self__.nid,self__.id,self__.title,self__.thumbnail,self__.description,self__.map__18444,self__.owner,self__.p__18437,self__.e_film,meta18446__$1));
});
nn.menu.__GT_t18445 = (function __GT_t18445(nid__$1,id__$1,title__$1,thumbnail__$1,description__$1,map__18444__$2,owner__$1,p__18437__$1,e_film__$1,meta18446){return (new nn.menu.t18445(nid__$1,id__$1,title__$1,thumbnail__$1,description__$1,map__18444__$2,owner__$1,p__18437__$1,e_film__$1,meta18446));
});
}
return (new nn.menu.t18445(nid,id,title,thumbnail,description,map__18444__$1,owner,p__18437,e_film,null));
});
nn.menu.mobile_scroll = (function mobile_scroll(app,owner){if(typeof nn.menu.t18456 !== 'undefined')
{} else
{
/**
* @constructor
*/
nn.menu.t18456 = (function (owner,app,mobile_scroll,meta18457){
this.owner = owner;
this.app = app;
this.mobile_scroll = mobile_scroll;
this.meta18457 = meta18457;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
nn.menu.t18456.cljs$lang$type = true;
nn.menu.t18456.cljs$lang$ctorStr = "nn.menu/t18456";
nn.menu.t18456.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"nn.menu/t18456");
});
nn.menu.t18456.prototype.om$core$IRenderState$ = true;
nn.menu.t18456.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__18459){var self__ = this;
var map__18460 = p__18459;var map__18460__$1 = ((cljs.core.seq_QMARK_.call(null,map__18460))?cljs.core.apply.call(null,cljs.core.hash_map,map__18460):map__18460);var selected = cljs.core.get.call(null,map__18460__$1,new cljs.core.Keyword(null,"selected","selected",2205476365));var root_chan = cljs.core.get.call(null,map__18460__$1,new cljs.core.Keyword(null,"root-chan","root-chan",4395197647));var ___$1 = this;var val_map = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p1__18450_SHARP_){return cljs.core._EQ_.call(null,p1__18450_SHARP_.call(null,new cljs.core.Keyword(null,"id","id",1013907597)),selected);
}),self__.app));var val = [cljs.core.str(val_map.call(null,new cljs.core.Keyword(null,"nid","nid",1014013307)))].join('');return om.dom.input.call(null,{"value": ((cljs.core._EQ_.call(null,[cljs.core.str(selected)].join(''),""))?"0":selected), "onChange": (function (){return nn.menu.range_change.call(null,self__.owner,root_chan,self__.app);
}), "ref": "range", "max": [cljs.core.str((cljs.core.count.call(null,self__.app) - 1))].join(''), "min": "0", "type": "range", "className": "flex scroller"},null);
});
nn.menu.t18456.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18458){var self__ = this;
var _18458__$1 = this;return self__.meta18457;
});
nn.menu.t18456.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18458,meta18457__$1){var self__ = this;
var _18458__$1 = this;return (new nn.menu.t18456(self__.owner,self__.app,self__.mobile_scroll,meta18457__$1));
});
nn.menu.__GT_t18456 = (function __GT_t18456(owner__$1,app__$1,mobile_scroll__$1,meta18457){return (new nn.menu.t18456(owner__$1,app__$1,mobile_scroll__$1,meta18457));
});
}
return (new nn.menu.t18456(owner,app,mobile_scroll,null));
});
nn.menu.iframe = (function iframe(p__18461,owner){var map__18468 = p__18461;var map__18468__$1 = ((cljs.core.seq_QMARK_.call(null,map__18468))?cljs.core.apply.call(null,cljs.core.hash_map,map__18468):map__18468);var id = cljs.core.get.call(null,map__18468__$1,new cljs.core.Keyword(null,"id","id",1013907597));var nid = cljs.core.get.call(null,map__18468__$1,new cljs.core.Keyword(null,"nid","nid",1014013307));if(typeof nn.menu.t18469 !== 'undefined')
{} else
{
/**
* @constructor
*/
nn.menu.t18469 = (function (nid,id,map__18468,owner,p__18461,iframe,meta18470){
this.nid = nid;
this.id = id;
this.map__18468 = map__18468;
this.owner = owner;
this.p__18461 = p__18461;
this.iframe = iframe;
this.meta18470 = meta18470;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
nn.menu.t18469.cljs$lang$type = true;
nn.menu.t18469.cljs$lang$ctorStr = "nn.menu/t18469";
nn.menu.t18469.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"nn.menu/t18469");
});
nn.menu.t18469.prototype.om$core$IRenderState$ = true;
nn.menu.t18469.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__18472){var self__ = this;
var map__18473 = p__18472;var map__18473__$1 = ((cljs.core.seq_QMARK_.call(null,map__18473))?cljs.core.apply.call(null,cljs.core.hash_map,map__18473):map__18473);var selected = cljs.core.get.call(null,map__18473__$1,new cljs.core.Keyword(null,"selected","selected",2205476365));var root_chan = cljs.core.get.call(null,map__18473__$1,new cljs.core.Keyword(null,"root-chan","root-chan",4395197647));var ___$1 = this;return React.DOM.iframe({"style": cljs.core.clj__GT_js.call(null,((cljs.core._EQ_.call(null,selected,self__.nid))?cljs.core.PersistentArrayMap.EMPTY:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",2685668404),"none"], null))), "frameBorder": "0", "className": "full", "src": [cljs.core.str("//www.youtube.com/embed/"),cljs.core.str(self__.id)].join('')},"");
});
nn.menu.t18469.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18471){var self__ = this;
var _18471__$1 = this;return self__.meta18470;
});
nn.menu.t18469.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18471,meta18470__$1){var self__ = this;
var _18471__$1 = this;return (new nn.menu.t18469(self__.nid,self__.id,self__.map__18468,self__.owner,self__.p__18461,self__.iframe,meta18470__$1));
});
nn.menu.__GT_t18469 = (function __GT_t18469(nid__$1,id__$1,map__18468__$2,owner__$1,p__18461__$1,iframe__$1,meta18470){return (new nn.menu.t18469(nid__$1,id__$1,map__18468__$2,owner__$1,p__18461__$1,iframe__$1,meta18470));
});
}
return (new nn.menu.t18469(nid,id,map__18468__$1,owner,p__18461,iframe,null));
});
nn.menu.video_widget = (function video_widget(p__18477,owner){var map__18530 = p__18477;var map__18530__$1 = ((cljs.core.seq_QMARK_.call(null,map__18530))?cljs.core.apply.call(null,cljs.core.hash_map,map__18530):map__18530);var app = map__18530__$1;var e_films = cljs.core.get.call(null,map__18530__$1,new cljs.core.Keyword(null,"e-films","e-films",1843209081));if(typeof nn.menu.t18531 !== 'undefined')
{} else
{
/**
* @constructor
*/
nn.menu.t18531 = (function (e_films,app,map__18530,owner,p__18477,video_widget,meta18532){
this.e_films = e_films;
this.app = app;
this.map__18530 = map__18530;
this.owner = owner;
this.p__18477 = p__18477;
this.video_widget = video_widget;
this.meta18532 = meta18532;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
nn.menu.t18531.cljs$lang$type = true;
nn.menu.t18531.cljs$lang$ctorStr = "nn.menu/t18531";
nn.menu.t18531.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"nn.menu/t18531");
});
nn.menu.t18531.prototype.om$core$IRenderState$ = true;
nn.menu.t18531.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__18534){var self__ = this;
var map__18535 = p__18534;var map__18535__$1 = ((cljs.core.seq_QMARK_.call(null,map__18535))?cljs.core.apply.call(null,cljs.core.hash_map,map__18535):map__18535);var color = cljs.core.get.call(null,map__18535__$1,new cljs.core.Keyword(null,"color","color",1108746965));var selected = cljs.core.get.call(null,map__18535__$1,new cljs.core.Keyword(null,"selected","selected",2205476365));var hovered = cljs.core.get.call(null,map__18535__$1,new cljs.core.Keyword(null,"hovered","hovered",2114939469));var chans = cljs.core.get.call(null,map__18535__$1,new cljs.core.Keyword(null,"chans","chans",1108527827));var ___$1 = this;return React.DOM.div({"className": "full flex mobile"},cljs.core.apply.call(null,om.dom.div,{"style": {"background": (cljs.core.truth_(hovered)?[cljs.core.str("url("),cljs.core.str(hovered),cljs.core.str(")")].join(''):[cljs.core.str((function (){var or__3443__auto__ = color;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return nn.menu.hsl.call(null,175,100,61);
}
})()),cljs.core.str(" "),cljs.core.str("url("),cljs.core.str("http://i.imgur.com/fPRkry0.png)")].join(''))}, "className": "vid-frame"},om.core.build_all.call(null,nn.menu.iframe,self__.e_films,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),chans,new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),selected], null)], null))),om.core.build.call(null,nn.menu.mobile_scroll,self__.e_films,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),chans,new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),selected], null)], null)),cljs.core.apply.call(null,om.dom.div,{"style": {"padding-left": "10px"}, "className": ""},(cljs.core.truth_(selected)?(function (){var e_film = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p1__18476_SHARP_){return cljs.core._EQ_.call(null,p1__18476_SHARP_.call(null,new cljs.core.Keyword(null,"nid","nid",1014013307)),selected);
}),self__.app.call(null,new cljs.core.Keyword(null,"e-films","e-films",1843209081))));return React.DOM.i({"onClick": (function (){return cljs.core.async.put_BANG_.call(null,chans.call(null,new cljs.core.Keyword(null,"root-chan","root-chan",4395197647)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clicked","clicked",1874428825),null], null));
}), "className": "title"},e_film.call(null,new cljs.core.Keyword(null,"title","title",1124275658)));
})():null),((cljs.core.not.call(null,self__.e_films))?"loading":om.core.build_all.call(null,nn.menu.e_film,self__.e_films,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),chans,new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),selected], null)], null)))));
});
nn.menu.t18531.prototype.om$core$IDidMount$ = true;
nn.menu.t18531.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return null;
});
nn.menu.t18531.prototype.om$core$IWillMount$ = true;
nn.menu.t18531.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;nn.menu.xhr.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",4231316563),"GET",new cljs.core.Keyword(null,"url","url",1014020321),nn.menu.url,new cljs.core.Keyword(null,"on-complete","on-complete",2943599833),(function (p1__18474_SHARP_){return om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"e-films","e-films",1843209081),(function (___$2){return p1__18474_SHARP_;
}));
}),new cljs.core.Keyword(null,"on-error","on-error",1418576908),(function (p1__18475_SHARP_){return cljs.core.print.call(null,p1__18475_SHARP_);
})], null));
var root_chan = om.core.get_state.call(null,self__.owner,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chans","chans",1108527827),new cljs.core.Keyword(null,"root-chan","root-chan",4395197647)], null));var c__6192__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_18558){var state_val_18559 = (state_18558[1]);if((state_val_18559 === 1))
{var state_18558__$1 = state_18558;var statearr_18560_18582 = state_18558__$1;(statearr_18560_18582[2] = null);
(statearr_18560_18582[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18559 === 2))
{var state_18558__$1 = state_18558;if(true)
{var statearr_18561_18583 = state_18558__$1;(statearr_18561_18583[1] = 4);
} else
{var statearr_18562_18584 = state_18558__$1;(statearr_18562_18584[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18559 === 3))
{var inst_18556 = (state_18558[2]);var state_18558__$1 = state_18558;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18558__$1,inst_18556);
} else
{if((state_val_18559 === 4))
{var state_18558__$1 = state_18558;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18558__$1,7,root_chan);
} else
{if((state_val_18559 === 5))
{var state_18558__$1 = state_18558;var statearr_18563_18585 = state_18558__$1;(statearr_18563_18585[2] = null);
(statearr_18563_18585[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18559 === 6))
{var inst_18554 = (state_18558[2]);var state_18558__$1 = state_18558;var statearr_18564_18586 = state_18558__$1;(statearr_18564_18586[2] = inst_18554);
(statearr_18564_18586[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18559 === 7))
{var inst_18540 = (state_18558[2]);var inst_18541 = cljs.core.nth.call(null,inst_18540,0,null);var inst_18542 = cljs.core.nth.call(null,inst_18540,1,null);var state_18558__$1 = (function (){var statearr_18565 = state_18558;(statearr_18565[7] = inst_18542);
return statearr_18565;
})();var G__18566_18587 = inst_18541;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"color","color",1108746965),G__18566_18587))
{var statearr_18567_18588 = state_18558__$1;(statearr_18567_18588[1] = 11);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"clicked","clicked",1874428825),G__18566_18587))
{var statearr_18568_18589 = state_18558__$1;(statearr_18568_18589[1] = 10);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"hovered","hovered",2114939469),G__18566_18587))
{var statearr_18569_18590 = state_18558__$1;(statearr_18569_18590[1] = 9);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_18541)].join('')));
} else
{}
}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18559 === 8))
{var inst_18550 = (state_18558[2]);var state_18558__$1 = (function (){var statearr_18570 = state_18558;(statearr_18570[8] = inst_18550);
return statearr_18570;
})();var statearr_18571_18591 = state_18558__$1;(statearr_18571_18591[2] = null);
(statearr_18571_18591[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18559 === 9))
{var inst_18542 = (state_18558[7]);var inst_18543 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"hovered","hovered",2114939469),inst_18542);var state_18558__$1 = state_18558;var statearr_18572_18592 = state_18558__$1;(statearr_18572_18592[2] = inst_18543);
(statearr_18572_18592[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18559 === 10))
{var inst_18542 = (state_18558[7]);var inst_18545 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",2205476365),inst_18542);var state_18558__$1 = state_18558;var statearr_18573_18593 = state_18558__$1;(statearr_18573_18593[2] = inst_18545);
(statearr_18573_18593[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18559 === 11))
{var inst_18542 = (state_18558[7]);var inst_18547 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"color","color",1108746965),inst_18542);var state_18558__$1 = state_18558;var statearr_18574_18594 = state_18558__$1;(statearr_18574_18594[2] = inst_18547);
(statearr_18574_18594[1] = 8);
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
var state_machine__6178__auto____0 = (function (){var statearr_18578 = [null,null,null,null,null,null,null,null,null];(statearr_18578[0] = state_machine__6178__auto__);
(statearr_18578[1] = 1);
return statearr_18578;
});
var state_machine__6178__auto____1 = (function (state_18558){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_18558);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e18579){if((e18579 instanceof Object))
{var ex__6181__auto__ = e18579;var statearr_18580_18595 = state_18558;(statearr_18580_18595[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18558);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18579;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18596 = state_18558;
state_18558 = G__18596;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_18558){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_18558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_18581 = f__6193__auto__.call(null);(statearr_18581[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_18581;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return c__6192__auto__;
});
nn.menu.t18531.prototype.om$core$IInitState$ = true;
nn.menu.t18531.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"chans","chans",1108527827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"root-chan","root-chan",4395197647),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,1))], null)], null);
});
nn.menu.t18531.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18533){var self__ = this;
var _18533__$1 = this;return self__.meta18532;
});
nn.menu.t18531.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18533,meta18532__$1){var self__ = this;
var _18533__$1 = this;return (new nn.menu.t18531(self__.e_films,self__.app,self__.map__18530,self__.owner,self__.p__18477,self__.video_widget,meta18532__$1));
});
nn.menu.__GT_t18531 = (function __GT_t18531(e_films__$1,app__$1,map__18530__$2,owner__$1,p__18477__$1,video_widget__$1,meta18532){return (new nn.menu.t18531(e_films__$1,app__$1,map__18530__$2,owner__$1,p__18477__$1,video_widget__$1,meta18532));
});
}
return (new nn.menu.t18531(e_films,app,map__18530__$1,owner,p__18477,video_widget,null));
});
om.core.root.call(null,nn.menu.video_widget,nn.menu.app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",4427965699),goog.dom.getElement("menu"),new cljs.core.Keyword(null,"tx-listen","tx-listen",666878114),(function (tx_data,root_cursor){return cljs.core.println.call(null,tx_data);
})], null));
nn.menu.svg = (function svg(app,owner){if(typeof nn.menu.t18600 !== 'undefined')
{} else
{
/**
* @constructor
*/
nn.menu.t18600 = (function (owner,app,svg,meta18601){
this.owner = owner;
this.app = app;
this.svg = svg;
this.meta18601 = meta18601;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
nn.menu.t18600.cljs$lang$type = true;
nn.menu.t18600.cljs$lang$ctorStr = "nn.menu/t18600";
nn.menu.t18600.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"nn.menu/t18600");
});
nn.menu.t18600.prototype.om$core$IRenderState$ = true;
nn.menu.t18600.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;return React.DOM.svg(null,React.DOM.rect({"style": {"fill": "black", "stroke": "red"}, "width": 100, "height": 100, "y": 10, "x": 10},null));
});
nn.menu.t18600.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18602){var self__ = this;
var _18602__$1 = this;return self__.meta18601;
});
nn.menu.t18600.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18602,meta18601__$1){var self__ = this;
var _18602__$1 = this;return (new nn.menu.t18600(self__.owner,self__.app,self__.svg,meta18601__$1));
});
nn.menu.__GT_t18600 = (function __GT_t18600(owner__$1,app__$1,svg__$1,meta18601){return (new nn.menu.t18600(owner__$1,app__$1,svg__$1,meta18601));
});
}
return (new nn.menu.t18600(owner,app,svg,null));
});
om.core.root.call(null,nn.menu.svg,nn.menu.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),goog.dom.getElement("svg")], null));

//# sourceMappingURL=menu.js.map