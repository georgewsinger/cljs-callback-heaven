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
var args12800 = [];
var len__9177__auto___12806 = arguments.length;
var i__9178__auto___12807 = (0);
while(true){
if((i__9178__auto___12807 < len__9177__auto___12806)){
args12800.push((arguments[i__9178__auto___12807]));

var G__12808 = (i__9178__auto___12807 + (1));
i__9178__auto___12807 = G__12808;
continue;
} else {
}
break;
}

var G__12802 = args12800.length;
switch (G__12802) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12800.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async12803 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12803 = (function (f,blockable,meta12804){
this.f = f;
this.blockable = blockable;
this.meta12804 = meta12804;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12803.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12805,meta12804__$1){
var self__ = this;
var _12805__$1 = this;
return (new cljs.core.async.t_cljs$core$async12803(self__.f,self__.blockable,meta12804__$1));
});

cljs.core.async.t_cljs$core$async12803.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12805){
var self__ = this;
var _12805__$1 = this;
return self__.meta12804;
});

cljs.core.async.t_cljs$core$async12803.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async12803.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async12803.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async12803.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async12803.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta12804","meta12804",1450744696,null)], null);
});

cljs.core.async.t_cljs$core$async12803.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12803.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12803";

cljs.core.async.t_cljs$core$async12803.cljs$lang$ctorPrWriter = (function (this__8717__auto__,writer__8718__auto__,opt__8719__auto__){
return cljs.core._write.call(null,writer__8718__auto__,"cljs.core.async/t_cljs$core$async12803");
});

cljs.core.async.__GT_t_cljs$core$async12803 = (function cljs$core$async$__GT_t_cljs$core$async12803(f__$1,blockable__$1,meta12804){
return (new cljs.core.async.t_cljs$core$async12803(f__$1,blockable__$1,meta12804));
});

}

return (new cljs.core.async.t_cljs$core$async12803(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args12812 = [];
var len__9177__auto___12815 = arguments.length;
var i__9178__auto___12816 = (0);
while(true){
if((i__9178__auto___12816 < len__9177__auto___12815)){
args12812.push((arguments[i__9178__auto___12816]));

var G__12817 = (i__9178__auto___12816 + (1));
i__9178__auto___12816 = G__12817;
continue;
} else {
}
break;
}

var G__12814 = args12812.length;
switch (G__12814) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12812.length)].join('')));

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
var args12819 = [];
var len__9177__auto___12822 = arguments.length;
var i__9178__auto___12823 = (0);
while(true){
if((i__9178__auto___12823 < len__9177__auto___12822)){
args12819.push((arguments[i__9178__auto___12823]));

var G__12824 = (i__9178__auto___12823 + (1));
i__9178__auto___12823 = G__12824;
continue;
} else {
}
break;
}

var G__12821 = args12819.length;
switch (G__12821) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12819.length)].join('')));

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
var args12826 = [];
var len__9177__auto___12829 = arguments.length;
var i__9178__auto___12830 = (0);
while(true){
if((i__9178__auto___12830 < len__9177__auto___12829)){
args12826.push((arguments[i__9178__auto___12830]));

var G__12831 = (i__9178__auto___12830 + (1));
i__9178__auto___12830 = G__12831;
continue;
} else {
}
break;
}

var G__12828 = args12826.length;
switch (G__12828) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12826.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_12833 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_12833);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_12833,ret){
return (function (){
return fn1.call(null,val_12833);
});})(val_12833,ret))
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
var args12834 = [];
var len__9177__auto___12837 = arguments.length;
var i__9178__auto___12838 = (0);
while(true){
if((i__9178__auto___12838 < len__9177__auto___12837)){
args12834.push((arguments[i__9178__auto___12838]));

var G__12839 = (i__9178__auto___12838 + (1));
i__9178__auto___12838 = G__12839;
continue;
} else {
}
break;
}

var G__12836 = args12834.length;
switch (G__12836) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12834.length)].join('')));

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
var n__9022__auto___12841 = n;
var x_12842 = (0);
while(true){
if((x_12842 < n__9022__auto___12841)){
(a[x_12842] = (0));

var G__12843 = (x_12842 + (1));
x_12842 = G__12843;
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

var G__12844 = (i + (1));
i = G__12844;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async12848 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12848 = (function (alt_flag,flag,meta12849){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta12849 = meta12849;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12848.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_12850,meta12849__$1){
var self__ = this;
var _12850__$1 = this;
return (new cljs.core.async.t_cljs$core$async12848(self__.alt_flag,self__.flag,meta12849__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async12848.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_12850){
var self__ = this;
var _12850__$1 = this;
return self__.meta12849;
});})(flag))
;

cljs.core.async.t_cljs$core$async12848.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async12848.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async12848.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async12848.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async12848.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta12849","meta12849",-290062646,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async12848.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12848.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12848";

cljs.core.async.t_cljs$core$async12848.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__8717__auto__,writer__8718__auto__,opt__8719__auto__){
return cljs.core._write.call(null,writer__8718__auto__,"cljs.core.async/t_cljs$core$async12848");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async12848 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async12848(alt_flag__$1,flag__$1,meta12849){
return (new cljs.core.async.t_cljs$core$async12848(alt_flag__$1,flag__$1,meta12849));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async12848(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async12854 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12854 = (function (alt_handler,flag,cb,meta12855){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta12855 = meta12855;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12854.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12856,meta12855__$1){
var self__ = this;
var _12856__$1 = this;
return (new cljs.core.async.t_cljs$core$async12854(self__.alt_handler,self__.flag,self__.cb,meta12855__$1));
});

cljs.core.async.t_cljs$core$async12854.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12856){
var self__ = this;
var _12856__$1 = this;
return self__.meta12855;
});

cljs.core.async.t_cljs$core$async12854.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async12854.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async12854.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async12854.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async12854.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta12855","meta12855",-2112124831,null)], null);
});

cljs.core.async.t_cljs$core$async12854.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12854.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12854";

cljs.core.async.t_cljs$core$async12854.cljs$lang$ctorPrWriter = (function (this__8717__auto__,writer__8718__auto__,opt__8719__auto__){
return cljs.core._write.call(null,writer__8718__auto__,"cljs.core.async/t_cljs$core$async12854");
});

cljs.core.async.__GT_t_cljs$core$async12854 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async12854(alt_handler__$1,flag__$1,cb__$1,meta12855){
return (new cljs.core.async.t_cljs$core$async12854(alt_handler__$1,flag__$1,cb__$1,meta12855));
});

}

