goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14253__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14253 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14254__i = 0, G__14254__a = new Array(arguments.length -  0);
while (G__14254__i < G__14254__a.length) {G__14254__a[G__14254__i] = arguments[G__14254__i + 0]; ++G__14254__i;}
  args = new cljs.core.IndexedSeq(G__14254__a,0);
} 
return G__14253__delegate.call(this,args);};
G__14253.cljs$lang$maxFixedArity = 0;
G__14253.cljs$lang$applyTo = (function (arglist__14255){
var args = cljs.core.seq(arglist__14255);
return G__14253__delegate(args);
});
G__14253.cljs$core$IFn$_invoke$arity$variadic = G__14253__delegate;
return G__14253;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14256__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14256 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14257__i = 0, G__14257__a = new Array(arguments.length -  0);
while (G__14257__i < G__14257__a.length) {G__14257__a[G__14257__i] = arguments[G__14257__i + 0]; ++G__14257__i;}
  args = new cljs.core.IndexedSeq(G__14257__a,0);
} 
return G__14256__delegate.call(this,args);};
G__14256.cljs$lang$maxFixedArity = 0;
G__14256.cljs$lang$applyTo = (function (arglist__14258){
var args = cljs.core.seq(arglist__14258);
return G__14256__delegate(args);
});
G__14256.cljs$core$IFn$_invoke$arity$variadic = G__14256__delegate;
return G__14256;
})()
;

return null;
});
