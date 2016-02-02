goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10994__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10994 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10995__i = 0, G__10995__a = new Array(arguments.length -  0);
while (G__10995__i < G__10995__a.length) {G__10995__a[G__10995__i] = arguments[G__10995__i + 0]; ++G__10995__i;}
  args = new cljs.core.IndexedSeq(G__10995__a,0);
} 
return G__10994__delegate.call(this,args);};
G__10994.cljs$lang$maxFixedArity = 0;
G__10994.cljs$lang$applyTo = (function (arglist__10996){
var args = cljs.core.seq(arglist__10996);
return G__10994__delegate(args);
});
G__10994.cljs$core$IFn$_invoke$arity$variadic = G__10994__delegate;
return G__10994;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10997__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10997 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10998__i = 0, G__10998__a = new Array(arguments.length -  0);
while (G__10998__i < G__10998__a.length) {G__10998__a[G__10998__i] = arguments[G__10998__i + 0]; ++G__10998__i;}
  args = new cljs.core.IndexedSeq(G__10998__a,0);
} 
return G__10997__delegate.call(this,args);};
G__10997.cljs$lang$maxFixedArity = 0;
G__10997.cljs$lang$applyTo = (function (arglist__10999){
var args = cljs.core.seq(arglist__10999);
return G__10997__delegate(args);
});
G__10997.cljs$core$IFn$_invoke$arity$variadic = G__10997__delegate;
return G__10997;
})()
;

return null;
});
