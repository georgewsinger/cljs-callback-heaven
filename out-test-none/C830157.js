goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__33060__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__33060 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33061__i = 0, G__33061__a = new Array(arguments.length -  0);
while (G__33061__i < G__33061__a.length) {G__33061__a[G__33061__i] = arguments[G__33061__i + 0]; ++G__33061__i;}
  args = new cljs.core.IndexedSeq(G__33061__a,0);
} 
return G__33060__delegate.call(this,args);};
G__33060.cljs$lang$maxFixedArity = 0;
G__33060.cljs$lang$applyTo = (function (arglist__33062){
var args = cljs.core.seq(arglist__33062);
return G__33060__delegate(args);
});
G__33060.cljs$core$IFn$_invoke$arity$variadic = G__33060__delegate;
return G__33060;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__33063__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__33063 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33064__i = 0, G__33064__a = new Array(arguments.length -  0);
while (G__33064__i < G__33064__a.length) {G__33064__a[G__33064__i] = arguments[G__33064__i + 0]; ++G__33064__i;}
  args = new cljs.core.IndexedSeq(G__33064__a,0);
} 
return G__33063__delegate.call(this,args);};
G__33063.cljs$lang$maxFixedArity = 0;
G__33063.cljs$lang$applyTo = (function (arglist__33065){
var args = cljs.core.seq(arglist__33065);
return G__33063__delegate(args);
});
G__33063.cljs$core$IFn$_invoke$arity$variadic = G__33063__delegate;
return G__33063;
})()
;

return null;
});
