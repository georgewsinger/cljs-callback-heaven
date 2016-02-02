goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__265129__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__265129 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__265130__i = 0, G__265130__a = new Array(arguments.length -  0);
while (G__265130__i < G__265130__a.length) {G__265130__a[G__265130__i] = arguments[G__265130__i + 0]; ++G__265130__i;}
  args = new cljs.core.IndexedSeq(G__265130__a,0);
} 
return G__265129__delegate.call(this,args);};
G__265129.cljs$lang$maxFixedArity = 0;
G__265129.cljs$lang$applyTo = (function (arglist__265131){
var args = cljs.core.seq(arglist__265131);
return G__265129__delegate(args);
});
G__265129.cljs$core$IFn$_invoke$arity$variadic = G__265129__delegate;
return G__265129;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__265132__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__265132 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__265133__i = 0, G__265133__a = new Array(arguments.length -  0);
while (G__265133__i < G__265133__a.length) {G__265133__a[G__265133__i] = arguments[G__265133__i + 0]; ++G__265133__i;}
  args = new cljs.core.IndexedSeq(G__265133__a,0);
} 
return G__265132__delegate.call(this,args);};
G__265132.cljs$lang$maxFixedArity = 0;
G__265132.cljs$lang$applyTo = (function (arglist__265134){
var args = cljs.core.seq(arglist__265134);
return G__265132__delegate(args);
});
G__265132.cljs$core$IFn$_invoke$arity$variadic = G__265132__delegate;
return G__265132;
})()
;

return null;
});
