goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__21767__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__21767 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21768__i = 0, G__21768__a = new Array(arguments.length -  0);
while (G__21768__i < G__21768__a.length) {G__21768__a[G__21768__i] = arguments[G__21768__i + 0]; ++G__21768__i;}
  args = new cljs.core.IndexedSeq(G__21768__a,0);
} 
return G__21767__delegate.call(this,args);};
G__21767.cljs$lang$maxFixedArity = 0;
G__21767.cljs$lang$applyTo = (function (arglist__21769){
var args = cljs.core.seq(arglist__21769);
return G__21767__delegate(args);
});
G__21767.cljs$core$IFn$_invoke$arity$variadic = G__21767__delegate;
return G__21767;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__21770__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__21770 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21771__i = 0, G__21771__a = new Array(arguments.length -  0);
while (G__21771__i < G__21771__a.length) {G__21771__a[G__21771__i] = arguments[G__21771__i + 0]; ++G__21771__i;}
  args = new cljs.core.IndexedSeq(G__21771__a,0);
} 
return G__21770__delegate.call(this,args);};
G__21770.cljs$lang$maxFixedArity = 0;
G__21770.cljs$lang$applyTo = (function (arglist__21772){
var args = cljs.core.seq(arglist__21772);
return G__21770__delegate(args);
});
G__21770.cljs$core$IFn$_invoke$arity$variadic = G__21770__delegate;
return G__21770;
})()
;

return null;
});
