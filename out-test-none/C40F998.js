goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16234__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16234 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16235__i = 0, G__16235__a = new Array(arguments.length -  0);
while (G__16235__i < G__16235__a.length) {G__16235__a[G__16235__i] = arguments[G__16235__i + 0]; ++G__16235__i;}
  args = new cljs.core.IndexedSeq(G__16235__a,0);
} 
return G__16234__delegate.call(this,args);};
G__16234.cljs$lang$maxFixedArity = 0;
G__16234.cljs$lang$applyTo = (function (arglist__16236){
var args = cljs.core.seq(arglist__16236);
return G__16234__delegate(args);
});
G__16234.cljs$core$IFn$_invoke$arity$variadic = G__16234__delegate;
return G__16234;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16237__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16237 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16238__i = 0, G__16238__a = new Array(arguments.length -  0);
while (G__16238__i < G__16238__a.length) {G__16238__a[G__16238__i] = arguments[G__16238__i + 0]; ++G__16238__i;}
  args = new cljs.core.IndexedSeq(G__16238__a,0);
} 
return G__16237__delegate.call(this,args);};
G__16237.cljs$lang$maxFixedArity = 0;
G__16237.cljs$lang$applyTo = (function (arglist__16239){
var args = cljs.core.seq(arglist__16239);
return G__16237__delegate(args);
});
G__16237.cljs$core$IFn$_invoke$arity$variadic = G__16237__delegate;
return G__16237;
})()
;

return null;
});
