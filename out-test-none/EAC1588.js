goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__251048__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__251048 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__251049__i = 0, G__251049__a = new Array(arguments.length -  0);
while (G__251049__i < G__251049__a.length) {G__251049__a[G__251049__i] = arguments[G__251049__i + 0]; ++G__251049__i;}
  args = new cljs.core.IndexedSeq(G__251049__a,0);
} 
return G__251048__delegate.call(this,args);};
G__251048.cljs$lang$maxFixedArity = 0;
G__251048.cljs$lang$applyTo = (function (arglist__251050){
var args = cljs.core.seq(arglist__251050);
return G__251048__delegate(args);
});
G__251048.cljs$core$IFn$_invoke$arity$variadic = G__251048__delegate;
return G__251048;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__251051__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__251051 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__251052__i = 0, G__251052__a = new Array(arguments.length -  0);
while (G__251052__i < G__251052__a.length) {G__251052__a[G__251052__i] = arguments[G__251052__i + 0]; ++G__251052__i;}
  args = new cljs.core.IndexedSeq(G__251052__a,0);
} 
return G__251051__delegate.call(this,args);};
G__251051.cljs$lang$maxFixedArity = 0;
G__251051.cljs$lang$applyTo = (function (arglist__251053){
var args = cljs.core.seq(arglist__251053);
return G__251051__delegate(args);
});
G__251051.cljs$core$IFn$_invoke$arity$variadic = G__251051__delegate;
return G__251051;
})()
;

return null;
});
