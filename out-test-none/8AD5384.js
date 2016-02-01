goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15119__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15119 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15120__i = 0, G__15120__a = new Array(arguments.length -  0);
while (G__15120__i < G__15120__a.length) {G__15120__a[G__15120__i] = arguments[G__15120__i + 0]; ++G__15120__i;}
  args = new cljs.core.IndexedSeq(G__15120__a,0);
} 
return G__15119__delegate.call(this,args);};
G__15119.cljs$lang$maxFixedArity = 0;
G__15119.cljs$lang$applyTo = (function (arglist__15121){
var args = cljs.core.seq(arglist__15121);
return G__15119__delegate(args);
});
G__15119.cljs$core$IFn$_invoke$arity$variadic = G__15119__delegate;
return G__15119;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15122__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15122 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15123__i = 0, G__15123__a = new Array(arguments.length -  0);
while (G__15123__i < G__15123__a.length) {G__15123__a[G__15123__i] = arguments[G__15123__i + 0]; ++G__15123__i;}
  args = new cljs.core.IndexedSeq(G__15123__a,0);
} 
return G__15122__delegate.call(this,args);};
G__15122.cljs$lang$maxFixedArity = 0;
G__15122.cljs$lang$applyTo = (function (arglist__15124){
var args = cljs.core.seq(arglist__15124);
return G__15122__delegate(args);
});
G__15122.cljs$core$IFn$_invoke$arity$variadic = G__15122__delegate;
return G__15122;
})()
;

return null;
});
