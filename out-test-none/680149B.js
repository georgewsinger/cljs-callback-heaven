goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__42164__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__42164 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42165__i = 0, G__42165__a = new Array(arguments.length -  0);
while (G__42165__i < G__42165__a.length) {G__42165__a[G__42165__i] = arguments[G__42165__i + 0]; ++G__42165__i;}
  args = new cljs.core.IndexedSeq(G__42165__a,0);
} 
return G__42164__delegate.call(this,args);};
G__42164.cljs$lang$maxFixedArity = 0;
G__42164.cljs$lang$applyTo = (function (arglist__42166){
var args = cljs.core.seq(arglist__42166);
return G__42164__delegate(args);
});
G__42164.cljs$core$IFn$_invoke$arity$variadic = G__42164__delegate;
return G__42164;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__42167__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__42167 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42168__i = 0, G__42168__a = new Array(arguments.length -  0);
while (G__42168__i < G__42168__a.length) {G__42168__a[G__42168__i] = arguments[G__42168__i + 0]; ++G__42168__i;}
  args = new cljs.core.IndexedSeq(G__42168__a,0);
} 
return G__42167__delegate.call(this,args);};
G__42167.cljs$lang$maxFixedArity = 0;
G__42167.cljs$lang$applyTo = (function (arglist__42169){
var args = cljs.core.seq(arglist__42169);
return G__42167__delegate(args);
});
G__42167.cljs$core$IFn$_invoke$arity$variadic = G__42167__delegate;
return G__42167;
})()
;

return null;
});
