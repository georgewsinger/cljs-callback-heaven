goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__25678__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__25678 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25679__i = 0, G__25679__a = new Array(arguments.length -  0);
while (G__25679__i < G__25679__a.length) {G__25679__a[G__25679__i] = arguments[G__25679__i + 0]; ++G__25679__i;}
  args = new cljs.core.IndexedSeq(G__25679__a,0);
} 
return G__25678__delegate.call(this,args);};
G__25678.cljs$lang$maxFixedArity = 0;
G__25678.cljs$lang$applyTo = (function (arglist__25680){
var args = cljs.core.seq(arglist__25680);
return G__25678__delegate(args);
});
G__25678.cljs$core$IFn$_invoke$arity$variadic = G__25678__delegate;
return G__25678;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__25681__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__25681 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25682__i = 0, G__25682__a = new Array(arguments.length -  0);
while (G__25682__i < G__25682__a.length) {G__25682__a[G__25682__i] = arguments[G__25682__i + 0]; ++G__25682__i;}
  args = new cljs.core.IndexedSeq(G__25682__a,0);
} 
return G__25681__delegate.call(this,args);};
G__25681.cljs$lang$maxFixedArity = 0;
G__25681.cljs$lang$applyTo = (function (arglist__25683){
var args = cljs.core.seq(arglist__25683);
return G__25681__delegate(args);
});
G__25681.cljs$core$IFn$_invoke$arity$variadic = G__25681__delegate;
return G__25681;
})()
;

return null;
});
