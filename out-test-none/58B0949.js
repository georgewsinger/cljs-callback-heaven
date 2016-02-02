goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__17296__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__17296 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17297__i = 0, G__17297__a = new Array(arguments.length -  0);
while (G__17297__i < G__17297__a.length) {G__17297__a[G__17297__i] = arguments[G__17297__i + 0]; ++G__17297__i;}
  args = new cljs.core.IndexedSeq(G__17297__a,0);
} 
return G__17296__delegate.call(this,args);};
G__17296.cljs$lang$maxFixedArity = 0;
G__17296.cljs$lang$applyTo = (function (arglist__17298){
var args = cljs.core.seq(arglist__17298);
return G__17296__delegate(args);
});
G__17296.cljs$core$IFn$_invoke$arity$variadic = G__17296__delegate;
return G__17296;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__17299__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__17299 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17300__i = 0, G__17300__a = new Array(arguments.length -  0);
while (G__17300__i < G__17300__a.length) {G__17300__a[G__17300__i] = arguments[G__17300__i + 0]; ++G__17300__i;}
  args = new cljs.core.IndexedSeq(G__17300__a,0);
} 
return G__17299__delegate.call(this,args);};
G__17299.cljs$lang$maxFixedArity = 0;
G__17299.cljs$lang$applyTo = (function (arglist__17301){
var args = cljs.core.seq(arglist__17301);
return G__17299__delegate(args);
});
G__17299.cljs$core$IFn$_invoke$arity$variadic = G__17299__delegate;
return G__17299;
})()
;

return null;
});
