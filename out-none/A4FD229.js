goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__47094__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__47094 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47095__i = 0, G__47095__a = new Array(arguments.length -  0);
while (G__47095__i < G__47095__a.length) {G__47095__a[G__47095__i] = arguments[G__47095__i + 0]; ++G__47095__i;}
  args = new cljs.core.IndexedSeq(G__47095__a,0);
} 
return G__47094__delegate.call(this,args);};
G__47094.cljs$lang$maxFixedArity = 0;
G__47094.cljs$lang$applyTo = (function (arglist__47096){
var args = cljs.core.seq(arglist__47096);
return G__47094__delegate(args);
});
G__47094.cljs$core$IFn$_invoke$arity$variadic = G__47094__delegate;
return G__47094;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__47097__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__47097 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47098__i = 0, G__47098__a = new Array(arguments.length -  0);
while (G__47098__i < G__47098__a.length) {G__47098__a[G__47098__i] = arguments[G__47098__i + 0]; ++G__47098__i;}
  args = new cljs.core.IndexedSeq(G__47098__a,0);
} 
return G__47097__delegate.call(this,args);};
G__47097.cljs$lang$maxFixedArity = 0;
G__47097.cljs$lang$applyTo = (function (arglist__47099){
var args = cljs.core.seq(arglist__47099);
return G__47097__delegate(args);
});
G__47097.cljs$core$IFn$_invoke$arity$variadic = G__47097__delegate;
return G__47097;
})()
;

return null;
});
