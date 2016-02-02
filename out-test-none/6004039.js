goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10745__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10745 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10746__i = 0, G__10746__a = new Array(arguments.length -  0);
while (G__10746__i < G__10746__a.length) {G__10746__a[G__10746__i] = arguments[G__10746__i + 0]; ++G__10746__i;}
  args = new cljs.core.IndexedSeq(G__10746__a,0);
} 
return G__10745__delegate.call(this,args);};
G__10745.cljs$lang$maxFixedArity = 0;
G__10745.cljs$lang$applyTo = (function (arglist__10747){
var args = cljs.core.seq(arglist__10747);
return G__10745__delegate(args);
});
G__10745.cljs$core$IFn$_invoke$arity$variadic = G__10745__delegate;
return G__10745;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10748__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10748 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10749__i = 0, G__10749__a = new Array(arguments.length -  0);
while (G__10749__i < G__10749__a.length) {G__10749__a[G__10749__i] = arguments[G__10749__i + 0]; ++G__10749__i;}
  args = new cljs.core.IndexedSeq(G__10749__a,0);
} 
return G__10748__delegate.call(this,args);};
G__10748.cljs$lang$maxFixedArity = 0;
G__10748.cljs$lang$applyTo = (function (arglist__10750){
var args = cljs.core.seq(arglist__10750);
return G__10748__delegate(args);
});
G__10748.cljs$core$IFn$_invoke$arity$variadic = G__10748__delegate;
return G__10748;
})()
;

return null;
});
