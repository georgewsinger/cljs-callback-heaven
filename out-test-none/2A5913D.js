goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15947__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15947 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15948__i = 0, G__15948__a = new Array(arguments.length -  0);
while (G__15948__i < G__15948__a.length) {G__15948__a[G__15948__i] = arguments[G__15948__i + 0]; ++G__15948__i;}
  args = new cljs.core.IndexedSeq(G__15948__a,0);
} 
return G__15947__delegate.call(this,args);};
G__15947.cljs$lang$maxFixedArity = 0;
G__15947.cljs$lang$applyTo = (function (arglist__15949){
var args = cljs.core.seq(arglist__15949);
return G__15947__delegate(args);
});
G__15947.cljs$core$IFn$_invoke$arity$variadic = G__15947__delegate;
return G__15947;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15950__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15950 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15951__i = 0, G__15951__a = new Array(arguments.length -  0);
while (G__15951__i < G__15951__a.length) {G__15951__a[G__15951__i] = arguments[G__15951__i + 0]; ++G__15951__i;}
  args = new cljs.core.IndexedSeq(G__15951__a,0);
} 
return G__15950__delegate.call(this,args);};
G__15950.cljs$lang$maxFixedArity = 0;
G__15950.cljs$lang$applyTo = (function (arglist__15952){
var args = cljs.core.seq(arglist__15952);
return G__15950__delegate(args);
});
G__15950.cljs$core$IFn$_invoke$arity$variadic = G__15950__delegate;
return G__15950;
})()
;

return null;
});
