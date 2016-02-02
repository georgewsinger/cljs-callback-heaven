goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14730__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14730 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14731__i = 0, G__14731__a = new Array(arguments.length -  0);
while (G__14731__i < G__14731__a.length) {G__14731__a[G__14731__i] = arguments[G__14731__i + 0]; ++G__14731__i;}
  args = new cljs.core.IndexedSeq(G__14731__a,0);
} 
return G__14730__delegate.call(this,args);};
G__14730.cljs$lang$maxFixedArity = 0;
G__14730.cljs$lang$applyTo = (function (arglist__14732){
var args = cljs.core.seq(arglist__14732);
return G__14730__delegate(args);
});
G__14730.cljs$core$IFn$_invoke$arity$variadic = G__14730__delegate;
return G__14730;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14733__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14733 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14734__i = 0, G__14734__a = new Array(arguments.length -  0);
while (G__14734__i < G__14734__a.length) {G__14734__a[G__14734__i] = arguments[G__14734__i + 0]; ++G__14734__i;}
  args = new cljs.core.IndexedSeq(G__14734__a,0);
} 
return G__14733__delegate.call(this,args);};
G__14733.cljs$lang$maxFixedArity = 0;
G__14733.cljs$lang$applyTo = (function (arglist__14735){
var args = cljs.core.seq(arglist__14735);
return G__14733__delegate(args);
});
G__14733.cljs$core$IFn$_invoke$arity$variadic = G__14733__delegate;
return G__14733;
})()
;

return null;
});
