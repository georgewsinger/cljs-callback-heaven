goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15016__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15016 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15017__i = 0, G__15017__a = new Array(arguments.length -  0);
while (G__15017__i < G__15017__a.length) {G__15017__a[G__15017__i] = arguments[G__15017__i + 0]; ++G__15017__i;}
  args = new cljs.core.IndexedSeq(G__15017__a,0);
} 
return G__15016__delegate.call(this,args);};
G__15016.cljs$lang$maxFixedArity = 0;
G__15016.cljs$lang$applyTo = (function (arglist__15018){
var args = cljs.core.seq(arglist__15018);
return G__15016__delegate(args);
});
G__15016.cljs$core$IFn$_invoke$arity$variadic = G__15016__delegate;
return G__15016;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15019__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15019 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15020__i = 0, G__15020__a = new Array(arguments.length -  0);
while (G__15020__i < G__15020__a.length) {G__15020__a[G__15020__i] = arguments[G__15020__i + 0]; ++G__15020__i;}
  args = new cljs.core.IndexedSeq(G__15020__a,0);
} 
return G__15019__delegate.call(this,args);};
G__15019.cljs$lang$maxFixedArity = 0;
G__15019.cljs$lang$applyTo = (function (arglist__15021){
var args = cljs.core.seq(arglist__15021);
return G__15019__delegate(args);
});
G__15019.cljs$core$IFn$_invoke$arity$variadic = G__15019__delegate;
return G__15019;
})()
;

return null;
});
