goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15785__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15785 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15786__i = 0, G__15786__a = new Array(arguments.length -  0);
while (G__15786__i < G__15786__a.length) {G__15786__a[G__15786__i] = arguments[G__15786__i + 0]; ++G__15786__i;}
  args = new cljs.core.IndexedSeq(G__15786__a,0);
} 
return G__15785__delegate.call(this,args);};
G__15785.cljs$lang$maxFixedArity = 0;
G__15785.cljs$lang$applyTo = (function (arglist__15787){
var args = cljs.core.seq(arglist__15787);
return G__15785__delegate(args);
});
G__15785.cljs$core$IFn$_invoke$arity$variadic = G__15785__delegate;
return G__15785;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15788__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15788 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15789__i = 0, G__15789__a = new Array(arguments.length -  0);
while (G__15789__i < G__15789__a.length) {G__15789__a[G__15789__i] = arguments[G__15789__i + 0]; ++G__15789__i;}
  args = new cljs.core.IndexedSeq(G__15789__a,0);
} 
return G__15788__delegate.call(this,args);};
G__15788.cljs$lang$maxFixedArity = 0;
G__15788.cljs$lang$applyTo = (function (arglist__15790){
var args = cljs.core.seq(arglist__15790);
return G__15788__delegate(args);
});
G__15788.cljs$core$IFn$_invoke$arity$variadic = G__15788__delegate;
return G__15788;
})()
;

return null;
});
