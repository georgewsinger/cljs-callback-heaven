goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__26771__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__26771 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26772__i = 0, G__26772__a = new Array(arguments.length -  0);
while (G__26772__i < G__26772__a.length) {G__26772__a[G__26772__i] = arguments[G__26772__i + 0]; ++G__26772__i;}
  args = new cljs.core.IndexedSeq(G__26772__a,0);
} 
return G__26771__delegate.call(this,args);};
G__26771.cljs$lang$maxFixedArity = 0;
G__26771.cljs$lang$applyTo = (function (arglist__26773){
var args = cljs.core.seq(arglist__26773);
return G__26771__delegate(args);
});
G__26771.cljs$core$IFn$_invoke$arity$variadic = G__26771__delegate;
return G__26771;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__26774__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__26774 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26775__i = 0, G__26775__a = new Array(arguments.length -  0);
while (G__26775__i < G__26775__a.length) {G__26775__a[G__26775__i] = arguments[G__26775__i + 0]; ++G__26775__i;}
  args = new cljs.core.IndexedSeq(G__26775__a,0);
} 
return G__26774__delegate.call(this,args);};
G__26774.cljs$lang$maxFixedArity = 0;
G__26774.cljs$lang$applyTo = (function (arglist__26776){
var args = cljs.core.seq(arglist__26776);
return G__26774__delegate(args);
});
G__26774.cljs$core$IFn$_invoke$arity$variadic = G__26774__delegate;
return G__26774;
})()
;

return null;
});
