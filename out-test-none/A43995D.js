goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9989__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9989 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9990__i = 0, G__9990__a = new Array(arguments.length -  0);
while (G__9990__i < G__9990__a.length) {G__9990__a[G__9990__i] = arguments[G__9990__i + 0]; ++G__9990__i;}
  args = new cljs.core.IndexedSeq(G__9990__a,0);
} 
return G__9989__delegate.call(this,args);};
G__9989.cljs$lang$maxFixedArity = 0;
G__9989.cljs$lang$applyTo = (function (arglist__9991){
var args = cljs.core.seq(arglist__9991);
return G__9989__delegate(args);
});
G__9989.cljs$core$IFn$_invoke$arity$variadic = G__9989__delegate;
return G__9989;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9992__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9992 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9993__i = 0, G__9993__a = new Array(arguments.length -  0);
while (G__9993__i < G__9993__a.length) {G__9993__a[G__9993__i] = arguments[G__9993__i + 0]; ++G__9993__i;}
  args = new cljs.core.IndexedSeq(G__9993__a,0);
} 
return G__9992__delegate.call(this,args);};
G__9992.cljs$lang$maxFixedArity = 0;
G__9992.cljs$lang$applyTo = (function (arglist__9994){
var args = cljs.core.seq(arglist__9994);
return G__9992__delegate(args);
});
G__9992.cljs$core$IFn$_invoke$arity$variadic = G__9992__delegate;
return G__9992;
})()
;

return null;
});
