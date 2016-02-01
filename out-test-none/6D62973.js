goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13470__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13470 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13471__i = 0, G__13471__a = new Array(arguments.length -  0);
while (G__13471__i < G__13471__a.length) {G__13471__a[G__13471__i] = arguments[G__13471__i + 0]; ++G__13471__i;}
  args = new cljs.core.IndexedSeq(G__13471__a,0);
} 
return G__13470__delegate.call(this,args);};
G__13470.cljs$lang$maxFixedArity = 0;
G__13470.cljs$lang$applyTo = (function (arglist__13472){
var args = cljs.core.seq(arglist__13472);
return G__13470__delegate(args);
});
G__13470.cljs$core$IFn$_invoke$arity$variadic = G__13470__delegate;
return G__13470;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13473__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13473 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13474__i = 0, G__13474__a = new Array(arguments.length -  0);
while (G__13474__i < G__13474__a.length) {G__13474__a[G__13474__i] = arguments[G__13474__i + 0]; ++G__13474__i;}
  args = new cljs.core.IndexedSeq(G__13474__a,0);
} 
return G__13473__delegate.call(this,args);};
G__13473.cljs$lang$maxFixedArity = 0;
G__13473.cljs$lang$applyTo = (function (arglist__13475){
var args = cljs.core.seq(arglist__13475);
return G__13473__delegate(args);
});
G__13473.cljs$core$IFn$_invoke$arity$variadic = G__13473__delegate;
return G__13473;
})()
;

return null;
});
