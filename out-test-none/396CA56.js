goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9164__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9164 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9165__i = 0, G__9165__a = new Array(arguments.length -  0);
while (G__9165__i < G__9165__a.length) {G__9165__a[G__9165__i] = arguments[G__9165__i + 0]; ++G__9165__i;}
  args = new cljs.core.IndexedSeq(G__9165__a,0);
} 
return G__9164__delegate.call(this,args);};
G__9164.cljs$lang$maxFixedArity = 0;
G__9164.cljs$lang$applyTo = (function (arglist__9166){
var args = cljs.core.seq(arglist__9166);
return G__9164__delegate(args);
});
G__9164.cljs$core$IFn$_invoke$arity$variadic = G__9164__delegate;
return G__9164;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9167__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9167 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9168__i = 0, G__9168__a = new Array(arguments.length -  0);
while (G__9168__i < G__9168__a.length) {G__9168__a[G__9168__i] = arguments[G__9168__i + 0]; ++G__9168__i;}
  args = new cljs.core.IndexedSeq(G__9168__a,0);
} 
return G__9167__delegate.call(this,args);};
G__9167.cljs$lang$maxFixedArity = 0;
G__9167.cljs$lang$applyTo = (function (arglist__9169){
var args = cljs.core.seq(arglist__9169);
return G__9167__delegate(args);
});
G__9167.cljs$core$IFn$_invoke$arity$variadic = G__9167__delegate;
return G__9167;
})()
;

return null;
});
