goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15174__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15174 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15175__i = 0, G__15175__a = new Array(arguments.length -  0);
while (G__15175__i < G__15175__a.length) {G__15175__a[G__15175__i] = arguments[G__15175__i + 0]; ++G__15175__i;}
  args = new cljs.core.IndexedSeq(G__15175__a,0);
} 
return G__15174__delegate.call(this,args);};
G__15174.cljs$lang$maxFixedArity = 0;
G__15174.cljs$lang$applyTo = (function (arglist__15176){
var args = cljs.core.seq(arglist__15176);
return G__15174__delegate(args);
});
G__15174.cljs$core$IFn$_invoke$arity$variadic = G__15174__delegate;
return G__15174;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15177__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15177 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15178__i = 0, G__15178__a = new Array(arguments.length -  0);
while (G__15178__i < G__15178__a.length) {G__15178__a[G__15178__i] = arguments[G__15178__i + 0]; ++G__15178__i;}
  args = new cljs.core.IndexedSeq(G__15178__a,0);
} 
return G__15177__delegate.call(this,args);};
G__15177.cljs$lang$maxFixedArity = 0;
G__15177.cljs$lang$applyTo = (function (arglist__15179){
var args = cljs.core.seq(arglist__15179);
return G__15177__delegate(args);
});
G__15177.cljs$core$IFn$_invoke$arity$variadic = G__15177__delegate;
return G__15177;
})()
;

return null;
});
