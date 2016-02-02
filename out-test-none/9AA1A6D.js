goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__17307__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__17307 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17308__i = 0, G__17308__a = new Array(arguments.length -  0);
while (G__17308__i < G__17308__a.length) {G__17308__a[G__17308__i] = arguments[G__17308__i + 0]; ++G__17308__i;}
  args = new cljs.core.IndexedSeq(G__17308__a,0);
} 
return G__17307__delegate.call(this,args);};
G__17307.cljs$lang$maxFixedArity = 0;
G__17307.cljs$lang$applyTo = (function (arglist__17309){
var args = cljs.core.seq(arglist__17309);
return G__17307__delegate(args);
});
G__17307.cljs$core$IFn$_invoke$arity$variadic = G__17307__delegate;
return G__17307;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__17310__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__17310 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17311__i = 0, G__17311__a = new Array(arguments.length -  0);
while (G__17311__i < G__17311__a.length) {G__17311__a[G__17311__i] = arguments[G__17311__i + 0]; ++G__17311__i;}
  args = new cljs.core.IndexedSeq(G__17311__a,0);
} 
return G__17310__delegate.call(this,args);};
G__17310.cljs$lang$maxFixedArity = 0;
G__17310.cljs$lang$applyTo = (function (arglist__17312){
var args = cljs.core.seq(arglist__17312);
return G__17310__delegate(args);
});
G__17310.cljs$core$IFn$_invoke$arity$variadic = G__17310__delegate;
return G__17310;
})()
;

return null;
});
