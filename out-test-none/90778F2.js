goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__30238__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__30238 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30239__i = 0, G__30239__a = new Array(arguments.length -  0);
while (G__30239__i < G__30239__a.length) {G__30239__a[G__30239__i] = arguments[G__30239__i + 0]; ++G__30239__i;}
  args = new cljs.core.IndexedSeq(G__30239__a,0);
} 
return G__30238__delegate.call(this,args);};
G__30238.cljs$lang$maxFixedArity = 0;
G__30238.cljs$lang$applyTo = (function (arglist__30240){
var args = cljs.core.seq(arglist__30240);
return G__30238__delegate(args);
});
G__30238.cljs$core$IFn$_invoke$arity$variadic = G__30238__delegate;
return G__30238;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__30241__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__30241 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30242__i = 0, G__30242__a = new Array(arguments.length -  0);
while (G__30242__i < G__30242__a.length) {G__30242__a[G__30242__i] = arguments[G__30242__i + 0]; ++G__30242__i;}
  args = new cljs.core.IndexedSeq(G__30242__a,0);
} 
return G__30241__delegate.call(this,args);};
G__30241.cljs$lang$maxFixedArity = 0;
G__30241.cljs$lang$applyTo = (function (arglist__30243){
var args = cljs.core.seq(arglist__30243);
return G__30241__delegate(args);
});
G__30241.cljs$core$IFn$_invoke$arity$variadic = G__30241__delegate;
return G__30241;
})()
;

return null;
});
