goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13711__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13711 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13712__i = 0, G__13712__a = new Array(arguments.length -  0);
while (G__13712__i < G__13712__a.length) {G__13712__a[G__13712__i] = arguments[G__13712__i + 0]; ++G__13712__i;}
  args = new cljs.core.IndexedSeq(G__13712__a,0);
} 
return G__13711__delegate.call(this,args);};
G__13711.cljs$lang$maxFixedArity = 0;
G__13711.cljs$lang$applyTo = (function (arglist__13713){
var args = cljs.core.seq(arglist__13713);
return G__13711__delegate(args);
});
G__13711.cljs$core$IFn$_invoke$arity$variadic = G__13711__delegate;
return G__13711;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13714__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13714 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13715__i = 0, G__13715__a = new Array(arguments.length -  0);
while (G__13715__i < G__13715__a.length) {G__13715__a[G__13715__i] = arguments[G__13715__i + 0]; ++G__13715__i;}
  args = new cljs.core.IndexedSeq(G__13715__a,0);
} 
return G__13714__delegate.call(this,args);};
G__13714.cljs$lang$maxFixedArity = 0;
G__13714.cljs$lang$applyTo = (function (arglist__13716){
var args = cljs.core.seq(arglist__13716);
return G__13714__delegate(args);
});
G__13714.cljs$core$IFn$_invoke$arity$variadic = G__13714__delegate;
return G__13714;
})()
;

return null;
});
