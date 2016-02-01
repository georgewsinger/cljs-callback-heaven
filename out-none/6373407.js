goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8814__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8814 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8815__i = 0, G__8815__a = new Array(arguments.length -  0);
while (G__8815__i < G__8815__a.length) {G__8815__a[G__8815__i] = arguments[G__8815__i + 0]; ++G__8815__i;}
  args = new cljs.core.IndexedSeq(G__8815__a,0);
} 
return G__8814__delegate.call(this,args);};
G__8814.cljs$lang$maxFixedArity = 0;
G__8814.cljs$lang$applyTo = (function (arglist__8816){
var args = cljs.core.seq(arglist__8816);
return G__8814__delegate(args);
});
G__8814.cljs$core$IFn$_invoke$arity$variadic = G__8814__delegate;
return G__8814;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8817__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8817 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8818__i = 0, G__8818__a = new Array(arguments.length -  0);
while (G__8818__i < G__8818__a.length) {G__8818__a[G__8818__i] = arguments[G__8818__i + 0]; ++G__8818__i;}
  args = new cljs.core.IndexedSeq(G__8818__a,0);
} 
return G__8817__delegate.call(this,args);};
G__8817.cljs$lang$maxFixedArity = 0;
G__8817.cljs$lang$applyTo = (function (arglist__8819){
var args = cljs.core.seq(arglist__8819);
return G__8817__delegate(args);
});
G__8817.cljs$core$IFn$_invoke$arity$variadic = G__8817__delegate;
return G__8817;
})()
;

return null;
});
