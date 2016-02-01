// Compiled by ClojureScript 1.7.228 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11224__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11224 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11225__i = 0, G__11225__a = new Array(arguments.length -  0);
while (G__11225__i < G__11225__a.length) {G__11225__a[G__11225__i] = arguments[G__11225__i + 0]; ++G__11225__i;}
  args = new cljs.core.IndexedSeq(G__11225__a,0);
} 
return G__11224__delegate.call(this,args);};
G__11224.cljs$lang$maxFixedArity = 0;
G__11224.cljs$lang$applyTo = (function (arglist__11226){
var args = cljs.core.seq(arglist__11226);
return G__11224__delegate(args);
});
G__11224.cljs$core$IFn$_invoke$arity$variadic = G__11224__delegate;
return G__11224;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11227__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11227 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11228__i = 0, G__11228__a = new Array(arguments.length -  0);
while (G__11228__i < G__11228__a.length) {G__11228__a[G__11228__i] = arguments[G__11228__i + 0]; ++G__11228__i;}
  args = new cljs.core.IndexedSeq(G__11228__a,0);
} 
return G__11227__delegate.call(this,args);};
G__11227.cljs$lang$maxFixedArity = 0;
G__11227.cljs$lang$applyTo = (function (arglist__11229){
var args = cljs.core.seq(arglist__11229);
return G__11227__delegate(args);
});
G__11227.cljs$core$IFn$_invoke$arity$variadic = G__11227__delegate;
return G__11227;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map