goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__44264__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__44264 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44265__i = 0, G__44265__a = new Array(arguments.length -  0);
while (G__44265__i < G__44265__a.length) {G__44265__a[G__44265__i] = arguments[G__44265__i + 0]; ++G__44265__i;}
  args = new cljs.core.IndexedSeq(G__44265__a,0);
} 
return G__44264__delegate.call(this,args);};
G__44264.cljs$lang$maxFixedArity = 0;
G__44264.cljs$lang$applyTo = (function (arglist__44266){
var args = cljs.core.seq(arglist__44266);
return G__44264__delegate(args);
});
G__44264.cljs$core$IFn$_invoke$arity$variadic = G__44264__delegate;
return G__44264;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__44267__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__44267 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44268__i = 0, G__44268__a = new Array(arguments.length -  0);
while (G__44268__i < G__44268__a.length) {G__44268__a[G__44268__i] = arguments[G__44268__i + 0]; ++G__44268__i;}
  args = new cljs.core.IndexedSeq(G__44268__a,0);
} 
return G__44267__delegate.call(this,args);};
G__44267.cljs$lang$maxFixedArity = 0;
G__44267.cljs$lang$applyTo = (function (arglist__44269){
var args = cljs.core.seq(arglist__44269);
return G__44267__delegate(args);
});
G__44267.cljs$core$IFn$_invoke$arity$variadic = G__44267__delegate;
return G__44267;
})()
;

return null;
});
