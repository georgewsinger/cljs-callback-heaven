goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__162244__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__162244 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__162245__i = 0, G__162245__a = new Array(arguments.length -  0);
while (G__162245__i < G__162245__a.length) {G__162245__a[G__162245__i] = arguments[G__162245__i + 0]; ++G__162245__i;}
  args = new cljs.core.IndexedSeq(G__162245__a,0);
} 
return G__162244__delegate.call(this,args);};
G__162244.cljs$lang$maxFixedArity = 0;
G__162244.cljs$lang$applyTo = (function (arglist__162246){
var args = cljs.core.seq(arglist__162246);
return G__162244__delegate(args);
});
G__162244.cljs$core$IFn$_invoke$arity$variadic = G__162244__delegate;
return G__162244;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__162247__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__162247 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__162248__i = 0, G__162248__a = new Array(arguments.length -  0);
while (G__162248__i < G__162248__a.length) {G__162248__a[G__162248__i] = arguments[G__162248__i + 0]; ++G__162248__i;}
  args = new cljs.core.IndexedSeq(G__162248__a,0);
} 
return G__162247__delegate.call(this,args);};
G__162247.cljs$lang$maxFixedArity = 0;
G__162247.cljs$lang$applyTo = (function (arglist__162249){
var args = cljs.core.seq(arglist__162249);
return G__162247__delegate(args);
});
G__162247.cljs$core$IFn$_invoke$arity$variadic = G__162247__delegate;
return G__162247;
})()
;

return null;
});
