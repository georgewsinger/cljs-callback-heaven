goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__43576__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__43576 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43577__i = 0, G__43577__a = new Array(arguments.length -  0);
while (G__43577__i < G__43577__a.length) {G__43577__a[G__43577__i] = arguments[G__43577__i + 0]; ++G__43577__i;}
  args = new cljs.core.IndexedSeq(G__43577__a,0);
} 
return G__43576__delegate.call(this,args);};
G__43576.cljs$lang$maxFixedArity = 0;
G__43576.cljs$lang$applyTo = (function (arglist__43578){
var args = cljs.core.seq(arglist__43578);
return G__43576__delegate(args);
});
G__43576.cljs$core$IFn$_invoke$arity$variadic = G__43576__delegate;
return G__43576;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__43579__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__43579 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43580__i = 0, G__43580__a = new Array(arguments.length -  0);
while (G__43580__i < G__43580__a.length) {G__43580__a[G__43580__i] = arguments[G__43580__i + 0]; ++G__43580__i;}
  args = new cljs.core.IndexedSeq(G__43580__a,0);
} 
return G__43579__delegate.call(this,args);};
G__43579.cljs$lang$maxFixedArity = 0;
G__43579.cljs$lang$applyTo = (function (arglist__43581){
var args = cljs.core.seq(arglist__43581);
return G__43579__delegate(args);
});
G__43579.cljs$core$IFn$_invoke$arity$variadic = G__43579__delegate;
return G__43579;
})()
;

return null;
});
