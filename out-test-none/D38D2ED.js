goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__19422__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__19422 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19423__i = 0, G__19423__a = new Array(arguments.length -  0);
while (G__19423__i < G__19423__a.length) {G__19423__a[G__19423__i] = arguments[G__19423__i + 0]; ++G__19423__i;}
  args = new cljs.core.IndexedSeq(G__19423__a,0);
} 
return G__19422__delegate.call(this,args);};
G__19422.cljs$lang$maxFixedArity = 0;
G__19422.cljs$lang$applyTo = (function (arglist__19424){
var args = cljs.core.seq(arglist__19424);
return G__19422__delegate(args);
});
G__19422.cljs$core$IFn$_invoke$arity$variadic = G__19422__delegate;
return G__19422;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__19425__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__19425 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19426__i = 0, G__19426__a = new Array(arguments.length -  0);
while (G__19426__i < G__19426__a.length) {G__19426__a[G__19426__i] = arguments[G__19426__i + 0]; ++G__19426__i;}
  args = new cljs.core.IndexedSeq(G__19426__a,0);
} 
return G__19425__delegate.call(this,args);};
G__19425.cljs$lang$maxFixedArity = 0;
G__19425.cljs$lang$applyTo = (function (arglist__19427){
var args = cljs.core.seq(arglist__19427);
return G__19425__delegate(args);
});
G__19425.cljs$core$IFn$_invoke$arity$variadic = G__19425__delegate;
return G__19425;
})()
;

return null;
});
