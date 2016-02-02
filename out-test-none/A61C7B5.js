goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__21498__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__21498 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21499__i = 0, G__21499__a = new Array(arguments.length -  0);
while (G__21499__i < G__21499__a.length) {G__21499__a[G__21499__i] = arguments[G__21499__i + 0]; ++G__21499__i;}
  args = new cljs.core.IndexedSeq(G__21499__a,0);
} 
return G__21498__delegate.call(this,args);};
G__21498.cljs$lang$maxFixedArity = 0;
G__21498.cljs$lang$applyTo = (function (arglist__21500){
var args = cljs.core.seq(arglist__21500);
return G__21498__delegate(args);
});
G__21498.cljs$core$IFn$_invoke$arity$variadic = G__21498__delegate;
return G__21498;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__21501__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__21501 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21502__i = 0, G__21502__a = new Array(arguments.length -  0);
while (G__21502__i < G__21502__a.length) {G__21502__a[G__21502__i] = arguments[G__21502__i + 0]; ++G__21502__i;}
  args = new cljs.core.IndexedSeq(G__21502__a,0);
} 
return G__21501__delegate.call(this,args);};
G__21501.cljs$lang$maxFixedArity = 0;
G__21501.cljs$lang$applyTo = (function (arglist__21503){
var args = cljs.core.seq(arglist__21503);
return G__21501__delegate(args);
});
G__21501.cljs$core$IFn$_invoke$arity$variadic = G__21501__delegate;
return G__21501;
})()
;

return null;
});
