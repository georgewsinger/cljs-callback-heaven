goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__32167__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__32167 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32168__i = 0, G__32168__a = new Array(arguments.length -  0);
while (G__32168__i < G__32168__a.length) {G__32168__a[G__32168__i] = arguments[G__32168__i + 0]; ++G__32168__i;}
  args = new cljs.core.IndexedSeq(G__32168__a,0);
} 
return G__32167__delegate.call(this,args);};
G__32167.cljs$lang$maxFixedArity = 0;
G__32167.cljs$lang$applyTo = (function (arglist__32169){
var args = cljs.core.seq(arglist__32169);
return G__32167__delegate(args);
});
G__32167.cljs$core$IFn$_invoke$arity$variadic = G__32167__delegate;
return G__32167;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__32170__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__32170 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32171__i = 0, G__32171__a = new Array(arguments.length -  0);
while (G__32171__i < G__32171__a.length) {G__32171__a[G__32171__i] = arguments[G__32171__i + 0]; ++G__32171__i;}
  args = new cljs.core.IndexedSeq(G__32171__a,0);
} 
return G__32170__delegate.call(this,args);};
G__32170.cljs$lang$maxFixedArity = 0;
G__32170.cljs$lang$applyTo = (function (arglist__32172){
var args = cljs.core.seq(arglist__32172);
return G__32170__delegate(args);
});
G__32170.cljs$core$IFn$_invoke$arity$variadic = G__32170__delegate;
return G__32170;
})()
;

return null;
});
