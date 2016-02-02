goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13733__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13733 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13734__i = 0, G__13734__a = new Array(arguments.length -  0);
while (G__13734__i < G__13734__a.length) {G__13734__a[G__13734__i] = arguments[G__13734__i + 0]; ++G__13734__i;}
  args = new cljs.core.IndexedSeq(G__13734__a,0);
} 
return G__13733__delegate.call(this,args);};
G__13733.cljs$lang$maxFixedArity = 0;
G__13733.cljs$lang$applyTo = (function (arglist__13735){
var args = cljs.core.seq(arglist__13735);
return G__13733__delegate(args);
});
G__13733.cljs$core$IFn$_invoke$arity$variadic = G__13733__delegate;
return G__13733;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13736__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13736 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13737__i = 0, G__13737__a = new Array(arguments.length -  0);
while (G__13737__i < G__13737__a.length) {G__13737__a[G__13737__i] = arguments[G__13737__i + 0]; ++G__13737__i;}
  args = new cljs.core.IndexedSeq(G__13737__a,0);
} 
return G__13736__delegate.call(this,args);};
G__13736.cljs$lang$maxFixedArity = 0;
G__13736.cljs$lang$applyTo = (function (arglist__13738){
var args = cljs.core.seq(arglist__13738);
return G__13736__delegate(args);
});
G__13736.cljs$core$IFn$_invoke$arity$variadic = G__13736__delegate;
return G__13736;
})()
;

return null;
});
