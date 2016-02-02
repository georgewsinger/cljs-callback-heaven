goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16592__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16592 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16593__i = 0, G__16593__a = new Array(arguments.length -  0);
while (G__16593__i < G__16593__a.length) {G__16593__a[G__16593__i] = arguments[G__16593__i + 0]; ++G__16593__i;}
  args = new cljs.core.IndexedSeq(G__16593__a,0);
} 
return G__16592__delegate.call(this,args);};
G__16592.cljs$lang$maxFixedArity = 0;
G__16592.cljs$lang$applyTo = (function (arglist__16594){
var args = cljs.core.seq(arglist__16594);
return G__16592__delegate(args);
});
G__16592.cljs$core$IFn$_invoke$arity$variadic = G__16592__delegate;
return G__16592;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16595__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16595 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16596__i = 0, G__16596__a = new Array(arguments.length -  0);
while (G__16596__i < G__16596__a.length) {G__16596__a[G__16596__i] = arguments[G__16596__i + 0]; ++G__16596__i;}
  args = new cljs.core.IndexedSeq(G__16596__a,0);
} 
return G__16595__delegate.call(this,args);};
G__16595.cljs$lang$maxFixedArity = 0;
G__16595.cljs$lang$applyTo = (function (arglist__16597){
var args = cljs.core.seq(arglist__16597);
return G__16595__delegate(args);
});
G__16595.cljs$core$IFn$_invoke$arity$variadic = G__16595__delegate;
return G__16595;
})()
;

return null;
});
