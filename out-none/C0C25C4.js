goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9831__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9831 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9832__i = 0, G__9832__a = new Array(arguments.length -  0);
while (G__9832__i < G__9832__a.length) {G__9832__a[G__9832__i] = arguments[G__9832__i + 0]; ++G__9832__i;}
  args = new cljs.core.IndexedSeq(G__9832__a,0);
} 
return G__9831__delegate.call(this,args);};
G__9831.cljs$lang$maxFixedArity = 0;
G__9831.cljs$lang$applyTo = (function (arglist__9833){
var args = cljs.core.seq(arglist__9833);
return G__9831__delegate(args);
});
G__9831.cljs$core$IFn$_invoke$arity$variadic = G__9831__delegate;
return G__9831;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9834__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9834 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9835__i = 0, G__9835__a = new Array(arguments.length -  0);
while (G__9835__i < G__9835__a.length) {G__9835__a[G__9835__i] = arguments[G__9835__i + 0]; ++G__9835__i;}
  args = new cljs.core.IndexedSeq(G__9835__a,0);
} 
return G__9834__delegate.call(this,args);};
G__9834.cljs$lang$maxFixedArity = 0;
G__9834.cljs$lang$applyTo = (function (arglist__9836){
var args = cljs.core.seq(arglist__9836);
return G__9834__delegate(args);
});
G__9834.cljs$core$IFn$_invoke$arity$variadic = G__9834__delegate;
return G__9834;
})()
;

return null;
});
