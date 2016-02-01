goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16498__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16498 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16499__i = 0, G__16499__a = new Array(arguments.length -  0);
while (G__16499__i < G__16499__a.length) {G__16499__a[G__16499__i] = arguments[G__16499__i + 0]; ++G__16499__i;}
  args = new cljs.core.IndexedSeq(G__16499__a,0);
} 
return G__16498__delegate.call(this,args);};
G__16498.cljs$lang$maxFixedArity = 0;
G__16498.cljs$lang$applyTo = (function (arglist__16500){
var args = cljs.core.seq(arglist__16500);
return G__16498__delegate(args);
});
G__16498.cljs$core$IFn$_invoke$arity$variadic = G__16498__delegate;
return G__16498;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16501__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16501 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16502__i = 0, G__16502__a = new Array(arguments.length -  0);
while (G__16502__i < G__16502__a.length) {G__16502__a[G__16502__i] = arguments[G__16502__i + 0]; ++G__16502__i;}
  args = new cljs.core.IndexedSeq(G__16502__a,0);
} 
return G__16501__delegate.call(this,args);};
G__16501.cljs$lang$maxFixedArity = 0;
G__16501.cljs$lang$applyTo = (function (arglist__16503){
var args = cljs.core.seq(arglist__16503);
return G__16501__delegate(args);
});
G__16501.cljs$core$IFn$_invoke$arity$variadic = G__16501__delegate;
return G__16501;
})()
;

return null;
});
