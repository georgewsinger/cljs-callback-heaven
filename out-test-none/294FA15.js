goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14873__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14873 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14874__i = 0, G__14874__a = new Array(arguments.length -  0);
while (G__14874__i < G__14874__a.length) {G__14874__a[G__14874__i] = arguments[G__14874__i + 0]; ++G__14874__i;}
  args = new cljs.core.IndexedSeq(G__14874__a,0);
} 
return G__14873__delegate.call(this,args);};
G__14873.cljs$lang$maxFixedArity = 0;
G__14873.cljs$lang$applyTo = (function (arglist__14875){
var args = cljs.core.seq(arglist__14875);
return G__14873__delegate(args);
});
G__14873.cljs$core$IFn$_invoke$arity$variadic = G__14873__delegate;
return G__14873;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14876__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14876 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14877__i = 0, G__14877__a = new Array(arguments.length -  0);
while (G__14877__i < G__14877__a.length) {G__14877__a[G__14877__i] = arguments[G__14877__i + 0]; ++G__14877__i;}
  args = new cljs.core.IndexedSeq(G__14877__a,0);
} 
return G__14876__delegate.call(this,args);};
G__14876.cljs$lang$maxFixedArity = 0;
G__14876.cljs$lang$applyTo = (function (arglist__14878){
var args = cljs.core.seq(arglist__14878);
return G__14876__delegate(args);
});
G__14876.cljs$core$IFn$_invoke$arity$variadic = G__14876__delegate;
return G__14876;
})()
;

return null;
});
