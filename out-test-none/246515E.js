goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15027__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15027 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15028__i = 0, G__15028__a = new Array(arguments.length -  0);
while (G__15028__i < G__15028__a.length) {G__15028__a[G__15028__i] = arguments[G__15028__i + 0]; ++G__15028__i;}
  args = new cljs.core.IndexedSeq(G__15028__a,0);
} 
return G__15027__delegate.call(this,args);};
G__15027.cljs$lang$maxFixedArity = 0;
G__15027.cljs$lang$applyTo = (function (arglist__15029){
var args = cljs.core.seq(arglist__15029);
return G__15027__delegate(args);
});
G__15027.cljs$core$IFn$_invoke$arity$variadic = G__15027__delegate;
return G__15027;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15030__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15030 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15031__i = 0, G__15031__a = new Array(arguments.length -  0);
while (G__15031__i < G__15031__a.length) {G__15031__a[G__15031__i] = arguments[G__15031__i + 0]; ++G__15031__i;}
  args = new cljs.core.IndexedSeq(G__15031__a,0);
} 
return G__15030__delegate.call(this,args);};
G__15030.cljs$lang$maxFixedArity = 0;
G__15030.cljs$lang$applyTo = (function (arglist__15032){
var args = cljs.core.seq(arglist__15032);
return G__15030__delegate(args);
});
G__15030.cljs$core$IFn$_invoke$arity$variadic = G__15030__delegate;
return G__15030;
})()
;

return null;
});
