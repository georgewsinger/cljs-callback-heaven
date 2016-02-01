goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9963__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9963 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9964__i = 0, G__9964__a = new Array(arguments.length -  0);
while (G__9964__i < G__9964__a.length) {G__9964__a[G__9964__i] = arguments[G__9964__i + 0]; ++G__9964__i;}
  args = new cljs.core.IndexedSeq(G__9964__a,0);
} 
return G__9963__delegate.call(this,args);};
G__9963.cljs$lang$maxFixedArity = 0;
G__9963.cljs$lang$applyTo = (function (arglist__9965){
var args = cljs.core.seq(arglist__9965);
return G__9963__delegate(args);
});
G__9963.cljs$core$IFn$_invoke$arity$variadic = G__9963__delegate;
return G__9963;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9966__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9966 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9967__i = 0, G__9967__a = new Array(arguments.length -  0);
while (G__9967__i < G__9967__a.length) {G__9967__a[G__9967__i] = arguments[G__9967__i + 0]; ++G__9967__i;}
  args = new cljs.core.IndexedSeq(G__9967__a,0);
} 
return G__9966__delegate.call(this,args);};
G__9966.cljs$lang$maxFixedArity = 0;
G__9966.cljs$lang$applyTo = (function (arglist__9968){
var args = cljs.core.seq(arglist__9968);
return G__9966__delegate(args);
});
G__9966.cljs$core$IFn$_invoke$arity$variadic = G__9966__delegate;
return G__9966;
})()
;

return null;
});
