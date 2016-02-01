goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9160__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9160 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9161__i = 0, G__9161__a = new Array(arguments.length -  0);
while (G__9161__i < G__9161__a.length) {G__9161__a[G__9161__i] = arguments[G__9161__i + 0]; ++G__9161__i;}
  args = new cljs.core.IndexedSeq(G__9161__a,0);
} 
return G__9160__delegate.call(this,args);};
G__9160.cljs$lang$maxFixedArity = 0;
G__9160.cljs$lang$applyTo = (function (arglist__9162){
var args = cljs.core.seq(arglist__9162);
return G__9160__delegate(args);
});
G__9160.cljs$core$IFn$_invoke$arity$variadic = G__9160__delegate;
return G__9160;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9163__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9163 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9164__i = 0, G__9164__a = new Array(arguments.length -  0);
while (G__9164__i < G__9164__a.length) {G__9164__a[G__9164__i] = arguments[G__9164__i + 0]; ++G__9164__i;}
  args = new cljs.core.IndexedSeq(G__9164__a,0);
} 
return G__9163__delegate.call(this,args);};
G__9163.cljs$lang$maxFixedArity = 0;
G__9163.cljs$lang$applyTo = (function (arglist__9165){
var args = cljs.core.seq(arglist__9165);
return G__9163__delegate(args);
});
G__9163.cljs$core$IFn$_invoke$arity$variadic = G__9163__delegate;
return G__9163;
})()
;

return null;
});
