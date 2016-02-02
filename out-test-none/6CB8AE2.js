goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13800__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13800 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13801__i = 0, G__13801__a = new Array(arguments.length -  0);
while (G__13801__i < G__13801__a.length) {G__13801__a[G__13801__i] = arguments[G__13801__i + 0]; ++G__13801__i;}
  args = new cljs.core.IndexedSeq(G__13801__a,0);
} 
return G__13800__delegate.call(this,args);};
G__13800.cljs$lang$maxFixedArity = 0;
G__13800.cljs$lang$applyTo = (function (arglist__13802){
var args = cljs.core.seq(arglist__13802);
return G__13800__delegate(args);
});
G__13800.cljs$core$IFn$_invoke$arity$variadic = G__13800__delegate;
return G__13800;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13803__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13803 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13804__i = 0, G__13804__a = new Array(arguments.length -  0);
while (G__13804__i < G__13804__a.length) {G__13804__a[G__13804__i] = arguments[G__13804__i + 0]; ++G__13804__i;}
  args = new cljs.core.IndexedSeq(G__13804__a,0);
} 
return G__13803__delegate.call(this,args);};
G__13803.cljs$lang$maxFixedArity = 0;
G__13803.cljs$lang$applyTo = (function (arglist__13805){
var args = cljs.core.seq(arglist__13805);
return G__13803__delegate(args);
});
G__13803.cljs$core$IFn$_invoke$arity$variadic = G__13803__delegate;
return G__13803;
})()
;

return null;
});
