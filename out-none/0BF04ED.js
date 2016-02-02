goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__60064__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__60064 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__60065__i = 0, G__60065__a = new Array(arguments.length -  0);
while (G__60065__i < G__60065__a.length) {G__60065__a[G__60065__i] = arguments[G__60065__i + 0]; ++G__60065__i;}
  args = new cljs.core.IndexedSeq(G__60065__a,0);
} 
return G__60064__delegate.call(this,args);};
G__60064.cljs$lang$maxFixedArity = 0;
G__60064.cljs$lang$applyTo = (function (arglist__60066){
var args = cljs.core.seq(arglist__60066);
return G__60064__delegate(args);
});
G__60064.cljs$core$IFn$_invoke$arity$variadic = G__60064__delegate;
return G__60064;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__60067__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__60067 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__60068__i = 0, G__60068__a = new Array(arguments.length -  0);
while (G__60068__i < G__60068__a.length) {G__60068__a[G__60068__i] = arguments[G__60068__i + 0]; ++G__60068__i;}
  args = new cljs.core.IndexedSeq(G__60068__a,0);
} 
return G__60067__delegate.call(this,args);};
G__60067.cljs$lang$maxFixedArity = 0;
G__60067.cljs$lang$applyTo = (function (arglist__60069){
var args = cljs.core.seq(arglist__60069);
return G__60067__delegate(args);
});
G__60067.cljs$core$IFn$_invoke$arity$variadic = G__60067__delegate;
return G__60067;
})()
;

return null;
});
