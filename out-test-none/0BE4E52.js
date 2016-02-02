goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__32834__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__32834 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32835__i = 0, G__32835__a = new Array(arguments.length -  0);
while (G__32835__i < G__32835__a.length) {G__32835__a[G__32835__i] = arguments[G__32835__i + 0]; ++G__32835__i;}
  args = new cljs.core.IndexedSeq(G__32835__a,0);
} 
return G__32834__delegate.call(this,args);};
G__32834.cljs$lang$maxFixedArity = 0;
G__32834.cljs$lang$applyTo = (function (arglist__32836){
var args = cljs.core.seq(arglist__32836);
return G__32834__delegate(args);
});
G__32834.cljs$core$IFn$_invoke$arity$variadic = G__32834__delegate;
return G__32834;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__32837__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__32837 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32838__i = 0, G__32838__a = new Array(arguments.length -  0);
while (G__32838__i < G__32838__a.length) {G__32838__a[G__32838__i] = arguments[G__32838__i + 0]; ++G__32838__i;}
  args = new cljs.core.IndexedSeq(G__32838__a,0);
} 
return G__32837__delegate.call(this,args);};
G__32837.cljs$lang$maxFixedArity = 0;
G__32837.cljs$lang$applyTo = (function (arglist__32839){
var args = cljs.core.seq(arglist__32839);
return G__32837__delegate(args);
});
G__32837.cljs$core$IFn$_invoke$arity$variadic = G__32837__delegate;
return G__32837;
})()
;

return null;
});
