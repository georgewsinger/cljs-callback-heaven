goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__89752__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__89752 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__89753__i = 0, G__89753__a = new Array(arguments.length -  0);
while (G__89753__i < G__89753__a.length) {G__89753__a[G__89753__i] = arguments[G__89753__i + 0]; ++G__89753__i;}
  args = new cljs.core.IndexedSeq(G__89753__a,0);
} 
return G__89752__delegate.call(this,args);};
G__89752.cljs$lang$maxFixedArity = 0;
G__89752.cljs$lang$applyTo = (function (arglist__89754){
var args = cljs.core.seq(arglist__89754);
return G__89752__delegate(args);
});
G__89752.cljs$core$IFn$_invoke$arity$variadic = G__89752__delegate;
return G__89752;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__89755__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__89755 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__89756__i = 0, G__89756__a = new Array(arguments.length -  0);
while (G__89756__i < G__89756__a.length) {G__89756__a[G__89756__i] = arguments[G__89756__i + 0]; ++G__89756__i;}
  args = new cljs.core.IndexedSeq(G__89756__a,0);
} 
return G__89755__delegate.call(this,args);};
G__89755.cljs$lang$maxFixedArity = 0;
G__89755.cljs$lang$applyTo = (function (arglist__89757){
var args = cljs.core.seq(arglist__89757);
return G__89755__delegate(args);
});
G__89755.cljs$core$IFn$_invoke$arity$variadic = G__89755__delegate;
return G__89755;
})()
;

return null;
});
