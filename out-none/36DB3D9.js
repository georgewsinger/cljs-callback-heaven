goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16094__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16094 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16095__i = 0, G__16095__a = new Array(arguments.length -  0);
while (G__16095__i < G__16095__a.length) {G__16095__a[G__16095__i] = arguments[G__16095__i + 0]; ++G__16095__i;}
  args = new cljs.core.IndexedSeq(G__16095__a,0);
} 
return G__16094__delegate.call(this,args);};
G__16094.cljs$lang$maxFixedArity = 0;
G__16094.cljs$lang$applyTo = (function (arglist__16096){
var args = cljs.core.seq(arglist__16096);
return G__16094__delegate(args);
});
G__16094.cljs$core$IFn$_invoke$arity$variadic = G__16094__delegate;
return G__16094;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16097__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16097 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16098__i = 0, G__16098__a = new Array(arguments.length -  0);
while (G__16098__i < G__16098__a.length) {G__16098__a[G__16098__i] = arguments[G__16098__i + 0]; ++G__16098__i;}
  args = new cljs.core.IndexedSeq(G__16098__a,0);
} 
return G__16097__delegate.call(this,args);};
G__16097.cljs$lang$maxFixedArity = 0;
G__16097.cljs$lang$applyTo = (function (arglist__16099){
var args = cljs.core.seq(arglist__16099);
return G__16097__delegate(args);
});
G__16097.cljs$core$IFn$_invoke$arity$variadic = G__16097__delegate;
return G__16097;
})()
;

return null;
});
