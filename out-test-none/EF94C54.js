goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__21627__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__21627 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21628__i = 0, G__21628__a = new Array(arguments.length -  0);
while (G__21628__i < G__21628__a.length) {G__21628__a[G__21628__i] = arguments[G__21628__i + 0]; ++G__21628__i;}
  args = new cljs.core.IndexedSeq(G__21628__a,0);
} 
return G__21627__delegate.call(this,args);};
G__21627.cljs$lang$maxFixedArity = 0;
G__21627.cljs$lang$applyTo = (function (arglist__21629){
var args = cljs.core.seq(arglist__21629);
return G__21627__delegate(args);
});
G__21627.cljs$core$IFn$_invoke$arity$variadic = G__21627__delegate;
return G__21627;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__21630__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__21630 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21631__i = 0, G__21631__a = new Array(arguments.length -  0);
while (G__21631__i < G__21631__a.length) {G__21631__a[G__21631__i] = arguments[G__21631__i + 0]; ++G__21631__i;}
  args = new cljs.core.IndexedSeq(G__21631__a,0);
} 
return G__21630__delegate.call(this,args);};
G__21630.cljs$lang$maxFixedArity = 0;
G__21630.cljs$lang$applyTo = (function (arglist__21632){
var args = cljs.core.seq(arglist__21632);
return G__21630__delegate(args);
});
G__21630.cljs$core$IFn$_invoke$arity$variadic = G__21630__delegate;
return G__21630;
})()
;

return null;
});
