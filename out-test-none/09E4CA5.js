goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__34093__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__34093 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34094__i = 0, G__34094__a = new Array(arguments.length -  0);
while (G__34094__i < G__34094__a.length) {G__34094__a[G__34094__i] = arguments[G__34094__i + 0]; ++G__34094__i;}
  args = new cljs.core.IndexedSeq(G__34094__a,0);
} 
return G__34093__delegate.call(this,args);};
G__34093.cljs$lang$maxFixedArity = 0;
G__34093.cljs$lang$applyTo = (function (arglist__34095){
var args = cljs.core.seq(arglist__34095);
return G__34093__delegate(args);
});
G__34093.cljs$core$IFn$_invoke$arity$variadic = G__34093__delegate;
return G__34093;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__34096__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__34096 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34097__i = 0, G__34097__a = new Array(arguments.length -  0);
while (G__34097__i < G__34097__a.length) {G__34097__a[G__34097__i] = arguments[G__34097__i + 0]; ++G__34097__i;}
  args = new cljs.core.IndexedSeq(G__34097__a,0);
} 
return G__34096__delegate.call(this,args);};
G__34096.cljs$lang$maxFixedArity = 0;
G__34096.cljs$lang$applyTo = (function (arglist__34098){
var args = cljs.core.seq(arglist__34098);
return G__34096__delegate(args);
});
G__34096.cljs$core$IFn$_invoke$arity$variadic = G__34096__delegate;
return G__34096;
})()
;

return null;
});
