goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10162__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10162 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10163__i = 0, G__10163__a = new Array(arguments.length -  0);
while (G__10163__i < G__10163__a.length) {G__10163__a[G__10163__i] = arguments[G__10163__i + 0]; ++G__10163__i;}
  args = new cljs.core.IndexedSeq(G__10163__a,0);
} 
return G__10162__delegate.call(this,args);};
G__10162.cljs$lang$maxFixedArity = 0;
G__10162.cljs$lang$applyTo = (function (arglist__10164){
var args = cljs.core.seq(arglist__10164);
return G__10162__delegate(args);
});
G__10162.cljs$core$IFn$_invoke$arity$variadic = G__10162__delegate;
return G__10162;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10165__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10165 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10166__i = 0, G__10166__a = new Array(arguments.length -  0);
while (G__10166__i < G__10166__a.length) {G__10166__a[G__10166__i] = arguments[G__10166__i + 0]; ++G__10166__i;}
  args = new cljs.core.IndexedSeq(G__10166__a,0);
} 
return G__10165__delegate.call(this,args);};
G__10165.cljs$lang$maxFixedArity = 0;
G__10165.cljs$lang$applyTo = (function (arglist__10167){
var args = cljs.core.seq(arglist__10167);
return G__10165__delegate(args);
});
G__10165.cljs$core$IFn$_invoke$arity$variadic = G__10165__delegate;
return G__10165;
})()
;

return null;
});
