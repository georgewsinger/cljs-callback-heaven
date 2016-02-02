goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__17442__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__17442 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17443__i = 0, G__17443__a = new Array(arguments.length -  0);
while (G__17443__i < G__17443__a.length) {G__17443__a[G__17443__i] = arguments[G__17443__i + 0]; ++G__17443__i;}
  args = new cljs.core.IndexedSeq(G__17443__a,0);
} 
return G__17442__delegate.call(this,args);};
G__17442.cljs$lang$maxFixedArity = 0;
G__17442.cljs$lang$applyTo = (function (arglist__17444){
var args = cljs.core.seq(arglist__17444);
return G__17442__delegate(args);
});
G__17442.cljs$core$IFn$_invoke$arity$variadic = G__17442__delegate;
return G__17442;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__17445__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__17445 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17446__i = 0, G__17446__a = new Array(arguments.length -  0);
while (G__17446__i < G__17446__a.length) {G__17446__a[G__17446__i] = arguments[G__17446__i + 0]; ++G__17446__i;}
  args = new cljs.core.IndexedSeq(G__17446__a,0);
} 
return G__17445__delegate.call(this,args);};
G__17445.cljs$lang$maxFixedArity = 0;
G__17445.cljs$lang$applyTo = (function (arglist__17447){
var args = cljs.core.seq(arglist__17447);
return G__17445__delegate(args);
});
G__17445.cljs$core$IFn$_invoke$arity$variadic = G__17445__delegate;
return G__17445;
})()
;

return null;
});
