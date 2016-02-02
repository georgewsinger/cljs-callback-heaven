goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__39916__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__39916 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39917__i = 0, G__39917__a = new Array(arguments.length -  0);
while (G__39917__i < G__39917__a.length) {G__39917__a[G__39917__i] = arguments[G__39917__i + 0]; ++G__39917__i;}
  args = new cljs.core.IndexedSeq(G__39917__a,0);
} 
return G__39916__delegate.call(this,args);};
G__39916.cljs$lang$maxFixedArity = 0;
G__39916.cljs$lang$applyTo = (function (arglist__39918){
var args = cljs.core.seq(arglist__39918);
return G__39916__delegate(args);
});
G__39916.cljs$core$IFn$_invoke$arity$variadic = G__39916__delegate;
return G__39916;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__39919__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__39919 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39920__i = 0, G__39920__a = new Array(arguments.length -  0);
while (G__39920__i < G__39920__a.length) {G__39920__a[G__39920__i] = arguments[G__39920__i + 0]; ++G__39920__i;}
  args = new cljs.core.IndexedSeq(G__39920__a,0);
} 
return G__39919__delegate.call(this,args);};
G__39919.cljs$lang$maxFixedArity = 0;
G__39919.cljs$lang$applyTo = (function (arglist__39921){
var args = cljs.core.seq(arglist__39921);
return G__39919__delegate(args);
});
G__39919.cljs$core$IFn$_invoke$arity$variadic = G__39919__delegate;
return G__39919;
})()
;

return null;
});
