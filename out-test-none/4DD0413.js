goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__57580__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__57580 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57581__i = 0, G__57581__a = new Array(arguments.length -  0);
while (G__57581__i < G__57581__a.length) {G__57581__a[G__57581__i] = arguments[G__57581__i + 0]; ++G__57581__i;}
  args = new cljs.core.IndexedSeq(G__57581__a,0);
} 
return G__57580__delegate.call(this,args);};
G__57580.cljs$lang$maxFixedArity = 0;
G__57580.cljs$lang$applyTo = (function (arglist__57582){
var args = cljs.core.seq(arglist__57582);
return G__57580__delegate(args);
});
G__57580.cljs$core$IFn$_invoke$arity$variadic = G__57580__delegate;
return G__57580;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__57583__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__57583 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57584__i = 0, G__57584__a = new Array(arguments.length -  0);
while (G__57584__i < G__57584__a.length) {G__57584__a[G__57584__i] = arguments[G__57584__i + 0]; ++G__57584__i;}
  args = new cljs.core.IndexedSeq(G__57584__a,0);
} 
return G__57583__delegate.call(this,args);};
G__57583.cljs$lang$maxFixedArity = 0;
G__57583.cljs$lang$applyTo = (function (arglist__57585){
var args = cljs.core.seq(arglist__57585);
return G__57583__delegate(args);
});
G__57583.cljs$core$IFn$_invoke$arity$variadic = G__57583__delegate;
return G__57583;
})()
;

return null;
});
