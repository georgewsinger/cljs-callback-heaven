goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__321286__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__321286 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__321287__i = 0, G__321287__a = new Array(arguments.length -  0);
while (G__321287__i < G__321287__a.length) {G__321287__a[G__321287__i] = arguments[G__321287__i + 0]; ++G__321287__i;}
  args = new cljs.core.IndexedSeq(G__321287__a,0);
} 
return G__321286__delegate.call(this,args);};
G__321286.cljs$lang$maxFixedArity = 0;
G__321286.cljs$lang$applyTo = (function (arglist__321288){
var args = cljs.core.seq(arglist__321288);
return G__321286__delegate(args);
});
G__321286.cljs$core$IFn$_invoke$arity$variadic = G__321286__delegate;
return G__321286;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__321289__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__321289 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__321290__i = 0, G__321290__a = new Array(arguments.length -  0);
while (G__321290__i < G__321290__a.length) {G__321290__a[G__321290__i] = arguments[G__321290__i + 0]; ++G__321290__i;}
  args = new cljs.core.IndexedSeq(G__321290__a,0);
} 
return G__321289__delegate.call(this,args);};
G__321289.cljs$lang$maxFixedArity = 0;
G__321289.cljs$lang$applyTo = (function (arglist__321291){
var args = cljs.core.seq(arglist__321291);
return G__321289__delegate(args);
});
G__321289.cljs$core$IFn$_invoke$arity$variadic = G__321289__delegate;
return G__321289;
})()
;

return null;
});
