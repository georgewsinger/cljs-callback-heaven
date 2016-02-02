goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__17586__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__17586 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17587__i = 0, G__17587__a = new Array(arguments.length -  0);
while (G__17587__i < G__17587__a.length) {G__17587__a[G__17587__i] = arguments[G__17587__i + 0]; ++G__17587__i;}
  args = new cljs.core.IndexedSeq(G__17587__a,0);
} 
return G__17586__delegate.call(this,args);};
G__17586.cljs$lang$maxFixedArity = 0;
G__17586.cljs$lang$applyTo = (function (arglist__17588){
var args = cljs.core.seq(arglist__17588);
return G__17586__delegate(args);
});
G__17586.cljs$core$IFn$_invoke$arity$variadic = G__17586__delegate;
return G__17586;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__17589__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__17589 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17590__i = 0, G__17590__a = new Array(arguments.length -  0);
while (G__17590__i < G__17590__a.length) {G__17590__a[G__17590__i] = arguments[G__17590__i + 0]; ++G__17590__i;}
  args = new cljs.core.IndexedSeq(G__17590__a,0);
} 
return G__17589__delegate.call(this,args);};
G__17589.cljs$lang$maxFixedArity = 0;
G__17589.cljs$lang$applyTo = (function (arglist__17591){
var args = cljs.core.seq(arglist__17591);
return G__17589__delegate(args);
});
G__17589.cljs$core$IFn$_invoke$arity$variadic = G__17589__delegate;
return G__17589;
})()
;

return null;
});
