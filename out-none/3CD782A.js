goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__77564__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__77564 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__77565__i = 0, G__77565__a = new Array(arguments.length -  0);
while (G__77565__i < G__77565__a.length) {G__77565__a[G__77565__i] = arguments[G__77565__i + 0]; ++G__77565__i;}
  args = new cljs.core.IndexedSeq(G__77565__a,0);
} 
return G__77564__delegate.call(this,args);};
G__77564.cljs$lang$maxFixedArity = 0;
G__77564.cljs$lang$applyTo = (function (arglist__77566){
var args = cljs.core.seq(arglist__77566);
return G__77564__delegate(args);
});
G__77564.cljs$core$IFn$_invoke$arity$variadic = G__77564__delegate;
return G__77564;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__77567__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__77567 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__77568__i = 0, G__77568__a = new Array(arguments.length -  0);
while (G__77568__i < G__77568__a.length) {G__77568__a[G__77568__i] = arguments[G__77568__i + 0]; ++G__77568__i;}
  args = new cljs.core.IndexedSeq(G__77568__a,0);
} 
return G__77567__delegate.call(this,args);};
G__77567.cljs$lang$maxFixedArity = 0;
G__77567.cljs$lang$applyTo = (function (arglist__77569){
var args = cljs.core.seq(arglist__77569);
return G__77567__delegate(args);
});
G__77567.cljs$core$IFn$_invoke$arity$variadic = G__77567__delegate;
return G__77567;
})()
;

return null;
});
