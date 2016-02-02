goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__26161__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__26161 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26162__i = 0, G__26162__a = new Array(arguments.length -  0);
while (G__26162__i < G__26162__a.length) {G__26162__a[G__26162__i] = arguments[G__26162__i + 0]; ++G__26162__i;}
  args = new cljs.core.IndexedSeq(G__26162__a,0);
} 
return G__26161__delegate.call(this,args);};
G__26161.cljs$lang$maxFixedArity = 0;
G__26161.cljs$lang$applyTo = (function (arglist__26163){
var args = cljs.core.seq(arglist__26163);
return G__26161__delegate(args);
});
G__26161.cljs$core$IFn$_invoke$arity$variadic = G__26161__delegate;
return G__26161;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__26164__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__26164 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26165__i = 0, G__26165__a = new Array(arguments.length -  0);
while (G__26165__i < G__26165__a.length) {G__26165__a[G__26165__i] = arguments[G__26165__i + 0]; ++G__26165__i;}
  args = new cljs.core.IndexedSeq(G__26165__a,0);
} 
return G__26164__delegate.call(this,args);};
G__26164.cljs$lang$maxFixedArity = 0;
G__26164.cljs$lang$applyTo = (function (arglist__26166){
var args = cljs.core.seq(arglist__26166);
return G__26164__delegate(args);
});
G__26164.cljs$core$IFn$_invoke$arity$variadic = G__26164__delegate;
return G__26164;
})()
;

return null;
});
