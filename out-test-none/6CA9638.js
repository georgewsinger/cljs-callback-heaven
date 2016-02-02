goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__18479__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__18479 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18480__i = 0, G__18480__a = new Array(arguments.length -  0);
while (G__18480__i < G__18480__a.length) {G__18480__a[G__18480__i] = arguments[G__18480__i + 0]; ++G__18480__i;}
  args = new cljs.core.IndexedSeq(G__18480__a,0);
} 
return G__18479__delegate.call(this,args);};
G__18479.cljs$lang$maxFixedArity = 0;
G__18479.cljs$lang$applyTo = (function (arglist__18481){
var args = cljs.core.seq(arglist__18481);
return G__18479__delegate(args);
});
G__18479.cljs$core$IFn$_invoke$arity$variadic = G__18479__delegate;
return G__18479;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__18482__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__18482 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18483__i = 0, G__18483__a = new Array(arguments.length -  0);
while (G__18483__i < G__18483__a.length) {G__18483__a[G__18483__i] = arguments[G__18483__i + 0]; ++G__18483__i;}
  args = new cljs.core.IndexedSeq(G__18483__a,0);
} 
return G__18482__delegate.call(this,args);};
G__18482.cljs$lang$maxFixedArity = 0;
G__18482.cljs$lang$applyTo = (function (arglist__18484){
var args = cljs.core.seq(arglist__18484);
return G__18482__delegate(args);
});
G__18482.cljs$core$IFn$_invoke$arity$variadic = G__18482__delegate;
return G__18482;
})()
;

return null;
});
