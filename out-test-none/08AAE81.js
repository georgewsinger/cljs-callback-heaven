goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__33752__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__33752 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33753__i = 0, G__33753__a = new Array(arguments.length -  0);
while (G__33753__i < G__33753__a.length) {G__33753__a[G__33753__i] = arguments[G__33753__i + 0]; ++G__33753__i;}
  args = new cljs.core.IndexedSeq(G__33753__a,0);
} 
return G__33752__delegate.call(this,args);};
G__33752.cljs$lang$maxFixedArity = 0;
G__33752.cljs$lang$applyTo = (function (arglist__33754){
var args = cljs.core.seq(arglist__33754);
return G__33752__delegate(args);
});
G__33752.cljs$core$IFn$_invoke$arity$variadic = G__33752__delegate;
return G__33752;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__33755__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__33755 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33756__i = 0, G__33756__a = new Array(arguments.length -  0);
while (G__33756__i < G__33756__a.length) {G__33756__a[G__33756__i] = arguments[G__33756__i + 0]; ++G__33756__i;}
  args = new cljs.core.IndexedSeq(G__33756__a,0);
} 
return G__33755__delegate.call(this,args);};
G__33755.cljs$lang$maxFixedArity = 0;
G__33755.cljs$lang$applyTo = (function (arglist__33757){
var args = cljs.core.seq(arglist__33757);
return G__33755__delegate(args);
});
G__33755.cljs$core$IFn$_invoke$arity$variadic = G__33755__delegate;
return G__33755;
})()
;

return null;
});
