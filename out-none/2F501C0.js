goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9082__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9082 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9083__i = 0, G__9083__a = new Array(arguments.length -  0);
while (G__9083__i < G__9083__a.length) {G__9083__a[G__9083__i] = arguments[G__9083__i + 0]; ++G__9083__i;}
  args = new cljs.core.IndexedSeq(G__9083__a,0);
} 
return G__9082__delegate.call(this,args);};
G__9082.cljs$lang$maxFixedArity = 0;
G__9082.cljs$lang$applyTo = (function (arglist__9084){
var args = cljs.core.seq(arglist__9084);
return G__9082__delegate(args);
});
G__9082.cljs$core$IFn$_invoke$arity$variadic = G__9082__delegate;
return G__9082;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9085__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9085 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9086__i = 0, G__9086__a = new Array(arguments.length -  0);
while (G__9086__i < G__9086__a.length) {G__9086__a[G__9086__i] = arguments[G__9086__i + 0]; ++G__9086__i;}
  args = new cljs.core.IndexedSeq(G__9086__a,0);
} 
return G__9085__delegate.call(this,args);};
G__9085.cljs$lang$maxFixedArity = 0;
G__9085.cljs$lang$applyTo = (function (arglist__9087){
var args = cljs.core.seq(arglist__9087);
return G__9085__delegate(args);
});
G__9085.cljs$core$IFn$_invoke$arity$variadic = G__9085__delegate;
return G__9085;
})()
;

return null;
});
