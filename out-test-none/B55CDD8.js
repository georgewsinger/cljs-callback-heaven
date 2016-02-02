goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__266023__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__266023 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__266024__i = 0, G__266024__a = new Array(arguments.length -  0);
while (G__266024__i < G__266024__a.length) {G__266024__a[G__266024__i] = arguments[G__266024__i + 0]; ++G__266024__i;}
  args = new cljs.core.IndexedSeq(G__266024__a,0);
} 
return G__266023__delegate.call(this,args);};
G__266023.cljs$lang$maxFixedArity = 0;
G__266023.cljs$lang$applyTo = (function (arglist__266025){
var args = cljs.core.seq(arglist__266025);
return G__266023__delegate(args);
});
G__266023.cljs$core$IFn$_invoke$arity$variadic = G__266023__delegate;
return G__266023;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__266026__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__266026 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__266027__i = 0, G__266027__a = new Array(arguments.length -  0);
while (G__266027__i < G__266027__a.length) {G__266027__a[G__266027__i] = arguments[G__266027__i + 0]; ++G__266027__i;}
  args = new cljs.core.IndexedSeq(G__266027__a,0);
} 
return G__266026__delegate.call(this,args);};
G__266026.cljs$lang$maxFixedArity = 0;
G__266026.cljs$lang$applyTo = (function (arglist__266028){
var args = cljs.core.seq(arglist__266028);
return G__266026__delegate(args);
});
G__266026.cljs$core$IFn$_invoke$arity$variadic = G__266026__delegate;
return G__266026;
})()
;

return null;
});
