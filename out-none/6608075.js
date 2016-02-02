goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__81456__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__81456 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__81457__i = 0, G__81457__a = new Array(arguments.length -  0);
while (G__81457__i < G__81457__a.length) {G__81457__a[G__81457__i] = arguments[G__81457__i + 0]; ++G__81457__i;}
  args = new cljs.core.IndexedSeq(G__81457__a,0);
} 
return G__81456__delegate.call(this,args);};
G__81456.cljs$lang$maxFixedArity = 0;
G__81456.cljs$lang$applyTo = (function (arglist__81458){
var args = cljs.core.seq(arglist__81458);
return G__81456__delegate(args);
});
G__81456.cljs$core$IFn$_invoke$arity$variadic = G__81456__delegate;
return G__81456;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__81459__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__81459 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__81460__i = 0, G__81460__a = new Array(arguments.length -  0);
while (G__81460__i < G__81460__a.length) {G__81460__a[G__81460__i] = arguments[G__81460__i + 0]; ++G__81460__i;}
  args = new cljs.core.IndexedSeq(G__81460__a,0);
} 
return G__81459__delegate.call(this,args);};
G__81459.cljs$lang$maxFixedArity = 0;
G__81459.cljs$lang$applyTo = (function (arglist__81461){
var args = cljs.core.seq(arglist__81461);
return G__81459__delegate(args);
});
G__81459.cljs$core$IFn$_invoke$arity$variadic = G__81459__delegate;
return G__81459;
})()
;

return null;
});
