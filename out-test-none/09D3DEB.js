goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15557__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15557 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15558__i = 0, G__15558__a = new Array(arguments.length -  0);
while (G__15558__i < G__15558__a.length) {G__15558__a[G__15558__i] = arguments[G__15558__i + 0]; ++G__15558__i;}
  args = new cljs.core.IndexedSeq(G__15558__a,0);
} 
return G__15557__delegate.call(this,args);};
G__15557.cljs$lang$maxFixedArity = 0;
G__15557.cljs$lang$applyTo = (function (arglist__15559){
var args = cljs.core.seq(arglist__15559);
return G__15557__delegate(args);
});
G__15557.cljs$core$IFn$_invoke$arity$variadic = G__15557__delegate;
return G__15557;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15560__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15560 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15561__i = 0, G__15561__a = new Array(arguments.length -  0);
while (G__15561__i < G__15561__a.length) {G__15561__a[G__15561__i] = arguments[G__15561__i + 0]; ++G__15561__i;}
  args = new cljs.core.IndexedSeq(G__15561__a,0);
} 
return G__15560__delegate.call(this,args);};
G__15560.cljs$lang$maxFixedArity = 0;
G__15560.cljs$lang$applyTo = (function (arglist__15562){
var args = cljs.core.seq(arglist__15562);
return G__15560__delegate(args);
});
G__15560.cljs$core$IFn$_invoke$arity$variadic = G__15560__delegate;
return G__15560;
})()
;

return null;
});
