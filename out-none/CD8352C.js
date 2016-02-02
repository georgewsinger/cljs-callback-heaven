goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__49283__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__49283 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49284__i = 0, G__49284__a = new Array(arguments.length -  0);
while (G__49284__i < G__49284__a.length) {G__49284__a[G__49284__i] = arguments[G__49284__i + 0]; ++G__49284__i;}
  args = new cljs.core.IndexedSeq(G__49284__a,0);
} 
return G__49283__delegate.call(this,args);};
G__49283.cljs$lang$maxFixedArity = 0;
G__49283.cljs$lang$applyTo = (function (arglist__49285){
var args = cljs.core.seq(arglist__49285);
return G__49283__delegate(args);
});
G__49283.cljs$core$IFn$_invoke$arity$variadic = G__49283__delegate;
return G__49283;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__49286__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__49286 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49287__i = 0, G__49287__a = new Array(arguments.length -  0);
while (G__49287__i < G__49287__a.length) {G__49287__a[G__49287__i] = arguments[G__49287__i + 0]; ++G__49287__i;}
  args = new cljs.core.IndexedSeq(G__49287__a,0);
} 
return G__49286__delegate.call(this,args);};
G__49286.cljs$lang$maxFixedArity = 0;
G__49286.cljs$lang$applyTo = (function (arglist__49288){
var args = cljs.core.seq(arglist__49288);
return G__49286__delegate(args);
});
G__49286.cljs$core$IFn$_invoke$arity$variadic = G__49286__delegate;
return G__49286;
})()
;

return null;
});
