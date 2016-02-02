goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__241649__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__241649 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__241650__i = 0, G__241650__a = new Array(arguments.length -  0);
while (G__241650__i < G__241650__a.length) {G__241650__a[G__241650__i] = arguments[G__241650__i + 0]; ++G__241650__i;}
  args = new cljs.core.IndexedSeq(G__241650__a,0);
} 
return G__241649__delegate.call(this,args);};
G__241649.cljs$lang$maxFixedArity = 0;
G__241649.cljs$lang$applyTo = (function (arglist__241651){
var args = cljs.core.seq(arglist__241651);
return G__241649__delegate(args);
});
G__241649.cljs$core$IFn$_invoke$arity$variadic = G__241649__delegate;
return G__241649;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__241652__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__241652 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__241653__i = 0, G__241653__a = new Array(arguments.length -  0);
while (G__241653__i < G__241653__a.length) {G__241653__a[G__241653__i] = arguments[G__241653__i + 0]; ++G__241653__i;}
  args = new cljs.core.IndexedSeq(G__241653__a,0);
} 
return G__241652__delegate.call(this,args);};
G__241652.cljs$lang$maxFixedArity = 0;
G__241652.cljs$lang$applyTo = (function (arglist__241654){
var args = cljs.core.seq(arglist__241654);
return G__241652__delegate(args);
});
G__241652.cljs$core$IFn$_invoke$arity$variadic = G__241652__delegate;
return G__241652;
})()
;

return null;
});
