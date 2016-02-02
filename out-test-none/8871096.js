goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11815__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11815 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11816__i = 0, G__11816__a = new Array(arguments.length -  0);
while (G__11816__i < G__11816__a.length) {G__11816__a[G__11816__i] = arguments[G__11816__i + 0]; ++G__11816__i;}
  args = new cljs.core.IndexedSeq(G__11816__a,0);
} 
return G__11815__delegate.call(this,args);};
G__11815.cljs$lang$maxFixedArity = 0;
G__11815.cljs$lang$applyTo = (function (arglist__11817){
var args = cljs.core.seq(arglist__11817);
return G__11815__delegate(args);
});
G__11815.cljs$core$IFn$_invoke$arity$variadic = G__11815__delegate;
return G__11815;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11818__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11818 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11819__i = 0, G__11819__a = new Array(arguments.length -  0);
while (G__11819__i < G__11819__a.length) {G__11819__a[G__11819__i] = arguments[G__11819__i + 0]; ++G__11819__i;}
  args = new cljs.core.IndexedSeq(G__11819__a,0);
} 
return G__11818__delegate.call(this,args);};
G__11818.cljs$lang$maxFixedArity = 0;
G__11818.cljs$lang$applyTo = (function (arglist__11820){
var args = cljs.core.seq(arglist__11820);
return G__11818__delegate(args);
});
G__11818.cljs$core$IFn$_invoke$arity$variadic = G__11818__delegate;
return G__11818;
})()
;

return null;
});
