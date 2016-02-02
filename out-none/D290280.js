goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__84678__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__84678 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__84679__i = 0, G__84679__a = new Array(arguments.length -  0);
while (G__84679__i < G__84679__a.length) {G__84679__a[G__84679__i] = arguments[G__84679__i + 0]; ++G__84679__i;}
  args = new cljs.core.IndexedSeq(G__84679__a,0);
} 
return G__84678__delegate.call(this,args);};
G__84678.cljs$lang$maxFixedArity = 0;
G__84678.cljs$lang$applyTo = (function (arglist__84680){
var args = cljs.core.seq(arglist__84680);
return G__84678__delegate(args);
});
G__84678.cljs$core$IFn$_invoke$arity$variadic = G__84678__delegate;
return G__84678;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__84681__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__84681 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__84682__i = 0, G__84682__a = new Array(arguments.length -  0);
while (G__84682__i < G__84682__a.length) {G__84682__a[G__84682__i] = arguments[G__84682__i + 0]; ++G__84682__i;}
  args = new cljs.core.IndexedSeq(G__84682__a,0);
} 
return G__84681__delegate.call(this,args);};
G__84681.cljs$lang$maxFixedArity = 0;
G__84681.cljs$lang$applyTo = (function (arglist__84683){
var args = cljs.core.seq(arglist__84683);
return G__84681__delegate(args);
});
G__84681.cljs$core$IFn$_invoke$arity$variadic = G__84681__delegate;
return G__84681;
})()
;

return null;
});
