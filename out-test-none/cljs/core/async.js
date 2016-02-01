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
var args8495 = [];
var len__7018__auto___8501 = arguments.length;
var i__7019__auto___8502 = (0);
while(true){
if((i__7019__auto___8502 < len__7018__auto___8501)){
args8495.push((arguments[i__7019__auto___8502]));

var G__8503 = (i__7019__auto___8502 + (1));
i__7019__auto___8502 = G__8503;
continue;
} else {
}
break;
}

var G__8497 = args8495.length;
switch (G__8497) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8495.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async8498 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8498 = (function (f,blockable,meta8499){
this.f = f;
this.blockable = blockable;
this.meta8499 = meta8499;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async8498.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8500,meta8499__$1){
var self__ = this;
var _8500__$1 = this;
return (new cljs.core.async.t_cljs$core$async8498(self__.f,self__.blockable,meta8499__$1));
});

cljs.core.async.t_cljs$core$async8498.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8500){
var self__ = this;
var _8500__$1 = this;
return self__.meta8499;
});

cljs.core.async.t_cljs$core$async8498.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async8498.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async8498.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async8498.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async8498.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta8499","meta8499",-187862065,null)], null);
});

cljs.core.async.t_cljs$core$async8498.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8498.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8498";

cljs.core.async.t_cljs$core$async8498.cljs$lang$ctorPrWriter = (function (this__6558__auto__,writer__6559__auto__,opt__6560__auto__){
return cljs.core._write.call(null,writer__6559__auto__,"cljs.core.async/t_cljs$core$async8498");
});

cljs.core.async.__GT_t_cljs$core$async8498 = (function cljs$core$async$__GT_t_cljs$core$async8498(f__$1,blockable__$1,meta8499){
return (new cljs.core.async.t_cljs$core$async8498(f__$1,blockable__$1,meta8499));
});

}

return (new cljs.core.async.t_cljs$core$async8498(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args8507 = [];
var len__7018__auto___8510 = arguments.length;
var i__7019__auto___8511 = (0);
while(true){
if((i__7019__auto___8511 < len__7018__auto___8510)){
args8507.push((arguments[i__7019__auto___8511]));

var G__8512 = (i__7019__auto___8511 + (1));
i__7019__auto___8511 = G__8512;
continue;
} else {
}
break;
}

var G__8509 = args8507.length;
switch (G__8509) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8507.length)].join('')));

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
var args8514 = [];
var len__7018__auto___8517 = arguments.length;
var i__7019__auto___8518 = (0);
while(true){
if((i__7019__auto___8518 < len__7018__auto___8517)){
args8514.push((arguments[i__7019__auto___8518]));

var G__8519 = (i__7019__auto___8518 + (1));
i__7019__auto___8518 = G__8519;
continue;
} else {
}
break;
}

var G__8516 = args8514.length;
switch (G__8516) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8514.length)].join('')));

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
var args8521 = [];
var len__7018__auto___8524 = arguments.length;
var i__7019__auto___8525 = (0);
while(true){
if((i__7019__auto___8525 < len__7018__auto___8524)){
args8521.push((arguments[i__7019__auto___8525]));

var G__8526 = (i__7019__auto___8525 + (1));
i__7019__auto___8525 = G__8526;
continue;
} else {
}
break;
}

var G__8523 = args8521.length;
switch (G__8523) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8521.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_8528 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_8528);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_8528,ret){
return (function (){
return fn1.call(null,val_8528);
});})(val_8528,ret))
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
var args8529 = [];
var len__7018__auto___8532 = arguments.length;
var i__7019__auto___8533 = (0);
while(true){
if((i__7019__auto___8533 < len__7018__auto___8532)){
args8529.push((arguments[i__7019__auto___8533]));

var G__8534 = (i__7019__auto___8533 + (1));
i__7019__auto___8533 = G__8534;
continue;
} else {
}
break;
}

var G__8531 = args8529.length;
switch (G__8531) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8529.length)].join('')));

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
var n__6863__auto___8536 = n;
var x_8537 = (0);
while(true){
if((x_8537 < n__6863__auto___8536)){
(a[x_8537] = (0));

var G__8538 = (x_8537 + (1));
x_8537 = G__8538;
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

var G__8539 = (i + (1));
i = G__8539;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async8543 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8543 = (function (alt_flag,flag,meta8544){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta8544 = meta8544;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async8543.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_8545,meta8544__$1){
var self__ = this;
var _8545__$1 = this;
return (new cljs.core.async.t_cljs$core$async8543(self__.alt_flag,self__.flag,meta8544__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async8543.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_8545){
var self__ = this;
var _8545__$1 = this;
return self__.meta8544;
});})(flag))
;

cljs.core.async.t_cljs$core$async8543.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async8543.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async8543.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async8543.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async8543.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta8544","meta8544",1839381578,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async8543.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8543.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8543";

cljs.core.async.t_cljs$core$async8543.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__6558__auto__,writer__6559__auto__,opt__6560__auto__){
return cljs.core._write.call(null,writer__6559__auto__,"cljs.core.async/t_cljs$core$async8543");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async8543 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async8543(alt_flag__$1,flag__$1,meta8544){
return (new cljs.core.async.t_cljs$core$async8543(alt_flag__$1,flag__$1,meta8544));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async8543(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async8549 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8549 = (function (alt_handler,flag,cb,meta8550){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta8550 = meta8550;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async8549.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8551,meta8550__$1){
var self__ = this;
var _8551__$1 = this;
return (new cljs.core.async.t_cljs$core$async8549(self__.alt_handler,self__.flag,self__.cb,meta8550__$1));
});

cljs.core.async.t_cljs$core$async8549.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8551){
var self__ = this;
var _8551__$1 = this;
return self__.meta8550;
});

cljs.core.async.t_cljs$core$async8549.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async8549.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async8549.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async8549.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async8549.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta8550","meta8550",-745508502,null)], null);
});

cljs.core.async.t_cljs$core$async8549.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8549.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8549";

cljs.core.async.t_cljs$core$async8549.cljs$lang$ctorPrWriter = (function (this__6558__auto__,writer__6559__auto__,opt__6560__auto__){
return cljs.core._write.call(null,writer__6559__auto__,"cljs.core.async/t_cljs$core$async8549");
});

cljs.core.async.__GT_t_cljs$core$async8549 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async8549(alt_handler__$1,flag__$1,cb__$1,meta8550){
return (new cljs.core.async.t_cljs$core$async8549(alt_handler__$1,flag__$1,cb__$1,meta8550));
});

}

