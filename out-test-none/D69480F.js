goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__34498__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__34498 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34499__i = 0, G__34499__a = new Array(arguments.length -  0);
while (G__34499__i < G__34499__a.length) {G__34499__a[G__34499__i] = arguments[G__34499__i + 0]; ++G__34499__i;}
  args = new cljs.core.IndexedSeq(G__34499__a,0);
} 
return G__34498__delegate.call(this,args);};
G__34498.cljs$lang$maxFixedArity = 0;
G__34498.cljs$lang$applyTo = (function (arglist__34500){
var args = cljs.core.seq(arglist__34500);
return G__34498__delegate(args);
});
G__34498.cljs$core$IFn$_invoke$arity$variadic = G__34498__delegate;
return G__34498;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__34501__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__34501 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34502__i = 0, G__34502__a = new Array(arguments.length -  0);
while (G__34502__i < G__34502__a.length) {G__34502__a[G__34502__i] = arguments[G__34502__i + 0]; ++G__34502__i;}
  args = new cljs.core.IndexedSeq(G__34502__a,0);
} 
return G__34501__delegate.call(this,args);};
G__34501.cljs$lang$maxFixedArity = 0;
G__34501.cljs$lang$applyTo = (function (arglist__34503){
var args = cljs.core.seq(arglist__34503);
return G__34501__delegate(args);
});
G__34501.cljs$core$IFn$_invoke$arity$variadic = G__34501__delegate;
return G__34501;
})()
;

return null;
});
