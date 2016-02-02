goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11166__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11166 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11167__i = 0, G__11167__a = new Array(arguments.length -  0);
while (G__11167__i < G__11167__a.length) {G__11167__a[G__11167__i] = arguments[G__11167__i + 0]; ++G__11167__i;}
  args = new cljs.core.IndexedSeq(G__11167__a,0);
} 
return G__11166__delegate.call(this,args);};
G__11166.cljs$lang$maxFixedArity = 0;
G__11166.cljs$lang$applyTo = (function (arglist__11168){
var args = cljs.core.seq(arglist__11168);
return G__11166__delegate(args);
});
G__11166.cljs$core$IFn$_invoke$arity$variadic = G__11166__delegate;
return G__11166;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11169__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11169 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11170__i = 0, G__11170__a = new Array(arguments.length -  0);
while (G__11170__i < G__11170__a.length) {G__11170__a[G__11170__i] = arguments[G__11170__i + 0]; ++G__11170__i;}
  args = new cljs.core.IndexedSeq(G__11170__a,0);
} 
return G__11169__delegate.call(this,args);};
G__11169.cljs$lang$maxFixedArity = 0;
G__11169.cljs$lang$applyTo = (function (arglist__11171){
var args = cljs.core.seq(arglist__11171);
return G__11169__delegate(args);
});
G__11169.cljs$core$IFn$_invoke$arity$variadic = G__11169__delegate;
return G__11169;
})()
;

return null;
});
