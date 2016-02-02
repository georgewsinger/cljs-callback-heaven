goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__20939__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__20939 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20940__i = 0, G__20940__a = new Array(arguments.length -  0);
while (G__20940__i < G__20940__a.length) {G__20940__a[G__20940__i] = arguments[G__20940__i + 0]; ++G__20940__i;}
  args = new cljs.core.IndexedSeq(G__20940__a,0);
} 
return G__20939__delegate.call(this,args);};
G__20939.cljs$lang$maxFixedArity = 0;
G__20939.cljs$lang$applyTo = (function (arglist__20941){
var args = cljs.core.seq(arglist__20941);
return G__20939__delegate(args);
});
G__20939.cljs$core$IFn$_invoke$arity$variadic = G__20939__delegate;
return G__20939;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__20942__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__20942 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20943__i = 0, G__20943__a = new Array(arguments.length -  0);
while (G__20943__i < G__20943__a.length) {G__20943__a[G__20943__i] = arguments[G__20943__i + 0]; ++G__20943__i;}
  args = new cljs.core.IndexedSeq(G__20943__a,0);
} 
return G__20942__delegate.call(this,args);};
G__20942.cljs$lang$maxFixedArity = 0;
G__20942.cljs$lang$applyTo = (function (arglist__20944){
var args = cljs.core.seq(arglist__20944);
return G__20942__delegate(args);
});
G__20942.cljs$core$IFn$_invoke$arity$variadic = G__20942__delegate;
return G__20942;
})()
;

return null;
});
