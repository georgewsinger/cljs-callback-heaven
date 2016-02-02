goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__224341__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__224341 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__224342__i = 0, G__224342__a = new Array(arguments.length -  0);
while (G__224342__i < G__224342__a.length) {G__224342__a[G__224342__i] = arguments[G__224342__i + 0]; ++G__224342__i;}
  args = new cljs.core.IndexedSeq(G__224342__a,0);
} 
return G__224341__delegate.call(this,args);};
G__224341.cljs$lang$maxFixedArity = 0;
G__224341.cljs$lang$applyTo = (function (arglist__224343){
var args = cljs.core.seq(arglist__224343);
return G__224341__delegate(args);
});
G__224341.cljs$core$IFn$_invoke$arity$variadic = G__224341__delegate;
return G__224341;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__224344__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__224344 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__224345__i = 0, G__224345__a = new Array(arguments.length -  0);
while (G__224345__i < G__224345__a.length) {G__224345__a[G__224345__i] = arguments[G__224345__i + 0]; ++G__224345__i;}
  args = new cljs.core.IndexedSeq(G__224345__a,0);
} 
return G__224344__delegate.call(this,args);};
G__224344.cljs$lang$maxFixedArity = 0;
G__224344.cljs$lang$applyTo = (function (arglist__224346){
var args = cljs.core.seq(arglist__224346);
return G__224344__delegate(args);
});
G__224344.cljs$core$IFn$_invoke$arity$variadic = G__224344__delegate;
return G__224344;
})()
;

return null;
});
