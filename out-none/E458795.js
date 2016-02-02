goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__29261__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__29261 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29262__i = 0, G__29262__a = new Array(arguments.length -  0);
while (G__29262__i < G__29262__a.length) {G__29262__a[G__29262__i] = arguments[G__29262__i + 0]; ++G__29262__i;}
  args = new cljs.core.IndexedSeq(G__29262__a,0);
} 
return G__29261__delegate.call(this,args);};
G__29261.cljs$lang$maxFixedArity = 0;
G__29261.cljs$lang$applyTo = (function (arglist__29263){
var args = cljs.core.seq(arglist__29263);
return G__29261__delegate(args);
});
G__29261.cljs$core$IFn$_invoke$arity$variadic = G__29261__delegate;
return G__29261;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__29264__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__29264 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29265__i = 0, G__29265__a = new Array(arguments.length -  0);
while (G__29265__i < G__29265__a.length) {G__29265__a[G__29265__i] = arguments[G__29265__i + 0]; ++G__29265__i;}
  args = new cljs.core.IndexedSeq(G__29265__a,0);
} 
return G__29264__delegate.call(this,args);};
G__29264.cljs$lang$maxFixedArity = 0;
G__29264.cljs$lang$applyTo = (function (arglist__29266){
var args = cljs.core.seq(arglist__29266);
return G__29264__delegate(args);
});
G__29264.cljs$core$IFn$_invoke$arity$variadic = G__29264__delegate;
return G__29264;
})()
;

return null;
});
