goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__61440__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__61440 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__61441__i = 0, G__61441__a = new Array(arguments.length -  0);
while (G__61441__i < G__61441__a.length) {G__61441__a[G__61441__i] = arguments[G__61441__i + 0]; ++G__61441__i;}
  args = new cljs.core.IndexedSeq(G__61441__a,0);
} 
return G__61440__delegate.call(this,args);};
G__61440.cljs$lang$maxFixedArity = 0;
G__61440.cljs$lang$applyTo = (function (arglist__61442){
var args = cljs.core.seq(arglist__61442);
return G__61440__delegate(args);
});
G__61440.cljs$core$IFn$_invoke$arity$variadic = G__61440__delegate;
return G__61440;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__61443__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__61443 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__61444__i = 0, G__61444__a = new Array(arguments.length -  0);
while (G__61444__i < G__61444__a.length) {G__61444__a[G__61444__i] = arguments[G__61444__i + 0]; ++G__61444__i;}
  args = new cljs.core.IndexedSeq(G__61444__a,0);
} 
return G__61443__delegate.call(this,args);};
G__61443.cljs$lang$maxFixedArity = 0;
G__61443.cljs$lang$applyTo = (function (arglist__61445){
var args = cljs.core.seq(arglist__61445);
return G__61443__delegate(args);
});
G__61443.cljs$core$IFn$_invoke$arity$variadic = G__61443__delegate;
return G__61443;
})()
;

return null;
});
