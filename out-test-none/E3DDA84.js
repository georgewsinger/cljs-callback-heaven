goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__268233__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__268233 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__268234__i = 0, G__268234__a = new Array(arguments.length -  0);
while (G__268234__i < G__268234__a.length) {G__268234__a[G__268234__i] = arguments[G__268234__i + 0]; ++G__268234__i;}
  args = new cljs.core.IndexedSeq(G__268234__a,0);
} 
return G__268233__delegate.call(this,args);};
G__268233.cljs$lang$maxFixedArity = 0;
G__268233.cljs$lang$applyTo = (function (arglist__268235){
var args = cljs.core.seq(arglist__268235);
return G__268233__delegate(args);
});
G__268233.cljs$core$IFn$_invoke$arity$variadic = G__268233__delegate;
return G__268233;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__268236__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__268236 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__268237__i = 0, G__268237__a = new Array(arguments.length -  0);
while (G__268237__i < G__268237__a.length) {G__268237__a[G__268237__i] = arguments[G__268237__i + 0]; ++G__268237__i;}
  args = new cljs.core.IndexedSeq(G__268237__a,0);
} 
return G__268236__delegate.call(this,args);};
G__268236.cljs$lang$maxFixedArity = 0;
G__268236.cljs$lang$applyTo = (function (arglist__268238){
var args = cljs.core.seq(arglist__268238);
return G__268236__delegate(args);
});
G__268236.cljs$core$IFn$_invoke$arity$variadic = G__268236__delegate;
return G__268236;
})()
;

return null;
});
