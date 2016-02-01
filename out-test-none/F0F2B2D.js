goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15677__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15677 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15678__i = 0, G__15678__a = new Array(arguments.length -  0);
while (G__15678__i < G__15678__a.length) {G__15678__a[G__15678__i] = arguments[G__15678__i + 0]; ++G__15678__i;}
  args = new cljs.core.IndexedSeq(G__15678__a,0);
} 
return G__15677__delegate.call(this,args);};
G__15677.cljs$lang$maxFixedArity = 0;
G__15677.cljs$lang$applyTo = (function (arglist__15679){
var args = cljs.core.seq(arglist__15679);
return G__15677__delegate(args);
});
G__15677.cljs$core$IFn$_invoke$arity$variadic = G__15677__delegate;
return G__15677;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15680__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15680 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15681__i = 0, G__15681__a = new Array(arguments.length -  0);
while (G__15681__i < G__15681__a.length) {G__15681__a[G__15681__i] = arguments[G__15681__i + 0]; ++G__15681__i;}
  args = new cljs.core.IndexedSeq(G__15681__a,0);
} 
return G__15680__delegate.call(this,args);};
G__15680.cljs$lang$maxFixedArity = 0;
G__15680.cljs$lang$applyTo = (function (arglist__15682){
var args = cljs.core.seq(arglist__15682);
return G__15680__delegate(args);
});
G__15680.cljs$core$IFn$_invoke$arity$variadic = G__15680__delegate;
return G__15680;
})()
;

return null;
});
