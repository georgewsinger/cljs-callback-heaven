goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__25939__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__25939 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25940__i = 0, G__25940__a = new Array(arguments.length -  0);
while (G__25940__i < G__25940__a.length) {G__25940__a[G__25940__i] = arguments[G__25940__i + 0]; ++G__25940__i;}
  args = new cljs.core.IndexedSeq(G__25940__a,0);
} 
return G__25939__delegate.call(this,args);};
G__25939.cljs$lang$maxFixedArity = 0;
G__25939.cljs$lang$applyTo = (function (arglist__25941){
var args = cljs.core.seq(arglist__25941);
return G__25939__delegate(args);
});
G__25939.cljs$core$IFn$_invoke$arity$variadic = G__25939__delegate;
return G__25939;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__25942__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__25942 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25943__i = 0, G__25943__a = new Array(arguments.length -  0);
while (G__25943__i < G__25943__a.length) {G__25943__a[G__25943__i] = arguments[G__25943__i + 0]; ++G__25943__i;}
  args = new cljs.core.IndexedSeq(G__25943__a,0);
} 
return G__25942__delegate.call(this,args);};
G__25942.cljs$lang$maxFixedArity = 0;
G__25942.cljs$lang$applyTo = (function (arglist__25944){
var args = cljs.core.seq(arglist__25944);
return G__25942__delegate(args);
});
G__25942.cljs$core$IFn$_invoke$arity$variadic = G__25942__delegate;
return G__25942;
})()
;

return null;
});
