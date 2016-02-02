goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__39303__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__39303 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39304__i = 0, G__39304__a = new Array(arguments.length -  0);
while (G__39304__i < G__39304__a.length) {G__39304__a[G__39304__i] = arguments[G__39304__i + 0]; ++G__39304__i;}
  args = new cljs.core.IndexedSeq(G__39304__a,0);
} 
return G__39303__delegate.call(this,args);};
G__39303.cljs$lang$maxFixedArity = 0;
G__39303.cljs$lang$applyTo = (function (arglist__39305){
var args = cljs.core.seq(arglist__39305);
return G__39303__delegate(args);
});
G__39303.cljs$core$IFn$_invoke$arity$variadic = G__39303__delegate;
return G__39303;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__39306__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__39306 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39307__i = 0, G__39307__a = new Array(arguments.length -  0);
while (G__39307__i < G__39307__a.length) {G__39307__a[G__39307__i] = arguments[G__39307__i + 0]; ++G__39307__i;}
  args = new cljs.core.IndexedSeq(G__39307__a,0);
} 
return G__39306__delegate.call(this,args);};
G__39306.cljs$lang$maxFixedArity = 0;
G__39306.cljs$lang$applyTo = (function (arglist__39308){
var args = cljs.core.seq(arglist__39308);
return G__39306__delegate(args);
});
G__39306.cljs$core$IFn$_invoke$arity$variadic = G__39306__delegate;
return G__39306;
})()
;

return null;
});
