goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__26720__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__26720 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26721__i = 0, G__26721__a = new Array(arguments.length -  0);
while (G__26721__i < G__26721__a.length) {G__26721__a[G__26721__i] = arguments[G__26721__i + 0]; ++G__26721__i;}
  args = new cljs.core.IndexedSeq(G__26721__a,0);
} 
return G__26720__delegate.call(this,args);};
G__26720.cljs$lang$maxFixedArity = 0;
G__26720.cljs$lang$applyTo = (function (arglist__26722){
var args = cljs.core.seq(arglist__26722);
return G__26720__delegate(args);
});
G__26720.cljs$core$IFn$_invoke$arity$variadic = G__26720__delegate;
return G__26720;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__26723__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__26723 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26724__i = 0, G__26724__a = new Array(arguments.length -  0);
while (G__26724__i < G__26724__a.length) {G__26724__a[G__26724__i] = arguments[G__26724__i + 0]; ++G__26724__i;}
  args = new cljs.core.IndexedSeq(G__26724__a,0);
} 
return G__26723__delegate.call(this,args);};
G__26723.cljs$lang$maxFixedArity = 0;
G__26723.cljs$lang$applyTo = (function (arglist__26725){
var args = cljs.core.seq(arglist__26725);
return G__26723__delegate(args);
});
G__26723.cljs$core$IFn$_invoke$arity$variadic = G__26723__delegate;
return G__26723;
})()
;

return null;
});
