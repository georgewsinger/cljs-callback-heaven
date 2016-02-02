goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__34296__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__34296 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34297__i = 0, G__34297__a = new Array(arguments.length -  0);
while (G__34297__i < G__34297__a.length) {G__34297__a[G__34297__i] = arguments[G__34297__i + 0]; ++G__34297__i;}
  args = new cljs.core.IndexedSeq(G__34297__a,0);
} 
return G__34296__delegate.call(this,args);};
G__34296.cljs$lang$maxFixedArity = 0;
G__34296.cljs$lang$applyTo = (function (arglist__34298){
var args = cljs.core.seq(arglist__34298);
return G__34296__delegate(args);
});
G__34296.cljs$core$IFn$_invoke$arity$variadic = G__34296__delegate;
return G__34296;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__34299__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__34299 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34300__i = 0, G__34300__a = new Array(arguments.length -  0);
while (G__34300__i < G__34300__a.length) {G__34300__a[G__34300__i] = arguments[G__34300__i + 0]; ++G__34300__i;}
  args = new cljs.core.IndexedSeq(G__34300__a,0);
} 
return G__34299__delegate.call(this,args);};
G__34299.cljs$lang$maxFixedArity = 0;
G__34299.cljs$lang$applyTo = (function (arglist__34301){
var args = cljs.core.seq(arglist__34301);
return G__34299__delegate(args);
});
G__34299.cljs$core$IFn$_invoke$arity$variadic = G__34299__delegate;
return G__34299;
})()
;

return null;
});
