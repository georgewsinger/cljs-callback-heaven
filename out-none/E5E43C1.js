goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__17303__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__17303 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17304__i = 0, G__17304__a = new Array(arguments.length -  0);
while (G__17304__i < G__17304__a.length) {G__17304__a[G__17304__i] = arguments[G__17304__i + 0]; ++G__17304__i;}
  args = new cljs.core.IndexedSeq(G__17304__a,0);
} 
return G__17303__delegate.call(this,args);};
G__17303.cljs$lang$maxFixedArity = 0;
G__17303.cljs$lang$applyTo = (function (arglist__17305){
var args = cljs.core.seq(arglist__17305);
return G__17303__delegate(args);
});
G__17303.cljs$core$IFn$_invoke$arity$variadic = G__17303__delegate;
return G__17303;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__17306__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__17306 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17307__i = 0, G__17307__a = new Array(arguments.length -  0);
while (G__17307__i < G__17307__a.length) {G__17307__a[G__17307__i] = arguments[G__17307__i + 0]; ++G__17307__i;}
  args = new cljs.core.IndexedSeq(G__17307__a,0);
} 
return G__17306__delegate.call(this,args);};
G__17306.cljs$lang$maxFixedArity = 0;
G__17306.cljs$lang$applyTo = (function (arglist__17308){
var args = cljs.core.seq(arglist__17308);
return G__17306__delegate(args);
});
G__17306.cljs$core$IFn$_invoke$arity$variadic = G__17306__delegate;
return G__17306;
})()
;

return null;
});
