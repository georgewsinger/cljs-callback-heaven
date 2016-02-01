goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16206__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16206 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16207__i = 0, G__16207__a = new Array(arguments.length -  0);
while (G__16207__i < G__16207__a.length) {G__16207__a[G__16207__i] = arguments[G__16207__i + 0]; ++G__16207__i;}
  args = new cljs.core.IndexedSeq(G__16207__a,0);
} 
return G__16206__delegate.call(this,args);};
G__16206.cljs$lang$maxFixedArity = 0;
G__16206.cljs$lang$applyTo = (function (arglist__16208){
var args = cljs.core.seq(arglist__16208);
return G__16206__delegate(args);
});
G__16206.cljs$core$IFn$_invoke$arity$variadic = G__16206__delegate;
return G__16206;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16209__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16209 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16210__i = 0, G__16210__a = new Array(arguments.length -  0);
while (G__16210__i < G__16210__a.length) {G__16210__a[G__16210__i] = arguments[G__16210__i + 0]; ++G__16210__i;}
  args = new cljs.core.IndexedSeq(G__16210__a,0);
} 
return G__16209__delegate.call(this,args);};
G__16209.cljs$lang$maxFixedArity = 0;
G__16209.cljs$lang$applyTo = (function (arglist__16211){
var args = cljs.core.seq(arglist__16211);
return G__16209__delegate(args);
});
G__16209.cljs$core$IFn$_invoke$arity$variadic = G__16209__delegate;
return G__16209;
})()
;

return null;
});
