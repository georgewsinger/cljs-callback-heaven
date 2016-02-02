goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__52068__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__52068 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52069__i = 0, G__52069__a = new Array(arguments.length -  0);
while (G__52069__i < G__52069__a.length) {G__52069__a[G__52069__i] = arguments[G__52069__i + 0]; ++G__52069__i;}
  args = new cljs.core.IndexedSeq(G__52069__a,0);
} 
return G__52068__delegate.call(this,args);};
G__52068.cljs$lang$maxFixedArity = 0;
G__52068.cljs$lang$applyTo = (function (arglist__52070){
var args = cljs.core.seq(arglist__52070);
return G__52068__delegate(args);
});
G__52068.cljs$core$IFn$_invoke$arity$variadic = G__52068__delegate;
return G__52068;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__52071__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__52071 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52072__i = 0, G__52072__a = new Array(arguments.length -  0);
while (G__52072__i < G__52072__a.length) {G__52072__a[G__52072__i] = arguments[G__52072__i + 0]; ++G__52072__i;}
  args = new cljs.core.IndexedSeq(G__52072__a,0);
} 
return G__52071__delegate.call(this,args);};
G__52071.cljs$lang$maxFixedArity = 0;
G__52071.cljs$lang$applyTo = (function (arglist__52073){
var args = cljs.core.seq(arglist__52073);
return G__52071__delegate(args);
});
G__52071.cljs$core$IFn$_invoke$arity$variadic = G__52071__delegate;
return G__52071;
})()
;

return null;
});
