goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__34914__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__34914 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34915__i = 0, G__34915__a = new Array(arguments.length -  0);
while (G__34915__i < G__34915__a.length) {G__34915__a[G__34915__i] = arguments[G__34915__i + 0]; ++G__34915__i;}
  args = new cljs.core.IndexedSeq(G__34915__a,0);
} 
return G__34914__delegate.call(this,args);};
G__34914.cljs$lang$maxFixedArity = 0;
G__34914.cljs$lang$applyTo = (function (arglist__34916){
var args = cljs.core.seq(arglist__34916);
return G__34914__delegate(args);
});
G__34914.cljs$core$IFn$_invoke$arity$variadic = G__34914__delegate;
return G__34914;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__34917__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__34917 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34918__i = 0, G__34918__a = new Array(arguments.length -  0);
while (G__34918__i < G__34918__a.length) {G__34918__a[G__34918__i] = arguments[G__34918__i + 0]; ++G__34918__i;}
  args = new cljs.core.IndexedSeq(G__34918__a,0);
} 
return G__34917__delegate.call(this,args);};
G__34917.cljs$lang$maxFixedArity = 0;
G__34917.cljs$lang$applyTo = (function (arglist__34919){
var args = cljs.core.seq(arglist__34919);
return G__34917__delegate(args);
});
G__34917.cljs$core$IFn$_invoke$arity$variadic = G__34917__delegate;
return G__34917;
})()
;

return null;
});
