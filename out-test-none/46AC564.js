goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__328797__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__328797 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__328798__i = 0, G__328798__a = new Array(arguments.length -  0);
while (G__328798__i < G__328798__a.length) {G__328798__a[G__328798__i] = arguments[G__328798__i + 0]; ++G__328798__i;}
  args = new cljs.core.IndexedSeq(G__328798__a,0);
} 
return G__328797__delegate.call(this,args);};
G__328797.cljs$lang$maxFixedArity = 0;
G__328797.cljs$lang$applyTo = (function (arglist__328799){
var args = cljs.core.seq(arglist__328799);
return G__328797__delegate(args);
});
G__328797.cljs$core$IFn$_invoke$arity$variadic = G__328797__delegate;
return G__328797;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__328800__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__328800 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__328801__i = 0, G__328801__a = new Array(arguments.length -  0);
while (G__328801__i < G__328801__a.length) {G__328801__a[G__328801__i] = arguments[G__328801__i + 0]; ++G__328801__i;}
  args = new cljs.core.IndexedSeq(G__328801__a,0);
} 
return G__328800__delegate.call(this,args);};
G__328800.cljs$lang$maxFixedArity = 0;
G__328800.cljs$lang$applyTo = (function (arglist__328802){
var args = cljs.core.seq(arglist__328802);
return G__328800__delegate(args);
});
G__328800.cljs$core$IFn$_invoke$arity$variadic = G__328800__delegate;
return G__328800;
})()
;

return null;
});
