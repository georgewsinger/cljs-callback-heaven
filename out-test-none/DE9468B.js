goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__20708__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__20708 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20709__i = 0, G__20709__a = new Array(arguments.length -  0);
while (G__20709__i < G__20709__a.length) {G__20709__a[G__20709__i] = arguments[G__20709__i + 0]; ++G__20709__i;}
  args = new cljs.core.IndexedSeq(G__20709__a,0);
} 
return G__20708__delegate.call(this,args);};
G__20708.cljs$lang$maxFixedArity = 0;
G__20708.cljs$lang$applyTo = (function (arglist__20710){
var args = cljs.core.seq(arglist__20710);
return G__20708__delegate(args);
});
G__20708.cljs$core$IFn$_invoke$arity$variadic = G__20708__delegate;
return G__20708;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__20711__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__20711 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20712__i = 0, G__20712__a = new Array(arguments.length -  0);
while (G__20712__i < G__20712__a.length) {G__20712__a[G__20712__i] = arguments[G__20712__i + 0]; ++G__20712__i;}
  args = new cljs.core.IndexedSeq(G__20712__a,0);
} 
return G__20711__delegate.call(this,args);};
G__20711.cljs$lang$maxFixedArity = 0;
G__20711.cljs$lang$applyTo = (function (arglist__20713){
var args = cljs.core.seq(arglist__20713);
return G__20711__delegate(args);
});
G__20711.cljs$core$IFn$_invoke$arity$variadic = G__20711__delegate;
return G__20711;
})()
;

return null;
});
