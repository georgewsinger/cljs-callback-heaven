goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__49834__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__49834 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49835__i = 0, G__49835__a = new Array(arguments.length -  0);
while (G__49835__i < G__49835__a.length) {G__49835__a[G__49835__i] = arguments[G__49835__i + 0]; ++G__49835__i;}
  args = new cljs.core.IndexedSeq(G__49835__a,0);
} 
return G__49834__delegate.call(this,args);};
G__49834.cljs$lang$maxFixedArity = 0;
G__49834.cljs$lang$applyTo = (function (arglist__49836){
var args = cljs.core.seq(arglist__49836);
return G__49834__delegate(args);
});
G__49834.cljs$core$IFn$_invoke$arity$variadic = G__49834__delegate;
return G__49834;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__49837__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__49837 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49838__i = 0, G__49838__a = new Array(arguments.length -  0);
while (G__49838__i < G__49838__a.length) {G__49838__a[G__49838__i] = arguments[G__49838__i + 0]; ++G__49838__i;}
  args = new cljs.core.IndexedSeq(G__49838__a,0);
} 
return G__49837__delegate.call(this,args);};
G__49837.cljs$lang$maxFixedArity = 0;
G__49837.cljs$lang$applyTo = (function (arglist__49839){
var args = cljs.core.seq(arglist__49839);
return G__49837__delegate(args);
});
G__49837.cljs$core$IFn$_invoke$arity$variadic = G__49837__delegate;
return G__49837;
})()
;

return null;
});
