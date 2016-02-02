goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14818__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14818 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14819__i = 0, G__14819__a = new Array(arguments.length -  0);
while (G__14819__i < G__14819__a.length) {G__14819__a[G__14819__i] = arguments[G__14819__i + 0]; ++G__14819__i;}
  args = new cljs.core.IndexedSeq(G__14819__a,0);
} 
return G__14818__delegate.call(this,args);};
G__14818.cljs$lang$maxFixedArity = 0;
G__14818.cljs$lang$applyTo = (function (arglist__14820){
var args = cljs.core.seq(arglist__14820);
return G__14818__delegate(args);
});
G__14818.cljs$core$IFn$_invoke$arity$variadic = G__14818__delegate;
return G__14818;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14821__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14821 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14822__i = 0, G__14822__a = new Array(arguments.length -  0);
while (G__14822__i < G__14822__a.length) {G__14822__a[G__14822__i] = arguments[G__14822__i + 0]; ++G__14822__i;}
  args = new cljs.core.IndexedSeq(G__14822__a,0);
} 
return G__14821__delegate.call(this,args);};
G__14821.cljs$lang$maxFixedArity = 0;
G__14821.cljs$lang$applyTo = (function (arglist__14823){
var args = cljs.core.seq(arglist__14823);
return G__14821__delegate(args);
});
G__14821.cljs$core$IFn$_invoke$arity$variadic = G__14821__delegate;
return G__14821;
})()
;

return null;
});