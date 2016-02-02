goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__275712__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__275712 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__275713__i = 0, G__275713__a = new Array(arguments.length -  0);
while (G__275713__i < G__275713__a.length) {G__275713__a[G__275713__i] = arguments[G__275713__i + 0]; ++G__275713__i;}
  args = new cljs.core.IndexedSeq(G__275713__a,0);
} 
return G__275712__delegate.call(this,args);};
G__275712.cljs$lang$maxFixedArity = 0;
G__275712.cljs$lang$applyTo = (function (arglist__275714){
var args = cljs.core.seq(arglist__275714);
return G__275712__delegate(args);
});
G__275712.cljs$core$IFn$_invoke$arity$variadic = G__275712__delegate;
return G__275712;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__275715__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__275715 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__275716__i = 0, G__275716__a = new Array(arguments.length -  0);
while (G__275716__i < G__275716__a.length) {G__275716__a[G__275716__i] = arguments[G__275716__i + 0]; ++G__275716__i;}
  args = new cljs.core.IndexedSeq(G__275716__a,0);
} 
return G__275715__delegate.call(this,args);};
G__275715.cljs$lang$maxFixedArity = 0;
G__275715.cljs$lang$applyTo = (function (arglist__275717){
var args = cljs.core.seq(arglist__275717);
return G__275715__delegate(args);
});
G__275715.cljs$core$IFn$_invoke$arity$variadic = G__275715__delegate;
return G__275715;
})()
;

return null;
});
