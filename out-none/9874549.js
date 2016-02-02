goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__36034__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__36034 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36035__i = 0, G__36035__a = new Array(arguments.length -  0);
while (G__36035__i < G__36035__a.length) {G__36035__a[G__36035__i] = arguments[G__36035__i + 0]; ++G__36035__i;}
  args = new cljs.core.IndexedSeq(G__36035__a,0);
} 
return G__36034__delegate.call(this,args);};
G__36034.cljs$lang$maxFixedArity = 0;
G__36034.cljs$lang$applyTo = (function (arglist__36036){
var args = cljs.core.seq(arglist__36036);
return G__36034__delegate(args);
});
G__36034.cljs$core$IFn$_invoke$arity$variadic = G__36034__delegate;
return G__36034;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__36037__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__36037 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36038__i = 0, G__36038__a = new Array(arguments.length -  0);
while (G__36038__i < G__36038__a.length) {G__36038__a[G__36038__i] = arguments[G__36038__i + 0]; ++G__36038__i;}
  args = new cljs.core.IndexedSeq(G__36038__a,0);
} 
return G__36037__delegate.call(this,args);};
G__36037.cljs$lang$maxFixedArity = 0;
G__36037.cljs$lang$applyTo = (function (arglist__36039){
var args = cljs.core.seq(arglist__36039);
return G__36037__delegate(args);
});
G__36037.cljs$core$IFn$_invoke$arity$variadic = G__36037__delegate;
return G__36037;
})()
;

return null;
});
