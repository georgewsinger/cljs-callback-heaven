goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__194696__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__194696 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__194697__i = 0, G__194697__a = new Array(arguments.length -  0);
while (G__194697__i < G__194697__a.length) {G__194697__a[G__194697__i] = arguments[G__194697__i + 0]; ++G__194697__i;}
  args = new cljs.core.IndexedSeq(G__194697__a,0);
} 
return G__194696__delegate.call(this,args);};
G__194696.cljs$lang$maxFixedArity = 0;
G__194696.cljs$lang$applyTo = (function (arglist__194698){
var args = cljs.core.seq(arglist__194698);
return G__194696__delegate(args);
});
G__194696.cljs$core$IFn$_invoke$arity$variadic = G__194696__delegate;
return G__194696;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__194699__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__194699 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__194700__i = 0, G__194700__a = new Array(arguments.length -  0);
while (G__194700__i < G__194700__a.length) {G__194700__a[G__194700__i] = arguments[G__194700__i + 0]; ++G__194700__i;}
  args = new cljs.core.IndexedSeq(G__194700__a,0);
} 
return G__194699__delegate.call(this,args);};
G__194699.cljs$lang$maxFixedArity = 0;
G__194699.cljs$lang$applyTo = (function (arglist__194701){
var args = cljs.core.seq(arglist__194701);
return G__194699__delegate(args);
});
G__194699.cljs$core$IFn$_invoke$arity$variadic = G__194699__delegate;
return G__194699;
})()
;

return null;
});
