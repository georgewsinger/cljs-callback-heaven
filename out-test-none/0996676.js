goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__99377__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__99377 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__99378__i = 0, G__99378__a = new Array(arguments.length -  0);
while (G__99378__i < G__99378__a.length) {G__99378__a[G__99378__i] = arguments[G__99378__i + 0]; ++G__99378__i;}
  args = new cljs.core.IndexedSeq(G__99378__a,0);
} 
return G__99377__delegate.call(this,args);};
G__99377.cljs$lang$maxFixedArity = 0;
G__99377.cljs$lang$applyTo = (function (arglist__99379){
var args = cljs.core.seq(arglist__99379);
return G__99377__delegate(args);
});
G__99377.cljs$core$IFn$_invoke$arity$variadic = G__99377__delegate;
return G__99377;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__99380__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__99380 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__99381__i = 0, G__99381__a = new Array(arguments.length -  0);
while (G__99381__i < G__99381__a.length) {G__99381__a[G__99381__i] = arguments[G__99381__i + 0]; ++G__99381__i;}
  args = new cljs.core.IndexedSeq(G__99381__a,0);
} 
return G__99380__delegate.call(this,args);};
G__99380.cljs$lang$maxFixedArity = 0;
G__99380.cljs$lang$applyTo = (function (arglist__99382){
var args = cljs.core.seq(arglist__99382);
return G__99380__delegate(args);
});
G__99380.cljs$core$IFn$_invoke$arity$variadic = G__99380__delegate;
return G__99380;
})()
;

return null;
});
