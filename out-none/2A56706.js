goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__69780__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__69780 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__69781__i = 0, G__69781__a = new Array(arguments.length -  0);
while (G__69781__i < G__69781__a.length) {G__69781__a[G__69781__i] = arguments[G__69781__i + 0]; ++G__69781__i;}
  args = new cljs.core.IndexedSeq(G__69781__a,0);
} 
return G__69780__delegate.call(this,args);};
G__69780.cljs$lang$maxFixedArity = 0;
G__69780.cljs$lang$applyTo = (function (arglist__69782){
var args = cljs.core.seq(arglist__69782);
return G__69780__delegate(args);
});
G__69780.cljs$core$IFn$_invoke$arity$variadic = G__69780__delegate;
return G__69780;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__69783__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__69783 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__69784__i = 0, G__69784__a = new Array(arguments.length -  0);
while (G__69784__i < G__69784__a.length) {G__69784__a[G__69784__i] = arguments[G__69784__i + 0]; ++G__69784__i;}
  args = new cljs.core.IndexedSeq(G__69784__a,0);
} 
return G__69783__delegate.call(this,args);};
G__69783.cljs$lang$maxFixedArity = 0;
G__69783.cljs$lang$applyTo = (function (arglist__69785){
var args = cljs.core.seq(arglist__69785);
return G__69783__delegate(args);
});
G__69783.cljs$core$IFn$_invoke$arity$variadic = G__69783__delegate;
return G__69783;
})()
;

return null;
});
