goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__117877__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__117877 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__117878__i = 0, G__117878__a = new Array(arguments.length -  0);
while (G__117878__i < G__117878__a.length) {G__117878__a[G__117878__i] = arguments[G__117878__i + 0]; ++G__117878__i;}
  args = new cljs.core.IndexedSeq(G__117878__a,0);
} 
return G__117877__delegate.call(this,args);};
G__117877.cljs$lang$maxFixedArity = 0;
G__117877.cljs$lang$applyTo = (function (arglist__117879){
var args = cljs.core.seq(arglist__117879);
return G__117877__delegate(args);
});
G__117877.cljs$core$IFn$_invoke$arity$variadic = G__117877__delegate;
return G__117877;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__117880__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__117880 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__117881__i = 0, G__117881__a = new Array(arguments.length -  0);
while (G__117881__i < G__117881__a.length) {G__117881__a[G__117881__i] = arguments[G__117881__i + 0]; ++G__117881__i;}
  args = new cljs.core.IndexedSeq(G__117881__a,0);
} 
return G__117880__delegate.call(this,args);};
G__117880.cljs$lang$maxFixedArity = 0;
G__117880.cljs$lang$applyTo = (function (arglist__117882){
var args = cljs.core.seq(arglist__117882);
return G__117880__delegate(args);
});
G__117880.cljs$core$IFn$_invoke$arity$variadic = G__117880__delegate;
return G__117880;
})()
;

return null;
});
