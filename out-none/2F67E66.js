goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10939__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10939 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10940__i = 0, G__10940__a = new Array(arguments.length -  0);
while (G__10940__i < G__10940__a.length) {G__10940__a[G__10940__i] = arguments[G__10940__i + 0]; ++G__10940__i;}
  args = new cljs.core.IndexedSeq(G__10940__a,0);
} 
return G__10939__delegate.call(this,args);};
G__10939.cljs$lang$maxFixedArity = 0;
G__10939.cljs$lang$applyTo = (function (arglist__10941){
var args = cljs.core.seq(arglist__10941);
return G__10939__delegate(args);
});
G__10939.cljs$core$IFn$_invoke$arity$variadic = G__10939__delegate;
return G__10939;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10942__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10942 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10943__i = 0, G__10943__a = new Array(arguments.length -  0);
while (G__10943__i < G__10943__a.length) {G__10943__a[G__10943__i] = arguments[G__10943__i + 0]; ++G__10943__i;}
  args = new cljs.core.IndexedSeq(G__10943__a,0);
} 
return G__10942__delegate.call(this,args);};
G__10942.cljs$lang$maxFixedArity = 0;
G__10942.cljs$lang$applyTo = (function (arglist__10944){
var args = cljs.core.seq(arglist__10944);
return G__10942__delegate(args);
});
G__10942.cljs$core$IFn$_invoke$arity$variadic = G__10942__delegate;
return G__10942;
})()
;

return null;
});
