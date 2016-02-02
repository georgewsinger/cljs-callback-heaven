goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10790__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10790 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10791__i = 0, G__10791__a = new Array(arguments.length -  0);
while (G__10791__i < G__10791__a.length) {G__10791__a[G__10791__i] = arguments[G__10791__i + 0]; ++G__10791__i;}
  args = new cljs.core.IndexedSeq(G__10791__a,0);
} 
return G__10790__delegate.call(this,args);};
G__10790.cljs$lang$maxFixedArity = 0;
G__10790.cljs$lang$applyTo = (function (arglist__10792){
var args = cljs.core.seq(arglist__10792);
return G__10790__delegate(args);
});
G__10790.cljs$core$IFn$_invoke$arity$variadic = G__10790__delegate;
return G__10790;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10793__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10793 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10794__i = 0, G__10794__a = new Array(arguments.length -  0);
while (G__10794__i < G__10794__a.length) {G__10794__a[G__10794__i] = arguments[G__10794__i + 0]; ++G__10794__i;}
  args = new cljs.core.IndexedSeq(G__10794__a,0);
} 
return G__10793__delegate.call(this,args);};
G__10793.cljs$lang$maxFixedArity = 0;
G__10793.cljs$lang$applyTo = (function (arglist__10795){
var args = cljs.core.seq(arglist__10795);
return G__10793__delegate(args);
});
G__10793.cljs$core$IFn$_invoke$arity$variadic = G__10793__delegate;
return G__10793;
})()
;

return null;
});
