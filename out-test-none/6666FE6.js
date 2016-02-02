goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14851__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14851 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14852__i = 0, G__14852__a = new Array(arguments.length -  0);
while (G__14852__i < G__14852__a.length) {G__14852__a[G__14852__i] = arguments[G__14852__i + 0]; ++G__14852__i;}
  args = new cljs.core.IndexedSeq(G__14852__a,0);
} 
return G__14851__delegate.call(this,args);};
G__14851.cljs$lang$maxFixedArity = 0;
G__14851.cljs$lang$applyTo = (function (arglist__14853){
var args = cljs.core.seq(arglist__14853);
return G__14851__delegate(args);
});
G__14851.cljs$core$IFn$_invoke$arity$variadic = G__14851__delegate;
return G__14851;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14854__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14854 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14855__i = 0, G__14855__a = new Array(arguments.length -  0);
while (G__14855__i < G__14855__a.length) {G__14855__a[G__14855__i] = arguments[G__14855__i + 0]; ++G__14855__i;}
  args = new cljs.core.IndexedSeq(G__14855__a,0);
} 
return G__14854__delegate.call(this,args);};
G__14854.cljs$lang$maxFixedArity = 0;
G__14854.cljs$lang$applyTo = (function (arglist__14856){
var args = cljs.core.seq(arglist__14856);
return G__14854__delegate(args);
});
G__14854.cljs$core$IFn$_invoke$arity$variadic = G__14854__delegate;
return G__14854;
})()
;

return null;
});
