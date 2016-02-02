goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__170722__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__170722 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__170723__i = 0, G__170723__a = new Array(arguments.length -  0);
while (G__170723__i < G__170723__a.length) {G__170723__a[G__170723__i] = arguments[G__170723__i + 0]; ++G__170723__i;}
  args = new cljs.core.IndexedSeq(G__170723__a,0);
} 
return G__170722__delegate.call(this,args);};
G__170722.cljs$lang$maxFixedArity = 0;
G__170722.cljs$lang$applyTo = (function (arglist__170724){
var args = cljs.core.seq(arglist__170724);
return G__170722__delegate(args);
});
G__170722.cljs$core$IFn$_invoke$arity$variadic = G__170722__delegate;
return G__170722;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__170725__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__170725 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__170726__i = 0, G__170726__a = new Array(arguments.length -  0);
while (G__170726__i < G__170726__a.length) {G__170726__a[G__170726__i] = arguments[G__170726__i + 0]; ++G__170726__i;}
  args = new cljs.core.IndexedSeq(G__170726__a,0);
} 
return G__170725__delegate.call(this,args);};
G__170725.cljs$lang$maxFixedArity = 0;
G__170725.cljs$lang$applyTo = (function (arglist__170727){
var args = cljs.core.seq(arglist__170727);
return G__170725__delegate(args);
});
G__170725.cljs$core$IFn$_invoke$arity$variadic = G__170725__delegate;
return G__170725;
})()
;

return null;
});
