goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15666__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15666 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15667__i = 0, G__15667__a = new Array(arguments.length -  0);
while (G__15667__i < G__15667__a.length) {G__15667__a[G__15667__i] = arguments[G__15667__i + 0]; ++G__15667__i;}
  args = new cljs.core.IndexedSeq(G__15667__a,0);
} 
return G__15666__delegate.call(this,args);};
G__15666.cljs$lang$maxFixedArity = 0;
G__15666.cljs$lang$applyTo = (function (arglist__15668){
var args = cljs.core.seq(arglist__15668);
return G__15666__delegate(args);
});
G__15666.cljs$core$IFn$_invoke$arity$variadic = G__15666__delegate;
return G__15666;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15669__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15669 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15670__i = 0, G__15670__a = new Array(arguments.length -  0);
while (G__15670__i < G__15670__a.length) {G__15670__a[G__15670__i] = arguments[G__15670__i + 0]; ++G__15670__i;}
  args = new cljs.core.IndexedSeq(G__15670__a,0);
} 
return G__15669__delegate.call(this,args);};
G__15669.cljs$lang$maxFixedArity = 0;
G__15669.cljs$lang$applyTo = (function (arglist__15671){
var args = cljs.core.seq(arglist__15671);
return G__15669__delegate(args);
});
G__15669.cljs$core$IFn$_invoke$arity$variadic = G__15669__delegate;
return G__15669;
})()
;

return null;
});
