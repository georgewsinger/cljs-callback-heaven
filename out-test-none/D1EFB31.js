goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__21543__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__21543 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21544__i = 0, G__21544__a = new Array(arguments.length -  0);
while (G__21544__i < G__21544__a.length) {G__21544__a[G__21544__i] = arguments[G__21544__i + 0]; ++G__21544__i;}
  args = new cljs.core.IndexedSeq(G__21544__a,0);
} 
return G__21543__delegate.call(this,args);};
G__21543.cljs$lang$maxFixedArity = 0;
G__21543.cljs$lang$applyTo = (function (arglist__21545){
var args = cljs.core.seq(arglist__21545);
return G__21543__delegate(args);
});
G__21543.cljs$core$IFn$_invoke$arity$variadic = G__21543__delegate;
return G__21543;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__21546__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__21546 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21547__i = 0, G__21547__a = new Array(arguments.length -  0);
while (G__21547__i < G__21547__a.length) {G__21547__a[G__21547__i] = arguments[G__21547__i + 0]; ++G__21547__i;}
  args = new cljs.core.IndexedSeq(G__21547__a,0);
} 
return G__21546__delegate.call(this,args);};
G__21546.cljs$lang$maxFixedArity = 0;
G__21546.cljs$lang$applyTo = (function (arglist__21548){
var args = cljs.core.seq(arglist__21548);
return G__21546__delegate(args);
});
G__21546.cljs$core$IFn$_invoke$arity$variadic = G__21546__delegate;
return G__21546;
})()
;

return null;
});
