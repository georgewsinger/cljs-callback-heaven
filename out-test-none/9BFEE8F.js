goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__27176__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__27176 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27177__i = 0, G__27177__a = new Array(arguments.length -  0);
while (G__27177__i < G__27177__a.length) {G__27177__a[G__27177__i] = arguments[G__27177__i + 0]; ++G__27177__i;}
  args = new cljs.core.IndexedSeq(G__27177__a,0);
} 
return G__27176__delegate.call(this,args);};
G__27176.cljs$lang$maxFixedArity = 0;
G__27176.cljs$lang$applyTo = (function (arglist__27178){
var args = cljs.core.seq(arglist__27178);
return G__27176__delegate(args);
});
G__27176.cljs$core$IFn$_invoke$arity$variadic = G__27176__delegate;
return G__27176;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__27179__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__27179 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27180__i = 0, G__27180__a = new Array(arguments.length -  0);
while (G__27180__i < G__27180__a.length) {G__27180__a[G__27180__i] = arguments[G__27180__i + 0]; ++G__27180__i;}
  args = new cljs.core.IndexedSeq(G__27180__a,0);
} 
return G__27179__delegate.call(this,args);};
G__27179.cljs$lang$maxFixedArity = 0;
G__27179.cljs$lang$applyTo = (function (arglist__27181){
var args = cljs.core.seq(arglist__27181);
return G__27179__delegate(args);
});
G__27179.cljs$core$IFn$_invoke$arity$variadic = G__27179__delegate;
return G__27179;
})()
;

return null;
});
