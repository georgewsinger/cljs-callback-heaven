goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__92953__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__92953 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__92954__i = 0, G__92954__a = new Array(arguments.length -  0);
while (G__92954__i < G__92954__a.length) {G__92954__a[G__92954__i] = arguments[G__92954__i + 0]; ++G__92954__i;}
  args = new cljs.core.IndexedSeq(G__92954__a,0);
} 
return G__92953__delegate.call(this,args);};
G__92953.cljs$lang$maxFixedArity = 0;
G__92953.cljs$lang$applyTo = (function (arglist__92955){
var args = cljs.core.seq(arglist__92955);
return G__92953__delegate(args);
});
G__92953.cljs$core$IFn$_invoke$arity$variadic = G__92953__delegate;
return G__92953;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__92956__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__92956 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__92957__i = 0, G__92957__a = new Array(arguments.length -  0);
while (G__92957__i < G__92957__a.length) {G__92957__a[G__92957__i] = arguments[G__92957__i + 0]; ++G__92957__i;}
  args = new cljs.core.IndexedSeq(G__92957__a,0);
} 
return G__92956__delegate.call(this,args);};
G__92956.cljs$lang$maxFixedArity = 0;
G__92956.cljs$lang$applyTo = (function (arglist__92958){
var args = cljs.core.seq(arglist__92958);
return G__92956__delegate(args);
});
G__92956.cljs$core$IFn$_invoke$arity$variadic = G__92956__delegate;
return G__92956;
})()
;

return null;
});
