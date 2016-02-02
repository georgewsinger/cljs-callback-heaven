goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__159418__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__159418 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__159419__i = 0, G__159419__a = new Array(arguments.length -  0);
while (G__159419__i < G__159419__a.length) {G__159419__a[G__159419__i] = arguments[G__159419__i + 0]; ++G__159419__i;}
  args = new cljs.core.IndexedSeq(G__159419__a,0);
} 
return G__159418__delegate.call(this,args);};
G__159418.cljs$lang$maxFixedArity = 0;
G__159418.cljs$lang$applyTo = (function (arglist__159420){
var args = cljs.core.seq(arglist__159420);
return G__159418__delegate(args);
});
G__159418.cljs$core$IFn$_invoke$arity$variadic = G__159418__delegate;
return G__159418;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__159421__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__159421 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__159422__i = 0, G__159422__a = new Array(arguments.length -  0);
while (G__159422__i < G__159422__a.length) {G__159422__a[G__159422__i] = arguments[G__159422__i + 0]; ++G__159422__i;}
  args = new cljs.core.IndexedSeq(G__159422__a,0);
} 
return G__159421__delegate.call(this,args);};
G__159421.cljs$lang$maxFixedArity = 0;
G__159421.cljs$lang$applyTo = (function (arglist__159423){
var args = cljs.core.seq(arglist__159423);
return G__159421__delegate(args);
});
G__159421.cljs$core$IFn$_invoke$arity$variadic = G__159421__delegate;
return G__159421;
})()
;

return null;
});
