goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__54297__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__54297 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54298__i = 0, G__54298__a = new Array(arguments.length -  0);
while (G__54298__i < G__54298__a.length) {G__54298__a[G__54298__i] = arguments[G__54298__i + 0]; ++G__54298__i;}
  args = new cljs.core.IndexedSeq(G__54298__a,0);
} 
return G__54297__delegate.call(this,args);};
G__54297.cljs$lang$maxFixedArity = 0;
G__54297.cljs$lang$applyTo = (function (arglist__54299){
var args = cljs.core.seq(arglist__54299);
return G__54297__delegate(args);
});
G__54297.cljs$core$IFn$_invoke$arity$variadic = G__54297__delegate;
return G__54297;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__54300__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__54300 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54301__i = 0, G__54301__a = new Array(arguments.length -  0);
while (G__54301__i < G__54301__a.length) {G__54301__a[G__54301__i] = arguments[G__54301__i + 0]; ++G__54301__i;}
  args = new cljs.core.IndexedSeq(G__54301__a,0);
} 
return G__54300__delegate.call(this,args);};
G__54300.cljs$lang$maxFixedArity = 0;
G__54300.cljs$lang$applyTo = (function (arglist__54302){
var args = cljs.core.seq(arglist__54302);
return G__54300__delegate(args);
});
G__54300.cljs$core$IFn$_invoke$arity$variadic = G__54300__delegate;
return G__54300;
})()
;

return null;
});
