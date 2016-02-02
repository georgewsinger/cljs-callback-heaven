goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9583__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9583 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9584__i = 0, G__9584__a = new Array(arguments.length -  0);
while (G__9584__i < G__9584__a.length) {G__9584__a[G__9584__i] = arguments[G__9584__i + 0]; ++G__9584__i;}
  args = new cljs.core.IndexedSeq(G__9584__a,0);
} 
return G__9583__delegate.call(this,args);};
G__9583.cljs$lang$maxFixedArity = 0;
G__9583.cljs$lang$applyTo = (function (arglist__9585){
var args = cljs.core.seq(arglist__9585);
return G__9583__delegate(args);
});
G__9583.cljs$core$IFn$_invoke$arity$variadic = G__9583__delegate;
return G__9583;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9586__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9586 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9587__i = 0, G__9587__a = new Array(arguments.length -  0);
while (G__9587__i < G__9587__a.length) {G__9587__a[G__9587__i] = arguments[G__9587__i + 0]; ++G__9587__i;}
  args = new cljs.core.IndexedSeq(G__9587__a,0);
} 
return G__9586__delegate.call(this,args);};
G__9586.cljs$lang$maxFixedArity = 0;
G__9586.cljs$lang$applyTo = (function (arglist__9588){
var args = cljs.core.seq(arglist__9588);
return G__9586__delegate(args);
});
G__9586.cljs$core$IFn$_invoke$arity$variadic = G__9586__delegate;
return G__9586;
})()
;

return null;
});
