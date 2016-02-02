goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__47558__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__47558 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47559__i = 0, G__47559__a = new Array(arguments.length -  0);
while (G__47559__i < G__47559__a.length) {G__47559__a[G__47559__i] = arguments[G__47559__i + 0]; ++G__47559__i;}
  args = new cljs.core.IndexedSeq(G__47559__a,0);
} 
return G__47558__delegate.call(this,args);};
G__47558.cljs$lang$maxFixedArity = 0;
G__47558.cljs$lang$applyTo = (function (arglist__47560){
var args = cljs.core.seq(arglist__47560);
return G__47558__delegate(args);
});
G__47558.cljs$core$IFn$_invoke$arity$variadic = G__47558__delegate;
return G__47558;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__47561__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__47561 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47562__i = 0, G__47562__a = new Array(arguments.length -  0);
while (G__47562__i < G__47562__a.length) {G__47562__a[G__47562__i] = arguments[G__47562__i + 0]; ++G__47562__i;}
  args = new cljs.core.IndexedSeq(G__47562__a,0);
} 
return G__47561__delegate.call(this,args);};
G__47561.cljs$lang$maxFixedArity = 0;
G__47561.cljs$lang$applyTo = (function (arglist__47563){
var args = cljs.core.seq(arglist__47563);
return G__47561__delegate(args);
});
G__47561.cljs$core$IFn$_invoke$arity$variadic = G__47561__delegate;
return G__47561;
})()
;

return null;
});
