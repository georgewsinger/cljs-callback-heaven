goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__71448__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__71448 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__71449__i = 0, G__71449__a = new Array(arguments.length -  0);
while (G__71449__i < G__71449__a.length) {G__71449__a[G__71449__i] = arguments[G__71449__i + 0]; ++G__71449__i;}
  args = new cljs.core.IndexedSeq(G__71449__a,0);
} 
return G__71448__delegate.call(this,args);};
G__71448.cljs$lang$maxFixedArity = 0;
G__71448.cljs$lang$applyTo = (function (arglist__71450){
var args = cljs.core.seq(arglist__71450);
return G__71448__delegate(args);
});
G__71448.cljs$core$IFn$_invoke$arity$variadic = G__71448__delegate;
return G__71448;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__71451__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__71451 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__71452__i = 0, G__71452__a = new Array(arguments.length -  0);
while (G__71452__i < G__71452__a.length) {G__71452__a[G__71452__i] = arguments[G__71452__i + 0]; ++G__71452__i;}
  args = new cljs.core.IndexedSeq(G__71452__a,0);
} 
return G__71451__delegate.call(this,args);};
G__71451.cljs$lang$maxFixedArity = 0;
G__71451.cljs$lang$applyTo = (function (arglist__71453){
var args = cljs.core.seq(arglist__71453);
return G__71451__delegate(args);
});
G__71451.cljs$core$IFn$_invoke$arity$variadic = G__71451__delegate;
return G__71451;
})()
;

return null;
});
