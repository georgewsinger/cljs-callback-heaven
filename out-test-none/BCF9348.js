goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__36206__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__36206 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36207__i = 0, G__36207__a = new Array(arguments.length -  0);
while (G__36207__i < G__36207__a.length) {G__36207__a[G__36207__i] = arguments[G__36207__i + 0]; ++G__36207__i;}
  args = new cljs.core.IndexedSeq(G__36207__a,0);
} 
return G__36206__delegate.call(this,args);};
G__36206.cljs$lang$maxFixedArity = 0;
G__36206.cljs$lang$applyTo = (function (arglist__36208){
var args = cljs.core.seq(arglist__36208);
return G__36206__delegate(args);
});
G__36206.cljs$core$IFn$_invoke$arity$variadic = G__36206__delegate;
return G__36206;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__36209__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__36209 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36210__i = 0, G__36210__a = new Array(arguments.length -  0);
while (G__36210__i < G__36210__a.length) {G__36210__a[G__36210__i] = arguments[G__36210__i + 0]; ++G__36210__i;}
  args = new cljs.core.IndexedSeq(G__36210__a,0);
} 
return G__36209__delegate.call(this,args);};
G__36209.cljs$lang$maxFixedArity = 0;
G__36209.cljs$lang$applyTo = (function (arglist__36211){
var args = cljs.core.seq(arglist__36211);
return G__36209__delegate(args);
});
G__36209.cljs$core$IFn$_invoke$arity$variadic = G__36209__delegate;
return G__36209;
})()
;

return null;
});
