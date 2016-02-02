goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__332532__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__332532 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__332533__i = 0, G__332533__a = new Array(arguments.length -  0);
while (G__332533__i < G__332533__a.length) {G__332533__a[G__332533__i] = arguments[G__332533__i + 0]; ++G__332533__i;}
  args = new cljs.core.IndexedSeq(G__332533__a,0);
} 
return G__332532__delegate.call(this,args);};
G__332532.cljs$lang$maxFixedArity = 0;
G__332532.cljs$lang$applyTo = (function (arglist__332534){
var args = cljs.core.seq(arglist__332534);
return G__332532__delegate(args);
});
G__332532.cljs$core$IFn$_invoke$arity$variadic = G__332532__delegate;
return G__332532;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__332535__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__332535 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__332536__i = 0, G__332536__a = new Array(arguments.length -  0);
while (G__332536__i < G__332536__a.length) {G__332536__a[G__332536__i] = arguments[G__332536__i + 0]; ++G__332536__i;}
  args = new cljs.core.IndexedSeq(G__332536__a,0);
} 
return G__332535__delegate.call(this,args);};
G__332535.cljs$lang$maxFixedArity = 0;
G__332535.cljs$lang$applyTo = (function (arglist__332537){
var args = cljs.core.seq(arglist__332537);
return G__332535__delegate(args);
});
G__332535.cljs$core$IFn$_invoke$arity$variadic = G__332535__delegate;
return G__332535;
})()
;

return null;
});
