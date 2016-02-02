goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__26780__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__26780 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26781__i = 0, G__26781__a = new Array(arguments.length -  0);
while (G__26781__i < G__26781__a.length) {G__26781__a[G__26781__i] = arguments[G__26781__i + 0]; ++G__26781__i;}
  args = new cljs.core.IndexedSeq(G__26781__a,0);
} 
return G__26780__delegate.call(this,args);};
G__26780.cljs$lang$maxFixedArity = 0;
G__26780.cljs$lang$applyTo = (function (arglist__26782){
var args = cljs.core.seq(arglist__26782);
return G__26780__delegate(args);
});
G__26780.cljs$core$IFn$_invoke$arity$variadic = G__26780__delegate;
return G__26780;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__26783__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__26783 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26784__i = 0, G__26784__a = new Array(arguments.length -  0);
while (G__26784__i < G__26784__a.length) {G__26784__a[G__26784__i] = arguments[G__26784__i + 0]; ++G__26784__i;}
  args = new cljs.core.IndexedSeq(G__26784__a,0);
} 
return G__26783__delegate.call(this,args);};
G__26783.cljs$lang$maxFixedArity = 0;
G__26783.cljs$lang$applyTo = (function (arglist__26785){
var args = cljs.core.seq(arglist__26785);
return G__26783__delegate(args);
});
G__26783.cljs$core$IFn$_invoke$arity$variadic = G__26783__delegate;
return G__26783;
})()
;

return null;
});
