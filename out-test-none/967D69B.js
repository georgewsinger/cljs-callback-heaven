goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__28311__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__28311 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28312__i = 0, G__28312__a = new Array(arguments.length -  0);
while (G__28312__i < G__28312__a.length) {G__28312__a[G__28312__i] = arguments[G__28312__i + 0]; ++G__28312__i;}
  args = new cljs.core.IndexedSeq(G__28312__a,0);
} 
return G__28311__delegate.call(this,args);};
G__28311.cljs$lang$maxFixedArity = 0;
G__28311.cljs$lang$applyTo = (function (arglist__28313){
var args = cljs.core.seq(arglist__28313);
return G__28311__delegate(args);
});
G__28311.cljs$core$IFn$_invoke$arity$variadic = G__28311__delegate;
return G__28311;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__28314__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__28314 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28315__i = 0, G__28315__a = new Array(arguments.length -  0);
while (G__28315__i < G__28315__a.length) {G__28315__a[G__28315__i] = arguments[G__28315__i + 0]; ++G__28315__i;}
  args = new cljs.core.IndexedSeq(G__28315__a,0);
} 
return G__28314__delegate.call(this,args);};
G__28314.cljs$lang$maxFixedArity = 0;
G__28314.cljs$lang$applyTo = (function (arglist__28316){
var args = cljs.core.seq(arglist__28316);
return G__28314__delegate(args);
});
G__28314.cljs$core$IFn$_invoke$arity$variadic = G__28314__delegate;
return G__28314;
})()
;

return null;
});