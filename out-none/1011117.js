goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__24734__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__24734 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24735__i = 0, G__24735__a = new Array(arguments.length -  0);
while (G__24735__i < G__24735__a.length) {G__24735__a[G__24735__i] = arguments[G__24735__i + 0]; ++G__24735__i;}
  args = new cljs.core.IndexedSeq(G__24735__a,0);
} 
return G__24734__delegate.call(this,args);};
G__24734.cljs$lang$maxFixedArity = 0;
G__24734.cljs$lang$applyTo = (function (arglist__24736){
var args = cljs.core.seq(arglist__24736);
return G__24734__delegate(args);
});
G__24734.cljs$core$IFn$_invoke$arity$variadic = G__24734__delegate;
return G__24734;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__24737__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__24737 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24738__i = 0, G__24738__a = new Array(arguments.length -  0);
while (G__24738__i < G__24738__a.length) {G__24738__a[G__24738__i] = arguments[G__24738__i + 0]; ++G__24738__i;}
  args = new cljs.core.IndexedSeq(G__24738__a,0);
} 
return G__24737__delegate.call(this,args);};
G__24737.cljs$lang$maxFixedArity = 0;
G__24737.cljs$lang$applyTo = (function (arglist__24739){
var args = cljs.core.seq(arglist__24739);
return G__24737__delegate(args);
});
G__24737.cljs$core$IFn$_invoke$arity$variadic = G__24737__delegate;
return G__24737;
})()
;

return null;
});
