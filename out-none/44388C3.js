goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10280__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10280 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10281__i = 0, G__10281__a = new Array(arguments.length -  0);
while (G__10281__i < G__10281__a.length) {G__10281__a[G__10281__i] = arguments[G__10281__i + 0]; ++G__10281__i;}
  args = new cljs.core.IndexedSeq(G__10281__a,0);
} 
return G__10280__delegate.call(this,args);};
G__10280.cljs$lang$maxFixedArity = 0;
G__10280.cljs$lang$applyTo = (function (arglist__10282){
var args = cljs.core.seq(arglist__10282);
return G__10280__delegate(args);
});
G__10280.cljs$core$IFn$_invoke$arity$variadic = G__10280__delegate;
return G__10280;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10283__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10283 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10284__i = 0, G__10284__a = new Array(arguments.length -  0);
while (G__10284__i < G__10284__a.length) {G__10284__a[G__10284__i] = arguments[G__10284__i + 0]; ++G__10284__i;}
  args = new cljs.core.IndexedSeq(G__10284__a,0);
} 
return G__10283__delegate.call(this,args);};
G__10283.cljs$lang$maxFixedArity = 0;
G__10283.cljs$lang$applyTo = (function (arglist__10285){
var args = cljs.core.seq(arglist__10285);
return G__10283__delegate(args);
});
G__10283.cljs$core$IFn$_invoke$arity$variadic = G__10283__delegate;
return G__10283;
})()
;

return null;
});
