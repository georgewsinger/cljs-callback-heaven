goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11040__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11040 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11041__i = 0, G__11041__a = new Array(arguments.length -  0);
while (G__11041__i < G__11041__a.length) {G__11041__a[G__11041__i] = arguments[G__11041__i + 0]; ++G__11041__i;}
  args = new cljs.core.IndexedSeq(G__11041__a,0);
} 
return G__11040__delegate.call(this,args);};
G__11040.cljs$lang$maxFixedArity = 0;
G__11040.cljs$lang$applyTo = (function (arglist__11042){
var args = cljs.core.seq(arglist__11042);
return G__11040__delegate(args);
});
G__11040.cljs$core$IFn$_invoke$arity$variadic = G__11040__delegate;
return G__11040;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11043__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11043 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11044__i = 0, G__11044__a = new Array(arguments.length -  0);
while (G__11044__i < G__11044__a.length) {G__11044__a[G__11044__i] = arguments[G__11044__i + 0]; ++G__11044__i;}
  args = new cljs.core.IndexedSeq(G__11044__a,0);
} 
return G__11043__delegate.call(this,args);};
G__11043.cljs$lang$maxFixedArity = 0;
G__11043.cljs$lang$applyTo = (function (arglist__11045){
var args = cljs.core.seq(arglist__11045);
return G__11043__delegate(args);
});
G__11043.cljs$core$IFn$_invoke$arity$variadic = G__11043__delegate;
return G__11043;
})()
;

return null;
});
