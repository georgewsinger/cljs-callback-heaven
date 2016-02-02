goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__35434__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__35434 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35435__i = 0, G__35435__a = new Array(arguments.length -  0);
while (G__35435__i < G__35435__a.length) {G__35435__a[G__35435__i] = arguments[G__35435__i + 0]; ++G__35435__i;}
  args = new cljs.core.IndexedSeq(G__35435__a,0);
} 
return G__35434__delegate.call(this,args);};
G__35434.cljs$lang$maxFixedArity = 0;
G__35434.cljs$lang$applyTo = (function (arglist__35436){
var args = cljs.core.seq(arglist__35436);
return G__35434__delegate(args);
});
G__35434.cljs$core$IFn$_invoke$arity$variadic = G__35434__delegate;
return G__35434;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__35437__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__35437 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35438__i = 0, G__35438__a = new Array(arguments.length -  0);
while (G__35438__i < G__35438__a.length) {G__35438__a[G__35438__i] = arguments[G__35438__i + 0]; ++G__35438__i;}
  args = new cljs.core.IndexedSeq(G__35438__a,0);
} 
return G__35437__delegate.call(this,args);};
G__35437.cljs$lang$maxFixedArity = 0;
G__35437.cljs$lang$applyTo = (function (arglist__35439){
var args = cljs.core.seq(arglist__35439);
return G__35437__delegate(args);
});
G__35437.cljs$core$IFn$_invoke$arity$variadic = G__35437__delegate;
return G__35437;
})()
;

return null;
});
