goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15876__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15876 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15877__i = 0, G__15877__a = new Array(arguments.length -  0);
while (G__15877__i < G__15877__a.length) {G__15877__a[G__15877__i] = arguments[G__15877__i + 0]; ++G__15877__i;}
  args = new cljs.core.IndexedSeq(G__15877__a,0);
} 
return G__15876__delegate.call(this,args);};
G__15876.cljs$lang$maxFixedArity = 0;
G__15876.cljs$lang$applyTo = (function (arglist__15878){
var args = cljs.core.seq(arglist__15878);
return G__15876__delegate(args);
});
G__15876.cljs$core$IFn$_invoke$arity$variadic = G__15876__delegate;
return G__15876;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15879__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15879 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15880__i = 0, G__15880__a = new Array(arguments.length -  0);
while (G__15880__i < G__15880__a.length) {G__15880__a[G__15880__i] = arguments[G__15880__i + 0]; ++G__15880__i;}
  args = new cljs.core.IndexedSeq(G__15880__a,0);
} 
return G__15879__delegate.call(this,args);};
G__15879.cljs$lang$maxFixedArity = 0;
G__15879.cljs$lang$applyTo = (function (arglist__15881){
var args = cljs.core.seq(arglist__15881);
return G__15879__delegate(args);
});
G__15879.cljs$core$IFn$_invoke$arity$variadic = G__15879__delegate;
return G__15879;
})()
;

return null;
});
