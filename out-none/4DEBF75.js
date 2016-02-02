goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__52945__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__52945 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52946__i = 0, G__52946__a = new Array(arguments.length -  0);
while (G__52946__i < G__52946__a.length) {G__52946__a[G__52946__i] = arguments[G__52946__i + 0]; ++G__52946__i;}
  args = new cljs.core.IndexedSeq(G__52946__a,0);
} 
return G__52945__delegate.call(this,args);};
G__52945.cljs$lang$maxFixedArity = 0;
G__52945.cljs$lang$applyTo = (function (arglist__52947){
var args = cljs.core.seq(arglist__52947);
return G__52945__delegate(args);
});
G__52945.cljs$core$IFn$_invoke$arity$variadic = G__52945__delegate;
return G__52945;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__52948__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__52948 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52949__i = 0, G__52949__a = new Array(arguments.length -  0);
while (G__52949__i < G__52949__a.length) {G__52949__a[G__52949__i] = arguments[G__52949__i + 0]; ++G__52949__i;}
  args = new cljs.core.IndexedSeq(G__52949__a,0);
} 
return G__52948__delegate.call(this,args);};
G__52948.cljs$lang$maxFixedArity = 0;
G__52948.cljs$lang$applyTo = (function (arglist__52950){
var args = cljs.core.seq(arglist__52950);
return G__52948__delegate(args);
});
G__52948.cljs$core$IFn$_invoke$arity$variadic = G__52948__delegate;
return G__52948;
})()
;

return null;
});
