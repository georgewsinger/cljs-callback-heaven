goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__36455__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__36455 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36456__i = 0, G__36456__a = new Array(arguments.length -  0);
while (G__36456__i < G__36456__a.length) {G__36456__a[G__36456__i] = arguments[G__36456__i + 0]; ++G__36456__i;}
  args = new cljs.core.IndexedSeq(G__36456__a,0);
} 
return G__36455__delegate.call(this,args);};
G__36455.cljs$lang$maxFixedArity = 0;
G__36455.cljs$lang$applyTo = (function (arglist__36457){
var args = cljs.core.seq(arglist__36457);
return G__36455__delegate(args);
});
G__36455.cljs$core$IFn$_invoke$arity$variadic = G__36455__delegate;
return G__36455;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__36458__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__36458 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36459__i = 0, G__36459__a = new Array(arguments.length -  0);
while (G__36459__i < G__36459__a.length) {G__36459__a[G__36459__i] = arguments[G__36459__i + 0]; ++G__36459__i;}
  args = new cljs.core.IndexedSeq(G__36459__a,0);
} 
return G__36458__delegate.call(this,args);};
G__36458.cljs$lang$maxFixedArity = 0;
G__36458.cljs$lang$applyTo = (function (arglist__36460){
var args = cljs.core.seq(arglist__36460);
return G__36458__delegate(args);
});
G__36458.cljs$core$IFn$_invoke$arity$variadic = G__36458__delegate;
return G__36458;
})()
;

return null;
});
