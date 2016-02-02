goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__210200__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__210200 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__210201__i = 0, G__210201__a = new Array(arguments.length -  0);
while (G__210201__i < G__210201__a.length) {G__210201__a[G__210201__i] = arguments[G__210201__i + 0]; ++G__210201__i;}
  args = new cljs.core.IndexedSeq(G__210201__a,0);
} 
return G__210200__delegate.call(this,args);};
G__210200.cljs$lang$maxFixedArity = 0;
G__210200.cljs$lang$applyTo = (function (arglist__210202){
var args = cljs.core.seq(arglist__210202);
return G__210200__delegate(args);
});
G__210200.cljs$core$IFn$_invoke$arity$variadic = G__210200__delegate;
return G__210200;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__210203__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__210203 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__210204__i = 0, G__210204__a = new Array(arguments.length -  0);
while (G__210204__i < G__210204__a.length) {G__210204__a[G__210204__i] = arguments[G__210204__i + 0]; ++G__210204__i;}
  args = new cljs.core.IndexedSeq(G__210204__a,0);
} 
return G__210203__delegate.call(this,args);};
G__210203.cljs$lang$maxFixedArity = 0;
G__210203.cljs$lang$applyTo = (function (arglist__210205){
var args = cljs.core.seq(arglist__210205);
return G__210203__delegate(args);
});
G__210203.cljs$core$IFn$_invoke$arity$variadic = G__210203__delegate;
return G__210203;
})()
;

return null;
});
