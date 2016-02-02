goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10601__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10601 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10602__i = 0, G__10602__a = new Array(arguments.length -  0);
while (G__10602__i < G__10602__a.length) {G__10602__a[G__10602__i] = arguments[G__10602__i + 0]; ++G__10602__i;}
  args = new cljs.core.IndexedSeq(G__10602__a,0);
} 
return G__10601__delegate.call(this,args);};
G__10601.cljs$lang$maxFixedArity = 0;
G__10601.cljs$lang$applyTo = (function (arglist__10603){
var args = cljs.core.seq(arglist__10603);
return G__10601__delegate(args);
});
G__10601.cljs$core$IFn$_invoke$arity$variadic = G__10601__delegate;
return G__10601;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10604__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10604 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10605__i = 0, G__10605__a = new Array(arguments.length -  0);
while (G__10605__i < G__10605__a.length) {G__10605__a[G__10605__i] = arguments[G__10605__i + 0]; ++G__10605__i;}
  args = new cljs.core.IndexedSeq(G__10605__a,0);
} 
return G__10604__delegate.call(this,args);};
G__10604.cljs$lang$maxFixedArity = 0;
G__10604.cljs$lang$applyTo = (function (arglist__10606){
var args = cljs.core.seq(arglist__10606);
return G__10604__delegate(args);
});
G__10604.cljs$core$IFn$_invoke$arity$variadic = G__10604__delegate;
return G__10604;
})()
;

return null;
});
