goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__23774__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__23774 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23775__i = 0, G__23775__a = new Array(arguments.length -  0);
while (G__23775__i < G__23775__a.length) {G__23775__a[G__23775__i] = arguments[G__23775__i + 0]; ++G__23775__i;}
  args = new cljs.core.IndexedSeq(G__23775__a,0);
} 
return G__23774__delegate.call(this,args);};
G__23774.cljs$lang$maxFixedArity = 0;
G__23774.cljs$lang$applyTo = (function (arglist__23776){
var args = cljs.core.seq(arglist__23776);
return G__23774__delegate(args);
});
G__23774.cljs$core$IFn$_invoke$arity$variadic = G__23774__delegate;
return G__23774;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__23777__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__23777 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23778__i = 0, G__23778__a = new Array(arguments.length -  0);
while (G__23778__i < G__23778__a.length) {G__23778__a[G__23778__i] = arguments[G__23778__i + 0]; ++G__23778__i;}
  args = new cljs.core.IndexedSeq(G__23778__a,0);
} 
return G__23777__delegate.call(this,args);};
G__23777.cljs$lang$maxFixedArity = 0;
G__23777.cljs$lang$applyTo = (function (arglist__23779){
var args = cljs.core.seq(arglist__23779);
return G__23777__delegate(args);
});
G__23777.cljs$core$IFn$_invoke$arity$variadic = G__23777__delegate;
return G__23777;
})()
;

return null;
});
