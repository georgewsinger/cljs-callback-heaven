goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__22914__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__22914 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22915__i = 0, G__22915__a = new Array(arguments.length -  0);
while (G__22915__i < G__22915__a.length) {G__22915__a[G__22915__i] = arguments[G__22915__i + 0]; ++G__22915__i;}
  args = new cljs.core.IndexedSeq(G__22915__a,0);
} 
return G__22914__delegate.call(this,args);};
G__22914.cljs$lang$maxFixedArity = 0;
G__22914.cljs$lang$applyTo = (function (arglist__22916){
var args = cljs.core.seq(arglist__22916);
return G__22914__delegate(args);
});
G__22914.cljs$core$IFn$_invoke$arity$variadic = G__22914__delegate;
return G__22914;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__22917__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__22917 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22918__i = 0, G__22918__a = new Array(arguments.length -  0);
while (G__22918__i < G__22918__a.length) {G__22918__a[G__22918__i] = arguments[G__22918__i + 0]; ++G__22918__i;}
  args = new cljs.core.IndexedSeq(G__22918__a,0);
} 
return G__22917__delegate.call(this,args);};
G__22917.cljs$lang$maxFixedArity = 0;
G__22917.cljs$lang$applyTo = (function (arglist__22919){
var args = cljs.core.seq(arglist__22919);
return G__22917__delegate(args);
});
G__22917.cljs$core$IFn$_invoke$arity$variadic = G__22917__delegate;
return G__22917;
})()
;

return null;
});
