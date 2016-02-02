goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9719__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9719 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9720__i = 0, G__9720__a = new Array(arguments.length -  0);
while (G__9720__i < G__9720__a.length) {G__9720__a[G__9720__i] = arguments[G__9720__i + 0]; ++G__9720__i;}
  args = new cljs.core.IndexedSeq(G__9720__a,0);
} 
return G__9719__delegate.call(this,args);};
G__9719.cljs$lang$maxFixedArity = 0;
G__9719.cljs$lang$applyTo = (function (arglist__9721){
var args = cljs.core.seq(arglist__9721);
return G__9719__delegate(args);
});
G__9719.cljs$core$IFn$_invoke$arity$variadic = G__9719__delegate;
return G__9719;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9722__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9722 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9723__i = 0, G__9723__a = new Array(arguments.length -  0);
while (G__9723__i < G__9723__a.length) {G__9723__a[G__9723__i] = arguments[G__9723__i + 0]; ++G__9723__i;}
  args = new cljs.core.IndexedSeq(G__9723__a,0);
} 
return G__9722__delegate.call(this,args);};
G__9722.cljs$lang$maxFixedArity = 0;
G__9722.cljs$lang$applyTo = (function (arglist__9724){
var args = cljs.core.seq(arglist__9724);
return G__9722__delegate(args);
});
G__9722.cljs$core$IFn$_invoke$arity$variadic = G__9722__delegate;
return G__9722;
})()
;

return null;
});
