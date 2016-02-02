goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__260941__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__260941 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__260942__i = 0, G__260942__a = new Array(arguments.length -  0);
while (G__260942__i < G__260942__a.length) {G__260942__a[G__260942__i] = arguments[G__260942__i + 0]; ++G__260942__i;}
  args = new cljs.core.IndexedSeq(G__260942__a,0);
} 
return G__260941__delegate.call(this,args);};
G__260941.cljs$lang$maxFixedArity = 0;
G__260941.cljs$lang$applyTo = (function (arglist__260943){
var args = cljs.core.seq(arglist__260943);
return G__260941__delegate(args);
});
G__260941.cljs$core$IFn$_invoke$arity$variadic = G__260941__delegate;
return G__260941;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__260944__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__260944 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__260945__i = 0, G__260945__a = new Array(arguments.length -  0);
while (G__260945__i < G__260945__a.length) {G__260945__a[G__260945__i] = arguments[G__260945__i + 0]; ++G__260945__i;}
  args = new cljs.core.IndexedSeq(G__260945__a,0);
} 
return G__260944__delegate.call(this,args);};
G__260944.cljs$lang$maxFixedArity = 0;
G__260944.cljs$lang$applyTo = (function (arglist__260946){
var args = cljs.core.seq(arglist__260946);
return G__260944__delegate(args);
});
G__260944.cljs$core$IFn$_invoke$arity$variadic = G__260944__delegate;
return G__260944;
})()
;

return null;
});
