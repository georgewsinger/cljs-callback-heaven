goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8819__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8819 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8820__i = 0, G__8820__a = new Array(arguments.length -  0);
while (G__8820__i < G__8820__a.length) {G__8820__a[G__8820__i] = arguments[G__8820__i + 0]; ++G__8820__i;}
  args = new cljs.core.IndexedSeq(G__8820__a,0);
} 
return G__8819__delegate.call(this,args);};
G__8819.cljs$lang$maxFixedArity = 0;
G__8819.cljs$lang$applyTo = (function (arglist__8821){
var args = cljs.core.seq(arglist__8821);
return G__8819__delegate(args);
});
G__8819.cljs$core$IFn$_invoke$arity$variadic = G__8819__delegate;
return G__8819;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8822__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8822 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8823__i = 0, G__8823__a = new Array(arguments.length -  0);
while (G__8823__i < G__8823__a.length) {G__8823__a[G__8823__i] = arguments[G__8823__i + 0]; ++G__8823__i;}
  args = new cljs.core.IndexedSeq(G__8823__a,0);
} 
return G__8822__delegate.call(this,args);};
G__8822.cljs$lang$maxFixedArity = 0;
G__8822.cljs$lang$applyTo = (function (arglist__8824){
var args = cljs.core.seq(arglist__8824);
return G__8822__delegate(args);
});
G__8822.cljs$core$IFn$_invoke$arity$variadic = G__8822__delegate;
return G__8822;
})()
;

return null;
});
