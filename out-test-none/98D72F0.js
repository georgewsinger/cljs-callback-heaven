goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13268__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13268 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13269__i = 0, G__13269__a = new Array(arguments.length -  0);
while (G__13269__i < G__13269__a.length) {G__13269__a[G__13269__i] = arguments[G__13269__i + 0]; ++G__13269__i;}
  args = new cljs.core.IndexedSeq(G__13269__a,0);
} 
return G__13268__delegate.call(this,args);};
G__13268.cljs$lang$maxFixedArity = 0;
G__13268.cljs$lang$applyTo = (function (arglist__13270){
var args = cljs.core.seq(arglist__13270);
return G__13268__delegate(args);
});
G__13268.cljs$core$IFn$_invoke$arity$variadic = G__13268__delegate;
return G__13268;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13271__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13271 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13272__i = 0, G__13272__a = new Array(arguments.length -  0);
while (G__13272__i < G__13272__a.length) {G__13272__a[G__13272__i] = arguments[G__13272__i + 0]; ++G__13272__i;}
  args = new cljs.core.IndexedSeq(G__13272__a,0);
} 
return G__13271__delegate.call(this,args);};
G__13271.cljs$lang$maxFixedArity = 0;
G__13271.cljs$lang$applyTo = (function (arglist__13273){
var args = cljs.core.seq(arglist__13273);
return G__13271__delegate(args);
});
G__13271.cljs$core$IFn$_invoke$arity$variadic = G__13271__delegate;
return G__13271;
})()
;

return null;
});
