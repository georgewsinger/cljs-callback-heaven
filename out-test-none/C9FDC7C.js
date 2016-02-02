goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13960__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13960 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13961__i = 0, G__13961__a = new Array(arguments.length -  0);
while (G__13961__i < G__13961__a.length) {G__13961__a[G__13961__i] = arguments[G__13961__i + 0]; ++G__13961__i;}
  args = new cljs.core.IndexedSeq(G__13961__a,0);
} 
return G__13960__delegate.call(this,args);};
G__13960.cljs$lang$maxFixedArity = 0;
G__13960.cljs$lang$applyTo = (function (arglist__13962){
var args = cljs.core.seq(arglist__13962);
return G__13960__delegate(args);
});
G__13960.cljs$core$IFn$_invoke$arity$variadic = G__13960__delegate;
return G__13960;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13963__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13963 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13964__i = 0, G__13964__a = new Array(arguments.length -  0);
while (G__13964__i < G__13964__a.length) {G__13964__a[G__13964__i] = arguments[G__13964__i + 0]; ++G__13964__i;}
  args = new cljs.core.IndexedSeq(G__13964__a,0);
} 
return G__13963__delegate.call(this,args);};
G__13963.cljs$lang$maxFixedArity = 0;
G__13963.cljs$lang$applyTo = (function (arglist__13965){
var args = cljs.core.seq(arglist__13965);
return G__13963__delegate(args);
});
G__13963.cljs$core$IFn$_invoke$arity$variadic = G__13963__delegate;
return G__13963;
})()
;

return null;
});
