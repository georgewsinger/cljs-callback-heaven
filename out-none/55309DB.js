goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__42696__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__42696 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42697__i = 0, G__42697__a = new Array(arguments.length -  0);
while (G__42697__i < G__42697__a.length) {G__42697__a[G__42697__i] = arguments[G__42697__i + 0]; ++G__42697__i;}
  args = new cljs.core.IndexedSeq(G__42697__a,0);
} 
return G__42696__delegate.call(this,args);};
G__42696.cljs$lang$maxFixedArity = 0;
G__42696.cljs$lang$applyTo = (function (arglist__42698){
var args = cljs.core.seq(arglist__42698);
return G__42696__delegate(args);
});
G__42696.cljs$core$IFn$_invoke$arity$variadic = G__42696__delegate;
return G__42696;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__42699__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__42699 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42700__i = 0, G__42700__a = new Array(arguments.length -  0);
while (G__42700__i < G__42700__a.length) {G__42700__a[G__42700__i] = arguments[G__42700__i + 0]; ++G__42700__i;}
  args = new cljs.core.IndexedSeq(G__42700__a,0);
} 
return G__42699__delegate.call(this,args);};
G__42699.cljs$lang$maxFixedArity = 0;
G__42699.cljs$lang$applyTo = (function (arglist__42701){
var args = cljs.core.seq(arglist__42701);
return G__42699__delegate(args);
});
G__42699.cljs$core$IFn$_invoke$arity$variadic = G__42699__delegate;
return G__42699;
})()
;

return null;
});
