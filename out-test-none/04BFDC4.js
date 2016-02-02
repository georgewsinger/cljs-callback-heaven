goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13594__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13594 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13595__i = 0, G__13595__a = new Array(arguments.length -  0);
while (G__13595__i < G__13595__a.length) {G__13595__a[G__13595__i] = arguments[G__13595__i + 0]; ++G__13595__i;}
  args = new cljs.core.IndexedSeq(G__13595__a,0);
} 
return G__13594__delegate.call(this,args);};
G__13594.cljs$lang$maxFixedArity = 0;
G__13594.cljs$lang$applyTo = (function (arglist__13596){
var args = cljs.core.seq(arglist__13596);
return G__13594__delegate(args);
});
G__13594.cljs$core$IFn$_invoke$arity$variadic = G__13594__delegate;
return G__13594;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13597__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13597 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13598__i = 0, G__13598__a = new Array(arguments.length -  0);
while (G__13598__i < G__13598__a.length) {G__13598__a[G__13598__i] = arguments[G__13598__i + 0]; ++G__13598__i;}
  args = new cljs.core.IndexedSeq(G__13598__a,0);
} 
return G__13597__delegate.call(this,args);};
G__13597.cljs$lang$maxFixedArity = 0;
G__13597.cljs$lang$applyTo = (function (arglist__13599){
var args = cljs.core.seq(arglist__13599);
return G__13597__delegate(args);
});
G__13597.cljs$core$IFn$_invoke$arity$variadic = G__13597__delegate;
return G__13597;
})()
;

return null;
});
