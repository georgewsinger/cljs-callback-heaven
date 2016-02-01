goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15797__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15797 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15798__i = 0, G__15798__a = new Array(arguments.length -  0);
while (G__15798__i < G__15798__a.length) {G__15798__a[G__15798__i] = arguments[G__15798__i + 0]; ++G__15798__i;}
  args = new cljs.core.IndexedSeq(G__15798__a,0);
} 
return G__15797__delegate.call(this,args);};
G__15797.cljs$lang$maxFixedArity = 0;
G__15797.cljs$lang$applyTo = (function (arglist__15799){
var args = cljs.core.seq(arglist__15799);
return G__15797__delegate(args);
});
G__15797.cljs$core$IFn$_invoke$arity$variadic = G__15797__delegate;
return G__15797;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15800__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15800 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15801__i = 0, G__15801__a = new Array(arguments.length -  0);
while (G__15801__i < G__15801__a.length) {G__15801__a[G__15801__i] = arguments[G__15801__i + 0]; ++G__15801__i;}
  args = new cljs.core.IndexedSeq(G__15801__a,0);
} 
return G__15800__delegate.call(this,args);};
G__15800.cljs$lang$maxFixedArity = 0;
G__15800.cljs$lang$applyTo = (function (arglist__15802){
var args = cljs.core.seq(arglist__15802);
return G__15800__delegate(args);
});
G__15800.cljs$core$IFn$_invoke$arity$variadic = G__15800__delegate;
return G__15800;
})()
;

return null;
});
