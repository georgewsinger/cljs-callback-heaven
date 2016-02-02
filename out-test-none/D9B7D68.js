goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__54540__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__54540 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54541__i = 0, G__54541__a = new Array(arguments.length -  0);
while (G__54541__i < G__54541__a.length) {G__54541__a[G__54541__i] = arguments[G__54541__i + 0]; ++G__54541__i;}
  args = new cljs.core.IndexedSeq(G__54541__a,0);
} 
return G__54540__delegate.call(this,args);};
G__54540.cljs$lang$maxFixedArity = 0;
G__54540.cljs$lang$applyTo = (function (arglist__54542){
var args = cljs.core.seq(arglist__54542);
return G__54540__delegate(args);
});
G__54540.cljs$core$IFn$_invoke$arity$variadic = G__54540__delegate;
return G__54540;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__54543__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__54543 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54544__i = 0, G__54544__a = new Array(arguments.length -  0);
while (G__54544__i < G__54544__a.length) {G__54544__a[G__54544__i] = arguments[G__54544__i + 0]; ++G__54544__i;}
  args = new cljs.core.IndexedSeq(G__54544__a,0);
} 
return G__54543__delegate.call(this,args);};
G__54543.cljs$lang$maxFixedArity = 0;
G__54543.cljs$lang$applyTo = (function (arglist__54545){
var args = cljs.core.seq(arglist__54545);
return G__54543__delegate(args);
});
G__54543.cljs$core$IFn$_invoke$arity$variadic = G__54543__delegate;
return G__54543;
})()
;

return null;
});
