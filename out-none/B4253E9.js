goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15242__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15242 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15243__i = 0, G__15243__a = new Array(arguments.length -  0);
while (G__15243__i < G__15243__a.length) {G__15243__a[G__15243__i] = arguments[G__15243__i + 0]; ++G__15243__i;}
  args = new cljs.core.IndexedSeq(G__15243__a,0);
} 
return G__15242__delegate.call(this,args);};
G__15242.cljs$lang$maxFixedArity = 0;
G__15242.cljs$lang$applyTo = (function (arglist__15244){
var args = cljs.core.seq(arglist__15244);
return G__15242__delegate(args);
});
G__15242.cljs$core$IFn$_invoke$arity$variadic = G__15242__delegate;
return G__15242;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15245__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15245 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15246__i = 0, G__15246__a = new Array(arguments.length -  0);
while (G__15246__i < G__15246__a.length) {G__15246__a[G__15246__i] = arguments[G__15246__i + 0]; ++G__15246__i;}
  args = new cljs.core.IndexedSeq(G__15246__a,0);
} 
return G__15245__delegate.call(this,args);};
G__15245.cljs$lang$maxFixedArity = 0;
G__15245.cljs$lang$applyTo = (function (arglist__15247){
var args = cljs.core.seq(arglist__15247);
return G__15245__delegate(args);
});
G__15245.cljs$core$IFn$_invoke$arity$variadic = G__15245__delegate;
return G__15245;
})()
;

return null;
});
