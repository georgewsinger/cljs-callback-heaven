goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__21989__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__21989 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21990__i = 0, G__21990__a = new Array(arguments.length -  0);
while (G__21990__i < G__21990__a.length) {G__21990__a[G__21990__i] = arguments[G__21990__i + 0]; ++G__21990__i;}
  args = new cljs.core.IndexedSeq(G__21990__a,0);
} 
return G__21989__delegate.call(this,args);};
G__21989.cljs$lang$maxFixedArity = 0;
G__21989.cljs$lang$applyTo = (function (arglist__21991){
var args = cljs.core.seq(arglist__21991);
return G__21989__delegate(args);
});
G__21989.cljs$core$IFn$_invoke$arity$variadic = G__21989__delegate;
return G__21989;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__21992__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__21992 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21993__i = 0, G__21993__a = new Array(arguments.length -  0);
while (G__21993__i < G__21993__a.length) {G__21993__a[G__21993__i] = arguments[G__21993__i + 0]; ++G__21993__i;}
  args = new cljs.core.IndexedSeq(G__21993__a,0);
} 
return G__21992__delegate.call(this,args);};
G__21992.cljs$lang$maxFixedArity = 0;
G__21992.cljs$lang$applyTo = (function (arglist__21994){
var args = cljs.core.seq(arglist__21994);
return G__21992__delegate(args);
});
G__21992.cljs$core$IFn$_invoke$arity$variadic = G__21992__delegate;
return G__21992;
})()
;

return null;
});
