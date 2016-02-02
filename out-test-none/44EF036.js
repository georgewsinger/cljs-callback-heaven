goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13353__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13353 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13354__i = 0, G__13354__a = new Array(arguments.length -  0);
while (G__13354__i < G__13354__a.length) {G__13354__a[G__13354__i] = arguments[G__13354__i + 0]; ++G__13354__i;}
  args = new cljs.core.IndexedSeq(G__13354__a,0);
} 
return G__13353__delegate.call(this,args);};
G__13353.cljs$lang$maxFixedArity = 0;
G__13353.cljs$lang$applyTo = (function (arglist__13355){
var args = cljs.core.seq(arglist__13355);
return G__13353__delegate(args);
});
G__13353.cljs$core$IFn$_invoke$arity$variadic = G__13353__delegate;
return G__13353;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13356__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13356 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13357__i = 0, G__13357__a = new Array(arguments.length -  0);
while (G__13357__i < G__13357__a.length) {G__13357__a[G__13357__i] = arguments[G__13357__i + 0]; ++G__13357__i;}
  args = new cljs.core.IndexedSeq(G__13357__a,0);
} 
return G__13356__delegate.call(this,args);};
G__13356.cljs$lang$maxFixedArity = 0;
G__13356.cljs$lang$applyTo = (function (arglist__13358){
var args = cljs.core.seq(arglist__13358);
return G__13356__delegate(args);
});
G__13356.cljs$core$IFn$_invoke$arity$variadic = G__13356__delegate;
return G__13356;
})()
;

return null;
});
