goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__68668__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__68668 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__68669__i = 0, G__68669__a = new Array(arguments.length -  0);
while (G__68669__i < G__68669__a.length) {G__68669__a[G__68669__i] = arguments[G__68669__i + 0]; ++G__68669__i;}
  args = new cljs.core.IndexedSeq(G__68669__a,0);
} 
return G__68668__delegate.call(this,args);};
G__68668.cljs$lang$maxFixedArity = 0;
G__68668.cljs$lang$applyTo = (function (arglist__68670){
var args = cljs.core.seq(arglist__68670);
return G__68668__delegate(args);
});
G__68668.cljs$core$IFn$_invoke$arity$variadic = G__68668__delegate;
return G__68668;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__68671__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__68671 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__68672__i = 0, G__68672__a = new Array(arguments.length -  0);
while (G__68672__i < G__68672__a.length) {G__68672__a[G__68672__i] = arguments[G__68672__i + 0]; ++G__68672__i;}
  args = new cljs.core.IndexedSeq(G__68672__a,0);
} 
return G__68671__delegate.call(this,args);};
G__68671.cljs$lang$maxFixedArity = 0;
G__68671.cljs$lang$applyTo = (function (arglist__68673){
var args = cljs.core.seq(arglist__68673);
return G__68671__delegate(args);
});
G__68671.cljs$core$IFn$_invoke$arity$variadic = G__68671__delegate;
return G__68671;
})()
;

return null;
});
