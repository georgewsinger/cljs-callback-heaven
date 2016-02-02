goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__28342__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__28342 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28343__i = 0, G__28343__a = new Array(arguments.length -  0);
while (G__28343__i < G__28343__a.length) {G__28343__a[G__28343__i] = arguments[G__28343__i + 0]; ++G__28343__i;}
  args = new cljs.core.IndexedSeq(G__28343__a,0);
} 
return G__28342__delegate.call(this,args);};
G__28342.cljs$lang$maxFixedArity = 0;
G__28342.cljs$lang$applyTo = (function (arglist__28344){
var args = cljs.core.seq(arglist__28344);
return G__28342__delegate(args);
});
G__28342.cljs$core$IFn$_invoke$arity$variadic = G__28342__delegate;
return G__28342;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__28345__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__28345 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28346__i = 0, G__28346__a = new Array(arguments.length -  0);
while (G__28346__i < G__28346__a.length) {G__28346__a[G__28346__i] = arguments[G__28346__i + 0]; ++G__28346__i;}
  args = new cljs.core.IndexedSeq(G__28346__a,0);
} 
return G__28345__delegate.call(this,args);};
G__28345.cljs$lang$maxFixedArity = 0;
G__28345.cljs$lang$applyTo = (function (arglist__28347){
var args = cljs.core.seq(arglist__28347);
return G__28345__delegate(args);
});
G__28345.cljs$core$IFn$_invoke$arity$variadic = G__28345__delegate;
return G__28345;
})()
;

return null;
});
