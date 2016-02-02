goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__27722__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__27722 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27723__i = 0, G__27723__a = new Array(arguments.length -  0);
while (G__27723__i < G__27723__a.length) {G__27723__a[G__27723__i] = arguments[G__27723__i + 0]; ++G__27723__i;}
  args = new cljs.core.IndexedSeq(G__27723__a,0);
} 
return G__27722__delegate.call(this,args);};
G__27722.cljs$lang$maxFixedArity = 0;
G__27722.cljs$lang$applyTo = (function (arglist__27724){
var args = cljs.core.seq(arglist__27724);
return G__27722__delegate(args);
});
G__27722.cljs$core$IFn$_invoke$arity$variadic = G__27722__delegate;
return G__27722;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__27725__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__27725 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27726__i = 0, G__27726__a = new Array(arguments.length -  0);
while (G__27726__i < G__27726__a.length) {G__27726__a[G__27726__i] = arguments[G__27726__i + 0]; ++G__27726__i;}
  args = new cljs.core.IndexedSeq(G__27726__a,0);
} 
return G__27725__delegate.call(this,args);};
G__27725.cljs$lang$maxFixedArity = 0;
G__27725.cljs$lang$applyTo = (function (arglist__27727){
var args = cljs.core.seq(arglist__27727);
return G__27725__delegate(args);
});
G__27725.cljs$core$IFn$_invoke$arity$variadic = G__27725__delegate;
return G__27725;
})()
;

return null;
});
