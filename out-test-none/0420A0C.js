goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14483__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14483 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14484__i = 0, G__14484__a = new Array(arguments.length -  0);
while (G__14484__i < G__14484__a.length) {G__14484__a[G__14484__i] = arguments[G__14484__i + 0]; ++G__14484__i;}
  args = new cljs.core.IndexedSeq(G__14484__a,0);
} 
return G__14483__delegate.call(this,args);};
G__14483.cljs$lang$maxFixedArity = 0;
G__14483.cljs$lang$applyTo = (function (arglist__14485){
var args = cljs.core.seq(arglist__14485);
return G__14483__delegate(args);
});
G__14483.cljs$core$IFn$_invoke$arity$variadic = G__14483__delegate;
return G__14483;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14486__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14486 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14487__i = 0, G__14487__a = new Array(arguments.length -  0);
while (G__14487__i < G__14487__a.length) {G__14487__a[G__14487__i] = arguments[G__14487__i + 0]; ++G__14487__i;}
  args = new cljs.core.IndexedSeq(G__14487__a,0);
} 
return G__14486__delegate.call(this,args);};
G__14486.cljs$lang$maxFixedArity = 0;
G__14486.cljs$lang$applyTo = (function (arglist__14488){
var args = cljs.core.seq(arglist__14488);
return G__14486__delegate(args);
});
G__14486.cljs$core$IFn$_invoke$arity$variadic = G__14486__delegate;
return G__14486;
})()
;

return null;
});
