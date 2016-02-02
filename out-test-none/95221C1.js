goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__193274__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__193274 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__193275__i = 0, G__193275__a = new Array(arguments.length -  0);
while (G__193275__i < G__193275__a.length) {G__193275__a[G__193275__i] = arguments[G__193275__i + 0]; ++G__193275__i;}
  args = new cljs.core.IndexedSeq(G__193275__a,0);
} 
return G__193274__delegate.call(this,args);};
G__193274.cljs$lang$maxFixedArity = 0;
G__193274.cljs$lang$applyTo = (function (arglist__193276){
var args = cljs.core.seq(arglist__193276);
return G__193274__delegate(args);
});
G__193274.cljs$core$IFn$_invoke$arity$variadic = G__193274__delegate;
return G__193274;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__193277__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__193277 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__193278__i = 0, G__193278__a = new Array(arguments.length -  0);
while (G__193278__i < G__193278__a.length) {G__193278__a[G__193278__i] = arguments[G__193278__i + 0]; ++G__193278__i;}
  args = new cljs.core.IndexedSeq(G__193278__a,0);
} 
return G__193277__delegate.call(this,args);};
G__193277.cljs$lang$maxFixedArity = 0;
G__193277.cljs$lang$applyTo = (function (arglist__193279){
var args = cljs.core.seq(arglist__193279);
return G__193277__delegate(args);
});
G__193277.cljs$core$IFn$_invoke$arity$variadic = G__193277__delegate;
return G__193277;
})()
;

return null;
});
