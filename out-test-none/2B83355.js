goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13867__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13867 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13868__i = 0, G__13868__a = new Array(arguments.length -  0);
while (G__13868__i < G__13868__a.length) {G__13868__a[G__13868__i] = arguments[G__13868__i + 0]; ++G__13868__i;}
  args = new cljs.core.IndexedSeq(G__13868__a,0);
} 
return G__13867__delegate.call(this,args);};
G__13867.cljs$lang$maxFixedArity = 0;
G__13867.cljs$lang$applyTo = (function (arglist__13869){
var args = cljs.core.seq(arglist__13869);
return G__13867__delegate(args);
});
G__13867.cljs$core$IFn$_invoke$arity$variadic = G__13867__delegate;
return G__13867;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13870__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13870 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13871__i = 0, G__13871__a = new Array(arguments.length -  0);
while (G__13871__i < G__13871__a.length) {G__13871__a[G__13871__i] = arguments[G__13871__i + 0]; ++G__13871__i;}
  args = new cljs.core.IndexedSeq(G__13871__a,0);
} 
return G__13870__delegate.call(this,args);};
G__13870.cljs$lang$maxFixedArity = 0;
G__13870.cljs$lang$applyTo = (function (arglist__13872){
var args = cljs.core.seq(arglist__13872);
return G__13870__delegate(args);
});
G__13870.cljs$core$IFn$_invoke$arity$variadic = G__13870__delegate;
return G__13870;
})()
;

return null;
});
