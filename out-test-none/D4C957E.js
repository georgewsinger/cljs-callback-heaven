goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__26453__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__26453 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26454__i = 0, G__26454__a = new Array(arguments.length -  0);
while (G__26454__i < G__26454__a.length) {G__26454__a[G__26454__i] = arguments[G__26454__i + 0]; ++G__26454__i;}
  args = new cljs.core.IndexedSeq(G__26454__a,0);
} 
return G__26453__delegate.call(this,args);};
G__26453.cljs$lang$maxFixedArity = 0;
G__26453.cljs$lang$applyTo = (function (arglist__26455){
var args = cljs.core.seq(arglist__26455);
return G__26453__delegate(args);
});
G__26453.cljs$core$IFn$_invoke$arity$variadic = G__26453__delegate;
return G__26453;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__26456__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__26456 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26457__i = 0, G__26457__a = new Array(arguments.length -  0);
while (G__26457__i < G__26457__a.length) {G__26457__a[G__26457__i] = arguments[G__26457__i + 0]; ++G__26457__i;}
  args = new cljs.core.IndexedSeq(G__26457__a,0);
} 
return G__26456__delegate.call(this,args);};
G__26456.cljs$lang$maxFixedArity = 0;
G__26456.cljs$lang$applyTo = (function (arglist__26458){
var args = cljs.core.seq(arglist__26458);
return G__26456__delegate(args);
});
G__26456.cljs$core$IFn$_invoke$arity$variadic = G__26456__delegate;
return G__26456;
})()
;

return null;
});
