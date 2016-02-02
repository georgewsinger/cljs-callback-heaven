goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14884__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14884 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14885__i = 0, G__14885__a = new Array(arguments.length -  0);
while (G__14885__i < G__14885__a.length) {G__14885__a[G__14885__i] = arguments[G__14885__i + 0]; ++G__14885__i;}
  args = new cljs.core.IndexedSeq(G__14885__a,0);
} 
return G__14884__delegate.call(this,args);};
G__14884.cljs$lang$maxFixedArity = 0;
G__14884.cljs$lang$applyTo = (function (arglist__14886){
var args = cljs.core.seq(arglist__14886);
return G__14884__delegate(args);
});
G__14884.cljs$core$IFn$_invoke$arity$variadic = G__14884__delegate;
return G__14884;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14887__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14887 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14888__i = 0, G__14888__a = new Array(arguments.length -  0);
while (G__14888__i < G__14888__a.length) {G__14888__a[G__14888__i] = arguments[G__14888__i + 0]; ++G__14888__i;}
  args = new cljs.core.IndexedSeq(G__14888__a,0);
} 
return G__14887__delegate.call(this,args);};
G__14887.cljs$lang$maxFixedArity = 0;
G__14887.cljs$lang$applyTo = (function (arglist__14889){
var args = cljs.core.seq(arglist__14889);
return G__14887__delegate(args);
});
G__14887.cljs$core$IFn$_invoke$arity$variadic = G__14887__delegate;
return G__14887;
})()
;

return null;
});
