goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12686__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12686 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12687__i = 0, G__12687__a = new Array(arguments.length -  0);
while (G__12687__i < G__12687__a.length) {G__12687__a[G__12687__i] = arguments[G__12687__i + 0]; ++G__12687__i;}
  args = new cljs.core.IndexedSeq(G__12687__a,0);
} 
return G__12686__delegate.call(this,args);};
G__12686.cljs$lang$maxFixedArity = 0;
G__12686.cljs$lang$applyTo = (function (arglist__12688){
var args = cljs.core.seq(arglist__12688);
return G__12686__delegate(args);
});
G__12686.cljs$core$IFn$_invoke$arity$variadic = G__12686__delegate;
return G__12686;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12689__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12689 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12690__i = 0, G__12690__a = new Array(arguments.length -  0);
while (G__12690__i < G__12690__a.length) {G__12690__a[G__12690__i] = arguments[G__12690__i + 0]; ++G__12690__i;}
  args = new cljs.core.IndexedSeq(G__12690__a,0);
} 
return G__12689__delegate.call(this,args);};
G__12689.cljs$lang$maxFixedArity = 0;
G__12689.cljs$lang$applyTo = (function (arglist__12691){
var args = cljs.core.seq(arglist__12691);
return G__12689__delegate(args);
});
G__12689.cljs$core$IFn$_invoke$arity$variadic = G__12689__delegate;
return G__12689;
})()
;

return null;
});
