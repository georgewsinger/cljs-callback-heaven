goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13182__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13182 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13183__i = 0, G__13183__a = new Array(arguments.length -  0);
while (G__13183__i < G__13183__a.length) {G__13183__a[G__13183__i] = arguments[G__13183__i + 0]; ++G__13183__i;}
  args = new cljs.core.IndexedSeq(G__13183__a,0);
} 
return G__13182__delegate.call(this,args);};
G__13182.cljs$lang$maxFixedArity = 0;
G__13182.cljs$lang$applyTo = (function (arglist__13184){
var args = cljs.core.seq(arglist__13184);
return G__13182__delegate(args);
});
G__13182.cljs$core$IFn$_invoke$arity$variadic = G__13182__delegate;
return G__13182;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13185__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13185 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13186__i = 0, G__13186__a = new Array(arguments.length -  0);
while (G__13186__i < G__13186__a.length) {G__13186__a[G__13186__i] = arguments[G__13186__i + 0]; ++G__13186__i;}
  args = new cljs.core.IndexedSeq(G__13186__a,0);
} 
return G__13185__delegate.call(this,args);};
G__13185.cljs$lang$maxFixedArity = 0;
G__13185.cljs$lang$applyTo = (function (arglist__13187){
var args = cljs.core.seq(arglist__13187);
return G__13185__delegate(args);
});
G__13185.cljs$core$IFn$_invoke$arity$variadic = G__13185__delegate;
return G__13185;
})()
;

return null;
});
