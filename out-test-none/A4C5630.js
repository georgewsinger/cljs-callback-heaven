goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10197__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10197 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10198__i = 0, G__10198__a = new Array(arguments.length -  0);
while (G__10198__i < G__10198__a.length) {G__10198__a[G__10198__i] = arguments[G__10198__i + 0]; ++G__10198__i;}
  args = new cljs.core.IndexedSeq(G__10198__a,0);
} 
return G__10197__delegate.call(this,args);};
G__10197.cljs$lang$maxFixedArity = 0;
G__10197.cljs$lang$applyTo = (function (arglist__10199){
var args = cljs.core.seq(arglist__10199);
return G__10197__delegate(args);
});
G__10197.cljs$core$IFn$_invoke$arity$variadic = G__10197__delegate;
return G__10197;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10200__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10200 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10201__i = 0, G__10201__a = new Array(arguments.length -  0);
while (G__10201__i < G__10201__a.length) {G__10201__a[G__10201__i] = arguments[G__10201__i + 0]; ++G__10201__i;}
  args = new cljs.core.IndexedSeq(G__10201__a,0);
} 
return G__10200__delegate.call(this,args);};
G__10200.cljs$lang$maxFixedArity = 0;
G__10200.cljs$lang$applyTo = (function (arglist__10202){
var args = cljs.core.seq(arglist__10202);
return G__10200__delegate(args);
});
G__10200.cljs$core$IFn$_invoke$arity$variadic = G__10200__delegate;
return G__10200;
})()
;

return null;
});
