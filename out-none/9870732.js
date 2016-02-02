goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__17673__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__17673 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17674__i = 0, G__17674__a = new Array(arguments.length -  0);
while (G__17674__i < G__17674__a.length) {G__17674__a[G__17674__i] = arguments[G__17674__i + 0]; ++G__17674__i;}
  args = new cljs.core.IndexedSeq(G__17674__a,0);
} 
return G__17673__delegate.call(this,args);};
G__17673.cljs$lang$maxFixedArity = 0;
G__17673.cljs$lang$applyTo = (function (arglist__17675){
var args = cljs.core.seq(arglist__17675);
return G__17673__delegate(args);
});
G__17673.cljs$core$IFn$_invoke$arity$variadic = G__17673__delegate;
return G__17673;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__17676__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__17676 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17677__i = 0, G__17677__a = new Array(arguments.length -  0);
while (G__17677__i < G__17677__a.length) {G__17677__a[G__17677__i] = arguments[G__17677__i + 0]; ++G__17677__i;}
  args = new cljs.core.IndexedSeq(G__17677__a,0);
} 
return G__17676__delegate.call(this,args);};
G__17676.cljs$lang$maxFixedArity = 0;
G__17676.cljs$lang$applyTo = (function (arglist__17678){
var args = cljs.core.seq(arglist__17678);
return G__17676__delegate(args);
});
G__17676.cljs$core$IFn$_invoke$arity$variadic = G__17676__delegate;
return G__17676;
})()
;

return null;
});
