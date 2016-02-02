goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__76904__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__76904 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__76905__i = 0, G__76905__a = new Array(arguments.length -  0);
while (G__76905__i < G__76905__a.length) {G__76905__a[G__76905__i] = arguments[G__76905__i + 0]; ++G__76905__i;}
  args = new cljs.core.IndexedSeq(G__76905__a,0);
} 
return G__76904__delegate.call(this,args);};
G__76904.cljs$lang$maxFixedArity = 0;
G__76904.cljs$lang$applyTo = (function (arglist__76906){
var args = cljs.core.seq(arglist__76906);
return G__76904__delegate(args);
});
G__76904.cljs$core$IFn$_invoke$arity$variadic = G__76904__delegate;
return G__76904;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__76907__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__76907 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__76908__i = 0, G__76908__a = new Array(arguments.length -  0);
while (G__76908__i < G__76908__a.length) {G__76908__a[G__76908__i] = arguments[G__76908__i + 0]; ++G__76908__i;}
  args = new cljs.core.IndexedSeq(G__76908__a,0);
} 
return G__76907__delegate.call(this,args);};
G__76907.cljs$lang$maxFixedArity = 0;
G__76907.cljs$lang$applyTo = (function (arglist__76909){
var args = cljs.core.seq(arglist__76909);
return G__76907__delegate(args);
});
G__76907.cljs$core$IFn$_invoke$arity$variadic = G__76907__delegate;
return G__76907;
})()
;

return null;
});
