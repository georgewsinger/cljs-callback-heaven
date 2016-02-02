goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__34907__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__34907 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34908__i = 0, G__34908__a = new Array(arguments.length -  0);
while (G__34908__i < G__34908__a.length) {G__34908__a[G__34908__i] = arguments[G__34908__i + 0]; ++G__34908__i;}
  args = new cljs.core.IndexedSeq(G__34908__a,0);
} 
return G__34907__delegate.call(this,args);};
G__34907.cljs$lang$maxFixedArity = 0;
G__34907.cljs$lang$applyTo = (function (arglist__34909){
var args = cljs.core.seq(arglist__34909);
return G__34907__delegate(args);
});
G__34907.cljs$core$IFn$_invoke$arity$variadic = G__34907__delegate;
return G__34907;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__34910__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__34910 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34911__i = 0, G__34911__a = new Array(arguments.length -  0);
while (G__34911__i < G__34911__a.length) {G__34911__a[G__34911__i] = arguments[G__34911__i + 0]; ++G__34911__i;}
  args = new cljs.core.IndexedSeq(G__34911__a,0);
} 
return G__34910__delegate.call(this,args);};
G__34910.cljs$lang$maxFixedArity = 0;
G__34910.cljs$lang$applyTo = (function (arglist__34912){
var args = cljs.core.seq(arglist__34912);
return G__34910__delegate(args);
});
G__34910.cljs$core$IFn$_invoke$arity$variadic = G__34910__delegate;
return G__34910;
})()
;

return null;
});
