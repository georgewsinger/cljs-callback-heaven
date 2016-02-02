goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__56451__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__56451 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__56452__i = 0, G__56452__a = new Array(arguments.length -  0);
while (G__56452__i < G__56452__a.length) {G__56452__a[G__56452__i] = arguments[G__56452__i + 0]; ++G__56452__i;}
  args = new cljs.core.IndexedSeq(G__56452__a,0);
} 
return G__56451__delegate.call(this,args);};
G__56451.cljs$lang$maxFixedArity = 0;
G__56451.cljs$lang$applyTo = (function (arglist__56453){
var args = cljs.core.seq(arglist__56453);
return G__56451__delegate(args);
});
G__56451.cljs$core$IFn$_invoke$arity$variadic = G__56451__delegate;
return G__56451;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__56454__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__56454 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__56455__i = 0, G__56455__a = new Array(arguments.length -  0);
while (G__56455__i < G__56455__a.length) {G__56455__a[G__56455__i] = arguments[G__56455__i + 0]; ++G__56455__i;}
  args = new cljs.core.IndexedSeq(G__56455__a,0);
} 
return G__56454__delegate.call(this,args);};
G__56454.cljs$lang$maxFixedArity = 0;
G__56454.cljs$lang$applyTo = (function (arglist__56456){
var args = cljs.core.seq(arglist__56456);
return G__56454__delegate(args);
});
G__56454.cljs$core$IFn$_invoke$arity$variadic = G__56454__delegate;
return G__56454;
})()
;

return null;
});
