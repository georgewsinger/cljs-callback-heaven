goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__21082__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__21082 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21083__i = 0, G__21083__a = new Array(arguments.length -  0);
while (G__21083__i < G__21083__a.length) {G__21083__a[G__21083__i] = arguments[G__21083__i + 0]; ++G__21083__i;}
  args = new cljs.core.IndexedSeq(G__21083__a,0);
} 
return G__21082__delegate.call(this,args);};
G__21082.cljs$lang$maxFixedArity = 0;
G__21082.cljs$lang$applyTo = (function (arglist__21084){
var args = cljs.core.seq(arglist__21084);
return G__21082__delegate(args);
});
G__21082.cljs$core$IFn$_invoke$arity$variadic = G__21082__delegate;
return G__21082;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__21085__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__21085 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21086__i = 0, G__21086__a = new Array(arguments.length -  0);
while (G__21086__i < G__21086__a.length) {G__21086__a[G__21086__i] = arguments[G__21086__i + 0]; ++G__21086__i;}
  args = new cljs.core.IndexedSeq(G__21086__a,0);
} 
return G__21085__delegate.call(this,args);};
G__21085.cljs$lang$maxFixedArity = 0;
G__21085.cljs$lang$applyTo = (function (arglist__21087){
var args = cljs.core.seq(arglist__21087);
return G__21085__delegate(args);
});
G__21085.cljs$core$IFn$_invoke$arity$variadic = G__21085__delegate;
return G__21085;
})()
;

return null;
});
