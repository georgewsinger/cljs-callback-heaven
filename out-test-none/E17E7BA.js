goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__173548__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__173548 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__173549__i = 0, G__173549__a = new Array(arguments.length -  0);
while (G__173549__i < G__173549__a.length) {G__173549__a[G__173549__i] = arguments[G__173549__i + 0]; ++G__173549__i;}
  args = new cljs.core.IndexedSeq(G__173549__a,0);
} 
return G__173548__delegate.call(this,args);};
G__173548.cljs$lang$maxFixedArity = 0;
G__173548.cljs$lang$applyTo = (function (arglist__173550){
var args = cljs.core.seq(arglist__173550);
return G__173548__delegate(args);
});
G__173548.cljs$core$IFn$_invoke$arity$variadic = G__173548__delegate;
return G__173548;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__173551__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__173551 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__173552__i = 0, G__173552__a = new Array(arguments.length -  0);
while (G__173552__i < G__173552__a.length) {G__173552__a[G__173552__i] = arguments[G__173552__i + 0]; ++G__173552__i;}
  args = new cljs.core.IndexedSeq(G__173552__a,0);
} 
return G__173551__delegate.call(this,args);};
G__173551.cljs$lang$maxFixedArity = 0;
G__173551.cljs$lang$applyTo = (function (arglist__173553){
var args = cljs.core.seq(arglist__173553);
return G__173551__delegate(args);
});
G__173551.cljs$core$IFn$_invoke$arity$variadic = G__173551__delegate;
return G__173551;
})()
;

return null;
});
