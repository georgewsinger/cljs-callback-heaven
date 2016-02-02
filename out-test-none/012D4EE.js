goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__251059__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__251059 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__251060__i = 0, G__251060__a = new Array(arguments.length -  0);
while (G__251060__i < G__251060__a.length) {G__251060__a[G__251060__i] = arguments[G__251060__i + 0]; ++G__251060__i;}
  args = new cljs.core.IndexedSeq(G__251060__a,0);
} 
return G__251059__delegate.call(this,args);};
G__251059.cljs$lang$maxFixedArity = 0;
G__251059.cljs$lang$applyTo = (function (arglist__251061){
var args = cljs.core.seq(arglist__251061);
return G__251059__delegate(args);
});
G__251059.cljs$core$IFn$_invoke$arity$variadic = G__251059__delegate;
return G__251059;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__251062__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__251062 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__251063__i = 0, G__251063__a = new Array(arguments.length -  0);
while (G__251063__i < G__251063__a.length) {G__251063__a[G__251063__i] = arguments[G__251063__i + 0]; ++G__251063__i;}
  args = new cljs.core.IndexedSeq(G__251063__a,0);
} 
return G__251062__delegate.call(this,args);};
G__251062.cljs$lang$maxFixedArity = 0;
G__251062.cljs$lang$applyTo = (function (arglist__251064){
var args = cljs.core.seq(arglist__251064);
return G__251062__delegate(args);
});
G__251062.cljs$core$IFn$_invoke$arity$variadic = G__251062__delegate;
return G__251062;
})()
;

return null;
});
