goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9731__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9731 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9732__i = 0, G__9732__a = new Array(arguments.length -  0);
while (G__9732__i < G__9732__a.length) {G__9732__a[G__9732__i] = arguments[G__9732__i + 0]; ++G__9732__i;}
  args = new cljs.core.IndexedSeq(G__9732__a,0);
} 
return G__9731__delegate.call(this,args);};
G__9731.cljs$lang$maxFixedArity = 0;
G__9731.cljs$lang$applyTo = (function (arglist__9733){
var args = cljs.core.seq(arglist__9733);
return G__9731__delegate(args);
});
G__9731.cljs$core$IFn$_invoke$arity$variadic = G__9731__delegate;
return G__9731;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9734__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9734 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9735__i = 0, G__9735__a = new Array(arguments.length -  0);
while (G__9735__i < G__9735__a.length) {G__9735__a[G__9735__i] = arguments[G__9735__i + 0]; ++G__9735__i;}
  args = new cljs.core.IndexedSeq(G__9735__a,0);
} 
return G__9734__delegate.call(this,args);};
G__9734.cljs$lang$maxFixedArity = 0;
G__9734.cljs$lang$applyTo = (function (arglist__9736){
var args = cljs.core.seq(arglist__9736);
return G__9734__delegate(args);
});
G__9734.cljs$core$IFn$_invoke$arity$variadic = G__9734__delegate;
return G__9734;
})()
;

return null;
});
