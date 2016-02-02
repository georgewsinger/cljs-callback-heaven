goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__34082__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__34082 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34083__i = 0, G__34083__a = new Array(arguments.length -  0);
while (G__34083__i < G__34083__a.length) {G__34083__a[G__34083__i] = arguments[G__34083__i + 0]; ++G__34083__i;}
  args = new cljs.core.IndexedSeq(G__34083__a,0);
} 
return G__34082__delegate.call(this,args);};
G__34082.cljs$lang$maxFixedArity = 0;
G__34082.cljs$lang$applyTo = (function (arglist__34084){
var args = cljs.core.seq(arglist__34084);
return G__34082__delegate(args);
});
G__34082.cljs$core$IFn$_invoke$arity$variadic = G__34082__delegate;
return G__34082;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__34085__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__34085 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34086__i = 0, G__34086__a = new Array(arguments.length -  0);
while (G__34086__i < G__34086__a.length) {G__34086__a[G__34086__i] = arguments[G__34086__i + 0]; ++G__34086__i;}
  args = new cljs.core.IndexedSeq(G__34086__a,0);
} 
return G__34085__delegate.call(this,args);};
G__34085.cljs$lang$maxFixedArity = 0;
G__34085.cljs$lang$applyTo = (function (arglist__34087){
var args = cljs.core.seq(arglist__34087);
return G__34085__delegate(args);
});
G__34085.cljs$core$IFn$_invoke$arity$variadic = G__34085__delegate;
return G__34085;
})()
;

return null;
});
