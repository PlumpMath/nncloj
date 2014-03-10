// Compiled by ClojureScript 0.0-2173
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t10734 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10734 = (function (f,fn_handler,meta10735){
this.f = f;
this.fn_handler = fn_handler;
this.meta10735 = meta10735;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10734.cljs$lang$type = true;
cljs.core.async.t10734.cljs$lang$ctorStr = "cljs.core.async/t10734";
cljs.core.async.t10734.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10734");
});
cljs.core.async.t10734.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10734.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t10734.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t10734.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10736){var self__ = this;
var _10736__$1 = this;return self__.meta10735;
});
cljs.core.async.t10734.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10736,meta10735__$1){var self__ = this;
var _10736__$1 = this;return (new cljs.core.async.t10734(self__.f,self__.fn_handler,meta10735__$1));
});
cljs.core.async.__GT_t10734 = (function __GT_t10734(f__$1,fn_handler__$1,meta10735){return (new cljs.core.async.t10734(f__$1,fn_handler__$1,meta10735));
});
}
return (new cljs.core.async.t10734(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__10738 = buff;if(G__10738)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__10738.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__10738.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10738);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10738);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_10739 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_10739);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_10739);
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3431__auto__ = ret;if(cljs.core.truth_(and__3431__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3431__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4291__auto___10740 = n;var x_10741 = 0;while(true){
if((x_10741 < n__4291__auto___10740))
{(a[x_10741] = 0);
{
var G__10742 = (x_10741 + 1);
x_10741 = G__10742;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__10743 = (i + 1);
i = G__10743;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t10747 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10747 = (function (flag,alt_flag,meta10748){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta10748 = meta10748;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10747.cljs$lang$type = true;
cljs.core.async.t10747.cljs$lang$ctorStr = "cljs.core.async/t10747";
cljs.core.async.t10747.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10747");
});
cljs.core.async.t10747.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10747.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t10747.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t10747.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10749){var self__ = this;
var _10749__$1 = this;return self__.meta10748;
});
cljs.core.async.t10747.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10749,meta10748__$1){var self__ = this;
var _10749__$1 = this;return (new cljs.core.async.t10747(self__.flag,self__.alt_flag,meta10748__$1));
});
cljs.core.async.__GT_t10747 = (function __GT_t10747(flag__$1,alt_flag__$1,meta10748){return (new cljs.core.async.t10747(flag__$1,alt_flag__$1,meta10748));
});
}
return (new cljs.core.async.t10747(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t10753 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10753 = (function (cb,flag,alt_handler,meta10754){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta10754 = meta10754;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10753.cljs$lang$type = true;
cljs.core.async.t10753.cljs$lang$ctorStr = "cljs.core.async/t10753";
cljs.core.async.t10753.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10753");
});
cljs.core.async.t10753.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10753.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t10753.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t10753.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10755){var self__ = this;
var _10755__$1 = this;return self__.meta10754;
});
cljs.core.async.t10753.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10755,meta10754__$1){var self__ = this;
var _10755__$1 = this;return (new cljs.core.async.t10753(self__.cb,self__.flag,self__.alt_handler,meta10754__$1));
});
cljs.core.async.__GT_t10753 = (function __GT_t10753(cb__$1,flag__$1,alt_handler__$1,meta10754){return (new cljs.core.async.t10753(cb__$1,flag__$1,alt_handler__$1,meta10754));
});
}
return (new cljs.core.async.t10753(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10756_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10756_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3443__auto__ = wport;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__10757 = (i + 1);
i = G__10757;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3443__auto__ = ret;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3431__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3431__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3431__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__10758){var map__10760 = p__10758;var map__10760__$1 = ((cljs.core.seq_QMARK_.call(null,map__10760))?cljs.core.apply.call(null,cljs.core.hash_map,map__10760):map__10760);var opts = map__10760__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__10758 = null;if (arguments.length > 1) {
  p__10758 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__10758);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__10761){
var ports = cljs.core.first(arglist__10761);
var p__10758 = cljs.core.rest(arglist__10761);
return alts_BANG___delegate(ports,p__10758);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t10769 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10769 = (function (ch,f,map_LT_,meta10770){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10770 = meta10770;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10769.cljs$lang$type = true;
cljs.core.async.t10769.cljs$lang$ctorStr = "cljs.core.async/t10769";
cljs.core.async.t10769.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10769");
});
cljs.core.async.t10769.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10769.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t10769.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10769.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t10772 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10772 = (function (fn1,_,meta10770,ch,f,map_LT_,meta10773){
this.fn1 = fn1;
this._ = _;
this.meta10770 = meta10770;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10773 = meta10773;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10772.cljs$lang$type = true;
cljs.core.async.t10772.cljs$lang$ctorStr = "cljs.core.async/t10772";
cljs.core.async.t10772.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10772");
});
cljs.core.async.t10772.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10772.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t10772.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t10772.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__10762_SHARP_){return f1.call(null,(((p1__10762_SHARP_ == null))?null:self__.f.call(null,p1__10762_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t10772.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10774){var self__ = this;
var _10774__$1 = this;return self__.meta10773;
});
cljs.core.async.t10772.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10774,meta10773__$1){var self__ = this;
var _10774__$1 = this;return (new cljs.core.async.t10772(self__.fn1,self__._,self__.meta10770,self__.ch,self__.f,self__.map_LT_,meta10773__$1));
});
cljs.core.async.__GT_t10772 = (function __GT_t10772(fn1__$1,___$2,meta10770__$1,ch__$2,f__$2,map_LT___$2,meta10773){return (new cljs.core.async.t10772(fn1__$1,___$2,meta10770__$1,ch__$2,f__$2,map_LT___$2,meta10773));
});
}
return (new cljs.core.async.t10772(fn1,___$1,self__.meta10770,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3431__auto__ = ret;if(cljs.core.truth_(and__3431__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3431__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t10769.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10769.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10769.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10771){var self__ = this;
var _10771__$1 = this;return self__.meta10770;
});
cljs.core.async.t10769.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10771,meta10770__$1){var self__ = this;
var _10771__$1 = this;return (new cljs.core.async.t10769(self__.ch,self__.f,self__.map_LT_,meta10770__$1));
});
cljs.core.async.__GT_t10769 = (function __GT_t10769(ch__$1,f__$1,map_LT___$1,meta10770){return (new cljs.core.async.t10769(ch__$1,f__$1,map_LT___$1,meta10770));
});
}
return (new cljs.core.async.t10769(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t10778 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10778 = (function (ch,f,map_GT_,meta10779){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta10779 = meta10779;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10778.cljs$lang$type = true;
cljs.core.async.t10778.cljs$lang$ctorStr = "cljs.core.async/t10778";
cljs.core.async.t10778.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10778");
});
cljs.core.async.t10778.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10778.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t10778.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10778.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10778.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10778.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10778.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10780){var self__ = this;
var _10780__$1 = this;return self__.meta10779;
});
cljs.core.async.t10778.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10780,meta10779__$1){var self__ = this;
var _10780__$1 = this;return (new cljs.core.async.t10778(self__.ch,self__.f,self__.map_GT_,meta10779__$1));
});
cljs.core.async.__GT_t10778 = (function __GT_t10778(ch__$1,f__$1,map_GT___$1,meta10779){return (new cljs.core.async.t10778(ch__$1,f__$1,map_GT___$1,meta10779));
});
}
return (new cljs.core.async.t10778(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t10784 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10784 = (function (ch,p,filter_GT_,meta10785){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta10785 = meta10785;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10784.cljs$lang$type = true;
cljs.core.async.t10784.cljs$lang$ctorStr = "cljs.core.async/t10784";
cljs.core.async.t10784.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10784");
});
cljs.core.async.t10784.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10784.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t10784.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10784.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10784.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10784.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10784.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10786){var self__ = this;
var _10786__$1 = this;return self__.meta10785;
});
cljs.core.async.t10784.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10786,meta10785__$1){var self__ = this;
var _10786__$1 = this;return (new cljs.core.async.t10784(self__.ch,self__.p,self__.filter_GT_,meta10785__$1));
});
cljs.core.async.__GT_t10784 = (function __GT_t10784(ch__$1,p__$1,filter_GT___$1,meta10785){return (new cljs.core.async.t10784(ch__$1,p__$1,filter_GT___$1,meta10785));
});
}
return (new cljs.core.async.t10784(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6192__auto___10869 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_10848){var state_val_10849 = (state_10848[1]);if((state_val_10849 === 1))
{var state_10848__$1 = state_10848;var statearr_10850_10870 = state_10848__$1;(statearr_10850_10870[2] = null);
(statearr_10850_10870[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10849 === 2))
{var state_10848__$1 = state_10848;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10848__$1,4,ch);
} else
{if((state_val_10849 === 3))
{var inst_10846 = (state_10848[2]);var state_10848__$1 = state_10848;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10848__$1,inst_10846);
} else
{if((state_val_10849 === 4))
{var inst_10830 = (state_10848[7]);var inst_10830__$1 = (state_10848[2]);var inst_10831 = (inst_10830__$1 == null);var state_10848__$1 = (function (){var statearr_10851 = state_10848;(statearr_10851[7] = inst_10830__$1);
return statearr_10851;
})();if(cljs.core.truth_(inst_10831))
{var statearr_10852_10871 = state_10848__$1;(statearr_10852_10871[1] = 5);
} else
{var statearr_10853_10872 = state_10848__$1;(statearr_10853_10872[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10849 === 5))
{var inst_10833 = cljs.core.async.close_BANG_.call(null,out);var state_10848__$1 = state_10848;var statearr_10854_10873 = state_10848__$1;(statearr_10854_10873[2] = inst_10833);
(statearr_10854_10873[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10849 === 6))
{var inst_10830 = (state_10848[7]);var inst_10835 = p.call(null,inst_10830);var state_10848__$1 = state_10848;if(cljs.core.truth_(inst_10835))
{var statearr_10855_10874 = state_10848__$1;(statearr_10855_10874[1] = 8);
} else
{var statearr_10856_10875 = state_10848__$1;(statearr_10856_10875[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10849 === 7))
{var inst_10844 = (state_10848[2]);var state_10848__$1 = state_10848;var statearr_10857_10876 = state_10848__$1;(statearr_10857_10876[2] = inst_10844);
(statearr_10857_10876[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10849 === 8))
{var inst_10830 = (state_10848[7]);var state_10848__$1 = state_10848;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10848__$1,11,out,inst_10830);
} else
{if((state_val_10849 === 9))
{var state_10848__$1 = state_10848;var statearr_10858_10877 = state_10848__$1;(statearr_10858_10877[2] = null);
(statearr_10858_10877[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10849 === 10))
{var inst_10841 = (state_10848[2]);var state_10848__$1 = (function (){var statearr_10859 = state_10848;(statearr_10859[8] = inst_10841);
return statearr_10859;
})();var statearr_10860_10878 = state_10848__$1;(statearr_10860_10878[2] = null);
(statearr_10860_10878[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10849 === 11))
{var inst_10838 = (state_10848[2]);var state_10848__$1 = state_10848;var statearr_10861_10879 = state_10848__$1;(statearr_10861_10879[2] = inst_10838);
(statearr_10861_10879[1] = 10);
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
var state_machine__6178__auto____0 = (function (){var statearr_10865 = [null,null,null,null,null,null,null,null,null];(statearr_10865[0] = state_machine__6178__auto__);
(statearr_10865[1] = 1);
return statearr_10865;
});
var state_machine__6178__auto____1 = (function (state_10848){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_10848);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e10866){if((e10866 instanceof Object))
{var ex__6181__auto__ = e10866;var statearr_10867_10880 = state_10848;(statearr_10867_10880[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10848);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10866;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10881 = state_10848;
state_10848 = G__10881;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_10848){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_10848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_10868 = f__6193__auto__.call(null);(statearr_10868[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___10869);
return statearr_10868;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6192__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_11033){var state_val_11034 = (state_11033[1]);if((state_val_11034 === 1))
{var state_11033__$1 = state_11033;var statearr_11035_11072 = state_11033__$1;(statearr_11035_11072[2] = null);
(statearr_11035_11072[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11034 === 2))
{var state_11033__$1 = state_11033;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11033__$1,4,in$);
} else
{if((state_val_11034 === 3))
{var inst_11031 = (state_11033[2]);var state_11033__$1 = state_11033;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11033__$1,inst_11031);
} else
{if((state_val_11034 === 4))
{var inst_10979 = (state_11033[7]);var inst_10979__$1 = (state_11033[2]);var inst_10980 = (inst_10979__$1 == null);var state_11033__$1 = (function (){var statearr_11036 = state_11033;(statearr_11036[7] = inst_10979__$1);
return statearr_11036;
})();if(cljs.core.truth_(inst_10980))
{var statearr_11037_11073 = state_11033__$1;(statearr_11037_11073[1] = 5);
} else
{var statearr_11038_11074 = state_11033__$1;(statearr_11038_11074[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11034 === 5))
{var inst_10982 = cljs.core.async.close_BANG_.call(null,out);var state_11033__$1 = state_11033;var statearr_11039_11075 = state_11033__$1;(statearr_11039_11075[2] = inst_10982);
(statearr_11039_11075[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11034 === 6))
{var inst_10979 = (state_11033[7]);var inst_10984 = f.call(null,inst_10979);var inst_10989 = cljs.core.seq.call(null,inst_10984);var inst_10990 = inst_10989;var inst_10991 = null;var inst_10992 = 0;var inst_10993 = 0;var state_11033__$1 = (function (){var statearr_11040 = state_11033;(statearr_11040[8] = inst_10993);
(statearr_11040[9] = inst_10992);
(statearr_11040[10] = inst_10991);
(statearr_11040[11] = inst_10990);
return statearr_11040;
})();var statearr_11041_11076 = state_11033__$1;(statearr_11041_11076[2] = null);
(statearr_11041_11076[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11034 === 7))
{var inst_11029 = (state_11033[2]);var state_11033__$1 = state_11033;var statearr_11042_11077 = state_11033__$1;(statearr_11042_11077[2] = inst_11029);
(statearr_11042_11077[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11034 === 8))
{var inst_10993 = (state_11033[8]);var inst_10992 = (state_11033[9]);var inst_10995 = (inst_10993 < inst_10992);var inst_10996 = inst_10995;var state_11033__$1 = state_11033;if(cljs.core.truth_(inst_10996))
{var statearr_11043_11078 = state_11033__$1;(statearr_11043_11078[1] = 10);
} else
{var statearr_11044_11079 = state_11033__$1;(statearr_11044_11079[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11034 === 9))
{var inst_11026 = (state_11033[2]);var state_11033__$1 = (function (){var statearr_11045 = state_11033;(statearr_11045[12] = inst_11026);
return statearr_11045;
})();var statearr_11046_11080 = state_11033__$1;(statearr_11046_11080[2] = null);
(statearr_11046_11080[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11034 === 10))
{var inst_10993 = (state_11033[8]);var inst_10991 = (state_11033[10]);var inst_10998 = cljs.core._nth.call(null,inst_10991,inst_10993);var state_11033__$1 = state_11033;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11033__$1,13,out,inst_10998);
} else
{if((state_val_11034 === 11))
{var inst_11004 = (state_11033[13]);var inst_10990 = (state_11033[11]);var inst_11004__$1 = cljs.core.seq.call(null,inst_10990);var state_11033__$1 = (function (){var statearr_11050 = state_11033;(statearr_11050[13] = inst_11004__$1);
return statearr_11050;
})();if(inst_11004__$1)
{var statearr_11051_11081 = state_11033__$1;(statearr_11051_11081[1] = 14);
} else
{var statearr_11052_11082 = state_11033__$1;(statearr_11052_11082[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11034 === 12))
{var inst_11024 = (state_11033[2]);var state_11033__$1 = state_11033;var statearr_11053_11083 = state_11033__$1;(statearr_11053_11083[2] = inst_11024);
(statearr_11053_11083[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11034 === 13))
{var inst_10993 = (state_11033[8]);var inst_10992 = (state_11033[9]);var inst_10991 = (state_11033[10]);var inst_10990 = (state_11033[11]);var inst_11000 = (state_11033[2]);var inst_11001 = (inst_10993 + 1);var tmp11047 = inst_10992;var tmp11048 = inst_10991;var tmp11049 = inst_10990;var inst_10990__$1 = tmp11049;var inst_10991__$1 = tmp11048;var inst_10992__$1 = tmp11047;var inst_10993__$1 = inst_11001;var state_11033__$1 = (function (){var statearr_11054 = state_11033;(statearr_11054[8] = inst_10993__$1);
(statearr_11054[9] = inst_10992__$1);
(statearr_11054[10] = inst_10991__$1);
(statearr_11054[11] = inst_10990__$1);
(statearr_11054[14] = inst_11000);
return statearr_11054;
})();var statearr_11055_11084 = state_11033__$1;(statearr_11055_11084[2] = null);
(statearr_11055_11084[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11034 === 14))
{var inst_11004 = (state_11033[13]);var inst_11006 = cljs.core.chunked_seq_QMARK_.call(null,inst_11004);var state_11033__$1 = state_11033;if(inst_11006)
{var statearr_11056_11085 = state_11033__$1;(statearr_11056_11085[1] = 17);
} else
{var statearr_11057_11086 = state_11033__$1;(statearr_11057_11086[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11034 === 15))
{var state_11033__$1 = state_11033;var statearr_11058_11087 = state_11033__$1;(statearr_11058_11087[2] = null);
(statearr_11058_11087[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11034 === 16))
{var inst_11022 = (state_11033[2]);var state_11033__$1 = state_11033;var statearr_11059_11088 = state_11033__$1;(statearr_11059_11088[2] = inst_11022);
(statearr_11059_11088[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11034 === 17))
{var inst_11004 = (state_11033[13]);var inst_11008 = cljs.core.chunk_first.call(null,inst_11004);var inst_11009 = cljs.core.chunk_rest.call(null,inst_11004);var inst_11010 = cljs.core.count.call(null,inst_11008);var inst_10990 = inst_11009;var inst_10991 = inst_11008;var inst_10992 = inst_11010;var inst_10993 = 0;var state_11033__$1 = (function (){var statearr_11060 = state_11033;(statearr_11060[8] = inst_10993);
(statearr_11060[9] = inst_10992);
(statearr_11060[10] = inst_10991);
(statearr_11060[11] = inst_10990);
return statearr_11060;
})();var statearr_11061_11089 = state_11033__$1;(statearr_11061_11089[2] = null);
(statearr_11061_11089[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11034 === 18))
{var inst_11004 = (state_11033[13]);var inst_11013 = cljs.core.first.call(null,inst_11004);var state_11033__$1 = state_11033;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11033__$1,20,out,inst_11013);
} else
{if((state_val_11034 === 19))
{var inst_11019 = (state_11033[2]);var state_11033__$1 = state_11033;var statearr_11062_11090 = state_11033__$1;(statearr_11062_11090[2] = inst_11019);
(statearr_11062_11090[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11034 === 20))
{var inst_11004 = (state_11033[13]);var inst_11015 = (state_11033[2]);var inst_11016 = cljs.core.next.call(null,inst_11004);var inst_10990 = inst_11016;var inst_10991 = null;var inst_10992 = 0;var inst_10993 = 0;var state_11033__$1 = (function (){var statearr_11063 = state_11033;(statearr_11063[15] = inst_11015);
(statearr_11063[8] = inst_10993);
(statearr_11063[9] = inst_10992);
(statearr_11063[10] = inst_10991);
(statearr_11063[11] = inst_10990);
return statearr_11063;
})();var statearr_11064_11091 = state_11033__$1;(statearr_11064_11091[2] = null);
(statearr_11064_11091[1] = 8);
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
var state_machine__6178__auto____0 = (function (){var statearr_11068 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11068[0] = state_machine__6178__auto__);
(statearr_11068[1] = 1);
return statearr_11068;
});
var state_machine__6178__auto____1 = (function (state_11033){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11033);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11069){if((e11069 instanceof Object))
{var ex__6181__auto__ = e11069;var statearr_11070_11092 = state_11033;(statearr_11070_11092[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11033);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11069;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11093 = state_11033;
state_11033 = G__11093;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11033){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_11071 = f__6193__auto__.call(null);(statearr_11071[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11071;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return c__6192__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6192__auto___11174 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_11153){var state_val_11154 = (state_11153[1]);if((state_val_11154 === 1))
{var state_11153__$1 = state_11153;var statearr_11155_11175 = state_11153__$1;(statearr_11155_11175[2] = null);
(statearr_11155_11175[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11154 === 2))
{var state_11153__$1 = state_11153;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11153__$1,4,from);
} else
{if((state_val_11154 === 3))
{var inst_11151 = (state_11153[2]);var state_11153__$1 = state_11153;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11153__$1,inst_11151);
} else
{if((state_val_11154 === 4))
{var inst_11136 = (state_11153[7]);var inst_11136__$1 = (state_11153[2]);var inst_11137 = (inst_11136__$1 == null);var state_11153__$1 = (function (){var statearr_11156 = state_11153;(statearr_11156[7] = inst_11136__$1);
return statearr_11156;
})();if(cljs.core.truth_(inst_11137))
{var statearr_11157_11176 = state_11153__$1;(statearr_11157_11176[1] = 5);
} else
{var statearr_11158_11177 = state_11153__$1;(statearr_11158_11177[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11154 === 5))
{var state_11153__$1 = state_11153;if(cljs.core.truth_(close_QMARK_))
{var statearr_11159_11178 = state_11153__$1;(statearr_11159_11178[1] = 8);
} else
{var statearr_11160_11179 = state_11153__$1;(statearr_11160_11179[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11154 === 6))
{var inst_11136 = (state_11153[7]);var state_11153__$1 = state_11153;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11153__$1,11,to,inst_11136);
} else
{if((state_val_11154 === 7))
{var inst_11149 = (state_11153[2]);var state_11153__$1 = state_11153;var statearr_11161_11180 = state_11153__$1;(statearr_11161_11180[2] = inst_11149);
(statearr_11161_11180[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11154 === 8))
{var inst_11140 = cljs.core.async.close_BANG_.call(null,to);var state_11153__$1 = state_11153;var statearr_11162_11181 = state_11153__$1;(statearr_11162_11181[2] = inst_11140);
(statearr_11162_11181[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11154 === 9))
{var state_11153__$1 = state_11153;var statearr_11163_11182 = state_11153__$1;(statearr_11163_11182[2] = null);
(statearr_11163_11182[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11154 === 10))
{var inst_11143 = (state_11153[2]);var state_11153__$1 = state_11153;var statearr_11164_11183 = state_11153__$1;(statearr_11164_11183[2] = inst_11143);
(statearr_11164_11183[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11154 === 11))
{var inst_11146 = (state_11153[2]);var state_11153__$1 = (function (){var statearr_11165 = state_11153;(statearr_11165[8] = inst_11146);
return statearr_11165;
})();var statearr_11166_11184 = state_11153__$1;(statearr_11166_11184[2] = null);
(statearr_11166_11184[1] = 2);
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
var state_machine__6178__auto____0 = (function (){var statearr_11170 = [null,null,null,null,null,null,null,null,null];(statearr_11170[0] = state_machine__6178__auto__);
(statearr_11170[1] = 1);
return statearr_11170;
});
var state_machine__6178__auto____1 = (function (state_11153){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11153);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11171){if((e11171 instanceof Object))
{var ex__6181__auto__ = e11171;var statearr_11172_11185 = state_11153;(statearr_11172_11185[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11153);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11171;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11186 = state_11153;
state_11153 = G__11186;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11153){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_11173 = f__6193__auto__.call(null);(statearr_11173[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___11174);
return statearr_11173;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6192__auto___11273 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_11251){var state_val_11252 = (state_11251[1]);if((state_val_11252 === 1))
{var state_11251__$1 = state_11251;var statearr_11253_11274 = state_11251__$1;(statearr_11253_11274[2] = null);
(statearr_11253_11274[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11252 === 2))
{var state_11251__$1 = state_11251;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11251__$1,4,ch);
} else
{if((state_val_11252 === 3))
{var inst_11249 = (state_11251[2]);var state_11251__$1 = state_11251;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11251__$1,inst_11249);
} else
{if((state_val_11252 === 4))
{var inst_11232 = (state_11251[7]);var inst_11232__$1 = (state_11251[2]);var inst_11233 = (inst_11232__$1 == null);var state_11251__$1 = (function (){var statearr_11254 = state_11251;(statearr_11254[7] = inst_11232__$1);
return statearr_11254;
})();if(cljs.core.truth_(inst_11233))
{var statearr_11255_11275 = state_11251__$1;(statearr_11255_11275[1] = 5);
} else
{var statearr_11256_11276 = state_11251__$1;(statearr_11256_11276[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11252 === 5))
{var inst_11235 = cljs.core.async.close_BANG_.call(null,tc);var inst_11236 = cljs.core.async.close_BANG_.call(null,fc);var state_11251__$1 = (function (){var statearr_11257 = state_11251;(statearr_11257[8] = inst_11235);
return statearr_11257;
})();var statearr_11258_11277 = state_11251__$1;(statearr_11258_11277[2] = inst_11236);
(statearr_11258_11277[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11252 === 6))
{var inst_11232 = (state_11251[7]);var inst_11238 = p.call(null,inst_11232);var state_11251__$1 = state_11251;if(cljs.core.truth_(inst_11238))
{var statearr_11259_11278 = state_11251__$1;(statearr_11259_11278[1] = 9);
} else
{var statearr_11260_11279 = state_11251__$1;(statearr_11260_11279[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11252 === 7))
{var inst_11247 = (state_11251[2]);var state_11251__$1 = state_11251;var statearr_11261_11280 = state_11251__$1;(statearr_11261_11280[2] = inst_11247);
(statearr_11261_11280[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11252 === 8))
{var inst_11244 = (state_11251[2]);var state_11251__$1 = (function (){var statearr_11262 = state_11251;(statearr_11262[9] = inst_11244);
return statearr_11262;
})();var statearr_11263_11281 = state_11251__$1;(statearr_11263_11281[2] = null);
(statearr_11263_11281[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11252 === 9))
{var state_11251__$1 = state_11251;var statearr_11264_11282 = state_11251__$1;(statearr_11264_11282[2] = tc);
(statearr_11264_11282[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11252 === 10))
{var state_11251__$1 = state_11251;var statearr_11265_11283 = state_11251__$1;(statearr_11265_11283[2] = fc);
(statearr_11265_11283[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11252 === 11))
{var inst_11232 = (state_11251[7]);var inst_11242 = (state_11251[2]);var state_11251__$1 = state_11251;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11251__$1,8,inst_11242,inst_11232);
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
var state_machine__6178__auto____0 = (function (){var statearr_11269 = [null,null,null,null,null,null,null,null,null,null];(statearr_11269[0] = state_machine__6178__auto__);
(statearr_11269[1] = 1);
return statearr_11269;
});
var state_machine__6178__auto____1 = (function (state_11251){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11251);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11270){if((e11270 instanceof Object))
{var ex__6181__auto__ = e11270;var statearr_11271_11284 = state_11251;(statearr_11271_11284[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11251);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11270;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11285 = state_11251;
state_11251 = G__11285;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11251){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_11272 = f__6193__auto__.call(null);(statearr_11272[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___11273);
return statearr_11272;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6192__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_11332){var state_val_11333 = (state_11332[1]);if((state_val_11333 === 7))
{var inst_11328 = (state_11332[2]);var state_11332__$1 = state_11332;var statearr_11334_11350 = state_11332__$1;(statearr_11334_11350[2] = inst_11328);
(statearr_11334_11350[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11333 === 6))
{var inst_11318 = (state_11332[7]);var inst_11321 = (state_11332[8]);var inst_11325 = f.call(null,inst_11318,inst_11321);var inst_11318__$1 = inst_11325;var state_11332__$1 = (function (){var statearr_11335 = state_11332;(statearr_11335[7] = inst_11318__$1);
return statearr_11335;
})();var statearr_11336_11351 = state_11332__$1;(statearr_11336_11351[2] = null);
(statearr_11336_11351[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11333 === 5))
{var inst_11318 = (state_11332[7]);var state_11332__$1 = state_11332;var statearr_11337_11352 = state_11332__$1;(statearr_11337_11352[2] = inst_11318);
(statearr_11337_11352[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11333 === 4))
{var inst_11321 = (state_11332[8]);var inst_11321__$1 = (state_11332[2]);var inst_11322 = (inst_11321__$1 == null);var state_11332__$1 = (function (){var statearr_11338 = state_11332;(statearr_11338[8] = inst_11321__$1);
return statearr_11338;
})();if(cljs.core.truth_(inst_11322))
{var statearr_11339_11353 = state_11332__$1;(statearr_11339_11353[1] = 5);
} else
{var statearr_11340_11354 = state_11332__$1;(statearr_11340_11354[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11333 === 3))
{var inst_11330 = (state_11332[2]);var state_11332__$1 = state_11332;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11332__$1,inst_11330);
} else
{if((state_val_11333 === 2))
{var state_11332__$1 = state_11332;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11332__$1,4,ch);
} else
{if((state_val_11333 === 1))
{var inst_11318 = init;var state_11332__$1 = (function (){var statearr_11341 = state_11332;(statearr_11341[7] = inst_11318);
return statearr_11341;
})();var statearr_11342_11355 = state_11332__$1;(statearr_11342_11355[2] = null);
(statearr_11342_11355[1] = 2);
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
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11346 = [null,null,null,null,null,null,null,null,null];(statearr_11346[0] = state_machine__6178__auto__);
(statearr_11346[1] = 1);
return statearr_11346;
});
var state_machine__6178__auto____1 = (function (state_11332){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11332);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11347){if((e11347 instanceof Object))
{var ex__6181__auto__ = e11347;var statearr_11348_11356 = state_11332;(statearr_11348_11356[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11332);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11347;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11357 = state_11332;
state_11332 = G__11357;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11332){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11332);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_11349 = f__6193__auto__.call(null);(statearr_11349[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11349;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return c__6192__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6192__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_11419){var state_val_11420 = (state_11419[1]);if((state_val_11420 === 1))
{var inst_11399 = cljs.core.seq.call(null,coll);var inst_11400 = inst_11399;var state_11419__$1 = (function (){var statearr_11421 = state_11419;(statearr_11421[7] = inst_11400);
return statearr_11421;
})();var statearr_11422_11440 = state_11419__$1;(statearr_11422_11440[2] = null);
(statearr_11422_11440[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11420 === 2))
{var inst_11400 = (state_11419[7]);var state_11419__$1 = state_11419;if(cljs.core.truth_(inst_11400))
{var statearr_11423_11441 = state_11419__$1;(statearr_11423_11441[1] = 4);
} else
{var statearr_11424_11442 = state_11419__$1;(statearr_11424_11442[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11420 === 3))
{var inst_11417 = (state_11419[2]);var state_11419__$1 = state_11419;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11419__$1,inst_11417);
} else
{if((state_val_11420 === 4))
{var inst_11400 = (state_11419[7]);var inst_11403 = cljs.core.first.call(null,inst_11400);var state_11419__$1 = state_11419;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11419__$1,7,ch,inst_11403);
} else
{if((state_val_11420 === 5))
{var state_11419__$1 = state_11419;if(cljs.core.truth_(close_QMARK_))
{var statearr_11425_11443 = state_11419__$1;(statearr_11425_11443[1] = 8);
} else
{var statearr_11426_11444 = state_11419__$1;(statearr_11426_11444[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11420 === 6))
{var inst_11415 = (state_11419[2]);var state_11419__$1 = state_11419;var statearr_11427_11445 = state_11419__$1;(statearr_11427_11445[2] = inst_11415);
(statearr_11427_11445[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11420 === 7))
{var inst_11400 = (state_11419[7]);var inst_11405 = (state_11419[2]);var inst_11406 = cljs.core.next.call(null,inst_11400);var inst_11400__$1 = inst_11406;var state_11419__$1 = (function (){var statearr_11428 = state_11419;(statearr_11428[8] = inst_11405);
(statearr_11428[7] = inst_11400__$1);
return statearr_11428;
})();var statearr_11429_11446 = state_11419__$1;(statearr_11429_11446[2] = null);
(statearr_11429_11446[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11420 === 8))
{var inst_11410 = cljs.core.async.close_BANG_.call(null,ch);var state_11419__$1 = state_11419;var statearr_11430_11447 = state_11419__$1;(statearr_11430_11447[2] = inst_11410);
(statearr_11430_11447[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11420 === 9))
{var state_11419__$1 = state_11419;var statearr_11431_11448 = state_11419__$1;(statearr_11431_11448[2] = null);
(statearr_11431_11448[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11420 === 10))
{var inst_11413 = (state_11419[2]);var state_11419__$1 = state_11419;var statearr_11432_11449 = state_11419__$1;(statearr_11432_11449[2] = inst_11413);
(statearr_11432_11449[1] = 6);
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
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11436 = [null,null,null,null,null,null,null,null,null];(statearr_11436[0] = state_machine__6178__auto__);
(statearr_11436[1] = 1);
return statearr_11436;
});
var state_machine__6178__auto____1 = (function (state_11419){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11419);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11437){if((e11437 instanceof Object))
{var ex__6181__auto__ = e11437;var statearr_11438_11450 = state_11419;(statearr_11438_11450[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11419);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11437;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11451 = state_11419;
state_11419 = G__11451;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11419){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_11439 = f__6193__auto__.call(null);(statearr_11439[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11439;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return c__6192__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj11453 = {};return obj11453;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3431__auto__ = _;if(and__3431__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4070__auto__ = (((_ == null))?null:_);return (function (){var or__3443__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj11455 = {};return obj11455;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t11679 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11679 = (function (cs,ch,mult,meta11680){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta11680 = meta11680;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11679.cljs$lang$type = true;
cljs.core.async.t11679.cljs$lang$ctorStr = "cljs.core.async/t11679";
cljs.core.async.t11679.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11679");
});})(cs))
;
cljs.core.async.t11679.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t11679.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t11679.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t11679.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t11679.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11679.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t11679.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11681){var self__ = this;
var _11681__$1 = this;return self__.meta11680;
});})(cs))
;
cljs.core.async.t11679.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11681,meta11680__$1){var self__ = this;
var _11681__$1 = this;return (new cljs.core.async.t11679(self__.cs,self__.ch,self__.mult,meta11680__$1));
});})(cs))
;
cljs.core.async.__GT_t11679 = ((function (cs){
return (function __GT_t11679(cs__$1,ch__$1,mult__$1,meta11680){return (new cljs.core.async.t11679(cs__$1,ch__$1,mult__$1,meta11680));
});})(cs))
;
}
return (new cljs.core.async.t11679(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6192__auto___11902 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_11816){var state_val_11817 = (state_11816[1]);if((state_val_11817 === 32))
{var inst_11684 = (state_11816[7]);var inst_11760 = (state_11816[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11816,31,Object,null,30);var inst_11767 = cljs.core.async.put_BANG_.call(null,inst_11760,inst_11684,done);var state_11816__$1 = state_11816;var statearr_11818_11903 = state_11816__$1;(statearr_11818_11903[2] = inst_11767);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11816__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11817 === 1))
{var state_11816__$1 = state_11816;var statearr_11819_11904 = state_11816__$1;(statearr_11819_11904[2] = null);
(statearr_11819_11904[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11817 === 33))
{var inst_11773 = (state_11816[9]);var inst_11775 = cljs.core.chunked_seq_QMARK_.call(null,inst_11773);var state_11816__$1 = state_11816;if(inst_11775)
{var statearr_11820_11905 = state_11816__$1;(statearr_11820_11905[1] = 36);
} else
{var statearr_11821_11906 = state_11816__$1;(statearr_11821_11906[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11817 === 2))
{var state_11816__$1 = state_11816;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11816__$1,4,ch);
} else
{if((state_val_11817 === 34))
{var state_11816__$1 = state_11816;var statearr_11822_11907 = state_11816__$1;(statearr_11822_11907[2] = null);
(statearr_11822_11907[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11817 === 3))
{var inst_11814 = (state_11816[2]);var state_11816__$1 = state_11816;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11816__$1,inst_11814);
} else
{if((state_val_11817 === 35))
{var inst_11798 = (state_11816[2]);var state_11816__$1 = state_11816;var statearr_11823_11908 = state_11816__$1;(statearr_11823_11908[2] = inst_11798);
(statearr_11823_11908[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11817 === 4))
{var inst_11684 = (state_11816[7]);var inst_11684__$1 = (state_11816[2]);var inst_11685 = (inst_11684__$1 == null);var state_11816__$1 = (function (){var statearr_11824 = state_11816;(statearr_11824[7] = inst_11684__$1);
return statearr_11824;
})();if(cljs.core.truth_(inst_11685))
{var statearr_11825_11909 = state_11816__$1;(statearr_11825_11909[1] = 5);
} else
{var statearr_11826_11910 = state_11816__$1;(statearr_11826_11910[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11817 === 36))
{var inst_11773 = (state_11816[9]);var inst_11777 = cljs.core.chunk_first.call(null,inst_11773);var inst_11778 = cljs.core.chunk_rest.call(null,inst_11773);var inst_11779 = cljs.core.count.call(null,inst_11777);var inst_11752 = inst_11778;var inst_11753 = inst_11777;var inst_11754 = inst_11779;var inst_11755 = 0;var state_11816__$1 = (function (){var statearr_11827 = state_11816;(statearr_11827[10] = inst_11753);
(statearr_11827[11] = inst_11754);
(statearr_11827[12] = inst_11755);
(statearr_11827[13] = inst_11752);
return statearr_11827;
})();var statearr_11828_11911 = state_11816__$1;(statearr_11828_11911[2] = null);
(statearr_11828_11911[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11817 === 5))
{var inst_11691 = cljs.core.deref.call(null,cs);var inst_11692 = cljs.core.seq.call(null,inst_11691);var inst_11693 = inst_11692;var inst_11694 = null;var inst_11695 = 0;var inst_11696 = 0;var state_11816__$1 = (function (){var statearr_11829 = state_11816;(statearr_11829[14] = inst_11693);
(statearr_11829[15] = inst_11696);
(statearr_11829[16] = inst_11695);
(statearr_11829[17] = inst_11694);
return statearr_11829;
})();var statearr_11830_11912 = state_11816__$1;(statearr_11830_11912[2] = null);
(statearr_11830_11912[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11817 === 37))
{var inst_11773 = (state_11816[9]);var inst_11782 = cljs.core.first.call(null,inst_11773);var state_11816__$1 = (function (){var statearr_11831 = state_11816;(statearr_11831[18] = inst_11782);
return statearr_11831;
})();var statearr_11832_11913 = state_11816__$1;(statearr_11832_11913[2] = null);
(statearr_11832_11913[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11817 === 6))
{var inst_11744 = (state_11816[19]);var inst_11743 = cljs.core.deref.call(null,cs);var inst_11744__$1 = cljs.core.keys.call(null,inst_11743);var inst_11745 = cljs.core.count.call(null,inst_11744__$1);var inst_11746 = cljs.core.reset_BANG_.call(null,dctr,inst_11745);var inst_11751 = cljs.core.seq.call(null,inst_11744__$1);var inst_11752 = inst_11751;var inst_11753 = null;var inst_11754 = 0;var inst_11755 = 0;var state_11816__$1 = (function (){var statearr_11833 = state_11816;(statearr_11833[20] = inst_11746);
(statearr_11833[10] = inst_11753);
(statearr_11833[11] = inst_11754);
(statearr_11833[12] = inst_11755);
(statearr_11833[13] = inst_11752);
(statearr_11833[19] = inst_11744__$1);
return statearr_11833;
})();var statearr_11834_11914 = state_11816__$1;(statearr_11834_11914[2] = null);
(statearr_11834_11914[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11817 === 38))
{var inst_11795 = (state_11816[2]);var state_11816__$1 = state_11816;var statearr_11835_11915 = state_11816__$1;(statearr_11835_11915[2] = inst_11795);
(statearr_11835_11915[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11817 === 7))
{var inst_11812 = (state_11816[2]);var state_11816__$1 = state_11816;var statearr_11836_11916 = state_11816__$1;(statearr_11836_11916[2] = inst_11812);
(statearr_11836_11916[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11817 === 39))
{var inst_11773 = (state_11816[9]);var inst_11791 = (state_11816[2]);var inst_11792 = cljs.core.next.call(null,inst_11773);var inst_11752 = inst_11792;var inst_11753 = null;var inst_11754 = 0;var inst_11755 = 0;var state_11816__$1 = (function (){var statearr_11837 = state_11816;(statearr_11837[21] = inst_11791);
(statearr_11837[10] = inst_11753);
(statearr_11837[11] = inst_11754);
(statearr_11837[12] = inst_11755);
(statearr_11837[13] = inst_11752);
return statearr_11837;
})();var statearr_11838_11917 = state_11816__$1;(statearr_11838_11917[2] = null);
(statearr_11838_11917[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11817 === 8))
{var inst_11696 = (state_11816[15]);var inst_11695 = (state_11816[16]);var inst_11698 = (inst_11696 < inst_11695);var inst_11699 = inst_11698;var state_11816__$1 = state_11816;if(cljs.core.truth_(inst_11699))
{var statearr_11839_11918 = state_11816__$1;(statearr_11839_11918[1] = 10);
} else
{var statearr_11840_11919 = state_11816__$1;(statearr_11840_11919[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11817 === 40))
{var inst_11782 = (state_11816[18]);var inst_11783 = (state_11816[2]);var inst_11784 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11785 = cljs.core.async.untap_STAR_.call(null,m,inst_11782);var state_11816__$1 = (function (){var statearr_11841 = state_11816;(statearr_11841[22] = inst_11784);
(statearr_11841[23] = inst_11783);
return statearr_11841;
})();var statearr_11842_11920 = state_11816__$1;(statearr_11842_11920[2] = inst_11785);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11816__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11817 === 9))
{var inst_11741 = (state_11816[2]);var state_11816__$1 = state_11816;var statearr_11843_11921 = state_11816__$1;(statearr_11843_11921[2] = inst_11741);
(statearr_11843_11921[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11817 === 41))
{var inst_11782 = (state_11816[18]);var inst_11684 = (state_11816[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11816,40,Object,null,39);var inst_11789 = cljs.core.async.put_BANG_.call(null,inst_11782,inst_11684,done);var state_11816__$1 = state_11816;var statearr_11844_11922 = state_11816__$1;(statearr_11844_11922[2] = inst_11789);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11816__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11817 === 10))
{var inst_11696 = (state_11816[15]);var inst_11694 = (state_11816[17]);var inst_11702 = cljs.core._nth.call(null,inst_11694,inst_11696);var inst_11703 = cljs.core.nth.call(null,inst_11702,0,null);var inst_11704 = cljs.core.nth.call(null,inst_11702,1,null);var state_11816__$1 = (function (){var statearr_11845 = state_11816;(statearr_11845[24] = inst_11703);
return statearr_11845;
})();if(cljs.core.truth_(inst_11704))
{var statearr_11846_11923 = state_11816__$1;(statearr_11846_11923[1] = 13);
} else
{var statearr_11847_11924 = state_11816__$1;(statearr_11847_11924[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11817 === 42))
{var state_11816__$1 = state_11816;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11816__$1,45,dchan);
} else
{if((state_val_11817 === 11))
{var inst_11693 = (state_11816[14]);var inst_11713 = (state_11816[25]);var inst_11713__$1 = cljs.core.seq.call(null,inst_11693);var state_11816__$1 = (function (){var statearr_11848 = state_11816;(statearr_11848[25] = inst_11713__$1);
return statearr_11848;
})();if(inst_11713__$1)
{var statearr_11849_11925 = state_11816__$1;(statearr_11849_11925[1] = 16);
} else
{var statearr_11850_11926 = state_11816__$1;(statearr_11850_11926[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11817 === 43))
{var state_11816__$1 = state_11816;var statearr_11851_11927 = state_11816__$1;(statearr_11851_11927[2] = null);
(statearr_11851_11927[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11817 === 12))
{var inst_11739 = (state_11816[2]);var state_11816__$1 = state_11816;var statearr_11852_11928 = state_11816__$1;(statearr_11852_11928[2] = inst_11739);
(statearr_11852_11928[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11817 === 44))
{var inst_11809 = (state_11816[2]);var state_11816__$1 = (function (){var statearr_11853 = state_11816;(statearr_11853[26] = inst_11809);
return statearr_11853;
})();var statearr_11854_11929 = state_11816__$1;(statearr_11854_11929[2] = null);
(statearr_11854_11929[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11817 === 13))
{var inst_11703 = (state_11816[24]);var inst_11706 = cljs.core.async.close_BANG_.call(null,inst_11703);var state_11816__$1 = state_11816;var statearr_11855_11930 = state_11816__$1;(statearr_11855_11930[2] = inst_11706);
(statearr_11855_11930[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11817 === 45))
{var inst_11806 = (state_11816[2]);var state_11816__$1 = state_11816;var statearr_11859_11931 = state_11816__$1;(statearr_11859_11931[2] = inst_11806);
(statearr_11859_11931[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11817 === 14))
{var state_11816__$1 = state_11816;var statearr_11860_11932 = state_11816__$1;(statearr_11860_11932[2] = null);
(statearr_11860_11932[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11817 === 15))
{var inst_11693 = (state_11816[14]);var inst_11696 = (state_11816[15]);var inst_11695 = (state_11816[16]);var inst_11694 = (state_11816[17]);var inst_11709 = (state_11816[2]);var inst_11710 = (inst_11696 + 1);var tmp11856 = inst_11693;var tmp11857 = inst_11695;var tmp11858 = inst_11694;var inst_11693__$1 = tmp11856;var inst_11694__$1 = tmp11858;var inst_11695__$1 = tmp11857;var inst_11696__$1 = inst_11710;var state_11816__$1 = (function (){var statearr_11861 = state_11816;(statearr_11861[14] = inst_11693__$1);
(statearr_11861[27] = inst_11709);
(statearr_11861[15] = inst_11696__$1);
(statearr_11861[16] = inst_11695__$1);
(statearr_11861[17] = inst_11694__$1);
return statearr_11861;
})();var statearr_11862_11933 = state_11816__$1;(statearr_11862_11933[2] = null);
(statearr_11862_11933[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11817 === 16))
{var inst_11713 = (state_11816[25]);var inst_11715 = cljs.core.chunked_seq_QMARK_.call(null,inst_11713);var state_11816__$1 = state_11816;if(inst_11715)
{var statearr_11863_11934 = state_11816__$1;(statearr_11863_11934[1] = 19);
} else
{var statearr_11864_11935 = state_11816__$1;(statearr_11864_11935[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11817 === 17))
{var state_11816__$1 = state_11816;var statearr_11865_11936 = state_11816__$1;(statearr_11865_11936[2] = null);
(statearr_11865_11936[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11817 === 18))
{var inst_11737 = (state_11816[2]);var state_11816__$1 = state_11816;var statearr_11866_11937 = state_11816__$1;(statearr_11866_11937[2] = inst_11737);
(statearr_11866_11937[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11817 === 19))
{var inst_11713 = (state_11816[25]);var inst_11717 = cljs.core.chunk_first.call(null,inst_11713);var inst_11718 = cljs.core.chunk_rest.call(null,inst_11713);var inst_11719 = cljs.core.count.call(null,inst_11717);var inst_11693 = inst_11718;var inst_11694 = inst_11717;var inst_11695 = inst_11719;var inst_11696 = 0;var state_11816__$1 = (function (){var statearr_11867 = state_11816;(statearr_11867[14] = inst_11693);
(statearr_11867[15] = inst_11696);
(statearr_11867[16] = inst_11695);
(statearr_11867[17] = inst_11694);
return statearr_11867;
})();var statearr_11868_11938 = state_11816__$1;(statearr_11868_11938[2] = null);
(statearr_11868_11938[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11817 === 20))
{var inst_11713 = (state_11816[25]);var inst_11723 = cljs.core.first.call(null,inst_11713);var inst_11724 = cljs.core.nth.call(null,inst_11723,0,null);var inst_11725 = cljs.core.nth.call(null,inst_11723,1,null);var state_11816__$1 = (function (){var statearr_11869 = state_11816;(statearr_11869[28] = inst_11724);
return statearr_11869;
})();if(cljs.core.truth_(inst_11725))
{var statearr_11870_11939 = state_11816__$1;(statearr_11870_11939[1] = 22);
} else
{var statearr_11871_11940 = state_11816__$1;(statearr_11871_11940[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11817 === 21))
{var inst_11734 = (state_11816[2]);var state_11816__$1 = state_11816;var statearr_11872_11941 = state_11816__$1;(statearr_11872_11941[2] = inst_11734);
(statearr_11872_11941[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11817 === 22))
{var inst_11724 = (state_11816[28]);var inst_11727 = cljs.core.async.close_BANG_.call(null,inst_11724);var state_11816__$1 = state_11816;var statearr_11873_11942 = state_11816__$1;(statearr_11873_11942[2] = inst_11727);
(statearr_11873_11942[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11817 === 23))
{var state_11816__$1 = state_11816;var statearr_11874_11943 = state_11816__$1;(statearr_11874_11943[2] = null);
(statearr_11874_11943[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11817 === 24))
{var inst_11713 = (state_11816[25]);var inst_11730 = (state_11816[2]);var inst_11731 = cljs.core.next.call(null,inst_11713);var inst_11693 = inst_11731;var inst_11694 = null;var inst_11695 = 0;var inst_11696 = 0;var state_11816__$1 = (function (){var statearr_11875 = state_11816;(statearr_11875[14] = inst_11693);
(statearr_11875[29] = inst_11730);
(statearr_11875[15] = inst_11696);
(statearr_11875[16] = inst_11695);
(statearr_11875[17] = inst_11694);
return statearr_11875;
})();var statearr_11876_11944 = state_11816__$1;(statearr_11876_11944[2] = null);
(statearr_11876_11944[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11817 === 25))
{var inst_11754 = (state_11816[11]);var inst_11755 = (state_11816[12]);var inst_11757 = (inst_11755 < inst_11754);var inst_11758 = inst_11757;var state_11816__$1 = state_11816;if(cljs.core.truth_(inst_11758))
{var statearr_11877_11945 = state_11816__$1;(statearr_11877_11945[1] = 27);
} else
{var statearr_11878_11946 = state_11816__$1;(statearr_11878_11946[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11817 === 26))
{var inst_11744 = (state_11816[19]);var inst_11802 = (state_11816[2]);var inst_11803 = cljs.core.seq.call(null,inst_11744);var state_11816__$1 = (function (){var statearr_11879 = state_11816;(statearr_11879[30] = inst_11802);
return statearr_11879;
})();if(inst_11803)
{var statearr_11880_11947 = state_11816__$1;(statearr_11880_11947[1] = 42);
} else
{var statearr_11881_11948 = state_11816__$1;(statearr_11881_11948[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11817 === 27))
{var inst_11753 = (state_11816[10]);var inst_11755 = (state_11816[12]);var inst_11760 = cljs.core._nth.call(null,inst_11753,inst_11755);var state_11816__$1 = (function (){var statearr_11882 = state_11816;(statearr_11882[8] = inst_11760);
return statearr_11882;
})();var statearr_11883_11949 = state_11816__$1;(statearr_11883_11949[2] = null);
(statearr_11883_11949[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11817 === 28))
{var inst_11773 = (state_11816[9]);var inst_11752 = (state_11816[13]);var inst_11773__$1 = cljs.core.seq.call(null,inst_11752);var state_11816__$1 = (function (){var statearr_11887 = state_11816;(statearr_11887[9] = inst_11773__$1);
return statearr_11887;
})();if(inst_11773__$1)
{var statearr_11888_11950 = state_11816__$1;(statearr_11888_11950[1] = 33);
} else
{var statearr_11889_11951 = state_11816__$1;(statearr_11889_11951[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11817 === 29))
{var inst_11800 = (state_11816[2]);var state_11816__$1 = state_11816;var statearr_11890_11952 = state_11816__$1;(statearr_11890_11952[2] = inst_11800);
(statearr_11890_11952[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11817 === 30))
{var inst_11753 = (state_11816[10]);var inst_11754 = (state_11816[11]);var inst_11755 = (state_11816[12]);var inst_11752 = (state_11816[13]);var inst_11769 = (state_11816[2]);var inst_11770 = (inst_11755 + 1);var tmp11884 = inst_11753;var tmp11885 = inst_11754;var tmp11886 = inst_11752;var inst_11752__$1 = tmp11886;var inst_11753__$1 = tmp11884;var inst_11754__$1 = tmp11885;var inst_11755__$1 = inst_11770;var state_11816__$1 = (function (){var statearr_11891 = state_11816;(statearr_11891[31] = inst_11769);
(statearr_11891[10] = inst_11753__$1);
(statearr_11891[11] = inst_11754__$1);
(statearr_11891[12] = inst_11755__$1);
(statearr_11891[13] = inst_11752__$1);
return statearr_11891;
})();var statearr_11892_11953 = state_11816__$1;(statearr_11892_11953[2] = null);
(statearr_11892_11953[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11817 === 31))
{var inst_11760 = (state_11816[8]);var inst_11761 = (state_11816[2]);var inst_11762 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11763 = cljs.core.async.untap_STAR_.call(null,m,inst_11760);var state_11816__$1 = (function (){var statearr_11893 = state_11816;(statearr_11893[32] = inst_11762);
(statearr_11893[33] = inst_11761);
return statearr_11893;
})();var statearr_11894_11954 = state_11816__$1;(statearr_11894_11954[2] = inst_11763);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11816__$1);
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
}
}
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11898 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11898[0] = state_machine__6178__auto__);
(statearr_11898[1] = 1);
return statearr_11898;
});
var state_machine__6178__auto____1 = (function (state_11816){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11816);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11899){if((e11899 instanceof Object))
{var ex__6181__auto__ = e11899;var statearr_11900_11955 = state_11816;(statearr_11900_11955[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11816);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11899;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11956 = state_11816;
state_11816 = G__11956;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11816){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_11901 = f__6193__auto__.call(null);(statearr_11901[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___11902);
return statearr_11901;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj11958 = {};return obj11958;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t12068 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12068 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta12069){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta12069 = meta12069;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12068.cljs$lang$type = true;
cljs.core.async.t12068.cljs$lang$ctorStr = "cljs.core.async/t12068";
cljs.core.async.t12068.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t12068");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12068.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12068.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12068.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12068.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12068.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12068.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12068.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12068.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12068.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12070){var self__ = this;
var _12070__$1 = this;return self__.meta12069;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12068.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12070,meta12069__$1){var self__ = this;
var _12070__$1 = this;return (new cljs.core.async.t12068(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta12069__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12068 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12068(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta12069){return (new cljs.core.async.t12068(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta12069));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12068(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__6192__auto___12177 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_12135){var state_val_12136 = (state_12135[1]);if((state_val_12136 === 1))
{var inst_12074 = (state_12135[7]);var inst_12074__$1 = calc_state.call(null);var inst_12075 = cljs.core.seq_QMARK_.call(null,inst_12074__$1);var state_12135__$1 = (function (){var statearr_12137 = state_12135;(statearr_12137[7] = inst_12074__$1);
return statearr_12137;
})();if(inst_12075)
{var statearr_12138_12178 = state_12135__$1;(statearr_12138_12178[1] = 2);
} else
{var statearr_12139_12179 = state_12135__$1;(statearr_12139_12179[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12136 === 2))
{var inst_12074 = (state_12135[7]);var inst_12077 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12074);var state_12135__$1 = state_12135;var statearr_12140_12180 = state_12135__$1;(statearr_12140_12180[2] = inst_12077);
(statearr_12140_12180[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12136 === 3))
{var inst_12074 = (state_12135[7]);var state_12135__$1 = state_12135;var statearr_12141_12181 = state_12135__$1;(statearr_12141_12181[2] = inst_12074);
(statearr_12141_12181[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12136 === 4))
{var inst_12074 = (state_12135[7]);var inst_12080 = (state_12135[2]);var inst_12081 = cljs.core.get.call(null,inst_12080,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12082 = cljs.core.get.call(null,inst_12080,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12083 = cljs.core.get.call(null,inst_12080,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_12084 = inst_12074;var state_12135__$1 = (function (){var statearr_12142 = state_12135;(statearr_12142[8] = inst_12081);
(statearr_12142[9] = inst_12083);
(statearr_12142[10] = inst_12082);
(statearr_12142[11] = inst_12084);
return statearr_12142;
})();var statearr_12143_12182 = state_12135__$1;(statearr_12143_12182[2] = null);
(statearr_12143_12182[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12136 === 5))
{var inst_12084 = (state_12135[11]);var inst_12087 = cljs.core.seq_QMARK_.call(null,inst_12084);var state_12135__$1 = state_12135;if(inst_12087)
{var statearr_12144_12183 = state_12135__$1;(statearr_12144_12183[1] = 7);
} else
{var statearr_12145_12184 = state_12135__$1;(statearr_12145_12184[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12136 === 6))
{var inst_12133 = (state_12135[2]);var state_12135__$1 = state_12135;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12135__$1,inst_12133);
} else
{if((state_val_12136 === 7))
{var inst_12084 = (state_12135[11]);var inst_12089 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12084);var state_12135__$1 = state_12135;var statearr_12146_12185 = state_12135__$1;(statearr_12146_12185[2] = inst_12089);
(statearr_12146_12185[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12136 === 8))
{var inst_12084 = (state_12135[11]);var state_12135__$1 = state_12135;var statearr_12147_12186 = state_12135__$1;(statearr_12147_12186[2] = inst_12084);
(statearr_12147_12186[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12136 === 9))
{var inst_12092 = (state_12135[12]);var inst_12092__$1 = (state_12135[2]);var inst_12093 = cljs.core.get.call(null,inst_12092__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12094 = cljs.core.get.call(null,inst_12092__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12095 = cljs.core.get.call(null,inst_12092__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_12135__$1 = (function (){var statearr_12148 = state_12135;(statearr_12148[12] = inst_12092__$1);
(statearr_12148[13] = inst_12094);
(statearr_12148[14] = inst_12095);
return statearr_12148;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12135__$1,10,inst_12093);
} else
{if((state_val_12136 === 10))
{var inst_12100 = (state_12135[15]);var inst_12099 = (state_12135[16]);var inst_12098 = (state_12135[2]);var inst_12099__$1 = cljs.core.nth.call(null,inst_12098,0,null);var inst_12100__$1 = cljs.core.nth.call(null,inst_12098,1,null);var inst_12101 = (inst_12099__$1 == null);var inst_12102 = cljs.core._EQ_.call(null,inst_12100__$1,change);var inst_12103 = (inst_12101) || (inst_12102);var state_12135__$1 = (function (){var statearr_12149 = state_12135;(statearr_12149[15] = inst_12100__$1);
(statearr_12149[16] = inst_12099__$1);
return statearr_12149;
})();if(cljs.core.truth_(inst_12103))
{var statearr_12150_12187 = state_12135__$1;(statearr_12150_12187[1] = 11);
} else
{var statearr_12151_12188 = state_12135__$1;(statearr_12151_12188[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12136 === 11))
{var inst_12099 = (state_12135[16]);var inst_12105 = (inst_12099 == null);var state_12135__$1 = state_12135;if(cljs.core.truth_(inst_12105))
{var statearr_12152_12189 = state_12135__$1;(statearr_12152_12189[1] = 14);
} else
{var statearr_12153_12190 = state_12135__$1;(statearr_12153_12190[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12136 === 12))
{var inst_12100 = (state_12135[15]);var inst_12114 = (state_12135[17]);var inst_12095 = (state_12135[14]);var inst_12114__$1 = inst_12095.call(null,inst_12100);var state_12135__$1 = (function (){var statearr_12154 = state_12135;(statearr_12154[17] = inst_12114__$1);
return statearr_12154;
})();if(cljs.core.truth_(inst_12114__$1))
{var statearr_12155_12191 = state_12135__$1;(statearr_12155_12191[1] = 17);
} else
{var statearr_12156_12192 = state_12135__$1;(statearr_12156_12192[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12136 === 13))
{var inst_12131 = (state_12135[2]);var state_12135__$1 = state_12135;var statearr_12157_12193 = state_12135__$1;(statearr_12157_12193[2] = inst_12131);
(statearr_12157_12193[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12136 === 14))
{var inst_12100 = (state_12135[15]);var inst_12107 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12100);var state_12135__$1 = state_12135;var statearr_12158_12194 = state_12135__$1;(statearr_12158_12194[2] = inst_12107);
(statearr_12158_12194[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12136 === 15))
{var state_12135__$1 = state_12135;var statearr_12159_12195 = state_12135__$1;(statearr_12159_12195[2] = null);
(statearr_12159_12195[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12136 === 16))
{var inst_12110 = (state_12135[2]);var inst_12111 = calc_state.call(null);var inst_12084 = inst_12111;var state_12135__$1 = (function (){var statearr_12160 = state_12135;(statearr_12160[18] = inst_12110);
(statearr_12160[11] = inst_12084);
return statearr_12160;
})();var statearr_12161_12196 = state_12135__$1;(statearr_12161_12196[2] = null);
(statearr_12161_12196[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12136 === 17))
{var inst_12114 = (state_12135[17]);var state_12135__$1 = state_12135;var statearr_12162_12197 = state_12135__$1;(statearr_12162_12197[2] = inst_12114);
(statearr_12162_12197[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12136 === 18))
{var inst_12100 = (state_12135[15]);var inst_12094 = (state_12135[13]);var inst_12095 = (state_12135[14]);var inst_12117 = cljs.core.empty_QMARK_.call(null,inst_12095);var inst_12118 = inst_12094.call(null,inst_12100);var inst_12119 = cljs.core.not.call(null,inst_12118);var inst_12120 = (inst_12117) && (inst_12119);var state_12135__$1 = state_12135;var statearr_12163_12198 = state_12135__$1;(statearr_12163_12198[2] = inst_12120);
(statearr_12163_12198[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12136 === 19))
{var inst_12122 = (state_12135[2]);var state_12135__$1 = state_12135;if(cljs.core.truth_(inst_12122))
{var statearr_12164_12199 = state_12135__$1;(statearr_12164_12199[1] = 20);
} else
{var statearr_12165_12200 = state_12135__$1;(statearr_12165_12200[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12136 === 20))
{var inst_12099 = (state_12135[16]);var state_12135__$1 = state_12135;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12135__$1,23,out,inst_12099);
} else
{if((state_val_12136 === 21))
{var state_12135__$1 = state_12135;var statearr_12166_12201 = state_12135__$1;(statearr_12166_12201[2] = null);
(statearr_12166_12201[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12136 === 22))
{var inst_12092 = (state_12135[12]);var inst_12128 = (state_12135[2]);var inst_12084 = inst_12092;var state_12135__$1 = (function (){var statearr_12167 = state_12135;(statearr_12167[19] = inst_12128);
(statearr_12167[11] = inst_12084);
return statearr_12167;
})();var statearr_12168_12202 = state_12135__$1;(statearr_12168_12202[2] = null);
(statearr_12168_12202[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12136 === 23))
{var inst_12125 = (state_12135[2]);var state_12135__$1 = state_12135;var statearr_12169_12203 = state_12135__$1;(statearr_12169_12203[2] = inst_12125);
(statearr_12169_12203[1] = 22);
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
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12173 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12173[0] = state_machine__6178__auto__);
(statearr_12173[1] = 1);
return statearr_12173;
});
var state_machine__6178__auto____1 = (function (state_12135){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12135);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12174){if((e12174 instanceof Object))
{var ex__6181__auto__ = e12174;var statearr_12175_12204 = state_12135;(statearr_12175_12204[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12135);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12174;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12205 = state_12135;
state_12135 = G__12205;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12135){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_12176 = f__6193__auto__.call(null);(statearr_12176[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___12177);
return statearr_12176;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj12207 = {};return obj12207;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3443__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3443__auto__,mults){
return (function (p1__12208_SHARP_){if(cljs.core.truth_(p1__12208_SHARP_.call(null,topic)))
{return p1__12208_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__12208_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3443__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t12333 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12333 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta12334){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta12334 = meta12334;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12333.cljs$lang$type = true;
cljs.core.async.t12333.cljs$lang$ctorStr = "cljs.core.async/t12333";
cljs.core.async.t12333.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t12333");
});})(mults,ensure_mult))
;
cljs.core.async.t12333.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t12333.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t12333.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t12333.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t12333.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t12333.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12333.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t12333.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12335){var self__ = this;
var _12335__$1 = this;return self__.meta12334;
});})(mults,ensure_mult))
;
cljs.core.async.t12333.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12335,meta12334__$1){var self__ = this;
var _12335__$1 = this;return (new cljs.core.async.t12333(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta12334__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t12333 = ((function (mults,ensure_mult){
return (function __GT_t12333(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12334){return (new cljs.core.async.t12333(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12334));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t12333(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6192__auto___12457 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_12409){var state_val_12410 = (state_12409[1]);if((state_val_12410 === 1))
{var state_12409__$1 = state_12409;var statearr_12411_12458 = state_12409__$1;(statearr_12411_12458[2] = null);
(statearr_12411_12458[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12410 === 2))
{var state_12409__$1 = state_12409;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12409__$1,4,ch);
} else
{if((state_val_12410 === 3))
{var inst_12407 = (state_12409[2]);var state_12409__$1 = state_12409;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12409__$1,inst_12407);
} else
{if((state_val_12410 === 4))
{var inst_12338 = (state_12409[7]);var inst_12338__$1 = (state_12409[2]);var inst_12339 = (inst_12338__$1 == null);var state_12409__$1 = (function (){var statearr_12412 = state_12409;(statearr_12412[7] = inst_12338__$1);
return statearr_12412;
})();if(cljs.core.truth_(inst_12339))
{var statearr_12413_12459 = state_12409__$1;(statearr_12413_12459[1] = 5);
} else
{var statearr_12414_12460 = state_12409__$1;(statearr_12414_12460[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12410 === 5))
{var inst_12345 = cljs.core.deref.call(null,mults);var inst_12346 = cljs.core.vals.call(null,inst_12345);var inst_12347 = cljs.core.seq.call(null,inst_12346);var inst_12348 = inst_12347;var inst_12349 = null;var inst_12350 = 0;var inst_12351 = 0;var state_12409__$1 = (function (){var statearr_12415 = state_12409;(statearr_12415[8] = inst_12348);
(statearr_12415[9] = inst_12349);
(statearr_12415[10] = inst_12350);
(statearr_12415[11] = inst_12351);
return statearr_12415;
})();var statearr_12416_12461 = state_12409__$1;(statearr_12416_12461[2] = null);
(statearr_12416_12461[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12410 === 6))
{var inst_12386 = (state_12409[12]);var inst_12338 = (state_12409[7]);var inst_12388 = (state_12409[13]);var inst_12386__$1 = topic_fn.call(null,inst_12338);var inst_12387 = cljs.core.deref.call(null,mults);var inst_12388__$1 = cljs.core.get.call(null,inst_12387,inst_12386__$1);var state_12409__$1 = (function (){var statearr_12417 = state_12409;(statearr_12417[12] = inst_12386__$1);
(statearr_12417[13] = inst_12388__$1);
return statearr_12417;
})();if(cljs.core.truth_(inst_12388__$1))
{var statearr_12418_12462 = state_12409__$1;(statearr_12418_12462[1] = 19);
} else
{var statearr_12419_12463 = state_12409__$1;(statearr_12419_12463[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12410 === 7))
{var inst_12405 = (state_12409[2]);var state_12409__$1 = state_12409;var statearr_12420_12464 = state_12409__$1;(statearr_12420_12464[2] = inst_12405);
(statearr_12420_12464[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12410 === 8))
{var inst_12350 = (state_12409[10]);var inst_12351 = (state_12409[11]);var inst_12353 = (inst_12351 < inst_12350);var inst_12354 = inst_12353;var state_12409__$1 = state_12409;if(cljs.core.truth_(inst_12354))
{var statearr_12424_12465 = state_12409__$1;(statearr_12424_12465[1] = 10);
} else
{var statearr_12425_12466 = state_12409__$1;(statearr_12425_12466[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12410 === 9))
{var inst_12384 = (state_12409[2]);var state_12409__$1 = state_12409;var statearr_12426_12467 = state_12409__$1;(statearr_12426_12467[2] = inst_12384);
(statearr_12426_12467[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12410 === 10))
{var inst_12348 = (state_12409[8]);var inst_12349 = (state_12409[9]);var inst_12350 = (state_12409[10]);var inst_12351 = (state_12409[11]);var inst_12356 = cljs.core._nth.call(null,inst_12349,inst_12351);var inst_12357 = cljs.core.async.muxch_STAR_.call(null,inst_12356);var inst_12358 = cljs.core.async.close_BANG_.call(null,inst_12357);var inst_12359 = (inst_12351 + 1);var tmp12421 = inst_12348;var tmp12422 = inst_12349;var tmp12423 = inst_12350;var inst_12348__$1 = tmp12421;var inst_12349__$1 = tmp12422;var inst_12350__$1 = tmp12423;var inst_12351__$1 = inst_12359;var state_12409__$1 = (function (){var statearr_12427 = state_12409;(statearr_12427[8] = inst_12348__$1);
(statearr_12427[9] = inst_12349__$1);
(statearr_12427[10] = inst_12350__$1);
(statearr_12427[11] = inst_12351__$1);
(statearr_12427[14] = inst_12358);
return statearr_12427;
})();var statearr_12428_12468 = state_12409__$1;(statearr_12428_12468[2] = null);
(statearr_12428_12468[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12410 === 11))
{var inst_12348 = (state_12409[8]);var inst_12362 = (state_12409[15]);var inst_12362__$1 = cljs.core.seq.call(null,inst_12348);var state_12409__$1 = (function (){var statearr_12429 = state_12409;(statearr_12429[15] = inst_12362__$1);
return statearr_12429;
})();if(inst_12362__$1)
{var statearr_12430_12469 = state_12409__$1;(statearr_12430_12469[1] = 13);
} else
{var statearr_12431_12470 = state_12409__$1;(statearr_12431_12470[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12410 === 12))
{var inst_12382 = (state_12409[2]);var state_12409__$1 = state_12409;var statearr_12432_12471 = state_12409__$1;(statearr_12432_12471[2] = inst_12382);
(statearr_12432_12471[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12410 === 13))
{var inst_12362 = (state_12409[15]);var inst_12364 = cljs.core.chunked_seq_QMARK_.call(null,inst_12362);var state_12409__$1 = state_12409;if(inst_12364)
{var statearr_12433_12472 = state_12409__$1;(statearr_12433_12472[1] = 16);
} else
{var statearr_12434_12473 = state_12409__$1;(statearr_12434_12473[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12410 === 14))
{var state_12409__$1 = state_12409;var statearr_12435_12474 = state_12409__$1;(statearr_12435_12474[2] = null);
(statearr_12435_12474[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12410 === 15))
{var inst_12380 = (state_12409[2]);var state_12409__$1 = state_12409;var statearr_12436_12475 = state_12409__$1;(statearr_12436_12475[2] = inst_12380);
(statearr_12436_12475[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12410 === 16))
{var inst_12362 = (state_12409[15]);var inst_12366 = cljs.core.chunk_first.call(null,inst_12362);var inst_12367 = cljs.core.chunk_rest.call(null,inst_12362);var inst_12368 = cljs.core.count.call(null,inst_12366);var inst_12348 = inst_12367;var inst_12349 = inst_12366;var inst_12350 = inst_12368;var inst_12351 = 0;var state_12409__$1 = (function (){var statearr_12437 = state_12409;(statearr_12437[8] = inst_12348);
(statearr_12437[9] = inst_12349);
(statearr_12437[10] = inst_12350);
(statearr_12437[11] = inst_12351);
return statearr_12437;
})();var statearr_12438_12476 = state_12409__$1;(statearr_12438_12476[2] = null);
(statearr_12438_12476[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12410 === 17))
{var inst_12362 = (state_12409[15]);var inst_12371 = cljs.core.first.call(null,inst_12362);var inst_12372 = cljs.core.async.muxch_STAR_.call(null,inst_12371);var inst_12373 = cljs.core.async.close_BANG_.call(null,inst_12372);var inst_12374 = cljs.core.next.call(null,inst_12362);var inst_12348 = inst_12374;var inst_12349 = null;var inst_12350 = 0;var inst_12351 = 0;var state_12409__$1 = (function (){var statearr_12439 = state_12409;(statearr_12439[8] = inst_12348);
(statearr_12439[9] = inst_12349);
(statearr_12439[10] = inst_12350);
(statearr_12439[11] = inst_12351);
(statearr_12439[16] = inst_12373);
return statearr_12439;
})();var statearr_12440_12477 = state_12409__$1;(statearr_12440_12477[2] = null);
(statearr_12440_12477[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12410 === 18))
{var inst_12377 = (state_12409[2]);var state_12409__$1 = state_12409;var statearr_12441_12478 = state_12409__$1;(statearr_12441_12478[2] = inst_12377);
(statearr_12441_12478[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12410 === 19))
{var state_12409__$1 = state_12409;var statearr_12442_12479 = state_12409__$1;(statearr_12442_12479[2] = null);
(statearr_12442_12479[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12410 === 20))
{var state_12409__$1 = state_12409;var statearr_12443_12480 = state_12409__$1;(statearr_12443_12480[2] = null);
(statearr_12443_12480[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12410 === 21))
{var inst_12402 = (state_12409[2]);var state_12409__$1 = (function (){var statearr_12444 = state_12409;(statearr_12444[17] = inst_12402);
return statearr_12444;
})();var statearr_12445_12481 = state_12409__$1;(statearr_12445_12481[2] = null);
(statearr_12445_12481[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12410 === 22))
{var inst_12399 = (state_12409[2]);var state_12409__$1 = state_12409;var statearr_12446_12482 = state_12409__$1;(statearr_12446_12482[2] = inst_12399);
(statearr_12446_12482[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12410 === 23))
{var inst_12386 = (state_12409[12]);var inst_12390 = (state_12409[2]);var inst_12391 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12386);var state_12409__$1 = (function (){var statearr_12447 = state_12409;(statearr_12447[18] = inst_12390);
return statearr_12447;
})();var statearr_12448_12483 = state_12409__$1;(statearr_12448_12483[2] = inst_12391);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12409__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12410 === 24))
{var inst_12338 = (state_12409[7]);var inst_12388 = (state_12409[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12409,23,Object,null,22);var inst_12395 = cljs.core.async.muxch_STAR_.call(null,inst_12388);var state_12409__$1 = state_12409;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12409__$1,25,inst_12395,inst_12338);
} else
{if((state_val_12410 === 25))
{var inst_12397 = (state_12409[2]);var state_12409__$1 = state_12409;var statearr_12449_12484 = state_12409__$1;(statearr_12449_12484[2] = inst_12397);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12409__$1);
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
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12453 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12453[0] = state_machine__6178__auto__);
(statearr_12453[1] = 1);
return statearr_12453;
});
var state_machine__6178__auto____1 = (function (state_12409){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12409);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12454){if((e12454 instanceof Object))
{var ex__6181__auto__ = e12454;var statearr_12455_12485 = state_12409;(statearr_12455_12485[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12409);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12454;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12486 = state_12409;
state_12409 = G__12486;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12409){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_12456 = f__6193__auto__.call(null);(statearr_12456[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___12457);
return statearr_12456;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__6192__auto___12623 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_12593){var state_val_12594 = (state_12593[1]);if((state_val_12594 === 1))
{var state_12593__$1 = state_12593;var statearr_12595_12624 = state_12593__$1;(statearr_12595_12624[2] = null);
(statearr_12595_12624[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12594 === 2))
{var inst_12556 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_12557 = 0;var state_12593__$1 = (function (){var statearr_12596 = state_12593;(statearr_12596[7] = inst_12556);
(statearr_12596[8] = inst_12557);
return statearr_12596;
})();var statearr_12597_12625 = state_12593__$1;(statearr_12597_12625[2] = null);
(statearr_12597_12625[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12594 === 3))
{var inst_12591 = (state_12593[2]);var state_12593__$1 = state_12593;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12593__$1,inst_12591);
} else
{if((state_val_12594 === 4))
{var inst_12557 = (state_12593[8]);var inst_12559 = (inst_12557 < cnt);var state_12593__$1 = state_12593;if(cljs.core.truth_(inst_12559))
{var statearr_12598_12626 = state_12593__$1;(statearr_12598_12626[1] = 6);
} else
{var statearr_12599_12627 = state_12593__$1;(statearr_12599_12627[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12594 === 5))
{var inst_12577 = (state_12593[2]);var state_12593__$1 = (function (){var statearr_12600 = state_12593;(statearr_12600[9] = inst_12577);
return statearr_12600;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12593__$1,12,dchan);
} else
{if((state_val_12594 === 6))
{var state_12593__$1 = state_12593;var statearr_12601_12628 = state_12593__$1;(statearr_12601_12628[2] = null);
(statearr_12601_12628[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12594 === 7))
{var state_12593__$1 = state_12593;var statearr_12602_12629 = state_12593__$1;(statearr_12602_12629[2] = null);
(statearr_12602_12629[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12594 === 8))
{var inst_12575 = (state_12593[2]);var state_12593__$1 = state_12593;var statearr_12603_12630 = state_12593__$1;(statearr_12603_12630[2] = inst_12575);
(statearr_12603_12630[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12594 === 9))
{var inst_12557 = (state_12593[8]);var inst_12570 = (state_12593[2]);var inst_12571 = (inst_12557 + 1);var inst_12557__$1 = inst_12571;var state_12593__$1 = (function (){var statearr_12604 = state_12593;(statearr_12604[10] = inst_12570);
(statearr_12604[8] = inst_12557__$1);
return statearr_12604;
})();var statearr_12605_12631 = state_12593__$1;(statearr_12605_12631[2] = null);
(statearr_12605_12631[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12594 === 10))
{var inst_12561 = (state_12593[2]);var inst_12562 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_12593__$1 = (function (){var statearr_12606 = state_12593;(statearr_12606[11] = inst_12561);
return statearr_12606;
})();var statearr_12607_12632 = state_12593__$1;(statearr_12607_12632[2] = inst_12562);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12593__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12594 === 11))
{var inst_12557 = (state_12593[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12593,10,Object,null,9);var inst_12566 = chs__$1.call(null,inst_12557);var inst_12567 = done.call(null,inst_12557);var inst_12568 = cljs.core.async.take_BANG_.call(null,inst_12566,inst_12567);var state_12593__$1 = state_12593;var statearr_12608_12633 = state_12593__$1;(statearr_12608_12633[2] = inst_12568);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12593__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12594 === 12))
{var inst_12579 = (state_12593[12]);var inst_12579__$1 = (state_12593[2]);var inst_12580 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12579__$1);var state_12593__$1 = (function (){var statearr_12609 = state_12593;(statearr_12609[12] = inst_12579__$1);
return statearr_12609;
})();if(cljs.core.truth_(inst_12580))
{var statearr_12610_12634 = state_12593__$1;(statearr_12610_12634[1] = 13);
} else
{var statearr_12611_12635 = state_12593__$1;(statearr_12611_12635[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12594 === 13))
{var inst_12582 = cljs.core.async.close_BANG_.call(null,out);var state_12593__$1 = state_12593;var statearr_12612_12636 = state_12593__$1;(statearr_12612_12636[2] = inst_12582);
(statearr_12612_12636[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12594 === 14))
{var inst_12579 = (state_12593[12]);var inst_12584 = cljs.core.apply.call(null,f,inst_12579);var state_12593__$1 = state_12593;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12593__$1,16,out,inst_12584);
} else
{if((state_val_12594 === 15))
{var inst_12589 = (state_12593[2]);var state_12593__$1 = state_12593;var statearr_12613_12637 = state_12593__$1;(statearr_12613_12637[2] = inst_12589);
(statearr_12613_12637[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12594 === 16))
{var inst_12586 = (state_12593[2]);var state_12593__$1 = (function (){var statearr_12614 = state_12593;(statearr_12614[13] = inst_12586);
return statearr_12614;
})();var statearr_12615_12638 = state_12593__$1;(statearr_12615_12638[2] = null);
(statearr_12615_12638[1] = 2);
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
}
}
}
}
}
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12619 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12619[0] = state_machine__6178__auto__);
(statearr_12619[1] = 1);
return statearr_12619;
});
var state_machine__6178__auto____1 = (function (state_12593){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12593);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12620){if((e12620 instanceof Object))
{var ex__6181__auto__ = e12620;var statearr_12621_12639 = state_12593;(statearr_12621_12639[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12593);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12620;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12640 = state_12593;
state_12593 = G__12640;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12593){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_12622 = f__6193__auto__.call(null);(statearr_12622[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___12623);
return statearr_12622;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6192__auto___12748 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_12724){var state_val_12725 = (state_12724[1]);if((state_val_12725 === 1))
{var inst_12695 = cljs.core.vec.call(null,chs);var inst_12696 = inst_12695;var state_12724__$1 = (function (){var statearr_12726 = state_12724;(statearr_12726[7] = inst_12696);
return statearr_12726;
})();var statearr_12727_12749 = state_12724__$1;(statearr_12727_12749[2] = null);
(statearr_12727_12749[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12725 === 2))
{var inst_12696 = (state_12724[7]);var inst_12698 = cljs.core.count.call(null,inst_12696);var inst_12699 = (inst_12698 > 0);var state_12724__$1 = state_12724;if(cljs.core.truth_(inst_12699))
{var statearr_12728_12750 = state_12724__$1;(statearr_12728_12750[1] = 4);
} else
{var statearr_12729_12751 = state_12724__$1;(statearr_12729_12751[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12725 === 3))
{var inst_12722 = (state_12724[2]);var state_12724__$1 = state_12724;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12724__$1,inst_12722);
} else
{if((state_val_12725 === 4))
{var inst_12696 = (state_12724[7]);var state_12724__$1 = state_12724;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12724__$1,7,inst_12696);
} else
{if((state_val_12725 === 5))
{var inst_12718 = cljs.core.async.close_BANG_.call(null,out);var state_12724__$1 = state_12724;var statearr_12730_12752 = state_12724__$1;(statearr_12730_12752[2] = inst_12718);
(statearr_12730_12752[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12725 === 6))
{var inst_12720 = (state_12724[2]);var state_12724__$1 = state_12724;var statearr_12731_12753 = state_12724__$1;(statearr_12731_12753[2] = inst_12720);
(statearr_12731_12753[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12725 === 7))
{var inst_12704 = (state_12724[8]);var inst_12703 = (state_12724[9]);var inst_12703__$1 = (state_12724[2]);var inst_12704__$1 = cljs.core.nth.call(null,inst_12703__$1,0,null);var inst_12705 = cljs.core.nth.call(null,inst_12703__$1,1,null);var inst_12706 = (inst_12704__$1 == null);var state_12724__$1 = (function (){var statearr_12732 = state_12724;(statearr_12732[8] = inst_12704__$1);
(statearr_12732[9] = inst_12703__$1);
(statearr_12732[10] = inst_12705);
return statearr_12732;
})();if(cljs.core.truth_(inst_12706))
{var statearr_12733_12754 = state_12724__$1;(statearr_12733_12754[1] = 8);
} else
{var statearr_12734_12755 = state_12724__$1;(statearr_12734_12755[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12725 === 8))
{var inst_12696 = (state_12724[7]);var inst_12704 = (state_12724[8]);var inst_12703 = (state_12724[9]);var inst_12705 = (state_12724[10]);var inst_12708 = (function (){var c = inst_12705;var v = inst_12704;var vec__12701 = inst_12703;var cs = inst_12696;return ((function (c,v,vec__12701,cs,inst_12696,inst_12704,inst_12703,inst_12705,state_val_12725){
return (function (p1__12641_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__12641_SHARP_);
});
;})(c,v,vec__12701,cs,inst_12696,inst_12704,inst_12703,inst_12705,state_val_12725))
})();var inst_12709 = cljs.core.filterv.call(null,inst_12708,inst_12696);var inst_12696__$1 = inst_12709;var state_12724__$1 = (function (){var statearr_12735 = state_12724;(statearr_12735[7] = inst_12696__$1);
return statearr_12735;
})();var statearr_12736_12756 = state_12724__$1;(statearr_12736_12756[2] = null);
(statearr_12736_12756[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12725 === 9))
{var inst_12704 = (state_12724[8]);var state_12724__$1 = state_12724;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12724__$1,11,out,inst_12704);
} else
{if((state_val_12725 === 10))
{var inst_12716 = (state_12724[2]);var state_12724__$1 = state_12724;var statearr_12738_12757 = state_12724__$1;(statearr_12738_12757[2] = inst_12716);
(statearr_12738_12757[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12725 === 11))
{var inst_12696 = (state_12724[7]);var inst_12713 = (state_12724[2]);var tmp12737 = inst_12696;var inst_12696__$1 = tmp12737;var state_12724__$1 = (function (){var statearr_12739 = state_12724;(statearr_12739[7] = inst_12696__$1);
(statearr_12739[11] = inst_12713);
return statearr_12739;
})();var statearr_12740_12758 = state_12724__$1;(statearr_12740_12758[2] = null);
(statearr_12740_12758[1] = 2);
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
var state_machine__6178__auto____0 = (function (){var statearr_12744 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12744[0] = state_machine__6178__auto__);
(statearr_12744[1] = 1);
return statearr_12744;
});
var state_machine__6178__auto____1 = (function (state_12724){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12724);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12745){if((e12745 instanceof Object))
{var ex__6181__auto__ = e12745;var statearr_12746_12759 = state_12724;(statearr_12746_12759[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12724);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12745;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12760 = state_12724;
state_12724 = G__12760;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12724){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_12747 = f__6193__auto__.call(null);(statearr_12747[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___12748);
return statearr_12747;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6192__auto___12853 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_12830){var state_val_12831 = (state_12830[1]);if((state_val_12831 === 1))
{var inst_12807 = 0;var state_12830__$1 = (function (){var statearr_12832 = state_12830;(statearr_12832[7] = inst_12807);
return statearr_12832;
})();var statearr_12833_12854 = state_12830__$1;(statearr_12833_12854[2] = null);
(statearr_12833_12854[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12831 === 2))
{var inst_12807 = (state_12830[7]);var inst_12809 = (inst_12807 < n);var state_12830__$1 = state_12830;if(cljs.core.truth_(inst_12809))
{var statearr_12834_12855 = state_12830__$1;(statearr_12834_12855[1] = 4);
} else
{var statearr_12835_12856 = state_12830__$1;(statearr_12835_12856[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12831 === 3))
{var inst_12827 = (state_12830[2]);var inst_12828 = cljs.core.async.close_BANG_.call(null,out);var state_12830__$1 = (function (){var statearr_12836 = state_12830;(statearr_12836[8] = inst_12827);
return statearr_12836;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12830__$1,inst_12828);
} else
{if((state_val_12831 === 4))
{var state_12830__$1 = state_12830;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12830__$1,7,ch);
} else
{if((state_val_12831 === 5))
{var state_12830__$1 = state_12830;var statearr_12837_12857 = state_12830__$1;(statearr_12837_12857[2] = null);
(statearr_12837_12857[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12831 === 6))
{var inst_12825 = (state_12830[2]);var state_12830__$1 = state_12830;var statearr_12838_12858 = state_12830__$1;(statearr_12838_12858[2] = inst_12825);
(statearr_12838_12858[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12831 === 7))
{var inst_12812 = (state_12830[9]);var inst_12812__$1 = (state_12830[2]);var inst_12813 = (inst_12812__$1 == null);var inst_12814 = cljs.core.not.call(null,inst_12813);var state_12830__$1 = (function (){var statearr_12839 = state_12830;(statearr_12839[9] = inst_12812__$1);
return statearr_12839;
})();if(inst_12814)
{var statearr_12840_12859 = state_12830__$1;(statearr_12840_12859[1] = 8);
} else
{var statearr_12841_12860 = state_12830__$1;(statearr_12841_12860[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12831 === 8))
{var inst_12812 = (state_12830[9]);var state_12830__$1 = state_12830;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12830__$1,11,out,inst_12812);
} else
{if((state_val_12831 === 9))
{var state_12830__$1 = state_12830;var statearr_12842_12861 = state_12830__$1;(statearr_12842_12861[2] = null);
(statearr_12842_12861[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12831 === 10))
{var inst_12822 = (state_12830[2]);var state_12830__$1 = state_12830;var statearr_12843_12862 = state_12830__$1;(statearr_12843_12862[2] = inst_12822);
(statearr_12843_12862[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12831 === 11))
{var inst_12807 = (state_12830[7]);var inst_12817 = (state_12830[2]);var inst_12818 = (inst_12807 + 1);var inst_12807__$1 = inst_12818;var state_12830__$1 = (function (){var statearr_12844 = state_12830;(statearr_12844[7] = inst_12807__$1);
(statearr_12844[10] = inst_12817);
return statearr_12844;
})();var statearr_12845_12863 = state_12830__$1;(statearr_12845_12863[2] = null);
(statearr_12845_12863[1] = 2);
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
var state_machine__6178__auto____0 = (function (){var statearr_12849 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12849[0] = state_machine__6178__auto__);
(statearr_12849[1] = 1);
return statearr_12849;
});
var state_machine__6178__auto____1 = (function (state_12830){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12830);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12850){if((e12850 instanceof Object))
{var ex__6181__auto__ = e12850;var statearr_12851_12864 = state_12830;(statearr_12851_12864[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12830);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12850;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12865 = state_12830;
state_12830 = G__12865;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12830){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_12852 = f__6193__auto__.call(null);(statearr_12852[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___12853);
return statearr_12852;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6192__auto___12962 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_12937){var state_val_12938 = (state_12937[1]);if((state_val_12938 === 1))
{var inst_12914 = null;var state_12937__$1 = (function (){var statearr_12939 = state_12937;(statearr_12939[7] = inst_12914);
return statearr_12939;
})();var statearr_12940_12963 = state_12937__$1;(statearr_12940_12963[2] = null);
(statearr_12940_12963[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12938 === 2))
{var state_12937__$1 = state_12937;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12937__$1,4,ch);
} else
{if((state_val_12938 === 3))
{var inst_12934 = (state_12937[2]);var inst_12935 = cljs.core.async.close_BANG_.call(null,out);var state_12937__$1 = (function (){var statearr_12941 = state_12937;(statearr_12941[8] = inst_12934);
return statearr_12941;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12937__$1,inst_12935);
} else
{if((state_val_12938 === 4))
{var inst_12917 = (state_12937[9]);var inst_12917__$1 = (state_12937[2]);var inst_12918 = (inst_12917__$1 == null);var inst_12919 = cljs.core.not.call(null,inst_12918);var state_12937__$1 = (function (){var statearr_12942 = state_12937;(statearr_12942[9] = inst_12917__$1);
return statearr_12942;
})();if(inst_12919)
{var statearr_12943_12964 = state_12937__$1;(statearr_12943_12964[1] = 5);
} else
{var statearr_12944_12965 = state_12937__$1;(statearr_12944_12965[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12938 === 5))
{var inst_12914 = (state_12937[7]);var inst_12917 = (state_12937[9]);var inst_12921 = cljs.core._EQ_.call(null,inst_12917,inst_12914);var state_12937__$1 = state_12937;if(inst_12921)
{var statearr_12945_12966 = state_12937__$1;(statearr_12945_12966[1] = 8);
} else
{var statearr_12946_12967 = state_12937__$1;(statearr_12946_12967[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12938 === 6))
{var state_12937__$1 = state_12937;var statearr_12948_12968 = state_12937__$1;(statearr_12948_12968[2] = null);
(statearr_12948_12968[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12938 === 7))
{var inst_12932 = (state_12937[2]);var state_12937__$1 = state_12937;var statearr_12949_12969 = state_12937__$1;(statearr_12949_12969[2] = inst_12932);
(statearr_12949_12969[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12938 === 8))
{var inst_12914 = (state_12937[7]);var tmp12947 = inst_12914;var inst_12914__$1 = tmp12947;var state_12937__$1 = (function (){var statearr_12950 = state_12937;(statearr_12950[7] = inst_12914__$1);
return statearr_12950;
})();var statearr_12951_12970 = state_12937__$1;(statearr_12951_12970[2] = null);
(statearr_12951_12970[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12938 === 9))
{var inst_12917 = (state_12937[9]);var state_12937__$1 = state_12937;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12937__$1,11,out,inst_12917);
} else
{if((state_val_12938 === 10))
{var inst_12929 = (state_12937[2]);var state_12937__$1 = state_12937;var statearr_12952_12971 = state_12937__$1;(statearr_12952_12971[2] = inst_12929);
(statearr_12952_12971[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12938 === 11))
{var inst_12917 = (state_12937[9]);var inst_12926 = (state_12937[2]);var inst_12914 = inst_12917;var state_12937__$1 = (function (){var statearr_12953 = state_12937;(statearr_12953[7] = inst_12914);
(statearr_12953[10] = inst_12926);
return statearr_12953;
})();var statearr_12954_12972 = state_12937__$1;(statearr_12954_12972[2] = null);
(statearr_12954_12972[1] = 2);
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
var state_machine__6178__auto____0 = (function (){var statearr_12958 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12958[0] = state_machine__6178__auto__);
(statearr_12958[1] = 1);
return statearr_12958;
});
var state_machine__6178__auto____1 = (function (state_12937){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12937);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12959){if((e12959 instanceof Object))
{var ex__6181__auto__ = e12959;var statearr_12960_12973 = state_12937;(statearr_12960_12973[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12937);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12959;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12974 = state_12937;
state_12937 = G__12974;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12937){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_12961 = f__6193__auto__.call(null);(statearr_12961[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___12962);
return statearr_12961;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6192__auto___13109 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_13079){var state_val_13080 = (state_13079[1]);if((state_val_13080 === 1))
{var inst_13042 = (new Array(n));var inst_13043 = inst_13042;var inst_13044 = 0;var state_13079__$1 = (function (){var statearr_13081 = state_13079;(statearr_13081[7] = inst_13043);
(statearr_13081[8] = inst_13044);
return statearr_13081;
})();var statearr_13082_13110 = state_13079__$1;(statearr_13082_13110[2] = null);
(statearr_13082_13110[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13080 === 2))
{var state_13079__$1 = state_13079;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13079__$1,4,ch);
} else
{if((state_val_13080 === 3))
{var inst_13077 = (state_13079[2]);var state_13079__$1 = state_13079;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13079__$1,inst_13077);
} else
{if((state_val_13080 === 4))
{var inst_13047 = (state_13079[9]);var inst_13047__$1 = (state_13079[2]);var inst_13048 = (inst_13047__$1 == null);var inst_13049 = cljs.core.not.call(null,inst_13048);var state_13079__$1 = (function (){var statearr_13083 = state_13079;(statearr_13083[9] = inst_13047__$1);
return statearr_13083;
})();if(inst_13049)
{var statearr_13084_13111 = state_13079__$1;(statearr_13084_13111[1] = 5);
} else
{var statearr_13085_13112 = state_13079__$1;(statearr_13085_13112[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13080 === 5))
{var inst_13047 = (state_13079[9]);var inst_13043 = (state_13079[7]);var inst_13044 = (state_13079[8]);var inst_13052 = (state_13079[10]);var inst_13051 = (inst_13043[inst_13044] = inst_13047);var inst_13052__$1 = (inst_13044 + 1);var inst_13053 = (inst_13052__$1 < n);var state_13079__$1 = (function (){var statearr_13086 = state_13079;(statearr_13086[11] = inst_13051);
(statearr_13086[10] = inst_13052__$1);
return statearr_13086;
})();if(cljs.core.truth_(inst_13053))
{var statearr_13087_13113 = state_13079__$1;(statearr_13087_13113[1] = 8);
} else
{var statearr_13088_13114 = state_13079__$1;(statearr_13088_13114[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13080 === 6))
{var inst_13044 = (state_13079[8]);var inst_13065 = (inst_13044 > 0);var state_13079__$1 = state_13079;if(cljs.core.truth_(inst_13065))
{var statearr_13090_13115 = state_13079__$1;(statearr_13090_13115[1] = 12);
} else
{var statearr_13091_13116 = state_13079__$1;(statearr_13091_13116[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13080 === 7))
{var inst_13075 = (state_13079[2]);var state_13079__$1 = state_13079;var statearr_13092_13117 = state_13079__$1;(statearr_13092_13117[2] = inst_13075);
(statearr_13092_13117[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13080 === 8))
{var inst_13043 = (state_13079[7]);var inst_13052 = (state_13079[10]);var tmp13089 = inst_13043;var inst_13043__$1 = tmp13089;var inst_13044 = inst_13052;var state_13079__$1 = (function (){var statearr_13093 = state_13079;(statearr_13093[7] = inst_13043__$1);
(statearr_13093[8] = inst_13044);
return statearr_13093;
})();var statearr_13094_13118 = state_13079__$1;(statearr_13094_13118[2] = null);
(statearr_13094_13118[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13080 === 9))
{var inst_13043 = (state_13079[7]);var inst_13057 = cljs.core.vec.call(null,inst_13043);var state_13079__$1 = state_13079;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13079__$1,11,out,inst_13057);
} else
{if((state_val_13080 === 10))
{var inst_13063 = (state_13079[2]);var state_13079__$1 = state_13079;var statearr_13095_13119 = state_13079__$1;(statearr_13095_13119[2] = inst_13063);
(statearr_13095_13119[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13080 === 11))
{var inst_13059 = (state_13079[2]);var inst_13060 = (new Array(n));var inst_13043 = inst_13060;var inst_13044 = 0;var state_13079__$1 = (function (){var statearr_13096 = state_13079;(statearr_13096[7] = inst_13043);
(statearr_13096[8] = inst_13044);
(statearr_13096[12] = inst_13059);
return statearr_13096;
})();var statearr_13097_13120 = state_13079__$1;(statearr_13097_13120[2] = null);
(statearr_13097_13120[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13080 === 12))
{var inst_13043 = (state_13079[7]);var inst_13067 = cljs.core.vec.call(null,inst_13043);var state_13079__$1 = state_13079;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13079__$1,15,out,inst_13067);
} else
{if((state_val_13080 === 13))
{var state_13079__$1 = state_13079;var statearr_13098_13121 = state_13079__$1;(statearr_13098_13121[2] = null);
(statearr_13098_13121[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13080 === 14))
{var inst_13072 = (state_13079[2]);var inst_13073 = cljs.core.async.close_BANG_.call(null,out);var state_13079__$1 = (function (){var statearr_13099 = state_13079;(statearr_13099[13] = inst_13072);
return statearr_13099;
})();var statearr_13100_13122 = state_13079__$1;(statearr_13100_13122[2] = inst_13073);
(statearr_13100_13122[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13080 === 15))
{var inst_13069 = (state_13079[2]);var state_13079__$1 = state_13079;var statearr_13101_13123 = state_13079__$1;(statearr_13101_13123[2] = inst_13069);
(statearr_13101_13123[1] = 14);
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
}
}
}
}
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13105 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13105[0] = state_machine__6178__auto__);
(statearr_13105[1] = 1);
return statearr_13105;
});
var state_machine__6178__auto____1 = (function (state_13079){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13079);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13106){if((e13106 instanceof Object))
{var ex__6181__auto__ = e13106;var statearr_13107_13124 = state_13079;(statearr_13107_13124[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13079);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13106;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13125 = state_13079;
state_13079 = G__13125;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13079){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_13108 = f__6193__auto__.call(null);(statearr_13108[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___13109);
return statearr_13108;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6192__auto___13268 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_13238){var state_val_13239 = (state_13238[1]);if((state_val_13239 === 1))
{var inst_13197 = [];var inst_13198 = inst_13197;var inst_13199 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_13238__$1 = (function (){var statearr_13240 = state_13238;(statearr_13240[7] = inst_13199);
(statearr_13240[8] = inst_13198);
return statearr_13240;
})();var statearr_13241_13269 = state_13238__$1;(statearr_13241_13269[2] = null);
(statearr_13241_13269[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13239 === 2))
{var state_13238__$1 = state_13238;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13238__$1,4,ch);
} else
{if((state_val_13239 === 3))
{var inst_13236 = (state_13238[2]);var state_13238__$1 = state_13238;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13238__$1,inst_13236);
} else
{if((state_val_13239 === 4))
{var inst_13202 = (state_13238[9]);var inst_13202__$1 = (state_13238[2]);var inst_13203 = (inst_13202__$1 == null);var inst_13204 = cljs.core.not.call(null,inst_13203);var state_13238__$1 = (function (){var statearr_13242 = state_13238;(statearr_13242[9] = inst_13202__$1);
return statearr_13242;
})();if(inst_13204)
{var statearr_13243_13270 = state_13238__$1;(statearr_13243_13270[1] = 5);
} else
{var statearr_13244_13271 = state_13238__$1;(statearr_13244_13271[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13239 === 5))
{var inst_13199 = (state_13238[7]);var inst_13202 = (state_13238[9]);var inst_13206 = (state_13238[10]);var inst_13206__$1 = f.call(null,inst_13202);var inst_13207 = cljs.core._EQ_.call(null,inst_13206__$1,inst_13199);var inst_13208 = cljs.core.keyword_identical_QMARK_.call(null,inst_13199,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_13209 = (inst_13207) || (inst_13208);var state_13238__$1 = (function (){var statearr_13245 = state_13238;(statearr_13245[10] = inst_13206__$1);
return statearr_13245;
})();if(cljs.core.truth_(inst_13209))
{var statearr_13246_13272 = state_13238__$1;(statearr_13246_13272[1] = 8);
} else
{var statearr_13247_13273 = state_13238__$1;(statearr_13247_13273[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13239 === 6))
{var inst_13198 = (state_13238[8]);var inst_13223 = inst_13198.length;var inst_13224 = (inst_13223 > 0);var state_13238__$1 = state_13238;if(cljs.core.truth_(inst_13224))
{var statearr_13249_13274 = state_13238__$1;(statearr_13249_13274[1] = 12);
} else
{var statearr_13250_13275 = state_13238__$1;(statearr_13250_13275[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13239 === 7))
{var inst_13234 = (state_13238[2]);var state_13238__$1 = state_13238;var statearr_13251_13276 = state_13238__$1;(statearr_13251_13276[2] = inst_13234);
(statearr_13251_13276[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13239 === 8))
{var inst_13198 = (state_13238[8]);var inst_13202 = (state_13238[9]);var inst_13206 = (state_13238[10]);var inst_13211 = inst_13198.push(inst_13202);var tmp13248 = inst_13198;var inst_13198__$1 = tmp13248;var inst_13199 = inst_13206;var state_13238__$1 = (function (){var statearr_13252 = state_13238;(statearr_13252[7] = inst_13199);
(statearr_13252[8] = inst_13198__$1);
(statearr_13252[11] = inst_13211);
return statearr_13252;
})();var statearr_13253_13277 = state_13238__$1;(statearr_13253_13277[2] = null);
(statearr_13253_13277[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13239 === 9))
{var inst_13198 = (state_13238[8]);var inst_13214 = cljs.core.vec.call(null,inst_13198);var state_13238__$1 = state_13238;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13238__$1,11,out,inst_13214);
} else
{if((state_val_13239 === 10))
{var inst_13221 = (state_13238[2]);var state_13238__$1 = state_13238;var statearr_13254_13278 = state_13238__$1;(statearr_13254_13278[2] = inst_13221);
(statearr_13254_13278[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13239 === 11))
{var inst_13202 = (state_13238[9]);var inst_13206 = (state_13238[10]);var inst_13216 = (state_13238[2]);var inst_13217 = [];var inst_13218 = inst_13217.push(inst_13202);var inst_13198 = inst_13217;var inst_13199 = inst_13206;var state_13238__$1 = (function (){var statearr_13255 = state_13238;(statearr_13255[7] = inst_13199);
(statearr_13255[8] = inst_13198);
(statearr_13255[12] = inst_13216);
(statearr_13255[13] = inst_13218);
return statearr_13255;
})();var statearr_13256_13279 = state_13238__$1;(statearr_13256_13279[2] = null);
(statearr_13256_13279[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13239 === 12))
{var inst_13198 = (state_13238[8]);var inst_13226 = cljs.core.vec.call(null,inst_13198);var state_13238__$1 = state_13238;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13238__$1,15,out,inst_13226);
} else
{if((state_val_13239 === 13))
{var state_13238__$1 = state_13238;var statearr_13257_13280 = state_13238__$1;(statearr_13257_13280[2] = null);
(statearr_13257_13280[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13239 === 14))
{var inst_13231 = (state_13238[2]);var inst_13232 = cljs.core.async.close_BANG_.call(null,out);var state_13238__$1 = (function (){var statearr_13258 = state_13238;(statearr_13258[14] = inst_13231);
return statearr_13258;
})();var statearr_13259_13281 = state_13238__$1;(statearr_13259_13281[2] = inst_13232);
(statearr_13259_13281[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13239 === 15))
{var inst_13228 = (state_13238[2]);var state_13238__$1 = state_13238;var statearr_13260_13282 = state_13238__$1;(statearr_13260_13282[2] = inst_13228);
(statearr_13260_13282[1] = 14);
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
}
}
}
}
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13264 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13264[0] = state_machine__6178__auto__);
(statearr_13264[1] = 1);
return statearr_13264;
});
var state_machine__6178__auto____1 = (function (state_13238){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13238);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13265){if((e13265 instanceof Object))
{var ex__6181__auto__ = e13265;var statearr_13266_13283 = state_13238;(statearr_13266_13283[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13238);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13265;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13284 = state_13238;
state_13238 = G__13284;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13238){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_13267 = f__6193__auto__.call(null);(statearr_13267[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___13268);
return statearr_13267;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map