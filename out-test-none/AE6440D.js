goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14906__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14906 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14907__i = 0, G__14907__a = new Array(arguments.length -  0);
while (G__14907__i < G__14907__a.length) {G__14907__a[G__14907__i] = arguments[G__14907__i + 0]; ++G__14907__i;}
  args = new cljs.core.IndexedSeq(G__14907__a,0);
} 
return G__14906__delegate.call(this,args);};
G__14906.cljs$lang$maxFixedArity = 0;
G__14906.cljs$lang$applyTo = (function (arglist__14908){
var args = cljs.core.seq(arglist__14908);
return G__14906__delegate(args);
});
G__14906.cljs$core$IFn$_invoke$arity$variadic = G__14906__delegate;
return G__14906;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14909__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14909 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14910__i = 0, G__14910__a = new Array(arguments.length -  0);
while (G__14910__i < G__14910__a.length) {G__14910__a[G__14910__i] = arguments[G__14910__i + 0]; ++G__14910__i;}
  args = new cljs.core.IndexedSeq(G__14910__a,0);
} 
return G__14909__delegate.call(this,args);};
G__14909.cljs$lang$maxFixedArity = 0;
G__14909.cljs$lang$applyTo = (function (arglist__14911){
var args = cljs.core.seq(arglist__14911);
return G__14909__delegate(args);
});
G__14909.cljs$core$IFn$_invoke$arity$variadic = G__14909__delegate;
return G__14909;
})()
;

return null;
});
