goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10795__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10795 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10796__i = 0, G__10796__a = new Array(arguments.length -  0);
while (G__10796__i < G__10796__a.length) {G__10796__a[G__10796__i] = arguments[G__10796__i + 0]; ++G__10796__i;}
  args = new cljs.core.IndexedSeq(G__10796__a,0);
} 
return G__10795__delegate.call(this,args);};
G__10795.cljs$lang$maxFixedArity = 0;
G__10795.cljs$lang$applyTo = (function (arglist__10797){
var args = cljs.core.seq(arglist__10797);
return G__10795__delegate(args);
});
G__10795.cljs$core$IFn$_invoke$arity$variadic = G__10795__delegate;
return G__10795;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10798__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10798 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10799__i = 0, G__10799__a = new Array(arguments.length -  0);
while (G__10799__i < G__10799__a.length) {G__10799__a[G__10799__i] = arguments[G__10799__i + 0]; ++G__10799__i;}
  args = new cljs.core.IndexedSeq(G__10799__a,0);
} 
return G__10798__delegate.call(this,args);};
G__10798.cljs$lang$maxFixedArity = 0;
G__10798.cljs$lang$applyTo = (function (arglist__10800){
var args = cljs.core.seq(arglist__10800);
return G__10798__delegate(args);
});
G__10798.cljs$core$IFn$_invoke$arity$variadic = G__10798__delegate;
return G__10798;
})()
;

return null;
});
