goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__54803__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__54803 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54804__i = 0, G__54804__a = new Array(arguments.length -  0);
while (G__54804__i < G__54804__a.length) {G__54804__a[G__54804__i] = arguments[G__54804__i + 0]; ++G__54804__i;}
  args = new cljs.core.IndexedSeq(G__54804__a,0);
} 
return G__54803__delegate.call(this,args);};
G__54803.cljs$lang$maxFixedArity = 0;
G__54803.cljs$lang$applyTo = (function (arglist__54805){
var args = cljs.core.seq(arglist__54805);
return G__54803__delegate(args);
});
G__54803.cljs$core$IFn$_invoke$arity$variadic = G__54803__delegate;
return G__54803;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__54806__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__54806 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54807__i = 0, G__54807__a = new Array(arguments.length -  0);
while (G__54807__i < G__54807__a.length) {G__54807__a[G__54807__i] = arguments[G__54807__i + 0]; ++G__54807__i;}
  args = new cljs.core.IndexedSeq(G__54807__a,0);
} 
return G__54806__delegate.call(this,args);};
G__54806.cljs$lang$maxFixedArity = 0;
G__54806.cljs$lang$applyTo = (function (arglist__54808){
var args = cljs.core.seq(arglist__54808);
return G__54806__delegate(args);
});
G__54806.cljs$core$IFn$_invoke$arity$variadic = G__54806__delegate;
return G__54806;
})()
;

return null;
});
