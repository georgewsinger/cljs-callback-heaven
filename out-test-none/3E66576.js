goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11990__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11990 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11991__i = 0, G__11991__a = new Array(arguments.length -  0);
while (G__11991__i < G__11991__a.length) {G__11991__a[G__11991__i] = arguments[G__11991__i + 0]; ++G__11991__i;}
  args = new cljs.core.IndexedSeq(G__11991__a,0);
} 
return G__11990__delegate.call(this,args);};
G__11990.cljs$lang$maxFixedArity = 0;
G__11990.cljs$lang$applyTo = (function (arglist__11992){
var args = cljs.core.seq(arglist__11992);
return G__11990__delegate(args);
});
G__11990.cljs$core$IFn$_invoke$arity$variadic = G__11990__delegate;
return G__11990;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11993__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11993 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11994__i = 0, G__11994__a = new Array(arguments.length -  0);
while (G__11994__i < G__11994__a.length) {G__11994__a[G__11994__i] = arguments[G__11994__i + 0]; ++G__11994__i;}
  args = new cljs.core.IndexedSeq(G__11994__a,0);
} 
return G__11993__delegate.call(this,args);};
G__11993.cljs$lang$maxFixedArity = 0;
G__11993.cljs$lang$applyTo = (function (arglist__11995){
var args = cljs.core.seq(arglist__11995);
return G__11993__delegate(args);
});
G__11993.cljs$core$IFn$_invoke$arity$variadic = G__11993__delegate;
return G__11993;
})()
;

return null;
});
