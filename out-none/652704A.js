goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__44349__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__44349 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44350__i = 0, G__44350__a = new Array(arguments.length -  0);
while (G__44350__i < G__44350__a.length) {G__44350__a[G__44350__i] = arguments[G__44350__i + 0]; ++G__44350__i;}
  args = new cljs.core.IndexedSeq(G__44350__a,0);
} 
return G__44349__delegate.call(this,args);};
G__44349.cljs$lang$maxFixedArity = 0;
G__44349.cljs$lang$applyTo = (function (arglist__44351){
var args = cljs.core.seq(arglist__44351);
return G__44349__delegate(args);
});
G__44349.cljs$core$IFn$_invoke$arity$variadic = G__44349__delegate;
return G__44349;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__44352__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__44352 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44353__i = 0, G__44353__a = new Array(arguments.length -  0);
while (G__44353__i < G__44353__a.length) {G__44353__a[G__44353__i] = arguments[G__44353__i + 0]; ++G__44353__i;}
  args = new cljs.core.IndexedSeq(G__44353__a,0);
} 
return G__44352__delegate.call(this,args);};
G__44352.cljs$lang$maxFixedArity = 0;
G__44352.cljs$lang$applyTo = (function (arglist__44354){
var args = cljs.core.seq(arglist__44354);
return G__44352__delegate(args);
});
G__44352.cljs$core$IFn$_invoke$arity$variadic = G__44352__delegate;
return G__44352;
})()
;

return null;
});
