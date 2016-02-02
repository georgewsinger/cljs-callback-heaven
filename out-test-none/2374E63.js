goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15060__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15060 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15061__i = 0, G__15061__a = new Array(arguments.length -  0);
while (G__15061__i < G__15061__a.length) {G__15061__a[G__15061__i] = arguments[G__15061__i + 0]; ++G__15061__i;}
  args = new cljs.core.IndexedSeq(G__15061__a,0);
} 
return G__15060__delegate.call(this,args);};
G__15060.cljs$lang$maxFixedArity = 0;
G__15060.cljs$lang$applyTo = (function (arglist__15062){
var args = cljs.core.seq(arglist__15062);
return G__15060__delegate(args);
});
G__15060.cljs$core$IFn$_invoke$arity$variadic = G__15060__delegate;
return G__15060;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15063__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15063 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15064__i = 0, G__15064__a = new Array(arguments.length -  0);
while (G__15064__i < G__15064__a.length) {G__15064__a[G__15064__i] = arguments[G__15064__i + 0]; ++G__15064__i;}
  args = new cljs.core.IndexedSeq(G__15064__a,0);
} 
return G__15063__delegate.call(this,args);};
G__15063.cljs$lang$maxFixedArity = 0;
G__15063.cljs$lang$applyTo = (function (arglist__15065){
var args = cljs.core.seq(arglist__15065);
return G__15063__delegate(args);
});
G__15063.cljs$core$IFn$_invoke$arity$variadic = G__15063__delegate;
return G__15063;
})()
;

return null;
});
