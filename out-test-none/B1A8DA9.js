goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10914__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10914 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10915__i = 0, G__10915__a = new Array(arguments.length -  0);
while (G__10915__i < G__10915__a.length) {G__10915__a[G__10915__i] = arguments[G__10915__i + 0]; ++G__10915__i;}
  args = new cljs.core.IndexedSeq(G__10915__a,0);
} 
return G__10914__delegate.call(this,args);};
G__10914.cljs$lang$maxFixedArity = 0;
G__10914.cljs$lang$applyTo = (function (arglist__10916){
var args = cljs.core.seq(arglist__10916);
return G__10914__delegate(args);
});
G__10914.cljs$core$IFn$_invoke$arity$variadic = G__10914__delegate;
return G__10914;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10917__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10917 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10918__i = 0, G__10918__a = new Array(arguments.length -  0);
while (G__10918__i < G__10918__a.length) {G__10918__a[G__10918__i] = arguments[G__10918__i + 0]; ++G__10918__i;}
  args = new cljs.core.IndexedSeq(G__10918__a,0);
} 
return G__10917__delegate.call(this,args);};
G__10917.cljs$lang$maxFixedArity = 0;
G__10917.cljs$lang$applyTo = (function (arglist__10919){
var args = cljs.core.seq(arglist__10919);
return G__10917__delegate(args);
});
G__10917.cljs$core$IFn$_invoke$arity$variadic = G__10917__delegate;
return G__10917;
})()
;

return null;
});
