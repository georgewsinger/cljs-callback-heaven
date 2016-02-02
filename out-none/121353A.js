goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__48247__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__48247 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48248__i = 0, G__48248__a = new Array(arguments.length -  0);
while (G__48248__i < G__48248__a.length) {G__48248__a[G__48248__i] = arguments[G__48248__i + 0]; ++G__48248__i;}
  args = new cljs.core.IndexedSeq(G__48248__a,0);
} 
return G__48247__delegate.call(this,args);};
G__48247.cljs$lang$maxFixedArity = 0;
G__48247.cljs$lang$applyTo = (function (arglist__48249){
var args = cljs.core.seq(arglist__48249);
return G__48247__delegate(args);
});
G__48247.cljs$core$IFn$_invoke$arity$variadic = G__48247__delegate;
return G__48247;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__48250__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__48250 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48251__i = 0, G__48251__a = new Array(arguments.length -  0);
while (G__48251__i < G__48251__a.length) {G__48251__a[G__48251__i] = arguments[G__48251__i + 0]; ++G__48251__i;}
  args = new cljs.core.IndexedSeq(G__48251__a,0);
} 
return G__48250__delegate.call(this,args);};
G__48250.cljs$lang$maxFixedArity = 0;
G__48250.cljs$lang$applyTo = (function (arglist__48252){
var args = cljs.core.seq(arglist__48252);
return G__48250__delegate(args);
});
G__48250.cljs$core$IFn$_invoke$arity$variadic = G__48250__delegate;
return G__48250;
})()
;

return null;
});
