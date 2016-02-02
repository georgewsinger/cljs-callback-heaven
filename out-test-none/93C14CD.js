goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__18468__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__18468 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18469__i = 0, G__18469__a = new Array(arguments.length -  0);
while (G__18469__i < G__18469__a.length) {G__18469__a[G__18469__i] = arguments[G__18469__i + 0]; ++G__18469__i;}
  args = new cljs.core.IndexedSeq(G__18469__a,0);
} 
return G__18468__delegate.call(this,args);};
G__18468.cljs$lang$maxFixedArity = 0;
G__18468.cljs$lang$applyTo = (function (arglist__18470){
var args = cljs.core.seq(arglist__18470);
return G__18468__delegate(args);
});
G__18468.cljs$core$IFn$_invoke$arity$variadic = G__18468__delegate;
return G__18468;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__18471__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__18471 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18472__i = 0, G__18472__a = new Array(arguments.length -  0);
while (G__18472__i < G__18472__a.length) {G__18472__a[G__18472__i] = arguments[G__18472__i + 0]; ++G__18472__i;}
  args = new cljs.core.IndexedSeq(G__18472__a,0);
} 
return G__18471__delegate.call(this,args);};
G__18471.cljs$lang$maxFixedArity = 0;
G__18471.cljs$lang$applyTo = (function (arglist__18473){
var args = cljs.core.seq(arglist__18473);
return G__18471__delegate(args);
});
G__18471.cljs$core$IFn$_invoke$arity$variadic = G__18471__delegate;
return G__18471;
})()
;

return null;
});
