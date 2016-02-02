goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__36611__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__36611 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36612__i = 0, G__36612__a = new Array(arguments.length -  0);
while (G__36612__i < G__36612__a.length) {G__36612__a[G__36612__i] = arguments[G__36612__i + 0]; ++G__36612__i;}
  args = new cljs.core.IndexedSeq(G__36612__a,0);
} 
return G__36611__delegate.call(this,args);};
G__36611.cljs$lang$maxFixedArity = 0;
G__36611.cljs$lang$applyTo = (function (arglist__36613){
var args = cljs.core.seq(arglist__36613);
return G__36611__delegate(args);
});
G__36611.cljs$core$IFn$_invoke$arity$variadic = G__36611__delegate;
return G__36611;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__36614__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__36614 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36615__i = 0, G__36615__a = new Array(arguments.length -  0);
while (G__36615__i < G__36615__a.length) {G__36615__a[G__36615__i] = arguments[G__36615__i + 0]; ++G__36615__i;}
  args = new cljs.core.IndexedSeq(G__36615__a,0);
} 
return G__36614__delegate.call(this,args);};
G__36614.cljs$lang$maxFixedArity = 0;
G__36614.cljs$lang$applyTo = (function (arglist__36616){
var args = cljs.core.seq(arglist__36616);
return G__36614__delegate(args);
});
G__36614.cljs$core$IFn$_invoke$arity$variadic = G__36614__delegate;
return G__36614;
})()
;

return null;
});
