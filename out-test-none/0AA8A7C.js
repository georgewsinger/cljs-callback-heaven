goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16266__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16266 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16267__i = 0, G__16267__a = new Array(arguments.length -  0);
while (G__16267__i < G__16267__a.length) {G__16267__a[G__16267__i] = arguments[G__16267__i + 0]; ++G__16267__i;}
  args = new cljs.core.IndexedSeq(G__16267__a,0);
} 
return G__16266__delegate.call(this,args);};
G__16266.cljs$lang$maxFixedArity = 0;
G__16266.cljs$lang$applyTo = (function (arglist__16268){
var args = cljs.core.seq(arglist__16268);
return G__16266__delegate(args);
});
G__16266.cljs$core$IFn$_invoke$arity$variadic = G__16266__delegate;
return G__16266;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16269__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16269 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16270__i = 0, G__16270__a = new Array(arguments.length -  0);
while (G__16270__i < G__16270__a.length) {G__16270__a[G__16270__i] = arguments[G__16270__i + 0]; ++G__16270__i;}
  args = new cljs.core.IndexedSeq(G__16270__a,0);
} 
return G__16269__delegate.call(this,args);};
G__16269.cljs$lang$maxFixedArity = 0;
G__16269.cljs$lang$applyTo = (function (arglist__16271){
var args = cljs.core.seq(arglist__16271);
return G__16269__delegate(args);
});
G__16269.cljs$core$IFn$_invoke$arity$variadic = G__16269__delegate;
return G__16269;
})()
;

return null;
});
