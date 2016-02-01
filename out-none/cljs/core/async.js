// Compiled by ClojureScript 1.7.228 {:target :nodejs}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args8714 = [];
var len__7214__auto___8720 = arguments.length;
var i__7215__auto___8721 = (0);
while(true){
if((i__7215__auto___8721 < len__7214__auto___8720)){
args8714.push((arguments[i__7215__auto___8721]));

var G__8722 = (i__7215__auto___8721 + (1));
i__7215__auto___8721 = G__8722;
continue;
} else {
}
break;
}

var G__8716 = args8714.length;
switch (G__8716) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8714.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async8717 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8717 = (function (f,blockable,meta8718){
this.f = f;
this.blockable = blockable;
this.meta8718 = meta8718;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async8717.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8719,meta8718__$1){
var self__ = this;
var _8719__$1 = this;
return (new cljs.core.async.t_cljs$core$async8717(self__.f,self__.blockable,meta8718__$1));
});

cljs.core.async.t_cljs$core$async8717.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8719){
var self__ = this;
var _8719__$1 = this;
return self__.meta8718;
});

cljs.core.async.t_cljs$core$async8717.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async8717.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async8717.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async8717.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async8717.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta8718","meta8718",-749164987,null)], null);
});

cljs.core.async.t_cljs$core$async8717.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8717.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8717";

cljs.core.async.t_cljs$core$async8717.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async8717");
});

cljs.core.async.__GT_t_cljs$core$async8717 = (function cljs$core$async$__GT_t_cljs$core$async8717(f__$1,blockable__$1,meta8718){
return (new cljs.core.async.t_cljs$core$async8717(f__$1,blockable__$1,meta8718));
});

}

return (new cljs.core.async.t_cljs$core$async8717(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args8726 = [];
var len__7214__auto___8729 = arguments.length;
var i__7215__auto___8730 = (0);
while(true){
if((i__7215__auto___8730 < len__7214__auto___8729)){
args8726.push((arguments[i__7215__auto___8730]));

var G__8731 = (i__7215__auto___8730 + (1));
i__7215__auto___8730 = G__8731;
continue;
} else {
}
break;
}

var G__8728 = args8726.length;
switch (G__8728) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8726.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args8733 = [];
var len__7214__auto___8736 = arguments.length;
var i__7215__auto___8737 = (0);
while(true){
if((i__7215__auto___8737 < len__7214__auto___8736)){
args8733.push((arguments[i__7215__auto___8737]));

var G__8738 = (i__7215__auto___8737 + (1));
i__7215__auto___8737 = G__8738;
continue;
} else {
}
break;
}

var G__8735 = args8733.length;
switch (G__8735) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8733.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args8740 = [];
var len__7214__auto___8743 = arguments.length;
var i__7215__auto___8744 = (0);
while(true){
if((i__7215__auto___8744 < len__7214__auto___8743)){
args8740.push((arguments[i__7215__auto___8744]));

var G__8745 = (i__7215__auto___8744 + (1));
i__7215__auto___8744 = G__8745;
continue;
} else {
}
break;
}

var G__8742 = args8740.length;
switch (G__8742) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8740.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_8747 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_8747);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_8747,ret){
return (function (){
return fn1.call(null,val_8747);
});})(val_8747,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args8748 = [];
var len__7214__auto___8751 = arguments.length;
var i__7215__auto___8752 = (0);
while(true){
if((i__7215__auto___8752 < len__7214__auto___8751)){
args8748.push((arguments[i__7215__auto___8752]));

var G__8753 = (i__7215__auto___8752 + (1));
i__7215__auto___8752 = G__8753;
continue;
} else {
}
break;
}

var G__8750 = args8748.length;
switch (G__8750) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8748.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__7059__auto___8755 = n;
var x_8756 = (0);
while(true){
if((x_8756 < n__7059__auto___8755)){
(a[x_8756] = (0));

var G__8757 = (x_8756 + (1));
x_8756 = G__8757;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__8758 = (i + (1));
i = G__8758;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async8762 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8762 = (function (alt_flag,flag,meta8763){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta8763 = meta8763;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async8762.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_8764,meta8763__$1){
var self__ = this;
var _8764__$1 = this;
return (new cljs.core.async.t_cljs$core$async8762(self__.alt_flag,self__.flag,meta8763__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async8762.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_8764){
var self__ = this;
var _8764__$1 = this;
return self__.meta8763;
});})(flag))
;

cljs.core.async.t_cljs$core$async8762.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async8762.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async8762.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async8762.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async8762.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta8763","meta8763",962030703,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async8762.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8762.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8762";

cljs.core.async.t_cljs$core$async8762.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async8762");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async8762 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async8762(alt_flag__$1,flag__$1,meta8763){
return (new cljs.core.async.t_cljs$core$async8762(alt_flag__$1,flag__$1,meta8763));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async8762(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async8768 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8768 = (function (alt_handler,flag,cb,meta8769){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta8769 = meta8769;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async8768.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8770,meta8769__$1){
var self__ = this;
var _8770__$1 = this;
return (new cljs.core.async.t_cljs$core$async8768(self__.alt_handler,self__.flag,self__.cb,meta8769__$1));
});

cljs.core.async.t_cljs$core$async8768.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8770){
var self__ = this;
var _8770__$1 = this;
return self__.meta8769;
});

cljs.core.async.t_cljs$core$async8768.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async8768.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async8768.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async8768.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async8768.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta8769","meta8769",650543606,null)], null);
});

cljs.core.async.t_cljs$core$async8768.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8768.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8768";

cljs.core.async.t_cljs$core$async8768.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async8768");
});

cljs.core.async.__GT_t_cljs$core$async8768 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async8768(alt_handler__$1,flag__$1,cb__$1,meta8769){
return (new cljs.core.async.t_cljs$core$async8768(alt_handler__$1,flag__$1,cb__$1,meta8769));
});

}

