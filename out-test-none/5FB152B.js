goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__35423__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__35423 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35424__i = 0, G__35424__a = new Array(arguments.length -  0);
while (G__35424__i < G__35424__a.length) {G__35424__a[G__35424__i] = arguments[G__35424__i + 0]; ++G__35424__i;}
  args = new cljs.core.IndexedSeq(G__35424__a,0);
} 
return G__35423__delegate.call(this,args);};
G__35423.cljs$lang$maxFixedArity = 0;
G__35423.cljs$lang$applyTo = (function (arglist__35425){
var args = cljs.core.seq(arglist__35425);
return G__35423__delegate(args);
});
G__35423.cljs$core$IFn$_invoke$arity$variadic = G__35423__delegate;
return G__35423;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__35426__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__35426 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35427__i = 0, G__35427__a = new Array(arguments.length -  0);
while (G__35427__i < G__35427__a.length) {G__35427__a[G__35427__i] = arguments[G__35427__i + 0]; ++G__35427__i;}
  args = new cljs.core.IndexedSeq(G__35427__a,0);
} 
return G__35426__delegate.call(this,args);};
G__35426.cljs$lang$maxFixedArity = 0;
G__35426.cljs$lang$applyTo = (function (arglist__35428){
var args = cljs.core.seq(arglist__35428);
return G__35426__delegate(args);
});
G__35426.cljs$core$IFn$_invoke$arity$variadic = G__35426__delegate;
return G__35426;
})()
;

return null;
});
