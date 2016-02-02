goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__21162__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__21162 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21163__i = 0, G__21163__a = new Array(arguments.length -  0);
while (G__21163__i < G__21163__a.length) {G__21163__a[G__21163__i] = arguments[G__21163__i + 0]; ++G__21163__i;}
  args = new cljs.core.IndexedSeq(G__21163__a,0);
} 
return G__21162__delegate.call(this,args);};
G__21162.cljs$lang$maxFixedArity = 0;
G__21162.cljs$lang$applyTo = (function (arglist__21164){
var args = cljs.core.seq(arglist__21164);
return G__21162__delegate(args);
});
G__21162.cljs$core$IFn$_invoke$arity$variadic = G__21162__delegate;
return G__21162;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__21165__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__21165 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21166__i = 0, G__21166__a = new Array(arguments.length -  0);
while (G__21166__i < G__21166__a.length) {G__21166__a[G__21166__i] = arguments[G__21166__i + 0]; ++G__21166__i;}
  args = new cljs.core.IndexedSeq(G__21166__a,0);
} 
return G__21165__delegate.call(this,args);};
G__21165.cljs$lang$maxFixedArity = 0;
G__21165.cljs$lang$applyTo = (function (arglist__21167){
var args = cljs.core.seq(arglist__21167);
return G__21165__delegate(args);
});
G__21165.cljs$core$IFn$_invoke$arity$variadic = G__21165__delegate;
return G__21165;
})()
;

return null;
});
