goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__31834__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__31834 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31835__i = 0, G__31835__a = new Array(arguments.length -  0);
while (G__31835__i < G__31835__a.length) {G__31835__a[G__31835__i] = arguments[G__31835__i + 0]; ++G__31835__i;}
  args = new cljs.core.IndexedSeq(G__31835__a,0);
} 
return G__31834__delegate.call(this,args);};
G__31834.cljs$lang$maxFixedArity = 0;
G__31834.cljs$lang$applyTo = (function (arglist__31836){
var args = cljs.core.seq(arglist__31836);
return G__31834__delegate(args);
});
G__31834.cljs$core$IFn$_invoke$arity$variadic = G__31834__delegate;
return G__31834;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__31837__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__31837 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31838__i = 0, G__31838__a = new Array(arguments.length -  0);
while (G__31838__i < G__31838__a.length) {G__31838__a[G__31838__i] = arguments[G__31838__i + 0]; ++G__31838__i;}
  args = new cljs.core.IndexedSeq(G__31838__a,0);
} 
return G__31837__delegate.call(this,args);};
G__31837.cljs$lang$maxFixedArity = 0;
G__31837.cljs$lang$applyTo = (function (arglist__31839){
var args = cljs.core.seq(arglist__31839);
return G__31837__delegate(args);
});
G__31837.cljs$core$IFn$_invoke$arity$variadic = G__31837__delegate;
return G__31837;
})()
;

return null;
});
