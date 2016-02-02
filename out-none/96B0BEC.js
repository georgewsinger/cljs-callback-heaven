goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__53853__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__53853 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53854__i = 0, G__53854__a = new Array(arguments.length -  0);
while (G__53854__i < G__53854__a.length) {G__53854__a[G__53854__i] = arguments[G__53854__i + 0]; ++G__53854__i;}
  args = new cljs.core.IndexedSeq(G__53854__a,0);
} 
return G__53853__delegate.call(this,args);};
G__53853.cljs$lang$maxFixedArity = 0;
G__53853.cljs$lang$applyTo = (function (arglist__53855){
var args = cljs.core.seq(arglist__53855);
return G__53853__delegate(args);
});
G__53853.cljs$core$IFn$_invoke$arity$variadic = G__53853__delegate;
return G__53853;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__53856__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__53856 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53857__i = 0, G__53857__a = new Array(arguments.length -  0);
while (G__53857__i < G__53857__a.length) {G__53857__a[G__53857__i] = arguments[G__53857__i + 0]; ++G__53857__i;}
  args = new cljs.core.IndexedSeq(G__53857__a,0);
} 
return G__53856__delegate.call(this,args);};
G__53856.cljs$lang$maxFixedArity = 0;
G__53856.cljs$lang$applyTo = (function (arglist__53858){
var args = cljs.core.seq(arglist__53858);
return G__53856__delegate(args);
});
G__53856.cljs$core$IFn$_invoke$arity$variadic = G__53856__delegate;
return G__53856;
})()
;

return null;
});
