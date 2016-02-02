goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__44448__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__44448 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44449__i = 0, G__44449__a = new Array(arguments.length -  0);
while (G__44449__i < G__44449__a.length) {G__44449__a[G__44449__i] = arguments[G__44449__i + 0]; ++G__44449__i;}
  args = new cljs.core.IndexedSeq(G__44449__a,0);
} 
return G__44448__delegate.call(this,args);};
G__44448.cljs$lang$maxFixedArity = 0;
G__44448.cljs$lang$applyTo = (function (arglist__44450){
var args = cljs.core.seq(arglist__44450);
return G__44448__delegate(args);
});
G__44448.cljs$core$IFn$_invoke$arity$variadic = G__44448__delegate;
return G__44448;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__44451__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__44451 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44452__i = 0, G__44452__a = new Array(arguments.length -  0);
while (G__44452__i < G__44452__a.length) {G__44452__a[G__44452__i] = arguments[G__44452__i + 0]; ++G__44452__i;}
  args = new cljs.core.IndexedSeq(G__44452__a,0);
} 
return G__44451__delegate.call(this,args);};
G__44451.cljs$lang$maxFixedArity = 0;
G__44451.cljs$lang$applyTo = (function (arglist__44453){
var args = cljs.core.seq(arglist__44453);
return G__44451__delegate(args);
});
G__44451.cljs$core$IFn$_invoke$arity$variadic = G__44451__delegate;
return G__44451;
})()
;

return null;
});
