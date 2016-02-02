goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__179211__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__179211 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__179212__i = 0, G__179212__a = new Array(arguments.length -  0);
while (G__179212__i < G__179212__a.length) {G__179212__a[G__179212__i] = arguments[G__179212__i + 0]; ++G__179212__i;}
  args = new cljs.core.IndexedSeq(G__179212__a,0);
} 
return G__179211__delegate.call(this,args);};
G__179211.cljs$lang$maxFixedArity = 0;
G__179211.cljs$lang$applyTo = (function (arglist__179213){
var args = cljs.core.seq(arglist__179213);
return G__179211__delegate(args);
});
G__179211.cljs$core$IFn$_invoke$arity$variadic = G__179211__delegate;
return G__179211;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__179214__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__179214 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__179215__i = 0, G__179215__a = new Array(arguments.length -  0);
while (G__179215__i < G__179215__a.length) {G__179215__a[G__179215__i] = arguments[G__179215__i + 0]; ++G__179215__i;}
  args = new cljs.core.IndexedSeq(G__179215__a,0);
} 
return G__179214__delegate.call(this,args);};
G__179214.cljs$lang$maxFixedArity = 0;
G__179214.cljs$lang$applyTo = (function (arglist__179216){
var args = cljs.core.seq(arglist__179216);
return G__179214__delegate(args);
});
G__179214.cljs$core$IFn$_invoke$arity$variadic = G__179214__delegate;
return G__179214;
})()
;

return null;
});
