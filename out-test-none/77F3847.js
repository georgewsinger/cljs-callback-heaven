goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__28183__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__28183 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28184__i = 0, G__28184__a = new Array(arguments.length -  0);
while (G__28184__i < G__28184__a.length) {G__28184__a[G__28184__i] = arguments[G__28184__i + 0]; ++G__28184__i;}
  args = new cljs.core.IndexedSeq(G__28184__a,0);
} 
return G__28183__delegate.call(this,args);};
G__28183.cljs$lang$maxFixedArity = 0;
G__28183.cljs$lang$applyTo = (function (arglist__28185){
var args = cljs.core.seq(arglist__28185);
return G__28183__delegate(args);
});
G__28183.cljs$core$IFn$_invoke$arity$variadic = G__28183__delegate;
return G__28183;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__28186__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__28186 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28187__i = 0, G__28187__a = new Array(arguments.length -  0);
while (G__28187__i < G__28187__a.length) {G__28187__a[G__28187__i] = arguments[G__28187__i + 0]; ++G__28187__i;}
  args = new cljs.core.IndexedSeq(G__28187__a,0);
} 
return G__28186__delegate.call(this,args);};
G__28186.cljs$lang$maxFixedArity = 0;
G__28186.cljs$lang$applyTo = (function (arglist__28188){
var args = cljs.core.seq(arglist__28188);
return G__28186__delegate(args);
});
G__28186.cljs$core$IFn$_invoke$arity$variadic = G__28186__delegate;
return G__28186;
})()
;

return null;
});
