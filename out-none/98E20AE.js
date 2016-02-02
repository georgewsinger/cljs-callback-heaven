goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__44877__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__44877 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44878__i = 0, G__44878__a = new Array(arguments.length -  0);
while (G__44878__i < G__44878__a.length) {G__44878__a[G__44878__i] = arguments[G__44878__i + 0]; ++G__44878__i;}
  args = new cljs.core.IndexedSeq(G__44878__a,0);
} 
return G__44877__delegate.call(this,args);};
G__44877.cljs$lang$maxFixedArity = 0;
G__44877.cljs$lang$applyTo = (function (arglist__44879){
var args = cljs.core.seq(arglist__44879);
return G__44877__delegate(args);
});
G__44877.cljs$core$IFn$_invoke$arity$variadic = G__44877__delegate;
return G__44877;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__44880__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__44880 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44881__i = 0, G__44881__a = new Array(arguments.length -  0);
while (G__44881__i < G__44881__a.length) {G__44881__a[G__44881__i] = arguments[G__44881__i + 0]; ++G__44881__i;}
  args = new cljs.core.IndexedSeq(G__44881__a,0);
} 
return G__44880__delegate.call(this,args);};
G__44880.cljs$lang$maxFixedArity = 0;
G__44880.cljs$lang$applyTo = (function (arglist__44882){
var args = cljs.core.seq(arglist__44882);
return G__44880__delegate(args);
});
G__44880.cljs$core$IFn$_invoke$arity$variadic = G__44880__delegate;
return G__44880;
})()
;

return null;
});
