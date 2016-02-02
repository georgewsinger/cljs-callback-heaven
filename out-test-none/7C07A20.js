goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13526__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13526 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13527__i = 0, G__13527__a = new Array(arguments.length -  0);
while (G__13527__i < G__13527__a.length) {G__13527__a[G__13527__i] = arguments[G__13527__i + 0]; ++G__13527__i;}
  args = new cljs.core.IndexedSeq(G__13527__a,0);
} 
return G__13526__delegate.call(this,args);};
G__13526.cljs$lang$maxFixedArity = 0;
G__13526.cljs$lang$applyTo = (function (arglist__13528){
var args = cljs.core.seq(arglist__13528);
return G__13526__delegate(args);
});
G__13526.cljs$core$IFn$_invoke$arity$variadic = G__13526__delegate;
return G__13526;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13529__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13529 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13530__i = 0, G__13530__a = new Array(arguments.length -  0);
while (G__13530__i < G__13530__a.length) {G__13530__a[G__13530__i] = arguments[G__13530__i + 0]; ++G__13530__i;}
  args = new cljs.core.IndexedSeq(G__13530__a,0);
} 
return G__13529__delegate.call(this,args);};
G__13529.cljs$lang$maxFixedArity = 0;
G__13529.cljs$lang$applyTo = (function (arglist__13531){
var args = cljs.core.seq(arglist__13531);
return G__13529__delegate(args);
});
G__13529.cljs$core$IFn$_invoke$arity$variadic = G__13529__delegate;
return G__13529;
})()
;

return null;
});
