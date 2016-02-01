goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16247__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16247 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16248__i = 0, G__16248__a = new Array(arguments.length -  0);
while (G__16248__i < G__16248__a.length) {G__16248__a[G__16248__i] = arguments[G__16248__i + 0]; ++G__16248__i;}
  args = new cljs.core.IndexedSeq(G__16248__a,0);
} 
return G__16247__delegate.call(this,args);};
G__16247.cljs$lang$maxFixedArity = 0;
G__16247.cljs$lang$applyTo = (function (arglist__16249){
var args = cljs.core.seq(arglist__16249);
return G__16247__delegate(args);
});
G__16247.cljs$core$IFn$_invoke$arity$variadic = G__16247__delegate;
return G__16247;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16250__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16250 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16251__i = 0, G__16251__a = new Array(arguments.length -  0);
while (G__16251__i < G__16251__a.length) {G__16251__a[G__16251__i] = arguments[G__16251__i + 0]; ++G__16251__i;}
  args = new cljs.core.IndexedSeq(G__16251__a,0);
} 
return G__16250__delegate.call(this,args);};
G__16250.cljs$lang$maxFixedArity = 0;
G__16250.cljs$lang$applyTo = (function (arglist__16252){
var args = cljs.core.seq(arglist__16252);
return G__16250__delegate(args);
});
G__16250.cljs$core$IFn$_invoke$arity$variadic = G__16250__delegate;
return G__16250;
})()
;

return null;
});
