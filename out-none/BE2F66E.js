goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__85191__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__85191 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__85192__i = 0, G__85192__a = new Array(arguments.length -  0);
while (G__85192__i < G__85192__a.length) {G__85192__a[G__85192__i] = arguments[G__85192__i + 0]; ++G__85192__i;}
  args = new cljs.core.IndexedSeq(G__85192__a,0);
} 
return G__85191__delegate.call(this,args);};
G__85191.cljs$lang$maxFixedArity = 0;
G__85191.cljs$lang$applyTo = (function (arglist__85193){
var args = cljs.core.seq(arglist__85193);
return G__85191__delegate(args);
});
G__85191.cljs$core$IFn$_invoke$arity$variadic = G__85191__delegate;
return G__85191;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__85194__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__85194 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__85195__i = 0, G__85195__a = new Array(arguments.length -  0);
while (G__85195__i < G__85195__a.length) {G__85195__a[G__85195__i] = arguments[G__85195__i + 0]; ++G__85195__i;}
  args = new cljs.core.IndexedSeq(G__85195__a,0);
} 
return G__85194__delegate.call(this,args);};
G__85194.cljs$lang$maxFixedArity = 0;
G__85194.cljs$lang$applyTo = (function (arglist__85196){
var args = cljs.core.seq(arglist__85196);
return G__85194__delegate(args);
});
G__85194.cljs$core$IFn$_invoke$arity$variadic = G__85194__delegate;
return G__85194;
})()
;

return null;
});
