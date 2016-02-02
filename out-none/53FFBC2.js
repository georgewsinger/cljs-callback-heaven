goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__29450__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__29450 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29451__i = 0, G__29451__a = new Array(arguments.length -  0);
while (G__29451__i < G__29451__a.length) {G__29451__a[G__29451__i] = arguments[G__29451__i + 0]; ++G__29451__i;}
  args = new cljs.core.IndexedSeq(G__29451__a,0);
} 
return G__29450__delegate.call(this,args);};
G__29450.cljs$lang$maxFixedArity = 0;
G__29450.cljs$lang$applyTo = (function (arglist__29452){
var args = cljs.core.seq(arglist__29452);
return G__29450__delegate(args);
});
G__29450.cljs$core$IFn$_invoke$arity$variadic = G__29450__delegate;
return G__29450;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__29453__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__29453 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29454__i = 0, G__29454__a = new Array(arguments.length -  0);
while (G__29454__i < G__29454__a.length) {G__29454__a[G__29454__i] = arguments[G__29454__i + 0]; ++G__29454__i;}
  args = new cljs.core.IndexedSeq(G__29454__a,0);
} 
return G__29453__delegate.call(this,args);};
G__29453.cljs$lang$maxFixedArity = 0;
G__29453.cljs$lang$applyTo = (function (arglist__29455){
var args = cljs.core.seq(arglist__29455);
return G__29453__delegate(args);
});
G__29453.cljs$core$IFn$_invoke$arity$variadic = G__29453__delegate;
return G__29453;
})()
;

return null;
});
