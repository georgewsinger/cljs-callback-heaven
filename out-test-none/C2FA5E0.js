goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__36622__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__36622 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36623__i = 0, G__36623__a = new Array(arguments.length -  0);
while (G__36623__i < G__36623__a.length) {G__36623__a[G__36623__i] = arguments[G__36623__i + 0]; ++G__36623__i;}
  args = new cljs.core.IndexedSeq(G__36623__a,0);
} 
return G__36622__delegate.call(this,args);};
G__36622.cljs$lang$maxFixedArity = 0;
G__36622.cljs$lang$applyTo = (function (arglist__36624){
var args = cljs.core.seq(arglist__36624);
return G__36622__delegate(args);
});
G__36622.cljs$core$IFn$_invoke$arity$variadic = G__36622__delegate;
return G__36622;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__36625__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__36625 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36626__i = 0, G__36626__a = new Array(arguments.length -  0);
while (G__36626__i < G__36626__a.length) {G__36626__a[G__36626__i] = arguments[G__36626__i + 0]; ++G__36626__i;}
  args = new cljs.core.IndexedSeq(G__36626__a,0);
} 
return G__36625__delegate.call(this,args);};
G__36625.cljs$lang$maxFixedArity = 0;
G__36625.cljs$lang$applyTo = (function (arglist__36627){
var args = cljs.core.seq(arglist__36627);
return G__36625__delegate(args);
});
G__36625.cljs$core$IFn$_invoke$arity$variadic = G__36625__delegate;
return G__36625;
})()
;

return null;
});
