goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14709__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14709 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14710__i = 0, G__14710__a = new Array(arguments.length -  0);
while (G__14710__i < G__14710__a.length) {G__14710__a[G__14710__i] = arguments[G__14710__i + 0]; ++G__14710__i;}
  args = new cljs.core.IndexedSeq(G__14710__a,0);
} 
return G__14709__delegate.call(this,args);};
G__14709.cljs$lang$maxFixedArity = 0;
G__14709.cljs$lang$applyTo = (function (arglist__14711){
var args = cljs.core.seq(arglist__14711);
return G__14709__delegate(args);
});
G__14709.cljs$core$IFn$_invoke$arity$variadic = G__14709__delegate;
return G__14709;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14712__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14712 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14713__i = 0, G__14713__a = new Array(arguments.length -  0);
while (G__14713__i < G__14713__a.length) {G__14713__a[G__14713__i] = arguments[G__14713__i + 0]; ++G__14713__i;}
  args = new cljs.core.IndexedSeq(G__14713__a,0);
} 
return G__14712__delegate.call(this,args);};
G__14712.cljs$lang$maxFixedArity = 0;
G__14712.cljs$lang$applyTo = (function (arglist__14714){
var args = cljs.core.seq(arglist__14714);
return G__14712__delegate(args);
});
G__14712.cljs$core$IFn$_invoke$arity$variadic = G__14712__delegate;
return G__14712;
})()
;

return null;
});
