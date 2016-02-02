goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__51339__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__51339 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51340__i = 0, G__51340__a = new Array(arguments.length -  0);
while (G__51340__i < G__51340__a.length) {G__51340__a[G__51340__i] = arguments[G__51340__i + 0]; ++G__51340__i;}
  args = new cljs.core.IndexedSeq(G__51340__a,0);
} 
return G__51339__delegate.call(this,args);};
G__51339.cljs$lang$maxFixedArity = 0;
G__51339.cljs$lang$applyTo = (function (arglist__51341){
var args = cljs.core.seq(arglist__51341);
return G__51339__delegate(args);
});
G__51339.cljs$core$IFn$_invoke$arity$variadic = G__51339__delegate;
return G__51339;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__51342__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__51342 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51343__i = 0, G__51343__a = new Array(arguments.length -  0);
while (G__51343__i < G__51343__a.length) {G__51343__a[G__51343__i] = arguments[G__51343__i + 0]; ++G__51343__i;}
  args = new cljs.core.IndexedSeq(G__51343__a,0);
} 
return G__51342__delegate.call(this,args);};
G__51342.cljs$lang$maxFixedArity = 0;
G__51342.cljs$lang$applyTo = (function (arglist__51344){
var args = cljs.core.seq(arglist__51344);
return G__51342__delegate(args);
});
G__51342.cljs$core$IFn$_invoke$arity$variadic = G__51342__delegate;
return G__51342;
})()
;

return null;
});
