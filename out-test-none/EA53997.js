goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__109024__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__109024 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__109025__i = 0, G__109025__a = new Array(arguments.length -  0);
while (G__109025__i < G__109025__a.length) {G__109025__a[G__109025__i] = arguments[G__109025__i + 0]; ++G__109025__i;}
  args = new cljs.core.IndexedSeq(G__109025__a,0);
} 
return G__109024__delegate.call(this,args);};
G__109024.cljs$lang$maxFixedArity = 0;
G__109024.cljs$lang$applyTo = (function (arglist__109026){
var args = cljs.core.seq(arglist__109026);
return G__109024__delegate(args);
});
G__109024.cljs$core$IFn$_invoke$arity$variadic = G__109024__delegate;
return G__109024;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__109027__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__109027 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__109028__i = 0, G__109028__a = new Array(arguments.length -  0);
while (G__109028__i < G__109028__a.length) {G__109028__a[G__109028__i] = arguments[G__109028__i + 0]; ++G__109028__i;}
  args = new cljs.core.IndexedSeq(G__109028__a,0);
} 
return G__109027__delegate.call(this,args);};
G__109027.cljs$lang$maxFixedArity = 0;
G__109027.cljs$lang$applyTo = (function (arglist__109029){
var args = cljs.core.seq(arglist__109029);
return G__109027__delegate(args);
});
G__109027.cljs$core$IFn$_invoke$arity$variadic = G__109027__delegate;
return G__109027;
})()
;

return null;
});
