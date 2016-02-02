goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15987__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15987 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15988__i = 0, G__15988__a = new Array(arguments.length -  0);
while (G__15988__i < G__15988__a.length) {G__15988__a[G__15988__i] = arguments[G__15988__i + 0]; ++G__15988__i;}
  args = new cljs.core.IndexedSeq(G__15988__a,0);
} 
return G__15987__delegate.call(this,args);};
G__15987.cljs$lang$maxFixedArity = 0;
G__15987.cljs$lang$applyTo = (function (arglist__15989){
var args = cljs.core.seq(arglist__15989);
return G__15987__delegate(args);
});
G__15987.cljs$core$IFn$_invoke$arity$variadic = G__15987__delegate;
return G__15987;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15990__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15990 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15991__i = 0, G__15991__a = new Array(arguments.length -  0);
while (G__15991__i < G__15991__a.length) {G__15991__a[G__15991__i] = arguments[G__15991__i + 0]; ++G__15991__i;}
  args = new cljs.core.IndexedSeq(G__15991__a,0);
} 
return G__15990__delegate.call(this,args);};
G__15990.cljs$lang$maxFixedArity = 0;
G__15990.cljs$lang$applyTo = (function (arglist__15992){
var args = cljs.core.seq(arglist__15992);
return G__15990__delegate(args);
});
G__15990.cljs$core$IFn$_invoke$arity$variadic = G__15990__delegate;
return G__15990;
})()
;

return null;
});
