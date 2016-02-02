goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10599__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
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

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10602__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10602 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10603__i = 0, G__10603__a = new Array(arguments.length -  0);
while (G__10603__i < G__10603__a.length) {G__10603__a[G__10603__i] = arguments[G__10603__i + 0]; ++G__10603__i;}
  args = new cljs.core.IndexedSeq(G__10603__a,0);
} 
return G__10602__delegate.call(this,args);};
G__10602.cljs$lang$maxFixedArity = 0;
G__10602.cljs$lang$applyTo = (function (arglist__10604){
var args = cljs.core.seq(arglist__10604);
return G__10602__delegate(args);
});
G__10602.cljs$core$IFn$_invoke$arity$variadic = G__10602__delegate;
return G__10602;
})()
;

return null;
});
