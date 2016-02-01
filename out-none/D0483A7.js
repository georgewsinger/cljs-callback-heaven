goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9919__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9919 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9920__i = 0, G__9920__a = new Array(arguments.length -  0);
while (G__9920__i < G__9920__a.length) {G__9920__a[G__9920__i] = arguments[G__9920__i + 0]; ++G__9920__i;}
  args = new cljs.core.IndexedSeq(G__9920__a,0);
} 
return G__9919__delegate.call(this,args);};
G__9919.cljs$lang$maxFixedArity = 0;
G__9919.cljs$lang$applyTo = (function (arglist__9921){
var args = cljs.core.seq(arglist__9921);
return G__9919__delegate(args);
});
G__9919.cljs$core$IFn$_invoke$arity$variadic = G__9919__delegate;
return G__9919;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9922__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9922 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9923__i = 0, G__9923__a = new Array(arguments.length -  0);
while (G__9923__i < G__9923__a.length) {G__9923__a[G__9923__i] = arguments[G__9923__i + 0]; ++G__9923__i;}
  args = new cljs.core.IndexedSeq(G__9923__a,0);
} 
return G__9922__delegate.call(this,args);};
G__9922.cljs$lang$maxFixedArity = 0;
G__9922.cljs$lang$applyTo = (function (arglist__9924){
var args = cljs.core.seq(arglist__9924);
return G__9922__delegate(args);
});
G__9922.cljs$core$IFn$_invoke$arity$variadic = G__9922__delegate;
return G__9922;
})()
;

return null;
});
