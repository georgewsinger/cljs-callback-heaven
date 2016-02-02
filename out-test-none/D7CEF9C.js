goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9592__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9592 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9593__i = 0, G__9593__a = new Array(arguments.length -  0);
while (G__9593__i < G__9593__a.length) {G__9593__a[G__9593__i] = arguments[G__9593__i + 0]; ++G__9593__i;}
  args = new cljs.core.IndexedSeq(G__9593__a,0);
} 
return G__9592__delegate.call(this,args);};
G__9592.cljs$lang$maxFixedArity = 0;
G__9592.cljs$lang$applyTo = (function (arglist__9594){
var args = cljs.core.seq(arglist__9594);
return G__9592__delegate(args);
});
G__9592.cljs$core$IFn$_invoke$arity$variadic = G__9592__delegate;
return G__9592;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9595__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9595 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9596__i = 0, G__9596__a = new Array(arguments.length -  0);
while (G__9596__i < G__9596__a.length) {G__9596__a[G__9596__i] = arguments[G__9596__i + 0]; ++G__9596__i;}
  args = new cljs.core.IndexedSeq(G__9596__a,0);
} 
return G__9595__delegate.call(this,args);};
G__9595.cljs$lang$maxFixedArity = 0;
G__9595.cljs$lang$applyTo = (function (arglist__9597){
var args = cljs.core.seq(arglist__9597);
return G__9595__delegate(args);
});
G__9595.cljs$core$IFn$_invoke$arity$variadic = G__9595__delegate;
return G__9595;
})()
;

return null;
});
