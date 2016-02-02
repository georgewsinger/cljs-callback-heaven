goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14763__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14763 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14764__i = 0, G__14764__a = new Array(arguments.length -  0);
while (G__14764__i < G__14764__a.length) {G__14764__a[G__14764__i] = arguments[G__14764__i + 0]; ++G__14764__i;}
  args = new cljs.core.IndexedSeq(G__14764__a,0);
} 
return G__14763__delegate.call(this,args);};
G__14763.cljs$lang$maxFixedArity = 0;
G__14763.cljs$lang$applyTo = (function (arglist__14765){
var args = cljs.core.seq(arglist__14765);
return G__14763__delegate(args);
});
G__14763.cljs$core$IFn$_invoke$arity$variadic = G__14763__delegate;
return G__14763;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14766__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14766 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14767__i = 0, G__14767__a = new Array(arguments.length -  0);
while (G__14767__i < G__14767__a.length) {G__14767__a[G__14767__i] = arguments[G__14767__i + 0]; ++G__14767__i;}
  args = new cljs.core.IndexedSeq(G__14767__a,0);
} 
return G__14766__delegate.call(this,args);};
G__14766.cljs$lang$maxFixedArity = 0;
G__14766.cljs$lang$applyTo = (function (arglist__14768){
var args = cljs.core.seq(arglist__14768);
return G__14766__delegate(args);
});
G__14766.cljs$core$IFn$_invoke$arity$variadic = G__14766__delegate;
return G__14766;
})()
;

return null;
});
