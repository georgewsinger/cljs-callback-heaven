goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9941__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9941 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9942__i = 0, G__9942__a = new Array(arguments.length -  0);
while (G__9942__i < G__9942__a.length) {G__9942__a[G__9942__i] = arguments[G__9942__i + 0]; ++G__9942__i;}
  args = new cljs.core.IndexedSeq(G__9942__a,0);
} 
return G__9941__delegate.call(this,args);};
G__9941.cljs$lang$maxFixedArity = 0;
G__9941.cljs$lang$applyTo = (function (arglist__9943){
var args = cljs.core.seq(arglist__9943);
return G__9941__delegate(args);
});
G__9941.cljs$core$IFn$_invoke$arity$variadic = G__9941__delegate;
return G__9941;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9944__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9944 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9945__i = 0, G__9945__a = new Array(arguments.length -  0);
while (G__9945__i < G__9945__a.length) {G__9945__a[G__9945__i] = arguments[G__9945__i + 0]; ++G__9945__i;}
  args = new cljs.core.IndexedSeq(G__9945__a,0);
} 
return G__9944__delegate.call(this,args);};
G__9944.cljs$lang$maxFixedArity = 0;
G__9944.cljs$lang$applyTo = (function (arglist__9946){
var args = cljs.core.seq(arglist__9946);
return G__9944__delegate(args);
});
G__9944.cljs$core$IFn$_invoke$arity$variadic = G__9944__delegate;
return G__9944;
})()
;

return null;
});
