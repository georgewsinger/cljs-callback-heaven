goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__66444__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__66444 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__66445__i = 0, G__66445__a = new Array(arguments.length -  0);
while (G__66445__i < G__66445__a.length) {G__66445__a[G__66445__i] = arguments[G__66445__i + 0]; ++G__66445__i;}
  args = new cljs.core.IndexedSeq(G__66445__a,0);
} 
return G__66444__delegate.call(this,args);};
G__66444.cljs$lang$maxFixedArity = 0;
G__66444.cljs$lang$applyTo = (function (arglist__66446){
var args = cljs.core.seq(arglist__66446);
return G__66444__delegate(args);
});
G__66444.cljs$core$IFn$_invoke$arity$variadic = G__66444__delegate;
return G__66444;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__66447__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__66447 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__66448__i = 0, G__66448__a = new Array(arguments.length -  0);
while (G__66448__i < G__66448__a.length) {G__66448__a[G__66448__i] = arguments[G__66448__i + 0]; ++G__66448__i;}
  args = new cljs.core.IndexedSeq(G__66448__a,0);
} 
return G__66447__delegate.call(this,args);};
G__66447.cljs$lang$maxFixedArity = 0;
G__66447.cljs$lang$applyTo = (function (arglist__66449){
var args = cljs.core.seq(arglist__66449);
return G__66447__delegate(args);
});
G__66447.cljs$core$IFn$_invoke$arity$variadic = G__66447__delegate;
return G__66447;
})()
;

return null;
});
