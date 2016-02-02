goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__29358__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__29358 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29359__i = 0, G__29359__a = new Array(arguments.length -  0);
while (G__29359__i < G__29359__a.length) {G__29359__a[G__29359__i] = arguments[G__29359__i + 0]; ++G__29359__i;}
  args = new cljs.core.IndexedSeq(G__29359__a,0);
} 
return G__29358__delegate.call(this,args);};
G__29358.cljs$lang$maxFixedArity = 0;
G__29358.cljs$lang$applyTo = (function (arglist__29360){
var args = cljs.core.seq(arglist__29360);
return G__29358__delegate(args);
});
G__29358.cljs$core$IFn$_invoke$arity$variadic = G__29358__delegate;
return G__29358;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__29361__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__29361 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29362__i = 0, G__29362__a = new Array(arguments.length -  0);
while (G__29362__i < G__29362__a.length) {G__29362__a[G__29362__i] = arguments[G__29362__i + 0]; ++G__29362__i;}
  args = new cljs.core.IndexedSeq(G__29362__a,0);
} 
return G__29361__delegate.call(this,args);};
G__29361.cljs$lang$maxFixedArity = 0;
G__29361.cljs$lang$applyTo = (function (arglist__29363){
var args = cljs.core.seq(arglist__29363);
return G__29361__delegate(args);
});
G__29361.cljs$core$IFn$_invoke$arity$variadic = G__29361__delegate;
return G__29361;
})()
;

return null;
});
