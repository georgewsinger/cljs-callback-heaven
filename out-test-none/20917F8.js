goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__128163__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__128163 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__128164__i = 0, G__128164__a = new Array(arguments.length -  0);
while (G__128164__i < G__128164__a.length) {G__128164__a[G__128164__i] = arguments[G__128164__i + 0]; ++G__128164__i;}
  args = new cljs.core.IndexedSeq(G__128164__a,0);
} 
return G__128163__delegate.call(this,args);};
G__128163.cljs$lang$maxFixedArity = 0;
G__128163.cljs$lang$applyTo = (function (arglist__128165){
var args = cljs.core.seq(arglist__128165);
return G__128163__delegate(args);
});
G__128163.cljs$core$IFn$_invoke$arity$variadic = G__128163__delegate;
return G__128163;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__128166__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__128166 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__128167__i = 0, G__128167__a = new Array(arguments.length -  0);
while (G__128167__i < G__128167__a.length) {G__128167__a[G__128167__i] = arguments[G__128167__i + 0]; ++G__128167__i;}
  args = new cljs.core.IndexedSeq(G__128167__a,0);
} 
return G__128166__delegate.call(this,args);};
G__128166.cljs$lang$maxFixedArity = 0;
G__128166.cljs$lang$applyTo = (function (arglist__128168){
var args = cljs.core.seq(arglist__128168);
return G__128166__delegate(args);
});
G__128166.cljs$core$IFn$_invoke$arity$variadic = G__128166__delegate;
return G__128166;
})()
;

return null;
});
