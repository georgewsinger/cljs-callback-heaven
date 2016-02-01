goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14092__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14092 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14093__i = 0, G__14093__a = new Array(arguments.length -  0);
while (G__14093__i < G__14093__a.length) {G__14093__a[G__14093__i] = arguments[G__14093__i + 0]; ++G__14093__i;}
  args = new cljs.core.IndexedSeq(G__14093__a,0);
} 
return G__14092__delegate.call(this,args);};
G__14092.cljs$lang$maxFixedArity = 0;
G__14092.cljs$lang$applyTo = (function (arglist__14094){
var args = cljs.core.seq(arglist__14094);
return G__14092__delegate(args);
});
G__14092.cljs$core$IFn$_invoke$arity$variadic = G__14092__delegate;
return G__14092;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14095__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14095 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14096__i = 0, G__14096__a = new Array(arguments.length -  0);
while (G__14096__i < G__14096__a.length) {G__14096__a[G__14096__i] = arguments[G__14096__i + 0]; ++G__14096__i;}
  args = new cljs.core.IndexedSeq(G__14096__a,0);
} 
return G__14095__delegate.call(this,args);};
G__14095.cljs$lang$maxFixedArity = 0;
G__14095.cljs$lang$applyTo = (function (arglist__14097){
var args = cljs.core.seq(arglist__14097);
return G__14095__delegate(args);
});
G__14095.cljs$core$IFn$_invoke$arity$variadic = G__14095__delegate;
return G__14095;
})()
;

return null;
});
