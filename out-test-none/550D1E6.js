goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__53302__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__53302 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53303__i = 0, G__53303__a = new Array(arguments.length -  0);
while (G__53303__i < G__53303__a.length) {G__53303__a[G__53303__i] = arguments[G__53303__i + 0]; ++G__53303__i;}
  args = new cljs.core.IndexedSeq(G__53303__a,0);
} 
return G__53302__delegate.call(this,args);};
G__53302.cljs$lang$maxFixedArity = 0;
G__53302.cljs$lang$applyTo = (function (arglist__53304){
var args = cljs.core.seq(arglist__53304);
return G__53302__delegate(args);
});
G__53302.cljs$core$IFn$_invoke$arity$variadic = G__53302__delegate;
return G__53302;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__53305__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__53305 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53306__i = 0, G__53306__a = new Array(arguments.length -  0);
while (G__53306__i < G__53306__a.length) {G__53306__a[G__53306__i] = arguments[G__53306__i + 0]; ++G__53306__i;}
  args = new cljs.core.IndexedSeq(G__53306__a,0);
} 
return G__53305__delegate.call(this,args);};
G__53305.cljs$lang$maxFixedArity = 0;
G__53305.cljs$lang$applyTo = (function (arglist__53307){
var args = cljs.core.seq(arglist__53307);
return G__53305__delegate(args);
});
G__53305.cljs$core$IFn$_invoke$arity$variadic = G__53305__delegate;
return G__53305;
})()
;

return null;
});
