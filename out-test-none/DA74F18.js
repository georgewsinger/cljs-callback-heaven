goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10033__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10033 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10034__i = 0, G__10034__a = new Array(arguments.length -  0);
while (G__10034__i < G__10034__a.length) {G__10034__a[G__10034__i] = arguments[G__10034__i + 0]; ++G__10034__i;}
  args = new cljs.core.IndexedSeq(G__10034__a,0);
} 
return G__10033__delegate.call(this,args);};
G__10033.cljs$lang$maxFixedArity = 0;
G__10033.cljs$lang$applyTo = (function (arglist__10035){
var args = cljs.core.seq(arglist__10035);
return G__10033__delegate(args);
});
G__10033.cljs$core$IFn$_invoke$arity$variadic = G__10033__delegate;
return G__10033;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10036__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10036 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10037__i = 0, G__10037__a = new Array(arguments.length -  0);
while (G__10037__i < G__10037__a.length) {G__10037__a[G__10037__i] = arguments[G__10037__i + 0]; ++G__10037__i;}
  args = new cljs.core.IndexedSeq(G__10037__a,0);
} 
return G__10036__delegate.call(this,args);};
G__10036.cljs$lang$maxFixedArity = 0;
G__10036.cljs$lang$applyTo = (function (arglist__10038){
var args = cljs.core.seq(arglist__10038);
return G__10036__delegate(args);
});
G__10036.cljs$core$IFn$_invoke$arity$variadic = G__10036__delegate;
return G__10036;
})()
;

return null;
});
