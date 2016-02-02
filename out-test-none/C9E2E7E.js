goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14994__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14994 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14995__i = 0, G__14995__a = new Array(arguments.length -  0);
while (G__14995__i < G__14995__a.length) {G__14995__a[G__14995__i] = arguments[G__14995__i + 0]; ++G__14995__i;}
  args = new cljs.core.IndexedSeq(G__14995__a,0);
} 
return G__14994__delegate.call(this,args);};
G__14994.cljs$lang$maxFixedArity = 0;
G__14994.cljs$lang$applyTo = (function (arglist__14996){
var args = cljs.core.seq(arglist__14996);
return G__14994__delegate(args);
});
G__14994.cljs$core$IFn$_invoke$arity$variadic = G__14994__delegate;
return G__14994;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14997__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14997 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14998__i = 0, G__14998__a = new Array(arguments.length -  0);
while (G__14998__i < G__14998__a.length) {G__14998__a[G__14998__i] = arguments[G__14998__i + 0]; ++G__14998__i;}
  args = new cljs.core.IndexedSeq(G__14998__a,0);
} 
return G__14997__delegate.call(this,args);};
G__14997.cljs$lang$maxFixedArity = 0;
G__14997.cljs$lang$applyTo = (function (arglist__14999){
var args = cljs.core.seq(arglist__14999);
return G__14997__delegate(args);
});
G__14997.cljs$core$IFn$_invoke$arity$variadic = G__14997__delegate;
return G__14997;
})()
;

return null;
});
