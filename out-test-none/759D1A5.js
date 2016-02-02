goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__26344__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__26344 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26345__i = 0, G__26345__a = new Array(arguments.length -  0);
while (G__26345__i < G__26345__a.length) {G__26345__a[G__26345__i] = arguments[G__26345__i + 0]; ++G__26345__i;}
  args = new cljs.core.IndexedSeq(G__26345__a,0);
} 
return G__26344__delegate.call(this,args);};
G__26344.cljs$lang$maxFixedArity = 0;
G__26344.cljs$lang$applyTo = (function (arglist__26346){
var args = cljs.core.seq(arglist__26346);
return G__26344__delegate(args);
});
G__26344.cljs$core$IFn$_invoke$arity$variadic = G__26344__delegate;
return G__26344;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__26347__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__26347 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26348__i = 0, G__26348__a = new Array(arguments.length -  0);
while (G__26348__i < G__26348__a.length) {G__26348__a[G__26348__i] = arguments[G__26348__i + 0]; ++G__26348__i;}
  args = new cljs.core.IndexedSeq(G__26348__a,0);
} 
return G__26347__delegate.call(this,args);};
G__26347.cljs$lang$maxFixedArity = 0;
G__26347.cljs$lang$applyTo = (function (arglist__26349){
var args = cljs.core.seq(arglist__26349);
return G__26347__delegate(args);
});
G__26347.cljs$core$IFn$_invoke$arity$variadic = G__26347__delegate;
return G__26347;
})()
;

return null;
});
