goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9709__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9709 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9710__i = 0, G__9710__a = new Array(arguments.length -  0);
while (G__9710__i < G__9710__a.length) {G__9710__a[G__9710__i] = arguments[G__9710__i + 0]; ++G__9710__i;}
  args = new cljs.core.IndexedSeq(G__9710__a,0);
} 
return G__9709__delegate.call(this,args);};
G__9709.cljs$lang$maxFixedArity = 0;
G__9709.cljs$lang$applyTo = (function (arglist__9711){
var args = cljs.core.seq(arglist__9711);
return G__9709__delegate(args);
});
G__9709.cljs$core$IFn$_invoke$arity$variadic = G__9709__delegate;
return G__9709;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9712__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9712 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9713__i = 0, G__9713__a = new Array(arguments.length -  0);
while (G__9713__i < G__9713__a.length) {G__9713__a[G__9713__i] = arguments[G__9713__i + 0]; ++G__9713__i;}
  args = new cljs.core.IndexedSeq(G__9713__a,0);
} 
return G__9712__delegate.call(this,args);};
G__9712.cljs$lang$maxFixedArity = 0;
G__9712.cljs$lang$applyTo = (function (arglist__9714){
var args = cljs.core.seq(arglist__9714);
return G__9712__delegate(args);
});
G__9712.cljs$core$IFn$_invoke$arity$variadic = G__9712__delegate;
return G__9712;
})()
;

return null;
});
