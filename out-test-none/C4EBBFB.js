goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__328786__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__328786 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__328787__i = 0, G__328787__a = new Array(arguments.length -  0);
while (G__328787__i < G__328787__a.length) {G__328787__a[G__328787__i] = arguments[G__328787__i + 0]; ++G__328787__i;}
  args = new cljs.core.IndexedSeq(G__328787__a,0);
} 
return G__328786__delegate.call(this,args);};
G__328786.cljs$lang$maxFixedArity = 0;
G__328786.cljs$lang$applyTo = (function (arglist__328788){
var args = cljs.core.seq(arglist__328788);
return G__328786__delegate(args);
});
G__328786.cljs$core$IFn$_invoke$arity$variadic = G__328786__delegate;
return G__328786;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__328789__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__328789 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__328790__i = 0, G__328790__a = new Array(arguments.length -  0);
while (G__328790__i < G__328790__a.length) {G__328790__a[G__328790__i] = arguments[G__328790__i + 0]; ++G__328790__i;}
  args = new cljs.core.IndexedSeq(G__328790__a,0);
} 
return G__328789__delegate.call(this,args);};
G__328789.cljs$lang$maxFixedArity = 0;
G__328789.cljs$lang$applyTo = (function (arglist__328791){
var args = cljs.core.seq(arglist__328791);
return G__328789__delegate(args);
});
G__328789.cljs$core$IFn$_invoke$arity$variadic = G__328789__delegate;
return G__328789;
})()
;

return null;
});
