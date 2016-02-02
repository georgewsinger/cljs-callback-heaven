goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__44437__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__44437 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44438__i = 0, G__44438__a = new Array(arguments.length -  0);
while (G__44438__i < G__44438__a.length) {G__44438__a[G__44438__i] = arguments[G__44438__i + 0]; ++G__44438__i;}
  args = new cljs.core.IndexedSeq(G__44438__a,0);
} 
return G__44437__delegate.call(this,args);};
G__44437.cljs$lang$maxFixedArity = 0;
G__44437.cljs$lang$applyTo = (function (arglist__44439){
var args = cljs.core.seq(arglist__44439);
return G__44437__delegate(args);
});
G__44437.cljs$core$IFn$_invoke$arity$variadic = G__44437__delegate;
return G__44437;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__44440__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__44440 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44441__i = 0, G__44441__a = new Array(arguments.length -  0);
while (G__44441__i < G__44441__a.length) {G__44441__a[G__44441__i] = arguments[G__44441__i + 0]; ++G__44441__i;}
  args = new cljs.core.IndexedSeq(G__44441__a,0);
} 
return G__44440__delegate.call(this,args);};
G__44440.cljs$lang$maxFixedArity = 0;
G__44440.cljs$lang$applyTo = (function (arglist__44442){
var args = cljs.core.seq(arglist__44442);
return G__44440__delegate(args);
});
G__44440.cljs$core$IFn$_invoke$arity$variadic = G__44440__delegate;
return G__44440;
})()
;

return null;
});
