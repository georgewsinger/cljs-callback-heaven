goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__36124__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__36124 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36125__i = 0, G__36125__a = new Array(arguments.length -  0);
while (G__36125__i < G__36125__a.length) {G__36125__a[G__36125__i] = arguments[G__36125__i + 0]; ++G__36125__i;}
  args = new cljs.core.IndexedSeq(G__36125__a,0);
} 
return G__36124__delegate.call(this,args);};
G__36124.cljs$lang$maxFixedArity = 0;
G__36124.cljs$lang$applyTo = (function (arglist__36126){
var args = cljs.core.seq(arglist__36126);
return G__36124__delegate(args);
});
G__36124.cljs$core$IFn$_invoke$arity$variadic = G__36124__delegate;
return G__36124;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__36127__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__36127 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36128__i = 0, G__36128__a = new Array(arguments.length -  0);
while (G__36128__i < G__36128__a.length) {G__36128__a[G__36128__i] = arguments[G__36128__i + 0]; ++G__36128__i;}
  args = new cljs.core.IndexedSeq(G__36128__a,0);
} 
return G__36127__delegate.call(this,args);};
G__36127.cljs$lang$maxFixedArity = 0;
G__36127.cljs$lang$applyTo = (function (arglist__36129){
var args = cljs.core.seq(arglist__36129);
return G__36127__delegate(args);
});
G__36127.cljs$core$IFn$_invoke$arity$variadic = G__36127__delegate;
return G__36127;
})()
;

return null;
});
