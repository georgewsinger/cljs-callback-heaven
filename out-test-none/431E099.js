goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11826__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11826 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11827__i = 0, G__11827__a = new Array(arguments.length -  0);
while (G__11827__i < G__11827__a.length) {G__11827__a[G__11827__i] = arguments[G__11827__i + 0]; ++G__11827__i;}
  args = new cljs.core.IndexedSeq(G__11827__a,0);
} 
return G__11826__delegate.call(this,args);};
G__11826.cljs$lang$maxFixedArity = 0;
G__11826.cljs$lang$applyTo = (function (arglist__11828){
var args = cljs.core.seq(arglist__11828);
return G__11826__delegate(args);
});
G__11826.cljs$core$IFn$_invoke$arity$variadic = G__11826__delegate;
return G__11826;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11829__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11829 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11830__i = 0, G__11830__a = new Array(arguments.length -  0);
while (G__11830__i < G__11830__a.length) {G__11830__a[G__11830__i] = arguments[G__11830__i + 0]; ++G__11830__i;}
  args = new cljs.core.IndexedSeq(G__11830__a,0);
} 
return G__11829__delegate.call(this,args);};
G__11829.cljs$lang$maxFixedArity = 0;
G__11829.cljs$lang$applyTo = (function (arglist__11831){
var args = cljs.core.seq(arglist__11831);
return G__11829__delegate(args);
});
G__11829.cljs$core$IFn$_invoke$arity$variadic = G__11829__delegate;
return G__11829;
})()
;

return null;
});
