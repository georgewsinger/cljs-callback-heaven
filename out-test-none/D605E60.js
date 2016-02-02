goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14983__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14983 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14984__i = 0, G__14984__a = new Array(arguments.length -  0);
while (G__14984__i < G__14984__a.length) {G__14984__a[G__14984__i] = arguments[G__14984__i + 0]; ++G__14984__i;}
  args = new cljs.core.IndexedSeq(G__14984__a,0);
} 
return G__14983__delegate.call(this,args);};
G__14983.cljs$lang$maxFixedArity = 0;
G__14983.cljs$lang$applyTo = (function (arglist__14985){
var args = cljs.core.seq(arglist__14985);
return G__14983__delegate(args);
});
G__14983.cljs$core$IFn$_invoke$arity$variadic = G__14983__delegate;
return G__14983;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14986__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14986 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14987__i = 0, G__14987__a = new Array(arguments.length -  0);
while (G__14987__i < G__14987__a.length) {G__14987__a[G__14987__i] = arguments[G__14987__i + 0]; ++G__14987__i;}
  args = new cljs.core.IndexedSeq(G__14987__a,0);
} 
return G__14986__delegate.call(this,args);};
G__14986.cljs$lang$maxFixedArity = 0;
G__14986.cljs$lang$applyTo = (function (arglist__14988){
var args = cljs.core.seq(arglist__14988);
return G__14986__delegate(args);
});
G__14986.cljs$core$IFn$_invoke$arity$variadic = G__14986__delegate;
return G__14986;
})()
;

return null;
});
