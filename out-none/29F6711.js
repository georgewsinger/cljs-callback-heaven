goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__57002__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__57002 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57003__i = 0, G__57003__a = new Array(arguments.length -  0);
while (G__57003__i < G__57003__a.length) {G__57003__a[G__57003__i] = arguments[G__57003__i + 0]; ++G__57003__i;}
  args = new cljs.core.IndexedSeq(G__57003__a,0);
} 
return G__57002__delegate.call(this,args);};
G__57002.cljs$lang$maxFixedArity = 0;
G__57002.cljs$lang$applyTo = (function (arglist__57004){
var args = cljs.core.seq(arglist__57004);
return G__57002__delegate(args);
});
G__57002.cljs$core$IFn$_invoke$arity$variadic = G__57002__delegate;
return G__57002;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__57005__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__57005 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57006__i = 0, G__57006__a = new Array(arguments.length -  0);
while (G__57006__i < G__57006__a.length) {G__57006__a[G__57006__i] = arguments[G__57006__i + 0]; ++G__57006__i;}
  args = new cljs.core.IndexedSeq(G__57006__a,0);
} 
return G__57005__delegate.call(this,args);};
G__57005.cljs$lang$maxFixedArity = 0;
G__57005.cljs$lang$applyTo = (function (arglist__57007){
var args = cljs.core.seq(arglist__57007);
return G__57005__delegate(args);
});
G__57005.cljs$core$IFn$_invoke$arity$variadic = G__57005__delegate;
return G__57005;
})()
;

return null;
});
