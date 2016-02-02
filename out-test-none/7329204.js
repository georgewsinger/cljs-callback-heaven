goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11170__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11170 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11171__i = 0, G__11171__a = new Array(arguments.length -  0);
while (G__11171__i < G__11171__a.length) {G__11171__a[G__11171__i] = arguments[G__11171__i + 0]; ++G__11171__i;}
  args = new cljs.core.IndexedSeq(G__11171__a,0);
} 
return G__11170__delegate.call(this,args);};
G__11170.cljs$lang$maxFixedArity = 0;
G__11170.cljs$lang$applyTo = (function (arglist__11172){
var args = cljs.core.seq(arglist__11172);
return G__11170__delegate(args);
});
G__11170.cljs$core$IFn$_invoke$arity$variadic = G__11170__delegate;
return G__11170;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11173__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11173 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11174__i = 0, G__11174__a = new Array(arguments.length -  0);
while (G__11174__i < G__11174__a.length) {G__11174__a[G__11174__i] = arguments[G__11174__i + 0]; ++G__11174__i;}
  args = new cljs.core.IndexedSeq(G__11174__a,0);
} 
return G__11173__delegate.call(this,args);};
G__11173.cljs$lang$maxFixedArity = 0;
G__11173.cljs$lang$applyTo = (function (arglist__11175){
var args = cljs.core.seq(arglist__11175);
return G__11173__delegate(args);
});
G__11173.cljs$core$IFn$_invoke$arity$variadic = G__11173__delegate;
return G__11173;
})()
;

return null;
});
