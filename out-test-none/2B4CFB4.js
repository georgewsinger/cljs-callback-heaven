goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__221504__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__221504 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__221505__i = 0, G__221505__a = new Array(arguments.length -  0);
while (G__221505__i < G__221505__a.length) {G__221505__a[G__221505__i] = arguments[G__221505__i + 0]; ++G__221505__i;}
  args = new cljs.core.IndexedSeq(G__221505__a,0);
} 
return G__221504__delegate.call(this,args);};
G__221504.cljs$lang$maxFixedArity = 0;
G__221504.cljs$lang$applyTo = (function (arglist__221506){
var args = cljs.core.seq(arglist__221506);
return G__221504__delegate(args);
});
G__221504.cljs$core$IFn$_invoke$arity$variadic = G__221504__delegate;
return G__221504;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__221507__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__221507 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__221508__i = 0, G__221508__a = new Array(arguments.length -  0);
while (G__221508__i < G__221508__a.length) {G__221508__a[G__221508__i] = arguments[G__221508__i + 0]; ++G__221508__i;}
  args = new cljs.core.IndexedSeq(G__221508__a,0);
} 
return G__221507__delegate.call(this,args);};
G__221507.cljs$lang$maxFixedArity = 0;
G__221507.cljs$lang$applyTo = (function (arglist__221509){
var args = cljs.core.seq(arglist__221509);
return G__221507__delegate(args);
});
G__221507.cljs$core$IFn$_invoke$arity$variadic = G__221507__delegate;
return G__221507;
})()
;

return null;
});
