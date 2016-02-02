goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9993__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9993 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9994__i = 0, G__9994__a = new Array(arguments.length -  0);
while (G__9994__i < G__9994__a.length) {G__9994__a[G__9994__i] = arguments[G__9994__i + 0]; ++G__9994__i;}
  args = new cljs.core.IndexedSeq(G__9994__a,0);
} 
return G__9993__delegate.call(this,args);};
G__9993.cljs$lang$maxFixedArity = 0;
G__9993.cljs$lang$applyTo = (function (arglist__9995){
var args = cljs.core.seq(arglist__9995);
return G__9993__delegate(args);
});
G__9993.cljs$core$IFn$_invoke$arity$variadic = G__9993__delegate;
return G__9993;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9996__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9996 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9997__i = 0, G__9997__a = new Array(arguments.length -  0);
while (G__9997__i < G__9997__a.length) {G__9997__a[G__9997__i] = arguments[G__9997__i + 0]; ++G__9997__i;}
  args = new cljs.core.IndexedSeq(G__9997__a,0);
} 
return G__9996__delegate.call(this,args);};
G__9996.cljs$lang$maxFixedArity = 0;
G__9996.cljs$lang$applyTo = (function (arglist__9998){
var args = cljs.core.seq(arglist__9998);
return G__9996__delegate(args);
});
G__9996.cljs$core$IFn$_invoke$arity$variadic = G__9996__delegate;
return G__9996;
})()
;

return null;
});
