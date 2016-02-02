goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__298202__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__298202 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__298203__i = 0, G__298203__a = new Array(arguments.length -  0);
while (G__298203__i < G__298203__a.length) {G__298203__a[G__298203__i] = arguments[G__298203__i + 0]; ++G__298203__i;}
  args = new cljs.core.IndexedSeq(G__298203__a,0);
} 
return G__298202__delegate.call(this,args);};
G__298202.cljs$lang$maxFixedArity = 0;
G__298202.cljs$lang$applyTo = (function (arglist__298204){
var args = cljs.core.seq(arglist__298204);
return G__298202__delegate(args);
});
G__298202.cljs$core$IFn$_invoke$arity$variadic = G__298202__delegate;
return G__298202;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__298205__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__298205 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__298206__i = 0, G__298206__a = new Array(arguments.length -  0);
while (G__298206__i < G__298206__a.length) {G__298206__a[G__298206__i] = arguments[G__298206__i + 0]; ++G__298206__i;}
  args = new cljs.core.IndexedSeq(G__298206__a,0);
} 
return G__298205__delegate.call(this,args);};
G__298205.cljs$lang$maxFixedArity = 0;
G__298205.cljs$lang$applyTo = (function (arglist__298207){
var args = cljs.core.seq(arglist__298207);
return G__298205__delegate(args);
});
G__298205.cljs$core$IFn$_invoke$arity$variadic = G__298205__delegate;
return G__298205;
})()
;

return null;
});
