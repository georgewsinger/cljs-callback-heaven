goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__39217__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__39217 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39218__i = 0, G__39218__a = new Array(arguments.length -  0);
while (G__39218__i < G__39218__a.length) {G__39218__a[G__39218__i] = arguments[G__39218__i + 0]; ++G__39218__i;}
  args = new cljs.core.IndexedSeq(G__39218__a,0);
} 
return G__39217__delegate.call(this,args);};
G__39217.cljs$lang$maxFixedArity = 0;
G__39217.cljs$lang$applyTo = (function (arglist__39219){
var args = cljs.core.seq(arglist__39219);
return G__39217__delegate(args);
});
G__39217.cljs$core$IFn$_invoke$arity$variadic = G__39217__delegate;
return G__39217;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__39220__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__39220 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39221__i = 0, G__39221__a = new Array(arguments.length -  0);
while (G__39221__i < G__39221__a.length) {G__39221__a[G__39221__i] = arguments[G__39221__i + 0]; ++G__39221__i;}
  args = new cljs.core.IndexedSeq(G__39221__a,0);
} 
return G__39220__delegate.call(this,args);};
G__39220.cljs$lang$maxFixedArity = 0;
G__39220.cljs$lang$applyTo = (function (arglist__39222){
var args = cljs.core.seq(arglist__39222);
return G__39220__delegate(args);
});
G__39220.cljs$core$IFn$_invoke$arity$variadic = G__39220__delegate;
return G__39220;
})()
;

return null;
});
