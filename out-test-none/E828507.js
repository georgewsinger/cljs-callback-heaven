goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__17182__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__17182 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17183__i = 0, G__17183__a = new Array(arguments.length -  0);
while (G__17183__i < G__17183__a.length) {G__17183__a[G__17183__i] = arguments[G__17183__i + 0]; ++G__17183__i;}
  args = new cljs.core.IndexedSeq(G__17183__a,0);
} 
return G__17182__delegate.call(this,args);};
G__17182.cljs$lang$maxFixedArity = 0;
G__17182.cljs$lang$applyTo = (function (arglist__17184){
var args = cljs.core.seq(arglist__17184);
return G__17182__delegate(args);
});
G__17182.cljs$core$IFn$_invoke$arity$variadic = G__17182__delegate;
return G__17182;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__17185__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__17185 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17186__i = 0, G__17186__a = new Array(arguments.length -  0);
while (G__17186__i < G__17186__a.length) {G__17186__a[G__17186__i] = arguments[G__17186__i + 0]; ++G__17186__i;}
  args = new cljs.core.IndexedSeq(G__17186__a,0);
} 
return G__17185__delegate.call(this,args);};
G__17185.cljs$lang$maxFixedArity = 0;
G__17185.cljs$lang$applyTo = (function (arglist__17187){
var args = cljs.core.seq(arglist__17187);
return G__17185__delegate(args);
});
G__17185.cljs$core$IFn$_invoke$arity$variadic = G__17185__delegate;
return G__17185;
})()
;

return null;
});
