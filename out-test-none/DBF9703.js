goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__213037__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__213037 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__213038__i = 0, G__213038__a = new Array(arguments.length -  0);
while (G__213038__i < G__213038__a.length) {G__213038__a[G__213038__i] = arguments[G__213038__i + 0]; ++G__213038__i;}
  args = new cljs.core.IndexedSeq(G__213038__a,0);
} 
return G__213037__delegate.call(this,args);};
G__213037.cljs$lang$maxFixedArity = 0;
G__213037.cljs$lang$applyTo = (function (arglist__213039){
var args = cljs.core.seq(arglist__213039);
return G__213037__delegate(args);
});
G__213037.cljs$core$IFn$_invoke$arity$variadic = G__213037__delegate;
return G__213037;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__213040__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__213040 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__213041__i = 0, G__213041__a = new Array(arguments.length -  0);
while (G__213041__i < G__213041__a.length) {G__213041__a[G__213041__i] = arguments[G__213041__i + 0]; ++G__213041__i;}
  args = new cljs.core.IndexedSeq(G__213041__a,0);
} 
return G__213040__delegate.call(this,args);};
G__213040.cljs$lang$maxFixedArity = 0;
G__213040.cljs$lang$applyTo = (function (arglist__213042){
var args = cljs.core.seq(arglist__213042);
return G__213040__delegate(args);
});
G__213040.cljs$core$IFn$_invoke$arity$variadic = G__213040__delegate;
return G__213040;
})()
;

return null;
});
