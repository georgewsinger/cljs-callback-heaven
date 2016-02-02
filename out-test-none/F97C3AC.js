goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9741__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9741 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9742__i = 0, G__9742__a = new Array(arguments.length -  0);
while (G__9742__i < G__9742__a.length) {G__9742__a[G__9742__i] = arguments[G__9742__i + 0]; ++G__9742__i;}
  args = new cljs.core.IndexedSeq(G__9742__a,0);
} 
return G__9741__delegate.call(this,args);};
G__9741.cljs$lang$maxFixedArity = 0;
G__9741.cljs$lang$applyTo = (function (arglist__9743){
var args = cljs.core.seq(arglist__9743);
return G__9741__delegate(args);
});
G__9741.cljs$core$IFn$_invoke$arity$variadic = G__9741__delegate;
return G__9741;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9744__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9744 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9745__i = 0, G__9745__a = new Array(arguments.length -  0);
while (G__9745__i < G__9745__a.length) {G__9745__a[G__9745__i] = arguments[G__9745__i + 0]; ++G__9745__i;}
  args = new cljs.core.IndexedSeq(G__9745__a,0);
} 
return G__9744__delegate.call(this,args);};
G__9744.cljs$lang$maxFixedArity = 0;
G__9744.cljs$lang$applyTo = (function (arglist__9746){
var args = cljs.core.seq(arglist__9746);
return G__9744__delegate(args);
});
G__9744.cljs$core$IFn$_invoke$arity$variadic = G__9744__delegate;
return G__9744;
})()
;

return null;
});