return (new cljs.core.async.t_cljs$core$async12854(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__12857_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12857_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12858_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12858_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__8119__auto__ = wport;
if(cljs.core.truth_(or__8119__auto__)){
return or__8119__auto__;
} else {
return port;
}
})()], null));
} else {
var G__12859 = (i + (1));
i = G__12859;
continue;
}
} else {
return null;
}
break;
}
})();
var or__8119__auto__ = ret;
if(cljs.core.truth_(or__8119__auto__)){
return or__8119__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__8107__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__8107__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__8107__auto__;
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
var args__9184__auto__ = [];
var len__9177__auto___12865 = arguments.length;
var i__9178__auto___12866 = (0);
while(true){
if((i__9178__auto___12866 < len__9177__auto___12865)){
args__9184__auto__.push((arguments[i__9178__auto___12866]));

var G__12867 = (i__9178__auto___12866 + (1));
i__9178__auto___12866 = G__12867;
continue;
} else {
}
break;
}

var argseq__9185__auto__ = ((((1) < args__9184__auto__.length))?(new cljs.core.IndexedSeq(args__9184__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9185__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__12862){
var map__12863 = p__12862;
var map__12863__$1 = ((((!((map__12863 == null)))?((((map__12863.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12863.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12863):map__12863);
var opts = map__12863__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq12860){
var G__12861 = cljs.core.first.call(null,seq12860);
var seq12860__$1 = cljs.core.next.call(null,seq12860);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12861,seq12860__$1);
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
var args12868 = [];
var len__9177__auto___12918 = arguments.length;
var i__9178__auto___12919 = (0);
while(true){
if((i__9178__auto___12919 < len__9177__auto___12918)){
args12868.push((arguments[i__9178__auto___12919]));

var G__12920 = (i__9178__auto___12919 + (1));
i__9178__auto___12919 = G__12920;
continue;
} else {
}
break;
}

var G__12870 = args12868.length;
switch (G__12870) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12868.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__10525__auto___12922 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10525__auto___12922){
return (function (){
var f__10526__auto__ = (function (){var switch__10460__auto__ = ((function (c__10525__auto___12922){
return (function (state_12894){
var state_val_12895 = (state_12894[(1)]);
if((state_val_12895 === (7))){
var inst_12890 = (state_12894[(2)]);
var state_12894__$1 = state_12894;
var statearr_12896_12923 = state_12894__$1;
(statearr_12896_12923[(2)] = inst_12890);

(statearr_12896_12923[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12895 === (1))){
var state_12894__$1 = state_12894;
var statearr_12897_12924 = state_12894__$1;
(statearr_12897_12924[(2)] = null);

(statearr_12897_12924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12895 === (4))){
var inst_12873 = (state_12894[(7)]);
var inst_12873__$1 = (state_12894[(2)]);
var inst_12874 = (inst_12873__$1 == null);
var state_12894__$1 = (function (){var statearr_12898 = state_12894;
(statearr_12898[(7)] = inst_12873__$1);

return statearr_12898;
})();
if(cljs.core.truth_(inst_12874)){
var statearr_12899_12925 = state_12894__$1;
(statearr_12899_12925[(1)] = (5));

} else {
var statearr_12900_12926 = state_12894__$1;
(statearr_12900_12926[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12895 === (13))){
var state_12894__$1 = state_12894;
var statearr_12901_12927 = state_12894__$1;
(statearr_12901_12927[(2)] = null);

(statearr_12901_12927[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12895 === (6))){
var inst_12873 = (state_12894[(7)]);
var state_12894__$1 = state_12894;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12894__$1,(11),to,inst_12873);
} else {
if((state_val_12895 === (3))){
var inst_12892 = (state_12894[(2)]);
var state_12894__$1 = state_12894;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12894__$1,inst_12892);
} else {
if((state_val_12895 === (12))){
var state_12894__$1 = state_12894;
var statearr_12902_12928 = state_12894__$1;
(statearr_12902_12928[(2)] = null);

(statearr_12902_12928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12895 === (2))){
var state_12894__$1 = state_12894;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12894__$1,(4),from);
} else {
if((state_val_12895 === (11))){
var inst_12883 = (state_12894[(2)]);
var state_12894__$1 = state_12894;
if(cljs.core.truth_(inst_12883)){
var statearr_12903_12929 = state_12894__$1;
(statearr_12903_12929[(1)] = (12));

} else {
var statearr_12904_12930 = state_12894__$1;
(statearr_12904_12930[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12895 === (9))){
var state_12894__$1 = state_12894;
var statearr_12905_12931 = state_12894__$1;
(statearr_12905_12931[(2)] = null);

(statearr_12905_12931[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12895 === (5))){
var state_12894__$1 = state_12894;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12906_12932 = state_12894__$1;
(statearr_12906_12932[(1)] = (8));

} else {
var statearr_12907_12933 = state_12894__$1;
(statearr_12907_12933[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12895 === (14))){
var inst_12888 = (state_12894[(2)]);
var state_12894__$1 = state_12894;
var statearr_12908_12934 = state_12894__$1;
(statearr_12908_12934[(2)] = inst_12888);

(statearr_12908_12934[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12895 === (10))){
var inst_12880 = (state_12894[(2)]);
var state_12894__$1 = state_12894;
var statearr_12909_12935 = state_12894__$1;
(statearr_12909_12935[(2)] = inst_12880);

(statearr_12909_12935[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12895 === (8))){
var inst_12877 = cljs.core.async.close_BANG_.call(null,to);
var state_12894__$1 = state_12894;
var statearr_12910_12936 = state_12894__$1;
(statearr_12910_12936[(2)] = inst_12877);

(statearr_12910_12936[(1)] = (10));


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
});})(c__10525__auto___12922))
;
return ((function (switch__10460__auto__,c__10525__auto___12922){
return (function() {
var cljs$core$async$state_machine__10461__auto__ = null;
var cljs$core$async$state_machine__10461__auto____0 = (function (){
var statearr_12914 = [null,null,null,null,null,null,null,null];
(statearr_12914[(0)] = cljs$core$async$state_machine__10461__auto__);

(statearr_12914[(1)] = (1));

return statearr_12914;
});
var cljs$core$async$state_machine__10461__auto____1 = (function (state_12894){
while(true){
var ret_value__10462__auto__ = (function (){try{while(true){
var result__10463__auto__ = switch__10460__auto__.call(null,state_12894);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10463__auto__;
}
break;
}
}catch (e12915){if((e12915 instanceof Object)){
var ex__10464__auto__ = e12915;
var statearr_12916_12937 = state_12894;
(statearr_12916_12937[(5)] = ex__10464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12894);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12915;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12938 = state_12894;
state_12894 = G__12938;
continue;
} else {
return ret_value__10462__auto__;
}
break;
}
});
cljs$core$async$state_machine__10461__auto__ = function(state_12894){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10461__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10461__auto____1.call(this,state_12894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10461__auto____0;
cljs$core$async$state_machine__10461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10461__auto____1;
return cljs$core$async$state_machine__10461__auto__;
})()
;})(switch__10460__auto__,c__10525__auto___12922))
})();
var state__10527__auto__ = (function (){var statearr_12917 = f__10526__auto__.call(null);
(statearr_12917[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10525__auto___12922);

return statearr_12917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10527__auto__);
});})(c__10525__auto___12922))
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
return (function (p__13122){
var vec__13123 = p__13122;
var v = cljs.core.nth.call(null,vec__13123,(0),null);
var p = cljs.core.nth.call(null,vec__13123,(1),null);
var job = vec__13123;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__10525__auto___13305 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10525__auto___13305,res,vec__13123,v,p,job,jobs,results){
return (function (){
var f__10526__auto__ = (function (){var switch__10460__auto__ = ((function (c__10525__auto___13305,res,vec__13123,v,p,job,jobs,results){
return (function (state_13128){
var state_val_13129 = (state_13128[(1)]);
if((state_val_13129 === (1))){
var state_13128__$1 = state_13128;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13128__$1,(2),res,v);
} else {
if((state_val_13129 === (2))){
var inst_13125 = (state_13128[(2)]);
var inst_13126 = cljs.core.async.close_BANG_.call(null,res);
var state_13128__$1 = (function (){var statearr_13130 = state_13128;
(statearr_13130[(7)] = inst_13125);

return statearr_13130;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13128__$1,inst_13126);
} else {
return null;
}
}
});})(c__10525__auto___13305,res,vec__13123,v,p,job,jobs,results))
;
return ((function (switch__10460__auto__,c__10525__auto___13305,res,vec__13123,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10461__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10461__auto____0 = (function (){
var statearr_13134 = [null,null,null,null,null,null,null,null];
(statearr_13134[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10461__auto__);

(statearr_13134[(1)] = (1));

return statearr_13134;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10461__auto____1 = (function (state_13128){
while(true){
var ret_value__10462__auto__ = (function (){try{while(true){
var result__10463__auto__ = switch__10460__auto__.call(null,state_13128);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10463__auto__;
}
break;
}
}catch (e13135){if((e13135 instanceof Object)){
var ex__10464__auto__ = e13135;
var statearr_13136_13306 = state_13128;
(statearr_13136_13306[(5)] = ex__10464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13128);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13135;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13307 = state_13128;
state_13128 = G__13307;
continue;
} else {
return ret_value__10462__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10461__auto__ = function(state_13128){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10461__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10461__auto____1.call(this,state_13128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10461__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10461__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10461__auto__;
})()
;})(switch__10460__auto__,c__10525__auto___13305,res,vec__13123,v,p,job,jobs,results))
})();
var state__10527__auto__ = (function (){var statearr_13137 = f__10526__auto__.call(null);
(statearr_13137[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10525__auto___13305);

return statearr_13137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10527__auto__);
});})(c__10525__auto___13305,res,vec__13123,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__13138){
var vec__13139 = p__13138;
var v = cljs.core.nth.call(null,vec__13139,(0),null);
var p = cljs.core.nth.call(null,vec__13139,(1),null);
var job = vec__13139;
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
var n__9022__auto___13308 = n;
var __13309 = (0);
while(true){
if((__13309 < n__9022__auto___13308)){
var G__13140_13310 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__13140_13310) {
case "compute":
var c__10525__auto___13312 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__13309,c__10525__auto___13312,G__13140_13310,n__9022__auto___13308,jobs,results,process,async){
return (function (){
var f__10526__auto__ = (function (){var switch__10460__auto__ = ((function (__13309,c__10525__auto___13312,G__13140_13310,n__9022__auto___13308,jobs,results,process,async){
return (function (state_13153){
var state_val_13154 = (state_13153[(1)]);
if((state_val_13154 === (1))){
var state_13153__$1 = state_13153;
var statearr_13155_13313 = state_13153__$1;
(statearr_13155_13313[(2)] = null);

(statearr_13155_13313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13154 === (2))){
var state_13153__$1 = state_13153;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13153__$1,(4),jobs);
} else {
if((state_val_13154 === (3))){
var inst_13151 = (state_13153[(2)]);
var state_13153__$1 = state_13153;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13153__$1,inst_13151);
} else {
if((state_val_13154 === (4))){
var inst_13143 = (state_13153[(2)]);
var inst_13144 = process.call(null,inst_13143);
var state_13153__$1 = state_13153;
if(cljs.core.truth_(inst_13144)){
var statearr_13156_13314 = state_13153__$1;
(statearr_13156_13314[(1)] = (5));

} else {
var statearr_13157_13315 = state_13153__$1;
(statearr_13157_13315[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13154 === (5))){
var state_13153__$1 = state_13153;
var statearr_13158_13316 = state_13153__$1;
(statearr_13158_13316[(2)] = null);

(statearr_13158_13316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13154 === (6))){
var state_13153__$1 = state_13153;
var statearr_13159_13317 = state_13153__$1;
(statearr_13159_13317[(2)] = null);

(statearr_13159_13317[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13154 === (7))){
var inst_13149 = (state_13153[(2)]);
var state_13153__$1 = state_13153;
var statearr_13160_13318 = state_13153__$1;
(statearr_13160_13318[(2)] = inst_13149);

(statearr_13160_13318[(1)] = (3));


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
});})(__13309,c__10525__auto___13312,G__13140_13310,n__9022__auto___13308,jobs,results,process,async))
;
return ((function (__13309,switch__10460__auto__,c__10525__auto___13312,G__13140_13310,n__9022__auto___13308,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10461__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10461__auto____0 = (function (){
var statearr_13164 = [null,null,null,null,null,null,null];
(statearr_13164[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10461__auto__);

(statearr_13164[(1)] = (1));

return statearr_13164;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10461__auto____1 = (function (state_13153){
while(true){
var ret_value__10462__auto__ = (function (){try{while(true){
var result__10463__auto__ = switch__10460__auto__.call(null,state_13153);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10463__auto__;
}
break;
}
}catch (e13165){if((e13165 instanceof Object)){
var ex__10464__auto__ = e13165;
var statearr_13166_13319 = state_13153;
(statearr_13166_13319[(5)] = ex__10464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13153);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13165;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13320 = state_13153;
state_13153 = G__13320;
continue;
} else {
return ret_value__10462__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10461__auto__ = function(state_13153){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10461__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10461__auto____1.call(this,state_13153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10461__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10461__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10461__auto__;
})()
;})(__13309,switch__10460__auto__,c__10525__auto___13312,G__13140_13310,n__9022__auto___13308,jobs,results,process,async))
})();
var state__10527__auto__ = (function (){var statearr_13167 = f__10526__auto__.call(null);
(statearr_13167[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10525__auto___13312);

return statearr_13167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10527__auto__);
});})(__13309,c__10525__auto___13312,G__13140_13310,n__9022__auto___13308,jobs,results,process,async))
);


break;
case "async":
var c__10525__auto___13321 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__13309,c__10525__auto___13321,G__13140_13310,n__9022__auto___13308,jobs,results,process,async){
return (function (){
var f__10526__auto__ = (function (){var switch__10460__auto__ = ((function (__13309,c__10525__auto___13321,G__13140_13310,n__9022__auto___13308,jobs,results,process,async){
return (function (state_13180){
var state_val_13181 = (state_13180[(1)]);
if((state_val_13181 === (1))){
var state_13180__$1 = state_13180;
var statearr_13182_13322 = state_13180__$1;
(statearr_13182_13322[(2)] = null);

(statearr_13182_13322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13181 === (2))){
var state_13180__$1 = state_13180;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13180__$1,(4),jobs);
} else {
if((state_val_13181 === (3))){
var inst_13178 = (state_13180[(2)]);
var state_13180__$1 = state_13180;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13180__$1,inst_13178);
} else {
if((state_val_13181 === (4))){
var inst_13170 = (state_13180[(2)]);
var inst_13171 = async.call(null,inst_13170);
var state_13180__$1 = state_13180;
if(cljs.core.truth_(inst_13171)){
var statearr_13183_13323 = state_13180__$1;
(statearr_13183_13323[(1)] = (5));

} else {
var statearr_13184_13324 = state_13180__$1;
(statearr_13184_13324[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13181 === (5))){
var state_13180__$1 = state_13180;
var statearr_13185_13325 = state_13180__$1;
(statearr_13185_13325[(2)] = null);

(statearr_13185_13325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13181 === (6))){
var state_13180__$1 = state_13180;
var statearr_13186_13326 = state_13180__$1;
(statearr_13186_13326[(2)] = null);

(statearr_13186_13326[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13181 === (7))){
var inst_13176 = (state_13180[(2)]);
var state_13180__$1 = state_13180;
var statearr_13187_13327 = state_13180__$1;
(statearr_13187_13327[(2)] = inst_13176);

(statearr_13187_13327[(1)] = (3));


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
});})(__13309,c__10525__auto___13321,G__13140_13310,n__9022__auto___13308,jobs,results,process,async))
;
return ((function (__13309,switch__10460__auto__,c__10525__auto___13321,G__13140_13310,n__9022__auto___13308,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10461__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10461__auto____0 = (function (){
var statearr_13191 = [null,null,null,null,null,null,null];
(statearr_13191[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10461__auto__);

(statearr_13191[(1)] = (1));

return statearr_13191;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10461__auto____1 = (function (state_13180){
while(true){
var ret_value__10462__auto__ = (function (){try{while(true){
var result__10463__auto__ = switch__10460__auto__.call(null,state_13180);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10463__auto__;
}
break;
}
}catch (e13192){if((e13192 instanceof Object)){
var ex__10464__auto__ = e13192;
var statearr_13193_13328 = state_13180;
(statearr_13193_13328[(5)] = ex__10464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13180);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13192;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13329 = state_13180;
state_13180 = G__13329;
continue;
} else {
return ret_value__10462__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10461__auto__ = function(state_13180){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10461__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10461__auto____1.call(this,state_13180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10461__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10461__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10461__auto__;
})()
;})(__13309,switch__10460__auto__,c__10525__auto___13321,G__13140_13310,n__9022__auto___13308,jobs,results,process,async))
})();
var state__10527__auto__ = (function (){var statearr_13194 = f__10526__auto__.call(null);
(statearr_13194[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10525__auto___13321);

return statearr_13194;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10527__auto__);
});})(__13309,c__10525__auto___13321,G__13140_13310,n__9022__auto___13308,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__13330 = (__13309 + (1));
__13309 = G__13330;
continue;
} else {
}
break;
}

var c__10525__auto___13331 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10525__auto___13331,jobs,results,process,async){
return (function (){
var f__10526__auto__ = (function (){var switch__10460__auto__ = ((function (c__10525__auto___13331,jobs,results,process,async){
return (function (state_13216){
var state_val_13217 = (state_13216[(1)]);
if((state_val_13217 === (1))){
var state_13216__$1 = state_13216;
var statearr_13218_13332 = state_13216__$1;
(statearr_13218_13332[(2)] = null);

(statearr_13218_13332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13217 === (2))){
var state_13216__$1 = state_13216;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13216__$1,(4),from);
} else {
if((state_val_13217 === (3))){
var inst_13214 = (state_13216[(2)]);
var state_13216__$1 = state_13216;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13216__$1,inst_13214);
} else {
if((state_val_13217 === (4))){
var inst_13197 = (state_13216[(7)]);
var inst_13197__$1 = (state_13216[(2)]);
var inst_13198 = (inst_13197__$1 == null);
var state_13216__$1 = (function (){var statearr_13219 = state_13216;
(statearr_13219[(7)] = inst_13197__$1);

return statearr_13219;
})();
if(cljs.core.truth_(inst_13198)){
var statearr_13220_13333 = state_13216__$1;
(statearr_13220_13333[(1)] = (5));

} else {
var statearr_13221_13334 = state_13216__$1;
(statearr_13221_13334[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13217 === (5))){
var inst_13200 = cljs.core.async.close_BANG_.call(null,jobs);
var state_13216__$1 = state_13216;
var statearr_13222_13335 = state_13216__$1;
(statearr_13222_13335[(2)] = inst_13200);

(statearr_13222_13335[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13217 === (6))){
var inst_13202 = (state_13216[(8)]);
var inst_13197 = (state_13216[(7)]);
var inst_13202__$1 = cljs.core.async.chan.call(null,(1));
var inst_13203 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13204 = [inst_13197,inst_13202__$1];
var inst_13205 = (new cljs.core.PersistentVector(null,2,(5),inst_13203,inst_13204,null));
var state_13216__$1 = (function (){var statearr_13223 = state_13216;
(statearr_13223[(8)] = inst_13202__$1);

return statearr_13223;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13216__$1,(8),jobs,inst_13205);
} else {
if((state_val_13217 === (7))){
var inst_13212 = (state_13216[(2)]);
var state_13216__$1 = state_13216;
var statearr_13224_13336 = state_13216__$1;
(statearr_13224_13336[(2)] = inst_13212);

(statearr_13224_13336[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13217 === (8))){
var inst_13202 = (state_13216[(8)]);
var inst_13207 = (state_13216[(2)]);
var state_13216__$1 = (function (){var statearr_13225 = state_13216;
(statearr_13225[(9)] = inst_13207);

return statearr_13225;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13216__$1,(9),results,inst_13202);
} else {
if((state_val_13217 === (9))){
var inst_13209 = (state_13216[(2)]);
var state_13216__$1 = (function (){var statearr_13226 = state_13216;
(statearr_13226[(10)] = inst_13209);

return statearr_13226;
})();
var statearr_13227_13337 = state_13216__$1;
(statearr_13227_13337[(2)] = null);

(statearr_13227_13337[(1)] = (2));


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
});})(c__10525__auto___13331,jobs,results,process,async))
;
return ((function (switch__10460__auto__,c__10525__auto___13331,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10461__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10461__auto____0 = (function (){
var statearr_13231 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13231[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10461__auto__);

(statearr_13231[(1)] = (1));

return statearr_13231;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10461__auto____1 = (function (state_13216){
while(true){
var ret_value__10462__auto__ = (function (){try{while(true){
var result__10463__auto__ = switch__10460__auto__.call(null,state_13216);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10463__auto__;
}
break;
}
}catch (e13232){if((e13232 instanceof Object)){
var ex__10464__auto__ = e13232;
var statearr_13233_13338 = state_13216;
(statearr_13233_13338[(5)] = ex__10464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13216);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13232;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13339 = state_13216;
state_13216 = G__13339;
continue;
} else {
return ret_value__10462__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10461__auto__ = function(state_13216){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10461__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10461__auto____1.call(this,state_13216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10461__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10461__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10461__auto__;
})()
;})(switch__10460__auto__,c__10525__auto___13331,jobs,results,process,async))
})();
var state__10527__auto__ = (function (){var statearr_13234 = f__10526__auto__.call(null);
(statearr_13234[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10525__auto___13331);

return statearr_13234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10527__auto__);
});})(c__10525__auto___13331,jobs,results,process,async))
);


var c__10525__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10525__auto__,jobs,results,process,async){
return (function (){
var f__10526__auto__ = (function (){var switch__10460__auto__ = ((function (c__10525__auto__,jobs,results,process,async){
return (function (state_13272){
var state_val_13273 = (state_13272[(1)]);
if((state_val_13273 === (7))){
var inst_13268 = (state_13272[(2)]);
var state_13272__$1 = state_13272;
var statearr_13274_13340 = state_13272__$1;
(statearr_13274_13340[(2)] = inst_13268);

(statearr_13274_13340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13273 === (20))){
var state_13272__$1 = state_13272;
var statearr_13275_13341 = state_13272__$1;
(statearr_13275_13341[(2)] = null);

(statearr_13275_13341[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13273 === (1))){
var state_13272__$1 = state_13272;
var statearr_13276_13342 = state_13272__$1;
(statearr_13276_13342[(2)] = null);

(statearr_13276_13342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13273 === (4))){
var inst_13237 = (state_13272[(7)]);
var inst_13237__$1 = (state_13272[(2)]);
var inst_13238 = (inst_13237__$1 == null);
var state_13272__$1 = (function (){var statearr_13277 = state_13272;
(statearr_13277[(7)] = inst_13237__$1);

return statearr_13277;
})();
if(cljs.core.truth_(inst_13238)){
var statearr_13278_13343 = state_13272__$1;
(statearr_13278_13343[(1)] = (5));

} else {
var statearr_13279_13344 = state_13272__$1;
(statearr_13279_13344[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13273 === (15))){
var inst_13250 = (state_13272[(8)]);
var state_13272__$1 = state_13272;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13272__$1,(18),to,inst_13250);
} else {
if((state_val_13273 === (21))){
var inst_13263 = (state_13272[(2)]);
var state_13272__$1 = state_13272;
var statearr_13280_13345 = state_13272__$1;
(statearr_13280_13345[(2)] = inst_13263);

(statearr_13280_13345[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13273 === (13))){
var inst_13265 = (state_13272[(2)]);
var state_13272__$1 = (function (){var statearr_13281 = state_13272;
(statearr_13281[(9)] = inst_13265);

return statearr_13281;
})();
var statearr_13282_13346 = state_13272__$1;
(statearr_13282_13346[(2)] = null);

(statearr_13282_13346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13273 === (6))){
var inst_13237 = (state_13272[(7)]);
var state_13272__$1 = state_13272;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13272__$1,(11),inst_13237);
} else {
if((state_val_13273 === (17))){
var inst_13258 = (state_13272[(2)]);
var state_13272__$1 = state_13272;
if(cljs.core.truth_(inst_13258)){
var statearr_13283_13347 = state_13272__$1;
(statearr_13283_13347[(1)] = (19));

} else {
var statearr_13284_13348 = state_13272__$1;
(statearr_13284_13348[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13273 === (3))){
var inst_13270 = (state_13272[(2)]);
var state_13272__$1 = state_13272;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13272__$1,inst_13270);
} else {
if((state_val_13273 === (12))){
var inst_13247 = (state_13272[(10)]);
var state_13272__$1 = state_13272;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13272__$1,(14),inst_13247);
} else {
if((state_val_13273 === (2))){
var state_13272__$1 = state_13272;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13272__$1,(4),results);
} else {
if((state_val_13273 === (19))){
var state_13272__$1 = state_13272;
var statearr_13285_13349 = state_13272__$1;
(statearr_13285_13349[(2)] = null);

(statearr_13285_13349[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13273 === (11))){
var inst_13247 = (state_13272[(2)]);
var state_13272__$1 = (function (){var statearr_13286 = state_13272;
(statearr_13286[(10)] = inst_13247);

return statearr_13286;
})();
var statearr_13287_13350 = state_13272__$1;
(statearr_13287_13350[(2)] = null);

(statearr_13287_13350[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13273 === (9))){
var state_13272__$1 = state_13272;
var statearr_13288_13351 = state_13272__$1;
(statearr_13288_13351[(2)] = null);

(statearr_13288_13351[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13273 === (5))){
var state_13272__$1 = state_13272;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13289_13352 = state_13272__$1;
(statearr_13289_13352[(1)] = (8));

} else {
var statearr_13290_13353 = state_13272__$1;
(statearr_13290_13353[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13273 === (14))){
var inst_13252 = (state_13272[(11)]);
var inst_13250 = (state_13272[(8)]);
var inst_13250__$1 = (state_13272[(2)]);
var inst_13251 = (inst_13250__$1 == null);
var inst_13252__$1 = cljs.core.not.call(null,inst_13251);
var state_13272__$1 = (function (){var statearr_13291 = state_13272;
(statearr_13291[(11)] = inst_13252__$1);

(statearr_13291[(8)] = inst_13250__$1);

return statearr_13291;
})();
if(inst_13252__$1){
var statearr_13292_13354 = state_13272__$1;
(statearr_13292_13354[(1)] = (15));

} else {
var statearr_13293_13355 = state_13272__$1;
(statearr_13293_13355[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13273 === (16))){
var inst_13252 = (state_13272[(11)]);
var state_13272__$1 = state_13272;
var statearr_13294_13356 = state_13272__$1;
(statearr_13294_13356[(2)] = inst_13252);

(statearr_13294_13356[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13273 === (10))){
var inst_13244 = (state_13272[(2)]);
var state_13272__$1 = state_13272;
var statearr_13295_13357 = state_13272__$1;
(statearr_13295_13357[(2)] = inst_13244);

(statearr_13295_13357[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13273 === (18))){
var inst_13255 = (state_13272[(2)]);
var state_13272__$1 = state_13272;
var statearr_13296_13358 = state_13272__$1;
(statearr_13296_13358[(2)] = inst_13255);

(statearr_13296_13358[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13273 === (8))){
var inst_13241 = cljs.core.async.close_BANG_.call(null,to);
var state_13272__$1 = state_13272;
var statearr_13297_13359 = state_13272__$1;
(statearr_13297_13359[(2)] = inst_13241);

(statearr_13297_13359[(1)] = (10));


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
});})(c__10525__auto__,jobs,results,process,async))
;
return ((function (switch__10460__auto__,c__10525__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10461__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10461__auto____0 = (function (){
var statearr_13301 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13301[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10461__auto__);

(statearr_13301[(1)] = (1));

return statearr_13301;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10461__auto____1 = (function (state_13272){
while(true){
var ret_value__10462__auto__ = (function (){try{while(true){
var result__10463__auto__ = switch__10460__auto__.call(null,state_13272);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10463__auto__;
}
break;
}
}catch (e13302){if((e13302 instanceof Object)){
var ex__10464__auto__ = e13302;
var statearr_13303_13360 = state_13272;
(statearr_13303_13360[(5)] = ex__10464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13272);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13302;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13361 = state_13272;
state_13272 = G__13361;
continue;
} else {
return ret_value__10462__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10461__auto__ = function(state_13272){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10461__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10461__auto____1.call(this,state_13272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10461__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10461__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10461__auto__;
})()
;})(switch__10460__auto__,c__10525__auto__,jobs,results,process,async))
})();
var state__10527__auto__ = (function (){var statearr_13304 = f__10526__auto__.call(null);
(statearr_13304[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10525__auto__);

return statearr_13304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10527__auto__);
});})(c__10525__auto__,jobs,results,process,async))
);

return c__10525__auto__;
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
var args13362 = [];
var len__9177__auto___13365 = arguments.length;
var i__9178__auto___13366 = (0);
while(true){
if((i__9178__auto___13366 < len__9177__auto___13365)){
args13362.push((arguments[i__9178__auto___13366]));

var G__13367 = (i__9178__auto___13366 + (1));
i__9178__auto___13366 = G__13367;
continue;
} else {
}
break;
}

var G__13364 = args13362.length;
switch (G__13364) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13362.length)].join('')));

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
var args13369 = [];
var len__9177__auto___13372 = arguments.length;
var i__9178__auto___13373 = (0);
while(true){
if((i__9178__auto___13373 < len__9177__auto___13372)){
args13369.push((arguments[i__9178__auto___13373]));

var G__13374 = (i__9178__auto___13373 + (1));
i__9178__auto___13373 = G__13374;
continue;
} else {
}
break;
}

var G__13371 = args13369.length;
switch (G__13371) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13369.length)].join('')));

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
var args13376 = [];
var len__9177__auto___13429 = arguments.length;
var i__9178__auto___13430 = (0);
while(true){
if((i__9178__auto___13430 < len__9177__auto___13429)){
args13376.push((arguments[i__9178__auto___13430]));

var G__13431 = (i__9178__auto___13430 + (1));
i__9178__auto___13430 = G__13431;
continue;
} else {
}
break;
}

var G__13378 = args13376.length;
switch (G__13378) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13376.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__10525__auto___13433 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10525__auto___13433,tc,fc){
return (function (){
var f__10526__auto__ = (function (){var switch__10460__auto__ = ((function (c__10525__auto___13433,tc,fc){
return (function (state_13404){
var state_val_13405 = (state_13404[(1)]);
if((state_val_13405 === (7))){
var inst_13400 = (state_13404[(2)]);
var state_13404__$1 = state_13404;
var statearr_13406_13434 = state_13404__$1;
(statearr_13406_13434[(2)] = inst_13400);

(statearr_13406_13434[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13405 === (1))){
var state_13404__$1 = state_13404;
var statearr_13407_13435 = state_13404__$1;
(statearr_13407_13435[(2)] = null);

(statearr_13407_13435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13405 === (4))){
var inst_13381 = (state_13404[(7)]);
var inst_13381__$1 = (state_13404[(2)]);
var inst_13382 = (inst_13381__$1 == null);
var state_13404__$1 = (function (){var statearr_13408 = state_13404;
(statearr_13408[(7)] = inst_13381__$1);

return statearr_13408;
})();
if(cljs.core.truth_(inst_13382)){
var statearr_13409_13436 = state_13404__$1;
(statearr_13409_13436[(1)] = (5));

} else {
var statearr_13410_13437 = state_13404__$1;
(statearr_13410_13437[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13405 === (13))){
var state_13404__$1 = state_13404;
var statearr_13411_13438 = state_13404__$1;
(statearr_13411_13438[(2)] = null);

(statearr_13411_13438[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13405 === (6))){
var inst_13381 = (state_13404[(7)]);
var inst_13387 = p.call(null,inst_13381);
var state_13404__$1 = state_13404;
if(cljs.core.truth_(inst_13387)){
var statearr_13412_13439 = state_13404__$1;
(statearr_13412_13439[(1)] = (9));

} else {
var statearr_13413_13440 = state_13404__$1;
(statearr_13413_13440[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13405 === (3))){
var inst_13402 = (state_13404[(2)]);
var state_13404__$1 = state_13404;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13404__$1,inst_13402);
} else {
if((state_val_13405 === (12))){
var state_13404__$1 = state_13404;
var statearr_13414_13441 = state_13404__$1;
(statearr_13414_13441[(2)] = null);

(statearr_13414_13441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13405 === (2))){
var state_13404__$1 = state_13404;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13404__$1,(4),ch);
} else {
if((state_val_13405 === (11))){
var inst_13381 = (state_13404[(7)]);
var inst_13391 = (state_13404[(2)]);
var state_13404__$1 = state_13404;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13404__$1,(8),inst_13391,inst_13381);
} else {
if((state_val_13405 === (9))){
var state_13404__$1 = state_13404;
var statearr_13415_13442 = state_13404__$1;
(statearr_13415_13442[(2)] = tc);

(statearr_13415_13442[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13405 === (5))){
var inst_13384 = cljs.core.async.close_BANG_.call(null,tc);
var inst_13385 = cljs.core.async.close_BANG_.call(null,fc);
var state_13404__$1 = (function (){var statearr_13416 = state_13404;
(statearr_13416[(8)] = inst_13384);

return statearr_13416;
})();
var statearr_13417_13443 = state_13404__$1;
(statearr_13417_13443[(2)] = inst_13385);

(statearr_13417_13443[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13405 === (14))){
var inst_13398 = (state_13404[(2)]);
var state_13404__$1 = state_13404;
var statearr_13418_13444 = state_13404__$1;
(statearr_13418_13444[(2)] = inst_13398);

(statearr_13418_13444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13405 === (10))){
var state_13404__$1 = state_13404;
var statearr_13419_13445 = state_13404__$1;
(statearr_13419_13445[(2)] = fc);

(statearr_13419_13445[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13405 === (8))){
var inst_13393 = (state_13404[(2)]);
var state_13404__$1 = state_13404;
if(cljs.core.truth_(inst_13393)){
var statearr_13420_13446 = state_13404__$1;
(statearr_13420_13446[(1)] = (12));

} else {
var statearr_13421_13447 = state_13404__$1;
(statearr_13421_13447[(1)] = (13));

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
});})(c__10525__auto___13433,tc,fc))
;
return ((function (switch__10460__auto__,c__10525__auto___13433,tc,fc){
return (function() {
var cljs$core$async$state_machine__10461__auto__ = null;
var cljs$core$async$state_machine__10461__auto____0 = (function (){
var statearr_13425 = [null,null,null,null,null,null,null,null,null];
(statearr_13425[(0)] = cljs$core$async$state_machine__10461__auto__);

(statearr_13425[(1)] = (1));

return statearr_13425;
});
var cljs$core$async$state_machine__10461__auto____1 = (function (state_13404){
while(true){
var ret_value__10462__auto__ = (function (){try{while(true){
var result__10463__auto__ = switch__10460__auto__.call(null,state_13404);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10463__auto__;
}
break;
}
}catch (e13426){if((e13426 instanceof Object)){
var ex__10464__auto__ = e13426;
var statearr_13427_13448 = state_13404;
(statearr_13427_13448[(5)] = ex__10464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13404);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13426;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13449 = state_13404;
state_13404 = G__13449;
continue;
} else {
return ret_value__10462__auto__;
}
break;
}
});
cljs$core$async$state_machine__10461__auto__ = function(state_13404){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10461__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10461__auto____1.call(this,state_13404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10461__auto____0;
cljs$core$async$state_machine__10461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10461__auto____1;
return cljs$core$async$state_machine__10461__auto__;
})()
;})(switch__10460__auto__,c__10525__auto___13433,tc,fc))
})();
var state__10527__auto__ = (function (){var statearr_13428 = f__10526__auto__.call(null);
(statearr_13428[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10525__auto___13433);

return statearr_13428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10527__auto__);
});})(c__10525__auto___13433,tc,fc))
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
var c__10525__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10525__auto__){
return (function (){
var f__10526__auto__ = (function (){var switch__10460__auto__ = ((function (c__10525__auto__){
return (function (state_13513){
var state_val_13514 = (state_13513[(1)]);
if((state_val_13514 === (7))){
var inst_13509 = (state_13513[(2)]);
var state_13513__$1 = state_13513;
var statearr_13515_13536 = state_13513__$1;
(statearr_13515_13536[(2)] = inst_13509);

(statearr_13515_13536[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13514 === (1))){
var inst_13493 = init;
var state_13513__$1 = (function (){var statearr_13516 = state_13513;
(statearr_13516[(7)] = inst_13493);

return statearr_13516;
})();
var statearr_13517_13537 = state_13513__$1;
(statearr_13517_13537[(2)] = null);

(statearr_13517_13537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13514 === (4))){
var inst_13496 = (state_13513[(8)]);
var inst_13496__$1 = (state_13513[(2)]);
var inst_13497 = (inst_13496__$1 == null);
var state_13513__$1 = (function (){var statearr_13518 = state_13513;
(statearr_13518[(8)] = inst_13496__$1);

return statearr_13518;
})();
if(cljs.core.truth_(inst_13497)){
var statearr_13519_13538 = state_13513__$1;
(statearr_13519_13538[(1)] = (5));

} else {
var statearr_13520_13539 = state_13513__$1;
(statearr_13520_13539[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13514 === (6))){
var inst_13493 = (state_13513[(7)]);
var inst_13500 = (state_13513[(9)]);
var inst_13496 = (state_13513[(8)]);
var inst_13500__$1 = f.call(null,inst_13493,inst_13496);
var inst_13501 = cljs.core.reduced_QMARK_.call(null,inst_13500__$1);
var state_13513__$1 = (function (){var statearr_13521 = state_13513;
(statearr_13521[(9)] = inst_13500__$1);

return statearr_13521;
})();
if(inst_13501){
var statearr_13522_13540 = state_13513__$1;
(statearr_13522_13540[(1)] = (8));

} else {
var statearr_13523_13541 = state_13513__$1;
(statearr_13523_13541[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13514 === (3))){
var inst_13511 = (state_13513[(2)]);
var state_13513__$1 = state_13513;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13513__$1,inst_13511);
} else {
if((state_val_13514 === (2))){
var state_13513__$1 = state_13513;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13513__$1,(4),ch);
} else {
if((state_val_13514 === (9))){
var inst_13500 = (state_13513[(9)]);
var inst_13493 = inst_13500;
var state_13513__$1 = (function (){var statearr_13524 = state_13513;
(statearr_13524[(7)] = inst_13493);

return statearr_13524;
})();
var statearr_13525_13542 = state_13513__$1;
(statearr_13525_13542[(2)] = null);

(statearr_13525_13542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13514 === (5))){
var inst_13493 = (state_13513[(7)]);
var state_13513__$1 = state_13513;
var statearr_13526_13543 = state_13513__$1;
(statearr_13526_13543[(2)] = inst_13493);

(statearr_13526_13543[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13514 === (10))){
var inst_13507 = (state_13513[(2)]);
var state_13513__$1 = state_13513;
var statearr_13527_13544 = state_13513__$1;
(statearr_13527_13544[(2)] = inst_13507);

(statearr_13527_13544[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13514 === (8))){
var inst_13500 = (state_13513[(9)]);
var inst_13503 = cljs.core.deref.call(null,inst_13500);
var state_13513__$1 = state_13513;
var statearr_13528_13545 = state_13513__$1;
(statearr_13528_13545[(2)] = inst_13503);

(statearr_13528_13545[(1)] = (10));


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
});})(c__10525__auto__))
;
return ((function (switch__10460__auto__,c__10525__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__10461__auto__ = null;
var cljs$core$async$reduce_$_state_machine__10461__auto____0 = (function (){
var statearr_13532 = [null,null,null,null,null,null,null,null,null,null];
(statearr_13532[(0)] = cljs$core$async$reduce_$_state_machine__10461__auto__);

(statearr_13532[(1)] = (1));

return statearr_13532;
});
var cljs$core$async$reduce_$_state_machine__10461__auto____1 = (function (state_13513){
while(true){
var ret_value__10462__auto__ = (function (){try{while(true){
var result__10463__auto__ = switch__10460__auto__.call(null,state_13513);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10463__auto__;
}
break;
}
}catch (e13533){if((e13533 instanceof Object)){
var ex__10464__auto__ = e13533;
var statearr_13534_13546 = state_13513;
(statearr_13534_13546[(5)] = ex__10464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13513);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13533;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13547 = state_13513;
state_13513 = G__13547;
continue;
} else {
return ret_value__10462__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10461__auto__ = function(state_13513){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10461__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10461__auto____1.call(this,state_13513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10461__auto____0;
cljs$core$async$reduce_$_state_machine__10461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10461__auto____1;
return cljs$core$async$reduce_$_state_machine__10461__auto__;
})()
;})(switch__10460__auto__,c__10525__auto__))
})();
var state__10527__auto__ = (function (){var statearr_13535 = f__10526__auto__.call(null);
(statearr_13535[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10525__auto__);

return statearr_13535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10527__auto__);
});})(c__10525__auto__))
);

return c__10525__auto__;
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
var args13548 = [];
var len__9177__auto___13600 = arguments.length;
var i__9178__auto___13601 = (0);
while(true){
if((i__9178__auto___13601 < len__9177__auto___13600)){
args13548.push((arguments[i__9178__auto___13601]));

var G__13602 = (i__9178__auto___13601 + (1));
i__9178__auto___13601 = G__13602;
continue;
} else {
}
break;
}

var G__13550 = args13548.length;
switch (G__13550) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13548.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__10525__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10525__auto__){
return (function (){
var f__10526__auto__ = (function (){var switch__10460__auto__ = ((function (c__10525__auto__){
return (function (state_13575){
var state_val_13576 = (state_13575[(1)]);
if((state_val_13576 === (7))){
var inst_13557 = (state_13575[(2)]);
var state_13575__$1 = state_13575;
var statearr_13577_13604 = state_13575__$1;
(statearr_13577_13604[(2)] = inst_13557);

(statearr_13577_13604[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13576 === (1))){
var inst_13551 = cljs.core.seq.call(null,coll);
var inst_13552 = inst_13551;
var state_13575__$1 = (function (){var statearr_13578 = state_13575;
(statearr_13578[(7)] = inst_13552);

return statearr_13578;
})();
var statearr_13579_13605 = state_13575__$1;
(statearr_13579_13605[(2)] = null);

(statearr_13579_13605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13576 === (4))){
var inst_13552 = (state_13575[(7)]);
var inst_13555 = cljs.core.first.call(null,inst_13552);
var state_13575__$1 = state_13575;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13575__$1,(7),ch,inst_13555);
} else {
if((state_val_13576 === (13))){
var inst_13569 = (state_13575[(2)]);
var state_13575__$1 = state_13575;
var statearr_13580_13606 = state_13575__$1;
(statearr_13580_13606[(2)] = inst_13569);

(statearr_13580_13606[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13576 === (6))){
var inst_13560 = (state_13575[(2)]);
var state_13575__$1 = state_13575;
if(cljs.core.truth_(inst_13560)){
var statearr_13581_13607 = state_13575__$1;
(statearr_13581_13607[(1)] = (8));

} else {
var statearr_13582_13608 = state_13575__$1;
(statearr_13582_13608[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13576 === (3))){
var inst_13573 = (state_13575[(2)]);
var state_13575__$1 = state_13575;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13575__$1,inst_13573);
} else {
if((state_val_13576 === (12))){
var state_13575__$1 = state_13575;
var statearr_13583_13609 = state_13575__$1;
(statearr_13583_13609[(2)] = null);

(statearr_13583_13609[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13576 === (2))){
var inst_13552 = (state_13575[(7)]);
var state_13575__$1 = state_13575;
if(cljs.core.truth_(inst_13552)){
var statearr_13584_13610 = state_13575__$1;
(statearr_13584_13610[(1)] = (4));

} else {
var statearr_13585_13611 = state_13575__$1;
(statearr_13585_13611[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13576 === (11))){
var inst_13566 = cljs.core.async.close_BANG_.call(null,ch);
var state_13575__$1 = state_13575;
var statearr_13586_13612 = state_13575__$1;
(statearr_13586_13612[(2)] = inst_13566);

(statearr_13586_13612[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13576 === (9))){
var state_13575__$1 = state_13575;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13587_13613 = state_13575__$1;
(statearr_13587_13613[(1)] = (11));

} else {
var statearr_13588_13614 = state_13575__$1;
(statearr_13588_13614[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13576 === (5))){
var inst_13552 = (state_13575[(7)]);
var state_13575__$1 = state_13575;
var statearr_13589_13615 = state_13575__$1;
(statearr_13589_13615[(2)] = inst_13552);

(statearr_13589_13615[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13576 === (10))){
var inst_13571 = (state_13575[(2)]);
var state_13575__$1 = state_13575;
var statearr_13590_13616 = state_13575__$1;
(statearr_13590_13616[(2)] = inst_13571);

(statearr_13590_13616[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13576 === (8))){
var inst_13552 = (state_13575[(7)]);
var inst_13562 = cljs.core.next.call(null,inst_13552);
var inst_13552__$1 = inst_13562;
var state_13575__$1 = (function (){var statearr_13591 = state_13575;
(statearr_13591[(7)] = inst_13552__$1);

return statearr_13591;
})();
var statearr_13592_13617 = state_13575__$1;
(statearr_13592_13617[(2)] = null);

(statearr_13592_13617[(1)] = (2));


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
});})(c__10525__auto__))
;
return ((function (switch__10460__auto__,c__10525__auto__){
return (function() {
var cljs$core$async$state_machine__10461__auto__ = null;
var cljs$core$async$state_machine__10461__auto____0 = (function (){
var statearr_13596 = [null,null,null,null,null,null,null,null];
(statearr_13596[(0)] = cljs$core$async$state_machine__10461__auto__);

(statearr_13596[(1)] = (1));

return statearr_13596;
});
var cljs$core$async$state_machine__10461__auto____1 = (function (state_13575){
while(true){
var ret_value__10462__auto__ = (function (){try{while(true){
var result__10463__auto__ = switch__10460__auto__.call(null,state_13575);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10463__auto__;
}
break;
}
}catch (e13597){if((e13597 instanceof Object)){
var ex__10464__auto__ = e13597;
var statearr_13598_13618 = state_13575;
(statearr_13598_13618[(5)] = ex__10464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13575);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13597;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13619 = state_13575;
state_13575 = G__13619;
continue;
} else {
return ret_value__10462__auto__;
}
break;
}
});
cljs$core$async$state_machine__10461__auto__ = function(state_13575){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10461__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10461__auto____1.call(this,state_13575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10461__auto____0;
cljs$core$async$state_machine__10461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10461__auto____1;
return cljs$core$async$state_machine__10461__auto__;
})()
;})(switch__10460__auto__,c__10525__auto__))
})();
var state__10527__auto__ = (function (){var statearr_13599 = f__10526__auto__.call(null);
(statearr_13599[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10525__auto__);

return statearr_13599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10527__auto__);
});})(c__10525__auto__))
);

return c__10525__auto__;
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
var x__8774__auto__ = (((_ == null))?null:_);
var m__8775__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__8774__auto__)]);
if(!((m__8775__auto__ == null))){
return m__8775__auto__.call(null,_);
} else {
var m__8775__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__8775__auto____$1 == null))){
return m__8775__auto____$1.call(null,_);
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
var x__8774__auto__ = (((m == null))?null:m);
var m__8775__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__8774__auto__)]);
if(!((m__8775__auto__ == null))){
return m__8775__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__8775__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__8775__auto____$1 == null))){
return m__8775__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__8774__auto__ = (((m == null))?null:m);
var m__8775__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__8774__auto__)]);
if(!((m__8775__auto__ == null))){
return m__8775__auto__.call(null,m,ch);
} else {
var m__8775__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__8775__auto____$1 == null))){
return m__8775__auto____$1.call(null,m,ch);
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
var x__8774__auto__ = (((m == null))?null:m);
var m__8775__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__8774__auto__)]);
if(!((m__8775__auto__ == null))){
return m__8775__auto__.call(null,m);
} else {
var m__8775__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__8775__auto____$1 == null))){
return m__8775__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async13841 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13841 = (function (mult,ch,cs,meta13842){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta13842 = meta13842;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13841.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13843,meta13842__$1){
var self__ = this;
var _13843__$1 = this;
return (new cljs.core.async.t_cljs$core$async13841(self__.mult,self__.ch,self__.cs,meta13842__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async13841.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13843){
var self__ = this;
var _13843__$1 = this;
return self__.meta13842;
});})(cs))
;

cljs.core.async.t_cljs$core$async13841.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async13841.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async13841.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async13841.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async13841.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async13841.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async13841.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta13842","meta13842",844829707,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async13841.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13841.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13841";

cljs.core.async.t_cljs$core$async13841.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8717__auto__,writer__8718__auto__,opt__8719__auto__){
return cljs.core._write.call(null,writer__8718__auto__,"cljs.core.async/t_cljs$core$async13841");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async13841 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async13841(mult__$1,ch__$1,cs__$1,meta13842){
return (new cljs.core.async.t_cljs$core$async13841(mult__$1,ch__$1,cs__$1,meta13842));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async13841(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__10525__auto___14062 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10525__auto___14062,cs,m,dchan,dctr,done){
return (function (){
var f__10526__auto__ = (function (){var switch__10460__auto__ = ((function (c__10525__auto___14062,cs,m,dchan,dctr,done){
return (function (state_13974){
var state_val_13975 = (state_13974[(1)]);
if((state_val_13975 === (7))){
var inst_13970 = (state_13974[(2)]);
var state_13974__$1 = state_13974;
var statearr_13976_14063 = state_13974__$1;
(statearr_13976_14063[(2)] = inst_13970);

(statearr_13976_14063[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13975 === (20))){
var inst_13875 = (state_13974[(7)]);
var inst_13885 = cljs.core.first.call(null,inst_13875);
var inst_13886 = cljs.core.nth.call(null,inst_13885,(0),null);
var inst_13887 = cljs.core.nth.call(null,inst_13885,(1),null);
var state_13974__$1 = (function (){var statearr_13977 = state_13974;
(statearr_13977[(8)] = inst_13886);

return statearr_13977;
})();
if(cljs.core.truth_(inst_13887)){
var statearr_13978_14064 = state_13974__$1;
(statearr_13978_14064[(1)] = (22));

} else {
var statearr_13979_14065 = state_13974__$1;
(statearr_13979_14065[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13975 === (27))){
var inst_13922 = (state_13974[(9)]);
var inst_13917 = (state_13974[(10)]);
var inst_13915 = (state_13974[(11)]);
var inst_13846 = (state_13974[(12)]);
var inst_13922__$1 = cljs.core._nth.call(null,inst_13915,inst_13917);
var inst_13923 = cljs.core.async.put_BANG_.call(null,inst_13922__$1,inst_13846,done);
var state_13974__$1 = (function (){var statearr_13980 = state_13974;
(statearr_13980[(9)] = inst_13922__$1);

return statearr_13980;
})();
if(cljs.core.truth_(inst_13923)){
var statearr_13981_14066 = state_13974__$1;
(statearr_13981_14066[(1)] = (30));

} else {
var statearr_13982_14067 = state_13974__$1;
(statearr_13982_14067[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13975 === (1))){
var state_13974__$1 = state_13974;
var statearr_13983_14068 = state_13974__$1;
(statearr_13983_14068[(2)] = null);

(statearr_13983_14068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13975 === (24))){
var inst_13875 = (state_13974[(7)]);
var inst_13892 = (state_13974[(2)]);
var inst_13893 = cljs.core.next.call(null,inst_13875);
var inst_13855 = inst_13893;
var inst_13856 = null;
var inst_13857 = (0);
var inst_13858 = (0);
var state_13974__$1 = (function (){var statearr_13984 = state_13974;
(statearr_13984[(13)] = inst_13857);

(statearr_13984[(14)] = inst_13855);

(statearr_13984[(15)] = inst_13892);

(statearr_13984[(16)] = inst_13856);

(statearr_13984[(17)] = inst_13858);

return statearr_13984;
})();
var statearr_13985_14069 = state_13974__$1;
(statearr_13985_14069[(2)] = null);

(statearr_13985_14069[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13975 === (39))){
var state_13974__$1 = state_13974;
var statearr_13989_14070 = state_13974__$1;
(statearr_13989_14070[(2)] = null);

(statearr_13989_14070[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13975 === (4))){
var inst_13846 = (state_13974[(12)]);
var inst_13846__$1 = (state_13974[(2)]);
var inst_13847 = (inst_13846__$1 == null);
var state_13974__$1 = (function (){var statearr_13990 = state_13974;
(statearr_13990[(12)] = inst_13846__$1);

return statearr_13990;
})();
if(cljs.core.truth_(inst_13847)){
var statearr_13991_14071 = state_13974__$1;
(statearr_13991_14071[(1)] = (5));

} else {
var statearr_13992_14072 = state_13974__$1;
(statearr_13992_14072[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13975 === (15))){
var inst_13857 = (state_13974[(13)]);
var inst_13855 = (state_13974[(14)]);
var inst_13856 = (state_13974[(16)]);
var inst_13858 = (state_13974[(17)]);
var inst_13871 = (state_13974[(2)]);
var inst_13872 = (inst_13858 + (1));
var tmp13986 = inst_13857;
var tmp13987 = inst_13855;
var tmp13988 = inst_13856;
var inst_13855__$1 = tmp13987;
var inst_13856__$1 = tmp13988;
var inst_13857__$1 = tmp13986;
var inst_13858__$1 = inst_13872;
var state_13974__$1 = (function (){var statearr_13993 = state_13974;
(statearr_13993[(13)] = inst_13857__$1);

(statearr_13993[(14)] = inst_13855__$1);

(statearr_13993[(16)] = inst_13856__$1);

(statearr_13993[(18)] = inst_13871);

(statearr_13993[(17)] = inst_13858__$1);

return statearr_13993;
})();
var statearr_13994_14073 = state_13974__$1;
(statearr_13994_14073[(2)] = null);

(statearr_13994_14073[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13975 === (21))){
var inst_13896 = (state_13974[(2)]);
var state_13974__$1 = state_13974;
var statearr_13998_14074 = state_13974__$1;
(statearr_13998_14074[(2)] = inst_13896);

(statearr_13998_14074[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13975 === (31))){
var inst_13922 = (state_13974[(9)]);
var inst_13926 = done.call(null,null);
var inst_13927 = cljs.core.async.untap_STAR_.call(null,m,inst_13922);
var state_13974__$1 = (function (){var statearr_13999 = state_13974;
(statearr_13999[(19)] = inst_13926);

return statearr_13999;
})();
var statearr_14000_14075 = state_13974__$1;
(statearr_14000_14075[(2)] = inst_13927);

(statearr_14000_14075[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13975 === (32))){
var inst_13917 = (state_13974[(10)]);
var inst_13915 = (state_13974[(11)]);
var inst_13914 = (state_13974[(20)]);
var inst_13916 = (state_13974[(21)]);
var inst_13929 = (state_13974[(2)]);
var inst_13930 = (inst_13917 + (1));
var tmp13995 = inst_13915;
var tmp13996 = inst_13914;
var tmp13997 = inst_13916;
var inst_13914__$1 = tmp13996;
var inst_13915__$1 = tmp13995;
var inst_13916__$1 = tmp13997;
var inst_13917__$1 = inst_13930;
var state_13974__$1 = (function (){var statearr_14001 = state_13974;
(statearr_14001[(10)] = inst_13917__$1);

(statearr_14001[(11)] = inst_13915__$1);

(statearr_14001[(20)] = inst_13914__$1);

(statearr_14001[(22)] = inst_13929);

(statearr_14001[(21)] = inst_13916__$1);

return statearr_14001;
})();
var statearr_14002_14076 = state_13974__$1;
(statearr_14002_14076[(2)] = null);

(statearr_14002_14076[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13975 === (40))){
var inst_13942 = (state_13974[(23)]);
var inst_13946 = done.call(null,null);
var inst_13947 = cljs.core.async.untap_STAR_.call(null,m,inst_13942);
var state_13974__$1 = (function (){var statearr_14003 = state_13974;
(statearr_14003[(24)] = inst_13946);

return statearr_14003;
})();
var statearr_14004_14077 = state_13974__$1;
(statearr_14004_14077[(2)] = inst_13947);

(statearr_14004_14077[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13975 === (33))){
var inst_13933 = (state_13974[(25)]);
var inst_13935 = cljs.core.chunked_seq_QMARK_.call(null,inst_13933);
var state_13974__$1 = state_13974;
if(inst_13935){
var statearr_14005_14078 = state_13974__$1;
(statearr_14005_14078[(1)] = (36));

} else {
var statearr_14006_14079 = state_13974__$1;
(statearr_14006_14079[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13975 === (13))){
var inst_13865 = (state_13974[(26)]);
var inst_13868 = cljs.core.async.close_BANG_.call(null,inst_13865);
var state_13974__$1 = state_13974;
var statearr_14007_14080 = state_13974__$1;
(statearr_14007_14080[(2)] = inst_13868);

(statearr_14007_14080[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13975 === (22))){
var inst_13886 = (state_13974[(8)]);
var inst_13889 = cljs.core.async.close_BANG_.call(null,inst_13886);
var state_13974__$1 = state_13974;
var statearr_14008_14081 = state_13974__$1;
(statearr_14008_14081[(2)] = inst_13889);

(statearr_14008_14081[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13975 === (36))){
var inst_13933 = (state_13974[(25)]);
var inst_13937 = cljs.core.chunk_first.call(null,inst_13933);
var inst_13938 = cljs.core.chunk_rest.call(null,inst_13933);
var inst_13939 = cljs.core.count.call(null,inst_13937);
var inst_13914 = inst_13938;
var inst_13915 = inst_13937;
var inst_13916 = inst_13939;
var inst_13917 = (0);
var state_13974__$1 = (function (){var statearr_14009 = state_13974;
(statearr_14009[(10)] = inst_13917);

(statearr_14009[(11)] = inst_13915);

(statearr_14009[(20)] = inst_13914);

(statearr_14009[(21)] = inst_13916);

return statearr_14009;
})();
var statearr_14010_14082 = state_13974__$1;
(statearr_14010_14082[(2)] = null);

(statearr_14010_14082[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13975 === (41))){
var inst_13933 = (state_13974[(25)]);
var inst_13949 = (state_13974[(2)]);
var inst_13950 = cljs.core.next.call(null,inst_13933);
var inst_13914 = inst_13950;
var inst_13915 = null;
var inst_13916 = (0);
var inst_13917 = (0);
var state_13974__$1 = (function (){var statearr_14011 = state_13974;
(statearr_14011[(10)] = inst_13917);

(statearr_14011[(27)] = inst_13949);

(statearr_14011[(11)] = inst_13915);

(statearr_14011[(20)] = inst_13914);

(statearr_14011[(21)] = inst_13916);

return statearr_14011;
})();
var statearr_14012_14083 = state_13974__$1;
(statearr_14012_14083[(2)] = null);

(statearr_14012_14083[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13975 === (43))){
var state_13974__$1 = state_13974;
var statearr_14013_14084 = state_13974__$1;
(statearr_14013_14084[(2)] = null);

(statearr_14013_14084[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13975 === (29))){
var inst_13958 = (state_13974[(2)]);
var state_13974__$1 = state_13974;
var statearr_14014_14085 = state_13974__$1;
(statearr_14014_14085[(2)] = inst_13958);

(statearr_14014_14085[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13975 === (44))){
var inst_13967 = (state_13974[(2)]);
var state_13974__$1 = (function (){var statearr_14015 = state_13974;
(statearr_14015[(28)] = inst_13967);

return statearr_14015;
})();
var statearr_14016_14086 = state_13974__$1;
(statearr_14016_14086[(2)] = null);

(statearr_14016_14086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13975 === (6))){
var inst_13906 = (state_13974[(29)]);
var inst_13905 = cljs.core.deref.call(null,cs);
var inst_13906__$1 = cljs.core.keys.call(null,inst_13905);
var inst_13907 = cljs.core.count.call(null,inst_13906__$1);
var inst_13908 = cljs.core.reset_BANG_.call(null,dctr,inst_13907);
var inst_13913 = cljs.core.seq.call(null,inst_13906__$1);
var inst_13914 = inst_13913;
var inst_13915 = null;
var inst_13916 = (0);
var inst_13917 = (0);
var state_13974__$1 = (function (){var statearr_14017 = state_13974;
(statearr_14017[(29)] = inst_13906__$1);

(statearr_14017[(10)] = inst_13917);

(statearr_14017[(11)] = inst_13915);

(statearr_14017[(20)] = inst_13914);

(statearr_14017[(30)] = inst_13908);

(statearr_14017[(21)] = inst_13916);

return statearr_14017;
})();
var statearr_14018_14087 = state_13974__$1;
(statearr_14018_14087[(2)] = null);

(statearr_14018_14087[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13975 === (28))){
var inst_13914 = (state_13974[(20)]);
var inst_13933 = (state_13974[(25)]);
var inst_13933__$1 = cljs.core.seq.call(null,inst_13914);
var state_13974__$1 = (function (){var statearr_14019 = state_13974;
(statearr_14019[(25)] = inst_13933__$1);

return statearr_14019;
})();
if(inst_13933__$1){
var statearr_14020_14088 = state_13974__$1;
(statearr_14020_14088[(1)] = (33));

} else {
var statearr_14021_14089 = state_13974__$1;
(statearr_14021_14089[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13975 === (25))){
var inst_13917 = (state_13974[(10)]);
var inst_13916 = (state_13974[(21)]);
var inst_13919 = (inst_13917 < inst_13916);
var inst_13920 = inst_13919;
var state_13974__$1 = state_13974;
if(cljs.core.truth_(inst_13920)){
var statearr_14022_14090 = state_13974__$1;
(statearr_14022_14090[(1)] = (27));

} else {
var statearr_14023_14091 = state_13974__$1;
(statearr_14023_14091[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13975 === (34))){
var state_13974__$1 = state_13974;
var statearr_14024_14092 = state_13974__$1;
(statearr_14024_14092[(2)] = null);

(statearr_14024_14092[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13975 === (17))){
var state_13974__$1 = state_13974;
var statearr_14025_14093 = state_13974__$1;
(statearr_14025_14093[(2)] = null);

(statearr_14025_14093[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13975 === (3))){
var inst_13972 = (state_13974[(2)]);
var state_13974__$1 = state_13974;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13974__$1,inst_13972);
} else {
if((state_val_13975 === (12))){
var inst_13901 = (state_13974[(2)]);
var state_13974__$1 = state_13974;
var statearr_14026_14094 = state_13974__$1;
(statearr_14026_14094[(2)] = inst_13901);

(statearr_14026_14094[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13975 === (2))){
var state_13974__$1 = state_13974;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13974__$1,(4),ch);
} else {
if((state_val_13975 === (23))){
var state_13974__$1 = state_13974;
var statearr_14027_14095 = state_13974__$1;
(statearr_14027_14095[(2)] = null);

(statearr_14027_14095[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13975 === (35))){
var inst_13956 = (state_13974[(2)]);
var state_13974__$1 = state_13974;
var statearr_14028_14096 = state_13974__$1;
(statearr_14028_14096[(2)] = inst_13956);

(statearr_14028_14096[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13975 === (19))){
var inst_13875 = (state_13974[(7)]);
var inst_13879 = cljs.core.chunk_first.call(null,inst_13875);
var inst_13880 = cljs.core.chunk_rest.call(null,inst_13875);
var inst_13881 = cljs.core.count.call(null,inst_13879);
var inst_13855 = inst_13880;
var inst_13856 = inst_13879;
var inst_13857 = inst_13881;
var inst_13858 = (0);
var state_13974__$1 = (function (){var statearr_14029 = state_13974;
(statearr_14029[(13)] = inst_13857);

(statearr_14029[(14)] = inst_13855);

(statearr_14029[(16)] = inst_13856);

(statearr_14029[(17)] = inst_13858);

return statearr_14029;
})();
var statearr_14030_14097 = state_13974__$1;
(statearr_14030_14097[(2)] = null);

(statearr_14030_14097[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13975 === (11))){
var inst_13855 = (state_13974[(14)]);
var inst_13875 = (state_13974[(7)]);
var inst_13875__$1 = cljs.core.seq.call(null,inst_13855);
var state_13974__$1 = (function (){var statearr_14031 = state_13974;
(statearr_14031[(7)] = inst_13875__$1);

return statearr_14031;
})();
if(inst_13875__$1){
var statearr_14032_14098 = state_13974__$1;
(statearr_14032_14098[(1)] = (16));

} else {
var statearr_14033_14099 = state_13974__$1;
(statearr_14033_14099[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13975 === (9))){
var inst_13903 = (state_13974[(2)]);
var state_13974__$1 = state_13974;
var statearr_14034_14100 = state_13974__$1;
(statearr_14034_14100[(2)] = inst_13903);

(statearr_14034_14100[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13975 === (5))){
var inst_13853 = cljs.core.deref.call(null,cs);
var inst_13854 = cljs.core.seq.call(null,inst_13853);
var inst_13855 = inst_13854;
var inst_13856 = null;
var inst_13857 = (0);
var inst_13858 = (0);
var state_13974__$1 = (function (){var statearr_14035 = state_13974;
(statearr_14035[(13)] = inst_13857);

(statearr_14035[(14)] = inst_13855);

(statearr_14035[(16)] = inst_13856);

(statearr_14035[(17)] = inst_13858);

return statearr_14035;
})();
var statearr_14036_14101 = state_13974__$1;
(statearr_14036_14101[(2)] = null);

(statearr_14036_14101[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13975 === (14))){
var state_13974__$1 = state_13974;
var statearr_14037_14102 = state_13974__$1;
(statearr_14037_14102[(2)] = null);

(statearr_14037_14102[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13975 === (45))){
var inst_13964 = (state_13974[(2)]);
var state_13974__$1 = state_13974;
var statearr_14038_14103 = state_13974__$1;
(statearr_14038_14103[(2)] = inst_13964);

(statearr_14038_14103[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13975 === (26))){
var inst_13906 = (state_13974[(29)]);
var inst_13960 = (state_13974[(2)]);
var inst_13961 = cljs.core.seq.call(null,inst_13906);
var state_13974__$1 = (function (){var statearr_14039 = state_13974;
(statearr_14039[(31)] = inst_13960);

return statearr_14039;
})();
if(inst_13961){
var statearr_14040_14104 = state_13974__$1;
(statearr_14040_14104[(1)] = (42));

} else {
var statearr_14041_14105 = state_13974__$1;
(statearr_14041_14105[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13975 === (16))){
var inst_13875 = (state_13974[(7)]);
var inst_13877 = cljs.core.chunked_seq_QMARK_.call(null,inst_13875);
var state_13974__$1 = state_13974;
if(inst_13877){
var statearr_14042_14106 = state_13974__$1;
(statearr_14042_14106[(1)] = (19));

} else {
var statearr_14043_14107 = state_13974__$1;
(statearr_14043_14107[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13975 === (38))){
var inst_13953 = (state_13974[(2)]);
var state_13974__$1 = state_13974;
var statearr_14044_14108 = state_13974__$1;
(statearr_14044_14108[(2)] = inst_13953);

(statearr_14044_14108[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13975 === (30))){
var state_13974__$1 = state_13974;
var statearr_14045_14109 = state_13974__$1;
(statearr_14045_14109[(2)] = null);

(statearr_14045_14109[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13975 === (10))){
var inst_13856 = (state_13974[(16)]);
var inst_13858 = (state_13974[(17)]);
var inst_13864 = cljs.core._nth.call(null,inst_13856,inst_13858);
var inst_13865 = cljs.core.nth.call(null,inst_13864,(0),null);
var inst_13866 = cljs.core.nth.call(null,inst_13864,(1),null);
var state_13974__$1 = (function (){var statearr_14046 = state_13974;
(statearr_14046[(26)] = inst_13865);

return statearr_14046;
})();
if(cljs.core.truth_(inst_13866)){
var statearr_14047_14110 = state_13974__$1;
(statearr_14047_14110[(1)] = (13));

} else {
var statearr_14048_14111 = state_13974__$1;
(statearr_14048_14111[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13975 === (18))){
var inst_13899 = (state_13974[(2)]);
var state_13974__$1 = state_13974;
var statearr_14049_14112 = state_13974__$1;
(statearr_14049_14112[(2)] = inst_13899);

(statearr_14049_14112[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13975 === (42))){
var state_13974__$1 = state_13974;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13974__$1,(45),dchan);
} else {
if((state_val_13975 === (37))){
var inst_13942 = (state_13974[(23)]);
var inst_13846 = (state_13974[(12)]);
var inst_13933 = (state_13974[(25)]);
var inst_13942__$1 = cljs.core.first.call(null,inst_13933);
var inst_13943 = cljs.core.async.put_BANG_.call(null,inst_13942__$1,inst_13846,done);
var state_13974__$1 = (function (){var statearr_14050 = state_13974;
(statearr_14050[(23)] = inst_13942__$1);

return statearr_14050;
})();
if(cljs.core.truth_(inst_13943)){
var statearr_14051_14113 = state_13974__$1;
(statearr_14051_14113[(1)] = (39));

} else {
var statearr_14052_14114 = state_13974__$1;
(statearr_14052_14114[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13975 === (8))){
var inst_13857 = (state_13974[(13)]);
var inst_13858 = (state_13974[(17)]);
var inst_13860 = (inst_13858 < inst_13857);
var inst_13861 = inst_13860;
var state_13974__$1 = state_13974;
if(cljs.core.truth_(inst_13861)){
var statearr_14053_14115 = state_13974__$1;
(statearr_14053_14115[(1)] = (10));

} else {
var statearr_14054_14116 = state_13974__$1;
(statearr_14054_14116[(1)] = (11));

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
});})(c__10525__auto___14062,cs,m,dchan,dctr,done))
;
return ((function (switch__10460__auto__,c__10525__auto___14062,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__10461__auto__ = null;
var cljs$core$async$mult_$_state_machine__10461__auto____0 = (function (){
var statearr_14058 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14058[(0)] = cljs$core$async$mult_$_state_machine__10461__auto__);

(statearr_14058[(1)] = (1));

return statearr_14058;
});
var cljs$core$async$mult_$_state_machine__10461__auto____1 = (function (state_13974){
while(true){
var ret_value__10462__auto__ = (function (){try{while(true){
var result__10463__auto__ = switch__10460__auto__.call(null,state_13974);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10463__auto__;
}
break;
}
}catch (e14059){if((e14059 instanceof Object)){
var ex__10464__auto__ = e14059;
var statearr_14060_14117 = state_13974;
(statearr_14060_14117[(5)] = ex__10464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13974);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14059;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14118 = state_13974;
state_13974 = G__14118;
continue;
} else {
return ret_value__10462__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10461__auto__ = function(state_13974){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10461__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10461__auto____1.call(this,state_13974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10461__auto____0;
cljs$core$async$mult_$_state_machine__10461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10461__auto____1;
return cljs$core$async$mult_$_state_machine__10461__auto__;
})()
;})(switch__10460__auto__,c__10525__auto___14062,cs,m,dchan,dctr,done))
})();
var state__10527__auto__ = (function (){var statearr_14061 = f__10526__auto__.call(null);
(statearr_14061[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10525__auto___14062);

return statearr_14061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10527__auto__);
});})(c__10525__auto___14062,cs,m,dchan,dctr,done))
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
var args14119 = [];
var len__9177__auto___14122 = arguments.length;
var i__9178__auto___14123 = (0);
while(true){
if((i__9178__auto___14123 < len__9177__auto___14122)){
args14119.push((arguments[i__9178__auto___14123]));

var G__14124 = (i__9178__auto___14123 + (1));
i__9178__auto___14123 = G__14124;
continue;
} else {
}
break;
}

var G__14121 = args14119.length;
switch (G__14121) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14119.length)].join('')));

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
var x__8774__auto__ = (((m == null))?null:m);
var m__8775__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__8774__auto__)]);
if(!((m__8775__auto__ == null))){
return m__8775__auto__.call(null,m,ch);
} else {
var m__8775__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__8775__auto____$1 == null))){
return m__8775__auto____$1.call(null,m,ch);
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
var x__8774__auto__ = (((m == null))?null:m);
var m__8775__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__8774__auto__)]);
if(!((m__8775__auto__ == null))){
return m__8775__auto__.call(null,m,ch);
} else {
var m__8775__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__8775__auto____$1 == null))){
return m__8775__auto____$1.call(null,m,ch);
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
var x__8774__auto__ = (((m == null))?null:m);
var m__8775__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__8774__auto__)]);
if(!((m__8775__auto__ == null))){
return m__8775__auto__.call(null,m);
} else {
var m__8775__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__8775__auto____$1 == null))){
return m__8775__auto____$1.call(null,m);
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
var x__8774__auto__ = (((m == null))?null:m);
var m__8775__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__8774__auto__)]);
if(!((m__8775__auto__ == null))){
return m__8775__auto__.call(null,m,state_map);
} else {
var m__8775__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__8775__auto____$1 == null))){
return m__8775__auto____$1.call(null,m,state_map);
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
var x__8774__auto__ = (((m == null))?null:m);
var m__8775__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__8774__auto__)]);
if(!((m__8775__auto__ == null))){
return m__8775__auto__.call(null,m,mode);
} else {
var m__8775__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__8775__auto____$1 == null))){
return m__8775__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__9184__auto__ = [];
var len__9177__auto___14136 = arguments.length;
var i__9178__auto___14137 = (0);
while(true){
if((i__9178__auto___14137 < len__9177__auto___14136)){
args__9184__auto__.push((arguments[i__9178__auto___14137]));

var G__14138 = (i__9178__auto___14137 + (1));
i__9178__auto___14137 = G__14138;
continue;
} else {
}
break;
}

var argseq__9185__auto__ = ((((3) < args__9184__auto__.length))?(new cljs.core.IndexedSeq(args__9184__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9185__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__14130){
var map__14131 = p__14130;
var map__14131__$1 = ((((!((map__14131 == null)))?((((map__14131.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14131.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14131):map__14131);
var opts = map__14131__$1;
var statearr_14133_14139 = state;
(statearr_14133_14139[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__14131,map__14131__$1,opts){
return (function (val){
var statearr_14134_14140 = state;
(statearr_14134_14140[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__14131,map__14131__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_14135_14141 = state;
(statearr_14135_14141[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq14126){
var G__14127 = cljs.core.first.call(null,seq14126);
var seq14126__$1 = cljs.core.next.call(null,seq14126);
var G__14128 = cljs.core.first.call(null,seq14126__$1);
var seq14126__$2 = cljs.core.next.call(null,seq14126__$1);
var G__14129 = cljs.core.first.call(null,seq14126__$2);
var seq14126__$3 = cljs.core.next.call(null,seq14126__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14127,G__14128,G__14129,seq14126__$3);
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
if(typeof cljs.core.async.t_cljs$core$async14305 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14305 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14306){
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
this.meta14306 = meta14306;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14305.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14307,meta14306__$1){
var self__ = this;
var _14307__$1 = this;
return (new cljs.core.async.t_cljs$core$async14305(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta14306__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14305.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14307){
var self__ = this;
var _14307__$1 = this;
return self__.meta14306;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14305.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async14305.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14305.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async14305.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14305.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14305.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14305.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14305.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async14305.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta14306","meta14306",-2049904376,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14305.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14305.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14305";

cljs.core.async.t_cljs$core$async14305.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8717__auto__,writer__8718__auto__,opt__8719__auto__){
return cljs.core._write.call(null,writer__8718__auto__,"cljs.core.async/t_cljs$core$async14305");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async14305 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async14305(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14306){
return (new cljs.core.async.t_cljs$core$async14305(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14306));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async14305(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10525__auto___14468 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10525__auto___14468,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__10526__auto__ = (function (){var switch__10460__auto__ = ((function (c__10525__auto___14468,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_14405){
var state_val_14406 = (state_14405[(1)]);
if((state_val_14406 === (7))){
var inst_14323 = (state_14405[(2)]);
var state_14405__$1 = state_14405;
var statearr_14407_14469 = state_14405__$1;
(statearr_14407_14469[(2)] = inst_14323);

(statearr_14407_14469[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14406 === (20))){
var inst_14335 = (state_14405[(7)]);
var state_14405__$1 = state_14405;
var statearr_14408_14470 = state_14405__$1;
(statearr_14408_14470[(2)] = inst_14335);

(statearr_14408_14470[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14406 === (27))){
var state_14405__$1 = state_14405;
var statearr_14409_14471 = state_14405__$1;
(statearr_14409_14471[(2)] = null);

(statearr_14409_14471[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14406 === (1))){
var inst_14311 = (state_14405[(8)]);
var inst_14311__$1 = calc_state.call(null);
var inst_14313 = (inst_14311__$1 == null);
var inst_14314 = cljs.core.not.call(null,inst_14313);
var state_14405__$1 = (function (){var statearr_14410 = state_14405;
(statearr_14410[(8)] = inst_14311__$1);

return statearr_14410;
})();
if(inst_14314){
var statearr_14411_14472 = state_14405__$1;
(statearr_14411_14472[(1)] = (2));

} else {
var statearr_14412_14473 = state_14405__$1;
(statearr_14412_14473[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14406 === (24))){
var inst_14358 = (state_14405[(9)]);
var inst_14379 = (state_14405[(10)]);
var inst_14365 = (state_14405[(11)]);
var inst_14379__$1 = inst_14358.call(null,inst_14365);
var state_14405__$1 = (function (){var statearr_14413 = state_14405;
(statearr_14413[(10)] = inst_14379__$1);

return statearr_14413;
})();
if(cljs.core.truth_(inst_14379__$1)){
var statearr_14414_14474 = state_14405__$1;
(statearr_14414_14474[(1)] = (29));

} else {
var statearr_14415_14475 = state_14405__$1;
(statearr_14415_14475[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14406 === (4))){
var inst_14326 = (state_14405[(2)]);
var state_14405__$1 = state_14405;
if(cljs.core.truth_(inst_14326)){
var statearr_14416_14476 = state_14405__$1;
(statearr_14416_14476[(1)] = (8));

} else {
var statearr_14417_14477 = state_14405__$1;
(statearr_14417_14477[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14406 === (15))){
var inst_14352 = (state_14405[(2)]);
var state_14405__$1 = state_14405;
if(cljs.core.truth_(inst_14352)){
var statearr_14418_14478 = state_14405__$1;
(statearr_14418_14478[(1)] = (19));

} else {
var statearr_14419_14479 = state_14405__$1;
(statearr_14419_14479[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14406 === (21))){
var inst_14357 = (state_14405[(12)]);
var inst_14357__$1 = (state_14405[(2)]);
var inst_14358 = cljs.core.get.call(null,inst_14357__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14359 = cljs.core.get.call(null,inst_14357__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14360 = cljs.core.get.call(null,inst_14357__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_14405__$1 = (function (){var statearr_14420 = state_14405;
(statearr_14420[(13)] = inst_14359);

(statearr_14420[(12)] = inst_14357__$1);

(statearr_14420[(9)] = inst_14358);

return statearr_14420;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_14405__$1,(22),inst_14360);
} else {
if((state_val_14406 === (31))){
var inst_14387 = (state_14405[(2)]);
var state_14405__$1 = state_14405;
if(cljs.core.truth_(inst_14387)){
var statearr_14421_14480 = state_14405__$1;
(statearr_14421_14480[(1)] = (32));

} else {
var statearr_14422_14481 = state_14405__$1;
(statearr_14422_14481[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14406 === (32))){
var inst_14364 = (state_14405[(14)]);
var state_14405__$1 = state_14405;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14405__$1,(35),out,inst_14364);
} else {
if((state_val_14406 === (33))){
var inst_14357 = (state_14405[(12)]);
var inst_14335 = inst_14357;
var state_14405__$1 = (function (){var statearr_14423 = state_14405;
(statearr_14423[(7)] = inst_14335);

return statearr_14423;
})();
var statearr_14424_14482 = state_14405__$1;
(statearr_14424_14482[(2)] = null);

(statearr_14424_14482[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14406 === (13))){
var inst_14335 = (state_14405[(7)]);
var inst_14342 = inst_14335.cljs$lang$protocol_mask$partition0$;
var inst_14343 = (inst_14342 & (64));
var inst_14344 = inst_14335.cljs$core$ISeq$;
var inst_14345 = (inst_14343) || (inst_14344);
var state_14405__$1 = state_14405;
if(cljs.core.truth_(inst_14345)){
var statearr_14425_14483 = state_14405__$1;
(statearr_14425_14483[(1)] = (16));

} else {
var statearr_14426_14484 = state_14405__$1;
(statearr_14426_14484[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14406 === (22))){
var inst_14364 = (state_14405[(14)]);
var inst_14365 = (state_14405[(11)]);
var inst_14363 = (state_14405[(2)]);
var inst_14364__$1 = cljs.core.nth.call(null,inst_14363,(0),null);
var inst_14365__$1 = cljs.core.nth.call(null,inst_14363,(1),null);
var inst_14366 = (inst_14364__$1 == null);
var inst_14367 = cljs.core._EQ_.call(null,inst_14365__$1,change);
var inst_14368 = (inst_14366) || (inst_14367);
var state_14405__$1 = (function (){var statearr_14427 = state_14405;
(statearr_14427[(14)] = inst_14364__$1);

(statearr_14427[(11)] = inst_14365__$1);

return statearr_14427;
})();
if(cljs.core.truth_(inst_14368)){
var statearr_14428_14485 = state_14405__$1;
(statearr_14428_14485[(1)] = (23));

} else {
var statearr_14429_14486 = state_14405__$1;
(statearr_14429_14486[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14406 === (36))){
var inst_14357 = (state_14405[(12)]);
var inst_14335 = inst_14357;
var state_14405__$1 = (function (){var statearr_14430 = state_14405;
(statearr_14430[(7)] = inst_14335);

return statearr_14430;
})();
var statearr_14431_14487 = state_14405__$1;
(statearr_14431_14487[(2)] = null);

(statearr_14431_14487[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14406 === (29))){
var inst_14379 = (state_14405[(10)]);
var state_14405__$1 = state_14405;
var statearr_14432_14488 = state_14405__$1;
(statearr_14432_14488[(2)] = inst_14379);

(statearr_14432_14488[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14406 === (6))){
var state_14405__$1 = state_14405;
var statearr_14433_14489 = state_14405__$1;
(statearr_14433_14489[(2)] = false);

(statearr_14433_14489[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14406 === (28))){
var inst_14375 = (state_14405[(2)]);
var inst_14376 = calc_state.call(null);
var inst_14335 = inst_14376;
var state_14405__$1 = (function (){var statearr_14434 = state_14405;
(statearr_14434[(15)] = inst_14375);

(statearr_14434[(7)] = inst_14335);

return statearr_14434;
})();
var statearr_14435_14490 = state_14405__$1;
(statearr_14435_14490[(2)] = null);

(statearr_14435_14490[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14406 === (25))){
var inst_14401 = (state_14405[(2)]);
var state_14405__$1 = state_14405;
var statearr_14436_14491 = state_14405__$1;
(statearr_14436_14491[(2)] = inst_14401);

(statearr_14436_14491[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14406 === (34))){
var inst_14399 = (state_14405[(2)]);
var state_14405__$1 = state_14405;
var statearr_14437_14492 = state_14405__$1;
(statearr_14437_14492[(2)] = inst_14399);

(statearr_14437_14492[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14406 === (17))){
var state_14405__$1 = state_14405;
var statearr_14438_14493 = state_14405__$1;
(statearr_14438_14493[(2)] = false);

(statearr_14438_14493[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14406 === (3))){
var state_14405__$1 = state_14405;
var statearr_14439_14494 = state_14405__$1;
(statearr_14439_14494[(2)] = false);

(statearr_14439_14494[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14406 === (12))){
var inst_14403 = (state_14405[(2)]);
var state_14405__$1 = state_14405;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14405__$1,inst_14403);
} else {
if((state_val_14406 === (2))){
var inst_14311 = (state_14405[(8)]);
var inst_14316 = inst_14311.cljs$lang$protocol_mask$partition0$;
var inst_14317 = (inst_14316 & (64));
var inst_14318 = inst_14311.cljs$core$ISeq$;
var inst_14319 = (inst_14317) || (inst_14318);
var state_14405__$1 = state_14405;
if(cljs.core.truth_(inst_14319)){
var statearr_14440_14495 = state_14405__$1;
(statearr_14440_14495[(1)] = (5));

} else {
var statearr_14441_14496 = state_14405__$1;
(statearr_14441_14496[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14406 === (23))){
var inst_14364 = (state_14405[(14)]);
var inst_14370 = (inst_14364 == null);
var state_14405__$1 = state_14405;
if(cljs.core.truth_(inst_14370)){
var statearr_14442_14497 = state_14405__$1;
(statearr_14442_14497[(1)] = (26));

} else {
var statearr_14443_14498 = state_14405__$1;
(statearr_14443_14498[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14406 === (35))){
var inst_14390 = (state_14405[(2)]);
var state_14405__$1 = state_14405;
if(cljs.core.truth_(inst_14390)){
var statearr_14444_14499 = state_14405__$1;
(statearr_14444_14499[(1)] = (36));

} else {
var statearr_14445_14500 = state_14405__$1;
(statearr_14445_14500[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14406 === (19))){
var inst_14335 = (state_14405[(7)]);
var inst_14354 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14335);
var state_14405__$1 = state_14405;
var statearr_14446_14501 = state_14405__$1;
(statearr_14446_14501[(2)] = inst_14354);

(statearr_14446_14501[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14406 === (11))){
var inst_14335 = (state_14405[(7)]);
var inst_14339 = (inst_14335 == null);
var inst_14340 = cljs.core.not.call(null,inst_14339);
var state_14405__$1 = state_14405;
if(inst_14340){
var statearr_14447_14502 = state_14405__$1;
(statearr_14447_14502[(1)] = (13));

} else {
var statearr_14448_14503 = state_14405__$1;
(statearr_14448_14503[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14406 === (9))){
var inst_14311 = (state_14405[(8)]);
var state_14405__$1 = state_14405;
var statearr_14449_14504 = state_14405__$1;
(statearr_14449_14504[(2)] = inst_14311);

(statearr_14449_14504[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14406 === (5))){
var state_14405__$1 = state_14405;
var statearr_14450_14505 = state_14405__$1;
(statearr_14450_14505[(2)] = true);

(statearr_14450_14505[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14406 === (14))){
var state_14405__$1 = state_14405;
var statearr_14451_14506 = state_14405__$1;
(statearr_14451_14506[(2)] = false);

(statearr_14451_14506[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14406 === (26))){
var inst_14365 = (state_14405[(11)]);
var inst_14372 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_14365);
var state_14405__$1 = state_14405;
var statearr_14452_14507 = state_14405__$1;
(statearr_14452_14507[(2)] = inst_14372);

(statearr_14452_14507[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14406 === (16))){
var state_14405__$1 = state_14405;
var statearr_14453_14508 = state_14405__$1;
(statearr_14453_14508[(2)] = true);

(statearr_14453_14508[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14406 === (38))){
var inst_14395 = (state_14405[(2)]);
var state_14405__$1 = state_14405;
var statearr_14454_14509 = state_14405__$1;
(statearr_14454_14509[(2)] = inst_14395);

(statearr_14454_14509[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14406 === (30))){
var inst_14359 = (state_14405[(13)]);
var inst_14358 = (state_14405[(9)]);
var inst_14365 = (state_14405[(11)]);
var inst_14382 = cljs.core.empty_QMARK_.call(null,inst_14358);
var inst_14383 = inst_14359.call(null,inst_14365);
var inst_14384 = cljs.core.not.call(null,inst_14383);
var inst_14385 = (inst_14382) && (inst_14384);
var state_14405__$1 = state_14405;
var statearr_14455_14510 = state_14405__$1;
(statearr_14455_14510[(2)] = inst_14385);

(statearr_14455_14510[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14406 === (10))){
var inst_14311 = (state_14405[(8)]);
var inst_14331 = (state_14405[(2)]);
var inst_14332 = cljs.core.get.call(null,inst_14331,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14333 = cljs.core.get.call(null,inst_14331,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14334 = cljs.core.get.call(null,inst_14331,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_14335 = inst_14311;
var state_14405__$1 = (function (){var statearr_14456 = state_14405;
(statearr_14456[(16)] = inst_14333);

(statearr_14456[(17)] = inst_14332);

(statearr_14456[(18)] = inst_14334);

(statearr_14456[(7)] = inst_14335);

return statearr_14456;
})();
var statearr_14457_14511 = state_14405__$1;
(statearr_14457_14511[(2)] = null);

(statearr_14457_14511[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14406 === (18))){
var inst_14349 = (state_14405[(2)]);
var state_14405__$1 = state_14405;
var statearr_14458_14512 = state_14405__$1;
(statearr_14458_14512[(2)] = inst_14349);

(statearr_14458_14512[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14406 === (37))){
var state_14405__$1 = state_14405;
var statearr_14459_14513 = state_14405__$1;
(statearr_14459_14513[(2)] = null);

(statearr_14459_14513[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14406 === (8))){
var inst_14311 = (state_14405[(8)]);
var inst_14328 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14311);
var state_14405__$1 = state_14405;
var statearr_14460_14514 = state_14405__$1;
(statearr_14460_14514[(2)] = inst_14328);

(statearr_14460_14514[(1)] = (10));


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
});})(c__10525__auto___14468,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__10460__auto__,c__10525__auto___14468,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__10461__auto__ = null;
var cljs$core$async$mix_$_state_machine__10461__auto____0 = (function (){
var statearr_14464 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14464[(0)] = cljs$core$async$mix_$_state_machine__10461__auto__);

(statearr_14464[(1)] = (1));

return statearr_14464;
});
var cljs$core$async$mix_$_state_machine__10461__auto____1 = (function (state_14405){
while(true){
var ret_value__10462__auto__ = (function (){try{while(true){
var result__10463__auto__ = switch__10460__auto__.call(null,state_14405);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10463__auto__;
}
break;
}
}catch (e14465){if((e14465 instanceof Object)){
var ex__10464__auto__ = e14465;
var statearr_14466_14515 = state_14405;
(statearr_14466_14515[(5)] = ex__10464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14465;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14516 = state_14405;
state_14405 = G__14516;
continue;
} else {
return ret_value__10462__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10461__auto__ = function(state_14405){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10461__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10461__auto____1.call(this,state_14405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10461__auto____0;
cljs$core$async$mix_$_state_machine__10461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10461__auto____1;
return cljs$core$async$mix_$_state_machine__10461__auto__;
})()
;})(switch__10460__auto__,c__10525__auto___14468,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__10527__auto__ = (function (){var statearr_14467 = f__10526__auto__.call(null);
(statearr_14467[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10525__auto___14468);

return statearr_14467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10527__auto__);
});})(c__10525__auto___14468,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__8774__auto__ = (((p == null))?null:p);
var m__8775__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__8774__auto__)]);
if(!((m__8775__auto__ == null))){
return m__8775__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__8775__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__8775__auto____$1 == null))){
return m__8775__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__8774__auto__ = (((p == null))?null:p);
var m__8775__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__8774__auto__)]);
if(!((m__8775__auto__ == null))){
return m__8775__auto__.call(null,p,v,ch);
} else {
var m__8775__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__8775__auto____$1 == null))){
return m__8775__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args14517 = [];
var len__9177__auto___14520 = arguments.length;
var i__9178__auto___14521 = (0);
while(true){
if((i__9178__auto___14521 < len__9177__auto___14520)){
args14517.push((arguments[i__9178__auto___14521]));

var G__14522 = (i__9178__auto___14521 + (1));
i__9178__auto___14521 = G__14522;
continue;
} else {
}
break;
}

var G__14519 = args14517.length;
switch (G__14519) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14517.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__8774__auto__ = (((p == null))?null:p);
var m__8775__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8774__auto__)]);
if(!((m__8775__auto__ == null))){
return m__8775__auto__.call(null,p);
} else {
var m__8775__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__8775__auto____$1 == null))){
return m__8775__auto____$1.call(null,p);
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
var x__8774__auto__ = (((p == null))?null:p);
var m__8775__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8774__auto__)]);
if(!((m__8775__auto__ == null))){
return m__8775__auto__.call(null,p,v);
} else {
var m__8775__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__8775__auto____$1 == null))){
return m__8775__auto____$1.call(null,p,v);
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
var args14525 = [];
var len__9177__auto___14650 = arguments.length;
var i__9178__auto___14651 = (0);
while(true){
if((i__9178__auto___14651 < len__9177__auto___14650)){
args14525.push((arguments[i__9178__auto___14651]));

var G__14652 = (i__9178__auto___14651 + (1));
i__9178__auto___14651 = G__14652;
continue;
} else {
}
break;
}

var G__14527 = args14525.length;
switch (G__14527) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14525.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__8119__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__8119__auto__)){
return or__8119__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__8119__auto__,mults){
return (function (p1__14524_SHARP_){
if(cljs.core.truth_(p1__14524_SHARP_.call(null,topic))){
return p1__14524_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__14524_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__8119__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async14528 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14528 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta14529){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta14529 = meta14529;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14528.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_14530,meta14529__$1){
var self__ = this;
var _14530__$1 = this;
return (new cljs.core.async.t_cljs$core$async14528(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta14529__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14528.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_14530){
var self__ = this;
var _14530__$1 = this;
return self__.meta14529;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14528.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async14528.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14528.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async14528.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14528.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async14528.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14528.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14528.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta14529","meta14529",-1812467128,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14528.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14528.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14528";

cljs.core.async.t_cljs$core$async14528.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8717__auto__,writer__8718__auto__,opt__8719__auto__){
return cljs.core._write.call(null,writer__8718__auto__,"cljs.core.async/t_cljs$core$async14528");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async14528 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async14528(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta14529){
return (new cljs.core.async.t_cljs$core$async14528(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta14529));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async14528(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10525__auto___14654 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10525__auto___14654,mults,ensure_mult,p){
return (function (){
var f__10526__auto__ = (function (){var switch__10460__auto__ = ((function (c__10525__auto___14654,mults,ensure_mult,p){
return (function (state_14602){
var state_val_14603 = (state_14602[(1)]);
if((state_val_14603 === (7))){
var inst_14598 = (state_14602[(2)]);
var state_14602__$1 = state_14602;
var statearr_14604_14655 = state_14602__$1;
(statearr_14604_14655[(2)] = inst_14598);

(statearr_14604_14655[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14603 === (20))){
var state_14602__$1 = state_14602;
var statearr_14605_14656 = state_14602__$1;
(statearr_14605_14656[(2)] = null);

(statearr_14605_14656[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14603 === (1))){
var state_14602__$1 = state_14602;
var statearr_14606_14657 = state_14602__$1;
(statearr_14606_14657[(2)] = null);

(statearr_14606_14657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14603 === (24))){
var inst_14581 = (state_14602[(7)]);
var inst_14590 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_14581);
var state_14602__$1 = state_14602;
var statearr_14607_14658 = state_14602__$1;
(statearr_14607_14658[(2)] = inst_14590);

(statearr_14607_14658[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14603 === (4))){
var inst_14533 = (state_14602[(8)]);
var inst_14533__$1 = (state_14602[(2)]);
var inst_14534 = (inst_14533__$1 == null);
var state_14602__$1 = (function (){var statearr_14608 = state_14602;
(statearr_14608[(8)] = inst_14533__$1);

return statearr_14608;
})();
if(cljs.core.truth_(inst_14534)){
var statearr_14609_14659 = state_14602__$1;
(statearr_14609_14659[(1)] = (5));

} else {
var statearr_14610_14660 = state_14602__$1;
(statearr_14610_14660[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14603 === (15))){
var inst_14575 = (state_14602[(2)]);
var state_14602__$1 = state_14602;
var statearr_14611_14661 = state_14602__$1;
(statearr_14611_14661[(2)] = inst_14575);

(statearr_14611_14661[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14603 === (21))){
var inst_14595 = (state_14602[(2)]);
var state_14602__$1 = (function (){var statearr_14612 = state_14602;
(statearr_14612[(9)] = inst_14595);

return statearr_14612;
})();
var statearr_14613_14662 = state_14602__$1;
(statearr_14613_14662[(2)] = null);

(statearr_14613_14662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14603 === (13))){
var inst_14557 = (state_14602[(10)]);
var inst_14559 = cljs.core.chunked_seq_QMARK_.call(null,inst_14557);
var state_14602__$1 = state_14602;
if(inst_14559){
var statearr_14614_14663 = state_14602__$1;
(statearr_14614_14663[(1)] = (16));

} else {
var statearr_14615_14664 = state_14602__$1;
(statearr_14615_14664[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14603 === (22))){
var inst_14587 = (state_14602[(2)]);
var state_14602__$1 = state_14602;
if(cljs.core.truth_(inst_14587)){
var statearr_14616_14665 = state_14602__$1;
(statearr_14616_14665[(1)] = (23));

} else {
var statearr_14617_14666 = state_14602__$1;
(statearr_14617_14666[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14603 === (6))){
var inst_14583 = (state_14602[(11)]);
var inst_14533 = (state_14602[(8)]);
var inst_14581 = (state_14602[(7)]);
var inst_14581__$1 = topic_fn.call(null,inst_14533);
var inst_14582 = cljs.core.deref.call(null,mults);
var inst_14583__$1 = cljs.core.get.call(null,inst_14582,inst_14581__$1);
var state_14602__$1 = (function (){var statearr_14618 = state_14602;
(statearr_14618[(11)] = inst_14583__$1);

(statearr_14618[(7)] = inst_14581__$1);

return statearr_14618;
})();
if(cljs.core.truth_(inst_14583__$1)){
var statearr_14619_14667 = state_14602__$1;
(statearr_14619_14667[(1)] = (19));

} else {
var statearr_14620_14668 = state_14602__$1;
(statearr_14620_14668[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14603 === (25))){
var inst_14592 = (state_14602[(2)]);
var state_14602__$1 = state_14602;
var statearr_14621_14669 = state_14602__$1;
(statearr_14621_14669[(2)] = inst_14592);

(statearr_14621_14669[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14603 === (17))){
var inst_14557 = (state_14602[(10)]);
var inst_14566 = cljs.core.first.call(null,inst_14557);
var inst_14567 = cljs.core.async.muxch_STAR_.call(null,inst_14566);
var inst_14568 = cljs.core.async.close_BANG_.call(null,inst_14567);
var inst_14569 = cljs.core.next.call(null,inst_14557);
var inst_14543 = inst_14569;
var inst_14544 = null;
var inst_14545 = (0);
var inst_14546 = (0);
var state_14602__$1 = (function (){var statearr_14622 = state_14602;
(statearr_14622[(12)] = inst_14568);

(statearr_14622[(13)] = inst_14545);

(statearr_14622[(14)] = inst_14544);

(statearr_14622[(15)] = inst_14543);

(statearr_14622[(16)] = inst_14546);

return statearr_14622;
})();
var statearr_14623_14670 = state_14602__$1;
(statearr_14623_14670[(2)] = null);

(statearr_14623_14670[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14603 === (3))){
var inst_14600 = (state_14602[(2)]);
var state_14602__$1 = state_14602;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14602__$1,inst_14600);
} else {
if((state_val_14603 === (12))){
var inst_14577 = (state_14602[(2)]);
var state_14602__$1 = state_14602;
var statearr_14624_14671 = state_14602__$1;
(statearr_14624_14671[(2)] = inst_14577);

(statearr_14624_14671[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14603 === (2))){
var state_14602__$1 = state_14602;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14602__$1,(4),ch);
} else {
if((state_val_14603 === (23))){
var state_14602__$1 = state_14602;
var statearr_14625_14672 = state_14602__$1;
(statearr_14625_14672[(2)] = null);

(statearr_14625_14672[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14603 === (19))){
var inst_14583 = (state_14602[(11)]);
var inst_14533 = (state_14602[(8)]);
var inst_14585 = cljs.core.async.muxch_STAR_.call(null,inst_14583);
var state_14602__$1 = state_14602;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14602__$1,(22),inst_14585,inst_14533);
} else {
if((state_val_14603 === (11))){
var inst_14557 = (state_14602[(10)]);
var inst_14543 = (state_14602[(15)]);
var inst_14557__$1 = cljs.core.seq.call(null,inst_14543);
var state_14602__$1 = (function (){var statearr_14626 = state_14602;
(statearr_14626[(10)] = inst_14557__$1);

return statearr_14626;
})();
if(inst_14557__$1){
var statearr_14627_14673 = state_14602__$1;
(statearr_14627_14673[(1)] = (13));

} else {
var statearr_14628_14674 = state_14602__$1;
(statearr_14628_14674[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14603 === (9))){
var inst_14579 = (state_14602[(2)]);
var state_14602__$1 = state_14602;
var statearr_14629_14675 = state_14602__$1;
(statearr_14629_14675[(2)] = inst_14579);

(statearr_14629_14675[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14603 === (5))){
var inst_14540 = cljs.core.deref.call(null,mults);
var inst_14541 = cljs.core.vals.call(null,inst_14540);
var inst_14542 = cljs.core.seq.call(null,inst_14541);
var inst_14543 = inst_14542;
var inst_14544 = null;
var inst_14545 = (0);
var inst_14546 = (0);
var state_14602__$1 = (function (){var statearr_14630 = state_14602;
(statearr_14630[(13)] = inst_14545);

(statearr_14630[(14)] = inst_14544);

(statearr_14630[(15)] = inst_14543);

(statearr_14630[(16)] = inst_14546);

return statearr_14630;
})();
var statearr_14631_14676 = state_14602__$1;
(statearr_14631_14676[(2)] = null);

(statearr_14631_14676[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14603 === (14))){
var state_14602__$1 = state_14602;
var statearr_14635_14677 = state_14602__$1;
(statearr_14635_14677[(2)] = null);

(statearr_14635_14677[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14603 === (16))){
var inst_14557 = (state_14602[(10)]);
var inst_14561 = cljs.core.chunk_first.call(null,inst_14557);
var inst_14562 = cljs.core.chunk_rest.call(null,inst_14557);
var inst_14563 = cljs.core.count.call(null,inst_14561);
var inst_14543 = inst_14562;
var inst_14544 = inst_14561;
var inst_14545 = inst_14563;
var inst_14546 = (0);
var state_14602__$1 = (function (){var statearr_14636 = state_14602;
(statearr_14636[(13)] = inst_14545);

(statearr_14636[(14)] = inst_14544);

(statearr_14636[(15)] = inst_14543);

(statearr_14636[(16)] = inst_14546);

return statearr_14636;
})();
var statearr_14637_14678 = state_14602__$1;
(statearr_14637_14678[(2)] = null);

(statearr_14637_14678[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14603 === (10))){
var inst_14545 = (state_14602[(13)]);
var inst_14544 = (state_14602[(14)]);
var inst_14543 = (state_14602[(15)]);
var inst_14546 = (state_14602[(16)]);
var inst_14551 = cljs.core._nth.call(null,inst_14544,inst_14546);
var inst_14552 = cljs.core.async.muxch_STAR_.call(null,inst_14551);
var inst_14553 = cljs.core.async.close_BANG_.call(null,inst_14552);
var inst_14554 = (inst_14546 + (1));
var tmp14632 = inst_14545;
var tmp14633 = inst_14544;
var tmp14634 = inst_14543;
var inst_14543__$1 = tmp14634;
var inst_14544__$1 = tmp14633;
var inst_14545__$1 = tmp14632;
var inst_14546__$1 = inst_14554;
var state_14602__$1 = (function (){var statearr_14638 = state_14602;
(statearr_14638[(13)] = inst_14545__$1);

(statearr_14638[(14)] = inst_14544__$1);

(statearr_14638[(15)] = inst_14543__$1);

(statearr_14638[(17)] = inst_14553);

(statearr_14638[(16)] = inst_14546__$1);

return statearr_14638;
})();
var statearr_14639_14679 = state_14602__$1;
(statearr_14639_14679[(2)] = null);

(statearr_14639_14679[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14603 === (18))){
var inst_14572 = (state_14602[(2)]);
var state_14602__$1 = state_14602;
var statearr_14640_14680 = state_14602__$1;
(statearr_14640_14680[(2)] = inst_14572);

(statearr_14640_14680[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14603 === (8))){
var inst_14545 = (state_14602[(13)]);
var inst_14546 = (state_14602[(16)]);
var inst_14548 = (inst_14546 < inst_14545);
var inst_14549 = inst_14548;
var state_14602__$1 = state_14602;
if(cljs.core.truth_(inst_14549)){
var statearr_14641_14681 = state_14602__$1;
(statearr_14641_14681[(1)] = (10));

} else {
var statearr_14642_14682 = state_14602__$1;
(statearr_14642_14682[(1)] = (11));

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
});})(c__10525__auto___14654,mults,ensure_mult,p))
;
return ((function (switch__10460__auto__,c__10525__auto___14654,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__10461__auto__ = null;
var cljs$core$async$state_machine__10461__auto____0 = (function (){
var statearr_14646 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14646[(0)] = cljs$core$async$state_machine__10461__auto__);

(statearr_14646[(1)] = (1));

return statearr_14646;
});
var cljs$core$async$state_machine__10461__auto____1 = (function (state_14602){
while(true){
var ret_value__10462__auto__ = (function (){try{while(true){
var result__10463__auto__ = switch__10460__auto__.call(null,state_14602);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10463__auto__;
}
break;
}
}catch (e14647){if((e14647 instanceof Object)){
var ex__10464__auto__ = e14647;
var statearr_14648_14683 = state_14602;
(statearr_14648_14683[(5)] = ex__10464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14602);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14647;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14684 = state_14602;
state_14602 = G__14684;
continue;
} else {
return ret_value__10462__auto__;
}
break;
}
});
cljs$core$async$state_machine__10461__auto__ = function(state_14602){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10461__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10461__auto____1.call(this,state_14602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10461__auto____0;
cljs$core$async$state_machine__10461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10461__auto____1;
return cljs$core$async$state_machine__10461__auto__;
})()
;})(switch__10460__auto__,c__10525__auto___14654,mults,ensure_mult,p))
})();
var state__10527__auto__ = (function (){var statearr_14649 = f__10526__auto__.call(null);
(statearr_14649[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10525__auto___14654);

return statearr_14649;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10527__auto__);
});})(c__10525__auto___14654,mults,ensure_mult,p))
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
var args14685 = [];
var len__9177__auto___14688 = arguments.length;
var i__9178__auto___14689 = (0);
while(true){
if((i__9178__auto___14689 < len__9177__auto___14688)){
args14685.push((arguments[i__9178__auto___14689]));

var G__14690 = (i__9178__auto___14689 + (1));
i__9178__auto___14689 = G__14690;
continue;
} else {
}
break;
}

var G__14687 = args14685.length;
switch (G__14687) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14685.length)].join('')));

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
var args14692 = [];
var len__9177__auto___14695 = arguments.length;
var i__9178__auto___14696 = (0);
while(true){
if((i__9178__auto___14696 < len__9177__auto___14695)){
args14692.push((arguments[i__9178__auto___14696]));

var G__14697 = (i__9178__auto___14696 + (1));
i__9178__auto___14696 = G__14697;
continue;
} else {
}
break;
}

var G__14694 = args14692.length;
switch (G__14694) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14692.length)].join('')));

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
var args14699 = [];
var len__9177__auto___14770 = arguments.length;
var i__9178__auto___14771 = (0);
while(true){
if((i__9178__auto___14771 < len__9177__auto___14770)){
args14699.push((arguments[i__9178__auto___14771]));

var G__14772 = (i__9178__auto___14771 + (1));
i__9178__auto___14771 = G__14772;
continue;
} else {
}
break;
}

var G__14701 = args14699.length;
switch (G__14701) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14699.length)].join('')));

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
var c__10525__auto___14774 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10525__auto___14774,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__10526__auto__ = (function (){var switch__10460__auto__ = ((function (c__10525__auto___14774,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_14740){
var state_val_14741 = (state_14740[(1)]);
if((state_val_14741 === (7))){
var state_14740__$1 = state_14740;
var statearr_14742_14775 = state_14740__$1;
(statearr_14742_14775[(2)] = null);

(statearr_14742_14775[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14741 === (1))){
var state_14740__$1 = state_14740;
var statearr_14743_14776 = state_14740__$1;
(statearr_14743_14776[(2)] = null);

(statearr_14743_14776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14741 === (4))){
var inst_14704 = (state_14740[(7)]);
var inst_14706 = (inst_14704 < cnt);
var state_14740__$1 = state_14740;
if(cljs.core.truth_(inst_14706)){
var statearr_14744_14777 = state_14740__$1;
(statearr_14744_14777[(1)] = (6));

} else {
var statearr_14745_14778 = state_14740__$1;
(statearr_14745_14778[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14741 === (15))){
var inst_14736 = (state_14740[(2)]);
var state_14740__$1 = state_14740;
var statearr_14746_14779 = state_14740__$1;
(statearr_14746_14779[(2)] = inst_14736);

(statearr_14746_14779[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14741 === (13))){
var inst_14729 = cljs.core.async.close_BANG_.call(null,out);
var state_14740__$1 = state_14740;
var statearr_14747_14780 = state_14740__$1;
(statearr_14747_14780[(2)] = inst_14729);

(statearr_14747_14780[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14741 === (6))){
var state_14740__$1 = state_14740;
var statearr_14748_14781 = state_14740__$1;
(statearr_14748_14781[(2)] = null);

(statearr_14748_14781[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14741 === (3))){
var inst_14738 = (state_14740[(2)]);
var state_14740__$1 = state_14740;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14740__$1,inst_14738);
} else {
if((state_val_14741 === (12))){
var inst_14726 = (state_14740[(8)]);
var inst_14726__$1 = (state_14740[(2)]);
var inst_14727 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14726__$1);
var state_14740__$1 = (function (){var statearr_14749 = state_14740;
(statearr_14749[(8)] = inst_14726__$1);

return statearr_14749;
})();
if(cljs.core.truth_(inst_14727)){
var statearr_14750_14782 = state_14740__$1;
(statearr_14750_14782[(1)] = (13));

} else {
var statearr_14751_14783 = state_14740__$1;
(statearr_14751_14783[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14741 === (2))){
var inst_14703 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_14704 = (0);
var state_14740__$1 = (function (){var statearr_14752 = state_14740;
(statearr_14752[(9)] = inst_14703);

(statearr_14752[(7)] = inst_14704);

return statearr_14752;
})();
var statearr_14753_14784 = state_14740__$1;
(statearr_14753_14784[(2)] = null);

(statearr_14753_14784[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14741 === (11))){
var inst_14704 = (state_14740[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14740,(10),Object,null,(9));
var inst_14713 = chs__$1.call(null,inst_14704);
var inst_14714 = done.call(null,inst_14704);
var inst_14715 = cljs.core.async.take_BANG_.call(null,inst_14713,inst_14714);
var state_14740__$1 = state_14740;
var statearr_14754_14785 = state_14740__$1;
(statearr_14754_14785[(2)] = inst_14715);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14740__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14741 === (9))){
var inst_14704 = (state_14740[(7)]);
var inst_14717 = (state_14740[(2)]);
var inst_14718 = (inst_14704 + (1));
var inst_14704__$1 = inst_14718;
var state_14740__$1 = (function (){var statearr_14755 = state_14740;
(statearr_14755[(10)] = inst_14717);

(statearr_14755[(7)] = inst_14704__$1);

return statearr_14755;
})();
var statearr_14756_14786 = state_14740__$1;
(statearr_14756_14786[(2)] = null);

(statearr_14756_14786[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14741 === (5))){
var inst_14724 = (state_14740[(2)]);
var state_14740__$1 = (function (){var statearr_14757 = state_14740;
(statearr_14757[(11)] = inst_14724);

return statearr_14757;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14740__$1,(12),dchan);
} else {
if((state_val_14741 === (14))){
var inst_14726 = (state_14740[(8)]);
var inst_14731 = cljs.core.apply.call(null,f,inst_14726);
var state_14740__$1 = state_14740;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14740__$1,(16),out,inst_14731);
} else {
if((state_val_14741 === (16))){
var inst_14733 = (state_14740[(2)]);
var state_14740__$1 = (function (){var statearr_14758 = state_14740;
(statearr_14758[(12)] = inst_14733);

return statearr_14758;
})();
var statearr_14759_14787 = state_14740__$1;
(statearr_14759_14787[(2)] = null);

(statearr_14759_14787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14741 === (10))){
var inst_14708 = (state_14740[(2)]);
var inst_14709 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_14740__$1 = (function (){var statearr_14760 = state_14740;
(statearr_14760[(13)] = inst_14708);

return statearr_14760;
})();
var statearr_14761_14788 = state_14740__$1;
(statearr_14761_14788[(2)] = inst_14709);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14740__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14741 === (8))){
var inst_14722 = (state_14740[(2)]);
var state_14740__$1 = state_14740;
var statearr_14762_14789 = state_14740__$1;
(statearr_14762_14789[(2)] = inst_14722);

(statearr_14762_14789[(1)] = (5));


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
});})(c__10525__auto___14774,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__10460__auto__,c__10525__auto___14774,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__10461__auto__ = null;
var cljs$core$async$state_machine__10461__auto____0 = (function (){
var statearr_14766 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14766[(0)] = cljs$core$async$state_machine__10461__auto__);

(statearr_14766[(1)] = (1));

return statearr_14766;
});
var cljs$core$async$state_machine__10461__auto____1 = (function (state_14740){
while(true){
var ret_value__10462__auto__ = (function (){try{while(true){
var result__10463__auto__ = switch__10460__auto__.call(null,state_14740);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10463__auto__;
}
break;
}
}catch (e14767){if((e14767 instanceof Object)){
var ex__10464__auto__ = e14767;
var statearr_14768_14790 = state_14740;
(statearr_14768_14790[(5)] = ex__10464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14767;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14791 = state_14740;
state_14740 = G__14791;
continue;
} else {
return ret_value__10462__auto__;
}
break;
}
});
cljs$core$async$state_machine__10461__auto__ = function(state_14740){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10461__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10461__auto____1.call(this,state_14740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10461__auto____0;
cljs$core$async$state_machine__10461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10461__auto____1;
return cljs$core$async$state_machine__10461__auto__;
})()
;})(switch__10460__auto__,c__10525__auto___14774,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__10527__auto__ = (function (){var statearr_14769 = f__10526__auto__.call(null);
(statearr_14769[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10525__auto___14774);

return statearr_14769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10527__auto__);
});})(c__10525__auto___14774,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args14793 = [];
var len__9177__auto___14849 = arguments.length;
var i__9178__auto___14850 = (0);
while(true){
if((i__9178__auto___14850 < len__9177__auto___14849)){
args14793.push((arguments[i__9178__auto___14850]));

var G__14851 = (i__9178__auto___14850 + (1));
i__9178__auto___14850 = G__14851;
continue;
} else {
}
break;
}

var G__14795 = args14793.length;
switch (G__14795) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14793.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10525__auto___14853 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10525__auto___14853,out){
return (function (){
var f__10526__auto__ = (function (){var switch__10460__auto__ = ((function (c__10525__auto___14853,out){
return (function (state_14825){
var state_val_14826 = (state_14825[(1)]);
if((state_val_14826 === (7))){
var inst_14804 = (state_14825[(7)]);
var inst_14805 = (state_14825[(8)]);
var inst_14804__$1 = (state_14825[(2)]);
var inst_14805__$1 = cljs.core.nth.call(null,inst_14804__$1,(0),null);
var inst_14806 = cljs.core.nth.call(null,inst_14804__$1,(1),null);
var inst_14807 = (inst_14805__$1 == null);
var state_14825__$1 = (function (){var statearr_14827 = state_14825;
(statearr_14827[(7)] = inst_14804__$1);

(statearr_14827[(8)] = inst_14805__$1);

(statearr_14827[(9)] = inst_14806);

return statearr_14827;
})();
if(cljs.core.truth_(inst_14807)){
var statearr_14828_14854 = state_14825__$1;
(statearr_14828_14854[(1)] = (8));

} else {
var statearr_14829_14855 = state_14825__$1;
(statearr_14829_14855[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14826 === (1))){
var inst_14796 = cljs.core.vec.call(null,chs);
var inst_14797 = inst_14796;
var state_14825__$1 = (function (){var statearr_14830 = state_14825;
(statearr_14830[(10)] = inst_14797);

return statearr_14830;
})();
var statearr_14831_14856 = state_14825__$1;
(statearr_14831_14856[(2)] = null);

(statearr_14831_14856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14826 === (4))){
var inst_14797 = (state_14825[(10)]);
var state_14825__$1 = state_14825;
return cljs.core.async.ioc_alts_BANG_.call(null,state_14825__$1,(7),inst_14797);
} else {
if((state_val_14826 === (6))){
var inst_14821 = (state_14825[(2)]);
var state_14825__$1 = state_14825;
var statearr_14832_14857 = state_14825__$1;
(statearr_14832_14857[(2)] = inst_14821);

(statearr_14832_14857[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14826 === (3))){
var inst_14823 = (state_14825[(2)]);
var state_14825__$1 = state_14825;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14825__$1,inst_14823);
} else {
if((state_val_14826 === (2))){
var inst_14797 = (state_14825[(10)]);
var inst_14799 = cljs.core.count.call(null,inst_14797);
var inst_14800 = (inst_14799 > (0));
var state_14825__$1 = state_14825;
if(cljs.core.truth_(inst_14800)){
var statearr_14834_14858 = state_14825__$1;
(statearr_14834_14858[(1)] = (4));

} else {
var statearr_14835_14859 = state_14825__$1;
(statearr_14835_14859[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14826 === (11))){
var inst_14797 = (state_14825[(10)]);
var inst_14814 = (state_14825[(2)]);
var tmp14833 = inst_14797;
var inst_14797__$1 = tmp14833;
var state_14825__$1 = (function (){var statearr_14836 = state_14825;
(statearr_14836[(11)] = inst_14814);

(statearr_14836[(10)] = inst_14797__$1);

return statearr_14836;
})();
var statearr_14837_14860 = state_14825__$1;
(statearr_14837_14860[(2)] = null);

(statearr_14837_14860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14826 === (9))){
var inst_14805 = (state_14825[(8)]);
var state_14825__$1 = state_14825;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14825__$1,(11),out,inst_14805);
} else {
if((state_val_14826 === (5))){
var inst_14819 = cljs.core.async.close_BANG_.call(null,out);
var state_14825__$1 = state_14825;
var statearr_14838_14861 = state_14825__$1;
(statearr_14838_14861[(2)] = inst_14819);

(statearr_14838_14861[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14826 === (10))){
var inst_14817 = (state_14825[(2)]);
var state_14825__$1 = state_14825;
var statearr_14839_14862 = state_14825__$1;
(statearr_14839_14862[(2)] = inst_14817);

(statearr_14839_14862[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14826 === (8))){
var inst_14797 = (state_14825[(10)]);
var inst_14804 = (state_14825[(7)]);
var inst_14805 = (state_14825[(8)]);
var inst_14806 = (state_14825[(9)]);
var inst_14809 = (function (){var cs = inst_14797;
var vec__14802 = inst_14804;
var v = inst_14805;
var c = inst_14806;
return ((function (cs,vec__14802,v,c,inst_14797,inst_14804,inst_14805,inst_14806,state_val_14826,c__10525__auto___14853,out){
return (function (p1__14792_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__14792_SHARP_);
});
;})(cs,vec__14802,v,c,inst_14797,inst_14804,inst_14805,inst_14806,state_val_14826,c__10525__auto___14853,out))
})();
var inst_14810 = cljs.core.filterv.call(null,inst_14809,inst_14797);
var inst_14797__$1 = inst_14810;
var state_14825__$1 = (function (){var statearr_14840 = state_14825;
(statearr_14840[(10)] = inst_14797__$1);

return statearr_14840;
})();
var statearr_14841_14863 = state_14825__$1;
(statearr_14841_14863[(2)] = null);

(statearr_14841_14863[(1)] = (2));


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
});})(c__10525__auto___14853,out))
;
return ((function (switch__10460__auto__,c__10525__auto___14853,out){
return (function() {
var cljs$core$async$state_machine__10461__auto__ = null;
var cljs$core$async$state_machine__10461__auto____0 = (function (){
var statearr_14845 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14845[(0)] = cljs$core$async$state_machine__10461__auto__);

(statearr_14845[(1)] = (1));

return statearr_14845;
});
var cljs$core$async$state_machine__10461__auto____1 = (function (state_14825){
while(true){
var ret_value__10462__auto__ = (function (){try{while(true){
var result__10463__auto__ = switch__10460__auto__.call(null,state_14825);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10463__auto__;
}
break;
}
}catch (e14846){if((e14846 instanceof Object)){
var ex__10464__auto__ = e14846;
var statearr_14847_14864 = state_14825;
(statearr_14847_14864[(5)] = ex__10464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14825);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14846;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14865 = state_14825;
state_14825 = G__14865;
continue;
} else {
return ret_value__10462__auto__;
}
break;
}
});
cljs$core$async$state_machine__10461__auto__ = function(state_14825){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10461__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10461__auto____1.call(this,state_14825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10461__auto____0;
cljs$core$async$state_machine__10461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10461__auto____1;
return cljs$core$async$state_machine__10461__auto__;
})()
;})(switch__10460__auto__,c__10525__auto___14853,out))
})();
var state__10527__auto__ = (function (){var statearr_14848 = f__10526__auto__.call(null);
(statearr_14848[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10525__auto___14853);

return statearr_14848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10527__auto__);
});})(c__10525__auto___14853,out))
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
var args14866 = [];
var len__9177__auto___14915 = arguments.length;
var i__9178__auto___14916 = (0);
while(true){
if((i__9178__auto___14916 < len__9177__auto___14915)){
args14866.push((arguments[i__9178__auto___14916]));

var G__14917 = (i__9178__auto___14916 + (1));
i__9178__auto___14916 = G__14917;
continue;
} else {
}
break;
}

var G__14868 = args14866.length;
switch (G__14868) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14866.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10525__auto___14919 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10525__auto___14919,out){
return (function (){
var f__10526__auto__ = (function (){var switch__10460__auto__ = ((function (c__10525__auto___14919,out){
return (function (state_14892){
var state_val_14893 = (state_14892[(1)]);
if((state_val_14893 === (7))){
var inst_14874 = (state_14892[(7)]);
var inst_14874__$1 = (state_14892[(2)]);
var inst_14875 = (inst_14874__$1 == null);
var inst_14876 = cljs.core.not.call(null,inst_14875);
var state_14892__$1 = (function (){var statearr_14894 = state_14892;
(statearr_14894[(7)] = inst_14874__$1);

return statearr_14894;
})();
if(inst_14876){
var statearr_14895_14920 = state_14892__$1;
(statearr_14895_14920[(1)] = (8));

} else {
var statearr_14896_14921 = state_14892__$1;
(statearr_14896_14921[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14893 === (1))){
var inst_14869 = (0);
var state_14892__$1 = (function (){var statearr_14897 = state_14892;
(statearr_14897[(8)] = inst_14869);

return statearr_14897;
})();
var statearr_14898_14922 = state_14892__$1;
(statearr_14898_14922[(2)] = null);

(statearr_14898_14922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14893 === (4))){
var state_14892__$1 = state_14892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14892__$1,(7),ch);
} else {
if((state_val_14893 === (6))){
var inst_14887 = (state_14892[(2)]);
var state_14892__$1 = state_14892;
var statearr_14899_14923 = state_14892__$1;
(statearr_14899_14923[(2)] = inst_14887);

(statearr_14899_14923[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14893 === (3))){
var inst_14889 = (state_14892[(2)]);
var inst_14890 = cljs.core.async.close_BANG_.call(null,out);
var state_14892__$1 = (function (){var statearr_14900 = state_14892;
(statearr_14900[(9)] = inst_14889);

return statearr_14900;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14892__$1,inst_14890);
} else {
if((state_val_14893 === (2))){
var inst_14869 = (state_14892[(8)]);
var inst_14871 = (inst_14869 < n);
var state_14892__$1 = state_14892;
if(cljs.core.truth_(inst_14871)){
var statearr_14901_14924 = state_14892__$1;
(statearr_14901_14924[(1)] = (4));

} else {
var statearr_14902_14925 = state_14892__$1;
(statearr_14902_14925[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14893 === (11))){
var inst_14869 = (state_14892[(8)]);
var inst_14879 = (state_14892[(2)]);
var inst_14880 = (inst_14869 + (1));
var inst_14869__$1 = inst_14880;
var state_14892__$1 = (function (){var statearr_14903 = state_14892;
(statearr_14903[(10)] = inst_14879);

(statearr_14903[(8)] = inst_14869__$1);

return statearr_14903;
})();
var statearr_14904_14926 = state_14892__$1;
(statearr_14904_14926[(2)] = null);

(statearr_14904_14926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14893 === (9))){
var state_14892__$1 = state_14892;
var statearr_14905_14927 = state_14892__$1;
(statearr_14905_14927[(2)] = null);

(statearr_14905_14927[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14893 === (5))){
var state_14892__$1 = state_14892;
var statearr_14906_14928 = state_14892__$1;
(statearr_14906_14928[(2)] = null);

(statearr_14906_14928[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14893 === (10))){
var inst_14884 = (state_14892[(2)]);
var state_14892__$1 = state_14892;
var statearr_14907_14929 = state_14892__$1;
(statearr_14907_14929[(2)] = inst_14884);

(statearr_14907_14929[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14893 === (8))){
var inst_14874 = (state_14892[(7)]);
var state_14892__$1 = state_14892;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14892__$1,(11),out,inst_14874);
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
});})(c__10525__auto___14919,out))
;
return ((function (switch__10460__auto__,c__10525__auto___14919,out){
return (function() {
var cljs$core$async$state_machine__10461__auto__ = null;
var cljs$core$async$state_machine__10461__auto____0 = (function (){
var statearr_14911 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14911[(0)] = cljs$core$async$state_machine__10461__auto__);

(statearr_14911[(1)] = (1));

return statearr_14911;
});
var cljs$core$async$state_machine__10461__auto____1 = (function (state_14892){
while(true){
var ret_value__10462__auto__ = (function (){try{while(true){
var result__10463__auto__ = switch__10460__auto__.call(null,state_14892);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10463__auto__;
}
break;
}
}catch (e14912){if((e14912 instanceof Object)){
var ex__10464__auto__ = e14912;
var statearr_14913_14930 = state_14892;
(statearr_14913_14930[(5)] = ex__10464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14892);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14912;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14931 = state_14892;
state_14892 = G__14931;
continue;
} else {
return ret_value__10462__auto__;
}
break;
}
});
cljs$core$async$state_machine__10461__auto__ = function(state_14892){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10461__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10461__auto____1.call(this,state_14892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10461__auto____0;
cljs$core$async$state_machine__10461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10461__auto____1;
return cljs$core$async$state_machine__10461__auto__;
})()
;})(switch__10460__auto__,c__10525__auto___14919,out))
})();
var state__10527__auto__ = (function (){var statearr_14914 = f__10526__auto__.call(null);
(statearr_14914[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10525__auto___14919);

return statearr_14914;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10527__auto__);
});})(c__10525__auto___14919,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async14939 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14939 = (function (map_LT_,f,ch,meta14940){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta14940 = meta14940;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14939.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14941,meta14940__$1){
var self__ = this;
var _14941__$1 = this;
return (new cljs.core.async.t_cljs$core$async14939(self__.map_LT_,self__.f,self__.ch,meta14940__$1));
});

cljs.core.async.t_cljs$core$async14939.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14941){
var self__ = this;
var _14941__$1 = this;
return self__.meta14940;
});

cljs.core.async.t_cljs$core$async14939.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async14939.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14939.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14939.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async14939.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async14942 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14942 = (function (map_LT_,f,ch,meta14940,_,fn1,meta14943){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta14940 = meta14940;
this._ = _;
this.fn1 = fn1;
this.meta14943 = meta14943;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14942.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_14944,meta14943__$1){
var self__ = this;
var _14944__$1 = this;
return (new cljs.core.async.t_cljs$core$async14942(self__.map_LT_,self__.f,self__.ch,self__.meta14940,self__._,self__.fn1,meta14943__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async14942.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_14944){
var self__ = this;
var _14944__$1 = this;
return self__.meta14943;
});})(___$1))
;

cljs.core.async.t_cljs$core$async14942.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async14942.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async14942.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async14942.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__14932_SHARP_){
return f1.call(null,(((p1__14932_SHARP_ == null))?null:self__.f.call(null,p1__14932_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async14942.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14940","meta14940",613220274,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async14939","cljs.core.async/t_cljs$core$async14939",-7121053,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta14943","meta14943",-1948130807,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async14942.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14942.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14942";

cljs.core.async.t_cljs$core$async14942.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__8717__auto__,writer__8718__auto__,opt__8719__auto__){
return cljs.core._write.call(null,writer__8718__auto__,"cljs.core.async/t_cljs$core$async14942");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async14942 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async14942(map_LT___$1,f__$1,ch__$1,meta14940__$1,___$2,fn1__$1,meta14943){
return (new cljs.core.async.t_cljs$core$async14942(map_LT___$1,f__$1,ch__$1,meta14940__$1,___$2,fn1__$1,meta14943));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async14942(self__.map_LT_,self__.f,self__.ch,self__.meta14940,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__8107__auto__ = ret;
if(cljs.core.truth_(and__8107__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__8107__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async14939.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async14939.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async14939.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14940","meta14940",613220274,null)], null);
});

cljs.core.async.t_cljs$core$async14939.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14939.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14939";

cljs.core.async.t_cljs$core$async14939.cljs$lang$ctorPrWriter = (function (this__8717__auto__,writer__8718__auto__,opt__8719__auto__){
return cljs.core._write.call(null,writer__8718__auto__,"cljs.core.async/t_cljs$core$async14939");
});

cljs.core.async.__GT_t_cljs$core$async14939 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async14939(map_LT___$1,f__$1,ch__$1,meta14940){
return (new cljs.core.async.t_cljs$core$async14939(map_LT___$1,f__$1,ch__$1,meta14940));
});

}

return (new cljs.core.async.t_cljs$core$async14939(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async14948 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14948 = (function (map_GT_,f,ch,meta14949){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta14949 = meta14949;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14948.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14950,meta14949__$1){
var self__ = this;
var _14950__$1 = this;
return (new cljs.core.async.t_cljs$core$async14948(self__.map_GT_,self__.f,self__.ch,meta14949__$1));
});

cljs.core.async.t_cljs$core$async14948.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14950){
var self__ = this;
var _14950__$1 = this;
return self__.meta14949;
});

cljs.core.async.t_cljs$core$async14948.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async14948.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14948.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async14948.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async14948.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async14948.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async14948.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14949","meta14949",-2020049543,null)], null);
});

cljs.core.async.t_cljs$core$async14948.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14948.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14948";

cljs.core.async.t_cljs$core$async14948.cljs$lang$ctorPrWriter = (function (this__8717__auto__,writer__8718__auto__,opt__8719__auto__){
return cljs.core._write.call(null,writer__8718__auto__,"cljs.core.async/t_cljs$core$async14948");
});

cljs.core.async.__GT_t_cljs$core$async14948 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async14948(map_GT___$1,f__$1,ch__$1,meta14949){
return (new cljs.core.async.t_cljs$core$async14948(map_GT___$1,f__$1,ch__$1,meta14949));
});

}

return (new cljs.core.async.t_cljs$core$async14948(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async14954 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14954 = (function (filter_GT_,p,ch,meta14955){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta14955 = meta14955;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14954.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14956,meta14955__$1){
var self__ = this;
var _14956__$1 = this;
return (new cljs.core.async.t_cljs$core$async14954(self__.filter_GT_,self__.p,self__.ch,meta14955__$1));
});

cljs.core.async.t_cljs$core$async14954.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14956){
var self__ = this;
var _14956__$1 = this;
return self__.meta14955;
});

cljs.core.async.t_cljs$core$async14954.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async14954.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14954.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14954.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async14954.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async14954.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async14954.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async14954.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14955","meta14955",-907983719,null)], null);
});

cljs.core.async.t_cljs$core$async14954.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14954.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14954";

cljs.core.async.t_cljs$core$async14954.cljs$lang$ctorPrWriter = (function (this__8717__auto__,writer__8718__auto__,opt__8719__auto__){
return cljs.core._write.call(null,writer__8718__auto__,"cljs.core.async/t_cljs$core$async14954");
});

cljs.core.async.__GT_t_cljs$core$async14954 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async14954(filter_GT___$1,p__$1,ch__$1,meta14955){
return (new cljs.core.async.t_cljs$core$async14954(filter_GT___$1,p__$1,ch__$1,meta14955));
});

}

return (new cljs.core.async.t_cljs$core$async14954(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args14957 = [];
var len__9177__auto___15001 = arguments.length;
var i__9178__auto___15002 = (0);
while(true){
if((i__9178__auto___15002 < len__9177__auto___15001)){
args14957.push((arguments[i__9178__auto___15002]));

var G__15003 = (i__9178__auto___15002 + (1));
i__9178__auto___15002 = G__15003;
continue;
} else {
}
break;
}

var G__14959 = args14957.length;
switch (G__14959) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14957.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10525__auto___15005 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10525__auto___15005,out){
return (function (){
var f__10526__auto__ = (function (){var switch__10460__auto__ = ((function (c__10525__auto___15005,out){
return (function (state_14980){
var state_val_14981 = (state_14980[(1)]);
if((state_val_14981 === (7))){
var inst_14976 = (state_14980[(2)]);
var state_14980__$1 = state_14980;
var statearr_14982_15006 = state_14980__$1;
(statearr_14982_15006[(2)] = inst_14976);

(statearr_14982_15006[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14981 === (1))){
var state_14980__$1 = state_14980;
var statearr_14983_15007 = state_14980__$1;
(statearr_14983_15007[(2)] = null);

(statearr_14983_15007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14981 === (4))){
var inst_14962 = (state_14980[(7)]);
var inst_14962__$1 = (state_14980[(2)]);
var inst_14963 = (inst_14962__$1 == null);
var state_14980__$1 = (function (){var statearr_14984 = state_14980;
(statearr_14984[(7)] = inst_14962__$1);

return statearr_14984;
})();
if(cljs.core.truth_(inst_14963)){
var statearr_14985_15008 = state_14980__$1;
(statearr_14985_15008[(1)] = (5));

} else {
var statearr_14986_15009 = state_14980__$1;
(statearr_14986_15009[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14981 === (6))){
var inst_14962 = (state_14980[(7)]);
var inst_14967 = p.call(null,inst_14962);
var state_14980__$1 = state_14980;
if(cljs.core.truth_(inst_14967)){
var statearr_14987_15010 = state_14980__$1;
(statearr_14987_15010[(1)] = (8));

} else {
var statearr_14988_15011 = state_14980__$1;
(statearr_14988_15011[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14981 === (3))){
var inst_14978 = (state_14980[(2)]);
var state_14980__$1 = state_14980;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14980__$1,inst_14978);
} else {
if((state_val_14981 === (2))){
var state_14980__$1 = state_14980;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14980__$1,(4),ch);
} else {
if((state_val_14981 === (11))){
var inst_14970 = (state_14980[(2)]);
var state_14980__$1 = state_14980;
var statearr_14989_15012 = state_14980__$1;
(statearr_14989_15012[(2)] = inst_14970);

(statearr_14989_15012[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14981 === (9))){
var state_14980__$1 = state_14980;
var statearr_14990_15013 = state_14980__$1;
(statearr_14990_15013[(2)] = null);

(statearr_14990_15013[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14981 === (5))){
var inst_14965 = cljs.core.async.close_BANG_.call(null,out);
var state_14980__$1 = state_14980;
var statearr_14991_15014 = state_14980__$1;
(statearr_14991_15014[(2)] = inst_14965);

(statearr_14991_15014[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14981 === (10))){
var inst_14973 = (state_14980[(2)]);
var state_14980__$1 = (function (){var statearr_14992 = state_14980;
(statearr_14992[(8)] = inst_14973);

return statearr_14992;
})();
var statearr_14993_15015 = state_14980__$1;
(statearr_14993_15015[(2)] = null);

(statearr_14993_15015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14981 === (8))){
var inst_14962 = (state_14980[(7)]);
var state_14980__$1 = state_14980;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14980__$1,(11),out,inst_14962);
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
});})(c__10525__auto___15005,out))
;
return ((function (switch__10460__auto__,c__10525__auto___15005,out){
return (function() {
var cljs$core$async$state_machine__10461__auto__ = null;
var cljs$core$async$state_machine__10461__auto____0 = (function (){
var statearr_14997 = [null,null,null,null,null,null,null,null,null];
(statearr_14997[(0)] = cljs$core$async$state_machine__10461__auto__);

(statearr_14997[(1)] = (1));

return statearr_14997;
});
var cljs$core$async$state_machine__10461__auto____1 = (function (state_14980){
while(true){
var ret_value__10462__auto__ = (function (){try{while(true){
var result__10463__auto__ = switch__10460__auto__.call(null,state_14980);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10463__auto__;
}
break;
}
}catch (e14998){if((e14998 instanceof Object)){
var ex__10464__auto__ = e14998;
var statearr_14999_15016 = state_14980;
(statearr_14999_15016[(5)] = ex__10464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14980);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14998;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15017 = state_14980;
state_14980 = G__15017;
continue;
} else {
return ret_value__10462__auto__;
}
break;
}
});
cljs$core$async$state_machine__10461__auto__ = function(state_14980){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10461__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10461__auto____1.call(this,state_14980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10461__auto____0;
cljs$core$async$state_machine__10461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10461__auto____1;
return cljs$core$async$state_machine__10461__auto__;
})()
;})(switch__10460__auto__,c__10525__auto___15005,out))
})();
var state__10527__auto__ = (function (){var statearr_15000 = f__10526__auto__.call(null);
(statearr_15000[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10525__auto___15005);

return statearr_15000;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10527__auto__);
});})(c__10525__auto___15005,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args15018 = [];
var len__9177__auto___15021 = arguments.length;
var i__9178__auto___15022 = (0);
while(true){
if((i__9178__auto___15022 < len__9177__auto___15021)){
args15018.push((arguments[i__9178__auto___15022]));

var G__15023 = (i__9178__auto___15022 + (1));
i__9178__auto___15022 = G__15023;
continue;
} else {
}
break;
}

var G__15020 = args15018.length;
switch (G__15020) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15018.length)].join('')));

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
var c__10525__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10525__auto__){
return (function (){
var f__10526__auto__ = (function (){var switch__10460__auto__ = ((function (c__10525__auto__){
return (function (state_15190){
var state_val_15191 = (state_15190[(1)]);
if((state_val_15191 === (7))){
var inst_15186 = (state_15190[(2)]);
var state_15190__$1 = state_15190;
var statearr_15192_15233 = state_15190__$1;
(statearr_15192_15233[(2)] = inst_15186);

(statearr_15192_15233[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15191 === (20))){
var inst_15156 = (state_15190[(7)]);
var inst_15167 = (state_15190[(2)]);
var inst_15168 = cljs.core.next.call(null,inst_15156);
var inst_15142 = inst_15168;
var inst_15143 = null;
var inst_15144 = (0);
var inst_15145 = (0);
var state_15190__$1 = (function (){var statearr_15193 = state_15190;
(statearr_15193[(8)] = inst_15143);

(statearr_15193[(9)] = inst_15142);

(statearr_15193[(10)] = inst_15167);

(statearr_15193[(11)] = inst_15145);

(statearr_15193[(12)] = inst_15144);

return statearr_15193;
})();
var statearr_15194_15234 = state_15190__$1;
(statearr_15194_15234[(2)] = null);

(statearr_15194_15234[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15191 === (1))){
var state_15190__$1 = state_15190;
var statearr_15195_15235 = state_15190__$1;
(statearr_15195_15235[(2)] = null);

(statearr_15195_15235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15191 === (4))){
var inst_15131 = (state_15190[(13)]);
var inst_15131__$1 = (state_15190[(2)]);
var inst_15132 = (inst_15131__$1 == null);
var state_15190__$1 = (function (){var statearr_15196 = state_15190;
(statearr_15196[(13)] = inst_15131__$1);

return statearr_15196;
})();
if(cljs.core.truth_(inst_15132)){
var statearr_15197_15236 = state_15190__$1;
(statearr_15197_15236[(1)] = (5));

} else {
var statearr_15198_15237 = state_15190__$1;
(statearr_15198_15237[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15191 === (15))){
var state_15190__$1 = state_15190;
var statearr_15202_15238 = state_15190__$1;
(statearr_15202_15238[(2)] = null);

(statearr_15202_15238[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15191 === (21))){
var state_15190__$1 = state_15190;
var statearr_15203_15239 = state_15190__$1;
(statearr_15203_15239[(2)] = null);

(statearr_15203_15239[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15191 === (13))){
var inst_15143 = (state_15190[(8)]);
var inst_15142 = (state_15190[(9)]);
var inst_15145 = (state_15190[(11)]);
var inst_15144 = (state_15190[(12)]);
var inst_15152 = (state_15190[(2)]);
var inst_15153 = (inst_15145 + (1));
var tmp15199 = inst_15143;
var tmp15200 = inst_15142;
var tmp15201 = inst_15144;
var inst_15142__$1 = tmp15200;
var inst_15143__$1 = tmp15199;
var inst_15144__$1 = tmp15201;
var inst_15145__$1 = inst_15153;
var state_15190__$1 = (function (){var statearr_15204 = state_15190;
(statearr_15204[(8)] = inst_15143__$1);

(statearr_15204[(9)] = inst_15142__$1);

(statearr_15204[(11)] = inst_15145__$1);

(statearr_15204[(12)] = inst_15144__$1);

(statearr_15204[(14)] = inst_15152);

return statearr_15204;
})();
var statearr_15205_15240 = state_15190__$1;
(statearr_15205_15240[(2)] = null);

(statearr_15205_15240[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15191 === (22))){
var state_15190__$1 = state_15190;
var statearr_15206_15241 = state_15190__$1;
(statearr_15206_15241[(2)] = null);

(statearr_15206_15241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15191 === (6))){
var inst_15131 = (state_15190[(13)]);
var inst_15140 = f.call(null,inst_15131);
var inst_15141 = cljs.core.seq.call(null,inst_15140);
var inst_15142 = inst_15141;
var inst_15143 = null;
var inst_15144 = (0);
var inst_15145 = (0);
var state_15190__$1 = (function (){var statearr_15207 = state_15190;
(statearr_15207[(8)] = inst_15143);

(statearr_15207[(9)] = inst_15142);

(statearr_15207[(11)] = inst_15145);

(statearr_15207[(12)] = inst_15144);

return statearr_15207;
})();
var statearr_15208_15242 = state_15190__$1;
(statearr_15208_15242[(2)] = null);

(statearr_15208_15242[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15191 === (17))){
var inst_15156 = (state_15190[(7)]);
var inst_15160 = cljs.core.chunk_first.call(null,inst_15156);
var inst_15161 = cljs.core.chunk_rest.call(null,inst_15156);
var inst_15162 = cljs.core.count.call(null,inst_15160);
var inst_15142 = inst_15161;
var inst_15143 = inst_15160;
var inst_15144 = inst_15162;
var inst_15145 = (0);
var state_15190__$1 = (function (){var statearr_15209 = state_15190;
(statearr_15209[(8)] = inst_15143);

(statearr_15209[(9)] = inst_15142);

(statearr_15209[(11)] = inst_15145);

(statearr_15209[(12)] = inst_15144);

return statearr_15209;
})();
var statearr_15210_15243 = state_15190__$1;
(statearr_15210_15243[(2)] = null);

(statearr_15210_15243[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15191 === (3))){
var inst_15188 = (state_15190[(2)]);
var state_15190__$1 = state_15190;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15190__$1,inst_15188);
} else {
if((state_val_15191 === (12))){
var inst_15176 = (state_15190[(2)]);
var state_15190__$1 = state_15190;
var statearr_15211_15244 = state_15190__$1;
(statearr_15211_15244[(2)] = inst_15176);

(statearr_15211_15244[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15191 === (2))){
var state_15190__$1 = state_15190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15190__$1,(4),in$);
} else {
if((state_val_15191 === (23))){
var inst_15184 = (state_15190[(2)]);
var state_15190__$1 = state_15190;
var statearr_15212_15245 = state_15190__$1;
(statearr_15212_15245[(2)] = inst_15184);

(statearr_15212_15245[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15191 === (19))){
var inst_15171 = (state_15190[(2)]);
var state_15190__$1 = state_15190;
var statearr_15213_15246 = state_15190__$1;
(statearr_15213_15246[(2)] = inst_15171);

(statearr_15213_15246[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15191 === (11))){
var inst_15142 = (state_15190[(9)]);
var inst_15156 = (state_15190[(7)]);
var inst_15156__$1 = cljs.core.seq.call(null,inst_15142);
var state_15190__$1 = (function (){var statearr_15214 = state_15190;
(statearr_15214[(7)] = inst_15156__$1);

return statearr_15214;
})();
if(inst_15156__$1){
var statearr_15215_15247 = state_15190__$1;
(statearr_15215_15247[(1)] = (14));

} else {
var statearr_15216_15248 = state_15190__$1;
(statearr_15216_15248[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15191 === (9))){
var inst_15178 = (state_15190[(2)]);
var inst_15179 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_15190__$1 = (function (){var statearr_15217 = state_15190;
(statearr_15217[(15)] = inst_15178);

return statearr_15217;
})();
if(cljs.core.truth_(inst_15179)){
var statearr_15218_15249 = state_15190__$1;
(statearr_15218_15249[(1)] = (21));

} else {
var statearr_15219_15250 = state_15190__$1;
(statearr_15219_15250[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15191 === (5))){
var inst_15134 = cljs.core.async.close_BANG_.call(null,out);
var state_15190__$1 = state_15190;
var statearr_15220_15251 = state_15190__$1;
(statearr_15220_15251[(2)] = inst_15134);

(statearr_15220_15251[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15191 === (14))){
var inst_15156 = (state_15190[(7)]);
var inst_15158 = cljs.core.chunked_seq_QMARK_.call(null,inst_15156);
var state_15190__$1 = state_15190;
if(inst_15158){
var statearr_15221_15252 = state_15190__$1;
(statearr_15221_15252[(1)] = (17));

} else {
var statearr_15222_15253 = state_15190__$1;
(statearr_15222_15253[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15191 === (16))){
var inst_15174 = (state_15190[(2)]);
var state_15190__$1 = state_15190;
var statearr_15223_15254 = state_15190__$1;
(statearr_15223_15254[(2)] = inst_15174);

(statearr_15223_15254[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15191 === (10))){
var inst_15143 = (state_15190[(8)]);
var inst_15145 = (state_15190[(11)]);
var inst_15150 = cljs.core._nth.call(null,inst_15143,inst_15145);
var state_15190__$1 = state_15190;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15190__$1,(13),out,inst_15150);
} else {
if((state_val_15191 === (18))){
var inst_15156 = (state_15190[(7)]);
var inst_15165 = cljs.core.first.call(null,inst_15156);
var state_15190__$1 = state_15190;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15190__$1,(20),out,inst_15165);
} else {
if((state_val_15191 === (8))){
var inst_15145 = (state_15190[(11)]);
var inst_15144 = (state_15190[(12)]);
var inst_15147 = (inst_15145 < inst_15144);
var inst_15148 = inst_15147;
var state_15190__$1 = state_15190;
if(cljs.core.truth_(inst_15148)){
var statearr_15224_15255 = state_15190__$1;
(statearr_15224_15255[(1)] = (10));

} else {
var statearr_15225_15256 = state_15190__$1;
(statearr_15225_15256[(1)] = (11));

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
});})(c__10525__auto__))
;
return ((function (switch__10460__auto__,c__10525__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__10461__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__10461__auto____0 = (function (){
var statearr_15229 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15229[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10461__auto__);

(statearr_15229[(1)] = (1));

return statearr_15229;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10461__auto____1 = (function (state_15190){
while(true){
var ret_value__10462__auto__ = (function (){try{while(true){
var result__10463__auto__ = switch__10460__auto__.call(null,state_15190);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10463__auto__;
}
break;
}
}catch (e15230){if((e15230 instanceof Object)){
var ex__10464__auto__ = e15230;
var statearr_15231_15257 = state_15190;
(statearr_15231_15257[(5)] = ex__10464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15190);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15230;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15258 = state_15190;
state_15190 = G__15258;
continue;
} else {
return ret_value__10462__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10461__auto__ = function(state_15190){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10461__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10461__auto____1.call(this,state_15190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10461__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10461__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10461__auto__;
})()
;})(switch__10460__auto__,c__10525__auto__))
})();
var state__10527__auto__ = (function (){var statearr_15232 = f__10526__auto__.call(null);
(statearr_15232[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10525__auto__);

return statearr_15232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10527__auto__);
});})(c__10525__auto__))
);

return c__10525__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args15259 = [];
var len__9177__auto___15262 = arguments.length;
var i__9178__auto___15263 = (0);
while(true){
if((i__9178__auto___15263 < len__9177__auto___15262)){
args15259.push((arguments[i__9178__auto___15263]));

var G__15264 = (i__9178__auto___15263 + (1));
i__9178__auto___15263 = G__15264;
continue;
} else {
}
break;
}

var G__15261 = args15259.length;
switch (G__15261) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15259.length)].join('')));

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
var args15266 = [];
var len__9177__auto___15269 = arguments.length;
var i__9178__auto___15270 = (0);
while(true){
if((i__9178__auto___15270 < len__9177__auto___15269)){
args15266.push((arguments[i__9178__auto___15270]));

var G__15271 = (i__9178__auto___15270 + (1));
i__9178__auto___15270 = G__15271;
continue;
} else {
}
break;
}

var G__15268 = args15266.length;
switch (G__15268) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15266.length)].join('')));

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
var args15273 = [];
var len__9177__auto___15324 = arguments.length;
var i__9178__auto___15325 = (0);
while(true){
if((i__9178__auto___15325 < len__9177__auto___15324)){
args15273.push((arguments[i__9178__auto___15325]));

var G__15326 = (i__9178__auto___15325 + (1));
i__9178__auto___15325 = G__15326;
continue;
} else {
}
break;
}

var G__15275 = args15273.length;
switch (G__15275) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15273.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10525__auto___15328 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10525__auto___15328,out){
return (function (){
var f__10526__auto__ = (function (){var switch__10460__auto__ = ((function (c__10525__auto___15328,out){
return (function (state_15299){
var state_val_15300 = (state_15299[(1)]);
if((state_val_15300 === (7))){
var inst_15294 = (state_15299[(2)]);
var state_15299__$1 = state_15299;
var statearr_15301_15329 = state_15299__$1;
(statearr_15301_15329[(2)] = inst_15294);

(statearr_15301_15329[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15300 === (1))){
var inst_15276 = null;
var state_15299__$1 = (function (){var statearr_15302 = state_15299;
(statearr_15302[(7)] = inst_15276);

return statearr_15302;
})();
var statearr_15303_15330 = state_15299__$1;
(statearr_15303_15330[(2)] = null);

(statearr_15303_15330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15300 === (4))){
var inst_15279 = (state_15299[(8)]);
var inst_15279__$1 = (state_15299[(2)]);
var inst_15280 = (inst_15279__$1 == null);
var inst_15281 = cljs.core.not.call(null,inst_15280);
var state_15299__$1 = (function (){var statearr_15304 = state_15299;
(statearr_15304[(8)] = inst_15279__$1);

return statearr_15304;
})();
if(inst_15281){
var statearr_15305_15331 = state_15299__$1;
(statearr_15305_15331[(1)] = (5));

} else {
var statearr_15306_15332 = state_15299__$1;
(statearr_15306_15332[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15300 === (6))){
var state_15299__$1 = state_15299;
var statearr_15307_15333 = state_15299__$1;
(statearr_15307_15333[(2)] = null);

(statearr_15307_15333[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15300 === (3))){
var inst_15296 = (state_15299[(2)]);
var inst_15297 = cljs.core.async.close_BANG_.call(null,out);
var state_15299__$1 = (function (){var statearr_15308 = state_15299;
(statearr_15308[(9)] = inst_15296);

return statearr_15308;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15299__$1,inst_15297);
} else {
if((state_val_15300 === (2))){
var state_15299__$1 = state_15299;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15299__$1,(4),ch);
} else {
if((state_val_15300 === (11))){
var inst_15279 = (state_15299[(8)]);
var inst_15288 = (state_15299[(2)]);
var inst_15276 = inst_15279;
var state_15299__$1 = (function (){var statearr_15309 = state_15299;
(statearr_15309[(10)] = inst_15288);

(statearr_15309[(7)] = inst_15276);

return statearr_15309;
})();
var statearr_15310_15334 = state_15299__$1;
(statearr_15310_15334[(2)] = null);

(statearr_15310_15334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15300 === (9))){
var inst_15279 = (state_15299[(8)]);
var state_15299__$1 = state_15299;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15299__$1,(11),out,inst_15279);
} else {
if((state_val_15300 === (5))){
var inst_15276 = (state_15299[(7)]);
var inst_15279 = (state_15299[(8)]);
var inst_15283 = cljs.core._EQ_.call(null,inst_15279,inst_15276);
var state_15299__$1 = state_15299;
if(inst_15283){
var statearr_15312_15335 = state_15299__$1;
(statearr_15312_15335[(1)] = (8));

} else {
var statearr_15313_15336 = state_15299__$1;
(statearr_15313_15336[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15300 === (10))){
var inst_15291 = (state_15299[(2)]);
var state_15299__$1 = state_15299;
var statearr_15314_15337 = state_15299__$1;
(statearr_15314_15337[(2)] = inst_15291);

(statearr_15314_15337[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15300 === (8))){
var inst_15276 = (state_15299[(7)]);
var tmp15311 = inst_15276;
var inst_15276__$1 = tmp15311;
var state_15299__$1 = (function (){var statearr_15315 = state_15299;
(statearr_15315[(7)] = inst_15276__$1);

return statearr_15315;
})();
var statearr_15316_15338 = state_15299__$1;
(statearr_15316_15338[(2)] = null);

(statearr_15316_15338[(1)] = (2));


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
});})(c__10525__auto___15328,out))
;
return ((function (switch__10460__auto__,c__10525__auto___15328,out){
return (function() {
var cljs$core$async$state_machine__10461__auto__ = null;
var cljs$core$async$state_machine__10461__auto____0 = (function (){
var statearr_15320 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15320[(0)] = cljs$core$async$state_machine__10461__auto__);

(statearr_15320[(1)] = (1));

return statearr_15320;
});
var cljs$core$async$state_machine__10461__auto____1 = (function (state_15299){
while(true){
var ret_value__10462__auto__ = (function (){try{while(true){
var result__10463__auto__ = switch__10460__auto__.call(null,state_15299);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10463__auto__;
}
break;
}
}catch (e15321){if((e15321 instanceof Object)){
var ex__10464__auto__ = e15321;
var statearr_15322_15339 = state_15299;
(statearr_15322_15339[(5)] = ex__10464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15299);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15321;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15340 = state_15299;
state_15299 = G__15340;
continue;
} else {
return ret_value__10462__auto__;
}
break;
}
});
cljs$core$async$state_machine__10461__auto__ = function(state_15299){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10461__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10461__auto____1.call(this,state_15299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10461__auto____0;
cljs$core$async$state_machine__10461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10461__auto____1;
return cljs$core$async$state_machine__10461__auto__;
})()
;})(switch__10460__auto__,c__10525__auto___15328,out))
})();
var state__10527__auto__ = (function (){var statearr_15323 = f__10526__auto__.call(null);
(statearr_15323[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10525__auto___15328);

return statearr_15323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10527__auto__);
});})(c__10525__auto___15328,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args15341 = [];
var len__9177__auto___15411 = arguments.length;
var i__9178__auto___15412 = (0);
while(true){
if((i__9178__auto___15412 < len__9177__auto___15411)){
args15341.push((arguments[i__9178__auto___15412]));

var G__15413 = (i__9178__auto___15412 + (1));
i__9178__auto___15412 = G__15413;
continue;
} else {
}
break;
}

var G__15343 = args15341.length;
switch (G__15343) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15341.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10525__auto___15415 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10525__auto___15415,out){
return (function (){
var f__10526__auto__ = (function (){var switch__10460__auto__ = ((function (c__10525__auto___15415,out){
return (function (state_15381){
var state_val_15382 = (state_15381[(1)]);
if((state_val_15382 === (7))){
var inst_15377 = (state_15381[(2)]);
var state_15381__$1 = state_15381;
var statearr_15383_15416 = state_15381__$1;
(statearr_15383_15416[(2)] = inst_15377);

(statearr_15383_15416[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15382 === (1))){
var inst_15344 = (new Array(n));
var inst_15345 = inst_15344;
var inst_15346 = (0);
var state_15381__$1 = (function (){var statearr_15384 = state_15381;
(statearr_15384[(7)] = inst_15345);

(statearr_15384[(8)] = inst_15346);

return statearr_15384;
})();
var statearr_15385_15417 = state_15381__$1;
(statearr_15385_15417[(2)] = null);

(statearr_15385_15417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15382 === (4))){
var inst_15349 = (state_15381[(9)]);
var inst_15349__$1 = (state_15381[(2)]);
var inst_15350 = (inst_15349__$1 == null);
var inst_15351 = cljs.core.not.call(null,inst_15350);
var state_15381__$1 = (function (){var statearr_15386 = state_15381;
(statearr_15386[(9)] = inst_15349__$1);

return statearr_15386;
})();
if(inst_15351){
var statearr_15387_15418 = state_15381__$1;
(statearr_15387_15418[(1)] = (5));

} else {
var statearr_15388_15419 = state_15381__$1;
(statearr_15388_15419[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15382 === (15))){
var inst_15371 = (state_15381[(2)]);
var state_15381__$1 = state_15381;
var statearr_15389_15420 = state_15381__$1;
(statearr_15389_15420[(2)] = inst_15371);

(statearr_15389_15420[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15382 === (13))){
var state_15381__$1 = state_15381;
var statearr_15390_15421 = state_15381__$1;
(statearr_15390_15421[(2)] = null);

(statearr_15390_15421[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15382 === (6))){
var inst_15346 = (state_15381[(8)]);
var inst_15367 = (inst_15346 > (0));
var state_15381__$1 = state_15381;
if(cljs.core.truth_(inst_15367)){
var statearr_15391_15422 = state_15381__$1;
(statearr_15391_15422[(1)] = (12));

} else {
var statearr_15392_15423 = state_15381__$1;
(statearr_15392_15423[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15382 === (3))){
var inst_15379 = (state_15381[(2)]);
var state_15381__$1 = state_15381;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15381__$1,inst_15379);
} else {
if((state_val_15382 === (12))){
var inst_15345 = (state_15381[(7)]);
var inst_15369 = cljs.core.vec.call(null,inst_15345);
var state_15381__$1 = state_15381;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15381__$1,(15),out,inst_15369);
} else {
if((state_val_15382 === (2))){
var state_15381__$1 = state_15381;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15381__$1,(4),ch);
} else {
if((state_val_15382 === (11))){
var inst_15361 = (state_15381[(2)]);
var inst_15362 = (new Array(n));
var inst_15345 = inst_15362;
var inst_15346 = (0);
var state_15381__$1 = (function (){var statearr_15393 = state_15381;
(statearr_15393[(10)] = inst_15361);

(statearr_15393[(7)] = inst_15345);

(statearr_15393[(8)] = inst_15346);

return statearr_15393;
})();
var statearr_15394_15424 = state_15381__$1;
(statearr_15394_15424[(2)] = null);

(statearr_15394_15424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15382 === (9))){
var inst_15345 = (state_15381[(7)]);
var inst_15359 = cljs.core.vec.call(null,inst_15345);
var state_15381__$1 = state_15381;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15381__$1,(11),out,inst_15359);
} else {
if((state_val_15382 === (5))){
var inst_15354 = (state_15381[(11)]);
var inst_15345 = (state_15381[(7)]);
var inst_15346 = (state_15381[(8)]);
var inst_15349 = (state_15381[(9)]);
var inst_15353 = (inst_15345[inst_15346] = inst_15349);
var inst_15354__$1 = (inst_15346 + (1));
var inst_15355 = (inst_15354__$1 < n);
var state_15381__$1 = (function (){var statearr_15395 = state_15381;
(statearr_15395[(12)] = inst_15353);

(statearr_15395[(11)] = inst_15354__$1);

return statearr_15395;
})();
if(cljs.core.truth_(inst_15355)){
var statearr_15396_15425 = state_15381__$1;
(statearr_15396_15425[(1)] = (8));

} else {
var statearr_15397_15426 = state_15381__$1;
(statearr_15397_15426[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15382 === (14))){
var inst_15374 = (state_15381[(2)]);
var inst_15375 = cljs.core.async.close_BANG_.call(null,out);
var state_15381__$1 = (function (){var statearr_15399 = state_15381;
(statearr_15399[(13)] = inst_15374);

return statearr_15399;
})();
var statearr_15400_15427 = state_15381__$1;
(statearr_15400_15427[(2)] = inst_15375);

(statearr_15400_15427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15382 === (10))){
var inst_15365 = (state_15381[(2)]);
var state_15381__$1 = state_15381;
var statearr_15401_15428 = state_15381__$1;
(statearr_15401_15428[(2)] = inst_15365);

(statearr_15401_15428[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15382 === (8))){
var inst_15354 = (state_15381[(11)]);
var inst_15345 = (state_15381[(7)]);
var tmp15398 = inst_15345;
var inst_15345__$1 = tmp15398;
var inst_15346 = inst_15354;
var state_15381__$1 = (function (){var statearr_15402 = state_15381;
(statearr_15402[(7)] = inst_15345__$1);

(statearr_15402[(8)] = inst_15346);

return statearr_15402;
})();
var statearr_15403_15429 = state_15381__$1;
(statearr_15403_15429[(2)] = null);

(statearr_15403_15429[(1)] = (2));


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
});})(c__10525__auto___15415,out))
;
return ((function (switch__10460__auto__,c__10525__auto___15415,out){
return (function() {
var cljs$core$async$state_machine__10461__auto__ = null;
var cljs$core$async$state_machine__10461__auto____0 = (function (){
var statearr_15407 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15407[(0)] = cljs$core$async$state_machine__10461__auto__);

(statearr_15407[(1)] = (1));

return statearr_15407;
});
var cljs$core$async$state_machine__10461__auto____1 = (function (state_15381){
while(true){
var ret_value__10462__auto__ = (function (){try{while(true){
var result__10463__auto__ = switch__10460__auto__.call(null,state_15381);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10463__auto__;
}
break;
}
}catch (e15408){if((e15408 instanceof Object)){
var ex__10464__auto__ = e15408;
var statearr_15409_15430 = state_15381;
(statearr_15409_15430[(5)] = ex__10464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15381);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15408;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15431 = state_15381;
state_15381 = G__15431;
continue;
} else {
return ret_value__10462__auto__;
}
break;
}
});
cljs$core$async$state_machine__10461__auto__ = function(state_15381){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10461__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10461__auto____1.call(this,state_15381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10461__auto____0;
cljs$core$async$state_machine__10461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10461__auto____1;
return cljs$core$async$state_machine__10461__auto__;
})()
;})(switch__10460__auto__,c__10525__auto___15415,out))
})();
var state__10527__auto__ = (function (){var statearr_15410 = f__10526__auto__.call(null);
(statearr_15410[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10525__auto___15415);

return statearr_15410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10527__auto__);
});})(c__10525__auto___15415,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args15432 = [];
var len__9177__auto___15506 = arguments.length;
var i__9178__auto___15507 = (0);
while(true){
if((i__9178__auto___15507 < len__9177__auto___15506)){
args15432.push((arguments[i__9178__auto___15507]));

var G__15508 = (i__9178__auto___15507 + (1));
i__9178__auto___15507 = G__15508;
continue;
} else {
}
break;
}

var G__15434 = args15432.length;
switch (G__15434) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15432.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10525__auto___15510 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10525__auto___15510,out){
return (function (){
var f__10526__auto__ = (function (){var switch__10460__auto__ = ((function (c__10525__auto___15510,out){
return (function (state_15476){
var state_val_15477 = (state_15476[(1)]);
if((state_val_15477 === (7))){
var inst_15472 = (state_15476[(2)]);
var state_15476__$1 = state_15476;
var statearr_15478_15511 = state_15476__$1;
(statearr_15478_15511[(2)] = inst_15472);

(statearr_15478_15511[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15477 === (1))){
var inst_15435 = [];
var inst_15436 = inst_15435;
var inst_15437 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_15476__$1 = (function (){var statearr_15479 = state_15476;
(statearr_15479[(7)] = inst_15436);

(statearr_15479[(8)] = inst_15437);

return statearr_15479;
})();
var statearr_15480_15512 = state_15476__$1;
(statearr_15480_15512[(2)] = null);

(statearr_15480_15512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15477 === (4))){
var inst_15440 = (state_15476[(9)]);
var inst_15440__$1 = (state_15476[(2)]);
var inst_15441 = (inst_15440__$1 == null);
var inst_15442 = cljs.core.not.call(null,inst_15441);
var state_15476__$1 = (function (){var statearr_15481 = state_15476;
(statearr_15481[(9)] = inst_15440__$1);

return statearr_15481;
})();
if(inst_15442){
var statearr_15482_15513 = state_15476__$1;
(statearr_15482_15513[(1)] = (5));

} else {
var statearr_15483_15514 = state_15476__$1;
(statearr_15483_15514[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15477 === (15))){
var inst_15466 = (state_15476[(2)]);
var state_15476__$1 = state_15476;
var statearr_15484_15515 = state_15476__$1;
(statearr_15484_15515[(2)] = inst_15466);

(statearr_15484_15515[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15477 === (13))){
var state_15476__$1 = state_15476;
var statearr_15485_15516 = state_15476__$1;
(statearr_15485_15516[(2)] = null);

(statearr_15485_15516[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15477 === (6))){
var inst_15436 = (state_15476[(7)]);
var inst_15461 = inst_15436.length;
var inst_15462 = (inst_15461 > (0));
var state_15476__$1 = state_15476;
if(cljs.core.truth_(inst_15462)){
var statearr_15486_15517 = state_15476__$1;
(statearr_15486_15517[(1)] = (12));

} else {
var statearr_15487_15518 = state_15476__$1;
(statearr_15487_15518[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15477 === (3))){
var inst_15474 = (state_15476[(2)]);
var state_15476__$1 = state_15476;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15476__$1,inst_15474);
} else {
if((state_val_15477 === (12))){
var inst_15436 = (state_15476[(7)]);
var inst_15464 = cljs.core.vec.call(null,inst_15436);
var state_15476__$1 = state_15476;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15476__$1,(15),out,inst_15464);
} else {
if((state_val_15477 === (2))){
var state_15476__$1 = state_15476;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15476__$1,(4),ch);
} else {
if((state_val_15477 === (11))){
var inst_15444 = (state_15476[(10)]);
var inst_15440 = (state_15476[(9)]);
var inst_15454 = (state_15476[(2)]);
var inst_15455 = [];
var inst_15456 = inst_15455.push(inst_15440);
var inst_15436 = inst_15455;
var inst_15437 = inst_15444;
var state_15476__$1 = (function (){var statearr_15488 = state_15476;
(statearr_15488[(11)] = inst_15454);

(statearr_15488[(7)] = inst_15436);

(statearr_15488[(8)] = inst_15437);

(statearr_15488[(12)] = inst_15456);

return statearr_15488;
})();
var statearr_15489_15519 = state_15476__$1;
(statearr_15489_15519[(2)] = null);

(statearr_15489_15519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15477 === (9))){
var inst_15436 = (state_15476[(7)]);
var inst_15452 = cljs.core.vec.call(null,inst_15436);
var state_15476__$1 = state_15476;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15476__$1,(11),out,inst_15452);
} else {
if((state_val_15477 === (5))){
var inst_15444 = (state_15476[(10)]);
var inst_15440 = (state_15476[(9)]);
var inst_15437 = (state_15476[(8)]);
var inst_15444__$1 = f.call(null,inst_15440);
var inst_15445 = cljs.core._EQ_.call(null,inst_15444__$1,inst_15437);
var inst_15446 = cljs.core.keyword_identical_QMARK_.call(null,inst_15437,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_15447 = (inst_15445) || (inst_15446);
var state_15476__$1 = (function (){var statearr_15490 = state_15476;
(statearr_15490[(10)] = inst_15444__$1);

return statearr_15490;
})();
if(cljs.core.truth_(inst_15447)){
var statearr_15491_15520 = state_15476__$1;
(statearr_15491_15520[(1)] = (8));

} else {
var statearr_15492_15521 = state_15476__$1;
(statearr_15492_15521[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15477 === (14))){
var inst_15469 = (state_15476[(2)]);
var inst_15470 = cljs.core.async.close_BANG_.call(null,out);
var state_15476__$1 = (function (){var statearr_15494 = state_15476;
(statearr_15494[(13)] = inst_15469);

return statearr_15494;
})();
var statearr_15495_15522 = state_15476__$1;
(statearr_15495_15522[(2)] = inst_15470);

(statearr_15495_15522[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15477 === (10))){
var inst_15459 = (state_15476[(2)]);
var state_15476__$1 = state_15476;
var statearr_15496_15523 = state_15476__$1;
(statearr_15496_15523[(2)] = inst_15459);

(statearr_15496_15523[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15477 === (8))){
var inst_15444 = (state_15476[(10)]);
var inst_15436 = (state_15476[(7)]);
var inst_15440 = (state_15476[(9)]);
var inst_15449 = inst_15436.push(inst_15440);
var tmp15493 = inst_15436;
var inst_15436__$1 = tmp15493;
var inst_15437 = inst_15444;
var state_15476__$1 = (function (){var statearr_15497 = state_15476;
(statearr_15497[(14)] = inst_15449);

(statearr_15497[(7)] = inst_15436__$1);

(statearr_15497[(8)] = inst_15437);

return statearr_15497;
})();
var statearr_15498_15524 = state_15476__$1;
(statearr_15498_15524[(2)] = null);

(statearr_15498_15524[(1)] = (2));


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
});})(c__10525__auto___15510,out))
;
return ((function (switch__10460__auto__,c__10525__auto___15510,out){
return (function() {
var cljs$core$async$state_machine__10461__auto__ = null;
var cljs$core$async$state_machine__10461__auto____0 = (function (){
var statearr_15502 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15502[(0)] = cljs$core$async$state_machine__10461__auto__);

(statearr_15502[(1)] = (1));

return statearr_15502;
});
var cljs$core$async$state_machine__10461__auto____1 = (function (state_15476){
while(true){
var ret_value__10462__auto__ = (function (){try{while(true){
var result__10463__auto__ = switch__10460__auto__.call(null,state_15476);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10463__auto__;
}
break;
}
}catch (e15503){if((e15503 instanceof Object)){
var ex__10464__auto__ = e15503;
var statearr_15504_15525 = state_15476;
(statearr_15504_15525[(5)] = ex__10464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15503;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15526 = state_15476;
state_15476 = G__15526;
continue;
} else {
return ret_value__10462__auto__;
}
break;
}
});
cljs$core$async$state_machine__10461__auto__ = function(state_15476){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10461__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10461__auto____1.call(this,state_15476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10461__auto____0;
cljs$core$async$state_machine__10461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10461__auto____1;
return cljs$core$async$state_machine__10461__auto__;
})()
;})(switch__10460__auto__,c__10525__auto___15510,out))
})();
var state__10527__auto__ = (function (){var statearr_15505 = f__10526__auto__.call(null);
(statearr_15505[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10525__auto___15510);

return statearr_15505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10527__auto__);
});})(c__10525__auto___15510,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map