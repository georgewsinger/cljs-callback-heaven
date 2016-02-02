goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__313497__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__313497 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__313498__i = 0, G__313498__a = new Array(arguments.length -  0);
while (G__313498__i < G__313498__a.length) {G__313498__a[G__313498__i] = arguments[G__313498__i + 0]; ++G__313498__i;}
  args = new cljs.core.IndexedSeq(G__313498__a,0);
} 
return G__313497__delegate.call(this,args);};
G__313497.cljs$lang$maxFixedArity = 0;
G__313497.cljs$lang$applyTo = (function (arglist__313499){
var args = cljs.core.seq(arglist__313499);
return G__313497__delegate(args);
});
G__313497.cljs$core$IFn$_invoke$arity$variadic = G__313497__delegate;
return G__313497;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__313500__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__313500 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__313501__i = 0, G__313501__a = new Array(arguments.length -  0);
while (G__313501__i < G__313501__a.length) {G__313501__a[G__313501__i] = arguments[G__313501__i + 0]; ++G__313501__i;}
  args = new cljs.core.IndexedSeq(G__313501__a,0);
} 
return G__313500__delegate.call(this,args);};
G__313500.cljs$lang$maxFixedArity = 0;
G__313500.cljs$lang$applyTo = (function (arglist__313502){
var args = cljs.core.seq(arglist__313502);
return G__313500__delegate(args);
});
G__313500.cljs$core$IFn$_invoke$arity$variadic = G__313500__delegate;
return G__313500;
})()
;

return null;
});
