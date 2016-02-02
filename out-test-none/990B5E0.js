goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__153777__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__153777 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__153778__i = 0, G__153778__a = new Array(arguments.length -  0);
while (G__153778__i < G__153778__a.length) {G__153778__a[G__153778__i] = arguments[G__153778__i + 0]; ++G__153778__i;}
  args = new cljs.core.IndexedSeq(G__153778__a,0);
} 
return G__153777__delegate.call(this,args);};
G__153777.cljs$lang$maxFixedArity = 0;
G__153777.cljs$lang$applyTo = (function (arglist__153779){
var args = cljs.core.seq(arglist__153779);
return G__153777__delegate(args);
});
G__153777.cljs$core$IFn$_invoke$arity$variadic = G__153777__delegate;
return G__153777;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__153780__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__153780 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__153781__i = 0, G__153781__a = new Array(arguments.length -  0);
while (G__153781__i < G__153781__a.length) {G__153781__a[G__153781__i] = arguments[G__153781__i + 0]; ++G__153781__i;}
  args = new cljs.core.IndexedSeq(G__153781__a,0);
} 
return G__153780__delegate.call(this,args);};
G__153780.cljs$lang$maxFixedArity = 0;
G__153780.cljs$lang$applyTo = (function (arglist__153782){
var args = cljs.core.seq(arglist__153782);
return G__153780__delegate(args);
});
G__153780.cljs$core$IFn$_invoke$arity$variadic = G__153780__delegate;
return G__153780;
})()
;

return null;
});
