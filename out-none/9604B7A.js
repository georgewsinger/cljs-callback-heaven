goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__37136__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__37136 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37137__i = 0, G__37137__a = new Array(arguments.length -  0);
while (G__37137__i < G__37137__a.length) {G__37137__a[G__37137__i] = arguments[G__37137__i + 0]; ++G__37137__i;}
  args = new cljs.core.IndexedSeq(G__37137__a,0);
} 
return G__37136__delegate.call(this,args);};
G__37136.cljs$lang$maxFixedArity = 0;
G__37136.cljs$lang$applyTo = (function (arglist__37138){
var args = cljs.core.seq(arglist__37138);
return G__37136__delegate(args);
});
G__37136.cljs$core$IFn$_invoke$arity$variadic = G__37136__delegate;
return G__37136;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__37139__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__37139 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37140__i = 0, G__37140__a = new Array(arguments.length -  0);
while (G__37140__i < G__37140__a.length) {G__37140__a[G__37140__i] = arguments[G__37140__i + 0]; ++G__37140__i;}
  args = new cljs.core.IndexedSeq(G__37140__a,0);
} 
return G__37139__delegate.call(this,args);};
G__37139.cljs$lang$maxFixedArity = 0;
G__37139.cljs$lang$applyTo = (function (arglist__37141){
var args = cljs.core.seq(arglist__37141);
return G__37139__delegate(args);
});
G__37139.cljs$core$IFn$_invoke$arity$variadic = G__37139__delegate;
return G__37139;
})()
;

return null;
});
