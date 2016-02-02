goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10573__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10573 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10574__i = 0, G__10574__a = new Array(arguments.length -  0);
while (G__10574__i < G__10574__a.length) {G__10574__a[G__10574__i] = arguments[G__10574__i + 0]; ++G__10574__i;}
  args = new cljs.core.IndexedSeq(G__10574__a,0);
} 
return G__10573__delegate.call(this,args);};
G__10573.cljs$lang$maxFixedArity = 0;
G__10573.cljs$lang$applyTo = (function (arglist__10575){
var args = cljs.core.seq(arglist__10575);
return G__10573__delegate(args);
});
G__10573.cljs$core$IFn$_invoke$arity$variadic = G__10573__delegate;
return G__10573;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10576__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10576 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10577__i = 0, G__10577__a = new Array(arguments.length -  0);
while (G__10577__i < G__10577__a.length) {G__10577__a[G__10577__i] = arguments[G__10577__i + 0]; ++G__10577__i;}
  args = new cljs.core.IndexedSeq(G__10577__a,0);
} 
return G__10576__delegate.call(this,args);};
G__10576.cljs$lang$maxFixedArity = 0;
G__10576.cljs$lang$applyTo = (function (arglist__10578){
var args = cljs.core.seq(arglist__10578);
return G__10576__delegate(args);
});
G__10576.cljs$core$IFn$_invoke$arity$variadic = G__10576__delegate;
return G__10576;
})()
;

return null;
});
