goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__346623__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__346623 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__346624__i = 0, G__346624__a = new Array(arguments.length -  0);
while (G__346624__i < G__346624__a.length) {G__346624__a[G__346624__i] = arguments[G__346624__i + 0]; ++G__346624__i;}
  args = new cljs.core.IndexedSeq(G__346624__a,0);
} 
return G__346623__delegate.call(this,args);};
G__346623.cljs$lang$maxFixedArity = 0;
G__346623.cljs$lang$applyTo = (function (arglist__346625){
var args = cljs.core.seq(arglist__346625);
return G__346623__delegate(args);
});
G__346623.cljs$core$IFn$_invoke$arity$variadic = G__346623__delegate;
return G__346623;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__346626__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__346626 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__346627__i = 0, G__346627__a = new Array(arguments.length -  0);
while (G__346627__i < G__346627__a.length) {G__346627__a[G__346627__i] = arguments[G__346627__i + 0]; ++G__346627__i;}
  args = new cljs.core.IndexedSeq(G__346627__a,0);
} 
return G__346626__delegate.call(this,args);};
G__346626.cljs$lang$maxFixedArity = 0;
G__346626.cljs$lang$applyTo = (function (arglist__346628){
var args = cljs.core.seq(arglist__346628);
return G__346626__delegate(args);
});
G__346626.cljs$core$IFn$_invoke$arity$variadic = G__346626__delegate;
return G__346626;
})()
;

return null;
});
