goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__29764__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__29764 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29765__i = 0, G__29765__a = new Array(arguments.length -  0);
while (G__29765__i < G__29765__a.length) {G__29765__a[G__29765__i] = arguments[G__29765__i + 0]; ++G__29765__i;}
  args = new cljs.core.IndexedSeq(G__29765__a,0);
} 
return G__29764__delegate.call(this,args);};
G__29764.cljs$lang$maxFixedArity = 0;
G__29764.cljs$lang$applyTo = (function (arglist__29766){
var args = cljs.core.seq(arglist__29766);
return G__29764__delegate(args);
});
G__29764.cljs$core$IFn$_invoke$arity$variadic = G__29764__delegate;
return G__29764;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__29767__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__29767 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29768__i = 0, G__29768__a = new Array(arguments.length -  0);
while (G__29768__i < G__29768__a.length) {G__29768__a[G__29768__i] = arguments[G__29768__i + 0]; ++G__29768__i;}
  args = new cljs.core.IndexedSeq(G__29768__a,0);
} 
return G__29767__delegate.call(this,args);};
G__29767.cljs$lang$maxFixedArity = 0;
G__29767.cljs$lang$applyTo = (function (arglist__29769){
var args = cljs.core.seq(arglist__29769);
return G__29767__delegate(args);
});
G__29767.cljs$core$IFn$_invoke$arity$variadic = G__29767__delegate;
return G__29767;
})()
;

return null;
});
