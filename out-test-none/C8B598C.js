goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__43194__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__43194 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43195__i = 0, G__43195__a = new Array(arguments.length -  0);
while (G__43195__i < G__43195__a.length) {G__43195__a[G__43195__i] = arguments[G__43195__i + 0]; ++G__43195__i;}
  args = new cljs.core.IndexedSeq(G__43195__a,0);
} 
return G__43194__delegate.call(this,args);};
G__43194.cljs$lang$maxFixedArity = 0;
G__43194.cljs$lang$applyTo = (function (arglist__43196){
var args = cljs.core.seq(arglist__43196);
return G__43194__delegate(args);
});
G__43194.cljs$core$IFn$_invoke$arity$variadic = G__43194__delegate;
return G__43194;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__43197__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__43197 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43198__i = 0, G__43198__a = new Array(arguments.length -  0);
while (G__43198__i < G__43198__a.length) {G__43198__a[G__43198__i] = arguments[G__43198__i + 0]; ++G__43198__i;}
  args = new cljs.core.IndexedSeq(G__43198__a,0);
} 
return G__43197__delegate.call(this,args);};
G__43197.cljs$lang$maxFixedArity = 0;
G__43197.cljs$lang$applyTo = (function (arglist__43199){
var args = cljs.core.seq(arglist__43199);
return G__43197__delegate(args);
});
G__43197.cljs$core$IFn$_invoke$arity$variadic = G__43197__delegate;
return G__43197;
})()
;

return null;
});
