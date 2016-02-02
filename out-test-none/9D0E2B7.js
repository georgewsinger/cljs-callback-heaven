goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14741__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14741 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14742__i = 0, G__14742__a = new Array(arguments.length -  0);
while (G__14742__i < G__14742__a.length) {G__14742__a[G__14742__i] = arguments[G__14742__i + 0]; ++G__14742__i;}
  args = new cljs.core.IndexedSeq(G__14742__a,0);
} 
return G__14741__delegate.call(this,args);};
G__14741.cljs$lang$maxFixedArity = 0;
G__14741.cljs$lang$applyTo = (function (arglist__14743){
var args = cljs.core.seq(arglist__14743);
return G__14741__delegate(args);
});
G__14741.cljs$core$IFn$_invoke$arity$variadic = G__14741__delegate;
return G__14741;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14744__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14744 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14745__i = 0, G__14745__a = new Array(arguments.length -  0);
while (G__14745__i < G__14745__a.length) {G__14745__a[G__14745__i] = arguments[G__14745__i + 0]; ++G__14745__i;}
  args = new cljs.core.IndexedSeq(G__14745__a,0);
} 
return G__14744__delegate.call(this,args);};
G__14744.cljs$lang$maxFixedArity = 0;
G__14744.cljs$lang$applyTo = (function (arglist__14746){
var args = cljs.core.seq(arglist__14746);
return G__14744__delegate(args);
});
G__14744.cljs$core$IFn$_invoke$arity$variadic = G__14744__delegate;
return G__14744;
})()
;

return null;
});
