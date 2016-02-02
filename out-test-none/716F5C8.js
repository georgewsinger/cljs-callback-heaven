goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__23820__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__23820 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23821__i = 0, G__23821__a = new Array(arguments.length -  0);
while (G__23821__i < G__23821__a.length) {G__23821__a[G__23821__i] = arguments[G__23821__i + 0]; ++G__23821__i;}
  args = new cljs.core.IndexedSeq(G__23821__a,0);
} 
return G__23820__delegate.call(this,args);};
G__23820.cljs$lang$maxFixedArity = 0;
G__23820.cljs$lang$applyTo = (function (arglist__23822){
var args = cljs.core.seq(arglist__23822);
return G__23820__delegate(args);
});
G__23820.cljs$core$IFn$_invoke$arity$variadic = G__23820__delegate;
return G__23820;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__23823__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__23823 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23824__i = 0, G__23824__a = new Array(arguments.length -  0);
while (G__23824__i < G__23824__a.length) {G__23824__a[G__23824__i] = arguments[G__23824__i + 0]; ++G__23824__i;}
  args = new cljs.core.IndexedSeq(G__23824__a,0);
} 
return G__23823__delegate.call(this,args);};
G__23823.cljs$lang$maxFixedArity = 0;
G__23823.cljs$lang$applyTo = (function (arglist__23825){
var args = cljs.core.seq(arglist__23825);
return G__23823__delegate(args);
});
G__23823.cljs$core$IFn$_invoke$arity$variadic = G__23823__delegate;
return G__23823;
})()
;

return null;
});
