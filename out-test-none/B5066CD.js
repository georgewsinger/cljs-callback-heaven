goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__38191__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__38191 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38192__i = 0, G__38192__a = new Array(arguments.length -  0);
while (G__38192__i < G__38192__a.length) {G__38192__a[G__38192__i] = arguments[G__38192__i + 0]; ++G__38192__i;}
  args = new cljs.core.IndexedSeq(G__38192__a,0);
} 
return G__38191__delegate.call(this,args);};
G__38191.cljs$lang$maxFixedArity = 0;
G__38191.cljs$lang$applyTo = (function (arglist__38193){
var args = cljs.core.seq(arglist__38193);
return G__38191__delegate(args);
});
G__38191.cljs$core$IFn$_invoke$arity$variadic = G__38191__delegate;
return G__38191;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__38194__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__38194 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38195__i = 0, G__38195__a = new Array(arguments.length -  0);
while (G__38195__i < G__38195__a.length) {G__38195__a[G__38195__i] = arguments[G__38195__i + 0]; ++G__38195__i;}
  args = new cljs.core.IndexedSeq(G__38195__a,0);
} 
return G__38194__delegate.call(this,args);};
G__38194.cljs$lang$maxFixedArity = 0;
G__38194.cljs$lang$applyTo = (function (arglist__38196){
var args = cljs.core.seq(arglist__38196);
return G__38194__delegate(args);
});
G__38194.cljs$core$IFn$_invoke$arity$variadic = G__38194__delegate;
return G__38194;
})()
;

return null;
});
