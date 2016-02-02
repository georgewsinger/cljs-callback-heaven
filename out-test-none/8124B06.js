goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__350369__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__350369 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__350370__i = 0, G__350370__a = new Array(arguments.length -  0);
while (G__350370__i < G__350370__a.length) {G__350370__a[G__350370__i] = arguments[G__350370__i + 0]; ++G__350370__i;}
  args = new cljs.core.IndexedSeq(G__350370__a,0);
} 
return G__350369__delegate.call(this,args);};
G__350369.cljs$lang$maxFixedArity = 0;
G__350369.cljs$lang$applyTo = (function (arglist__350371){
var args = cljs.core.seq(arglist__350371);
return G__350369__delegate(args);
});
G__350369.cljs$core$IFn$_invoke$arity$variadic = G__350369__delegate;
return G__350369;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__350372__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__350372 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__350373__i = 0, G__350373__a = new Array(arguments.length -  0);
while (G__350373__i < G__350373__a.length) {G__350373__a[G__350373__i] = arguments[G__350373__i + 0]; ++G__350373__i;}
  args = new cljs.core.IndexedSeq(G__350373__a,0);
} 
return G__350372__delegate.call(this,args);};
G__350372.cljs$lang$maxFixedArity = 0;
G__350372.cljs$lang$applyTo = (function (arglist__350374){
var args = cljs.core.seq(arglist__350374);
return G__350372__delegate(args);
});
G__350372.cljs$core$IFn$_invoke$arity$variadic = G__350372__delegate;
return G__350372;
})()
;

return null;
});