return (new cljs.core.async.t_cljs$core$async8768(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__8771_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__8771_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__8772_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__8772_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__6156__auto__ = wport;
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return port;
}
})()], null));
} else {
var G__8773 = (i + (1));
i = G__8773;
continue;
}
} else {
return null;
}
break;
}
})();
var or__6156__auto__ = ret;
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__6144__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__6144__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__6144__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__7221__auto__ = [];
var len__7214__auto___8779 = arguments.length;
var i__7215__auto___8780 = (0);
while(true){
if((i__7215__auto___8780 < len__7214__auto___8779)){
args__7221__auto__.push((arguments[i__7215__auto___8780]));

var G__8781 = (i__7215__auto___8780 + (1));
i__7215__auto___8780 = G__8781;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((1) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7222__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__8776){
var map__8777 = p__8776;
var map__8777__$1 = ((((!((map__8777 == null)))?((((map__8777.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8777.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8777):map__8777);
var opts = map__8777__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq8774){
var G__8775 = cljs.core.first.call(null,seq8774);
var seq8774__$1 = cljs.core.next.call(null,seq8774);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8775,seq8774__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args8782 = [];
var len__7214__auto___8832 = arguments.length;
var i__7215__auto___8833 = (0);
while(true){
if((i__7215__auto___8833 < len__7214__auto___8832)){
args8782.push((arguments[i__7215__auto___8833]));

var G__8834 = (i__7215__auto___8833 + (1));
i__7215__auto___8833 = G__8834;
continue;
} else {
}
break;
}

var G__8784 = args8782.length;
switch (G__8784) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8782.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__8669__auto___8836 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8669__auto___8836){
return (function (){
var f__8670__auto__ = (function (){var switch__8557__auto__ = ((function (c__8669__auto___8836){
return (function (state_8808){
var state_val_8809 = (state_8808[(1)]);
if((state_val_8809 === (7))){
var inst_8804 = (state_8808[(2)]);
var state_8808__$1 = state_8808;
var statearr_8810_8837 = state_8808__$1;
(statearr_8810_8837[(2)] = inst_8804);

(statearr_8810_8837[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8809 === (1))){
var state_8808__$1 = state_8808;
var statearr_8811_8838 = state_8808__$1;
(statearr_8811_8838[(2)] = null);

(statearr_8811_8838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8809 === (4))){
var inst_8787 = (state_8808[(7)]);
var inst_8787__$1 = (state_8808[(2)]);
var inst_8788 = (inst_8787__$1 == null);
var state_8808__$1 = (function (){var statearr_8812 = state_8808;
(statearr_8812[(7)] = inst_8787__$1);

return statearr_8812;
})();
if(cljs.core.truth_(inst_8788)){
var statearr_8813_8839 = state_8808__$1;
(statearr_8813_8839[(1)] = (5));

} else {
var statearr_8814_8840 = state_8808__$1;
(statearr_8814_8840[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8809 === (13))){
var state_8808__$1 = state_8808;
var statearr_8815_8841 = state_8808__$1;
(statearr_8815_8841[(2)] = null);

(statearr_8815_8841[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8809 === (6))){
var inst_8787 = (state_8808[(7)]);
var state_8808__$1 = state_8808;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8808__$1,(11),to,inst_8787);
} else {
if((state_val_8809 === (3))){
var inst_8806 = (state_8808[(2)]);
var state_8808__$1 = state_8808;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8808__$1,inst_8806);
} else {
if((state_val_8809 === (12))){
var state_8808__$1 = state_8808;
var statearr_8816_8842 = state_8808__$1;
(statearr_8816_8842[(2)] = null);

(statearr_8816_8842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8809 === (2))){
var state_8808__$1 = state_8808;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8808__$1,(4),from);
} else {
if((state_val_8809 === (11))){
var inst_8797 = (state_8808[(2)]);
var state_8808__$1 = state_8808;
if(cljs.core.truth_(inst_8797)){
var statearr_8817_8843 = state_8808__$1;
(statearr_8817_8843[(1)] = (12));

} else {
var statearr_8818_8844 = state_8808__$1;
(statearr_8818_8844[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8809 === (9))){
var state_8808__$1 = state_8808;
var statearr_8819_8845 = state_8808__$1;
(statearr_8819_8845[(2)] = null);

(statearr_8819_8845[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8809 === (5))){
var state_8808__$1 = state_8808;
if(cljs.core.truth_(close_QMARK_)){
var statearr_8820_8846 = state_8808__$1;
(statearr_8820_8846[(1)] = (8));

} else {
var statearr_8821_8847 = state_8808__$1;
(statearr_8821_8847[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8809 === (14))){
var inst_8802 = (state_8808[(2)]);
var state_8808__$1 = state_8808;
var statearr_8822_8848 = state_8808__$1;
(statearr_8822_8848[(2)] = inst_8802);

(statearr_8822_8848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8809 === (10))){
var inst_8794 = (state_8808[(2)]);
var state_8808__$1 = state_8808;
var statearr_8823_8849 = state_8808__$1;
(statearr_8823_8849[(2)] = inst_8794);

(statearr_8823_8849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8809 === (8))){
var inst_8791 = cljs.core.async.close_BANG_.call(null,to);
var state_8808__$1 = state_8808;
var statearr_8824_8850 = state_8808__$1;
(statearr_8824_8850[(2)] = inst_8791);

(statearr_8824_8850[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8669__auto___8836))
;
return ((function (switch__8557__auto__,c__8669__auto___8836){
return (function() {
var cljs$core$async$state_machine__8558__auto__ = null;
var cljs$core$async$state_machine__8558__auto____0 = (function (){
var statearr_8828 = [null,null,null,null,null,null,null,null];
(statearr_8828[(0)] = cljs$core$async$state_machine__8558__auto__);

(statearr_8828[(1)] = (1));

return statearr_8828;
});
var cljs$core$async$state_machine__8558__auto____1 = (function (state_8808){
while(true){
var ret_value__8559__auto__ = (function (){try{while(true){
var result__8560__auto__ = switch__8557__auto__.call(null,state_8808);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8560__auto__;
}
break;
}
}catch (e8829){if((e8829 instanceof Object)){
var ex__8561__auto__ = e8829;
var statearr_8830_8851 = state_8808;
(statearr_8830_8851[(5)] = ex__8561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8808);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8829;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8852 = state_8808;
state_8808 = G__8852;
continue;
} else {
return ret_value__8559__auto__;
}
break;
}
});
cljs$core$async$state_machine__8558__auto__ = function(state_8808){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8558__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8558__auto____1.call(this,state_8808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8558__auto____0;
cljs$core$async$state_machine__8558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8558__auto____1;
return cljs$core$async$state_machine__8558__auto__;
})()
;})(switch__8557__auto__,c__8669__auto___8836))
})();
var state__8671__auto__ = (function (){var statearr_8831 = f__8670__auto__.call(null);
(statearr_8831[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8669__auto___8836);

return statearr_8831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8671__auto__);
});})(c__8669__auto___8836))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__9036){
var vec__9037 = p__9036;
var v = cljs.core.nth.call(null,vec__9037,(0),null);
var p = cljs.core.nth.call(null,vec__9037,(1),null);
var job = vec__9037;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__8669__auto___9219 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8669__auto___9219,res,vec__9037,v,p,job,jobs,results){
return (function (){
var f__8670__auto__ = (function (){var switch__8557__auto__ = ((function (c__8669__auto___9219,res,vec__9037,v,p,job,jobs,results){
return (function (state_9042){
var state_val_9043 = (state_9042[(1)]);
if((state_val_9043 === (1))){
var state_9042__$1 = state_9042;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9042__$1,(2),res,v);
} else {
if((state_val_9043 === (2))){
var inst_9039 = (state_9042[(2)]);
var inst_9040 = cljs.core.async.close_BANG_.call(null,res);
var state_9042__$1 = (function (){var statearr_9044 = state_9042;
(statearr_9044[(7)] = inst_9039);

return statearr_9044;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9042__$1,inst_9040);
} else {
return null;
}
}
});})(c__8669__auto___9219,res,vec__9037,v,p,job,jobs,results))
;
return ((function (switch__8557__auto__,c__8669__auto___9219,res,vec__9037,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8558__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8558__auto____0 = (function (){
var statearr_9048 = [null,null,null,null,null,null,null,null];
(statearr_9048[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8558__auto__);

(statearr_9048[(1)] = (1));

return statearr_9048;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8558__auto____1 = (function (state_9042){
while(true){
var ret_value__8559__auto__ = (function (){try{while(true){
var result__8560__auto__ = switch__8557__auto__.call(null,state_9042);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8560__auto__;
}
break;
}
}catch (e9049){if((e9049 instanceof Object)){
var ex__8561__auto__ = e9049;
var statearr_9050_9220 = state_9042;
(statearr_9050_9220[(5)] = ex__8561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9042);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9049;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9221 = state_9042;
state_9042 = G__9221;
continue;
} else {
return ret_value__8559__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8558__auto__ = function(state_9042){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8558__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8558__auto____1.call(this,state_9042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8558__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8558__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8558__auto__;
})()
;})(switch__8557__auto__,c__8669__auto___9219,res,vec__9037,v,p,job,jobs,results))
})();
var state__8671__auto__ = (function (){var statearr_9051 = f__8670__auto__.call(null);
(statearr_9051[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8669__auto___9219);

return statearr_9051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8671__auto__);
});})(c__8669__auto___9219,res,vec__9037,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__9052){
var vec__9053 = p__9052;
var v = cljs.core.nth.call(null,vec__9053,(0),null);
var p = cljs.core.nth.call(null,vec__9053,(1),null);
var job = vec__9053;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__7059__auto___9222 = n;
var __9223 = (0);
while(true){
if((__9223 < n__7059__auto___9222)){
var G__9054_9224 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__9054_9224) {
case "compute":
var c__8669__auto___9226 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__9223,c__8669__auto___9226,G__9054_9224,n__7059__auto___9222,jobs,results,process,async){
return (function (){
var f__8670__auto__ = (function (){var switch__8557__auto__ = ((function (__9223,c__8669__auto___9226,G__9054_9224,n__7059__auto___9222,jobs,results,process,async){
return (function (state_9067){
var state_val_9068 = (state_9067[(1)]);
if((state_val_9068 === (1))){
var state_9067__$1 = state_9067;
var statearr_9069_9227 = state_9067__$1;
(statearr_9069_9227[(2)] = null);

(statearr_9069_9227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9068 === (2))){
var state_9067__$1 = state_9067;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9067__$1,(4),jobs);
} else {
if((state_val_9068 === (3))){
var inst_9065 = (state_9067[(2)]);
var state_9067__$1 = state_9067;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9067__$1,inst_9065);
} else {
if((state_val_9068 === (4))){
var inst_9057 = (state_9067[(2)]);
var inst_9058 = process.call(null,inst_9057);
var state_9067__$1 = state_9067;
if(cljs.core.truth_(inst_9058)){
var statearr_9070_9228 = state_9067__$1;
(statearr_9070_9228[(1)] = (5));

} else {
var statearr_9071_9229 = state_9067__$1;
(statearr_9071_9229[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9068 === (5))){
var state_9067__$1 = state_9067;
var statearr_9072_9230 = state_9067__$1;
(statearr_9072_9230[(2)] = null);

(statearr_9072_9230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9068 === (6))){
var state_9067__$1 = state_9067;
var statearr_9073_9231 = state_9067__$1;
(statearr_9073_9231[(2)] = null);

(statearr_9073_9231[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9068 === (7))){
var inst_9063 = (state_9067[(2)]);
var state_9067__$1 = state_9067;
var statearr_9074_9232 = state_9067__$1;
(statearr_9074_9232[(2)] = inst_9063);

(statearr_9074_9232[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__9223,c__8669__auto___9226,G__9054_9224,n__7059__auto___9222,jobs,results,process,async))
;
return ((function (__9223,switch__8557__auto__,c__8669__auto___9226,G__9054_9224,n__7059__auto___9222,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8558__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8558__auto____0 = (function (){
var statearr_9078 = [null,null,null,null,null,null,null];
(statearr_9078[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8558__auto__);

(statearr_9078[(1)] = (1));

return statearr_9078;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8558__auto____1 = (function (state_9067){
while(true){
var ret_value__8559__auto__ = (function (){try{while(true){
var result__8560__auto__ = switch__8557__auto__.call(null,state_9067);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8560__auto__;
}
break;
}
}catch (e9079){if((e9079 instanceof Object)){
var ex__8561__auto__ = e9079;
var statearr_9080_9233 = state_9067;
(statearr_9080_9233[(5)] = ex__8561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9067);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9079;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9234 = state_9067;
state_9067 = G__9234;
continue;
} else {
return ret_value__8559__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8558__auto__ = function(state_9067){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8558__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8558__auto____1.call(this,state_9067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8558__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8558__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8558__auto__;
})()
;})(__9223,switch__8557__auto__,c__8669__auto___9226,G__9054_9224,n__7059__auto___9222,jobs,results,process,async))
})();
var state__8671__auto__ = (function (){var statearr_9081 = f__8670__auto__.call(null);
(statearr_9081[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8669__auto___9226);

return statearr_9081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8671__auto__);
});})(__9223,c__8669__auto___9226,G__9054_9224,n__7059__auto___9222,jobs,results,process,async))
);


break;
case "async":
var c__8669__auto___9235 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__9223,c__8669__auto___9235,G__9054_9224,n__7059__auto___9222,jobs,results,process,async){
return (function (){
var f__8670__auto__ = (function (){var switch__8557__auto__ = ((function (__9223,c__8669__auto___9235,G__9054_9224,n__7059__auto___9222,jobs,results,process,async){
return (function (state_9094){
var state_val_9095 = (state_9094[(1)]);
if((state_val_9095 === (1))){
var state_9094__$1 = state_9094;
var statearr_9096_9236 = state_9094__$1;
(statearr_9096_9236[(2)] = null);

(statearr_9096_9236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9095 === (2))){
var state_9094__$1 = state_9094;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9094__$1,(4),jobs);
} else {
if((state_val_9095 === (3))){
var inst_9092 = (state_9094[(2)]);
var state_9094__$1 = state_9094;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9094__$1,inst_9092);
} else {
if((state_val_9095 === (4))){
var inst_9084 = (state_9094[(2)]);
var inst_9085 = async.call(null,inst_9084);
var state_9094__$1 = state_9094;
if(cljs.core.truth_(inst_9085)){
var statearr_9097_9237 = state_9094__$1;
(statearr_9097_9237[(1)] = (5));

} else {
var statearr_9098_9238 = state_9094__$1;
(statearr_9098_9238[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9095 === (5))){
var state_9094__$1 = state_9094;
var statearr_9099_9239 = state_9094__$1;
(statearr_9099_9239[(2)] = null);

(statearr_9099_9239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9095 === (6))){
var state_9094__$1 = state_9094;
var statearr_9100_9240 = state_9094__$1;
(statearr_9100_9240[(2)] = null);

(statearr_9100_9240[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9095 === (7))){
var inst_9090 = (state_9094[(2)]);
var state_9094__$1 = state_9094;
var statearr_9101_9241 = state_9094__$1;
(statearr_9101_9241[(2)] = inst_9090);

(statearr_9101_9241[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__9223,c__8669__auto___9235,G__9054_9224,n__7059__auto___9222,jobs,results,process,async))
;
return ((function (__9223,switch__8557__auto__,c__8669__auto___9235,G__9054_9224,n__7059__auto___9222,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8558__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8558__auto____0 = (function (){
var statearr_9105 = [null,null,null,null,null,null,null];
(statearr_9105[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8558__auto__);

(statearr_9105[(1)] = (1));

return statearr_9105;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8558__auto____1 = (function (state_9094){
while(true){
var ret_value__8559__auto__ = (function (){try{while(true){
var result__8560__auto__ = switch__8557__auto__.call(null,state_9094);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8560__auto__;
}
break;
}
}catch (e9106){if((e9106 instanceof Object)){
var ex__8561__auto__ = e9106;
var statearr_9107_9242 = state_9094;
(statearr_9107_9242[(5)] = ex__8561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9094);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9106;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9243 = state_9094;
state_9094 = G__9243;
continue;
} else {
return ret_value__8559__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8558__auto__ = function(state_9094){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8558__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8558__auto____1.call(this,state_9094);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8558__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8558__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8558__auto__;
})()
;})(__9223,switch__8557__auto__,c__8669__auto___9235,G__9054_9224,n__7059__auto___9222,jobs,results,process,async))
})();
var state__8671__auto__ = (function (){var statearr_9108 = f__8670__auto__.call(null);
(statearr_9108[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8669__auto___9235);

return statearr_9108;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8671__auto__);
});})(__9223,c__8669__auto___9235,G__9054_9224,n__7059__auto___9222,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__9244 = (__9223 + (1));
__9223 = G__9244;
continue;
} else {
}
break;
}

var c__8669__auto___9245 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8669__auto___9245,jobs,results,process,async){
return (function (){
var f__8670__auto__ = (function (){var switch__8557__auto__ = ((function (c__8669__auto___9245,jobs,results,process,async){
return (function (state_9130){
var state_val_9131 = (state_9130[(1)]);
if((state_val_9131 === (1))){
var state_9130__$1 = state_9130;
var statearr_9132_9246 = state_9130__$1;
(statearr_9132_9246[(2)] = null);

(statearr_9132_9246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9131 === (2))){
var state_9130__$1 = state_9130;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9130__$1,(4),from);
} else {
if((state_val_9131 === (3))){
var inst_9128 = (state_9130[(2)]);
var state_9130__$1 = state_9130;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9130__$1,inst_9128);
} else {
if((state_val_9131 === (4))){
var inst_9111 = (state_9130[(7)]);
var inst_9111__$1 = (state_9130[(2)]);
var inst_9112 = (inst_9111__$1 == null);
var state_9130__$1 = (function (){var statearr_9133 = state_9130;
(statearr_9133[(7)] = inst_9111__$1);

return statearr_9133;
})();
if(cljs.core.truth_(inst_9112)){
var statearr_9134_9247 = state_9130__$1;
(statearr_9134_9247[(1)] = (5));

} else {
var statearr_9135_9248 = state_9130__$1;
(statearr_9135_9248[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9131 === (5))){
var inst_9114 = cljs.core.async.close_BANG_.call(null,jobs);
var state_9130__$1 = state_9130;
var statearr_9136_9249 = state_9130__$1;
(statearr_9136_9249[(2)] = inst_9114);

(statearr_9136_9249[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9131 === (6))){
var inst_9111 = (state_9130[(7)]);
var inst_9116 = (state_9130[(8)]);
var inst_9116__$1 = cljs.core.async.chan.call(null,(1));
var inst_9117 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9118 = [inst_9111,inst_9116__$1];
var inst_9119 = (new cljs.core.PersistentVector(null,2,(5),inst_9117,inst_9118,null));
var state_9130__$1 = (function (){var statearr_9137 = state_9130;
(statearr_9137[(8)] = inst_9116__$1);

return statearr_9137;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9130__$1,(8),jobs,inst_9119);
} else {
if((state_val_9131 === (7))){
var inst_9126 = (state_9130[(2)]);
var state_9130__$1 = state_9130;
var statearr_9138_9250 = state_9130__$1;
(statearr_9138_9250[(2)] = inst_9126);

(statearr_9138_9250[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9131 === (8))){
var inst_9116 = (state_9130[(8)]);
var inst_9121 = (state_9130[(2)]);
var state_9130__$1 = (function (){var statearr_9139 = state_9130;
(statearr_9139[(9)] = inst_9121);

return statearr_9139;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9130__$1,(9),results,inst_9116);
} else {
if((state_val_9131 === (9))){
var inst_9123 = (state_9130[(2)]);
var state_9130__$1 = (function (){var statearr_9140 = state_9130;
(statearr_9140[(10)] = inst_9123);

return statearr_9140;
})();
var statearr_9141_9251 = state_9130__$1;
(statearr_9141_9251[(2)] = null);

(statearr_9141_9251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__8669__auto___9245,jobs,results,process,async))
;
return ((function (switch__8557__auto__,c__8669__auto___9245,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8558__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8558__auto____0 = (function (){
var statearr_9145 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9145[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8558__auto__);

(statearr_9145[(1)] = (1));

return statearr_9145;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8558__auto____1 = (function (state_9130){
while(true){
var ret_value__8559__auto__ = (function (){try{while(true){
var result__8560__auto__ = switch__8557__auto__.call(null,state_9130);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8560__auto__;
}
break;
}
}catch (e9146){if((e9146 instanceof Object)){
var ex__8561__auto__ = e9146;
var statearr_9147_9252 = state_9130;
(statearr_9147_9252[(5)] = ex__8561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9130);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9146;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9253 = state_9130;
state_9130 = G__9253;
continue;
} else {
return ret_value__8559__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8558__auto__ = function(state_9130){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8558__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8558__auto____1.call(this,state_9130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8558__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8558__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8558__auto__;
})()
;})(switch__8557__auto__,c__8669__auto___9245,jobs,results,process,async))
})();
var state__8671__auto__ = (function (){var statearr_9148 = f__8670__auto__.call(null);
(statearr_9148[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8669__auto___9245);

return statearr_9148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8671__auto__);
});})(c__8669__auto___9245,jobs,results,process,async))
);


var c__8669__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8669__auto__,jobs,results,process,async){
return (function (){
var f__8670__auto__ = (function (){var switch__8557__auto__ = ((function (c__8669__auto__,jobs,results,process,async){
return (function (state_9186){
var state_val_9187 = (state_9186[(1)]);
if((state_val_9187 === (7))){
var inst_9182 = (state_9186[(2)]);
var state_9186__$1 = state_9186;
var statearr_9188_9254 = state_9186__$1;
(statearr_9188_9254[(2)] = inst_9182);

(statearr_9188_9254[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9187 === (20))){
var state_9186__$1 = state_9186;
var statearr_9189_9255 = state_9186__$1;
(statearr_9189_9255[(2)] = null);

(statearr_9189_9255[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9187 === (1))){
var state_9186__$1 = state_9186;
var statearr_9190_9256 = state_9186__$1;
(statearr_9190_9256[(2)] = null);

(statearr_9190_9256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9187 === (4))){
var inst_9151 = (state_9186[(7)]);
var inst_9151__$1 = (state_9186[(2)]);
var inst_9152 = (inst_9151__$1 == null);
var state_9186__$1 = (function (){var statearr_9191 = state_9186;
(statearr_9191[(7)] = inst_9151__$1);

return statearr_9191;
})();
if(cljs.core.truth_(inst_9152)){
var statearr_9192_9257 = state_9186__$1;
(statearr_9192_9257[(1)] = (5));

} else {
var statearr_9193_9258 = state_9186__$1;
(statearr_9193_9258[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9187 === (15))){
var inst_9164 = (state_9186[(8)]);
var state_9186__$1 = state_9186;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9186__$1,(18),to,inst_9164);
} else {
if((state_val_9187 === (21))){
var inst_9177 = (state_9186[(2)]);
var state_9186__$1 = state_9186;
var statearr_9194_9259 = state_9186__$1;
(statearr_9194_9259[(2)] = inst_9177);

(statearr_9194_9259[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9187 === (13))){
var inst_9179 = (state_9186[(2)]);
var state_9186__$1 = (function (){var statearr_9195 = state_9186;
(statearr_9195[(9)] = inst_9179);

return statearr_9195;
})();
var statearr_9196_9260 = state_9186__$1;
(statearr_9196_9260[(2)] = null);

(statearr_9196_9260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9187 === (6))){
var inst_9151 = (state_9186[(7)]);
var state_9186__$1 = state_9186;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9186__$1,(11),inst_9151);
} else {
if((state_val_9187 === (17))){
var inst_9172 = (state_9186[(2)]);
var state_9186__$1 = state_9186;
if(cljs.core.truth_(inst_9172)){
var statearr_9197_9261 = state_9186__$1;
(statearr_9197_9261[(1)] = (19));

} else {
var statearr_9198_9262 = state_9186__$1;
(statearr_9198_9262[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9187 === (3))){
var inst_9184 = (state_9186[(2)]);
var state_9186__$1 = state_9186;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9186__$1,inst_9184);
} else {
if((state_val_9187 === (12))){
var inst_9161 = (state_9186[(10)]);
var state_9186__$1 = state_9186;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9186__$1,(14),inst_9161);
} else {
if((state_val_9187 === (2))){
var state_9186__$1 = state_9186;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9186__$1,(4),results);
} else {
if((state_val_9187 === (19))){
var state_9186__$1 = state_9186;
var statearr_9199_9263 = state_9186__$1;
(statearr_9199_9263[(2)] = null);

(statearr_9199_9263[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9187 === (11))){
var inst_9161 = (state_9186[(2)]);
var state_9186__$1 = (function (){var statearr_9200 = state_9186;
(statearr_9200[(10)] = inst_9161);

return statearr_9200;
})();
var statearr_9201_9264 = state_9186__$1;
(statearr_9201_9264[(2)] = null);

(statearr_9201_9264[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9187 === (9))){
var state_9186__$1 = state_9186;
var statearr_9202_9265 = state_9186__$1;
(statearr_9202_9265[(2)] = null);

(statearr_9202_9265[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9187 === (5))){
var state_9186__$1 = state_9186;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9203_9266 = state_9186__$1;
(statearr_9203_9266[(1)] = (8));

} else {
var statearr_9204_9267 = state_9186__$1;
(statearr_9204_9267[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9187 === (14))){
var inst_9166 = (state_9186[(11)]);
var inst_9164 = (state_9186[(8)]);
var inst_9164__$1 = (state_9186[(2)]);
var inst_9165 = (inst_9164__$1 == null);
var inst_9166__$1 = cljs.core.not.call(null,inst_9165);
var state_9186__$1 = (function (){var statearr_9205 = state_9186;
(statearr_9205[(11)] = inst_9166__$1);

(statearr_9205[(8)] = inst_9164__$1);

return statearr_9205;
})();
if(inst_9166__$1){
var statearr_9206_9268 = state_9186__$1;
(statearr_9206_9268[(1)] = (15));

} else {
var statearr_9207_9269 = state_9186__$1;
(statearr_9207_9269[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9187 === (16))){
var inst_9166 = (state_9186[(11)]);
var state_9186__$1 = state_9186;
var statearr_9208_9270 = state_9186__$1;
(statearr_9208_9270[(2)] = inst_9166);

(statearr_9208_9270[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9187 === (10))){
var inst_9158 = (state_9186[(2)]);
var state_9186__$1 = state_9186;
var statearr_9209_9271 = state_9186__$1;
(statearr_9209_9271[(2)] = inst_9158);

(statearr_9209_9271[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9187 === (18))){
var inst_9169 = (state_9186[(2)]);
var state_9186__$1 = state_9186;
var statearr_9210_9272 = state_9186__$1;
(statearr_9210_9272[(2)] = inst_9169);

(statearr_9210_9272[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9187 === (8))){
var inst_9155 = cljs.core.async.close_BANG_.call(null,to);
var state_9186__$1 = state_9186;
var statearr_9211_9273 = state_9186__$1;
(statearr_9211_9273[(2)] = inst_9155);

(statearr_9211_9273[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8669__auto__,jobs,results,process,async))
;
return ((function (switch__8557__auto__,c__8669__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8558__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8558__auto____0 = (function (){
var statearr_9215 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9215[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8558__auto__);

(statearr_9215[(1)] = (1));

return statearr_9215;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8558__auto____1 = (function (state_9186){
while(true){
var ret_value__8559__auto__ = (function (){try{while(true){
var result__8560__auto__ = switch__8557__auto__.call(null,state_9186);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8560__auto__;
}
break;
}
}catch (e9216){if((e9216 instanceof Object)){
var ex__8561__auto__ = e9216;
var statearr_9217_9274 = state_9186;
(statearr_9217_9274[(5)] = ex__8561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9186);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9216;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9275 = state_9186;
state_9186 = G__9275;
continue;
} else {
return ret_value__8559__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8558__auto__ = function(state_9186){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8558__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8558__auto____1.call(this,state_9186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8558__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8558__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8558__auto__;
})()
;})(switch__8557__auto__,c__8669__auto__,jobs,results,process,async))
})();
var state__8671__auto__ = (function (){var statearr_9218 = f__8670__auto__.call(null);
(statearr_9218[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8669__auto__);

return statearr_9218;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8671__auto__);
});})(c__8669__auto__,jobs,results,process,async))
);

return c__8669__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args9276 = [];
var len__7214__auto___9279 = arguments.length;
var i__7215__auto___9280 = (0);
while(true){
if((i__7215__auto___9280 < len__7214__auto___9279)){
args9276.push((arguments[i__7215__auto___9280]));

var G__9281 = (i__7215__auto___9280 + (1));
i__7215__auto___9280 = G__9281;
continue;
} else {
}
break;
}

var G__9278 = args9276.length;
switch (G__9278) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9276.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args9283 = [];
var len__7214__auto___9286 = arguments.length;
var i__7215__auto___9287 = (0);
while(true){
if((i__7215__auto___9287 < len__7214__auto___9286)){
args9283.push((arguments[i__7215__auto___9287]));

var G__9288 = (i__7215__auto___9287 + (1));
i__7215__auto___9287 = G__9288;
continue;
} else {
}
break;
}

var G__9285 = args9283.length;
switch (G__9285) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9283.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args9290 = [];
var len__7214__auto___9343 = arguments.length;
var i__7215__auto___9344 = (0);
while(true){
if((i__7215__auto___9344 < len__7214__auto___9343)){
args9290.push((arguments[i__7215__auto___9344]));

var G__9345 = (i__7215__auto___9344 + (1));
i__7215__auto___9344 = G__9345;
continue;
} else {
}
break;
}

var G__9292 = args9290.length;
switch (G__9292) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9290.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__8669__auto___9347 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8669__auto___9347,tc,fc){
return (function (){
var f__8670__auto__ = (function (){var switch__8557__auto__ = ((function (c__8669__auto___9347,tc,fc){
return (function (state_9318){
var state_val_9319 = (state_9318[(1)]);
if((state_val_9319 === (7))){
var inst_9314 = (state_9318[(2)]);
var state_9318__$1 = state_9318;
var statearr_9320_9348 = state_9318__$1;
(statearr_9320_9348[(2)] = inst_9314);

(statearr_9320_9348[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9319 === (1))){
var state_9318__$1 = state_9318;
var statearr_9321_9349 = state_9318__$1;
(statearr_9321_9349[(2)] = null);

(statearr_9321_9349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9319 === (4))){
var inst_9295 = (state_9318[(7)]);
var inst_9295__$1 = (state_9318[(2)]);
var inst_9296 = (inst_9295__$1 == null);
var state_9318__$1 = (function (){var statearr_9322 = state_9318;
(statearr_9322[(7)] = inst_9295__$1);

return statearr_9322;
})();
if(cljs.core.truth_(inst_9296)){
var statearr_9323_9350 = state_9318__$1;
(statearr_9323_9350[(1)] = (5));

} else {
var statearr_9324_9351 = state_9318__$1;
(statearr_9324_9351[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9319 === (13))){
var state_9318__$1 = state_9318;
var statearr_9325_9352 = state_9318__$1;
(statearr_9325_9352[(2)] = null);

(statearr_9325_9352[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9319 === (6))){
var inst_9295 = (state_9318[(7)]);
var inst_9301 = p.call(null,inst_9295);
var state_9318__$1 = state_9318;
if(cljs.core.truth_(inst_9301)){
var statearr_9326_9353 = state_9318__$1;
(statearr_9326_9353[(1)] = (9));

} else {
var statearr_9327_9354 = state_9318__$1;
(statearr_9327_9354[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9319 === (3))){
var inst_9316 = (state_9318[(2)]);
var state_9318__$1 = state_9318;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9318__$1,inst_9316);
} else {
if((state_val_9319 === (12))){
var state_9318__$1 = state_9318;
var statearr_9328_9355 = state_9318__$1;
(statearr_9328_9355[(2)] = null);

(statearr_9328_9355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9319 === (2))){
var state_9318__$1 = state_9318;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9318__$1,(4),ch);
} else {
if((state_val_9319 === (11))){
var inst_9295 = (state_9318[(7)]);
var inst_9305 = (state_9318[(2)]);
var state_9318__$1 = state_9318;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9318__$1,(8),inst_9305,inst_9295);
} else {
if((state_val_9319 === (9))){
var state_9318__$1 = state_9318;
var statearr_9329_9356 = state_9318__$1;
(statearr_9329_9356[(2)] = tc);

(statearr_9329_9356[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9319 === (5))){
var inst_9298 = cljs.core.async.close_BANG_.call(null,tc);
var inst_9299 = cljs.core.async.close_BANG_.call(null,fc);
var state_9318__$1 = (function (){var statearr_9330 = state_9318;
(statearr_9330[(8)] = inst_9298);

return statearr_9330;
})();
var statearr_9331_9357 = state_9318__$1;
(statearr_9331_9357[(2)] = inst_9299);

(statearr_9331_9357[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9319 === (14))){
var inst_9312 = (state_9318[(2)]);
var state_9318__$1 = state_9318;
var statearr_9332_9358 = state_9318__$1;
(statearr_9332_9358[(2)] = inst_9312);

(statearr_9332_9358[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9319 === (10))){
var state_9318__$1 = state_9318;
var statearr_9333_9359 = state_9318__$1;
(statearr_9333_9359[(2)] = fc);

(statearr_9333_9359[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9319 === (8))){
var inst_9307 = (state_9318[(2)]);
var state_9318__$1 = state_9318;
if(cljs.core.truth_(inst_9307)){
var statearr_9334_9360 = state_9318__$1;
(statearr_9334_9360[(1)] = (12));

} else {
var statearr_9335_9361 = state_9318__$1;
(statearr_9335_9361[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8669__auto___9347,tc,fc))
;
return ((function (switch__8557__auto__,c__8669__auto___9347,tc,fc){
return (function() {
var cljs$core$async$state_machine__8558__auto__ = null;
var cljs$core$async$state_machine__8558__auto____0 = (function (){
var statearr_9339 = [null,null,null,null,null,null,null,null,null];
(statearr_9339[(0)] = cljs$core$async$state_machine__8558__auto__);

(statearr_9339[(1)] = (1));

return statearr_9339;
});
var cljs$core$async$state_machine__8558__auto____1 = (function (state_9318){
while(true){
var ret_value__8559__auto__ = (function (){try{while(true){
var result__8560__auto__ = switch__8557__auto__.call(null,state_9318);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8560__auto__;
}
break;
}
}catch (e9340){if((e9340 instanceof Object)){
var ex__8561__auto__ = e9340;
var statearr_9341_9362 = state_9318;
(statearr_9341_9362[(5)] = ex__8561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9318);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9340;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9363 = state_9318;
state_9318 = G__9363;
continue;
} else {
return ret_value__8559__auto__;
}
break;
}
});
cljs$core$async$state_machine__8558__auto__ = function(state_9318){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8558__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8558__auto____1.call(this,state_9318);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8558__auto____0;
cljs$core$async$state_machine__8558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8558__auto____1;
return cljs$core$async$state_machine__8558__auto__;
})()
;})(switch__8557__auto__,c__8669__auto___9347,tc,fc))
})();
var state__8671__auto__ = (function (){var statearr_9342 = f__8670__auto__.call(null);
(statearr_9342[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8669__auto___9347);

return statearr_9342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8671__auto__);
});})(c__8669__auto___9347,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__8669__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8669__auto__){
return (function (){
var f__8670__auto__ = (function (){var switch__8557__auto__ = ((function (c__8669__auto__){
return (function (state_9427){
var state_val_9428 = (state_9427[(1)]);
if((state_val_9428 === (7))){
var inst_9423 = (state_9427[(2)]);
var state_9427__$1 = state_9427;
var statearr_9429_9450 = state_9427__$1;
(statearr_9429_9450[(2)] = inst_9423);

(statearr_9429_9450[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9428 === (1))){
var inst_9407 = init;
var state_9427__$1 = (function (){var statearr_9430 = state_9427;
(statearr_9430[(7)] = inst_9407);

return statearr_9430;
})();
var statearr_9431_9451 = state_9427__$1;
(statearr_9431_9451[(2)] = null);

(statearr_9431_9451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9428 === (4))){
var inst_9410 = (state_9427[(8)]);
var inst_9410__$1 = (state_9427[(2)]);
var inst_9411 = (inst_9410__$1 == null);
var state_9427__$1 = (function (){var statearr_9432 = state_9427;
(statearr_9432[(8)] = inst_9410__$1);

return statearr_9432;
})();
if(cljs.core.truth_(inst_9411)){
var statearr_9433_9452 = state_9427__$1;
(statearr_9433_9452[(1)] = (5));

} else {
var statearr_9434_9453 = state_9427__$1;
(statearr_9434_9453[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9428 === (6))){
var inst_9410 = (state_9427[(8)]);
var inst_9414 = (state_9427[(9)]);
var inst_9407 = (state_9427[(7)]);
var inst_9414__$1 = f.call(null,inst_9407,inst_9410);
var inst_9415 = cljs.core.reduced_QMARK_.call(null,inst_9414__$1);
var state_9427__$1 = (function (){var statearr_9435 = state_9427;
(statearr_9435[(9)] = inst_9414__$1);

return statearr_9435;
})();
if(inst_9415){
var statearr_9436_9454 = state_9427__$1;
(statearr_9436_9454[(1)] = (8));

} else {
var statearr_9437_9455 = state_9427__$1;
(statearr_9437_9455[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9428 === (3))){
var inst_9425 = (state_9427[(2)]);
var state_9427__$1 = state_9427;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9427__$1,inst_9425);
} else {
if((state_val_9428 === (2))){
var state_9427__$1 = state_9427;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9427__$1,(4),ch);
} else {
if((state_val_9428 === (9))){
var inst_9414 = (state_9427[(9)]);
var inst_9407 = inst_9414;
var state_9427__$1 = (function (){var statearr_9438 = state_9427;
(statearr_9438[(7)] = inst_9407);

return statearr_9438;
})();
var statearr_9439_9456 = state_9427__$1;
(statearr_9439_9456[(2)] = null);

(statearr_9439_9456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9428 === (5))){
var inst_9407 = (state_9427[(7)]);
var state_9427__$1 = state_9427;
var statearr_9440_9457 = state_9427__$1;
(statearr_9440_9457[(2)] = inst_9407);

(statearr_9440_9457[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9428 === (10))){
var inst_9421 = (state_9427[(2)]);
var state_9427__$1 = state_9427;
var statearr_9441_9458 = state_9427__$1;
(statearr_9441_9458[(2)] = inst_9421);

(statearr_9441_9458[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9428 === (8))){
var inst_9414 = (state_9427[(9)]);
var inst_9417 = cljs.core.deref.call(null,inst_9414);
var state_9427__$1 = state_9427;
var statearr_9442_9459 = state_9427__$1;
(statearr_9442_9459[(2)] = inst_9417);

(statearr_9442_9459[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__8669__auto__))
;
return ((function (switch__8557__auto__,c__8669__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__8558__auto__ = null;
var cljs$core$async$reduce_$_state_machine__8558__auto____0 = (function (){
var statearr_9446 = [null,null,null,null,null,null,null,null,null,null];
(statearr_9446[(0)] = cljs$core$async$reduce_$_state_machine__8558__auto__);

(statearr_9446[(1)] = (1));

return statearr_9446;
});
var cljs$core$async$reduce_$_state_machine__8558__auto____1 = (function (state_9427){
while(true){
var ret_value__8559__auto__ = (function (){try{while(true){
var result__8560__auto__ = switch__8557__auto__.call(null,state_9427);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8560__auto__;
}
break;
}
}catch (e9447){if((e9447 instanceof Object)){
var ex__8561__auto__ = e9447;
var statearr_9448_9460 = state_9427;
(statearr_9448_9460[(5)] = ex__8561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9427);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9447;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9461 = state_9427;
state_9427 = G__9461;
continue;
} else {
return ret_value__8559__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__8558__auto__ = function(state_9427){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__8558__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__8558__auto____1.call(this,state_9427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__8558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__8558__auto____0;
cljs$core$async$reduce_$_state_machine__8558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__8558__auto____1;
return cljs$core$async$reduce_$_state_machine__8558__auto__;
})()
;})(switch__8557__auto__,c__8669__auto__))
})();
var state__8671__auto__ = (function (){var statearr_9449 = f__8670__auto__.call(null);
(statearr_9449[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8669__auto__);

return statearr_9449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8671__auto__);
});})(c__8669__auto__))
);

return c__8669__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args9462 = [];
var len__7214__auto___9514 = arguments.length;
var i__7215__auto___9515 = (0);
while(true){
if((i__7215__auto___9515 < len__7214__auto___9514)){
args9462.push((arguments[i__7215__auto___9515]));

var G__9516 = (i__7215__auto___9515 + (1));
i__7215__auto___9515 = G__9516;
continue;
} else {
}
break;
}

var G__9464 = args9462.length;
switch (G__9464) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9462.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__8669__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8669__auto__){
return (function (){
var f__8670__auto__ = (function (){var switch__8557__auto__ = ((function (c__8669__auto__){
return (function (state_9489){
var state_val_9490 = (state_9489[(1)]);
if((state_val_9490 === (7))){
var inst_9471 = (state_9489[(2)]);
var state_9489__$1 = state_9489;
var statearr_9491_9518 = state_9489__$1;
(statearr_9491_9518[(2)] = inst_9471);

(statearr_9491_9518[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9490 === (1))){
var inst_9465 = cljs.core.seq.call(null,coll);
var inst_9466 = inst_9465;
var state_9489__$1 = (function (){var statearr_9492 = state_9489;
(statearr_9492[(7)] = inst_9466);

return statearr_9492;
})();
var statearr_9493_9519 = state_9489__$1;
(statearr_9493_9519[(2)] = null);

(statearr_9493_9519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9490 === (4))){
var inst_9466 = (state_9489[(7)]);
var inst_9469 = cljs.core.first.call(null,inst_9466);
var state_9489__$1 = state_9489;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9489__$1,(7),ch,inst_9469);
} else {
if((state_val_9490 === (13))){
var inst_9483 = (state_9489[(2)]);
var state_9489__$1 = state_9489;
var statearr_9494_9520 = state_9489__$1;
(statearr_9494_9520[(2)] = inst_9483);

(statearr_9494_9520[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9490 === (6))){
var inst_9474 = (state_9489[(2)]);
var state_9489__$1 = state_9489;
if(cljs.core.truth_(inst_9474)){
var statearr_9495_9521 = state_9489__$1;
(statearr_9495_9521[(1)] = (8));

} else {
var statearr_9496_9522 = state_9489__$1;
(statearr_9496_9522[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9490 === (3))){
var inst_9487 = (state_9489[(2)]);
var state_9489__$1 = state_9489;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9489__$1,inst_9487);
} else {
if((state_val_9490 === (12))){
var state_9489__$1 = state_9489;
var statearr_9497_9523 = state_9489__$1;
(statearr_9497_9523[(2)] = null);

(statearr_9497_9523[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9490 === (2))){
var inst_9466 = (state_9489[(7)]);
var state_9489__$1 = state_9489;
if(cljs.core.truth_(inst_9466)){
var statearr_9498_9524 = state_9489__$1;
(statearr_9498_9524[(1)] = (4));

} else {
var statearr_9499_9525 = state_9489__$1;
(statearr_9499_9525[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9490 === (11))){
var inst_9480 = cljs.core.async.close_BANG_.call(null,ch);
var state_9489__$1 = state_9489;
var statearr_9500_9526 = state_9489__$1;
(statearr_9500_9526[(2)] = inst_9480);

(statearr_9500_9526[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9490 === (9))){
var state_9489__$1 = state_9489;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9501_9527 = state_9489__$1;
(statearr_9501_9527[(1)] = (11));

} else {
var statearr_9502_9528 = state_9489__$1;
(statearr_9502_9528[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9490 === (5))){
var inst_9466 = (state_9489[(7)]);
var state_9489__$1 = state_9489;
var statearr_9503_9529 = state_9489__$1;
(statearr_9503_9529[(2)] = inst_9466);

(statearr_9503_9529[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9490 === (10))){
var inst_9485 = (state_9489[(2)]);
var state_9489__$1 = state_9489;
var statearr_9504_9530 = state_9489__$1;
(statearr_9504_9530[(2)] = inst_9485);

(statearr_9504_9530[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9490 === (8))){
var inst_9466 = (state_9489[(7)]);
var inst_9476 = cljs.core.next.call(null,inst_9466);
var inst_9466__$1 = inst_9476;
var state_9489__$1 = (function (){var statearr_9505 = state_9489;
(statearr_9505[(7)] = inst_9466__$1);

return statearr_9505;
})();
var statearr_9506_9531 = state_9489__$1;
(statearr_9506_9531[(2)] = null);

(statearr_9506_9531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8669__auto__))
;
return ((function (switch__8557__auto__,c__8669__auto__){
return (function() {
var cljs$core$async$state_machine__8558__auto__ = null;
var cljs$core$async$state_machine__8558__auto____0 = (function (){
var statearr_9510 = [null,null,null,null,null,null,null,null];
(statearr_9510[(0)] = cljs$core$async$state_machine__8558__auto__);

(statearr_9510[(1)] = (1));

return statearr_9510;
});
var cljs$core$async$state_machine__8558__auto____1 = (function (state_9489){
while(true){
var ret_value__8559__auto__ = (function (){try{while(true){
var result__8560__auto__ = switch__8557__auto__.call(null,state_9489);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8560__auto__;
}
break;
}
}catch (e9511){if((e9511 instanceof Object)){
var ex__8561__auto__ = e9511;
var statearr_9512_9532 = state_9489;
(statearr_9512_9532[(5)] = ex__8561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9489);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9511;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9533 = state_9489;
state_9489 = G__9533;
continue;
} else {
return ret_value__8559__auto__;
}
break;
}
});
cljs$core$async$state_machine__8558__auto__ = function(state_9489){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8558__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8558__auto____1.call(this,state_9489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8558__auto____0;
cljs$core$async$state_machine__8558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8558__auto____1;
return cljs$core$async$state_machine__8558__auto__;
})()
;})(switch__8557__auto__,c__8669__auto__))
})();
var state__8671__auto__ = (function (){var statearr_9513 = f__8670__auto__.call(null);
(statearr_9513[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8669__auto__);

return statearr_9513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8671__auto__);
});})(c__8669__auto__))
);

return c__8669__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__6811__auto__ = (((_ == null))?null:_);
var m__6812__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,_);
} else {
var m__6812__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__6811__auto__ = (((m == null))?null:m);
var m__6812__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__6812__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__6811__auto__ = (((m == null))?null:m);
var m__6812__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,m,ch);
} else {
var m__6812__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__6811__auto__ = (((m == null))?null:m);
var m__6812__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,m);
} else {
var m__6812__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async9755 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9755 = (function (mult,ch,cs,meta9756){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta9756 = meta9756;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9755.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_9757,meta9756__$1){
var self__ = this;
var _9757__$1 = this;
return (new cljs.core.async.t_cljs$core$async9755(self__.mult,self__.ch,self__.cs,meta9756__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async9755.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_9757){
var self__ = this;
var _9757__$1 = this;
return self__.meta9756;
});})(cs))
;

cljs.core.async.t_cljs$core$async9755.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async9755.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async9755.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async9755.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async9755.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async9755.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async9755.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta9756","meta9756",-1981961932,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async9755.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9755.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9755";

cljs.core.async.t_cljs$core$async9755.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async9755");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async9755 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async9755(mult__$1,ch__$1,cs__$1,meta9756){
return (new cljs.core.async.t_cljs$core$async9755(mult__$1,ch__$1,cs__$1,meta9756));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async9755(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__8669__auto___9976 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8669__auto___9976,cs,m,dchan,dctr,done){
return (function (){
var f__8670__auto__ = (function (){var switch__8557__auto__ = ((function (c__8669__auto___9976,cs,m,dchan,dctr,done){
return (function (state_9888){
var state_val_9889 = (state_9888[(1)]);
if((state_val_9889 === (7))){
var inst_9884 = (state_9888[(2)]);
var state_9888__$1 = state_9888;
var statearr_9890_9977 = state_9888__$1;
(statearr_9890_9977[(2)] = inst_9884);

(statearr_9890_9977[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9889 === (20))){
var inst_9789 = (state_9888[(7)]);
var inst_9799 = cljs.core.first.call(null,inst_9789);
var inst_9800 = cljs.core.nth.call(null,inst_9799,(0),null);
var inst_9801 = cljs.core.nth.call(null,inst_9799,(1),null);
var state_9888__$1 = (function (){var statearr_9891 = state_9888;
(statearr_9891[(8)] = inst_9800);

return statearr_9891;
})();
if(cljs.core.truth_(inst_9801)){
var statearr_9892_9978 = state_9888__$1;
(statearr_9892_9978[(1)] = (22));

} else {
var statearr_9893_9979 = state_9888__$1;
(statearr_9893_9979[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9889 === (27))){
var inst_9829 = (state_9888[(9)]);
var inst_9831 = (state_9888[(10)]);
var inst_9836 = (state_9888[(11)]);
var inst_9760 = (state_9888[(12)]);
var inst_9836__$1 = cljs.core._nth.call(null,inst_9829,inst_9831);
var inst_9837 = cljs.core.async.put_BANG_.call(null,inst_9836__$1,inst_9760,done);
var state_9888__$1 = (function (){var statearr_9894 = state_9888;
(statearr_9894[(11)] = inst_9836__$1);

return statearr_9894;
})();
if(cljs.core.truth_(inst_9837)){
var statearr_9895_9980 = state_9888__$1;
(statearr_9895_9980[(1)] = (30));

} else {
var statearr_9896_9981 = state_9888__$1;
(statearr_9896_9981[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9889 === (1))){
var state_9888__$1 = state_9888;
var statearr_9897_9982 = state_9888__$1;
(statearr_9897_9982[(2)] = null);

(statearr_9897_9982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9889 === (24))){
var inst_9789 = (state_9888[(7)]);
var inst_9806 = (state_9888[(2)]);
var inst_9807 = cljs.core.next.call(null,inst_9789);
var inst_9769 = inst_9807;
var inst_9770 = null;
var inst_9771 = (0);
var inst_9772 = (0);
var state_9888__$1 = (function (){var statearr_9898 = state_9888;
(statearr_9898[(13)] = inst_9771);

(statearr_9898[(14)] = inst_9770);

(statearr_9898[(15)] = inst_9806);

(statearr_9898[(16)] = inst_9769);

(statearr_9898[(17)] = inst_9772);

return statearr_9898;
})();
var statearr_9899_9983 = state_9888__$1;
(statearr_9899_9983[(2)] = null);

(statearr_9899_9983[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9889 === (39))){
var state_9888__$1 = state_9888;
var statearr_9903_9984 = state_9888__$1;
(statearr_9903_9984[(2)] = null);

(statearr_9903_9984[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9889 === (4))){
var inst_9760 = (state_9888[(12)]);
var inst_9760__$1 = (state_9888[(2)]);
var inst_9761 = (inst_9760__$1 == null);
var state_9888__$1 = (function (){var statearr_9904 = state_9888;
(statearr_9904[(12)] = inst_9760__$1);

return statearr_9904;
})();
if(cljs.core.truth_(inst_9761)){
var statearr_9905_9985 = state_9888__$1;
(statearr_9905_9985[(1)] = (5));

} else {
var statearr_9906_9986 = state_9888__$1;
(statearr_9906_9986[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9889 === (15))){
var inst_9771 = (state_9888[(13)]);
var inst_9770 = (state_9888[(14)]);
var inst_9769 = (state_9888[(16)]);
var inst_9772 = (state_9888[(17)]);
var inst_9785 = (state_9888[(2)]);
var inst_9786 = (inst_9772 + (1));
var tmp9900 = inst_9771;
var tmp9901 = inst_9770;
var tmp9902 = inst_9769;
var inst_9769__$1 = tmp9902;
var inst_9770__$1 = tmp9901;
var inst_9771__$1 = tmp9900;
var inst_9772__$1 = inst_9786;
var state_9888__$1 = (function (){var statearr_9907 = state_9888;
(statearr_9907[(13)] = inst_9771__$1);

(statearr_9907[(14)] = inst_9770__$1);

(statearr_9907[(16)] = inst_9769__$1);

(statearr_9907[(17)] = inst_9772__$1);

(statearr_9907[(18)] = inst_9785);

return statearr_9907;
})();
var statearr_9908_9987 = state_9888__$1;
(statearr_9908_9987[(2)] = null);

(statearr_9908_9987[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9889 === (21))){
var inst_9810 = (state_9888[(2)]);
var state_9888__$1 = state_9888;
var statearr_9912_9988 = state_9888__$1;
(statearr_9912_9988[(2)] = inst_9810);

(statearr_9912_9988[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9889 === (31))){
var inst_9836 = (state_9888[(11)]);
var inst_9840 = done.call(null,null);
var inst_9841 = cljs.core.async.untap_STAR_.call(null,m,inst_9836);
var state_9888__$1 = (function (){var statearr_9913 = state_9888;
(statearr_9913[(19)] = inst_9840);

return statearr_9913;
})();
var statearr_9914_9989 = state_9888__$1;
(statearr_9914_9989[(2)] = inst_9841);

(statearr_9914_9989[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9889 === (32))){
var inst_9829 = (state_9888[(9)]);
var inst_9828 = (state_9888[(20)]);
var inst_9830 = (state_9888[(21)]);
var inst_9831 = (state_9888[(10)]);
var inst_9843 = (state_9888[(2)]);
var inst_9844 = (inst_9831 + (1));
var tmp9909 = inst_9829;
var tmp9910 = inst_9828;
var tmp9911 = inst_9830;
var inst_9828__$1 = tmp9910;
var inst_9829__$1 = tmp9909;
var inst_9830__$1 = tmp9911;
var inst_9831__$1 = inst_9844;
var state_9888__$1 = (function (){var statearr_9915 = state_9888;
(statearr_9915[(9)] = inst_9829__$1);

(statearr_9915[(20)] = inst_9828__$1);

(statearr_9915[(21)] = inst_9830__$1);

(statearr_9915[(10)] = inst_9831__$1);

(statearr_9915[(22)] = inst_9843);

return statearr_9915;
})();
var statearr_9916_9990 = state_9888__$1;
(statearr_9916_9990[(2)] = null);

(statearr_9916_9990[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9889 === (40))){
var inst_9856 = (state_9888[(23)]);
var inst_9860 = done.call(null,null);
var inst_9861 = cljs.core.async.untap_STAR_.call(null,m,inst_9856);
var state_9888__$1 = (function (){var statearr_9917 = state_9888;
(statearr_9917[(24)] = inst_9860);

return statearr_9917;
})();
var statearr_9918_9991 = state_9888__$1;
(statearr_9918_9991[(2)] = inst_9861);

(statearr_9918_9991[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9889 === (33))){
var inst_9847 = (state_9888[(25)]);
var inst_9849 = cljs.core.chunked_seq_QMARK_.call(null,inst_9847);
var state_9888__$1 = state_9888;
if(inst_9849){
var statearr_9919_9992 = state_9888__$1;
(statearr_9919_9992[(1)] = (36));

} else {
var statearr_9920_9993 = state_9888__$1;
(statearr_9920_9993[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9889 === (13))){
var inst_9779 = (state_9888[(26)]);
var inst_9782 = cljs.core.async.close_BANG_.call(null,inst_9779);
var state_9888__$1 = state_9888;
var statearr_9921_9994 = state_9888__$1;
(statearr_9921_9994[(2)] = inst_9782);

(statearr_9921_9994[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9889 === (22))){
var inst_9800 = (state_9888[(8)]);
var inst_9803 = cljs.core.async.close_BANG_.call(null,inst_9800);
var state_9888__$1 = state_9888;
var statearr_9922_9995 = state_9888__$1;
(statearr_9922_9995[(2)] = inst_9803);

(statearr_9922_9995[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9889 === (36))){
var inst_9847 = (state_9888[(25)]);
var inst_9851 = cljs.core.chunk_first.call(null,inst_9847);
var inst_9852 = cljs.core.chunk_rest.call(null,inst_9847);
var inst_9853 = cljs.core.count.call(null,inst_9851);
var inst_9828 = inst_9852;
var inst_9829 = inst_9851;
var inst_9830 = inst_9853;
var inst_9831 = (0);
var state_9888__$1 = (function (){var statearr_9923 = state_9888;
(statearr_9923[(9)] = inst_9829);

(statearr_9923[(20)] = inst_9828);

(statearr_9923[(21)] = inst_9830);

(statearr_9923[(10)] = inst_9831);

return statearr_9923;
})();
var statearr_9924_9996 = state_9888__$1;
(statearr_9924_9996[(2)] = null);

(statearr_9924_9996[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9889 === (41))){
var inst_9847 = (state_9888[(25)]);
var inst_9863 = (state_9888[(2)]);
var inst_9864 = cljs.core.next.call(null,inst_9847);
var inst_9828 = inst_9864;
var inst_9829 = null;
var inst_9830 = (0);
var inst_9831 = (0);
var state_9888__$1 = (function (){var statearr_9925 = state_9888;
(statearr_9925[(9)] = inst_9829);

(statearr_9925[(20)] = inst_9828);

(statearr_9925[(21)] = inst_9830);

(statearr_9925[(10)] = inst_9831);

(statearr_9925[(27)] = inst_9863);

return statearr_9925;
})();
var statearr_9926_9997 = state_9888__$1;
(statearr_9926_9997[(2)] = null);

(statearr_9926_9997[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9889 === (43))){
var state_9888__$1 = state_9888;
var statearr_9927_9998 = state_9888__$1;
(statearr_9927_9998[(2)] = null);

(statearr_9927_9998[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9889 === (29))){
var inst_9872 = (state_9888[(2)]);
var state_9888__$1 = state_9888;
var statearr_9928_9999 = state_9888__$1;
(statearr_9928_9999[(2)] = inst_9872);

(statearr_9928_9999[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9889 === (44))){
var inst_9881 = (state_9888[(2)]);
var state_9888__$1 = (function (){var statearr_9929 = state_9888;
(statearr_9929[(28)] = inst_9881);

return statearr_9929;
})();
var statearr_9930_10000 = state_9888__$1;
(statearr_9930_10000[(2)] = null);

(statearr_9930_10000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9889 === (6))){
var inst_9820 = (state_9888[(29)]);
var inst_9819 = cljs.core.deref.call(null,cs);
var inst_9820__$1 = cljs.core.keys.call(null,inst_9819);
var inst_9821 = cljs.core.count.call(null,inst_9820__$1);
var inst_9822 = cljs.core.reset_BANG_.call(null,dctr,inst_9821);
var inst_9827 = cljs.core.seq.call(null,inst_9820__$1);
var inst_9828 = inst_9827;
var inst_9829 = null;
var inst_9830 = (0);
var inst_9831 = (0);
var state_9888__$1 = (function (){var statearr_9931 = state_9888;
(statearr_9931[(9)] = inst_9829);

(statearr_9931[(20)] = inst_9828);

(statearr_9931[(21)] = inst_9830);

(statearr_9931[(29)] = inst_9820__$1);

(statearr_9931[(10)] = inst_9831);

(statearr_9931[(30)] = inst_9822);

return statearr_9931;
})();
var statearr_9932_10001 = state_9888__$1;
(statearr_9932_10001[(2)] = null);

(statearr_9932_10001[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9889 === (28))){
var inst_9828 = (state_9888[(20)]);
var inst_9847 = (state_9888[(25)]);
var inst_9847__$1 = cljs.core.seq.call(null,inst_9828);
var state_9888__$1 = (function (){var statearr_9933 = state_9888;
(statearr_9933[(25)] = inst_9847__$1);

return statearr_9933;
})();
if(inst_9847__$1){
var statearr_9934_10002 = state_9888__$1;
(statearr_9934_10002[(1)] = (33));

} else {
var statearr_9935_10003 = state_9888__$1;
(statearr_9935_10003[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9889 === (25))){
var inst_9830 = (state_9888[(21)]);
var inst_9831 = (state_9888[(10)]);
var inst_9833 = (inst_9831 < inst_9830);
var inst_9834 = inst_9833;
var state_9888__$1 = state_9888;
if(cljs.core.truth_(inst_9834)){
var statearr_9936_10004 = state_9888__$1;
(statearr_9936_10004[(1)] = (27));

} else {
var statearr_9937_10005 = state_9888__$1;
(statearr_9937_10005[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9889 === (34))){
var state_9888__$1 = state_9888;
var statearr_9938_10006 = state_9888__$1;
(statearr_9938_10006[(2)] = null);

(statearr_9938_10006[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9889 === (17))){
var state_9888__$1 = state_9888;
var statearr_9939_10007 = state_9888__$1;
(statearr_9939_10007[(2)] = null);

(statearr_9939_10007[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9889 === (3))){
var inst_9886 = (state_9888[(2)]);
var state_9888__$1 = state_9888;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9888__$1,inst_9886);
} else {
if((state_val_9889 === (12))){
var inst_9815 = (state_9888[(2)]);
var state_9888__$1 = state_9888;
var statearr_9940_10008 = state_9888__$1;
(statearr_9940_10008[(2)] = inst_9815);

(statearr_9940_10008[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9889 === (2))){
var state_9888__$1 = state_9888;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9888__$1,(4),ch);
} else {
if((state_val_9889 === (23))){
var state_9888__$1 = state_9888;
var statearr_9941_10009 = state_9888__$1;
(statearr_9941_10009[(2)] = null);

(statearr_9941_10009[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9889 === (35))){
var inst_9870 = (state_9888[(2)]);
var state_9888__$1 = state_9888;
var statearr_9942_10010 = state_9888__$1;
(statearr_9942_10010[(2)] = inst_9870);

(statearr_9942_10010[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9889 === (19))){
var inst_9789 = (state_9888[(7)]);
var inst_9793 = cljs.core.chunk_first.call(null,inst_9789);
var inst_9794 = cljs.core.chunk_rest.call(null,inst_9789);
var inst_9795 = cljs.core.count.call(null,inst_9793);
var inst_9769 = inst_9794;
var inst_9770 = inst_9793;
var inst_9771 = inst_9795;
var inst_9772 = (0);
var state_9888__$1 = (function (){var statearr_9943 = state_9888;
(statearr_9943[(13)] = inst_9771);

(statearr_9943[(14)] = inst_9770);

(statearr_9943[(16)] = inst_9769);

(statearr_9943[(17)] = inst_9772);

return statearr_9943;
})();
var statearr_9944_10011 = state_9888__$1;
(statearr_9944_10011[(2)] = null);

(statearr_9944_10011[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9889 === (11))){
var inst_9789 = (state_9888[(7)]);
var inst_9769 = (state_9888[(16)]);
var inst_9789__$1 = cljs.core.seq.call(null,inst_9769);
var state_9888__$1 = (function (){var statearr_9945 = state_9888;
(statearr_9945[(7)] = inst_9789__$1);

return statearr_9945;
})();
if(inst_9789__$1){
var statearr_9946_10012 = state_9888__$1;
(statearr_9946_10012[(1)] = (16));

} else {
var statearr_9947_10013 = state_9888__$1;
(statearr_9947_10013[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9889 === (9))){
var inst_9817 = (state_9888[(2)]);
var state_9888__$1 = state_9888;
var statearr_9948_10014 = state_9888__$1;
(statearr_9948_10014[(2)] = inst_9817);

(statearr_9948_10014[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9889 === (5))){
var inst_9767 = cljs.core.deref.call(null,cs);
var inst_9768 = cljs.core.seq.call(null,inst_9767);
var inst_9769 = inst_9768;
var inst_9770 = null;
var inst_9771 = (0);
var inst_9772 = (0);
var state_9888__$1 = (function (){var statearr_9949 = state_9888;
(statearr_9949[(13)] = inst_9771);

(statearr_9949[(14)] = inst_9770);

(statearr_9949[(16)] = inst_9769);

(statearr_9949[(17)] = inst_9772);

return statearr_9949;
})();
var statearr_9950_10015 = state_9888__$1;
(statearr_9950_10015[(2)] = null);

(statearr_9950_10015[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9889 === (14))){
var state_9888__$1 = state_9888;
var statearr_9951_10016 = state_9888__$1;
(statearr_9951_10016[(2)] = null);

(statearr_9951_10016[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9889 === (45))){
var inst_9878 = (state_9888[(2)]);
var state_9888__$1 = state_9888;
var statearr_9952_10017 = state_9888__$1;
(statearr_9952_10017[(2)] = inst_9878);

(statearr_9952_10017[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9889 === (26))){
var inst_9820 = (state_9888[(29)]);
var inst_9874 = (state_9888[(2)]);
var inst_9875 = cljs.core.seq.call(null,inst_9820);
var state_9888__$1 = (function (){var statearr_9953 = state_9888;
(statearr_9953[(31)] = inst_9874);

return statearr_9953;
})();
if(inst_9875){
var statearr_9954_10018 = state_9888__$1;
(statearr_9954_10018[(1)] = (42));

} else {
var statearr_9955_10019 = state_9888__$1;
(statearr_9955_10019[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9889 === (16))){
var inst_9789 = (state_9888[(7)]);
var inst_9791 = cljs.core.chunked_seq_QMARK_.call(null,inst_9789);
var state_9888__$1 = state_9888;
if(inst_9791){
var statearr_9956_10020 = state_9888__$1;
(statearr_9956_10020[(1)] = (19));

} else {
var statearr_9957_10021 = state_9888__$1;
(statearr_9957_10021[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9889 === (38))){
var inst_9867 = (state_9888[(2)]);
var state_9888__$1 = state_9888;
var statearr_9958_10022 = state_9888__$1;
(statearr_9958_10022[(2)] = inst_9867);

(statearr_9958_10022[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9889 === (30))){
var state_9888__$1 = state_9888;
var statearr_9959_10023 = state_9888__$1;
(statearr_9959_10023[(2)] = null);

(statearr_9959_10023[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9889 === (10))){
var inst_9770 = (state_9888[(14)]);
var inst_9772 = (state_9888[(17)]);
var inst_9778 = cljs.core._nth.call(null,inst_9770,inst_9772);
var inst_9779 = cljs.core.nth.call(null,inst_9778,(0),null);
var inst_9780 = cljs.core.nth.call(null,inst_9778,(1),null);
var state_9888__$1 = (function (){var statearr_9960 = state_9888;
(statearr_9960[(26)] = inst_9779);

return statearr_9960;
})();
if(cljs.core.truth_(inst_9780)){
var statearr_9961_10024 = state_9888__$1;
(statearr_9961_10024[(1)] = (13));

} else {
var statearr_9962_10025 = state_9888__$1;
(statearr_9962_10025[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9889 === (18))){
var inst_9813 = (state_9888[(2)]);
var state_9888__$1 = state_9888;
var statearr_9963_10026 = state_9888__$1;
(statearr_9963_10026[(2)] = inst_9813);

(statearr_9963_10026[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9889 === (42))){
var state_9888__$1 = state_9888;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9888__$1,(45),dchan);
} else {
if((state_val_9889 === (37))){
var inst_9856 = (state_9888[(23)]);
var inst_9847 = (state_9888[(25)]);
var inst_9760 = (state_9888[(12)]);
var inst_9856__$1 = cljs.core.first.call(null,inst_9847);
var inst_9857 = cljs.core.async.put_BANG_.call(null,inst_9856__$1,inst_9760,done);
var state_9888__$1 = (function (){var statearr_9964 = state_9888;
(statearr_9964[(23)] = inst_9856__$1);

return statearr_9964;
})();
if(cljs.core.truth_(inst_9857)){
var statearr_9965_10027 = state_9888__$1;
(statearr_9965_10027[(1)] = (39));

} else {
var statearr_9966_10028 = state_9888__$1;
(statearr_9966_10028[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9889 === (8))){
var inst_9771 = (state_9888[(13)]);
var inst_9772 = (state_9888[(17)]);
var inst_9774 = (inst_9772 < inst_9771);
var inst_9775 = inst_9774;
var state_9888__$1 = state_9888;
if(cljs.core.truth_(inst_9775)){
var statearr_9967_10029 = state_9888__$1;
(statearr_9967_10029[(1)] = (10));

} else {
var statearr_9968_10030 = state_9888__$1;
(statearr_9968_10030[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8669__auto___9976,cs,m,dchan,dctr,done))
;
return ((function (switch__8557__auto__,c__8669__auto___9976,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__8558__auto__ = null;
var cljs$core$async$mult_$_state_machine__8558__auto____0 = (function (){
var statearr_9972 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9972[(0)] = cljs$core$async$mult_$_state_machine__8558__auto__);

(statearr_9972[(1)] = (1));

return statearr_9972;
});
var cljs$core$async$mult_$_state_machine__8558__auto____1 = (function (state_9888){
while(true){
var ret_value__8559__auto__ = (function (){try{while(true){
var result__8560__auto__ = switch__8557__auto__.call(null,state_9888);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8560__auto__;
}
break;
}
}catch (e9973){if((e9973 instanceof Object)){
var ex__8561__auto__ = e9973;
var statearr_9974_10031 = state_9888;
(statearr_9974_10031[(5)] = ex__8561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9888);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9973;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10032 = state_9888;
state_9888 = G__10032;
continue;
} else {
return ret_value__8559__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__8558__auto__ = function(state_9888){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__8558__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__8558__auto____1.call(this,state_9888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__8558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__8558__auto____0;
cljs$core$async$mult_$_state_machine__8558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__8558__auto____1;
return cljs$core$async$mult_$_state_machine__8558__auto__;
})()
;})(switch__8557__auto__,c__8669__auto___9976,cs,m,dchan,dctr,done))
})();
var state__8671__auto__ = (function (){var statearr_9975 = f__8670__auto__.call(null);
(statearr_9975[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8669__auto___9976);

return statearr_9975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8671__auto__);
});})(c__8669__auto___9976,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args10033 = [];
var len__7214__auto___10036 = arguments.length;
var i__7215__auto___10037 = (0);
while(true){
if((i__7215__auto___10037 < len__7214__auto___10036)){
args10033.push((arguments[i__7215__auto___10037]));

var G__10038 = (i__7215__auto___10037 + (1));
i__7215__auto___10037 = G__10038;
continue;
} else {
}
break;
}

var G__10035 = args10033.length;
switch (G__10035) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10033.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__6811__auto__ = (((m == null))?null:m);
var m__6812__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,m,ch);
} else {
var m__6812__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__6811__auto__ = (((m == null))?null:m);
var m__6812__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,m,ch);
} else {
var m__6812__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__6811__auto__ = (((m == null))?null:m);
var m__6812__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,m);
} else {
var m__6812__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__6811__auto__ = (((m == null))?null:m);
var m__6812__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,m,state_map);
} else {
var m__6812__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__6811__auto__ = (((m == null))?null:m);
var m__6812__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,m,mode);
} else {
var m__6812__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__7221__auto__ = [];
var len__7214__auto___10050 = arguments.length;
var i__7215__auto___10051 = (0);
while(true){
if((i__7215__auto___10051 < len__7214__auto___10050)){
args__7221__auto__.push((arguments[i__7215__auto___10051]));

var G__10052 = (i__7215__auto___10051 + (1));
i__7215__auto___10051 = G__10052;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((3) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7222__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__10044){
var map__10045 = p__10044;
var map__10045__$1 = ((((!((map__10045 == null)))?((((map__10045.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10045.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10045):map__10045);
var opts = map__10045__$1;
var statearr_10047_10053 = state;
(statearr_10047_10053[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__10045,map__10045__$1,opts){
return (function (val){
var statearr_10048_10054 = state;
(statearr_10048_10054[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__10045,map__10045__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_10049_10055 = state;
(statearr_10049_10055[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq10040){
var G__10041 = cljs.core.first.call(null,seq10040);
var seq10040__$1 = cljs.core.next.call(null,seq10040);
var G__10042 = cljs.core.first.call(null,seq10040__$1);
var seq10040__$2 = cljs.core.next.call(null,seq10040__$1);
var G__10043 = cljs.core.first.call(null,seq10040__$2);
var seq10040__$3 = cljs.core.next.call(null,seq10040__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__10041,G__10042,G__10043,seq10040__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async10219 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10219 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta10220){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta10220 = meta10220;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10219.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10221,meta10220__$1){
var self__ = this;
var _10221__$1 = this;
return (new cljs.core.async.t_cljs$core$async10219(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta10220__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10219.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10221){
var self__ = this;
var _10221__$1 = this;
return self__.meta10220;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10219.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async10219.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10219.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async10219.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10219.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10219.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10219.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10219.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10219.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta10220","meta10220",286796140,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10219.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10219.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10219";

cljs.core.async.t_cljs$core$async10219.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async10219");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async10219 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async10219(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta10220){
return (new cljs.core.async.t_cljs$core$async10219(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta10220));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async10219(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__8669__auto___10382 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8669__auto___10382,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__8670__auto__ = (function (){var switch__8557__auto__ = ((function (c__8669__auto___10382,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_10319){
var state_val_10320 = (state_10319[(1)]);
if((state_val_10320 === (7))){
var inst_10237 = (state_10319[(2)]);
var state_10319__$1 = state_10319;
var statearr_10321_10383 = state_10319__$1;
(statearr_10321_10383[(2)] = inst_10237);

(statearr_10321_10383[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10320 === (20))){
var inst_10249 = (state_10319[(7)]);
var state_10319__$1 = state_10319;
var statearr_10322_10384 = state_10319__$1;
(statearr_10322_10384[(2)] = inst_10249);

(statearr_10322_10384[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10320 === (27))){
var state_10319__$1 = state_10319;
var statearr_10323_10385 = state_10319__$1;
(statearr_10323_10385[(2)] = null);

(statearr_10323_10385[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10320 === (1))){
var inst_10225 = (state_10319[(8)]);
var inst_10225__$1 = calc_state.call(null);
var inst_10227 = (inst_10225__$1 == null);
var inst_10228 = cljs.core.not.call(null,inst_10227);
var state_10319__$1 = (function (){var statearr_10324 = state_10319;
(statearr_10324[(8)] = inst_10225__$1);

return statearr_10324;
})();
if(inst_10228){
var statearr_10325_10386 = state_10319__$1;
(statearr_10325_10386[(1)] = (2));

} else {
var statearr_10326_10387 = state_10319__$1;
(statearr_10326_10387[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10320 === (24))){
var inst_10293 = (state_10319[(9)]);
var inst_10272 = (state_10319[(10)]);
var inst_10279 = (state_10319[(11)]);
var inst_10293__$1 = inst_10272.call(null,inst_10279);
var state_10319__$1 = (function (){var statearr_10327 = state_10319;
(statearr_10327[(9)] = inst_10293__$1);

return statearr_10327;
})();
if(cljs.core.truth_(inst_10293__$1)){
var statearr_10328_10388 = state_10319__$1;
(statearr_10328_10388[(1)] = (29));

} else {
var statearr_10329_10389 = state_10319__$1;
(statearr_10329_10389[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10320 === (4))){
var inst_10240 = (state_10319[(2)]);
var state_10319__$1 = state_10319;
if(cljs.core.truth_(inst_10240)){
var statearr_10330_10390 = state_10319__$1;
(statearr_10330_10390[(1)] = (8));

} else {
var statearr_10331_10391 = state_10319__$1;
(statearr_10331_10391[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10320 === (15))){
var inst_10266 = (state_10319[(2)]);
var state_10319__$1 = state_10319;
if(cljs.core.truth_(inst_10266)){
var statearr_10332_10392 = state_10319__$1;
(statearr_10332_10392[(1)] = (19));

} else {
var statearr_10333_10393 = state_10319__$1;
(statearr_10333_10393[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10320 === (21))){
var inst_10271 = (state_10319[(12)]);
var inst_10271__$1 = (state_10319[(2)]);
var inst_10272 = cljs.core.get.call(null,inst_10271__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_10273 = cljs.core.get.call(null,inst_10271__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_10274 = cljs.core.get.call(null,inst_10271__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_10319__$1 = (function (){var statearr_10334 = state_10319;
(statearr_10334[(10)] = inst_10272);

(statearr_10334[(13)] = inst_10273);

(statearr_10334[(12)] = inst_10271__$1);

return statearr_10334;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_10319__$1,(22),inst_10274);
} else {
if((state_val_10320 === (31))){
var inst_10301 = (state_10319[(2)]);
var state_10319__$1 = state_10319;
if(cljs.core.truth_(inst_10301)){
var statearr_10335_10394 = state_10319__$1;
(statearr_10335_10394[(1)] = (32));

} else {
var statearr_10336_10395 = state_10319__$1;
(statearr_10336_10395[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10320 === (32))){
var inst_10278 = (state_10319[(14)]);
var state_10319__$1 = state_10319;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10319__$1,(35),out,inst_10278);
} else {
if((state_val_10320 === (33))){
var inst_10271 = (state_10319[(12)]);
var inst_10249 = inst_10271;
var state_10319__$1 = (function (){var statearr_10337 = state_10319;
(statearr_10337[(7)] = inst_10249);

return statearr_10337;
})();
var statearr_10338_10396 = state_10319__$1;
(statearr_10338_10396[(2)] = null);

(statearr_10338_10396[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10320 === (13))){
var inst_10249 = (state_10319[(7)]);
var inst_10256 = inst_10249.cljs$lang$protocol_mask$partition0$;
var inst_10257 = (inst_10256 & (64));
var inst_10258 = inst_10249.cljs$core$ISeq$;
var inst_10259 = (inst_10257) || (inst_10258);
var state_10319__$1 = state_10319;
if(cljs.core.truth_(inst_10259)){
var statearr_10339_10397 = state_10319__$1;
(statearr_10339_10397[(1)] = (16));

} else {
var statearr_10340_10398 = state_10319__$1;
(statearr_10340_10398[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10320 === (22))){
var inst_10278 = (state_10319[(14)]);
var inst_10279 = (state_10319[(11)]);
var inst_10277 = (state_10319[(2)]);
var inst_10278__$1 = cljs.core.nth.call(null,inst_10277,(0),null);
var inst_10279__$1 = cljs.core.nth.call(null,inst_10277,(1),null);
var inst_10280 = (inst_10278__$1 == null);
var inst_10281 = cljs.core._EQ_.call(null,inst_10279__$1,change);
var inst_10282 = (inst_10280) || (inst_10281);
var state_10319__$1 = (function (){var statearr_10341 = state_10319;
(statearr_10341[(14)] = inst_10278__$1);

(statearr_10341[(11)] = inst_10279__$1);

return statearr_10341;
})();
if(cljs.core.truth_(inst_10282)){
var statearr_10342_10399 = state_10319__$1;
(statearr_10342_10399[(1)] = (23));

} else {
var statearr_10343_10400 = state_10319__$1;
(statearr_10343_10400[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10320 === (36))){
var inst_10271 = (state_10319[(12)]);
var inst_10249 = inst_10271;
var state_10319__$1 = (function (){var statearr_10344 = state_10319;
(statearr_10344[(7)] = inst_10249);

return statearr_10344;
})();
var statearr_10345_10401 = state_10319__$1;
(statearr_10345_10401[(2)] = null);

(statearr_10345_10401[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10320 === (29))){
var inst_10293 = (state_10319[(9)]);
var state_10319__$1 = state_10319;
var statearr_10346_10402 = state_10319__$1;
(statearr_10346_10402[(2)] = inst_10293);

(statearr_10346_10402[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10320 === (6))){
var state_10319__$1 = state_10319;
var statearr_10347_10403 = state_10319__$1;
(statearr_10347_10403[(2)] = false);

(statearr_10347_10403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10320 === (28))){
var inst_10289 = (state_10319[(2)]);
var inst_10290 = calc_state.call(null);
var inst_10249 = inst_10290;
var state_10319__$1 = (function (){var statearr_10348 = state_10319;
(statearr_10348[(15)] = inst_10289);

(statearr_10348[(7)] = inst_10249);

return statearr_10348;
})();
var statearr_10349_10404 = state_10319__$1;
(statearr_10349_10404[(2)] = null);

(statearr_10349_10404[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10320 === (25))){
var inst_10315 = (state_10319[(2)]);
var state_10319__$1 = state_10319;
var statearr_10350_10405 = state_10319__$1;
(statearr_10350_10405[(2)] = inst_10315);

(statearr_10350_10405[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10320 === (34))){
var inst_10313 = (state_10319[(2)]);
var state_10319__$1 = state_10319;
var statearr_10351_10406 = state_10319__$1;
(statearr_10351_10406[(2)] = inst_10313);

(statearr_10351_10406[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10320 === (17))){
var state_10319__$1 = state_10319;
var statearr_10352_10407 = state_10319__$1;
(statearr_10352_10407[(2)] = false);

(statearr_10352_10407[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10320 === (3))){
var state_10319__$1 = state_10319;
var statearr_10353_10408 = state_10319__$1;
(statearr_10353_10408[(2)] = false);

(statearr_10353_10408[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10320 === (12))){
var inst_10317 = (state_10319[(2)]);
var state_10319__$1 = state_10319;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10319__$1,inst_10317);
} else {
if((state_val_10320 === (2))){
var inst_10225 = (state_10319[(8)]);
var inst_10230 = inst_10225.cljs$lang$protocol_mask$partition0$;
var inst_10231 = (inst_10230 & (64));
var inst_10232 = inst_10225.cljs$core$ISeq$;
var inst_10233 = (inst_10231) || (inst_10232);
var state_10319__$1 = state_10319;
if(cljs.core.truth_(inst_10233)){
var statearr_10354_10409 = state_10319__$1;
(statearr_10354_10409[(1)] = (5));

} else {
var statearr_10355_10410 = state_10319__$1;
(statearr_10355_10410[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10320 === (23))){
var inst_10278 = (state_10319[(14)]);
var inst_10284 = (inst_10278 == null);
var state_10319__$1 = state_10319;
if(cljs.core.truth_(inst_10284)){
var statearr_10356_10411 = state_10319__$1;
(statearr_10356_10411[(1)] = (26));

} else {
var statearr_10357_10412 = state_10319__$1;
(statearr_10357_10412[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10320 === (35))){
var inst_10304 = (state_10319[(2)]);
var state_10319__$1 = state_10319;
if(cljs.core.truth_(inst_10304)){
var statearr_10358_10413 = state_10319__$1;
(statearr_10358_10413[(1)] = (36));

} else {
var statearr_10359_10414 = state_10319__$1;
(statearr_10359_10414[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10320 === (19))){
var inst_10249 = (state_10319[(7)]);
var inst_10268 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10249);
var state_10319__$1 = state_10319;
var statearr_10360_10415 = state_10319__$1;
(statearr_10360_10415[(2)] = inst_10268);

(statearr_10360_10415[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10320 === (11))){
var inst_10249 = (state_10319[(7)]);
var inst_10253 = (inst_10249 == null);
var inst_10254 = cljs.core.not.call(null,inst_10253);
var state_10319__$1 = state_10319;
if(inst_10254){
var statearr_10361_10416 = state_10319__$1;
(statearr_10361_10416[(1)] = (13));

} else {
var statearr_10362_10417 = state_10319__$1;
(statearr_10362_10417[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10320 === (9))){
var inst_10225 = (state_10319[(8)]);
var state_10319__$1 = state_10319;
var statearr_10363_10418 = state_10319__$1;
(statearr_10363_10418[(2)] = inst_10225);

(statearr_10363_10418[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10320 === (5))){
var state_10319__$1 = state_10319;
var statearr_10364_10419 = state_10319__$1;
(statearr_10364_10419[(2)] = true);

(statearr_10364_10419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10320 === (14))){
var state_10319__$1 = state_10319;
var statearr_10365_10420 = state_10319__$1;
(statearr_10365_10420[(2)] = false);

(statearr_10365_10420[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10320 === (26))){
var inst_10279 = (state_10319[(11)]);
var inst_10286 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_10279);
var state_10319__$1 = state_10319;
var statearr_10366_10421 = state_10319__$1;
(statearr_10366_10421[(2)] = inst_10286);

(statearr_10366_10421[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10320 === (16))){
var state_10319__$1 = state_10319;
var statearr_10367_10422 = state_10319__$1;
(statearr_10367_10422[(2)] = true);

(statearr_10367_10422[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10320 === (38))){
var inst_10309 = (state_10319[(2)]);
var state_10319__$1 = state_10319;
var statearr_10368_10423 = state_10319__$1;
(statearr_10368_10423[(2)] = inst_10309);

(statearr_10368_10423[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10320 === (30))){
var inst_10272 = (state_10319[(10)]);
var inst_10273 = (state_10319[(13)]);
var inst_10279 = (state_10319[(11)]);
var inst_10296 = cljs.core.empty_QMARK_.call(null,inst_10272);
var inst_10297 = inst_10273.call(null,inst_10279);
var inst_10298 = cljs.core.not.call(null,inst_10297);
var inst_10299 = (inst_10296) && (inst_10298);
var state_10319__$1 = state_10319;
var statearr_10369_10424 = state_10319__$1;
(statearr_10369_10424[(2)] = inst_10299);

(statearr_10369_10424[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10320 === (10))){
var inst_10225 = (state_10319[(8)]);
var inst_10245 = (state_10319[(2)]);
var inst_10246 = cljs.core.get.call(null,inst_10245,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_10247 = cljs.core.get.call(null,inst_10245,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_10248 = cljs.core.get.call(null,inst_10245,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_10249 = inst_10225;
var state_10319__$1 = (function (){var statearr_10370 = state_10319;
(statearr_10370[(16)] = inst_10246);

(statearr_10370[(17)] = inst_10247);

(statearr_10370[(7)] = inst_10249);

(statearr_10370[(18)] = inst_10248);

return statearr_10370;
})();
var statearr_10371_10425 = state_10319__$1;
(statearr_10371_10425[(2)] = null);

(statearr_10371_10425[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10320 === (18))){
var inst_10263 = (state_10319[(2)]);
var state_10319__$1 = state_10319;
var statearr_10372_10426 = state_10319__$1;
(statearr_10372_10426[(2)] = inst_10263);

(statearr_10372_10426[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10320 === (37))){
var state_10319__$1 = state_10319;
var statearr_10373_10427 = state_10319__$1;
(statearr_10373_10427[(2)] = null);

(statearr_10373_10427[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10320 === (8))){
var inst_10225 = (state_10319[(8)]);
var inst_10242 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10225);
var state_10319__$1 = state_10319;
var statearr_10374_10428 = state_10319__$1;
(statearr_10374_10428[(2)] = inst_10242);

(statearr_10374_10428[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8669__auto___10382,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__8557__auto__,c__8669__auto___10382,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__8558__auto__ = null;
var cljs$core$async$mix_$_state_machine__8558__auto____0 = (function (){
var statearr_10378 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10378[(0)] = cljs$core$async$mix_$_state_machine__8558__auto__);

(statearr_10378[(1)] = (1));

return statearr_10378;
});
var cljs$core$async$mix_$_state_machine__8558__auto____1 = (function (state_10319){
while(true){
var ret_value__8559__auto__ = (function (){try{while(true){
var result__8560__auto__ = switch__8557__auto__.call(null,state_10319);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8560__auto__;
}
break;
}
}catch (e10379){if((e10379 instanceof Object)){
var ex__8561__auto__ = e10379;
var statearr_10380_10429 = state_10319;
(statearr_10380_10429[(5)] = ex__8561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10319);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10379;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10430 = state_10319;
state_10319 = G__10430;
continue;
} else {
return ret_value__8559__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__8558__auto__ = function(state_10319){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__8558__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__8558__auto____1.call(this,state_10319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__8558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__8558__auto____0;
cljs$core$async$mix_$_state_machine__8558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__8558__auto____1;
return cljs$core$async$mix_$_state_machine__8558__auto__;
})()
;})(switch__8557__auto__,c__8669__auto___10382,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__8671__auto__ = (function (){var statearr_10381 = f__8670__auto__.call(null);
(statearr_10381[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8669__auto___10382);

return statearr_10381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8671__auto__);
});})(c__8669__auto___10382,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__6811__auto__ = (((p == null))?null:p);
var m__6812__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__6812__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__6811__auto__ = (((p == null))?null:p);
var m__6812__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,p,v,ch);
} else {
var m__6812__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args10431 = [];
var len__7214__auto___10434 = arguments.length;
var i__7215__auto___10435 = (0);
while(true){
if((i__7215__auto___10435 < len__7214__auto___10434)){
args10431.push((arguments[i__7215__auto___10435]));

var G__10436 = (i__7215__auto___10435 + (1));
i__7215__auto___10435 = G__10436;
continue;
} else {
}
break;
}

var G__10433 = args10431.length;
switch (G__10433) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10431.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__6811__auto__ = (((p == null))?null:p);
var m__6812__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,p);
} else {
var m__6812__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__6811__auto__ = (((p == null))?null:p);
var m__6812__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,p,v);
} else {
var m__6812__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args10439 = [];
var len__7214__auto___10564 = arguments.length;
var i__7215__auto___10565 = (0);
while(true){
if((i__7215__auto___10565 < len__7214__auto___10564)){
args10439.push((arguments[i__7215__auto___10565]));

var G__10566 = (i__7215__auto___10565 + (1));
i__7215__auto___10565 = G__10566;
continue;
} else {
}
break;
}

var G__10441 = args10439.length;
switch (G__10441) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10439.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__6156__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__6156__auto__,mults){
return (function (p1__10438_SHARP_){
if(cljs.core.truth_(p1__10438_SHARP_.call(null,topic))){
return p1__10438_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__10438_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__6156__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async10442 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10442 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta10443){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta10443 = meta10443;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10442.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_10444,meta10443__$1){
var self__ = this;
var _10444__$1 = this;
return (new cljs.core.async.t_cljs$core$async10442(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta10443__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10442.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_10444){
var self__ = this;
var _10444__$1 = this;
return self__.meta10443;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10442.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async10442.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10442.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async10442.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10442.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10442.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10442.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10442.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta10443","meta10443",1815184573,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10442.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10442.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10442";

cljs.core.async.t_cljs$core$async10442.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async10442");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async10442 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async10442(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta10443){
return (new cljs.core.async.t_cljs$core$async10442(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta10443));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async10442(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__8669__auto___10568 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8669__auto___10568,mults,ensure_mult,p){
return (function (){
var f__8670__auto__ = (function (){var switch__8557__auto__ = ((function (c__8669__auto___10568,mults,ensure_mult,p){
return (function (state_10516){
var state_val_10517 = (state_10516[(1)]);
if((state_val_10517 === (7))){
var inst_10512 = (state_10516[(2)]);
var state_10516__$1 = state_10516;
var statearr_10518_10569 = state_10516__$1;
(statearr_10518_10569[(2)] = inst_10512);

(statearr_10518_10569[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10517 === (20))){
var state_10516__$1 = state_10516;
var statearr_10519_10570 = state_10516__$1;
(statearr_10519_10570[(2)] = null);

(statearr_10519_10570[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10517 === (1))){
var state_10516__$1 = state_10516;
var statearr_10520_10571 = state_10516__$1;
(statearr_10520_10571[(2)] = null);

(statearr_10520_10571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10517 === (24))){
var inst_10495 = (state_10516[(7)]);
var inst_10504 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_10495);
var state_10516__$1 = state_10516;
var statearr_10521_10572 = state_10516__$1;
(statearr_10521_10572[(2)] = inst_10504);

(statearr_10521_10572[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10517 === (4))){
var inst_10447 = (state_10516[(8)]);
var inst_10447__$1 = (state_10516[(2)]);
var inst_10448 = (inst_10447__$1 == null);
var state_10516__$1 = (function (){var statearr_10522 = state_10516;
(statearr_10522[(8)] = inst_10447__$1);

return statearr_10522;
})();
if(cljs.core.truth_(inst_10448)){
var statearr_10523_10573 = state_10516__$1;
(statearr_10523_10573[(1)] = (5));

} else {
var statearr_10524_10574 = state_10516__$1;
(statearr_10524_10574[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10517 === (15))){
var inst_10489 = (state_10516[(2)]);
var state_10516__$1 = state_10516;
var statearr_10525_10575 = state_10516__$1;
(statearr_10525_10575[(2)] = inst_10489);

(statearr_10525_10575[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10517 === (21))){
var inst_10509 = (state_10516[(2)]);
var state_10516__$1 = (function (){var statearr_10526 = state_10516;
(statearr_10526[(9)] = inst_10509);

return statearr_10526;
})();
var statearr_10527_10576 = state_10516__$1;
(statearr_10527_10576[(2)] = null);

(statearr_10527_10576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10517 === (13))){
var inst_10471 = (state_10516[(10)]);
var inst_10473 = cljs.core.chunked_seq_QMARK_.call(null,inst_10471);
var state_10516__$1 = state_10516;
if(inst_10473){
var statearr_10528_10577 = state_10516__$1;
(statearr_10528_10577[(1)] = (16));

} else {
var statearr_10529_10578 = state_10516__$1;
(statearr_10529_10578[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10517 === (22))){
var inst_10501 = (state_10516[(2)]);
var state_10516__$1 = state_10516;
if(cljs.core.truth_(inst_10501)){
var statearr_10530_10579 = state_10516__$1;
(statearr_10530_10579[(1)] = (23));

} else {
var statearr_10531_10580 = state_10516__$1;
(statearr_10531_10580[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10517 === (6))){
var inst_10497 = (state_10516[(11)]);
var inst_10447 = (state_10516[(8)]);
var inst_10495 = (state_10516[(7)]);
var inst_10495__$1 = topic_fn.call(null,inst_10447);
var inst_10496 = cljs.core.deref.call(null,mults);
var inst_10497__$1 = cljs.core.get.call(null,inst_10496,inst_10495__$1);
var state_10516__$1 = (function (){var statearr_10532 = state_10516;
(statearr_10532[(11)] = inst_10497__$1);

(statearr_10532[(7)] = inst_10495__$1);

return statearr_10532;
})();
if(cljs.core.truth_(inst_10497__$1)){
var statearr_10533_10581 = state_10516__$1;
(statearr_10533_10581[(1)] = (19));

} else {
var statearr_10534_10582 = state_10516__$1;
(statearr_10534_10582[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10517 === (25))){
var inst_10506 = (state_10516[(2)]);
var state_10516__$1 = state_10516;
var statearr_10535_10583 = state_10516__$1;
(statearr_10535_10583[(2)] = inst_10506);

(statearr_10535_10583[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10517 === (17))){
var inst_10471 = (state_10516[(10)]);
var inst_10480 = cljs.core.first.call(null,inst_10471);
var inst_10481 = cljs.core.async.muxch_STAR_.call(null,inst_10480);
var inst_10482 = cljs.core.async.close_BANG_.call(null,inst_10481);
var inst_10483 = cljs.core.next.call(null,inst_10471);
var inst_10457 = inst_10483;
var inst_10458 = null;
var inst_10459 = (0);
var inst_10460 = (0);
var state_10516__$1 = (function (){var statearr_10536 = state_10516;
(statearr_10536[(12)] = inst_10457);

(statearr_10536[(13)] = inst_10458);

(statearr_10536[(14)] = inst_10459);

(statearr_10536[(15)] = inst_10460);

(statearr_10536[(16)] = inst_10482);

return statearr_10536;
})();
var statearr_10537_10584 = state_10516__$1;
(statearr_10537_10584[(2)] = null);

(statearr_10537_10584[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10517 === (3))){
var inst_10514 = (state_10516[(2)]);
var state_10516__$1 = state_10516;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10516__$1,inst_10514);
} else {
if((state_val_10517 === (12))){
var inst_10491 = (state_10516[(2)]);
var state_10516__$1 = state_10516;
var statearr_10538_10585 = state_10516__$1;
(statearr_10538_10585[(2)] = inst_10491);

(statearr_10538_10585[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10517 === (2))){
var state_10516__$1 = state_10516;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10516__$1,(4),ch);
} else {
if((state_val_10517 === (23))){
var state_10516__$1 = state_10516;
var statearr_10539_10586 = state_10516__$1;
(statearr_10539_10586[(2)] = null);

(statearr_10539_10586[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10517 === (19))){
var inst_10497 = (state_10516[(11)]);
var inst_10447 = (state_10516[(8)]);
var inst_10499 = cljs.core.async.muxch_STAR_.call(null,inst_10497);
var state_10516__$1 = state_10516;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10516__$1,(22),inst_10499,inst_10447);
} else {
if((state_val_10517 === (11))){
var inst_10457 = (state_10516[(12)]);
var inst_10471 = (state_10516[(10)]);
var inst_10471__$1 = cljs.core.seq.call(null,inst_10457);
var state_10516__$1 = (function (){var statearr_10540 = state_10516;
(statearr_10540[(10)] = inst_10471__$1);

return statearr_10540;
})();
if(inst_10471__$1){
var statearr_10541_10587 = state_10516__$1;
(statearr_10541_10587[(1)] = (13));

} else {
var statearr_10542_10588 = state_10516__$1;
(statearr_10542_10588[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10517 === (9))){
var inst_10493 = (state_10516[(2)]);
var state_10516__$1 = state_10516;
var statearr_10543_10589 = state_10516__$1;
(statearr_10543_10589[(2)] = inst_10493);

(statearr_10543_10589[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10517 === (5))){
var inst_10454 = cljs.core.deref.call(null,mults);
var inst_10455 = cljs.core.vals.call(null,inst_10454);
var inst_10456 = cljs.core.seq.call(null,inst_10455);
var inst_10457 = inst_10456;
var inst_10458 = null;
var inst_10459 = (0);
var inst_10460 = (0);
var state_10516__$1 = (function (){var statearr_10544 = state_10516;
(statearr_10544[(12)] = inst_10457);

(statearr_10544[(13)] = inst_10458);

(statearr_10544[(14)] = inst_10459);

(statearr_10544[(15)] = inst_10460);

return statearr_10544;
})();
var statearr_10545_10590 = state_10516__$1;
(statearr_10545_10590[(2)] = null);

(statearr_10545_10590[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10517 === (14))){
var state_10516__$1 = state_10516;
var statearr_10549_10591 = state_10516__$1;
(statearr_10549_10591[(2)] = null);

(statearr_10549_10591[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10517 === (16))){
var inst_10471 = (state_10516[(10)]);
var inst_10475 = cljs.core.chunk_first.call(null,inst_10471);
var inst_10476 = cljs.core.chunk_rest.call(null,inst_10471);
var inst_10477 = cljs.core.count.call(null,inst_10475);
var inst_10457 = inst_10476;
var inst_10458 = inst_10475;
var inst_10459 = inst_10477;
var inst_10460 = (0);
var state_10516__$1 = (function (){var statearr_10550 = state_10516;
(statearr_10550[(12)] = inst_10457);

(statearr_10550[(13)] = inst_10458);

(statearr_10550[(14)] = inst_10459);

(statearr_10550[(15)] = inst_10460);

return statearr_10550;
})();
var statearr_10551_10592 = state_10516__$1;
(statearr_10551_10592[(2)] = null);

(statearr_10551_10592[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10517 === (10))){
var inst_10457 = (state_10516[(12)]);
var inst_10458 = (state_10516[(13)]);
var inst_10459 = (state_10516[(14)]);
var inst_10460 = (state_10516[(15)]);
var inst_10465 = cljs.core._nth.call(null,inst_10458,inst_10460);
var inst_10466 = cljs.core.async.muxch_STAR_.call(null,inst_10465);
var inst_10467 = cljs.core.async.close_BANG_.call(null,inst_10466);
var inst_10468 = (inst_10460 + (1));
var tmp10546 = inst_10457;
var tmp10547 = inst_10458;
var tmp10548 = inst_10459;
var inst_10457__$1 = tmp10546;
var inst_10458__$1 = tmp10547;
var inst_10459__$1 = tmp10548;
var inst_10460__$1 = inst_10468;
var state_10516__$1 = (function (){var statearr_10552 = state_10516;
(statearr_10552[(12)] = inst_10457__$1);

(statearr_10552[(13)] = inst_10458__$1);

(statearr_10552[(14)] = inst_10459__$1);

(statearr_10552[(15)] = inst_10460__$1);

(statearr_10552[(17)] = inst_10467);

return statearr_10552;
})();
var statearr_10553_10593 = state_10516__$1;
(statearr_10553_10593[(2)] = null);

(statearr_10553_10593[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10517 === (18))){
var inst_10486 = (state_10516[(2)]);
var state_10516__$1 = state_10516;
var statearr_10554_10594 = state_10516__$1;
(statearr_10554_10594[(2)] = inst_10486);

(statearr_10554_10594[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10517 === (8))){
var inst_10459 = (state_10516[(14)]);
var inst_10460 = (state_10516[(15)]);
var inst_10462 = (inst_10460 < inst_10459);
var inst_10463 = inst_10462;
var state_10516__$1 = state_10516;
if(cljs.core.truth_(inst_10463)){
var statearr_10555_10595 = state_10516__$1;
(statearr_10555_10595[(1)] = (10));

} else {
var statearr_10556_10596 = state_10516__$1;
(statearr_10556_10596[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8669__auto___10568,mults,ensure_mult,p))
;
return ((function (switch__8557__auto__,c__8669__auto___10568,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__8558__auto__ = null;
var cljs$core$async$state_machine__8558__auto____0 = (function (){
var statearr_10560 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10560[(0)] = cljs$core$async$state_machine__8558__auto__);

(statearr_10560[(1)] = (1));

return statearr_10560;
});
var cljs$core$async$state_machine__8558__auto____1 = (function (state_10516){
while(true){
var ret_value__8559__auto__ = (function (){try{while(true){
var result__8560__auto__ = switch__8557__auto__.call(null,state_10516);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8560__auto__;
}
break;
}
}catch (e10561){if((e10561 instanceof Object)){
var ex__8561__auto__ = e10561;
var statearr_10562_10597 = state_10516;
(statearr_10562_10597[(5)] = ex__8561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10516);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10561;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10598 = state_10516;
state_10516 = G__10598;
continue;
} else {
return ret_value__8559__auto__;
}
break;
}
});
cljs$core$async$state_machine__8558__auto__ = function(state_10516){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8558__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8558__auto____1.call(this,state_10516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8558__auto____0;
cljs$core$async$state_machine__8558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8558__auto____1;
return cljs$core$async$state_machine__8558__auto__;
})()
;})(switch__8557__auto__,c__8669__auto___10568,mults,ensure_mult,p))
})();
var state__8671__auto__ = (function (){var statearr_10563 = f__8670__auto__.call(null);
(statearr_10563[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8669__auto___10568);

return statearr_10563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8671__auto__);
});})(c__8669__auto___10568,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args10599 = [];
var len__7214__auto___10602 = arguments.length;
var i__7215__auto___10603 = (0);
while(true){
if((i__7215__auto___10603 < len__7214__auto___10602)){
args10599.push((arguments[i__7215__auto___10603]));

var G__10604 = (i__7215__auto___10603 + (1));
i__7215__auto___10603 = G__10604;
continue;
} else {
}
break;
}

var G__10601 = args10599.length;
switch (G__10601) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10599.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args10606 = [];
var len__7214__auto___10609 = arguments.length;
var i__7215__auto___10610 = (0);
while(true){
if((i__7215__auto___10610 < len__7214__auto___10609)){
args10606.push((arguments[i__7215__auto___10610]));

var G__10611 = (i__7215__auto___10610 + (1));
i__7215__auto___10610 = G__10611;
continue;
} else {
}
break;
}

var G__10608 = args10606.length;
switch (G__10608) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10606.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args10613 = [];
var len__7214__auto___10684 = arguments.length;
var i__7215__auto___10685 = (0);
while(true){
if((i__7215__auto___10685 < len__7214__auto___10684)){
args10613.push((arguments[i__7215__auto___10685]));

var G__10686 = (i__7215__auto___10685 + (1));
i__7215__auto___10685 = G__10686;
continue;
} else {
}
break;
}

var G__10615 = args10613.length;
switch (G__10615) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10613.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__8669__auto___10688 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8669__auto___10688,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__8670__auto__ = (function (){var switch__8557__auto__ = ((function (c__8669__auto___10688,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_10654){
var state_val_10655 = (state_10654[(1)]);
if((state_val_10655 === (7))){
var state_10654__$1 = state_10654;
var statearr_10656_10689 = state_10654__$1;
(statearr_10656_10689[(2)] = null);

(statearr_10656_10689[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10655 === (1))){
var state_10654__$1 = state_10654;
var statearr_10657_10690 = state_10654__$1;
(statearr_10657_10690[(2)] = null);

(statearr_10657_10690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10655 === (4))){
var inst_10618 = (state_10654[(7)]);
var inst_10620 = (inst_10618 < cnt);
var state_10654__$1 = state_10654;
if(cljs.core.truth_(inst_10620)){
var statearr_10658_10691 = state_10654__$1;
(statearr_10658_10691[(1)] = (6));

} else {
var statearr_10659_10692 = state_10654__$1;
(statearr_10659_10692[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10655 === (15))){
var inst_10650 = (state_10654[(2)]);
var state_10654__$1 = state_10654;
var statearr_10660_10693 = state_10654__$1;
(statearr_10660_10693[(2)] = inst_10650);

(statearr_10660_10693[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10655 === (13))){
var inst_10643 = cljs.core.async.close_BANG_.call(null,out);
var state_10654__$1 = state_10654;
var statearr_10661_10694 = state_10654__$1;
(statearr_10661_10694[(2)] = inst_10643);

(statearr_10661_10694[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10655 === (6))){
var state_10654__$1 = state_10654;
var statearr_10662_10695 = state_10654__$1;
(statearr_10662_10695[(2)] = null);

(statearr_10662_10695[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10655 === (3))){
var inst_10652 = (state_10654[(2)]);
var state_10654__$1 = state_10654;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10654__$1,inst_10652);
} else {
if((state_val_10655 === (12))){
var inst_10640 = (state_10654[(8)]);
var inst_10640__$1 = (state_10654[(2)]);
var inst_10641 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_10640__$1);
var state_10654__$1 = (function (){var statearr_10663 = state_10654;
(statearr_10663[(8)] = inst_10640__$1);

return statearr_10663;
})();
if(cljs.core.truth_(inst_10641)){
var statearr_10664_10696 = state_10654__$1;
(statearr_10664_10696[(1)] = (13));

} else {
var statearr_10665_10697 = state_10654__$1;
(statearr_10665_10697[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10655 === (2))){
var inst_10617 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_10618 = (0);
var state_10654__$1 = (function (){var statearr_10666 = state_10654;
(statearr_10666[(7)] = inst_10618);

(statearr_10666[(9)] = inst_10617);

return statearr_10666;
})();
var statearr_10667_10698 = state_10654__$1;
(statearr_10667_10698[(2)] = null);

(statearr_10667_10698[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10655 === (11))){
var inst_10618 = (state_10654[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10654,(10),Object,null,(9));
var inst_10627 = chs__$1.call(null,inst_10618);
var inst_10628 = done.call(null,inst_10618);
var inst_10629 = cljs.core.async.take_BANG_.call(null,inst_10627,inst_10628);
var state_10654__$1 = state_10654;
var statearr_10668_10699 = state_10654__$1;
(statearr_10668_10699[(2)] = inst_10629);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10654__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10655 === (9))){
var inst_10618 = (state_10654[(7)]);
var inst_10631 = (state_10654[(2)]);
var inst_10632 = (inst_10618 + (1));
var inst_10618__$1 = inst_10632;
var state_10654__$1 = (function (){var statearr_10669 = state_10654;
(statearr_10669[(7)] = inst_10618__$1);

(statearr_10669[(10)] = inst_10631);

return statearr_10669;
})();
var statearr_10670_10700 = state_10654__$1;
(statearr_10670_10700[(2)] = null);

(statearr_10670_10700[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10655 === (5))){
var inst_10638 = (state_10654[(2)]);
var state_10654__$1 = (function (){var statearr_10671 = state_10654;
(statearr_10671[(11)] = inst_10638);

return statearr_10671;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10654__$1,(12),dchan);
} else {
if((state_val_10655 === (14))){
var inst_10640 = (state_10654[(8)]);
var inst_10645 = cljs.core.apply.call(null,f,inst_10640);
var state_10654__$1 = state_10654;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10654__$1,(16),out,inst_10645);
} else {
if((state_val_10655 === (16))){
var inst_10647 = (state_10654[(2)]);
var state_10654__$1 = (function (){var statearr_10672 = state_10654;
(statearr_10672[(12)] = inst_10647);

return statearr_10672;
})();
var statearr_10673_10701 = state_10654__$1;
(statearr_10673_10701[(2)] = null);

(statearr_10673_10701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10655 === (10))){
var inst_10622 = (state_10654[(2)]);
var inst_10623 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_10654__$1 = (function (){var statearr_10674 = state_10654;
(statearr_10674[(13)] = inst_10622);

return statearr_10674;
})();
var statearr_10675_10702 = state_10654__$1;
(statearr_10675_10702[(2)] = inst_10623);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10654__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10655 === (8))){
var inst_10636 = (state_10654[(2)]);
var state_10654__$1 = state_10654;
var statearr_10676_10703 = state_10654__$1;
(statearr_10676_10703[(2)] = inst_10636);

(statearr_10676_10703[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8669__auto___10688,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__8557__auto__,c__8669__auto___10688,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__8558__auto__ = null;
var cljs$core$async$state_machine__8558__auto____0 = (function (){
var statearr_10680 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10680[(0)] = cljs$core$async$state_machine__8558__auto__);

(statearr_10680[(1)] = (1));

return statearr_10680;
});
var cljs$core$async$state_machine__8558__auto____1 = (function (state_10654){
while(true){
var ret_value__8559__auto__ = (function (){try{while(true){
var result__8560__auto__ = switch__8557__auto__.call(null,state_10654);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8560__auto__;
}
break;
}
}catch (e10681){if((e10681 instanceof Object)){
var ex__8561__auto__ = e10681;
var statearr_10682_10704 = state_10654;
(statearr_10682_10704[(5)] = ex__8561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10654);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10681;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10705 = state_10654;
state_10654 = G__10705;
continue;
} else {
return ret_value__8559__auto__;
}
break;
}
});
cljs$core$async$state_machine__8558__auto__ = function(state_10654){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8558__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8558__auto____1.call(this,state_10654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8558__auto____0;
cljs$core$async$state_machine__8558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8558__auto____1;
return cljs$core$async$state_machine__8558__auto__;
})()
;})(switch__8557__auto__,c__8669__auto___10688,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__8671__auto__ = (function (){var statearr_10683 = f__8670__auto__.call(null);
(statearr_10683[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8669__auto___10688);

return statearr_10683;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8671__auto__);
});})(c__8669__auto___10688,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args10707 = [];
var len__7214__auto___10763 = arguments.length;
var i__7215__auto___10764 = (0);
while(true){
if((i__7215__auto___10764 < len__7214__auto___10763)){
args10707.push((arguments[i__7215__auto___10764]));

var G__10765 = (i__7215__auto___10764 + (1));
i__7215__auto___10764 = G__10765;
continue;
} else {
}
break;
}

var G__10709 = args10707.length;
switch (G__10709) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10707.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8669__auto___10767 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8669__auto___10767,out){
return (function (){
var f__8670__auto__ = (function (){var switch__8557__auto__ = ((function (c__8669__auto___10767,out){
return (function (state_10739){
var state_val_10740 = (state_10739[(1)]);
if((state_val_10740 === (7))){
var inst_10719 = (state_10739[(7)]);
var inst_10718 = (state_10739[(8)]);
var inst_10718__$1 = (state_10739[(2)]);
var inst_10719__$1 = cljs.core.nth.call(null,inst_10718__$1,(0),null);
var inst_10720 = cljs.core.nth.call(null,inst_10718__$1,(1),null);
var inst_10721 = (inst_10719__$1 == null);
var state_10739__$1 = (function (){var statearr_10741 = state_10739;
(statearr_10741[(9)] = inst_10720);

(statearr_10741[(7)] = inst_10719__$1);

(statearr_10741[(8)] = inst_10718__$1);

return statearr_10741;
})();
if(cljs.core.truth_(inst_10721)){
var statearr_10742_10768 = state_10739__$1;
(statearr_10742_10768[(1)] = (8));

} else {
var statearr_10743_10769 = state_10739__$1;
(statearr_10743_10769[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10740 === (1))){
var inst_10710 = cljs.core.vec.call(null,chs);
var inst_10711 = inst_10710;
var state_10739__$1 = (function (){var statearr_10744 = state_10739;
(statearr_10744[(10)] = inst_10711);

return statearr_10744;
})();
var statearr_10745_10770 = state_10739__$1;
(statearr_10745_10770[(2)] = null);

(statearr_10745_10770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10740 === (4))){
var inst_10711 = (state_10739[(10)]);
var state_10739__$1 = state_10739;
return cljs.core.async.ioc_alts_BANG_.call(null,state_10739__$1,(7),inst_10711);
} else {
if((state_val_10740 === (6))){
var inst_10735 = (state_10739[(2)]);
var state_10739__$1 = state_10739;
var statearr_10746_10771 = state_10739__$1;
(statearr_10746_10771[(2)] = inst_10735);

(statearr_10746_10771[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10740 === (3))){
var inst_10737 = (state_10739[(2)]);
var state_10739__$1 = state_10739;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10739__$1,inst_10737);
} else {
if((state_val_10740 === (2))){
var inst_10711 = (state_10739[(10)]);
var inst_10713 = cljs.core.count.call(null,inst_10711);
var inst_10714 = (inst_10713 > (0));
var state_10739__$1 = state_10739;
if(cljs.core.truth_(inst_10714)){
var statearr_10748_10772 = state_10739__$1;
(statearr_10748_10772[(1)] = (4));

} else {
var statearr_10749_10773 = state_10739__$1;
(statearr_10749_10773[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10740 === (11))){
var inst_10711 = (state_10739[(10)]);
var inst_10728 = (state_10739[(2)]);
var tmp10747 = inst_10711;
var inst_10711__$1 = tmp10747;
var state_10739__$1 = (function (){var statearr_10750 = state_10739;
(statearr_10750[(10)] = inst_10711__$1);

(statearr_10750[(11)] = inst_10728);

return statearr_10750;
})();
var statearr_10751_10774 = state_10739__$1;
(statearr_10751_10774[(2)] = null);

(statearr_10751_10774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10740 === (9))){
var inst_10719 = (state_10739[(7)]);
var state_10739__$1 = state_10739;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10739__$1,(11),out,inst_10719);
} else {
if((state_val_10740 === (5))){
var inst_10733 = cljs.core.async.close_BANG_.call(null,out);
var state_10739__$1 = state_10739;
var statearr_10752_10775 = state_10739__$1;
(statearr_10752_10775[(2)] = inst_10733);

(statearr_10752_10775[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10740 === (10))){
var inst_10731 = (state_10739[(2)]);
var state_10739__$1 = state_10739;
var statearr_10753_10776 = state_10739__$1;
(statearr_10753_10776[(2)] = inst_10731);

(statearr_10753_10776[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10740 === (8))){
var inst_10720 = (state_10739[(9)]);
var inst_10711 = (state_10739[(10)]);
var inst_10719 = (state_10739[(7)]);
var inst_10718 = (state_10739[(8)]);
var inst_10723 = (function (){var cs = inst_10711;
var vec__10716 = inst_10718;
var v = inst_10719;
var c = inst_10720;
return ((function (cs,vec__10716,v,c,inst_10720,inst_10711,inst_10719,inst_10718,state_val_10740,c__8669__auto___10767,out){
return (function (p1__10706_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__10706_SHARP_);
});
;})(cs,vec__10716,v,c,inst_10720,inst_10711,inst_10719,inst_10718,state_val_10740,c__8669__auto___10767,out))
})();
var inst_10724 = cljs.core.filterv.call(null,inst_10723,inst_10711);
var inst_10711__$1 = inst_10724;
var state_10739__$1 = (function (){var statearr_10754 = state_10739;
(statearr_10754[(10)] = inst_10711__$1);

return statearr_10754;
})();
var statearr_10755_10777 = state_10739__$1;
(statearr_10755_10777[(2)] = null);

(statearr_10755_10777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__8669__auto___10767,out))
;
return ((function (switch__8557__auto__,c__8669__auto___10767,out){
return (function() {
var cljs$core$async$state_machine__8558__auto__ = null;
var cljs$core$async$state_machine__8558__auto____0 = (function (){
var statearr_10759 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10759[(0)] = cljs$core$async$state_machine__8558__auto__);

(statearr_10759[(1)] = (1));

return statearr_10759;
});
var cljs$core$async$state_machine__8558__auto____1 = (function (state_10739){
while(true){
var ret_value__8559__auto__ = (function (){try{while(true){
var result__8560__auto__ = switch__8557__auto__.call(null,state_10739);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8560__auto__;
}
break;
}
}catch (e10760){if((e10760 instanceof Object)){
var ex__8561__auto__ = e10760;
var statearr_10761_10778 = state_10739;
(statearr_10761_10778[(5)] = ex__8561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10739);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10760;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10779 = state_10739;
state_10739 = G__10779;
continue;
} else {
return ret_value__8559__auto__;
}
break;
}
});
cljs$core$async$state_machine__8558__auto__ = function(state_10739){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8558__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8558__auto____1.call(this,state_10739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8558__auto____0;
cljs$core$async$state_machine__8558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8558__auto____1;
return cljs$core$async$state_machine__8558__auto__;
})()
;})(switch__8557__auto__,c__8669__auto___10767,out))
})();
var state__8671__auto__ = (function (){var statearr_10762 = f__8670__auto__.call(null);
(statearr_10762[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8669__auto___10767);

return statearr_10762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8671__auto__);
});})(c__8669__auto___10767,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args10780 = [];
var len__7214__auto___10829 = arguments.length;
var i__7215__auto___10830 = (0);
while(true){
if((i__7215__auto___10830 < len__7214__auto___10829)){
args10780.push((arguments[i__7215__auto___10830]));

var G__10831 = (i__7215__auto___10830 + (1));
i__7215__auto___10830 = G__10831;
continue;
} else {
}
break;
}

var G__10782 = args10780.length;
switch (G__10782) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10780.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8669__auto___10833 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8669__auto___10833,out){
return (function (){
var f__8670__auto__ = (function (){var switch__8557__auto__ = ((function (c__8669__auto___10833,out){
return (function (state_10806){
var state_val_10807 = (state_10806[(1)]);
if((state_val_10807 === (7))){
var inst_10788 = (state_10806[(7)]);
var inst_10788__$1 = (state_10806[(2)]);
var inst_10789 = (inst_10788__$1 == null);
var inst_10790 = cljs.core.not.call(null,inst_10789);
var state_10806__$1 = (function (){var statearr_10808 = state_10806;
(statearr_10808[(7)] = inst_10788__$1);

return statearr_10808;
})();
if(inst_10790){
var statearr_10809_10834 = state_10806__$1;
(statearr_10809_10834[(1)] = (8));

} else {
var statearr_10810_10835 = state_10806__$1;
(statearr_10810_10835[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10807 === (1))){
var inst_10783 = (0);
var state_10806__$1 = (function (){var statearr_10811 = state_10806;
(statearr_10811[(8)] = inst_10783);

return statearr_10811;
})();
var statearr_10812_10836 = state_10806__$1;
(statearr_10812_10836[(2)] = null);

(statearr_10812_10836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10807 === (4))){
var state_10806__$1 = state_10806;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10806__$1,(7),ch);
} else {
if((state_val_10807 === (6))){
var inst_10801 = (state_10806[(2)]);
var state_10806__$1 = state_10806;
var statearr_10813_10837 = state_10806__$1;
(statearr_10813_10837[(2)] = inst_10801);

(statearr_10813_10837[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10807 === (3))){
var inst_10803 = (state_10806[(2)]);
var inst_10804 = cljs.core.async.close_BANG_.call(null,out);
var state_10806__$1 = (function (){var statearr_10814 = state_10806;
(statearr_10814[(9)] = inst_10803);

return statearr_10814;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10806__$1,inst_10804);
} else {
if((state_val_10807 === (2))){
var inst_10783 = (state_10806[(8)]);
var inst_10785 = (inst_10783 < n);
var state_10806__$1 = state_10806;
if(cljs.core.truth_(inst_10785)){
var statearr_10815_10838 = state_10806__$1;
(statearr_10815_10838[(1)] = (4));

} else {
var statearr_10816_10839 = state_10806__$1;
(statearr_10816_10839[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10807 === (11))){
var inst_10783 = (state_10806[(8)]);
var inst_10793 = (state_10806[(2)]);
var inst_10794 = (inst_10783 + (1));
var inst_10783__$1 = inst_10794;
var state_10806__$1 = (function (){var statearr_10817 = state_10806;
(statearr_10817[(8)] = inst_10783__$1);

(statearr_10817[(10)] = inst_10793);

return statearr_10817;
})();
var statearr_10818_10840 = state_10806__$1;
(statearr_10818_10840[(2)] = null);

(statearr_10818_10840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10807 === (9))){
var state_10806__$1 = state_10806;
var statearr_10819_10841 = state_10806__$1;
(statearr_10819_10841[(2)] = null);

(statearr_10819_10841[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10807 === (5))){
var state_10806__$1 = state_10806;
var statearr_10820_10842 = state_10806__$1;
(statearr_10820_10842[(2)] = null);

(statearr_10820_10842[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10807 === (10))){
var inst_10798 = (state_10806[(2)]);
var state_10806__$1 = state_10806;
var statearr_10821_10843 = state_10806__$1;
(statearr_10821_10843[(2)] = inst_10798);

(statearr_10821_10843[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10807 === (8))){
var inst_10788 = (state_10806[(7)]);
var state_10806__$1 = state_10806;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10806__$1,(11),out,inst_10788);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__8669__auto___10833,out))
;
return ((function (switch__8557__auto__,c__8669__auto___10833,out){
return (function() {
var cljs$core$async$state_machine__8558__auto__ = null;
var cljs$core$async$state_machine__8558__auto____0 = (function (){
var statearr_10825 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_10825[(0)] = cljs$core$async$state_machine__8558__auto__);

(statearr_10825[(1)] = (1));

return statearr_10825;
});
var cljs$core$async$state_machine__8558__auto____1 = (function (state_10806){
while(true){
var ret_value__8559__auto__ = (function (){try{while(true){
var result__8560__auto__ = switch__8557__auto__.call(null,state_10806);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8560__auto__;
}
break;
}
}catch (e10826){if((e10826 instanceof Object)){
var ex__8561__auto__ = e10826;
var statearr_10827_10844 = state_10806;
(statearr_10827_10844[(5)] = ex__8561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10806);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10826;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10845 = state_10806;
state_10806 = G__10845;
continue;
} else {
return ret_value__8559__auto__;
}
break;
}
});
cljs$core$async$state_machine__8558__auto__ = function(state_10806){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8558__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8558__auto____1.call(this,state_10806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8558__auto____0;
cljs$core$async$state_machine__8558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8558__auto____1;
return cljs$core$async$state_machine__8558__auto__;
})()
;})(switch__8557__auto__,c__8669__auto___10833,out))
})();
var state__8671__auto__ = (function (){var statearr_10828 = f__8670__auto__.call(null);
(statearr_10828[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8669__auto___10833);

return statearr_10828;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8671__auto__);
});})(c__8669__auto___10833,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async10853 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10853 = (function (map_LT_,f,ch,meta10854){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta10854 = meta10854;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10853.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10855,meta10854__$1){
var self__ = this;
var _10855__$1 = this;
return (new cljs.core.async.t_cljs$core$async10853(self__.map_LT_,self__.f,self__.ch,meta10854__$1));
});

cljs.core.async.t_cljs$core$async10853.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10855){
var self__ = this;
var _10855__$1 = this;
return self__.meta10854;
});

cljs.core.async.t_cljs$core$async10853.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async10853.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async10853.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async10853.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async10853.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async10856 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10856 = (function (map_LT_,f,ch,meta10854,_,fn1,meta10857){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta10854 = meta10854;
this._ = _;
this.fn1 = fn1;
this.meta10857 = meta10857;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10856.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_10858,meta10857__$1){
var self__ = this;
var _10858__$1 = this;
return (new cljs.core.async.t_cljs$core$async10856(self__.map_LT_,self__.f,self__.ch,self__.meta10854,self__._,self__.fn1,meta10857__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async10856.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_10858){
var self__ = this;
var _10858__$1 = this;
return self__.meta10857;
});})(___$1))
;

cljs.core.async.t_cljs$core$async10856.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async10856.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async10856.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async10856.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__10846_SHARP_){
return f1.call(null,(((p1__10846_SHARP_ == null))?null:self__.f.call(null,p1__10846_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async10856.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta10854","meta10854",-282943650,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async10853","cljs.core.async/t_cljs$core$async10853",-1872412977,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta10857","meta10857",1404685147,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async10856.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10856.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10856";

cljs.core.async.t_cljs$core$async10856.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async10856");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async10856 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async10856(map_LT___$1,f__$1,ch__$1,meta10854__$1,___$2,fn1__$1,meta10857){
return (new cljs.core.async.t_cljs$core$async10856(map_LT___$1,f__$1,ch__$1,meta10854__$1,___$2,fn1__$1,meta10857));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async10856(self__.map_LT_,self__.f,self__.ch,self__.meta10854,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6144__auto__ = ret;
if(cljs.core.truth_(and__6144__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__6144__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async10853.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async10853.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async10853.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta10854","meta10854",-282943650,null)], null);
});

cljs.core.async.t_cljs$core$async10853.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10853.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10853";

cljs.core.async.t_cljs$core$async10853.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async10853");
});

cljs.core.async.__GT_t_cljs$core$async10853 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async10853(map_LT___$1,f__$1,ch__$1,meta10854){
return (new cljs.core.async.t_cljs$core$async10853(map_LT___$1,f__$1,ch__$1,meta10854));
});

}

return (new cljs.core.async.t_cljs$core$async10853(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async10862 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10862 = (function (map_GT_,f,ch,meta10863){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta10863 = meta10863;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10862.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10864,meta10863__$1){
var self__ = this;
var _10864__$1 = this;
return (new cljs.core.async.t_cljs$core$async10862(self__.map_GT_,self__.f,self__.ch,meta10863__$1));
});

cljs.core.async.t_cljs$core$async10862.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10864){
var self__ = this;
var _10864__$1 = this;
return self__.meta10863;
});

cljs.core.async.t_cljs$core$async10862.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async10862.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async10862.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async10862.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async10862.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async10862.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async10862.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta10863","meta10863",-1871839824,null)], null);
});

cljs.core.async.t_cljs$core$async10862.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10862.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10862";

cljs.core.async.t_cljs$core$async10862.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async10862");
});

cljs.core.async.__GT_t_cljs$core$async10862 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async10862(map_GT___$1,f__$1,ch__$1,meta10863){
return (new cljs.core.async.t_cljs$core$async10862(map_GT___$1,f__$1,ch__$1,meta10863));
});

}

return (new cljs.core.async.t_cljs$core$async10862(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async10868 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10868 = (function (filter_GT_,p,ch,meta10869){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta10869 = meta10869;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10868.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10870,meta10869__$1){
var self__ = this;
var _10870__$1 = this;
return (new cljs.core.async.t_cljs$core$async10868(self__.filter_GT_,self__.p,self__.ch,meta10869__$1));
});

cljs.core.async.t_cljs$core$async10868.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10870){
var self__ = this;
var _10870__$1 = this;
return self__.meta10869;
});

cljs.core.async.t_cljs$core$async10868.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async10868.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async10868.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async10868.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async10868.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async10868.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async10868.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async10868.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta10869","meta10869",-922484217,null)], null);
});

cljs.core.async.t_cljs$core$async10868.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10868.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10868";

cljs.core.async.t_cljs$core$async10868.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async10868");
});

cljs.core.async.__GT_t_cljs$core$async10868 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async10868(filter_GT___$1,p__$1,ch__$1,meta10869){
return (new cljs.core.async.t_cljs$core$async10868(filter_GT___$1,p__$1,ch__$1,meta10869));
});

}

return (new cljs.core.async.t_cljs$core$async10868(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args10871 = [];
var len__7214__auto___10915 = arguments.length;
var i__7215__auto___10916 = (0);
while(true){
if((i__7215__auto___10916 < len__7214__auto___10915)){
args10871.push((arguments[i__7215__auto___10916]));

var G__10917 = (i__7215__auto___10916 + (1));
i__7215__auto___10916 = G__10917;
continue;
} else {
}
break;
}

var G__10873 = args10871.length;
switch (G__10873) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10871.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8669__auto___10919 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8669__auto___10919,out){
return (function (){
var f__8670__auto__ = (function (){var switch__8557__auto__ = ((function (c__8669__auto___10919,out){
return (function (state_10894){
var state_val_10895 = (state_10894[(1)]);
if((state_val_10895 === (7))){
var inst_10890 = (state_10894[(2)]);
var state_10894__$1 = state_10894;
var statearr_10896_10920 = state_10894__$1;
(statearr_10896_10920[(2)] = inst_10890);

(statearr_10896_10920[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10895 === (1))){
var state_10894__$1 = state_10894;
var statearr_10897_10921 = state_10894__$1;
(statearr_10897_10921[(2)] = null);

(statearr_10897_10921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10895 === (4))){
var inst_10876 = (state_10894[(7)]);
var inst_10876__$1 = (state_10894[(2)]);
var inst_10877 = (inst_10876__$1 == null);
var state_10894__$1 = (function (){var statearr_10898 = state_10894;
(statearr_10898[(7)] = inst_10876__$1);

return statearr_10898;
})();
if(cljs.core.truth_(inst_10877)){
var statearr_10899_10922 = state_10894__$1;
(statearr_10899_10922[(1)] = (5));

} else {
var statearr_10900_10923 = state_10894__$1;
(statearr_10900_10923[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10895 === (6))){
var inst_10876 = (state_10894[(7)]);
var inst_10881 = p.call(null,inst_10876);
var state_10894__$1 = state_10894;
if(cljs.core.truth_(inst_10881)){
var statearr_10901_10924 = state_10894__$1;
(statearr_10901_10924[(1)] = (8));

} else {
var statearr_10902_10925 = state_10894__$1;
(statearr_10902_10925[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10895 === (3))){
var inst_10892 = (state_10894[(2)]);
var state_10894__$1 = state_10894;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10894__$1,inst_10892);
} else {
if((state_val_10895 === (2))){
var state_10894__$1 = state_10894;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10894__$1,(4),ch);
} else {
if((state_val_10895 === (11))){
var inst_10884 = (state_10894[(2)]);
var state_10894__$1 = state_10894;
var statearr_10903_10926 = state_10894__$1;
(statearr_10903_10926[(2)] = inst_10884);

(statearr_10903_10926[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10895 === (9))){
var state_10894__$1 = state_10894;
var statearr_10904_10927 = state_10894__$1;
(statearr_10904_10927[(2)] = null);

(statearr_10904_10927[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10895 === (5))){
var inst_10879 = cljs.core.async.close_BANG_.call(null,out);
var state_10894__$1 = state_10894;
var statearr_10905_10928 = state_10894__$1;
(statearr_10905_10928[(2)] = inst_10879);

(statearr_10905_10928[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10895 === (10))){
var inst_10887 = (state_10894[(2)]);
var state_10894__$1 = (function (){var statearr_10906 = state_10894;
(statearr_10906[(8)] = inst_10887);

return statearr_10906;
})();
var statearr_10907_10929 = state_10894__$1;
(statearr_10907_10929[(2)] = null);

(statearr_10907_10929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10895 === (8))){
var inst_10876 = (state_10894[(7)]);
var state_10894__$1 = state_10894;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10894__$1,(11),out,inst_10876);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__8669__auto___10919,out))
;
return ((function (switch__8557__auto__,c__8669__auto___10919,out){
return (function() {
var cljs$core$async$state_machine__8558__auto__ = null;
var cljs$core$async$state_machine__8558__auto____0 = (function (){
var statearr_10911 = [null,null,null,null,null,null,null,null,null];
(statearr_10911[(0)] = cljs$core$async$state_machine__8558__auto__);

(statearr_10911[(1)] = (1));

return statearr_10911;
});
var cljs$core$async$state_machine__8558__auto____1 = (function (state_10894){
while(true){
var ret_value__8559__auto__ = (function (){try{while(true){
var result__8560__auto__ = switch__8557__auto__.call(null,state_10894);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8560__auto__;
}
break;
}
}catch (e10912){if((e10912 instanceof Object)){
var ex__8561__auto__ = e10912;
var statearr_10913_10930 = state_10894;
(statearr_10913_10930[(5)] = ex__8561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10894);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10912;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10931 = state_10894;
state_10894 = G__10931;
continue;
} else {
return ret_value__8559__auto__;
}
break;
}
});
cljs$core$async$state_machine__8558__auto__ = function(state_10894){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8558__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8558__auto____1.call(this,state_10894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8558__auto____0;
cljs$core$async$state_machine__8558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8558__auto____1;
return cljs$core$async$state_machine__8558__auto__;
})()
;})(switch__8557__auto__,c__8669__auto___10919,out))
})();
var state__8671__auto__ = (function (){var statearr_10914 = f__8670__auto__.call(null);
(statearr_10914[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8669__auto___10919);

return statearr_10914;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8671__auto__);
});})(c__8669__auto___10919,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args10932 = [];
var len__7214__auto___10935 = arguments.length;
var i__7215__auto___10936 = (0);
while(true){
if((i__7215__auto___10936 < len__7214__auto___10935)){
args10932.push((arguments[i__7215__auto___10936]));

var G__10937 = (i__7215__auto___10936 + (1));
i__7215__auto___10936 = G__10937;
continue;
} else {
}
break;
}

var G__10934 = args10932.length;
switch (G__10934) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10932.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__8669__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8669__auto__){
return (function (){
var f__8670__auto__ = (function (){var switch__8557__auto__ = ((function (c__8669__auto__){
return (function (state_11104){
var state_val_11105 = (state_11104[(1)]);
if((state_val_11105 === (7))){
var inst_11100 = (state_11104[(2)]);
var state_11104__$1 = state_11104;
var statearr_11106_11147 = state_11104__$1;
(statearr_11106_11147[(2)] = inst_11100);

(statearr_11106_11147[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11105 === (20))){
var inst_11070 = (state_11104[(7)]);
var inst_11081 = (state_11104[(2)]);
var inst_11082 = cljs.core.next.call(null,inst_11070);
var inst_11056 = inst_11082;
var inst_11057 = null;
var inst_11058 = (0);
var inst_11059 = (0);
var state_11104__$1 = (function (){var statearr_11107 = state_11104;
(statearr_11107[(8)] = inst_11057);

(statearr_11107[(9)] = inst_11058);

(statearr_11107[(10)] = inst_11081);

(statearr_11107[(11)] = inst_11056);

(statearr_11107[(12)] = inst_11059);

return statearr_11107;
})();
var statearr_11108_11148 = state_11104__$1;
(statearr_11108_11148[(2)] = null);

(statearr_11108_11148[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11105 === (1))){
var state_11104__$1 = state_11104;
var statearr_11109_11149 = state_11104__$1;
(statearr_11109_11149[(2)] = null);

(statearr_11109_11149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11105 === (4))){
var inst_11045 = (state_11104[(13)]);
var inst_11045__$1 = (state_11104[(2)]);
var inst_11046 = (inst_11045__$1 == null);
var state_11104__$1 = (function (){var statearr_11110 = state_11104;
(statearr_11110[(13)] = inst_11045__$1);

return statearr_11110;
})();
if(cljs.core.truth_(inst_11046)){
var statearr_11111_11150 = state_11104__$1;
(statearr_11111_11150[(1)] = (5));

} else {
var statearr_11112_11151 = state_11104__$1;
(statearr_11112_11151[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11105 === (15))){
var state_11104__$1 = state_11104;
var statearr_11116_11152 = state_11104__$1;
(statearr_11116_11152[(2)] = null);

(statearr_11116_11152[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11105 === (21))){
var state_11104__$1 = state_11104;
var statearr_11117_11153 = state_11104__$1;
(statearr_11117_11153[(2)] = null);

(statearr_11117_11153[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11105 === (13))){
var inst_11057 = (state_11104[(8)]);
var inst_11058 = (state_11104[(9)]);
var inst_11056 = (state_11104[(11)]);
var inst_11059 = (state_11104[(12)]);
var inst_11066 = (state_11104[(2)]);
var inst_11067 = (inst_11059 + (1));
var tmp11113 = inst_11057;
var tmp11114 = inst_11058;
var tmp11115 = inst_11056;
var inst_11056__$1 = tmp11115;
var inst_11057__$1 = tmp11113;
var inst_11058__$1 = tmp11114;
var inst_11059__$1 = inst_11067;
var state_11104__$1 = (function (){var statearr_11118 = state_11104;
(statearr_11118[(8)] = inst_11057__$1);

(statearr_11118[(9)] = inst_11058__$1);

(statearr_11118[(14)] = inst_11066);

(statearr_11118[(11)] = inst_11056__$1);

(statearr_11118[(12)] = inst_11059__$1);

return statearr_11118;
})();
var statearr_11119_11154 = state_11104__$1;
(statearr_11119_11154[(2)] = null);

(statearr_11119_11154[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11105 === (22))){
var state_11104__$1 = state_11104;
var statearr_11120_11155 = state_11104__$1;
(statearr_11120_11155[(2)] = null);

(statearr_11120_11155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11105 === (6))){
var inst_11045 = (state_11104[(13)]);
var inst_11054 = f.call(null,inst_11045);
var inst_11055 = cljs.core.seq.call(null,inst_11054);
var inst_11056 = inst_11055;
var inst_11057 = null;
var inst_11058 = (0);
var inst_11059 = (0);
var state_11104__$1 = (function (){var statearr_11121 = state_11104;
(statearr_11121[(8)] = inst_11057);

(statearr_11121[(9)] = inst_11058);

(statearr_11121[(11)] = inst_11056);

(statearr_11121[(12)] = inst_11059);

return statearr_11121;
})();
var statearr_11122_11156 = state_11104__$1;
(statearr_11122_11156[(2)] = null);

(statearr_11122_11156[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11105 === (17))){
var inst_11070 = (state_11104[(7)]);
var inst_11074 = cljs.core.chunk_first.call(null,inst_11070);
var inst_11075 = cljs.core.chunk_rest.call(null,inst_11070);
var inst_11076 = cljs.core.count.call(null,inst_11074);
var inst_11056 = inst_11075;
var inst_11057 = inst_11074;
var inst_11058 = inst_11076;
var inst_11059 = (0);
var state_11104__$1 = (function (){var statearr_11123 = state_11104;
(statearr_11123[(8)] = inst_11057);

(statearr_11123[(9)] = inst_11058);

(statearr_11123[(11)] = inst_11056);

(statearr_11123[(12)] = inst_11059);

return statearr_11123;
})();
var statearr_11124_11157 = state_11104__$1;
(statearr_11124_11157[(2)] = null);

(statearr_11124_11157[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11105 === (3))){
var inst_11102 = (state_11104[(2)]);
var state_11104__$1 = state_11104;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11104__$1,inst_11102);
} else {
if((state_val_11105 === (12))){
var inst_11090 = (state_11104[(2)]);
var state_11104__$1 = state_11104;
var statearr_11125_11158 = state_11104__$1;
(statearr_11125_11158[(2)] = inst_11090);

(statearr_11125_11158[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11105 === (2))){
var state_11104__$1 = state_11104;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11104__$1,(4),in$);
} else {
if((state_val_11105 === (23))){
var inst_11098 = (state_11104[(2)]);
var state_11104__$1 = state_11104;
var statearr_11126_11159 = state_11104__$1;
(statearr_11126_11159[(2)] = inst_11098);

(statearr_11126_11159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11105 === (19))){
var inst_11085 = (state_11104[(2)]);
var state_11104__$1 = state_11104;
var statearr_11127_11160 = state_11104__$1;
(statearr_11127_11160[(2)] = inst_11085);

(statearr_11127_11160[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11105 === (11))){
var inst_11070 = (state_11104[(7)]);
var inst_11056 = (state_11104[(11)]);
var inst_11070__$1 = cljs.core.seq.call(null,inst_11056);
var state_11104__$1 = (function (){var statearr_11128 = state_11104;
(statearr_11128[(7)] = inst_11070__$1);

return statearr_11128;
})();
if(inst_11070__$1){
var statearr_11129_11161 = state_11104__$1;
(statearr_11129_11161[(1)] = (14));

} else {
var statearr_11130_11162 = state_11104__$1;
(statearr_11130_11162[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11105 === (9))){
var inst_11092 = (state_11104[(2)]);
var inst_11093 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_11104__$1 = (function (){var statearr_11131 = state_11104;
(statearr_11131[(15)] = inst_11092);

return statearr_11131;
})();
if(cljs.core.truth_(inst_11093)){
var statearr_11132_11163 = state_11104__$1;
(statearr_11132_11163[(1)] = (21));

} else {
var statearr_11133_11164 = state_11104__$1;
(statearr_11133_11164[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11105 === (5))){
var inst_11048 = cljs.core.async.close_BANG_.call(null,out);
var state_11104__$1 = state_11104;
var statearr_11134_11165 = state_11104__$1;
(statearr_11134_11165[(2)] = inst_11048);

(statearr_11134_11165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11105 === (14))){
var inst_11070 = (state_11104[(7)]);
var inst_11072 = cljs.core.chunked_seq_QMARK_.call(null,inst_11070);
var state_11104__$1 = state_11104;
if(inst_11072){
var statearr_11135_11166 = state_11104__$1;
(statearr_11135_11166[(1)] = (17));

} else {
var statearr_11136_11167 = state_11104__$1;
(statearr_11136_11167[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11105 === (16))){
var inst_11088 = (state_11104[(2)]);
var state_11104__$1 = state_11104;
var statearr_11137_11168 = state_11104__$1;
(statearr_11137_11168[(2)] = inst_11088);

(statearr_11137_11168[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11105 === (10))){
var inst_11057 = (state_11104[(8)]);
var inst_11059 = (state_11104[(12)]);
var inst_11064 = cljs.core._nth.call(null,inst_11057,inst_11059);
var state_11104__$1 = state_11104;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11104__$1,(13),out,inst_11064);
} else {
if((state_val_11105 === (18))){
var inst_11070 = (state_11104[(7)]);
var inst_11079 = cljs.core.first.call(null,inst_11070);
var state_11104__$1 = state_11104;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11104__$1,(20),out,inst_11079);
} else {
if((state_val_11105 === (8))){
var inst_11058 = (state_11104[(9)]);
var inst_11059 = (state_11104[(12)]);
var inst_11061 = (inst_11059 < inst_11058);
var inst_11062 = inst_11061;
var state_11104__$1 = state_11104;
if(cljs.core.truth_(inst_11062)){
var statearr_11138_11169 = state_11104__$1;
(statearr_11138_11169[(1)] = (10));

} else {
var statearr_11139_11170 = state_11104__$1;
(statearr_11139_11170[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8669__auto__))
;
return ((function (switch__8557__auto__,c__8669__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__8558__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__8558__auto____0 = (function (){
var statearr_11143 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11143[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__8558__auto__);

(statearr_11143[(1)] = (1));

return statearr_11143;
});
var cljs$core$async$mapcat_STAR__$_state_machine__8558__auto____1 = (function (state_11104){
while(true){
var ret_value__8559__auto__ = (function (){try{while(true){
var result__8560__auto__ = switch__8557__auto__.call(null,state_11104);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8560__auto__;
}
break;
}
}catch (e11144){if((e11144 instanceof Object)){
var ex__8561__auto__ = e11144;
var statearr_11145_11171 = state_11104;
(statearr_11145_11171[(5)] = ex__8561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11104);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11144;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11172 = state_11104;
state_11104 = G__11172;
continue;
} else {
return ret_value__8559__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__8558__auto__ = function(state_11104){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__8558__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__8558__auto____1.call(this,state_11104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__8558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__8558__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__8558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__8558__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__8558__auto__;
})()
;})(switch__8557__auto__,c__8669__auto__))
})();
var state__8671__auto__ = (function (){var statearr_11146 = f__8670__auto__.call(null);
(statearr_11146[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8669__auto__);

return statearr_11146;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8671__auto__);
});})(c__8669__auto__))
);

return c__8669__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args11173 = [];
var len__7214__auto___11176 = arguments.length;
var i__7215__auto___11177 = (0);
while(true){
if((i__7215__auto___11177 < len__7214__auto___11176)){
args11173.push((arguments[i__7215__auto___11177]));

var G__11178 = (i__7215__auto___11177 + (1));
i__7215__auto___11177 = G__11178;
continue;
} else {
}
break;
}

var G__11175 = args11173.length;
switch (G__11175) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11173.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args11180 = [];
var len__7214__auto___11183 = arguments.length;
var i__7215__auto___11184 = (0);
while(true){
if((i__7215__auto___11184 < len__7214__auto___11183)){
args11180.push((arguments[i__7215__auto___11184]));

var G__11185 = (i__7215__auto___11184 + (1));
i__7215__auto___11184 = G__11185;
continue;
} else {
}
break;
}

var G__11182 = args11180.length;
switch (G__11182) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11180.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args11187 = [];
var len__7214__auto___11238 = arguments.length;
var i__7215__auto___11239 = (0);
while(true){
if((i__7215__auto___11239 < len__7214__auto___11238)){
args11187.push((arguments[i__7215__auto___11239]));

var G__11240 = (i__7215__auto___11239 + (1));
i__7215__auto___11239 = G__11240;
continue;
} else {
}
break;
}

var G__11189 = args11187.length;
switch (G__11189) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11187.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8669__auto___11242 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8669__auto___11242,out){
return (function (){
var f__8670__auto__ = (function (){var switch__8557__auto__ = ((function (c__8669__auto___11242,out){
return (function (state_11213){
var state_val_11214 = (state_11213[(1)]);
if((state_val_11214 === (7))){
var inst_11208 = (state_11213[(2)]);
var state_11213__$1 = state_11213;
var statearr_11215_11243 = state_11213__$1;
(statearr_11215_11243[(2)] = inst_11208);

(statearr_11215_11243[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11214 === (1))){
var inst_11190 = null;
var state_11213__$1 = (function (){var statearr_11216 = state_11213;
(statearr_11216[(7)] = inst_11190);

return statearr_11216;
})();
var statearr_11217_11244 = state_11213__$1;
(statearr_11217_11244[(2)] = null);

(statearr_11217_11244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11214 === (4))){
var inst_11193 = (state_11213[(8)]);
var inst_11193__$1 = (state_11213[(2)]);
var inst_11194 = (inst_11193__$1 == null);
var inst_11195 = cljs.core.not.call(null,inst_11194);
var state_11213__$1 = (function (){var statearr_11218 = state_11213;
(statearr_11218[(8)] = inst_11193__$1);

return statearr_11218;
})();
if(inst_11195){
var statearr_11219_11245 = state_11213__$1;
(statearr_11219_11245[(1)] = (5));

} else {
var statearr_11220_11246 = state_11213__$1;
(statearr_11220_11246[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11214 === (6))){
var state_11213__$1 = state_11213;
var statearr_11221_11247 = state_11213__$1;
(statearr_11221_11247[(2)] = null);

(statearr_11221_11247[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11214 === (3))){
var inst_11210 = (state_11213[(2)]);
var inst_11211 = cljs.core.async.close_BANG_.call(null,out);
var state_11213__$1 = (function (){var statearr_11222 = state_11213;
(statearr_11222[(9)] = inst_11210);

return statearr_11222;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11213__$1,inst_11211);
} else {
if((state_val_11214 === (2))){
var state_11213__$1 = state_11213;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11213__$1,(4),ch);
} else {
if((state_val_11214 === (11))){
var inst_11193 = (state_11213[(8)]);
var inst_11202 = (state_11213[(2)]);
var inst_11190 = inst_11193;
var state_11213__$1 = (function (){var statearr_11223 = state_11213;
(statearr_11223[(7)] = inst_11190);

(statearr_11223[(10)] = inst_11202);

return statearr_11223;
})();
var statearr_11224_11248 = state_11213__$1;
(statearr_11224_11248[(2)] = null);

(statearr_11224_11248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11214 === (9))){
var inst_11193 = (state_11213[(8)]);
var state_11213__$1 = state_11213;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11213__$1,(11),out,inst_11193);
} else {
if((state_val_11214 === (5))){
var inst_11190 = (state_11213[(7)]);
var inst_11193 = (state_11213[(8)]);
var inst_11197 = cljs.core._EQ_.call(null,inst_11193,inst_11190);
var state_11213__$1 = state_11213;
if(inst_11197){
var statearr_11226_11249 = state_11213__$1;
(statearr_11226_11249[(1)] = (8));

} else {
var statearr_11227_11250 = state_11213__$1;
(statearr_11227_11250[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11214 === (10))){
var inst_11205 = (state_11213[(2)]);
var state_11213__$1 = state_11213;
var statearr_11228_11251 = state_11213__$1;
(statearr_11228_11251[(2)] = inst_11205);

(statearr_11228_11251[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11214 === (8))){
var inst_11190 = (state_11213[(7)]);
var tmp11225 = inst_11190;
var inst_11190__$1 = tmp11225;
var state_11213__$1 = (function (){var statearr_11229 = state_11213;
(statearr_11229[(7)] = inst_11190__$1);

return statearr_11229;
})();
var statearr_11230_11252 = state_11213__$1;
(statearr_11230_11252[(2)] = null);

(statearr_11230_11252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__8669__auto___11242,out))
;
return ((function (switch__8557__auto__,c__8669__auto___11242,out){
return (function() {
var cljs$core$async$state_machine__8558__auto__ = null;
var cljs$core$async$state_machine__8558__auto____0 = (function (){
var statearr_11234 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11234[(0)] = cljs$core$async$state_machine__8558__auto__);

(statearr_11234[(1)] = (1));

return statearr_11234;
});
var cljs$core$async$state_machine__8558__auto____1 = (function (state_11213){
while(true){
var ret_value__8559__auto__ = (function (){try{while(true){
var result__8560__auto__ = switch__8557__auto__.call(null,state_11213);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8560__auto__;
}
break;
}
}catch (e11235){if((e11235 instanceof Object)){
var ex__8561__auto__ = e11235;
var statearr_11236_11253 = state_11213;
(statearr_11236_11253[(5)] = ex__8561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11213);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11235;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11254 = state_11213;
state_11213 = G__11254;
continue;
} else {
return ret_value__8559__auto__;
}
break;
}
});
cljs$core$async$state_machine__8558__auto__ = function(state_11213){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8558__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8558__auto____1.call(this,state_11213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8558__auto____0;
cljs$core$async$state_machine__8558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8558__auto____1;
return cljs$core$async$state_machine__8558__auto__;
})()
;})(switch__8557__auto__,c__8669__auto___11242,out))
})();
var state__8671__auto__ = (function (){var statearr_11237 = f__8670__auto__.call(null);
(statearr_11237[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8669__auto___11242);

return statearr_11237;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8671__auto__);
});})(c__8669__auto___11242,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args11255 = [];
var len__7214__auto___11325 = arguments.length;
var i__7215__auto___11326 = (0);
while(true){
if((i__7215__auto___11326 < len__7214__auto___11325)){
args11255.push((arguments[i__7215__auto___11326]));

var G__11327 = (i__7215__auto___11326 + (1));
i__7215__auto___11326 = G__11327;
continue;
} else {
}
break;
}

var G__11257 = args11255.length;
switch (G__11257) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11255.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8669__auto___11329 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8669__auto___11329,out){
return (function (){
var f__8670__auto__ = (function (){var switch__8557__auto__ = ((function (c__8669__auto___11329,out){
return (function (state_11295){
var state_val_11296 = (state_11295[(1)]);
if((state_val_11296 === (7))){
var inst_11291 = (state_11295[(2)]);
var state_11295__$1 = state_11295;
var statearr_11297_11330 = state_11295__$1;
(statearr_11297_11330[(2)] = inst_11291);

(statearr_11297_11330[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11296 === (1))){
var inst_11258 = (new Array(n));
var inst_11259 = inst_11258;
var inst_11260 = (0);
var state_11295__$1 = (function (){var statearr_11298 = state_11295;
(statearr_11298[(7)] = inst_11259);

(statearr_11298[(8)] = inst_11260);

return statearr_11298;
})();
var statearr_11299_11331 = state_11295__$1;
(statearr_11299_11331[(2)] = null);

(statearr_11299_11331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11296 === (4))){
var inst_11263 = (state_11295[(9)]);
var inst_11263__$1 = (state_11295[(2)]);
var inst_11264 = (inst_11263__$1 == null);
var inst_11265 = cljs.core.not.call(null,inst_11264);
var state_11295__$1 = (function (){var statearr_11300 = state_11295;
(statearr_11300[(9)] = inst_11263__$1);

return statearr_11300;
})();
if(inst_11265){
var statearr_11301_11332 = state_11295__$1;
(statearr_11301_11332[(1)] = (5));

} else {
var statearr_11302_11333 = state_11295__$1;
(statearr_11302_11333[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11296 === (15))){
var inst_11285 = (state_11295[(2)]);
var state_11295__$1 = state_11295;
var statearr_11303_11334 = state_11295__$1;
(statearr_11303_11334[(2)] = inst_11285);

(statearr_11303_11334[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11296 === (13))){
var state_11295__$1 = state_11295;
var statearr_11304_11335 = state_11295__$1;
(statearr_11304_11335[(2)] = null);

(statearr_11304_11335[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11296 === (6))){
var inst_11260 = (state_11295[(8)]);
var inst_11281 = (inst_11260 > (0));
var state_11295__$1 = state_11295;
if(cljs.core.truth_(inst_11281)){
var statearr_11305_11336 = state_11295__$1;
(statearr_11305_11336[(1)] = (12));

} else {
var statearr_11306_11337 = state_11295__$1;
(statearr_11306_11337[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11296 === (3))){
var inst_11293 = (state_11295[(2)]);
var state_11295__$1 = state_11295;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11295__$1,inst_11293);
} else {
if((state_val_11296 === (12))){
var inst_11259 = (state_11295[(7)]);
var inst_11283 = cljs.core.vec.call(null,inst_11259);
var state_11295__$1 = state_11295;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11295__$1,(15),out,inst_11283);
} else {
if((state_val_11296 === (2))){
var state_11295__$1 = state_11295;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11295__$1,(4),ch);
} else {
if((state_val_11296 === (11))){
var inst_11275 = (state_11295[(2)]);
var inst_11276 = (new Array(n));
var inst_11259 = inst_11276;
var inst_11260 = (0);
var state_11295__$1 = (function (){var statearr_11307 = state_11295;
(statearr_11307[(10)] = inst_11275);

(statearr_11307[(7)] = inst_11259);

(statearr_11307[(8)] = inst_11260);

return statearr_11307;
})();
var statearr_11308_11338 = state_11295__$1;
(statearr_11308_11338[(2)] = null);

(statearr_11308_11338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11296 === (9))){
var inst_11259 = (state_11295[(7)]);
var inst_11273 = cljs.core.vec.call(null,inst_11259);
var state_11295__$1 = state_11295;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11295__$1,(11),out,inst_11273);
} else {
if((state_val_11296 === (5))){
var inst_11263 = (state_11295[(9)]);
var inst_11259 = (state_11295[(7)]);
var inst_11268 = (state_11295[(11)]);
var inst_11260 = (state_11295[(8)]);
var inst_11267 = (inst_11259[inst_11260] = inst_11263);
var inst_11268__$1 = (inst_11260 + (1));
var inst_11269 = (inst_11268__$1 < n);
var state_11295__$1 = (function (){var statearr_11309 = state_11295;
(statearr_11309[(12)] = inst_11267);

(statearr_11309[(11)] = inst_11268__$1);

return statearr_11309;
})();
if(cljs.core.truth_(inst_11269)){
var statearr_11310_11339 = state_11295__$1;
(statearr_11310_11339[(1)] = (8));

} else {
var statearr_11311_11340 = state_11295__$1;
(statearr_11311_11340[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11296 === (14))){
var inst_11288 = (state_11295[(2)]);
var inst_11289 = cljs.core.async.close_BANG_.call(null,out);
var state_11295__$1 = (function (){var statearr_11313 = state_11295;
(statearr_11313[(13)] = inst_11288);

return statearr_11313;
})();
var statearr_11314_11341 = state_11295__$1;
(statearr_11314_11341[(2)] = inst_11289);

(statearr_11314_11341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11296 === (10))){
var inst_11279 = (state_11295[(2)]);
var state_11295__$1 = state_11295;
var statearr_11315_11342 = state_11295__$1;
(statearr_11315_11342[(2)] = inst_11279);

(statearr_11315_11342[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11296 === (8))){
var inst_11259 = (state_11295[(7)]);
var inst_11268 = (state_11295[(11)]);
var tmp11312 = inst_11259;
var inst_11259__$1 = tmp11312;
var inst_11260 = inst_11268;
var state_11295__$1 = (function (){var statearr_11316 = state_11295;
(statearr_11316[(7)] = inst_11259__$1);

(statearr_11316[(8)] = inst_11260);

return statearr_11316;
})();
var statearr_11317_11343 = state_11295__$1;
(statearr_11317_11343[(2)] = null);

(statearr_11317_11343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8669__auto___11329,out))
;
return ((function (switch__8557__auto__,c__8669__auto___11329,out){
return (function() {
var cljs$core$async$state_machine__8558__auto__ = null;
var cljs$core$async$state_machine__8558__auto____0 = (function (){
var statearr_11321 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11321[(0)] = cljs$core$async$state_machine__8558__auto__);

(statearr_11321[(1)] = (1));

return statearr_11321;
});
var cljs$core$async$state_machine__8558__auto____1 = (function (state_11295){
while(true){
var ret_value__8559__auto__ = (function (){try{while(true){
var result__8560__auto__ = switch__8557__auto__.call(null,state_11295);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8560__auto__;
}
break;
}
}catch (e11322){if((e11322 instanceof Object)){
var ex__8561__auto__ = e11322;
var statearr_11323_11344 = state_11295;
(statearr_11323_11344[(5)] = ex__8561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11295);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11322;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11345 = state_11295;
state_11295 = G__11345;
continue;
} else {
return ret_value__8559__auto__;
}
break;
}
});
cljs$core$async$state_machine__8558__auto__ = function(state_11295){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8558__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8558__auto____1.call(this,state_11295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8558__auto____0;
cljs$core$async$state_machine__8558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8558__auto____1;
return cljs$core$async$state_machine__8558__auto__;
})()
;})(switch__8557__auto__,c__8669__auto___11329,out))
})();
var state__8671__auto__ = (function (){var statearr_11324 = f__8670__auto__.call(null);
(statearr_11324[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8669__auto___11329);

return statearr_11324;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8671__auto__);
});})(c__8669__auto___11329,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args11346 = [];
var len__7214__auto___11420 = arguments.length;
var i__7215__auto___11421 = (0);
while(true){
if((i__7215__auto___11421 < len__7214__auto___11420)){
args11346.push((arguments[i__7215__auto___11421]));

var G__11422 = (i__7215__auto___11421 + (1));
i__7215__auto___11421 = G__11422;
continue;
} else {
}
break;
}

var G__11348 = args11346.length;
switch (G__11348) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11346.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8669__auto___11424 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8669__auto___11424,out){
return (function (){
var f__8670__auto__ = (function (){var switch__8557__auto__ = ((function (c__8669__auto___11424,out){
return (function (state_11390){
var state_val_11391 = (state_11390[(1)]);
if((state_val_11391 === (7))){
var inst_11386 = (state_11390[(2)]);
var state_11390__$1 = state_11390;
var statearr_11392_11425 = state_11390__$1;
(statearr_11392_11425[(2)] = inst_11386);

(statearr_11392_11425[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11391 === (1))){
var inst_11349 = [];
var inst_11350 = inst_11349;
var inst_11351 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_11390__$1 = (function (){var statearr_11393 = state_11390;
(statearr_11393[(7)] = inst_11351);

(statearr_11393[(8)] = inst_11350);

return statearr_11393;
})();
var statearr_11394_11426 = state_11390__$1;
(statearr_11394_11426[(2)] = null);

(statearr_11394_11426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11391 === (4))){
var inst_11354 = (state_11390[(9)]);
var inst_11354__$1 = (state_11390[(2)]);
var inst_11355 = (inst_11354__$1 == null);
var inst_11356 = cljs.core.not.call(null,inst_11355);
var state_11390__$1 = (function (){var statearr_11395 = state_11390;
(statearr_11395[(9)] = inst_11354__$1);

return statearr_11395;
})();
if(inst_11356){
var statearr_11396_11427 = state_11390__$1;
(statearr_11396_11427[(1)] = (5));

} else {
var statearr_11397_11428 = state_11390__$1;
(statearr_11397_11428[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11391 === (15))){
var inst_11380 = (state_11390[(2)]);
var state_11390__$1 = state_11390;
var statearr_11398_11429 = state_11390__$1;
(statearr_11398_11429[(2)] = inst_11380);

(statearr_11398_11429[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11391 === (13))){
var state_11390__$1 = state_11390;
var statearr_11399_11430 = state_11390__$1;
(statearr_11399_11430[(2)] = null);

(statearr_11399_11430[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11391 === (6))){
var inst_11350 = (state_11390[(8)]);
var inst_11375 = inst_11350.length;
var inst_11376 = (inst_11375 > (0));
var state_11390__$1 = state_11390;
if(cljs.core.truth_(inst_11376)){
var statearr_11400_11431 = state_11390__$1;
(statearr_11400_11431[(1)] = (12));

} else {
var statearr_11401_11432 = state_11390__$1;
(statearr_11401_11432[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11391 === (3))){
var inst_11388 = (state_11390[(2)]);
var state_11390__$1 = state_11390;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11390__$1,inst_11388);
} else {
if((state_val_11391 === (12))){
var inst_11350 = (state_11390[(8)]);
var inst_11378 = cljs.core.vec.call(null,inst_11350);
var state_11390__$1 = state_11390;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11390__$1,(15),out,inst_11378);
} else {
if((state_val_11391 === (2))){
var state_11390__$1 = state_11390;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11390__$1,(4),ch);
} else {
if((state_val_11391 === (11))){
var inst_11358 = (state_11390[(10)]);
var inst_11354 = (state_11390[(9)]);
var inst_11368 = (state_11390[(2)]);
var inst_11369 = [];
var inst_11370 = inst_11369.push(inst_11354);
var inst_11350 = inst_11369;
var inst_11351 = inst_11358;
var state_11390__$1 = (function (){var statearr_11402 = state_11390;
(statearr_11402[(11)] = inst_11368);

(statearr_11402[(12)] = inst_11370);

(statearr_11402[(7)] = inst_11351);

(statearr_11402[(8)] = inst_11350);

return statearr_11402;
})();
var statearr_11403_11433 = state_11390__$1;
(statearr_11403_11433[(2)] = null);

(statearr_11403_11433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11391 === (9))){
var inst_11350 = (state_11390[(8)]);
var inst_11366 = cljs.core.vec.call(null,inst_11350);
var state_11390__$1 = state_11390;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11390__$1,(11),out,inst_11366);
} else {
if((state_val_11391 === (5))){
var inst_11358 = (state_11390[(10)]);
var inst_11354 = (state_11390[(9)]);
var inst_11351 = (state_11390[(7)]);
var inst_11358__$1 = f.call(null,inst_11354);
var inst_11359 = cljs.core._EQ_.call(null,inst_11358__$1,inst_11351);
var inst_11360 = cljs.core.keyword_identical_QMARK_.call(null,inst_11351,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_11361 = (inst_11359) || (inst_11360);
var state_11390__$1 = (function (){var statearr_11404 = state_11390;
(statearr_11404[(10)] = inst_11358__$1);

return statearr_11404;
})();
if(cljs.core.truth_(inst_11361)){
var statearr_11405_11434 = state_11390__$1;
(statearr_11405_11434[(1)] = (8));

} else {
var statearr_11406_11435 = state_11390__$1;
(statearr_11406_11435[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11391 === (14))){
var inst_11383 = (state_11390[(2)]);
var inst_11384 = cljs.core.async.close_BANG_.call(null,out);
var state_11390__$1 = (function (){var statearr_11408 = state_11390;
(statearr_11408[(13)] = inst_11383);

return statearr_11408;
})();
var statearr_11409_11436 = state_11390__$1;
(statearr_11409_11436[(2)] = inst_11384);

(statearr_11409_11436[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11391 === (10))){
var inst_11373 = (state_11390[(2)]);
var state_11390__$1 = state_11390;
var statearr_11410_11437 = state_11390__$1;
(statearr_11410_11437[(2)] = inst_11373);

(statearr_11410_11437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11391 === (8))){
var inst_11358 = (state_11390[(10)]);
var inst_11354 = (state_11390[(9)]);
var inst_11350 = (state_11390[(8)]);
var inst_11363 = inst_11350.push(inst_11354);
var tmp11407 = inst_11350;
var inst_11350__$1 = tmp11407;
var inst_11351 = inst_11358;
var state_11390__$1 = (function (){var statearr_11411 = state_11390;
(statearr_11411[(14)] = inst_11363);

(statearr_11411[(7)] = inst_11351);

(statearr_11411[(8)] = inst_11350__$1);

return statearr_11411;
})();
var statearr_11412_11438 = state_11390__$1;
(statearr_11412_11438[(2)] = null);

(statearr_11412_11438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8669__auto___11424,out))
;
return ((function (switch__8557__auto__,c__8669__auto___11424,out){
return (function() {
var cljs$core$async$state_machine__8558__auto__ = null;
var cljs$core$async$state_machine__8558__auto____0 = (function (){
var statearr_11416 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11416[(0)] = cljs$core$async$state_machine__8558__auto__);

(statearr_11416[(1)] = (1));

return statearr_11416;
});
var cljs$core$async$state_machine__8558__auto____1 = (function (state_11390){
while(true){
var ret_value__8559__auto__ = (function (){try{while(true){
var result__8560__auto__ = switch__8557__auto__.call(null,state_11390);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8560__auto__;
}
break;
}
}catch (e11417){if((e11417 instanceof Object)){
var ex__8561__auto__ = e11417;
var statearr_11418_11439 = state_11390;
(statearr_11418_11439[(5)] = ex__8561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11390);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11417;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11440 = state_11390;
state_11390 = G__11440;
continue;
} else {
return ret_value__8559__auto__;
}
break;
}
});
cljs$core$async$state_machine__8558__auto__ = function(state_11390){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8558__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8558__auto____1.call(this,state_11390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8558__auto____0;
cljs$core$async$state_machine__8558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8558__auto____1;
return cljs$core$async$state_machine__8558__auto__;
})()
;})(switch__8557__auto__,c__8669__auto___11424,out))
})();
var state__8671__auto__ = (function (){var statearr_11419 = f__8670__auto__.call(null);
(statearr_11419[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8669__auto___11424);

return statearr_11419;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8671__auto__);
});})(c__8669__auto___11424,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map