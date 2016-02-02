goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__20719__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__20719 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20720__i = 0, G__20720__a = new Array(arguments.length -  0);
while (G__20720__i < G__20720__a.length) {G__20720__a[G__20720__i] = arguments[G__20720__i + 0]; ++G__20720__i;}
  args = new cljs.core.IndexedSeq(G__20720__a,0);
} 
return G__20719__delegate.call(this,args);};
G__20719.cljs$lang$maxFixedArity = 0;
G__20719.cljs$lang$applyTo = (function (arglist__20721){
var args = cljs.core.seq(arglist__20721);
return G__20719__delegate(args);
});
G__20719.cljs$core$IFn$_invoke$arity$variadic = G__20719__delegate;
return G__20719;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__20722__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__20722 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20723__i = 0, G__20723__a = new Array(arguments.length -  0);
while (G__20723__i < G__20723__a.length) {G__20723__a[G__20723__i] = arguments[G__20723__i + 0]; ++G__20723__i;}
  args = new cljs.core.IndexedSeq(G__20723__a,0);
} 
return G__20722__delegate.call(this,args);};
G__20722.cljs$lang$maxFixedArity = 0;
G__20722.cljs$lang$applyTo = (function (arglist__20724){
var args = cljs.core.seq(arglist__20724);
return G__20722__delegate(args);
});
G__20722.cljs$core$IFn$_invoke$arity$variadic = G__20722__delegate;
return G__20722;
})()
;

return null;
});
