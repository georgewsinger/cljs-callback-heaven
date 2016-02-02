goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__82017__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__82017 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__82018__i = 0, G__82018__a = new Array(arguments.length -  0);
while (G__82018__i < G__82018__a.length) {G__82018__a[G__82018__i] = arguments[G__82018__i + 0]; ++G__82018__i;}
  args = new cljs.core.IndexedSeq(G__82018__a,0);
} 
return G__82017__delegate.call(this,args);};
G__82017.cljs$lang$maxFixedArity = 0;
G__82017.cljs$lang$applyTo = (function (arglist__82019){
var args = cljs.core.seq(arglist__82019);
return G__82017__delegate(args);
});
G__82017.cljs$core$IFn$_invoke$arity$variadic = G__82017__delegate;
return G__82017;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__82020__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__82020 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__82021__i = 0, G__82021__a = new Array(arguments.length -  0);
while (G__82021__i < G__82021__a.length) {G__82021__a[G__82021__i] = arguments[G__82021__i + 0]; ++G__82021__i;}
  args = new cljs.core.IndexedSeq(G__82021__a,0);
} 
return G__82020__delegate.call(this,args);};
G__82020.cljs$lang$maxFixedArity = 0;
G__82020.cljs$lang$applyTo = (function (arglist__82022){
var args = cljs.core.seq(arglist__82022);
return G__82020__delegate(args);
});
G__82020.cljs$core$IFn$_invoke$arity$variadic = G__82020__delegate;
return G__82020;
})()
;

return null;
});
