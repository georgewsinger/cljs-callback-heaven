goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__36792__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__36792 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36793__i = 0, G__36793__a = new Array(arguments.length -  0);
while (G__36793__i < G__36793__a.length) {G__36793__a[G__36793__i] = arguments[G__36793__i + 0]; ++G__36793__i;}
  args = new cljs.core.IndexedSeq(G__36793__a,0);
} 
return G__36792__delegate.call(this,args);};
G__36792.cljs$lang$maxFixedArity = 0;
G__36792.cljs$lang$applyTo = (function (arglist__36794){
var args = cljs.core.seq(arglist__36794);
return G__36792__delegate(args);
});
G__36792.cljs$core$IFn$_invoke$arity$variadic = G__36792__delegate;
return G__36792;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__36795__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__36795 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36796__i = 0, G__36796__a = new Array(arguments.length -  0);
while (G__36796__i < G__36796__a.length) {G__36796__a[G__36796__i] = arguments[G__36796__i + 0]; ++G__36796__i;}
  args = new cljs.core.IndexedSeq(G__36796__a,0);
} 
return G__36795__delegate.call(this,args);};
G__36795.cljs$lang$maxFixedArity = 0;
G__36795.cljs$lang$applyTo = (function (arglist__36797){
var args = cljs.core.seq(arglist__36797);
return G__36795__delegate(args);
});
G__36795.cljs$core$IFn$_invoke$arity$variadic = G__36795__delegate;
return G__36795;
})()
;

return null;
});
