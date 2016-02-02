goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__33239__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__33239 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33240__i = 0, G__33240__a = new Array(arguments.length -  0);
while (G__33240__i < G__33240__a.length) {G__33240__a[G__33240__i] = arguments[G__33240__i + 0]; ++G__33240__i;}
  args = new cljs.core.IndexedSeq(G__33240__a,0);
} 
return G__33239__delegate.call(this,args);};
G__33239.cljs$lang$maxFixedArity = 0;
G__33239.cljs$lang$applyTo = (function (arglist__33241){
var args = cljs.core.seq(arglist__33241);
return G__33239__delegate(args);
});
G__33239.cljs$core$IFn$_invoke$arity$variadic = G__33239__delegate;
return G__33239;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__33242__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__33242 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33243__i = 0, G__33243__a = new Array(arguments.length -  0);
while (G__33243__i < G__33243__a.length) {G__33243__a[G__33243__i] = arguments[G__33243__i + 0]; ++G__33243__i;}
  args = new cljs.core.IndexedSeq(G__33243__a,0);
} 
return G__33242__delegate.call(this,args);};
G__33242.cljs$lang$maxFixedArity = 0;
G__33242.cljs$lang$applyTo = (function (arglist__33244){
var args = cljs.core.seq(arglist__33244);
return G__33242__delegate(args);
});
G__33242.cljs$core$IFn$_invoke$arity$variadic = G__33242__delegate;
return G__33242;
})()
;

return null;
});
