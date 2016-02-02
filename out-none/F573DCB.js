goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__74784__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__74784 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__74785__i = 0, G__74785__a = new Array(arguments.length -  0);
while (G__74785__i < G__74785__a.length) {G__74785__a[G__74785__i] = arguments[G__74785__i + 0]; ++G__74785__i;}
  args = new cljs.core.IndexedSeq(G__74785__a,0);
} 
return G__74784__delegate.call(this,args);};
G__74784.cljs$lang$maxFixedArity = 0;
G__74784.cljs$lang$applyTo = (function (arglist__74786){
var args = cljs.core.seq(arglist__74786);
return G__74784__delegate(args);
});
G__74784.cljs$core$IFn$_invoke$arity$variadic = G__74784__delegate;
return G__74784;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__74787__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__74787 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__74788__i = 0, G__74788__a = new Array(arguments.length -  0);
while (G__74788__i < G__74788__a.length) {G__74788__a[G__74788__i] = arguments[G__74788__i + 0]; ++G__74788__i;}
  args = new cljs.core.IndexedSeq(G__74788__a,0);
} 
return G__74787__delegate.call(this,args);};
G__74787.cljs$lang$maxFixedArity = 0;
G__74787.cljs$lang$applyTo = (function (arglist__74789){
var args = cljs.core.seq(arglist__74789);
return G__74787__delegate(args);
});
G__74787.cljs$core$IFn$_invoke$arity$variadic = G__74787__delegate;
return G__74787;
})()
;

return null;
});
