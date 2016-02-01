goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10387__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10387 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10388__i = 0, G__10388__a = new Array(arguments.length -  0);
while (G__10388__i < G__10388__a.length) {G__10388__a[G__10388__i] = arguments[G__10388__i + 0]; ++G__10388__i;}
  args = new cljs.core.IndexedSeq(G__10388__a,0);
} 
return G__10387__delegate.call(this,args);};
G__10387.cljs$lang$maxFixedArity = 0;
G__10387.cljs$lang$applyTo = (function (arglist__10389){
var args = cljs.core.seq(arglist__10389);
return G__10387__delegate(args);
});
G__10387.cljs$core$IFn$_invoke$arity$variadic = G__10387__delegate;
return G__10387;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10390__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10390 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10391__i = 0, G__10391__a = new Array(arguments.length -  0);
while (G__10391__i < G__10391__a.length) {G__10391__a[G__10391__i] = arguments[G__10391__i + 0]; ++G__10391__i;}
  args = new cljs.core.IndexedSeq(G__10391__a,0);
} 
return G__10390__delegate.call(this,args);};
G__10390.cljs$lang$maxFixedArity = 0;
G__10390.cljs$lang$applyTo = (function (arglist__10392){
var args = cljs.core.seq(arglist__10392);
return G__10390__delegate(args);
});
G__10390.cljs$core$IFn$_invoke$arity$variadic = G__10390__delegate;
return G__10390;
})()
;

return null;
});
