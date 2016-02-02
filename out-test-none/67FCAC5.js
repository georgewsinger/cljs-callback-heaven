goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10107__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10107 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10108__i = 0, G__10108__a = new Array(arguments.length -  0);
while (G__10108__i < G__10108__a.length) {G__10108__a[G__10108__i] = arguments[G__10108__i + 0]; ++G__10108__i;}
  args = new cljs.core.IndexedSeq(G__10108__a,0);
} 
return G__10107__delegate.call(this,args);};
G__10107.cljs$lang$maxFixedArity = 0;
G__10107.cljs$lang$applyTo = (function (arglist__10109){
var args = cljs.core.seq(arglist__10109);
return G__10107__delegate(args);
});
G__10107.cljs$core$IFn$_invoke$arity$variadic = G__10107__delegate;
return G__10107;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10110__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10110 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10111__i = 0, G__10111__a = new Array(arguments.length -  0);
while (G__10111__i < G__10111__a.length) {G__10111__a[G__10111__i] = arguments[G__10111__i + 0]; ++G__10111__i;}
  args = new cljs.core.IndexedSeq(G__10111__a,0);
} 
return G__10110__delegate.call(this,args);};
G__10110.cljs$lang$maxFixedArity = 0;
G__10110.cljs$lang$applyTo = (function (arglist__10112){
var args = cljs.core.seq(arglist__10112);
return G__10110__delegate(args);
});
G__10110.cljs$core$IFn$_invoke$arity$variadic = G__10110__delegate;
return G__10110;
})()
;

return null;
});
