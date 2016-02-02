goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__24847__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__24847 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24848__i = 0, G__24848__a = new Array(arguments.length -  0);
while (G__24848__i < G__24848__a.length) {G__24848__a[G__24848__i] = arguments[G__24848__i + 0]; ++G__24848__i;}
  args = new cljs.core.IndexedSeq(G__24848__a,0);
} 
return G__24847__delegate.call(this,args);};
G__24847.cljs$lang$maxFixedArity = 0;
G__24847.cljs$lang$applyTo = (function (arglist__24849){
var args = cljs.core.seq(arglist__24849);
return G__24847__delegate(args);
});
G__24847.cljs$core$IFn$_invoke$arity$variadic = G__24847__delegate;
return G__24847;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__24850__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__24850 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24851__i = 0, G__24851__a = new Array(arguments.length -  0);
while (G__24851__i < G__24851__a.length) {G__24851__a[G__24851__i] = arguments[G__24851__i + 0]; ++G__24851__i;}
  args = new cljs.core.IndexedSeq(G__24851__a,0);
} 
return G__24850__delegate.call(this,args);};
G__24850.cljs$lang$maxFixedArity = 0;
G__24850.cljs$lang$applyTo = (function (arglist__24852){
var args = cljs.core.seq(arglist__24852);
return G__24850__delegate(args);
});
G__24850.cljs$core$IFn$_invoke$arity$variadic = G__24850__delegate;
return G__24850;
})()
;

return null;
});
