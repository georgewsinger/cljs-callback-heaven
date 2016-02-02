goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__23359__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__23359 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23360__i = 0, G__23360__a = new Array(arguments.length -  0);
while (G__23360__i < G__23360__a.length) {G__23360__a[G__23360__i] = arguments[G__23360__i + 0]; ++G__23360__i;}
  args = new cljs.core.IndexedSeq(G__23360__a,0);
} 
return G__23359__delegate.call(this,args);};
G__23359.cljs$lang$maxFixedArity = 0;
G__23359.cljs$lang$applyTo = (function (arglist__23361){
var args = cljs.core.seq(arglist__23361);
return G__23359__delegate(args);
});
G__23359.cljs$core$IFn$_invoke$arity$variadic = G__23359__delegate;
return G__23359;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__23362__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__23362 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23363__i = 0, G__23363__a = new Array(arguments.length -  0);
while (G__23363__i < G__23363__a.length) {G__23363__a[G__23363__i] = arguments[G__23363__i + 0]; ++G__23363__i;}
  args = new cljs.core.IndexedSeq(G__23363__a,0);
} 
return G__23362__delegate.call(this,args);};
G__23362.cljs$lang$maxFixedArity = 0;
G__23362.cljs$lang$applyTo = (function (arglist__23364){
var args = cljs.core.seq(arglist__23364);
return G__23362__delegate(args);
});
G__23362.cljs$core$IFn$_invoke$arity$variadic = G__23362__delegate;
return G__23362;
})()
;

return null;
});
