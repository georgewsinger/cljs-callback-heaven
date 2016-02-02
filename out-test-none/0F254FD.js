goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10567__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10567 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10568__i = 0, G__10568__a = new Array(arguments.length -  0);
while (G__10568__i < G__10568__a.length) {G__10568__a[G__10568__i] = arguments[G__10568__i + 0]; ++G__10568__i;}
  args = new cljs.core.IndexedSeq(G__10568__a,0);
} 
return G__10567__delegate.call(this,args);};
G__10567.cljs$lang$maxFixedArity = 0;
G__10567.cljs$lang$applyTo = (function (arglist__10569){
var args = cljs.core.seq(arglist__10569);
return G__10567__delegate(args);
});
G__10567.cljs$core$IFn$_invoke$arity$variadic = G__10567__delegate;
return G__10567;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10570__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10570 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10571__i = 0, G__10571__a = new Array(arguments.length -  0);
while (G__10571__i < G__10571__a.length) {G__10571__a[G__10571__i] = arguments[G__10571__i + 0]; ++G__10571__i;}
  args = new cljs.core.IndexedSeq(G__10571__a,0);
} 
return G__10570__delegate.call(this,args);};
G__10570.cljs$lang$maxFixedArity = 0;
G__10570.cljs$lang$applyTo = (function (arglist__10572){
var args = cljs.core.seq(arglist__10572);
return G__10570__delegate(args);
});
G__10570.cljs$core$IFn$_invoke$arity$variadic = G__10570__delegate;
return G__10570;
})()
;

return null;
});
