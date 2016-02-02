goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__30695__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__30695 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30696__i = 0, G__30696__a = new Array(arguments.length -  0);
while (G__30696__i < G__30696__a.length) {G__30696__a[G__30696__i] = arguments[G__30696__i + 0]; ++G__30696__i;}
  args = new cljs.core.IndexedSeq(G__30696__a,0);
} 
return G__30695__delegate.call(this,args);};
G__30695.cljs$lang$maxFixedArity = 0;
G__30695.cljs$lang$applyTo = (function (arglist__30697){
var args = cljs.core.seq(arglist__30697);
return G__30695__delegate(args);
});
G__30695.cljs$core$IFn$_invoke$arity$variadic = G__30695__delegate;
return G__30695;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__30698__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__30698 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30699__i = 0, G__30699__a = new Array(arguments.length -  0);
while (G__30699__i < G__30699__a.length) {G__30699__a[G__30699__i] = arguments[G__30699__i + 0]; ++G__30699__i;}
  args = new cljs.core.IndexedSeq(G__30699__a,0);
} 
return G__30698__delegate.call(this,args);};
G__30698.cljs$lang$maxFixedArity = 0;
G__30698.cljs$lang$applyTo = (function (arglist__30700){
var args = cljs.core.seq(arglist__30700);
return G__30698__delegate(args);
});
G__30698.cljs$core$IFn$_invoke$arity$variadic = G__30698__delegate;
return G__30698;
})()
;

return null;
});
