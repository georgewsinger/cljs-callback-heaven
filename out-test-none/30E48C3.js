goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__182026__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__182026 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__182027__i = 0, G__182027__a = new Array(arguments.length -  0);
while (G__182027__i < G__182027__a.length) {G__182027__a[G__182027__i] = arguments[G__182027__i + 0]; ++G__182027__i;}
  args = new cljs.core.IndexedSeq(G__182027__a,0);
} 
return G__182026__delegate.call(this,args);};
G__182026.cljs$lang$maxFixedArity = 0;
G__182026.cljs$lang$applyTo = (function (arglist__182028){
var args = cljs.core.seq(arglist__182028);
return G__182026__delegate(args);
});
G__182026.cljs$core$IFn$_invoke$arity$variadic = G__182026__delegate;
return G__182026;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__182029__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__182029 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__182030__i = 0, G__182030__a = new Array(arguments.length -  0);
while (G__182030__i < G__182030__a.length) {G__182030__a[G__182030__i] = arguments[G__182030__i + 0]; ++G__182030__i;}
  args = new cljs.core.IndexedSeq(G__182030__a,0);
} 
return G__182029__delegate.call(this,args);};
G__182029.cljs$lang$maxFixedArity = 0;
G__182029.cljs$lang$applyTo = (function (arglist__182031){
var args = cljs.core.seq(arglist__182031);
return G__182029__delegate(args);
});
G__182029.cljs$core$IFn$_invoke$arity$variadic = G__182029__delegate;
return G__182029;
})()
;

return null;
});
