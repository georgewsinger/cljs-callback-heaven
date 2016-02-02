goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__30530__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__30530 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30531__i = 0, G__30531__a = new Array(arguments.length -  0);
while (G__30531__i < G__30531__a.length) {G__30531__a[G__30531__i] = arguments[G__30531__i + 0]; ++G__30531__i;}
  args = new cljs.core.IndexedSeq(G__30531__a,0);
} 
return G__30530__delegate.call(this,args);};
G__30530.cljs$lang$maxFixedArity = 0;
G__30530.cljs$lang$applyTo = (function (arglist__30532){
var args = cljs.core.seq(arglist__30532);
return G__30530__delegate(args);
});
G__30530.cljs$core$IFn$_invoke$arity$variadic = G__30530__delegate;
return G__30530;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__30533__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__30533 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30534__i = 0, G__30534__a = new Array(arguments.length -  0);
while (G__30534__i < G__30534__a.length) {G__30534__a[G__30534__i] = arguments[G__30534__i + 0]; ++G__30534__i;}
  args = new cljs.core.IndexedSeq(G__30534__a,0);
} 
return G__30533__delegate.call(this,args);};
G__30533.cljs$lang$maxFixedArity = 0;
G__30533.cljs$lang$applyTo = (function (arglist__30535){
var args = cljs.core.seq(arglist__30535);
return G__30533__delegate(args);
});
G__30533.cljs$core$IFn$_invoke$arity$variadic = G__30533__delegate;
return G__30533;
})()
;

return null;
});
