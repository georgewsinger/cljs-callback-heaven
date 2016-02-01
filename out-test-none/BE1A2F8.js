goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14698__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14698 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14699__i = 0, G__14699__a = new Array(arguments.length -  0);
while (G__14699__i < G__14699__a.length) {G__14699__a[G__14699__i] = arguments[G__14699__i + 0]; ++G__14699__i;}
  args = new cljs.core.IndexedSeq(G__14699__a,0);
} 
return G__14698__delegate.call(this,args);};
G__14698.cljs$lang$maxFixedArity = 0;
G__14698.cljs$lang$applyTo = (function (arglist__14700){
var args = cljs.core.seq(arglist__14700);
return G__14698__delegate(args);
});
G__14698.cljs$core$IFn$_invoke$arity$variadic = G__14698__delegate;
return G__14698;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14701__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14701 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14702__i = 0, G__14702__a = new Array(arguments.length -  0);
while (G__14702__i < G__14702__a.length) {G__14702__a[G__14702__i] = arguments[G__14702__i + 0]; ++G__14702__i;}
  args = new cljs.core.IndexedSeq(G__14702__a,0);
} 
return G__14701__delegate.call(this,args);};
G__14701.cljs$lang$maxFixedArity = 0;
G__14701.cljs$lang$applyTo = (function (arglist__14703){
var args = cljs.core.seq(arglist__14703);
return G__14701__delegate(args);
});
G__14701.cljs$core$IFn$_invoke$arity$variadic = G__14701__delegate;
return G__14701;
})()
;

return null;
});
