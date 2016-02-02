goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9752__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9752 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9753__i = 0, G__9753__a = new Array(arguments.length -  0);
while (G__9753__i < G__9753__a.length) {G__9753__a[G__9753__i] = arguments[G__9753__i + 0]; ++G__9753__i;}
  args = new cljs.core.IndexedSeq(G__9753__a,0);
} 
return G__9752__delegate.call(this,args);};
G__9752.cljs$lang$maxFixedArity = 0;
G__9752.cljs$lang$applyTo = (function (arglist__9754){
var args = cljs.core.seq(arglist__9754);
return G__9752__delegate(args);
});
G__9752.cljs$core$IFn$_invoke$arity$variadic = G__9752__delegate;
return G__9752;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9755__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9755 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9756__i = 0, G__9756__a = new Array(arguments.length -  0);
while (G__9756__i < G__9756__a.length) {G__9756__a[G__9756__i] = arguments[G__9756__i + 0]; ++G__9756__i;}
  args = new cljs.core.IndexedSeq(G__9756__a,0);
} 
return G__9755__delegate.call(this,args);};
G__9755.cljs$lang$maxFixedArity = 0;
G__9755.cljs$lang$applyTo = (function (arglist__9757){
var args = cljs.core.seq(arglist__9757);
return G__9755__delegate(args);
});
G__9755.cljs$core$IFn$_invoke$arity$variadic = G__9755__delegate;
return G__9755;
})()
;

return null;
});
