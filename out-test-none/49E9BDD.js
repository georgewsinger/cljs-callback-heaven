goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__80116__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__80116 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__80117__i = 0, G__80117__a = new Array(arguments.length -  0);
while (G__80117__i < G__80117__a.length) {G__80117__a[G__80117__i] = arguments[G__80117__i + 0]; ++G__80117__i;}
  args = new cljs.core.IndexedSeq(G__80117__a,0);
} 
return G__80116__delegate.call(this,args);};
G__80116.cljs$lang$maxFixedArity = 0;
G__80116.cljs$lang$applyTo = (function (arglist__80118){
var args = cljs.core.seq(arglist__80118);
return G__80116__delegate(args);
});
G__80116.cljs$core$IFn$_invoke$arity$variadic = G__80116__delegate;
return G__80116;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__80119__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__80119 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__80120__i = 0, G__80120__a = new Array(arguments.length -  0);
while (G__80120__i < G__80120__a.length) {G__80120__a[G__80120__i] = arguments[G__80120__i + 0]; ++G__80120__i;}
  args = new cljs.core.IndexedSeq(G__80120__a,0);
} 
return G__80119__delegate.call(this,args);};
G__80119.cljs$lang$maxFixedArity = 0;
G__80119.cljs$lang$applyTo = (function (arglist__80121){
var args = cljs.core.seq(arglist__80121);
return G__80119__delegate(args);
});
G__80119.cljs$core$IFn$_invoke$arity$variadic = G__80119__delegate;
return G__80119;
})()
;

return null;
});
