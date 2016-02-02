goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__41557__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__41557 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41558__i = 0, G__41558__a = new Array(arguments.length -  0);
while (G__41558__i < G__41558__a.length) {G__41558__a[G__41558__i] = arguments[G__41558__i + 0]; ++G__41558__i;}
  args = new cljs.core.IndexedSeq(G__41558__a,0);
} 
return G__41557__delegate.call(this,args);};
G__41557.cljs$lang$maxFixedArity = 0;
G__41557.cljs$lang$applyTo = (function (arglist__41559){
var args = cljs.core.seq(arglist__41559);
return G__41557__delegate(args);
});
G__41557.cljs$core$IFn$_invoke$arity$variadic = G__41557__delegate;
return G__41557;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__41560__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__41560 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41561__i = 0, G__41561__a = new Array(arguments.length -  0);
while (G__41561__i < G__41561__a.length) {G__41561__a[G__41561__i] = arguments[G__41561__i + 0]; ++G__41561__i;}
  args = new cljs.core.IndexedSeq(G__41561__a,0);
} 
return G__41560__delegate.call(this,args);};
G__41560.cljs$lang$maxFixedArity = 0;
G__41560.cljs$lang$applyTo = (function (arglist__41562){
var args = cljs.core.seq(arglist__41562);
return G__41560__delegate(args);
});
G__41560.cljs$core$IFn$_invoke$arity$variadic = G__41560__delegate;
return G__41560;
})()
;

return null;
});
