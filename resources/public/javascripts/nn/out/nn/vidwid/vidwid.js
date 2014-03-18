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
React.initializeTouchEvents(true);
nn.vidwid.vidwid.url = "http://gdata.youtube.com/feeds/api/users/neurosisnow/uploads?max-results=4&v=2&alt=jsonc";
nn.vidwid.vidwid.xhr = (function xhr(p__22194){var map__22196 = p__22194;var map__22196__$1 = ((cljs.core.seq_QMARK_.call(null,map__22196))?cljs.core.apply.call(null,cljs.core.hash_map,map__22196):map__22196);var on_error = cljs.core.get.call(null,map__22196__$1,new cljs.core.Keyword(null,"on-error","on-error",1418576908));var on_complete = cljs.core.get.call(null,map__22196__$1,new cljs.core.Keyword(null,"on-complete","on-complete",2943599833));var url = cljs.core.get.call(null,map__22196__$1,new cljs.core.Keyword(null,"url","url",1014020321));var method = cljs.core.get.call(null,map__22196__$1,new cljs.core.Keyword(null,"method","method",4231316563));var xhr__$1 = (new goog.net.XhrIo());goog.events.listen(xhr__$1,goog.net.EventType.SUCCESS,(function (e){return on_complete.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map_indexed.call(null,(function (p1__22191_SHARP_,p2__22192_SHARP_){return cljs.core.conj.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nid","nid",1014013307),p1__22191_SHARP_], null),p2__22192_SHARP_);
}),cljs.core.map.call(null,(function (p1__22193_SHARP_){return cljs.core.select_keys.call(null,p1__22193_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Keyword(null,"title","title",1124275658),new cljs.core.Keyword(null,"description","description",3584325486),new cljs.core.Keyword(null,"thumbnail","thumbnail",2344436830)], null));
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
return (function (p1__22197_SHARP_){return cljs.core._EQ_.call(null,[cljs.core.str(p1__22197_SHARP_.call(null,new cljs.core.Keyword(null,"nid","nid",1014013307)))].join(''),val);
});})(val))
,cljs.core.deref.call(null,app))));return cljs.core.async.put_BANG_.call(null,chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clicked","clicked",1874428825),parseInt(val)], null));
});
nn.vidwid.vidwid.e_film = (function e_film(p__22198,owner){var map__22205 = p__22198;var map__22205__$1 = ((cljs.core.seq_QMARK_.call(null,map__22205))?cljs.core.apply.call(null,cljs.core.hash_map,map__22205):map__22205);var description = cljs.core.get.call(null,map__22205__$1,new cljs.core.Keyword(null,"description","description",3584325486));var thumbnail = cljs.core.get.call(null,map__22205__$1,new cljs.core.Keyword(null,"thumbnail","thumbnail",2344436830));var title = cljs.core.get.call(null,map__22205__$1,new cljs.core.Keyword(null,"title","title",1124275658));var id = cljs.core.get.call(null,map__22205__$1,new cljs.core.Keyword(null,"id","id",1013907597));var nid = cljs.core.get.call(null,map__22205__$1,new cljs.core.Keyword(null,"nid","nid",1014013307));if(typeof nn.vidwid.vidwid.t22206 !== 'undefined')
{} else
{
/**
* @constructor
*/
nn.vidwid.vidwid.t22206 = (function (nid,id,title,thumbnail,description,map__22205,owner,p__22198,e_film,meta22207){
this.nid = nid;
this.id = id;
this.title = title;
this.thumbnail = thumbnail;
this.description = description;
this.map__22205 = map__22205;
this.owner = owner;
this.p__22198 = p__22198;
this.e_film = e_film;
this.meta22207 = meta22207;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
nn.vidwid.vidwid.t22206.cljs$lang$type = true;
nn.vidwid.vidwid.t22206.cljs$lang$ctorStr = "nn.vidwid.vidwid/t22206";
nn.vidwid.vidwid.t22206.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"nn.vidwid.vidwid/t22206");
});
nn.vidwid.vidwid.t22206.prototype.om$core$IRenderState$ = true;
nn.vidwid.vidwid.t22206.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__22209){var self__ = this;
var map__22210 = p__22209;var map__22210__$1 = ((cljs.core.seq_QMARK_.call(null,map__22210))?cljs.core.apply.call(null,cljs.core.hash_map,map__22210):map__22210);var selected = cljs.core.get.call(null,map__22210__$1,new cljs.core.Keyword(null,"selected","selected",2205476365));var hovered = cljs.core.get.call(null,map__22210__$1,new cljs.core.Keyword(null,"hovered","hovered",2114939469));var root_chan = cljs.core.get.call(null,map__22210__$1,new cljs.core.Keyword(null,"root-chan","root-chan",4395197647));var ___$1 = this;return React.DOM.div({"onClick": (function (){return nn.vidwid.vidwid.on_click.call(null,self__.owner,root_chan,self__.nid,selected);
}), "className": (cljs.core.truth_(hovered)?"title now-reading trans":"title trans"), "style": cljs.core.clj__GT_js.call(null,((cljs.core._EQ_.call(null,selected,self__.nid))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",2685668404),"none"], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",4502531971),"0px"], null))), "onMouseLeave": (function (){return nn.vidwid.vidwid.on_hover.call(null,self__.owner,root_chan);
}), "onMouseEnter": (function (){return nn.vidwid.vidwid.on_hover.call(null,self__.owner,root_chan,cljs.core.deref.call(null,self__.thumbnail).call(null,new cljs.core.Keyword(null,"hqDefault","hqDefault",4595730538)));
})},(function (){var or__3443__auto__ = self__.title;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return "test";
}
})());
});
nn.vidwid.vidwid.t22206.prototype.om$core$IWillUpdate$ = true;
nn.vidwid.vidwid.t22206.prototype.om$core$IWillUpdate$will_update$arity$3 = (function (_,next_props,next_state){var self__ = this;
var ___$1 = this;return null;
});
nn.vidwid.vidwid.t22206.prototype.om$core$IDidUpdate$ = true;
nn.vidwid.vidwid.t22206.prototype.om$core$IDidUpdate$did_update$arity$3 = (function (this$,prev_props,prev_state){var self__ = this;
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
nn.vidwid.vidwid.t22206.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22208){var self__ = this;
var _22208__$1 = this;return self__.meta22207;
});
nn.vidwid.vidwid.t22206.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22208,meta22207__$1){var self__ = this;
var _22208__$1 = this;return (new nn.vidwid.vidwid.t22206(self__.nid,self__.id,self__.title,self__.thumbnail,self__.description,self__.map__22205,self__.owner,self__.p__22198,self__.e_film,meta22207__$1));
});
nn.vidwid.vidwid.__GT_t22206 = (function __GT_t22206(nid__$1,id__$1,title__$1,thumbnail__$1,description__$1,map__22205__$2,owner__$1,p__22198__$1,e_film__$1,meta22207){return (new nn.vidwid.vidwid.t22206(nid__$1,id__$1,title__$1,thumbnail__$1,description__$1,map__22205__$2,owner__$1,p__22198__$1,e_film__$1,meta22207));
});
}
return (new nn.vidwid.vidwid.t22206(nid,id,title,thumbnail,description,map__22205__$1,owner,p__22198,e_film,null));
});
nn.vidwid.vidwid.mobile_scroll = (function mobile_scroll(app,owner){if(typeof nn.vidwid.vidwid.t22217 !== 'undefined')
{} else
{
/**
* @constructor
*/
nn.vidwid.vidwid.t22217 = (function (owner,app,mobile_scroll,meta22218){
this.owner = owner;
this.app = app;
this.mobile_scroll = mobile_scroll;
this.meta22218 = meta22218;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
nn.vidwid.vidwid.t22217.cljs$lang$type = true;
nn.vidwid.vidwid.t22217.cljs$lang$ctorStr = "nn.vidwid.vidwid/t22217";
nn.vidwid.vidwid.t22217.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"nn.vidwid.vidwid/t22217");
});
nn.vidwid.vidwid.t22217.prototype.om$core$IRenderState$ = true;
nn.vidwid.vidwid.t22217.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__22220){var self__ = this;
var map__22221 = p__22220;var map__22221__$1 = ((cljs.core.seq_QMARK_.call(null,map__22221))?cljs.core.apply.call(null,cljs.core.hash_map,map__22221):map__22221);var selected = cljs.core.get.call(null,map__22221__$1,new cljs.core.Keyword(null,"selected","selected",2205476365));var root_chan = cljs.core.get.call(null,map__22221__$1,new cljs.core.Keyword(null,"root-chan","root-chan",4395197647));var ___$1 = this;var val_map = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p1__22211_SHARP_){return cljs.core._EQ_.call(null,p1__22211_SHARP_.call(null,new cljs.core.Keyword(null,"id","id",1013907597)),selected);
}),self__.app));var val = [cljs.core.str(val_map.call(null,new cljs.core.Keyword(null,"nid","nid",1014013307)))].join('');return om.dom.input.call(null,{"value": ((cljs.core._EQ_.call(null,[cljs.core.str(selected)].join(''),""))?"0":selected), "onChange": (function (){return nn.vidwid.vidwid.range_change.call(null,self__.owner,root_chan,self__.app);
}), "ref": "range", "max": [cljs.core.str((cljs.core.count.call(null,self__.app) - 1))].join(''), "min": "0", "type": "range", "className": "flex scroller"},null);
});
nn.vidwid.vidwid.t22217.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22219){var self__ = this;
var _22219__$1 = this;return self__.meta22218;
});
nn.vidwid.vidwid.t22217.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22219,meta22218__$1){var self__ = this;
var _22219__$1 = this;return (new nn.vidwid.vidwid.t22217(self__.owner,self__.app,self__.mobile_scroll,meta22218__$1));
});
nn.vidwid.vidwid.__GT_t22217 = (function __GT_t22217(owner__$1,app__$1,mobile_scroll__$1,meta22218){return (new nn.vidwid.vidwid.t22217(owner__$1,app__$1,mobile_scroll__$1,meta22218));
});
}
return (new nn.vidwid.vidwid.t22217(owner,app,mobile_scroll,null));
});
nn.vidwid.vidwid.iframe = (function iframe(p__22222,owner){var map__22229 = p__22222;var map__22229__$1 = ((cljs.core.seq_QMARK_.call(null,map__22229))?cljs.core.apply.call(null,cljs.core.hash_map,map__22229):map__22229);var id = cljs.core.get.call(null,map__22229__$1,new cljs.core.Keyword(null,"id","id",1013907597));var nid = cljs.core.get.call(null,map__22229__$1,new cljs.core.Keyword(null,"nid","nid",1014013307));if(typeof nn.vidwid.vidwid.t22230 !== 'undefined')
{} else
{
/**
* @constructor
*/
nn.vidwid.vidwid.t22230 = (function (nid,id,map__22229,owner,p__22222,iframe,meta22231){
this.nid = nid;
this.id = id;
this.map__22229 = map__22229;
this.owner = owner;
this.p__22222 = p__22222;
this.iframe = iframe;
this.meta22231 = meta22231;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
nn.vidwid.vidwid.t22230.cljs$lang$type = true;
nn.vidwid.vidwid.t22230.cljs$lang$ctorStr = "nn.vidwid.vidwid/t22230";
nn.vidwid.vidwid.t22230.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"nn.vidwid.vidwid/t22230");
});
nn.vidwid.vidwid.t22230.prototype.om$core$IRenderState$ = true;
nn.vidwid.vidwid.t22230.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__22233){var self__ = this;
var map__22234 = p__22233;var map__22234__$1 = ((cljs.core.seq_QMARK_.call(null,map__22234))?cljs.core.apply.call(null,cljs.core.hash_map,map__22234):map__22234);var selected = cljs.core.get.call(null,map__22234__$1,new cljs.core.Keyword(null,"selected","selected",2205476365));var root_chan = cljs.core.get.call(null,map__22234__$1,new cljs.core.Keyword(null,"root-chan","root-chan",4395197647));var ___$1 = this;return React.DOM.iframe({"style": cljs.core.clj__GT_js.call(null,((cljs.core._EQ_.call(null,selected,self__.nid))?cljs.core.PersistentArrayMap.EMPTY:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",2685668404),"none"], null))), "frameBorder": "0", "className": "full", "src": [cljs.core.str("//www.youtube.com/embed/"),cljs.core.str(self__.id)].join('')},"");
});
nn.vidwid.vidwid.t22230.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22232){var self__ = this;
var _22232__$1 = this;return self__.meta22231;
});
nn.vidwid.vidwid.t22230.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22232,meta22231__$1){var self__ = this;
var _22232__$1 = this;return (new nn.vidwid.vidwid.t22230(self__.nid,self__.id,self__.map__22229,self__.owner,self__.p__22222,self__.iframe,meta22231__$1));
});
nn.vidwid.vidwid.__GT_t22230 = (function __GT_t22230(nid__$1,id__$1,map__22229__$2,owner__$1,p__22222__$1,iframe__$1,meta22231){return (new nn.vidwid.vidwid.t22230(nid__$1,id__$1,map__22229__$2,owner__$1,p__22222__$1,iframe__$1,meta22231));
});
}
return (new nn.vidwid.vidwid.t22230(nid,id,map__22229__$1,owner,p__22222,iframe,null));
});
nn.vidwid.vidwid.select = (function select(app,owner){if(typeof nn.vidwid.vidwid.t22240 !== 'undefined')
{} else
{
/**
* @constructor
*/
nn.vidwid.vidwid.t22240 = (function (owner,app,select,meta22241){
this.owner = owner;
this.app = app;
this.select = select;
this.meta22241 = meta22241;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
nn.vidwid.vidwid.t22240.cljs$lang$type = true;
nn.vidwid.vidwid.t22240.cljs$lang$ctorStr = "nn.vidwid.vidwid/t22240";
nn.vidwid.vidwid.t22240.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"nn.vidwid.vidwid/t22240");
});
nn.vidwid.vidwid.t22240.prototype.om$core$IRenderState$ = true;
nn.vidwid.vidwid.t22240.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__22243){var self__ = this;
var map__22244 = p__22243;var map__22244__$1 = ((cljs.core.seq_QMARK_.call(null,map__22244))?cljs.core.apply.call(null,cljs.core.hash_map,map__22244):map__22244);var root_chan = cljs.core.get.call(null,map__22244__$1,new cljs.core.Keyword(null,"root-chan","root-chan",4395197647));var ___$1 = this;return React.DOM.i({"onClick": (function (){return cljs.core.async.put_BANG_.call(null,root_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clicked","clicked",1874428825),null], null));
}), "className": "trans title"},self__.app.call(null,new cljs.core.Keyword(null,"title","title",1124275658)));
});
nn.vidwid.vidwid.t22240.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22242){var self__ = this;
var _22242__$1 = this;return self__.meta22241;
});
nn.vidwid.vidwid.t22240.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22242,meta22241__$1){var self__ = this;
var _22242__$1 = this;return (new nn.vidwid.vidwid.t22240(self__.owner,self__.app,self__.select,meta22241__$1));
});
nn.vidwid.vidwid.__GT_t22240 = (function __GT_t22240(owner__$1,app__$1,select__$1,meta22241){return (new nn.vidwid.vidwid.t22240(owner__$1,app__$1,select__$1,meta22241));
});
}
return (new nn.vidwid.vidwid.t22240(owner,app,select,null));
});
nn.vidwid.vidwid.video_widget = (function video_widget(p__22248,owner){var map__22301 = p__22248;var map__22301__$1 = ((cljs.core.seq_QMARK_.call(null,map__22301))?cljs.core.apply.call(null,cljs.core.hash_map,map__22301):map__22301);var app = map__22301__$1;var e_films = cljs.core.get.call(null,map__22301__$1,new cljs.core.Keyword(null,"e-films","e-films",1843209081));if(typeof nn.vidwid.vidwid.t22302 !== 'undefined')
{} else
{
/**
* @constructor
*/
nn.vidwid.vidwid.t22302 = (function (e_films,app,map__22301,owner,p__22248,video_widget,meta22303){
this.e_films = e_films;
this.app = app;
this.map__22301 = map__22301;
this.owner = owner;
this.p__22248 = p__22248;
this.video_widget = video_widget;
this.meta22303 = meta22303;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
nn.vidwid.vidwid.t22302.cljs$lang$type = true;
nn.vidwid.vidwid.t22302.cljs$lang$ctorStr = "nn.vidwid.vidwid/t22302";
nn.vidwid.vidwid.t22302.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"nn.vidwid.vidwid/t22302");
});
nn.vidwid.vidwid.t22302.prototype.om$core$IRenderState$ = true;
nn.vidwid.vidwid.t22302.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__22305){var self__ = this;
var map__22306 = p__22305;var map__22306__$1 = ((cljs.core.seq_QMARK_.call(null,map__22306))?cljs.core.apply.call(null,cljs.core.hash_map,map__22306):map__22306);var color = cljs.core.get.call(null,map__22306__$1,new cljs.core.Keyword(null,"color","color",1108746965));var selected = cljs.core.get.call(null,map__22306__$1,new cljs.core.Keyword(null,"selected","selected",2205476365));var hovered = cljs.core.get.call(null,map__22306__$1,new cljs.core.Keyword(null,"hovered","hovered",2114939469));var chans = cljs.core.get.call(null,map__22306__$1,new cljs.core.Keyword(null,"chans","chans",1108527827));var ___$1 = this;return React.DOM.div({"className": "full flex mobile"},cljs.core.apply.call(null,om.dom.div,{"style": {"background": (cljs.core.truth_(hovered)?[cljs.core.str("url("),cljs.core.str(hovered),cljs.core.str(")")].join(''):[cljs.core.str((function (){var or__3443__auto__ = color;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return nn.vidwid.vidwid.hsl.call(null,175,100,61);
}
})()),cljs.core.str(" "),cljs.core.str("url("),cljs.core.str("http://i.imgur.com/fPRkry0.png)")].join(''))}, "className": "vid-frame"},om.core.build_all.call(null,nn.vidwid.vidwid.iframe,self__.e_films,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),chans,new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),selected], null)], null))),om.core.build.call(null,nn.vidwid.vidwid.mobile_scroll,self__.e_films,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),chans,new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),selected], null)], null)),cljs.core.apply.call(null,om.dom.div,{"style": {"padding-left": "10px"}, "className": "un-mobile"},(cljs.core.truth_(selected)?(function (){var e_film = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p1__22247_SHARP_){return cljs.core._EQ_.call(null,p1__22247_SHARP_.call(null,new cljs.core.Keyword(null,"nid","nid",1014013307)),selected);
}),self__.app.call(null,new cljs.core.Keyword(null,"e-films","e-films",1843209081))));return om.core.build.call(null,nn.vidwid.vidwid.select,e_film,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),chans], null));
})():null),((cljs.core.not.call(null,self__.e_films))?"loading":om.core.build_all.call(null,nn.vidwid.vidwid.e_film,self__.e_films,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),chans,new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),selected], null)], null)))));
});
nn.vidwid.vidwid.t22302.prototype.om$core$IDidMount$ = true;
nn.vidwid.vidwid.t22302.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return null;
});
nn.vidwid.vidwid.t22302.prototype.om$core$IWillMount$ = true;
nn.vidwid.vidwid.t22302.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;nn.vidwid.vidwid.xhr.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",4231316563),"GET",new cljs.core.Keyword(null,"url","url",1014020321),nn.vidwid.vidwid.url,new cljs.core.Keyword(null,"on-complete","on-complete",2943599833),(function (p1__22245_SHARP_){return om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"e-films","e-films",1843209081),(function (___$2){return p1__22245_SHARP_;
}));
}),new cljs.core.Keyword(null,"on-error","on-error",1418576908),(function (p1__22246_SHARP_){return cljs.core.print.call(null,p1__22246_SHARP_);
})], null));
var root_chan = om.core.get_state.call(null,self__.owner,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chans","chans",1108527827),new cljs.core.Keyword(null,"root-chan","root-chan",4395197647)], null));var c__6192__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_22329){var state_val_22330 = (state_22329[1]);if((state_val_22330 === 1))
{var state_22329__$1 = state_22329;var statearr_22331_22353 = state_22329__$1;(statearr_22331_22353[2] = null);
(statearr_22331_22353[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22330 === 2))
{var state_22329__$1 = state_22329;if(true)
{var statearr_22332_22354 = state_22329__$1;(statearr_22332_22354[1] = 4);
} else
{var statearr_22333_22355 = state_22329__$1;(statearr_22333_22355[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22330 === 3))
{var inst_22327 = (state_22329[2]);var state_22329__$1 = state_22329;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22329__$1,inst_22327);
} else
{if((state_val_22330 === 4))
{var state_22329__$1 = state_22329;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22329__$1,7,root_chan);
} else
{if((state_val_22330 === 5))
{var state_22329__$1 = state_22329;var statearr_22334_22356 = state_22329__$1;(statearr_22334_22356[2] = null);
(statearr_22334_22356[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22330 === 6))
{var inst_22325 = (state_22329[2]);var state_22329__$1 = state_22329;var statearr_22335_22357 = state_22329__$1;(statearr_22335_22357[2] = inst_22325);
(statearr_22335_22357[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22330 === 7))
{var inst_22311 = (state_22329[2]);var inst_22312 = cljs.core.nth.call(null,inst_22311,0,null);var inst_22313 = cljs.core.nth.call(null,inst_22311,1,null);var state_22329__$1 = (function (){var statearr_22336 = state_22329;(statearr_22336[7] = inst_22313);
return statearr_22336;
})();var G__22337_22358 = inst_22312;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"color","color",1108746965),G__22337_22358))
{var statearr_22338_22359 = state_22329__$1;(statearr_22338_22359[1] = 11);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"clicked","clicked",1874428825),G__22337_22358))
{var statearr_22339_22360 = state_22329__$1;(statearr_22339_22360[1] = 10);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"hovered","hovered",2114939469),G__22337_22358))
{var statearr_22340_22361 = state_22329__$1;(statearr_22340_22361[1] = 9);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_22312)].join('')));
} else
{}
}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22330 === 8))
{var inst_22321 = (state_22329[2]);var state_22329__$1 = (function (){var statearr_22341 = state_22329;(statearr_22341[8] = inst_22321);
return statearr_22341;
})();var statearr_22342_22362 = state_22329__$1;(statearr_22342_22362[2] = null);
(statearr_22342_22362[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22330 === 9))
{var inst_22313 = (state_22329[7]);var inst_22314 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"hovered","hovered",2114939469),inst_22313);var state_22329__$1 = state_22329;var statearr_22343_22363 = state_22329__$1;(statearr_22343_22363[2] = inst_22314);
(statearr_22343_22363[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22330 === 10))
{var inst_22313 = (state_22329[7]);var inst_22316 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",2205476365),inst_22313);var state_22329__$1 = state_22329;var statearr_22344_22364 = state_22329__$1;(statearr_22344_22364[2] = inst_22316);
(statearr_22344_22364[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22330 === 11))
{var inst_22313 = (state_22329[7]);var inst_22318 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"color","color",1108746965),inst_22313);var state_22329__$1 = state_22329;var statearr_22345_22365 = state_22329__$1;(statearr_22345_22365[2] = inst_22318);
(statearr_22345_22365[1] = 8);
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
var state_machine__6178__auto____0 = (function (){var statearr_22349 = [null,null,null,null,null,null,null,null,null];(statearr_22349[0] = state_machine__6178__auto__);
(statearr_22349[1] = 1);
return statearr_22349;
});
var state_machine__6178__auto____1 = (function (state_22329){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_22329);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e22350){if((e22350 instanceof Object))
{var ex__6181__auto__ = e22350;var statearr_22351_22366 = state_22329;(statearr_22351_22366[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22329);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22350;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22367 = state_22329;
state_22329 = G__22367;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_22329){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_22329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_22352 = f__6193__auto__.call(null);(statearr_22352[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_22352;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return c__6192__auto__;
});
nn.vidwid.vidwid.t22302.prototype.om$core$IInitState$ = true;
nn.vidwid.vidwid.t22302.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"chans","chans",1108527827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"root-chan","root-chan",4395197647),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,1))], null)], null);
});
nn.vidwid.vidwid.t22302.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22304){var self__ = this;
var _22304__$1 = this;return self__.meta22303;
});
nn.vidwid.vidwid.t22302.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22304,meta22303__$1){var self__ = this;
var _22304__$1 = this;return (new nn.vidwid.vidwid.t22302(self__.e_films,self__.app,self__.map__22301,self__.owner,self__.p__22248,self__.video_widget,meta22303__$1));
});
nn.vidwid.vidwid.__GT_t22302 = (function __GT_t22302(e_films__$1,app__$1,map__22301__$2,owner__$1,p__22248__$1,video_widget__$1,meta22303){return (new nn.vidwid.vidwid.t22302(e_films__$1,app__$1,map__22301__$2,owner__$1,p__22248__$1,video_widget__$1,meta22303));
});
}
return (new nn.vidwid.vidwid.t22302(e_films,app,map__22301__$1,owner,p__22248,video_widget,null));
});

//# sourceMappingURL=vidwid.js.map