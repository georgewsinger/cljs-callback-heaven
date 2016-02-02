goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__41562__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__41562 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41563__i = 0, G__41563__a = new Array(arguments.length -  0);
while (G__41563__i < G__41563__a.length) {G__41563__a[G__41563__i] = arguments[G__41563__i + 0]; ++G__41563__i;}
  args = new cljs.core.IndexedSeq(G__41563__a,0);
} 
return G__41562__delegate.call(this,args);};
G__41562.cljs$lang$maxFixedArity = 0;
G__41562.cljs$lang$applyTo = (function (arglist__41564){
var args = cljs.core.seq(arglist__41564);
return G__41562__delegate(args);
});
G__41562.cljs$core$IFn$_invoke$arity$variadic = G__41562__delegate;
return G__41562;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__41565__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__41565 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41566__i = 0, G__41566__a = new Array(arguments.length -  0);
while (G__41566__i < G__41566__a.length) {G__41566__a[G__41566__i] = arguments[G__41566__i + 0]; ++G__41566__i;}
  args = new cljs.core.IndexedSeq(G__41566__a,0);
} 
return G__41565__delegate.call(this,args);};
G__41565.cljs$lang$maxFixedArity = 0;
G__41565.cljs$lang$applyTo = (function (arglist__41567){
var args = cljs.core.seq(arglist__41567);
return G__41565__delegate(args);
});
G__41565.cljs$core$IFn$_invoke$arity$variadic = G__41565__delegate;
return G__41565;
})()
;

return null;
});
