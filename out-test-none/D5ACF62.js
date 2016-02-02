goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13494__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13494 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13495__i = 0, G__13495__a = new Array(arguments.length -  0);
while (G__13495__i < G__13495__a.length) {G__13495__a[G__13495__i] = arguments[G__13495__i + 0]; ++G__13495__i;}
  args = new cljs.core.IndexedSeq(G__13495__a,0);
} 
return G__13494__delegate.call(this,args);};
G__13494.cljs$lang$maxFixedArity = 0;
G__13494.cljs$lang$applyTo = (function (arglist__13496){
var args = cljs.core.seq(arglist__13496);
return G__13494__delegate(args);
});
G__13494.cljs$core$IFn$_invoke$arity$variadic = G__13494__delegate;
return G__13494;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13497__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13497 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13498__i = 0, G__13498__a = new Array(arguments.length -  0);
while (G__13498__i < G__13498__a.length) {G__13498__a[G__13498__i] = arguments[G__13498__i + 0]; ++G__13498__i;}
  args = new cljs.core.IndexedSeq(G__13498__a,0);
} 
return G__13497__delegate.call(this,args);};
G__13497.cljs$lang$maxFixedArity = 0;
G__13497.cljs$lang$applyTo = (function (arglist__13499){
var args = cljs.core.seq(arglist__13499);
return G__13497__delegate(args);
});
G__13497.cljs$core$IFn$_invoke$arity$variadic = G__13497__delegate;
return G__13497;
})()
;

return null;
});
