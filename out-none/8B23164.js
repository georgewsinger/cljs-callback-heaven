goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16478__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16478 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16479__i = 0, G__16479__a = new Array(arguments.length -  0);
while (G__16479__i < G__16479__a.length) {G__16479__a[G__16479__i] = arguments[G__16479__i + 0]; ++G__16479__i;}
  args = new cljs.core.IndexedSeq(G__16479__a,0);
} 
return G__16478__delegate.call(this,args);};
G__16478.cljs$lang$maxFixedArity = 0;
G__16478.cljs$lang$applyTo = (function (arglist__16480){
var args = cljs.core.seq(arglist__16480);
return G__16478__delegate(args);
});
G__16478.cljs$core$IFn$_invoke$arity$variadic = G__16478__delegate;
return G__16478;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16481__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16481 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16482__i = 0, G__16482__a = new Array(arguments.length -  0);
while (G__16482__i < G__16482__a.length) {G__16482__a[G__16482__i] = arguments[G__16482__i + 0]; ++G__16482__i;}
  args = new cljs.core.IndexedSeq(G__16482__a,0);
} 
return G__16481__delegate.call(this,args);};
G__16481.cljs$lang$maxFixedArity = 0;
G__16481.cljs$lang$applyTo = (function (arglist__16483){
var args = cljs.core.seq(arglist__16483);
return G__16481__delegate(args);
});
G__16481.cljs$core$IFn$_invoke$arity$variadic = G__16481__delegate;
return G__16481;
})()
;

return null;
});
