goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10475__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10475 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10476__i = 0, G__10476__a = new Array(arguments.length -  0);
while (G__10476__i < G__10476__a.length) {G__10476__a[G__10476__i] = arguments[G__10476__i + 0]; ++G__10476__i;}
  args = new cljs.core.IndexedSeq(G__10476__a,0);
} 
return G__10475__delegate.call(this,args);};
G__10475.cljs$lang$maxFixedArity = 0;
G__10475.cljs$lang$applyTo = (function (arglist__10477){
var args = cljs.core.seq(arglist__10477);
return G__10475__delegate(args);
});
G__10475.cljs$core$IFn$_invoke$arity$variadic = G__10475__delegate;
return G__10475;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10478__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10478 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10479__i = 0, G__10479__a = new Array(arguments.length -  0);
while (G__10479__i < G__10479__a.length) {G__10479__a[G__10479__i] = arguments[G__10479__i + 0]; ++G__10479__i;}
  args = new cljs.core.IndexedSeq(G__10479__a,0);
} 
return G__10478__delegate.call(this,args);};
G__10478.cljs$lang$maxFixedArity = 0;
G__10478.cljs$lang$applyTo = (function (arglist__10480){
var args = cljs.core.seq(arglist__10480);
return G__10478__delegate(args);
});
G__10478.cljs$core$IFn$_invoke$arity$variadic = G__10478__delegate;
return G__10478;
})()
;

return null;
});
