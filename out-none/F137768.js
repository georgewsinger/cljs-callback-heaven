goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__25244__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__25244 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25245__i = 0, G__25245__a = new Array(arguments.length -  0);
while (G__25245__i < G__25245__a.length) {G__25245__a[G__25245__i] = arguments[G__25245__i + 0]; ++G__25245__i;}
  args = new cljs.core.IndexedSeq(G__25245__a,0);
} 
return G__25244__delegate.call(this,args);};
G__25244.cljs$lang$maxFixedArity = 0;
G__25244.cljs$lang$applyTo = (function (arglist__25246){
var args = cljs.core.seq(arglist__25246);
return G__25244__delegate(args);
});
G__25244.cljs$core$IFn$_invoke$arity$variadic = G__25244__delegate;
return G__25244;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__25247__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__25247 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25248__i = 0, G__25248__a = new Array(arguments.length -  0);
while (G__25248__i < G__25248__a.length) {G__25248__a[G__25248__i] = arguments[G__25248__i + 0]; ++G__25248__i;}
  args = new cljs.core.IndexedSeq(G__25248__a,0);
} 
return G__25247__delegate.call(this,args);};
G__25247.cljs$lang$maxFixedArity = 0;
G__25247.cljs$lang$applyTo = (function (arglist__25249){
var args = cljs.core.seq(arglist__25249);
return G__25247__delegate(args);
});
G__25247.cljs$core$IFn$_invoke$arity$variadic = G__25247__delegate;
return G__25247;
})()
;

return null;
});
