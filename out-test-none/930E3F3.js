goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10466__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10466 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10467__i = 0, G__10467__a = new Array(arguments.length -  0);
while (G__10467__i < G__10467__a.length) {G__10467__a[G__10467__i] = arguments[G__10467__i + 0]; ++G__10467__i;}
  args = new cljs.core.IndexedSeq(G__10467__a,0);
} 
return G__10466__delegate.call(this,args);};
G__10466.cljs$lang$maxFixedArity = 0;
G__10466.cljs$lang$applyTo = (function (arglist__10468){
var args = cljs.core.seq(arglist__10468);
return G__10466__delegate(args);
});
G__10466.cljs$core$IFn$_invoke$arity$variadic = G__10466__delegate;
return G__10466;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10469__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10469 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10470__i = 0, G__10470__a = new Array(arguments.length -  0);
while (G__10470__i < G__10470__a.length) {G__10470__a[G__10470__i] = arguments[G__10470__i + 0]; ++G__10470__i;}
  args = new cljs.core.IndexedSeq(G__10470__a,0);
} 
return G__10469__delegate.call(this,args);};
G__10469.cljs$lang$maxFixedArity = 0;
G__10469.cljs$lang$applyTo = (function (arglist__10471){
var args = cljs.core.seq(arglist__10471);
return G__10469__delegate(args);
});
G__10469.cljs$core$IFn$_invoke$arity$variadic = G__10469__delegate;
return G__10469;
})()
;

return null;
});
