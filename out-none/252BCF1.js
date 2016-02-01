goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9238__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9238 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9239__i = 0, G__9239__a = new Array(arguments.length -  0);
while (G__9239__i < G__9239__a.length) {G__9239__a[G__9239__i] = arguments[G__9239__i + 0]; ++G__9239__i;}
  args = new cljs.core.IndexedSeq(G__9239__a,0);
} 
return G__9238__delegate.call(this,args);};
G__9238.cljs$lang$maxFixedArity = 0;
G__9238.cljs$lang$applyTo = (function (arglist__9240){
var args = cljs.core.seq(arglist__9240);
return G__9238__delegate(args);
});
G__9238.cljs$core$IFn$_invoke$arity$variadic = G__9238__delegate;
return G__9238;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9241__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9241 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9242__i = 0, G__9242__a = new Array(arguments.length -  0);
while (G__9242__i < G__9242__a.length) {G__9242__a[G__9242__i] = arguments[G__9242__i + 0]; ++G__9242__i;}
  args = new cljs.core.IndexedSeq(G__9242__a,0);
} 
return G__9241__delegate.call(this,args);};
G__9241.cljs$lang$maxFixedArity = 0;
G__9241.cljs$lang$applyTo = (function (arglist__9243){
var args = cljs.core.seq(arglist__9243);
return G__9241__delegate(args);
});
G__9241.cljs$core$IFn$_invoke$arity$variadic = G__9241__delegate;
return G__9241;
})()
;

return null;
});
