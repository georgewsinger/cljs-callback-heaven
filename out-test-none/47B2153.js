goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__20254__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__20254 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20255__i = 0, G__20255__a = new Array(arguments.length -  0);
while (G__20255__i < G__20255__a.length) {G__20255__a[G__20255__i] = arguments[G__20255__i + 0]; ++G__20255__i;}
  args = new cljs.core.IndexedSeq(G__20255__a,0);
} 
return G__20254__delegate.call(this,args);};
G__20254.cljs$lang$maxFixedArity = 0;
G__20254.cljs$lang$applyTo = (function (arglist__20256){
var args = cljs.core.seq(arglist__20256);
return G__20254__delegate(args);
});
G__20254.cljs$core$IFn$_invoke$arity$variadic = G__20254__delegate;
return G__20254;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__20257__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__20257 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20258__i = 0, G__20258__a = new Array(arguments.length -  0);
while (G__20258__i < G__20258__a.length) {G__20258__a[G__20258__i] = arguments[G__20258__i + 0]; ++G__20258__i;}
  args = new cljs.core.IndexedSeq(G__20258__a,0);
} 
return G__20257__delegate.call(this,args);};
G__20257.cljs$lang$maxFixedArity = 0;
G__20257.cljs$lang$applyTo = (function (arglist__20259){
var args = cljs.core.seq(arglist__20259);
return G__20257__delegate(args);
});
G__20257.cljs$core$IFn$_invoke$arity$variadic = G__20257__delegate;
return G__20257;
})()
;

return null;
});
