goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11599__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11599 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11600__i = 0, G__11600__a = new Array(arguments.length -  0);
while (G__11600__i < G__11600__a.length) {G__11600__a[G__11600__i] = arguments[G__11600__i + 0]; ++G__11600__i;}
  args = new cljs.core.IndexedSeq(G__11600__a,0);
} 
return G__11599__delegate.call(this,args);};
G__11599.cljs$lang$maxFixedArity = 0;
G__11599.cljs$lang$applyTo = (function (arglist__11601){
var args = cljs.core.seq(arglist__11601);
return G__11599__delegate(args);
});
G__11599.cljs$core$IFn$_invoke$arity$variadic = G__11599__delegate;
return G__11599;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11602__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11602 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11603__i = 0, G__11603__a = new Array(arguments.length -  0);
while (G__11603__i < G__11603__a.length) {G__11603__a[G__11603__i] = arguments[G__11603__i + 0]; ++G__11603__i;}
  args = new cljs.core.IndexedSeq(G__11603__a,0);
} 
return G__11602__delegate.call(this,args);};
G__11602.cljs$lang$maxFixedArity = 0;
G__11602.cljs$lang$applyTo = (function (arglist__11604){
var args = cljs.core.seq(arglist__11604);
return G__11602__delegate(args);
});
G__11602.cljs$core$IFn$_invoke$arity$variadic = G__11602__delegate;
return G__11602;
})()
;

return null;
});
