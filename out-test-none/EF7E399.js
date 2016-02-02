goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__165070__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__165070 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__165071__i = 0, G__165071__a = new Array(arguments.length -  0);
while (G__165071__i < G__165071__a.length) {G__165071__a[G__165071__i] = arguments[G__165071__i + 0]; ++G__165071__i;}
  args = new cljs.core.IndexedSeq(G__165071__a,0);
} 
return G__165070__delegate.call(this,args);};
G__165070.cljs$lang$maxFixedArity = 0;
G__165070.cljs$lang$applyTo = (function (arglist__165072){
var args = cljs.core.seq(arglist__165072);
return G__165070__delegate(args);
});
G__165070.cljs$core$IFn$_invoke$arity$variadic = G__165070__delegate;
return G__165070;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__165073__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__165073 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__165074__i = 0, G__165074__a = new Array(arguments.length -  0);
while (G__165074__i < G__165074__a.length) {G__165074__a[G__165074__i] = arguments[G__165074__i + 0]; ++G__165074__i;}
  args = new cljs.core.IndexedSeq(G__165074__a,0);
} 
return G__165073__delegate.call(this,args);};
G__165073.cljs$lang$maxFixedArity = 0;
G__165073.cljs$lang$applyTo = (function (arglist__165075){
var args = cljs.core.seq(arglist__165075);
return G__165073__delegate(args);
});
G__165073.cljs$core$IFn$_invoke$arity$variadic = G__165073__delegate;
return G__165073;
})()
;

return null;
});
