goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__39992__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__39992 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39993__i = 0, G__39993__a = new Array(arguments.length -  0);
while (G__39993__i < G__39993__a.length) {G__39993__a[G__39993__i] = arguments[G__39993__i + 0]; ++G__39993__i;}
  args = new cljs.core.IndexedSeq(G__39993__a,0);
} 
return G__39992__delegate.call(this,args);};
G__39992.cljs$lang$maxFixedArity = 0;
G__39992.cljs$lang$applyTo = (function (arglist__39994){
var args = cljs.core.seq(arglist__39994);
return G__39992__delegate(args);
});
G__39992.cljs$core$IFn$_invoke$arity$variadic = G__39992__delegate;
return G__39992;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__39995__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__39995 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39996__i = 0, G__39996__a = new Array(arguments.length -  0);
while (G__39996__i < G__39996__a.length) {G__39996__a[G__39996__i] = arguments[G__39996__i + 0]; ++G__39996__i;}
  args = new cljs.core.IndexedSeq(G__39996__a,0);
} 
return G__39995__delegate.call(this,args);};
G__39995.cljs$lang$maxFixedArity = 0;
G__39995.cljs$lang$applyTo = (function (arglist__39997){
var args = cljs.core.seq(arglist__39997);
return G__39995__delegate(args);
});
G__39995.cljs$core$IFn$_invoke$arity$variadic = G__39995__delegate;
return G__39995;
})()
;

return null;
});
