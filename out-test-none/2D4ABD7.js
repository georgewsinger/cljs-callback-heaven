goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16032__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16032 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16033__i = 0, G__16033__a = new Array(arguments.length -  0);
while (G__16033__i < G__16033__a.length) {G__16033__a[G__16033__i] = arguments[G__16033__i + 0]; ++G__16033__i;}
  args = new cljs.core.IndexedSeq(G__16033__a,0);
} 
return G__16032__delegate.call(this,args);};
G__16032.cljs$lang$maxFixedArity = 0;
G__16032.cljs$lang$applyTo = (function (arglist__16034){
var args = cljs.core.seq(arglist__16034);
return G__16032__delegate(args);
});
G__16032.cljs$core$IFn$_invoke$arity$variadic = G__16032__delegate;
return G__16032;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16035__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16035 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16036__i = 0, G__16036__a = new Array(arguments.length -  0);
while (G__16036__i < G__16036__a.length) {G__16036__a[G__16036__i] = arguments[G__16036__i + 0]; ++G__16036__i;}
  args = new cljs.core.IndexedSeq(G__16036__a,0);
} 
return G__16035__delegate.call(this,args);};
G__16035.cljs$lang$maxFixedArity = 0;
G__16035.cljs$lang$applyTo = (function (arglist__16037){
var args = cljs.core.seq(arglist__16037);
return G__16035__delegate(args);
});
G__16035.cljs$core$IFn$_invoke$arity$variadic = G__16035__delegate;
return G__16035;
})()
;

return null;
});
