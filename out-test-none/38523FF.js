goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__32392__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__32392 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32393__i = 0, G__32393__a = new Array(arguments.length -  0);
while (G__32393__i < G__32393__a.length) {G__32393__a[G__32393__i] = arguments[G__32393__i + 0]; ++G__32393__i;}
  args = new cljs.core.IndexedSeq(G__32393__a,0);
} 
return G__32392__delegate.call(this,args);};
G__32392.cljs$lang$maxFixedArity = 0;
G__32392.cljs$lang$applyTo = (function (arglist__32394){
var args = cljs.core.seq(arglist__32394);
return G__32392__delegate(args);
});
G__32392.cljs$core$IFn$_invoke$arity$variadic = G__32392__delegate;
return G__32392;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__32395__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__32395 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32396__i = 0, G__32396__a = new Array(arguments.length -  0);
while (G__32396__i < G__32396__a.length) {G__32396__a[G__32396__i] = arguments[G__32396__i + 0]; ++G__32396__i;}
  args = new cljs.core.IndexedSeq(G__32396__a,0);
} 
return G__32395__delegate.call(this,args);};
G__32395.cljs$lang$maxFixedArity = 0;
G__32395.cljs$lang$applyTo = (function (arglist__32397){
var args = cljs.core.seq(arglist__32397);
return G__32395__delegate(args);
});
G__32395.cljs$core$IFn$_invoke$arity$variadic = G__32395__delegate;
return G__32395;
})()
;

return null;
});
