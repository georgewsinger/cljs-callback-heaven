goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__145299__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__145299 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__145300__i = 0, G__145300__a = new Array(arguments.length -  0);
while (G__145300__i < G__145300__a.length) {G__145300__a[G__145300__i] = arguments[G__145300__i + 0]; ++G__145300__i;}
  args = new cljs.core.IndexedSeq(G__145300__a,0);
} 
return G__145299__delegate.call(this,args);};
G__145299.cljs$lang$maxFixedArity = 0;
G__145299.cljs$lang$applyTo = (function (arglist__145301){
var args = cljs.core.seq(arglist__145301);
return G__145299__delegate(args);
});
G__145299.cljs$core$IFn$_invoke$arity$variadic = G__145299__delegate;
return G__145299;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__145302__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__145302 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__145303__i = 0, G__145303__a = new Array(arguments.length -  0);
while (G__145303__i < G__145303__a.length) {G__145303__a[G__145303__i] = arguments[G__145303__i + 0]; ++G__145303__i;}
  args = new cljs.core.IndexedSeq(G__145303__a,0);
} 
return G__145302__delegate.call(this,args);};
G__145302.cljs$lang$maxFixedArity = 0;
G__145302.cljs$lang$applyTo = (function (arglist__145304){
var args = cljs.core.seq(arglist__145304);
return G__145302__delegate(args);
});
G__145302.cljs$core$IFn$_invoke$arity$variadic = G__145302__delegate;
return G__145302;
})()
;

return null;
});
