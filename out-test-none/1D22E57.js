goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11948__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11948 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11949__i = 0, G__11949__a = new Array(arguments.length -  0);
while (G__11949__i < G__11949__a.length) {G__11949__a[G__11949__i] = arguments[G__11949__i + 0]; ++G__11949__i;}
  args = new cljs.core.IndexedSeq(G__11949__a,0);
} 
return G__11948__delegate.call(this,args);};
G__11948.cljs$lang$maxFixedArity = 0;
G__11948.cljs$lang$applyTo = (function (arglist__11950){
var args = cljs.core.seq(arglist__11950);
return G__11948__delegate(args);
});
G__11948.cljs$core$IFn$_invoke$arity$variadic = G__11948__delegate;
return G__11948;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11951__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11951 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11952__i = 0, G__11952__a = new Array(arguments.length -  0);
while (G__11952__i < G__11952__a.length) {G__11952__a[G__11952__i] = arguments[G__11952__i + 0]; ++G__11952__i;}
  args = new cljs.core.IndexedSeq(G__11952__a,0);
} 
return G__11951__delegate.call(this,args);};
G__11951.cljs$lang$maxFixedArity = 0;
G__11951.cljs$lang$applyTo = (function (arglist__11953){
var args = cljs.core.seq(arglist__11953);
return G__11951__delegate(args);
});
G__11951.cljs$core$IFn$_invoke$arity$variadic = G__11951__delegate;
return G__11951;
})()
;

return null;
});
