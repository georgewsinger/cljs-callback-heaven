goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__42873__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__42873 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42874__i = 0, G__42874__a = new Array(arguments.length -  0);
while (G__42874__i < G__42874__a.length) {G__42874__a[G__42874__i] = arguments[G__42874__i + 0]; ++G__42874__i;}
  args = new cljs.core.IndexedSeq(G__42874__a,0);
} 
return G__42873__delegate.call(this,args);};
G__42873.cljs$lang$maxFixedArity = 0;
G__42873.cljs$lang$applyTo = (function (arglist__42875){
var args = cljs.core.seq(arglist__42875);
return G__42873__delegate(args);
});
G__42873.cljs$core$IFn$_invoke$arity$variadic = G__42873__delegate;
return G__42873;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__42876__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__42876 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42877__i = 0, G__42877__a = new Array(arguments.length -  0);
while (G__42877__i < G__42877__a.length) {G__42877__a[G__42877__i] = arguments[G__42877__i + 0]; ++G__42877__i;}
  args = new cljs.core.IndexedSeq(G__42877__a,0);
} 
return G__42876__delegate.call(this,args);};
G__42876.cljs$lang$maxFixedArity = 0;
G__42876.cljs$lang$applyTo = (function (arglist__42878){
var args = cljs.core.seq(arglist__42878);
return G__42876__delegate(args);
});
G__42876.cljs$core$IFn$_invoke$arity$variadic = G__42876__delegate;
return G__42876;
})()
;

return null;
});
