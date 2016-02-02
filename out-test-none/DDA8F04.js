goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__39228__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__39228 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39229__i = 0, G__39229__a = new Array(arguments.length -  0);
while (G__39229__i < G__39229__a.length) {G__39229__a[G__39229__i] = arguments[G__39229__i + 0]; ++G__39229__i;}
  args = new cljs.core.IndexedSeq(G__39229__a,0);
} 
return G__39228__delegate.call(this,args);};
G__39228.cljs$lang$maxFixedArity = 0;
G__39228.cljs$lang$applyTo = (function (arglist__39230){
var args = cljs.core.seq(arglist__39230);
return G__39228__delegate(args);
});
G__39228.cljs$core$IFn$_invoke$arity$variadic = G__39228__delegate;
return G__39228;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__39231__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__39231 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39232__i = 0, G__39232__a = new Array(arguments.length -  0);
while (G__39232__i < G__39232__a.length) {G__39232__a[G__39232__i] = arguments[G__39232__i + 0]; ++G__39232__i;}
  args = new cljs.core.IndexedSeq(G__39232__a,0);
} 
return G__39231__delegate.call(this,args);};
G__39231.cljs$lang$maxFixedArity = 0;
G__39231.cljs$lang$applyTo = (function (arglist__39233){
var args = cljs.core.seq(arglist__39233);
return G__39231__delegate(args);
});
G__39231.cljs$core$IFn$_invoke$arity$variadic = G__39231__delegate;
return G__39231;
})()
;

return null;
});
