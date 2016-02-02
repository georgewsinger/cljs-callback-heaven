goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__24665__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__24665 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24666__i = 0, G__24666__a = new Array(arguments.length -  0);
while (G__24666__i < G__24666__a.length) {G__24666__a[G__24666__i] = arguments[G__24666__i + 0]; ++G__24666__i;}
  args = new cljs.core.IndexedSeq(G__24666__a,0);
} 
return G__24665__delegate.call(this,args);};
G__24665.cljs$lang$maxFixedArity = 0;
G__24665.cljs$lang$applyTo = (function (arglist__24667){
var args = cljs.core.seq(arglist__24667);
return G__24665__delegate(args);
});
G__24665.cljs$core$IFn$_invoke$arity$variadic = G__24665__delegate;
return G__24665;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__24668__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__24668 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24669__i = 0, G__24669__a = new Array(arguments.length -  0);
while (G__24669__i < G__24669__a.length) {G__24669__a[G__24669__i] = arguments[G__24669__i + 0]; ++G__24669__i;}
  args = new cljs.core.IndexedSeq(G__24669__a,0);
} 
return G__24668__delegate.call(this,args);};
G__24668.cljs$lang$maxFixedArity = 0;
G__24668.cljs$lang$applyTo = (function (arglist__24670){
var args = cljs.core.seq(arglist__24670);
return G__24668__delegate(args);
});
G__24668.cljs$core$IFn$_invoke$arity$variadic = G__24668__delegate;
return G__24668;
})()
;

return null;
});
