goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__48715__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__48715 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48716__i = 0, G__48716__a = new Array(arguments.length -  0);
while (G__48716__i < G__48716__a.length) {G__48716__a[G__48716__i] = arguments[G__48716__i + 0]; ++G__48716__i;}
  args = new cljs.core.IndexedSeq(G__48716__a,0);
} 
return G__48715__delegate.call(this,args);};
G__48715.cljs$lang$maxFixedArity = 0;
G__48715.cljs$lang$applyTo = (function (arglist__48717){
var args = cljs.core.seq(arglist__48717);
return G__48715__delegate(args);
});
G__48715.cljs$core$IFn$_invoke$arity$variadic = G__48715__delegate;
return G__48715;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__48718__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__48718 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48719__i = 0, G__48719__a = new Array(arguments.length -  0);
while (G__48719__i < G__48719__a.length) {G__48719__a[G__48719__i] = arguments[G__48719__i + 0]; ++G__48719__i;}
  args = new cljs.core.IndexedSeq(G__48719__a,0);
} 
return G__48718__delegate.call(this,args);};
G__48718.cljs$lang$maxFixedArity = 0;
G__48718.cljs$lang$applyTo = (function (arglist__48720){
var args = cljs.core.seq(arglist__48720);
return G__48718__delegate(args);
});
G__48718.cljs$core$IFn$_invoke$arity$variadic = G__48718__delegate;
return G__48718;
})()
;

return null;
});
