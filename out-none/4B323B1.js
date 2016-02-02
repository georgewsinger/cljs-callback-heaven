goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__24131__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__24131 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24132__i = 0, G__24132__a = new Array(arguments.length -  0);
while (G__24132__i < G__24132__a.length) {G__24132__a[G__24132__i] = arguments[G__24132__i + 0]; ++G__24132__i;}
  args = new cljs.core.IndexedSeq(G__24132__a,0);
} 
return G__24131__delegate.call(this,args);};
G__24131.cljs$lang$maxFixedArity = 0;
G__24131.cljs$lang$applyTo = (function (arglist__24133){
var args = cljs.core.seq(arglist__24133);
return G__24131__delegate(args);
});
G__24131.cljs$core$IFn$_invoke$arity$variadic = G__24131__delegate;
return G__24131;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__24134__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__24134 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24135__i = 0, G__24135__a = new Array(arguments.length -  0);
while (G__24135__i < G__24135__a.length) {G__24135__a[G__24135__i] = arguments[G__24135__i + 0]; ++G__24135__i;}
  args = new cljs.core.IndexedSeq(G__24135__a,0);
} 
return G__24134__delegate.call(this,args);};
G__24134.cljs$lang$maxFixedArity = 0;
G__24134.cljs$lang$applyTo = (function (arglist__24136){
var args = cljs.core.seq(arglist__24136);
return G__24134__delegate(args);
});
G__24134.cljs$core$IFn$_invoke$arity$variadic = G__24134__delegate;
return G__24134;
})()
;

return null;
});
