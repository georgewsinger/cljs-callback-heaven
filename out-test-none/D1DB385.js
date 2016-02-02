goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__83317__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__83317 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__83318__i = 0, G__83318__a = new Array(arguments.length -  0);
while (G__83318__i < G__83318__a.length) {G__83318__a[G__83318__i] = arguments[G__83318__i + 0]; ++G__83318__i;}
  args = new cljs.core.IndexedSeq(G__83318__a,0);
} 
return G__83317__delegate.call(this,args);};
G__83317.cljs$lang$maxFixedArity = 0;
G__83317.cljs$lang$applyTo = (function (arglist__83319){
var args = cljs.core.seq(arglist__83319);
return G__83317__delegate(args);
});
G__83317.cljs$core$IFn$_invoke$arity$variadic = G__83317__delegate;
return G__83317;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__83320__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__83320 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__83321__i = 0, G__83321__a = new Array(arguments.length -  0);
while (G__83321__i < G__83321__a.length) {G__83321__a[G__83321__i] = arguments[G__83321__i + 0]; ++G__83321__i;}
  args = new cljs.core.IndexedSeq(G__83321__a,0);
} 
return G__83320__delegate.call(this,args);};
G__83320.cljs$lang$maxFixedArity = 0;
G__83320.cljs$lang$applyTo = (function (arglist__83322){
var args = cljs.core.seq(arglist__83322);
return G__83320__delegate(args);
});
G__83320.cljs$core$IFn$_invoke$arity$variadic = G__83320__delegate;
return G__83320;
})()
;

return null;
});
