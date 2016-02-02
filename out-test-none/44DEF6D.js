goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__260930__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__260930 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__260931__i = 0, G__260931__a = new Array(arguments.length -  0);
while (G__260931__i < G__260931__a.length) {G__260931__a[G__260931__i] = arguments[G__260931__i + 0]; ++G__260931__i;}
  args = new cljs.core.IndexedSeq(G__260931__a,0);
} 
return G__260930__delegate.call(this,args);};
G__260930.cljs$lang$maxFixedArity = 0;
G__260930.cljs$lang$applyTo = (function (arglist__260932){
var args = cljs.core.seq(arglist__260932);
return G__260930__delegate(args);
});
G__260930.cljs$core$IFn$_invoke$arity$variadic = G__260930__delegate;
return G__260930;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__260933__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__260933 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__260934__i = 0, G__260934__a = new Array(arguments.length -  0);
while (G__260934__i < G__260934__a.length) {G__260934__a[G__260934__i] = arguments[G__260934__i + 0]; ++G__260934__i;}
  args = new cljs.core.IndexedSeq(G__260934__a,0);
} 
return G__260933__delegate.call(this,args);};
G__260933.cljs$lang$maxFixedArity = 0;
G__260933.cljs$lang$applyTo = (function (arglist__260935){
var args = cljs.core.seq(arglist__260935);
return G__260933__delegate(args);
});
G__260933.cljs$core$IFn$_invoke$arity$variadic = G__260933__delegate;
return G__260933;
})()
;

return null;
});
