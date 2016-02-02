goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10610__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10610 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10611__i = 0, G__10611__a = new Array(arguments.length -  0);
while (G__10611__i < G__10611__a.length) {G__10611__a[G__10611__i] = arguments[G__10611__i + 0]; ++G__10611__i;}
  args = new cljs.core.IndexedSeq(G__10611__a,0);
} 
return G__10610__delegate.call(this,args);};
G__10610.cljs$lang$maxFixedArity = 0;
G__10610.cljs$lang$applyTo = (function (arglist__10612){
var args = cljs.core.seq(arglist__10612);
return G__10610__delegate(args);
});
G__10610.cljs$core$IFn$_invoke$arity$variadic = G__10610__delegate;
return G__10610;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10613__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10613 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10614__i = 0, G__10614__a = new Array(arguments.length -  0);
while (G__10614__i < G__10614__a.length) {G__10614__a[G__10614__i] = arguments[G__10614__i + 0]; ++G__10614__i;}
  args = new cljs.core.IndexedSeq(G__10614__a,0);
} 
return G__10613__delegate.call(this,args);};
G__10613.cljs$lang$maxFixedArity = 0;
G__10613.cljs$lang$applyTo = (function (arglist__10615){
var args = cljs.core.seq(arglist__10615);
return G__10613__delegate(args);
});
G__10613.cljs$core$IFn$_invoke$arity$variadic = G__10613__delegate;
return G__10613;
})()
;

return null;
});
