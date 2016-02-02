goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11349__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11349 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11350__i = 0, G__11350__a = new Array(arguments.length -  0);
while (G__11350__i < G__11350__a.length) {G__11350__a[G__11350__i] = arguments[G__11350__i + 0]; ++G__11350__i;}
  args = new cljs.core.IndexedSeq(G__11350__a,0);
} 
return G__11349__delegate.call(this,args);};
G__11349.cljs$lang$maxFixedArity = 0;
G__11349.cljs$lang$applyTo = (function (arglist__11351){
var args = cljs.core.seq(arglist__11351);
return G__11349__delegate(args);
});
G__11349.cljs$core$IFn$_invoke$arity$variadic = G__11349__delegate;
return G__11349;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11352__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11352 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11353__i = 0, G__11353__a = new Array(arguments.length -  0);
while (G__11353__i < G__11353__a.length) {G__11353__a[G__11353__i] = arguments[G__11353__i + 0]; ++G__11353__i;}
  args = new cljs.core.IndexedSeq(G__11353__a,0);
} 
return G__11352__delegate.call(this,args);};
G__11352.cljs$lang$maxFixedArity = 0;
G__11352.cljs$lang$applyTo = (function (arglist__11354){
var args = cljs.core.seq(arglist__11354);
return G__11352__delegate(args);
});
G__11352.cljs$core$IFn$_invoke$arity$variadic = G__11352__delegate;
return G__11352;
})()
;

return null;
});
