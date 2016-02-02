goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__28748__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__28748 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28749__i = 0, G__28749__a = new Array(arguments.length -  0);
while (G__28749__i < G__28749__a.length) {G__28749__a[G__28749__i] = arguments[G__28749__i + 0]; ++G__28749__i;}
  args = new cljs.core.IndexedSeq(G__28749__a,0);
} 
return G__28748__delegate.call(this,args);};
G__28748.cljs$lang$maxFixedArity = 0;
G__28748.cljs$lang$applyTo = (function (arglist__28750){
var args = cljs.core.seq(arglist__28750);
return G__28748__delegate(args);
});
G__28748.cljs$core$IFn$_invoke$arity$variadic = G__28748__delegate;
return G__28748;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__28751__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__28751 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28752__i = 0, G__28752__a = new Array(arguments.length -  0);
while (G__28752__i < G__28752__a.length) {G__28752__a[G__28752__i] = arguments[G__28752__i + 0]; ++G__28752__i;}
  args = new cljs.core.IndexedSeq(G__28752__a,0);
} 
return G__28751__delegate.call(this,args);};
G__28751.cljs$lang$maxFixedArity = 0;
G__28751.cljs$lang$applyTo = (function (arglist__28753){
var args = cljs.core.seq(arglist__28753);
return G__28751__delegate(args);
});
G__28751.cljs$core$IFn$_invoke$arity$variadic = G__28751__delegate;
return G__28751;
})()
;

return null;
});