return (new cljs.core.async.t_cljs$core$async8549(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__8552_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__8552_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__8553_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__8553_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__5960__auto__ = wport;
if(cljs.core.truth_(or__5960__auto__)){
return or__5960__auto__;
} else {
return port;
}
})()], null));
} else {
var G__8554 = (i + (1));
i = G__8554;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5960__auto__ = ret;
if(cljs.core.truth_(or__5960__auto__)){
return or__5960__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__5948__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__5948__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__5948__auto__;
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
var args__7025__auto__ = [];
var len__7018__auto___8560 = arguments.length;
var i__7019__auto___8561 = (0);
while(true){
if((i__7019__auto___8561 < len__7018__auto___8560)){
args__7025__auto__.push((arguments[i__7019__auto___8561]));

var G__8562 = (i__7019__auto___8561 + (1));
i__7019__auto___8561 = G__8562;
continue;
} else {
}
break;
}

var argseq__7026__auto__ = ((((1) < args__7025__auto__.length))?(new cljs.core.IndexedSeq(args__7025__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7026__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__8557){
var map__8558 = p__8557;
var map__8558__$1 = ((((!((map__8558 == null)))?((((map__8558.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8558.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8558):map__8558);
var opts = map__8558__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq8555){
var G__8556 = cljs.core.first.call(null,seq8555);
var seq8555__$1 = cljs.core.next.call(null,seq8555);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8556,seq8555__$1);
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
var args8563 = [];
var len__7018__auto___8613 = arguments.length;
var i__7019__auto___8614 = (0);
while(true){
if((i__7019__auto___8614 < len__7018__auto___8613)){
args8563.push((arguments[i__7019__auto___8614]));

var G__8615 = (i__7019__auto___8614 + (1));
i__7019__auto___8614 = G__8615;
continue;
} else {
}
break;
}

var G__8565 = args8563.length;
switch (G__8565) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8563.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__8450__auto___8617 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8450__auto___8617){
return (function (){
var f__8451__auto__ = (function (){var switch__8338__auto__ = ((function (c__8450__auto___8617){
return (function (state_8589){
var state_val_8590 = (state_8589[(1)]);
if((state_val_8590 === (7))){
var inst_8585 = (state_8589[(2)]);
var state_8589__$1 = state_8589;
var statearr_8591_8618 = state_8589__$1;
(statearr_8591_8618[(2)] = inst_8585);

(statearr_8591_8618[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8590 === (1))){
var state_8589__$1 = state_8589;
var statearr_8592_8619 = state_8589__$1;
(statearr_8592_8619[(2)] = null);

(statearr_8592_8619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8590 === (4))){
var inst_8568 = (state_8589[(7)]);
var inst_8568__$1 = (state_8589[(2)]);
var inst_8569 = (inst_8568__$1 == null);
var state_8589__$1 = (function (){var statearr_8593 = state_8589;
(statearr_8593[(7)] = inst_8568__$1);

return statearr_8593;
})();
if(cljs.core.truth_(inst_8569)){
var statearr_8594_8620 = state_8589__$1;
(statearr_8594_8620[(1)] = (5));

} else {
var statearr_8595_8621 = state_8589__$1;
(statearr_8595_8621[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8590 === (13))){
var state_8589__$1 = state_8589;
var statearr_8596_8622 = state_8589__$1;
(statearr_8596_8622[(2)] = null);

(statearr_8596_8622[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8590 === (6))){
var inst_8568 = (state_8589[(7)]);
var state_8589__$1 = state_8589;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8589__$1,(11),to,inst_8568);
} else {
if((state_val_8590 === (3))){
var inst_8587 = (state_8589[(2)]);
var state_8589__$1 = state_8589;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8589__$1,inst_8587);
} else {
if((state_val_8590 === (12))){
var state_8589__$1 = state_8589;
var statearr_8597_8623 = state_8589__$1;
(statearr_8597_8623[(2)] = null);

(statearr_8597_8623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8590 === (2))){
var state_8589__$1 = state_8589;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8589__$1,(4),from);
} else {
if((state_val_8590 === (11))){
var inst_8578 = (state_8589[(2)]);
var state_8589__$1 = state_8589;
if(cljs.core.truth_(inst_8578)){
var statearr_8598_8624 = state_8589__$1;
(statearr_8598_8624[(1)] = (12));

} else {
var statearr_8599_8625 = state_8589__$1;
(statearr_8599_8625[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8590 === (9))){
var state_8589__$1 = state_8589;
var statearr_8600_8626 = state_8589__$1;
(statearr_8600_8626[(2)] = null);

(statearr_8600_8626[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8590 === (5))){
var state_8589__$1 = state_8589;
if(cljs.core.truth_(close_QMARK_)){
var statearr_8601_8627 = state_8589__$1;
(statearr_8601_8627[(1)] = (8));

} else {
var statearr_8602_8628 = state_8589__$1;
(statearr_8602_8628[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8590 === (14))){
var inst_8583 = (state_8589[(2)]);
var state_8589__$1 = state_8589;
var statearr_8603_8629 = state_8589__$1;
(statearr_8603_8629[(2)] = inst_8583);

(statearr_8603_8629[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8590 === (10))){
var inst_8575 = (state_8589[(2)]);
var state_8589__$1 = state_8589;
var statearr_8604_8630 = state_8589__$1;
(statearr_8604_8630[(2)] = inst_8575);

(statearr_8604_8630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8590 === (8))){
var inst_8572 = cljs.core.async.close_BANG_.call(null,to);
var state_8589__$1 = state_8589;
var statearr_8605_8631 = state_8589__$1;
(statearr_8605_8631[(2)] = inst_8572);

(statearr_8605_8631[(1)] = (10));


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
});})(c__8450__auto___8617))
;
return ((function (switch__8338__auto__,c__8450__auto___8617){
return (function() {
var cljs$core$async$state_machine__8339__auto__ = null;
var cljs$core$async$state_machine__8339__auto____0 = (function (){
var statearr_8609 = [null,null,null,null,null,null,null,null];
(statearr_8609[(0)] = cljs$core$async$state_machine__8339__auto__);

(statearr_8609[(1)] = (1));

return statearr_8609;
});
var cljs$core$async$state_machine__8339__auto____1 = (function (state_8589){
while(true){
var ret_value__8340__auto__ = (function (){try{while(true){
var result__8341__auto__ = switch__8338__auto__.call(null,state_8589);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8341__auto__;
}
break;
}
}catch (e8610){if((e8610 instanceof Object)){
var ex__8342__auto__ = e8610;
var statearr_8611_8632 = state_8589;
(statearr_8611_8632[(5)] = ex__8342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8589);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8610;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8633 = state_8589;
state_8589 = G__8633;
continue;
} else {
return ret_value__8340__auto__;
}
break;
}
});
cljs$core$async$state_machine__8339__auto__ = function(state_8589){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8339__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8339__auto____1.call(this,state_8589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8339__auto____0;
cljs$core$async$state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8339__auto____1;
return cljs$core$async$state_machine__8339__auto__;
})()
;})(switch__8338__auto__,c__8450__auto___8617))
})();
var state__8452__auto__ = (function (){var statearr_8612 = f__8451__auto__.call(null);
(statearr_8612[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8450__auto___8617);

return statearr_8612;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8452__auto__);
});})(c__8450__auto___8617))
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
return (function (p__8817){
var vec__8818 = p__8817;
var v = cljs.core.nth.call(null,vec__8818,(0),null);
var p = cljs.core.nth.call(null,vec__8818,(1),null);
var job = vec__8818;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__8450__auto___9000 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8450__auto___9000,res,vec__8818,v,p,job,jobs,results){
return (function (){
var f__8451__auto__ = (function (){var switch__8338__auto__ = ((function (c__8450__auto___9000,res,vec__8818,v,p,job,jobs,results){
return (function (state_8823){
var state_val_8824 = (state_8823[(1)]);
if((state_val_8824 === (1))){
var state_8823__$1 = state_8823;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8823__$1,(2),res,v);
} else {
if((state_val_8824 === (2))){
var inst_8820 = (state_8823[(2)]);
var inst_8821 = cljs.core.async.close_BANG_.call(null,res);
var state_8823__$1 = (function (){var statearr_8825 = state_8823;
(statearr_8825[(7)] = inst_8820);

return statearr_8825;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8823__$1,inst_8821);
} else {
return null;
}
}
});})(c__8450__auto___9000,res,vec__8818,v,p,job,jobs,results))
;
return ((function (switch__8338__auto__,c__8450__auto___9000,res,vec__8818,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8339__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8339__auto____0 = (function (){
var statearr_8829 = [null,null,null,null,null,null,null,null];
(statearr_8829[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8339__auto__);

(statearr_8829[(1)] = (1));

return statearr_8829;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8339__auto____1 = (function (state_8823){
while(true){
var ret_value__8340__auto__ = (function (){try{while(true){
var result__8341__auto__ = switch__8338__auto__.call(null,state_8823);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8341__auto__;
}
break;
}
}catch (e8830){if((e8830 instanceof Object)){
var ex__8342__auto__ = e8830;
var statearr_8831_9001 = state_8823;
(statearr_8831_9001[(5)] = ex__8342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8823);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8830;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9002 = state_8823;
state_8823 = G__9002;
continue;
} else {
return ret_value__8340__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8339__auto__ = function(state_8823){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8339__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8339__auto____1.call(this,state_8823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8339__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8339__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8339__auto__;
})()
;})(switch__8338__auto__,c__8450__auto___9000,res,vec__8818,v,p,job,jobs,results))
})();
var state__8452__auto__ = (function (){var statearr_8832 = f__8451__auto__.call(null);
(statearr_8832[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8450__auto___9000);

return statearr_8832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8452__auto__);
});})(c__8450__auto___9000,res,vec__8818,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__8833){
var vec__8834 = p__8833;
var v = cljs.core.nth.call(null,vec__8834,(0),null);
var p = cljs.core.nth.call(null,vec__8834,(1),null);
var job = vec__8834;
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
var n__6863__auto___9003 = n;
var __9004 = (0);
while(true){
if((__9004 < n__6863__auto___9003)){
var G__8835_9005 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__8835_9005) {
case "compute":
var c__8450__auto___9007 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__9004,c__8450__auto___9007,G__8835_9005,n__6863__auto___9003,jobs,results,process,async){
return (function (){
var f__8451__auto__ = (function (){var switch__8338__auto__ = ((function (__9004,c__8450__auto___9007,G__8835_9005,n__6863__auto___9003,jobs,results,process,async){
return (function (state_8848){
var state_val_8849 = (state_8848[(1)]);
if((state_val_8849 === (1))){
var state_8848__$1 = state_8848;
var statearr_8850_9008 = state_8848__$1;
(statearr_8850_9008[(2)] = null);

(statearr_8850_9008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8849 === (2))){
var state_8848__$1 = state_8848;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8848__$1,(4),jobs);
} else {
if((state_val_8849 === (3))){
var inst_8846 = (state_8848[(2)]);
var state_8848__$1 = state_8848;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8848__$1,inst_8846);
} else {
if((state_val_8849 === (4))){
var inst_8838 = (state_8848[(2)]);
var inst_8839 = process.call(null,inst_8838);
var state_8848__$1 = state_8848;
if(cljs.core.truth_(inst_8839)){
var statearr_8851_9009 = state_8848__$1;
(statearr_8851_9009[(1)] = (5));

} else {
var statearr_8852_9010 = state_8848__$1;
(statearr_8852_9010[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8849 === (5))){
var state_8848__$1 = state_8848;
var statearr_8853_9011 = state_8848__$1;
(statearr_8853_9011[(2)] = null);

(statearr_8853_9011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8849 === (6))){
var state_8848__$1 = state_8848;
var statearr_8854_9012 = state_8848__$1;
(statearr_8854_9012[(2)] = null);

(statearr_8854_9012[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8849 === (7))){
var inst_8844 = (state_8848[(2)]);
var state_8848__$1 = state_8848;
var statearr_8855_9013 = state_8848__$1;
(statearr_8855_9013[(2)] = inst_8844);

(statearr_8855_9013[(1)] = (3));


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
});})(__9004,c__8450__auto___9007,G__8835_9005,n__6863__auto___9003,jobs,results,process,async))
;
return ((function (__9004,switch__8338__auto__,c__8450__auto___9007,G__8835_9005,n__6863__auto___9003,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8339__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8339__auto____0 = (function (){
var statearr_8859 = [null,null,null,null,null,null,null];
(statearr_8859[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8339__auto__);

(statearr_8859[(1)] = (1));

return statearr_8859;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8339__auto____1 = (function (state_8848){
while(true){
var ret_value__8340__auto__ = (function (){try{while(true){
var result__8341__auto__ = switch__8338__auto__.call(null,state_8848);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8341__auto__;
}
break;
}
}catch (e8860){if((e8860 instanceof Object)){
var ex__8342__auto__ = e8860;
var statearr_8861_9014 = state_8848;
(statearr_8861_9014[(5)] = ex__8342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8848);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8860;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9015 = state_8848;
state_8848 = G__9015;
continue;
} else {
return ret_value__8340__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8339__auto__ = function(state_8848){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8339__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8339__auto____1.call(this,state_8848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8339__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8339__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8339__auto__;
})()
;})(__9004,switch__8338__auto__,c__8450__auto___9007,G__8835_9005,n__6863__auto___9003,jobs,results,process,async))
})();
var state__8452__auto__ = (function (){var statearr_8862 = f__8451__auto__.call(null);
(statearr_8862[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8450__auto___9007);

return statearr_8862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8452__auto__);
});})(__9004,c__8450__auto___9007,G__8835_9005,n__6863__auto___9003,jobs,results,process,async))
);


break;
case "async":
var c__8450__auto___9016 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__9004,c__8450__auto___9016,G__8835_9005,n__6863__auto___9003,jobs,results,process,async){
return (function (){
var f__8451__auto__ = (function (){var switch__8338__auto__ = ((function (__9004,c__8450__auto___9016,G__8835_9005,n__6863__auto___9003,jobs,results,process,async){
return (function (state_8875){
var state_val_8876 = (state_8875[(1)]);
if((state_val_8876 === (1))){
var state_8875__$1 = state_8875;
var statearr_8877_9017 = state_8875__$1;
(statearr_8877_9017[(2)] = null);

(statearr_8877_9017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8876 === (2))){
var state_8875__$1 = state_8875;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8875__$1,(4),jobs);
} else {
if((state_val_8876 === (3))){
var inst_8873 = (state_8875[(2)]);
var state_8875__$1 = state_8875;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8875__$1,inst_8873);
} else {
if((state_val_8876 === (4))){
var inst_8865 = (state_8875[(2)]);
var inst_8866 = async.call(null,inst_8865);
var state_8875__$1 = state_8875;
if(cljs.core.truth_(inst_8866)){
var statearr_8878_9018 = state_8875__$1;
(statearr_8878_9018[(1)] = (5));

} else {
var statearr_8879_9019 = state_8875__$1;
(statearr_8879_9019[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8876 === (5))){
var state_8875__$1 = state_8875;
var statearr_8880_9020 = state_8875__$1;
(statearr_8880_9020[(2)] = null);

(statearr_8880_9020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8876 === (6))){
var state_8875__$1 = state_8875;
var statearr_8881_9021 = state_8875__$1;
(statearr_8881_9021[(2)] = null);

(statearr_8881_9021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8876 === (7))){
var inst_8871 = (state_8875[(2)]);
var state_8875__$1 = state_8875;
var statearr_8882_9022 = state_8875__$1;
(statearr_8882_9022[(2)] = inst_8871);

(statearr_8882_9022[(1)] = (3));


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
});})(__9004,c__8450__auto___9016,G__8835_9005,n__6863__auto___9003,jobs,results,process,async))
;
return ((function (__9004,switch__8338__auto__,c__8450__auto___9016,G__8835_9005,n__6863__auto___9003,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8339__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8339__auto____0 = (function (){
var statearr_8886 = [null,null,null,null,null,null,null];
(statearr_8886[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8339__auto__);

(statearr_8886[(1)] = (1));

return statearr_8886;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8339__auto____1 = (function (state_8875){
while(true){
var ret_value__8340__auto__ = (function (){try{while(true){
var result__8341__auto__ = switch__8338__auto__.call(null,state_8875);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8341__auto__;
}
break;
}
}catch (e8887){if((e8887 instanceof Object)){
var ex__8342__auto__ = e8887;
var statearr_8888_9023 = state_8875;
(statearr_8888_9023[(5)] = ex__8342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8875);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8887;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9024 = state_8875;
state_8875 = G__9024;
continue;
} else {
return ret_value__8340__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8339__auto__ = function(state_8875){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8339__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8339__auto____1.call(this,state_8875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8339__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8339__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8339__auto__;
})()
;})(__9004,switch__8338__auto__,c__8450__auto___9016,G__8835_9005,n__6863__auto___9003,jobs,results,process,async))
})();
var state__8452__auto__ = (function (){var statearr_8889 = f__8451__auto__.call(null);
(statearr_8889[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8450__auto___9016);

return statearr_8889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8452__auto__);
});})(__9004,c__8450__auto___9016,G__8835_9005,n__6863__auto___9003,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__9025 = (__9004 + (1));
__9004 = G__9025;
continue;
} else {
}
break;
}

var c__8450__auto___9026 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8450__auto___9026,jobs,results,process,async){
return (function (){
var f__8451__auto__ = (function (){var switch__8338__auto__ = ((function (c__8450__auto___9026,jobs,results,process,async){
return (function (state_8911){
var state_val_8912 = (state_8911[(1)]);
if((state_val_8912 === (1))){
var state_8911__$1 = state_8911;
var statearr_8913_9027 = state_8911__$1;
(statearr_8913_9027[(2)] = null);

(statearr_8913_9027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8912 === (2))){
var state_8911__$1 = state_8911;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8911__$1,(4),from);
} else {
if((state_val_8912 === (3))){
var inst_8909 = (state_8911[(2)]);
var state_8911__$1 = state_8911;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8911__$1,inst_8909);
} else {
if((state_val_8912 === (4))){
var inst_8892 = (state_8911[(7)]);
var inst_8892__$1 = (state_8911[(2)]);
var inst_8893 = (inst_8892__$1 == null);
var state_8911__$1 = (function (){var statearr_8914 = state_8911;
(statearr_8914[(7)] = inst_8892__$1);

return statearr_8914;
})();
if(cljs.core.truth_(inst_8893)){
var statearr_8915_9028 = state_8911__$1;
(statearr_8915_9028[(1)] = (5));

} else {
var statearr_8916_9029 = state_8911__$1;
(statearr_8916_9029[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8912 === (5))){
var inst_8895 = cljs.core.async.close_BANG_.call(null,jobs);
var state_8911__$1 = state_8911;
var statearr_8917_9030 = state_8911__$1;
(statearr_8917_9030[(2)] = inst_8895);

(statearr_8917_9030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8912 === (6))){
var inst_8892 = (state_8911[(7)]);
var inst_8897 = (state_8911[(8)]);
var inst_8897__$1 = cljs.core.async.chan.call(null,(1));
var inst_8898 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8899 = [inst_8892,inst_8897__$1];
var inst_8900 = (new cljs.core.PersistentVector(null,2,(5),inst_8898,inst_8899,null));
var state_8911__$1 = (function (){var statearr_8918 = state_8911;
(statearr_8918[(8)] = inst_8897__$1);

return statearr_8918;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8911__$1,(8),jobs,inst_8900);
} else {
if((state_val_8912 === (7))){
var inst_8907 = (state_8911[(2)]);
var state_8911__$1 = state_8911;
var statearr_8919_9031 = state_8911__$1;
(statearr_8919_9031[(2)] = inst_8907);

(statearr_8919_9031[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8912 === (8))){
var inst_8897 = (state_8911[(8)]);
var inst_8902 = (state_8911[(2)]);
var state_8911__$1 = (function (){var statearr_8920 = state_8911;
(statearr_8920[(9)] = inst_8902);

return statearr_8920;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8911__$1,(9),results,inst_8897);
} else {
if((state_val_8912 === (9))){
var inst_8904 = (state_8911[(2)]);
var state_8911__$1 = (function (){var statearr_8921 = state_8911;
(statearr_8921[(10)] = inst_8904);

return statearr_8921;
})();
var statearr_8922_9032 = state_8911__$1;
(statearr_8922_9032[(2)] = null);

(statearr_8922_9032[(1)] = (2));


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
});})(c__8450__auto___9026,jobs,results,process,async))
;
return ((function (switch__8338__auto__,c__8450__auto___9026,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8339__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8339__auto____0 = (function (){
var statearr_8926 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_8926[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8339__auto__);

(statearr_8926[(1)] = (1));

return statearr_8926;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8339__auto____1 = (function (state_8911){
while(true){
var ret_value__8340__auto__ = (function (){try{while(true){
var result__8341__auto__ = switch__8338__auto__.call(null,state_8911);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8341__auto__;
}
break;
}
}catch (e8927){if((e8927 instanceof Object)){
var ex__8342__auto__ = e8927;
var statearr_8928_9033 = state_8911;
(statearr_8928_9033[(5)] = ex__8342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8911);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8927;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9034 = state_8911;
state_8911 = G__9034;
continue;
} else {
return ret_value__8340__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8339__auto__ = function(state_8911){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8339__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8339__auto____1.call(this,state_8911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8339__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8339__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8339__auto__;
})()
;})(switch__8338__auto__,c__8450__auto___9026,jobs,results,process,async))
})();
var state__8452__auto__ = (function (){var statearr_8929 = f__8451__auto__.call(null);
(statearr_8929[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8450__auto___9026);

return statearr_8929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8452__auto__);
});})(c__8450__auto___9026,jobs,results,process,async))
);


var c__8450__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8450__auto__,jobs,results,process,async){
return (function (){
var f__8451__auto__ = (function (){var switch__8338__auto__ = ((function (c__8450__auto__,jobs,results,process,async){
return (function (state_8967){
var state_val_8968 = (state_8967[(1)]);
if((state_val_8968 === (7))){
var inst_8963 = (state_8967[(2)]);
var state_8967__$1 = state_8967;
var statearr_8969_9035 = state_8967__$1;
(statearr_8969_9035[(2)] = inst_8963);

(statearr_8969_9035[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8968 === (20))){
var state_8967__$1 = state_8967;
var statearr_8970_9036 = state_8967__$1;
(statearr_8970_9036[(2)] = null);

(statearr_8970_9036[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8968 === (1))){
var state_8967__$1 = state_8967;
var statearr_8971_9037 = state_8967__$1;
(statearr_8971_9037[(2)] = null);

(statearr_8971_9037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8968 === (4))){
var inst_8932 = (state_8967[(7)]);
var inst_8932__$1 = (state_8967[(2)]);
var inst_8933 = (inst_8932__$1 == null);
var state_8967__$1 = (function (){var statearr_8972 = state_8967;
(statearr_8972[(7)] = inst_8932__$1);

return statearr_8972;
})();
if(cljs.core.truth_(inst_8933)){
var statearr_8973_9038 = state_8967__$1;
(statearr_8973_9038[(1)] = (5));

} else {
var statearr_8974_9039 = state_8967__$1;
(statearr_8974_9039[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8968 === (15))){
var inst_8945 = (state_8967[(8)]);
var state_8967__$1 = state_8967;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8967__$1,(18),to,inst_8945);
} else {
if((state_val_8968 === (21))){
var inst_8958 = (state_8967[(2)]);
var state_8967__$1 = state_8967;
var statearr_8975_9040 = state_8967__$1;
(statearr_8975_9040[(2)] = inst_8958);

(statearr_8975_9040[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8968 === (13))){
var inst_8960 = (state_8967[(2)]);
var state_8967__$1 = (function (){var statearr_8976 = state_8967;
(statearr_8976[(9)] = inst_8960);

return statearr_8976;
})();
var statearr_8977_9041 = state_8967__$1;
(statearr_8977_9041[(2)] = null);

(statearr_8977_9041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8968 === (6))){
var inst_8932 = (state_8967[(7)]);
var state_8967__$1 = state_8967;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8967__$1,(11),inst_8932);
} else {
if((state_val_8968 === (17))){
var inst_8953 = (state_8967[(2)]);
var state_8967__$1 = state_8967;
if(cljs.core.truth_(inst_8953)){
var statearr_8978_9042 = state_8967__$1;
(statearr_8978_9042[(1)] = (19));

} else {
var statearr_8979_9043 = state_8967__$1;
(statearr_8979_9043[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8968 === (3))){
var inst_8965 = (state_8967[(2)]);
var state_8967__$1 = state_8967;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8967__$1,inst_8965);
} else {
if((state_val_8968 === (12))){
var inst_8942 = (state_8967[(10)]);
var state_8967__$1 = state_8967;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8967__$1,(14),inst_8942);
} else {
if((state_val_8968 === (2))){
var state_8967__$1 = state_8967;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8967__$1,(4),results);
} else {
if((state_val_8968 === (19))){
var state_8967__$1 = state_8967;
var statearr_8980_9044 = state_8967__$1;
(statearr_8980_9044[(2)] = null);

(statearr_8980_9044[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8968 === (11))){
var inst_8942 = (state_8967[(2)]);
var state_8967__$1 = (function (){var statearr_8981 = state_8967;
(statearr_8981[(10)] = inst_8942);

return statearr_8981;
})();
var statearr_8982_9045 = state_8967__$1;
(statearr_8982_9045[(2)] = null);

(statearr_8982_9045[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8968 === (9))){
var state_8967__$1 = state_8967;
var statearr_8983_9046 = state_8967__$1;
(statearr_8983_9046[(2)] = null);

(statearr_8983_9046[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8968 === (5))){
var state_8967__$1 = state_8967;
if(cljs.core.truth_(close_QMARK_)){
var statearr_8984_9047 = state_8967__$1;
(statearr_8984_9047[(1)] = (8));

} else {
var statearr_8985_9048 = state_8967__$1;
(statearr_8985_9048[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8968 === (14))){
var inst_8945 = (state_8967[(8)]);
var inst_8947 = (state_8967[(11)]);
var inst_8945__$1 = (state_8967[(2)]);
var inst_8946 = (inst_8945__$1 == null);
var inst_8947__$1 = cljs.core.not.call(null,inst_8946);
var state_8967__$1 = (function (){var statearr_8986 = state_8967;
(statearr_8986[(8)] = inst_8945__$1);

(statearr_8986[(11)] = inst_8947__$1);

return statearr_8986;
})();
if(inst_8947__$1){
var statearr_8987_9049 = state_8967__$1;
(statearr_8987_9049[(1)] = (15));

} else {
var statearr_8988_9050 = state_8967__$1;
(statearr_8988_9050[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8968 === (16))){
var inst_8947 = (state_8967[(11)]);
var state_8967__$1 = state_8967;
var statearr_8989_9051 = state_8967__$1;
(statearr_8989_9051[(2)] = inst_8947);

(statearr_8989_9051[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8968 === (10))){
var inst_8939 = (state_8967[(2)]);
var state_8967__$1 = state_8967;
var statearr_8990_9052 = state_8967__$1;
(statearr_8990_9052[(2)] = inst_8939);

(statearr_8990_9052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8968 === (18))){
var inst_8950 = (state_8967[(2)]);
var state_8967__$1 = state_8967;
var statearr_8991_9053 = state_8967__$1;
(statearr_8991_9053[(2)] = inst_8950);

(statearr_8991_9053[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8968 === (8))){
var inst_8936 = cljs.core.async.close_BANG_.call(null,to);
var state_8967__$1 = state_8967;
var statearr_8992_9054 = state_8967__$1;
(statearr_8992_9054[(2)] = inst_8936);

(statearr_8992_9054[(1)] = (10));


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
});})(c__8450__auto__,jobs,results,process,async))
;
return ((function (switch__8338__auto__,c__8450__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8339__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8339__auto____0 = (function (){
var statearr_8996 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8996[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8339__auto__);

(statearr_8996[(1)] = (1));

return statearr_8996;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8339__auto____1 = (function (state_8967){
while(true){
var ret_value__8340__auto__ = (function (){try{while(true){
var result__8341__auto__ = switch__8338__auto__.call(null,state_8967);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8341__auto__;
}
break;
}
}catch (e8997){if((e8997 instanceof Object)){
var ex__8342__auto__ = e8997;
var statearr_8998_9055 = state_8967;
(statearr_8998_9055[(5)] = ex__8342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8967);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8997;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9056 = state_8967;
state_8967 = G__9056;
continue;
} else {
return ret_value__8340__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8339__auto__ = function(state_8967){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8339__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8339__auto____1.call(this,state_8967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8339__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8339__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8339__auto__;
})()
;})(switch__8338__auto__,c__8450__auto__,jobs,results,process,async))
})();
var state__8452__auto__ = (function (){var statearr_8999 = f__8451__auto__.call(null);
(statearr_8999[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8450__auto__);

return statearr_8999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8452__auto__);
});})(c__8450__auto__,jobs,results,process,async))
);

return c__8450__auto__;
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
var args9057 = [];
var len__7018__auto___9060 = arguments.length;
var i__7019__auto___9061 = (0);
while(true){
if((i__7019__auto___9061 < len__7018__auto___9060)){
args9057.push((arguments[i__7019__auto___9061]));

var G__9062 = (i__7019__auto___9061 + (1));
i__7019__auto___9061 = G__9062;
continue;
} else {
}
break;
}

var G__9059 = args9057.length;
switch (G__9059) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9057.length)].join('')));

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
var args9064 = [];
var len__7018__auto___9067 = arguments.length;
var i__7019__auto___9068 = (0);
while(true){
if((i__7019__auto___9068 < len__7018__auto___9067)){
args9064.push((arguments[i__7019__auto___9068]));

var G__9069 = (i__7019__auto___9068 + (1));
i__7019__auto___9068 = G__9069;
continue;
} else {
}
break;
}

var G__9066 = args9064.length;
switch (G__9066) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9064.length)].join('')));

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
var args9071 = [];
var len__7018__auto___9124 = arguments.length;
var i__7019__auto___9125 = (0);
while(true){
if((i__7019__auto___9125 < len__7018__auto___9124)){
args9071.push((arguments[i__7019__auto___9125]));

var G__9126 = (i__7019__auto___9125 + (1));
i__7019__auto___9125 = G__9126;
continue;
} else {
}
break;
}

var G__9073 = args9071.length;
switch (G__9073) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9071.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__8450__auto___9128 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8450__auto___9128,tc,fc){
return (function (){
var f__8451__auto__ = (function (){var switch__8338__auto__ = ((function (c__8450__auto___9128,tc,fc){
return (function (state_9099){
var state_val_9100 = (state_9099[(1)]);
if((state_val_9100 === (7))){
var inst_9095 = (state_9099[(2)]);
var state_9099__$1 = state_9099;
var statearr_9101_9129 = state_9099__$1;
(statearr_9101_9129[(2)] = inst_9095);

(statearr_9101_9129[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9100 === (1))){
var state_9099__$1 = state_9099;
var statearr_9102_9130 = state_9099__$1;
(statearr_9102_9130[(2)] = null);

(statearr_9102_9130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9100 === (4))){
var inst_9076 = (state_9099[(7)]);
var inst_9076__$1 = (state_9099[(2)]);
var inst_9077 = (inst_9076__$1 == null);
var state_9099__$1 = (function (){var statearr_9103 = state_9099;
(statearr_9103[(7)] = inst_9076__$1);

return statearr_9103;
})();
if(cljs.core.truth_(inst_9077)){
var statearr_9104_9131 = state_9099__$1;
(statearr_9104_9131[(1)] = (5));

} else {
var statearr_9105_9132 = state_9099__$1;
(statearr_9105_9132[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9100 === (13))){
var state_9099__$1 = state_9099;
var statearr_9106_9133 = state_9099__$1;
(statearr_9106_9133[(2)] = null);

(statearr_9106_9133[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9100 === (6))){
var inst_9076 = (state_9099[(7)]);
var inst_9082 = p.call(null,inst_9076);
var state_9099__$1 = state_9099;
if(cljs.core.truth_(inst_9082)){
var statearr_9107_9134 = state_9099__$1;
(statearr_9107_9134[(1)] = (9));

} else {
var statearr_9108_9135 = state_9099__$1;
(statearr_9108_9135[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9100 === (3))){
var inst_9097 = (state_9099[(2)]);
var state_9099__$1 = state_9099;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9099__$1,inst_9097);
} else {
if((state_val_9100 === (12))){
var state_9099__$1 = state_9099;
var statearr_9109_9136 = state_9099__$1;
(statearr_9109_9136[(2)] = null);

(statearr_9109_9136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9100 === (2))){
var state_9099__$1 = state_9099;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9099__$1,(4),ch);
} else {
if((state_val_9100 === (11))){
var inst_9076 = (state_9099[(7)]);
var inst_9086 = (state_9099[(2)]);
var state_9099__$1 = state_9099;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9099__$1,(8),inst_9086,inst_9076);
} else {
if((state_val_9100 === (9))){
var state_9099__$1 = state_9099;
var statearr_9110_9137 = state_9099__$1;
(statearr_9110_9137[(2)] = tc);

(statearr_9110_9137[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9100 === (5))){
var inst_9079 = cljs.core.async.close_BANG_.call(null,tc);
var inst_9080 = cljs.core.async.close_BANG_.call(null,fc);
var state_9099__$1 = (function (){var statearr_9111 = state_9099;
(statearr_9111[(8)] = inst_9079);

return statearr_9111;
})();
var statearr_9112_9138 = state_9099__$1;
(statearr_9112_9138[(2)] = inst_9080);

(statearr_9112_9138[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9100 === (14))){
var inst_9093 = (state_9099[(2)]);
var state_9099__$1 = state_9099;
var statearr_9113_9139 = state_9099__$1;
(statearr_9113_9139[(2)] = inst_9093);

(statearr_9113_9139[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9100 === (10))){
var state_9099__$1 = state_9099;
var statearr_9114_9140 = state_9099__$1;
(statearr_9114_9140[(2)] = fc);

(statearr_9114_9140[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9100 === (8))){
var inst_9088 = (state_9099[(2)]);
var state_9099__$1 = state_9099;
if(cljs.core.truth_(inst_9088)){
var statearr_9115_9141 = state_9099__$1;
(statearr_9115_9141[(1)] = (12));

} else {
var statearr_9116_9142 = state_9099__$1;
(statearr_9116_9142[(1)] = (13));

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
});})(c__8450__auto___9128,tc,fc))
;
return ((function (switch__8338__auto__,c__8450__auto___9128,tc,fc){
return (function() {
var cljs$core$async$state_machine__8339__auto__ = null;
var cljs$core$async$state_machine__8339__auto____0 = (function (){
var statearr_9120 = [null,null,null,null,null,null,null,null,null];
(statearr_9120[(0)] = cljs$core$async$state_machine__8339__auto__);

(statearr_9120[(1)] = (1));

return statearr_9120;
});
var cljs$core$async$state_machine__8339__auto____1 = (function (state_9099){
while(true){
var ret_value__8340__auto__ = (function (){try{while(true){
var result__8341__auto__ = switch__8338__auto__.call(null,state_9099);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8341__auto__;
}
break;
}
}catch (e9121){if((e9121 instanceof Object)){
var ex__8342__auto__ = e9121;
var statearr_9122_9143 = state_9099;
(statearr_9122_9143[(5)] = ex__8342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9099);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9121;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9144 = state_9099;
state_9099 = G__9144;
continue;
} else {
return ret_value__8340__auto__;
}
break;
}
});
cljs$core$async$state_machine__8339__auto__ = function(state_9099){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8339__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8339__auto____1.call(this,state_9099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8339__auto____0;
cljs$core$async$state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8339__auto____1;
return cljs$core$async$state_machine__8339__auto__;
})()
;})(switch__8338__auto__,c__8450__auto___9128,tc,fc))
})();
var state__8452__auto__ = (function (){var statearr_9123 = f__8451__auto__.call(null);
(statearr_9123[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8450__auto___9128);

return statearr_9123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8452__auto__);
});})(c__8450__auto___9128,tc,fc))
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
var c__8450__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8450__auto__){
return (function (){
var f__8451__auto__ = (function (){var switch__8338__auto__ = ((function (c__8450__auto__){
return (function (state_9208){
var state_val_9209 = (state_9208[(1)]);
if((state_val_9209 === (7))){
var inst_9204 = (state_9208[(2)]);
var state_9208__$1 = state_9208;
var statearr_9210_9231 = state_9208__$1;
(statearr_9210_9231[(2)] = inst_9204);

(statearr_9210_9231[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9209 === (1))){
var inst_9188 = init;
var state_9208__$1 = (function (){var statearr_9211 = state_9208;
(statearr_9211[(7)] = inst_9188);

return statearr_9211;
})();
var statearr_9212_9232 = state_9208__$1;
(statearr_9212_9232[(2)] = null);

(statearr_9212_9232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9209 === (4))){
var inst_9191 = (state_9208[(8)]);
var inst_9191__$1 = (state_9208[(2)]);
var inst_9192 = (inst_9191__$1 == null);
var state_9208__$1 = (function (){var statearr_9213 = state_9208;
(statearr_9213[(8)] = inst_9191__$1);

return statearr_9213;
})();
if(cljs.core.truth_(inst_9192)){
var statearr_9214_9233 = state_9208__$1;
(statearr_9214_9233[(1)] = (5));

} else {
var statearr_9215_9234 = state_9208__$1;
(statearr_9215_9234[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9209 === (6))){
var inst_9195 = (state_9208[(9)]);
var inst_9191 = (state_9208[(8)]);
var inst_9188 = (state_9208[(7)]);
var inst_9195__$1 = f.call(null,inst_9188,inst_9191);
var inst_9196 = cljs.core.reduced_QMARK_.call(null,inst_9195__$1);
var state_9208__$1 = (function (){var statearr_9216 = state_9208;
(statearr_9216[(9)] = inst_9195__$1);

return statearr_9216;
})();
if(inst_9196){
var statearr_9217_9235 = state_9208__$1;
(statearr_9217_9235[(1)] = (8));

} else {
var statearr_9218_9236 = state_9208__$1;
(statearr_9218_9236[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9209 === (3))){
var inst_9206 = (state_9208[(2)]);
var state_9208__$1 = state_9208;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9208__$1,inst_9206);
} else {
if((state_val_9209 === (2))){
var state_9208__$1 = state_9208;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9208__$1,(4),ch);
} else {
if((state_val_9209 === (9))){
var inst_9195 = (state_9208[(9)]);
var inst_9188 = inst_9195;
var state_9208__$1 = (function (){var statearr_9219 = state_9208;
(statearr_9219[(7)] = inst_9188);

return statearr_9219;
})();
var statearr_9220_9237 = state_9208__$1;
(statearr_9220_9237[(2)] = null);

(statearr_9220_9237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9209 === (5))){
var inst_9188 = (state_9208[(7)]);
var state_9208__$1 = state_9208;
var statearr_9221_9238 = state_9208__$1;
(statearr_9221_9238[(2)] = inst_9188);

(statearr_9221_9238[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9209 === (10))){
var inst_9202 = (state_9208[(2)]);
var state_9208__$1 = state_9208;
var statearr_9222_9239 = state_9208__$1;
(statearr_9222_9239[(2)] = inst_9202);

(statearr_9222_9239[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9209 === (8))){
var inst_9195 = (state_9208[(9)]);
var inst_9198 = cljs.core.deref.call(null,inst_9195);
var state_9208__$1 = state_9208;
var statearr_9223_9240 = state_9208__$1;
(statearr_9223_9240[(2)] = inst_9198);

(statearr_9223_9240[(1)] = (10));


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
});})(c__8450__auto__))
;
return ((function (switch__8338__auto__,c__8450__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__8339__auto__ = null;
var cljs$core$async$reduce_$_state_machine__8339__auto____0 = (function (){
var statearr_9227 = [null,null,null,null,null,null,null,null,null,null];
(statearr_9227[(0)] = cljs$core$async$reduce_$_state_machine__8339__auto__);

(statearr_9227[(1)] = (1));

return statearr_9227;
});
var cljs$core$async$reduce_$_state_machine__8339__auto____1 = (function (state_9208){
while(true){
var ret_value__8340__auto__ = (function (){try{while(true){
var result__8341__auto__ = switch__8338__auto__.call(null,state_9208);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8341__auto__;
}
break;
}
}catch (e9228){if((e9228 instanceof Object)){
var ex__8342__auto__ = e9228;
var statearr_9229_9241 = state_9208;
(statearr_9229_9241[(5)] = ex__8342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9208);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9228;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9242 = state_9208;
state_9208 = G__9242;
continue;
} else {
return ret_value__8340__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__8339__auto__ = function(state_9208){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__8339__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__8339__auto____1.call(this,state_9208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__8339__auto____0;
cljs$core$async$reduce_$_state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__8339__auto____1;
return cljs$core$async$reduce_$_state_machine__8339__auto__;
})()
;})(switch__8338__auto__,c__8450__auto__))
})();
var state__8452__auto__ = (function (){var statearr_9230 = f__8451__auto__.call(null);
(statearr_9230[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8450__auto__);

return statearr_9230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8452__auto__);
});})(c__8450__auto__))
);

return c__8450__auto__;
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
var args9243 = [];
var len__7018__auto___9295 = arguments.length;
var i__7019__auto___9296 = (0);
while(true){
if((i__7019__auto___9296 < len__7018__auto___9295)){
args9243.push((arguments[i__7019__auto___9296]));

var G__9297 = (i__7019__auto___9296 + (1));
i__7019__auto___9296 = G__9297;
continue;
} else {
}
break;
}

var G__9245 = args9243.length;
switch (G__9245) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9243.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__8450__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8450__auto__){
return (function (){
var f__8451__auto__ = (function (){var switch__8338__auto__ = ((function (c__8450__auto__){
return (function (state_9270){
var state_val_9271 = (state_9270[(1)]);
if((state_val_9271 === (7))){
var inst_9252 = (state_9270[(2)]);
var state_9270__$1 = state_9270;
var statearr_9272_9299 = state_9270__$1;
(statearr_9272_9299[(2)] = inst_9252);

(statearr_9272_9299[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9271 === (1))){
var inst_9246 = cljs.core.seq.call(null,coll);
var inst_9247 = inst_9246;
var state_9270__$1 = (function (){var statearr_9273 = state_9270;
(statearr_9273[(7)] = inst_9247);

return statearr_9273;
})();
var statearr_9274_9300 = state_9270__$1;
(statearr_9274_9300[(2)] = null);

(statearr_9274_9300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9271 === (4))){
var inst_9247 = (state_9270[(7)]);
var inst_9250 = cljs.core.first.call(null,inst_9247);
var state_9270__$1 = state_9270;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9270__$1,(7),ch,inst_9250);
} else {
if((state_val_9271 === (13))){
var inst_9264 = (state_9270[(2)]);
var state_9270__$1 = state_9270;
var statearr_9275_9301 = state_9270__$1;
(statearr_9275_9301[(2)] = inst_9264);

(statearr_9275_9301[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9271 === (6))){
var inst_9255 = (state_9270[(2)]);
var state_9270__$1 = state_9270;
if(cljs.core.truth_(inst_9255)){
var statearr_9276_9302 = state_9270__$1;
(statearr_9276_9302[(1)] = (8));

} else {
var statearr_9277_9303 = state_9270__$1;
(statearr_9277_9303[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9271 === (3))){
var inst_9268 = (state_9270[(2)]);
var state_9270__$1 = state_9270;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9270__$1,inst_9268);
} else {
if((state_val_9271 === (12))){
var state_9270__$1 = state_9270;
var statearr_9278_9304 = state_9270__$1;
(statearr_9278_9304[(2)] = null);

(statearr_9278_9304[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9271 === (2))){
var inst_9247 = (state_9270[(7)]);
var state_9270__$1 = state_9270;
if(cljs.core.truth_(inst_9247)){
var statearr_9279_9305 = state_9270__$1;
(statearr_9279_9305[(1)] = (4));

} else {
var statearr_9280_9306 = state_9270__$1;
(statearr_9280_9306[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9271 === (11))){
var inst_9261 = cljs.core.async.close_BANG_.call(null,ch);
var state_9270__$1 = state_9270;
var statearr_9281_9307 = state_9270__$1;
(statearr_9281_9307[(2)] = inst_9261);

(statearr_9281_9307[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9271 === (9))){
var state_9270__$1 = state_9270;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9282_9308 = state_9270__$1;
(statearr_9282_9308[(1)] = (11));

} else {
var statearr_9283_9309 = state_9270__$1;
(statearr_9283_9309[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9271 === (5))){
var inst_9247 = (state_9270[(7)]);
var state_9270__$1 = state_9270;
var statearr_9284_9310 = state_9270__$1;
(statearr_9284_9310[(2)] = inst_9247);

(statearr_9284_9310[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9271 === (10))){
var inst_9266 = (state_9270[(2)]);
var state_9270__$1 = state_9270;
var statearr_9285_9311 = state_9270__$1;
(statearr_9285_9311[(2)] = inst_9266);

(statearr_9285_9311[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9271 === (8))){
var inst_9247 = (state_9270[(7)]);
var inst_9257 = cljs.core.next.call(null,inst_9247);
var inst_9247__$1 = inst_9257;
var state_9270__$1 = (function (){var statearr_9286 = state_9270;
(statearr_9286[(7)] = inst_9247__$1);

return statearr_9286;
})();
var statearr_9287_9312 = state_9270__$1;
(statearr_9287_9312[(2)] = null);

(statearr_9287_9312[(1)] = (2));


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
});})(c__8450__auto__))
;
return ((function (switch__8338__auto__,c__8450__auto__){
return (function() {
var cljs$core$async$state_machine__8339__auto__ = null;
var cljs$core$async$state_machine__8339__auto____0 = (function (){
var statearr_9291 = [null,null,null,null,null,null,null,null];
(statearr_9291[(0)] = cljs$core$async$state_machine__8339__auto__);

(statearr_9291[(1)] = (1));

return statearr_9291;
});
var cljs$core$async$state_machine__8339__auto____1 = (function (state_9270){
while(true){
var ret_value__8340__auto__ = (function (){try{while(true){
var result__8341__auto__ = switch__8338__auto__.call(null,state_9270);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8341__auto__;
}
break;
}
}catch (e9292){if((e9292 instanceof Object)){
var ex__8342__auto__ = e9292;
var statearr_9293_9313 = state_9270;
(statearr_9293_9313[(5)] = ex__8342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9270);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9292;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9314 = state_9270;
state_9270 = G__9314;
continue;
} else {
return ret_value__8340__auto__;
}
break;
}
});
cljs$core$async$state_machine__8339__auto__ = function(state_9270){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8339__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8339__auto____1.call(this,state_9270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8339__auto____0;
cljs$core$async$state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8339__auto____1;
return cljs$core$async$state_machine__8339__auto__;
})()
;})(switch__8338__auto__,c__8450__auto__))
})();
var state__8452__auto__ = (function (){var statearr_9294 = f__8451__auto__.call(null);
(statearr_9294[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8450__auto__);

return statearr_9294;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8452__auto__);
});})(c__8450__auto__))
);

return c__8450__auto__;
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
var x__6615__auto__ = (((_ == null))?null:_);
var m__6616__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__6615__auto__)]);
if(!((m__6616__auto__ == null))){
return m__6616__auto__.call(null,_);
} else {
var m__6616__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__6616__auto____$1 == null))){
return m__6616__auto____$1.call(null,_);
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
var x__6615__auto__ = (((m == null))?null:m);
var m__6616__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__6615__auto__)]);
if(!((m__6616__auto__ == null))){
return m__6616__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__6616__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__6616__auto____$1 == null))){
return m__6616__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__6615__auto__ = (((m == null))?null:m);
var m__6616__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__6615__auto__)]);
if(!((m__6616__auto__ == null))){
return m__6616__auto__.call(null,m,ch);
} else {
var m__6616__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__6616__auto____$1 == null))){
return m__6616__auto____$1.call(null,m,ch);
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
var x__6615__auto__ = (((m == null))?null:m);
var m__6616__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__6615__auto__)]);
if(!((m__6616__auto__ == null))){
return m__6616__auto__.call(null,m);
} else {
var m__6616__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__6616__auto____$1 == null))){
return m__6616__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async9536 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9536 = (function (mult,ch,cs,meta9537){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta9537 = meta9537;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9536.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_9538,meta9537__$1){
var self__ = this;
var _9538__$1 = this;
return (new cljs.core.async.t_cljs$core$async9536(self__.mult,self__.ch,self__.cs,meta9537__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async9536.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_9538){
var self__ = this;
var _9538__$1 = this;
return self__.meta9537;
});})(cs))
;

cljs.core.async.t_cljs$core$async9536.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async9536.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async9536.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async9536.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async9536.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async9536.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async9536.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta9537","meta9537",1920222170,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async9536.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9536.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9536";

cljs.core.async.t_cljs$core$async9536.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__6558__auto__,writer__6559__auto__,opt__6560__auto__){
return cljs.core._write.call(null,writer__6559__auto__,"cljs.core.async/t_cljs$core$async9536");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async9536 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async9536(mult__$1,ch__$1,cs__$1,meta9537){
return (new cljs.core.async.t_cljs$core$async9536(mult__$1,ch__$1,cs__$1,meta9537));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async9536(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__8450__auto___9757 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8450__auto___9757,cs,m,dchan,dctr,done){
return (function (){
var f__8451__auto__ = (function (){var switch__8338__auto__ = ((function (c__8450__auto___9757,cs,m,dchan,dctr,done){
return (function (state_9669){
var state_val_9670 = (state_9669[(1)]);
if((state_val_9670 === (7))){
var inst_9665 = (state_9669[(2)]);
var state_9669__$1 = state_9669;
var statearr_9671_9758 = state_9669__$1;
(statearr_9671_9758[(2)] = inst_9665);

(statearr_9671_9758[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9670 === (20))){
var inst_9570 = (state_9669[(7)]);
var inst_9580 = cljs.core.first.call(null,inst_9570);
var inst_9581 = cljs.core.nth.call(null,inst_9580,(0),null);
var inst_9582 = cljs.core.nth.call(null,inst_9580,(1),null);
var state_9669__$1 = (function (){var statearr_9672 = state_9669;
(statearr_9672[(8)] = inst_9581);

return statearr_9672;
})();
if(cljs.core.truth_(inst_9582)){
var statearr_9673_9759 = state_9669__$1;
(statearr_9673_9759[(1)] = (22));

} else {
var statearr_9674_9760 = state_9669__$1;
(statearr_9674_9760[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9670 === (27))){
var inst_9612 = (state_9669[(9)]);
var inst_9541 = (state_9669[(10)]);
var inst_9617 = (state_9669[(11)]);
var inst_9610 = (state_9669[(12)]);
var inst_9617__$1 = cljs.core._nth.call(null,inst_9610,inst_9612);
var inst_9618 = cljs.core.async.put_BANG_.call(null,inst_9617__$1,inst_9541,done);
var state_9669__$1 = (function (){var statearr_9675 = state_9669;
(statearr_9675[(11)] = inst_9617__$1);

return statearr_9675;
})();
if(cljs.core.truth_(inst_9618)){
var statearr_9676_9761 = state_9669__$1;
(statearr_9676_9761[(1)] = (30));

} else {
var statearr_9677_9762 = state_9669__$1;
(statearr_9677_9762[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9670 === (1))){
var state_9669__$1 = state_9669;
var statearr_9678_9763 = state_9669__$1;
(statearr_9678_9763[(2)] = null);

(statearr_9678_9763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9670 === (24))){
var inst_9570 = (state_9669[(7)]);
var inst_9587 = (state_9669[(2)]);
var inst_9588 = cljs.core.next.call(null,inst_9570);
var inst_9550 = inst_9588;
var inst_9551 = null;
var inst_9552 = (0);
var inst_9553 = (0);
var state_9669__$1 = (function (){var statearr_9679 = state_9669;
(statearr_9679[(13)] = inst_9550);

(statearr_9679[(14)] = inst_9552);

(statearr_9679[(15)] = inst_9587);

(statearr_9679[(16)] = inst_9553);

(statearr_9679[(17)] = inst_9551);

return statearr_9679;
})();
var statearr_9680_9764 = state_9669__$1;
(statearr_9680_9764[(2)] = null);

(statearr_9680_9764[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9670 === (39))){
var state_9669__$1 = state_9669;
var statearr_9684_9765 = state_9669__$1;
(statearr_9684_9765[(2)] = null);

(statearr_9684_9765[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9670 === (4))){
var inst_9541 = (state_9669[(10)]);
var inst_9541__$1 = (state_9669[(2)]);
var inst_9542 = (inst_9541__$1 == null);
var state_9669__$1 = (function (){var statearr_9685 = state_9669;
(statearr_9685[(10)] = inst_9541__$1);

return statearr_9685;
})();
if(cljs.core.truth_(inst_9542)){
var statearr_9686_9766 = state_9669__$1;
(statearr_9686_9766[(1)] = (5));

} else {
var statearr_9687_9767 = state_9669__$1;
(statearr_9687_9767[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9670 === (15))){
var inst_9550 = (state_9669[(13)]);
var inst_9552 = (state_9669[(14)]);
var inst_9553 = (state_9669[(16)]);
var inst_9551 = (state_9669[(17)]);
var inst_9566 = (state_9669[(2)]);
var inst_9567 = (inst_9553 + (1));
var tmp9681 = inst_9550;
var tmp9682 = inst_9552;
var tmp9683 = inst_9551;
var inst_9550__$1 = tmp9681;
var inst_9551__$1 = tmp9683;
var inst_9552__$1 = tmp9682;
var inst_9553__$1 = inst_9567;
var state_9669__$1 = (function (){var statearr_9688 = state_9669;
(statearr_9688[(13)] = inst_9550__$1);

(statearr_9688[(14)] = inst_9552__$1);

(statearr_9688[(18)] = inst_9566);

(statearr_9688[(16)] = inst_9553__$1);

(statearr_9688[(17)] = inst_9551__$1);

return statearr_9688;
})();
var statearr_9689_9768 = state_9669__$1;
(statearr_9689_9768[(2)] = null);

(statearr_9689_9768[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9670 === (21))){
var inst_9591 = (state_9669[(2)]);
var state_9669__$1 = state_9669;
var statearr_9693_9769 = state_9669__$1;
(statearr_9693_9769[(2)] = inst_9591);

(statearr_9693_9769[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9670 === (31))){
var inst_9617 = (state_9669[(11)]);
var inst_9621 = done.call(null,null);
var inst_9622 = cljs.core.async.untap_STAR_.call(null,m,inst_9617);
var state_9669__$1 = (function (){var statearr_9694 = state_9669;
(statearr_9694[(19)] = inst_9621);

return statearr_9694;
})();
var statearr_9695_9770 = state_9669__$1;
(statearr_9695_9770[(2)] = inst_9622);

(statearr_9695_9770[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9670 === (32))){
var inst_9612 = (state_9669[(9)]);
var inst_9611 = (state_9669[(20)]);
var inst_9609 = (state_9669[(21)]);
var inst_9610 = (state_9669[(12)]);
var inst_9624 = (state_9669[(2)]);
var inst_9625 = (inst_9612 + (1));
var tmp9690 = inst_9611;
var tmp9691 = inst_9609;
var tmp9692 = inst_9610;
var inst_9609__$1 = tmp9691;
var inst_9610__$1 = tmp9692;
var inst_9611__$1 = tmp9690;
var inst_9612__$1 = inst_9625;
var state_9669__$1 = (function (){var statearr_9696 = state_9669;
(statearr_9696[(9)] = inst_9612__$1);

(statearr_9696[(22)] = inst_9624);

(statearr_9696[(20)] = inst_9611__$1);

(statearr_9696[(21)] = inst_9609__$1);

(statearr_9696[(12)] = inst_9610__$1);

return statearr_9696;
})();
var statearr_9697_9771 = state_9669__$1;
(statearr_9697_9771[(2)] = null);

(statearr_9697_9771[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9670 === (40))){
var inst_9637 = (state_9669[(23)]);
var inst_9641 = done.call(null,null);
var inst_9642 = cljs.core.async.untap_STAR_.call(null,m,inst_9637);
var state_9669__$1 = (function (){var statearr_9698 = state_9669;
(statearr_9698[(24)] = inst_9641);

return statearr_9698;
})();
var statearr_9699_9772 = state_9669__$1;
(statearr_9699_9772[(2)] = inst_9642);

(statearr_9699_9772[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9670 === (33))){
var inst_9628 = (state_9669[(25)]);
var inst_9630 = cljs.core.chunked_seq_QMARK_.call(null,inst_9628);
var state_9669__$1 = state_9669;
if(inst_9630){
var statearr_9700_9773 = state_9669__$1;
(statearr_9700_9773[(1)] = (36));

} else {
var statearr_9701_9774 = state_9669__$1;
(statearr_9701_9774[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9670 === (13))){
var inst_9560 = (state_9669[(26)]);
var inst_9563 = cljs.core.async.close_BANG_.call(null,inst_9560);
var state_9669__$1 = state_9669;
var statearr_9702_9775 = state_9669__$1;
(statearr_9702_9775[(2)] = inst_9563);

(statearr_9702_9775[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9670 === (22))){
var inst_9581 = (state_9669[(8)]);
var inst_9584 = cljs.core.async.close_BANG_.call(null,inst_9581);
var state_9669__$1 = state_9669;
var statearr_9703_9776 = state_9669__$1;
(statearr_9703_9776[(2)] = inst_9584);

(statearr_9703_9776[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9670 === (36))){
var inst_9628 = (state_9669[(25)]);
var inst_9632 = cljs.core.chunk_first.call(null,inst_9628);
var inst_9633 = cljs.core.chunk_rest.call(null,inst_9628);
var inst_9634 = cljs.core.count.call(null,inst_9632);
var inst_9609 = inst_9633;
var inst_9610 = inst_9632;
var inst_9611 = inst_9634;
var inst_9612 = (0);
var state_9669__$1 = (function (){var statearr_9704 = state_9669;
(statearr_9704[(9)] = inst_9612);

(statearr_9704[(20)] = inst_9611);

(statearr_9704[(21)] = inst_9609);

(statearr_9704[(12)] = inst_9610);

return statearr_9704;
})();
var statearr_9705_9777 = state_9669__$1;
(statearr_9705_9777[(2)] = null);

(statearr_9705_9777[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9670 === (41))){
var inst_9628 = (state_9669[(25)]);
var inst_9644 = (state_9669[(2)]);
var inst_9645 = cljs.core.next.call(null,inst_9628);
var inst_9609 = inst_9645;
var inst_9610 = null;
var inst_9611 = (0);
var inst_9612 = (0);
var state_9669__$1 = (function (){var statearr_9706 = state_9669;
(statearr_9706[(27)] = inst_9644);

(statearr_9706[(9)] = inst_9612);

(statearr_9706[(20)] = inst_9611);

(statearr_9706[(21)] = inst_9609);

(statearr_9706[(12)] = inst_9610);

return statearr_9706;
})();
var statearr_9707_9778 = state_9669__$1;
(statearr_9707_9778[(2)] = null);

(statearr_9707_9778[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9670 === (43))){
var state_9669__$1 = state_9669;
var statearr_9708_9779 = state_9669__$1;
(statearr_9708_9779[(2)] = null);

(statearr_9708_9779[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9670 === (29))){
var inst_9653 = (state_9669[(2)]);
var state_9669__$1 = state_9669;
var statearr_9709_9780 = state_9669__$1;
(statearr_9709_9780[(2)] = inst_9653);

(statearr_9709_9780[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9670 === (44))){
var inst_9662 = (state_9669[(2)]);
var state_9669__$1 = (function (){var statearr_9710 = state_9669;
(statearr_9710[(28)] = inst_9662);

return statearr_9710;
})();
var statearr_9711_9781 = state_9669__$1;
(statearr_9711_9781[(2)] = null);

(statearr_9711_9781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9670 === (6))){
var inst_9601 = (state_9669[(29)]);
var inst_9600 = cljs.core.deref.call(null,cs);
var inst_9601__$1 = cljs.core.keys.call(null,inst_9600);
var inst_9602 = cljs.core.count.call(null,inst_9601__$1);
var inst_9603 = cljs.core.reset_BANG_.call(null,dctr,inst_9602);
var inst_9608 = cljs.core.seq.call(null,inst_9601__$1);
var inst_9609 = inst_9608;
var inst_9610 = null;
var inst_9611 = (0);
var inst_9612 = (0);
var state_9669__$1 = (function (){var statearr_9712 = state_9669;
(statearr_9712[(9)] = inst_9612);

(statearr_9712[(30)] = inst_9603);

(statearr_9712[(20)] = inst_9611);

(statearr_9712[(21)] = inst_9609);

(statearr_9712[(29)] = inst_9601__$1);

(statearr_9712[(12)] = inst_9610);

return statearr_9712;
})();
var statearr_9713_9782 = state_9669__$1;
(statearr_9713_9782[(2)] = null);

(statearr_9713_9782[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9670 === (28))){
var inst_9628 = (state_9669[(25)]);
var inst_9609 = (state_9669[(21)]);
var inst_9628__$1 = cljs.core.seq.call(null,inst_9609);
var state_9669__$1 = (function (){var statearr_9714 = state_9669;
(statearr_9714[(25)] = inst_9628__$1);

return statearr_9714;
})();
if(inst_9628__$1){
var statearr_9715_9783 = state_9669__$1;
(statearr_9715_9783[(1)] = (33));

} else {
var statearr_9716_9784 = state_9669__$1;
(statearr_9716_9784[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9670 === (25))){
var inst_9612 = (state_9669[(9)]);
var inst_9611 = (state_9669[(20)]);
var inst_9614 = (inst_9612 < inst_9611);
var inst_9615 = inst_9614;
var state_9669__$1 = state_9669;
if(cljs.core.truth_(inst_9615)){
var statearr_9717_9785 = state_9669__$1;
(statearr_9717_9785[(1)] = (27));

} else {
var statearr_9718_9786 = state_9669__$1;
(statearr_9718_9786[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9670 === (34))){
var state_9669__$1 = state_9669;
var statearr_9719_9787 = state_9669__$1;
(statearr_9719_9787[(2)] = null);

(statearr_9719_9787[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9670 === (17))){
var state_9669__$1 = state_9669;
var statearr_9720_9788 = state_9669__$1;
(statearr_9720_9788[(2)] = null);

(statearr_9720_9788[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9670 === (3))){
var inst_9667 = (state_9669[(2)]);
var state_9669__$1 = state_9669;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9669__$1,inst_9667);
} else {
if((state_val_9670 === (12))){
var inst_9596 = (state_9669[(2)]);
var state_9669__$1 = state_9669;
var statearr_9721_9789 = state_9669__$1;
(statearr_9721_9789[(2)] = inst_9596);

(statearr_9721_9789[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9670 === (2))){
var state_9669__$1 = state_9669;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9669__$1,(4),ch);
} else {
if((state_val_9670 === (23))){
var state_9669__$1 = state_9669;
var statearr_9722_9790 = state_9669__$1;
(statearr_9722_9790[(2)] = null);

(statearr_9722_9790[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9670 === (35))){
var inst_9651 = (state_9669[(2)]);
var state_9669__$1 = state_9669;
var statearr_9723_9791 = state_9669__$1;
(statearr_9723_9791[(2)] = inst_9651);

(statearr_9723_9791[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9670 === (19))){
var inst_9570 = (state_9669[(7)]);
var inst_9574 = cljs.core.chunk_first.call(null,inst_9570);
var inst_9575 = cljs.core.chunk_rest.call(null,inst_9570);
var inst_9576 = cljs.core.count.call(null,inst_9574);
var inst_9550 = inst_9575;
var inst_9551 = inst_9574;
var inst_9552 = inst_9576;
var inst_9553 = (0);
var state_9669__$1 = (function (){var statearr_9724 = state_9669;
(statearr_9724[(13)] = inst_9550);

(statearr_9724[(14)] = inst_9552);

(statearr_9724[(16)] = inst_9553);

(statearr_9724[(17)] = inst_9551);

return statearr_9724;
})();
var statearr_9725_9792 = state_9669__$1;
(statearr_9725_9792[(2)] = null);

(statearr_9725_9792[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9670 === (11))){
var inst_9550 = (state_9669[(13)]);
var inst_9570 = (state_9669[(7)]);
var inst_9570__$1 = cljs.core.seq.call(null,inst_9550);
var state_9669__$1 = (function (){var statearr_9726 = state_9669;
(statearr_9726[(7)] = inst_9570__$1);

return statearr_9726;
})();
if(inst_9570__$1){
var statearr_9727_9793 = state_9669__$1;
(statearr_9727_9793[(1)] = (16));

} else {
var statearr_9728_9794 = state_9669__$1;
(statearr_9728_9794[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9670 === (9))){
var inst_9598 = (state_9669[(2)]);
var state_9669__$1 = state_9669;
var statearr_9729_9795 = state_9669__$1;
(statearr_9729_9795[(2)] = inst_9598);

(statearr_9729_9795[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9670 === (5))){
var inst_9548 = cljs.core.deref.call(null,cs);
var inst_9549 = cljs.core.seq.call(null,inst_9548);
var inst_9550 = inst_9549;
var inst_9551 = null;
var inst_9552 = (0);
var inst_9553 = (0);
var state_9669__$1 = (function (){var statearr_9730 = state_9669;
(statearr_9730[(13)] = inst_9550);

(statearr_9730[(14)] = inst_9552);

(statearr_9730[(16)] = inst_9553);

(statearr_9730[(17)] = inst_9551);

return statearr_9730;
})();
var statearr_9731_9796 = state_9669__$1;
(statearr_9731_9796[(2)] = null);

(statearr_9731_9796[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9670 === (14))){
var state_9669__$1 = state_9669;
var statearr_9732_9797 = state_9669__$1;
(statearr_9732_9797[(2)] = null);

(statearr_9732_9797[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9670 === (45))){
var inst_9659 = (state_9669[(2)]);
var state_9669__$1 = state_9669;
var statearr_9733_9798 = state_9669__$1;
(statearr_9733_9798[(2)] = inst_9659);

(statearr_9733_9798[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9670 === (26))){
var inst_9601 = (state_9669[(29)]);
var inst_9655 = (state_9669[(2)]);
var inst_9656 = cljs.core.seq.call(null,inst_9601);
var state_9669__$1 = (function (){var statearr_9734 = state_9669;
(statearr_9734[(31)] = inst_9655);

return statearr_9734;
})();
if(inst_9656){
var statearr_9735_9799 = state_9669__$1;
(statearr_9735_9799[(1)] = (42));

} else {
var statearr_9736_9800 = state_9669__$1;
(statearr_9736_9800[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9670 === (16))){
var inst_9570 = (state_9669[(7)]);
var inst_9572 = cljs.core.chunked_seq_QMARK_.call(null,inst_9570);
var state_9669__$1 = state_9669;
if(inst_9572){
var statearr_9737_9801 = state_9669__$1;
(statearr_9737_9801[(1)] = (19));

} else {
var statearr_9738_9802 = state_9669__$1;
(statearr_9738_9802[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9670 === (38))){
var inst_9648 = (state_9669[(2)]);
var state_9669__$1 = state_9669;
var statearr_9739_9803 = state_9669__$1;
(statearr_9739_9803[(2)] = inst_9648);

(statearr_9739_9803[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9670 === (30))){
var state_9669__$1 = state_9669;
var statearr_9740_9804 = state_9669__$1;
(statearr_9740_9804[(2)] = null);

(statearr_9740_9804[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9670 === (10))){
var inst_9553 = (state_9669[(16)]);
var inst_9551 = (state_9669[(17)]);
var inst_9559 = cljs.core._nth.call(null,inst_9551,inst_9553);
var inst_9560 = cljs.core.nth.call(null,inst_9559,(0),null);
var inst_9561 = cljs.core.nth.call(null,inst_9559,(1),null);
var state_9669__$1 = (function (){var statearr_9741 = state_9669;
(statearr_9741[(26)] = inst_9560);

return statearr_9741;
})();
if(cljs.core.truth_(inst_9561)){
var statearr_9742_9805 = state_9669__$1;
(statearr_9742_9805[(1)] = (13));

} else {
var statearr_9743_9806 = state_9669__$1;
(statearr_9743_9806[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9670 === (18))){
var inst_9594 = (state_9669[(2)]);
var state_9669__$1 = state_9669;
var statearr_9744_9807 = state_9669__$1;
(statearr_9744_9807[(2)] = inst_9594);

(statearr_9744_9807[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9670 === (42))){
var state_9669__$1 = state_9669;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9669__$1,(45),dchan);
} else {
if((state_val_9670 === (37))){
var inst_9637 = (state_9669[(23)]);
var inst_9541 = (state_9669[(10)]);
var inst_9628 = (state_9669[(25)]);
var inst_9637__$1 = cljs.core.first.call(null,inst_9628);
var inst_9638 = cljs.core.async.put_BANG_.call(null,inst_9637__$1,inst_9541,done);
var state_9669__$1 = (function (){var statearr_9745 = state_9669;
(statearr_9745[(23)] = inst_9637__$1);

return statearr_9745;
})();
if(cljs.core.truth_(inst_9638)){
var statearr_9746_9808 = state_9669__$1;
(statearr_9746_9808[(1)] = (39));

} else {
var statearr_9747_9809 = state_9669__$1;
(statearr_9747_9809[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9670 === (8))){
var inst_9552 = (state_9669[(14)]);
var inst_9553 = (state_9669[(16)]);
var inst_9555 = (inst_9553 < inst_9552);
var inst_9556 = inst_9555;
var state_9669__$1 = state_9669;
if(cljs.core.truth_(inst_9556)){
var statearr_9748_9810 = state_9669__$1;
(statearr_9748_9810[(1)] = (10));

} else {
var statearr_9749_9811 = state_9669__$1;
(statearr_9749_9811[(1)] = (11));

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
});})(c__8450__auto___9757,cs,m,dchan,dctr,done))
;
return ((function (switch__8338__auto__,c__8450__auto___9757,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__8339__auto__ = null;
var cljs$core$async$mult_$_state_machine__8339__auto____0 = (function (){
var statearr_9753 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9753[(0)] = cljs$core$async$mult_$_state_machine__8339__auto__);

(statearr_9753[(1)] = (1));

return statearr_9753;
});
var cljs$core$async$mult_$_state_machine__8339__auto____1 = (function (state_9669){
while(true){
var ret_value__8340__auto__ = (function (){try{while(true){
var result__8341__auto__ = switch__8338__auto__.call(null,state_9669);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8341__auto__;
}
break;
}
}catch (e9754){if((e9754 instanceof Object)){
var ex__8342__auto__ = e9754;
var statearr_9755_9812 = state_9669;
(statearr_9755_9812[(5)] = ex__8342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9669);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9754;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9813 = state_9669;
state_9669 = G__9813;
continue;
} else {
return ret_value__8340__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__8339__auto__ = function(state_9669){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__8339__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__8339__auto____1.call(this,state_9669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__8339__auto____0;
cljs$core$async$mult_$_state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__8339__auto____1;
return cljs$core$async$mult_$_state_machine__8339__auto__;
})()
;})(switch__8338__auto__,c__8450__auto___9757,cs,m,dchan,dctr,done))
})();
var state__8452__auto__ = (function (){var statearr_9756 = f__8451__auto__.call(null);
(statearr_9756[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8450__auto___9757);

return statearr_9756;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8452__auto__);
});})(c__8450__auto___9757,cs,m,dchan,dctr,done))
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
var args9814 = [];
var len__7018__auto___9817 = arguments.length;
var i__7019__auto___9818 = (0);
while(true){
if((i__7019__auto___9818 < len__7018__auto___9817)){
args9814.push((arguments[i__7019__auto___9818]));

var G__9819 = (i__7019__auto___9818 + (1));
i__7019__auto___9818 = G__9819;
continue;
} else {
}
break;
}

var G__9816 = args9814.length;
switch (G__9816) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9814.length)].join('')));

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
var x__6615__auto__ = (((m == null))?null:m);
var m__6616__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__6615__auto__)]);
if(!((m__6616__auto__ == null))){
return m__6616__auto__.call(null,m,ch);
} else {
var m__6616__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__6616__auto____$1 == null))){
return m__6616__auto____$1.call(null,m,ch);
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
var x__6615__auto__ = (((m == null))?null:m);
var m__6616__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__6615__auto__)]);
if(!((m__6616__auto__ == null))){
return m__6616__auto__.call(null,m,ch);
} else {
var m__6616__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__6616__auto____$1 == null))){
return m__6616__auto____$1.call(null,m,ch);
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
var x__6615__auto__ = (((m == null))?null:m);
var m__6616__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__6615__auto__)]);
if(!((m__6616__auto__ == null))){
return m__6616__auto__.call(null,m);
} else {
var m__6616__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__6616__auto____$1 == null))){
return m__6616__auto____$1.call(null,m);
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
var x__6615__auto__ = (((m == null))?null:m);
var m__6616__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__6615__auto__)]);
if(!((m__6616__auto__ == null))){
return m__6616__auto__.call(null,m,state_map);
} else {
var m__6616__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__6616__auto____$1 == null))){
return m__6616__auto____$1.call(null,m,state_map);
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
var x__6615__auto__ = (((m == null))?null:m);
var m__6616__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__6615__auto__)]);
if(!((m__6616__auto__ == null))){
return m__6616__auto__.call(null,m,mode);
} else {
var m__6616__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__6616__auto____$1 == null))){
return m__6616__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__7025__auto__ = [];
var len__7018__auto___9831 = arguments.length;
var i__7019__auto___9832 = (0);
while(true){
if((i__7019__auto___9832 < len__7018__auto___9831)){
args__7025__auto__.push((arguments[i__7019__auto___9832]));

var G__9833 = (i__7019__auto___9832 + (1));
i__7019__auto___9832 = G__9833;
continue;
} else {
}
break;
}

var argseq__7026__auto__ = ((((3) < args__7025__auto__.length))?(new cljs.core.IndexedSeq(args__7025__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7026__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__9825){
var map__9826 = p__9825;
var map__9826__$1 = ((((!((map__9826 == null)))?((((map__9826.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9826.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9826):map__9826);
var opts = map__9826__$1;
var statearr_9828_9834 = state;
(statearr_9828_9834[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__9826,map__9826__$1,opts){
return (function (val){
var statearr_9829_9835 = state;
(statearr_9829_9835[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__9826,map__9826__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_9830_9836 = state;
(statearr_9830_9836[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq9821){
var G__9822 = cljs.core.first.call(null,seq9821);
var seq9821__$1 = cljs.core.next.call(null,seq9821);
var G__9823 = cljs.core.first.call(null,seq9821__$1);
var seq9821__$2 = cljs.core.next.call(null,seq9821__$1);
var G__9824 = cljs.core.first.call(null,seq9821__$2);
var seq9821__$3 = cljs.core.next.call(null,seq9821__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9822,G__9823,G__9824,seq9821__$3);
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
if(typeof cljs.core.async.t_cljs$core$async10000 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10000 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta10001){
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
this.meta10001 = meta10001;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10000.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10002,meta10001__$1){
var self__ = this;
var _10002__$1 = this;
return (new cljs.core.async.t_cljs$core$async10000(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta10001__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10000.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10002){
var self__ = this;
var _10002__$1 = this;
return self__.meta10001;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10000.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async10000.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10000.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async10000.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10000.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10000.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10000.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10000.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async10000.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta10001","meta10001",-1174052660,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10000.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10000.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10000";

cljs.core.async.t_cljs$core$async10000.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__6558__auto__,writer__6559__auto__,opt__6560__auto__){
return cljs.core._write.call(null,writer__6559__auto__,"cljs.core.async/t_cljs$core$async10000");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async10000 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async10000(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta10001){
return (new cljs.core.async.t_cljs$core$async10000(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta10001));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async10000(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__8450__auto___10163 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8450__auto___10163,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__8451__auto__ = (function (){var switch__8338__auto__ = ((function (c__8450__auto___10163,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_10100){
var state_val_10101 = (state_10100[(1)]);
if((state_val_10101 === (7))){
var inst_10018 = (state_10100[(2)]);
var state_10100__$1 = state_10100;
var statearr_10102_10164 = state_10100__$1;
(statearr_10102_10164[(2)] = inst_10018);

(statearr_10102_10164[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10101 === (20))){
var inst_10030 = (state_10100[(7)]);
var state_10100__$1 = state_10100;
var statearr_10103_10165 = state_10100__$1;
(statearr_10103_10165[(2)] = inst_10030);

(statearr_10103_10165[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10101 === (27))){
var state_10100__$1 = state_10100;
var statearr_10104_10166 = state_10100__$1;
(statearr_10104_10166[(2)] = null);

(statearr_10104_10166[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10101 === (1))){
var inst_10006 = (state_10100[(8)]);
var inst_10006__$1 = calc_state.call(null);
var inst_10008 = (inst_10006__$1 == null);
var inst_10009 = cljs.core.not.call(null,inst_10008);
var state_10100__$1 = (function (){var statearr_10105 = state_10100;
(statearr_10105[(8)] = inst_10006__$1);

return statearr_10105;
})();
if(inst_10009){
var statearr_10106_10167 = state_10100__$1;
(statearr_10106_10167[(1)] = (2));

} else {
var statearr_10107_10168 = state_10100__$1;
(statearr_10107_10168[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10101 === (24))){
var inst_10053 = (state_10100[(9)]);
var inst_10060 = (state_10100[(10)]);
var inst_10074 = (state_10100[(11)]);
var inst_10074__$1 = inst_10053.call(null,inst_10060);
var state_10100__$1 = (function (){var statearr_10108 = state_10100;
(statearr_10108[(11)] = inst_10074__$1);

return statearr_10108;
})();
if(cljs.core.truth_(inst_10074__$1)){
var statearr_10109_10169 = state_10100__$1;
(statearr_10109_10169[(1)] = (29));

} else {
var statearr_10110_10170 = state_10100__$1;
(statearr_10110_10170[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10101 === (4))){
var inst_10021 = (state_10100[(2)]);
var state_10100__$1 = state_10100;
if(cljs.core.truth_(inst_10021)){
var statearr_10111_10171 = state_10100__$1;
(statearr_10111_10171[(1)] = (8));

} else {
var statearr_10112_10172 = state_10100__$1;
(statearr_10112_10172[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10101 === (15))){
var inst_10047 = (state_10100[(2)]);
var state_10100__$1 = state_10100;
if(cljs.core.truth_(inst_10047)){
var statearr_10113_10173 = state_10100__$1;
(statearr_10113_10173[(1)] = (19));

} else {
var statearr_10114_10174 = state_10100__$1;
(statearr_10114_10174[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10101 === (21))){
var inst_10052 = (state_10100[(12)]);
var inst_10052__$1 = (state_10100[(2)]);
var inst_10053 = cljs.core.get.call(null,inst_10052__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_10054 = cljs.core.get.call(null,inst_10052__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_10055 = cljs.core.get.call(null,inst_10052__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_10100__$1 = (function (){var statearr_10115 = state_10100;
(statearr_10115[(9)] = inst_10053);

(statearr_10115[(13)] = inst_10054);

(statearr_10115[(12)] = inst_10052__$1);

return statearr_10115;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_10100__$1,(22),inst_10055);
} else {
if((state_val_10101 === (31))){
var inst_10082 = (state_10100[(2)]);
var state_10100__$1 = state_10100;
if(cljs.core.truth_(inst_10082)){
var statearr_10116_10175 = state_10100__$1;
(statearr_10116_10175[(1)] = (32));

} else {
var statearr_10117_10176 = state_10100__$1;
(statearr_10117_10176[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10101 === (32))){
var inst_10059 = (state_10100[(14)]);
var state_10100__$1 = state_10100;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10100__$1,(35),out,inst_10059);
} else {
if((state_val_10101 === (33))){
var inst_10052 = (state_10100[(12)]);
var inst_10030 = inst_10052;
var state_10100__$1 = (function (){var statearr_10118 = state_10100;
(statearr_10118[(7)] = inst_10030);

return statearr_10118;
})();
var statearr_10119_10177 = state_10100__$1;
(statearr_10119_10177[(2)] = null);

(statearr_10119_10177[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10101 === (13))){
var inst_10030 = (state_10100[(7)]);
var inst_10037 = inst_10030.cljs$lang$protocol_mask$partition0$;
var inst_10038 = (inst_10037 & (64));
var inst_10039 = inst_10030.cljs$core$ISeq$;
var inst_10040 = (inst_10038) || (inst_10039);
var state_10100__$1 = state_10100;
if(cljs.core.truth_(inst_10040)){
var statearr_10120_10178 = state_10100__$1;
(statearr_10120_10178[(1)] = (16));

} else {
var statearr_10121_10179 = state_10100__$1;
(statearr_10121_10179[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10101 === (22))){
var inst_10060 = (state_10100[(10)]);
var inst_10059 = (state_10100[(14)]);
var inst_10058 = (state_10100[(2)]);
var inst_10059__$1 = cljs.core.nth.call(null,inst_10058,(0),null);
var inst_10060__$1 = cljs.core.nth.call(null,inst_10058,(1),null);
var inst_10061 = (inst_10059__$1 == null);
var inst_10062 = cljs.core._EQ_.call(null,inst_10060__$1,change);
var inst_10063 = (inst_10061) || (inst_10062);
var state_10100__$1 = (function (){var statearr_10122 = state_10100;
(statearr_10122[(10)] = inst_10060__$1);

(statearr_10122[(14)] = inst_10059__$1);

return statearr_10122;
})();
if(cljs.core.truth_(inst_10063)){
var statearr_10123_10180 = state_10100__$1;
(statearr_10123_10180[(1)] = (23));

} else {
var statearr_10124_10181 = state_10100__$1;
(statearr_10124_10181[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10101 === (36))){
var inst_10052 = (state_10100[(12)]);
var inst_10030 = inst_10052;
var state_10100__$1 = (function (){var statearr_10125 = state_10100;
(statearr_10125[(7)] = inst_10030);

return statearr_10125;
})();
var statearr_10126_10182 = state_10100__$1;
(statearr_10126_10182[(2)] = null);

(statearr_10126_10182[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10101 === (29))){
var inst_10074 = (state_10100[(11)]);
var state_10100__$1 = state_10100;
var statearr_10127_10183 = state_10100__$1;
(statearr_10127_10183[(2)] = inst_10074);

(statearr_10127_10183[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10101 === (6))){
var state_10100__$1 = state_10100;
var statearr_10128_10184 = state_10100__$1;
(statearr_10128_10184[(2)] = false);

(statearr_10128_10184[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10101 === (28))){
var inst_10070 = (state_10100[(2)]);
var inst_10071 = calc_state.call(null);
var inst_10030 = inst_10071;
var state_10100__$1 = (function (){var statearr_10129 = state_10100;
(statearr_10129[(7)] = inst_10030);

(statearr_10129[(15)] = inst_10070);

return statearr_10129;
})();
var statearr_10130_10185 = state_10100__$1;
(statearr_10130_10185[(2)] = null);

(statearr_10130_10185[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10101 === (25))){
var inst_10096 = (state_10100[(2)]);
var state_10100__$1 = state_10100;
var statearr_10131_10186 = state_10100__$1;
(statearr_10131_10186[(2)] = inst_10096);

(statearr_10131_10186[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10101 === (34))){
var inst_10094 = (state_10100[(2)]);
var state_10100__$1 = state_10100;
var statearr_10132_10187 = state_10100__$1;
(statearr_10132_10187[(2)] = inst_10094);

(statearr_10132_10187[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10101 === (17))){
var state_10100__$1 = state_10100;
var statearr_10133_10188 = state_10100__$1;
(statearr_10133_10188[(2)] = false);

(statearr_10133_10188[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10101 === (3))){
var state_10100__$1 = state_10100;
var statearr_10134_10189 = state_10100__$1;
(statearr_10134_10189[(2)] = false);

(statearr_10134_10189[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10101 === (12))){
var inst_10098 = (state_10100[(2)]);
var state_10100__$1 = state_10100;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10100__$1,inst_10098);
} else {
if((state_val_10101 === (2))){
var inst_10006 = (state_10100[(8)]);
var inst_10011 = inst_10006.cljs$lang$protocol_mask$partition0$;
var inst_10012 = (inst_10011 & (64));
var inst_10013 = inst_10006.cljs$core$ISeq$;
var inst_10014 = (inst_10012) || (inst_10013);
var state_10100__$1 = state_10100;
if(cljs.core.truth_(inst_10014)){
var statearr_10135_10190 = state_10100__$1;
(statearr_10135_10190[(1)] = (5));

} else {
var statearr_10136_10191 = state_10100__$1;
(statearr_10136_10191[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10101 === (23))){
var inst_10059 = (state_10100[(14)]);
var inst_10065 = (inst_10059 == null);
var state_10100__$1 = state_10100;
if(cljs.core.truth_(inst_10065)){
var statearr_10137_10192 = state_10100__$1;
(statearr_10137_10192[(1)] = (26));

} else {
var statearr_10138_10193 = state_10100__$1;
(statearr_10138_10193[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10101 === (35))){
var inst_10085 = (state_10100[(2)]);
var state_10100__$1 = state_10100;
if(cljs.core.truth_(inst_10085)){
var statearr_10139_10194 = state_10100__$1;
(statearr_10139_10194[(1)] = (36));

} else {
var statearr_10140_10195 = state_10100__$1;
(statearr_10140_10195[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10101 === (19))){
var inst_10030 = (state_10100[(7)]);
var inst_10049 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10030);
var state_10100__$1 = state_10100;
var statearr_10141_10196 = state_10100__$1;
(statearr_10141_10196[(2)] = inst_10049);

(statearr_10141_10196[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10101 === (11))){
var inst_10030 = (state_10100[(7)]);
var inst_10034 = (inst_10030 == null);
var inst_10035 = cljs.core.not.call(null,inst_10034);
var state_10100__$1 = state_10100;
if(inst_10035){
var statearr_10142_10197 = state_10100__$1;
(statearr_10142_10197[(1)] = (13));

} else {
var statearr_10143_10198 = state_10100__$1;
(statearr_10143_10198[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10101 === (9))){
var inst_10006 = (state_10100[(8)]);
var state_10100__$1 = state_10100;
var statearr_10144_10199 = state_10100__$1;
(statearr_10144_10199[(2)] = inst_10006);

(statearr_10144_10199[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10101 === (5))){
var state_10100__$1 = state_10100;
var statearr_10145_10200 = state_10100__$1;
(statearr_10145_10200[(2)] = true);

(statearr_10145_10200[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10101 === (14))){
var state_10100__$1 = state_10100;
var statearr_10146_10201 = state_10100__$1;
(statearr_10146_10201[(2)] = false);

(statearr_10146_10201[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10101 === (26))){
var inst_10060 = (state_10100[(10)]);
var inst_10067 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_10060);
var state_10100__$1 = state_10100;
var statearr_10147_10202 = state_10100__$1;
(statearr_10147_10202[(2)] = inst_10067);

(statearr_10147_10202[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10101 === (16))){
var state_10100__$1 = state_10100;
var statearr_10148_10203 = state_10100__$1;
(statearr_10148_10203[(2)] = true);

(statearr_10148_10203[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10101 === (38))){
var inst_10090 = (state_10100[(2)]);
var state_10100__$1 = state_10100;
var statearr_10149_10204 = state_10100__$1;
(statearr_10149_10204[(2)] = inst_10090);

(statearr_10149_10204[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10101 === (30))){
var inst_10053 = (state_10100[(9)]);
var inst_10054 = (state_10100[(13)]);
var inst_10060 = (state_10100[(10)]);
var inst_10077 = cljs.core.empty_QMARK_.call(null,inst_10053);
var inst_10078 = inst_10054.call(null,inst_10060);
var inst_10079 = cljs.core.not.call(null,inst_10078);
var inst_10080 = (inst_10077) && (inst_10079);
var state_10100__$1 = state_10100;
var statearr_10150_10205 = state_10100__$1;
(statearr_10150_10205[(2)] = inst_10080);

(statearr_10150_10205[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10101 === (10))){
var inst_10006 = (state_10100[(8)]);
var inst_10026 = (state_10100[(2)]);
var inst_10027 = cljs.core.get.call(null,inst_10026,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_10028 = cljs.core.get.call(null,inst_10026,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_10029 = cljs.core.get.call(null,inst_10026,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_10030 = inst_10006;
var state_10100__$1 = (function (){var statearr_10151 = state_10100;
(statearr_10151[(16)] = inst_10027);

(statearr_10151[(17)] = inst_10029);

(statearr_10151[(18)] = inst_10028);

(statearr_10151[(7)] = inst_10030);

return statearr_10151;
})();
var statearr_10152_10206 = state_10100__$1;
(statearr_10152_10206[(2)] = null);

(statearr_10152_10206[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10101 === (18))){
var inst_10044 = (state_10100[(2)]);
var state_10100__$1 = state_10100;
var statearr_10153_10207 = state_10100__$1;
(statearr_10153_10207[(2)] = inst_10044);

(statearr_10153_10207[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10101 === (37))){
var state_10100__$1 = state_10100;
var statearr_10154_10208 = state_10100__$1;
(statearr_10154_10208[(2)] = null);

(statearr_10154_10208[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10101 === (8))){
var inst_10006 = (state_10100[(8)]);
var inst_10023 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10006);
var state_10100__$1 = state_10100;
var statearr_10155_10209 = state_10100__$1;
(statearr_10155_10209[(2)] = inst_10023);

(statearr_10155_10209[(1)] = (10));


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
});})(c__8450__auto___10163,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__8338__auto__,c__8450__auto___10163,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__8339__auto__ = null;
var cljs$core$async$mix_$_state_machine__8339__auto____0 = (function (){
var statearr_10159 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10159[(0)] = cljs$core$async$mix_$_state_machine__8339__auto__);

(statearr_10159[(1)] = (1));

return statearr_10159;
});
var cljs$core$async$mix_$_state_machine__8339__auto____1 = (function (state_10100){
while(true){
var ret_value__8340__auto__ = (function (){try{while(true){
var result__8341__auto__ = switch__8338__auto__.call(null,state_10100);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8341__auto__;
}
break;
}
}catch (e10160){if((e10160 instanceof Object)){
var ex__8342__auto__ = e10160;
var statearr_10161_10210 = state_10100;
(statearr_10161_10210[(5)] = ex__8342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10100);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10160;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10211 = state_10100;
state_10100 = G__10211;
continue;
} else {
return ret_value__8340__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__8339__auto__ = function(state_10100){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__8339__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__8339__auto____1.call(this,state_10100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__8339__auto____0;
cljs$core$async$mix_$_state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__8339__auto____1;
return cljs$core$async$mix_$_state_machine__8339__auto__;
})()
;})(switch__8338__auto__,c__8450__auto___10163,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__8452__auto__ = (function (){var statearr_10162 = f__8451__auto__.call(null);
(statearr_10162[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8450__auto___10163);

return statearr_10162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8452__auto__);
});})(c__8450__auto___10163,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__6615__auto__ = (((p == null))?null:p);
var m__6616__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__6615__auto__)]);
if(!((m__6616__auto__ == null))){
return m__6616__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__6616__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__6616__auto____$1 == null))){
return m__6616__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__6615__auto__ = (((p == null))?null:p);
var m__6616__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__6615__auto__)]);
if(!((m__6616__auto__ == null))){
return m__6616__auto__.call(null,p,v,ch);
} else {
var m__6616__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__6616__auto____$1 == null))){
return m__6616__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args10212 = [];
var len__7018__auto___10215 = arguments.length;
var i__7019__auto___10216 = (0);
while(true){
if((i__7019__auto___10216 < len__7018__auto___10215)){
args10212.push((arguments[i__7019__auto___10216]));

var G__10217 = (i__7019__auto___10216 + (1));
i__7019__auto___10216 = G__10217;
continue;
} else {
}
break;
}

var G__10214 = args10212.length;
switch (G__10214) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10212.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__6615__auto__ = (((p == null))?null:p);
var m__6616__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6615__auto__)]);
if(!((m__6616__auto__ == null))){
return m__6616__auto__.call(null,p);
} else {
var m__6616__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__6616__auto____$1 == null))){
return m__6616__auto____$1.call(null,p);
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
var x__6615__auto__ = (((p == null))?null:p);
var m__6616__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6615__auto__)]);
if(!((m__6616__auto__ == null))){
return m__6616__auto__.call(null,p,v);
} else {
var m__6616__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__6616__auto____$1 == null))){
return m__6616__auto____$1.call(null,p,v);
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
var args10220 = [];
var len__7018__auto___10345 = arguments.length;
var i__7019__auto___10346 = (0);
while(true){
if((i__7019__auto___10346 < len__7018__auto___10345)){
args10220.push((arguments[i__7019__auto___10346]));

var G__10347 = (i__7019__auto___10346 + (1));
i__7019__auto___10346 = G__10347;
continue;
} else {
}
break;
}

var G__10222 = args10220.length;
switch (G__10222) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10220.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__5960__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__5960__auto__)){
return or__5960__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__5960__auto__,mults){
return (function (p1__10219_SHARP_){
if(cljs.core.truth_(p1__10219_SHARP_.call(null,topic))){
return p1__10219_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__10219_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__5960__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async10223 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10223 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta10224){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta10224 = meta10224;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10223.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_10225,meta10224__$1){
var self__ = this;
var _10225__$1 = this;
return (new cljs.core.async.t_cljs$core$async10223(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta10224__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10223.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_10225){
var self__ = this;
var _10225__$1 = this;
return self__.meta10224;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10223.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async10223.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10223.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async10223.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10223.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async10223.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10223.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10223.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta10224","meta10224",808126219,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10223.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10223.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10223";

cljs.core.async.t_cljs$core$async10223.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__6558__auto__,writer__6559__auto__,opt__6560__auto__){
return cljs.core._write.call(null,writer__6559__auto__,"cljs.core.async/t_cljs$core$async10223");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async10223 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async10223(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta10224){
return (new cljs.core.async.t_cljs$core$async10223(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta10224));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async10223(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__8450__auto___10349 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8450__auto___10349,mults,ensure_mult,p){
return (function (){
var f__8451__auto__ = (function (){var switch__8338__auto__ = ((function (c__8450__auto___10349,mults,ensure_mult,p){
return (function (state_10297){
var state_val_10298 = (state_10297[(1)]);
if((state_val_10298 === (7))){
var inst_10293 = (state_10297[(2)]);
var state_10297__$1 = state_10297;
var statearr_10299_10350 = state_10297__$1;
(statearr_10299_10350[(2)] = inst_10293);

(statearr_10299_10350[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10298 === (20))){
var state_10297__$1 = state_10297;
var statearr_10300_10351 = state_10297__$1;
(statearr_10300_10351[(2)] = null);

(statearr_10300_10351[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10298 === (1))){
var state_10297__$1 = state_10297;
var statearr_10301_10352 = state_10297__$1;
(statearr_10301_10352[(2)] = null);

(statearr_10301_10352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10298 === (24))){
var inst_10276 = (state_10297[(7)]);
var inst_10285 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_10276);
var state_10297__$1 = state_10297;
var statearr_10302_10353 = state_10297__$1;
(statearr_10302_10353[(2)] = inst_10285);

(statearr_10302_10353[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10298 === (4))){
var inst_10228 = (state_10297[(8)]);
var inst_10228__$1 = (state_10297[(2)]);
var inst_10229 = (inst_10228__$1 == null);
var state_10297__$1 = (function (){var statearr_10303 = state_10297;
(statearr_10303[(8)] = inst_10228__$1);

return statearr_10303;
})();
if(cljs.core.truth_(inst_10229)){
var statearr_10304_10354 = state_10297__$1;
(statearr_10304_10354[(1)] = (5));

} else {
var statearr_10305_10355 = state_10297__$1;
(statearr_10305_10355[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10298 === (15))){
var inst_10270 = (state_10297[(2)]);
var state_10297__$1 = state_10297;
var statearr_10306_10356 = state_10297__$1;
(statearr_10306_10356[(2)] = inst_10270);

(statearr_10306_10356[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10298 === (21))){
var inst_10290 = (state_10297[(2)]);
var state_10297__$1 = (function (){var statearr_10307 = state_10297;
(statearr_10307[(9)] = inst_10290);

return statearr_10307;
})();
var statearr_10308_10357 = state_10297__$1;
(statearr_10308_10357[(2)] = null);

(statearr_10308_10357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10298 === (13))){
var inst_10252 = (state_10297[(10)]);
var inst_10254 = cljs.core.chunked_seq_QMARK_.call(null,inst_10252);
var state_10297__$1 = state_10297;
if(inst_10254){
var statearr_10309_10358 = state_10297__$1;
(statearr_10309_10358[(1)] = (16));

} else {
var statearr_10310_10359 = state_10297__$1;
(statearr_10310_10359[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10298 === (22))){
var inst_10282 = (state_10297[(2)]);
var state_10297__$1 = state_10297;
if(cljs.core.truth_(inst_10282)){
var statearr_10311_10360 = state_10297__$1;
(statearr_10311_10360[(1)] = (23));

} else {
var statearr_10312_10361 = state_10297__$1;
(statearr_10312_10361[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10298 === (6))){
var inst_10228 = (state_10297[(8)]);
var inst_10276 = (state_10297[(7)]);
var inst_10278 = (state_10297[(11)]);
var inst_10276__$1 = topic_fn.call(null,inst_10228);
var inst_10277 = cljs.core.deref.call(null,mults);
var inst_10278__$1 = cljs.core.get.call(null,inst_10277,inst_10276__$1);
var state_10297__$1 = (function (){var statearr_10313 = state_10297;
(statearr_10313[(7)] = inst_10276__$1);

(statearr_10313[(11)] = inst_10278__$1);

return statearr_10313;
})();
if(cljs.core.truth_(inst_10278__$1)){
var statearr_10314_10362 = state_10297__$1;
(statearr_10314_10362[(1)] = (19));

} else {
var statearr_10315_10363 = state_10297__$1;
(statearr_10315_10363[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10298 === (25))){
var inst_10287 = (state_10297[(2)]);
var state_10297__$1 = state_10297;
var statearr_10316_10364 = state_10297__$1;
(statearr_10316_10364[(2)] = inst_10287);

(statearr_10316_10364[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10298 === (17))){
var inst_10252 = (state_10297[(10)]);
var inst_10261 = cljs.core.first.call(null,inst_10252);
var inst_10262 = cljs.core.async.muxch_STAR_.call(null,inst_10261);
var inst_10263 = cljs.core.async.close_BANG_.call(null,inst_10262);
var inst_10264 = cljs.core.next.call(null,inst_10252);
var inst_10238 = inst_10264;
var inst_10239 = null;
var inst_10240 = (0);
var inst_10241 = (0);
var state_10297__$1 = (function (){var statearr_10317 = state_10297;
(statearr_10317[(12)] = inst_10238);

(statearr_10317[(13)] = inst_10240);

(statearr_10317[(14)] = inst_10263);

(statearr_10317[(15)] = inst_10241);

(statearr_10317[(16)] = inst_10239);

return statearr_10317;
})();
var statearr_10318_10365 = state_10297__$1;
(statearr_10318_10365[(2)] = null);

(statearr_10318_10365[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10298 === (3))){
var inst_10295 = (state_10297[(2)]);
var state_10297__$1 = state_10297;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10297__$1,inst_10295);
} else {
if((state_val_10298 === (12))){
var inst_10272 = (state_10297[(2)]);
var state_10297__$1 = state_10297;
var statearr_10319_10366 = state_10297__$1;
(statearr_10319_10366[(2)] = inst_10272);

(statearr_10319_10366[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10298 === (2))){
var state_10297__$1 = state_10297;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10297__$1,(4),ch);
} else {
if((state_val_10298 === (23))){
var state_10297__$1 = state_10297;
var statearr_10320_10367 = state_10297__$1;
(statearr_10320_10367[(2)] = null);

(statearr_10320_10367[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10298 === (19))){
var inst_10228 = (state_10297[(8)]);
var inst_10278 = (state_10297[(11)]);
var inst_10280 = cljs.core.async.muxch_STAR_.call(null,inst_10278);
var state_10297__$1 = state_10297;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10297__$1,(22),inst_10280,inst_10228);
} else {
if((state_val_10298 === (11))){
var inst_10238 = (state_10297[(12)]);
var inst_10252 = (state_10297[(10)]);
var inst_10252__$1 = cljs.core.seq.call(null,inst_10238);
var state_10297__$1 = (function (){var statearr_10321 = state_10297;
(statearr_10321[(10)] = inst_10252__$1);

return statearr_10321;
})();
if(inst_10252__$1){
var statearr_10322_10368 = state_10297__$1;
(statearr_10322_10368[(1)] = (13));

} else {
var statearr_10323_10369 = state_10297__$1;
(statearr_10323_10369[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10298 === (9))){
var inst_10274 = (state_10297[(2)]);
var state_10297__$1 = state_10297;
var statearr_10324_10370 = state_10297__$1;
(statearr_10324_10370[(2)] = inst_10274);

(statearr_10324_10370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10298 === (5))){
var inst_10235 = cljs.core.deref.call(null,mults);
var inst_10236 = cljs.core.vals.call(null,inst_10235);
var inst_10237 = cljs.core.seq.call(null,inst_10236);
var inst_10238 = inst_10237;
var inst_10239 = null;
var inst_10240 = (0);
var inst_10241 = (0);
var state_10297__$1 = (function (){var statearr_10325 = state_10297;
(statearr_10325[(12)] = inst_10238);

(statearr_10325[(13)] = inst_10240);

(statearr_10325[(15)] = inst_10241);

(statearr_10325[(16)] = inst_10239);

return statearr_10325;
})();
var statearr_10326_10371 = state_10297__$1;
(statearr_10326_10371[(2)] = null);

(statearr_10326_10371[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10298 === (14))){
var state_10297__$1 = state_10297;
var statearr_10330_10372 = state_10297__$1;
(statearr_10330_10372[(2)] = null);

(statearr_10330_10372[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10298 === (16))){
var inst_10252 = (state_10297[(10)]);
var inst_10256 = cljs.core.chunk_first.call(null,inst_10252);
var inst_10257 = cljs.core.chunk_rest.call(null,inst_10252);
var inst_10258 = cljs.core.count.call(null,inst_10256);
var inst_10238 = inst_10257;
var inst_10239 = inst_10256;
var inst_10240 = inst_10258;
var inst_10241 = (0);
var state_10297__$1 = (function (){var statearr_10331 = state_10297;
(statearr_10331[(12)] = inst_10238);

(statearr_10331[(13)] = inst_10240);

(statearr_10331[(15)] = inst_10241);

(statearr_10331[(16)] = inst_10239);

return statearr_10331;
})();
var statearr_10332_10373 = state_10297__$1;
(statearr_10332_10373[(2)] = null);

(statearr_10332_10373[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10298 === (10))){
var inst_10238 = (state_10297[(12)]);
var inst_10240 = (state_10297[(13)]);
var inst_10241 = (state_10297[(15)]);
var inst_10239 = (state_10297[(16)]);
var inst_10246 = cljs.core._nth.call(null,inst_10239,inst_10241);
var inst_10247 = cljs.core.async.muxch_STAR_.call(null,inst_10246);
var inst_10248 = cljs.core.async.close_BANG_.call(null,inst_10247);
var inst_10249 = (inst_10241 + (1));
var tmp10327 = inst_10238;
var tmp10328 = inst_10240;
var tmp10329 = inst_10239;
var inst_10238__$1 = tmp10327;
var inst_10239__$1 = tmp10329;
var inst_10240__$1 = tmp10328;
var inst_10241__$1 = inst_10249;
var state_10297__$1 = (function (){var statearr_10333 = state_10297;
(statearr_10333[(12)] = inst_10238__$1);

(statearr_10333[(13)] = inst_10240__$1);

(statearr_10333[(15)] = inst_10241__$1);

(statearr_10333[(16)] = inst_10239__$1);

(statearr_10333[(17)] = inst_10248);

return statearr_10333;
})();
var statearr_10334_10374 = state_10297__$1;
(statearr_10334_10374[(2)] = null);

(statearr_10334_10374[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10298 === (18))){
var inst_10267 = (state_10297[(2)]);
var state_10297__$1 = state_10297;
var statearr_10335_10375 = state_10297__$1;
(statearr_10335_10375[(2)] = inst_10267);

(statearr_10335_10375[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10298 === (8))){
var inst_10240 = (state_10297[(13)]);
var inst_10241 = (state_10297[(15)]);
var inst_10243 = (inst_10241 < inst_10240);
var inst_10244 = inst_10243;
var state_10297__$1 = state_10297;
if(cljs.core.truth_(inst_10244)){
var statearr_10336_10376 = state_10297__$1;
(statearr_10336_10376[(1)] = (10));

} else {
var statearr_10337_10377 = state_10297__$1;
(statearr_10337_10377[(1)] = (11));

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
});})(c__8450__auto___10349,mults,ensure_mult,p))
;
return ((function (switch__8338__auto__,c__8450__auto___10349,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__8339__auto__ = null;
var cljs$core$async$state_machine__8339__auto____0 = (function (){
var statearr_10341 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10341[(0)] = cljs$core$async$state_machine__8339__auto__);

(statearr_10341[(1)] = (1));

return statearr_10341;
});
var cljs$core$async$state_machine__8339__auto____1 = (function (state_10297){
while(true){
var ret_value__8340__auto__ = (function (){try{while(true){
var result__8341__auto__ = switch__8338__auto__.call(null,state_10297);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8341__auto__;
}
break;
}
}catch (e10342){if((e10342 instanceof Object)){
var ex__8342__auto__ = e10342;
var statearr_10343_10378 = state_10297;
(statearr_10343_10378[(5)] = ex__8342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10297);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10342;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10379 = state_10297;
state_10297 = G__10379;
continue;
} else {
return ret_value__8340__auto__;
}
break;
}
});
cljs$core$async$state_machine__8339__auto__ = function(state_10297){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8339__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8339__auto____1.call(this,state_10297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8339__auto____0;
cljs$core$async$state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8339__auto____1;
return cljs$core$async$state_machine__8339__auto__;
})()
;})(switch__8338__auto__,c__8450__auto___10349,mults,ensure_mult,p))
})();
var state__8452__auto__ = (function (){var statearr_10344 = f__8451__auto__.call(null);
(statearr_10344[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8450__auto___10349);

return statearr_10344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8452__auto__);
});})(c__8450__auto___10349,mults,ensure_mult,p))
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
var args10380 = [];
var len__7018__auto___10383 = arguments.length;
var i__7019__auto___10384 = (0);
while(true){
if((i__7019__auto___10384 < len__7018__auto___10383)){
args10380.push((arguments[i__7019__auto___10384]));

var G__10385 = (i__7019__auto___10384 + (1));
i__7019__auto___10384 = G__10385;
continue;
} else {
}
break;
}

var G__10382 = args10380.length;
switch (G__10382) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10380.length)].join('')));

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
var args10387 = [];
var len__7018__auto___10390 = arguments.length;
var i__7019__auto___10391 = (0);
while(true){
if((i__7019__auto___10391 < len__7018__auto___10390)){
args10387.push((arguments[i__7019__auto___10391]));

var G__10392 = (i__7019__auto___10391 + (1));
i__7019__auto___10391 = G__10392;
continue;
} else {
}
break;
}

var G__10389 = args10387.length;
switch (G__10389) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10387.length)].join('')));

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
var args10394 = [];
var len__7018__auto___10465 = arguments.length;
var i__7019__auto___10466 = (0);
while(true){
if((i__7019__auto___10466 < len__7018__auto___10465)){
args10394.push((arguments[i__7019__auto___10466]));

var G__10467 = (i__7019__auto___10466 + (1));
i__7019__auto___10466 = G__10467;
continue;
} else {
}
break;
}

var G__10396 = args10394.length;
switch (G__10396) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10394.length)].join('')));

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
var c__8450__auto___10469 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8450__auto___10469,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__8451__auto__ = (function (){var switch__8338__auto__ = ((function (c__8450__auto___10469,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_10435){
var state_val_10436 = (state_10435[(1)]);
if((state_val_10436 === (7))){
var state_10435__$1 = state_10435;
var statearr_10437_10470 = state_10435__$1;
(statearr_10437_10470[(2)] = null);

(statearr_10437_10470[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10436 === (1))){
var state_10435__$1 = state_10435;
var statearr_10438_10471 = state_10435__$1;
(statearr_10438_10471[(2)] = null);

(statearr_10438_10471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10436 === (4))){
var inst_10399 = (state_10435[(7)]);
var inst_10401 = (inst_10399 < cnt);
var state_10435__$1 = state_10435;
if(cljs.core.truth_(inst_10401)){
var statearr_10439_10472 = state_10435__$1;
(statearr_10439_10472[(1)] = (6));

} else {
var statearr_10440_10473 = state_10435__$1;
(statearr_10440_10473[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10436 === (15))){
var inst_10431 = (state_10435[(2)]);
var state_10435__$1 = state_10435;
var statearr_10441_10474 = state_10435__$1;
(statearr_10441_10474[(2)] = inst_10431);

(statearr_10441_10474[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10436 === (13))){
var inst_10424 = cljs.core.async.close_BANG_.call(null,out);
var state_10435__$1 = state_10435;
var statearr_10442_10475 = state_10435__$1;
(statearr_10442_10475[(2)] = inst_10424);

(statearr_10442_10475[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10436 === (6))){
var state_10435__$1 = state_10435;
var statearr_10443_10476 = state_10435__$1;
(statearr_10443_10476[(2)] = null);

(statearr_10443_10476[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10436 === (3))){
var inst_10433 = (state_10435[(2)]);
var state_10435__$1 = state_10435;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10435__$1,inst_10433);
} else {
if((state_val_10436 === (12))){
var inst_10421 = (state_10435[(8)]);
var inst_10421__$1 = (state_10435[(2)]);
var inst_10422 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_10421__$1);
var state_10435__$1 = (function (){var statearr_10444 = state_10435;
(statearr_10444[(8)] = inst_10421__$1);

return statearr_10444;
})();
if(cljs.core.truth_(inst_10422)){
var statearr_10445_10477 = state_10435__$1;
(statearr_10445_10477[(1)] = (13));

} else {
var statearr_10446_10478 = state_10435__$1;
(statearr_10446_10478[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10436 === (2))){
var inst_10398 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_10399 = (0);
var state_10435__$1 = (function (){var statearr_10447 = state_10435;
(statearr_10447[(7)] = inst_10399);

(statearr_10447[(9)] = inst_10398);

return statearr_10447;
})();
var statearr_10448_10479 = state_10435__$1;
(statearr_10448_10479[(2)] = null);

(statearr_10448_10479[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10436 === (11))){
var inst_10399 = (state_10435[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10435,(10),Object,null,(9));
var inst_10408 = chs__$1.call(null,inst_10399);
var inst_10409 = done.call(null,inst_10399);
var inst_10410 = cljs.core.async.take_BANG_.call(null,inst_10408,inst_10409);
var state_10435__$1 = state_10435;
var statearr_10449_10480 = state_10435__$1;
(statearr_10449_10480[(2)] = inst_10410);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10435__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10436 === (9))){
var inst_10399 = (state_10435[(7)]);
var inst_10412 = (state_10435[(2)]);
var inst_10413 = (inst_10399 + (1));
var inst_10399__$1 = inst_10413;
var state_10435__$1 = (function (){var statearr_10450 = state_10435;
(statearr_10450[(7)] = inst_10399__$1);

(statearr_10450[(10)] = inst_10412);

return statearr_10450;
})();
var statearr_10451_10481 = state_10435__$1;
(statearr_10451_10481[(2)] = null);

(statearr_10451_10481[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10436 === (5))){
var inst_10419 = (state_10435[(2)]);
var state_10435__$1 = (function (){var statearr_10452 = state_10435;
(statearr_10452[(11)] = inst_10419);

return statearr_10452;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10435__$1,(12),dchan);
} else {
if((state_val_10436 === (14))){
var inst_10421 = (state_10435[(8)]);
var inst_10426 = cljs.core.apply.call(null,f,inst_10421);
var state_10435__$1 = state_10435;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10435__$1,(16),out,inst_10426);
} else {
if((state_val_10436 === (16))){
var inst_10428 = (state_10435[(2)]);
var state_10435__$1 = (function (){var statearr_10453 = state_10435;
(statearr_10453[(12)] = inst_10428);

return statearr_10453;
})();
var statearr_10454_10482 = state_10435__$1;
(statearr_10454_10482[(2)] = null);

(statearr_10454_10482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10436 === (10))){
var inst_10403 = (state_10435[(2)]);
var inst_10404 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_10435__$1 = (function (){var statearr_10455 = state_10435;
(statearr_10455[(13)] = inst_10403);

return statearr_10455;
})();
var statearr_10456_10483 = state_10435__$1;
(statearr_10456_10483[(2)] = inst_10404);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10435__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10436 === (8))){
var inst_10417 = (state_10435[(2)]);
var state_10435__$1 = state_10435;
var statearr_10457_10484 = state_10435__$1;
(statearr_10457_10484[(2)] = inst_10417);

(statearr_10457_10484[(1)] = (5));


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
});})(c__8450__auto___10469,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__8338__auto__,c__8450__auto___10469,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__8339__auto__ = null;
var cljs$core$async$state_machine__8339__auto____0 = (function (){
var statearr_10461 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10461[(0)] = cljs$core$async$state_machine__8339__auto__);

(statearr_10461[(1)] = (1));

return statearr_10461;
});
var cljs$core$async$state_machine__8339__auto____1 = (function (state_10435){
while(true){
var ret_value__8340__auto__ = (function (){try{while(true){
var result__8341__auto__ = switch__8338__auto__.call(null,state_10435);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8341__auto__;
}
break;
}
}catch (e10462){if((e10462 instanceof Object)){
var ex__8342__auto__ = e10462;
var statearr_10463_10485 = state_10435;
(statearr_10463_10485[(5)] = ex__8342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10435);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10462;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10486 = state_10435;
state_10435 = G__10486;
continue;
} else {
return ret_value__8340__auto__;
}
break;
}
});
cljs$core$async$state_machine__8339__auto__ = function(state_10435){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8339__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8339__auto____1.call(this,state_10435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8339__auto____0;
cljs$core$async$state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8339__auto____1;
return cljs$core$async$state_machine__8339__auto__;
})()
;})(switch__8338__auto__,c__8450__auto___10469,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__8452__auto__ = (function (){var statearr_10464 = f__8451__auto__.call(null);
(statearr_10464[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8450__auto___10469);

return statearr_10464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8452__auto__);
});})(c__8450__auto___10469,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args10488 = [];
var len__7018__auto___10544 = arguments.length;
var i__7019__auto___10545 = (0);
while(true){
if((i__7019__auto___10545 < len__7018__auto___10544)){
args10488.push((arguments[i__7019__auto___10545]));

var G__10546 = (i__7019__auto___10545 + (1));
i__7019__auto___10545 = G__10546;
continue;
} else {
}
break;
}

var G__10490 = args10488.length;
switch (G__10490) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10488.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8450__auto___10548 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8450__auto___10548,out){
return (function (){
var f__8451__auto__ = (function (){var switch__8338__auto__ = ((function (c__8450__auto___10548,out){
return (function (state_10520){
var state_val_10521 = (state_10520[(1)]);
if((state_val_10521 === (7))){
var inst_10500 = (state_10520[(7)]);
var inst_10499 = (state_10520[(8)]);
var inst_10499__$1 = (state_10520[(2)]);
var inst_10500__$1 = cljs.core.nth.call(null,inst_10499__$1,(0),null);
var inst_10501 = cljs.core.nth.call(null,inst_10499__$1,(1),null);
var inst_10502 = (inst_10500__$1 == null);
var state_10520__$1 = (function (){var statearr_10522 = state_10520;
(statearr_10522[(7)] = inst_10500__$1);

(statearr_10522[(9)] = inst_10501);

(statearr_10522[(8)] = inst_10499__$1);

return statearr_10522;
})();
if(cljs.core.truth_(inst_10502)){
var statearr_10523_10549 = state_10520__$1;
(statearr_10523_10549[(1)] = (8));

} else {
var statearr_10524_10550 = state_10520__$1;
(statearr_10524_10550[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10521 === (1))){
var inst_10491 = cljs.core.vec.call(null,chs);
var inst_10492 = inst_10491;
var state_10520__$1 = (function (){var statearr_10525 = state_10520;
(statearr_10525[(10)] = inst_10492);

return statearr_10525;
})();
var statearr_10526_10551 = state_10520__$1;
(statearr_10526_10551[(2)] = null);

(statearr_10526_10551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10521 === (4))){
var inst_10492 = (state_10520[(10)]);
var state_10520__$1 = state_10520;
return cljs.core.async.ioc_alts_BANG_.call(null,state_10520__$1,(7),inst_10492);
} else {
if((state_val_10521 === (6))){
var inst_10516 = (state_10520[(2)]);
var state_10520__$1 = state_10520;
var statearr_10527_10552 = state_10520__$1;
(statearr_10527_10552[(2)] = inst_10516);

(statearr_10527_10552[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10521 === (3))){
var inst_10518 = (state_10520[(2)]);
var state_10520__$1 = state_10520;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10520__$1,inst_10518);
} else {
if((state_val_10521 === (2))){
var inst_10492 = (state_10520[(10)]);
var inst_10494 = cljs.core.count.call(null,inst_10492);
var inst_10495 = (inst_10494 > (0));
var state_10520__$1 = state_10520;
if(cljs.core.truth_(inst_10495)){
var statearr_10529_10553 = state_10520__$1;
(statearr_10529_10553[(1)] = (4));

} else {
var statearr_10530_10554 = state_10520__$1;
(statearr_10530_10554[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10521 === (11))){
var inst_10492 = (state_10520[(10)]);
var inst_10509 = (state_10520[(2)]);
var tmp10528 = inst_10492;
var inst_10492__$1 = tmp10528;
var state_10520__$1 = (function (){var statearr_10531 = state_10520;
(statearr_10531[(11)] = inst_10509);

(statearr_10531[(10)] = inst_10492__$1);

return statearr_10531;
})();
var statearr_10532_10555 = state_10520__$1;
(statearr_10532_10555[(2)] = null);

(statearr_10532_10555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10521 === (9))){
var inst_10500 = (state_10520[(7)]);
var state_10520__$1 = state_10520;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10520__$1,(11),out,inst_10500);
} else {
if((state_val_10521 === (5))){
var inst_10514 = cljs.core.async.close_BANG_.call(null,out);
var state_10520__$1 = state_10520;
var statearr_10533_10556 = state_10520__$1;
(statearr_10533_10556[(2)] = inst_10514);

(statearr_10533_10556[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10521 === (10))){
var inst_10512 = (state_10520[(2)]);
var state_10520__$1 = state_10520;
var statearr_10534_10557 = state_10520__$1;
(statearr_10534_10557[(2)] = inst_10512);

(statearr_10534_10557[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10521 === (8))){
var inst_10500 = (state_10520[(7)]);
var inst_10492 = (state_10520[(10)]);
var inst_10501 = (state_10520[(9)]);
var inst_10499 = (state_10520[(8)]);
var inst_10504 = (function (){var cs = inst_10492;
var vec__10497 = inst_10499;
var v = inst_10500;
var c = inst_10501;
return ((function (cs,vec__10497,v,c,inst_10500,inst_10492,inst_10501,inst_10499,state_val_10521,c__8450__auto___10548,out){
return (function (p1__10487_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__10487_SHARP_);
});
;})(cs,vec__10497,v,c,inst_10500,inst_10492,inst_10501,inst_10499,state_val_10521,c__8450__auto___10548,out))
})();
var inst_10505 = cljs.core.filterv.call(null,inst_10504,inst_10492);
var inst_10492__$1 = inst_10505;
var state_10520__$1 = (function (){var statearr_10535 = state_10520;
(statearr_10535[(10)] = inst_10492__$1);

return statearr_10535;
})();
var statearr_10536_10558 = state_10520__$1;
(statearr_10536_10558[(2)] = null);

(statearr_10536_10558[(1)] = (2));


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
});})(c__8450__auto___10548,out))
;
return ((function (switch__8338__auto__,c__8450__auto___10548,out){
return (function() {
var cljs$core$async$state_machine__8339__auto__ = null;
var cljs$core$async$state_machine__8339__auto____0 = (function (){
var statearr_10540 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10540[(0)] = cljs$core$async$state_machine__8339__auto__);

(statearr_10540[(1)] = (1));

return statearr_10540;
});
var cljs$core$async$state_machine__8339__auto____1 = (function (state_10520){
while(true){
var ret_value__8340__auto__ = (function (){try{while(true){
var result__8341__auto__ = switch__8338__auto__.call(null,state_10520);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8341__auto__;
}
break;
}
}catch (e10541){if((e10541 instanceof Object)){
var ex__8342__auto__ = e10541;
var statearr_10542_10559 = state_10520;
(statearr_10542_10559[(5)] = ex__8342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10520);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10541;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10560 = state_10520;
state_10520 = G__10560;
continue;
} else {
return ret_value__8340__auto__;
}
break;
}
});
cljs$core$async$state_machine__8339__auto__ = function(state_10520){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8339__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8339__auto____1.call(this,state_10520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8339__auto____0;
cljs$core$async$state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8339__auto____1;
return cljs$core$async$state_machine__8339__auto__;
})()
;})(switch__8338__auto__,c__8450__auto___10548,out))
})();
var state__8452__auto__ = (function (){var statearr_10543 = f__8451__auto__.call(null);
(statearr_10543[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8450__auto___10548);

return statearr_10543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8452__auto__);
});})(c__8450__auto___10548,out))
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
var args10561 = [];
var len__7018__auto___10610 = arguments.length;
var i__7019__auto___10611 = (0);
while(true){
if((i__7019__auto___10611 < len__7018__auto___10610)){
args10561.push((arguments[i__7019__auto___10611]));

var G__10612 = (i__7019__auto___10611 + (1));
i__7019__auto___10611 = G__10612;
continue;
} else {
}
break;
}

var G__10563 = args10561.length;
switch (G__10563) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10561.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8450__auto___10614 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8450__auto___10614,out){
return (function (){
var f__8451__auto__ = (function (){var switch__8338__auto__ = ((function (c__8450__auto___10614,out){
return (function (state_10587){
var state_val_10588 = (state_10587[(1)]);
if((state_val_10588 === (7))){
var inst_10569 = (state_10587[(7)]);
var inst_10569__$1 = (state_10587[(2)]);
var inst_10570 = (inst_10569__$1 == null);
var inst_10571 = cljs.core.not.call(null,inst_10570);
var state_10587__$1 = (function (){var statearr_10589 = state_10587;
(statearr_10589[(7)] = inst_10569__$1);

return statearr_10589;
})();
if(inst_10571){
var statearr_10590_10615 = state_10587__$1;
(statearr_10590_10615[(1)] = (8));

} else {
var statearr_10591_10616 = state_10587__$1;
(statearr_10591_10616[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10588 === (1))){
var inst_10564 = (0);
var state_10587__$1 = (function (){var statearr_10592 = state_10587;
(statearr_10592[(8)] = inst_10564);

return statearr_10592;
})();
var statearr_10593_10617 = state_10587__$1;
(statearr_10593_10617[(2)] = null);

(statearr_10593_10617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10588 === (4))){
var state_10587__$1 = state_10587;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10587__$1,(7),ch);
} else {
if((state_val_10588 === (6))){
var inst_10582 = (state_10587[(2)]);
var state_10587__$1 = state_10587;
var statearr_10594_10618 = state_10587__$1;
(statearr_10594_10618[(2)] = inst_10582);

(statearr_10594_10618[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10588 === (3))){
var inst_10584 = (state_10587[(2)]);
var inst_10585 = cljs.core.async.close_BANG_.call(null,out);
var state_10587__$1 = (function (){var statearr_10595 = state_10587;
(statearr_10595[(9)] = inst_10584);

return statearr_10595;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10587__$1,inst_10585);
} else {
if((state_val_10588 === (2))){
var inst_10564 = (state_10587[(8)]);
var inst_10566 = (inst_10564 < n);
var state_10587__$1 = state_10587;
if(cljs.core.truth_(inst_10566)){
var statearr_10596_10619 = state_10587__$1;
(statearr_10596_10619[(1)] = (4));

} else {
var statearr_10597_10620 = state_10587__$1;
(statearr_10597_10620[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10588 === (11))){
var inst_10564 = (state_10587[(8)]);
var inst_10574 = (state_10587[(2)]);
var inst_10575 = (inst_10564 + (1));
var inst_10564__$1 = inst_10575;
var state_10587__$1 = (function (){var statearr_10598 = state_10587;
(statearr_10598[(10)] = inst_10574);

(statearr_10598[(8)] = inst_10564__$1);

return statearr_10598;
})();
var statearr_10599_10621 = state_10587__$1;
(statearr_10599_10621[(2)] = null);

(statearr_10599_10621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10588 === (9))){
var state_10587__$1 = state_10587;
var statearr_10600_10622 = state_10587__$1;
(statearr_10600_10622[(2)] = null);

(statearr_10600_10622[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10588 === (5))){
var state_10587__$1 = state_10587;
var statearr_10601_10623 = state_10587__$1;
(statearr_10601_10623[(2)] = null);

(statearr_10601_10623[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10588 === (10))){
var inst_10579 = (state_10587[(2)]);
var state_10587__$1 = state_10587;
var statearr_10602_10624 = state_10587__$1;
(statearr_10602_10624[(2)] = inst_10579);

(statearr_10602_10624[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10588 === (8))){
var inst_10569 = (state_10587[(7)]);
var state_10587__$1 = state_10587;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10587__$1,(11),out,inst_10569);
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
});})(c__8450__auto___10614,out))
;
return ((function (switch__8338__auto__,c__8450__auto___10614,out){
return (function() {
var cljs$core$async$state_machine__8339__auto__ = null;
var cljs$core$async$state_machine__8339__auto____0 = (function (){
var statearr_10606 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_10606[(0)] = cljs$core$async$state_machine__8339__auto__);

(statearr_10606[(1)] = (1));

return statearr_10606;
});
var cljs$core$async$state_machine__8339__auto____1 = (function (state_10587){
while(true){
var ret_value__8340__auto__ = (function (){try{while(true){
var result__8341__auto__ = switch__8338__auto__.call(null,state_10587);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8341__auto__;
}
break;
}
}catch (e10607){if((e10607 instanceof Object)){
var ex__8342__auto__ = e10607;
var statearr_10608_10625 = state_10587;
(statearr_10608_10625[(5)] = ex__8342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10587);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10607;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10626 = state_10587;
state_10587 = G__10626;
continue;
} else {
return ret_value__8340__auto__;
}
break;
}
});
cljs$core$async$state_machine__8339__auto__ = function(state_10587){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8339__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8339__auto____1.call(this,state_10587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8339__auto____0;
cljs$core$async$state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8339__auto____1;
return cljs$core$async$state_machine__8339__auto__;
})()
;})(switch__8338__auto__,c__8450__auto___10614,out))
})();
var state__8452__auto__ = (function (){var statearr_10609 = f__8451__auto__.call(null);
(statearr_10609[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8450__auto___10614);

return statearr_10609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8452__auto__);
});})(c__8450__auto___10614,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async10634 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10634 = (function (map_LT_,f,ch,meta10635){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta10635 = meta10635;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10634.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10636,meta10635__$1){
var self__ = this;
var _10636__$1 = this;
return (new cljs.core.async.t_cljs$core$async10634(self__.map_LT_,self__.f,self__.ch,meta10635__$1));
});

cljs.core.async.t_cljs$core$async10634.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10636){
var self__ = this;
var _10636__$1 = this;
return self__.meta10635;
});

cljs.core.async.t_cljs$core$async10634.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async10634.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async10634.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async10634.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async10634.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async10637 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10637 = (function (map_LT_,f,ch,meta10635,_,fn1,meta10638){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta10635 = meta10635;
this._ = _;
this.fn1 = fn1;
this.meta10638 = meta10638;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10637.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_10639,meta10638__$1){
var self__ = this;
var _10639__$1 = this;
return (new cljs.core.async.t_cljs$core$async10637(self__.map_LT_,self__.f,self__.ch,self__.meta10635,self__._,self__.fn1,meta10638__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async10637.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_10639){
var self__ = this;
var _10639__$1 = this;
return self__.meta10638;
});})(___$1))
;

cljs.core.async.t_cljs$core$async10637.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async10637.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async10637.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async10637.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__10627_SHARP_){
return f1.call(null,(((p1__10627_SHARP_ == null))?null:self__.f.call(null,p1__10627_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async10637.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta10635","meta10635",223711176,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async10634","cljs.core.async/t_cljs$core$async10634",-1797415204,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta10638","meta10638",-1061229505,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async10637.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10637.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10637";

cljs.core.async.t_cljs$core$async10637.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__6558__auto__,writer__6559__auto__,opt__6560__auto__){
return cljs.core._write.call(null,writer__6559__auto__,"cljs.core.async/t_cljs$core$async10637");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async10637 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async10637(map_LT___$1,f__$1,ch__$1,meta10635__$1,___$2,fn1__$1,meta10638){
return (new cljs.core.async.t_cljs$core$async10637(map_LT___$1,f__$1,ch__$1,meta10635__$1,___$2,fn1__$1,meta10638));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async10637(self__.map_LT_,self__.f,self__.ch,self__.meta10635,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5948__auto__ = ret;
if(cljs.core.truth_(and__5948__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__5948__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async10634.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async10634.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async10634.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta10635","meta10635",223711176,null)], null);
});

cljs.core.async.t_cljs$core$async10634.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10634.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10634";

cljs.core.async.t_cljs$core$async10634.cljs$lang$ctorPrWriter = (function (this__6558__auto__,writer__6559__auto__,opt__6560__auto__){
return cljs.core._write.call(null,writer__6559__auto__,"cljs.core.async/t_cljs$core$async10634");
});

cljs.core.async.__GT_t_cljs$core$async10634 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async10634(map_LT___$1,f__$1,ch__$1,meta10635){
return (new cljs.core.async.t_cljs$core$async10634(map_LT___$1,f__$1,ch__$1,meta10635));
});

}

return (new cljs.core.async.t_cljs$core$async10634(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async10643 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10643 = (function (map_GT_,f,ch,meta10644){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta10644 = meta10644;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10643.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10645,meta10644__$1){
var self__ = this;
var _10645__$1 = this;
return (new cljs.core.async.t_cljs$core$async10643(self__.map_GT_,self__.f,self__.ch,meta10644__$1));
});

cljs.core.async.t_cljs$core$async10643.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10645){
var self__ = this;
var _10645__$1 = this;
return self__.meta10644;
});

cljs.core.async.t_cljs$core$async10643.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async10643.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async10643.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async10643.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async10643.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async10643.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async10643.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta10644","meta10644",1394932119,null)], null);
});

cljs.core.async.t_cljs$core$async10643.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10643.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10643";

cljs.core.async.t_cljs$core$async10643.cljs$lang$ctorPrWriter = (function (this__6558__auto__,writer__6559__auto__,opt__6560__auto__){
return cljs.core._write.call(null,writer__6559__auto__,"cljs.core.async/t_cljs$core$async10643");
});

cljs.core.async.__GT_t_cljs$core$async10643 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async10643(map_GT___$1,f__$1,ch__$1,meta10644){
return (new cljs.core.async.t_cljs$core$async10643(map_GT___$1,f__$1,ch__$1,meta10644));
});

}

return (new cljs.core.async.t_cljs$core$async10643(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async10649 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10649 = (function (filter_GT_,p,ch,meta10650){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta10650 = meta10650;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10649.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10651,meta10650__$1){
var self__ = this;
var _10651__$1 = this;
return (new cljs.core.async.t_cljs$core$async10649(self__.filter_GT_,self__.p,self__.ch,meta10650__$1));
});

cljs.core.async.t_cljs$core$async10649.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10651){
var self__ = this;
var _10651__$1 = this;
return self__.meta10650;
});

cljs.core.async.t_cljs$core$async10649.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async10649.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async10649.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async10649.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async10649.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async10649.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async10649.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async10649.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta10650","meta10650",406782197,null)], null);
});

cljs.core.async.t_cljs$core$async10649.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10649.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10649";

cljs.core.async.t_cljs$core$async10649.cljs$lang$ctorPrWriter = (function (this__6558__auto__,writer__6559__auto__,opt__6560__auto__){
return cljs.core._write.call(null,writer__6559__auto__,"cljs.core.async/t_cljs$core$async10649");
});

cljs.core.async.__GT_t_cljs$core$async10649 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async10649(filter_GT___$1,p__$1,ch__$1,meta10650){
return (new cljs.core.async.t_cljs$core$async10649(filter_GT___$1,p__$1,ch__$1,meta10650));
});

}

return (new cljs.core.async.t_cljs$core$async10649(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args10652 = [];
var len__7018__auto___10696 = arguments.length;
var i__7019__auto___10697 = (0);
while(true){
if((i__7019__auto___10697 < len__7018__auto___10696)){
args10652.push((arguments[i__7019__auto___10697]));

var G__10698 = (i__7019__auto___10697 + (1));
i__7019__auto___10697 = G__10698;
continue;
} else {
}
break;
}

var G__10654 = args10652.length;
switch (G__10654) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10652.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8450__auto___10700 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8450__auto___10700,out){
return (function (){
var f__8451__auto__ = (function (){var switch__8338__auto__ = ((function (c__8450__auto___10700,out){
return (function (state_10675){
var state_val_10676 = (state_10675[(1)]);
if((state_val_10676 === (7))){
var inst_10671 = (state_10675[(2)]);
var state_10675__$1 = state_10675;
var statearr_10677_10701 = state_10675__$1;
(statearr_10677_10701[(2)] = inst_10671);

(statearr_10677_10701[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10676 === (1))){
var state_10675__$1 = state_10675;
var statearr_10678_10702 = state_10675__$1;
(statearr_10678_10702[(2)] = null);

(statearr_10678_10702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10676 === (4))){
var inst_10657 = (state_10675[(7)]);
var inst_10657__$1 = (state_10675[(2)]);
var inst_10658 = (inst_10657__$1 == null);
var state_10675__$1 = (function (){var statearr_10679 = state_10675;
(statearr_10679[(7)] = inst_10657__$1);

return statearr_10679;
})();
if(cljs.core.truth_(inst_10658)){
var statearr_10680_10703 = state_10675__$1;
(statearr_10680_10703[(1)] = (5));

} else {
var statearr_10681_10704 = state_10675__$1;
(statearr_10681_10704[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10676 === (6))){
var inst_10657 = (state_10675[(7)]);
var inst_10662 = p.call(null,inst_10657);
var state_10675__$1 = state_10675;
if(cljs.core.truth_(inst_10662)){
var statearr_10682_10705 = state_10675__$1;
(statearr_10682_10705[(1)] = (8));

} else {
var statearr_10683_10706 = state_10675__$1;
(statearr_10683_10706[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10676 === (3))){
var inst_10673 = (state_10675[(2)]);
var state_10675__$1 = state_10675;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10675__$1,inst_10673);
} else {
if((state_val_10676 === (2))){
var state_10675__$1 = state_10675;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10675__$1,(4),ch);
} else {
if((state_val_10676 === (11))){
var inst_10665 = (state_10675[(2)]);
var state_10675__$1 = state_10675;
var statearr_10684_10707 = state_10675__$1;
(statearr_10684_10707[(2)] = inst_10665);

(statearr_10684_10707[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10676 === (9))){
var state_10675__$1 = state_10675;
var statearr_10685_10708 = state_10675__$1;
(statearr_10685_10708[(2)] = null);

(statearr_10685_10708[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10676 === (5))){
var inst_10660 = cljs.core.async.close_BANG_.call(null,out);
var state_10675__$1 = state_10675;
var statearr_10686_10709 = state_10675__$1;
(statearr_10686_10709[(2)] = inst_10660);

(statearr_10686_10709[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10676 === (10))){
var inst_10668 = (state_10675[(2)]);
var state_10675__$1 = (function (){var statearr_10687 = state_10675;
(statearr_10687[(8)] = inst_10668);

return statearr_10687;
})();
var statearr_10688_10710 = state_10675__$1;
(statearr_10688_10710[(2)] = null);

(statearr_10688_10710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10676 === (8))){
var inst_10657 = (state_10675[(7)]);
var state_10675__$1 = state_10675;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10675__$1,(11),out,inst_10657);
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
});})(c__8450__auto___10700,out))
;
return ((function (switch__8338__auto__,c__8450__auto___10700,out){
return (function() {
var cljs$core$async$state_machine__8339__auto__ = null;
var cljs$core$async$state_machine__8339__auto____0 = (function (){
var statearr_10692 = [null,null,null,null,null,null,null,null,null];
(statearr_10692[(0)] = cljs$core$async$state_machine__8339__auto__);

(statearr_10692[(1)] = (1));

return statearr_10692;
});
var cljs$core$async$state_machine__8339__auto____1 = (function (state_10675){
while(true){
var ret_value__8340__auto__ = (function (){try{while(true){
var result__8341__auto__ = switch__8338__auto__.call(null,state_10675);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8341__auto__;
}
break;
}
}catch (e10693){if((e10693 instanceof Object)){
var ex__8342__auto__ = e10693;
var statearr_10694_10711 = state_10675;
(statearr_10694_10711[(5)] = ex__8342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10675);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10693;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10712 = state_10675;
state_10675 = G__10712;
continue;
} else {
return ret_value__8340__auto__;
}
break;
}
});
cljs$core$async$state_machine__8339__auto__ = function(state_10675){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8339__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8339__auto____1.call(this,state_10675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8339__auto____0;
cljs$core$async$state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8339__auto____1;
return cljs$core$async$state_machine__8339__auto__;
})()
;})(switch__8338__auto__,c__8450__auto___10700,out))
})();
var state__8452__auto__ = (function (){var statearr_10695 = f__8451__auto__.call(null);
(statearr_10695[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8450__auto___10700);

return statearr_10695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8452__auto__);
});})(c__8450__auto___10700,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args10713 = [];
var len__7018__auto___10716 = arguments.length;
var i__7019__auto___10717 = (0);
while(true){
if((i__7019__auto___10717 < len__7018__auto___10716)){
args10713.push((arguments[i__7019__auto___10717]));

var G__10718 = (i__7019__auto___10717 + (1));
i__7019__auto___10717 = G__10718;
continue;
} else {
}
break;
}

var G__10715 = args10713.length;
switch (G__10715) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10713.length)].join('')));

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
var c__8450__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8450__auto__){
return (function (){
var f__8451__auto__ = (function (){var switch__8338__auto__ = ((function (c__8450__auto__){
return (function (state_10885){
var state_val_10886 = (state_10885[(1)]);
if((state_val_10886 === (7))){
var inst_10881 = (state_10885[(2)]);
var state_10885__$1 = state_10885;
var statearr_10887_10928 = state_10885__$1;
(statearr_10887_10928[(2)] = inst_10881);

(statearr_10887_10928[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10886 === (20))){
var inst_10851 = (state_10885[(7)]);
var inst_10862 = (state_10885[(2)]);
var inst_10863 = cljs.core.next.call(null,inst_10851);
var inst_10837 = inst_10863;
var inst_10838 = null;
var inst_10839 = (0);
var inst_10840 = (0);
var state_10885__$1 = (function (){var statearr_10888 = state_10885;
(statearr_10888[(8)] = inst_10862);

(statearr_10888[(9)] = inst_10840);

(statearr_10888[(10)] = inst_10839);

(statearr_10888[(11)] = inst_10838);

(statearr_10888[(12)] = inst_10837);

return statearr_10888;
})();
var statearr_10889_10929 = state_10885__$1;
(statearr_10889_10929[(2)] = null);

(statearr_10889_10929[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10886 === (1))){
var state_10885__$1 = state_10885;
var statearr_10890_10930 = state_10885__$1;
(statearr_10890_10930[(2)] = null);

(statearr_10890_10930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10886 === (4))){
var inst_10826 = (state_10885[(13)]);
var inst_10826__$1 = (state_10885[(2)]);
var inst_10827 = (inst_10826__$1 == null);
var state_10885__$1 = (function (){var statearr_10891 = state_10885;
(statearr_10891[(13)] = inst_10826__$1);

return statearr_10891;
})();
if(cljs.core.truth_(inst_10827)){
var statearr_10892_10931 = state_10885__$1;
(statearr_10892_10931[(1)] = (5));

} else {
var statearr_10893_10932 = state_10885__$1;
(statearr_10893_10932[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10886 === (15))){
var state_10885__$1 = state_10885;
var statearr_10897_10933 = state_10885__$1;
(statearr_10897_10933[(2)] = null);

(statearr_10897_10933[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10886 === (21))){
var state_10885__$1 = state_10885;
var statearr_10898_10934 = state_10885__$1;
(statearr_10898_10934[(2)] = null);

(statearr_10898_10934[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10886 === (13))){
var inst_10840 = (state_10885[(9)]);
var inst_10839 = (state_10885[(10)]);
var inst_10838 = (state_10885[(11)]);
var inst_10837 = (state_10885[(12)]);
var inst_10847 = (state_10885[(2)]);
var inst_10848 = (inst_10840 + (1));
var tmp10894 = inst_10839;
var tmp10895 = inst_10838;
var tmp10896 = inst_10837;
var inst_10837__$1 = tmp10896;
var inst_10838__$1 = tmp10895;
var inst_10839__$1 = tmp10894;
var inst_10840__$1 = inst_10848;
var state_10885__$1 = (function (){var statearr_10899 = state_10885;
(statearr_10899[(14)] = inst_10847);

(statearr_10899[(9)] = inst_10840__$1);

(statearr_10899[(10)] = inst_10839__$1);

(statearr_10899[(11)] = inst_10838__$1);

(statearr_10899[(12)] = inst_10837__$1);

return statearr_10899;
})();
var statearr_10900_10935 = state_10885__$1;
(statearr_10900_10935[(2)] = null);

(statearr_10900_10935[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10886 === (22))){
var state_10885__$1 = state_10885;
var statearr_10901_10936 = state_10885__$1;
(statearr_10901_10936[(2)] = null);

(statearr_10901_10936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10886 === (6))){
var inst_10826 = (state_10885[(13)]);
var inst_10835 = f.call(null,inst_10826);
var inst_10836 = cljs.core.seq.call(null,inst_10835);
var inst_10837 = inst_10836;
var inst_10838 = null;
var inst_10839 = (0);
var inst_10840 = (0);
var state_10885__$1 = (function (){var statearr_10902 = state_10885;
(statearr_10902[(9)] = inst_10840);

(statearr_10902[(10)] = inst_10839);

(statearr_10902[(11)] = inst_10838);

(statearr_10902[(12)] = inst_10837);

return statearr_10902;
})();
var statearr_10903_10937 = state_10885__$1;
(statearr_10903_10937[(2)] = null);

(statearr_10903_10937[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10886 === (17))){
var inst_10851 = (state_10885[(7)]);
var inst_10855 = cljs.core.chunk_first.call(null,inst_10851);
var inst_10856 = cljs.core.chunk_rest.call(null,inst_10851);
var inst_10857 = cljs.core.count.call(null,inst_10855);
var inst_10837 = inst_10856;
var inst_10838 = inst_10855;
var inst_10839 = inst_10857;
var inst_10840 = (0);
var state_10885__$1 = (function (){var statearr_10904 = state_10885;
(statearr_10904[(9)] = inst_10840);

(statearr_10904[(10)] = inst_10839);

(statearr_10904[(11)] = inst_10838);

(statearr_10904[(12)] = inst_10837);

return statearr_10904;
})();
var statearr_10905_10938 = state_10885__$1;
(statearr_10905_10938[(2)] = null);

(statearr_10905_10938[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10886 === (3))){
var inst_10883 = (state_10885[(2)]);
var state_10885__$1 = state_10885;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10885__$1,inst_10883);
} else {
if((state_val_10886 === (12))){
var inst_10871 = (state_10885[(2)]);
var state_10885__$1 = state_10885;
var statearr_10906_10939 = state_10885__$1;
(statearr_10906_10939[(2)] = inst_10871);

(statearr_10906_10939[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10886 === (2))){
var state_10885__$1 = state_10885;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10885__$1,(4),in$);
} else {
if((state_val_10886 === (23))){
var inst_10879 = (state_10885[(2)]);
var state_10885__$1 = state_10885;
var statearr_10907_10940 = state_10885__$1;
(statearr_10907_10940[(2)] = inst_10879);

(statearr_10907_10940[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10886 === (19))){
var inst_10866 = (state_10885[(2)]);
var state_10885__$1 = state_10885;
var statearr_10908_10941 = state_10885__$1;
(statearr_10908_10941[(2)] = inst_10866);

(statearr_10908_10941[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10886 === (11))){
var inst_10851 = (state_10885[(7)]);
var inst_10837 = (state_10885[(12)]);
var inst_10851__$1 = cljs.core.seq.call(null,inst_10837);
var state_10885__$1 = (function (){var statearr_10909 = state_10885;
(statearr_10909[(7)] = inst_10851__$1);

return statearr_10909;
})();
if(inst_10851__$1){
var statearr_10910_10942 = state_10885__$1;
(statearr_10910_10942[(1)] = (14));

} else {
var statearr_10911_10943 = state_10885__$1;
(statearr_10911_10943[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10886 === (9))){
var inst_10873 = (state_10885[(2)]);
var inst_10874 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_10885__$1 = (function (){var statearr_10912 = state_10885;
(statearr_10912[(15)] = inst_10873);

return statearr_10912;
})();
if(cljs.core.truth_(inst_10874)){
var statearr_10913_10944 = state_10885__$1;
(statearr_10913_10944[(1)] = (21));

} else {
var statearr_10914_10945 = state_10885__$1;
(statearr_10914_10945[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10886 === (5))){
var inst_10829 = cljs.core.async.close_BANG_.call(null,out);
var state_10885__$1 = state_10885;
var statearr_10915_10946 = state_10885__$1;
(statearr_10915_10946[(2)] = inst_10829);

(statearr_10915_10946[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10886 === (14))){
var inst_10851 = (state_10885[(7)]);
var inst_10853 = cljs.core.chunked_seq_QMARK_.call(null,inst_10851);
var state_10885__$1 = state_10885;
if(inst_10853){
var statearr_10916_10947 = state_10885__$1;
(statearr_10916_10947[(1)] = (17));

} else {
var statearr_10917_10948 = state_10885__$1;
(statearr_10917_10948[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10886 === (16))){
var inst_10869 = (state_10885[(2)]);
var state_10885__$1 = state_10885;
var statearr_10918_10949 = state_10885__$1;
(statearr_10918_10949[(2)] = inst_10869);

(statearr_10918_10949[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10886 === (10))){
var inst_10840 = (state_10885[(9)]);
var inst_10838 = (state_10885[(11)]);
var inst_10845 = cljs.core._nth.call(null,inst_10838,inst_10840);
var state_10885__$1 = state_10885;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10885__$1,(13),out,inst_10845);
} else {
if((state_val_10886 === (18))){
var inst_10851 = (state_10885[(7)]);
var inst_10860 = cljs.core.first.call(null,inst_10851);
var state_10885__$1 = state_10885;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10885__$1,(20),out,inst_10860);
} else {
if((state_val_10886 === (8))){
var inst_10840 = (state_10885[(9)]);
var inst_10839 = (state_10885[(10)]);
var inst_10842 = (inst_10840 < inst_10839);
var inst_10843 = inst_10842;
var state_10885__$1 = state_10885;
if(cljs.core.truth_(inst_10843)){
var statearr_10919_10950 = state_10885__$1;
(statearr_10919_10950[(1)] = (10));

} else {
var statearr_10920_10951 = state_10885__$1;
(statearr_10920_10951[(1)] = (11));

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
});})(c__8450__auto__))
;
return ((function (switch__8338__auto__,c__8450__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__8339__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__8339__auto____0 = (function (){
var statearr_10924 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10924[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__8339__auto__);

(statearr_10924[(1)] = (1));

return statearr_10924;
});
var cljs$core$async$mapcat_STAR__$_state_machine__8339__auto____1 = (function (state_10885){
while(true){
var ret_value__8340__auto__ = (function (){try{while(true){
var result__8341__auto__ = switch__8338__auto__.call(null,state_10885);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8341__auto__;
}
break;
}
}catch (e10925){if((e10925 instanceof Object)){
var ex__8342__auto__ = e10925;
var statearr_10926_10952 = state_10885;
(statearr_10926_10952[(5)] = ex__8342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10885);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10925;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10953 = state_10885;
state_10885 = G__10953;
continue;
} else {
return ret_value__8340__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__8339__auto__ = function(state_10885){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__8339__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__8339__auto____1.call(this,state_10885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__8339__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__8339__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__8339__auto__;
})()
;})(switch__8338__auto__,c__8450__auto__))
})();
var state__8452__auto__ = (function (){var statearr_10927 = f__8451__auto__.call(null);
(statearr_10927[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8450__auto__);

return statearr_10927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8452__auto__);
});})(c__8450__auto__))
);

return c__8450__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args10954 = [];
var len__7018__auto___10957 = arguments.length;
var i__7019__auto___10958 = (0);
while(true){
if((i__7019__auto___10958 < len__7018__auto___10957)){
args10954.push((arguments[i__7019__auto___10958]));

var G__10959 = (i__7019__auto___10958 + (1));
i__7019__auto___10958 = G__10959;
continue;
} else {
}
break;
}

var G__10956 = args10954.length;
switch (G__10956) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10954.length)].join('')));

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
var args10961 = [];
var len__7018__auto___10964 = arguments.length;
var i__7019__auto___10965 = (0);
while(true){
if((i__7019__auto___10965 < len__7018__auto___10964)){
args10961.push((arguments[i__7019__auto___10965]));

var G__10966 = (i__7019__auto___10965 + (1));
i__7019__auto___10965 = G__10966;
continue;
} else {
}
break;
}

var G__10963 = args10961.length;
switch (G__10963) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10961.length)].join('')));

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
var args10968 = [];
var len__7018__auto___11019 = arguments.length;
var i__7019__auto___11020 = (0);
while(true){
if((i__7019__auto___11020 < len__7018__auto___11019)){
args10968.push((arguments[i__7019__auto___11020]));

var G__11021 = (i__7019__auto___11020 + (1));
i__7019__auto___11020 = G__11021;
continue;
} else {
}
break;
}

var G__10970 = args10968.length;
switch (G__10970) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10968.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8450__auto___11023 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8450__auto___11023,out){
return (function (){
var f__8451__auto__ = (function (){var switch__8338__auto__ = ((function (c__8450__auto___11023,out){
return (function (state_10994){
var state_val_10995 = (state_10994[(1)]);
if((state_val_10995 === (7))){
var inst_10989 = (state_10994[(2)]);
var state_10994__$1 = state_10994;
var statearr_10996_11024 = state_10994__$1;
(statearr_10996_11024[(2)] = inst_10989);

(statearr_10996_11024[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10995 === (1))){
var inst_10971 = null;
var state_10994__$1 = (function (){var statearr_10997 = state_10994;
(statearr_10997[(7)] = inst_10971);

return statearr_10997;
})();
var statearr_10998_11025 = state_10994__$1;
(statearr_10998_11025[(2)] = null);

(statearr_10998_11025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10995 === (4))){
var inst_10974 = (state_10994[(8)]);
var inst_10974__$1 = (state_10994[(2)]);
var inst_10975 = (inst_10974__$1 == null);
var inst_10976 = cljs.core.not.call(null,inst_10975);
var state_10994__$1 = (function (){var statearr_10999 = state_10994;
(statearr_10999[(8)] = inst_10974__$1);

return statearr_10999;
})();
if(inst_10976){
var statearr_11000_11026 = state_10994__$1;
(statearr_11000_11026[(1)] = (5));

} else {
var statearr_11001_11027 = state_10994__$1;
(statearr_11001_11027[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10995 === (6))){
var state_10994__$1 = state_10994;
var statearr_11002_11028 = state_10994__$1;
(statearr_11002_11028[(2)] = null);

(statearr_11002_11028[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10995 === (3))){
var inst_10991 = (state_10994[(2)]);
var inst_10992 = cljs.core.async.close_BANG_.call(null,out);
var state_10994__$1 = (function (){var statearr_11003 = state_10994;
(statearr_11003[(9)] = inst_10991);

return statearr_11003;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10994__$1,inst_10992);
} else {
if((state_val_10995 === (2))){
var state_10994__$1 = state_10994;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10994__$1,(4),ch);
} else {
if((state_val_10995 === (11))){
var inst_10974 = (state_10994[(8)]);
var inst_10983 = (state_10994[(2)]);
var inst_10971 = inst_10974;
var state_10994__$1 = (function (){var statearr_11004 = state_10994;
(statearr_11004[(10)] = inst_10983);

(statearr_11004[(7)] = inst_10971);

return statearr_11004;
})();
var statearr_11005_11029 = state_10994__$1;
(statearr_11005_11029[(2)] = null);

(statearr_11005_11029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10995 === (9))){
var inst_10974 = (state_10994[(8)]);
var state_10994__$1 = state_10994;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10994__$1,(11),out,inst_10974);
} else {
if((state_val_10995 === (5))){
var inst_10974 = (state_10994[(8)]);
var inst_10971 = (state_10994[(7)]);
var inst_10978 = cljs.core._EQ_.call(null,inst_10974,inst_10971);
var state_10994__$1 = state_10994;
if(inst_10978){
var statearr_11007_11030 = state_10994__$1;
(statearr_11007_11030[(1)] = (8));

} else {
var statearr_11008_11031 = state_10994__$1;
(statearr_11008_11031[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10995 === (10))){
var inst_10986 = (state_10994[(2)]);
var state_10994__$1 = state_10994;
var statearr_11009_11032 = state_10994__$1;
(statearr_11009_11032[(2)] = inst_10986);

(statearr_11009_11032[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10995 === (8))){
var inst_10971 = (state_10994[(7)]);
var tmp11006 = inst_10971;
var inst_10971__$1 = tmp11006;
var state_10994__$1 = (function (){var statearr_11010 = state_10994;
(statearr_11010[(7)] = inst_10971__$1);

return statearr_11010;
})();
var statearr_11011_11033 = state_10994__$1;
(statearr_11011_11033[(2)] = null);

(statearr_11011_11033[(1)] = (2));


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
});})(c__8450__auto___11023,out))
;
return ((function (switch__8338__auto__,c__8450__auto___11023,out){
return (function() {
var cljs$core$async$state_machine__8339__auto__ = null;
var cljs$core$async$state_machine__8339__auto____0 = (function (){
var statearr_11015 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11015[(0)] = cljs$core$async$state_machine__8339__auto__);

(statearr_11015[(1)] = (1));

return statearr_11015;
});
var cljs$core$async$state_machine__8339__auto____1 = (function (state_10994){
while(true){
var ret_value__8340__auto__ = (function (){try{while(true){
var result__8341__auto__ = switch__8338__auto__.call(null,state_10994);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8341__auto__;
}
break;
}
}catch (e11016){if((e11016 instanceof Object)){
var ex__8342__auto__ = e11016;
var statearr_11017_11034 = state_10994;
(statearr_11017_11034[(5)] = ex__8342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10994);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11016;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11035 = state_10994;
state_10994 = G__11035;
continue;
} else {
return ret_value__8340__auto__;
}
break;
}
});
cljs$core$async$state_machine__8339__auto__ = function(state_10994){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8339__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8339__auto____1.call(this,state_10994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8339__auto____0;
cljs$core$async$state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8339__auto____1;
return cljs$core$async$state_machine__8339__auto__;
})()
;})(switch__8338__auto__,c__8450__auto___11023,out))
})();
var state__8452__auto__ = (function (){var statearr_11018 = f__8451__auto__.call(null);
(statearr_11018[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8450__auto___11023);

return statearr_11018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8452__auto__);
});})(c__8450__auto___11023,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args11036 = [];
var len__7018__auto___11106 = arguments.length;
var i__7019__auto___11107 = (0);
while(true){
if((i__7019__auto___11107 < len__7018__auto___11106)){
args11036.push((arguments[i__7019__auto___11107]));

var G__11108 = (i__7019__auto___11107 + (1));
i__7019__auto___11107 = G__11108;
continue;
} else {
}
break;
}

var G__11038 = args11036.length;
switch (G__11038) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11036.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8450__auto___11110 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8450__auto___11110,out){
return (function (){
var f__8451__auto__ = (function (){var switch__8338__auto__ = ((function (c__8450__auto___11110,out){
return (function (state_11076){
var state_val_11077 = (state_11076[(1)]);
if((state_val_11077 === (7))){
var inst_11072 = (state_11076[(2)]);
var state_11076__$1 = state_11076;
var statearr_11078_11111 = state_11076__$1;
(statearr_11078_11111[(2)] = inst_11072);

(statearr_11078_11111[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11077 === (1))){
var inst_11039 = (new Array(n));
var inst_11040 = inst_11039;
var inst_11041 = (0);
var state_11076__$1 = (function (){var statearr_11079 = state_11076;
(statearr_11079[(7)] = inst_11041);

(statearr_11079[(8)] = inst_11040);

return statearr_11079;
})();
var statearr_11080_11112 = state_11076__$1;
(statearr_11080_11112[(2)] = null);

(statearr_11080_11112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11077 === (4))){
var inst_11044 = (state_11076[(9)]);
var inst_11044__$1 = (state_11076[(2)]);
var inst_11045 = (inst_11044__$1 == null);
var inst_11046 = cljs.core.not.call(null,inst_11045);
var state_11076__$1 = (function (){var statearr_11081 = state_11076;
(statearr_11081[(9)] = inst_11044__$1);

return statearr_11081;
})();
if(inst_11046){
var statearr_11082_11113 = state_11076__$1;
(statearr_11082_11113[(1)] = (5));

} else {
var statearr_11083_11114 = state_11076__$1;
(statearr_11083_11114[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11077 === (15))){
var inst_11066 = (state_11076[(2)]);
var state_11076__$1 = state_11076;
var statearr_11084_11115 = state_11076__$1;
(statearr_11084_11115[(2)] = inst_11066);

(statearr_11084_11115[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11077 === (13))){
var state_11076__$1 = state_11076;
var statearr_11085_11116 = state_11076__$1;
(statearr_11085_11116[(2)] = null);

(statearr_11085_11116[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11077 === (6))){
var inst_11041 = (state_11076[(7)]);
var inst_11062 = (inst_11041 > (0));
var state_11076__$1 = state_11076;
if(cljs.core.truth_(inst_11062)){
var statearr_11086_11117 = state_11076__$1;
(statearr_11086_11117[(1)] = (12));

} else {
var statearr_11087_11118 = state_11076__$1;
(statearr_11087_11118[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11077 === (3))){
var inst_11074 = (state_11076[(2)]);
var state_11076__$1 = state_11076;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11076__$1,inst_11074);
} else {
if((state_val_11077 === (12))){
var inst_11040 = (state_11076[(8)]);
var inst_11064 = cljs.core.vec.call(null,inst_11040);
var state_11076__$1 = state_11076;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11076__$1,(15),out,inst_11064);
} else {
if((state_val_11077 === (2))){
var state_11076__$1 = state_11076;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11076__$1,(4),ch);
} else {
if((state_val_11077 === (11))){
var inst_11056 = (state_11076[(2)]);
var inst_11057 = (new Array(n));
var inst_11040 = inst_11057;
var inst_11041 = (0);
var state_11076__$1 = (function (){var statearr_11088 = state_11076;
(statearr_11088[(7)] = inst_11041);

(statearr_11088[(8)] = inst_11040);

(statearr_11088[(10)] = inst_11056);

return statearr_11088;
})();
var statearr_11089_11119 = state_11076__$1;
(statearr_11089_11119[(2)] = null);

(statearr_11089_11119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11077 === (9))){
var inst_11040 = (state_11076[(8)]);
var inst_11054 = cljs.core.vec.call(null,inst_11040);
var state_11076__$1 = state_11076;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11076__$1,(11),out,inst_11054);
} else {
if((state_val_11077 === (5))){
var inst_11041 = (state_11076[(7)]);
var inst_11040 = (state_11076[(8)]);
var inst_11049 = (state_11076[(11)]);
var inst_11044 = (state_11076[(9)]);
var inst_11048 = (inst_11040[inst_11041] = inst_11044);
var inst_11049__$1 = (inst_11041 + (1));
var inst_11050 = (inst_11049__$1 < n);
var state_11076__$1 = (function (){var statearr_11090 = state_11076;
(statearr_11090[(12)] = inst_11048);

(statearr_11090[(11)] = inst_11049__$1);

return statearr_11090;
})();
if(cljs.core.truth_(inst_11050)){
var statearr_11091_11120 = state_11076__$1;
(statearr_11091_11120[(1)] = (8));

} else {
var statearr_11092_11121 = state_11076__$1;
(statearr_11092_11121[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11077 === (14))){
var inst_11069 = (state_11076[(2)]);
var inst_11070 = cljs.core.async.close_BANG_.call(null,out);
var state_11076__$1 = (function (){var statearr_11094 = state_11076;
(statearr_11094[(13)] = inst_11069);

return statearr_11094;
})();
var statearr_11095_11122 = state_11076__$1;
(statearr_11095_11122[(2)] = inst_11070);

(statearr_11095_11122[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11077 === (10))){
var inst_11060 = (state_11076[(2)]);
var state_11076__$1 = state_11076;
var statearr_11096_11123 = state_11076__$1;
(statearr_11096_11123[(2)] = inst_11060);

(statearr_11096_11123[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11077 === (8))){
var inst_11040 = (state_11076[(8)]);
var inst_11049 = (state_11076[(11)]);
var tmp11093 = inst_11040;
var inst_11040__$1 = tmp11093;
var inst_11041 = inst_11049;
var state_11076__$1 = (function (){var statearr_11097 = state_11076;
(statearr_11097[(7)] = inst_11041);

(statearr_11097[(8)] = inst_11040__$1);

return statearr_11097;
})();
var statearr_11098_11124 = state_11076__$1;
(statearr_11098_11124[(2)] = null);

(statearr_11098_11124[(1)] = (2));


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
});})(c__8450__auto___11110,out))
;
return ((function (switch__8338__auto__,c__8450__auto___11110,out){
return (function() {
var cljs$core$async$state_machine__8339__auto__ = null;
var cljs$core$async$state_machine__8339__auto____0 = (function (){
var statearr_11102 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11102[(0)] = cljs$core$async$state_machine__8339__auto__);

(statearr_11102[(1)] = (1));

return statearr_11102;
});
var cljs$core$async$state_machine__8339__auto____1 = (function (state_11076){
while(true){
var ret_value__8340__auto__ = (function (){try{while(true){
var result__8341__auto__ = switch__8338__auto__.call(null,state_11076);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8341__auto__;
}
break;
}
}catch (e11103){if((e11103 instanceof Object)){
var ex__8342__auto__ = e11103;
var statearr_11104_11125 = state_11076;
(statearr_11104_11125[(5)] = ex__8342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11076);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11103;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11126 = state_11076;
state_11076 = G__11126;
continue;
} else {
return ret_value__8340__auto__;
}
break;
}
});
cljs$core$async$state_machine__8339__auto__ = function(state_11076){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8339__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8339__auto____1.call(this,state_11076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8339__auto____0;
cljs$core$async$state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8339__auto____1;
return cljs$core$async$state_machine__8339__auto__;
})()
;})(switch__8338__auto__,c__8450__auto___11110,out))
})();
var state__8452__auto__ = (function (){var statearr_11105 = f__8451__auto__.call(null);
(statearr_11105[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8450__auto___11110);

return statearr_11105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8452__auto__);
});})(c__8450__auto___11110,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args11127 = [];
var len__7018__auto___11201 = arguments.length;
var i__7019__auto___11202 = (0);
while(true){
if((i__7019__auto___11202 < len__7018__auto___11201)){
args11127.push((arguments[i__7019__auto___11202]));

var G__11203 = (i__7019__auto___11202 + (1));
i__7019__auto___11202 = G__11203;
continue;
} else {
}
break;
}

var G__11129 = args11127.length;
switch (G__11129) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11127.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8450__auto___11205 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8450__auto___11205,out){
return (function (){
var f__8451__auto__ = (function (){var switch__8338__auto__ = ((function (c__8450__auto___11205,out){
return (function (state_11171){
var state_val_11172 = (state_11171[(1)]);
if((state_val_11172 === (7))){
var inst_11167 = (state_11171[(2)]);
var state_11171__$1 = state_11171;
var statearr_11173_11206 = state_11171__$1;
(statearr_11173_11206[(2)] = inst_11167);

(statearr_11173_11206[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11172 === (1))){
var inst_11130 = [];
var inst_11131 = inst_11130;
var inst_11132 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_11171__$1 = (function (){var statearr_11174 = state_11171;
(statearr_11174[(7)] = inst_11131);

(statearr_11174[(8)] = inst_11132);

return statearr_11174;
})();
var statearr_11175_11207 = state_11171__$1;
(statearr_11175_11207[(2)] = null);

(statearr_11175_11207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11172 === (4))){
var inst_11135 = (state_11171[(9)]);
var inst_11135__$1 = (state_11171[(2)]);
var inst_11136 = (inst_11135__$1 == null);
var inst_11137 = cljs.core.not.call(null,inst_11136);
var state_11171__$1 = (function (){var statearr_11176 = state_11171;
(statearr_11176[(9)] = inst_11135__$1);

return statearr_11176;
})();
if(inst_11137){
var statearr_11177_11208 = state_11171__$1;
(statearr_11177_11208[(1)] = (5));

} else {
var statearr_11178_11209 = state_11171__$1;
(statearr_11178_11209[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11172 === (15))){
var inst_11161 = (state_11171[(2)]);
var state_11171__$1 = state_11171;
var statearr_11179_11210 = state_11171__$1;
(statearr_11179_11210[(2)] = inst_11161);

(statearr_11179_11210[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11172 === (13))){
var state_11171__$1 = state_11171;
var statearr_11180_11211 = state_11171__$1;
(statearr_11180_11211[(2)] = null);

(statearr_11180_11211[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11172 === (6))){
var inst_11131 = (state_11171[(7)]);
var inst_11156 = inst_11131.length;
var inst_11157 = (inst_11156 > (0));
var state_11171__$1 = state_11171;
if(cljs.core.truth_(inst_11157)){
var statearr_11181_11212 = state_11171__$1;
(statearr_11181_11212[(1)] = (12));

} else {
var statearr_11182_11213 = state_11171__$1;
(statearr_11182_11213[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11172 === (3))){
var inst_11169 = (state_11171[(2)]);
var state_11171__$1 = state_11171;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11171__$1,inst_11169);
} else {
if((state_val_11172 === (12))){
var inst_11131 = (state_11171[(7)]);
var inst_11159 = cljs.core.vec.call(null,inst_11131);
var state_11171__$1 = state_11171;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11171__$1,(15),out,inst_11159);
} else {
if((state_val_11172 === (2))){
var state_11171__$1 = state_11171;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11171__$1,(4),ch);
} else {
if((state_val_11172 === (11))){
var inst_11139 = (state_11171[(10)]);
var inst_11135 = (state_11171[(9)]);
var inst_11149 = (state_11171[(2)]);
var inst_11150 = [];
var inst_11151 = inst_11150.push(inst_11135);
var inst_11131 = inst_11150;
var inst_11132 = inst_11139;
var state_11171__$1 = (function (){var statearr_11183 = state_11171;
(statearr_11183[(7)] = inst_11131);

(statearr_11183[(11)] = inst_11149);

(statearr_11183[(12)] = inst_11151);

(statearr_11183[(8)] = inst_11132);

return statearr_11183;
})();
var statearr_11184_11214 = state_11171__$1;
(statearr_11184_11214[(2)] = null);

(statearr_11184_11214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11172 === (9))){
var inst_11131 = (state_11171[(7)]);
var inst_11147 = cljs.core.vec.call(null,inst_11131);
var state_11171__$1 = state_11171;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11171__$1,(11),out,inst_11147);
} else {
if((state_val_11172 === (5))){
var inst_11139 = (state_11171[(10)]);
var inst_11135 = (state_11171[(9)]);
var inst_11132 = (state_11171[(8)]);
var inst_11139__$1 = f.call(null,inst_11135);
var inst_11140 = cljs.core._EQ_.call(null,inst_11139__$1,inst_11132);
var inst_11141 = cljs.core.keyword_identical_QMARK_.call(null,inst_11132,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_11142 = (inst_11140) || (inst_11141);
var state_11171__$1 = (function (){var statearr_11185 = state_11171;
(statearr_11185[(10)] = inst_11139__$1);

return statearr_11185;
})();
if(cljs.core.truth_(inst_11142)){
var statearr_11186_11215 = state_11171__$1;
(statearr_11186_11215[(1)] = (8));

} else {
var statearr_11187_11216 = state_11171__$1;
(statearr_11187_11216[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11172 === (14))){
var inst_11164 = (state_11171[(2)]);
var inst_11165 = cljs.core.async.close_BANG_.call(null,out);
var state_11171__$1 = (function (){var statearr_11189 = state_11171;
(statearr_11189[(13)] = inst_11164);

return statearr_11189;
})();
var statearr_11190_11217 = state_11171__$1;
(statearr_11190_11217[(2)] = inst_11165);

(statearr_11190_11217[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11172 === (10))){
var inst_11154 = (state_11171[(2)]);
var state_11171__$1 = state_11171;
var statearr_11191_11218 = state_11171__$1;
(statearr_11191_11218[(2)] = inst_11154);

(statearr_11191_11218[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11172 === (8))){
var inst_11139 = (state_11171[(10)]);
var inst_11135 = (state_11171[(9)]);
var inst_11131 = (state_11171[(7)]);
var inst_11144 = inst_11131.push(inst_11135);
var tmp11188 = inst_11131;
var inst_11131__$1 = tmp11188;
var inst_11132 = inst_11139;
var state_11171__$1 = (function (){var statearr_11192 = state_11171;
(statearr_11192[(14)] = inst_11144);

(statearr_11192[(7)] = inst_11131__$1);

(statearr_11192[(8)] = inst_11132);

return statearr_11192;
})();
var statearr_11193_11219 = state_11171__$1;
(statearr_11193_11219[(2)] = null);

(statearr_11193_11219[(1)] = (2));


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
});})(c__8450__auto___11205,out))
;
return ((function (switch__8338__auto__,c__8450__auto___11205,out){
return (function() {
var cljs$core$async$state_machine__8339__auto__ = null;
var cljs$core$async$state_machine__8339__auto____0 = (function (){
var statearr_11197 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11197[(0)] = cljs$core$async$state_machine__8339__auto__);

(statearr_11197[(1)] = (1));

return statearr_11197;
});
var cljs$core$async$state_machine__8339__auto____1 = (function (state_11171){
while(true){
var ret_value__8340__auto__ = (function (){try{while(true){
var result__8341__auto__ = switch__8338__auto__.call(null,state_11171);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8341__auto__;
}
break;
}
}catch (e11198){if((e11198 instanceof Object)){
var ex__8342__auto__ = e11198;
var statearr_11199_11220 = state_11171;
(statearr_11199_11220[(5)] = ex__8342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11171);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11198;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11221 = state_11171;
state_11171 = G__11221;
continue;
} else {
return ret_value__8340__auto__;
}
break;
}
});
cljs$core$async$state_machine__8339__auto__ = function(state_11171){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8339__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8339__auto____1.call(this,state_11171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8339__auto____0;
cljs$core$async$state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8339__auto____1;
return cljs$core$async$state_machine__8339__auto__;
})()
;})(switch__8338__auto__,c__8450__auto___11205,out))
})();
var state__8452__auto__ = (function (){var statearr_11200 = f__8451__auto__.call(null);
(statearr_11200[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8450__auto___11205);

return statearr_11200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8452__auto__);
});})(c__8450__auto___11205,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map