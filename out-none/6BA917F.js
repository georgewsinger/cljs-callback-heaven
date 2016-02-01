goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9853__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9853 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9854__i = 0, G__9854__a = new Array(arguments.length -  0);
while (G__9854__i < G__9854__a.length) {G__9854__a[G__9854__i] = arguments[G__9854__i + 0]; ++G__9854__i;}
  args = new cljs.core.IndexedSeq(G__9854__a,0);
} 
return G__9853__delegate.call(this,args);};
G__9853.cljs$lang$maxFixedArity = 0;
G__9853.cljs$lang$applyTo = (function (arglist__9855){
var args = cljs.core.seq(arglist__9855);
return G__9853__delegate(args);
});
G__9853.cljs$core$IFn$_invoke$arity$variadic = G__9853__delegate;
return G__9853;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9856__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9856 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9857__i = 0, G__9857__a = new Array(arguments.length -  0);
while (G__9857__i < G__9857__a.length) {G__9857__a[G__9857__i] = arguments[G__9857__i + 0]; ++G__9857__i;}
  args = new cljs.core.IndexedSeq(G__9857__a,0);
} 
return G__9856__delegate.call(this,args);};
G__9856.cljs$lang$maxFixedArity = 0;
G__9856.cljs$lang$applyTo = (function (arglist__9858){
var args = cljs.core.seq(arglist__9858);
return G__9856__delegate(args);
});
G__9856.cljs$core$IFn$_invoke$arity$variadic = G__9856__delegate;
return G__9856;
})()
;

return null;
});
