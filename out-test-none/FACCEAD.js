goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__34509__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__34509 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34510__i = 0, G__34510__a = new Array(arguments.length -  0);
while (G__34510__i < G__34510__a.length) {G__34510__a[G__34510__i] = arguments[G__34510__i + 0]; ++G__34510__i;}
  args = new cljs.core.IndexedSeq(G__34510__a,0);
} 
return G__34509__delegate.call(this,args);};
G__34509.cljs$lang$maxFixedArity = 0;
G__34509.cljs$lang$applyTo = (function (arglist__34511){
var args = cljs.core.seq(arglist__34511);
return G__34509__delegate(args);
});
G__34509.cljs$core$IFn$_invoke$arity$variadic = G__34509__delegate;
return G__34509;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__34512__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__34512 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34513__i = 0, G__34513__a = new Array(arguments.length -  0);
while (G__34513__i < G__34513__a.length) {G__34513__a[G__34513__i] = arguments[G__34513__i + 0]; ++G__34513__i;}
  args = new cljs.core.IndexedSeq(G__34513__a,0);
} 
return G__34512__delegate.call(this,args);};
G__34512.cljs$lang$maxFixedArity = 0;
G__34512.cljs$lang$applyTo = (function (arglist__34514){
var args = cljs.core.seq(arglist__34514);
return G__34512__delegate(args);
});
G__34512.cljs$core$IFn$_invoke$arity$variadic = G__34512__delegate;
return G__34512;
})()
;

return null;
});
