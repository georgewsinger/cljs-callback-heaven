goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10903__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10903 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10904__i = 0, G__10904__a = new Array(arguments.length -  0);
while (G__10904__i < G__10904__a.length) {G__10904__a[G__10904__i] = arguments[G__10904__i + 0]; ++G__10904__i;}
  args = new cljs.core.IndexedSeq(G__10904__a,0);
} 
return G__10903__delegate.call(this,args);};
G__10903.cljs$lang$maxFixedArity = 0;
G__10903.cljs$lang$applyTo = (function (arglist__10905){
var args = cljs.core.seq(arglist__10905);
return G__10903__delegate(args);
});
G__10903.cljs$core$IFn$_invoke$arity$variadic = G__10903__delegate;
return G__10903;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10906__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10906 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10907__i = 0, G__10907__a = new Array(arguments.length -  0);
while (G__10907__i < G__10907__a.length) {G__10907__a[G__10907__i] = arguments[G__10907__i + 0]; ++G__10907__i;}
  args = new cljs.core.IndexedSeq(G__10907__a,0);
} 
return G__10906__delegate.call(this,args);};
G__10906.cljs$lang$maxFixedArity = 0;
G__10906.cljs$lang$applyTo = (function (arglist__10908){
var args = cljs.core.seq(arglist__10908);
return G__10906__delegate(args);
});
G__10906.cljs$core$IFn$_invoke$arity$variadic = G__10906__delegate;
return G__10906;
})()
;

return null;
});
