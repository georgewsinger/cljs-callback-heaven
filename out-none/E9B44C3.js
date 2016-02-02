goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__32339__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__32339 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32340__i = 0, G__32340__a = new Array(arguments.length -  0);
while (G__32340__i < G__32340__a.length) {G__32340__a[G__32340__i] = arguments[G__32340__i + 0]; ++G__32340__i;}
  args = new cljs.core.IndexedSeq(G__32340__a,0);
} 
return G__32339__delegate.call(this,args);};
G__32339.cljs$lang$maxFixedArity = 0;
G__32339.cljs$lang$applyTo = (function (arglist__32341){
var args = cljs.core.seq(arglist__32341);
return G__32339__delegate(args);
});
G__32339.cljs$core$IFn$_invoke$arity$variadic = G__32339__delegate;
return G__32339;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__32342__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__32342 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32343__i = 0, G__32343__a = new Array(arguments.length -  0);
while (G__32343__i < G__32343__a.length) {G__32343__a[G__32343__i] = arguments[G__32343__i + 0]; ++G__32343__i;}
  args = new cljs.core.IndexedSeq(G__32343__a,0);
} 
return G__32342__delegate.call(this,args);};
G__32342.cljs$lang$maxFixedArity = 0;
G__32342.cljs$lang$applyTo = (function (arglist__32344){
var args = cljs.core.seq(arglist__32344);
return G__32342__delegate(args);
});
G__32342.cljs$core$IFn$_invoke$arity$variadic = G__32342__delegate;
return G__32342;
})()
;

return null;
});
