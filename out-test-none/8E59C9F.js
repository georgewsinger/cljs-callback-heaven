goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__36195__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__36195 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36196__i = 0, G__36196__a = new Array(arguments.length -  0);
while (G__36196__i < G__36196__a.length) {G__36196__a[G__36196__i] = arguments[G__36196__i + 0]; ++G__36196__i;}
  args = new cljs.core.IndexedSeq(G__36196__a,0);
} 
return G__36195__delegate.call(this,args);};
G__36195.cljs$lang$maxFixedArity = 0;
G__36195.cljs$lang$applyTo = (function (arglist__36197){
var args = cljs.core.seq(arglist__36197);
return G__36195__delegate(args);
});
G__36195.cljs$core$IFn$_invoke$arity$variadic = G__36195__delegate;
return G__36195;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__36198__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__36198 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36199__i = 0, G__36199__a = new Array(arguments.length -  0);
while (G__36199__i < G__36199__a.length) {G__36199__a[G__36199__i] = arguments[G__36199__i + 0]; ++G__36199__i;}
  args = new cljs.core.IndexedSeq(G__36199__a,0);
} 
return G__36198__delegate.call(this,args);};
G__36198.cljs$lang$maxFixedArity = 0;
G__36198.cljs$lang$applyTo = (function (arglist__36200){
var args = cljs.core.seq(arglist__36200);
return G__36198__delegate(args);
});
G__36198.cljs$core$IFn$_invoke$arity$variadic = G__36198__delegate;
return G__36198;
})()
;

return null;
});
