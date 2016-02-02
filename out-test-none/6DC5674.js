goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9774__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9774 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9775__i = 0, G__9775__a = new Array(arguments.length -  0);
while (G__9775__i < G__9775__a.length) {G__9775__a[G__9775__i] = arguments[G__9775__i + 0]; ++G__9775__i;}
  args = new cljs.core.IndexedSeq(G__9775__a,0);
} 
return G__9774__delegate.call(this,args);};
G__9774.cljs$lang$maxFixedArity = 0;
G__9774.cljs$lang$applyTo = (function (arglist__9776){
var args = cljs.core.seq(arglist__9776);
return G__9774__delegate(args);
});
G__9774.cljs$core$IFn$_invoke$arity$variadic = G__9774__delegate;
return G__9774;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9777__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9777 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9778__i = 0, G__9778__a = new Array(arguments.length -  0);
while (G__9778__i < G__9778__a.length) {G__9778__a[G__9778__i] = arguments[G__9778__i + 0]; ++G__9778__i;}
  args = new cljs.core.IndexedSeq(G__9778__a,0);
} 
return G__9777__delegate.call(this,args);};
G__9777.cljs$lang$maxFixedArity = 0;
G__9777.cljs$lang$applyTo = (function (arglist__9779){
var args = cljs.core.seq(arglist__9779);
return G__9777__delegate(args);
});
G__9777.cljs$core$IFn$_invoke$arity$variadic = G__9777__delegate;
return G__9777;
})()
;

return null;
});
