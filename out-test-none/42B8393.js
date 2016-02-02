goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__41246__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__41246 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41247__i = 0, G__41247__a = new Array(arguments.length -  0);
while (G__41247__i < G__41247__a.length) {G__41247__a[G__41247__i] = arguments[G__41247__i + 0]; ++G__41247__i;}
  args = new cljs.core.IndexedSeq(G__41247__a,0);
} 
return G__41246__delegate.call(this,args);};
G__41246.cljs$lang$maxFixedArity = 0;
G__41246.cljs$lang$applyTo = (function (arglist__41248){
var args = cljs.core.seq(arglist__41248);
return G__41246__delegate(args);
});
G__41246.cljs$core$IFn$_invoke$arity$variadic = G__41246__delegate;
return G__41246;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__41249__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__41249 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41250__i = 0, G__41250__a = new Array(arguments.length -  0);
while (G__41250__i < G__41250__a.length) {G__41250__a[G__41250__i] = arguments[G__41250__i + 0]; ++G__41250__i;}
  args = new cljs.core.IndexedSeq(G__41250__a,0);
} 
return G__41249__delegate.call(this,args);};
G__41249.cljs$lang$maxFixedArity = 0;
G__41249.cljs$lang$applyTo = (function (arglist__41251){
var args = cljs.core.seq(arglist__41251);
return G__41249__delegate(args);
});
G__41249.cljs$core$IFn$_invoke$arity$variadic = G__41249__delegate;
return G__41249;
})()
;

return null;
});
