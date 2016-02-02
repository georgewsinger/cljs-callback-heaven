goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__35047__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__35047 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35048__i = 0, G__35048__a = new Array(arguments.length -  0);
while (G__35048__i < G__35048__a.length) {G__35048__a[G__35048__i] = arguments[G__35048__i + 0]; ++G__35048__i;}
  args = new cljs.core.IndexedSeq(G__35048__a,0);
} 
return G__35047__delegate.call(this,args);};
G__35047.cljs$lang$maxFixedArity = 0;
G__35047.cljs$lang$applyTo = (function (arglist__35049){
var args = cljs.core.seq(arglist__35049);
return G__35047__delegate(args);
});
G__35047.cljs$core$IFn$_invoke$arity$variadic = G__35047__delegate;
return G__35047;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__35050__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__35050 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35051__i = 0, G__35051__a = new Array(arguments.length -  0);
while (G__35051__i < G__35051__a.length) {G__35051__a[G__35051__i] = arguments[G__35051__i + 0]; ++G__35051__i;}
  args = new cljs.core.IndexedSeq(G__35051__a,0);
} 
return G__35050__delegate.call(this,args);};
G__35050.cljs$lang$maxFixedArity = 0;
G__35050.cljs$lang$applyTo = (function (arglist__35052){
var args = cljs.core.seq(arglist__35052);
return G__35050__delegate(args);
});
G__35050.cljs$core$IFn$_invoke$arity$variadic = G__35050__delegate;
return G__35050;
})()
;

return null;
});
