goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__30264__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__30264 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30265__i = 0, G__30265__a = new Array(arguments.length -  0);
while (G__30265__i < G__30265__a.length) {G__30265__a[G__30265__i] = arguments[G__30265__i + 0]; ++G__30265__i;}
  args = new cljs.core.IndexedSeq(G__30265__a,0);
} 
return G__30264__delegate.call(this,args);};
G__30264.cljs$lang$maxFixedArity = 0;
G__30264.cljs$lang$applyTo = (function (arglist__30266){
var args = cljs.core.seq(arglist__30266);
return G__30264__delegate(args);
});
G__30264.cljs$core$IFn$_invoke$arity$variadic = G__30264__delegate;
return G__30264;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__30267__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__30267 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30268__i = 0, G__30268__a = new Array(arguments.length -  0);
while (G__30268__i < G__30268__a.length) {G__30268__a[G__30268__i] = arguments[G__30268__i + 0]; ++G__30268__i;}
  args = new cljs.core.IndexedSeq(G__30268__a,0);
} 
return G__30267__delegate.call(this,args);};
G__30267.cljs$lang$maxFixedArity = 0;
G__30267.cljs$lang$applyTo = (function (arglist__30269){
var args = cljs.core.seq(arglist__30269);
return G__30267__delegate(args);
});
G__30267.cljs$core$IFn$_invoke$arity$variadic = G__30267__delegate;
return G__30267;
})()
;

return null;
});
