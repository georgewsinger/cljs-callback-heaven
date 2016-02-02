goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9575__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9575 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9576__i = 0, G__9576__a = new Array(arguments.length -  0);
while (G__9576__i < G__9576__a.length) {G__9576__a[G__9576__i] = arguments[G__9576__i + 0]; ++G__9576__i;}
  args = new cljs.core.IndexedSeq(G__9576__a,0);
} 
return G__9575__delegate.call(this,args);};
G__9575.cljs$lang$maxFixedArity = 0;
G__9575.cljs$lang$applyTo = (function (arglist__9577){
var args = cljs.core.seq(arglist__9577);
return G__9575__delegate(args);
});
G__9575.cljs$core$IFn$_invoke$arity$variadic = G__9575__delegate;
return G__9575;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9578__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9578 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9579__i = 0, G__9579__a = new Array(arguments.length -  0);
while (G__9579__i < G__9579__a.length) {G__9579__a[G__9579__i] = arguments[G__9579__i + 0]; ++G__9579__i;}
  args = new cljs.core.IndexedSeq(G__9579__a,0);
} 
return G__9578__delegate.call(this,args);};
G__9578.cljs$lang$maxFixedArity = 0;
G__9578.cljs$lang$applyTo = (function (arglist__9580){
var args = cljs.core.seq(arglist__9580);
return G__9578__delegate(args);
});
G__9578.cljs$core$IFn$_invoke$arity$variadic = G__9578__delegate;
return G__9578;
})()
;

return null;
});
