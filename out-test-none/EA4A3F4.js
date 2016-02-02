goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__21983__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__21983 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21984__i = 0, G__21984__a = new Array(arguments.length -  0);
while (G__21984__i < G__21984__a.length) {G__21984__a[G__21984__i] = arguments[G__21984__i + 0]; ++G__21984__i;}
  args = new cljs.core.IndexedSeq(G__21984__a,0);
} 
return G__21983__delegate.call(this,args);};
G__21983.cljs$lang$maxFixedArity = 0;
G__21983.cljs$lang$applyTo = (function (arglist__21985){
var args = cljs.core.seq(arglist__21985);
return G__21983__delegate(args);
});
G__21983.cljs$core$IFn$_invoke$arity$variadic = G__21983__delegate;
return G__21983;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__21986__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__21986 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21987__i = 0, G__21987__a = new Array(arguments.length -  0);
while (G__21987__i < G__21987__a.length) {G__21987__a[G__21987__i] = arguments[G__21987__i + 0]; ++G__21987__i;}
  args = new cljs.core.IndexedSeq(G__21987__a,0);
} 
return G__21986__delegate.call(this,args);};
G__21986.cljs$lang$maxFixedArity = 0;
G__21986.cljs$lang$applyTo = (function (arglist__21988){
var args = cljs.core.seq(arglist__21988);
return G__21986__delegate(args);
});
G__21986.cljs$core$IFn$_invoke$arity$variadic = G__21986__delegate;
return G__21986;
})()
;

return null;
});
