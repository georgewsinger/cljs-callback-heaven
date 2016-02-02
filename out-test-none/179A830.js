goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9720__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9720 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9721__i = 0, G__9721__a = new Array(arguments.length -  0);
while (G__9721__i < G__9721__a.length) {G__9721__a[G__9721__i] = arguments[G__9721__i + 0]; ++G__9721__i;}
  args = new cljs.core.IndexedSeq(G__9721__a,0);
} 
return G__9720__delegate.call(this,args);};
G__9720.cljs$lang$maxFixedArity = 0;
G__9720.cljs$lang$applyTo = (function (arglist__9722){
var args = cljs.core.seq(arglist__9722);
return G__9720__delegate(args);
});
G__9720.cljs$core$IFn$_invoke$arity$variadic = G__9720__delegate;
return G__9720;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9723__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9723 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9724__i = 0, G__9724__a = new Array(arguments.length -  0);
while (G__9724__i < G__9724__a.length) {G__9724__a[G__9724__i] = arguments[G__9724__i + 0]; ++G__9724__i;}
  args = new cljs.core.IndexedSeq(G__9724__a,0);
} 
return G__9723__delegate.call(this,args);};
G__9723.cljs$lang$maxFixedArity = 0;
G__9723.cljs$lang$applyTo = (function (arglist__9725){
var args = cljs.core.seq(arglist__9725);
return G__9723__delegate(args);
});
G__9723.cljs$core$IFn$_invoke$arity$variadic = G__9723__delegate;
return G__9723;
})()
;

return null;
});
