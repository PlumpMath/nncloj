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
nn.menu.xhr = (function xhr(p__13391){var map__13393 = p__13391;var map__13393__$1 = ((cljs.core.seq_QMARK_.call(null,map__13393))?cljs.core.apply.call(null,cljs.core.hash_map,map__13393):map__13393);var on_error = cljs.core.get.call(null,map__13393__$1,new cljs.core.Keyword(null,"on-error","on-error",1418576908));var on_complete = cljs.core.get.call(null,map__13393__$1,new cljs.core.Keyword(null,"on-complete","on-complete",2943599833));var url = cljs.core.get.call(null,map__13393__$1,new cljs.core.Keyword(null,"url","url",1014020321));var method = cljs.core.get.call(null,map__13393__$1,new cljs.core.Keyword(null,"method","method",4231316563));var xhr__$1 = (new goog.net.XhrIo());goog.events.listen(xhr__$1,goog.net.EventType.SUCCESS,(function (e){return on_complete.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map_indexed.call(null,(function (p1__13388_SHARP_,p2__13389_SHARP_){return cljs.core.conj.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nid","nid",1014013307),p1__13388_SHARP_], null),p2__13389_SHARP_);
}),cljs.core.map.call(null,(function (p1__13390_SHARP_){return cljs.core.select_keys.call(null,p1__13390_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Keyword(null,"title","title",1124275658),new cljs.core.Keyword(null,"description","description",3584325486),new cljs.core.Keyword(null,"thumbnail","thumbnail",2344436830)], null));
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
return (function (p1__13394_SHARP_){return cljs.core._EQ_.call(null,[cljs.core.str(p1__13394_SHARP_.call(null,new cljs.core.Keyword(null,"nid","nid",1014013307)))].join(''),val);
});})(val))
,cljs.core.deref.call(null,app))));return cljs.core.async.put_BANG_.call(null,chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clicked","clicked",1874428825),parseInt(val)], null));
});
nn.menu.e_film = (function e_film(p__13395,owner){var map__13402 = p__13395;var map__13402__$1 = ((cljs.core.seq_QMARK_.call(null,map__13402))?cljs.core.apply.call(null,cljs.core.hash_map,map__13402):map__13402);var description = cljs.core.get.call(null,map__13402__$1,new cljs.core.Keyword(null,"description","description",3584325486));var thumbnail = cljs.core.get.call(null,map__13402__$1,new cljs.core.Keyword(null,"thumbnail","thumbnail",2344436830));var title = cljs.core.get.call(null,map__13402__$1,new cljs.core.Keyword(null,"title","title",1124275658));var id = cljs.core.get.call(null,map__13402__$1,new cljs.core.Keyword(null,"id","id",1013907597));var nid = cljs.core.get.call(null,map__13402__$1,new cljs.core.Keyword(null,"nid","nid",1014013307));if(typeof nn.menu.t13403 !== 'undefined')
{} else
{
/**
* @constructor
*/
nn.menu.t13403 = (function (nid,id,title,thumbnail,description,map__13402,owner,p__13395,e_film,meta13404){
this.nid = nid;
this.id = id;
this.title = title;
this.thumbnail = thumbnail;
this.description = description;
this.map__13402 = map__13402;
this.owner = owner;
this.p__13395 = p__13395;
this.e_film = e_film;
this.meta13404 = meta13404;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
nn.menu.t13403.cljs$lang$type = true;
nn.menu.t13403.cljs$lang$ctorStr = "nn.menu/t13403";
nn.menu.t13403.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"nn.menu/t13403");
});
nn.menu.t13403.prototype.om$core$IRenderState$ = true;
nn.menu.t13403.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__13406){var self__ = this;
var map__13407 = p__13406;var map__13407__$1 = ((cljs.core.seq_QMARK_.call(null,map__13407))?cljs.core.apply.call(null,cljs.core.hash_map,map__13407):map__13407);var selected = cljs.core.get.call(null,map__13407__$1,new cljs.core.Keyword(null,"selected","selected",2205476365));var hovered = cljs.core.get.call(null,map__13407__$1,new cljs.core.Keyword(null,"hovered","hovered",2114939469));var root_chan = cljs.core.get.call(null,map__13407__$1,new cljs.core.Keyword(null,"root-chan","root-chan",4395197647));var ___$1 = this;return React.DOM.div({"onClick": (function (){return nn.menu.on_click.call(null,self__.owner,root_chan,self__.nid,selected);
}), "className": (cljs.core.truth_(hovered)?"title now-reading trans":"title trans"), "style": cljs.core.clj__GT_js.call(null,((cljs.core._EQ_.call(null,selected,self__.nid))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",2685668404),"none"], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",4502531971),"0px"], null))), "onMouseLeave": (function (){return nn.menu.on_hover.call(null,self__.owner,root_chan);
}), "onMouseEnter": (function (){return nn.menu.on_hover.call(null,self__.owner,root_chan,cljs.core.deref.call(null,self__.thumbnail).call(null,new cljs.core.Keyword(null,"hqDefault","hqDefault",4595730538)));
})},(function (){var or__3443__auto__ = self__.title;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return "test";
}
})());
});
nn.menu.t13403.prototype.om$core$IWillUpdate$ = true;
nn.menu.t13403.prototype.om$core$IWillUpdate$will_update$arity$3 = (function (_,next_props,next_state){var self__ = this;
var ___$1 = this;if((cljs.core._EQ_.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",2205476365)),self__.nid)) && (cljs.core._EQ_.call(null,next_state.call(null,new cljs.core.Keyword(null,"selected","selected",2205476365)),self__.nid)))
{return om.core.get_node.call(null,self__.owner).classList.add("work");
} else
{return om.core.get_node.call(null,self__.owner).classList.remove("work");
}
});
nn.menu.t13403.prototype.om$core$IDidUpdate$ = true;
nn.menu.t13403.prototype.om$core$IDidUpdate$did_update$arity$3 = (function (this$,prev_props,prev_state){var self__ = this;
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
nn.menu.t13403.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13405){var self__ = this;
var _13405__$1 = this;return self__.meta13404;
});
nn.menu.t13403.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13405,meta13404__$1){var self__ = this;
var _13405__$1 = this;return (new nn.menu.t13403(self__.nid,self__.id,self__.title,self__.thumbnail,self__.description,self__.map__13402,self__.owner,self__.p__13395,self__.e_film,meta13404__$1));
});
nn.menu.__GT_t13403 = (function __GT_t13403(nid__$1,id__$1,title__$1,thumbnail__$1,description__$1,map__13402__$2,owner__$1,p__13395__$1,e_film__$1,meta13404){return (new nn.menu.t13403(nid__$1,id__$1,title__$1,thumbnail__$1,description__$1,map__13402__$2,owner__$1,p__13395__$1,e_film__$1,meta13404));
});
}
return (new nn.menu.t13403(nid,id,title,thumbnail,description,map__13402__$1,owner,p__13395,e_film,null));
});
nn.menu.mobile_scroll = (function mobile_scroll(app,owner){if(typeof nn.menu.t13414 !== 'undefined')
{} else
{
/**
* @constructor
*/
nn.menu.t13414 = (function (owner,app,mobile_scroll,meta13415){
this.owner = owner;
this.app = app;
this.mobile_scroll = mobile_scroll;
this.meta13415 = meta13415;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
nn.menu.t13414.cljs$lang$type = true;
nn.menu.t13414.cljs$lang$ctorStr = "nn.menu/t13414";
nn.menu.t13414.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"nn.menu/t13414");
});
nn.menu.t13414.prototype.om$core$IRenderState$ = true;
nn.menu.t13414.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__13417){var self__ = this;
var map__13418 = p__13417;var map__13418__$1 = ((cljs.core.seq_QMARK_.call(null,map__13418))?cljs.core.apply.call(null,cljs.core.hash_map,map__13418):map__13418);var selected = cljs.core.get.call(null,map__13418__$1,new cljs.core.Keyword(null,"selected","selected",2205476365));var root_chan = cljs.core.get.call(null,map__13418__$1,new cljs.core.Keyword(null,"root-chan","root-chan",4395197647));var ___$1 = this;var val_map = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p1__13408_SHARP_){return cljs.core._EQ_.call(null,p1__13408_SHARP_.call(null,new cljs.core.Keyword(null,"id","id",1013907597)),selected);
}),self__.app));var val = [cljs.core.str(val_map.call(null,new cljs.core.Keyword(null,"nid","nid",1014013307)))].join('');return om.dom.input.call(null,{"value": ((cljs.core._EQ_.call(null,[cljs.core.str(selected)].join(''),""))?"0":selected), "onChange": (function (){return nn.menu.range_change.call(null,self__.owner,root_chan,self__.app);
}), "ref": "range", "max": [cljs.core.str((cljs.core.count.call(null,self__.app) - 1))].join(''), "min": "0", "type": "range", "className": "flex scroller"},null);
});
nn.menu.t13414.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13416){var self__ = this;
var _13416__$1 = this;return self__.meta13415;
});
nn.menu.t13414.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13416,meta13415__$1){var self__ = this;
var _13416__$1 = this;return (new nn.menu.t13414(self__.owner,self__.app,self__.mobile_scroll,meta13415__$1));
});
nn.menu.__GT_t13414 = (function __GT_t13414(owner__$1,app__$1,mobile_scroll__$1,meta13415){return (new nn.menu.t13414(owner__$1,app__$1,mobile_scroll__$1,meta13415));
});
}
return (new nn.menu.t13414(owner,app,mobile_scroll,null));
});
nn.menu.iframe = (function iframe(p__13419,owner){var map__13426 = p__13419;var map__13426__$1 = ((cljs.core.seq_QMARK_.call(null,map__13426))?cljs.core.apply.call(null,cljs.core.hash_map,map__13426):map__13426);var id = cljs.core.get.call(null,map__13426__$1,new cljs.core.Keyword(null,"id","id",1013907597));var nid = cljs.core.get.call(null,map__13426__$1,new cljs.core.Keyword(null,"nid","nid",1014013307));if(typeof nn.menu.t13427 !== 'undefined')
{} else
{
/**
* @constructor
*/
nn.menu.t13427 = (function (nid,id,map__13426,owner,p__13419,iframe,meta13428){
this.nid = nid;
this.id = id;
this.map__13426 = map__13426;
this.owner = owner;
this.p__13419 = p__13419;
this.iframe = iframe;
this.meta13428 = meta13428;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
nn.menu.t13427.cljs$lang$type = true;
nn.menu.t13427.cljs$lang$ctorStr = "nn.menu/t13427";
nn.menu.t13427.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"nn.menu/t13427");
});
nn.menu.t13427.prototype.om$core$IRenderState$ = true;
nn.menu.t13427.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__13430){var self__ = this;
var map__13431 = p__13430;var map__13431__$1 = ((cljs.core.seq_QMARK_.call(null,map__13431))?cljs.core.apply.call(null,cljs.core.hash_map,map__13431):map__13431);var selected = cljs.core.get.call(null,map__13431__$1,new cljs.core.Keyword(null,"selected","selected",2205476365));var root_chan = cljs.core.get.call(null,map__13431__$1,new cljs.core.Keyword(null,"root-chan","root-chan",4395197647));var ___$1 = this;return React.DOM.iframe({"style": cljs.core.clj__GT_js.call(null,((cljs.core._EQ_.call(null,selected,self__.nid))?cljs.core.PersistentArrayMap.EMPTY:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",2685668404),"none"], null))), "frameBorder": "0", "className": "full", "src": [cljs.core.str("//www.youtube.com/embed/"),cljs.core.str(self__.id)].join('')},"");
});
nn.menu.t13427.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13429){var self__ = this;
var _13429__$1 = this;return self__.meta13428;
});
nn.menu.t13427.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13429,meta13428__$1){var self__ = this;
var _13429__$1 = this;return (new nn.menu.t13427(self__.nid,self__.id,self__.map__13426,self__.owner,self__.p__13419,self__.iframe,meta13428__$1));
});
nn.menu.__GT_t13427 = (function __GT_t13427(nid__$1,id__$1,map__13426__$2,owner__$1,p__13419__$1,iframe__$1,meta13428){return (new nn.menu.t13427(nid__$1,id__$1,map__13426__$2,owner__$1,p__13419__$1,iframe__$1,meta13428));
});
}
return (new nn.menu.t13427(nid,id,map__13426__$1,owner,p__13419,iframe,null));
});
nn.menu.video_widget = (function video_widget(p__13435,owner){var map__13488 = p__13435;var map__13488__$1 = ((cljs.core.seq_QMARK_.call(null,map__13488))?cljs.core.apply.call(null,cljs.core.hash_map,map__13488):map__13488);var app = map__13488__$1;var e_films = cljs.core.get.call(null,map__13488__$1,new cljs.core.Keyword(null,"e-films","e-films",1843209081));if(typeof nn.menu.t13489 !== 'undefined')
{} else
{
/**
* @constructor
*/
nn.menu.t13489 = (function (e_films,app,map__13488,owner,p__13435,video_widget,meta13490){
this.e_films = e_films;
this.app = app;
this.map__13488 = map__13488;
this.owner = owner;
this.p__13435 = p__13435;
this.video_widget = video_widget;
this.meta13490 = meta13490;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
nn.menu.t13489.cljs$lang$type = true;
nn.menu.t13489.cljs$lang$ctorStr = "nn.menu/t13489";
nn.menu.t13489.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"nn.menu/t13489");
});
nn.menu.t13489.prototype.om$core$IRenderState$ = true;
nn.menu.t13489.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__13492){var self__ = this;
var map__13493 = p__13492;var map__13493__$1 = ((cljs.core.seq_QMARK_.call(null,map__13493))?cljs.core.apply.call(null,cljs.core.hash_map,map__13493):map__13493);var color = cljs.core.get.call(null,map__13493__$1,new cljs.core.Keyword(null,"color","color",1108746965));var selected = cljs.core.get.call(null,map__13493__$1,new cljs.core.Keyword(null,"selected","selected",2205476365));var hovered = cljs.core.get.call(null,map__13493__$1,new cljs.core.Keyword(null,"hovered","hovered",2114939469));var chans = cljs.core.get.call(null,map__13493__$1,new cljs.core.Keyword(null,"chans","chans",1108527827));var ___$1 = this;return React.DOM.div({"className": "full flex mobile"},cljs.core.apply.call(null,om.dom.div,{"style": {"background": (cljs.core.truth_(hovered)?[cljs.core.str("url("),cljs.core.str(hovered),cljs.core.str(")")].join(''):[cljs.core.str((function (){var or__3443__auto__ = color;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return nn.menu.hsl.call(null,175,100,61);
}
})()),cljs.core.str(" "),cljs.core.str("url("),cljs.core.str("http://i.imgur.com/fPRkry0.png)")].join(''))}, "className": "vid-frame"},om.core.build_all.call(null,nn.menu.iframe,self__.e_films,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),chans,new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),selected], null)], null))),om.core.build.call(null,nn.menu.mobile_scroll,self__.e_films,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),chans,new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),selected], null)], null)),cljs.core.apply.call(null,om.dom.div,{"style": {"padding-left": "10px"}, "className": ""},(cljs.core.truth_(selected)?(function (){var e_film = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p1__13434_SHARP_){return cljs.core._EQ_.call(null,p1__13434_SHARP_.call(null,new cljs.core.Keyword(null,"nid","nid",1014013307)),selected);
}),self__.app.call(null,new cljs.core.Keyword(null,"e-films","e-films",1843209081))));return React.DOM.i({"onClick": (function (){return cljs.core.async.put_BANG_.call(null,chans.call(null,new cljs.core.Keyword(null,"root-chan","root-chan",4395197647)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clicked","clicked",1874428825),null], null));
}), "className": "title"},e_film.call(null,new cljs.core.Keyword(null,"title","title",1124275658)));
})():null),((cljs.core.not.call(null,self__.e_films))?"loading":om.core.build_all.call(null,nn.menu.e_film,self__.e_films,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),chans,new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),selected], null)], null)))));
});
nn.menu.t13489.prototype.om$core$IDidMount$ = true;
nn.menu.t13489.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return null;
});
nn.menu.t13489.prototype.om$core$IWillMount$ = true;
nn.menu.t13489.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;nn.menu.xhr.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",4231316563),"GET",new cljs.core.Keyword(null,"url","url",1014020321),nn.menu.url,new cljs.core.Keyword(null,"on-complete","on-complete",2943599833),(function (p1__13432_SHARP_){return om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"e-films","e-films",1843209081),(function (___$2){return p1__13432_SHARP_;
}));
}),new cljs.core.Keyword(null,"on-error","on-error",1418576908),(function (p1__13433_SHARP_){return cljs.core.print.call(null,p1__13433_SHARP_);
})], null));
var root_chan = om.core.get_state.call(null,self__.owner,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chans","chans",1108527827),new cljs.core.Keyword(null,"root-chan","root-chan",4395197647)], null));var c__6192__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_13516){var state_val_13517 = (state_13516[1]);if((state_val_13517 === 1))
{var state_13516__$1 = state_13516;var statearr_13518_13540 = state_13516__$1;(statearr_13518_13540[2] = null);
(statearr_13518_13540[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13517 === 2))
{var state_13516__$1 = state_13516;if(true)
{var statearr_13519_13541 = state_13516__$1;(statearr_13519_13541[1] = 4);
} else
{var statearr_13520_13542 = state_13516__$1;(statearr_13520_13542[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13517 === 3))
{var inst_13514 = (state_13516[2]);var state_13516__$1 = state_13516;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13516__$1,inst_13514);
} else
{if((state_val_13517 === 4))
{var state_13516__$1 = state_13516;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13516__$1,7,root_chan);
} else
{if((state_val_13517 === 5))
{var state_13516__$1 = state_13516;var statearr_13521_13543 = state_13516__$1;(statearr_13521_13543[2] = null);
(statearr_13521_13543[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13517 === 6))
{var inst_13512 = (state_13516[2]);var state_13516__$1 = state_13516;var statearr_13522_13544 = state_13516__$1;(statearr_13522_13544[2] = inst_13512);
(statearr_13522_13544[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13517 === 7))
{var inst_13498 = (state_13516[2]);var inst_13499 = cljs.core.nth.call(null,inst_13498,0,null);var inst_13500 = cljs.core.nth.call(null,inst_13498,1,null);var state_13516__$1 = (function (){var statearr_13523 = state_13516;(statearr_13523[7] = inst_13500);
return statearr_13523;
})();var G__13524_13545 = inst_13499;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"color","color",1108746965),G__13524_13545))
{var statearr_13525_13546 = state_13516__$1;(statearr_13525_13546[1] = 11);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"clicked","clicked",1874428825),G__13524_13545))
{var statearr_13526_13547 = state_13516__$1;(statearr_13526_13547[1] = 10);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"hovered","hovered",2114939469),G__13524_13545))
{var statearr_13527_13548 = state_13516__$1;(statearr_13527_13548[1] = 9);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_13499)].join('')));
} else
{}
}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13517 === 8))
{var inst_13508 = (state_13516[2]);var state_13516__$1 = (function (){var statearr_13528 = state_13516;(statearr_13528[8] = inst_13508);
return statearr_13528;
})();var statearr_13529_13549 = state_13516__$1;(statearr_13529_13549[2] = null);
(statearr_13529_13549[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13517 === 9))
{var inst_13500 = (state_13516[7]);var inst_13501 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"hovered","hovered",2114939469),inst_13500);var state_13516__$1 = state_13516;var statearr_13530_13550 = state_13516__$1;(statearr_13530_13550[2] = inst_13501);
(statearr_13530_13550[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13517 === 10))
{var inst_13500 = (state_13516[7]);var inst_13503 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",2205476365),inst_13500);var state_13516__$1 = state_13516;var statearr_13531_13551 = state_13516__$1;(statearr_13531_13551[2] = inst_13503);
(statearr_13531_13551[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13517 === 11))
{var inst_13500 = (state_13516[7]);var inst_13505 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"color","color",1108746965),inst_13500);var state_13516__$1 = state_13516;var statearr_13532_13552 = state_13516__$1;(statearr_13532_13552[2] = inst_13505);
(statearr_13532_13552[1] = 8);
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
var state_machine__6178__auto____0 = (function (){var statearr_13536 = [null,null,null,null,null,null,null,null,null];(statearr_13536[0] = state_machine__6178__auto__);
(statearr_13536[1] = 1);
return statearr_13536;
});
var state_machine__6178__auto____1 = (function (state_13516){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13516);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13537){if((e13537 instanceof Object))
{var ex__6181__auto__ = e13537;var statearr_13538_13553 = state_13516;(statearr_13538_13553[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13516);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13537;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13554 = state_13516;
state_13516 = G__13554;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13516){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_13539 = f__6193__auto__.call(null);(statearr_13539[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_13539;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return c__6192__auto__;
});
nn.menu.t13489.prototype.om$core$IInitState$ = true;
nn.menu.t13489.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"chans","chans",1108527827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"root-chan","root-chan",4395197647),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,1))], null)], null);
});
nn.menu.t13489.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13491){var self__ = this;
var _13491__$1 = this;return self__.meta13490;
});
nn.menu.t13489.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13491,meta13490__$1){var self__ = this;
var _13491__$1 = this;return (new nn.menu.t13489(self__.e_films,self__.app,self__.map__13488,self__.owner,self__.p__13435,self__.video_widget,meta13490__$1));
});
nn.menu.__GT_t13489 = (function __GT_t13489(e_films__$1,app__$1,map__13488__$2,owner__$1,p__13435__$1,video_widget__$1,meta13490){return (new nn.menu.t13489(e_films__$1,app__$1,map__13488__$2,owner__$1,p__13435__$1,video_widget__$1,meta13490));
});
}
return (new nn.menu.t13489(e_films,app,map__13488__$1,owner,p__13435,video_widget,null));
});
nn.menu.svg = (function svg(app,owner){if(typeof nn.menu.t13558 !== 'undefined')
{} else
{
/**
* @constructor
*/
nn.menu.t13558 = (function (owner,app,svg,meta13559){
this.owner = owner;
this.app = app;
this.svg = svg;
this.meta13559 = meta13559;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
nn.menu.t13558.cljs$lang$type = true;
nn.menu.t13558.cljs$lang$ctorStr = "nn.menu/t13558";
nn.menu.t13558.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"nn.menu/t13558");
});
nn.menu.t13558.prototype.om$core$IRenderState$ = true;
nn.menu.t13558.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;return om.core.build.call(null,nn.menu.e_film,self__.app);
});
nn.menu.t13558.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13560){var self__ = this;
var _13560__$1 = this;return self__.meta13559;
});
nn.menu.t13558.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13560,meta13559__$1){var self__ = this;
var _13560__$1 = this;return (new nn.menu.t13558(self__.owner,self__.app,self__.svg,meta13559__$1));
});
nn.menu.__GT_t13558 = (function __GT_t13558(owner__$1,app__$1,svg__$1,meta13559){return (new nn.menu.t13558(owner__$1,app__$1,svg__$1,meta13559));
});
}
return (new nn.menu.t13558(owner,app,svg,null));
});
om.core.root.call(null,nn.menu.svg,nn.menu.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),goog.dom.getElement("svg")], null));

//# sourceMappingURL=menu.js.map