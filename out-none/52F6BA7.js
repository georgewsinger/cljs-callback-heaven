goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14056__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14056 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14057__i = 0, G__14057__a = new Array(arguments.length -  0);
while (G__14057__i < G__14057__a.length) {G__14057__a[G__14057__i] = arguments[G__14057__i + 0]; ++G__14057__i;}
  args = new cljs.core.IndexedSeq(G__14057__a,0);
} 
return G__14056__delegate.call(this,args);};
G__14056.cljs$lang$maxFixedArity = 0;
G__14056.cljs$lang$applyTo = (function (arglist__14058){
var args = cljs.core.seq(arglist__14058);
return G__14056__delegate(args);
});
G__14056.cljs$core$IFn$_invoke$arity$variadic = G__14056__delegate;
return G__14056;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14059__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14059 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14060__i = 0, G__14060__a = new Array(arguments.length -  0);
while (G__14060__i < G__14060__a.length) {G__14060__a[G__14060__i] = arguments[G__14060__i + 0]; ++G__14060__i;}
  args = new cljs.core.IndexedSeq(G__14060__a,0);
} 
return G__14059__delegate.call(this,args);};
G__14059.cljs$lang$maxFixedArity = 0;
G__14059.cljs$lang$applyTo = (function (arglist__14061){
var args = cljs.core.seq(arglist__14061);
return G__14059__delegate(args);
});
G__14059.cljs$core$IFn$_invoke$arity$variadic = G__14059__delegate;
return G__14059;
})()
;

return null;
});
