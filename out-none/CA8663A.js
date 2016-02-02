goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__61003__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__61003 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__61004__i = 0, G__61004__a = new Array(arguments.length -  0);
while (G__61004__i < G__61004__a.length) {G__61004__a[G__61004__i] = arguments[G__61004__i + 0]; ++G__61004__i;}
  args = new cljs.core.IndexedSeq(G__61004__a,0);
} 
return G__61003__delegate.call(this,args);};
G__61003.cljs$lang$maxFixedArity = 0;
G__61003.cljs$lang$applyTo = (function (arglist__61005){
var args = cljs.core.seq(arglist__61005);
return G__61003__delegate(args);
});
G__61003.cljs$core$IFn$_invoke$arity$variadic = G__61003__delegate;
return G__61003;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__61006__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__61006 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__61007__i = 0, G__61007__a = new Array(arguments.length -  0);
while (G__61007__i < G__61007__a.length) {G__61007__a[G__61007__i] = arguments[G__61007__i + 0]; ++G__61007__i;}
  args = new cljs.core.IndexedSeq(G__61007__a,0);
} 
return G__61006__delegate.call(this,args);};
G__61006.cljs$lang$maxFixedArity = 0;
G__61006.cljs$lang$applyTo = (function (arglist__61008){
var args = cljs.core.seq(arglist__61008);
return G__61006__delegate(args);
});
G__61006.cljs$core$IFn$_invoke$arity$variadic = G__61006__delegate;
return G__61006;
})()
;

return null;
});
