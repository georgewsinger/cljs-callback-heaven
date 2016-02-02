goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__70336__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__70336 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__70337__i = 0, G__70337__a = new Array(arguments.length -  0);
while (G__70337__i < G__70337__a.length) {G__70337__a[G__70337__i] = arguments[G__70337__i + 0]; ++G__70337__i;}
  args = new cljs.core.IndexedSeq(G__70337__a,0);
} 
return G__70336__delegate.call(this,args);};
G__70336.cljs$lang$maxFixedArity = 0;
G__70336.cljs$lang$applyTo = (function (arglist__70338){
var args = cljs.core.seq(arglist__70338);
return G__70336__delegate(args);
});
G__70336.cljs$core$IFn$_invoke$arity$variadic = G__70336__delegate;
return G__70336;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__70339__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__70339 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__70340__i = 0, G__70340__a = new Array(arguments.length -  0);
while (G__70340__i < G__70340__a.length) {G__70340__a[G__70340__i] = arguments[G__70340__i + 0]; ++G__70340__i;}
  args = new cljs.core.IndexedSeq(G__70340__a,0);
} 
return G__70339__delegate.call(this,args);};
G__70339.cljs$lang$maxFixedArity = 0;
G__70339.cljs$lang$applyTo = (function (arglist__70341){
var args = cljs.core.seq(arglist__70341);
return G__70339__delegate(args);
});
G__70339.cljs$core$IFn$_invoke$arity$variadic = G__70339__delegate;
return G__70339;
})()
;

return null;
});
