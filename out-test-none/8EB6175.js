goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__21925__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__21925 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21926__i = 0, G__21926__a = new Array(arguments.length -  0);
while (G__21926__i < G__21926__a.length) {G__21926__a[G__21926__i] = arguments[G__21926__i + 0]; ++G__21926__i;}
  args = new cljs.core.IndexedSeq(G__21926__a,0);
} 
return G__21925__delegate.call(this,args);};
G__21925.cljs$lang$maxFixedArity = 0;
G__21925.cljs$lang$applyTo = (function (arglist__21927){
var args = cljs.core.seq(arglist__21927);
return G__21925__delegate(args);
});
G__21925.cljs$core$IFn$_invoke$arity$variadic = G__21925__delegate;
return G__21925;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__21928__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__21928 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21929__i = 0, G__21929__a = new Array(arguments.length -  0);
while (G__21929__i < G__21929__a.length) {G__21929__a[G__21929__i] = arguments[G__21929__i + 0]; ++G__21929__i;}
  args = new cljs.core.IndexedSeq(G__21929__a,0);
} 
return G__21928__delegate.call(this,args);};
G__21928.cljs$lang$maxFixedArity = 0;
G__21928.cljs$lang$applyTo = (function (arglist__21930){
var args = cljs.core.seq(arglist__21930);
return G__21928__delegate(args);
});
G__21928.cljs$core$IFn$_invoke$arity$variadic = G__21928__delegate;
return G__21928;
})()
;

return null;
});
