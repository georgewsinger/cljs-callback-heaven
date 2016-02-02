goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9785__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9785 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9786__i = 0, G__9786__a = new Array(arguments.length -  0);
while (G__9786__i < G__9786__a.length) {G__9786__a[G__9786__i] = arguments[G__9786__i + 0]; ++G__9786__i;}
  args = new cljs.core.IndexedSeq(G__9786__a,0);
} 
return G__9785__delegate.call(this,args);};
G__9785.cljs$lang$maxFixedArity = 0;
G__9785.cljs$lang$applyTo = (function (arglist__9787){
var args = cljs.core.seq(arglist__9787);
return G__9785__delegate(args);
});
G__9785.cljs$core$IFn$_invoke$arity$variadic = G__9785__delegate;
return G__9785;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9788__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9788 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9789__i = 0, G__9789__a = new Array(arguments.length -  0);
while (G__9789__i < G__9789__a.length) {G__9789__a[G__9789__i] = arguments[G__9789__i + 0]; ++G__9789__i;}
  args = new cljs.core.IndexedSeq(G__9789__a,0);
} 
return G__9788__delegate.call(this,args);};
G__9788.cljs$lang$maxFixedArity = 0;
G__9788.cljs$lang$applyTo = (function (arglist__9790){
var args = cljs.core.seq(arglist__9790);
return G__9788__delegate(args);
});
G__9788.cljs$core$IFn$_invoke$arity$variadic = G__9788__delegate;
return G__9788;
})()
;

return null;
});
