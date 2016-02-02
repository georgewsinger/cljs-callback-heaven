goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__29260__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__29260 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29261__i = 0, G__29261__a = new Array(arguments.length -  0);
while (G__29261__i < G__29261__a.length) {G__29261__a[G__29261__i] = arguments[G__29261__i + 0]; ++G__29261__i;}
  args = new cljs.core.IndexedSeq(G__29261__a,0);
} 
return G__29260__delegate.call(this,args);};
G__29260.cljs$lang$maxFixedArity = 0;
G__29260.cljs$lang$applyTo = (function (arglist__29262){
var args = cljs.core.seq(arglist__29262);
return G__29260__delegate(args);
});
G__29260.cljs$core$IFn$_invoke$arity$variadic = G__29260__delegate;
return G__29260;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__29263__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__29263 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29264__i = 0, G__29264__a = new Array(arguments.length -  0);
while (G__29264__i < G__29264__a.length) {G__29264__a[G__29264__i] = arguments[G__29264__i + 0]; ++G__29264__i;}
  args = new cljs.core.IndexedSeq(G__29264__a,0);
} 
return G__29263__delegate.call(this,args);};
G__29263.cljs$lang$maxFixedArity = 0;
G__29263.cljs$lang$applyTo = (function (arglist__29265){
var args = cljs.core.seq(arglist__29265);
return G__29263__delegate(args);
});
G__29263.cljs$core$IFn$_invoke$arity$variadic = G__29263__delegate;
return G__29263;
})()
;

return null;
});
