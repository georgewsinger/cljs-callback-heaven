goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__17431__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__17431 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17432__i = 0, G__17432__a = new Array(arguments.length -  0);
while (G__17432__i < G__17432__a.length) {G__17432__a[G__17432__i] = arguments[G__17432__i + 0]; ++G__17432__i;}
  args = new cljs.core.IndexedSeq(G__17432__a,0);
} 
return G__17431__delegate.call(this,args);};
G__17431.cljs$lang$maxFixedArity = 0;
G__17431.cljs$lang$applyTo = (function (arglist__17433){
var args = cljs.core.seq(arglist__17433);
return G__17431__delegate(args);
});
G__17431.cljs$core$IFn$_invoke$arity$variadic = G__17431__delegate;
return G__17431;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__17434__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__17434 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17435__i = 0, G__17435__a = new Array(arguments.length -  0);
while (G__17435__i < G__17435__a.length) {G__17435__a[G__17435__i] = arguments[G__17435__i + 0]; ++G__17435__i;}
  args = new cljs.core.IndexedSeq(G__17435__a,0);
} 
return G__17434__delegate.call(this,args);};
G__17434.cljs$lang$maxFixedArity = 0;
G__17434.cljs$lang$applyTo = (function (arglist__17436){
var args = cljs.core.seq(arglist__17436);
return G__17434__delegate(args);
});
G__17434.cljs$core$IFn$_invoke$arity$variadic = G__17434__delegate;
return G__17434;
})()
;

return null;
});
