goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__42457__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__42457 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42458__i = 0, G__42458__a = new Array(arguments.length -  0);
while (G__42458__i < G__42458__a.length) {G__42458__a[G__42458__i] = arguments[G__42458__i + 0]; ++G__42458__i;}
  args = new cljs.core.IndexedSeq(G__42458__a,0);
} 
return G__42457__delegate.call(this,args);};
G__42457.cljs$lang$maxFixedArity = 0;
G__42457.cljs$lang$applyTo = (function (arglist__42459){
var args = cljs.core.seq(arglist__42459);
return G__42457__delegate(args);
});
G__42457.cljs$core$IFn$_invoke$arity$variadic = G__42457__delegate;
return G__42457;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__42460__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__42460 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42461__i = 0, G__42461__a = new Array(arguments.length -  0);
while (G__42461__i < G__42461__a.length) {G__42461__a[G__42461__i] = arguments[G__42461__i + 0]; ++G__42461__i;}
  args = new cljs.core.IndexedSeq(G__42461__a,0);
} 
return G__42460__delegate.call(this,args);};
G__42460.cljs$lang$maxFixedArity = 0;
G__42460.cljs$lang$applyTo = (function (arglist__42462){
var args = cljs.core.seq(arglist__42462);
return G__42460__delegate(args);
});
G__42460.cljs$core$IFn$_invoke$arity$variadic = G__42460__delegate;
return G__42460;
})()
;

return null;
});
