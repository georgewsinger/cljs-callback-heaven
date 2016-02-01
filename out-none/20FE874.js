goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9294__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9294 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9295__i = 0, G__9295__a = new Array(arguments.length -  0);
while (G__9295__i < G__9295__a.length) {G__9295__a[G__9295__i] = arguments[G__9295__i + 0]; ++G__9295__i;}
  args = new cljs.core.IndexedSeq(G__9295__a,0);
} 
return G__9294__delegate.call(this,args);};
G__9294.cljs$lang$maxFixedArity = 0;
G__9294.cljs$lang$applyTo = (function (arglist__9296){
var args = cljs.core.seq(arglist__9296);
return G__9294__delegate(args);
});
G__9294.cljs$core$IFn$_invoke$arity$variadic = G__9294__delegate;
return G__9294;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9297__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9297 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9298__i = 0, G__9298__a = new Array(arguments.length -  0);
while (G__9298__i < G__9298__a.length) {G__9298__a[G__9298__i] = arguments[G__9298__i + 0]; ++G__9298__i;}
  args = new cljs.core.IndexedSeq(G__9298__a,0);
} 
return G__9297__delegate.call(this,args);};
G__9297.cljs$lang$maxFixedArity = 0;
G__9297.cljs$lang$applyTo = (function (arglist__9299){
var args = cljs.core.seq(arglist__9299);
return G__9297__delegate(args);
});
G__9297.cljs$core$IFn$_invoke$arity$variadic = G__9297__delegate;
return G__9297;
})()
;

return null;
});
