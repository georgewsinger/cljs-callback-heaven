goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12650__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12650 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12651__i = 0, G__12651__a = new Array(arguments.length -  0);
while (G__12651__i < G__12651__a.length) {G__12651__a[G__12651__i] = arguments[G__12651__i + 0]; ++G__12651__i;}
  args = new cljs.core.IndexedSeq(G__12651__a,0);
} 
return G__12650__delegate.call(this,args);};
G__12650.cljs$lang$maxFixedArity = 0;
G__12650.cljs$lang$applyTo = (function (arglist__12652){
var args = cljs.core.seq(arglist__12652);
return G__12650__delegate(args);
});
G__12650.cljs$core$IFn$_invoke$arity$variadic = G__12650__delegate;
return G__12650;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12653__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12653 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12654__i = 0, G__12654__a = new Array(arguments.length -  0);
while (G__12654__i < G__12654__a.length) {G__12654__a[G__12654__i] = arguments[G__12654__i + 0]; ++G__12654__i;}
  args = new cljs.core.IndexedSeq(G__12654__a,0);
} 
return G__12653__delegate.call(this,args);};
G__12653.cljs$lang$maxFixedArity = 0;
G__12653.cljs$lang$applyTo = (function (arglist__12655){
var args = cljs.core.seq(arglist__12655);
return G__12653__delegate(args);
});
G__12653.cljs$core$IFn$_invoke$arity$variadic = G__12653__delegate;
return G__12653;
})()
;

return null;
});
