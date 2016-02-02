goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__229993__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__229993 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__229994__i = 0, G__229994__a = new Array(arguments.length -  0);
while (G__229994__i < G__229994__a.length) {G__229994__a[G__229994__i] = arguments[G__229994__i + 0]; ++G__229994__i;}
  args = new cljs.core.IndexedSeq(G__229994__a,0);
} 
return G__229993__delegate.call(this,args);};
G__229993.cljs$lang$maxFixedArity = 0;
G__229993.cljs$lang$applyTo = (function (arglist__229995){
var args = cljs.core.seq(arglist__229995);
return G__229993__delegate(args);
});
G__229993.cljs$core$IFn$_invoke$arity$variadic = G__229993__delegate;
return G__229993;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__229996__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__229996 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__229997__i = 0, G__229997__a = new Array(arguments.length -  0);
while (G__229997__i < G__229997__a.length) {G__229997__a[G__229997__i] = arguments[G__229997__i + 0]; ++G__229997__i;}
  args = new cljs.core.IndexedSeq(G__229997__a,0);
} 
return G__229996__delegate.call(this,args);};
G__229996.cljs$lang$maxFixedArity = 0;
G__229996.cljs$lang$applyTo = (function (arglist__229998){
var args = cljs.core.seq(arglist__229998);
return G__229996__delegate(args);
});
G__229996.cljs$core$IFn$_invoke$arity$variadic = G__229996__delegate;
return G__229996;
})()
;

return null;
});
