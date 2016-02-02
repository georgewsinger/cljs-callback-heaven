goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__21585__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__21585 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21586__i = 0, G__21586__a = new Array(arguments.length -  0);
while (G__21586__i < G__21586__a.length) {G__21586__a[G__21586__i] = arguments[G__21586__i + 0]; ++G__21586__i;}
  args = new cljs.core.IndexedSeq(G__21586__a,0);
} 
return G__21585__delegate.call(this,args);};
G__21585.cljs$lang$maxFixedArity = 0;
G__21585.cljs$lang$applyTo = (function (arglist__21587){
var args = cljs.core.seq(arglist__21587);
return G__21585__delegate(args);
});
G__21585.cljs$core$IFn$_invoke$arity$variadic = G__21585__delegate;
return G__21585;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__21588__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__21588 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21589__i = 0, G__21589__a = new Array(arguments.length -  0);
while (G__21589__i < G__21589__a.length) {G__21589__a[G__21589__i] = arguments[G__21589__i + 0]; ++G__21589__i;}
  args = new cljs.core.IndexedSeq(G__21589__a,0);
} 
return G__21588__delegate.call(this,args);};
G__21588.cljs$lang$maxFixedArity = 0;
G__21588.cljs$lang$applyTo = (function (arglist__21590){
var args = cljs.core.seq(arglist__21590);
return G__21588__delegate(args);
});
G__21588.cljs$core$IFn$_invoke$arity$variadic = G__21588__delegate;
return G__21588;
})()
;

return null;
});
