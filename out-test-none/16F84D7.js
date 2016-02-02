goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10002__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10002 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10003__i = 0, G__10003__a = new Array(arguments.length -  0);
while (G__10003__i < G__10003__a.length) {G__10003__a[G__10003__i] = arguments[G__10003__i + 0]; ++G__10003__i;}
  args = new cljs.core.IndexedSeq(G__10003__a,0);
} 
return G__10002__delegate.call(this,args);};
G__10002.cljs$lang$maxFixedArity = 0;
G__10002.cljs$lang$applyTo = (function (arglist__10004){
var args = cljs.core.seq(arglist__10004);
return G__10002__delegate(args);
});
G__10002.cljs$core$IFn$_invoke$arity$variadic = G__10002__delegate;
return G__10002;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10005__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10005 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10006__i = 0, G__10006__a = new Array(arguments.length -  0);
while (G__10006__i < G__10006__a.length) {G__10006__a[G__10006__i] = arguments[G__10006__i + 0]; ++G__10006__i;}
  args = new cljs.core.IndexedSeq(G__10006__a,0);
} 
return G__10005__delegate.call(this,args);};
G__10005.cljs$lang$maxFixedArity = 0;
G__10005.cljs$lang$applyTo = (function (arglist__10007){
var args = cljs.core.seq(arglist__10007);
return G__10005__delegate(args);
});
G__10005.cljs$core$IFn$_invoke$arity$variadic = G__10005__delegate;
return G__10005;
})()
;

return null;
});
