goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__83139__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__83139 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__83140__i = 0, G__83140__a = new Array(arguments.length -  0);
while (G__83140__i < G__83140__a.length) {G__83140__a[G__83140__i] = arguments[G__83140__i + 0]; ++G__83140__i;}
  args = new cljs.core.IndexedSeq(G__83140__a,0);
} 
return G__83139__delegate.call(this,args);};
G__83139.cljs$lang$maxFixedArity = 0;
G__83139.cljs$lang$applyTo = (function (arglist__83141){
var args = cljs.core.seq(arglist__83141);
return G__83139__delegate(args);
});
G__83139.cljs$core$IFn$_invoke$arity$variadic = G__83139__delegate;
return G__83139;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__83142__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__83142 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__83143__i = 0, G__83143__a = new Array(arguments.length -  0);
while (G__83143__i < G__83143__a.length) {G__83143__a[G__83143__i] = arguments[G__83143__i + 0]; ++G__83143__i;}
  args = new cljs.core.IndexedSeq(G__83143__a,0);
} 
return G__83142__delegate.call(this,args);};
G__83142.cljs$lang$maxFixedArity = 0;
G__83142.cljs$lang$applyTo = (function (arglist__83144){
var args = cljs.core.seq(arglist__83144);
return G__83142__delegate(args);
});
G__83142.cljs$core$IFn$_invoke$arity$variadic = G__83142__delegate;
return G__83142;
})()
;

return null;
});
