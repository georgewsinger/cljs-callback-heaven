goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__17695__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__17695 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17696__i = 0, G__17696__a = new Array(arguments.length -  0);
while (G__17696__i < G__17696__a.length) {G__17696__a[G__17696__i] = arguments[G__17696__i + 0]; ++G__17696__i;}
  args = new cljs.core.IndexedSeq(G__17696__a,0);
} 
return G__17695__delegate.call(this,args);};
G__17695.cljs$lang$maxFixedArity = 0;
G__17695.cljs$lang$applyTo = (function (arglist__17697){
var args = cljs.core.seq(arglist__17697);
return G__17695__delegate(args);
});
G__17695.cljs$core$IFn$_invoke$arity$variadic = G__17695__delegate;
return G__17695;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__17698__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__17698 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17699__i = 0, G__17699__a = new Array(arguments.length -  0);
while (G__17699__i < G__17699__a.length) {G__17699__a[G__17699__i] = arguments[G__17699__i + 0]; ++G__17699__i;}
  args = new cljs.core.IndexedSeq(G__17699__a,0);
} 
return G__17698__delegate.call(this,args);};
G__17698.cljs$lang$maxFixedArity = 0;
G__17698.cljs$lang$applyTo = (function (arglist__17700){
var args = cljs.core.seq(arglist__17700);
return G__17698__delegate(args);
});
G__17698.cljs$core$IFn$_invoke$arity$variadic = G__17698__delegate;
return G__17698;
})()
;

return null;
});
