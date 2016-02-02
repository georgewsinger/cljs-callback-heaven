goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9168__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9168 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9169__i = 0, G__9169__a = new Array(arguments.length -  0);
while (G__9169__i < G__9169__a.length) {G__9169__a[G__9169__i] = arguments[G__9169__i + 0]; ++G__9169__i;}
  args = new cljs.core.IndexedSeq(G__9169__a,0);
} 
return G__9168__delegate.call(this,args);};
G__9168.cljs$lang$maxFixedArity = 0;
G__9168.cljs$lang$applyTo = (function (arglist__9170){
var args = cljs.core.seq(arglist__9170);
return G__9168__delegate(args);
});
G__9168.cljs$core$IFn$_invoke$arity$variadic = G__9168__delegate;
return G__9168;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9171__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9171 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9172__i = 0, G__9172__a = new Array(arguments.length -  0);
while (G__9172__i < G__9172__a.length) {G__9172__a[G__9172__i] = arguments[G__9172__i + 0]; ++G__9172__i;}
  args = new cljs.core.IndexedSeq(G__9172__a,0);
} 
return G__9171__delegate.call(this,args);};
G__9171.cljs$lang$maxFixedArity = 0;
G__9171.cljs$lang$applyTo = (function (arglist__9173){
var args = cljs.core.seq(arglist__9173);
return G__9171__delegate(args);
});
G__9171.cljs$core$IFn$_invoke$arity$variadic = G__9171__delegate;
return G__9171;
})()
;

return null;
});
