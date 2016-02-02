goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__21914__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__21914 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21915__i = 0, G__21915__a = new Array(arguments.length -  0);
while (G__21915__i < G__21915__a.length) {G__21915__a[G__21915__i] = arguments[G__21915__i + 0]; ++G__21915__i;}
  args = new cljs.core.IndexedSeq(G__21915__a,0);
} 
return G__21914__delegate.call(this,args);};
G__21914.cljs$lang$maxFixedArity = 0;
G__21914.cljs$lang$applyTo = (function (arglist__21916){
var args = cljs.core.seq(arglist__21916);
return G__21914__delegate(args);
});
G__21914.cljs$core$IFn$_invoke$arity$variadic = G__21914__delegate;
return G__21914;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__21917__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__21917 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21918__i = 0, G__21918__a = new Array(arguments.length -  0);
while (G__21918__i < G__21918__a.length) {G__21918__a[G__21918__i] = arguments[G__21918__i + 0]; ++G__21918__i;}
  args = new cljs.core.IndexedSeq(G__21918__a,0);
} 
return G__21917__delegate.call(this,args);};
G__21917.cljs$lang$maxFixedArity = 0;
G__21917.cljs$lang$applyTo = (function (arglist__21919){
var args = cljs.core.seq(arglist__21919);
return G__21917__delegate(args);
});
G__21917.cljs$core$IFn$_invoke$arity$variadic = G__21917__delegate;
return G__21917;
})()
;

return null;
});
