goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__55900__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__55900 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__55901__i = 0, G__55901__a = new Array(arguments.length -  0);
while (G__55901__i < G__55901__a.length) {G__55901__a[G__55901__i] = arguments[G__55901__i + 0]; ++G__55901__i;}
  args = new cljs.core.IndexedSeq(G__55901__a,0);
} 
return G__55900__delegate.call(this,args);};
G__55900.cljs$lang$maxFixedArity = 0;
G__55900.cljs$lang$applyTo = (function (arglist__55902){
var args = cljs.core.seq(arglist__55902);
return G__55900__delegate(args);
});
G__55900.cljs$core$IFn$_invoke$arity$variadic = G__55900__delegate;
return G__55900;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__55903__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__55903 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__55904__i = 0, G__55904__a = new Array(arguments.length -  0);
while (G__55904__i < G__55904__a.length) {G__55904__a[G__55904__i] = arguments[G__55904__i + 0]; ++G__55904__i;}
  args = new cljs.core.IndexedSeq(G__55904__a,0);
} 
return G__55903__delegate.call(this,args);};
G__55903.cljs$lang$maxFixedArity = 0;
G__55903.cljs$lang$applyTo = (function (arglist__55905){
var args = cljs.core.seq(arglist__55905);
return G__55903__delegate(args);
});
G__55903.cljs$core$IFn$_invoke$arity$variadic = G__55903__delegate;
return G__55903;
})()
;

return null;
});
