goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__17575__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__17575 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17576__i = 0, G__17576__a = new Array(arguments.length -  0);
while (G__17576__i < G__17576__a.length) {G__17576__a[G__17576__i] = arguments[G__17576__i + 0]; ++G__17576__i;}
  args = new cljs.core.IndexedSeq(G__17576__a,0);
} 
return G__17575__delegate.call(this,args);};
G__17575.cljs$lang$maxFixedArity = 0;
G__17575.cljs$lang$applyTo = (function (arglist__17577){
var args = cljs.core.seq(arglist__17577);
return G__17575__delegate(args);
});
G__17575.cljs$core$IFn$_invoke$arity$variadic = G__17575__delegate;
return G__17575;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__17578__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__17578 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17579__i = 0, G__17579__a = new Array(arguments.length -  0);
while (G__17579__i < G__17579__a.length) {G__17579__a[G__17579__i] = arguments[G__17579__i + 0]; ++G__17579__i;}
  args = new cljs.core.IndexedSeq(G__17579__a,0);
} 
return G__17578__delegate.call(this,args);};
G__17578.cljs$lang$maxFixedArity = 0;
G__17578.cljs$lang$applyTo = (function (arglist__17580){
var args = cljs.core.seq(arglist__17580);
return G__17578__delegate(args);
});
G__17578.cljs$core$IFn$_invoke$arity$variadic = G__17578__delegate;
return G__17578;
})()
;

return null;
});
