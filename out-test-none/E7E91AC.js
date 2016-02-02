goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__17171__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__17171 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17172__i = 0, G__17172__a = new Array(arguments.length -  0);
while (G__17172__i < G__17172__a.length) {G__17172__a[G__17172__i] = arguments[G__17172__i + 0]; ++G__17172__i;}
  args = new cljs.core.IndexedSeq(G__17172__a,0);
} 
return G__17171__delegate.call(this,args);};
G__17171.cljs$lang$maxFixedArity = 0;
G__17171.cljs$lang$applyTo = (function (arglist__17173){
var args = cljs.core.seq(arglist__17173);
return G__17171__delegate(args);
});
G__17171.cljs$core$IFn$_invoke$arity$variadic = G__17171__delegate;
return G__17171;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__17174__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__17174 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17175__i = 0, G__17175__a = new Array(arguments.length -  0);
while (G__17175__i < G__17175__a.length) {G__17175__a[G__17175__i] = arguments[G__17175__i + 0]; ++G__17175__i;}
  args = new cljs.core.IndexedSeq(G__17175__a,0);
} 
return G__17174__delegate.call(this,args);};
G__17174.cljs$lang$maxFixedArity = 0;
G__17174.cljs$lang$applyTo = (function (arglist__17176){
var args = cljs.core.seq(arglist__17176);
return G__17174__delegate(args);
});
G__17174.cljs$core$IFn$_invoke$arity$variadic = G__17174__delegate;
return G__17174;
})()
;

return null;
});
