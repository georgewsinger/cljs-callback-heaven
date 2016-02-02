goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__46737__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__46737 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46738__i = 0, G__46738__a = new Array(arguments.length -  0);
while (G__46738__i < G__46738__a.length) {G__46738__a[G__46738__i] = arguments[G__46738__i + 0]; ++G__46738__i;}
  args = new cljs.core.IndexedSeq(G__46738__a,0);
} 
return G__46737__delegate.call(this,args);};
G__46737.cljs$lang$maxFixedArity = 0;
G__46737.cljs$lang$applyTo = (function (arglist__46739){
var args = cljs.core.seq(arglist__46739);
return G__46737__delegate(args);
});
G__46737.cljs$core$IFn$_invoke$arity$variadic = G__46737__delegate;
return G__46737;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__46740__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__46740 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46741__i = 0, G__46741__a = new Array(arguments.length -  0);
while (G__46741__i < G__46741__a.length) {G__46741__a[G__46741__i] = arguments[G__46741__i + 0]; ++G__46741__i;}
  args = new cljs.core.IndexedSeq(G__46741__a,0);
} 
return G__46740__delegate.call(this,args);};
G__46740.cljs$lang$maxFixedArity = 0;
G__46740.cljs$lang$applyTo = (function (arglist__46742){
var args = cljs.core.seq(arglist__46742);
return G__46740__delegate(args);
});
G__46740.cljs$core$IFn$_invoke$arity$variadic = G__46740__delegate;
return G__46740;
})()
;

return null;
});
