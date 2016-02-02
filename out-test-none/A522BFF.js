goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__34179__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__34179 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34180__i = 0, G__34180__a = new Array(arguments.length -  0);
while (G__34180__i < G__34180__a.length) {G__34180__a[G__34180__i] = arguments[G__34180__i + 0]; ++G__34180__i;}
  args = new cljs.core.IndexedSeq(G__34180__a,0);
} 
return G__34179__delegate.call(this,args);};
G__34179.cljs$lang$maxFixedArity = 0;
G__34179.cljs$lang$applyTo = (function (arglist__34181){
var args = cljs.core.seq(arglist__34181);
return G__34179__delegate(args);
});
G__34179.cljs$core$IFn$_invoke$arity$variadic = G__34179__delegate;
return G__34179;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__34182__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__34182 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34183__i = 0, G__34183__a = new Array(arguments.length -  0);
while (G__34183__i < G__34183__a.length) {G__34183__a[G__34183__i] = arguments[G__34183__i + 0]; ++G__34183__i;}
  args = new cljs.core.IndexedSeq(G__34183__a,0);
} 
return G__34182__delegate.call(this,args);};
G__34182.cljs$lang$maxFixedArity = 0;
G__34182.cljs$lang$applyTo = (function (arglist__34184){
var args = cljs.core.seq(arglist__34184);
return G__34182__delegate(args);
});
G__34182.cljs$core$IFn$_invoke$arity$variadic = G__34182__delegate;
return G__34182;
})()
;

return null;
});
