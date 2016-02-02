goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14950__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14950 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14951__i = 0, G__14951__a = new Array(arguments.length -  0);
while (G__14951__i < G__14951__a.length) {G__14951__a[G__14951__i] = arguments[G__14951__i + 0]; ++G__14951__i;}
  args = new cljs.core.IndexedSeq(G__14951__a,0);
} 
return G__14950__delegate.call(this,args);};
G__14950.cljs$lang$maxFixedArity = 0;
G__14950.cljs$lang$applyTo = (function (arglist__14952){
var args = cljs.core.seq(arglist__14952);
return G__14950__delegate(args);
});
G__14950.cljs$core$IFn$_invoke$arity$variadic = G__14950__delegate;
return G__14950;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14953__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14953 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14954__i = 0, G__14954__a = new Array(arguments.length -  0);
while (G__14954__i < G__14954__a.length) {G__14954__a[G__14954__i] = arguments[G__14954__i + 0]; ++G__14954__i;}
  args = new cljs.core.IndexedSeq(G__14954__a,0);
} 
return G__14953__delegate.call(this,args);};
G__14953.cljs$lang$maxFixedArity = 0;
G__14953.cljs$lang$applyTo = (function (arglist__14955){
var args = cljs.core.seq(arglist__14955);
return G__14953__delegate(args);
});
G__14953.cljs$core$IFn$_invoke$arity$variadic = G__14953__delegate;
return G__14953;
})()
;

return null;
});
