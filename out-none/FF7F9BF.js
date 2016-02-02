goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__68112__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__68112 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__68113__i = 0, G__68113__a = new Array(arguments.length -  0);
while (G__68113__i < G__68113__a.length) {G__68113__a[G__68113__i] = arguments[G__68113__i + 0]; ++G__68113__i;}
  args = new cljs.core.IndexedSeq(G__68113__a,0);
} 
return G__68112__delegate.call(this,args);};
G__68112.cljs$lang$maxFixedArity = 0;
G__68112.cljs$lang$applyTo = (function (arglist__68114){
var args = cljs.core.seq(arglist__68114);
return G__68112__delegate(args);
});
G__68112.cljs$core$IFn$_invoke$arity$variadic = G__68112__delegate;
return G__68112;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__68115__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__68115 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__68116__i = 0, G__68116__a = new Array(arguments.length -  0);
while (G__68116__i < G__68116__a.length) {G__68116__a[G__68116__i] = arguments[G__68116__i + 0]; ++G__68116__i;}
  args = new cljs.core.IndexedSeq(G__68116__a,0);
} 
return G__68115__delegate.call(this,args);};
G__68115.cljs$lang$maxFixedArity = 0;
G__68115.cljs$lang$applyTo = (function (arglist__68117){
var args = cljs.core.seq(arglist__68117);
return G__68115__delegate(args);
});
G__68115.cljs$core$IFn$_invoke$arity$variadic = G__68115__delegate;
return G__68115;
})()
;

return null;
});
