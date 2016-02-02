goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__18945__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__18945 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18946__i = 0, G__18946__a = new Array(arguments.length -  0);
while (G__18946__i < G__18946__a.length) {G__18946__a[G__18946__i] = arguments[G__18946__i + 0]; ++G__18946__i;}
  args = new cljs.core.IndexedSeq(G__18946__a,0);
} 
return G__18945__delegate.call(this,args);};
G__18945.cljs$lang$maxFixedArity = 0;
G__18945.cljs$lang$applyTo = (function (arglist__18947){
var args = cljs.core.seq(arglist__18947);
return G__18945__delegate(args);
});
G__18945.cljs$core$IFn$_invoke$arity$variadic = G__18945__delegate;
return G__18945;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__18948__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__18948 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18949__i = 0, G__18949__a = new Array(arguments.length -  0);
while (G__18949__i < G__18949__a.length) {G__18949__a[G__18949__i] = arguments[G__18949__i + 0]; ++G__18949__i;}
  args = new cljs.core.IndexedSeq(G__18949__a,0);
} 
return G__18948__delegate.call(this,args);};
G__18948.cljs$lang$maxFixedArity = 0;
G__18948.cljs$lang$applyTo = (function (arglist__18950){
var args = cljs.core.seq(arglist__18950);
return G__18948__delegate(args);
});
G__18948.cljs$core$IFn$_invoke$arity$variadic = G__18948__delegate;
return G__18948;
})()
;

return null;
});
