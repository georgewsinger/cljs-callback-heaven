goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15936__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15936 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15937__i = 0, G__15937__a = new Array(arguments.length -  0);
while (G__15937__i < G__15937__a.length) {G__15937__a[G__15937__i] = arguments[G__15937__i + 0]; ++G__15937__i;}
  args = new cljs.core.IndexedSeq(G__15937__a,0);
} 
return G__15936__delegate.call(this,args);};
G__15936.cljs$lang$maxFixedArity = 0;
G__15936.cljs$lang$applyTo = (function (arglist__15938){
var args = cljs.core.seq(arglist__15938);
return G__15936__delegate(args);
});
G__15936.cljs$core$IFn$_invoke$arity$variadic = G__15936__delegate;
return G__15936;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15939__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15939 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15940__i = 0, G__15940__a = new Array(arguments.length -  0);
while (G__15940__i < G__15940__a.length) {G__15940__a[G__15940__i] = arguments[G__15940__i + 0]; ++G__15940__i;}
  args = new cljs.core.IndexedSeq(G__15940__a,0);
} 
return G__15939__delegate.call(this,args);};
G__15939.cljs$lang$maxFixedArity = 0;
G__15939.cljs$lang$applyTo = (function (arglist__15941){
var args = cljs.core.seq(arglist__15941);
return G__15939__delegate(args);
});
G__15939.cljs$core$IFn$_invoke$arity$variadic = G__15939__delegate;
return G__15939;
})()
;

return null;
});
