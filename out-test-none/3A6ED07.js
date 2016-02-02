goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__120714__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__120714 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__120715__i = 0, G__120715__a = new Array(arguments.length -  0);
while (G__120715__i < G__120715__a.length) {G__120715__a[G__120715__i] = arguments[G__120715__i + 0]; ++G__120715__i;}
  args = new cljs.core.IndexedSeq(G__120715__a,0);
} 
return G__120714__delegate.call(this,args);};
G__120714.cljs$lang$maxFixedArity = 0;
G__120714.cljs$lang$applyTo = (function (arglist__120716){
var args = cljs.core.seq(arglist__120716);
return G__120714__delegate(args);
});
G__120714.cljs$core$IFn$_invoke$arity$variadic = G__120714__delegate;
return G__120714;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__120717__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__120717 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__120718__i = 0, G__120718__a = new Array(arguments.length -  0);
while (G__120718__i < G__120718__a.length) {G__120718__a[G__120718__i] = arguments[G__120718__i + 0]; ++G__120718__i;}
  args = new cljs.core.IndexedSeq(G__120718__a,0);
} 
return G__120717__delegate.call(this,args);};
G__120717.cljs$lang$maxFixedArity = 0;
G__120717.cljs$lang$applyTo = (function (arglist__120719){
var args = cljs.core.seq(arglist__120719);
return G__120717__delegate(args);
});
G__120717.cljs$core$IFn$_invoke$arity$variadic = G__120717__delegate;
return G__120717;
})()
;

return null;
});
