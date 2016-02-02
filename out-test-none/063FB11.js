goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__29249__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__29249 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29250__i = 0, G__29250__a = new Array(arguments.length -  0);
while (G__29250__i < G__29250__a.length) {G__29250__a[G__29250__i] = arguments[G__29250__i + 0]; ++G__29250__i;}
  args = new cljs.core.IndexedSeq(G__29250__a,0);
} 
return G__29249__delegate.call(this,args);};
G__29249.cljs$lang$maxFixedArity = 0;
G__29249.cljs$lang$applyTo = (function (arglist__29251){
var args = cljs.core.seq(arglist__29251);
return G__29249__delegate(args);
});
G__29249.cljs$core$IFn$_invoke$arity$variadic = G__29249__delegate;
return G__29249;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__29252__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__29252 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29253__i = 0, G__29253__a = new Array(arguments.length -  0);
while (G__29253__i < G__29253__a.length) {G__29253__a[G__29253__i] = arguments[G__29253__i + 0]; ++G__29253__i;}
  args = new cljs.core.IndexedSeq(G__29253__a,0);
} 
return G__29252__delegate.call(this,args);};
G__29252.cljs$lang$maxFixedArity = 0;
G__29252.cljs$lang$applyTo = (function (arglist__29254){
var args = cljs.core.seq(arglist__29254);
return G__29252__delegate(args);
});
G__29252.cljs$core$IFn$_invoke$arity$variadic = G__29252__delegate;
return G__29252;
})()
;

return null;
});
