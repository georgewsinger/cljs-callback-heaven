goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__221515__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__221515 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__221516__i = 0, G__221516__a = new Array(arguments.length -  0);
while (G__221516__i < G__221516__a.length) {G__221516__a[G__221516__i] = arguments[G__221516__i + 0]; ++G__221516__i;}
  args = new cljs.core.IndexedSeq(G__221516__a,0);
} 
return G__221515__delegate.call(this,args);};
G__221515.cljs$lang$maxFixedArity = 0;
G__221515.cljs$lang$applyTo = (function (arglist__221517){
var args = cljs.core.seq(arglist__221517);
return G__221515__delegate(args);
});
G__221515.cljs$core$IFn$_invoke$arity$variadic = G__221515__delegate;
return G__221515;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__221518__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__221518 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__221519__i = 0, G__221519__a = new Array(arguments.length -  0);
while (G__221519__i < G__221519__a.length) {G__221519__a[G__221519__i] = arguments[G__221519__i + 0]; ++G__221519__i;}
  args = new cljs.core.IndexedSeq(G__221519__a,0);
} 
return G__221518__delegate.call(this,args);};
G__221518.cljs$lang$maxFixedArity = 0;
G__221518.cljs$lang$applyTo = (function (arglist__221520){
var args = cljs.core.seq(arglist__221520);
return G__221518__delegate(args);
});
G__221518.cljs$core$IFn$_invoke$arity$variadic = G__221518__delegate;
return G__221518;
})()
;

return null;
});
