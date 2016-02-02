goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__43941__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__43941 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43942__i = 0, G__43942__a = new Array(arguments.length -  0);
while (G__43942__i < G__43942__a.length) {G__43942__a[G__43942__i] = arguments[G__43942__i + 0]; ++G__43942__i;}
  args = new cljs.core.IndexedSeq(G__43942__a,0);
} 
return G__43941__delegate.call(this,args);};
G__43941.cljs$lang$maxFixedArity = 0;
G__43941.cljs$lang$applyTo = (function (arglist__43943){
var args = cljs.core.seq(arglist__43943);
return G__43941__delegate(args);
});
G__43941.cljs$core$IFn$_invoke$arity$variadic = G__43941__delegate;
return G__43941;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__43944__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__43944 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43945__i = 0, G__43945__a = new Array(arguments.length -  0);
while (G__43945__i < G__43945__a.length) {G__43945__a[G__43945__i] = arguments[G__43945__i + 0]; ++G__43945__i;}
  args = new cljs.core.IndexedSeq(G__43945__a,0);
} 
return G__43944__delegate.call(this,args);};
G__43944.cljs$lang$maxFixedArity = 0;
G__43944.cljs$lang$applyTo = (function (arglist__43946){
var args = cljs.core.seq(arglist__43946);
return G__43944__delegate(args);
});
G__43944.cljs$core$IFn$_invoke$arity$variadic = G__43944__delegate;
return G__43944;
})()
;

return null;
});
