goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9557__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9557 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9558__i = 0, G__9558__a = new Array(arguments.length -  0);
while (G__9558__i < G__9558__a.length) {G__9558__a[G__9558__i] = arguments[G__9558__i + 0]; ++G__9558__i;}
  args = new cljs.core.IndexedSeq(G__9558__a,0);
} 
return G__9557__delegate.call(this,args);};
G__9557.cljs$lang$maxFixedArity = 0;
G__9557.cljs$lang$applyTo = (function (arglist__9559){
var args = cljs.core.seq(arglist__9559);
return G__9557__delegate(args);
});
G__9557.cljs$core$IFn$_invoke$arity$variadic = G__9557__delegate;
return G__9557;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9560__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9560 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9561__i = 0, G__9561__a = new Array(arguments.length -  0);
while (G__9561__i < G__9561__a.length) {G__9561__a[G__9561__i] = arguments[G__9561__i + 0]; ++G__9561__i;}
  args = new cljs.core.IndexedSeq(G__9561__a,0);
} 
return G__9560__delegate.call(this,args);};
G__9560.cljs$lang$maxFixedArity = 0;
G__9560.cljs$lang$applyTo = (function (arglist__9562){
var args = cljs.core.seq(arglist__9562);
return G__9560__delegate(args);
});
G__9560.cljs$core$IFn$_invoke$arity$variadic = G__9560__delegate;
return G__9560;
})()
;

return null;
});
