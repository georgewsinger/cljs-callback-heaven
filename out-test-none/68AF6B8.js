goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__343318__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__343318 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__343319__i = 0, G__343319__a = new Array(arguments.length -  0);
while (G__343319__i < G__343319__a.length) {G__343319__a[G__343319__i] = arguments[G__343319__i + 0]; ++G__343319__i;}
  args = new cljs.core.IndexedSeq(G__343319__a,0);
} 
return G__343318__delegate.call(this,args);};
G__343318.cljs$lang$maxFixedArity = 0;
G__343318.cljs$lang$applyTo = (function (arglist__343320){
var args = cljs.core.seq(arglist__343320);
return G__343318__delegate(args);
});
G__343318.cljs$core$IFn$_invoke$arity$variadic = G__343318__delegate;
return G__343318;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__343321__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__343321 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__343322__i = 0, G__343322__a = new Array(arguments.length -  0);
while (G__343322__i < G__343322__a.length) {G__343322__a[G__343322__i] = arguments[G__343322__i + 0]; ++G__343322__i;}
  args = new cljs.core.IndexedSeq(G__343322__a,0);
} 
return G__343321__delegate.call(this,args);};
G__343321.cljs$lang$maxFixedArity = 0;
G__343321.cljs$lang$applyTo = (function (arglist__343323){
var args = cljs.core.seq(arglist__343323);
return G__343321__delegate(args);
});
G__343321.cljs$core$IFn$_invoke$arity$variadic = G__343321__delegate;
return G__343321;
})()
;

return null;
});
