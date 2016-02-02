goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__57553__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__57553 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57554__i = 0, G__57554__a = new Array(arguments.length -  0);
while (G__57554__i < G__57554__a.length) {G__57554__a[G__57554__i] = arguments[G__57554__i + 0]; ++G__57554__i;}
  args = new cljs.core.IndexedSeq(G__57554__a,0);
} 
return G__57553__delegate.call(this,args);};
G__57553.cljs$lang$maxFixedArity = 0;
G__57553.cljs$lang$applyTo = (function (arglist__57555){
var args = cljs.core.seq(arglist__57555);
return G__57553__delegate(args);
});
G__57553.cljs$core$IFn$_invoke$arity$variadic = G__57553__delegate;
return G__57553;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__57556__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__57556 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57557__i = 0, G__57557__a = new Array(arguments.length -  0);
while (G__57557__i < G__57557__a.length) {G__57557__a[G__57557__i] = arguments[G__57557__i + 0]; ++G__57557__i;}
  args = new cljs.core.IndexedSeq(G__57557__a,0);
} 
return G__57556__delegate.call(this,args);};
G__57556.cljs$lang$maxFixedArity = 0;
G__57556.cljs$lang$applyTo = (function (arglist__57558){
var args = cljs.core.seq(arglist__57558);
return G__57556__delegate(args);
});
G__57556.cljs$core$IFn$_invoke$arity$variadic = G__57556__delegate;
return G__57556;
})()
;

return null;
});
