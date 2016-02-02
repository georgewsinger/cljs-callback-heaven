goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14795__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14795 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14796__i = 0, G__14796__a = new Array(arguments.length -  0);
while (G__14796__i < G__14796__a.length) {G__14796__a[G__14796__i] = arguments[G__14796__i + 0]; ++G__14796__i;}
  args = new cljs.core.IndexedSeq(G__14796__a,0);
} 
return G__14795__delegate.call(this,args);};
G__14795.cljs$lang$maxFixedArity = 0;
G__14795.cljs$lang$applyTo = (function (arglist__14797){
var args = cljs.core.seq(arglist__14797);
return G__14795__delegate(args);
});
G__14795.cljs$core$IFn$_invoke$arity$variadic = G__14795__delegate;
return G__14795;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14798__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14798 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14799__i = 0, G__14799__a = new Array(arguments.length -  0);
while (G__14799__i < G__14799__a.length) {G__14799__a[G__14799__i] = arguments[G__14799__i + 0]; ++G__14799__i;}
  args = new cljs.core.IndexedSeq(G__14799__a,0);
} 
return G__14798__delegate.call(this,args);};
G__14798.cljs$lang$maxFixedArity = 0;
G__14798.cljs$lang$applyTo = (function (arglist__14800){
var args = cljs.core.seq(arglist__14800);
return G__14798__delegate(args);
});
G__14798.cljs$core$IFn$_invoke$arity$variadic = G__14798__delegate;
return G__14798;
})()
;

return null;
});
