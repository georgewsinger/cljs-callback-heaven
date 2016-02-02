goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__18205__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__18205 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18206__i = 0, G__18206__a = new Array(arguments.length -  0);
while (G__18206__i < G__18206__a.length) {G__18206__a[G__18206__i] = arguments[G__18206__i + 0]; ++G__18206__i;}
  args = new cljs.core.IndexedSeq(G__18206__a,0);
} 
return G__18205__delegate.call(this,args);};
G__18205.cljs$lang$maxFixedArity = 0;
G__18205.cljs$lang$applyTo = (function (arglist__18207){
var args = cljs.core.seq(arglist__18207);
return G__18205__delegate(args);
});
G__18205.cljs$core$IFn$_invoke$arity$variadic = G__18205__delegate;
return G__18205;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__18208__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__18208 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18209__i = 0, G__18209__a = new Array(arguments.length -  0);
while (G__18209__i < G__18209__a.length) {G__18209__a[G__18209__i] = arguments[G__18209__i + 0]; ++G__18209__i;}
  args = new cljs.core.IndexedSeq(G__18209__a,0);
} 
return G__18208__delegate.call(this,args);};
G__18208.cljs$lang$maxFixedArity = 0;
G__18208.cljs$lang$applyTo = (function (arglist__18210){
var args = cljs.core.seq(arglist__18210);
return G__18208__delegate(args);
});
G__18208.cljs$core$IFn$_invoke$arity$variadic = G__18208__delegate;
return G__18208;
})()
;

return null;
});
