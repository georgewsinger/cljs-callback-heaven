goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11525__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11525 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11526__i = 0, G__11526__a = new Array(arguments.length -  0);
while (G__11526__i < G__11526__a.length) {G__11526__a[G__11526__i] = arguments[G__11526__i + 0]; ++G__11526__i;}
  args = new cljs.core.IndexedSeq(G__11526__a,0);
} 
return G__11525__delegate.call(this,args);};
G__11525.cljs$lang$maxFixedArity = 0;
G__11525.cljs$lang$applyTo = (function (arglist__11527){
var args = cljs.core.seq(arglist__11527);
return G__11525__delegate(args);
});
G__11525.cljs$core$IFn$_invoke$arity$variadic = G__11525__delegate;
return G__11525;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11528__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11528 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11529__i = 0, G__11529__a = new Array(arguments.length -  0);
while (G__11529__i < G__11529__a.length) {G__11529__a[G__11529__i] = arguments[G__11529__i + 0]; ++G__11529__i;}
  args = new cljs.core.IndexedSeq(G__11529__a,0);
} 
return G__11528__delegate.call(this,args);};
G__11528.cljs$lang$maxFixedArity = 0;
G__11528.cljs$lang$applyTo = (function (arglist__11530){
var args = cljs.core.seq(arglist__11530);
return G__11528__delegate(args);
});
G__11528.cljs$core$IFn$_invoke$arity$variadic = G__11528__delegate;
return G__11528;
})()
;

return null;
});
