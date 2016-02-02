goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__19783__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__19783 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19784__i = 0, G__19784__a = new Array(arguments.length -  0);
while (G__19784__i < G__19784__a.length) {G__19784__a[G__19784__i] = arguments[G__19784__i + 0]; ++G__19784__i;}
  args = new cljs.core.IndexedSeq(G__19784__a,0);
} 
return G__19783__delegate.call(this,args);};
G__19783.cljs$lang$maxFixedArity = 0;
G__19783.cljs$lang$applyTo = (function (arglist__19785){
var args = cljs.core.seq(arglist__19785);
return G__19783__delegate(args);
});
G__19783.cljs$core$IFn$_invoke$arity$variadic = G__19783__delegate;
return G__19783;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__19786__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__19786 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19787__i = 0, G__19787__a = new Array(arguments.length -  0);
while (G__19787__i < G__19787__a.length) {G__19787__a[G__19787__i] = arguments[G__19787__i + 0]; ++G__19787__i;}
  args = new cljs.core.IndexedSeq(G__19787__a,0);
} 
return G__19786__delegate.call(this,args);};
G__19786.cljs$lang$maxFixedArity = 0;
G__19786.cljs$lang$applyTo = (function (arglist__19788){
var args = cljs.core.seq(arglist__19788);
return G__19786__delegate(args);
});
G__19786.cljs$core$IFn$_invoke$arity$variadic = G__19786__delegate;
return G__19786;
})()
;

return null;
});
