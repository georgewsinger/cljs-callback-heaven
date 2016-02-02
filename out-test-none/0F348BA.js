goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16867__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16867 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16868__i = 0, G__16868__a = new Array(arguments.length -  0);
while (G__16868__i < G__16868__a.length) {G__16868__a[G__16868__i] = arguments[G__16868__i + 0]; ++G__16868__i;}
  args = new cljs.core.IndexedSeq(G__16868__a,0);
} 
return G__16867__delegate.call(this,args);};
G__16867.cljs$lang$maxFixedArity = 0;
G__16867.cljs$lang$applyTo = (function (arglist__16869){
var args = cljs.core.seq(arglist__16869);
return G__16867__delegate(args);
});
G__16867.cljs$core$IFn$_invoke$arity$variadic = G__16867__delegate;
return G__16867;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16870__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16870 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16871__i = 0, G__16871__a = new Array(arguments.length -  0);
while (G__16871__i < G__16871__a.length) {G__16871__a[G__16871__i] = arguments[G__16871__i + 0]; ++G__16871__i;}
  args = new cljs.core.IndexedSeq(G__16871__a,0);
} 
return G__16870__delegate.call(this,args);};
G__16870.cljs$lang$maxFixedArity = 0;
G__16870.cljs$lang$applyTo = (function (arglist__16872){
var args = cljs.core.seq(arglist__16872);
return G__16870__delegate(args);
});
G__16870.cljs$core$IFn$_invoke$arity$variadic = G__16870__delegate;
return G__16870;
})()
;

return null;
});
