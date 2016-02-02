goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__275701__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__275701 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__275702__i = 0, G__275702__a = new Array(arguments.length -  0);
while (G__275702__i < G__275702__a.length) {G__275702__a[G__275702__i] = arguments[G__275702__i + 0]; ++G__275702__i;}
  args = new cljs.core.IndexedSeq(G__275702__a,0);
} 
return G__275701__delegate.call(this,args);};
G__275701.cljs$lang$maxFixedArity = 0;
G__275701.cljs$lang$applyTo = (function (arglist__275703){
var args = cljs.core.seq(arglist__275703);
return G__275701__delegate(args);
});
G__275701.cljs$core$IFn$_invoke$arity$variadic = G__275701__delegate;
return G__275701;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__275704__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__275704 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__275705__i = 0, G__275705__a = new Array(arguments.length -  0);
while (G__275705__i < G__275705__a.length) {G__275705__a[G__275705__i] = arguments[G__275705__i + 0]; ++G__275705__i;}
  args = new cljs.core.IndexedSeq(G__275705__a,0);
} 
return G__275704__delegate.call(this,args);};
G__275704.cljs$lang$maxFixedArity = 0;
G__275704.cljs$lang$applyTo = (function (arglist__275706){
var args = cljs.core.seq(arglist__275706);
return G__275704__delegate(args);
});
G__275704.cljs$core$IFn$_invoke$arity$variadic = G__275704__delegate;
return G__275704;
})()
;

return null;
});
