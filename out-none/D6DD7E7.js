goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8745__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8745 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8746__i = 0, G__8746__a = new Array(arguments.length -  0);
while (G__8746__i < G__8746__a.length) {G__8746__a[G__8746__i] = arguments[G__8746__i + 0]; ++G__8746__i;}
  args = new cljs.core.IndexedSeq(G__8746__a,0);
} 
return G__8745__delegate.call(this,args);};
G__8745.cljs$lang$maxFixedArity = 0;
G__8745.cljs$lang$applyTo = (function (arglist__8747){
var args = cljs.core.seq(arglist__8747);
return G__8745__delegate(args);
});
G__8745.cljs$core$IFn$_invoke$arity$variadic = G__8745__delegate;
return G__8745;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8748__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8748 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8749__i = 0, G__8749__a = new Array(arguments.length -  0);
while (G__8749__i < G__8749__a.length) {G__8749__a[G__8749__i] = arguments[G__8749__i + 0]; ++G__8749__i;}
  args = new cljs.core.IndexedSeq(G__8749__a,0);
} 
return G__8748__delegate.call(this,args);};
G__8748.cljs$lang$maxFixedArity = 0;
G__8748.cljs$lang$applyTo = (function (arglist__8750){
var args = cljs.core.seq(arglist__8750);
return G__8748__delegate(args);
});
G__8748.cljs$core$IFn$_invoke$arity$variadic = G__8748__delegate;
return G__8748;
})()
;

return null;
});
