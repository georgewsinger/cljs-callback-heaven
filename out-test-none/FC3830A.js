goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9807__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9807 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9808__i = 0, G__9808__a = new Array(arguments.length -  0);
while (G__9808__i < G__9808__a.length) {G__9808__a[G__9808__i] = arguments[G__9808__i + 0]; ++G__9808__i;}
  args = new cljs.core.IndexedSeq(G__9808__a,0);
} 
return G__9807__delegate.call(this,args);};
G__9807.cljs$lang$maxFixedArity = 0;
G__9807.cljs$lang$applyTo = (function (arglist__9809){
var args = cljs.core.seq(arglist__9809);
return G__9807__delegate(args);
});
G__9807.cljs$core$IFn$_invoke$arity$variadic = G__9807__delegate;
return G__9807;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9810__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9810 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9811__i = 0, G__9811__a = new Array(arguments.length -  0);
while (G__9811__i < G__9811__a.length) {G__9811__a[G__9811__i] = arguments[G__9811__i + 0]; ++G__9811__i;}
  args = new cljs.core.IndexedSeq(G__9811__a,0);
} 
return G__9810__delegate.call(this,args);};
G__9810.cljs$lang$maxFixedArity = 0;
G__9810.cljs$lang$applyTo = (function (arglist__9812){
var args = cljs.core.seq(arglist__9812);
return G__9810__delegate(args);
});
G__9810.cljs$core$IFn$_invoke$arity$variadic = G__9810__delegate;
return G__9810;
})()
;

return null;
});
