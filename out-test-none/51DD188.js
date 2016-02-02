goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__41546__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__41546 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41547__i = 0, G__41547__a = new Array(arguments.length -  0);
while (G__41547__i < G__41547__a.length) {G__41547__a[G__41547__i] = arguments[G__41547__i + 0]; ++G__41547__i;}
  args = new cljs.core.IndexedSeq(G__41547__a,0);
} 
return G__41546__delegate.call(this,args);};
G__41546.cljs$lang$maxFixedArity = 0;
G__41546.cljs$lang$applyTo = (function (arglist__41548){
var args = cljs.core.seq(arglist__41548);
return G__41546__delegate(args);
});
G__41546.cljs$core$IFn$_invoke$arity$variadic = G__41546__delegate;
return G__41546;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__41549__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__41549 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41550__i = 0, G__41550__a = new Array(arguments.length -  0);
while (G__41550__i < G__41550__a.length) {G__41550__a[G__41550__i] = arguments[G__41550__i + 0]; ++G__41550__i;}
  args = new cljs.core.IndexedSeq(G__41550__a,0);
} 
return G__41549__delegate.call(this,args);};
G__41549.cljs$lang$maxFixedArity = 0;
G__41549.cljs$lang$applyTo = (function (arglist__41551){
var args = cljs.core.seq(arglist__41551);
return G__41549__delegate(args);
});
G__41549.cljs$core$IFn$_invoke$arity$variadic = G__41549__delegate;
return G__41549;
})()
;

return null;
});
