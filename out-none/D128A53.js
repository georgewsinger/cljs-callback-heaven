goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16382__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16382 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16383__i = 0, G__16383__a = new Array(arguments.length -  0);
while (G__16383__i < G__16383__a.length) {G__16383__a[G__16383__i] = arguments[G__16383__i + 0]; ++G__16383__i;}
  args = new cljs.core.IndexedSeq(G__16383__a,0);
} 
return G__16382__delegate.call(this,args);};
G__16382.cljs$lang$maxFixedArity = 0;
G__16382.cljs$lang$applyTo = (function (arglist__16384){
var args = cljs.core.seq(arglist__16384);
return G__16382__delegate(args);
});
G__16382.cljs$core$IFn$_invoke$arity$variadic = G__16382__delegate;
return G__16382;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16385__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16385 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16386__i = 0, G__16386__a = new Array(arguments.length -  0);
while (G__16386__i < G__16386__a.length) {G__16386__a[G__16386__i] = arguments[G__16386__i + 0]; ++G__16386__i;}
  args = new cljs.core.IndexedSeq(G__16386__a,0);
} 
return G__16385__delegate.call(this,args);};
G__16385.cljs$lang$maxFixedArity = 0;
G__16385.cljs$lang$applyTo = (function (arglist__16387){
var args = cljs.core.seq(arglist__16387);
return G__16385__delegate(args);
});
G__16385.cljs$core$IFn$_invoke$arity$variadic = G__16385__delegate;
return G__16385;
})()
;

return null;
});
