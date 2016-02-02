goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__24175__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__24175 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24176__i = 0, G__24176__a = new Array(arguments.length -  0);
while (G__24176__i < G__24176__a.length) {G__24176__a[G__24176__i] = arguments[G__24176__i + 0]; ++G__24176__i;}
  args = new cljs.core.IndexedSeq(G__24176__a,0);
} 
return G__24175__delegate.call(this,args);};
G__24175.cljs$lang$maxFixedArity = 0;
G__24175.cljs$lang$applyTo = (function (arglist__24177){
var args = cljs.core.seq(arglist__24177);
return G__24175__delegate(args);
});
G__24175.cljs$core$IFn$_invoke$arity$variadic = G__24175__delegate;
return G__24175;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__24178__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__24178 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24179__i = 0, G__24179__a = new Array(arguments.length -  0);
while (G__24179__i < G__24179__a.length) {G__24179__a[G__24179__i] = arguments[G__24179__i + 0]; ++G__24179__i;}
  args = new cljs.core.IndexedSeq(G__24179__a,0);
} 
return G__24178__delegate.call(this,args);};
G__24178.cljs$lang$maxFixedArity = 0;
G__24178.cljs$lang$applyTo = (function (arglist__24180){
var args = cljs.core.seq(arglist__24180);
return G__24178__delegate(args);
});
G__24178.cljs$core$IFn$_invoke$arity$variadic = G__24178__delegate;
return G__24178;
})()
;

return null;
});
