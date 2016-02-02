goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__23831__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__23831 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23832__i = 0, G__23832__a = new Array(arguments.length -  0);
while (G__23832__i < G__23832__a.length) {G__23832__a[G__23832__i] = arguments[G__23832__i + 0]; ++G__23832__i;}
  args = new cljs.core.IndexedSeq(G__23832__a,0);
} 
return G__23831__delegate.call(this,args);};
G__23831.cljs$lang$maxFixedArity = 0;
G__23831.cljs$lang$applyTo = (function (arglist__23833){
var args = cljs.core.seq(arglist__23833);
return G__23831__delegate(args);
});
G__23831.cljs$core$IFn$_invoke$arity$variadic = G__23831__delegate;
return G__23831;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__23834__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__23834 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23835__i = 0, G__23835__a = new Array(arguments.length -  0);
while (G__23835__i < G__23835__a.length) {G__23835__a[G__23835__i] = arguments[G__23835__i + 0]; ++G__23835__i;}
  args = new cljs.core.IndexedSeq(G__23835__a,0);
} 
return G__23834__delegate.call(this,args);};
G__23834.cljs$lang$maxFixedArity = 0;
G__23834.cljs$lang$applyTo = (function (arglist__23836){
var args = cljs.core.seq(arglist__23836);
return G__23834__delegate(args);
});
G__23834.cljs$core$IFn$_invoke$arity$variadic = G__23834__delegate;
return G__23834;
})()
;

return null;
});
