goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9829__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9829 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9830__i = 0, G__9830__a = new Array(arguments.length -  0);
while (G__9830__i < G__9830__a.length) {G__9830__a[G__9830__i] = arguments[G__9830__i + 0]; ++G__9830__i;}
  args = new cljs.core.IndexedSeq(G__9830__a,0);
} 
return G__9829__delegate.call(this,args);};
G__9829.cljs$lang$maxFixedArity = 0;
G__9829.cljs$lang$applyTo = (function (arglist__9831){
var args = cljs.core.seq(arglist__9831);
return G__9829__delegate(args);
});
G__9829.cljs$core$IFn$_invoke$arity$variadic = G__9829__delegate;
return G__9829;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9832__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9832 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9833__i = 0, G__9833__a = new Array(arguments.length -  0);
while (G__9833__i < G__9833__a.length) {G__9833__a[G__9833__i] = arguments[G__9833__i + 0]; ++G__9833__i;}
  args = new cljs.core.IndexedSeq(G__9833__a,0);
} 
return G__9832__delegate.call(this,args);};
G__9832.cljs$lang$maxFixedArity = 0;
G__9832.cljs$lang$applyTo = (function (arglist__9834){
var args = cljs.core.seq(arglist__9834);
return G__9832__delegate(args);
});
G__9832.cljs$core$IFn$_invoke$arity$variadic = G__9832__delegate;
return G__9832;
})()
;

return null;
});
