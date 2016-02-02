goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16630__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16630 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16631__i = 0, G__16631__a = new Array(arguments.length -  0);
while (G__16631__i < G__16631__a.length) {G__16631__a[G__16631__i] = arguments[G__16631__i + 0]; ++G__16631__i;}
  args = new cljs.core.IndexedSeq(G__16631__a,0);
} 
return G__16630__delegate.call(this,args);};
G__16630.cljs$lang$maxFixedArity = 0;
G__16630.cljs$lang$applyTo = (function (arglist__16632){
var args = cljs.core.seq(arglist__16632);
return G__16630__delegate(args);
});
G__16630.cljs$core$IFn$_invoke$arity$variadic = G__16630__delegate;
return G__16630;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16633__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16633 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16634__i = 0, G__16634__a = new Array(arguments.length -  0);
while (G__16634__i < G__16634__a.length) {G__16634__a[G__16634__i] = arguments[G__16634__i + 0]; ++G__16634__i;}
  args = new cljs.core.IndexedSeq(G__16634__a,0);
} 
return G__16633__delegate.call(this,args);};
G__16633.cljs$lang$maxFixedArity = 0;
G__16633.cljs$lang$applyTo = (function (arglist__16635){
var args = cljs.core.seq(arglist__16635);
return G__16633__delegate(args);
});
G__16633.cljs$core$IFn$_invoke$arity$variadic = G__16633__delegate;
return G__16633;
})()
;

return null;
});
