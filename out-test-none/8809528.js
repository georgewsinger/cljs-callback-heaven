goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__309451__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__309451 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__309452__i = 0, G__309452__a = new Array(arguments.length -  0);
while (G__309452__i < G__309452__a.length) {G__309452__a[G__309452__i] = arguments[G__309452__i + 0]; ++G__309452__i;}
  args = new cljs.core.IndexedSeq(G__309452__a,0);
} 
return G__309451__delegate.call(this,args);};
G__309451.cljs$lang$maxFixedArity = 0;
G__309451.cljs$lang$applyTo = (function (arglist__309453){
var args = cljs.core.seq(arglist__309453);
return G__309451__delegate(args);
});
G__309451.cljs$core$IFn$_invoke$arity$variadic = G__309451__delegate;
return G__309451;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__309454__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__309454 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__309455__i = 0, G__309455__a = new Array(arguments.length -  0);
while (G__309455__i < G__309455__a.length) {G__309455__a[G__309455__i] = arguments[G__309455__i + 0]; ++G__309455__i;}
  args = new cljs.core.IndexedSeq(G__309455__a,0);
} 
return G__309454__delegate.call(this,args);};
G__309454.cljs$lang$maxFixedArity = 0;
G__309454.cljs$lang$applyTo = (function (arglist__309456){
var args = cljs.core.seq(arglist__309456);
return G__309454__delegate(args);
});
G__309454.cljs$core$IFn$_invoke$arity$variadic = G__309454__delegate;
return G__309454;
})()
;

return null;
});
