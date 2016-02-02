goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__30192__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__30192 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30193__i = 0, G__30193__a = new Array(arguments.length -  0);
while (G__30193__i < G__30193__a.length) {G__30193__a[G__30193__i] = arguments[G__30193__i + 0]; ++G__30193__i;}
  args = new cljs.core.IndexedSeq(G__30193__a,0);
} 
return G__30192__delegate.call(this,args);};
G__30192.cljs$lang$maxFixedArity = 0;
G__30192.cljs$lang$applyTo = (function (arglist__30194){
var args = cljs.core.seq(arglist__30194);
return G__30192__delegate(args);
});
G__30192.cljs$core$IFn$_invoke$arity$variadic = G__30192__delegate;
return G__30192;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__30195__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__30195 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30196__i = 0, G__30196__a = new Array(arguments.length -  0);
while (G__30196__i < G__30196__a.length) {G__30196__a[G__30196__i] = arguments[G__30196__i + 0]; ++G__30196__i;}
  args = new cljs.core.IndexedSeq(G__30196__a,0);
} 
return G__30195__delegate.call(this,args);};
G__30195.cljs$lang$maxFixedArity = 0;
G__30195.cljs$lang$applyTo = (function (arglist__30197){
var args = cljs.core.seq(arglist__30197);
return G__30195__delegate(args);
});
G__30195.cljs$core$IFn$_invoke$arity$variadic = G__30195__delegate;
return G__30195;
})()
;

return null;
});
