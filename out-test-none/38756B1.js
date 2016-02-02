goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__32403__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__32403 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32404__i = 0, G__32404__a = new Array(arguments.length -  0);
while (G__32404__i < G__32404__a.length) {G__32404__a[G__32404__i] = arguments[G__32404__i + 0]; ++G__32404__i;}
  args = new cljs.core.IndexedSeq(G__32404__a,0);
} 
return G__32403__delegate.call(this,args);};
G__32403.cljs$lang$maxFixedArity = 0;
G__32403.cljs$lang$applyTo = (function (arglist__32405){
var args = cljs.core.seq(arglist__32405);
return G__32403__delegate(args);
});
G__32403.cljs$core$IFn$_invoke$arity$variadic = G__32403__delegate;
return G__32403;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__32406__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__32406 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32407__i = 0, G__32407__a = new Array(arguments.length -  0);
while (G__32407__i < G__32407__a.length) {G__32407__a[G__32407__i] = arguments[G__32407__i + 0]; ++G__32407__i;}
  args = new cljs.core.IndexedSeq(G__32407__a,0);
} 
return G__32406__delegate.call(this,args);};
G__32406.cljs$lang$maxFixedArity = 0;
G__32406.cljs$lang$applyTo = (function (arglist__32408){
var args = cljs.core.seq(arglist__32408);
return G__32406__delegate(args);
});
G__32406.cljs$core$IFn$_invoke$arity$variadic = G__32406__delegate;
return G__32406;
})()
;

return null;
});
