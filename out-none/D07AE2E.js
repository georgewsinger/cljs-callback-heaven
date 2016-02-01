goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8627__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8627 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8628__i = 0, G__8628__a = new Array(arguments.length -  0);
while (G__8628__i < G__8628__a.length) {G__8628__a[G__8628__i] = arguments[G__8628__i + 0]; ++G__8628__i;}
  args = new cljs.core.IndexedSeq(G__8628__a,0);
} 
return G__8627__delegate.call(this,args);};
G__8627.cljs$lang$maxFixedArity = 0;
G__8627.cljs$lang$applyTo = (function (arglist__8629){
var args = cljs.core.seq(arglist__8629);
return G__8627__delegate(args);
});
G__8627.cljs$core$IFn$_invoke$arity$variadic = G__8627__delegate;
return G__8627;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8630__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8630 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8631__i = 0, G__8631__a = new Array(arguments.length -  0);
while (G__8631__i < G__8631__a.length) {G__8631__a[G__8631__i] = arguments[G__8631__i + 0]; ++G__8631__i;}
  args = new cljs.core.IndexedSeq(G__8631__a,0);
} 
return G__8630__delegate.call(this,args);};
G__8630.cljs$lang$maxFixedArity = 0;
G__8630.cljs$lang$applyTo = (function (arglist__8632){
var args = cljs.core.seq(arglist__8632);
return G__8630__delegate(args);
});
G__8630.cljs$core$IFn$_invoke$arity$variadic = G__8630__delegate;
return G__8630;
})()
;

return null;
});
