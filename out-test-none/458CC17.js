goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16416__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16416 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16417__i = 0, G__16417__a = new Array(arguments.length -  0);
while (G__16417__i < G__16417__a.length) {G__16417__a[G__16417__i] = arguments[G__16417__i + 0]; ++G__16417__i;}
  args = new cljs.core.IndexedSeq(G__16417__a,0);
} 
return G__16416__delegate.call(this,args);};
G__16416.cljs$lang$maxFixedArity = 0;
G__16416.cljs$lang$applyTo = (function (arglist__16418){
var args = cljs.core.seq(arglist__16418);
return G__16416__delegate(args);
});
G__16416.cljs$core$IFn$_invoke$arity$variadic = G__16416__delegate;
return G__16416;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16419__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16419 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16420__i = 0, G__16420__a = new Array(arguments.length -  0);
while (G__16420__i < G__16420__a.length) {G__16420__a[G__16420__i] = arguments[G__16420__i + 0]; ++G__16420__i;}
  args = new cljs.core.IndexedSeq(G__16420__a,0);
} 
return G__16419__delegate.call(this,args);};
G__16419.cljs$lang$maxFixedArity = 0;
G__16419.cljs$lang$applyTo = (function (arglist__16421){
var args = cljs.core.seq(arglist__16421);
return G__16419__delegate(args);
});
G__16419.cljs$core$IFn$_invoke$arity$variadic = G__16419__delegate;
return G__16419;
})()
;

return null;
});
