goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13537__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13537 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13538__i = 0, G__13538__a = new Array(arguments.length -  0);
while (G__13538__i < G__13538__a.length) {G__13538__a[G__13538__i] = arguments[G__13538__i + 0]; ++G__13538__i;}
  args = new cljs.core.IndexedSeq(G__13538__a,0);
} 
return G__13537__delegate.call(this,args);};
G__13537.cljs$lang$maxFixedArity = 0;
G__13537.cljs$lang$applyTo = (function (arglist__13539){
var args = cljs.core.seq(arglist__13539);
return G__13537__delegate(args);
});
G__13537.cljs$core$IFn$_invoke$arity$variadic = G__13537__delegate;
return G__13537;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13540__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13540 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13541__i = 0, G__13541__a = new Array(arguments.length -  0);
while (G__13541__i < G__13541__a.length) {G__13541__a[G__13541__i] = arguments[G__13541__i + 0]; ++G__13541__i;}
  args = new cljs.core.IndexedSeq(G__13541__a,0);
} 
return G__13540__delegate.call(this,args);};
G__13540.cljs$lang$maxFixedArity = 0;
G__13540.cljs$lang$applyTo = (function (arglist__13542){
var args = cljs.core.seq(arglist__13542);
return G__13540__delegate(args);
});
G__13540.cljs$core$IFn$_invoke$arity$variadic = G__13540__delegate;
return G__13540;
})()
;

return null;
});
