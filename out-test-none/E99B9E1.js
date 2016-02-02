goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14840__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14840 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14841__i = 0, G__14841__a = new Array(arguments.length -  0);
while (G__14841__i < G__14841__a.length) {G__14841__a[G__14841__i] = arguments[G__14841__i + 0]; ++G__14841__i;}
  args = new cljs.core.IndexedSeq(G__14841__a,0);
} 
return G__14840__delegate.call(this,args);};
G__14840.cljs$lang$maxFixedArity = 0;
G__14840.cljs$lang$applyTo = (function (arglist__14842){
var args = cljs.core.seq(arglist__14842);
return G__14840__delegate(args);
});
G__14840.cljs$core$IFn$_invoke$arity$variadic = G__14840__delegate;
return G__14840;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14843__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14843 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14844__i = 0, G__14844__a = new Array(arguments.length -  0);
while (G__14844__i < G__14844__a.length) {G__14844__a[G__14844__i] = arguments[G__14844__i + 0]; ++G__14844__i;}
  args = new cljs.core.IndexedSeq(G__14844__a,0);
} 
return G__14843__delegate.call(this,args);};
G__14843.cljs$lang$maxFixedArity = 0;
G__14843.cljs$lang$applyTo = (function (arglist__14845){
var args = cljs.core.seq(arglist__14845);
return G__14843__delegate(args);
});
G__14843.cljs$core$IFn$_invoke$arity$variadic = G__14843__delegate;
return G__14843;
})()
;

return null;
});
