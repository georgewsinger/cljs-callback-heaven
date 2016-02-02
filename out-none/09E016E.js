goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11439__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11439 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11440__i = 0, G__11440__a = new Array(arguments.length -  0);
while (G__11440__i < G__11440__a.length) {G__11440__a[G__11440__i] = arguments[G__11440__i + 0]; ++G__11440__i;}
  args = new cljs.core.IndexedSeq(G__11440__a,0);
} 
return G__11439__delegate.call(this,args);};
G__11439.cljs$lang$maxFixedArity = 0;
G__11439.cljs$lang$applyTo = (function (arglist__11441){
var args = cljs.core.seq(arglist__11441);
return G__11439__delegate(args);
});
G__11439.cljs$core$IFn$_invoke$arity$variadic = G__11439__delegate;
return G__11439;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11442__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11442 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11443__i = 0, G__11443__a = new Array(arguments.length -  0);
while (G__11443__i < G__11443__a.length) {G__11443__a[G__11443__i] = arguments[G__11443__i + 0]; ++G__11443__i;}
  args = new cljs.core.IndexedSeq(G__11443__a,0);
} 
return G__11442__delegate.call(this,args);};
G__11442.cljs$lang$maxFixedArity = 0;
G__11442.cljs$lang$applyTo = (function (arglist__11444){
var args = cljs.core.seq(arglist__11444);
return G__11442__delegate(args);
});
G__11442.cljs$core$IFn$_invoke$arity$variadic = G__11442__delegate;
return G__11442;
})()
;

return null;
});
