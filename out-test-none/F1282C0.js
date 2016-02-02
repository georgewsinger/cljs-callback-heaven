goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__32823__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__32823 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32824__i = 0, G__32824__a = new Array(arguments.length -  0);
while (G__32824__i < G__32824__a.length) {G__32824__a[G__32824__i] = arguments[G__32824__i + 0]; ++G__32824__i;}
  args = new cljs.core.IndexedSeq(G__32824__a,0);
} 
return G__32823__delegate.call(this,args);};
G__32823.cljs$lang$maxFixedArity = 0;
G__32823.cljs$lang$applyTo = (function (arglist__32825){
var args = cljs.core.seq(arglist__32825);
return G__32823__delegate(args);
});
G__32823.cljs$core$IFn$_invoke$arity$variadic = G__32823__delegate;
return G__32823;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__32826__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__32826 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32827__i = 0, G__32827__a = new Array(arguments.length -  0);
while (G__32827__i < G__32827__a.length) {G__32827__a[G__32827__i] = arguments[G__32827__i + 0]; ++G__32827__i;}
  args = new cljs.core.IndexedSeq(G__32827__a,0);
} 
return G__32826__delegate.call(this,args);};
G__32826.cljs$lang$maxFixedArity = 0;
G__32826.cljs$lang$applyTo = (function (arglist__32828){
var args = cljs.core.seq(arglist__32828);
return G__32826__delegate(args);
});
G__32826.cljs$core$IFn$_invoke$arity$variadic = G__32826__delegate;
return G__32826;
})()
;

return null;
});
