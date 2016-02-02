goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10438__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10438 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10439__i = 0, G__10439__a = new Array(arguments.length -  0);
while (G__10439__i < G__10439__a.length) {G__10439__a[G__10439__i] = arguments[G__10439__i + 0]; ++G__10439__i;}
  args = new cljs.core.IndexedSeq(G__10439__a,0);
} 
return G__10438__delegate.call(this,args);};
G__10438.cljs$lang$maxFixedArity = 0;
G__10438.cljs$lang$applyTo = (function (arglist__10440){
var args = cljs.core.seq(arglist__10440);
return G__10438__delegate(args);
});
G__10438.cljs$core$IFn$_invoke$arity$variadic = G__10438__delegate;
return G__10438;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10441__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10441 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10442__i = 0, G__10442__a = new Array(arguments.length -  0);
while (G__10442__i < G__10442__a.length) {G__10442__a[G__10442__i] = arguments[G__10442__i + 0]; ++G__10442__i;}
  args = new cljs.core.IndexedSeq(G__10442__a,0);
} 
return G__10441__delegate.call(this,args);};
G__10441.cljs$lang$maxFixedArity = 0;
G__10441.cljs$lang$applyTo = (function (arglist__10443){
var args = cljs.core.seq(arglist__10443);
return G__10441__delegate(args);
});
G__10441.cljs$core$IFn$_invoke$arity$variadic = G__10441__delegate;
return G__10441;
})()
;

return null;
});
