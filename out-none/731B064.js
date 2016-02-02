goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__42140__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__42140 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42141__i = 0, G__42141__a = new Array(arguments.length -  0);
while (G__42141__i < G__42141__a.length) {G__42141__a[G__42141__i] = arguments[G__42141__i + 0]; ++G__42141__i;}
  args = new cljs.core.IndexedSeq(G__42141__a,0);
} 
return G__42140__delegate.call(this,args);};
G__42140.cljs$lang$maxFixedArity = 0;
G__42140.cljs$lang$applyTo = (function (arglist__42142){
var args = cljs.core.seq(arglist__42142);
return G__42140__delegate(args);
});
G__42140.cljs$core$IFn$_invoke$arity$variadic = G__42140__delegate;
return G__42140;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__42143__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__42143 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42144__i = 0, G__42144__a = new Array(arguments.length -  0);
while (G__42144__i < G__42144__a.length) {G__42144__a[G__42144__i] = arguments[G__42144__i + 0]; ++G__42144__i;}
  args = new cljs.core.IndexedSeq(G__42144__a,0);
} 
return G__42143__delegate.call(this,args);};
G__42143.cljs$lang$maxFixedArity = 0;
G__42143.cljs$lang$applyTo = (function (arglist__42145){
var args = cljs.core.seq(arglist__42145);
return G__42143__delegate(args);
});
G__42143.cljs$core$IFn$_invoke$arity$variadic = G__42143__delegate;
return G__42143;
})()
;

return null;
});
