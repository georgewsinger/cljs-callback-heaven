goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__23352__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__23352 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23353__i = 0, G__23353__a = new Array(arguments.length -  0);
while (G__23353__i < G__23353__a.length) {G__23353__a[G__23353__i] = arguments[G__23353__i + 0]; ++G__23353__i;}
  args = new cljs.core.IndexedSeq(G__23353__a,0);
} 
return G__23352__delegate.call(this,args);};
G__23352.cljs$lang$maxFixedArity = 0;
G__23352.cljs$lang$applyTo = (function (arglist__23354){
var args = cljs.core.seq(arglist__23354);
return G__23352__delegate(args);
});
G__23352.cljs$core$IFn$_invoke$arity$variadic = G__23352__delegate;
return G__23352;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__23355__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__23355 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23356__i = 0, G__23356__a = new Array(arguments.length -  0);
while (G__23356__i < G__23356__a.length) {G__23356__a[G__23356__i] = arguments[G__23356__i + 0]; ++G__23356__i;}
  args = new cljs.core.IndexedSeq(G__23356__a,0);
} 
return G__23355__delegate.call(this,args);};
G__23355.cljs$lang$maxFixedArity = 0;
G__23355.cljs$lang$applyTo = (function (arglist__23357){
var args = cljs.core.seq(arglist__23357);
return G__23355__delegate(args);
});
G__23355.cljs$core$IFn$_invoke$arity$variadic = G__23355__delegate;
return G__23355;
})()
;

return null;
});
