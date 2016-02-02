goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__35483__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__35483 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35484__i = 0, G__35484__a = new Array(arguments.length -  0);
while (G__35484__i < G__35484__a.length) {G__35484__a[G__35484__i] = arguments[G__35484__i + 0]; ++G__35484__i;}
  args = new cljs.core.IndexedSeq(G__35484__a,0);
} 
return G__35483__delegate.call(this,args);};
G__35483.cljs$lang$maxFixedArity = 0;
G__35483.cljs$lang$applyTo = (function (arglist__35485){
var args = cljs.core.seq(arglist__35485);
return G__35483__delegate(args);
});
G__35483.cljs$core$IFn$_invoke$arity$variadic = G__35483__delegate;
return G__35483;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__35486__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__35486 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35487__i = 0, G__35487__a = new Array(arguments.length -  0);
while (G__35487__i < G__35487__a.length) {G__35487__a[G__35487__i] = arguments[G__35487__i + 0]; ++G__35487__i;}
  args = new cljs.core.IndexedSeq(G__35487__a,0);
} 
return G__35486__delegate.call(this,args);};
G__35486.cljs$lang$maxFixedArity = 0;
G__35486.cljs$lang$applyTo = (function (arglist__35488){
var args = cljs.core.seq(arglist__35488);
return G__35486__delegate(args);
});
G__35486.cljs$core$IFn$_invoke$arity$variadic = G__35486__delegate;
return G__35486;
})()
;

return null;
});
