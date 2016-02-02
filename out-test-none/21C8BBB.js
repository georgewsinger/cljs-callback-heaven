goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__197522__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__197522 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__197523__i = 0, G__197523__a = new Array(arguments.length -  0);
while (G__197523__i < G__197523__a.length) {G__197523__a[G__197523__i] = arguments[G__197523__i + 0]; ++G__197523__i;}
  args = new cljs.core.IndexedSeq(G__197523__a,0);
} 
return G__197522__delegate.call(this,args);};
G__197522.cljs$lang$maxFixedArity = 0;
G__197522.cljs$lang$applyTo = (function (arglist__197524){
var args = cljs.core.seq(arglist__197524);
return G__197522__delegate(args);
});
G__197522.cljs$core$IFn$_invoke$arity$variadic = G__197522__delegate;
return G__197522;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__197525__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__197525 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__197526__i = 0, G__197526__a = new Array(arguments.length -  0);
while (G__197526__i < G__197526__a.length) {G__197526__a[G__197526__i] = arguments[G__197526__i + 0]; ++G__197526__i;}
  args = new cljs.core.IndexedSeq(G__197526__a,0);
} 
return G__197525__delegate.call(this,args);};
G__197525.cljs$lang$maxFixedArity = 0;
G__197525.cljs$lang$applyTo = (function (arglist__197527){
var args = cljs.core.seq(arglist__197527);
return G__197525__delegate(args);
});
G__197525.cljs$core$IFn$_invoke$arity$variadic = G__197525__delegate;
return G__197525;
})()
;

return null;
});
