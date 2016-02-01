goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15587__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15587 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15588__i = 0, G__15588__a = new Array(arguments.length -  0);
while (G__15588__i < G__15588__a.length) {G__15588__a[G__15588__i] = arguments[G__15588__i + 0]; ++G__15588__i;}
  args = new cljs.core.IndexedSeq(G__15588__a,0);
} 
return G__15587__delegate.call(this,args);};
G__15587.cljs$lang$maxFixedArity = 0;
G__15587.cljs$lang$applyTo = (function (arglist__15589){
var args = cljs.core.seq(arglist__15589);
return G__15587__delegate(args);
});
G__15587.cljs$core$IFn$_invoke$arity$variadic = G__15587__delegate;
return G__15587;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15590__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15590 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15591__i = 0, G__15591__a = new Array(arguments.length -  0);
while (G__15591__i < G__15591__a.length) {G__15591__a[G__15591__i] = arguments[G__15591__i + 0]; ++G__15591__i;}
  args = new cljs.core.IndexedSeq(G__15591__a,0);
} 
return G__15590__delegate.call(this,args);};
G__15590.cljs$lang$maxFixedArity = 0;
G__15590.cljs$lang$applyTo = (function (arglist__15592){
var args = cljs.core.seq(arglist__15592);
return G__15590__delegate(args);
});
G__15590.cljs$core$IFn$_invoke$arity$variadic = G__15590__delegate;
return G__15590;
})()
;

return null;
});
