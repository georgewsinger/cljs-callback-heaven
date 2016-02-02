goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__24676__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__24676 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24677__i = 0, G__24677__a = new Array(arguments.length -  0);
while (G__24677__i < G__24677__a.length) {G__24677__a[G__24677__i] = arguments[G__24677__i + 0]; ++G__24677__i;}
  args = new cljs.core.IndexedSeq(G__24677__a,0);
} 
return G__24676__delegate.call(this,args);};
G__24676.cljs$lang$maxFixedArity = 0;
G__24676.cljs$lang$applyTo = (function (arglist__24678){
var args = cljs.core.seq(arglist__24678);
return G__24676__delegate(args);
});
G__24676.cljs$core$IFn$_invoke$arity$variadic = G__24676__delegate;
return G__24676;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__24679__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__24679 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24680__i = 0, G__24680__a = new Array(arguments.length -  0);
while (G__24680__i < G__24680__a.length) {G__24680__a[G__24680__i] = arguments[G__24680__i + 0]; ++G__24680__i;}
  args = new cljs.core.IndexedSeq(G__24680__a,0);
} 
return G__24679__delegate.call(this,args);};
G__24679.cljs$lang$maxFixedArity = 0;
G__24679.cljs$lang$applyTo = (function (arglist__24681){
var args = cljs.core.seq(arglist__24681);
return G__24679__delegate(args);
});
G__24679.cljs$core$IFn$_invoke$arity$variadic = G__24679__delegate;
return G__24679;
})()
;

return null;
});
