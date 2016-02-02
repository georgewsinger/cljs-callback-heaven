goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12773__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12773 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12774__i = 0, G__12774__a = new Array(arguments.length -  0);
while (G__12774__i < G__12774__a.length) {G__12774__a[G__12774__i] = arguments[G__12774__i + 0]; ++G__12774__i;}
  args = new cljs.core.IndexedSeq(G__12774__a,0);
} 
return G__12773__delegate.call(this,args);};
G__12773.cljs$lang$maxFixedArity = 0;
G__12773.cljs$lang$applyTo = (function (arglist__12775){
var args = cljs.core.seq(arglist__12775);
return G__12773__delegate(args);
});
G__12773.cljs$core$IFn$_invoke$arity$variadic = G__12773__delegate;
return G__12773;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12776__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12776 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12777__i = 0, G__12777__a = new Array(arguments.length -  0);
while (G__12777__i < G__12777__a.length) {G__12777__a[G__12777__i] = arguments[G__12777__i + 0]; ++G__12777__i;}
  args = new cljs.core.IndexedSeq(G__12777__a,0);
} 
return G__12776__delegate.call(this,args);};
G__12776.cljs$lang$maxFixedArity = 0;
G__12776.cljs$lang$applyTo = (function (arglist__12778){
var args = cljs.core.seq(arglist__12778);
return G__12776__delegate(args);
});
G__12776.cljs$core$IFn$_invoke$arity$variadic = G__12776__delegate;
return G__12776;
})()
;

return null;
});
