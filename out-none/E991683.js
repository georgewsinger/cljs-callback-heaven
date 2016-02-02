goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__40472__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__40472 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40473__i = 0, G__40473__a = new Array(arguments.length -  0);
while (G__40473__i < G__40473__a.length) {G__40473__a[G__40473__i] = arguments[G__40473__i + 0]; ++G__40473__i;}
  args = new cljs.core.IndexedSeq(G__40473__a,0);
} 
return G__40472__delegate.call(this,args);};
G__40472.cljs$lang$maxFixedArity = 0;
G__40472.cljs$lang$applyTo = (function (arglist__40474){
var args = cljs.core.seq(arglist__40474);
return G__40472__delegate(args);
});
G__40472.cljs$core$IFn$_invoke$arity$variadic = G__40472__delegate;
return G__40472;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__40475__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__40475 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40476__i = 0, G__40476__a = new Array(arguments.length -  0);
while (G__40476__i < G__40476__a.length) {G__40476__a[G__40476__i] = arguments[G__40476__i + 0]; ++G__40476__i;}
  args = new cljs.core.IndexedSeq(G__40476__a,0);
} 
return G__40475__delegate.call(this,args);};
G__40475.cljs$lang$maxFixedArity = 0;
G__40475.cljs$lang$applyTo = (function (arglist__40477){
var args = cljs.core.seq(arglist__40477);
return G__40475__delegate(args);
});
G__40475.cljs$core$IFn$_invoke$arity$variadic = G__40475__delegate;
return G__40475;
})()
;

return null;
});
