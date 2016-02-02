goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16223__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16223 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16224__i = 0, G__16224__a = new Array(arguments.length -  0);
while (G__16224__i < G__16224__a.length) {G__16224__a[G__16224__i] = arguments[G__16224__i + 0]; ++G__16224__i;}
  args = new cljs.core.IndexedSeq(G__16224__a,0);
} 
return G__16223__delegate.call(this,args);};
G__16223.cljs$lang$maxFixedArity = 0;
G__16223.cljs$lang$applyTo = (function (arglist__16225){
var args = cljs.core.seq(arglist__16225);
return G__16223__delegate(args);
});
G__16223.cljs$core$IFn$_invoke$arity$variadic = G__16223__delegate;
return G__16223;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16226__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16226 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16227__i = 0, G__16227__a = new Array(arguments.length -  0);
while (G__16227__i < G__16227__a.length) {G__16227__a[G__16227__i] = arguments[G__16227__i + 0]; ++G__16227__i;}
  args = new cljs.core.IndexedSeq(G__16227__a,0);
} 
return G__16226__delegate.call(this,args);};
G__16226.cljs$lang$maxFixedArity = 0;
G__16226.cljs$lang$applyTo = (function (arglist__16228){
var args = cljs.core.seq(arglist__16228);
return G__16226__delegate(args);
});
G__16226.cljs$core$IFn$_invoke$arity$variadic = G__16226__delegate;
return G__16226;
})()
;

return null;
});
