goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10651__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10651 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10652__i = 0, G__10652__a = new Array(arguments.length -  0);
while (G__10652__i < G__10652__a.length) {G__10652__a[G__10652__i] = arguments[G__10652__i + 0]; ++G__10652__i;}
  args = new cljs.core.IndexedSeq(G__10652__a,0);
} 
return G__10651__delegate.call(this,args);};
G__10651.cljs$lang$maxFixedArity = 0;
G__10651.cljs$lang$applyTo = (function (arglist__10653){
var args = cljs.core.seq(arglist__10653);
return G__10651__delegate(args);
});
G__10651.cljs$core$IFn$_invoke$arity$variadic = G__10651__delegate;
return G__10651;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10654__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10654 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10655__i = 0, G__10655__a = new Array(arguments.length -  0);
while (G__10655__i < G__10655__a.length) {G__10655__a[G__10655__i] = arguments[G__10655__i + 0]; ++G__10655__i;}
  args = new cljs.core.IndexedSeq(G__10655__a,0);
} 
return G__10654__delegate.call(this,args);};
G__10654.cljs$lang$maxFixedArity = 0;
G__10654.cljs$lang$applyTo = (function (arglist__10656){
var args = cljs.core.seq(arglist__10656);
return G__10654__delegate(args);
});
G__10654.cljs$core$IFn$_invoke$arity$variadic = G__10654__delegate;
return G__10654;
})()
;

return null;
});
