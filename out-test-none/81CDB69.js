goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__23173__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__23173 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23174__i = 0, G__23174__a = new Array(arguments.length -  0);
while (G__23174__i < G__23174__a.length) {G__23174__a[G__23174__i] = arguments[G__23174__i + 0]; ++G__23174__i;}
  args = new cljs.core.IndexedSeq(G__23174__a,0);
} 
return G__23173__delegate.call(this,args);};
G__23173.cljs$lang$maxFixedArity = 0;
G__23173.cljs$lang$applyTo = (function (arglist__23175){
var args = cljs.core.seq(arglist__23175);
return G__23173__delegate(args);
});
G__23173.cljs$core$IFn$_invoke$arity$variadic = G__23173__delegate;
return G__23173;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__23176__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__23176 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23177__i = 0, G__23177__a = new Array(arguments.length -  0);
while (G__23177__i < G__23177__a.length) {G__23177__a[G__23177__i] = arguments[G__23177__i + 0]; ++G__23177__i;}
  args = new cljs.core.IndexedSeq(G__23177__a,0);
} 
return G__23176__delegate.call(this,args);};
G__23176.cljs$lang$maxFixedArity = 0;
G__23176.cljs$lang$applyTo = (function (arglist__23178){
var args = cljs.core.seq(arglist__23178);
return G__23176__delegate(args);
});
G__23176.cljs$core$IFn$_invoke$arity$variadic = G__23176__delegate;
return G__23176;
})()
;

return null;
});
