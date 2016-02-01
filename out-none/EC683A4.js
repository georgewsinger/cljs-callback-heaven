goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10299__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10299 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10300__i = 0, G__10300__a = new Array(arguments.length -  0);
while (G__10300__i < G__10300__a.length) {G__10300__a[G__10300__i] = arguments[G__10300__i + 0]; ++G__10300__i;}
  args = new cljs.core.IndexedSeq(G__10300__a,0);
} 
return G__10299__delegate.call(this,args);};
G__10299.cljs$lang$maxFixedArity = 0;
G__10299.cljs$lang$applyTo = (function (arglist__10301){
var args = cljs.core.seq(arglist__10301);
return G__10299__delegate(args);
});
G__10299.cljs$core$IFn$_invoke$arity$variadic = G__10299__delegate;
return G__10299;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10302__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10302 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10303__i = 0, G__10303__a = new Array(arguments.length -  0);
while (G__10303__i < G__10303__a.length) {G__10303__a[G__10303__i] = arguments[G__10303__i + 0]; ++G__10303__i;}
  args = new cljs.core.IndexedSeq(G__10303__a,0);
} 
return G__10302__delegate.call(this,args);};
G__10302.cljs$lang$maxFixedArity = 0;
G__10302.cljs$lang$applyTo = (function (arglist__10304){
var args = cljs.core.seq(arglist__10304);
return G__10302__delegate(args);
});
G__10302.cljs$core$IFn$_invoke$arity$variadic = G__10302__delegate;
return G__10302;
})()
;

return null;
});
