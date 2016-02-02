goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__33614__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__33614 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33615__i = 0, G__33615__a = new Array(arguments.length -  0);
while (G__33615__i < G__33615__a.length) {G__33615__a[G__33615__i] = arguments[G__33615__i + 0]; ++G__33615__i;}
  args = new cljs.core.IndexedSeq(G__33615__a,0);
} 
return G__33614__delegate.call(this,args);};
G__33614.cljs$lang$maxFixedArity = 0;
G__33614.cljs$lang$applyTo = (function (arglist__33616){
var args = cljs.core.seq(arglist__33616);
return G__33614__delegate(args);
});
G__33614.cljs$core$IFn$_invoke$arity$variadic = G__33614__delegate;
return G__33614;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__33617__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__33617 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33618__i = 0, G__33618__a = new Array(arguments.length -  0);
while (G__33618__i < G__33618__a.length) {G__33618__a[G__33618__i] = arguments[G__33618__i + 0]; ++G__33618__i;}
  args = new cljs.core.IndexedSeq(G__33618__a,0);
} 
return G__33617__delegate.call(this,args);};
G__33617.cljs$lang$maxFixedArity = 0;
G__33617.cljs$lang$applyTo = (function (arglist__33619){
var args = cljs.core.seq(arglist__33619);
return G__33617__delegate(args);
});
G__33617.cljs$core$IFn$_invoke$arity$variadic = G__33617__delegate;
return G__33617;
})()
;

return null;
});
