goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8583__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8583 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8584__i = 0, G__8584__a = new Array(arguments.length -  0);
while (G__8584__i < G__8584__a.length) {G__8584__a[G__8584__i] = arguments[G__8584__i + 0]; ++G__8584__i;}
  args = new cljs.core.IndexedSeq(G__8584__a,0);
} 
return G__8583__delegate.call(this,args);};
G__8583.cljs$lang$maxFixedArity = 0;
G__8583.cljs$lang$applyTo = (function (arglist__8585){
var args = cljs.core.seq(arglist__8585);
return G__8583__delegate(args);
});
G__8583.cljs$core$IFn$_invoke$arity$variadic = G__8583__delegate;
return G__8583;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8586__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8586 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8587__i = 0, G__8587__a = new Array(arguments.length -  0);
while (G__8587__i < G__8587__a.length) {G__8587__a[G__8587__i] = arguments[G__8587__i + 0]; ++G__8587__i;}
  args = new cljs.core.IndexedSeq(G__8587__a,0);
} 
return G__8586__delegate.call(this,args);};
G__8586.cljs$lang$maxFixedArity = 0;
G__8586.cljs$lang$applyTo = (function (arglist__8588){
var args = cljs.core.seq(arglist__8588);
return G__8586__delegate(args);
});
G__8586.cljs$core$IFn$_invoke$arity$variadic = G__8586__delegate;
return G__8586;
})()
;

return null;
});
