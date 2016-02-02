goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__29290__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__29290 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29291__i = 0, G__29291__a = new Array(arguments.length -  0);
while (G__29291__i < G__29291__a.length) {G__29291__a[G__29291__i] = arguments[G__29291__i + 0]; ++G__29291__i;}
  args = new cljs.core.IndexedSeq(G__29291__a,0);
} 
return G__29290__delegate.call(this,args);};
G__29290.cljs$lang$maxFixedArity = 0;
G__29290.cljs$lang$applyTo = (function (arglist__29292){
var args = cljs.core.seq(arglist__29292);
return G__29290__delegate(args);
});
G__29290.cljs$core$IFn$_invoke$arity$variadic = G__29290__delegate;
return G__29290;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__29293__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__29293 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29294__i = 0, G__29294__a = new Array(arguments.length -  0);
while (G__29294__i < G__29294__a.length) {G__29294__a[G__29294__i] = arguments[G__29294__i + 0]; ++G__29294__i;}
  args = new cljs.core.IndexedSeq(G__29294__a,0);
} 
return G__29293__delegate.call(this,args);};
G__29293.cljs$lang$maxFixedArity = 0;
G__29293.cljs$lang$applyTo = (function (arglist__29295){
var args = cljs.core.seq(arglist__29295);
return G__29293__delegate(args);
});
G__29293.cljs$core$IFn$_invoke$arity$variadic = G__29293__delegate;
return G__29293;
})()
;

return null;
});
