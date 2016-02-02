goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9588__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
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

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9591__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9591 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9592__i = 0, G__9592__a = new Array(arguments.length -  0);
while (G__9592__i < G__9592__a.length) {G__9592__a[G__9592__i] = arguments[G__9592__i + 0]; ++G__9592__i;}
  args = new cljs.core.IndexedSeq(G__9592__a,0);
} 
return G__9591__delegate.call(this,args);};
G__9591.cljs$lang$maxFixedArity = 0;
G__9591.cljs$lang$applyTo = (function (arglist__9593){
var args = cljs.core.seq(arglist__9593);
return G__9591__delegate(args);
});
G__9591.cljs$core$IFn$_invoke$arity$variadic = G__9591__delegate;
return G__9591;
})()
;

return null;
});
