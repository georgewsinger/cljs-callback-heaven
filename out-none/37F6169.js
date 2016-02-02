goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16625__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16625 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16626__i = 0, G__16626__a = new Array(arguments.length -  0);
while (G__16626__i < G__16626__a.length) {G__16626__a[G__16626__i] = arguments[G__16626__i + 0]; ++G__16626__i;}
  args = new cljs.core.IndexedSeq(G__16626__a,0);
} 
return G__16625__delegate.call(this,args);};
G__16625.cljs$lang$maxFixedArity = 0;
G__16625.cljs$lang$applyTo = (function (arglist__16627){
var args = cljs.core.seq(arglist__16627);
return G__16625__delegate(args);
});
G__16625.cljs$core$IFn$_invoke$arity$variadic = G__16625__delegate;
return G__16625;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16628__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16628 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16629__i = 0, G__16629__a = new Array(arguments.length -  0);
while (G__16629__i < G__16629__a.length) {G__16629__a[G__16629__i] = arguments[G__16629__i + 0]; ++G__16629__i;}
  args = new cljs.core.IndexedSeq(G__16629__a,0);
} 
return G__16628__delegate.call(this,args);};
G__16628.cljs$lang$maxFixedArity = 0;
G__16628.cljs$lang$applyTo = (function (arglist__16630){
var args = cljs.core.seq(arglist__16630);
return G__16628__delegate(args);
});
G__16628.cljs$core$IFn$_invoke$arity$variadic = G__16628__delegate;
return G__16628;
})()
;

return null;
});
