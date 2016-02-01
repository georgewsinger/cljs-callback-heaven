goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11851__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11851 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11852__i = 0, G__11852__a = new Array(arguments.length -  0);
while (G__11852__i < G__11852__a.length) {G__11852__a[G__11852__i] = arguments[G__11852__i + 0]; ++G__11852__i;}
  args = new cljs.core.IndexedSeq(G__11852__a,0);
} 
return G__11851__delegate.call(this,args);};
G__11851.cljs$lang$maxFixedArity = 0;
G__11851.cljs$lang$applyTo = (function (arglist__11853){
var args = cljs.core.seq(arglist__11853);
return G__11851__delegate(args);
});
G__11851.cljs$core$IFn$_invoke$arity$variadic = G__11851__delegate;
return G__11851;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11854__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11854 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11855__i = 0, G__11855__a = new Array(arguments.length -  0);
while (G__11855__i < G__11855__a.length) {G__11855__a[G__11855__i] = arguments[G__11855__i + 0]; ++G__11855__i;}
  args = new cljs.core.IndexedSeq(G__11855__a,0);
} 
return G__11854__delegate.call(this,args);};
G__11854.cljs$lang$maxFixedArity = 0;
G__11854.cljs$lang$applyTo = (function (arglist__11856){
var args = cljs.core.seq(arglist__11856);
return G__11854__delegate(args);
});
G__11854.cljs$core$IFn$_invoke$arity$variadic = G__11854__delegate;
return G__11854;
})()
;

return null;
});
