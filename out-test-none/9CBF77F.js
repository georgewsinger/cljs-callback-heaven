goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15546__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15546 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15547__i = 0, G__15547__a = new Array(arguments.length -  0);
while (G__15547__i < G__15547__a.length) {G__15547__a[G__15547__i] = arguments[G__15547__i + 0]; ++G__15547__i;}
  args = new cljs.core.IndexedSeq(G__15547__a,0);
} 
return G__15546__delegate.call(this,args);};
G__15546.cljs$lang$maxFixedArity = 0;
G__15546.cljs$lang$applyTo = (function (arglist__15548){
var args = cljs.core.seq(arglist__15548);
return G__15546__delegate(args);
});
G__15546.cljs$core$IFn$_invoke$arity$variadic = G__15546__delegate;
return G__15546;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15549__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15549 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15550__i = 0, G__15550__a = new Array(arguments.length -  0);
while (G__15550__i < G__15550__a.length) {G__15550__a[G__15550__i] = arguments[G__15550__i + 0]; ++G__15550__i;}
  args = new cljs.core.IndexedSeq(G__15550__a,0);
} 
return G__15549__delegate.call(this,args);};
G__15549.cljs$lang$maxFixedArity = 0;
G__15549.cljs$lang$applyTo = (function (arglist__15551){
var args = cljs.core.seq(arglist__15551);
return G__15549__delegate(args);
});
G__15549.cljs$core$IFn$_invoke$arity$variadic = G__15549__delegate;
return G__15549;
})()
;

return null;
});
