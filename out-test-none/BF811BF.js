goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16277__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16277 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16278__i = 0, G__16278__a = new Array(arguments.length -  0);
while (G__16278__i < G__16278__a.length) {G__16278__a[G__16278__i] = arguments[G__16278__i + 0]; ++G__16278__i;}
  args = new cljs.core.IndexedSeq(G__16278__a,0);
} 
return G__16277__delegate.call(this,args);};
G__16277.cljs$lang$maxFixedArity = 0;
G__16277.cljs$lang$applyTo = (function (arglist__16279){
var args = cljs.core.seq(arglist__16279);
return G__16277__delegate(args);
});
G__16277.cljs$core$IFn$_invoke$arity$variadic = G__16277__delegate;
return G__16277;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16280__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16280 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16281__i = 0, G__16281__a = new Array(arguments.length -  0);
while (G__16281__i < G__16281__a.length) {G__16281__a[G__16281__i] = arguments[G__16281__i + 0]; ++G__16281__i;}
  args = new cljs.core.IndexedSeq(G__16281__a,0);
} 
return G__16280__delegate.call(this,args);};
G__16280.cljs$lang$maxFixedArity = 0;
G__16280.cljs$lang$applyTo = (function (arglist__16282){
var args = cljs.core.seq(arglist__16282);
return G__16280__delegate(args);
});
G__16280.cljs$core$IFn$_invoke$arity$variadic = G__16280__delegate;
return G__16280;
})()
;

return null;
});
