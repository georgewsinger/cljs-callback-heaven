goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__173559__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__173559 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__173560__i = 0, G__173560__a = new Array(arguments.length -  0);
while (G__173560__i < G__173560__a.length) {G__173560__a[G__173560__i] = arguments[G__173560__i + 0]; ++G__173560__i;}
  args = new cljs.core.IndexedSeq(G__173560__a,0);
} 
return G__173559__delegate.call(this,args);};
G__173559.cljs$lang$maxFixedArity = 0;
G__173559.cljs$lang$applyTo = (function (arglist__173561){
var args = cljs.core.seq(arglist__173561);
return G__173559__delegate(args);
});
G__173559.cljs$core$IFn$_invoke$arity$variadic = G__173559__delegate;
return G__173559;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__173562__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__173562 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__173563__i = 0, G__173563__a = new Array(arguments.length -  0);
while (G__173563__i < G__173563__a.length) {G__173563__a[G__173563__i] = arguments[G__173563__i + 0]; ++G__173563__i;}
  args = new cljs.core.IndexedSeq(G__173563__a,0);
} 
return G__173562__delegate.call(this,args);};
G__173562.cljs$lang$maxFixedArity = 0;
G__173562.cljs$lang$applyTo = (function (arglist__173564){
var args = cljs.core.seq(arglist__173564);
return G__173562__delegate(args);
});
G__173562.cljs$core$IFn$_invoke$arity$variadic = G__173562__delegate;
return G__173562;
})()
;

return null;
});
