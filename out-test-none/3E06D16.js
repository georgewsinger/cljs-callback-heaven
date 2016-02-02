goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__46833__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__46833 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46834__i = 0, G__46834__a = new Array(arguments.length -  0);
while (G__46834__i < G__46834__a.length) {G__46834__a[G__46834__i] = arguments[G__46834__i + 0]; ++G__46834__i;}
  args = new cljs.core.IndexedSeq(G__46834__a,0);
} 
return G__46833__delegate.call(this,args);};
G__46833.cljs$lang$maxFixedArity = 0;
G__46833.cljs$lang$applyTo = (function (arglist__46835){
var args = cljs.core.seq(arglist__46835);
return G__46833__delegate(args);
});
G__46833.cljs$core$IFn$_invoke$arity$variadic = G__46833__delegate;
return G__46833;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__46836__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__46836 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46837__i = 0, G__46837__a = new Array(arguments.length -  0);
while (G__46837__i < G__46837__a.length) {G__46837__a[G__46837__i] = arguments[G__46837__i + 0]; ++G__46837__i;}
  args = new cljs.core.IndexedSeq(G__46837__a,0);
} 
return G__46836__delegate.call(this,args);};
G__46836.cljs$lang$maxFixedArity = 0;
G__46836.cljs$lang$applyTo = (function (arglist__46838){
var args = cljs.core.seq(arglist__46838);
return G__46836__delegate(args);
});
G__46836.cljs$core$IFn$_invoke$arity$variadic = G__46836__delegate;
return G__46836;
})()
;

return null;
});
