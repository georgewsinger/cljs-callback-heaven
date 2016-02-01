goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14900__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14900 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14901__i = 0, G__14901__a = new Array(arguments.length -  0);
while (G__14901__i < G__14901__a.length) {G__14901__a[G__14901__i] = arguments[G__14901__i + 0]; ++G__14901__i;}
  args = new cljs.core.IndexedSeq(G__14901__a,0);
} 
return G__14900__delegate.call(this,args);};
G__14900.cljs$lang$maxFixedArity = 0;
G__14900.cljs$lang$applyTo = (function (arglist__14902){
var args = cljs.core.seq(arglist__14902);
return G__14900__delegate(args);
});
G__14900.cljs$core$IFn$_invoke$arity$variadic = G__14900__delegate;
return G__14900;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14903__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14903 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14904__i = 0, G__14904__a = new Array(arguments.length -  0);
while (G__14904__i < G__14904__a.length) {G__14904__a[G__14904__i] = arguments[G__14904__i + 0]; ++G__14904__i;}
  args = new cljs.core.IndexedSeq(G__14904__a,0);
} 
return G__14903__delegate.call(this,args);};
G__14903.cljs$lang$maxFixedArity = 0;
G__14903.cljs$lang$applyTo = (function (arglist__14905){
var args = cljs.core.seq(arglist__14905);
return G__14903__delegate(args);
});
G__14903.cljs$core$IFn$_invoke$arity$variadic = G__14903__delegate;
return G__14903;
})()
;

return null;
});
