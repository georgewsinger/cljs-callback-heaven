goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__57230__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__57230 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57231__i = 0, G__57231__a = new Array(arguments.length -  0);
while (G__57231__i < G__57231__a.length) {G__57231__a[G__57231__i] = arguments[G__57231__i + 0]; ++G__57231__i;}
  args = new cljs.core.IndexedSeq(G__57231__a,0);
} 
return G__57230__delegate.call(this,args);};
G__57230.cljs$lang$maxFixedArity = 0;
G__57230.cljs$lang$applyTo = (function (arglist__57232){
var args = cljs.core.seq(arglist__57232);
return G__57230__delegate(args);
});
G__57230.cljs$core$IFn$_invoke$arity$variadic = G__57230__delegate;
return G__57230;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__57233__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__57233 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57234__i = 0, G__57234__a = new Array(arguments.length -  0);
while (G__57234__i < G__57234__a.length) {G__57234__a[G__57234__i] = arguments[G__57234__i + 0]; ++G__57234__i;}
  args = new cljs.core.IndexedSeq(G__57234__a,0);
} 
return G__57233__delegate.call(this,args);};
G__57233.cljs$lang$maxFixedArity = 0;
G__57233.cljs$lang$applyTo = (function (arglist__57235){
var args = cljs.core.seq(arglist__57235);
return G__57233__delegate(args);
});
G__57233.cljs$core$IFn$_invoke$arity$variadic = G__57233__delegate;
return G__57233;
})()
;

return null;
});
