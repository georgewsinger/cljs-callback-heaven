goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15038__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15038 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15039__i = 0, G__15039__a = new Array(arguments.length -  0);
while (G__15039__i < G__15039__a.length) {G__15039__a[G__15039__i] = arguments[G__15039__i + 0]; ++G__15039__i;}
  args = new cljs.core.IndexedSeq(G__15039__a,0);
} 
return G__15038__delegate.call(this,args);};
G__15038.cljs$lang$maxFixedArity = 0;
G__15038.cljs$lang$applyTo = (function (arglist__15040){
var args = cljs.core.seq(arglist__15040);
return G__15038__delegate(args);
});
G__15038.cljs$core$IFn$_invoke$arity$variadic = G__15038__delegate;
return G__15038;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15041__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15041 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15042__i = 0, G__15042__a = new Array(arguments.length -  0);
while (G__15042__i < G__15042__a.length) {G__15042__a[G__15042__i] = arguments[G__15042__i + 0]; ++G__15042__i;}
  args = new cljs.core.IndexedSeq(G__15042__a,0);
} 
return G__15041__delegate.call(this,args);};
G__15041.cljs$lang$maxFixedArity = 0;
G__15041.cljs$lang$applyTo = (function (arglist__15043){
var args = cljs.core.seq(arglist__15043);
return G__15041__delegate(args);
});
G__15041.cljs$core$IFn$_invoke$arity$variadic = G__15041__delegate;
return G__15041;
})()
;

return null;
});
