goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10436__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10436 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10437__i = 0, G__10437__a = new Array(arguments.length -  0);
while (G__10437__i < G__10437__a.length) {G__10437__a[G__10437__i] = arguments[G__10437__i + 0]; ++G__10437__i;}
  args = new cljs.core.IndexedSeq(G__10437__a,0);
} 
return G__10436__delegate.call(this,args);};
G__10436.cljs$lang$maxFixedArity = 0;
G__10436.cljs$lang$applyTo = (function (arglist__10438){
var args = cljs.core.seq(arglist__10438);
return G__10436__delegate(args);
});
G__10436.cljs$core$IFn$_invoke$arity$variadic = G__10436__delegate;
return G__10436;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10439__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10439 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10440__i = 0, G__10440__a = new Array(arguments.length -  0);
while (G__10440__i < G__10440__a.length) {G__10440__a[G__10440__i] = arguments[G__10440__i + 0]; ++G__10440__i;}
  args = new cljs.core.IndexedSeq(G__10440__a,0);
} 
return G__10439__delegate.call(this,args);};
G__10439.cljs$lang$maxFixedArity = 0;
G__10439.cljs$lang$applyTo = (function (arglist__10441){
var args = cljs.core.seq(arglist__10441);
return G__10439__delegate(args);
});
G__10439.cljs$core$IFn$_invoke$arity$variadic = G__10439__delegate;
return G__10439;
})()
;

return null;
});
