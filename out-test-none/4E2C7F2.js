goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__156592__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__156592 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__156593__i = 0, G__156593__a = new Array(arguments.length -  0);
while (G__156593__i < G__156593__a.length) {G__156593__a[G__156593__i] = arguments[G__156593__i + 0]; ++G__156593__i;}
  args = new cljs.core.IndexedSeq(G__156593__a,0);
} 
return G__156592__delegate.call(this,args);};
G__156592.cljs$lang$maxFixedArity = 0;
G__156592.cljs$lang$applyTo = (function (arglist__156594){
var args = cljs.core.seq(arglist__156594);
return G__156592__delegate(args);
});
G__156592.cljs$core$IFn$_invoke$arity$variadic = G__156592__delegate;
return G__156592;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__156595__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__156595 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__156596__i = 0, G__156596__a = new Array(arguments.length -  0);
while (G__156596__i < G__156596__a.length) {G__156596__a[G__156596__i] = arguments[G__156596__i + 0]; ++G__156596__i;}
  args = new cljs.core.IndexedSeq(G__156596__a,0);
} 
return G__156595__delegate.call(this,args);};
G__156595.cljs$lang$maxFixedArity = 0;
G__156595.cljs$lang$applyTo = (function (arglist__156597){
var args = cljs.core.seq(arglist__156597);
return G__156595__delegate(args);
});
G__156595.cljs$core$IFn$_invoke$arity$variadic = G__156595__delegate;
return G__156595;
})()
;

return null;
});
