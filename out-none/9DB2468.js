goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__24224__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__24224 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24225__i = 0, G__24225__a = new Array(arguments.length -  0);
while (G__24225__i < G__24225__a.length) {G__24225__a[G__24225__i] = arguments[G__24225__i + 0]; ++G__24225__i;}
  args = new cljs.core.IndexedSeq(G__24225__a,0);
} 
return G__24224__delegate.call(this,args);};
G__24224.cljs$lang$maxFixedArity = 0;
G__24224.cljs$lang$applyTo = (function (arglist__24226){
var args = cljs.core.seq(arglist__24226);
return G__24224__delegate(args);
});
G__24224.cljs$core$IFn$_invoke$arity$variadic = G__24224__delegate;
return G__24224;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__24227__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__24227 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24228__i = 0, G__24228__a = new Array(arguments.length -  0);
while (G__24228__i < G__24228__a.length) {G__24228__a[G__24228__i] = arguments[G__24228__i + 0]; ++G__24228__i;}
  args = new cljs.core.IndexedSeq(G__24228__a,0);
} 
return G__24227__delegate.call(this,args);};
G__24227.cljs$lang$maxFixedArity = 0;
G__24227.cljs$lang$applyTo = (function (arglist__24229){
var args = cljs.core.seq(arglist__24229);
return G__24227__delegate(args);
});
G__24227.cljs$core$IFn$_invoke$arity$variadic = G__24227__delegate;
return G__24227;
})()
;

return null;
});
