goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9997__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9997 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9998__i = 0, G__9998__a = new Array(arguments.length -  0);
while (G__9998__i < G__9998__a.length) {G__9998__a[G__9998__i] = arguments[G__9998__i + 0]; ++G__9998__i;}
  args = new cljs.core.IndexedSeq(G__9998__a,0);
} 
return G__9997__delegate.call(this,args);};
G__9997.cljs$lang$maxFixedArity = 0;
G__9997.cljs$lang$applyTo = (function (arglist__9999){
var args = cljs.core.seq(arglist__9999);
return G__9997__delegate(args);
});
G__9997.cljs$core$IFn$_invoke$arity$variadic = G__9997__delegate;
return G__9997;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10000__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10000 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10001__i = 0, G__10001__a = new Array(arguments.length -  0);
while (G__10001__i < G__10001__a.length) {G__10001__a[G__10001__i] = arguments[G__10001__i + 0]; ++G__10001__i;}
  args = new cljs.core.IndexedSeq(G__10001__a,0);
} 
return G__10000__delegate.call(this,args);};
G__10000.cljs$lang$maxFixedArity = 0;
G__10000.cljs$lang$applyTo = (function (arglist__10002){
var args = cljs.core.seq(arglist__10002);
return G__10000__delegate(args);
});
G__10000.cljs$core$IFn$_invoke$arity$variadic = G__10000__delegate;
return G__10000;
})()
;

return null;
});
