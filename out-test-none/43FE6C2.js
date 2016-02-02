goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__70480__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__70480 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__70481__i = 0, G__70481__a = new Array(arguments.length -  0);
while (G__70481__i < G__70481__a.length) {G__70481__a[G__70481__i] = arguments[G__70481__i + 0]; ++G__70481__i;}
  args = new cljs.core.IndexedSeq(G__70481__a,0);
} 
return G__70480__delegate.call(this,args);};
G__70480.cljs$lang$maxFixedArity = 0;
G__70480.cljs$lang$applyTo = (function (arglist__70482){
var args = cljs.core.seq(arglist__70482);
return G__70480__delegate(args);
});
G__70480.cljs$core$IFn$_invoke$arity$variadic = G__70480__delegate;
return G__70480;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__70483__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__70483 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__70484__i = 0, G__70484__a = new Array(arguments.length -  0);
while (G__70484__i < G__70484__a.length) {G__70484__a[G__70484__i] = arguments[G__70484__i + 0]; ++G__70484__i;}
  args = new cljs.core.IndexedSeq(G__70484__a,0);
} 
return G__70483__delegate.call(this,args);};
G__70483.cljs$lang$maxFixedArity = 0;
G__70483.cljs$lang$applyTo = (function (arglist__70485){
var args = cljs.core.seq(arglist__70485);
return G__70483__delegate(args);
});
G__70483.cljs$core$IFn$_invoke$arity$variadic = G__70483__delegate;
return G__70483;
})()
;

return null;
});
