goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9787__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9787 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9788__i = 0, G__9788__a = new Array(arguments.length -  0);
while (G__9788__i < G__9788__a.length) {G__9788__a[G__9788__i] = arguments[G__9788__i + 0]; ++G__9788__i;}
  args = new cljs.core.IndexedSeq(G__9788__a,0);
} 
return G__9787__delegate.call(this,args);};
G__9787.cljs$lang$maxFixedArity = 0;
G__9787.cljs$lang$applyTo = (function (arglist__9789){
var args = cljs.core.seq(arglist__9789);
return G__9787__delegate(args);
});
G__9787.cljs$core$IFn$_invoke$arity$variadic = G__9787__delegate;
return G__9787;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9790__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9790 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9791__i = 0, G__9791__a = new Array(arguments.length -  0);
while (G__9791__i < G__9791__a.length) {G__9791__a[G__9791__i] = arguments[G__9791__i + 0]; ++G__9791__i;}
  args = new cljs.core.IndexedSeq(G__9791__a,0);
} 
return G__9790__delegate.call(this,args);};
G__9790.cljs$lang$maxFixedArity = 0;
G__9790.cljs$lang$applyTo = (function (arglist__9792){
var args = cljs.core.seq(arglist__9792);
return G__9790__delegate(args);
});
G__9790.cljs$core$IFn$_invoke$arity$variadic = G__9790__delegate;
return G__9790;
})()
;

return null;
});
