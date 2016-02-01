goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13459__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13459 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13460__i = 0, G__13460__a = new Array(arguments.length -  0);
while (G__13460__i < G__13460__a.length) {G__13460__a[G__13460__i] = arguments[G__13460__i + 0]; ++G__13460__i;}
  args = new cljs.core.IndexedSeq(G__13460__a,0);
} 
return G__13459__delegate.call(this,args);};
G__13459.cljs$lang$maxFixedArity = 0;
G__13459.cljs$lang$applyTo = (function (arglist__13461){
var args = cljs.core.seq(arglist__13461);
return G__13459__delegate(args);
});
G__13459.cljs$core$IFn$_invoke$arity$variadic = G__13459__delegate;
return G__13459;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13462__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13462 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13463__i = 0, G__13463__a = new Array(arguments.length -  0);
while (G__13463__i < G__13463__a.length) {G__13463__a[G__13463__i] = arguments[G__13463__i + 0]; ++G__13463__i;}
  args = new cljs.core.IndexedSeq(G__13463__a,0);
} 
return G__13462__delegate.call(this,args);};
G__13462.cljs$lang$maxFixedArity = 0;
G__13462.cljs$lang$applyTo = (function (arglist__13464){
var args = cljs.core.seq(arglist__13464);
return G__13462__delegate(args);
});
G__13462.cljs$core$IFn$_invoke$arity$variadic = G__13462__delegate;
return G__13462;
})()
;

return null;
});
