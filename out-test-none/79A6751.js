goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__41648__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__41648 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41649__i = 0, G__41649__a = new Array(arguments.length -  0);
while (G__41649__i < G__41649__a.length) {G__41649__a[G__41649__i] = arguments[G__41649__i + 0]; ++G__41649__i;}
  args = new cljs.core.IndexedSeq(G__41649__a,0);
} 
return G__41648__delegate.call(this,args);};
G__41648.cljs$lang$maxFixedArity = 0;
G__41648.cljs$lang$applyTo = (function (arglist__41650){
var args = cljs.core.seq(arglist__41650);
return G__41648__delegate(args);
});
G__41648.cljs$core$IFn$_invoke$arity$variadic = G__41648__delegate;
return G__41648;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__41651__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__41651 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41652__i = 0, G__41652__a = new Array(arguments.length -  0);
while (G__41652__i < G__41652__a.length) {G__41652__a[G__41652__i] = arguments[G__41652__i + 0]; ++G__41652__i;}
  args = new cljs.core.IndexedSeq(G__41652__a,0);
} 
return G__41651__delegate.call(this,args);};
G__41651.cljs$lang$maxFixedArity = 0;
G__41651.cljs$lang$applyTo = (function (arglist__41653){
var args = cljs.core.seq(arglist__41653);
return G__41651__delegate(args);
});
G__41651.cljs$core$IFn$_invoke$arity$variadic = G__41651__delegate;
return G__41651;
})()
;

return null;
});
