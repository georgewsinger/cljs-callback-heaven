goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__17013__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__17013 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17014__i = 0, G__17014__a = new Array(arguments.length -  0);
while (G__17014__i < G__17014__a.length) {G__17014__a[G__17014__i] = arguments[G__17014__i + 0]; ++G__17014__i;}
  args = new cljs.core.IndexedSeq(G__17014__a,0);
} 
return G__17013__delegate.call(this,args);};
G__17013.cljs$lang$maxFixedArity = 0;
G__17013.cljs$lang$applyTo = (function (arglist__17015){
var args = cljs.core.seq(arglist__17015);
return G__17013__delegate(args);
});
G__17013.cljs$core$IFn$_invoke$arity$variadic = G__17013__delegate;
return G__17013;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__17016__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__17016 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17017__i = 0, G__17017__a = new Array(arguments.length -  0);
while (G__17017__i < G__17017__a.length) {G__17017__a[G__17017__i] = arguments[G__17017__i + 0]; ++G__17017__i;}
  args = new cljs.core.IndexedSeq(G__17017__a,0);
} 
return G__17016__delegate.call(this,args);};
G__17016.cljs$lang$maxFixedArity = 0;
G__17016.cljs$lang$applyTo = (function (arglist__17018){
var args = cljs.core.seq(arglist__17018);
return G__17016__delegate(args);
});
G__17016.cljs$core$IFn$_invoke$arity$variadic = G__17016__delegate;
return G__17016;
})()
;

return null;
});
