goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__54247__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__54247 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54248__i = 0, G__54248__a = new Array(arguments.length -  0);
while (G__54248__i < G__54248__a.length) {G__54248__a[G__54248__i] = arguments[G__54248__i + 0]; ++G__54248__i;}
  args = new cljs.core.IndexedSeq(G__54248__a,0);
} 
return G__54247__delegate.call(this,args);};
G__54247.cljs$lang$maxFixedArity = 0;
G__54247.cljs$lang$applyTo = (function (arglist__54249){
var args = cljs.core.seq(arglist__54249);
return G__54247__delegate(args);
});
G__54247.cljs$core$IFn$_invoke$arity$variadic = G__54247__delegate;
return G__54247;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__54250__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__54250 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54251__i = 0, G__54251__a = new Array(arguments.length -  0);
while (G__54251__i < G__54251__a.length) {G__54251__a[G__54251__i] = arguments[G__54251__i + 0]; ++G__54251__i;}
  args = new cljs.core.IndexedSeq(G__54251__a,0);
} 
return G__54250__delegate.call(this,args);};
G__54250.cljs$lang$maxFixedArity = 0;
G__54250.cljs$lang$applyTo = (function (arglist__54252){
var args = cljs.core.seq(arglist__54252);
return G__54250__delegate(args);
});
G__54250.cljs$core$IFn$_invoke$arity$variadic = G__54250__delegate;
return G__54250;
})()
;

return null;
});
