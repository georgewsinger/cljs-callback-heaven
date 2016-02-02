goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10191__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10191 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10192__i = 0, G__10192__a = new Array(arguments.length -  0);
while (G__10192__i < G__10192__a.length) {G__10192__a[G__10192__i] = arguments[G__10192__i + 0]; ++G__10192__i;}
  args = new cljs.core.IndexedSeq(G__10192__a,0);
} 
return G__10191__delegate.call(this,args);};
G__10191.cljs$lang$maxFixedArity = 0;
G__10191.cljs$lang$applyTo = (function (arglist__10193){
var args = cljs.core.seq(arglist__10193);
return G__10191__delegate(args);
});
G__10191.cljs$core$IFn$_invoke$arity$variadic = G__10191__delegate;
return G__10191;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10194__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10194 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10195__i = 0, G__10195__a = new Array(arguments.length -  0);
while (G__10195__i < G__10195__a.length) {G__10195__a[G__10195__i] = arguments[G__10195__i + 0]; ++G__10195__i;}
  args = new cljs.core.IndexedSeq(G__10195__a,0);
} 
return G__10194__delegate.call(this,args);};
G__10194.cljs$lang$maxFixedArity = 0;
G__10194.cljs$lang$applyTo = (function (arglist__10196){
var args = cljs.core.seq(arglist__10196);
return G__10194__delegate(args);
});
G__10194.cljs$core$IFn$_invoke$arity$variadic = G__10194__delegate;
return G__10194;
})()
;

return null;
});
