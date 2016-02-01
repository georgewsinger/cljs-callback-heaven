goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16487__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16487 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16488__i = 0, G__16488__a = new Array(arguments.length -  0);
while (G__16488__i < G__16488__a.length) {G__16488__a[G__16488__i] = arguments[G__16488__i + 0]; ++G__16488__i;}
  args = new cljs.core.IndexedSeq(G__16488__a,0);
} 
return G__16487__delegate.call(this,args);};
G__16487.cljs$lang$maxFixedArity = 0;
G__16487.cljs$lang$applyTo = (function (arglist__16489){
var args = cljs.core.seq(arglist__16489);
return G__16487__delegate(args);
});
G__16487.cljs$core$IFn$_invoke$arity$variadic = G__16487__delegate;
return G__16487;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16490__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16490 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16491__i = 0, G__16491__a = new Array(arguments.length -  0);
while (G__16491__i < G__16491__a.length) {G__16491__a[G__16491__i] = arguments[G__16491__i + 0]; ++G__16491__i;}
  args = new cljs.core.IndexedSeq(G__16491__a,0);
} 
return G__16490__delegate.call(this,args);};
G__16490.cljs$lang$maxFixedArity = 0;
G__16490.cljs$lang$applyTo = (function (arglist__16492){
var args = cljs.core.seq(arglist__16492);
return G__16490__delegate(args);
});
G__16490.cljs$core$IFn$_invoke$arity$variadic = G__16490__delegate;
return G__16490;
})()
;

return null;
});
