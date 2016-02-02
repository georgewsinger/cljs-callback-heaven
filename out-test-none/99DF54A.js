goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13700__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13700 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13701__i = 0, G__13701__a = new Array(arguments.length -  0);
while (G__13701__i < G__13701__a.length) {G__13701__a[G__13701__i] = arguments[G__13701__i + 0]; ++G__13701__i;}
  args = new cljs.core.IndexedSeq(G__13701__a,0);
} 
return G__13700__delegate.call(this,args);};
G__13700.cljs$lang$maxFixedArity = 0;
G__13700.cljs$lang$applyTo = (function (arglist__13702){
var args = cljs.core.seq(arglist__13702);
return G__13700__delegate(args);
});
G__13700.cljs$core$IFn$_invoke$arity$variadic = G__13700__delegate;
return G__13700;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13703__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13703 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13704__i = 0, G__13704__a = new Array(arguments.length -  0);
while (G__13704__i < G__13704__a.length) {G__13704__a[G__13704__i] = arguments[G__13704__i + 0]; ++G__13704__i;}
  args = new cljs.core.IndexedSeq(G__13704__a,0);
} 
return G__13703__delegate.call(this,args);};
G__13703.cljs$lang$maxFixedArity = 0;
G__13703.cljs$lang$applyTo = (function (arglist__13705){
var args = cljs.core.seq(arglist__13705);
return G__13703__delegate(args);
});
G__13703.cljs$core$IFn$_invoke$arity$variadic = G__13703__delegate;
return G__13703;
})()
;

return null;
});
