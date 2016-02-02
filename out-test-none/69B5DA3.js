goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__21158__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__21158 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21159__i = 0, G__21159__a = new Array(arguments.length -  0);
while (G__21159__i < G__21159__a.length) {G__21159__a[G__21159__i] = arguments[G__21159__i + 0]; ++G__21159__i;}
  args = new cljs.core.IndexedSeq(G__21159__a,0);
} 
return G__21158__delegate.call(this,args);};
G__21158.cljs$lang$maxFixedArity = 0;
G__21158.cljs$lang$applyTo = (function (arglist__21160){
var args = cljs.core.seq(arglist__21160);
return G__21158__delegate(args);
});
G__21158.cljs$core$IFn$_invoke$arity$variadic = G__21158__delegate;
return G__21158;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__21161__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__21161 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21162__i = 0, G__21162__a = new Array(arguments.length -  0);
while (G__21162__i < G__21162__a.length) {G__21162__a[G__21162__i] = arguments[G__21162__i + 0]; ++G__21162__i;}
  args = new cljs.core.IndexedSeq(G__21162__a,0);
} 
return G__21161__delegate.call(this,args);};
G__21161.cljs$lang$maxFixedArity = 0;
G__21161.cljs$lang$applyTo = (function (arglist__21163){
var args = cljs.core.seq(arglist__21163);
return G__21161__delegate(args);
});
G__21161.cljs$core$IFn$_invoke$arity$variadic = G__21161__delegate;
return G__21161;
})()
;

return null;
});
