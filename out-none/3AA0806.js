goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__47201__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__47201 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47202__i = 0, G__47202__a = new Array(arguments.length -  0);
while (G__47202__i < G__47202__a.length) {G__47202__a[G__47202__i] = arguments[G__47202__i + 0]; ++G__47202__i;}
  args = new cljs.core.IndexedSeq(G__47202__a,0);
} 
return G__47201__delegate.call(this,args);};
G__47201.cljs$lang$maxFixedArity = 0;
G__47201.cljs$lang$applyTo = (function (arglist__47203){
var args = cljs.core.seq(arglist__47203);
return G__47201__delegate(args);
});
G__47201.cljs$core$IFn$_invoke$arity$variadic = G__47201__delegate;
return G__47201;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__47204__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__47204 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47205__i = 0, G__47205__a = new Array(arguments.length -  0);
while (G__47205__i < G__47205__a.length) {G__47205__a[G__47205__i] = arguments[G__47205__i + 0]; ++G__47205__i;}
  args = new cljs.core.IndexedSeq(G__47205__a,0);
} 
return G__47204__delegate.call(this,args);};
G__47204.cljs$lang$maxFixedArity = 0;
G__47204.cljs$lang$applyTo = (function (arglist__47206){
var args = cljs.core.seq(arglist__47206);
return G__47204__delegate(args);
});
G__47204.cljs$core$IFn$_invoke$arity$variadic = G__47204__delegate;
return G__47204;
})()
;

return null;
});
