goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__96165__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__96165 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__96166__i = 0, G__96166__a = new Array(arguments.length -  0);
while (G__96166__i < G__96166__a.length) {G__96166__a[G__96166__i] = arguments[G__96166__i + 0]; ++G__96166__i;}
  args = new cljs.core.IndexedSeq(G__96166__a,0);
} 
return G__96165__delegate.call(this,args);};
G__96165.cljs$lang$maxFixedArity = 0;
G__96165.cljs$lang$applyTo = (function (arglist__96167){
var args = cljs.core.seq(arglist__96167);
return G__96165__delegate(args);
});
G__96165.cljs$core$IFn$_invoke$arity$variadic = G__96165__delegate;
return G__96165;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__96168__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__96168 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__96169__i = 0, G__96169__a = new Array(arguments.length -  0);
while (G__96169__i < G__96169__a.length) {G__96169__a[G__96169__i] = arguments[G__96169__i + 0]; ++G__96169__i;}
  args = new cljs.core.IndexedSeq(G__96169__a,0);
} 
return G__96168__delegate.call(this,args);};
G__96168.cljs$lang$maxFixedArity = 0;
G__96168.cljs$lang$applyTo = (function (arglist__96170){
var args = cljs.core.seq(arglist__96170);
return G__96168__delegate(args);
});
G__96168.cljs$core$IFn$_invoke$arity$variadic = G__96168__delegate;
return G__96168;
})()
;

return null;
});
