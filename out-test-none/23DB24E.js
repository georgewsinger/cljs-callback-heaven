goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__170733__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__170733 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__170734__i = 0, G__170734__a = new Array(arguments.length -  0);
while (G__170734__i < G__170734__a.length) {G__170734__a[G__170734__i] = arguments[G__170734__i + 0]; ++G__170734__i;}
  args = new cljs.core.IndexedSeq(G__170734__a,0);
} 
return G__170733__delegate.call(this,args);};
G__170733.cljs$lang$maxFixedArity = 0;
G__170733.cljs$lang$applyTo = (function (arglist__170735){
var args = cljs.core.seq(arglist__170735);
return G__170733__delegate(args);
});
G__170733.cljs$core$IFn$_invoke$arity$variadic = G__170733__delegate;
return G__170733;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__170736__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__170736 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__170737__i = 0, G__170737__a = new Array(arguments.length -  0);
while (G__170737__i < G__170737__a.length) {G__170737__a[G__170737__i] = arguments[G__170737__i + 0]; ++G__170737__i;}
  args = new cljs.core.IndexedSeq(G__170737__a,0);
} 
return G__170736__delegate.call(this,args);};
G__170736.cljs$lang$maxFixedArity = 0;
G__170736.cljs$lang$applyTo = (function (arglist__170738){
var args = cljs.core.seq(arglist__170738);
return G__170736__delegate(args);
});
G__170736.cljs$core$IFn$_invoke$arity$variadic = G__170736__delegate;
return G__170736;
})()
;

return null;
});
