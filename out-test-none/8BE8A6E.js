goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__26904__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__26904 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26905__i = 0, G__26905__a = new Array(arguments.length -  0);
while (G__26905__i < G__26905__a.length) {G__26905__a[G__26905__i] = arguments[G__26905__i + 0]; ++G__26905__i;}
  args = new cljs.core.IndexedSeq(G__26905__a,0);
} 
return G__26904__delegate.call(this,args);};
G__26904.cljs$lang$maxFixedArity = 0;
G__26904.cljs$lang$applyTo = (function (arglist__26906){
var args = cljs.core.seq(arglist__26906);
return G__26904__delegate(args);
});
G__26904.cljs$core$IFn$_invoke$arity$variadic = G__26904__delegate;
return G__26904;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__26907__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__26907 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26908__i = 0, G__26908__a = new Array(arguments.length -  0);
while (G__26908__i < G__26908__a.length) {G__26908__a[G__26908__i] = arguments[G__26908__i + 0]; ++G__26908__i;}
  args = new cljs.core.IndexedSeq(G__26908__a,0);
} 
return G__26907__delegate.call(this,args);};
G__26907.cljs$lang$maxFixedArity = 0;
G__26907.cljs$lang$applyTo = (function (arglist__26909){
var args = cljs.core.seq(arglist__26909);
return G__26907__delegate(args);
});
G__26907.cljs$core$IFn$_invoke$arity$variadic = G__26907__delegate;
return G__26907;
})()
;

return null;
});
