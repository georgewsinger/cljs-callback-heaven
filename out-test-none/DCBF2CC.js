goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__105801__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__105801 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__105802__i = 0, G__105802__a = new Array(arguments.length -  0);
while (G__105802__i < G__105802__a.length) {G__105802__a[G__105802__i] = arguments[G__105802__i + 0]; ++G__105802__i;}
  args = new cljs.core.IndexedSeq(G__105802__a,0);
} 
return G__105801__delegate.call(this,args);};
G__105801.cljs$lang$maxFixedArity = 0;
G__105801.cljs$lang$applyTo = (function (arglist__105803){
var args = cljs.core.seq(arglist__105803);
return G__105801__delegate(args);
});
G__105801.cljs$core$IFn$_invoke$arity$variadic = G__105801__delegate;
return G__105801;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__105804__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__105804 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__105805__i = 0, G__105805__a = new Array(arguments.length -  0);
while (G__105805__i < G__105805__a.length) {G__105805__a[G__105805__i] = arguments[G__105805__i + 0]; ++G__105805__i;}
  args = new cljs.core.IndexedSeq(G__105805__a,0);
} 
return G__105804__delegate.call(this,args);};
G__105804.cljs$lang$maxFixedArity = 0;
G__105804.cljs$lang$applyTo = (function (arglist__105806){
var args = cljs.core.seq(arglist__105806);
return G__105804__delegate(args);
});
G__105804.cljs$core$IFn$_invoke$arity$variadic = G__105804__delegate;
return G__105804;
})()
;

return null;
});
