goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11155__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11155 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11156__i = 0, G__11156__a = new Array(arguments.length -  0);
while (G__11156__i < G__11156__a.length) {G__11156__a[G__11156__i] = arguments[G__11156__i + 0]; ++G__11156__i;}
  args = new cljs.core.IndexedSeq(G__11156__a,0);
} 
return G__11155__delegate.call(this,args);};
G__11155.cljs$lang$maxFixedArity = 0;
G__11155.cljs$lang$applyTo = (function (arglist__11157){
var args = cljs.core.seq(arglist__11157);
return G__11155__delegate(args);
});
G__11155.cljs$core$IFn$_invoke$arity$variadic = G__11155__delegate;
return G__11155;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11158__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11158 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11159__i = 0, G__11159__a = new Array(arguments.length -  0);
while (G__11159__i < G__11159__a.length) {G__11159__a[G__11159__i] = arguments[G__11159__i + 0]; ++G__11159__i;}
  args = new cljs.core.IndexedSeq(G__11159__a,0);
} 
return G__11158__delegate.call(this,args);};
G__11158.cljs$lang$maxFixedArity = 0;
G__11158.cljs$lang$applyTo = (function (arglist__11160){
var args = cljs.core.seq(arglist__11160);
return G__11158__delegate(args);
});
G__11158.cljs$core$IFn$_invoke$arity$variadic = G__11158__delegate;
return G__11158;
})()
;

return null;
});
