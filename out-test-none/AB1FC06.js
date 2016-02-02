goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__267342__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__267342 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__267343__i = 0, G__267343__a = new Array(arguments.length -  0);
while (G__267343__i < G__267343__a.length) {G__267343__a[G__267343__i] = arguments[G__267343__i + 0]; ++G__267343__i;}
  args = new cljs.core.IndexedSeq(G__267343__a,0);
} 
return G__267342__delegate.call(this,args);};
G__267342.cljs$lang$maxFixedArity = 0;
G__267342.cljs$lang$applyTo = (function (arglist__267344){
var args = cljs.core.seq(arglist__267344);
return G__267342__delegate(args);
});
G__267342.cljs$core$IFn$_invoke$arity$variadic = G__267342__delegate;
return G__267342;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__267345__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__267345 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__267346__i = 0, G__267346__a = new Array(arguments.length -  0);
while (G__267346__i < G__267346__a.length) {G__267346__a[G__267346__i] = arguments[G__267346__i + 0]; ++G__267346__i;}
  args = new cljs.core.IndexedSeq(G__267346__a,0);
} 
return G__267345__delegate.call(this,args);};
G__267345.cljs$lang$maxFixedArity = 0;
G__267345.cljs$lang$applyTo = (function (arglist__267347){
var args = cljs.core.seq(arglist__267347);
return G__267345__delegate(args);
});
G__267345.cljs$core$IFn$_invoke$arity$variadic = G__267345__delegate;
return G__267345;
})()
;

return null;
});
