goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__83328__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__83328 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__83329__i = 0, G__83329__a = new Array(arguments.length -  0);
while (G__83329__i < G__83329__a.length) {G__83329__a[G__83329__i] = arguments[G__83329__i + 0]; ++G__83329__i;}
  args = new cljs.core.IndexedSeq(G__83329__a,0);
} 
return G__83328__delegate.call(this,args);};
G__83328.cljs$lang$maxFixedArity = 0;
G__83328.cljs$lang$applyTo = (function (arglist__83330){
var args = cljs.core.seq(arglist__83330);
return G__83328__delegate(args);
});
G__83328.cljs$core$IFn$_invoke$arity$variadic = G__83328__delegate;
return G__83328;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__83331__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__83331 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__83332__i = 0, G__83332__a = new Array(arguments.length -  0);
while (G__83332__i < G__83332__a.length) {G__83332__a[G__83332__i] = arguments[G__83332__i + 0]; ++G__83332__i;}
  args = new cljs.core.IndexedSeq(G__83332__a,0);
} 
return G__83331__delegate.call(this,args);};
G__83331.cljs$lang$maxFixedArity = 0;
G__83331.cljs$lang$applyTo = (function (arglist__83333){
var args = cljs.core.seq(arglist__83333);
return G__83331__delegate(args);
});
G__83331.cljs$core$IFn$_invoke$arity$variadic = G__83331__delegate;
return G__83331;
})()
;

return null;
});
