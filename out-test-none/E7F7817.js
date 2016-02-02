goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__165081__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__165081 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__165082__i = 0, G__165082__a = new Array(arguments.length -  0);
while (G__165082__i < G__165082__a.length) {G__165082__a[G__165082__i] = arguments[G__165082__i + 0]; ++G__165082__i;}
  args = new cljs.core.IndexedSeq(G__165082__a,0);
} 
return G__165081__delegate.call(this,args);};
G__165081.cljs$lang$maxFixedArity = 0;
G__165081.cljs$lang$applyTo = (function (arglist__165083){
var args = cljs.core.seq(arglist__165083);
return G__165081__delegate(args);
});
G__165081.cljs$core$IFn$_invoke$arity$variadic = G__165081__delegate;
return G__165081;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__165084__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__165084 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__165085__i = 0, G__165085__a = new Array(arguments.length -  0);
while (G__165085__i < G__165085__a.length) {G__165085__a[G__165085__i] = arguments[G__165085__i + 0]; ++G__165085__i;}
  args = new cljs.core.IndexedSeq(G__165085__a,0);
} 
return G__165084__delegate.call(this,args);};
G__165084.cljs$lang$maxFixedArity = 0;
G__165084.cljs$lang$applyTo = (function (arglist__165086){
var args = cljs.core.seq(arglist__165086);
return G__165084__delegate(args);
});
G__165084.cljs$core$IFn$_invoke$arity$variadic = G__165084__delegate;
return G__165084;
})()
;

return null;
});
