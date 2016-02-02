goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__238580__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__238580 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__238581__i = 0, G__238581__a = new Array(arguments.length -  0);
while (G__238581__i < G__238581__a.length) {G__238581__a[G__238581__i] = arguments[G__238581__i + 0]; ++G__238581__i;}
  args = new cljs.core.IndexedSeq(G__238581__a,0);
} 
return G__238580__delegate.call(this,args);};
G__238580.cljs$lang$maxFixedArity = 0;
G__238580.cljs$lang$applyTo = (function (arglist__238582){
var args = cljs.core.seq(arglist__238582);
return G__238580__delegate(args);
});
G__238580.cljs$core$IFn$_invoke$arity$variadic = G__238580__delegate;
return G__238580;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__238583__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__238583 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__238584__i = 0, G__238584__a = new Array(arguments.length -  0);
while (G__238584__i < G__238584__a.length) {G__238584__a[G__238584__i] = arguments[G__238584__i + 0]; ++G__238584__i;}
  args = new cljs.core.IndexedSeq(G__238584__a,0);
} 
return G__238583__delegate.call(this,args);};
G__238583.cljs$lang$maxFixedArity = 0;
G__238583.cljs$lang$applyTo = (function (arglist__238585){
var args = cljs.core.seq(arglist__238585);
return G__238583__delegate(args);
});
G__238583.cljs$core$IFn$_invoke$arity$variadic = G__238583__delegate;
return G__238583;
})()
;

return null;
});
