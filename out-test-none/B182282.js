goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__30680__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__30680 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30681__i = 0, G__30681__a = new Array(arguments.length -  0);
while (G__30681__i < G__30681__a.length) {G__30681__a[G__30681__i] = arguments[G__30681__i + 0]; ++G__30681__i;}
  args = new cljs.core.IndexedSeq(G__30681__a,0);
} 
return G__30680__delegate.call(this,args);};
G__30680.cljs$lang$maxFixedArity = 0;
G__30680.cljs$lang$applyTo = (function (arglist__30682){
var args = cljs.core.seq(arglist__30682);
return G__30680__delegate(args);
});
G__30680.cljs$core$IFn$_invoke$arity$variadic = G__30680__delegate;
return G__30680;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__30683__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__30683 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30684__i = 0, G__30684__a = new Array(arguments.length -  0);
while (G__30684__i < G__30684__a.length) {G__30684__a[G__30684__i] = arguments[G__30684__i + 0]; ++G__30684__i;}
  args = new cljs.core.IndexedSeq(G__30684__a,0);
} 
return G__30683__delegate.call(this,args);};
G__30683.cljs$lang$maxFixedArity = 0;
G__30683.cljs$lang$applyTo = (function (arglist__30685){
var args = cljs.core.seq(arglist__30685);
return G__30683__delegate(args);
});
G__30683.cljs$core$IFn$_invoke$arity$variadic = G__30683__delegate;
return G__30683;
})()
;

return null;
});
