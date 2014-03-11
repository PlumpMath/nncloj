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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t12399 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12399 = (function (f,fn_handler,meta12400){
this.f = f;
this.fn_handler = fn_handler;
this.meta12400 = meta12400;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12399.cljs$lang$type = true;
cljs.core.async.t12399.cljs$lang$ctorStr = "cljs.core.async/t12399";
cljs.core.async.t12399.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t12399");
});
cljs.core.async.t12399.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12399.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t12399.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t12399.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12401){var self__ = this;
var _12401__$1 = this;return self__.meta12400;
});
cljs.core.async.t12399.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12401,meta12400__$1){var self__ = this;
var _12401__$1 = this;return (new cljs.core.async.t12399(self__.f,self__.fn_handler,meta12400__$1));
});
cljs.core.async.__GT_t12399 = (function __GT_t12399(f__$1,fn_handler__$1,meta12400){return (new cljs.core.async.t12399(f__$1,fn_handler__$1,meta12400));
});
}
return (new cljs.core.async.t12399(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__12403 = buff;if(G__12403)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__12403.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__12403.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12403);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12403);
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
{var val_12404 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_12404);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_12404);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4291__auto___12405 = n;var x_12406 = 0;while(true){
if((x_12406 < n__4291__auto___12405))
{(a[x_12406] = 0);
{
var G__12407 = (x_12406 + 1);
x_12406 = G__12407;
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
var G__12408 = (i + 1);
i = G__12408;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t12412 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12412 = (function (flag,alt_flag,meta12413){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta12413 = meta12413;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12412.cljs$lang$type = true;
cljs.core.async.t12412.cljs$lang$ctorStr = "cljs.core.async/t12412";
cljs.core.async.t12412.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t12412");
});
cljs.core.async.t12412.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12412.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t12412.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t12412.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12414){var self__ = this;
var _12414__$1 = this;return self__.meta12413;
});
cljs.core.async.t12412.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12414,meta12413__$1){var self__ = this;
var _12414__$1 = this;return (new cljs.core.async.t12412(self__.flag,self__.alt_flag,meta12413__$1));
});
cljs.core.async.__GT_t12412 = (function __GT_t12412(flag__$1,alt_flag__$1,meta12413){return (new cljs.core.async.t12412(flag__$1,alt_flag__$1,meta12413));
});
}
return (new cljs.core.async.t12412(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t12418 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12418 = (function (cb,flag,alt_handler,meta12419){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta12419 = meta12419;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12418.cljs$lang$type = true;
cljs.core.async.t12418.cljs$lang$ctorStr = "cljs.core.async/t12418";
cljs.core.async.t12418.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t12418");
});
cljs.core.async.t12418.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12418.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t12418.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t12418.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12420){var self__ = this;
var _12420__$1 = this;return self__.meta12419;
});
cljs.core.async.t12418.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12420,meta12419__$1){var self__ = this;
var _12420__$1 = this;return (new cljs.core.async.t12418(self__.cb,self__.flag,self__.alt_handler,meta12419__$1));
});
cljs.core.async.__GT_t12418 = (function __GT_t12418(cb__$1,flag__$1,alt_handler__$1,meta12419){return (new cljs.core.async.t12418(cb__$1,flag__$1,alt_handler__$1,meta12419));
});
}
return (new cljs.core.async.t12418(cb,flag,alt_handler,null));
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
return (function (p1__12421_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12421_SHARP_,port], null));
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
var G__12422 = (i + 1);
i = G__12422;
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
var alts_BANG___delegate = function (ports,p__12423){var map__12425 = p__12423;var map__12425__$1 = ((cljs.core.seq_QMARK_.call(null,map__12425))?cljs.core.apply.call(null,cljs.core.hash_map,map__12425):map__12425);var opts = map__12425__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__12423 = null;if (arguments.length > 1) {
  p__12423 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__12423);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__12426){
var ports = cljs.core.first(arglist__12426);
var p__12423 = cljs.core.rest(arglist__12426);
return alts_BANG___delegate(ports,p__12423);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t12434 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12434 = (function (ch,f,map_LT_,meta12435){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta12435 = meta12435;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12434.cljs$lang$type = true;
cljs.core.async.t12434.cljs$lang$ctorStr = "cljs.core.async/t12434";
cljs.core.async.t12434.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t12434");
});
cljs.core.async.t12434.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12434.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t12434.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12434.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t12437 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12437 = (function (fn1,_,meta12435,ch,f,map_LT_,meta12438){
this.fn1 = fn1;
this._ = _;
this.meta12435 = meta12435;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta12438 = meta12438;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12437.cljs$lang$type = true;
cljs.core.async.t12437.cljs$lang$ctorStr = "cljs.core.async/t12437";
cljs.core.async.t12437.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t12437");
});
cljs.core.async.t12437.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12437.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t12437.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t12437.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__12427_SHARP_){return f1.call(null,(((p1__12427_SHARP_ == null))?null:self__.f.call(null,p1__12427_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t12437.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12439){var self__ = this;
var _12439__$1 = this;return self__.meta12438;
});
cljs.core.async.t12437.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12439,meta12438__$1){var self__ = this;
var _12439__$1 = this;return (new cljs.core.async.t12437(self__.fn1,self__._,self__.meta12435,self__.ch,self__.f,self__.map_LT_,meta12438__$1));
});
cljs.core.async.__GT_t12437 = (function __GT_t12437(fn1__$1,___$2,meta12435__$1,ch__$2,f__$2,map_LT___$2,meta12438){return (new cljs.core.async.t12437(fn1__$1,___$2,meta12435__$1,ch__$2,f__$2,map_LT___$2,meta12438));
});
}
return (new cljs.core.async.t12437(fn1,___$1,self__.meta12435,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t12434.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12434.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12434.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12436){var self__ = this;
var _12436__$1 = this;return self__.meta12435;
});
cljs.core.async.t12434.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12436,meta12435__$1){var self__ = this;
var _12436__$1 = this;return (new cljs.core.async.t12434(self__.ch,self__.f,self__.map_LT_,meta12435__$1));
});
cljs.core.async.__GT_t12434 = (function __GT_t12434(ch__$1,f__$1,map_LT___$1,meta12435){return (new cljs.core.async.t12434(ch__$1,f__$1,map_LT___$1,meta12435));
});
}
return (new cljs.core.async.t12434(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t12443 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12443 = (function (ch,f,map_GT_,meta12444){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta12444 = meta12444;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12443.cljs$lang$type = true;
cljs.core.async.t12443.cljs$lang$ctorStr = "cljs.core.async/t12443";
cljs.core.async.t12443.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t12443");
});
cljs.core.async.t12443.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12443.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t12443.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12443.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t12443.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12443.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12443.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12445){var self__ = this;
var _12445__$1 = this;return self__.meta12444;
});
cljs.core.async.t12443.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12445,meta12444__$1){var self__ = this;
var _12445__$1 = this;return (new cljs.core.async.t12443(self__.ch,self__.f,self__.map_GT_,meta12444__$1));
});
cljs.core.async.__GT_t12443 = (function __GT_t12443(ch__$1,f__$1,map_GT___$1,meta12444){return (new cljs.core.async.t12443(ch__$1,f__$1,map_GT___$1,meta12444));
});
}
return (new cljs.core.async.t12443(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t12449 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12449 = (function (ch,p,filter_GT_,meta12450){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta12450 = meta12450;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12449.cljs$lang$type = true;
cljs.core.async.t12449.cljs$lang$ctorStr = "cljs.core.async/t12449";
cljs.core.async.t12449.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t12449");
});
cljs.core.async.t12449.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12449.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t12449.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12449.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t12449.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12449.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12449.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12451){var self__ = this;
var _12451__$1 = this;return self__.meta12450;
});
cljs.core.async.t12449.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12451,meta12450__$1){var self__ = this;
var _12451__$1 = this;return (new cljs.core.async.t12449(self__.ch,self__.p,self__.filter_GT_,meta12450__$1));
});
cljs.core.async.__GT_t12449 = (function __GT_t12449(ch__$1,p__$1,filter_GT___$1,meta12450){return (new cljs.core.async.t12449(ch__$1,p__$1,filter_GT___$1,meta12450));
});
}
return (new cljs.core.async.t12449(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6192__auto___12534 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_12513){var state_val_12514 = (state_12513[1]);if((state_val_12514 === 1))
{var state_12513__$1 = state_12513;var statearr_12515_12535 = state_12513__$1;(statearr_12515_12535[2] = null);
(statearr_12515_12535[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12514 === 2))
{var state_12513__$1 = state_12513;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12513__$1,4,ch);
} else
{if((state_val_12514 === 3))
{var inst_12511 = (state_12513[2]);var state_12513__$1 = state_12513;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12513__$1,inst_12511);
} else
{if((state_val_12514 === 4))
{var inst_12495 = (state_12513[7]);var inst_12495__$1 = (state_12513[2]);var inst_12496 = (inst_12495__$1 == null);var state_12513__$1 = (function (){var statearr_12516 = state_12513;(statearr_12516[7] = inst_12495__$1);
return statearr_12516;
})();if(cljs.core.truth_(inst_12496))
{var statearr_12517_12536 = state_12513__$1;(statearr_12517_12536[1] = 5);
} else
{var statearr_12518_12537 = state_12513__$1;(statearr_12518_12537[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12514 === 5))
{var inst_12498 = cljs.core.async.close_BANG_.call(null,out);var state_12513__$1 = state_12513;var statearr_12519_12538 = state_12513__$1;(statearr_12519_12538[2] = inst_12498);
(statearr_12519_12538[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12514 === 6))
{var inst_12495 = (state_12513[7]);var inst_12500 = p.call(null,inst_12495);var state_12513__$1 = state_12513;if(cljs.core.truth_(inst_12500))
{var statearr_12520_12539 = state_12513__$1;(statearr_12520_12539[1] = 8);
} else
{var statearr_12521_12540 = state_12513__$1;(statearr_12521_12540[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12514 === 7))
{var inst_12509 = (state_12513[2]);var state_12513__$1 = state_12513;var statearr_12522_12541 = state_12513__$1;(statearr_12522_12541[2] = inst_12509);
(statearr_12522_12541[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12514 === 8))
{var inst_12495 = (state_12513[7]);var state_12513__$1 = state_12513;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12513__$1,11,out,inst_12495);
} else
{if((state_val_12514 === 9))
{var state_12513__$1 = state_12513;var statearr_12523_12542 = state_12513__$1;(statearr_12523_12542[2] = null);
(statearr_12523_12542[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12514 === 10))
{var inst_12506 = (state_12513[2]);var state_12513__$1 = (function (){var statearr_12524 = state_12513;(statearr_12524[8] = inst_12506);
return statearr_12524;
})();var statearr_12525_12543 = state_12513__$1;(statearr_12525_12543[2] = null);
(statearr_12525_12543[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12514 === 11))
{var inst_12503 = (state_12513[2]);var state_12513__$1 = state_12513;var statearr_12526_12544 = state_12513__$1;(statearr_12526_12544[2] = inst_12503);
(statearr_12526_12544[1] = 10);
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
var state_machine__6178__auto____0 = (function (){var statearr_12530 = [null,null,null,null,null,null,null,null,null];(statearr_12530[0] = state_machine__6178__auto__);
(statearr_12530[1] = 1);
return statearr_12530;
});
var state_machine__6178__auto____1 = (function (state_12513){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12513);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12531){if((e12531 instanceof Object))
{var ex__6181__auto__ = e12531;var statearr_12532_12545 = state_12513;(statearr_12532_12545[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12513);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12531;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12546 = state_12513;
state_12513 = G__12546;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12513){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_12533 = f__6193__auto__.call(null);(statearr_12533[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___12534);
return statearr_12533;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6192__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_12698){var state_val_12699 = (state_12698[1]);if((state_val_12699 === 1))
{var state_12698__$1 = state_12698;var statearr_12700_12737 = state_12698__$1;(statearr_12700_12737[2] = null);
(statearr_12700_12737[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12699 === 2))
{var state_12698__$1 = state_12698;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12698__$1,4,in$);
} else
{if((state_val_12699 === 3))
{var inst_12696 = (state_12698[2]);var state_12698__$1 = state_12698;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12698__$1,inst_12696);
} else
{if((state_val_12699 === 4))
{var inst_12644 = (state_12698[7]);var inst_12644__$1 = (state_12698[2]);var inst_12645 = (inst_12644__$1 == null);var state_12698__$1 = (function (){var statearr_12701 = state_12698;(statearr_12701[7] = inst_12644__$1);
return statearr_12701;
})();if(cljs.core.truth_(inst_12645))
{var statearr_12702_12738 = state_12698__$1;(statearr_12702_12738[1] = 5);
} else
{var statearr_12703_12739 = state_12698__$1;(statearr_12703_12739[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12699 === 5))
{var inst_12647 = cljs.core.async.close_BANG_.call(null,out);var state_12698__$1 = state_12698;var statearr_12704_12740 = state_12698__$1;(statearr_12704_12740[2] = inst_12647);
(statearr_12704_12740[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12699 === 6))
{var inst_12644 = (state_12698[7]);var inst_12649 = f.call(null,inst_12644);var inst_12654 = cljs.core.seq.call(null,inst_12649);var inst_12655 = inst_12654;var inst_12656 = null;var inst_12657 = 0;var inst_12658 = 0;var state_12698__$1 = (function (){var statearr_12705 = state_12698;(statearr_12705[8] = inst_12655);
(statearr_12705[9] = inst_12656);
(statearr_12705[10] = inst_12657);
(statearr_12705[11] = inst_12658);
return statearr_12705;
})();var statearr_12706_12741 = state_12698__$1;(statearr_12706_12741[2] = null);
(statearr_12706_12741[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12699 === 7))
{var inst_12694 = (state_12698[2]);var state_12698__$1 = state_12698;var statearr_12707_12742 = state_12698__$1;(statearr_12707_12742[2] = inst_12694);
(statearr_12707_12742[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12699 === 8))
{var inst_12657 = (state_12698[10]);var inst_12658 = (state_12698[11]);var inst_12660 = (inst_12658 < inst_12657);var inst_12661 = inst_12660;var state_12698__$1 = state_12698;if(cljs.core.truth_(inst_12661))
{var statearr_12708_12743 = state_12698__$1;(statearr_12708_12743[1] = 10);
} else
{var statearr_12709_12744 = state_12698__$1;(statearr_12709_12744[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12699 === 9))
{var inst_12691 = (state_12698[2]);var state_12698__$1 = (function (){var statearr_12710 = state_12698;(statearr_12710[12] = inst_12691);
return statearr_12710;
})();var statearr_12711_12745 = state_12698__$1;(statearr_12711_12745[2] = null);
(statearr_12711_12745[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12699 === 10))
{var inst_12656 = (state_12698[9]);var inst_12658 = (state_12698[11]);var inst_12663 = cljs.core._nth.call(null,inst_12656,inst_12658);var state_12698__$1 = state_12698;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12698__$1,13,out,inst_12663);
} else
{if((state_val_12699 === 11))
{var inst_12669 = (state_12698[13]);var inst_12655 = (state_12698[8]);var inst_12669__$1 = cljs.core.seq.call(null,inst_12655);var state_12698__$1 = (function (){var statearr_12715 = state_12698;(statearr_12715[13] = inst_12669__$1);
return statearr_12715;
})();if(inst_12669__$1)
{var statearr_12716_12746 = state_12698__$1;(statearr_12716_12746[1] = 14);
} else
{var statearr_12717_12747 = state_12698__$1;(statearr_12717_12747[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12699 === 12))
{var inst_12689 = (state_12698[2]);var state_12698__$1 = state_12698;var statearr_12718_12748 = state_12698__$1;(statearr_12718_12748[2] = inst_12689);
(statearr_12718_12748[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12699 === 13))
{var inst_12655 = (state_12698[8]);var inst_12656 = (state_12698[9]);var inst_12657 = (state_12698[10]);var inst_12658 = (state_12698[11]);var inst_12665 = (state_12698[2]);var inst_12666 = (inst_12658 + 1);var tmp12712 = inst_12655;var tmp12713 = inst_12656;var tmp12714 = inst_12657;var inst_12655__$1 = tmp12712;var inst_12656__$1 = tmp12713;var inst_12657__$1 = tmp12714;var inst_12658__$1 = inst_12666;var state_12698__$1 = (function (){var statearr_12719 = state_12698;(statearr_12719[8] = inst_12655__$1);
(statearr_12719[14] = inst_12665);
(statearr_12719[9] = inst_12656__$1);
(statearr_12719[10] = inst_12657__$1);
(statearr_12719[11] = inst_12658__$1);
return statearr_12719;
})();var statearr_12720_12749 = state_12698__$1;(statearr_12720_12749[2] = null);
(statearr_12720_12749[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12699 === 14))
{var inst_12669 = (state_12698[13]);var inst_12671 = cljs.core.chunked_seq_QMARK_.call(null,inst_12669);var state_12698__$1 = state_12698;if(inst_12671)
{var statearr_12721_12750 = state_12698__$1;(statearr_12721_12750[1] = 17);
} else
{var statearr_12722_12751 = state_12698__$1;(statearr_12722_12751[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12699 === 15))
{var state_12698__$1 = state_12698;var statearr_12723_12752 = state_12698__$1;(statearr_12723_12752[2] = null);
(statearr_12723_12752[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12699 === 16))
{var inst_12687 = (state_12698[2]);var state_12698__$1 = state_12698;var statearr_12724_12753 = state_12698__$1;(statearr_12724_12753[2] = inst_12687);
(statearr_12724_12753[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12699 === 17))
{var inst_12669 = (state_12698[13]);var inst_12673 = cljs.core.chunk_first.call(null,inst_12669);var inst_12674 = cljs.core.chunk_rest.call(null,inst_12669);var inst_12675 = cljs.core.count.call(null,inst_12673);var inst_12655 = inst_12674;var inst_12656 = inst_12673;var inst_12657 = inst_12675;var inst_12658 = 0;var state_12698__$1 = (function (){var statearr_12725 = state_12698;(statearr_12725[8] = inst_12655);
(statearr_12725[9] = inst_12656);
(statearr_12725[10] = inst_12657);
(statearr_12725[11] = inst_12658);
return statearr_12725;
})();var statearr_12726_12754 = state_12698__$1;(statearr_12726_12754[2] = null);
(statearr_12726_12754[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12699 === 18))
{var inst_12669 = (state_12698[13]);var inst_12678 = cljs.core.first.call(null,inst_12669);var state_12698__$1 = state_12698;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12698__$1,20,out,inst_12678);
} else
{if((state_val_12699 === 19))
{var inst_12684 = (state_12698[2]);var state_12698__$1 = state_12698;var statearr_12727_12755 = state_12698__$1;(statearr_12727_12755[2] = inst_12684);
(statearr_12727_12755[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12699 === 20))
{var inst_12669 = (state_12698[13]);var inst_12680 = (state_12698[2]);var inst_12681 = cljs.core.next.call(null,inst_12669);var inst_12655 = inst_12681;var inst_12656 = null;var inst_12657 = 0;var inst_12658 = 0;var state_12698__$1 = (function (){var statearr_12728 = state_12698;(statearr_12728[8] = inst_12655);
(statearr_12728[9] = inst_12656);
(statearr_12728[10] = inst_12657);
(statearr_12728[11] = inst_12658);
(statearr_12728[15] = inst_12680);
return statearr_12728;
})();var statearr_12729_12756 = state_12698__$1;(statearr_12729_12756[2] = null);
(statearr_12729_12756[1] = 8);
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
var state_machine__6178__auto____0 = (function (){var statearr_12733 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12733[0] = state_machine__6178__auto__);
(statearr_12733[1] = 1);
return statearr_12733;
});
var state_machine__6178__auto____1 = (function (state_12698){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12698);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12734){if((e12734 instanceof Object))
{var ex__6181__auto__ = e12734;var statearr_12735_12757 = state_12698;(statearr_12735_12757[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12698);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12734;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12758 = state_12698;
state_12698 = G__12758;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12698){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_12736 = f__6193__auto__.call(null);(statearr_12736[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_12736;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__6192__auto___12839 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_12818){var state_val_12819 = (state_12818[1]);if((state_val_12819 === 1))
{var state_12818__$1 = state_12818;var statearr_12820_12840 = state_12818__$1;(statearr_12820_12840[2] = null);
(statearr_12820_12840[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12819 === 2))
{var state_12818__$1 = state_12818;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12818__$1,4,from);
} else
{if((state_val_12819 === 3))
{var inst_12816 = (state_12818[2]);var state_12818__$1 = state_12818;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12818__$1,inst_12816);
} else
{if((state_val_12819 === 4))
{var inst_12801 = (state_12818[7]);var inst_12801__$1 = (state_12818[2]);var inst_12802 = (inst_12801__$1 == null);var state_12818__$1 = (function (){var statearr_12821 = state_12818;(statearr_12821[7] = inst_12801__$1);
return statearr_12821;
})();if(cljs.core.truth_(inst_12802))
{var statearr_12822_12841 = state_12818__$1;(statearr_12822_12841[1] = 5);
} else
{var statearr_12823_12842 = state_12818__$1;(statearr_12823_12842[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12819 === 5))
{var state_12818__$1 = state_12818;if(cljs.core.truth_(close_QMARK_))
{var statearr_12824_12843 = state_12818__$1;(statearr_12824_12843[1] = 8);
} else
{var statearr_12825_12844 = state_12818__$1;(statearr_12825_12844[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12819 === 6))
{var inst_12801 = (state_12818[7]);var state_12818__$1 = state_12818;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12818__$1,11,to,inst_12801);
} else
{if((state_val_12819 === 7))
{var inst_12814 = (state_12818[2]);var state_12818__$1 = state_12818;var statearr_12826_12845 = state_12818__$1;(statearr_12826_12845[2] = inst_12814);
(statearr_12826_12845[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12819 === 8))
{var inst_12805 = cljs.core.async.close_BANG_.call(null,to);var state_12818__$1 = state_12818;var statearr_12827_12846 = state_12818__$1;(statearr_12827_12846[2] = inst_12805);
(statearr_12827_12846[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12819 === 9))
{var state_12818__$1 = state_12818;var statearr_12828_12847 = state_12818__$1;(statearr_12828_12847[2] = null);
(statearr_12828_12847[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12819 === 10))
{var inst_12808 = (state_12818[2]);var state_12818__$1 = state_12818;var statearr_12829_12848 = state_12818__$1;(statearr_12829_12848[2] = inst_12808);
(statearr_12829_12848[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12819 === 11))
{var inst_12811 = (state_12818[2]);var state_12818__$1 = (function (){var statearr_12830 = state_12818;(statearr_12830[8] = inst_12811);
return statearr_12830;
})();var statearr_12831_12849 = state_12818__$1;(statearr_12831_12849[2] = null);
(statearr_12831_12849[1] = 2);
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
var state_machine__6178__auto____0 = (function (){var statearr_12835 = [null,null,null,null,null,null,null,null,null];(statearr_12835[0] = state_machine__6178__auto__);
(statearr_12835[1] = 1);
return statearr_12835;
});
var state_machine__6178__auto____1 = (function (state_12818){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12818);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12836){if((e12836 instanceof Object))
{var ex__6181__auto__ = e12836;var statearr_12837_12850 = state_12818;(statearr_12837_12850[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12818);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12836;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12851 = state_12818;
state_12818 = G__12851;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12818){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_12838 = f__6193__auto__.call(null);(statearr_12838[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___12839);
return statearr_12838;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6192__auto___12938 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_12916){var state_val_12917 = (state_12916[1]);if((state_val_12917 === 1))
{var state_12916__$1 = state_12916;var statearr_12918_12939 = state_12916__$1;(statearr_12918_12939[2] = null);
(statearr_12918_12939[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12917 === 2))
{var state_12916__$1 = state_12916;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12916__$1,4,ch);
} else
{if((state_val_12917 === 3))
{var inst_12914 = (state_12916[2]);var state_12916__$1 = state_12916;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12916__$1,inst_12914);
} else
{if((state_val_12917 === 4))
{var inst_12897 = (state_12916[7]);var inst_12897__$1 = (state_12916[2]);var inst_12898 = (inst_12897__$1 == null);var state_12916__$1 = (function (){var statearr_12919 = state_12916;(statearr_12919[7] = inst_12897__$1);
return statearr_12919;
})();if(cljs.core.truth_(inst_12898))
{var statearr_12920_12940 = state_12916__$1;(statearr_12920_12940[1] = 5);
} else
{var statearr_12921_12941 = state_12916__$1;(statearr_12921_12941[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12917 === 5))
{var inst_12900 = cljs.core.async.close_BANG_.call(null,tc);var inst_12901 = cljs.core.async.close_BANG_.call(null,fc);var state_12916__$1 = (function (){var statearr_12922 = state_12916;(statearr_12922[8] = inst_12900);
return statearr_12922;
})();var statearr_12923_12942 = state_12916__$1;(statearr_12923_12942[2] = inst_12901);
(statearr_12923_12942[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12917 === 6))
{var inst_12897 = (state_12916[7]);var inst_12903 = p.call(null,inst_12897);var state_12916__$1 = state_12916;if(cljs.core.truth_(inst_12903))
{var statearr_12924_12943 = state_12916__$1;(statearr_12924_12943[1] = 9);
} else
{var statearr_12925_12944 = state_12916__$1;(statearr_12925_12944[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12917 === 7))
{var inst_12912 = (state_12916[2]);var state_12916__$1 = state_12916;var statearr_12926_12945 = state_12916__$1;(statearr_12926_12945[2] = inst_12912);
(statearr_12926_12945[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12917 === 8))
{var inst_12909 = (state_12916[2]);var state_12916__$1 = (function (){var statearr_12927 = state_12916;(statearr_12927[9] = inst_12909);
return statearr_12927;
})();var statearr_12928_12946 = state_12916__$1;(statearr_12928_12946[2] = null);
(statearr_12928_12946[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12917 === 9))
{var state_12916__$1 = state_12916;var statearr_12929_12947 = state_12916__$1;(statearr_12929_12947[2] = tc);
(statearr_12929_12947[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12917 === 10))
{var state_12916__$1 = state_12916;var statearr_12930_12948 = state_12916__$1;(statearr_12930_12948[2] = fc);
(statearr_12930_12948[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12917 === 11))
{var inst_12897 = (state_12916[7]);var inst_12907 = (state_12916[2]);var state_12916__$1 = state_12916;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12916__$1,8,inst_12907,inst_12897);
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
var state_machine__6178__auto____0 = (function (){var statearr_12934 = [null,null,null,null,null,null,null,null,null,null];(statearr_12934[0] = state_machine__6178__auto__);
(statearr_12934[1] = 1);
return statearr_12934;
});
var state_machine__6178__auto____1 = (function (state_12916){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12916);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12935){if((e12935 instanceof Object))
{var ex__6181__auto__ = e12935;var statearr_12936_12949 = state_12916;(statearr_12936_12949[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12916);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12935;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12950 = state_12916;
state_12916 = G__12950;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12916){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_12937 = f__6193__auto__.call(null);(statearr_12937[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___12938);
return statearr_12937;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6192__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_12997){var state_val_12998 = (state_12997[1]);if((state_val_12998 === 7))
{var inst_12993 = (state_12997[2]);var state_12997__$1 = state_12997;var statearr_12999_13015 = state_12997__$1;(statearr_12999_13015[2] = inst_12993);
(statearr_12999_13015[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12998 === 6))
{var inst_12986 = (state_12997[7]);var inst_12983 = (state_12997[8]);var inst_12990 = f.call(null,inst_12983,inst_12986);var inst_12983__$1 = inst_12990;var state_12997__$1 = (function (){var statearr_13000 = state_12997;(statearr_13000[8] = inst_12983__$1);
return statearr_13000;
})();var statearr_13001_13016 = state_12997__$1;(statearr_13001_13016[2] = null);
(statearr_13001_13016[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12998 === 5))
{var inst_12983 = (state_12997[8]);var state_12997__$1 = state_12997;var statearr_13002_13017 = state_12997__$1;(statearr_13002_13017[2] = inst_12983);
(statearr_13002_13017[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12998 === 4))
{var inst_12986 = (state_12997[7]);var inst_12986__$1 = (state_12997[2]);var inst_12987 = (inst_12986__$1 == null);var state_12997__$1 = (function (){var statearr_13003 = state_12997;(statearr_13003[7] = inst_12986__$1);
return statearr_13003;
})();if(cljs.core.truth_(inst_12987))
{var statearr_13004_13018 = state_12997__$1;(statearr_13004_13018[1] = 5);
} else
{var statearr_13005_13019 = state_12997__$1;(statearr_13005_13019[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12998 === 3))
{var inst_12995 = (state_12997[2]);var state_12997__$1 = state_12997;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12997__$1,inst_12995);
} else
{if((state_val_12998 === 2))
{var state_12997__$1 = state_12997;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12997__$1,4,ch);
} else
{if((state_val_12998 === 1))
{var inst_12983 = init;var state_12997__$1 = (function (){var statearr_13006 = state_12997;(statearr_13006[8] = inst_12983);
return statearr_13006;
})();var statearr_13007_13020 = state_12997__$1;(statearr_13007_13020[2] = null);
(statearr_13007_13020[1] = 2);
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
var state_machine__6178__auto____0 = (function (){var statearr_13011 = [null,null,null,null,null,null,null,null,null];(statearr_13011[0] = state_machine__6178__auto__);
(statearr_13011[1] = 1);
return statearr_13011;
});
var state_machine__6178__auto____1 = (function (state_12997){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12997);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13012){if((e13012 instanceof Object))
{var ex__6181__auto__ = e13012;var statearr_13013_13021 = state_12997;(statearr_13013_13021[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12997);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13012;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13022 = state_12997;
state_12997 = G__13022;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12997){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_13014 = f__6193__auto__.call(null);(statearr_13014[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_13014;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6192__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_13084){var state_val_13085 = (state_13084[1]);if((state_val_13085 === 1))
{var inst_13064 = cljs.core.seq.call(null,coll);var inst_13065 = inst_13064;var state_13084__$1 = (function (){var statearr_13086 = state_13084;(statearr_13086[7] = inst_13065);
return statearr_13086;
})();var statearr_13087_13105 = state_13084__$1;(statearr_13087_13105[2] = null);
(statearr_13087_13105[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13085 === 2))
{var inst_13065 = (state_13084[7]);var state_13084__$1 = state_13084;if(cljs.core.truth_(inst_13065))
{var statearr_13088_13106 = state_13084__$1;(statearr_13088_13106[1] = 4);
} else
{var statearr_13089_13107 = state_13084__$1;(statearr_13089_13107[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13085 === 3))
{var inst_13082 = (state_13084[2]);var state_13084__$1 = state_13084;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13084__$1,inst_13082);
} else
{if((state_val_13085 === 4))
{var inst_13065 = (state_13084[7]);var inst_13068 = cljs.core.first.call(null,inst_13065);var state_13084__$1 = state_13084;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13084__$1,7,ch,inst_13068);
} else
{if((state_val_13085 === 5))
{var state_13084__$1 = state_13084;if(cljs.core.truth_(close_QMARK_))
{var statearr_13090_13108 = state_13084__$1;(statearr_13090_13108[1] = 8);
} else
{var statearr_13091_13109 = state_13084__$1;(statearr_13091_13109[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13085 === 6))
{var inst_13080 = (state_13084[2]);var state_13084__$1 = state_13084;var statearr_13092_13110 = state_13084__$1;(statearr_13092_13110[2] = inst_13080);
(statearr_13092_13110[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13085 === 7))
{var inst_13065 = (state_13084[7]);var inst_13070 = (state_13084[2]);var inst_13071 = cljs.core.next.call(null,inst_13065);var inst_13065__$1 = inst_13071;var state_13084__$1 = (function (){var statearr_13093 = state_13084;(statearr_13093[8] = inst_13070);
(statearr_13093[7] = inst_13065__$1);
return statearr_13093;
})();var statearr_13094_13111 = state_13084__$1;(statearr_13094_13111[2] = null);
(statearr_13094_13111[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13085 === 8))
{var inst_13075 = cljs.core.async.close_BANG_.call(null,ch);var state_13084__$1 = state_13084;var statearr_13095_13112 = state_13084__$1;(statearr_13095_13112[2] = inst_13075);
(statearr_13095_13112[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13085 === 9))
{var state_13084__$1 = state_13084;var statearr_13096_13113 = state_13084__$1;(statearr_13096_13113[2] = null);
(statearr_13096_13113[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13085 === 10))
{var inst_13078 = (state_13084[2]);var state_13084__$1 = state_13084;var statearr_13097_13114 = state_13084__$1;(statearr_13097_13114[2] = inst_13078);
(statearr_13097_13114[1] = 6);
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
var state_machine__6178__auto____0 = (function (){var statearr_13101 = [null,null,null,null,null,null,null,null,null];(statearr_13101[0] = state_machine__6178__auto__);
(statearr_13101[1] = 1);
return statearr_13101;
});
var state_machine__6178__auto____1 = (function (state_13084){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13084);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13102){if((e13102 instanceof Object))
{var ex__6181__auto__ = e13102;var statearr_13103_13115 = state_13084;(statearr_13103_13115[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13084);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13102;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13116 = state_13084;
state_13084 = G__13116;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13084){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_13104 = f__6193__auto__.call(null);(statearr_13104[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_13104;
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
cljs.core.async.Mux = (function (){var obj13118 = {};return obj13118;
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
cljs.core.async.Mult = (function (){var obj13120 = {};return obj13120;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t13344 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13344 = (function (cs,ch,mult,meta13345){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta13345 = meta13345;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13344.cljs$lang$type = true;
cljs.core.async.t13344.cljs$lang$ctorStr = "cljs.core.async/t13344";
cljs.core.async.t13344.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t13344");
});})(cs))
;
cljs.core.async.t13344.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t13344.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t13344.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t13344.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t13344.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13344.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t13344.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13346){var self__ = this;
var _13346__$1 = this;return self__.meta13345;
});})(cs))
;
cljs.core.async.t13344.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13346,meta13345__$1){var self__ = this;
var _13346__$1 = this;return (new cljs.core.async.t13344(self__.cs,self__.ch,self__.mult,meta13345__$1));
});})(cs))
;
cljs.core.async.__GT_t13344 = ((function (cs){
return (function __GT_t13344(cs__$1,ch__$1,mult__$1,meta13345){return (new cljs.core.async.t13344(cs__$1,ch__$1,mult__$1,meta13345));
});})(cs))
;
}
return (new cljs.core.async.t13344(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6192__auto___13567 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_13481){var state_val_13482 = (state_13481[1]);if((state_val_13482 === 32))
{var inst_13425 = (state_13481[7]);var inst_13349 = (state_13481[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13481,31,Object,null,30);var inst_13432 = cljs.core.async.put_BANG_.call(null,inst_13425,inst_13349,done);var state_13481__$1 = state_13481;var statearr_13483_13568 = state_13481__$1;(statearr_13483_13568[2] = inst_13432);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13481__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13482 === 1))
{var state_13481__$1 = state_13481;var statearr_13484_13569 = state_13481__$1;(statearr_13484_13569[2] = null);
(statearr_13484_13569[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13482 === 33))
{var inst_13438 = (state_13481[9]);var inst_13440 = cljs.core.chunked_seq_QMARK_.call(null,inst_13438);var state_13481__$1 = state_13481;if(inst_13440)
{var statearr_13485_13570 = state_13481__$1;(statearr_13485_13570[1] = 36);
} else
{var statearr_13486_13571 = state_13481__$1;(statearr_13486_13571[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13482 === 2))
{var state_13481__$1 = state_13481;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13481__$1,4,ch);
} else
{if((state_val_13482 === 34))
{var state_13481__$1 = state_13481;var statearr_13487_13572 = state_13481__$1;(statearr_13487_13572[2] = null);
(statearr_13487_13572[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13482 === 3))
{var inst_13479 = (state_13481[2]);var state_13481__$1 = state_13481;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13481__$1,inst_13479);
} else
{if((state_val_13482 === 35))
{var inst_13463 = (state_13481[2]);var state_13481__$1 = state_13481;var statearr_13488_13573 = state_13481__$1;(statearr_13488_13573[2] = inst_13463);
(statearr_13488_13573[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13482 === 4))
{var inst_13349 = (state_13481[8]);var inst_13349__$1 = (state_13481[2]);var inst_13350 = (inst_13349__$1 == null);var state_13481__$1 = (function (){var statearr_13489 = state_13481;(statearr_13489[8] = inst_13349__$1);
return statearr_13489;
})();if(cljs.core.truth_(inst_13350))
{var statearr_13490_13574 = state_13481__$1;(statearr_13490_13574[1] = 5);
} else
{var statearr_13491_13575 = state_13481__$1;(statearr_13491_13575[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13482 === 36))
{var inst_13438 = (state_13481[9]);var inst_13442 = cljs.core.chunk_first.call(null,inst_13438);var inst_13443 = cljs.core.chunk_rest.call(null,inst_13438);var inst_13444 = cljs.core.count.call(null,inst_13442);var inst_13417 = inst_13443;var inst_13418 = inst_13442;var inst_13419 = inst_13444;var inst_13420 = 0;var state_13481__$1 = (function (){var statearr_13492 = state_13481;(statearr_13492[10] = inst_13419);
(statearr_13492[11] = inst_13418);
(statearr_13492[12] = inst_13417);
(statearr_13492[13] = inst_13420);
return statearr_13492;
})();var statearr_13493_13576 = state_13481__$1;(statearr_13493_13576[2] = null);
(statearr_13493_13576[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13482 === 5))
{var inst_13356 = cljs.core.deref.call(null,cs);var inst_13357 = cljs.core.seq.call(null,inst_13356);var inst_13358 = inst_13357;var inst_13359 = null;var inst_13360 = 0;var inst_13361 = 0;var state_13481__$1 = (function (){var statearr_13494 = state_13481;(statearr_13494[14] = inst_13359);
(statearr_13494[15] = inst_13358);
(statearr_13494[16] = inst_13361);
(statearr_13494[17] = inst_13360);
return statearr_13494;
})();var statearr_13495_13577 = state_13481__$1;(statearr_13495_13577[2] = null);
(statearr_13495_13577[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13482 === 37))
{var inst_13438 = (state_13481[9]);var inst_13447 = cljs.core.first.call(null,inst_13438);var state_13481__$1 = (function (){var statearr_13496 = state_13481;(statearr_13496[18] = inst_13447);
return statearr_13496;
})();var statearr_13497_13578 = state_13481__$1;(statearr_13497_13578[2] = null);
(statearr_13497_13578[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13482 === 6))
{var inst_13409 = (state_13481[19]);var inst_13408 = cljs.core.deref.call(null,cs);var inst_13409__$1 = cljs.core.keys.call(null,inst_13408);var inst_13410 = cljs.core.count.call(null,inst_13409__$1);var inst_13411 = cljs.core.reset_BANG_.call(null,dctr,inst_13410);var inst_13416 = cljs.core.seq.call(null,inst_13409__$1);var inst_13417 = inst_13416;var inst_13418 = null;var inst_13419 = 0;var inst_13420 = 0;var state_13481__$1 = (function (){var statearr_13498 = state_13481;(statearr_13498[19] = inst_13409__$1);
(statearr_13498[10] = inst_13419);
(statearr_13498[11] = inst_13418);
(statearr_13498[12] = inst_13417);
(statearr_13498[13] = inst_13420);
(statearr_13498[20] = inst_13411);
return statearr_13498;
})();var statearr_13499_13579 = state_13481__$1;(statearr_13499_13579[2] = null);
(statearr_13499_13579[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13482 === 38))
{var inst_13460 = (state_13481[2]);var state_13481__$1 = state_13481;var statearr_13500_13580 = state_13481__$1;(statearr_13500_13580[2] = inst_13460);
(statearr_13500_13580[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13482 === 7))
{var inst_13477 = (state_13481[2]);var state_13481__$1 = state_13481;var statearr_13501_13581 = state_13481__$1;(statearr_13501_13581[2] = inst_13477);
(statearr_13501_13581[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13482 === 39))
{var inst_13438 = (state_13481[9]);var inst_13456 = (state_13481[2]);var inst_13457 = cljs.core.next.call(null,inst_13438);var inst_13417 = inst_13457;var inst_13418 = null;var inst_13419 = 0;var inst_13420 = 0;var state_13481__$1 = (function (){var statearr_13502 = state_13481;(statearr_13502[10] = inst_13419);
(statearr_13502[11] = inst_13418);
(statearr_13502[12] = inst_13417);
(statearr_13502[13] = inst_13420);
(statearr_13502[21] = inst_13456);
return statearr_13502;
})();var statearr_13503_13582 = state_13481__$1;(statearr_13503_13582[2] = null);
(statearr_13503_13582[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13482 === 8))
{var inst_13361 = (state_13481[16]);var inst_13360 = (state_13481[17]);var inst_13363 = (inst_13361 < inst_13360);var inst_13364 = inst_13363;var state_13481__$1 = state_13481;if(cljs.core.truth_(inst_13364))
{var statearr_13504_13583 = state_13481__$1;(statearr_13504_13583[1] = 10);
} else
{var statearr_13505_13584 = state_13481__$1;(statearr_13505_13584[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13482 === 40))
{var inst_13447 = (state_13481[18]);var inst_13448 = (state_13481[2]);var inst_13449 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_13450 = cljs.core.async.untap_STAR_.call(null,m,inst_13447);var state_13481__$1 = (function (){var statearr_13506 = state_13481;(statearr_13506[22] = inst_13448);
(statearr_13506[23] = inst_13449);
return statearr_13506;
})();var statearr_13507_13585 = state_13481__$1;(statearr_13507_13585[2] = inst_13450);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13481__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13482 === 9))
{var inst_13406 = (state_13481[2]);var state_13481__$1 = state_13481;var statearr_13508_13586 = state_13481__$1;(statearr_13508_13586[2] = inst_13406);
(statearr_13508_13586[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13482 === 41))
{var inst_13349 = (state_13481[8]);var inst_13447 = (state_13481[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13481,40,Object,null,39);var inst_13454 = cljs.core.async.put_BANG_.call(null,inst_13447,inst_13349,done);var state_13481__$1 = state_13481;var statearr_13509_13587 = state_13481__$1;(statearr_13509_13587[2] = inst_13454);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13481__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13482 === 10))
{var inst_13359 = (state_13481[14]);var inst_13361 = (state_13481[16]);var inst_13367 = cljs.core._nth.call(null,inst_13359,inst_13361);var inst_13368 = cljs.core.nth.call(null,inst_13367,0,null);var inst_13369 = cljs.core.nth.call(null,inst_13367,1,null);var state_13481__$1 = (function (){var statearr_13510 = state_13481;(statearr_13510[24] = inst_13368);
return statearr_13510;
})();if(cljs.core.truth_(inst_13369))
{var statearr_13511_13588 = state_13481__$1;(statearr_13511_13588[1] = 13);
} else
{var statearr_13512_13589 = state_13481__$1;(statearr_13512_13589[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13482 === 42))
{var state_13481__$1 = state_13481;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13481__$1,45,dchan);
} else
{if((state_val_13482 === 11))
{var inst_13358 = (state_13481[15]);var inst_13378 = (state_13481[25]);var inst_13378__$1 = cljs.core.seq.call(null,inst_13358);var state_13481__$1 = (function (){var statearr_13513 = state_13481;(statearr_13513[25] = inst_13378__$1);
return statearr_13513;
})();if(inst_13378__$1)
{var statearr_13514_13590 = state_13481__$1;(statearr_13514_13590[1] = 16);
} else
{var statearr_13515_13591 = state_13481__$1;(statearr_13515_13591[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13482 === 43))
{var state_13481__$1 = state_13481;var statearr_13516_13592 = state_13481__$1;(statearr_13516_13592[2] = null);
(statearr_13516_13592[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13482 === 12))
{var inst_13404 = (state_13481[2]);var state_13481__$1 = state_13481;var statearr_13517_13593 = state_13481__$1;(statearr_13517_13593[2] = inst_13404);
(statearr_13517_13593[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13482 === 44))
{var inst_13474 = (state_13481[2]);var state_13481__$1 = (function (){var statearr_13518 = state_13481;(statearr_13518[26] = inst_13474);
return statearr_13518;
})();var statearr_13519_13594 = state_13481__$1;(statearr_13519_13594[2] = null);
(statearr_13519_13594[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13482 === 13))
{var inst_13368 = (state_13481[24]);var inst_13371 = cljs.core.async.close_BANG_.call(null,inst_13368);var state_13481__$1 = state_13481;var statearr_13520_13595 = state_13481__$1;(statearr_13520_13595[2] = inst_13371);
(statearr_13520_13595[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13482 === 45))
{var inst_13471 = (state_13481[2]);var state_13481__$1 = state_13481;var statearr_13524_13596 = state_13481__$1;(statearr_13524_13596[2] = inst_13471);
(statearr_13524_13596[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13482 === 14))
{var state_13481__$1 = state_13481;var statearr_13525_13597 = state_13481__$1;(statearr_13525_13597[2] = null);
(statearr_13525_13597[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13482 === 15))
{var inst_13359 = (state_13481[14]);var inst_13358 = (state_13481[15]);var inst_13361 = (state_13481[16]);var inst_13360 = (state_13481[17]);var inst_13374 = (state_13481[2]);var inst_13375 = (inst_13361 + 1);var tmp13521 = inst_13359;var tmp13522 = inst_13358;var tmp13523 = inst_13360;var inst_13358__$1 = tmp13522;var inst_13359__$1 = tmp13521;var inst_13360__$1 = tmp13523;var inst_13361__$1 = inst_13375;var state_13481__$1 = (function (){var statearr_13526 = state_13481;(statearr_13526[14] = inst_13359__$1);
(statearr_13526[15] = inst_13358__$1);
(statearr_13526[16] = inst_13361__$1);
(statearr_13526[17] = inst_13360__$1);
(statearr_13526[27] = inst_13374);
return statearr_13526;
})();var statearr_13527_13598 = state_13481__$1;(statearr_13527_13598[2] = null);
(statearr_13527_13598[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13482 === 16))
{var inst_13378 = (state_13481[25]);var inst_13380 = cljs.core.chunked_seq_QMARK_.call(null,inst_13378);var state_13481__$1 = state_13481;if(inst_13380)
{var statearr_13528_13599 = state_13481__$1;(statearr_13528_13599[1] = 19);
} else
{var statearr_13529_13600 = state_13481__$1;(statearr_13529_13600[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13482 === 17))
{var state_13481__$1 = state_13481;var statearr_13530_13601 = state_13481__$1;(statearr_13530_13601[2] = null);
(statearr_13530_13601[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13482 === 18))
{var inst_13402 = (state_13481[2]);var state_13481__$1 = state_13481;var statearr_13531_13602 = state_13481__$1;(statearr_13531_13602[2] = inst_13402);
(statearr_13531_13602[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13482 === 19))
{var inst_13378 = (state_13481[25]);var inst_13382 = cljs.core.chunk_first.call(null,inst_13378);var inst_13383 = cljs.core.chunk_rest.call(null,inst_13378);var inst_13384 = cljs.core.count.call(null,inst_13382);var inst_13358 = inst_13383;var inst_13359 = inst_13382;var inst_13360 = inst_13384;var inst_13361 = 0;var state_13481__$1 = (function (){var statearr_13532 = state_13481;(statearr_13532[14] = inst_13359);
(statearr_13532[15] = inst_13358);
(statearr_13532[16] = inst_13361);
(statearr_13532[17] = inst_13360);
return statearr_13532;
})();var statearr_13533_13603 = state_13481__$1;(statearr_13533_13603[2] = null);
(statearr_13533_13603[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13482 === 20))
{var inst_13378 = (state_13481[25]);var inst_13388 = cljs.core.first.call(null,inst_13378);var inst_13389 = cljs.core.nth.call(null,inst_13388,0,null);var inst_13390 = cljs.core.nth.call(null,inst_13388,1,null);var state_13481__$1 = (function (){var statearr_13534 = state_13481;(statearr_13534[28] = inst_13389);
return statearr_13534;
})();if(cljs.core.truth_(inst_13390))
{var statearr_13535_13604 = state_13481__$1;(statearr_13535_13604[1] = 22);
} else
{var statearr_13536_13605 = state_13481__$1;(statearr_13536_13605[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13482 === 21))
{var inst_13399 = (state_13481[2]);var state_13481__$1 = state_13481;var statearr_13537_13606 = state_13481__$1;(statearr_13537_13606[2] = inst_13399);
(statearr_13537_13606[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13482 === 22))
{var inst_13389 = (state_13481[28]);var inst_13392 = cljs.core.async.close_BANG_.call(null,inst_13389);var state_13481__$1 = state_13481;var statearr_13538_13607 = state_13481__$1;(statearr_13538_13607[2] = inst_13392);
(statearr_13538_13607[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13482 === 23))
{var state_13481__$1 = state_13481;var statearr_13539_13608 = state_13481__$1;(statearr_13539_13608[2] = null);
(statearr_13539_13608[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13482 === 24))
{var inst_13378 = (state_13481[25]);var inst_13395 = (state_13481[2]);var inst_13396 = cljs.core.next.call(null,inst_13378);var inst_13358 = inst_13396;var inst_13359 = null;var inst_13360 = 0;var inst_13361 = 0;var state_13481__$1 = (function (){var statearr_13540 = state_13481;(statearr_13540[29] = inst_13395);
(statearr_13540[14] = inst_13359);
(statearr_13540[15] = inst_13358);
(statearr_13540[16] = inst_13361);
(statearr_13540[17] = inst_13360);
return statearr_13540;
})();var statearr_13541_13609 = state_13481__$1;(statearr_13541_13609[2] = null);
(statearr_13541_13609[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13482 === 25))
{var inst_13419 = (state_13481[10]);var inst_13420 = (state_13481[13]);var inst_13422 = (inst_13420 < inst_13419);var inst_13423 = inst_13422;var state_13481__$1 = state_13481;if(cljs.core.truth_(inst_13423))
{var statearr_13542_13610 = state_13481__$1;(statearr_13542_13610[1] = 27);
} else
{var statearr_13543_13611 = state_13481__$1;(statearr_13543_13611[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13482 === 26))
{var inst_13409 = (state_13481[19]);var inst_13467 = (state_13481[2]);var inst_13468 = cljs.core.seq.call(null,inst_13409);var state_13481__$1 = (function (){var statearr_13544 = state_13481;(statearr_13544[30] = inst_13467);
return statearr_13544;
})();if(inst_13468)
{var statearr_13545_13612 = state_13481__$1;(statearr_13545_13612[1] = 42);
} else
{var statearr_13546_13613 = state_13481__$1;(statearr_13546_13613[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13482 === 27))
{var inst_13418 = (state_13481[11]);var inst_13420 = (state_13481[13]);var inst_13425 = cljs.core._nth.call(null,inst_13418,inst_13420);var state_13481__$1 = (function (){var statearr_13547 = state_13481;(statearr_13547[7] = inst_13425);
return statearr_13547;
})();var statearr_13548_13614 = state_13481__$1;(statearr_13548_13614[2] = null);
(statearr_13548_13614[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13482 === 28))
{var inst_13438 = (state_13481[9]);var inst_13417 = (state_13481[12]);var inst_13438__$1 = cljs.core.seq.call(null,inst_13417);var state_13481__$1 = (function (){var statearr_13552 = state_13481;(statearr_13552[9] = inst_13438__$1);
return statearr_13552;
})();if(inst_13438__$1)
{var statearr_13553_13615 = state_13481__$1;(statearr_13553_13615[1] = 33);
} else
{var statearr_13554_13616 = state_13481__$1;(statearr_13554_13616[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13482 === 29))
{var inst_13465 = (state_13481[2]);var state_13481__$1 = state_13481;var statearr_13555_13617 = state_13481__$1;(statearr_13555_13617[2] = inst_13465);
(statearr_13555_13617[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13482 === 30))
{var inst_13419 = (state_13481[10]);var inst_13418 = (state_13481[11]);var inst_13417 = (state_13481[12]);var inst_13420 = (state_13481[13]);var inst_13434 = (state_13481[2]);var inst_13435 = (inst_13420 + 1);var tmp13549 = inst_13419;var tmp13550 = inst_13418;var tmp13551 = inst_13417;var inst_13417__$1 = tmp13551;var inst_13418__$1 = tmp13550;var inst_13419__$1 = tmp13549;var inst_13420__$1 = inst_13435;var state_13481__$1 = (function (){var statearr_13556 = state_13481;(statearr_13556[10] = inst_13419__$1);
(statearr_13556[11] = inst_13418__$1);
(statearr_13556[31] = inst_13434);
(statearr_13556[12] = inst_13417__$1);
(statearr_13556[13] = inst_13420__$1);
return statearr_13556;
})();var statearr_13557_13618 = state_13481__$1;(statearr_13557_13618[2] = null);
(statearr_13557_13618[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13482 === 31))
{var inst_13425 = (state_13481[7]);var inst_13426 = (state_13481[2]);var inst_13427 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_13428 = cljs.core.async.untap_STAR_.call(null,m,inst_13425);var state_13481__$1 = (function (){var statearr_13558 = state_13481;(statearr_13558[32] = inst_13426);
(statearr_13558[33] = inst_13427);
return statearr_13558;
})();var statearr_13559_13619 = state_13481__$1;(statearr_13559_13619[2] = inst_13428);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13481__$1);
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
var state_machine__6178__auto____0 = (function (){var statearr_13563 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13563[0] = state_machine__6178__auto__);
(statearr_13563[1] = 1);
return statearr_13563;
});
var state_machine__6178__auto____1 = (function (state_13481){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13481);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13564){if((e13564 instanceof Object))
{var ex__6181__auto__ = e13564;var statearr_13565_13620 = state_13481;(statearr_13565_13620[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13481);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13564;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13621 = state_13481;
state_13481 = G__13621;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13481){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_13566 = f__6193__auto__.call(null);(statearr_13566[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___13567);
return statearr_13566;
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
cljs.core.async.Mix = (function (){var obj13623 = {};return obj13623;
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
;var m = (function (){if(typeof cljs.core.async.t13733 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13733 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta13734){
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
this.meta13734 = meta13734;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13733.cljs$lang$type = true;
cljs.core.async.t13733.cljs$lang$ctorStr = "cljs.core.async/t13733";
cljs.core.async.t13733.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t13733");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13733.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t13733.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13733.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13733.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13733.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13733.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13733.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13733.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13733.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13735){var self__ = this;
var _13735__$1 = this;return self__.meta13734;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13733.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13735,meta13734__$1){var self__ = this;
var _13735__$1 = this;return (new cljs.core.async.t13733(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta13734__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t13733 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t13733(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta13734){return (new cljs.core.async.t13733(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta13734));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t13733(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__6192__auto___13842 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_13800){var state_val_13801 = (state_13800[1]);if((state_val_13801 === 1))
{var inst_13739 = (state_13800[7]);var inst_13739__$1 = calc_state.call(null);var inst_13740 = cljs.core.seq_QMARK_.call(null,inst_13739__$1);var state_13800__$1 = (function (){var statearr_13802 = state_13800;(statearr_13802[7] = inst_13739__$1);
return statearr_13802;
})();if(inst_13740)
{var statearr_13803_13843 = state_13800__$1;(statearr_13803_13843[1] = 2);
} else
{var statearr_13804_13844 = state_13800__$1;(statearr_13804_13844[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13801 === 2))
{var inst_13739 = (state_13800[7]);var inst_13742 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13739);var state_13800__$1 = state_13800;var statearr_13805_13845 = state_13800__$1;(statearr_13805_13845[2] = inst_13742);
(statearr_13805_13845[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13801 === 3))
{var inst_13739 = (state_13800[7]);var state_13800__$1 = state_13800;var statearr_13806_13846 = state_13800__$1;(statearr_13806_13846[2] = inst_13739);
(statearr_13806_13846[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13801 === 4))
{var inst_13739 = (state_13800[7]);var inst_13745 = (state_13800[2]);var inst_13746 = cljs.core.get.call(null,inst_13745,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_13747 = cljs.core.get.call(null,inst_13745,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_13748 = cljs.core.get.call(null,inst_13745,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_13749 = inst_13739;var state_13800__$1 = (function (){var statearr_13807 = state_13800;(statearr_13807[8] = inst_13746);
(statearr_13807[9] = inst_13747);
(statearr_13807[10] = inst_13749);
(statearr_13807[11] = inst_13748);
return statearr_13807;
})();var statearr_13808_13847 = state_13800__$1;(statearr_13808_13847[2] = null);
(statearr_13808_13847[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13801 === 5))
{var inst_13749 = (state_13800[10]);var inst_13752 = cljs.core.seq_QMARK_.call(null,inst_13749);var state_13800__$1 = state_13800;if(inst_13752)
{var statearr_13809_13848 = state_13800__$1;(statearr_13809_13848[1] = 7);
} else
{var statearr_13810_13849 = state_13800__$1;(statearr_13810_13849[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13801 === 6))
{var inst_13798 = (state_13800[2]);var state_13800__$1 = state_13800;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13800__$1,inst_13798);
} else
{if((state_val_13801 === 7))
{var inst_13749 = (state_13800[10]);var inst_13754 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13749);var state_13800__$1 = state_13800;var statearr_13811_13850 = state_13800__$1;(statearr_13811_13850[2] = inst_13754);
(statearr_13811_13850[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13801 === 8))
{var inst_13749 = (state_13800[10]);var state_13800__$1 = state_13800;var statearr_13812_13851 = state_13800__$1;(statearr_13812_13851[2] = inst_13749);
(statearr_13812_13851[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13801 === 9))
{var inst_13757 = (state_13800[12]);var inst_13757__$1 = (state_13800[2]);var inst_13758 = cljs.core.get.call(null,inst_13757__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_13759 = cljs.core.get.call(null,inst_13757__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_13760 = cljs.core.get.call(null,inst_13757__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_13800__$1 = (function (){var statearr_13813 = state_13800;(statearr_13813[12] = inst_13757__$1);
(statearr_13813[13] = inst_13760);
(statearr_13813[14] = inst_13759);
return statearr_13813;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13800__$1,10,inst_13758);
} else
{if((state_val_13801 === 10))
{var inst_13765 = (state_13800[15]);var inst_13764 = (state_13800[16]);var inst_13763 = (state_13800[2]);var inst_13764__$1 = cljs.core.nth.call(null,inst_13763,0,null);var inst_13765__$1 = cljs.core.nth.call(null,inst_13763,1,null);var inst_13766 = (inst_13764__$1 == null);var inst_13767 = cljs.core._EQ_.call(null,inst_13765__$1,change);var inst_13768 = (inst_13766) || (inst_13767);var state_13800__$1 = (function (){var statearr_13814 = state_13800;(statearr_13814[15] = inst_13765__$1);
(statearr_13814[16] = inst_13764__$1);
return statearr_13814;
})();if(cljs.core.truth_(inst_13768))
{var statearr_13815_13852 = state_13800__$1;(statearr_13815_13852[1] = 11);
} else
{var statearr_13816_13853 = state_13800__$1;(statearr_13816_13853[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13801 === 11))
{var inst_13764 = (state_13800[16]);var inst_13770 = (inst_13764 == null);var state_13800__$1 = state_13800;if(cljs.core.truth_(inst_13770))
{var statearr_13817_13854 = state_13800__$1;(statearr_13817_13854[1] = 14);
} else
{var statearr_13818_13855 = state_13800__$1;(statearr_13818_13855[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13801 === 12))
{var inst_13765 = (state_13800[15]);var inst_13760 = (state_13800[13]);var inst_13779 = (state_13800[17]);var inst_13779__$1 = inst_13760.call(null,inst_13765);var state_13800__$1 = (function (){var statearr_13819 = state_13800;(statearr_13819[17] = inst_13779__$1);
return statearr_13819;
})();if(cljs.core.truth_(inst_13779__$1))
{var statearr_13820_13856 = state_13800__$1;(statearr_13820_13856[1] = 17);
} else
{var statearr_13821_13857 = state_13800__$1;(statearr_13821_13857[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13801 === 13))
{var inst_13796 = (state_13800[2]);var state_13800__$1 = state_13800;var statearr_13822_13858 = state_13800__$1;(statearr_13822_13858[2] = inst_13796);
(statearr_13822_13858[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13801 === 14))
{var inst_13765 = (state_13800[15]);var inst_13772 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13765);var state_13800__$1 = state_13800;var statearr_13823_13859 = state_13800__$1;(statearr_13823_13859[2] = inst_13772);
(statearr_13823_13859[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13801 === 15))
{var state_13800__$1 = state_13800;var statearr_13824_13860 = state_13800__$1;(statearr_13824_13860[2] = null);
(statearr_13824_13860[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13801 === 16))
{var inst_13775 = (state_13800[2]);var inst_13776 = calc_state.call(null);var inst_13749 = inst_13776;var state_13800__$1 = (function (){var statearr_13825 = state_13800;(statearr_13825[10] = inst_13749);
(statearr_13825[18] = inst_13775);
return statearr_13825;
})();var statearr_13826_13861 = state_13800__$1;(statearr_13826_13861[2] = null);
(statearr_13826_13861[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13801 === 17))
{var inst_13779 = (state_13800[17]);var state_13800__$1 = state_13800;var statearr_13827_13862 = state_13800__$1;(statearr_13827_13862[2] = inst_13779);
(statearr_13827_13862[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13801 === 18))
{var inst_13765 = (state_13800[15]);var inst_13760 = (state_13800[13]);var inst_13759 = (state_13800[14]);var inst_13782 = cljs.core.empty_QMARK_.call(null,inst_13760);var inst_13783 = inst_13759.call(null,inst_13765);var inst_13784 = cljs.core.not.call(null,inst_13783);var inst_13785 = (inst_13782) && (inst_13784);var state_13800__$1 = state_13800;var statearr_13828_13863 = state_13800__$1;(statearr_13828_13863[2] = inst_13785);
(statearr_13828_13863[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13801 === 19))
{var inst_13787 = (state_13800[2]);var state_13800__$1 = state_13800;if(cljs.core.truth_(inst_13787))
{var statearr_13829_13864 = state_13800__$1;(statearr_13829_13864[1] = 20);
} else
{var statearr_13830_13865 = state_13800__$1;(statearr_13830_13865[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13801 === 20))
{var inst_13764 = (state_13800[16]);var state_13800__$1 = state_13800;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13800__$1,23,out,inst_13764);
} else
{if((state_val_13801 === 21))
{var state_13800__$1 = state_13800;var statearr_13831_13866 = state_13800__$1;(statearr_13831_13866[2] = null);
(statearr_13831_13866[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13801 === 22))
{var inst_13757 = (state_13800[12]);var inst_13793 = (state_13800[2]);var inst_13749 = inst_13757;var state_13800__$1 = (function (){var statearr_13832 = state_13800;(statearr_13832[19] = inst_13793);
(statearr_13832[10] = inst_13749);
return statearr_13832;
})();var statearr_13833_13867 = state_13800__$1;(statearr_13833_13867[2] = null);
(statearr_13833_13867[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13801 === 23))
{var inst_13790 = (state_13800[2]);var state_13800__$1 = state_13800;var statearr_13834_13868 = state_13800__$1;(statearr_13834_13868[2] = inst_13790);
(statearr_13834_13868[1] = 22);
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
var state_machine__6178__auto____0 = (function (){var statearr_13838 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13838[0] = state_machine__6178__auto__);
(statearr_13838[1] = 1);
return statearr_13838;
});
var state_machine__6178__auto____1 = (function (state_13800){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13800);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13839){if((e13839 instanceof Object))
{var ex__6181__auto__ = e13839;var statearr_13840_13869 = state_13800;(statearr_13840_13869[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13800);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13839;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13870 = state_13800;
state_13800 = G__13870;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13800){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_13841 = f__6193__auto__.call(null);(statearr_13841[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___13842);
return statearr_13841;
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
cljs.core.async.Pub = (function (){var obj13872 = {};return obj13872;
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
return (function (p1__13873_SHARP_){if(cljs.core.truth_(p1__13873_SHARP_.call(null,topic)))
{return p1__13873_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__13873_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3443__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t13998 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13998 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13999){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13999 = meta13999;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13998.cljs$lang$type = true;
cljs.core.async.t13998.cljs$lang$ctorStr = "cljs.core.async/t13998";
cljs.core.async.t13998.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t13998");
});})(mults,ensure_mult))
;
cljs.core.async.t13998.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t13998.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t13998.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t13998.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t13998.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t13998.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13998.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t13998.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_14000){var self__ = this;
var _14000__$1 = this;return self__.meta13999;
});})(mults,ensure_mult))
;
cljs.core.async.t13998.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_14000,meta13999__$1){var self__ = this;
var _14000__$1 = this;return (new cljs.core.async.t13998(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13999__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t13998 = ((function (mults,ensure_mult){
return (function __GT_t13998(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13999){return (new cljs.core.async.t13998(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13999));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t13998(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6192__auto___14122 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_14074){var state_val_14075 = (state_14074[1]);if((state_val_14075 === 1))
{var state_14074__$1 = state_14074;var statearr_14076_14123 = state_14074__$1;(statearr_14076_14123[2] = null);
(statearr_14076_14123[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14075 === 2))
{var state_14074__$1 = state_14074;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14074__$1,4,ch);
} else
{if((state_val_14075 === 3))
{var inst_14072 = (state_14074[2]);var state_14074__$1 = state_14074;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14074__$1,inst_14072);
} else
{if((state_val_14075 === 4))
{var inst_14003 = (state_14074[7]);var inst_14003__$1 = (state_14074[2]);var inst_14004 = (inst_14003__$1 == null);var state_14074__$1 = (function (){var statearr_14077 = state_14074;(statearr_14077[7] = inst_14003__$1);
return statearr_14077;
})();if(cljs.core.truth_(inst_14004))
{var statearr_14078_14124 = state_14074__$1;(statearr_14078_14124[1] = 5);
} else
{var statearr_14079_14125 = state_14074__$1;(statearr_14079_14125[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14075 === 5))
{var inst_14010 = cljs.core.deref.call(null,mults);var inst_14011 = cljs.core.vals.call(null,inst_14010);var inst_14012 = cljs.core.seq.call(null,inst_14011);var inst_14013 = inst_14012;var inst_14014 = null;var inst_14015 = 0;var inst_14016 = 0;var state_14074__$1 = (function (){var statearr_14080 = state_14074;(statearr_14080[8] = inst_14016);
(statearr_14080[9] = inst_14015);
(statearr_14080[10] = inst_14013);
(statearr_14080[11] = inst_14014);
return statearr_14080;
})();var statearr_14081_14126 = state_14074__$1;(statearr_14081_14126[2] = null);
(statearr_14081_14126[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14075 === 6))
{var inst_14003 = (state_14074[7]);var inst_14051 = (state_14074[12]);var inst_14053 = (state_14074[13]);var inst_14051__$1 = topic_fn.call(null,inst_14003);var inst_14052 = cljs.core.deref.call(null,mults);var inst_14053__$1 = cljs.core.get.call(null,inst_14052,inst_14051__$1);var state_14074__$1 = (function (){var statearr_14082 = state_14074;(statearr_14082[12] = inst_14051__$1);
(statearr_14082[13] = inst_14053__$1);
return statearr_14082;
})();if(cljs.core.truth_(inst_14053__$1))
{var statearr_14083_14127 = state_14074__$1;(statearr_14083_14127[1] = 19);
} else
{var statearr_14084_14128 = state_14074__$1;(statearr_14084_14128[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14075 === 7))
{var inst_14070 = (state_14074[2]);var state_14074__$1 = state_14074;var statearr_14085_14129 = state_14074__$1;(statearr_14085_14129[2] = inst_14070);
(statearr_14085_14129[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14075 === 8))
{var inst_14016 = (state_14074[8]);var inst_14015 = (state_14074[9]);var inst_14018 = (inst_14016 < inst_14015);var inst_14019 = inst_14018;var state_14074__$1 = state_14074;if(cljs.core.truth_(inst_14019))
{var statearr_14089_14130 = state_14074__$1;(statearr_14089_14130[1] = 10);
} else
{var statearr_14090_14131 = state_14074__$1;(statearr_14090_14131[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14075 === 9))
{var inst_14049 = (state_14074[2]);var state_14074__$1 = state_14074;var statearr_14091_14132 = state_14074__$1;(statearr_14091_14132[2] = inst_14049);
(statearr_14091_14132[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14075 === 10))
{var inst_14016 = (state_14074[8]);var inst_14015 = (state_14074[9]);var inst_14013 = (state_14074[10]);var inst_14014 = (state_14074[11]);var inst_14021 = cljs.core._nth.call(null,inst_14014,inst_14016);var inst_14022 = cljs.core.async.muxch_STAR_.call(null,inst_14021);var inst_14023 = cljs.core.async.close_BANG_.call(null,inst_14022);var inst_14024 = (inst_14016 + 1);var tmp14086 = inst_14015;var tmp14087 = inst_14013;var tmp14088 = inst_14014;var inst_14013__$1 = tmp14087;var inst_14014__$1 = tmp14088;var inst_14015__$1 = tmp14086;var inst_14016__$1 = inst_14024;var state_14074__$1 = (function (){var statearr_14092 = state_14074;(statearr_14092[8] = inst_14016__$1);
(statearr_14092[9] = inst_14015__$1);
(statearr_14092[10] = inst_14013__$1);
(statearr_14092[11] = inst_14014__$1);
(statearr_14092[14] = inst_14023);
return statearr_14092;
})();var statearr_14093_14133 = state_14074__$1;(statearr_14093_14133[2] = null);
(statearr_14093_14133[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14075 === 11))
{var inst_14013 = (state_14074[10]);var inst_14027 = (state_14074[15]);var inst_14027__$1 = cljs.core.seq.call(null,inst_14013);var state_14074__$1 = (function (){var statearr_14094 = state_14074;(statearr_14094[15] = inst_14027__$1);
return statearr_14094;
})();if(inst_14027__$1)
{var statearr_14095_14134 = state_14074__$1;(statearr_14095_14134[1] = 13);
} else
{var statearr_14096_14135 = state_14074__$1;(statearr_14096_14135[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14075 === 12))
{var inst_14047 = (state_14074[2]);var state_14074__$1 = state_14074;var statearr_14097_14136 = state_14074__$1;(statearr_14097_14136[2] = inst_14047);
(statearr_14097_14136[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14075 === 13))
{var inst_14027 = (state_14074[15]);var inst_14029 = cljs.core.chunked_seq_QMARK_.call(null,inst_14027);var state_14074__$1 = state_14074;if(inst_14029)
{var statearr_14098_14137 = state_14074__$1;(statearr_14098_14137[1] = 16);
} else
{var statearr_14099_14138 = state_14074__$1;(statearr_14099_14138[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14075 === 14))
{var state_14074__$1 = state_14074;var statearr_14100_14139 = state_14074__$1;(statearr_14100_14139[2] = null);
(statearr_14100_14139[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14075 === 15))
{var inst_14045 = (state_14074[2]);var state_14074__$1 = state_14074;var statearr_14101_14140 = state_14074__$1;(statearr_14101_14140[2] = inst_14045);
(statearr_14101_14140[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14075 === 16))
{var inst_14027 = (state_14074[15]);var inst_14031 = cljs.core.chunk_first.call(null,inst_14027);var inst_14032 = cljs.core.chunk_rest.call(null,inst_14027);var inst_14033 = cljs.core.count.call(null,inst_14031);var inst_14013 = inst_14032;var inst_14014 = inst_14031;var inst_14015 = inst_14033;var inst_14016 = 0;var state_14074__$1 = (function (){var statearr_14102 = state_14074;(statearr_14102[8] = inst_14016);
(statearr_14102[9] = inst_14015);
(statearr_14102[10] = inst_14013);
(statearr_14102[11] = inst_14014);
return statearr_14102;
})();var statearr_14103_14141 = state_14074__$1;(statearr_14103_14141[2] = null);
(statearr_14103_14141[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14075 === 17))
{var inst_14027 = (state_14074[15]);var inst_14036 = cljs.core.first.call(null,inst_14027);var inst_14037 = cljs.core.async.muxch_STAR_.call(null,inst_14036);var inst_14038 = cljs.core.async.close_BANG_.call(null,inst_14037);var inst_14039 = cljs.core.next.call(null,inst_14027);var inst_14013 = inst_14039;var inst_14014 = null;var inst_14015 = 0;var inst_14016 = 0;var state_14074__$1 = (function (){var statearr_14104 = state_14074;(statearr_14104[8] = inst_14016);
(statearr_14104[9] = inst_14015);
(statearr_14104[10] = inst_14013);
(statearr_14104[11] = inst_14014);
(statearr_14104[16] = inst_14038);
return statearr_14104;
})();var statearr_14105_14142 = state_14074__$1;(statearr_14105_14142[2] = null);
(statearr_14105_14142[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14075 === 18))
{var inst_14042 = (state_14074[2]);var state_14074__$1 = state_14074;var statearr_14106_14143 = state_14074__$1;(statearr_14106_14143[2] = inst_14042);
(statearr_14106_14143[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14075 === 19))
{var state_14074__$1 = state_14074;var statearr_14107_14144 = state_14074__$1;(statearr_14107_14144[2] = null);
(statearr_14107_14144[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14075 === 20))
{var state_14074__$1 = state_14074;var statearr_14108_14145 = state_14074__$1;(statearr_14108_14145[2] = null);
(statearr_14108_14145[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14075 === 21))
{var inst_14067 = (state_14074[2]);var state_14074__$1 = (function (){var statearr_14109 = state_14074;(statearr_14109[17] = inst_14067);
return statearr_14109;
})();var statearr_14110_14146 = state_14074__$1;(statearr_14110_14146[2] = null);
(statearr_14110_14146[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14075 === 22))
{var inst_14064 = (state_14074[2]);var state_14074__$1 = state_14074;var statearr_14111_14147 = state_14074__$1;(statearr_14111_14147[2] = inst_14064);
(statearr_14111_14147[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14075 === 23))
{var inst_14051 = (state_14074[12]);var inst_14055 = (state_14074[2]);var inst_14056 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_14051);var state_14074__$1 = (function (){var statearr_14112 = state_14074;(statearr_14112[18] = inst_14055);
return statearr_14112;
})();var statearr_14113_14148 = state_14074__$1;(statearr_14113_14148[2] = inst_14056);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14074__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14075 === 24))
{var inst_14003 = (state_14074[7]);var inst_14053 = (state_14074[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14074,23,Object,null,22);var inst_14060 = cljs.core.async.muxch_STAR_.call(null,inst_14053);var state_14074__$1 = state_14074;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14074__$1,25,inst_14060,inst_14003);
} else
{if((state_val_14075 === 25))
{var inst_14062 = (state_14074[2]);var state_14074__$1 = state_14074;var statearr_14114_14149 = state_14074__$1;(statearr_14114_14149[2] = inst_14062);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14074__$1);
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
var state_machine__6178__auto____0 = (function (){var statearr_14118 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14118[0] = state_machine__6178__auto__);
(statearr_14118[1] = 1);
return statearr_14118;
});
var state_machine__6178__auto____1 = (function (state_14074){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_14074);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e14119){if((e14119 instanceof Object))
{var ex__6181__auto__ = e14119;var statearr_14120_14150 = state_14074;(statearr_14120_14150[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14074);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14119;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14151 = state_14074;
state_14074 = G__14151;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_14074){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_14074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_14121 = f__6193__auto__.call(null);(statearr_14121[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___14122);
return statearr_14121;
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
,cljs.core.range.call(null,cnt));var c__6192__auto___14288 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_14258){var state_val_14259 = (state_14258[1]);if((state_val_14259 === 1))
{var state_14258__$1 = state_14258;var statearr_14260_14289 = state_14258__$1;(statearr_14260_14289[2] = null);
(statearr_14260_14289[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14259 === 2))
{var inst_14221 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_14222 = 0;var state_14258__$1 = (function (){var statearr_14261 = state_14258;(statearr_14261[7] = inst_14222);
(statearr_14261[8] = inst_14221);
return statearr_14261;
})();var statearr_14262_14290 = state_14258__$1;(statearr_14262_14290[2] = null);
(statearr_14262_14290[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14259 === 3))
{var inst_14256 = (state_14258[2]);var state_14258__$1 = state_14258;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14258__$1,inst_14256);
} else
{if((state_val_14259 === 4))
{var inst_14222 = (state_14258[7]);var inst_14224 = (inst_14222 < cnt);var state_14258__$1 = state_14258;if(cljs.core.truth_(inst_14224))
{var statearr_14263_14291 = state_14258__$1;(statearr_14263_14291[1] = 6);
} else
{var statearr_14264_14292 = state_14258__$1;(statearr_14264_14292[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14259 === 5))
{var inst_14242 = (state_14258[2]);var state_14258__$1 = (function (){var statearr_14265 = state_14258;(statearr_14265[9] = inst_14242);
return statearr_14265;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14258__$1,12,dchan);
} else
{if((state_val_14259 === 6))
{var state_14258__$1 = state_14258;var statearr_14266_14293 = state_14258__$1;(statearr_14266_14293[2] = null);
(statearr_14266_14293[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14259 === 7))
{var state_14258__$1 = state_14258;var statearr_14267_14294 = state_14258__$1;(statearr_14267_14294[2] = null);
(statearr_14267_14294[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14259 === 8))
{var inst_14240 = (state_14258[2]);var state_14258__$1 = state_14258;var statearr_14268_14295 = state_14258__$1;(statearr_14268_14295[2] = inst_14240);
(statearr_14268_14295[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14259 === 9))
{var inst_14222 = (state_14258[7]);var inst_14235 = (state_14258[2]);var inst_14236 = (inst_14222 + 1);var inst_14222__$1 = inst_14236;var state_14258__$1 = (function (){var statearr_14269 = state_14258;(statearr_14269[7] = inst_14222__$1);
(statearr_14269[10] = inst_14235);
return statearr_14269;
})();var statearr_14270_14296 = state_14258__$1;(statearr_14270_14296[2] = null);
(statearr_14270_14296[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14259 === 10))
{var inst_14226 = (state_14258[2]);var inst_14227 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_14258__$1 = (function (){var statearr_14271 = state_14258;(statearr_14271[11] = inst_14226);
return statearr_14271;
})();var statearr_14272_14297 = state_14258__$1;(statearr_14272_14297[2] = inst_14227);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14258__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14259 === 11))
{var inst_14222 = (state_14258[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14258,10,Object,null,9);var inst_14231 = chs__$1.call(null,inst_14222);var inst_14232 = done.call(null,inst_14222);var inst_14233 = cljs.core.async.take_BANG_.call(null,inst_14231,inst_14232);var state_14258__$1 = state_14258;var statearr_14273_14298 = state_14258__$1;(statearr_14273_14298[2] = inst_14233);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14258__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14259 === 12))
{var inst_14244 = (state_14258[12]);var inst_14244__$1 = (state_14258[2]);var inst_14245 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14244__$1);var state_14258__$1 = (function (){var statearr_14274 = state_14258;(statearr_14274[12] = inst_14244__$1);
return statearr_14274;
})();if(cljs.core.truth_(inst_14245))
{var statearr_14275_14299 = state_14258__$1;(statearr_14275_14299[1] = 13);
} else
{var statearr_14276_14300 = state_14258__$1;(statearr_14276_14300[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14259 === 13))
{var inst_14247 = cljs.core.async.close_BANG_.call(null,out);var state_14258__$1 = state_14258;var statearr_14277_14301 = state_14258__$1;(statearr_14277_14301[2] = inst_14247);
(statearr_14277_14301[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14259 === 14))
{var inst_14244 = (state_14258[12]);var inst_14249 = cljs.core.apply.call(null,f,inst_14244);var state_14258__$1 = state_14258;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14258__$1,16,out,inst_14249);
} else
{if((state_val_14259 === 15))
{var inst_14254 = (state_14258[2]);var state_14258__$1 = state_14258;var statearr_14278_14302 = state_14258__$1;(statearr_14278_14302[2] = inst_14254);
(statearr_14278_14302[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14259 === 16))
{var inst_14251 = (state_14258[2]);var state_14258__$1 = (function (){var statearr_14279 = state_14258;(statearr_14279[13] = inst_14251);
return statearr_14279;
})();var statearr_14280_14303 = state_14258__$1;(statearr_14280_14303[2] = null);
(statearr_14280_14303[1] = 2);
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
var state_machine__6178__auto____0 = (function (){var statearr_14284 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14284[0] = state_machine__6178__auto__);
(statearr_14284[1] = 1);
return statearr_14284;
});
var state_machine__6178__auto____1 = (function (state_14258){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_14258);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e14285){if((e14285 instanceof Object))
{var ex__6181__auto__ = e14285;var statearr_14286_14304 = state_14258;(statearr_14286_14304[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14258);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14285;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14305 = state_14258;
state_14258 = G__14305;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_14258){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_14258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_14287 = f__6193__auto__.call(null);(statearr_14287[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___14288);
return statearr_14287;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6192__auto___14413 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_14389){var state_val_14390 = (state_14389[1]);if((state_val_14390 === 1))
{var inst_14360 = cljs.core.vec.call(null,chs);var inst_14361 = inst_14360;var state_14389__$1 = (function (){var statearr_14391 = state_14389;(statearr_14391[7] = inst_14361);
return statearr_14391;
})();var statearr_14392_14414 = state_14389__$1;(statearr_14392_14414[2] = null);
(statearr_14392_14414[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14390 === 2))
{var inst_14361 = (state_14389[7]);var inst_14363 = cljs.core.count.call(null,inst_14361);var inst_14364 = (inst_14363 > 0);var state_14389__$1 = state_14389;if(cljs.core.truth_(inst_14364))
{var statearr_14393_14415 = state_14389__$1;(statearr_14393_14415[1] = 4);
} else
{var statearr_14394_14416 = state_14389__$1;(statearr_14394_14416[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14390 === 3))
{var inst_14387 = (state_14389[2]);var state_14389__$1 = state_14389;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14389__$1,inst_14387);
} else
{if((state_val_14390 === 4))
{var inst_14361 = (state_14389[7]);var state_14389__$1 = state_14389;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_14389__$1,7,inst_14361);
} else
{if((state_val_14390 === 5))
{var inst_14383 = cljs.core.async.close_BANG_.call(null,out);var state_14389__$1 = state_14389;var statearr_14395_14417 = state_14389__$1;(statearr_14395_14417[2] = inst_14383);
(statearr_14395_14417[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14390 === 6))
{var inst_14385 = (state_14389[2]);var state_14389__$1 = state_14389;var statearr_14396_14418 = state_14389__$1;(statearr_14396_14418[2] = inst_14385);
(statearr_14396_14418[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14390 === 7))
{var inst_14369 = (state_14389[8]);var inst_14368 = (state_14389[9]);var inst_14368__$1 = (state_14389[2]);var inst_14369__$1 = cljs.core.nth.call(null,inst_14368__$1,0,null);var inst_14370 = cljs.core.nth.call(null,inst_14368__$1,1,null);var inst_14371 = (inst_14369__$1 == null);var state_14389__$1 = (function (){var statearr_14397 = state_14389;(statearr_14397[8] = inst_14369__$1);
(statearr_14397[10] = inst_14370);
(statearr_14397[9] = inst_14368__$1);
return statearr_14397;
})();if(cljs.core.truth_(inst_14371))
{var statearr_14398_14419 = state_14389__$1;(statearr_14398_14419[1] = 8);
} else
{var statearr_14399_14420 = state_14389__$1;(statearr_14399_14420[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14390 === 8))
{var inst_14361 = (state_14389[7]);var inst_14369 = (state_14389[8]);var inst_14370 = (state_14389[10]);var inst_14368 = (state_14389[9]);var inst_14373 = (function (){var c = inst_14370;var v = inst_14369;var vec__14366 = inst_14368;var cs = inst_14361;return ((function (c,v,vec__14366,cs,inst_14361,inst_14369,inst_14370,inst_14368,state_val_14390){
return (function (p1__14306_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__14306_SHARP_);
});
;})(c,v,vec__14366,cs,inst_14361,inst_14369,inst_14370,inst_14368,state_val_14390))
})();var inst_14374 = cljs.core.filterv.call(null,inst_14373,inst_14361);var inst_14361__$1 = inst_14374;var state_14389__$1 = (function (){var statearr_14400 = state_14389;(statearr_14400[7] = inst_14361__$1);
return statearr_14400;
})();var statearr_14401_14421 = state_14389__$1;(statearr_14401_14421[2] = null);
(statearr_14401_14421[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14390 === 9))
{var inst_14369 = (state_14389[8]);var state_14389__$1 = state_14389;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14389__$1,11,out,inst_14369);
} else
{if((state_val_14390 === 10))
{var inst_14381 = (state_14389[2]);var state_14389__$1 = state_14389;var statearr_14403_14422 = state_14389__$1;(statearr_14403_14422[2] = inst_14381);
(statearr_14403_14422[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14390 === 11))
{var inst_14361 = (state_14389[7]);var inst_14378 = (state_14389[2]);var tmp14402 = inst_14361;var inst_14361__$1 = tmp14402;var state_14389__$1 = (function (){var statearr_14404 = state_14389;(statearr_14404[7] = inst_14361__$1);
(statearr_14404[11] = inst_14378);
return statearr_14404;
})();var statearr_14405_14423 = state_14389__$1;(statearr_14405_14423[2] = null);
(statearr_14405_14423[1] = 2);
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
var state_machine__6178__auto____0 = (function (){var statearr_14409 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14409[0] = state_machine__6178__auto__);
(statearr_14409[1] = 1);
return statearr_14409;
});
var state_machine__6178__auto____1 = (function (state_14389){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_14389);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e14410){if((e14410 instanceof Object))
{var ex__6181__auto__ = e14410;var statearr_14411_14424 = state_14389;(statearr_14411_14424[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14389);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14410;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14425 = state_14389;
state_14389 = G__14425;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_14389){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_14389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_14412 = f__6193__auto__.call(null);(statearr_14412[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___14413);
return statearr_14412;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6192__auto___14518 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_14495){var state_val_14496 = (state_14495[1]);if((state_val_14496 === 1))
{var inst_14472 = 0;var state_14495__$1 = (function (){var statearr_14497 = state_14495;(statearr_14497[7] = inst_14472);
return statearr_14497;
})();var statearr_14498_14519 = state_14495__$1;(statearr_14498_14519[2] = null);
(statearr_14498_14519[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14496 === 2))
{var inst_14472 = (state_14495[7]);var inst_14474 = (inst_14472 < n);var state_14495__$1 = state_14495;if(cljs.core.truth_(inst_14474))
{var statearr_14499_14520 = state_14495__$1;(statearr_14499_14520[1] = 4);
} else
{var statearr_14500_14521 = state_14495__$1;(statearr_14500_14521[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14496 === 3))
{var inst_14492 = (state_14495[2]);var inst_14493 = cljs.core.async.close_BANG_.call(null,out);var state_14495__$1 = (function (){var statearr_14501 = state_14495;(statearr_14501[8] = inst_14492);
return statearr_14501;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14495__$1,inst_14493);
} else
{if((state_val_14496 === 4))
{var state_14495__$1 = state_14495;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14495__$1,7,ch);
} else
{if((state_val_14496 === 5))
{var state_14495__$1 = state_14495;var statearr_14502_14522 = state_14495__$1;(statearr_14502_14522[2] = null);
(statearr_14502_14522[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14496 === 6))
{var inst_14490 = (state_14495[2]);var state_14495__$1 = state_14495;var statearr_14503_14523 = state_14495__$1;(statearr_14503_14523[2] = inst_14490);
(statearr_14503_14523[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14496 === 7))
{var inst_14477 = (state_14495[9]);var inst_14477__$1 = (state_14495[2]);var inst_14478 = (inst_14477__$1 == null);var inst_14479 = cljs.core.not.call(null,inst_14478);var state_14495__$1 = (function (){var statearr_14504 = state_14495;(statearr_14504[9] = inst_14477__$1);
return statearr_14504;
})();if(inst_14479)
{var statearr_14505_14524 = state_14495__$1;(statearr_14505_14524[1] = 8);
} else
{var statearr_14506_14525 = state_14495__$1;(statearr_14506_14525[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14496 === 8))
{var inst_14477 = (state_14495[9]);var state_14495__$1 = state_14495;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14495__$1,11,out,inst_14477);
} else
{if((state_val_14496 === 9))
{var state_14495__$1 = state_14495;var statearr_14507_14526 = state_14495__$1;(statearr_14507_14526[2] = null);
(statearr_14507_14526[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14496 === 10))
{var inst_14487 = (state_14495[2]);var state_14495__$1 = state_14495;var statearr_14508_14527 = state_14495__$1;(statearr_14508_14527[2] = inst_14487);
(statearr_14508_14527[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14496 === 11))
{var inst_14472 = (state_14495[7]);var inst_14482 = (state_14495[2]);var inst_14483 = (inst_14472 + 1);var inst_14472__$1 = inst_14483;var state_14495__$1 = (function (){var statearr_14509 = state_14495;(statearr_14509[10] = inst_14482);
(statearr_14509[7] = inst_14472__$1);
return statearr_14509;
})();var statearr_14510_14528 = state_14495__$1;(statearr_14510_14528[2] = null);
(statearr_14510_14528[1] = 2);
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
var state_machine__6178__auto____0 = (function (){var statearr_14514 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14514[0] = state_machine__6178__auto__);
(statearr_14514[1] = 1);
return statearr_14514;
});
var state_machine__6178__auto____1 = (function (state_14495){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_14495);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e14515){if((e14515 instanceof Object))
{var ex__6181__auto__ = e14515;var statearr_14516_14529 = state_14495;(statearr_14516_14529[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14495);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14515;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14530 = state_14495;
state_14495 = G__14530;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_14495){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_14495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_14517 = f__6193__auto__.call(null);(statearr_14517[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___14518);
return statearr_14517;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6192__auto___14627 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_14602){var state_val_14603 = (state_14602[1]);if((state_val_14603 === 1))
{var inst_14579 = null;var state_14602__$1 = (function (){var statearr_14604 = state_14602;(statearr_14604[7] = inst_14579);
return statearr_14604;
})();var statearr_14605_14628 = state_14602__$1;(statearr_14605_14628[2] = null);
(statearr_14605_14628[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14603 === 2))
{var state_14602__$1 = state_14602;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14602__$1,4,ch);
} else
{if((state_val_14603 === 3))
{var inst_14599 = (state_14602[2]);var inst_14600 = cljs.core.async.close_BANG_.call(null,out);var state_14602__$1 = (function (){var statearr_14606 = state_14602;(statearr_14606[8] = inst_14599);
return statearr_14606;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14602__$1,inst_14600);
} else
{if((state_val_14603 === 4))
{var inst_14582 = (state_14602[9]);var inst_14582__$1 = (state_14602[2]);var inst_14583 = (inst_14582__$1 == null);var inst_14584 = cljs.core.not.call(null,inst_14583);var state_14602__$1 = (function (){var statearr_14607 = state_14602;(statearr_14607[9] = inst_14582__$1);
return statearr_14607;
})();if(inst_14584)
{var statearr_14608_14629 = state_14602__$1;(statearr_14608_14629[1] = 5);
} else
{var statearr_14609_14630 = state_14602__$1;(statearr_14609_14630[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14603 === 5))
{var inst_14579 = (state_14602[7]);var inst_14582 = (state_14602[9]);var inst_14586 = cljs.core._EQ_.call(null,inst_14582,inst_14579);var state_14602__$1 = state_14602;if(inst_14586)
{var statearr_14610_14631 = state_14602__$1;(statearr_14610_14631[1] = 8);
} else
{var statearr_14611_14632 = state_14602__$1;(statearr_14611_14632[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14603 === 6))
{var state_14602__$1 = state_14602;var statearr_14613_14633 = state_14602__$1;(statearr_14613_14633[2] = null);
(statearr_14613_14633[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14603 === 7))
{var inst_14597 = (state_14602[2]);var state_14602__$1 = state_14602;var statearr_14614_14634 = state_14602__$1;(statearr_14614_14634[2] = inst_14597);
(statearr_14614_14634[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14603 === 8))
{var inst_14579 = (state_14602[7]);var tmp14612 = inst_14579;var inst_14579__$1 = tmp14612;var state_14602__$1 = (function (){var statearr_14615 = state_14602;(statearr_14615[7] = inst_14579__$1);
return statearr_14615;
})();var statearr_14616_14635 = state_14602__$1;(statearr_14616_14635[2] = null);
(statearr_14616_14635[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14603 === 9))
{var inst_14582 = (state_14602[9]);var state_14602__$1 = state_14602;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14602__$1,11,out,inst_14582);
} else
{if((state_val_14603 === 10))
{var inst_14594 = (state_14602[2]);var state_14602__$1 = state_14602;var statearr_14617_14636 = state_14602__$1;(statearr_14617_14636[2] = inst_14594);
(statearr_14617_14636[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14603 === 11))
{var inst_14582 = (state_14602[9]);var inst_14591 = (state_14602[2]);var inst_14579 = inst_14582;var state_14602__$1 = (function (){var statearr_14618 = state_14602;(statearr_14618[7] = inst_14579);
(statearr_14618[10] = inst_14591);
return statearr_14618;
})();var statearr_14619_14637 = state_14602__$1;(statearr_14619_14637[2] = null);
(statearr_14619_14637[1] = 2);
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
var state_machine__6178__auto____0 = (function (){var statearr_14623 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14623[0] = state_machine__6178__auto__);
(statearr_14623[1] = 1);
return statearr_14623;
});
var state_machine__6178__auto____1 = (function (state_14602){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_14602);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e14624){if((e14624 instanceof Object))
{var ex__6181__auto__ = e14624;var statearr_14625_14638 = state_14602;(statearr_14625_14638[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14602);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14624;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14639 = state_14602;
state_14602 = G__14639;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_14602){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_14602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_14626 = f__6193__auto__.call(null);(statearr_14626[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___14627);
return statearr_14626;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6192__auto___14774 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_14744){var state_val_14745 = (state_14744[1]);if((state_val_14745 === 1))
{var inst_14707 = (new Array(n));var inst_14708 = inst_14707;var inst_14709 = 0;var state_14744__$1 = (function (){var statearr_14746 = state_14744;(statearr_14746[7] = inst_14708);
(statearr_14746[8] = inst_14709);
return statearr_14746;
})();var statearr_14747_14775 = state_14744__$1;(statearr_14747_14775[2] = null);
(statearr_14747_14775[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14745 === 2))
{var state_14744__$1 = state_14744;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14744__$1,4,ch);
} else
{if((state_val_14745 === 3))
{var inst_14742 = (state_14744[2]);var state_14744__$1 = state_14744;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14744__$1,inst_14742);
} else
{if((state_val_14745 === 4))
{var inst_14712 = (state_14744[9]);var inst_14712__$1 = (state_14744[2]);var inst_14713 = (inst_14712__$1 == null);var inst_14714 = cljs.core.not.call(null,inst_14713);var state_14744__$1 = (function (){var statearr_14748 = state_14744;(statearr_14748[9] = inst_14712__$1);
return statearr_14748;
})();if(inst_14714)
{var statearr_14749_14776 = state_14744__$1;(statearr_14749_14776[1] = 5);
} else
{var statearr_14750_14777 = state_14744__$1;(statearr_14750_14777[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14745 === 5))
{var inst_14708 = (state_14744[7]);var inst_14712 = (state_14744[9]);var inst_14709 = (state_14744[8]);var inst_14717 = (state_14744[10]);var inst_14716 = (inst_14708[inst_14709] = inst_14712);var inst_14717__$1 = (inst_14709 + 1);var inst_14718 = (inst_14717__$1 < n);var state_14744__$1 = (function (){var statearr_14751 = state_14744;(statearr_14751[10] = inst_14717__$1);
(statearr_14751[11] = inst_14716);
return statearr_14751;
})();if(cljs.core.truth_(inst_14718))
{var statearr_14752_14778 = state_14744__$1;(statearr_14752_14778[1] = 8);
} else
{var statearr_14753_14779 = state_14744__$1;(statearr_14753_14779[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14745 === 6))
{var inst_14709 = (state_14744[8]);var inst_14730 = (inst_14709 > 0);var state_14744__$1 = state_14744;if(cljs.core.truth_(inst_14730))
{var statearr_14755_14780 = state_14744__$1;(statearr_14755_14780[1] = 12);
} else
{var statearr_14756_14781 = state_14744__$1;(statearr_14756_14781[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14745 === 7))
{var inst_14740 = (state_14744[2]);var state_14744__$1 = state_14744;var statearr_14757_14782 = state_14744__$1;(statearr_14757_14782[2] = inst_14740);
(statearr_14757_14782[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14745 === 8))
{var inst_14708 = (state_14744[7]);var inst_14717 = (state_14744[10]);var tmp14754 = inst_14708;var inst_14708__$1 = tmp14754;var inst_14709 = inst_14717;var state_14744__$1 = (function (){var statearr_14758 = state_14744;(statearr_14758[7] = inst_14708__$1);
(statearr_14758[8] = inst_14709);
return statearr_14758;
})();var statearr_14759_14783 = state_14744__$1;(statearr_14759_14783[2] = null);
(statearr_14759_14783[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14745 === 9))
{var inst_14708 = (state_14744[7]);var inst_14722 = cljs.core.vec.call(null,inst_14708);var state_14744__$1 = state_14744;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14744__$1,11,out,inst_14722);
} else
{if((state_val_14745 === 10))
{var inst_14728 = (state_14744[2]);var state_14744__$1 = state_14744;var statearr_14760_14784 = state_14744__$1;(statearr_14760_14784[2] = inst_14728);
(statearr_14760_14784[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14745 === 11))
{var inst_14724 = (state_14744[2]);var inst_14725 = (new Array(n));var inst_14708 = inst_14725;var inst_14709 = 0;var state_14744__$1 = (function (){var statearr_14761 = state_14744;(statearr_14761[12] = inst_14724);
(statearr_14761[7] = inst_14708);
(statearr_14761[8] = inst_14709);
return statearr_14761;
})();var statearr_14762_14785 = state_14744__$1;(statearr_14762_14785[2] = null);
(statearr_14762_14785[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14745 === 12))
{var inst_14708 = (state_14744[7]);var inst_14732 = cljs.core.vec.call(null,inst_14708);var state_14744__$1 = state_14744;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14744__$1,15,out,inst_14732);
} else
{if((state_val_14745 === 13))
{var state_14744__$1 = state_14744;var statearr_14763_14786 = state_14744__$1;(statearr_14763_14786[2] = null);
(statearr_14763_14786[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14745 === 14))
{var inst_14737 = (state_14744[2]);var inst_14738 = cljs.core.async.close_BANG_.call(null,out);var state_14744__$1 = (function (){var statearr_14764 = state_14744;(statearr_14764[13] = inst_14737);
return statearr_14764;
})();var statearr_14765_14787 = state_14744__$1;(statearr_14765_14787[2] = inst_14738);
(statearr_14765_14787[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14745 === 15))
{var inst_14734 = (state_14744[2]);var state_14744__$1 = state_14744;var statearr_14766_14788 = state_14744__$1;(statearr_14766_14788[2] = inst_14734);
(statearr_14766_14788[1] = 14);
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
var state_machine__6178__auto____0 = (function (){var statearr_14770 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14770[0] = state_machine__6178__auto__);
(statearr_14770[1] = 1);
return statearr_14770;
});
var state_machine__6178__auto____1 = (function (state_14744){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_14744);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e14771){if((e14771 instanceof Object))
{var ex__6181__auto__ = e14771;var statearr_14772_14789 = state_14744;(statearr_14772_14789[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14744);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14771;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14790 = state_14744;
state_14744 = G__14790;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_14744){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_14744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_14773 = f__6193__auto__.call(null);(statearr_14773[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___14774);
return statearr_14773;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6192__auto___14933 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_14903){var state_val_14904 = (state_14903[1]);if((state_val_14904 === 1))
{var inst_14862 = [];var inst_14863 = inst_14862;var inst_14864 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_14903__$1 = (function (){var statearr_14905 = state_14903;(statearr_14905[7] = inst_14864);
(statearr_14905[8] = inst_14863);
return statearr_14905;
})();var statearr_14906_14934 = state_14903__$1;(statearr_14906_14934[2] = null);
(statearr_14906_14934[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14904 === 2))
{var state_14903__$1 = state_14903;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14903__$1,4,ch);
} else
{if((state_val_14904 === 3))
{var inst_14901 = (state_14903[2]);var state_14903__$1 = state_14903;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14903__$1,inst_14901);
} else
{if((state_val_14904 === 4))
{var inst_14867 = (state_14903[9]);var inst_14867__$1 = (state_14903[2]);var inst_14868 = (inst_14867__$1 == null);var inst_14869 = cljs.core.not.call(null,inst_14868);var state_14903__$1 = (function (){var statearr_14907 = state_14903;(statearr_14907[9] = inst_14867__$1);
return statearr_14907;
})();if(inst_14869)
{var statearr_14908_14935 = state_14903__$1;(statearr_14908_14935[1] = 5);
} else
{var statearr_14909_14936 = state_14903__$1;(statearr_14909_14936[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14904 === 5))
{var inst_14867 = (state_14903[9]);var inst_14871 = (state_14903[10]);var inst_14864 = (state_14903[7]);var inst_14871__$1 = f.call(null,inst_14867);var inst_14872 = cljs.core._EQ_.call(null,inst_14871__$1,inst_14864);var inst_14873 = cljs.core.keyword_identical_QMARK_.call(null,inst_14864,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_14874 = (inst_14872) || (inst_14873);var state_14903__$1 = (function (){var statearr_14910 = state_14903;(statearr_14910[10] = inst_14871__$1);
return statearr_14910;
})();if(cljs.core.truth_(inst_14874))
{var statearr_14911_14937 = state_14903__$1;(statearr_14911_14937[1] = 8);
} else
{var statearr_14912_14938 = state_14903__$1;(statearr_14912_14938[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14904 === 6))
{var inst_14863 = (state_14903[8]);var inst_14888 = inst_14863.length;var inst_14889 = (inst_14888 > 0);var state_14903__$1 = state_14903;if(cljs.core.truth_(inst_14889))
{var statearr_14914_14939 = state_14903__$1;(statearr_14914_14939[1] = 12);
} else
{var statearr_14915_14940 = state_14903__$1;(statearr_14915_14940[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14904 === 7))
{var inst_14899 = (state_14903[2]);var state_14903__$1 = state_14903;var statearr_14916_14941 = state_14903__$1;(statearr_14916_14941[2] = inst_14899);
(statearr_14916_14941[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14904 === 8))
{var inst_14867 = (state_14903[9]);var inst_14871 = (state_14903[10]);var inst_14863 = (state_14903[8]);var inst_14876 = inst_14863.push(inst_14867);var tmp14913 = inst_14863;var inst_14863__$1 = tmp14913;var inst_14864 = inst_14871;var state_14903__$1 = (function (){var statearr_14917 = state_14903;(statearr_14917[11] = inst_14876);
(statearr_14917[7] = inst_14864);
(statearr_14917[8] = inst_14863__$1);
return statearr_14917;
})();var statearr_14918_14942 = state_14903__$1;(statearr_14918_14942[2] = null);
(statearr_14918_14942[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14904 === 9))
{var inst_14863 = (state_14903[8]);var inst_14879 = cljs.core.vec.call(null,inst_14863);var state_14903__$1 = state_14903;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14903__$1,11,out,inst_14879);
} else
{if((state_val_14904 === 10))
{var inst_14886 = (state_14903[2]);var state_14903__$1 = state_14903;var statearr_14919_14943 = state_14903__$1;(statearr_14919_14943[2] = inst_14886);
(statearr_14919_14943[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14904 === 11))
{var inst_14867 = (state_14903[9]);var inst_14871 = (state_14903[10]);var inst_14881 = (state_14903[2]);var inst_14882 = [];var inst_14883 = inst_14882.push(inst_14867);var inst_14863 = inst_14882;var inst_14864 = inst_14871;var state_14903__$1 = (function (){var statearr_14920 = state_14903;(statearr_14920[12] = inst_14883);
(statearr_14920[13] = inst_14881);
(statearr_14920[7] = inst_14864);
(statearr_14920[8] = inst_14863);
return statearr_14920;
})();var statearr_14921_14944 = state_14903__$1;(statearr_14921_14944[2] = null);
(statearr_14921_14944[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14904 === 12))
{var inst_14863 = (state_14903[8]);var inst_14891 = cljs.core.vec.call(null,inst_14863);var state_14903__$1 = state_14903;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14903__$1,15,out,inst_14891);
} else
{if((state_val_14904 === 13))
{var state_14903__$1 = state_14903;var statearr_14922_14945 = state_14903__$1;(statearr_14922_14945[2] = null);
(statearr_14922_14945[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14904 === 14))
{var inst_14896 = (state_14903[2]);var inst_14897 = cljs.core.async.close_BANG_.call(null,out);var state_14903__$1 = (function (){var statearr_14923 = state_14903;(statearr_14923[14] = inst_14896);
return statearr_14923;
})();var statearr_14924_14946 = state_14903__$1;(statearr_14924_14946[2] = inst_14897);
(statearr_14924_14946[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14904 === 15))
{var inst_14893 = (state_14903[2]);var state_14903__$1 = state_14903;var statearr_14925_14947 = state_14903__$1;(statearr_14925_14947[2] = inst_14893);
(statearr_14925_14947[1] = 14);
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
var state_machine__6178__auto____0 = (function (){var statearr_14929 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14929[0] = state_machine__6178__auto__);
(statearr_14929[1] = 1);
return statearr_14929;
});
var state_machine__6178__auto____1 = (function (state_14903){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_14903);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e14930){if((e14930 instanceof Object))
{var ex__6181__auto__ = e14930;var statearr_14931_14948 = state_14903;(statearr_14931_14948[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14903);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14930;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14949 = state_14903;
state_14903 = G__14949;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_14903){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_14903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_14932 = f__6193__auto__.call(null);(statearr_14932[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___14933);
return statearr_14932;
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