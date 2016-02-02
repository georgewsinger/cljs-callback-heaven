goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16254__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16254 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16255__i = 0, G__16255__a = new Array(arguments.length -  0);
while (G__16255__i < G__16255__a.length) {G__16255__a[G__16255__i] = arguments[G__16255__i + 0]; ++G__16255__i;}
  args = new cljs.core.IndexedSeq(G__16255__a,0);
} 
return G__16254__delegate.call(this,args);};
G__16254.cljs$lang$maxFixedArity = 0;
G__16254.cljs$lang$applyTo = (function (arglist__16256){
var args = cljs.core.seq(arglist__16256);
return G__16254__delegate(args);
});
G__16254.cljs$core$IFn$_invoke$arity$variadic = G__16254__delegate;
return G__16254;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16257__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16257 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16258__i = 0, G__16258__a = new Array(arguments.length -  0);
while (G__16258__i < G__16258__a.length) {G__16258__a[G__16258__i] = arguments[G__16258__i + 0]; ++G__16258__i;}
  args = new cljs.core.IndexedSeq(G__16258__a,0);
} 
return G__16257__delegate.call(this,args);};
G__16257.cljs$lang$maxFixedArity = 0;
G__16257.cljs$lang$applyTo = (function (arglist__16259){
var args = cljs.core.seq(arglist__16259);
return G__16257__delegate(args);
});
G__16257.cljs$core$IFn$_invoke$arity$variadic = G__16257__delegate;
return G__16257;
})()
;

return null;
});
