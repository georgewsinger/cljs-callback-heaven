goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15576__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15576 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15577__i = 0, G__15577__a = new Array(arguments.length -  0);
while (G__15577__i < G__15577__a.length) {G__15577__a[G__15577__i] = arguments[G__15577__i + 0]; ++G__15577__i;}
  args = new cljs.core.IndexedSeq(G__15577__a,0);
} 
return G__15576__delegate.call(this,args);};
G__15576.cljs$lang$maxFixedArity = 0;
G__15576.cljs$lang$applyTo = (function (arglist__15578){
var args = cljs.core.seq(arglist__15578);
return G__15576__delegate(args);
});
G__15576.cljs$core$IFn$_invoke$arity$variadic = G__15576__delegate;
return G__15576;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15579__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15579 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15580__i = 0, G__15580__a = new Array(arguments.length -  0);
while (G__15580__i < G__15580__a.length) {G__15580__a[G__15580__i] = arguments[G__15580__i + 0]; ++G__15580__i;}
  args = new cljs.core.IndexedSeq(G__15580__a,0);
} 
return G__15579__delegate.call(this,args);};
G__15579.cljs$lang$maxFixedArity = 0;
G__15579.cljs$lang$applyTo = (function (arglist__15581){
var args = cljs.core.seq(arglist__15581);
return G__15579__delegate(args);
});
G__15579.cljs$core$IFn$_invoke$arity$variadic = G__15579__delegate;
return G__15579;
})()
;

return null;
});
