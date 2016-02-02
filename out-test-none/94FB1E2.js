goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__267789__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__267789 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__267790__i = 0, G__267790__a = new Array(arguments.length -  0);
while (G__267790__i < G__267790__a.length) {G__267790__a[G__267790__i] = arguments[G__267790__i + 0]; ++G__267790__i;}
  args = new cljs.core.IndexedSeq(G__267790__a,0);
} 
return G__267789__delegate.call(this,args);};
G__267789.cljs$lang$maxFixedArity = 0;
G__267789.cljs$lang$applyTo = (function (arglist__267791){
var args = cljs.core.seq(arglist__267791);
return G__267789__delegate(args);
});
G__267789.cljs$core$IFn$_invoke$arity$variadic = G__267789__delegate;
return G__267789;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__267792__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__267792 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__267793__i = 0, G__267793__a = new Array(arguments.length -  0);
while (G__267793__i < G__267793__a.length) {G__267793__a[G__267793__i] = arguments[G__267793__i + 0]; ++G__267793__i;}
  args = new cljs.core.IndexedSeq(G__267793__a,0);
} 
return G__267792__delegate.call(this,args);};
G__267792.cljs$lang$maxFixedArity = 0;
G__267792.cljs$lang$applyTo = (function (arglist__267794){
var args = cljs.core.seq(arglist__267794);
return G__267792__delegate(args);
});
G__267792.cljs$core$IFn$_invoke$arity$variadic = G__267792__delegate;
return G__267792;
})()
;

return null;
});
