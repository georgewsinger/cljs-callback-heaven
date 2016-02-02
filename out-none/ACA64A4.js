goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__45345__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__45345 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45346__i = 0, G__45346__a = new Array(arguments.length -  0);
while (G__45346__i < G__45346__a.length) {G__45346__a[G__45346__i] = arguments[G__45346__i + 0]; ++G__45346__i;}
  args = new cljs.core.IndexedSeq(G__45346__a,0);
} 
return G__45345__delegate.call(this,args);};
G__45345.cljs$lang$maxFixedArity = 0;
G__45345.cljs$lang$applyTo = (function (arglist__45347){
var args = cljs.core.seq(arglist__45347);
return G__45345__delegate(args);
});
G__45345.cljs$core$IFn$_invoke$arity$variadic = G__45345__delegate;
return G__45345;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__45348__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__45348 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45349__i = 0, G__45349__a = new Array(arguments.length -  0);
while (G__45349__i < G__45349__a.length) {G__45349__a[G__45349__i] = arguments[G__45349__i + 0]; ++G__45349__i;}
  args = new cljs.core.IndexedSeq(G__45349__a,0);
} 
return G__45348__delegate.call(this,args);};
G__45348.cljs$lang$maxFixedArity = 0;
G__45348.cljs$lang$applyTo = (function (arglist__45350){
var args = cljs.core.seq(arglist__45350);
return G__45348__delegate(args);
});
G__45348.cljs$core$IFn$_invoke$arity$variadic = G__45348__delegate;
return G__45348;
})()
;

return null;
});
