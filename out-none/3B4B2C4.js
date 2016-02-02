goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__45992__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__45992 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45993__i = 0, G__45993__a = new Array(arguments.length -  0);
while (G__45993__i < G__45993__a.length) {G__45993__a[G__45993__i] = arguments[G__45993__i + 0]; ++G__45993__i;}
  args = new cljs.core.IndexedSeq(G__45993__a,0);
} 
return G__45992__delegate.call(this,args);};
G__45992.cljs$lang$maxFixedArity = 0;
G__45992.cljs$lang$applyTo = (function (arglist__45994){
var args = cljs.core.seq(arglist__45994);
return G__45992__delegate(args);
});
G__45992.cljs$core$IFn$_invoke$arity$variadic = G__45992__delegate;
return G__45992;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__45995__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__45995 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45996__i = 0, G__45996__a = new Array(arguments.length -  0);
while (G__45996__i < G__45996__a.length) {G__45996__a[G__45996__i] = arguments[G__45996__i + 0]; ++G__45996__i;}
  args = new cljs.core.IndexedSeq(G__45996__a,0);
} 
return G__45995__delegate.call(this,args);};
G__45995.cljs$lang$maxFixedArity = 0;
G__45995.cljs$lang$applyTo = (function (arglist__45997){
var args = cljs.core.seq(arglist__45997);
return G__45995__delegate(args);
});
G__45995.cljs$core$IFn$_invoke$arity$variadic = G__45995__delegate;
return G__45995;
})()
;

return null;
});