goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__17384__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__17384 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17385__i = 0, G__17385__a = new Array(arguments.length -  0);
while (G__17385__i < G__17385__a.length) {G__17385__a[G__17385__i] = arguments[G__17385__i + 0]; ++G__17385__i;}
  args = new cljs.core.IndexedSeq(G__17385__a,0);
} 
return G__17384__delegate.call(this,args);};
G__17384.cljs$lang$maxFixedArity = 0;
G__17384.cljs$lang$applyTo = (function (arglist__17386){
var args = cljs.core.seq(arglist__17386);
return G__17384__delegate(args);
});
G__17384.cljs$core$IFn$_invoke$arity$variadic = G__17384__delegate;
return G__17384;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__17387__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__17387 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17388__i = 0, G__17388__a = new Array(arguments.length -  0);
while (G__17388__i < G__17388__a.length) {G__17388__a[G__17388__i] = arguments[G__17388__i + 0]; ++G__17388__i;}
  args = new cljs.core.IndexedSeq(G__17388__a,0);
} 
return G__17387__delegate.call(this,args);};
G__17387.cljs$lang$maxFixedArity = 0;
G__17387.cljs$lang$applyTo = (function (arglist__17389){
var args = cljs.core.seq(arglist__17389);
return G__17387__delegate(args);
});
G__17387.cljs$core$IFn$_invoke$arity$variadic = G__17387__delegate;
return G__17387;
})()
;

return null;
});
