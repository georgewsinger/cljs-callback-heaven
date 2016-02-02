goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__92964__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__92964 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__92965__i = 0, G__92965__a = new Array(arguments.length -  0);
while (G__92965__i < G__92965__a.length) {G__92965__a[G__92965__i] = arguments[G__92965__i + 0]; ++G__92965__i;}
  args = new cljs.core.IndexedSeq(G__92965__a,0);
} 
return G__92964__delegate.call(this,args);};
G__92964.cljs$lang$maxFixedArity = 0;
G__92964.cljs$lang$applyTo = (function (arglist__92966){
var args = cljs.core.seq(arglist__92966);
return G__92964__delegate(args);
});
G__92964.cljs$core$IFn$_invoke$arity$variadic = G__92964__delegate;
return G__92964;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__92967__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__92967 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__92968__i = 0, G__92968__a = new Array(arguments.length -  0);
while (G__92968__i < G__92968__a.length) {G__92968__a[G__92968__i] = arguments[G__92968__i + 0]; ++G__92968__i;}
  args = new cljs.core.IndexedSeq(G__92968__a,0);
} 
return G__92967__delegate.call(this,args);};
G__92967.cljs$lang$maxFixedArity = 0;
G__92967.cljs$lang$applyTo = (function (arglist__92969){
var args = cljs.core.seq(arglist__92969);
return G__92967__delegate(args);
});
G__92967.cljs$core$IFn$_invoke$arity$variadic = G__92967__delegate;
return G__92967;
})()
;

return null;
});
