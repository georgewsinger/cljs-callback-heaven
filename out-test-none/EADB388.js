goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15726__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15726 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15727__i = 0, G__15727__a = new Array(arguments.length -  0);
while (G__15727__i < G__15727__a.length) {G__15727__a[G__15727__i] = arguments[G__15727__i + 0]; ++G__15727__i;}
  args = new cljs.core.IndexedSeq(G__15727__a,0);
} 
return G__15726__delegate.call(this,args);};
G__15726.cljs$lang$maxFixedArity = 0;
G__15726.cljs$lang$applyTo = (function (arglist__15728){
var args = cljs.core.seq(arglist__15728);
return G__15726__delegate(args);
});
G__15726.cljs$core$IFn$_invoke$arity$variadic = G__15726__delegate;
return G__15726;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15729__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15729 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15730__i = 0, G__15730__a = new Array(arguments.length -  0);
while (G__15730__i < G__15730__a.length) {G__15730__a[G__15730__i] = arguments[G__15730__i + 0]; ++G__15730__i;}
  args = new cljs.core.IndexedSeq(G__15730__a,0);
} 
return G__15729__delegate.call(this,args);};
G__15729.cljs$lang$maxFixedArity = 0;
G__15729.cljs$lang$applyTo = (function (arglist__15731){
var args = cljs.core.seq(arglist__15731);
return G__15729__delegate(args);
});
G__15729.cljs$core$IFn$_invoke$arity$variadic = G__15729__delegate;
return G__15729;
})()
;

return null;
});
