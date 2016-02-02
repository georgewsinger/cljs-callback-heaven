goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__244696__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__244696 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__244697__i = 0, G__244697__a = new Array(arguments.length -  0);
while (G__244697__i < G__244697__a.length) {G__244697__a[G__244697__i] = arguments[G__244697__i + 0]; ++G__244697__i;}
  args = new cljs.core.IndexedSeq(G__244697__a,0);
} 
return G__244696__delegate.call(this,args);};
G__244696.cljs$lang$maxFixedArity = 0;
G__244696.cljs$lang$applyTo = (function (arglist__244698){
var args = cljs.core.seq(arglist__244698);
return G__244696__delegate(args);
});
G__244696.cljs$core$IFn$_invoke$arity$variadic = G__244696__delegate;
return G__244696;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__244699__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__244699 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__244700__i = 0, G__244700__a = new Array(arguments.length -  0);
while (G__244700__i < G__244700__a.length) {G__244700__a[G__244700__i] = arguments[G__244700__i + 0]; ++G__244700__i;}
  args = new cljs.core.IndexedSeq(G__244700__a,0);
} 
return G__244699__delegate.call(this,args);};
G__244699.cljs$lang$maxFixedArity = 0;
G__244699.cljs$lang$applyTo = (function (arglist__244701){
var args = cljs.core.seq(arglist__244701);
return G__244699__delegate(args);
});
G__244699.cljs$core$IFn$_invoke$arity$variadic = G__244699__delegate;
return G__244699;
})()
;

return null;
});
