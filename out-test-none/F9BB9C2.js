goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__102600__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__102600 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__102601__i = 0, G__102601__a = new Array(arguments.length -  0);
while (G__102601__i < G__102601__a.length) {G__102601__a[G__102601__i] = arguments[G__102601__i + 0]; ++G__102601__i;}
  args = new cljs.core.IndexedSeq(G__102601__a,0);
} 
return G__102600__delegate.call(this,args);};
G__102600.cljs$lang$maxFixedArity = 0;
G__102600.cljs$lang$applyTo = (function (arglist__102602){
var args = cljs.core.seq(arglist__102602);
return G__102600__delegate(args);
});
G__102600.cljs$core$IFn$_invoke$arity$variadic = G__102600__delegate;
return G__102600;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__102603__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__102603 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__102604__i = 0, G__102604__a = new Array(arguments.length -  0);
while (G__102604__i < G__102604__a.length) {G__102604__a[G__102604__i] = arguments[G__102604__i + 0]; ++G__102604__i;}
  args = new cljs.core.IndexedSeq(G__102604__a,0);
} 
return G__102603__delegate.call(this,args);};
G__102603.cljs$lang$maxFixedArity = 0;
G__102603.cljs$lang$applyTo = (function (arglist__102605){
var args = cljs.core.seq(arglist__102605);
return G__102603__delegate(args);
});
G__102603.cljs$core$IFn$_invoke$arity$variadic = G__102603__delegate;
return G__102603;
})()
;

return null;
});
