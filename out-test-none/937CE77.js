goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__179200__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__179200 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__179201__i = 0, G__179201__a = new Array(arguments.length -  0);
while (G__179201__i < G__179201__a.length) {G__179201__a[G__179201__i] = arguments[G__179201__i + 0]; ++G__179201__i;}
  args = new cljs.core.IndexedSeq(G__179201__a,0);
} 
return G__179200__delegate.call(this,args);};
G__179200.cljs$lang$maxFixedArity = 0;
G__179200.cljs$lang$applyTo = (function (arglist__179202){
var args = cljs.core.seq(arglist__179202);
return G__179200__delegate(args);
});
G__179200.cljs$core$IFn$_invoke$arity$variadic = G__179200__delegate;
return G__179200;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__179203__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__179203 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__179204__i = 0, G__179204__a = new Array(arguments.length -  0);
while (G__179204__i < G__179204__a.length) {G__179204__a[G__179204__i] = arguments[G__179204__i + 0]; ++G__179204__i;}
  args = new cljs.core.IndexedSeq(G__179204__a,0);
} 
return G__179203__delegate.call(this,args);};
G__179203.cljs$lang$maxFixedArity = 0;
G__179203.cljs$lang$applyTo = (function (arglist__179205){
var args = cljs.core.seq(arglist__179205);
return G__179203__delegate(args);
});
G__179203.cljs$core$IFn$_invoke$arity$variadic = G__179203__delegate;
return G__179203;
})()
;

return null;
});
