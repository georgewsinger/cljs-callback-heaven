goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__22330__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__22330 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22331__i = 0, G__22331__a = new Array(arguments.length -  0);
while (G__22331__i < G__22331__a.length) {G__22331__a[G__22331__i] = arguments[G__22331__i + 0]; ++G__22331__i;}
  args = new cljs.core.IndexedSeq(G__22331__a,0);
} 
return G__22330__delegate.call(this,args);};
G__22330.cljs$lang$maxFixedArity = 0;
G__22330.cljs$lang$applyTo = (function (arglist__22332){
var args = cljs.core.seq(arglist__22332);
return G__22330__delegate(args);
});
G__22330.cljs$core$IFn$_invoke$arity$variadic = G__22330__delegate;
return G__22330;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__22333__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__22333 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22334__i = 0, G__22334__a = new Array(arguments.length -  0);
while (G__22334__i < G__22334__a.length) {G__22334__a[G__22334__i] = arguments[G__22334__i + 0]; ++G__22334__i;}
  args = new cljs.core.IndexedSeq(G__22334__a,0);
} 
return G__22333__delegate.call(this,args);};
G__22333.cljs$lang$maxFixedArity = 0;
G__22333.cljs$lang$applyTo = (function (arglist__22335){
var args = cljs.core.seq(arglist__22335);
return G__22333__delegate(args);
});
G__22333.cljs$core$IFn$_invoke$arity$variadic = G__22333__delegate;
return G__22333;
})()
;

return null;
});
