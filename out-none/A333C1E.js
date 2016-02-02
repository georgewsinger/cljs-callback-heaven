goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__54744__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__54744 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54745__i = 0, G__54745__a = new Array(arguments.length -  0);
while (G__54745__i < G__54745__a.length) {G__54745__a[G__54745__i] = arguments[G__54745__i + 0]; ++G__54745__i;}
  args = new cljs.core.IndexedSeq(G__54745__a,0);
} 
return G__54744__delegate.call(this,args);};
G__54744.cljs$lang$maxFixedArity = 0;
G__54744.cljs$lang$applyTo = (function (arglist__54746){
var args = cljs.core.seq(arglist__54746);
return G__54744__delegate(args);
});
G__54744.cljs$core$IFn$_invoke$arity$variadic = G__54744__delegate;
return G__54744;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__54747__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__54747 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54748__i = 0, G__54748__a = new Array(arguments.length -  0);
while (G__54748__i < G__54748__a.length) {G__54748__a[G__54748__i] = arguments[G__54748__i + 0]; ++G__54748__i;}
  args = new cljs.core.IndexedSeq(G__54748__a,0);
} 
return G__54747__delegate.call(this,args);};
G__54747.cljs$lang$maxFixedArity = 0;
G__54747.cljs$lang$applyTo = (function (arglist__54749){
var args = cljs.core.seq(arglist__54749);
return G__54747__delegate(args);
});
G__54747.cljs$core$IFn$_invoke$arity$variadic = G__54747__delegate;
return G__54747;
})()
;

return null;
});
