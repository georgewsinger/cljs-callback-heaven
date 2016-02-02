goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10754__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10754 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10755__i = 0, G__10755__a = new Array(arguments.length -  0);
while (G__10755__i < G__10755__a.length) {G__10755__a[G__10755__i] = arguments[G__10755__i + 0]; ++G__10755__i;}
  args = new cljs.core.IndexedSeq(G__10755__a,0);
} 
return G__10754__delegate.call(this,args);};
G__10754.cljs$lang$maxFixedArity = 0;
G__10754.cljs$lang$applyTo = (function (arglist__10756){
var args = cljs.core.seq(arglist__10756);
return G__10754__delegate(args);
});
G__10754.cljs$core$IFn$_invoke$arity$variadic = G__10754__delegate;
return G__10754;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10757__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10757 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10758__i = 0, G__10758__a = new Array(arguments.length -  0);
while (G__10758__i < G__10758__a.length) {G__10758__a[G__10758__i] = arguments[G__10758__i + 0]; ++G__10758__i;}
  args = new cljs.core.IndexedSeq(G__10758__a,0);
} 
return G__10757__delegate.call(this,args);};
G__10757.cljs$lang$maxFixedArity = 0;
G__10757.cljs$lang$applyTo = (function (arglist__10759){
var args = cljs.core.seq(arglist__10759);
return G__10757__delegate(args);
});
G__10757.cljs$core$IFn$_invoke$arity$variadic = G__10757__delegate;
return G__10757;
})()
;

return null;
});
