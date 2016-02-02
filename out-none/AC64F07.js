goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__61996__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__61996 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__61997__i = 0, G__61997__a = new Array(arguments.length -  0);
while (G__61997__i < G__61997__a.length) {G__61997__a[G__61997__i] = arguments[G__61997__i + 0]; ++G__61997__i;}
  args = new cljs.core.IndexedSeq(G__61997__a,0);
} 
return G__61996__delegate.call(this,args);};
G__61996.cljs$lang$maxFixedArity = 0;
G__61996.cljs$lang$applyTo = (function (arglist__61998){
var args = cljs.core.seq(arglist__61998);
return G__61996__delegate(args);
});
G__61996.cljs$core$IFn$_invoke$arity$variadic = G__61996__delegate;
return G__61996;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__61999__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__61999 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__62000__i = 0, G__62000__a = new Array(arguments.length -  0);
while (G__62000__i < G__62000__a.length) {G__62000__a[G__62000__i] = arguments[G__62000__i + 0]; ++G__62000__i;}
  args = new cljs.core.IndexedSeq(G__62000__a,0);
} 
return G__61999__delegate.call(this,args);};
G__61999.cljs$lang$maxFixedArity = 0;
G__61999.cljs$lang$applyTo = (function (arglist__62001){
var args = cljs.core.seq(arglist__62001);
return G__61999__delegate(args);
});
G__61999.cljs$core$IFn$_invoke$arity$variadic = G__61999__delegate;
return G__61999;
})()
;

return null;
});
