goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14862__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14862 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14863__i = 0, G__14863__a = new Array(arguments.length -  0);
while (G__14863__i < G__14863__a.length) {G__14863__a[G__14863__i] = arguments[G__14863__i + 0]; ++G__14863__i;}
  args = new cljs.core.IndexedSeq(G__14863__a,0);
} 
return G__14862__delegate.call(this,args);};
G__14862.cljs$lang$maxFixedArity = 0;
G__14862.cljs$lang$applyTo = (function (arglist__14864){
var args = cljs.core.seq(arglist__14864);
return G__14862__delegate(args);
});
G__14862.cljs$core$IFn$_invoke$arity$variadic = G__14862__delegate;
return G__14862;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14865__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14865 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14866__i = 0, G__14866__a = new Array(arguments.length -  0);
while (G__14866__i < G__14866__a.length) {G__14866__a[G__14866__i] = arguments[G__14866__i + 0]; ++G__14866__i;}
  args = new cljs.core.IndexedSeq(G__14866__a,0);
} 
return G__14865__delegate.call(this,args);};
G__14865.cljs$lang$maxFixedArity = 0;
G__14865.cljs$lang$applyTo = (function (arglist__14867){
var args = cljs.core.seq(arglist__14867);
return G__14865__delegate(args);
});
G__14865.cljs$core$IFn$_invoke$arity$variadic = G__14865__delegate;
return G__14865;
})()
;

return null;
});
