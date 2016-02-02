goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__30819__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__30819 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30820__i = 0, G__30820__a = new Array(arguments.length -  0);
while (G__30820__i < G__30820__a.length) {G__30820__a[G__30820__i] = arguments[G__30820__i + 0]; ++G__30820__i;}
  args = new cljs.core.IndexedSeq(G__30820__a,0);
} 
return G__30819__delegate.call(this,args);};
G__30819.cljs$lang$maxFixedArity = 0;
G__30819.cljs$lang$applyTo = (function (arglist__30821){
var args = cljs.core.seq(arglist__30821);
return G__30819__delegate(args);
});
G__30819.cljs$core$IFn$_invoke$arity$variadic = G__30819__delegate;
return G__30819;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__30822__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__30822 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30823__i = 0, G__30823__a = new Array(arguments.length -  0);
while (G__30823__i < G__30823__a.length) {G__30823__a[G__30823__i] = arguments[G__30823__i + 0]; ++G__30823__i;}
  args = new cljs.core.IndexedSeq(G__30823__a,0);
} 
return G__30822__delegate.call(this,args);};
G__30822.cljs$lang$maxFixedArity = 0;
G__30822.cljs$lang$applyTo = (function (arglist__30824){
var args = cljs.core.seq(arglist__30824);
return G__30822__delegate(args);
});
G__30822.cljs$core$IFn$_invoke$arity$variadic = G__30822__delegate;
return G__30822;
})()
;

return null;
});
