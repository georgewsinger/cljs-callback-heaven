goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9747__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9747 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9748__i = 0, G__9748__a = new Array(arguments.length -  0);
while (G__9748__i < G__9748__a.length) {G__9748__a[G__9748__i] = arguments[G__9748__i + 0]; ++G__9748__i;}
  args = new cljs.core.IndexedSeq(G__9748__a,0);
} 
return G__9747__delegate.call(this,args);};
G__9747.cljs$lang$maxFixedArity = 0;
G__9747.cljs$lang$applyTo = (function (arglist__9749){
var args = cljs.core.seq(arglist__9749);
return G__9747__delegate(args);
});
G__9747.cljs$core$IFn$_invoke$arity$variadic = G__9747__delegate;
return G__9747;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9750__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9750 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9751__i = 0, G__9751__a = new Array(arguments.length -  0);
while (G__9751__i < G__9751__a.length) {G__9751__a[G__9751__i] = arguments[G__9751__i + 0]; ++G__9751__i;}
  args = new cljs.core.IndexedSeq(G__9751__a,0);
} 
return G__9750__delegate.call(this,args);};
G__9750.cljs$lang$maxFixedArity = 0;
G__9750.cljs$lang$applyTo = (function (arglist__9752){
var args = cljs.core.seq(arglist__9752);
return G__9750__delegate(args);
});
G__9750.cljs$core$IFn$_invoke$arity$variadic = G__9750__delegate;
return G__9750;
})()
;

return null;
});
