goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__317547__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__317547 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__317548__i = 0, G__317548__a = new Array(arguments.length -  0);
while (G__317548__i < G__317548__a.length) {G__317548__a[G__317548__i] = arguments[G__317548__i + 0]; ++G__317548__i;}
  args = new cljs.core.IndexedSeq(G__317548__a,0);
} 
return G__317547__delegate.call(this,args);};
G__317547.cljs$lang$maxFixedArity = 0;
G__317547.cljs$lang$applyTo = (function (arglist__317549){
var args = cljs.core.seq(arglist__317549);
return G__317547__delegate(args);
});
G__317547.cljs$core$IFn$_invoke$arity$variadic = G__317547__delegate;
return G__317547;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__317550__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__317550 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__317551__i = 0, G__317551__a = new Array(arguments.length -  0);
while (G__317551__i < G__317551__a.length) {G__317551__a[G__317551__i] = arguments[G__317551__i + 0]; ++G__317551__i;}
  args = new cljs.core.IndexedSeq(G__317551__a,0);
} 
return G__317550__delegate.call(this,args);};
G__317550.cljs$lang$maxFixedArity = 0;
G__317550.cljs$lang$applyTo = (function (arglist__317552){
var args = cljs.core.seq(arglist__317552);
return G__317550__delegate(args);
});
G__317550.cljs$core$IFn$_invoke$arity$variadic = G__317550__delegate;
return G__317550;
})()
;

return null;
});
