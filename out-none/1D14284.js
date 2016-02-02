goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__19388__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__19388 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19389__i = 0, G__19389__a = new Array(arguments.length -  0);
while (G__19389__i < G__19389__a.length) {G__19389__a[G__19389__i] = arguments[G__19389__i + 0]; ++G__19389__i;}
  args = new cljs.core.IndexedSeq(G__19389__a,0);
} 
return G__19388__delegate.call(this,args);};
G__19388.cljs$lang$maxFixedArity = 0;
G__19388.cljs$lang$applyTo = (function (arglist__19390){
var args = cljs.core.seq(arglist__19390);
return G__19388__delegate(args);
});
G__19388.cljs$core$IFn$_invoke$arity$variadic = G__19388__delegate;
return G__19388;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__19391__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__19391 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19392__i = 0, G__19392__a = new Array(arguments.length -  0);
while (G__19392__i < G__19392__a.length) {G__19392__a[G__19392__i] = arguments[G__19392__i + 0]; ++G__19392__i;}
  args = new cljs.core.IndexedSeq(G__19392__a,0);
} 
return G__19391__delegate.call(this,args);};
G__19391.cljs$lang$maxFixedArity = 0;
G__19391.cljs$lang$applyTo = (function (arglist__19393){
var args = cljs.core.seq(arglist__19393);
return G__19391__delegate(args);
});
G__19391.cljs$core$IFn$_invoke$arity$variadic = G__19391__delegate;
return G__19391;
})()
;

return null;
});
