goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9199__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9199 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9200__i = 0, G__9200__a = new Array(arguments.length -  0);
while (G__9200__i < G__9200__a.length) {G__9200__a[G__9200__i] = arguments[G__9200__i + 0]; ++G__9200__i;}
  args = new cljs.core.IndexedSeq(G__9200__a,0);
} 
return G__9199__delegate.call(this,args);};
G__9199.cljs$lang$maxFixedArity = 0;
G__9199.cljs$lang$applyTo = (function (arglist__9201){
var args = cljs.core.seq(arglist__9201);
return G__9199__delegate(args);
});
G__9199.cljs$core$IFn$_invoke$arity$variadic = G__9199__delegate;
return G__9199;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9202__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9202 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9203__i = 0, G__9203__a = new Array(arguments.length -  0);
while (G__9203__i < G__9203__a.length) {G__9203__a[G__9203__i] = arguments[G__9203__i + 0]; ++G__9203__i;}
  args = new cljs.core.IndexedSeq(G__9203__a,0);
} 
return G__9202__delegate.call(this,args);};
G__9202.cljs$lang$maxFixedArity = 0;
G__9202.cljs$lang$applyTo = (function (arglist__9204){
var args = cljs.core.seq(arglist__9204);
return G__9202__delegate(args);
});
G__9202.cljs$core$IFn$_invoke$arity$variadic = G__9202__delegate;
return G__9202;
})()
;

return null;
});
