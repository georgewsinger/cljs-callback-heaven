goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11027__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11027 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11028__i = 0, G__11028__a = new Array(arguments.length -  0);
while (G__11028__i < G__11028__a.length) {G__11028__a[G__11028__i] = arguments[G__11028__i + 0]; ++G__11028__i;}
  args = new cljs.core.IndexedSeq(G__11028__a,0);
} 
return G__11027__delegate.call(this,args);};
G__11027.cljs$lang$maxFixedArity = 0;
G__11027.cljs$lang$applyTo = (function (arglist__11029){
var args = cljs.core.seq(arglist__11029);
return G__11027__delegate(args);
});
G__11027.cljs$core$IFn$_invoke$arity$variadic = G__11027__delegate;
return G__11027;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11030__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11030 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11031__i = 0, G__11031__a = new Array(arguments.length -  0);
while (G__11031__i < G__11031__a.length) {G__11031__a[G__11031__i] = arguments[G__11031__i + 0]; ++G__11031__i;}
  args = new cljs.core.IndexedSeq(G__11031__a,0);
} 
return G__11030__delegate.call(this,args);};
G__11030.cljs$lang$maxFixedArity = 0;
G__11030.cljs$lang$applyTo = (function (arglist__11032){
var args = cljs.core.seq(arglist__11032);
return G__11030__delegate(args);
});
G__11030.cljs$core$IFn$_invoke$arity$variadic = G__11030__delegate;
return G__11030;
})()
;

return null;
});
