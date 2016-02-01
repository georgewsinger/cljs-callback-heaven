goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16146__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16146 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16147__i = 0, G__16147__a = new Array(arguments.length -  0);
while (G__16147__i < G__16147__a.length) {G__16147__a[G__16147__i] = arguments[G__16147__i + 0]; ++G__16147__i;}
  args = new cljs.core.IndexedSeq(G__16147__a,0);
} 
return G__16146__delegate.call(this,args);};
G__16146.cljs$lang$maxFixedArity = 0;
G__16146.cljs$lang$applyTo = (function (arglist__16148){
var args = cljs.core.seq(arglist__16148);
return G__16146__delegate(args);
});
G__16146.cljs$core$IFn$_invoke$arity$variadic = G__16146__delegate;
return G__16146;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16149__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16149 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16150__i = 0, G__16150__a = new Array(arguments.length -  0);
while (G__16150__i < G__16150__a.length) {G__16150__a[G__16150__i] = arguments[G__16150__i + 0]; ++G__16150__i;}
  args = new cljs.core.IndexedSeq(G__16150__a,0);
} 
return G__16149__delegate.call(this,args);};
G__16149.cljs$lang$maxFixedArity = 0;
G__16149.cljs$lang$applyTo = (function (arglist__16151){
var args = cljs.core.seq(arglist__16151);
return G__16149__delegate(args);
});
G__16149.cljs$core$IFn$_invoke$arity$variadic = G__16149__delegate;
return G__16149;
})()
;

return null;
});
