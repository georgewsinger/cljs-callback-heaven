goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__30287__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__30287 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30288__i = 0, G__30288__a = new Array(arguments.length -  0);
while (G__30288__i < G__30288__a.length) {G__30288__a[G__30288__i] = arguments[G__30288__i + 0]; ++G__30288__i;}
  args = new cljs.core.IndexedSeq(G__30288__a,0);
} 
return G__30287__delegate.call(this,args);};
G__30287.cljs$lang$maxFixedArity = 0;
G__30287.cljs$lang$applyTo = (function (arglist__30289){
var args = cljs.core.seq(arglist__30289);
return G__30287__delegate(args);
});
G__30287.cljs$core$IFn$_invoke$arity$variadic = G__30287__delegate;
return G__30287;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__30290__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__30290 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30291__i = 0, G__30291__a = new Array(arguments.length -  0);
while (G__30291__i < G__30291__a.length) {G__30291__a[G__30291__i] = arguments[G__30291__i + 0]; ++G__30291__i;}
  args = new cljs.core.IndexedSeq(G__30291__a,0);
} 
return G__30290__delegate.call(this,args);};
G__30290.cljs$lang$maxFixedArity = 0;
G__30290.cljs$lang$applyTo = (function (arglist__30292){
var args = cljs.core.seq(arglist__30292);
return G__30290__delegate(args);
});
G__30290.cljs$core$IFn$_invoke$arity$variadic = G__30290__delegate;
return G__30290;
})()
;

return null;
});
