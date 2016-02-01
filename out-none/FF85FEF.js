goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8649__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8649 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8650__i = 0, G__8650__a = new Array(arguments.length -  0);
while (G__8650__i < G__8650__a.length) {G__8650__a[G__8650__i] = arguments[G__8650__i + 0]; ++G__8650__i;}
  args = new cljs.core.IndexedSeq(G__8650__a,0);
} 
return G__8649__delegate.call(this,args);};
G__8649.cljs$lang$maxFixedArity = 0;
G__8649.cljs$lang$applyTo = (function (arglist__8651){
var args = cljs.core.seq(arglist__8651);
return G__8649__delegate(args);
});
G__8649.cljs$core$IFn$_invoke$arity$variadic = G__8649__delegate;
return G__8649;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8652__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8652 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8653__i = 0, G__8653__a = new Array(arguments.length -  0);
while (G__8653__i < G__8653__a.length) {G__8653__a[G__8653__i] = arguments[G__8653__i + 0]; ++G__8653__i;}
  args = new cljs.core.IndexedSeq(G__8653__a,0);
} 
return G__8652__delegate.call(this,args);};
G__8652.cljs$lang$maxFixedArity = 0;
G__8652.cljs$lang$applyTo = (function (arglist__8654){
var args = cljs.core.seq(arglist__8654);
return G__8652__delegate(args);
});
G__8652.cljs$core$IFn$_invoke$arity$variadic = G__8652__delegate;
return G__8652;
})()
;

return null;
});
