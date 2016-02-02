goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11472__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11472 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11473__i = 0, G__11473__a = new Array(arguments.length -  0);
while (G__11473__i < G__11473__a.length) {G__11473__a[G__11473__i] = arguments[G__11473__i + 0]; ++G__11473__i;}
  args = new cljs.core.IndexedSeq(G__11473__a,0);
} 
return G__11472__delegate.call(this,args);};
G__11472.cljs$lang$maxFixedArity = 0;
G__11472.cljs$lang$applyTo = (function (arglist__11474){
var args = cljs.core.seq(arglist__11474);
return G__11472__delegate(args);
});
G__11472.cljs$core$IFn$_invoke$arity$variadic = G__11472__delegate;
return G__11472;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11475__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11475 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11476__i = 0, G__11476__a = new Array(arguments.length -  0);
while (G__11476__i < G__11476__a.length) {G__11476__a[G__11476__i] = arguments[G__11476__i + 0]; ++G__11476__i;}
  args = new cljs.core.IndexedSeq(G__11476__a,0);
} 
return G__11475__delegate.call(this,args);};
G__11475.cljs$lang$maxFixedArity = 0;
G__11475.cljs$lang$applyTo = (function (arglist__11477){
var args = cljs.core.seq(arglist__11477);
return G__11475__delegate(args);
});
G__11475.cljs$core$IFn$_invoke$arity$variadic = G__11475__delegate;
return G__11475;
})()
;

return null;
});
