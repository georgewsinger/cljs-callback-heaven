goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__305694__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__305694 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__305695__i = 0, G__305695__a = new Array(arguments.length -  0);
while (G__305695__i < G__305695__a.length) {G__305695__a[G__305695__i] = arguments[G__305695__i + 0]; ++G__305695__i;}
  args = new cljs.core.IndexedSeq(G__305695__a,0);
} 
return G__305694__delegate.call(this,args);};
G__305694.cljs$lang$maxFixedArity = 0;
G__305694.cljs$lang$applyTo = (function (arglist__305696){
var args = cljs.core.seq(arglist__305696);
return G__305694__delegate(args);
});
G__305694.cljs$core$IFn$_invoke$arity$variadic = G__305694__delegate;
return G__305694;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__305697__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__305697 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__305698__i = 0, G__305698__a = new Array(arguments.length -  0);
while (G__305698__i < G__305698__a.length) {G__305698__a[G__305698__i] = arguments[G__305698__i + 0]; ++G__305698__i;}
  args = new cljs.core.IndexedSeq(G__305698__a,0);
} 
return G__305697__delegate.call(this,args);};
G__305697.cljs$lang$maxFixedArity = 0;
G__305697.cljs$lang$applyTo = (function (arglist__305699){
var args = cljs.core.seq(arglist__305699);
return G__305697__delegate(args);
});
G__305697.cljs$core$IFn$_invoke$arity$variadic = G__305697__delegate;
return G__305697;
})()
;

return null;
});
