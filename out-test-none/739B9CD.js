goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12263__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12263 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12264__i = 0, G__12264__a = new Array(arguments.length -  0);
while (G__12264__i < G__12264__a.length) {G__12264__a[G__12264__i] = arguments[G__12264__i + 0]; ++G__12264__i;}
  args = new cljs.core.IndexedSeq(G__12264__a,0);
} 
return G__12263__delegate.call(this,args);};
G__12263.cljs$lang$maxFixedArity = 0;
G__12263.cljs$lang$applyTo = (function (arglist__12265){
var args = cljs.core.seq(arglist__12265);
return G__12263__delegate(args);
});
G__12263.cljs$core$IFn$_invoke$arity$variadic = G__12263__delegate;
return G__12263;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12266__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12266 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12267__i = 0, G__12267__a = new Array(arguments.length -  0);
while (G__12267__i < G__12267__a.length) {G__12267__a[G__12267__i] = arguments[G__12267__i + 0]; ++G__12267__i;}
  args = new cljs.core.IndexedSeq(G__12267__a,0);
} 
return G__12266__delegate.call(this,args);};
G__12266.cljs$lang$maxFixedArity = 0;
G__12266.cljs$lang$applyTo = (function (arglist__12268){
var args = cljs.core.seq(arglist__12268);
return G__12266__delegate(args);
});
G__12266.cljs$core$IFn$_invoke$arity$variadic = G__12266__delegate;
return G__12266;
})()
;

return null;
});
