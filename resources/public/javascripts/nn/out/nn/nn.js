// Compiled by ClojureScript 0.0-2173
goog.provide('nn.nn');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('nn.vidwid.vidwid');
goog.require('cljs.reader');
goog.require('goog.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('goog.dom');
goog.require('om.core');
goog.require('nn.vidwid.vidwid');
goog.require('nn.aboutus.aboutus');
goog.require('om.dom');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('nn.aboutus.aboutus');
cljs.core.enable_console_print_BANG_.call(null);
nn.nn.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"about-us","about-us",2633220176),"kaitlin trataris and johann bestowrous are humans on earth.",new cljs.core.Keyword(null,"e-films","e-films",1843209081),null], null));
nn.nn.translator = (function translator(scale,x,y,z,deg){var transform = [cljs.core.str(" translate3d("),cljs.core.str(x),cljs.core.str("px,"),cljs.core.str(y),cljs.core.str("px,"),cljs.core.str(z),cljs.core.str("px) "),cljs.core.str("rotate("),cljs.core.str(deg),cljs.core.str("deg) "),cljs.core.str("scale("),cljs.core.str(scale),cljs.core.str(")")].join('');return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"-webkit-transform","-webkit-transform",2944012288),transform,new cljs.core.Keyword(null,"transform","transform",2066570974),transform], null);
});
nn.nn.main = (function main(app,owner){if(typeof nn.nn.t9166 !== 'undefined')
{} else
{
/**
* @constructor
*/
nn.nn.t9166 = (function (owner,app,main,meta9167){
this.owner = owner;
this.app = app;
this.main = main;
this.meta9167 = meta9167;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
nn.nn.t9166.cljs$lang$type = true;
nn.nn.t9166.cljs$lang$ctorStr = "nn.nn/t9166";
nn.nn.t9166.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"nn.nn/t9166");
});
nn.nn.t9166.prototype.om$core$IRenderState$ = true;
nn.nn.t9166.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__9169){var self__ = this;
var map__9170 = p__9169;var map__9170__$1 = ((cljs.core.seq_QMARK_.call(null,map__9170))?cljs.core.apply.call(null,cljs.core.hash_map,map__9170):map__9170);var selected = cljs.core.get.call(null,map__9170__$1,new cljs.core.Keyword(null,"selected","selected",2205476365));var ___$1 = this;return React.DOM.div({"style": {"-webkit-transform": "translateZ(0)", "-webkit-transform-style": "preserve-3d", "transform-style": "preserve-3d", "position": "relative", "overflow": "hidden"}, "id": "svg", "className": "full"},React.DOM.div({"style": cljs.core.clj__GT_js.call(null,(cljs.core.truth_(selected)?nn.nn.translator.call(null,1,0,0,100,0):nn.nn.translator.call(null,1,0,0,0,0))), "className": "panel full z-index"},om.core.build.call(null,nn.vidwid.vidwid.video_widget,self__.app)),React.DOM.div({"style": cljs.core.clj__GT_js.call(null,(cljs.core.truth_(selected)?cljs.core.conj.call(null,nn.nn.translator.call(null,1,0,0,0,0),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",4041665405),1], null)):cljs.core.conj.call(null,nn.nn.translator.call(null,1,0,0,-1000,0),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",4041665405),0], null)))), "className": (cljs.core.truth_(selected)?"panel full":"panel full hide-behind")},om.core.build.call(null,nn.aboutus.aboutus.about_us,self__.app)),React.DOM.div({"style": cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",1761709211),"absolute",new cljs.core.Keyword(null,"bottom","bottom",3925642653),"5%",new cljs.core.Keyword(null,"right","right",1122416014),"1%"], null)), "className": "z-index flex panel"},(cljs.core.truth_(selected)?null:React.DOM.span({"className": "fa fa-long-arrow-right"},null)),React.DOM.div({"onClick": (function (){return om.core.update_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core.not);
}), "className": "full flex item"},(cljs.core.truth_(selected)?"e-films ":"about us "),(cljs.core.truth_(selected)?React.DOM.span({"className": "fa fa-long-arrow-left"},null):null))));
});
nn.nn.t9166.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9168){var self__ = this;
var _9168__$1 = this;return self__.meta9167;
});
nn.nn.t9166.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9168,meta9167__$1){var self__ = this;
var _9168__$1 = this;return (new nn.nn.t9166(self__.owner,self__.app,self__.main,meta9167__$1));
});
nn.nn.__GT_t9166 = (function __GT_t9166(owner__$1,app__$1,main__$1,meta9167){return (new nn.nn.t9166(owner__$1,app__$1,main__$1,meta9167));
});
}
return (new nn.nn.t9166(owner,app,main,null));
});
om.core.root.call(null,nn.nn.main,nn.nn.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),goog.dom.getElement("svg")], null));

//# sourceMappingURL=nn.js.map