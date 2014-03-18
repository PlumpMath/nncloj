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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t10750 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10750 = (function (f,fn_handler,meta10751){
this.f = f;
this.fn_handler = fn_handler;
this.meta10751 = meta10751;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10750.cljs$lang$type = true;
cljs.core.async.t10750.cljs$lang$ctorStr = "cljs.core.async/t10750";
cljs.core.async.t10750.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10750");
});
cljs.core.async.t10750.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10750.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t10750.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t10750.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10752){var self__ = this;
var _10752__$1 = this;return self__.meta10751;
});
cljs.core.async.t10750.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10752,meta10751__$1){var self__ = this;
var _10752__$1 = this;return (new cljs.core.async.t10750(self__.f,self__.fn_handler,meta10751__$1));
});
cljs.core.async.__GT_t10750 = (function __GT_t10750(f__$1,fn_handler__$1,meta10751){return (new cljs.core.async.t10750(f__$1,fn_handler__$1,meta10751));
});
}
return (new cljs.core.async.t10750(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__10754 = buff;if(G__10754)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__10754.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__10754.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10754);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10754);
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
{var val_10755 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_10755);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_10755);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4291__auto___10756 = n;var x_10757 = 0;while(true){
if((x_10757 < n__4291__auto___10756))
{(a[x_10757] = 0);
{
var G__10758 = (x_10757 + 1);
x_10757 = G__10758;
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
var G__10759 = (i + 1);
i = G__10759;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t10763 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10763 = (function (flag,alt_flag,meta10764){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta10764 = meta10764;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10763.cljs$lang$type = true;
cljs.core.async.t10763.cljs$lang$ctorStr = "cljs.core.async/t10763";
cljs.core.async.t10763.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10763");
});
cljs.core.async.t10763.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10763.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t10763.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t10763.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10765){var self__ = this;
var _10765__$1 = this;return self__.meta10764;
});
cljs.core.async.t10763.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10765,meta10764__$1){var self__ = this;
var _10765__$1 = this;return (new cljs.core.async.t10763(self__.flag,self__.alt_flag,meta10764__$1));
});
cljs.core.async.__GT_t10763 = (function __GT_t10763(flag__$1,alt_flag__$1,meta10764){return (new cljs.core.async.t10763(flag__$1,alt_flag__$1,meta10764));
});
}
return (new cljs.core.async.t10763(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t10769 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10769 = (function (cb,flag,alt_handler,meta10770){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta10770 = meta10770;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10769.cljs$lang$type = true;
cljs.core.async.t10769.cljs$lang$ctorStr = "cljs.core.async/t10769";
cljs.core.async.t10769.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10769");
});
cljs.core.async.t10769.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10769.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t10769.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t10769.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10771){var self__ = this;
var _10771__$1 = this;return self__.meta10770;
});
cljs.core.async.t10769.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10771,meta10770__$1){var self__ = this;
var _10771__$1 = this;return (new cljs.core.async.t10769(self__.cb,self__.flag,self__.alt_handler,meta10770__$1));
});
cljs.core.async.__GT_t10769 = (function __GT_t10769(cb__$1,flag__$1,alt_handler__$1,meta10770){return (new cljs.core.async.t10769(cb__$1,flag__$1,alt_handler__$1,meta10770));
});
}
return (new cljs.core.async.t10769(cb,flag,alt_handler,null));
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
return (function (p1__10772_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10772_SHARP_,port], null));
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
var G__10773 = (i + 1);
i = G__10773;
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
var alts_BANG___delegate = function (ports,p__10774){var map__10776 = p__10774;var map__10776__$1 = ((cljs.core.seq_QMARK_.call(null,map__10776))?cljs.core.apply.call(null,cljs.core.hash_map,map__10776):map__10776);var opts = map__10776__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__10774 = null;if (arguments.length > 1) {
  p__10774 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__10774);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__10777){
var ports = cljs.core.first(arglist__10777);
var p__10774 = cljs.core.rest(arglist__10777);
return alts_BANG___delegate(ports,p__10774);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t10785 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10785 = (function (ch,f,map_LT_,meta10786){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10786 = meta10786;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10785.cljs$lang$type = true;
cljs.core.async.t10785.cljs$lang$ctorStr = "cljs.core.async/t10785";
cljs.core.async.t10785.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10785");
});
cljs.core.async.t10785.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10785.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t10785.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10785.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t10788 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10788 = (function (fn1,_,meta10786,ch,f,map_LT_,meta10789){
this.fn1 = fn1;
this._ = _;
this.meta10786 = meta10786;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10789 = meta10789;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10788.cljs$lang$type = true;
cljs.core.async.t10788.cljs$lang$ctorStr = "cljs.core.async/t10788";
cljs.core.async.t10788.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10788");
});
cljs.core.async.t10788.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10788.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t10788.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t10788.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__10778_SHARP_){return f1.call(null,(((p1__10778_SHARP_ == null))?null:self__.f.call(null,p1__10778_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t10788.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10790){var self__ = this;
var _10790__$1 = this;return self__.meta10789;
});
cljs.core.async.t10788.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10790,meta10789__$1){var self__ = this;
var _10790__$1 = this;return (new cljs.core.async.t10788(self__.fn1,self__._,self__.meta10786,self__.ch,self__.f,self__.map_LT_,meta10789__$1));
});
cljs.core.async.__GT_t10788 = (function __GT_t10788(fn1__$1,___$2,meta10786__$1,ch__$2,f__$2,map_LT___$2,meta10789){return (new cljs.core.async.t10788(fn1__$1,___$2,meta10786__$1,ch__$2,f__$2,map_LT___$2,meta10789));
});
}
return (new cljs.core.async.t10788(fn1,___$1,self__.meta10786,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t10785.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10785.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10785.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10787){var self__ = this;
var _10787__$1 = this;return self__.meta10786;
});
cljs.core.async.t10785.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10787,meta10786__$1){var self__ = this;
var _10787__$1 = this;return (new cljs.core.async.t10785(self__.ch,self__.f,self__.map_LT_,meta10786__$1));
});
cljs.core.async.__GT_t10785 = (function __GT_t10785(ch__$1,f__$1,map_LT___$1,meta10786){return (new cljs.core.async.t10785(ch__$1,f__$1,map_LT___$1,meta10786));
});
}
return (new cljs.core.async.t10785(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t10794 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10794 = (function (ch,f,map_GT_,meta10795){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta10795 = meta10795;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10794.cljs$lang$type = true;
cljs.core.async.t10794.cljs$lang$ctorStr = "cljs.core.async/t10794";
cljs.core.async.t10794.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10794");
});
cljs.core.async.t10794.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10794.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t10794.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10794.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10794.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10794.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10794.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10796){var self__ = this;
var _10796__$1 = this;return self__.meta10795;
});
cljs.core.async.t10794.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10796,meta10795__$1){var self__ = this;
var _10796__$1 = this;return (new cljs.core.async.t10794(self__.ch,self__.f,self__.map_GT_,meta10795__$1));
});
cljs.core.async.__GT_t10794 = (function __GT_t10794(ch__$1,f__$1,map_GT___$1,meta10795){return (new cljs.core.async.t10794(ch__$1,f__$1,map_GT___$1,meta10795));
});
}
return (new cljs.core.async.t10794(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t10800 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10800 = (function (ch,p,filter_GT_,meta10801){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta10801 = meta10801;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10800.cljs$lang$type = true;
cljs.core.async.t10800.cljs$lang$ctorStr = "cljs.core.async/t10800";
cljs.core.async.t10800.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10800");
});
cljs.core.async.t10800.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10800.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t10800.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10800.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10800.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10800.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10800.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10802){var self__ = this;
var _10802__$1 = this;return self__.meta10801;
});
cljs.core.async.t10800.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10802,meta10801__$1){var self__ = this;
var _10802__$1 = this;return (new cljs.core.async.t10800(self__.ch,self__.p,self__.filter_GT_,meta10801__$1));
});
cljs.core.async.__GT_t10800 = (function __GT_t10800(ch__$1,p__$1,filter_GT___$1,meta10801){return (new cljs.core.async.t10800(ch__$1,p__$1,filter_GT___$1,meta10801));
});
}
return (new cljs.core.async.t10800(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6192__auto___10885 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_10864){var state_val_10865 = (state_10864[1]);if((state_val_10865 === 1))
{var state_10864__$1 = state_10864;var statearr_10866_10886 = state_10864__$1;(statearr_10866_10886[2] = null);
(statearr_10866_10886[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10865 === 2))
{var state_10864__$1 = state_10864;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10864__$1,4,ch);
} else
{if((state_val_10865 === 3))
{var inst_10862 = (state_10864[2]);var state_10864__$1 = state_10864;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10864__$1,inst_10862);
} else
{if((state_val_10865 === 4))
{var inst_10846 = (state_10864[7]);var inst_10846__$1 = (state_10864[2]);var inst_10847 = (inst_10846__$1 == null);var state_10864__$1 = (function (){var statearr_10867 = state_10864;(statearr_10867[7] = inst_10846__$1);
return statearr_10867;
})();if(cljs.core.truth_(inst_10847))
{var statearr_10868_10887 = state_10864__$1;(statearr_10868_10887[1] = 5);
} else
{var statearr_10869_10888 = state_10864__$1;(statearr_10869_10888[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10865 === 5))
{var inst_10849 = cljs.core.async.close_BANG_.call(null,out);var state_10864__$1 = state_10864;var statearr_10870_10889 = state_10864__$1;(statearr_10870_10889[2] = inst_10849);
(statearr_10870_10889[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10865 === 6))
{var inst_10846 = (state_10864[7]);var inst_10851 = p.call(null,inst_10846);var state_10864__$1 = state_10864;if(cljs.core.truth_(inst_10851))
{var statearr_10871_10890 = state_10864__$1;(statearr_10871_10890[1] = 8);
} else
{var statearr_10872_10891 = state_10864__$1;(statearr_10872_10891[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10865 === 7))
{var inst_10860 = (state_10864[2]);var state_10864__$1 = state_10864;var statearr_10873_10892 = state_10864__$1;(statearr_10873_10892[2] = inst_10860);
(statearr_10873_10892[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10865 === 8))
{var inst_10846 = (state_10864[7]);var state_10864__$1 = state_10864;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10864__$1,11,out,inst_10846);
} else
{if((state_val_10865 === 9))
{var state_10864__$1 = state_10864;var statearr_10874_10893 = state_10864__$1;(statearr_10874_10893[2] = null);
(statearr_10874_10893[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10865 === 10))
{var inst_10857 = (state_10864[2]);var state_10864__$1 = (function (){var statearr_10875 = state_10864;(statearr_10875[8] = inst_10857);
return statearr_10875;
})();var statearr_10876_10894 = state_10864__$1;(statearr_10876_10894[2] = null);
(statearr_10876_10894[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10865 === 11))
{var inst_10854 = (state_10864[2]);var state_10864__$1 = state_10864;var statearr_10877_10895 = state_10864__$1;(statearr_10877_10895[2] = inst_10854);
(statearr_10877_10895[1] = 10);
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
var state_machine__6178__auto____0 = (function (){var statearr_10881 = [null,null,null,null,null,null,null,null,null];(statearr_10881[0] = state_machine__6178__auto__);
(statearr_10881[1] = 1);
return statearr_10881;
});
var state_machine__6178__auto____1 = (function (state_10864){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_10864);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e10882){if((e10882 instanceof Object))
{var ex__6181__auto__ = e10882;var statearr_10883_10896 = state_10864;(statearr_10883_10896[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10864);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10882;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10897 = state_10864;
state_10864 = G__10897;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_10864){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_10864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_10884 = f__6193__auto__.call(null);(statearr_10884[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___10885);
return statearr_10884;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6192__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_11049){var state_val_11050 = (state_11049[1]);if((state_val_11050 === 1))
{var state_11049__$1 = state_11049;var statearr_11051_11088 = state_11049__$1;(statearr_11051_11088[2] = null);
(statearr_11051_11088[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11050 === 2))
{var state_11049__$1 = state_11049;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11049__$1,4,in$);
} else
{if((state_val_11050 === 3))
{var inst_11047 = (state_11049[2]);var state_11049__$1 = state_11049;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11049__$1,inst_11047);
} else
{if((state_val_11050 === 4))
{var inst_10995 = (state_11049[7]);var inst_10995__$1 = (state_11049[2]);var inst_10996 = (inst_10995__$1 == null);var state_11049__$1 = (function (){var statearr_11052 = state_11049;(statearr_11052[7] = inst_10995__$1);
return statearr_11052;
})();if(cljs.core.truth_(inst_10996))
{var statearr_11053_11089 = state_11049__$1;(statearr_11053_11089[1] = 5);
} else
{var statearr_11054_11090 = state_11049__$1;(statearr_11054_11090[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11050 === 5))
{var inst_10998 = cljs.core.async.close_BANG_.call(null,out);var state_11049__$1 = state_11049;var statearr_11055_11091 = state_11049__$1;(statearr_11055_11091[2] = inst_10998);
(statearr_11055_11091[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11050 === 6))
{var inst_10995 = (state_11049[7]);var inst_11000 = f.call(null,inst_10995);var inst_11005 = cljs.core.seq.call(null,inst_11000);var inst_11006 = inst_11005;var inst_11007 = null;var inst_11008 = 0;var inst_11009 = 0;var state_11049__$1 = (function (){var statearr_11056 = state_11049;(statearr_11056[8] = inst_11006);
(statearr_11056[9] = inst_11007);
(statearr_11056[10] = inst_11008);
(statearr_11056[11] = inst_11009);
return statearr_11056;
})();var statearr_11057_11092 = state_11049__$1;(statearr_11057_11092[2] = null);
(statearr_11057_11092[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11050 === 7))
{var inst_11045 = (state_11049[2]);var state_11049__$1 = state_11049;var statearr_11058_11093 = state_11049__$1;(statearr_11058_11093[2] = inst_11045);
(statearr_11058_11093[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11050 === 8))
{var inst_11008 = (state_11049[10]);var inst_11009 = (state_11049[11]);var inst_11011 = (inst_11009 < inst_11008);var inst_11012 = inst_11011;var state_11049__$1 = state_11049;if(cljs.core.truth_(inst_11012))
{var statearr_11059_11094 = state_11049__$1;(statearr_11059_11094[1] = 10);
} else
{var statearr_11060_11095 = state_11049__$1;(statearr_11060_11095[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11050 === 9))
{var inst_11042 = (state_11049[2]);var state_11049__$1 = (function (){var statearr_11061 = state_11049;(statearr_11061[12] = inst_11042);
return statearr_11061;
})();var statearr_11062_11096 = state_11049__$1;(statearr_11062_11096[2] = null);
(statearr_11062_11096[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11050 === 10))
{var inst_11007 = (state_11049[9]);var inst_11009 = (state_11049[11]);var inst_11014 = cljs.core._nth.call(null,inst_11007,inst_11009);var state_11049__$1 = state_11049;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11049__$1,13,out,inst_11014);
} else
{if((state_val_11050 === 11))
{var inst_11020 = (state_11049[13]);var inst_11006 = (state_11049[8]);var inst_11020__$1 = cljs.core.seq.call(null,inst_11006);var state_11049__$1 = (function (){var statearr_11066 = state_11049;(statearr_11066[13] = inst_11020__$1);
return statearr_11066;
})();if(inst_11020__$1)
{var statearr_11067_11097 = state_11049__$1;(statearr_11067_11097[1] = 14);
} else
{var statearr_11068_11098 = state_11049__$1;(statearr_11068_11098[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11050 === 12))
{var inst_11040 = (state_11049[2]);var state_11049__$1 = state_11049;var statearr_11069_11099 = state_11049__$1;(statearr_11069_11099[2] = inst_11040);
(statearr_11069_11099[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11050 === 13))
{var inst_11006 = (state_11049[8]);var inst_11007 = (state_11049[9]);var inst_11008 = (state_11049[10]);var inst_11009 = (state_11049[11]);var inst_11016 = (state_11049[2]);var inst_11017 = (inst_11009 + 1);var tmp11063 = inst_11006;var tmp11064 = inst_11007;var tmp11065 = inst_11008;var inst_11006__$1 = tmp11063;var inst_11007__$1 = tmp11064;var inst_11008__$1 = tmp11065;var inst_11009__$1 = inst_11017;var state_11049__$1 = (function (){var statearr_11070 = state_11049;(statearr_11070[14] = inst_11016);
(statearr_11070[8] = inst_11006__$1);
(statearr_11070[9] = inst_11007__$1);
(statearr_11070[10] = inst_11008__$1);
(statearr_11070[11] = inst_11009__$1);
return statearr_11070;
})();var statearr_11071_11100 = state_11049__$1;(statearr_11071_11100[2] = null);
(statearr_11071_11100[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11050 === 14))
{var inst_11020 = (state_11049[13]);var inst_11022 = cljs.core.chunked_seq_QMARK_.call(null,inst_11020);var state_11049__$1 = state_11049;if(inst_11022)
{var statearr_11072_11101 = state_11049__$1;(statearr_11072_11101[1] = 17);
} else
{var statearr_11073_11102 = state_11049__$1;(statearr_11073_11102[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11050 === 15))
{var state_11049__$1 = state_11049;var statearr_11074_11103 = state_11049__$1;(statearr_11074_11103[2] = null);
(statearr_11074_11103[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11050 === 16))
{var inst_11038 = (state_11049[2]);var state_11049__$1 = state_11049;var statearr_11075_11104 = state_11049__$1;(statearr_11075_11104[2] = inst_11038);
(statearr_11075_11104[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11050 === 17))
{var inst_11020 = (state_11049[13]);var inst_11024 = cljs.core.chunk_first.call(null,inst_11020);var inst_11025 = cljs.core.chunk_rest.call(null,inst_11020);var inst_11026 = cljs.core.count.call(null,inst_11024);var inst_11006 = inst_11025;var inst_11007 = inst_11024;var inst_11008 = inst_11026;var inst_11009 = 0;var state_11049__$1 = (function (){var statearr_11076 = state_11049;(statearr_11076[8] = inst_11006);
(statearr_11076[9] = inst_11007);
(statearr_11076[10] = inst_11008);
(statearr_11076[11] = inst_11009);
return statearr_11076;
})();var statearr_11077_11105 = state_11049__$1;(statearr_11077_11105[2] = null);
(statearr_11077_11105[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11050 === 18))
{var inst_11020 = (state_11049[13]);var inst_11029 = cljs.core.first.call(null,inst_11020);var state_11049__$1 = state_11049;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11049__$1,20,out,inst_11029);
} else
{if((state_val_11050 === 19))
{var inst_11035 = (state_11049[2]);var state_11049__$1 = state_11049;var statearr_11078_11106 = state_11049__$1;(statearr_11078_11106[2] = inst_11035);
(statearr_11078_11106[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11050 === 20))
{var inst_11020 = (state_11049[13]);var inst_11031 = (state_11049[2]);var inst_11032 = cljs.core.next.call(null,inst_11020);var inst_11006 = inst_11032;var inst_11007 = null;var inst_11008 = 0;var inst_11009 = 0;var state_11049__$1 = (function (){var statearr_11079 = state_11049;(statearr_11079[8] = inst_11006);
(statearr_11079[9] = inst_11007);
(statearr_11079[10] = inst_11008);
(statearr_11079[11] = inst_11009);
(statearr_11079[15] = inst_11031);
return statearr_11079;
})();var statearr_11080_11107 = state_11049__$1;(statearr_11080_11107[2] = null);
(statearr_11080_11107[1] = 8);
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
var state_machine__6178__auto____0 = (function (){var statearr_11084 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11084[0] = state_machine__6178__auto__);
(statearr_11084[1] = 1);
return statearr_11084;
});
var state_machine__6178__auto____1 = (function (state_11049){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11049);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11085){if((e11085 instanceof Object))
{var ex__6181__auto__ = e11085;var statearr_11086_11108 = state_11049;(statearr_11086_11108[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11049);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11085;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11109 = state_11049;
state_11049 = G__11109;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11049){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_11087 = f__6193__auto__.call(null);(statearr_11087[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11087;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__6192__auto___11190 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_11169){var state_val_11170 = (state_11169[1]);if((state_val_11170 === 1))
{var state_11169__$1 = state_11169;var statearr_11171_11191 = state_11169__$1;(statearr_11171_11191[2] = null);
(statearr_11171_11191[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11170 === 2))
{var state_11169__$1 = state_11169;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11169__$1,4,from);
} else
{if((state_val_11170 === 3))
{var inst_11167 = (state_11169[2]);var state_11169__$1 = state_11169;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11169__$1,inst_11167);
} else
{if((state_val_11170 === 4))
{var inst_11152 = (state_11169[7]);var inst_11152__$1 = (state_11169[2]);var inst_11153 = (inst_11152__$1 == null);var state_11169__$1 = (function (){var statearr_11172 = state_11169;(statearr_11172[7] = inst_11152__$1);
return statearr_11172;
})();if(cljs.core.truth_(inst_11153))
{var statearr_11173_11192 = state_11169__$1;(statearr_11173_11192[1] = 5);
} else
{var statearr_11174_11193 = state_11169__$1;(statearr_11174_11193[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11170 === 5))
{var state_11169__$1 = state_11169;if(cljs.core.truth_(close_QMARK_))
{var statearr_11175_11194 = state_11169__$1;(statearr_11175_11194[1] = 8);
} else
{var statearr_11176_11195 = state_11169__$1;(statearr_11176_11195[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11170 === 6))
{var inst_11152 = (state_11169[7]);var state_11169__$1 = state_11169;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11169__$1,11,to,inst_11152);
} else
{if((state_val_11170 === 7))
{var inst_11165 = (state_11169[2]);var state_11169__$1 = state_11169;var statearr_11177_11196 = state_11169__$1;(statearr_11177_11196[2] = inst_11165);
(statearr_11177_11196[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11170 === 8))
{var inst_11156 = cljs.core.async.close_BANG_.call(null,to);var state_11169__$1 = state_11169;var statearr_11178_11197 = state_11169__$1;(statearr_11178_11197[2] = inst_11156);
(statearr_11178_11197[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11170 === 9))
{var state_11169__$1 = state_11169;var statearr_11179_11198 = state_11169__$1;(statearr_11179_11198[2] = null);
(statearr_11179_11198[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11170 === 10))
{var inst_11159 = (state_11169[2]);var state_11169__$1 = state_11169;var statearr_11180_11199 = state_11169__$1;(statearr_11180_11199[2] = inst_11159);
(statearr_11180_11199[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11170 === 11))
{var inst_11162 = (state_11169[2]);var state_11169__$1 = (function (){var statearr_11181 = state_11169;(statearr_11181[8] = inst_11162);
return statearr_11181;
})();var statearr_11182_11200 = state_11169__$1;(statearr_11182_11200[2] = null);
(statearr_11182_11200[1] = 2);
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
var state_machine__6178__auto____0 = (function (){var statearr_11186 = [null,null,null,null,null,null,null,null,null];(statearr_11186[0] = state_machine__6178__auto__);
(statearr_11186[1] = 1);
return statearr_11186;
});
var state_machine__6178__auto____1 = (function (state_11169){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11169);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11187){if((e11187 instanceof Object))
{var ex__6181__auto__ = e11187;var statearr_11188_11201 = state_11169;(statearr_11188_11201[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11169);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11187;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11202 = state_11169;
state_11169 = G__11202;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11169){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_11189 = f__6193__auto__.call(null);(statearr_11189[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___11190);
return statearr_11189;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6192__auto___11289 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_11267){var state_val_11268 = (state_11267[1]);if((state_val_11268 === 1))
{var state_11267__$1 = state_11267;var statearr_11269_11290 = state_11267__$1;(statearr_11269_11290[2] = null);
(statearr_11269_11290[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11268 === 2))
{var state_11267__$1 = state_11267;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11267__$1,4,ch);
} else
{if((state_val_11268 === 3))
{var inst_11265 = (state_11267[2]);var state_11267__$1 = state_11267;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11267__$1,inst_11265);
} else
{if((state_val_11268 === 4))
{var inst_11248 = (state_11267[7]);var inst_11248__$1 = (state_11267[2]);var inst_11249 = (inst_11248__$1 == null);var state_11267__$1 = (function (){var statearr_11270 = state_11267;(statearr_11270[7] = inst_11248__$1);
return statearr_11270;
})();if(cljs.core.truth_(inst_11249))
{var statearr_11271_11291 = state_11267__$1;(statearr_11271_11291[1] = 5);
} else
{var statearr_11272_11292 = state_11267__$1;(statearr_11272_11292[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11268 === 5))
{var inst_11251 = cljs.core.async.close_BANG_.call(null,tc);var inst_11252 = cljs.core.async.close_BANG_.call(null,fc);var state_11267__$1 = (function (){var statearr_11273 = state_11267;(statearr_11273[8] = inst_11251);
return statearr_11273;
})();var statearr_11274_11293 = state_11267__$1;(statearr_11274_11293[2] = inst_11252);
(statearr_11274_11293[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11268 === 6))
{var inst_11248 = (state_11267[7]);var inst_11254 = p.call(null,inst_11248);var state_11267__$1 = state_11267;if(cljs.core.truth_(inst_11254))
{var statearr_11275_11294 = state_11267__$1;(statearr_11275_11294[1] = 9);
} else
{var statearr_11276_11295 = state_11267__$1;(statearr_11276_11295[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11268 === 7))
{var inst_11263 = (state_11267[2]);var state_11267__$1 = state_11267;var statearr_11277_11296 = state_11267__$1;(statearr_11277_11296[2] = inst_11263);
(statearr_11277_11296[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11268 === 8))
{var inst_11260 = (state_11267[2]);var state_11267__$1 = (function (){var statearr_11278 = state_11267;(statearr_11278[9] = inst_11260);
return statearr_11278;
})();var statearr_11279_11297 = state_11267__$1;(statearr_11279_11297[2] = null);
(statearr_11279_11297[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11268 === 9))
{var state_11267__$1 = state_11267;var statearr_11280_11298 = state_11267__$1;(statearr_11280_11298[2] = tc);
(statearr_11280_11298[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11268 === 10))
{var state_11267__$1 = state_11267;var statearr_11281_11299 = state_11267__$1;(statearr_11281_11299[2] = fc);
(statearr_11281_11299[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11268 === 11))
{var inst_11248 = (state_11267[7]);var inst_11258 = (state_11267[2]);var state_11267__$1 = state_11267;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11267__$1,8,inst_11258,inst_11248);
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
var state_machine__6178__auto____0 = (function (){var statearr_11285 = [null,null,null,null,null,null,null,null,null,null];(statearr_11285[0] = state_machine__6178__auto__);
(statearr_11285[1] = 1);
return statearr_11285;
});
var state_machine__6178__auto____1 = (function (state_11267){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11267);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11286){if((e11286 instanceof Object))
{var ex__6181__auto__ = e11286;var statearr_11287_11300 = state_11267;(statearr_11287_11300[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11267);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11286;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11301 = state_11267;
state_11267 = G__11301;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11267){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_11288 = f__6193__auto__.call(null);(statearr_11288[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___11289);
return statearr_11288;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6192__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_11348){var state_val_11349 = (state_11348[1]);if((state_val_11349 === 7))
{var inst_11344 = (state_11348[2]);var state_11348__$1 = state_11348;var statearr_11350_11366 = state_11348__$1;(statearr_11350_11366[2] = inst_11344);
(statearr_11350_11366[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11349 === 6))
{var inst_11337 = (state_11348[7]);var inst_11334 = (state_11348[8]);var inst_11341 = f.call(null,inst_11334,inst_11337);var inst_11334__$1 = inst_11341;var state_11348__$1 = (function (){var statearr_11351 = state_11348;(statearr_11351[8] = inst_11334__$1);
return statearr_11351;
})();var statearr_11352_11367 = state_11348__$1;(statearr_11352_11367[2] = null);
(statearr_11352_11367[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11349 === 5))
{var inst_11334 = (state_11348[8]);var state_11348__$1 = state_11348;var statearr_11353_11368 = state_11348__$1;(statearr_11353_11368[2] = inst_11334);
(statearr_11353_11368[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11349 === 4))
{var inst_11337 = (state_11348[7]);var inst_11337__$1 = (state_11348[2]);var inst_11338 = (inst_11337__$1 == null);var state_11348__$1 = (function (){var statearr_11354 = state_11348;(statearr_11354[7] = inst_11337__$1);
return statearr_11354;
})();if(cljs.core.truth_(inst_11338))
{var statearr_11355_11369 = state_11348__$1;(statearr_11355_11369[1] = 5);
} else
{var statearr_11356_11370 = state_11348__$1;(statearr_11356_11370[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11349 === 3))
{var inst_11346 = (state_11348[2]);var state_11348__$1 = state_11348;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11348__$1,inst_11346);
} else
{if((state_val_11349 === 2))
{var state_11348__$1 = state_11348;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11348__$1,4,ch);
} else
{if((state_val_11349 === 1))
{var inst_11334 = init;var state_11348__$1 = (function (){var statearr_11357 = state_11348;(statearr_11357[8] = inst_11334);
return statearr_11357;
})();var statearr_11358_11371 = state_11348__$1;(statearr_11358_11371[2] = null);
(statearr_11358_11371[1] = 2);
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
var state_machine__6178__auto____0 = (function (){var statearr_11362 = [null,null,null,null,null,null,null,null,null];(statearr_11362[0] = state_machine__6178__auto__);
(statearr_11362[1] = 1);
return statearr_11362;
});
var state_machine__6178__auto____1 = (function (state_11348){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11348);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11363){if((e11363 instanceof Object))
{var ex__6181__auto__ = e11363;var statearr_11364_11372 = state_11348;(statearr_11364_11372[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11348);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11363;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11373 = state_11348;
state_11348 = G__11373;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11348){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_11365 = f__6193__auto__.call(null);(statearr_11365[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11365;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6192__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_11435){var state_val_11436 = (state_11435[1]);if((state_val_11436 === 1))
{var inst_11415 = cljs.core.seq.call(null,coll);var inst_11416 = inst_11415;var state_11435__$1 = (function (){var statearr_11437 = state_11435;(statearr_11437[7] = inst_11416);
return statearr_11437;
})();var statearr_11438_11456 = state_11435__$1;(statearr_11438_11456[2] = null);
(statearr_11438_11456[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11436 === 2))
{var inst_11416 = (state_11435[7]);var state_11435__$1 = state_11435;if(cljs.core.truth_(inst_11416))
{var statearr_11439_11457 = state_11435__$1;(statearr_11439_11457[1] = 4);
} else
{var statearr_11440_11458 = state_11435__$1;(statearr_11440_11458[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11436 === 3))
{var inst_11433 = (state_11435[2]);var state_11435__$1 = state_11435;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11435__$1,inst_11433);
} else
{if((state_val_11436 === 4))
{var inst_11416 = (state_11435[7]);var inst_11419 = cljs.core.first.call(null,inst_11416);var state_11435__$1 = state_11435;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11435__$1,7,ch,inst_11419);
} else
{if((state_val_11436 === 5))
{var state_11435__$1 = state_11435;if(cljs.core.truth_(close_QMARK_))
{var statearr_11441_11459 = state_11435__$1;(statearr_11441_11459[1] = 8);
} else
{var statearr_11442_11460 = state_11435__$1;(statearr_11442_11460[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11436 === 6))
{var inst_11431 = (state_11435[2]);var state_11435__$1 = state_11435;var statearr_11443_11461 = state_11435__$1;(statearr_11443_11461[2] = inst_11431);
(statearr_11443_11461[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11436 === 7))
{var inst_11416 = (state_11435[7]);var inst_11421 = (state_11435[2]);var inst_11422 = cljs.core.next.call(null,inst_11416);var inst_11416__$1 = inst_11422;var state_11435__$1 = (function (){var statearr_11444 = state_11435;(statearr_11444[8] = inst_11421);
(statearr_11444[7] = inst_11416__$1);
return statearr_11444;
})();var statearr_11445_11462 = state_11435__$1;(statearr_11445_11462[2] = null);
(statearr_11445_11462[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11436 === 8))
{var inst_11426 = cljs.core.async.close_BANG_.call(null,ch);var state_11435__$1 = state_11435;var statearr_11446_11463 = state_11435__$1;(statearr_11446_11463[2] = inst_11426);
(statearr_11446_11463[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11436 === 9))
{var state_11435__$1 = state_11435;var statearr_11447_11464 = state_11435__$1;(statearr_11447_11464[2] = null);
(statearr_11447_11464[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11436 === 10))
{var inst_11429 = (state_11435[2]);var state_11435__$1 = state_11435;var statearr_11448_11465 = state_11435__$1;(statearr_11448_11465[2] = inst_11429);
(statearr_11448_11465[1] = 6);
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
var state_machine__6178__auto____0 = (function (){var statearr_11452 = [null,null,null,null,null,null,null,null,null];(statearr_11452[0] = state_machine__6178__auto__);
(statearr_11452[1] = 1);
return statearr_11452;
});
var state_machine__6178__auto____1 = (function (state_11435){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11435);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11453){if((e11453 instanceof Object))
{var ex__6181__auto__ = e11453;var statearr_11454_11466 = state_11435;(statearr_11454_11466[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11435);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11453;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11467 = state_11435;
state_11435 = G__11467;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11435){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_11455 = f__6193__auto__.call(null);(statearr_11455[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11455;
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
cljs.core.async.Mux = (function (){var obj11469 = {};return obj11469;
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
cljs.core.async.Mult = (function (){var obj11471 = {};return obj11471;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t11695 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11695 = (function (cs,ch,mult,meta11696){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta11696 = meta11696;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11695.cljs$lang$type = true;
cljs.core.async.t11695.cljs$lang$ctorStr = "cljs.core.async/t11695";
cljs.core.async.t11695.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11695");
});})(cs))
;
cljs.core.async.t11695.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t11695.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t11695.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t11695.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t11695.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11695.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t11695.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11697){var self__ = this;
var _11697__$1 = this;return self__.meta11696;
});})(cs))
;
cljs.core.async.t11695.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11697,meta11696__$1){var self__ = this;
var _11697__$1 = this;return (new cljs.core.async.t11695(self__.cs,self__.ch,self__.mult,meta11696__$1));
});})(cs))
;
cljs.core.async.__GT_t11695 = ((function (cs){
return (function __GT_t11695(cs__$1,ch__$1,mult__$1,meta11696){return (new cljs.core.async.t11695(cs__$1,ch__$1,mult__$1,meta11696));
});})(cs))
;
}
return (new cljs.core.async.t11695(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6192__auto___11918 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_11832){var state_val_11833 = (state_11832[1]);if((state_val_11833 === 32))
{var inst_11776 = (state_11832[7]);var inst_11700 = (state_11832[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11832,31,Object,null,30);var inst_11783 = cljs.core.async.put_BANG_.call(null,inst_11776,inst_11700,done);var state_11832__$1 = state_11832;var statearr_11834_11919 = state_11832__$1;(statearr_11834_11919[2] = inst_11783);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11832__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11833 === 1))
{var state_11832__$1 = state_11832;var statearr_11835_11920 = state_11832__$1;(statearr_11835_11920[2] = null);
(statearr_11835_11920[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11833 === 33))
{var inst_11789 = (state_11832[9]);var inst_11791 = cljs.core.chunked_seq_QMARK_.call(null,inst_11789);var state_11832__$1 = state_11832;if(inst_11791)
{var statearr_11836_11921 = state_11832__$1;(statearr_11836_11921[1] = 36);
} else
{var statearr_11837_11922 = state_11832__$1;(statearr_11837_11922[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11833 === 2))
{var state_11832__$1 = state_11832;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11832__$1,4,ch);
} else
{if((state_val_11833 === 34))
{var state_11832__$1 = state_11832;var statearr_11838_11923 = state_11832__$1;(statearr_11838_11923[2] = null);
(statearr_11838_11923[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11833 === 3))
{var inst_11830 = (state_11832[2]);var state_11832__$1 = state_11832;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11832__$1,inst_11830);
} else
{if((state_val_11833 === 35))
{var inst_11814 = (state_11832[2]);var state_11832__$1 = state_11832;var statearr_11839_11924 = state_11832__$1;(statearr_11839_11924[2] = inst_11814);
(statearr_11839_11924[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11833 === 4))
{var inst_11700 = (state_11832[8]);var inst_11700__$1 = (state_11832[2]);var inst_11701 = (inst_11700__$1 == null);var state_11832__$1 = (function (){var statearr_11840 = state_11832;(statearr_11840[8] = inst_11700__$1);
return statearr_11840;
})();if(cljs.core.truth_(inst_11701))
{var statearr_11841_11925 = state_11832__$1;(statearr_11841_11925[1] = 5);
} else
{var statearr_11842_11926 = state_11832__$1;(statearr_11842_11926[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11833 === 36))
{var inst_11789 = (state_11832[9]);var inst_11793 = cljs.core.chunk_first.call(null,inst_11789);var inst_11794 = cljs.core.chunk_rest.call(null,inst_11789);var inst_11795 = cljs.core.count.call(null,inst_11793);var inst_11768 = inst_11794;var inst_11769 = inst_11793;var inst_11770 = inst_11795;var inst_11771 = 0;var state_11832__$1 = (function (){var statearr_11843 = state_11832;(statearr_11843[10] = inst_11770);
(statearr_11843[11] = inst_11771);
(statearr_11843[12] = inst_11769);
(statearr_11843[13] = inst_11768);
return statearr_11843;
})();var statearr_11844_11927 = state_11832__$1;(statearr_11844_11927[2] = null);
(statearr_11844_11927[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11833 === 5))
{var inst_11707 = cljs.core.deref.call(null,cs);var inst_11708 = cljs.core.seq.call(null,inst_11707);var inst_11709 = inst_11708;var inst_11710 = null;var inst_11711 = 0;var inst_11712 = 0;var state_11832__$1 = (function (){var statearr_11845 = state_11832;(statearr_11845[14] = inst_11709);
(statearr_11845[15] = inst_11710);
(statearr_11845[16] = inst_11711);
(statearr_11845[17] = inst_11712);
return statearr_11845;
})();var statearr_11846_11928 = state_11832__$1;(statearr_11846_11928[2] = null);
(statearr_11846_11928[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11833 === 37))
{var inst_11789 = (state_11832[9]);var inst_11798 = cljs.core.first.call(null,inst_11789);var state_11832__$1 = (function (){var statearr_11847 = state_11832;(statearr_11847[18] = inst_11798);
return statearr_11847;
})();var statearr_11848_11929 = state_11832__$1;(statearr_11848_11929[2] = null);
(statearr_11848_11929[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11833 === 6))
{var inst_11760 = (state_11832[19]);var inst_11759 = cljs.core.deref.call(null,cs);var inst_11760__$1 = cljs.core.keys.call(null,inst_11759);var inst_11761 = cljs.core.count.call(null,inst_11760__$1);var inst_11762 = cljs.core.reset_BANG_.call(null,dctr,inst_11761);var inst_11767 = cljs.core.seq.call(null,inst_11760__$1);var inst_11768 = inst_11767;var inst_11769 = null;var inst_11770 = 0;var inst_11771 = 0;var state_11832__$1 = (function (){var statearr_11849 = state_11832;(statearr_11849[10] = inst_11770);
(statearr_11849[11] = inst_11771);
(statearr_11849[12] = inst_11769);
(statearr_11849[13] = inst_11768);
(statearr_11849[20] = inst_11762);
(statearr_11849[19] = inst_11760__$1);
return statearr_11849;
})();var statearr_11850_11930 = state_11832__$1;(statearr_11850_11930[2] = null);
(statearr_11850_11930[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11833 === 38))
{var inst_11811 = (state_11832[2]);var state_11832__$1 = state_11832;var statearr_11851_11931 = state_11832__$1;(statearr_11851_11931[2] = inst_11811);
(statearr_11851_11931[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11833 === 7))
{var inst_11828 = (state_11832[2]);var state_11832__$1 = state_11832;var statearr_11852_11932 = state_11832__$1;(statearr_11852_11932[2] = inst_11828);
(statearr_11852_11932[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11833 === 39))
{var inst_11789 = (state_11832[9]);var inst_11807 = (state_11832[2]);var inst_11808 = cljs.core.next.call(null,inst_11789);var inst_11768 = inst_11808;var inst_11769 = null;var inst_11770 = 0;var inst_11771 = 0;var state_11832__$1 = (function (){var statearr_11853 = state_11832;(statearr_11853[10] = inst_11770);
(statearr_11853[11] = inst_11771);
(statearr_11853[12] = inst_11769);
(statearr_11853[13] = inst_11768);
(statearr_11853[21] = inst_11807);
return statearr_11853;
})();var statearr_11854_11933 = state_11832__$1;(statearr_11854_11933[2] = null);
(statearr_11854_11933[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11833 === 8))
{var inst_11711 = (state_11832[16]);var inst_11712 = (state_11832[17]);var inst_11714 = (inst_11712 < inst_11711);var inst_11715 = inst_11714;var state_11832__$1 = state_11832;if(cljs.core.truth_(inst_11715))
{var statearr_11855_11934 = state_11832__$1;(statearr_11855_11934[1] = 10);
} else
{var statearr_11856_11935 = state_11832__$1;(statearr_11856_11935[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11833 === 40))
{var inst_11798 = (state_11832[18]);var inst_11799 = (state_11832[2]);var inst_11800 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11801 = cljs.core.async.untap_STAR_.call(null,m,inst_11798);var state_11832__$1 = (function (){var statearr_11857 = state_11832;(statearr_11857[22] = inst_11800);
(statearr_11857[23] = inst_11799);
return statearr_11857;
})();var statearr_11858_11936 = state_11832__$1;(statearr_11858_11936[2] = inst_11801);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11832__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11833 === 9))
{var inst_11757 = (state_11832[2]);var state_11832__$1 = state_11832;var statearr_11859_11937 = state_11832__$1;(statearr_11859_11937[2] = inst_11757);
(statearr_11859_11937[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11833 === 41))
{var inst_11798 = (state_11832[18]);var inst_11700 = (state_11832[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11832,40,Object,null,39);var inst_11805 = cljs.core.async.put_BANG_.call(null,inst_11798,inst_11700,done);var state_11832__$1 = state_11832;var statearr_11860_11938 = state_11832__$1;(statearr_11860_11938[2] = inst_11805);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11832__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11833 === 10))
{var inst_11710 = (state_11832[15]);var inst_11712 = (state_11832[17]);var inst_11718 = cljs.core._nth.call(null,inst_11710,inst_11712);var inst_11719 = cljs.core.nth.call(null,inst_11718,0,null);var inst_11720 = cljs.core.nth.call(null,inst_11718,1,null);var state_11832__$1 = (function (){var statearr_11861 = state_11832;(statearr_11861[24] = inst_11719);
return statearr_11861;
})();if(cljs.core.truth_(inst_11720))
{var statearr_11862_11939 = state_11832__$1;(statearr_11862_11939[1] = 13);
} else
{var statearr_11863_11940 = state_11832__$1;(statearr_11863_11940[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11833 === 42))
{var state_11832__$1 = state_11832;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11832__$1,45,dchan);
} else
{if((state_val_11833 === 11))
{var inst_11709 = (state_11832[14]);var inst_11729 = (state_11832[25]);var inst_11729__$1 = cljs.core.seq.call(null,inst_11709);var state_11832__$1 = (function (){var statearr_11864 = state_11832;(statearr_11864[25] = inst_11729__$1);
return statearr_11864;
})();if(inst_11729__$1)
{var statearr_11865_11941 = state_11832__$1;(statearr_11865_11941[1] = 16);
} else
{var statearr_11866_11942 = state_11832__$1;(statearr_11866_11942[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11833 === 43))
{var state_11832__$1 = state_11832;var statearr_11867_11943 = state_11832__$1;(statearr_11867_11943[2] = null);
(statearr_11867_11943[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11833 === 12))
{var inst_11755 = (state_11832[2]);var state_11832__$1 = state_11832;var statearr_11868_11944 = state_11832__$1;(statearr_11868_11944[2] = inst_11755);
(statearr_11868_11944[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11833 === 44))
{var inst_11825 = (state_11832[2]);var state_11832__$1 = (function (){var statearr_11869 = state_11832;(statearr_11869[26] = inst_11825);
return statearr_11869;
})();var statearr_11870_11945 = state_11832__$1;(statearr_11870_11945[2] = null);
(statearr_11870_11945[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11833 === 13))
{var inst_11719 = (state_11832[24]);var inst_11722 = cljs.core.async.close_BANG_.call(null,inst_11719);var state_11832__$1 = state_11832;var statearr_11871_11946 = state_11832__$1;(statearr_11871_11946[2] = inst_11722);
(statearr_11871_11946[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11833 === 45))
{var inst_11822 = (state_11832[2]);var state_11832__$1 = state_11832;var statearr_11875_11947 = state_11832__$1;(statearr_11875_11947[2] = inst_11822);
(statearr_11875_11947[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11833 === 14))
{var state_11832__$1 = state_11832;var statearr_11876_11948 = state_11832__$1;(statearr_11876_11948[2] = null);
(statearr_11876_11948[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11833 === 15))
{var inst_11709 = (state_11832[14]);var inst_11710 = (state_11832[15]);var inst_11711 = (state_11832[16]);var inst_11712 = (state_11832[17]);var inst_11725 = (state_11832[2]);var inst_11726 = (inst_11712 + 1);var tmp11872 = inst_11709;var tmp11873 = inst_11710;var tmp11874 = inst_11711;var inst_11709__$1 = tmp11872;var inst_11710__$1 = tmp11873;var inst_11711__$1 = tmp11874;var inst_11712__$1 = inst_11726;var state_11832__$1 = (function (){var statearr_11877 = state_11832;(statearr_11877[14] = inst_11709__$1);
(statearr_11877[27] = inst_11725);
(statearr_11877[15] = inst_11710__$1);
(statearr_11877[16] = inst_11711__$1);
(statearr_11877[17] = inst_11712__$1);
return statearr_11877;
})();var statearr_11878_11949 = state_11832__$1;(statearr_11878_11949[2] = null);
(statearr_11878_11949[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11833 === 16))
{var inst_11729 = (state_11832[25]);var inst_11731 = cljs.core.chunked_seq_QMARK_.call(null,inst_11729);var state_11832__$1 = state_11832;if(inst_11731)
{var statearr_11879_11950 = state_11832__$1;(statearr_11879_11950[1] = 19);
} else
{var statearr_11880_11951 = state_11832__$1;(statearr_11880_11951[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11833 === 17))
{var state_11832__$1 = state_11832;var statearr_11881_11952 = state_11832__$1;(statearr_11881_11952[2] = null);
(statearr_11881_11952[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11833 === 18))
{var inst_11753 = (state_11832[2]);var state_11832__$1 = state_11832;var statearr_11882_11953 = state_11832__$1;(statearr_11882_11953[2] = inst_11753);
(statearr_11882_11953[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11833 === 19))
{var inst_11729 = (state_11832[25]);var inst_11733 = cljs.core.chunk_first.call(null,inst_11729);var inst_11734 = cljs.core.chunk_rest.call(null,inst_11729);var inst_11735 = cljs.core.count.call(null,inst_11733);var inst_11709 = inst_11734;var inst_11710 = inst_11733;var inst_11711 = inst_11735;var inst_11712 = 0;var state_11832__$1 = (function (){var statearr_11883 = state_11832;(statearr_11883[14] = inst_11709);
(statearr_11883[15] = inst_11710);
(statearr_11883[16] = inst_11711);
(statearr_11883[17] = inst_11712);
return statearr_11883;
})();var statearr_11884_11954 = state_11832__$1;(statearr_11884_11954[2] = null);
(statearr_11884_11954[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11833 === 20))
{var inst_11729 = (state_11832[25]);var inst_11739 = cljs.core.first.call(null,inst_11729);var inst_11740 = cljs.core.nth.call(null,inst_11739,0,null);var inst_11741 = cljs.core.nth.call(null,inst_11739,1,null);var state_11832__$1 = (function (){var statearr_11885 = state_11832;(statearr_11885[28] = inst_11740);
return statearr_11885;
})();if(cljs.core.truth_(inst_11741))
{var statearr_11886_11955 = state_11832__$1;(statearr_11886_11955[1] = 22);
} else
{var statearr_11887_11956 = state_11832__$1;(statearr_11887_11956[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11833 === 21))
{var inst_11750 = (state_11832[2]);var state_11832__$1 = state_11832;var statearr_11888_11957 = state_11832__$1;(statearr_11888_11957[2] = inst_11750);
(statearr_11888_11957[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11833 === 22))
{var inst_11740 = (state_11832[28]);var inst_11743 = cljs.core.async.close_BANG_.call(null,inst_11740);var state_11832__$1 = state_11832;var statearr_11889_11958 = state_11832__$1;(statearr_11889_11958[2] = inst_11743);
(statearr_11889_11958[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11833 === 23))
{var state_11832__$1 = state_11832;var statearr_11890_11959 = state_11832__$1;(statearr_11890_11959[2] = null);
(statearr_11890_11959[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11833 === 24))
{var inst_11729 = (state_11832[25]);var inst_11746 = (state_11832[2]);var inst_11747 = cljs.core.next.call(null,inst_11729);var inst_11709 = inst_11747;var inst_11710 = null;var inst_11711 = 0;var inst_11712 = 0;var state_11832__$1 = (function (){var statearr_11891 = state_11832;(statearr_11891[29] = inst_11746);
(statearr_11891[14] = inst_11709);
(statearr_11891[15] = inst_11710);
(statearr_11891[16] = inst_11711);
(statearr_11891[17] = inst_11712);
return statearr_11891;
})();var statearr_11892_11960 = state_11832__$1;(statearr_11892_11960[2] = null);
(statearr_11892_11960[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11833 === 25))
{var inst_11770 = (state_11832[10]);var inst_11771 = (state_11832[11]);var inst_11773 = (inst_11771 < inst_11770);var inst_11774 = inst_11773;var state_11832__$1 = state_11832;if(cljs.core.truth_(inst_11774))
{var statearr_11893_11961 = state_11832__$1;(statearr_11893_11961[1] = 27);
} else
{var statearr_11894_11962 = state_11832__$1;(statearr_11894_11962[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11833 === 26))
{var inst_11760 = (state_11832[19]);var inst_11818 = (state_11832[2]);var inst_11819 = cljs.core.seq.call(null,inst_11760);var state_11832__$1 = (function (){var statearr_11895 = state_11832;(statearr_11895[30] = inst_11818);
return statearr_11895;
})();if(inst_11819)
{var statearr_11896_11963 = state_11832__$1;(statearr_11896_11963[1] = 42);
} else
{var statearr_11897_11964 = state_11832__$1;(statearr_11897_11964[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11833 === 27))
{var inst_11771 = (state_11832[11]);var inst_11769 = (state_11832[12]);var inst_11776 = cljs.core._nth.call(null,inst_11769,inst_11771);var state_11832__$1 = (function (){var statearr_11898 = state_11832;(statearr_11898[7] = inst_11776);
return statearr_11898;
})();var statearr_11899_11965 = state_11832__$1;(statearr_11899_11965[2] = null);
(statearr_11899_11965[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11833 === 28))
{var inst_11768 = (state_11832[13]);var inst_11789 = (state_11832[9]);var inst_11789__$1 = cljs.core.seq.call(null,inst_11768);var state_11832__$1 = (function (){var statearr_11903 = state_11832;(statearr_11903[9] = inst_11789__$1);
return statearr_11903;
})();if(inst_11789__$1)
{var statearr_11904_11966 = state_11832__$1;(statearr_11904_11966[1] = 33);
} else
{var statearr_11905_11967 = state_11832__$1;(statearr_11905_11967[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11833 === 29))
{var inst_11816 = (state_11832[2]);var state_11832__$1 = state_11832;var statearr_11906_11968 = state_11832__$1;(statearr_11906_11968[2] = inst_11816);
(statearr_11906_11968[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11833 === 30))
{var inst_11770 = (state_11832[10]);var inst_11771 = (state_11832[11]);var inst_11769 = (state_11832[12]);var inst_11768 = (state_11832[13]);var inst_11785 = (state_11832[2]);var inst_11786 = (inst_11771 + 1);var tmp11900 = inst_11770;var tmp11901 = inst_11769;var tmp11902 = inst_11768;var inst_11768__$1 = tmp11902;var inst_11769__$1 = tmp11901;var inst_11770__$1 = tmp11900;var inst_11771__$1 = inst_11786;var state_11832__$1 = (function (){var statearr_11907 = state_11832;(statearr_11907[10] = inst_11770__$1);
(statearr_11907[31] = inst_11785);
(statearr_11907[11] = inst_11771__$1);
(statearr_11907[12] = inst_11769__$1);
(statearr_11907[13] = inst_11768__$1);
return statearr_11907;
})();var statearr_11908_11969 = state_11832__$1;(statearr_11908_11969[2] = null);
(statearr_11908_11969[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11833 === 31))
{var inst_11776 = (state_11832[7]);var inst_11777 = (state_11832[2]);var inst_11778 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11779 = cljs.core.async.untap_STAR_.call(null,m,inst_11776);var state_11832__$1 = (function (){var statearr_11909 = state_11832;(statearr_11909[32] = inst_11777);
(statearr_11909[33] = inst_11778);
return statearr_11909;
})();var statearr_11910_11970 = state_11832__$1;(statearr_11910_11970[2] = inst_11779);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11832__$1);
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
var state_machine__6178__auto____0 = (function (){var statearr_11914 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11914[0] = state_machine__6178__auto__);
(statearr_11914[1] = 1);
return statearr_11914;
});
var state_machine__6178__auto____1 = (function (state_11832){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11832);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11915){if((e11915 instanceof Object))
{var ex__6181__auto__ = e11915;var statearr_11916_11971 = state_11832;(statearr_11916_11971[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11832);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11915;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11972 = state_11832;
state_11832 = G__11972;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11832){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_11917 = f__6193__auto__.call(null);(statearr_11917[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___11918);
return statearr_11917;
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
cljs.core.async.Mix = (function (){var obj11974 = {};return obj11974;
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
;var m = (function (){if(typeof cljs.core.async.t12084 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12084 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta12085){
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
this.meta12085 = meta12085;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12084.cljs$lang$type = true;
cljs.core.async.t12084.cljs$lang$ctorStr = "cljs.core.async/t12084";
cljs.core.async.t12084.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t12084");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12084.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12084.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12084.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12084.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12084.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12084.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12084.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12084.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12084.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12086){var self__ = this;
var _12086__$1 = this;return self__.meta12085;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12084.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12086,meta12085__$1){var self__ = this;
var _12086__$1 = this;return (new cljs.core.async.t12084(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta12085__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12084 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12084(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta12085){return (new cljs.core.async.t12084(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta12085));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12084(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__6192__auto___12193 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_12151){var state_val_12152 = (state_12151[1]);if((state_val_12152 === 1))
{var inst_12090 = (state_12151[7]);var inst_12090__$1 = calc_state.call(null);var inst_12091 = cljs.core.seq_QMARK_.call(null,inst_12090__$1);var state_12151__$1 = (function (){var statearr_12153 = state_12151;(statearr_12153[7] = inst_12090__$1);
return statearr_12153;
})();if(inst_12091)
{var statearr_12154_12194 = state_12151__$1;(statearr_12154_12194[1] = 2);
} else
{var statearr_12155_12195 = state_12151__$1;(statearr_12155_12195[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12152 === 2))
{var inst_12090 = (state_12151[7]);var inst_12093 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12090);var state_12151__$1 = state_12151;var statearr_12156_12196 = state_12151__$1;(statearr_12156_12196[2] = inst_12093);
(statearr_12156_12196[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12152 === 3))
{var inst_12090 = (state_12151[7]);var state_12151__$1 = state_12151;var statearr_12157_12197 = state_12151__$1;(statearr_12157_12197[2] = inst_12090);
(statearr_12157_12197[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12152 === 4))
{var inst_12090 = (state_12151[7]);var inst_12096 = (state_12151[2]);var inst_12097 = cljs.core.get.call(null,inst_12096,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12098 = cljs.core.get.call(null,inst_12096,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12099 = cljs.core.get.call(null,inst_12096,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_12100 = inst_12090;var state_12151__$1 = (function (){var statearr_12158 = state_12151;(statearr_12158[8] = inst_12100);
(statearr_12158[9] = inst_12099);
(statearr_12158[10] = inst_12097);
(statearr_12158[11] = inst_12098);
return statearr_12158;
})();var statearr_12159_12198 = state_12151__$1;(statearr_12159_12198[2] = null);
(statearr_12159_12198[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12152 === 5))
{var inst_12100 = (state_12151[8]);var inst_12103 = cljs.core.seq_QMARK_.call(null,inst_12100);var state_12151__$1 = state_12151;if(inst_12103)
{var statearr_12160_12199 = state_12151__$1;(statearr_12160_12199[1] = 7);
} else
{var statearr_12161_12200 = state_12151__$1;(statearr_12161_12200[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12152 === 6))
{var inst_12149 = (state_12151[2]);var state_12151__$1 = state_12151;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12151__$1,inst_12149);
} else
{if((state_val_12152 === 7))
{var inst_12100 = (state_12151[8]);var inst_12105 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12100);var state_12151__$1 = state_12151;var statearr_12162_12201 = state_12151__$1;(statearr_12162_12201[2] = inst_12105);
(statearr_12162_12201[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12152 === 8))
{var inst_12100 = (state_12151[8]);var state_12151__$1 = state_12151;var statearr_12163_12202 = state_12151__$1;(statearr_12163_12202[2] = inst_12100);
(statearr_12163_12202[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12152 === 9))
{var inst_12108 = (state_12151[12]);var inst_12108__$1 = (state_12151[2]);var inst_12109 = cljs.core.get.call(null,inst_12108__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12110 = cljs.core.get.call(null,inst_12108__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12111 = cljs.core.get.call(null,inst_12108__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_12151__$1 = (function (){var statearr_12164 = state_12151;(statearr_12164[12] = inst_12108__$1);
(statearr_12164[13] = inst_12110);
(statearr_12164[14] = inst_12111);
return statearr_12164;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12151__$1,10,inst_12109);
} else
{if((state_val_12152 === 10))
{var inst_12115 = (state_12151[15]);var inst_12116 = (state_12151[16]);var inst_12114 = (state_12151[2]);var inst_12115__$1 = cljs.core.nth.call(null,inst_12114,0,null);var inst_12116__$1 = cljs.core.nth.call(null,inst_12114,1,null);var inst_12117 = (inst_12115__$1 == null);var inst_12118 = cljs.core._EQ_.call(null,inst_12116__$1,change);var inst_12119 = (inst_12117) || (inst_12118);var state_12151__$1 = (function (){var statearr_12165 = state_12151;(statearr_12165[15] = inst_12115__$1);
(statearr_12165[16] = inst_12116__$1);
return statearr_12165;
})();if(cljs.core.truth_(inst_12119))
{var statearr_12166_12203 = state_12151__$1;(statearr_12166_12203[1] = 11);
} else
{var statearr_12167_12204 = state_12151__$1;(statearr_12167_12204[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12152 === 11))
{var inst_12115 = (state_12151[15]);var inst_12121 = (inst_12115 == null);var state_12151__$1 = state_12151;if(cljs.core.truth_(inst_12121))
{var statearr_12168_12205 = state_12151__$1;(statearr_12168_12205[1] = 14);
} else
{var statearr_12169_12206 = state_12151__$1;(statearr_12169_12206[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12152 === 12))
{var inst_12111 = (state_12151[14]);var inst_12130 = (state_12151[17]);var inst_12116 = (state_12151[16]);var inst_12130__$1 = inst_12111.call(null,inst_12116);var state_12151__$1 = (function (){var statearr_12170 = state_12151;(statearr_12170[17] = inst_12130__$1);
return statearr_12170;
})();if(cljs.core.truth_(inst_12130__$1))
{var statearr_12171_12207 = state_12151__$1;(statearr_12171_12207[1] = 17);
} else
{var statearr_12172_12208 = state_12151__$1;(statearr_12172_12208[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12152 === 13))
{var inst_12147 = (state_12151[2]);var state_12151__$1 = state_12151;var statearr_12173_12209 = state_12151__$1;(statearr_12173_12209[2] = inst_12147);
(statearr_12173_12209[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12152 === 14))
{var inst_12116 = (state_12151[16]);var inst_12123 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12116);var state_12151__$1 = state_12151;var statearr_12174_12210 = state_12151__$1;(statearr_12174_12210[2] = inst_12123);
(statearr_12174_12210[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12152 === 15))
{var state_12151__$1 = state_12151;var statearr_12175_12211 = state_12151__$1;(statearr_12175_12211[2] = null);
(statearr_12175_12211[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12152 === 16))
{var inst_12126 = (state_12151[2]);var inst_12127 = calc_state.call(null);var inst_12100 = inst_12127;var state_12151__$1 = (function (){var statearr_12176 = state_12151;(statearr_12176[8] = inst_12100);
(statearr_12176[18] = inst_12126);
return statearr_12176;
})();var statearr_12177_12212 = state_12151__$1;(statearr_12177_12212[2] = null);
(statearr_12177_12212[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12152 === 17))
{var inst_12130 = (state_12151[17]);var state_12151__$1 = state_12151;var statearr_12178_12213 = state_12151__$1;(statearr_12178_12213[2] = inst_12130);
(statearr_12178_12213[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12152 === 18))
{var inst_12110 = (state_12151[13]);var inst_12111 = (state_12151[14]);var inst_12116 = (state_12151[16]);var inst_12133 = cljs.core.empty_QMARK_.call(null,inst_12111);var inst_12134 = inst_12110.call(null,inst_12116);var inst_12135 = cljs.core.not.call(null,inst_12134);var inst_12136 = (inst_12133) && (inst_12135);var state_12151__$1 = state_12151;var statearr_12179_12214 = state_12151__$1;(statearr_12179_12214[2] = inst_12136);
(statearr_12179_12214[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12152 === 19))
{var inst_12138 = (state_12151[2]);var state_12151__$1 = state_12151;if(cljs.core.truth_(inst_12138))
{var statearr_12180_12215 = state_12151__$1;(statearr_12180_12215[1] = 20);
} else
{var statearr_12181_12216 = state_12151__$1;(statearr_12181_12216[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12152 === 20))
{var inst_12115 = (state_12151[15]);var state_12151__$1 = state_12151;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12151__$1,23,out,inst_12115);
} else
{if((state_val_12152 === 21))
{var state_12151__$1 = state_12151;var statearr_12182_12217 = state_12151__$1;(statearr_12182_12217[2] = null);
(statearr_12182_12217[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12152 === 22))
{var inst_12108 = (state_12151[12]);var inst_12144 = (state_12151[2]);var inst_12100 = inst_12108;var state_12151__$1 = (function (){var statearr_12183 = state_12151;(statearr_12183[8] = inst_12100);
(statearr_12183[19] = inst_12144);
return statearr_12183;
})();var statearr_12184_12218 = state_12151__$1;(statearr_12184_12218[2] = null);
(statearr_12184_12218[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12152 === 23))
{var inst_12141 = (state_12151[2]);var state_12151__$1 = state_12151;var statearr_12185_12219 = state_12151__$1;(statearr_12185_12219[2] = inst_12141);
(statearr_12185_12219[1] = 22);
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
var state_machine__6178__auto____0 = (function (){var statearr_12189 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12189[0] = state_machine__6178__auto__);
(statearr_12189[1] = 1);
return statearr_12189;
});
var state_machine__6178__auto____1 = (function (state_12151){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12151);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12190){if((e12190 instanceof Object))
{var ex__6181__auto__ = e12190;var statearr_12191_12220 = state_12151;(statearr_12191_12220[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12151);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12190;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12221 = state_12151;
state_12151 = G__12221;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12151){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_12192 = f__6193__auto__.call(null);(statearr_12192[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___12193);
return statearr_12192;
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
cljs.core.async.Pub = (function (){var obj12223 = {};return obj12223;
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
return (function (p1__12224_SHARP_){if(cljs.core.truth_(p1__12224_SHARP_.call(null,topic)))
{return p1__12224_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__12224_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3443__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t12349 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12349 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta12350){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta12350 = meta12350;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12349.cljs$lang$type = true;
cljs.core.async.t12349.cljs$lang$ctorStr = "cljs.core.async/t12349";
cljs.core.async.t12349.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t12349");
});})(mults,ensure_mult))
;
cljs.core.async.t12349.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t12349.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t12349.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t12349.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t12349.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t12349.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12349.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t12349.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12351){var self__ = this;
var _12351__$1 = this;return self__.meta12350;
});})(mults,ensure_mult))
;
cljs.core.async.t12349.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12351,meta12350__$1){var self__ = this;
var _12351__$1 = this;return (new cljs.core.async.t12349(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta12350__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t12349 = ((function (mults,ensure_mult){
return (function __GT_t12349(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12350){return (new cljs.core.async.t12349(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12350));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t12349(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6192__auto___12473 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_12425){var state_val_12426 = (state_12425[1]);if((state_val_12426 === 1))
{var state_12425__$1 = state_12425;var statearr_12427_12474 = state_12425__$1;(statearr_12427_12474[2] = null);
(statearr_12427_12474[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12426 === 2))
{var state_12425__$1 = state_12425;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12425__$1,4,ch);
} else
{if((state_val_12426 === 3))
{var inst_12423 = (state_12425[2]);var state_12425__$1 = state_12425;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12425__$1,inst_12423);
} else
{if((state_val_12426 === 4))
{var inst_12354 = (state_12425[7]);var inst_12354__$1 = (state_12425[2]);var inst_12355 = (inst_12354__$1 == null);var state_12425__$1 = (function (){var statearr_12428 = state_12425;(statearr_12428[7] = inst_12354__$1);
return statearr_12428;
})();if(cljs.core.truth_(inst_12355))
{var statearr_12429_12475 = state_12425__$1;(statearr_12429_12475[1] = 5);
} else
{var statearr_12430_12476 = state_12425__$1;(statearr_12430_12476[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12426 === 5))
{var inst_12361 = cljs.core.deref.call(null,mults);var inst_12362 = cljs.core.vals.call(null,inst_12361);var inst_12363 = cljs.core.seq.call(null,inst_12362);var inst_12364 = inst_12363;var inst_12365 = null;var inst_12366 = 0;var inst_12367 = 0;var state_12425__$1 = (function (){var statearr_12431 = state_12425;(statearr_12431[8] = inst_12364);
(statearr_12431[9] = inst_12367);
(statearr_12431[10] = inst_12366);
(statearr_12431[11] = inst_12365);
return statearr_12431;
})();var statearr_12432_12477 = state_12425__$1;(statearr_12432_12477[2] = null);
(statearr_12432_12477[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12426 === 6))
{var inst_12354 = (state_12425[7]);var inst_12402 = (state_12425[12]);var inst_12404 = (state_12425[13]);var inst_12402__$1 = topic_fn.call(null,inst_12354);var inst_12403 = cljs.core.deref.call(null,mults);var inst_12404__$1 = cljs.core.get.call(null,inst_12403,inst_12402__$1);var state_12425__$1 = (function (){var statearr_12433 = state_12425;(statearr_12433[12] = inst_12402__$1);
(statearr_12433[13] = inst_12404__$1);
return statearr_12433;
})();if(cljs.core.truth_(inst_12404__$1))
{var statearr_12434_12478 = state_12425__$1;(statearr_12434_12478[1] = 19);
} else
{var statearr_12435_12479 = state_12425__$1;(statearr_12435_12479[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12426 === 7))
{var inst_12421 = (state_12425[2]);var state_12425__$1 = state_12425;var statearr_12436_12480 = state_12425__$1;(statearr_12436_12480[2] = inst_12421);
(statearr_12436_12480[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12426 === 8))
{var inst_12367 = (state_12425[9]);var inst_12366 = (state_12425[10]);var inst_12369 = (inst_12367 < inst_12366);var inst_12370 = inst_12369;var state_12425__$1 = state_12425;if(cljs.core.truth_(inst_12370))
{var statearr_12440_12481 = state_12425__$1;(statearr_12440_12481[1] = 10);
} else
{var statearr_12441_12482 = state_12425__$1;(statearr_12441_12482[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12426 === 9))
{var inst_12400 = (state_12425[2]);var state_12425__$1 = state_12425;var statearr_12442_12483 = state_12425__$1;(statearr_12442_12483[2] = inst_12400);
(statearr_12442_12483[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12426 === 10))
{var inst_12364 = (state_12425[8]);var inst_12367 = (state_12425[9]);var inst_12366 = (state_12425[10]);var inst_12365 = (state_12425[11]);var inst_12372 = cljs.core._nth.call(null,inst_12365,inst_12367);var inst_12373 = cljs.core.async.muxch_STAR_.call(null,inst_12372);var inst_12374 = cljs.core.async.close_BANG_.call(null,inst_12373);var inst_12375 = (inst_12367 + 1);var tmp12437 = inst_12364;var tmp12438 = inst_12366;var tmp12439 = inst_12365;var inst_12364__$1 = tmp12437;var inst_12365__$1 = tmp12439;var inst_12366__$1 = tmp12438;var inst_12367__$1 = inst_12375;var state_12425__$1 = (function (){var statearr_12443 = state_12425;(statearr_12443[8] = inst_12364__$1);
(statearr_12443[14] = inst_12374);
(statearr_12443[9] = inst_12367__$1);
(statearr_12443[10] = inst_12366__$1);
(statearr_12443[11] = inst_12365__$1);
return statearr_12443;
})();var statearr_12444_12484 = state_12425__$1;(statearr_12444_12484[2] = null);
(statearr_12444_12484[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12426 === 11))
{var inst_12364 = (state_12425[8]);var inst_12378 = (state_12425[15]);var inst_12378__$1 = cljs.core.seq.call(null,inst_12364);var state_12425__$1 = (function (){var statearr_12445 = state_12425;(statearr_12445[15] = inst_12378__$1);
return statearr_12445;
})();if(inst_12378__$1)
{var statearr_12446_12485 = state_12425__$1;(statearr_12446_12485[1] = 13);
} else
{var statearr_12447_12486 = state_12425__$1;(statearr_12447_12486[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12426 === 12))
{var inst_12398 = (state_12425[2]);var state_12425__$1 = state_12425;var statearr_12448_12487 = state_12425__$1;(statearr_12448_12487[2] = inst_12398);
(statearr_12448_12487[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12426 === 13))
{var inst_12378 = (state_12425[15]);var inst_12380 = cljs.core.chunked_seq_QMARK_.call(null,inst_12378);var state_12425__$1 = state_12425;if(inst_12380)
{var statearr_12449_12488 = state_12425__$1;(statearr_12449_12488[1] = 16);
} else
{var statearr_12450_12489 = state_12425__$1;(statearr_12450_12489[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12426 === 14))
{var state_12425__$1 = state_12425;var statearr_12451_12490 = state_12425__$1;(statearr_12451_12490[2] = null);
(statearr_12451_12490[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12426 === 15))
{var inst_12396 = (state_12425[2]);var state_12425__$1 = state_12425;var statearr_12452_12491 = state_12425__$1;(statearr_12452_12491[2] = inst_12396);
(statearr_12452_12491[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12426 === 16))
{var inst_12378 = (state_12425[15]);var inst_12382 = cljs.core.chunk_first.call(null,inst_12378);var inst_12383 = cljs.core.chunk_rest.call(null,inst_12378);var inst_12384 = cljs.core.count.call(null,inst_12382);var inst_12364 = inst_12383;var inst_12365 = inst_12382;var inst_12366 = inst_12384;var inst_12367 = 0;var state_12425__$1 = (function (){var statearr_12453 = state_12425;(statearr_12453[8] = inst_12364);
(statearr_12453[9] = inst_12367);
(statearr_12453[10] = inst_12366);
(statearr_12453[11] = inst_12365);
return statearr_12453;
})();var statearr_12454_12492 = state_12425__$1;(statearr_12454_12492[2] = null);
(statearr_12454_12492[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12426 === 17))
{var inst_12378 = (state_12425[15]);var inst_12387 = cljs.core.first.call(null,inst_12378);var inst_12388 = cljs.core.async.muxch_STAR_.call(null,inst_12387);var inst_12389 = cljs.core.async.close_BANG_.call(null,inst_12388);var inst_12390 = cljs.core.next.call(null,inst_12378);var inst_12364 = inst_12390;var inst_12365 = null;var inst_12366 = 0;var inst_12367 = 0;var state_12425__$1 = (function (){var statearr_12455 = state_12425;(statearr_12455[16] = inst_12389);
(statearr_12455[8] = inst_12364);
(statearr_12455[9] = inst_12367);
(statearr_12455[10] = inst_12366);
(statearr_12455[11] = inst_12365);
return statearr_12455;
})();var statearr_12456_12493 = state_12425__$1;(statearr_12456_12493[2] = null);
(statearr_12456_12493[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12426 === 18))
{var inst_12393 = (state_12425[2]);var state_12425__$1 = state_12425;var statearr_12457_12494 = state_12425__$1;(statearr_12457_12494[2] = inst_12393);
(statearr_12457_12494[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12426 === 19))
{var state_12425__$1 = state_12425;var statearr_12458_12495 = state_12425__$1;(statearr_12458_12495[2] = null);
(statearr_12458_12495[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12426 === 20))
{var state_12425__$1 = state_12425;var statearr_12459_12496 = state_12425__$1;(statearr_12459_12496[2] = null);
(statearr_12459_12496[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12426 === 21))
{var inst_12418 = (state_12425[2]);var state_12425__$1 = (function (){var statearr_12460 = state_12425;(statearr_12460[17] = inst_12418);
return statearr_12460;
})();var statearr_12461_12497 = state_12425__$1;(statearr_12461_12497[2] = null);
(statearr_12461_12497[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12426 === 22))
{var inst_12415 = (state_12425[2]);var state_12425__$1 = state_12425;var statearr_12462_12498 = state_12425__$1;(statearr_12462_12498[2] = inst_12415);
(statearr_12462_12498[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12426 === 23))
{var inst_12402 = (state_12425[12]);var inst_12406 = (state_12425[2]);var inst_12407 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12402);var state_12425__$1 = (function (){var statearr_12463 = state_12425;(statearr_12463[18] = inst_12406);
return statearr_12463;
})();var statearr_12464_12499 = state_12425__$1;(statearr_12464_12499[2] = inst_12407);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12425__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12426 === 24))
{var inst_12354 = (state_12425[7]);var inst_12404 = (state_12425[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12425,23,Object,null,22);var inst_12411 = cljs.core.async.muxch_STAR_.call(null,inst_12404);var state_12425__$1 = state_12425;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12425__$1,25,inst_12411,inst_12354);
} else
{if((state_val_12426 === 25))
{var inst_12413 = (state_12425[2]);var state_12425__$1 = state_12425;var statearr_12465_12500 = state_12425__$1;(statearr_12465_12500[2] = inst_12413);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12425__$1);
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
var state_machine__6178__auto____0 = (function (){var statearr_12469 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12469[0] = state_machine__6178__auto__);
(statearr_12469[1] = 1);
return statearr_12469;
});
var state_machine__6178__auto____1 = (function (state_12425){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12425);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12470){if((e12470 instanceof Object))
{var ex__6181__auto__ = e12470;var statearr_12471_12501 = state_12425;(statearr_12471_12501[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12425);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12470;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12502 = state_12425;
state_12425 = G__12502;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12425){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_12472 = f__6193__auto__.call(null);(statearr_12472[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___12473);
return statearr_12472;
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
,cljs.core.range.call(null,cnt));var c__6192__auto___12639 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_12609){var state_val_12610 = (state_12609[1]);if((state_val_12610 === 1))
{var state_12609__$1 = state_12609;var statearr_12611_12640 = state_12609__$1;(statearr_12611_12640[2] = null);
(statearr_12611_12640[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12610 === 2))
{var inst_12572 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_12573 = 0;var state_12609__$1 = (function (){var statearr_12612 = state_12609;(statearr_12612[7] = inst_12572);
(statearr_12612[8] = inst_12573);
return statearr_12612;
})();var statearr_12613_12641 = state_12609__$1;(statearr_12613_12641[2] = null);
(statearr_12613_12641[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12610 === 3))
{var inst_12607 = (state_12609[2]);var state_12609__$1 = state_12609;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12609__$1,inst_12607);
} else
{if((state_val_12610 === 4))
{var inst_12573 = (state_12609[8]);var inst_12575 = (inst_12573 < cnt);var state_12609__$1 = state_12609;if(cljs.core.truth_(inst_12575))
{var statearr_12614_12642 = state_12609__$1;(statearr_12614_12642[1] = 6);
} else
{var statearr_12615_12643 = state_12609__$1;(statearr_12615_12643[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12610 === 5))
{var inst_12593 = (state_12609[2]);var state_12609__$1 = (function (){var statearr_12616 = state_12609;(statearr_12616[9] = inst_12593);
return statearr_12616;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12609__$1,12,dchan);
} else
{if((state_val_12610 === 6))
{var state_12609__$1 = state_12609;var statearr_12617_12644 = state_12609__$1;(statearr_12617_12644[2] = null);
(statearr_12617_12644[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12610 === 7))
{var state_12609__$1 = state_12609;var statearr_12618_12645 = state_12609__$1;(statearr_12618_12645[2] = null);
(statearr_12618_12645[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12610 === 8))
{var inst_12591 = (state_12609[2]);var state_12609__$1 = state_12609;var statearr_12619_12646 = state_12609__$1;(statearr_12619_12646[2] = inst_12591);
(statearr_12619_12646[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12610 === 9))
{var inst_12573 = (state_12609[8]);var inst_12586 = (state_12609[2]);var inst_12587 = (inst_12573 + 1);var inst_12573__$1 = inst_12587;var state_12609__$1 = (function (){var statearr_12620 = state_12609;(statearr_12620[10] = inst_12586);
(statearr_12620[8] = inst_12573__$1);
return statearr_12620;
})();var statearr_12621_12647 = state_12609__$1;(statearr_12621_12647[2] = null);
(statearr_12621_12647[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12610 === 10))
{var inst_12577 = (state_12609[2]);var inst_12578 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_12609__$1 = (function (){var statearr_12622 = state_12609;(statearr_12622[11] = inst_12577);
return statearr_12622;
})();var statearr_12623_12648 = state_12609__$1;(statearr_12623_12648[2] = inst_12578);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12609__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12610 === 11))
{var inst_12573 = (state_12609[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12609,10,Object,null,9);var inst_12582 = chs__$1.call(null,inst_12573);var inst_12583 = done.call(null,inst_12573);var inst_12584 = cljs.core.async.take_BANG_.call(null,inst_12582,inst_12583);var state_12609__$1 = state_12609;var statearr_12624_12649 = state_12609__$1;(statearr_12624_12649[2] = inst_12584);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12609__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12610 === 12))
{var inst_12595 = (state_12609[12]);var inst_12595__$1 = (state_12609[2]);var inst_12596 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12595__$1);var state_12609__$1 = (function (){var statearr_12625 = state_12609;(statearr_12625[12] = inst_12595__$1);
return statearr_12625;
})();if(cljs.core.truth_(inst_12596))
{var statearr_12626_12650 = state_12609__$1;(statearr_12626_12650[1] = 13);
} else
{var statearr_12627_12651 = state_12609__$1;(statearr_12627_12651[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12610 === 13))
{var inst_12598 = cljs.core.async.close_BANG_.call(null,out);var state_12609__$1 = state_12609;var statearr_12628_12652 = state_12609__$1;(statearr_12628_12652[2] = inst_12598);
(statearr_12628_12652[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12610 === 14))
{var inst_12595 = (state_12609[12]);var inst_12600 = cljs.core.apply.call(null,f,inst_12595);var state_12609__$1 = state_12609;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12609__$1,16,out,inst_12600);
} else
{if((state_val_12610 === 15))
{var inst_12605 = (state_12609[2]);var state_12609__$1 = state_12609;var statearr_12629_12653 = state_12609__$1;(statearr_12629_12653[2] = inst_12605);
(statearr_12629_12653[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12610 === 16))
{var inst_12602 = (state_12609[2]);var state_12609__$1 = (function (){var statearr_12630 = state_12609;(statearr_12630[13] = inst_12602);
return statearr_12630;
})();var statearr_12631_12654 = state_12609__$1;(statearr_12631_12654[2] = null);
(statearr_12631_12654[1] = 2);
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
var state_machine__6178__auto____0 = (function (){var statearr_12635 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12635[0] = state_machine__6178__auto__);
(statearr_12635[1] = 1);
return statearr_12635;
});
var state_machine__6178__auto____1 = (function (state_12609){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12609);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12636){if((e12636 instanceof Object))
{var ex__6181__auto__ = e12636;var statearr_12637_12655 = state_12609;(statearr_12637_12655[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12609);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12636;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12656 = state_12609;
state_12609 = G__12656;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12609){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_12638 = f__6193__auto__.call(null);(statearr_12638[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___12639);
return statearr_12638;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6192__auto___12764 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_12740){var state_val_12741 = (state_12740[1]);if((state_val_12741 === 1))
{var inst_12711 = cljs.core.vec.call(null,chs);var inst_12712 = inst_12711;var state_12740__$1 = (function (){var statearr_12742 = state_12740;(statearr_12742[7] = inst_12712);
return statearr_12742;
})();var statearr_12743_12765 = state_12740__$1;(statearr_12743_12765[2] = null);
(statearr_12743_12765[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12741 === 2))
{var inst_12712 = (state_12740[7]);var inst_12714 = cljs.core.count.call(null,inst_12712);var inst_12715 = (inst_12714 > 0);var state_12740__$1 = state_12740;if(cljs.core.truth_(inst_12715))
{var statearr_12744_12766 = state_12740__$1;(statearr_12744_12766[1] = 4);
} else
{var statearr_12745_12767 = state_12740__$1;(statearr_12745_12767[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12741 === 3))
{var inst_12738 = (state_12740[2]);var state_12740__$1 = state_12740;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12740__$1,inst_12738);
} else
{if((state_val_12741 === 4))
{var inst_12712 = (state_12740[7]);var state_12740__$1 = state_12740;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12740__$1,7,inst_12712);
} else
{if((state_val_12741 === 5))
{var inst_12734 = cljs.core.async.close_BANG_.call(null,out);var state_12740__$1 = state_12740;var statearr_12746_12768 = state_12740__$1;(statearr_12746_12768[2] = inst_12734);
(statearr_12746_12768[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12741 === 6))
{var inst_12736 = (state_12740[2]);var state_12740__$1 = state_12740;var statearr_12747_12769 = state_12740__$1;(statearr_12747_12769[2] = inst_12736);
(statearr_12747_12769[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12741 === 7))
{var inst_12719 = (state_12740[8]);var inst_12720 = (state_12740[9]);var inst_12719__$1 = (state_12740[2]);var inst_12720__$1 = cljs.core.nth.call(null,inst_12719__$1,0,null);var inst_12721 = cljs.core.nth.call(null,inst_12719__$1,1,null);var inst_12722 = (inst_12720__$1 == null);var state_12740__$1 = (function (){var statearr_12748 = state_12740;(statearr_12748[8] = inst_12719__$1);
(statearr_12748[10] = inst_12721);
(statearr_12748[9] = inst_12720__$1);
return statearr_12748;
})();if(cljs.core.truth_(inst_12722))
{var statearr_12749_12770 = state_12740__$1;(statearr_12749_12770[1] = 8);
} else
{var statearr_12750_12771 = state_12740__$1;(statearr_12750_12771[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12741 === 8))
{var inst_12719 = (state_12740[8]);var inst_12721 = (state_12740[10]);var inst_12720 = (state_12740[9]);var inst_12712 = (state_12740[7]);var inst_12724 = (function (){var c = inst_12721;var v = inst_12720;var vec__12717 = inst_12719;var cs = inst_12712;return ((function (c,v,vec__12717,cs,inst_12719,inst_12721,inst_12720,inst_12712,state_val_12741){
return (function (p1__12657_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__12657_SHARP_);
});
;})(c,v,vec__12717,cs,inst_12719,inst_12721,inst_12720,inst_12712,state_val_12741))
})();var inst_12725 = cljs.core.filterv.call(null,inst_12724,inst_12712);var inst_12712__$1 = inst_12725;var state_12740__$1 = (function (){var statearr_12751 = state_12740;(statearr_12751[7] = inst_12712__$1);
return statearr_12751;
})();var statearr_12752_12772 = state_12740__$1;(statearr_12752_12772[2] = null);
(statearr_12752_12772[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12741 === 9))
{var inst_12720 = (state_12740[9]);var state_12740__$1 = state_12740;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12740__$1,11,out,inst_12720);
} else
{if((state_val_12741 === 10))
{var inst_12732 = (state_12740[2]);var state_12740__$1 = state_12740;var statearr_12754_12773 = state_12740__$1;(statearr_12754_12773[2] = inst_12732);
(statearr_12754_12773[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12741 === 11))
{var inst_12712 = (state_12740[7]);var inst_12729 = (state_12740[2]);var tmp12753 = inst_12712;var inst_12712__$1 = tmp12753;var state_12740__$1 = (function (){var statearr_12755 = state_12740;(statearr_12755[11] = inst_12729);
(statearr_12755[7] = inst_12712__$1);
return statearr_12755;
})();var statearr_12756_12774 = state_12740__$1;(statearr_12756_12774[2] = null);
(statearr_12756_12774[1] = 2);
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
var state_machine__6178__auto____0 = (function (){var statearr_12760 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12760[0] = state_machine__6178__auto__);
(statearr_12760[1] = 1);
return statearr_12760;
});
var state_machine__6178__auto____1 = (function (state_12740){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12740);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12761){if((e12761 instanceof Object))
{var ex__6181__auto__ = e12761;var statearr_12762_12775 = state_12740;(statearr_12762_12775[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12740);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12761;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12776 = state_12740;
state_12740 = G__12776;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12740){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_12763 = f__6193__auto__.call(null);(statearr_12763[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___12764);
return statearr_12763;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6192__auto___12869 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_12846){var state_val_12847 = (state_12846[1]);if((state_val_12847 === 1))
{var inst_12823 = 0;var state_12846__$1 = (function (){var statearr_12848 = state_12846;(statearr_12848[7] = inst_12823);
return statearr_12848;
})();var statearr_12849_12870 = state_12846__$1;(statearr_12849_12870[2] = null);
(statearr_12849_12870[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12847 === 2))
{var inst_12823 = (state_12846[7]);var inst_12825 = (inst_12823 < n);var state_12846__$1 = state_12846;if(cljs.core.truth_(inst_12825))
{var statearr_12850_12871 = state_12846__$1;(statearr_12850_12871[1] = 4);
} else
{var statearr_12851_12872 = state_12846__$1;(statearr_12851_12872[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12847 === 3))
{var inst_12843 = (state_12846[2]);var inst_12844 = cljs.core.async.close_BANG_.call(null,out);var state_12846__$1 = (function (){var statearr_12852 = state_12846;(statearr_12852[8] = inst_12843);
return statearr_12852;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12846__$1,inst_12844);
} else
{if((state_val_12847 === 4))
{var state_12846__$1 = state_12846;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12846__$1,7,ch);
} else
{if((state_val_12847 === 5))
{var state_12846__$1 = state_12846;var statearr_12853_12873 = state_12846__$1;(statearr_12853_12873[2] = null);
(statearr_12853_12873[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12847 === 6))
{var inst_12841 = (state_12846[2]);var state_12846__$1 = state_12846;var statearr_12854_12874 = state_12846__$1;(statearr_12854_12874[2] = inst_12841);
(statearr_12854_12874[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12847 === 7))
{var inst_12828 = (state_12846[9]);var inst_12828__$1 = (state_12846[2]);var inst_12829 = (inst_12828__$1 == null);var inst_12830 = cljs.core.not.call(null,inst_12829);var state_12846__$1 = (function (){var statearr_12855 = state_12846;(statearr_12855[9] = inst_12828__$1);
return statearr_12855;
})();if(inst_12830)
{var statearr_12856_12875 = state_12846__$1;(statearr_12856_12875[1] = 8);
} else
{var statearr_12857_12876 = state_12846__$1;(statearr_12857_12876[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12847 === 8))
{var inst_12828 = (state_12846[9]);var state_12846__$1 = state_12846;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12846__$1,11,out,inst_12828);
} else
{if((state_val_12847 === 9))
{var state_12846__$1 = state_12846;var statearr_12858_12877 = state_12846__$1;(statearr_12858_12877[2] = null);
(statearr_12858_12877[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12847 === 10))
{var inst_12838 = (state_12846[2]);var state_12846__$1 = state_12846;var statearr_12859_12878 = state_12846__$1;(statearr_12859_12878[2] = inst_12838);
(statearr_12859_12878[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12847 === 11))
{var inst_12823 = (state_12846[7]);var inst_12833 = (state_12846[2]);var inst_12834 = (inst_12823 + 1);var inst_12823__$1 = inst_12834;var state_12846__$1 = (function (){var statearr_12860 = state_12846;(statearr_12860[7] = inst_12823__$1);
(statearr_12860[10] = inst_12833);
return statearr_12860;
})();var statearr_12861_12879 = state_12846__$1;(statearr_12861_12879[2] = null);
(statearr_12861_12879[1] = 2);
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
var state_machine__6178__auto____0 = (function (){var statearr_12865 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12865[0] = state_machine__6178__auto__);
(statearr_12865[1] = 1);
return statearr_12865;
});
var state_machine__6178__auto____1 = (function (state_12846){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12846);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12866){if((e12866 instanceof Object))
{var ex__6181__auto__ = e12866;var statearr_12867_12880 = state_12846;(statearr_12867_12880[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12846);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12866;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12881 = state_12846;
state_12846 = G__12881;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12846){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_12868 = f__6193__auto__.call(null);(statearr_12868[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___12869);
return statearr_12868;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6192__auto___12978 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_12953){var state_val_12954 = (state_12953[1]);if((state_val_12954 === 1))
{var inst_12930 = null;var state_12953__$1 = (function (){var statearr_12955 = state_12953;(statearr_12955[7] = inst_12930);
return statearr_12955;
})();var statearr_12956_12979 = state_12953__$1;(statearr_12956_12979[2] = null);
(statearr_12956_12979[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12954 === 2))
{var state_12953__$1 = state_12953;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12953__$1,4,ch);
} else
{if((state_val_12954 === 3))
{var inst_12950 = (state_12953[2]);var inst_12951 = cljs.core.async.close_BANG_.call(null,out);var state_12953__$1 = (function (){var statearr_12957 = state_12953;(statearr_12957[8] = inst_12950);
return statearr_12957;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12953__$1,inst_12951);
} else
{if((state_val_12954 === 4))
{var inst_12933 = (state_12953[9]);var inst_12933__$1 = (state_12953[2]);var inst_12934 = (inst_12933__$1 == null);var inst_12935 = cljs.core.not.call(null,inst_12934);var state_12953__$1 = (function (){var statearr_12958 = state_12953;(statearr_12958[9] = inst_12933__$1);
return statearr_12958;
})();if(inst_12935)
{var statearr_12959_12980 = state_12953__$1;(statearr_12959_12980[1] = 5);
} else
{var statearr_12960_12981 = state_12953__$1;(statearr_12960_12981[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12954 === 5))
{var inst_12930 = (state_12953[7]);var inst_12933 = (state_12953[9]);var inst_12937 = cljs.core._EQ_.call(null,inst_12933,inst_12930);var state_12953__$1 = state_12953;if(inst_12937)
{var statearr_12961_12982 = state_12953__$1;(statearr_12961_12982[1] = 8);
} else
{var statearr_12962_12983 = state_12953__$1;(statearr_12962_12983[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12954 === 6))
{var state_12953__$1 = state_12953;var statearr_12964_12984 = state_12953__$1;(statearr_12964_12984[2] = null);
(statearr_12964_12984[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12954 === 7))
{var inst_12948 = (state_12953[2]);var state_12953__$1 = state_12953;var statearr_12965_12985 = state_12953__$1;(statearr_12965_12985[2] = inst_12948);
(statearr_12965_12985[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12954 === 8))
{var inst_12930 = (state_12953[7]);var tmp12963 = inst_12930;var inst_12930__$1 = tmp12963;var state_12953__$1 = (function (){var statearr_12966 = state_12953;(statearr_12966[7] = inst_12930__$1);
return statearr_12966;
})();var statearr_12967_12986 = state_12953__$1;(statearr_12967_12986[2] = null);
(statearr_12967_12986[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12954 === 9))
{var inst_12933 = (state_12953[9]);var state_12953__$1 = state_12953;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12953__$1,11,out,inst_12933);
} else
{if((state_val_12954 === 10))
{var inst_12945 = (state_12953[2]);var state_12953__$1 = state_12953;var statearr_12968_12987 = state_12953__$1;(statearr_12968_12987[2] = inst_12945);
(statearr_12968_12987[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12954 === 11))
{var inst_12933 = (state_12953[9]);var inst_12942 = (state_12953[2]);var inst_12930 = inst_12933;var state_12953__$1 = (function (){var statearr_12969 = state_12953;(statearr_12969[10] = inst_12942);
(statearr_12969[7] = inst_12930);
return statearr_12969;
})();var statearr_12970_12988 = state_12953__$1;(statearr_12970_12988[2] = null);
(statearr_12970_12988[1] = 2);
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
var state_machine__6178__auto____0 = (function (){var statearr_12974 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12974[0] = state_machine__6178__auto__);
(statearr_12974[1] = 1);
return statearr_12974;
});
var state_machine__6178__auto____1 = (function (state_12953){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12953);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12975){if((e12975 instanceof Object))
{var ex__6181__auto__ = e12975;var statearr_12976_12989 = state_12953;(statearr_12976_12989[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12953);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12975;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12990 = state_12953;
state_12953 = G__12990;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12953){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_12977 = f__6193__auto__.call(null);(statearr_12977[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___12978);
return statearr_12977;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6192__auto___13125 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_13095){var state_val_13096 = (state_13095[1]);if((state_val_13096 === 1))
{var inst_13058 = (new Array(n));var inst_13059 = inst_13058;var inst_13060 = 0;var state_13095__$1 = (function (){var statearr_13097 = state_13095;(statearr_13097[7] = inst_13060);
(statearr_13097[8] = inst_13059);
return statearr_13097;
})();var statearr_13098_13126 = state_13095__$1;(statearr_13098_13126[2] = null);
(statearr_13098_13126[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13096 === 2))
{var state_13095__$1 = state_13095;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13095__$1,4,ch);
} else
{if((state_val_13096 === 3))
{var inst_13093 = (state_13095[2]);var state_13095__$1 = state_13095;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13095__$1,inst_13093);
} else
{if((state_val_13096 === 4))
{var inst_13063 = (state_13095[9]);var inst_13063__$1 = (state_13095[2]);var inst_13064 = (inst_13063__$1 == null);var inst_13065 = cljs.core.not.call(null,inst_13064);var state_13095__$1 = (function (){var statearr_13099 = state_13095;(statearr_13099[9] = inst_13063__$1);
return statearr_13099;
})();if(inst_13065)
{var statearr_13100_13127 = state_13095__$1;(statearr_13100_13127[1] = 5);
} else
{var statearr_13101_13128 = state_13095__$1;(statearr_13101_13128[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13096 === 5))
{var inst_13060 = (state_13095[7]);var inst_13068 = (state_13095[10]);var inst_13059 = (state_13095[8]);var inst_13063 = (state_13095[9]);var inst_13067 = (inst_13059[inst_13060] = inst_13063);var inst_13068__$1 = (inst_13060 + 1);var inst_13069 = (inst_13068__$1 < n);var state_13095__$1 = (function (){var statearr_13102 = state_13095;(statearr_13102[11] = inst_13067);
(statearr_13102[10] = inst_13068__$1);
return statearr_13102;
})();if(cljs.core.truth_(inst_13069))
{var statearr_13103_13129 = state_13095__$1;(statearr_13103_13129[1] = 8);
} else
{var statearr_13104_13130 = state_13095__$1;(statearr_13104_13130[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13096 === 6))
{var inst_13060 = (state_13095[7]);var inst_13081 = (inst_13060 > 0);var state_13095__$1 = state_13095;if(cljs.core.truth_(inst_13081))
{var statearr_13106_13131 = state_13095__$1;(statearr_13106_13131[1] = 12);
} else
{var statearr_13107_13132 = state_13095__$1;(statearr_13107_13132[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13096 === 7))
{var inst_13091 = (state_13095[2]);var state_13095__$1 = state_13095;var statearr_13108_13133 = state_13095__$1;(statearr_13108_13133[2] = inst_13091);
(statearr_13108_13133[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13096 === 8))
{var inst_13068 = (state_13095[10]);var inst_13059 = (state_13095[8]);var tmp13105 = inst_13059;var inst_13059__$1 = tmp13105;var inst_13060 = inst_13068;var state_13095__$1 = (function (){var statearr_13109 = state_13095;(statearr_13109[7] = inst_13060);
(statearr_13109[8] = inst_13059__$1);
return statearr_13109;
})();var statearr_13110_13134 = state_13095__$1;(statearr_13110_13134[2] = null);
(statearr_13110_13134[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13096 === 9))
{var inst_13059 = (state_13095[8]);var inst_13073 = cljs.core.vec.call(null,inst_13059);var state_13095__$1 = state_13095;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13095__$1,11,out,inst_13073);
} else
{if((state_val_13096 === 10))
{var inst_13079 = (state_13095[2]);var state_13095__$1 = state_13095;var statearr_13111_13135 = state_13095__$1;(statearr_13111_13135[2] = inst_13079);
(statearr_13111_13135[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13096 === 11))
{var inst_13075 = (state_13095[2]);var inst_13076 = (new Array(n));var inst_13059 = inst_13076;var inst_13060 = 0;var state_13095__$1 = (function (){var statearr_13112 = state_13095;(statearr_13112[7] = inst_13060);
(statearr_13112[12] = inst_13075);
(statearr_13112[8] = inst_13059);
return statearr_13112;
})();var statearr_13113_13136 = state_13095__$1;(statearr_13113_13136[2] = null);
(statearr_13113_13136[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13096 === 12))
{var inst_13059 = (state_13095[8]);var inst_13083 = cljs.core.vec.call(null,inst_13059);var state_13095__$1 = state_13095;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13095__$1,15,out,inst_13083);
} else
{if((state_val_13096 === 13))
{var state_13095__$1 = state_13095;var statearr_13114_13137 = state_13095__$1;(statearr_13114_13137[2] = null);
(statearr_13114_13137[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13096 === 14))
{var inst_13088 = (state_13095[2]);var inst_13089 = cljs.core.async.close_BANG_.call(null,out);var state_13095__$1 = (function (){var statearr_13115 = state_13095;(statearr_13115[13] = inst_13088);
return statearr_13115;
})();var statearr_13116_13138 = state_13095__$1;(statearr_13116_13138[2] = inst_13089);
(statearr_13116_13138[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13096 === 15))
{var inst_13085 = (state_13095[2]);var state_13095__$1 = state_13095;var statearr_13117_13139 = state_13095__$1;(statearr_13117_13139[2] = inst_13085);
(statearr_13117_13139[1] = 14);
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
var state_machine__6178__auto____0 = (function (){var statearr_13121 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13121[0] = state_machine__6178__auto__);
(statearr_13121[1] = 1);
return statearr_13121;
});
var state_machine__6178__auto____1 = (function (state_13095){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13095);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13122){if((e13122 instanceof Object))
{var ex__6181__auto__ = e13122;var statearr_13123_13140 = state_13095;(statearr_13123_13140[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13095);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13122;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13141 = state_13095;
state_13095 = G__13141;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13095){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_13124 = f__6193__auto__.call(null);(statearr_13124[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___13125);
return statearr_13124;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6192__auto___13284 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_13254){var state_val_13255 = (state_13254[1]);if((state_val_13255 === 1))
{var inst_13213 = [];var inst_13214 = inst_13213;var inst_13215 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_13254__$1 = (function (){var statearr_13256 = state_13254;(statearr_13256[7] = inst_13215);
(statearr_13256[8] = inst_13214);
return statearr_13256;
})();var statearr_13257_13285 = state_13254__$1;(statearr_13257_13285[2] = null);
(statearr_13257_13285[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13255 === 2))
{var state_13254__$1 = state_13254;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13254__$1,4,ch);
} else
{if((state_val_13255 === 3))
{var inst_13252 = (state_13254[2]);var state_13254__$1 = state_13254;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13254__$1,inst_13252);
} else
{if((state_val_13255 === 4))
{var inst_13218 = (state_13254[9]);var inst_13218__$1 = (state_13254[2]);var inst_13219 = (inst_13218__$1 == null);var inst_13220 = cljs.core.not.call(null,inst_13219);var state_13254__$1 = (function (){var statearr_13258 = state_13254;(statearr_13258[9] = inst_13218__$1);
return statearr_13258;
})();if(inst_13220)
{var statearr_13259_13286 = state_13254__$1;(statearr_13259_13286[1] = 5);
} else
{var statearr_13260_13287 = state_13254__$1;(statearr_13260_13287[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13255 === 5))
{var inst_13218 = (state_13254[9]);var inst_13222 = (state_13254[10]);var inst_13215 = (state_13254[7]);var inst_13222__$1 = f.call(null,inst_13218);var inst_13223 = cljs.core._EQ_.call(null,inst_13222__$1,inst_13215);var inst_13224 = cljs.core.keyword_identical_QMARK_.call(null,inst_13215,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_13225 = (inst_13223) || (inst_13224);var state_13254__$1 = (function (){var statearr_13261 = state_13254;(statearr_13261[10] = inst_13222__$1);
return statearr_13261;
})();if(cljs.core.truth_(inst_13225))
{var statearr_13262_13288 = state_13254__$1;(statearr_13262_13288[1] = 8);
} else
{var statearr_13263_13289 = state_13254__$1;(statearr_13263_13289[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13255 === 6))
{var inst_13214 = (state_13254[8]);var inst_13239 = inst_13214.length;var inst_13240 = (inst_13239 > 0);var state_13254__$1 = state_13254;if(cljs.core.truth_(inst_13240))
{var statearr_13265_13290 = state_13254__$1;(statearr_13265_13290[1] = 12);
} else
{var statearr_13266_13291 = state_13254__$1;(statearr_13266_13291[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13255 === 7))
{var inst_13250 = (state_13254[2]);var state_13254__$1 = state_13254;var statearr_13267_13292 = state_13254__$1;(statearr_13267_13292[2] = inst_13250);
(statearr_13267_13292[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13255 === 8))
{var inst_13218 = (state_13254[9]);var inst_13222 = (state_13254[10]);var inst_13214 = (state_13254[8]);var inst_13227 = inst_13214.push(inst_13218);var tmp13264 = inst_13214;var inst_13214__$1 = tmp13264;var inst_13215 = inst_13222;var state_13254__$1 = (function (){var statearr_13268 = state_13254;(statearr_13268[11] = inst_13227);
(statearr_13268[7] = inst_13215);
(statearr_13268[8] = inst_13214__$1);
return statearr_13268;
})();var statearr_13269_13293 = state_13254__$1;(statearr_13269_13293[2] = null);
(statearr_13269_13293[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13255 === 9))
{var inst_13214 = (state_13254[8]);var inst_13230 = cljs.core.vec.call(null,inst_13214);var state_13254__$1 = state_13254;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13254__$1,11,out,inst_13230);
} else
{if((state_val_13255 === 10))
{var inst_13237 = (state_13254[2]);var state_13254__$1 = state_13254;var statearr_13270_13294 = state_13254__$1;(statearr_13270_13294[2] = inst_13237);
(statearr_13270_13294[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13255 === 11))
{var inst_13218 = (state_13254[9]);var inst_13222 = (state_13254[10]);var inst_13232 = (state_13254[2]);var inst_13233 = [];var inst_13234 = inst_13233.push(inst_13218);var inst_13214 = inst_13233;var inst_13215 = inst_13222;var state_13254__$1 = (function (){var statearr_13271 = state_13254;(statearr_13271[12] = inst_13232);
(statearr_13271[13] = inst_13234);
(statearr_13271[7] = inst_13215);
(statearr_13271[8] = inst_13214);
return statearr_13271;
})();var statearr_13272_13295 = state_13254__$1;(statearr_13272_13295[2] = null);
(statearr_13272_13295[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13255 === 12))
{var inst_13214 = (state_13254[8]);var inst_13242 = cljs.core.vec.call(null,inst_13214);var state_13254__$1 = state_13254;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13254__$1,15,out,inst_13242);
} else
{if((state_val_13255 === 13))
{var state_13254__$1 = state_13254;var statearr_13273_13296 = state_13254__$1;(statearr_13273_13296[2] = null);
(statearr_13273_13296[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13255 === 14))
{var inst_13247 = (state_13254[2]);var inst_13248 = cljs.core.async.close_BANG_.call(null,out);var state_13254__$1 = (function (){var statearr_13274 = state_13254;(statearr_13274[14] = inst_13247);
return statearr_13274;
})();var statearr_13275_13297 = state_13254__$1;(statearr_13275_13297[2] = inst_13248);
(statearr_13275_13297[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13255 === 15))
{var inst_13244 = (state_13254[2]);var state_13254__$1 = state_13254;var statearr_13276_13298 = state_13254__$1;(statearr_13276_13298[2] = inst_13244);
(statearr_13276_13298[1] = 14);
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
var state_machine__6178__auto____0 = (function (){var statearr_13280 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13280[0] = state_machine__6178__auto__);
(statearr_13280[1] = 1);
return statearr_13280;
});
var state_machine__6178__auto____1 = (function (state_13254){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13254);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13281){if((e13281 instanceof Object))
{var ex__6181__auto__ = e13281;var statearr_13282_13299 = state_13254;(statearr_13282_13299[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13254);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13281;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13300 = state_13254;
state_13254 = G__13300;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13254){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_13283 = f__6193__auto__.call(null);(statearr_13283[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___13284);
return statearr_13283;
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