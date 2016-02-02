goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9579__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9579 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9580__i = 0, G__9580__a = new Array(arguments.length -  0);
while (G__9580__i < G__9580__a.length) {G__9580__a[G__9580__i] = arguments[G__9580__i + 0]; ++G__9580__i;}
  args = new cljs.core.IndexedSeq(G__9580__a,0);
} 
return G__9579__delegate.call(this,args);};
G__9579.cljs$lang$maxFixedArity = 0;
G__9579.cljs$lang$applyTo = (function (arglist__9581){
var args = cljs.core.seq(arglist__9581);
return G__9579__delegate(args);
});
G__9579.cljs$core$IFn$_invoke$arity$variadic = G__9579__delegate;
return G__9579;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9582__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9582 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9583__i = 0, G__9583__a = new Array(arguments.length -  0);
while (G__9583__i < G__9583__a.length) {G__9583__a[G__9583__i] = arguments[G__9583__i + 0]; ++G__9583__i;}
  args = new cljs.core.IndexedSeq(G__9583__a,0);
} 
return G__9582__delegate.call(this,args);};
G__9582.cljs$lang$maxFixedArity = 0;
G__9582.cljs$lang$applyTo = (function (arglist__9584){
var args = cljs.core.seq(arglist__9584);
return G__9582__delegate(args);
});
G__9582.cljs$core$IFn$_invoke$arity$variadic = G__9582__delegate;
return G__9582;
})()
;

return null;
});
