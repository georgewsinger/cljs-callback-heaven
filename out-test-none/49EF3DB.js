goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14752__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14752 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14753__i = 0, G__14753__a = new Array(arguments.length -  0);
while (G__14753__i < G__14753__a.length) {G__14753__a[G__14753__i] = arguments[G__14753__i + 0]; ++G__14753__i;}
  args = new cljs.core.IndexedSeq(G__14753__a,0);
} 
return G__14752__delegate.call(this,args);};
G__14752.cljs$lang$maxFixedArity = 0;
G__14752.cljs$lang$applyTo = (function (arglist__14754){
var args = cljs.core.seq(arglist__14754);
return G__14752__delegate(args);
});
G__14752.cljs$core$IFn$_invoke$arity$variadic = G__14752__delegate;
return G__14752;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14755__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14755 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14756__i = 0, G__14756__a = new Array(arguments.length -  0);
while (G__14756__i < G__14756__a.length) {G__14756__a[G__14756__i] = arguments[G__14756__i + 0]; ++G__14756__i;}
  args = new cljs.core.IndexedSeq(G__14756__a,0);
} 
return G__14755__delegate.call(this,args);};
G__14755.cljs$lang$maxFixedArity = 0;
G__14755.cljs$lang$applyTo = (function (arglist__14757){
var args = cljs.core.seq(arglist__14757);
return G__14755__delegate(args);
});
G__14755.cljs$core$IFn$_invoke$arity$variadic = G__14755__delegate;
return G__14755;
})()
;

return null;
});
