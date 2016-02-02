goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__309440__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__309440 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__309441__i = 0, G__309441__a = new Array(arguments.length -  0);
while (G__309441__i < G__309441__a.length) {G__309441__a[G__309441__i] = arguments[G__309441__i + 0]; ++G__309441__i;}
  args = new cljs.core.IndexedSeq(G__309441__a,0);
} 
return G__309440__delegate.call(this,args);};
G__309440.cljs$lang$maxFixedArity = 0;
G__309440.cljs$lang$applyTo = (function (arglist__309442){
var args = cljs.core.seq(arglist__309442);
return G__309440__delegate(args);
});
G__309440.cljs$core$IFn$_invoke$arity$variadic = G__309440__delegate;
return G__309440;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__309443__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__309443 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__309444__i = 0, G__309444__a = new Array(arguments.length -  0);
while (G__309444__i < G__309444__a.length) {G__309444__a[G__309444__i] = arguments[G__309444__i + 0]; ++G__309444__i;}
  args = new cljs.core.IndexedSeq(G__309444__a,0);
} 
return G__309443__delegate.call(this,args);};
G__309443.cljs$lang$maxFixedArity = 0;
G__309443.cljs$lang$applyTo = (function (arglist__309445){
var args = cljs.core.seq(arglist__309445);
return G__309443__delegate(args);
});
G__309443.cljs$core$IFn$_invoke$arity$variadic = G__309443__delegate;
return G__309443;
})()
;

return null;
});
