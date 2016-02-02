goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10589__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10589 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10590__i = 0, G__10590__a = new Array(arguments.length -  0);
while (G__10590__i < G__10590__a.length) {G__10590__a[G__10590__i] = arguments[G__10590__i + 0]; ++G__10590__i;}
  args = new cljs.core.IndexedSeq(G__10590__a,0);
} 
return G__10589__delegate.call(this,args);};
G__10589.cljs$lang$maxFixedArity = 0;
G__10589.cljs$lang$applyTo = (function (arglist__10591){
var args = cljs.core.seq(arglist__10591);
return G__10589__delegate(args);
});
G__10589.cljs$core$IFn$_invoke$arity$variadic = G__10589__delegate;
return G__10589;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10592__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10592 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10593__i = 0, G__10593__a = new Array(arguments.length -  0);
while (G__10593__i < G__10593__a.length) {G__10593__a[G__10593__i] = arguments[G__10593__i + 0]; ++G__10593__i;}
  args = new cljs.core.IndexedSeq(G__10593__a,0);
} 
return G__10592__delegate.call(this,args);};
G__10592.cljs$lang$maxFixedArity = 0;
G__10592.cljs$lang$applyTo = (function (arglist__10594){
var args = cljs.core.seq(arglist__10594);
return G__10592__delegate(args);
});
G__10592.cljs$core$IFn$_invoke$arity$variadic = G__10592__delegate;
return G__10592;
})()
;

return null;
});
