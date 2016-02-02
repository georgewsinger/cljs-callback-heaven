goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__286963__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__286963 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__286964__i = 0, G__286964__a = new Array(arguments.length -  0);
while (G__286964__i < G__286964__a.length) {G__286964__a[G__286964__i] = arguments[G__286964__i + 0]; ++G__286964__i;}
  args = new cljs.core.IndexedSeq(G__286964__a,0);
} 
return G__286963__delegate.call(this,args);};
G__286963.cljs$lang$maxFixedArity = 0;
G__286963.cljs$lang$applyTo = (function (arglist__286965){
var args = cljs.core.seq(arglist__286965);
return G__286963__delegate(args);
});
G__286963.cljs$core$IFn$_invoke$arity$variadic = G__286963__delegate;
return G__286963;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__286966__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__286966 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__286967__i = 0, G__286967__a = new Array(arguments.length -  0);
while (G__286967__i < G__286967__a.length) {G__286967__a[G__286967__i] = arguments[G__286967__i + 0]; ++G__286967__i;}
  args = new cljs.core.IndexedSeq(G__286967__a,0);
} 
return G__286966__delegate.call(this,args);};
G__286966.cljs$lang$maxFixedArity = 0;
G__286966.cljs$lang$applyTo = (function (arglist__286968){
var args = cljs.core.seq(arglist__286968);
return G__286966__delegate(args);
});
G__286966.cljs$core$IFn$_invoke$arity$variadic = G__286966__delegate;
return G__286966;
})()
;

return null;
});
