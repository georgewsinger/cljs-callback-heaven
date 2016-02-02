goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__47640__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__47640 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47641__i = 0, G__47641__a = new Array(arguments.length -  0);
while (G__47641__i < G__47641__a.length) {G__47641__a[G__47641__i] = arguments[G__47641__i + 0]; ++G__47641__i;}
  args = new cljs.core.IndexedSeq(G__47641__a,0);
} 
return G__47640__delegate.call(this,args);};
G__47640.cljs$lang$maxFixedArity = 0;
G__47640.cljs$lang$applyTo = (function (arglist__47642){
var args = cljs.core.seq(arglist__47642);
return G__47640__delegate(args);
});
G__47640.cljs$core$IFn$_invoke$arity$variadic = G__47640__delegate;
return G__47640;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__47643__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__47643 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47644__i = 0, G__47644__a = new Array(arguments.length -  0);
while (G__47644__i < G__47644__a.length) {G__47644__a[G__47644__i] = arguments[G__47644__i + 0]; ++G__47644__i;}
  args = new cljs.core.IndexedSeq(G__47644__a,0);
} 
return G__47643__delegate.call(this,args);};
G__47643.cljs$lang$maxFixedArity = 0;
G__47643.cljs$lang$applyTo = (function (arglist__47645){
var args = cljs.core.seq(arglist__47645);
return G__47643__delegate(args);
});
G__47643.cljs$core$IFn$_invoke$arity$variadic = G__47643__delegate;
return G__47643;
})()
;

return null;
});
