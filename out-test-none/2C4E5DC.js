goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9585__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9585 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9586__i = 0, G__9586__a = new Array(arguments.length -  0);
while (G__9586__i < G__9586__a.length) {G__9586__a[G__9586__i] = arguments[G__9586__i + 0]; ++G__9586__i;}
  args = new cljs.core.IndexedSeq(G__9586__a,0);
} 
return G__9585__delegate.call(this,args);};
G__9585.cljs$lang$maxFixedArity = 0;
G__9585.cljs$lang$applyTo = (function (arglist__9587){
var args = cljs.core.seq(arglist__9587);
return G__9585__delegate(args);
});
G__9585.cljs$core$IFn$_invoke$arity$variadic = G__9585__delegate;
return G__9585;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9588__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9588 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9589__i = 0, G__9589__a = new Array(arguments.length -  0);
while (G__9589__i < G__9589__a.length) {G__9589__a[G__9589__i] = arguments[G__9589__i + 0]; ++G__9589__i;}
  args = new cljs.core.IndexedSeq(G__9589__a,0);
} 
return G__9588__delegate.call(this,args);};
G__9588.cljs$lang$maxFixedArity = 0;
G__9588.cljs$lang$applyTo = (function (arglist__9590){
var args = cljs.core.seq(arglist__9590);
return G__9588__delegate(args);
});
G__9588.cljs$core$IFn$_invoke$arity$variadic = G__9588__delegate;
return G__9588;
})()
;

return null;
});
