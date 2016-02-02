goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__74228__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__74228 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__74229__i = 0, G__74229__a = new Array(arguments.length -  0);
while (G__74229__i < G__74229__a.length) {G__74229__a[G__74229__i] = arguments[G__74229__i + 0]; ++G__74229__i;}
  args = new cljs.core.IndexedSeq(G__74229__a,0);
} 
return G__74228__delegate.call(this,args);};
G__74228.cljs$lang$maxFixedArity = 0;
G__74228.cljs$lang$applyTo = (function (arglist__74230){
var args = cljs.core.seq(arglist__74230);
return G__74228__delegate(args);
});
G__74228.cljs$core$IFn$_invoke$arity$variadic = G__74228__delegate;
return G__74228;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__74231__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__74231 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__74232__i = 0, G__74232__a = new Array(arguments.length -  0);
while (G__74232__i < G__74232__a.length) {G__74232__a[G__74232__i] = arguments[G__74232__i + 0]; ++G__74232__i;}
  args = new cljs.core.IndexedSeq(G__74232__a,0);
} 
return G__74231__delegate.call(this,args);};
G__74231.cljs$lang$maxFixedArity = 0;
G__74231.cljs$lang$applyTo = (function (arglist__74233){
var args = cljs.core.seq(arglist__74233);
return G__74231__delegate(args);
});
G__74231.cljs$core$IFn$_invoke$arity$variadic = G__74231__delegate;
return G__74231;
})()
;

return null;
});
