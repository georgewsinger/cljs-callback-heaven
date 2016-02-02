goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__290713__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__290713 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__290714__i = 0, G__290714__a = new Array(arguments.length -  0);
while (G__290714__i < G__290714__a.length) {G__290714__a[G__290714__i] = arguments[G__290714__i + 0]; ++G__290714__i;}
  args = new cljs.core.IndexedSeq(G__290714__a,0);
} 
return G__290713__delegate.call(this,args);};
G__290713.cljs$lang$maxFixedArity = 0;
G__290713.cljs$lang$applyTo = (function (arglist__290715){
var args = cljs.core.seq(arglist__290715);
return G__290713__delegate(args);
});
G__290713.cljs$core$IFn$_invoke$arity$variadic = G__290713__delegate;
return G__290713;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__290716__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__290716 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__290717__i = 0, G__290717__a = new Array(arguments.length -  0);
while (G__290717__i < G__290717__a.length) {G__290717__a[G__290717__i] = arguments[G__290717__i + 0]; ++G__290717__i;}
  args = new cljs.core.IndexedSeq(G__290717__a,0);
} 
return G__290716__delegate.call(this,args);};
G__290716.cljs$lang$maxFixedArity = 0;
G__290716.cljs$lang$applyTo = (function (arglist__290718){
var args = cljs.core.seq(arglist__290718);
return G__290716__delegate(args);
});
G__290716.cljs$core$IFn$_invoke$arity$variadic = G__290716__delegate;
return G__290716;
})()
;

return null;
});
