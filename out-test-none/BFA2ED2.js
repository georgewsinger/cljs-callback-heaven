goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10338__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10338 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10339__i = 0, G__10339__a = new Array(arguments.length -  0);
while (G__10339__i < G__10339__a.length) {G__10339__a[G__10339__i] = arguments[G__10339__i + 0]; ++G__10339__i;}
  args = new cljs.core.IndexedSeq(G__10339__a,0);
} 
return G__10338__delegate.call(this,args);};
G__10338.cljs$lang$maxFixedArity = 0;
G__10338.cljs$lang$applyTo = (function (arglist__10340){
var args = cljs.core.seq(arglist__10340);
return G__10338__delegate(args);
});
G__10338.cljs$core$IFn$_invoke$arity$variadic = G__10338__delegate;
return G__10338;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10341__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10341 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10342__i = 0, G__10342__a = new Array(arguments.length -  0);
while (G__10342__i < G__10342__a.length) {G__10342__a[G__10342__i] = arguments[G__10342__i + 0]; ++G__10342__i;}
  args = new cljs.core.IndexedSeq(G__10342__a,0);
} 
return G__10341__delegate.call(this,args);};
G__10341.cljs$lang$maxFixedArity = 0;
G__10341.cljs$lang$applyTo = (function (arglist__10343){
var args = cljs.core.seq(arglist__10343);
return G__10341__delegate(args);
});
G__10341.cljs$core$IFn$_invoke$arity$variadic = G__10341__delegate;
return G__10341;
})()
;

return null;
});
