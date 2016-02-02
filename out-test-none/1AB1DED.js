goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10596__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10596 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10597__i = 0, G__10597__a = new Array(arguments.length -  0);
while (G__10597__i < G__10597__a.length) {G__10597__a[G__10597__i] = arguments[G__10597__i + 0]; ++G__10597__i;}
  args = new cljs.core.IndexedSeq(G__10597__a,0);
} 
return G__10596__delegate.call(this,args);};
G__10596.cljs$lang$maxFixedArity = 0;
G__10596.cljs$lang$applyTo = (function (arglist__10598){
var args = cljs.core.seq(arglist__10598);
return G__10596__delegate(args);
});
G__10596.cljs$core$IFn$_invoke$arity$variadic = G__10596__delegate;
return G__10596;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10599__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10599 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10600__i = 0, G__10600__a = new Array(arguments.length -  0);
while (G__10600__i < G__10600__a.length) {G__10600__a[G__10600__i] = arguments[G__10600__i + 0]; ++G__10600__i;}
  args = new cljs.core.IndexedSeq(G__10600__a,0);
} 
return G__10599__delegate.call(this,args);};
G__10599.cljs$lang$maxFixedArity = 0;
G__10599.cljs$lang$applyTo = (function (arglist__10601){
var args = cljs.core.seq(arglist__10601);
return G__10599__delegate(args);
});
G__10599.cljs$core$IFn$_invoke$arity$variadic = G__10599__delegate;
return G__10599;
})()
;

return null;
});
