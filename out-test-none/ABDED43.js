goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__36113__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__36113 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36114__i = 0, G__36114__a = new Array(arguments.length -  0);
while (G__36114__i < G__36114__a.length) {G__36114__a[G__36114__i] = arguments[G__36114__i + 0]; ++G__36114__i;}
  args = new cljs.core.IndexedSeq(G__36114__a,0);
} 
return G__36113__delegate.call(this,args);};
G__36113.cljs$lang$maxFixedArity = 0;
G__36113.cljs$lang$applyTo = (function (arglist__36115){
var args = cljs.core.seq(arglist__36115);
return G__36113__delegate(args);
});
G__36113.cljs$core$IFn$_invoke$arity$variadic = G__36113__delegate;
return G__36113;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__36116__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__36116 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36117__i = 0, G__36117__a = new Array(arguments.length -  0);
while (G__36117__i < G__36117__a.length) {G__36117__a[G__36117__i] = arguments[G__36117__i + 0]; ++G__36117__i;}
  args = new cljs.core.IndexedSeq(G__36117__a,0);
} 
return G__36116__delegate.call(this,args);};
G__36116.cljs$lang$maxFixedArity = 0;
G__36116.cljs$lang$applyTo = (function (arglist__36118){
var args = cljs.core.seq(arglist__36118);
return G__36116__delegate(args);
});
G__36116.cljs$core$IFn$_invoke$arity$variadic = G__36116__delegate;
return G__36116;
})()
;

return null;
});
