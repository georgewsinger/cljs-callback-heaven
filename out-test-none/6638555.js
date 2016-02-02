goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__35114__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__35114 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35115__i = 0, G__35115__a = new Array(arguments.length -  0);
while (G__35115__i < G__35115__a.length) {G__35115__a[G__35115__i] = arguments[G__35115__i + 0]; ++G__35115__i;}
  args = new cljs.core.IndexedSeq(G__35115__a,0);
} 
return G__35114__delegate.call(this,args);};
G__35114.cljs$lang$maxFixedArity = 0;
G__35114.cljs$lang$applyTo = (function (arglist__35116){
var args = cljs.core.seq(arglist__35116);
return G__35114__delegate(args);
});
G__35114.cljs$core$IFn$_invoke$arity$variadic = G__35114__delegate;
return G__35114;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__35117__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__35117 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35118__i = 0, G__35118__a = new Array(arguments.length -  0);
while (G__35118__i < G__35118__a.length) {G__35118__a[G__35118__i] = arguments[G__35118__i + 0]; ++G__35118__i;}
  args = new cljs.core.IndexedSeq(G__35118__a,0);
} 
return G__35117__delegate.call(this,args);};
G__35117.cljs$lang$maxFixedArity = 0;
G__35117.cljs$lang$applyTo = (function (arglist__35119){
var args = cljs.core.seq(arglist__35119);
return G__35117__delegate(args);
});
G__35117.cljs$core$IFn$_invoke$arity$variadic = G__35117__delegate;
return G__35117;
})()
;

return null;
});
