goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__33250__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__33250 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33251__i = 0, G__33251__a = new Array(arguments.length -  0);
while (G__33251__i < G__33251__a.length) {G__33251__a[G__33251__i] = arguments[G__33251__i + 0]; ++G__33251__i;}
  args = new cljs.core.IndexedSeq(G__33251__a,0);
} 
return G__33250__delegate.call(this,args);};
G__33250.cljs$lang$maxFixedArity = 0;
G__33250.cljs$lang$applyTo = (function (arglist__33252){
var args = cljs.core.seq(arglist__33252);
return G__33250__delegate(args);
});
G__33250.cljs$core$IFn$_invoke$arity$variadic = G__33250__delegate;
return G__33250;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__33253__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__33253 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33254__i = 0, G__33254__a = new Array(arguments.length -  0);
while (G__33254__i < G__33254__a.length) {G__33254__a[G__33254__i] = arguments[G__33254__i + 0]; ++G__33254__i;}
  args = new cljs.core.IndexedSeq(G__33254__a,0);
} 
return G__33253__delegate.call(this,args);};
G__33253.cljs$lang$maxFixedArity = 0;
G__33253.cljs$lang$applyTo = (function (arglist__33255){
var args = cljs.core.seq(arglist__33255);
return G__33253__delegate(args);
});
G__33253.cljs$core$IFn$_invoke$arity$variadic = G__33253__delegate;
return G__33253;
})()
;

return null;
});
