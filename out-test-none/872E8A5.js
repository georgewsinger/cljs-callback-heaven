goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9758__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9758 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9759__i = 0, G__9759__a = new Array(arguments.length -  0);
while (G__9759__i < G__9759__a.length) {G__9759__a[G__9759__i] = arguments[G__9759__i + 0]; ++G__9759__i;}
  args = new cljs.core.IndexedSeq(G__9759__a,0);
} 
return G__9758__delegate.call(this,args);};
G__9758.cljs$lang$maxFixedArity = 0;
G__9758.cljs$lang$applyTo = (function (arglist__9760){
var args = cljs.core.seq(arglist__9760);
return G__9758__delegate(args);
});
G__9758.cljs$core$IFn$_invoke$arity$variadic = G__9758__delegate;
return G__9758;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9761__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9761 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9762__i = 0, G__9762__a = new Array(arguments.length -  0);
while (G__9762__i < G__9762__a.length) {G__9762__a[G__9762__i] = arguments[G__9762__i + 0]; ++G__9762__i;}
  args = new cljs.core.IndexedSeq(G__9762__a,0);
} 
return G__9761__delegate.call(this,args);};
G__9761.cljs$lang$maxFixedArity = 0;
G__9761.cljs$lang$applyTo = (function (arglist__9763){
var args = cljs.core.seq(arglist__9763);
return G__9761__delegate(args);
});
G__9761.cljs$core$IFn$_invoke$arity$variadic = G__9761__delegate;
return G__9761;
})()
;

return null;
});
