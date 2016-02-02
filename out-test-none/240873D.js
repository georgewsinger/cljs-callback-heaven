goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__150951__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__150951 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__150952__i = 0, G__150952__a = new Array(arguments.length -  0);
while (G__150952__i < G__150952__a.length) {G__150952__a[G__150952__i] = arguments[G__150952__i + 0]; ++G__150952__i;}
  args = new cljs.core.IndexedSeq(G__150952__a,0);
} 
return G__150951__delegate.call(this,args);};
G__150951.cljs$lang$maxFixedArity = 0;
G__150951.cljs$lang$applyTo = (function (arglist__150953){
var args = cljs.core.seq(arglist__150953);
return G__150951__delegate(args);
});
G__150951.cljs$core$IFn$_invoke$arity$variadic = G__150951__delegate;
return G__150951;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__150954__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__150954 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__150955__i = 0, G__150955__a = new Array(arguments.length -  0);
while (G__150955__i < G__150955__a.length) {G__150955__a[G__150955__i] = arguments[G__150955__i + 0]; ++G__150955__i;}
  args = new cljs.core.IndexedSeq(G__150955__a,0);
} 
return G__150954__delegate.call(this,args);};
G__150954.cljs$lang$maxFixedArity = 0;
G__150954.cljs$lang$applyTo = (function (arglist__150956){
var args = cljs.core.seq(arglist__150956);
return G__150954__delegate(args);
});
G__150954.cljs$core$IFn$_invoke$arity$variadic = G__150954__delegate;
return G__150954;
})()
;

return null;
});
