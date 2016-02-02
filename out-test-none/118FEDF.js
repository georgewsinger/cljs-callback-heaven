goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__301948__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__301948 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__301949__i = 0, G__301949__a = new Array(arguments.length -  0);
while (G__301949__i < G__301949__a.length) {G__301949__a[G__301949__i] = arguments[G__301949__i + 0]; ++G__301949__i;}
  args = new cljs.core.IndexedSeq(G__301949__a,0);
} 
return G__301948__delegate.call(this,args);};
G__301948.cljs$lang$maxFixedArity = 0;
G__301948.cljs$lang$applyTo = (function (arglist__301950){
var args = cljs.core.seq(arglist__301950);
return G__301948__delegate(args);
});
G__301948.cljs$core$IFn$_invoke$arity$variadic = G__301948__delegate;
return G__301948;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__301951__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__301951 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__301952__i = 0, G__301952__a = new Array(arguments.length -  0);
while (G__301952__i < G__301952__a.length) {G__301952__a[G__301952__i] = arguments[G__301952__i + 0]; ++G__301952__i;}
  args = new cljs.core.IndexedSeq(G__301952__a,0);
} 
return G__301951__delegate.call(this,args);};
G__301951.cljs$lang$maxFixedArity = 0;
G__301951.cljs$lang$applyTo = (function (arglist__301953){
var args = cljs.core.seq(arglist__301953);
return G__301951__delegate(args);
});
G__301951.cljs$core$IFn$_invoke$arity$variadic = G__301951__delegate;
return G__301951;
})()
;

return null;
});
