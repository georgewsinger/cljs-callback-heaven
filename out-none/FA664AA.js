goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__58691__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__58691 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58692__i = 0, G__58692__a = new Array(arguments.length -  0);
while (G__58692__i < G__58692__a.length) {G__58692__a[G__58692__i] = arguments[G__58692__i + 0]; ++G__58692__i;}
  args = new cljs.core.IndexedSeq(G__58692__a,0);
} 
return G__58691__delegate.call(this,args);};
G__58691.cljs$lang$maxFixedArity = 0;
G__58691.cljs$lang$applyTo = (function (arglist__58693){
var args = cljs.core.seq(arglist__58693);
return G__58691__delegate(args);
});
G__58691.cljs$core$IFn$_invoke$arity$variadic = G__58691__delegate;
return G__58691;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__58694__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__58694 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58695__i = 0, G__58695__a = new Array(arguments.length -  0);
while (G__58695__i < G__58695__a.length) {G__58695__a[G__58695__i] = arguments[G__58695__i + 0]; ++G__58695__i;}
  args = new cljs.core.IndexedSeq(G__58695__a,0);
} 
return G__58694__delegate.call(this,args);};
G__58694.cljs$lang$maxFixedArity = 0;
G__58694.cljs$lang$applyTo = (function (arglist__58696){
var args = cljs.core.seq(arglist__58696);
return G__58694__delegate(args);
});
G__58694.cljs$core$IFn$_invoke$arity$variadic = G__58694__delegate;
return G__58694;
})()
;

return null;
});
