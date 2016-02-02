goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__105812__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__105812 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__105813__i = 0, G__105813__a = new Array(arguments.length -  0);
while (G__105813__i < G__105813__a.length) {G__105813__a[G__105813__i] = arguments[G__105813__i + 0]; ++G__105813__i;}
  args = new cljs.core.IndexedSeq(G__105813__a,0);
} 
return G__105812__delegate.call(this,args);};
G__105812.cljs$lang$maxFixedArity = 0;
G__105812.cljs$lang$applyTo = (function (arglist__105814){
var args = cljs.core.seq(arglist__105814);
return G__105812__delegate(args);
});
G__105812.cljs$core$IFn$_invoke$arity$variadic = G__105812__delegate;
return G__105812;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__105815__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__105815 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__105816__i = 0, G__105816__a = new Array(arguments.length -  0);
while (G__105816__i < G__105816__a.length) {G__105816__a[G__105816__i] = arguments[G__105816__i + 0]; ++G__105816__i;}
  args = new cljs.core.IndexedSeq(G__105816__a,0);
} 
return G__105815__delegate.call(this,args);};
G__105815.cljs$lang$maxFixedArity = 0;
G__105815.cljs$lang$applyTo = (function (arglist__105817){
var args = cljs.core.seq(arglist__105817);
return G__105815__delegate(args);
});
G__105815.cljs$core$IFn$_invoke$arity$variadic = G__105815__delegate;
return G__105815;
})()
;

return null;
});
