goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14292__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14292 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14293__i = 0, G__14293__a = new Array(arguments.length -  0);
while (G__14293__i < G__14293__a.length) {G__14293__a[G__14293__i] = arguments[G__14293__i + 0]; ++G__14293__i;}
  args = new cljs.core.IndexedSeq(G__14293__a,0);
} 
return G__14292__delegate.call(this,args);};
G__14292.cljs$lang$maxFixedArity = 0;
G__14292.cljs$lang$applyTo = (function (arglist__14294){
var args = cljs.core.seq(arglist__14294);
return G__14292__delegate(args);
});
G__14292.cljs$core$IFn$_invoke$arity$variadic = G__14292__delegate;
return G__14292;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14295__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14295 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14296__i = 0, G__14296__a = new Array(arguments.length -  0);
while (G__14296__i < G__14296__a.length) {G__14296__a[G__14296__i] = arguments[G__14296__i + 0]; ++G__14296__i;}
  args = new cljs.core.IndexedSeq(G__14296__a,0);
} 
return G__14295__delegate.call(this,args);};
G__14295.cljs$lang$maxFixedArity = 0;
G__14295.cljs$lang$applyTo = (function (arglist__14297){
var args = cljs.core.seq(arglist__14297);
return G__14295__delegate(args);
});
G__14295.cljs$core$IFn$_invoke$arity$variadic = G__14295__delegate;
return G__14295;
})()
;

return null;
});
